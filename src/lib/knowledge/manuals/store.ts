import { mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";

import {
  DIMENSIONS,
  EMBEDDING_MODEL,
  EXTRACTION_RECIPE,
  EMBEDDING_RECIPE,
  INDEX_VERSION,
  indexPath,
  sha256,
} from "./config";
import { redact } from "./layout";

export type PageStatus = "text" | "ocr" | "mixed" | "blank" | "review";
export type Passage = {
  page: number;
  section: string;
  kind: "prose" | "table" | "figure" | "code" | "catalog";
  text: string;
};
export type ManualInput = {
  source: string;
  checksum: string;
  title: string;
  language: string;
  release: string;
  format: "pdf" | "md";
  approved: boolean;
  pages: { page: number; status: PageStatus }[];
  passages: Passage[];
};
export type PageReview = {
  sha256: string;
  page: number;
  reason: string;
  text?: string;
  figure?: boolean;
};

export function openIndex(root: string, generation: string, writable = false) {
  const file = indexPath(root, generation);
  if (writable) mkdirSync(path.dirname(file), { recursive: true });
  const database = new DatabaseSync(file, {
    readOnly: !writable,
    enableForeignKeyConstraints: true,
    allowExtension: false,
    timeout: 5000,
  });
  if (writable) {
    database.exec(`
      PRAGMA journal_mode = WAL;
      PRAGMA synchronous = NORMAL;
      CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL) STRICT;
      CREATE TABLE IF NOT EXISTS documents (
        id TEXT PRIMARY KEY, source TEXT NOT NULL UNIQUE, checksum TEXT NOT NULL,
        title TEXT NOT NULL, language TEXT NOT NULL, release TEXT NOT NULL,
        format TEXT NOT NULL CHECK(format IN ('pdf','md')),
        approved INTEGER NOT NULL CHECK(approved IN (0,1)),
        recipe TEXT NOT NULL
      ) STRICT;
      CREATE TABLE IF NOT EXISTS source_history (
        id TEXT PRIMARY KEY, source TEXT NOT NULL, checksum TEXT NOT NULL
      ) STRICT;
      CREATE TABLE IF NOT EXISTS document_context (
        document TEXT PRIMARY KEY REFERENCES documents(id) ON DELETE CASCADE,
        module TEXT NOT NULL, country TEXT NOT NULL
      ) STRICT;
      CREATE TABLE IF NOT EXISTS pages (
        document TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
        page INTEGER NOT NULL CHECK(page > 0), status TEXT NOT NULL
          CHECK(status IN ('text','ocr','mixed','blank','review')),
        PRIMARY KEY(document, page)
      ) STRICT;
      CREATE TABLE IF NOT EXISTS page_reviews (
        document TEXT NOT NULL, page INTEGER NOT NULL, reason TEXT NOT NULL,
        PRIMARY KEY(document, page),
        FOREIGN KEY(document, page) REFERENCES pages(document, page) ON DELETE CASCADE
      ) STRICT;
      CREATE TABLE IF NOT EXISTS passages (
        id INTEGER PRIMARY KEY, document TEXT NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
        position INTEGER NOT NULL, page INTEGER NOT NULL, section TEXT NOT NULL,
        kind TEXT NOT NULL CHECK(kind IN ('prose','table','figure','code','catalog')),
        text TEXT NOT NULL, embedding_hash TEXT,
        UNIQUE(document, position),
        FOREIGN KEY(document, page) REFERENCES pages(document,page) ON DELETE CASCADE
      ) STRICT;
      CREATE INDEX IF NOT EXISTS passage_hash ON passages(embedding_hash);
      CREATE TABLE IF NOT EXISTS vectors (
        hash TEXT PRIMARY KEY, embedding BLOB NOT NULL CHECK(length(embedding) = ${DIMENSIONS * 4})
      ) STRICT;
      CREATE TABLE IF NOT EXISTS screened_vectors (
        hash TEXT PRIMARY KEY, screened_at TEXT NOT NULL
      ) STRICT;
      CREATE TABLE IF NOT EXISTS embedding_partitions (
        hash TEXT PRIMARY KEY, level INTEGER NOT NULL
      ) STRICT;
      CREATE VIRTUAL TABLE IF NOT EXISTS search USING fts5(
        text, heading, title, codes, tokenize = 'unicode61 remove_diacritics 2 tokenchars ''_'''
      );
      CREATE TRIGGER IF NOT EXISTS remove_search AFTER DELETE ON passages BEGIN
        DELETE FROM search WHERE rowid = old.id;
      END;
    `);
    const add = database.prepare("INSERT OR IGNORE INTO meta VALUES (?, ?)");
    add.run("indexVersion", String(INDEX_VERSION));
    add.run("model", EMBEDDING_MODEL);
    add.run("dimensions", String(DIMENSIONS));
    add.run("embeddingRecipe", EMBEDDING_RECIPE);
    database.exec(
      "INSERT OR IGNORE INTO source_history SELECT id, source, checksum FROM documents WHERE format = 'pdf'",
    );
  }
  try {
    if (
      readMeta(database, "indexVersion") !== String(INDEX_VERSION) ||
      readMeta(database, "model") !== EMBEDDING_MODEL ||
      readMeta(database, "dimensions") !== String(DIMENSIONS) ||
      readMeta(database, "embeddingRecipe") !== EMBEDDING_RECIPE
    )
      throw new Error("Esquema o configuración vectorial del RAG incompatible.");
    database.exec("PRAGMA trusted_schema = OFF");
    // FTS5 is not usable from triggers in trusted_schema=OFF. Only the local
    // writer opens this connection with trusted schema enabled.
    if (writable) database.exec("PRAGMA trusted_schema = ON");
    return database;
  } catch (error) {
    database.close();
    throw error;
  }
}

export function readMeta(database: DatabaseSync, name: string) {
  const row = database.prepare("SELECT value FROM meta WHERE key = ?").get(name);
  return typeof row?.value === "string" ? row.value : null;
}

export function writeMeta(database: DatabaseSync, name: string, value: string) {
  database.prepare("INSERT OR REPLACE INTO meta VALUES (?, ?)").run(name, value);
}

export function transaction<T>(database: DatabaseSync, operation: () => T): T {
  database.exec("BEGIN IMMEDIATE");
  try {
    const result = operation();
    database.exec("COMMIT");
    return result;
  } catch (error) {
    database.exec("ROLLBACK");
    throw error;
  }
}

const taggedTokens = (text: string) =>
  [
    ...new Set(
      text.match(/\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\b|\b(?:SP|PNSP|BNR|RDL|M4|LN)\w*[0-9]\w*\b/g) ??
        [],
    ),
  ].join(" ");

export const documentId = (source: string, checksum: string) =>
  `rag-${sha256(`${source}\0${checksum}`)}`;

export function publishManual(database: DatabaseSync, document: ManualInput) {
  const id = documentId(document.source, document.checksum);
  const indexTitle = `${document.title} ${document.source.replaceAll(/[/_.-]/g, " ")} ${document.release}`;
  transaction(database, () => {
    const reviews = database
      .prepare(
        "SELECT r.page, r.reason, p.status FROM page_reviews r JOIN pages p USING(document, page) WHERE r.document = ?",
      )
      .all(id);
    const reviewedPages = new Map(reviews.map((review) => [Number(review.page), review]));
    const reviewedPassages = database
      .prepare(
        "SELECT p.page, p.section, p.kind, p.text FROM passages p JOIN page_reviews r USING(document, page) WHERE p.document = ? ORDER BY p.position",
      )
      .all(id)
      .map((passage) => ({
        page: Number(passage.page),
        section: String(passage.section),
        kind: String(passage.kind),
        text: String(passage.text),
      }));
    database.prepare("DELETE FROM documents WHERE source = ?").run(document.source);
    database
      .prepare("INSERT INTO documents VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)")
      .run(
        id,
        document.source,
        document.checksum,
        document.title,
        document.language,
        document.release,
        document.format,
        Number(document.approved),
        EXTRACTION_RECIPE,
      );
    if (document.format === "pdf") {
      database
        .prepare("INSERT OR IGNORE INTO source_history VALUES (?, ?, ?)")
        .run(id, document.source, document.checksum);
    }
    const addPage = database.prepare("INSERT INTO pages VALUES (?, ?, ?)");
    for (const page of document.pages)
      addPage.run(id, page.page, reviewedPages.get(page.page)?.status ?? page.status);
    const addReview = database.prepare("INSERT INTO page_reviews VALUES (?, ?, ?)");
    for (const [page, review] of reviewedPages) addReview.run(id, page, String(review.reason));
    const add = database.prepare(
      "INSERT INTO passages(document, position, page, section, kind, text, embedding_hash) VALUES (?, ?, ?, ?, ?, ?, ?)",
    );
    const fts = database.prepare(
      "INSERT INTO search(rowid, text, heading, title, codes) VALUES (?,?,?,?,?)",
    );
    const passages = [
      ...document.passages.filter(({ page }) => !reviewedPages.has(page)),
      ...reviewedPassages,
    ].sort((left, right) => left.page - right.page);
    for (const [position, passage] of passages.entries()) {
      const input = embeddingText(document.title, document.release, passage.section, passage.text);
      const { lastInsertRowid } = add.run(
        id,
        position,
        passage.page,
        passage.section,
        passage.kind,
        passage.text,
        document.approved ? sha256(input) : null,
      );
      fts.run(
        lastInsertRowid,
        passage.text,
        passage.section,
        indexTitle,
        taggedTokens(`${passage.text} ${indexTitle}`),
      );
    }
  });
}

export const embeddingText = (title: string, release: string, section: string, text: string) =>
  redact([title, release, section, text].filter(Boolean).join("\n"));

export function reconcileRedaction(database: DatabaseSync) {
  transaction(database, () => {
    const update = database.prepare(
      "UPDATE passages SET text = ?, section = ?, embedding_hash = ? WHERE id = ?",
    );
    const updateSearch = database.prepare(
      "UPDATE search SET text = ?, heading = ? WHERE rowid = ?",
    );
    for (const row of database
      .prepare(
        "SELECT p.id, p.text, p.section, p.embedding_hash, d.title, d.release FROM passages p JOIN documents d ON d.id = p.document WHERE d.approved=1",
      )
      .all()) {
      const text = redact(String(row.text));
      const section = redact(String(row.section));
      const hash = sha256(embeddingText(String(row.title), String(row.release), section, text));
      if (text === row.text && section === row.section && hash === row.embedding_hash) continue;
      update.run(text, section, hash, Number(row.id));
      updateSearch.run(text, section, Number(row.id));
    }
  });
}

export function refreshDocumentContext(database: DatabaseSync) {
  const sample = database.prepare(
    "SELECT text FROM passages WHERE document = ? AND kind IN ('prose','table') AND length(text) > 220 ORDER BY position LIMIT 12",
  );
  const update = database.prepare("UPDATE documents SET language = ? WHERE id = ?");
  const save = database.prepare("INSERT OR REPLACE INTO document_context VALUES (?, ?, ?)");
  transaction(database, () => {
    for (const row of database.prepare("SELECT id, source, title FROM documents").all()) {
      const id = String(row.id);
      const text = sample
        .all(id)
        .map((part) => String(part.text))
        .join(" ")
        .toLowerCase();
      const es = (text.match(/\b(?:los|las|del|para|puede|mediante|además)\b/g) ?? []).length;
      const en = (text.match(/\b(?:the|and|with|you|can|this|will)\b/g) ?? []).length;
      const pt = (text.match(/\b(?:não|são|para|pelo|pode|você|uma|dos)\b/g) ?? []).length;
      const language =
        Math.max(es, en, pt) < 3 ? "und" : es >= en && es >= pt ? "es" : en >= pt ? "en" : "pt";
      const directories = String(row.source).split("/").slice(1, -1);
      const module = directories.filter((part) => /^[\p{L}][\p{L}\s-]+$/u.test(part)).at(-1) ?? "";
      const title = String(row.title);
      const explicit = title + " " + text.slice(0, 2700);
      const country = /\b(?:portugal|segurança social portuguesa)\b/i.test(explicit)
        ? "PT"
        : /\b(?:españa|territorios forales vascos|seguridad social española)\b/i.test(explicit)
          ? "ES"
          : /\b(?:méxico|mexico|imss)\b/i.test(explicit)
            ? "MX"
            : "";
      update.run(language, id);
      save.run(id, module, country);
    }
  });
}

export function applyPageReviews(database: DatabaseSync, reviews: readonly PageReview[]) {
  if (!reviews.length) return;
  transaction(database, () => {
    const find = database.prepare(
      "SELECT id, title, release, approved, source FROM documents WHERE checksum = ? AND format = 'pdf'",
    );
    const update = database.prepare(
      "UPDATE pages SET status = ? WHERE document = ? AND page = ? AND (status = 'review' OR (status <> 'blank' AND NOT EXISTS (SELECT 1 FROM passages WHERE document=pages.document AND page=pages.page)))",
    );
    const audit = database.prepare("INSERT INTO page_reviews VALUES (?, ?, ?)");
    const deletePassages = database.prepare("DELETE FROM passages WHERE document = ? AND page = ?");
    const add = database.prepare(
      "INSERT INTO passages(document, position, page, section, kind, text, embedding_hash) VALUES (?, (SELECT coalesce(max(position),0)+1 FROM passages WHERE document=?), ?, ?, ?, ?, ?)",
    );
    const fts = database.prepare(
      "INSERT INTO search(rowid, text, heading, title, codes) VALUES (?,?,?,?,?)",
    );
    for (const review of reviews) {
      const rows = find.all(review.sha256);
      if (!rows.length) throw new Error("La revisión no corresponde a un PDF del inventario.");
      for (const row of rows) {
        const id = String(row.id);
        if (
          !update.run(review.text ? (review.figure ? "mixed" : "text") : "blank", id, review.page)
            .changes
        )
          continue;
        audit.run(id, review.page, review.reason);
        deletePassages.run(id, review.page);
        if (!review.text) continue;
        const text = redact(review.text);
        const title = String(row.title);
        const hash = row.approved
          ? sha256(embeddingText(title, String(row.release), title, text))
          : null;
        const position = add.run(
          id,
          id,
          review.page,
          title,
          review.figure ? "figure" : "prose",
          text,
          hash,
        ).lastInsertRowid;
        fts.run(position, text, title, String(row.source), taggedTokens(text));
      }
    }
  });
}

export function pendingVectors(database: DatabaseSync, limit: number) {
  return database
    .prepare(`
    SELECT p.embedding_hash AS hash, min(p.id) AS passage, d.title, d.release, p.section, p.text, coalesce(q.level,0) AS level
      FROM passages p JOIN documents d ON d.id = p.document
      LEFT JOIN embedding_partitions q ON q.hash=p.embedding_hash
     WHERE p.embedding_hash IS NOT NULL
       AND NOT EXISTS (SELECT 1 FROM vectors v WHERE v.hash = p.embedding_hash)
       AND NOT EXISTS (SELECT 1 FROM screened_vectors s WHERE s.hash = p.embedding_hash)
     GROUP BY p.embedding_hash ORDER BY level, passage LIMIT ?
  `)
    .all(limit)
    .map((row) => ({
      hash: String(row.hash),
      level: Number(row.level),
      input: embeddingText(
        String(row.title),
        String(row.release),
        String(row.section),
        String(row.text),
      ),
    }));
}

export function deferEmbeddingBatch(
  database: DatabaseSync,
  items: readonly { hash: string; level: number }[],
) {
  transaction(database, () => {
    const update = database.prepare("INSERT OR REPLACE INTO embedding_partitions VALUES (?,?)");
    for (const { hash, level } of items) update.run(hash, level + 1);
  });
}

export function recordScreenedVector(database: DatabaseSync, hash: string) {
  database
    .prepare("INSERT OR IGNORE INTO screened_vectors VALUES (?, ?)")
    .run(hash, new Date().toISOString());
}

export function saveVectors(
  database: DatabaseSync,
  items: readonly { hash: string }[],
  vectors: readonly Float32Array[],
) {
  if (items.length !== vectors.length) throw new Error("Faltan vectores en el lote.");
  transaction(database, () => {
    const insert = database.prepare("INSERT OR IGNORE INTO vectors VALUES (?, ?)");
    for (const [position, item] of items.entries()) {
      const vector = vectors[position];
      if (!vector || vector.length !== DIMENSIONS)
        throw new Error("Vector de dimensiones inesperadas.");
      insert.run(item.hash, new Uint8Array(vector.buffer, vector.byteOffset, vector.byteLength));
    }
  });
}

export function indexCounts(database: DatabaseSync) {
  const count = (sql: string) => Number(database.prepare(sql).get()?.n);
  return {
    documents: count("SELECT count(*) AS n FROM documents"),
    pdfs: count("SELECT count(*) AS n FROM documents WHERE format = 'pdf'"),
    pages: count(
      "SELECT count(*) AS n FROM pages JOIN documents ON id = document WHERE format = 'pdf'",
    ),
    pagesWithOcr: count("SELECT count(*) AS n FROM pages WHERE status IN ('ocr','mixed')"),
    blank: count("SELECT count(*) AS n FROM pages WHERE status = 'blank'"),
    review: count("SELECT count(*) AS n FROM pages WHERE status = 'review'"),
    contentWithoutPassage: count(
      "SELECT count(*) AS n FROM pages p WHERE p.status IN ('text','ocr','mixed') AND NOT EXISTS (SELECT 1 FROM passages q WHERE q.document=p.document AND q.page=p.page)",
    ),
    passages: count("SELECT count(*) AS n FROM passages"),
    eligible: count("SELECT count(*) AS n FROM passages WHERE embedding_hash IS NOT NULL"),
    vectorized: count(
      "SELECT count(*) AS n FROM passages p WHERE EXISTS (SELECT 1 FROM vectors v WHERE v.hash = p.embedding_hash)",
    ),
    screened: count(
      "SELECT count(*) AS n FROM passages p WHERE EXISTS (SELECT 1 FROM screened_vectors s WHERE s.hash = p.embedding_hash)",
    ),
    vectors: count("SELECT count(*) AS n FROM vectors"),
  };
}

export function assertComplete(database: DatabaseSync) {
  const counts = indexCounts(database);
  if (
    !counts.pdfs ||
    !counts.passages ||
    !counts.vectorized ||
    counts.review ||
    counts.contentWithoutPassage ||
    counts.eligible !== counts.vectorized + counts.screened
  ) {
    throw new Error("El candidato RAG tiene páginas o embeddings pendientes.");
  }
  if (Number(readMeta(database, "inventoryCount")) !== counts.documents) {
    throw new Error("El índice RAG no coincide con el inventario de archivos.");
  }
  if (
    database.prepare("PRAGMA integrity_check").get()?.integrity_check !== "ok" ||
    database.prepare("PRAGMA foreign_key_check").get() ||
    Number(database.prepare("SELECT count(*) AS n FROM search").get()?.n) !== counts.passages
  )
    throw new Error("El índice RAG no supera la comprobación de integridad.");
  return counts;
}
