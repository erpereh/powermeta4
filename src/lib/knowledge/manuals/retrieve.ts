import "server-only";

import { readFile } from "node:fs/promises";
import type { DatabaseSync } from "node:sqlite";

import { normalizeUsersSearch } from "@/lib/meta4/users/list-filter";

import { DIMENSIONS, knowledgeRoot, readPointer, sha256 } from "./config";
import { embedTexts, RagEmbeddingError } from "./embedding";
import { redact } from "./layout";
import { openIndex } from "./store";
import { rankVectors } from "./vectors";

const STOP = new Set(
  (
    "para como que qué cual cuáles cuando dónde este esto estas esos desde hasta " +
    "con por del los las una uno unos unas sus sobre entre acerca puede puedo muestran dime quiero necesito saber " +
    "peoplenet meta4 power meta dónde tiene tienen datos app aplicación funciona funcionar directamente " +
    "ejemplo pasos manual documentación documento guia guía segun según explicame explica indica describe " +
    "datos contenido configuracion configuración configure how what where which a the and when is do does in on for"
  ).split(/\s+/),
);
const PRODUCT =
  /\b(?:meta4(?:objects?)?|powermeta4|peoplenet|ln4|ram-?dl|portafirmas|m4benchmark(?:\.log)?|sistema (?:red|delta)|cloud hr|service packs?|sse-ssm)\b/;
const PRODUCT_ID =
  /\b(?:sp\d{5}sp\d{3}|pnsp\w+_hf\d{3}|(?:m4[a-z]*|sco|srt[cp]|srsp|sntc|ssp|csp|cyc|std)_[a-z0-9_]+)\b/;
const PRODUCT_FEATURE =
  /\b(?:gestion de personal|periodo del rh|catalogo de (?:direccion por objetivos|objetivos|formacion)|ciclo de (?:formacion|compensacion salarial)|reglas de gestion del tiempo|herramienta busqueda|servidor de presentacion web|plantillas? de consulta de nomina)\b|conocimientos\+/;
const PRODUCT_MODULE =
  /\b(?:modulo|sistema) (?:de )?(?:formacion|beneficios|seleccion|gta|delta)\b/;
const PRODUCT_FILE =
  /\b(?:fichero|segmento) (?:fdi|fie|afi)\b|\b(?:traspaso|actualizacion) de epsv\b/;
const INTERNAL_REFERENCE =
  /\b(?:manuales internos|documentacion interna|(?:segun|en|busca en|consulta) (?:(?:los manuales|la documentacion)(?! de\b)|las fuentes internas|el rag)|segun (?:el|la) (?:manual|guia)(?=[.!?]|$))\b/;
const REFERENCE = /\b(?:manual(?:es)?|guia|documentacion|tabla|diagrama|figura)\b/;
const DOCUMENTED_TOPIC =
  /\b(?:seleccion|beneficios|nominas?|plantillas?|gta|adb|gestion del tiempo|prevencion|riesgos laborales|formacion|organizacion|disenador del modelo de datos|firma digital|impresos legales|retenciones judiciales|depuracion|integracion ldap)\b/;
const PROCEDURE =
  /\b(?:como (?:se|puedo|hago|hacer|dar|doy|registrar|tramitar)|(?:al|para) configurar|paso a paso|procedimiento|pasos para)\b/;
const HR_PROCEDURE =
  /\b(?:alta (?:de|a) (?:un(?:a)? )?(?:persona|emplead[oa]|trabajador[oa])|da(?:r)? de alta (?:a )?(?:un(?:a)? )?(?:persona|emplead[oa]|trabajador[oa])|plan(?:es)? de (?:beneficios|formacion)|consult\w* (?:un(?:a)? |el |la )?(?:nomina|sueldo)|ciclo de (?:formacion|compensacion salarial)|evaluacion del personal)\b/;
const IDENTIFIER =
  /\b[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)+\b|\b(?:SP|PNSP|BNR|RDL|M4|LN)\w*[0-9]\w*\b|\b(?:LN4|RAMDL|SAML|SOAP|REST|SSE|SSM|FDI|GTA|AFI|XML|LDAP|RNT|CRA|IRPF|RGPD|ADF|ADB|ESS|FIE)\b/gi;
const SHORT_FOLLOWUP =
  /^(?:entonces|despues(?: que hago)?|en la app|en que (?:pantalla|menu|apartado|version)(?: se (?:hace|configura|cambia|activa|ve))?|donde (?:se (?:hace|configura|cambia|activa|ve)|lo veo)|puedes (?:ampliar|detallar|resumir|explicar mejor)|(?:un |otro )?ejemplo)[\s?¡!.,:]*$/;
const PRACTICAL_FOLLOWUP = /^si (?:ya |la persona |el empleado )/;
const PRIOR_REFERENCE =
  /\b(?:(?:en|con|para) (?:ese|esa) (?:proceso|caso|pantalla|version)|(?:ese|dicho) proceso|eso|aquello|ese mismo|lo anterior|dicho caso)\b/;
const TOPIC_CHANGE = /\b(?:cambiando de tema|cambiamos de tema|otra cosa|ahora hablemos de)\b/;
const SOCIAL =
  /^[¡¿\s]*(?:hola|buenos dias|buenas(?: tardes| noches)?|(?:muchas )?gracias(?:[,\s]+(?:eso era todo|por tu ayuda))?|adios|hasta luego)(?:[\s,!]+powermeta4)?[\s.!?¡¿]*$/;
const ASSISTANT_INTRODUCTION =
  /^[¡¿\s]*(?:(?:hola|buenas|powermeta4)[,.!?\s]+[¿¡\s]*)?(?:quien eres(?: y que puedes hacer(?: en powermeta4)?)?|como te llamas|cual es tu nombre|presentate|que puedes hacer|eres (?:el )?asistente de powermeta4)(?:[\s,!]+powermeta4)?[\s.!?¡¿]*$/;
const REWRITE =
  /^[¿¡\s]*(?:y\s+)?(?:(?:me )?puedes\s+)?(?:traduce|traducir|reescribe|reescribir|reformula(?:r)?|corrige|corregir)\b/;
const DRAFT =
  /^[¿¡\s]*(?:y\s+)?(?:(?:me )?puedes\s+)?(?:redacta(?:r)?|escribe|escribir|inventa(?:r)?) (?:un(?:a)? )?(?:correo|mensaje|carta|historia|poema)\b/;

function requiresManuals(input: string) {
  if (SOCIAL.test(input) || ASSISTANT_INTRODUCTION.test(input)) return false;
  if (!REFERENCE.test(input) && !INTERNAL_REFERENCE.test(input)) {
    if (REWRITE.test(input) || (DRAFT.test(input) && !PROCEDURE.test(input))) return false;
  }
  return (
    PRODUCT.test(input) ||
    PRODUCT_ID.test(input) ||
    PRODUCT_FEATURE.test(input) ||
    PRODUCT_MODULE.test(input) ||
    PRODUCT_FILE.test(input) ||
    INTERNAL_REFERENCE.test(input) ||
    (REFERENCE.test(input) && DOCUMENTED_TOPIC.test(input)) ||
    (PROCEDURE.test(input) && HR_PROCEDURE.test(input))
  );
}

export const WORDS = (value: string) =>
  value
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .match(/[\p{L}\p{N}_]+/gu) ?? [];
const termsOf = (value: string) =>
  [...new Set(WORDS(value))].filter((word) => word.length >= 3 && !STOP.has(word));
const TERM_VARIANTS: Readonly<Record<string, readonly string[]>> = {
  inicializacion: ["init", "inicializar"],
  inicializar: ["init", "inicializacion"],
  bucles: ["bucle", "wend", "until"],
};
const termVariants = (term: string): readonly string[] => {
  const infinitive = /^([a-z]{3,}(?:ar|er|ir))(?:lo|la|los|las)$/.exec(term)?.[1];
  return TERM_VARIANTS[term] ?? (infinitive ? [infinitive] : []);
};
const hasTerm = (vocabulary: ReadonlySet<string>, term: string) =>
  vocabulary.has(term) || termVariants(term).some((variant) => vocabulary.has(variant));
const exactOf = (value: string) =>
  [...new Set((value.match(IDENTIFIER) ?? []).flatMap(WORDS))].slice(0, 10);

export function searchQuestion(current: string, previous?: string) {
  const input = current.trim().slice(0, 1600);
  const normalized = normalizeUsersSearch(input);
  const question = redact(input);
  const followupText = normalized.replace(/^[¿¡\s]+/, "").replace(/^y[\s,]+/, "");
  const continuesTopic =
    !SOCIAL.test(normalized) &&
    !TOPIC_CHANGE.test(normalized) &&
    !REWRITE.test(normalized) &&
    (SHORT_FOLLOWUP.test(followupText) ||
      PRACTICAL_FOLLOWUP.test(followupText) ||
      PRIOR_REFERENCE.test(normalized));
  const prior =
    continuesTopic && previous && requiresManuals(normalizeUsersSearch(previous))
      ? redact(previous.trim().slice(0, 850))
      : "";
  return {
    question,
    text: prior ? prior + "\n" + question : question,
    needsLiveData:
      (/\bque datos (?:tendran|figuraran|constaran)\b/.test(normalized) &&
        /\b(?:mi|nuestra) (?:empresa|sociedad|instalacion)\b/.test(normalized) &&
        /\b(?:proximo|siguiente) (?:mes|ano|trimestre)\b/.test(normalized)) ||
      /\bcuantas horas (?:trabaje|he trabajado) (?:hoy|ayer)\b/.test(normalized),
    isDocumental: Boolean(prior) || requiresManuals(normalized),
    continuesTopic,
  };
}

export type ManualEvidence = {
  id: number;
  documentId: string;
  documentName: string;
  title: string;
  release: string;
  language: string;
  module: string;
  country: string;
  page: number;
  section: string;
  text: string;
  score: number;
};
export type RetrievalReport = {
  evidence: ManualEvidence[];
  timings: { embedding: number; local: number; total: number };
  mode: "hybrid" | "lexical";
};

const columnSelect =
  "p.id, p.document, p.position, p.page, p.section, p.kind, p.text, p.embedding_hash, d.source, d.title, d.release, d.language, dc.module, dc.country";
const join =
  "passages p JOIN documents d ON d.id = p.document LEFT JOIN document_context dc ON dc.document=d.id";

type PassageRow = ManualEvidence & { position: number; hash: string; kind: string };
function passage(row: Record<string, unknown>, score = 0): PassageRow {
  return {
    id: Number(row.id),
    documentId: String(row.document),
    documentName: String(row.source),
    title: String(row.title),
    release: String(row.release),
    page: Number(row.page),
    language: String(row.language),
    module: String(row.module ?? ""),
    country: String(row.country ?? ""),
    section: String(row.section),
    text: String(row.text),
    position: Number(row.position),
    hash: String(row.embedding_hash),
    kind: String(row.kind),
    score,
  };
}

function lexical(database: DatabaseSync, terms: readonly string[], codes: readonly string[]) {
  const literals = [...new Set([...codes, ...terms, ...terms.flatMap(termVariants)])];
  if (!literals.length) return [];
  return database
    .prepare(
      "SELECT " +
        columnSelect +
        ", bm25(search, 1.0, 2.4, 2.8, 3.5) AS bm " +
        "FROM search JOIN passages p ON p.id = search.rowid JOIN documents d ON d.id = p.document LEFT JOIN document_context dc ON dc.document=d.id " +
        "WHERE search MATCH ? AND d.approved = 1 AND NOT EXISTS (SELECT 1 FROM screened_vectors s WHERE s.hash = p.embedding_hash) ORDER BY bm LIMIT 75",
    )
    .all(literals.map((term) => '"' + term + '"').join(" OR "))
    .map((row) => passage(row, -Number(row.bm)));
}

function fromHashes(database: DatabaseSync, hashes: readonly string[]) {
  if (!hashes.length) return [];
  return database
    .prepare(
      "SELECT " +
        columnSelect +
        " FROM " +
        join +
        " WHERE d.approved=1 AND p.id IN (SELECT min(id) FROM passages WHERE embedding_hash IN (" +
        hashes.map(() => "?").join(",") +
        ") GROUP BY embedding_hash)",
    )
    .all(...hashes)
    .map((row) => passage(row));
}

function neighbor(database: DatabaseSync, hit: PassageRow, offset: number) {
  const row = database
    .prepare(
      "SELECT " +
        columnSelect +
        " FROM " +
        join +
        " WHERE p.document = ? AND p.position = ? AND p.section = ? AND abs(p.page - ?) <= 1 AND d.approved=1" +
        " AND NOT EXISTS (SELECT 1 FROM screened_vectors s WHERE s.hash = p.embedding_hash)",
    )
    .get(hit.documentId, hit.position + offset, hit.section, hit.page);
  return row && passage(row, hit.score);
}

function overlap(a: ReadonlySet<string>, b: ReadonlySet<string>) {
  let shared = 0;
  for (const word of a) if (b.has(word)) shared += 1;
  return shared / Math.max(1, a.size + b.size - shared);
}

type RetrievalOptions = {
  root?: string;
  generation?: string;
  signal?: AbortSignal;
  lexicalOnly?: boolean;
  queryVector?: Float32Array;
  localRerank?: boolean;
  minSemantic?: number;
};

const queryCache = new Map<string, { until: number; vector: Float32Array }>();
let debugVectors: Promise<Map<string, string>> | undefined;

async function debugQueryVector(key: string) {
  const file = process.env.KB_EVAL_QUERY_CACHE_FILE;
  if (
    !file ||
    process.env.NODE_ENV !== "development" ||
    process.env.POWERMETA4_DEBUG_AUTH !== "true"
  )
    return;
  debugVectors ??= readFile(file, "utf8").then((body) => {
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("Caché de evaluación inválida.");
    return new Map(
      Object.entries(parsed).filter(
        (entry): entry is [string, string] => typeof entry[1] === "string",
      ),
    );
  });
  const value = (await debugVectors).get(key);
  if (!value) return;
  const bytes = Buffer.from(value, "base64");
  if (bytes.length !== DIMENSIONS * 4) throw new Error("Dimensiones de evaluación inválidas.");
  return Float32Array.from({ length: DIMENSIONS }, (_, index) => bytes.readFloatLE(index * 4));
}

async function queryVector(root: string, question: string, signal?: AbortSignal) {
  const key = sha256(question);
  const debug = await debugQueryVector(key);
  if (debug) return debug;
  const cached = queryCache.get(key);
  if (cached && cached.until > Date.now()) return cached.vector;
  const [vector] = await embedTexts(root, [question], "query", { signal });
  if (vector) {
    if (queryCache.size >= 180) queryCache.delete(queryCache.keys().next().value ?? "");
    queryCache.set(key, { until: Date.now() + 5 * 60_000, vector });
  }
  return vector;
}

export async function retrieveManuals(
  text: string,
  options: RetrievalOptions = {},
): Promise<RetrievalReport> {
  const start = performance.now();
  const root = options.root ?? knowledgeRoot();
  const generation = options.generation ?? (await readPointer(root, "active"));
  const finish = (
    evidence: ManualEvidence[],
    embedding = 0,
    mode: RetrievalReport["mode"] = "lexical",
  ) => {
    const total = performance.now() - start;
    return { evidence, mode, timings: { embedding, local: total - embedding, total } };
  };
  const terms = termsOf(text).slice(-24);
  const latest = termsOf(text.split("\n").at(-1) ?? text);
  const codes = exactOf(text);
  if (!generation || (!terms.length && !codes.length)) return finish([]);
  options.signal?.throwIfAborted();

  const database = openIndex(root, generation);
  let embedding = 0;
  let mode: RetrievalReport["mode"] = "lexical";
  try {
    const fts = lexical(database, terms, codes);
    let dense: Awaited<ReturnType<typeof rankVectors>> = [];
    if (!options.lexicalOnly && database.prepare("SELECT 1 FROM vectors LIMIT 1").get()) {
      const started = performance.now();
      try {
        const vector = options.queryVector ?? (await queryVector(root, text, options.signal));
        embedding = performance.now() - started;
        if (vector) {
          dense = await rankVectors(root, generation, vector, 75, options.signal);
          mode = "hybrid";
        }
      } catch (error) {
        if (!embedding) embedding = performance.now() - started;
        options.signal?.throwIfAborted();
        if (!(error instanceof RagEmbeddingError))
          console.error("[rag] recuperación vectorial no disponible");
      }
    }
    const best = dense[0]?.score ?? 0;
    const minSemantic = options.minSemantic ?? 0.25;
    const acceptedDense = dense.filter(({ score }) => score >= Math.max(minSemantic, best - 0.12));
    const lexicalRanks = new Map(fts.map((hit, position) => [hit.id, { position, bm: hit.score }]));
    const denseRanks = new Map(
      acceptedDense.map((hit, position) => [hit.hash, { ...hit, position }]),
    );
    const union = new Map<number, PassageRow>();
    for (const hit of [
      ...fts,
      ...fromHashes(
        database,
        acceptedDense.map(({ hash }) => hash),
      ),
    ])
      union.set(hit.id, hit);
    const scored: PassageRow[] = [];
    for (const hit of union.values()) {
      const full = new Set(
        WORDS(hit.text + " " + hit.section + " " + hit.title + " " + hit.release),
      );
      const body = new Set(WORDS(hit.text + " " + hit.section));
      const matches = terms.filter((term) => hasTerm(full, term)).length;
      const latestMatches = latest.filter((term) => hasTerm(full, term)).length;
      const bodyMatches = terms.filter((term) => hasTerm(body, term)).length;
      const exact = codes.filter((code) => full.has(code)).length;
      const exactTechnical = codes.filter(
        (code) => /_|\d/.test(code) && code !== "ln4" && full.has(code),
      ).length;
      const bm = lexicalRanks.get(hit.id);
      const semantic = denseRanks.get(hit.hash);
      const coverage = matches / Math.max(terms.length, 1);
      const strongLexical =
        bm &&
        ((matches >= 2 && (coverage >= 0.5 || bodyMatches >= 3)) ||
          (terms.length === 1 && matches === 1 && bm.position < 6 && bodyMatches >= 1) ||
          exactTechnical > 0 ||
          (exact > 0 && coverage >= 0.35 && bodyMatches >= 1));
      const strongDense =
        semantic &&
        ((semantic.score >= minSemantic + 0.06 && (latestMatches > 0 || terms.length >= 3)) ||
          (semantic.score >= minSemantic && (matches >= 2 || exact > 0)));
      if (!(strongLexical || strongDense)) continue;
      if (
        latest.length >= 2 &&
        !latestMatches &&
        exactTechnical === 0 &&
        (semantic?.score ?? 0) < minSemantic + 0.1
      )
        continue;
      const rank =
        (bm ? 1 / (24 + bm.position) : 0) + (semantic ? 1.2 / (24 + semantic.position) : 0);
      const corroboration = Math.min(1, bodyMatches / Math.max(terms.length, 1));
      const local =
        options.localRerank === false
          ? 0
          : 0.021 * corroboration +
            0.012 * coverage +
            0.018 * exactTechnical +
            0.01 * (latestMatches / Math.max(latest.length, 1));
      scored.push({ ...hit, score: rank + local });
    }
    scored.sort((a, b) => b.score - a.score || a.id - b.id);

    const selected: PassageRow[] = [];
    const termsSelected: Set<string>[] = [];
    let characters = 0;
    const accept = (hit: PassageRow) => {
      if (
        characters + hit.text.length > 16_500 ||
        selected.some((previous) => previous.id === hit.id)
      )
        return false;
      if (
        selected.filter((item) => item.documentId === hit.documentId && item.page === hit.page)
          .length >= 2
      )
        return false;
      const vocabulary = new Set(WORDS(hit.text));
      if (termsSelected.some((previous) => overlap(vocabulary, previous) > 0.85)) return false;
      termsSelected.push(vocabulary);
      selected.push(hit);
      characters += hit.text.length;
      return true;
    };
    for (const hit of scored) {
      if (selected.length >= 6) break;
      if (selected.filter((selectedHit) => selectedHit.documentId === hit.documentId).length >= 3)
        continue;
      accept(hit);
    }
    for (const hit of selected.slice(0, 3)) {
      if (selected.length >= 8) break;
      if (hit.text.length < 750 || hit.kind === "table" || hit.kind === "code") {
        const next = neighbor(database, hit, 1);
        if (next) accept(next);
      }
    }
    return finish(selected, embedding, mode);
  } finally {
    database.close();
  }
}
