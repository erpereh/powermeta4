import { randomUUID } from "node:crypto";
import { lstat, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { backup, DatabaseSync } from "node:sqlite";

import { z } from "zod";

import {
  EXTRACTION_RECIPE,
  indexPath,
  originalPath,
  readPointer,
  sha256,
  writePointer,
} from "./config";
import { embedTexts, getEmbeddingQuota, RagEmbeddingError } from "./embedding";
import { catalogPassages, hasBrokenPdfEncoding, redact } from "./layout";
import { createOcrLanguageDirectory, createPdfReader } from "./pdf";
import {
  applyPageReviews,
  deferEmbeddingBatch,
  indexCounts,
  openIndex,
  pendingVectors,
  publishManual,
  reconcileRedaction,
  recordScreenedVector,
  refreshDocumentContext,
  saveVectors,
  transaction,
  writeMeta,
  type ManualInput,
} from "./store";

const reviewSchema = z
  .array(
    z.object({
      sha256: z.string().regex(/^[a-f0-9]{64}$/),
      page: z.number().int().positive(),
      reason: z.string().min(10),
      text: z.string().trim().min(15).optional(),
      figure: z.boolean().optional(),
    }),
  )
  .default([]);

type File = { source: string; file: string; format: "pdf" | "md" };

export async function withKnowledgeWriter<T>(root: string, operation: () => Promise<T>) {
  await mkdir(root, { recursive: true });
  const lock = path.join(root, "writer.sqlite");
  const database = new DatabaseSync(lock, { timeout: 500, allowExtension: false });
  try {
    try {
      database.exec("BEGIN IMMEDIATE");
    } catch {
      throw new Error("Otra operación está escribiendo en el directorio RAG.");
    }
    try {
      return await operation();
    } finally {
      database.exec("ROLLBACK");
    }
  } finally {
    database.close();
  }
}

const errorCode = (error: unknown) =>
  error instanceof Error && "code" in error ? error.code : null;

async function listCorpus(root: string): Promise<File[]> {
  const results: File[] = [];
  const visit = async (directory: string, prefix = "") => {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const file = path.join(directory, entry.name);
      const source = prefix ? prefix + "/" + entry.name : entry.name;
      if (entry.isDirectory() && !entry.isSymbolicLink()) await visit(file, source);
      else {
        const extension = path.extname(entry.name).toLowerCase();
        const format = extension === ".pdf" ? "pdf" : extension === ".md" ? "md" : null;
        if (!entry.isFile() || !format)
          throw new Error("Entrada sin lector autorizado en el corpus: " + source);
        results.push({ source, file, format });
      }
    }
  };
  await visit(root);
  if (!results.length) throw new Error("El corpus está vacío.");
  return results.sort((a, b) => a.source.localeCompare(b.source, "es"));
}

function fileMetadata(file: File, checksum: string): Omit<ManualInput, "pages" | "passages"> {
  const title = redact(
    path.posix
      .basename(file.source, path.posix.extname(file.source))
      .replaceAll("_", " ")
      .replace(/([a-záéíóúñ])([A-ZÁÉÍÓÚÑ])/gu, "$1 $2"),
  );
  return {
    source: file.source,
    checksum,
    title,
    format: file.format,
    language: /(?:Installation Guide|Unicode Configuration)/i.test(title) ? "en" : "und",
    release: [
      ...new Set(
        file.source.match(
          /(?:PNSP[A-Z]?\d{5}_HF\d{3}|SP\d{5}SP\d{3}|Tec\d\.\d{2}\.\d{3}_SP\d{3})/gi,
        ) ?? [],
      ),
    ].join(" "),
    approved: file.format === "pdf" && file.source.startsWith("oficiales/"),
  };
}

async function stageCandidate(root: string, fresh: boolean) {
  const active = await readPointer(root, "active");
  const candidate = await readPointer(root, "candidate");
  if (candidate && active !== candidate && !fresh) return candidate;
  const id = new Date().toISOString().slice(0, 10) + "-" + randomUUID();
  if (active && !fresh) {
    const destination = indexPath(root, id);
    await mkdir(path.dirname(destination), { recursive: true });
    const from = openIndex(root, active);
    try {
      await backup(from, destination);
    } finally {
      from.close();
    }
  }
  await writePointer(root, "candidate", id);
  return id;
}

export async function ingestCorpus(options: {
  root: string;
  source: string;
  lexical: boolean;
  fresh: boolean;
  vectorsOnly: boolean;
  reviewFile?: string;
  maxRequests?: number;
  workers: number;
  log: (line: string) => void;
}) {
  const { root, log } = options;
  return withKnowledgeWriter(root, async () => {
    const generation = await stageCandidate(root, options.fresh);
    const database = openIndex(root, generation, true);
    let errors = 0;
    let vectorFailure: string | null = null;
    let retryAt: string | null = null;
    let quotaPaused = false;
    try {
      log("Generación candidata " + generation);
      if (!options.vectorsOnly) {
        const files = await listCorpus(options.source);
        const inventory = new Map<string, string>();
        await mkdir(path.join(root, "originals"), { recursive: true });
        writeMeta(database, "validatedAt", "");
        const queue = files.entries();
        const find = database.prepare(
          "SELECT id FROM documents WHERE source = ? AND checksum = ? AND recipe = ? AND approved = ?",
        );
        const damagedDocuments = new Set(
          database
            .prepare(`SELECT document, text FROM passages
              WHERE text GLOB '*[' || char(128) || '-' || char(159) || ']*'`)
            .all()
            .filter(({ text }) => hasBrokenPdfEncoding(String(text)))
            .map(({ document }) => String(document)),
        );
        let done = 0;
        const languages = await createOcrLanguageDirectory();
        try {
          await Promise.all(
            Array.from({ length: options.workers }, async () => {
              const reader = createPdfReader(languages.directory);
              try {
                for (const [, file] of queue) {
                  try {
                    const bytes = new Uint8Array(await readFile(file.file));
                    const checksum = sha256(bytes);
                    inventory.set(file.source, checksum);
                    const metadata = fileMetadata(file, checksum);
                    const current = find.get(
                      file.source,
                      checksum,
                      EXTRACTION_RECIPE,
                      Number(metadata.approved),
                    );
                    if (!current || damagedDocuments.has(String(current.id))) {
                      const manual =
                        file.format === "pdf"
                          ? await reader.read(bytes, metadata)
                          : {
                              ...metadata,
                              pages: [{ page: 1, status: "text" as const }],
                              passages: catalogPassages(new TextDecoder().decode(bytes)),
                            };
                      if (file.format === "pdf") {
                        const destination = originalPath(root, checksum);
                        try {
                          await lstat(destination);
                        } catch (error) {
                          if (errorCode(error) !== "ENOENT") throw error;
                          await writeFile(destination, bytes, { flag: "wx" }).catch(
                            (error: unknown) => {
                              if (errorCode(error) !== "EEXIST") throw error;
                            },
                          );
                        }
                      }
                      publishManual(database, manual);
                    }
                  } catch (error) {
                    errors += 1;
                    log(
                      "Error de extracción en " +
                        file.source +
                        " — " +
                        (error instanceof Error ? error.message : "error desconocido"),
                    );
                  }
                  done += 1;
                  if (done % 20 === 0 || done === files.length)
                    log("Archivos revisados " + done + "/" + files.length);
                }
              } finally {
                await reader.close();
              }
            }),
          );
        } finally {
          await languages.close();
        }
        if (!errors && inventory.size === files.length) {
          transaction(database, () => {
            const remove = database.prepare("DELETE FROM documents WHERE source = ?");
            for (const row of database.prepare("SELECT source FROM documents").all()) {
              if (!inventory.has(String(row.source))) remove.run(String(row.source));
            }
            writeMeta(database, "inventoryCount", String(files.length));
            writeMeta(
              database,
              "inventoryHash",
              sha256(JSON.stringify([...inventory].sort(([a], [b]) => a.localeCompare(b, "es")))),
            );
          });
        }
      }

      if (options.reviewFile && !errors) {
        const reviews = reviewSchema.parse(JSON.parse(await readFile(options.reviewFile, "utf8")));
        applyPageReviews(database, reviews);
        writeMeta(database, "validatedAt", "");
      }
      if (!errors) {
        reconcileRedaction(database);
        refreshDocumentContext(database);
      }
      if (!options.lexical && !errors && pendingVectors(database, 1).length > 0) {
        let quota = await getEmbeddingQuota();
        const requestLimit = options.maxRequests ?? Infinity;
        let remaining = quota?.remaining ?? null;
        let requests = 0;
        let written = 0;
        if (quota) log("Ingesta con la clave de embeddings " + quota.slot);
        while (requests < requestLimit) {
          const batch = pendingVectors(database, 2048);
          if (!batch.length) break;
          if (quota && requests > 0 && (requests % 5 === 0 || remaining === 0)) {
            const previous = quota.slot;
            quota = await getEmbeddingQuota(previous);
            remaining = quota?.remaining ?? null;
            if (quota && quota.slot !== previous)
              log("Ingesta con la clave de embeddings " + quota.slot);
          }
          if (!quota) {
            quotaPaused = true;
            break;
          }
          const slot = quota.slot;
          let bytes = 0;
          const level = batch[0]?.level ?? 0;
          const capacity = Math.max(1, Math.floor(2048 / 2 ** level));
          const filtered = batch.slice(0, capacity).filter(({ input, level: itemLevel }) => {
            if (level !== itemLevel) return false;
            bytes += Buffer.byteLength(input) + 16;
            return bytes < 2_650_000;
          });
          if (!filtered.length)
            throw new Error("El primer fragmento supera el tamaño admitido por el lote.");
          try {
            requests += 1;
            if (remaining !== null) remaining = Math.max(0, remaining - 1);
            const vectors = await embedTexts(
              root,
              filtered.map(({ input }) => input),
              "document",
              { slot },
            );
            saveVectors(database, filtered, vectors);
            written += vectors.length;
            log(
              "Vectores guardados en esta ejecución " +
                written +
                " en " +
                requests +
                " lotes intentados.",
            );
          } catch (error) {
            if (!(error instanceof RagEmbeddingError)) throw error;
            if (error.kind === "account-quota" || error.kind === "credential") {
              quota = await getEmbeddingQuota(slot + 1);
              remaining = quota?.remaining ?? null;
              if (quota) log("Ingesta con la clave de embeddings " + quota.slot);
              else quotaPaused = true;
              continue;
            }
            if ((error.kind === "size" || error.kind === "screened") && filtered.length > 1) {
              deferEmbeddingBatch(database, filtered);
              continue;
            }
            const blocked = filtered[0];
            if (error.kind === "screened" && blocked) {
              recordScreenedVector(database, blocked.hash);
              log(
                "Fragmento reservado para consulta local por el filtro del proveedor. Huella " +
                  blocked.hash.slice(0, 12),
              );
              continue;
            }
            vectorFailure = error.message;
            quotaPaused = error.kind === "quota";
            retryAt = error.retryAt ? new Date(error.retryAt).toISOString() : null;
            break;
          }
        }
        if (!vectorFailure && pendingVectors(database, 1).length)
          vectorFailure = quotaPaused
            ? "Quedan vectores pendientes para la siguiente ventana de cuota."
            : "La ejecución terminó con vectores pendientes.";
      }
      database.exec(
        "DELETE FROM vectors WHERE NOT EXISTS (SELECT 1 FROM passages WHERE embedding_hash = vectors.hash)",
      );
      database.exec(
        "DELETE FROM screened_vectors WHERE NOT EXISTS (SELECT 1 FROM passages WHERE embedding_hash = screened_vectors.hash)",
      );
      database.exec(
        "DELETE FROM embedding_partitions WHERE NOT EXISTS (SELECT 1 FROM passages WHERE embedding_hash = embedding_partitions.hash) OR EXISTS (SELECT 1 FROM vectors WHERE hash=embedding_partitions.hash) OR EXISTS (SELECT 1 FROM screened_vectors WHERE hash=embedding_partitions.hash)",
      );
      database.exec("PRAGMA wal_checkpoint(TRUNCATE)");
      const counts = indexCounts(database);
      return { generation, errors, vectorFailure, retryAt, quotaPaused, ...counts };
    } finally {
      database.close();
    }
  });
}
