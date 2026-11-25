import { mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { setTimeout } from "node:timers/promises";

import { DIMENSIONS, EMBEDDING_MODEL, embeddingKeys } from "./config";
import { transaction } from "./store";

const PROVIDER = "https://openrouter.ai";
const MINUTE = 60_000;
const REQUESTS_PER_MINUTE = 19;
const disabledKeys = new Set<string>();
const dailyCooldowns = new Map<string, number>();

type Task = "document" | "query";
type ErrorKind =
  | "config"
  | "credential"
  | "account-quota"
  | "quota"
  | "transient"
  | "size"
  | "screened"
  | "response";
export class RagEmbeddingError extends Error {
  constructor(
    readonly kind: ErrorKind,
    message: string,
    readonly retryAt?: number,
  ) {
    super(message);
    this.name = "RagEmbeddingError";
  }
}

const record = (value: unknown): Record<string, unknown> =>
  value !== null && typeof value === "object" ? Object.fromEntries(Object.entries(value)) : {};

function endpoint() {
  const url = (process.env.EMBEDDING_BASE_URL?.trim() || `${PROVIDER}/api/v1/embeddings`).replace(
    /"$/,
    "",
  );
  if (
    ![`${PROVIDER}/api/v1`, `${PROVIDER}/api/v1/embeddings`].includes(url.replace(/\/$/, "")) ||
    (process.env.EMBEDDING_MODEL && process.env.EMBEDDING_MODEL.trim() !== EMBEDDING_MODEL) ||
    (process.env.EMBEDDING_DIMENSIONS && Number(process.env.EMBEDDING_DIMENSIONS) !== DIMENSIONS)
  )
    throw new RagEmbeddingError(
      "config",
      "Revisa el endpoint, el modelo y las dimensiones de embeddings.",
    );
  return `${PROVIDER}/api/v1/embeddings`;
}

function keys() {
  const configured = embeddingKeys();
  if (!configured.length)
    throw new RagEmbeddingError("config", "Faltan claves de embeddings autorizadas.");
  return configured.filter(({ value }) => !disabledKeys.has(value));
}

function quotaDatabase(root: string) {
  mkdirSync(root, { recursive: true });
  const database = new DatabaseSync(path.join(root, "quota.sqlite"), {
    timeout: 2000,
    allowExtension: false,
  });
  database.exec(`
    CREATE TABLE IF NOT EXISTS attempts (at INTEGER NOT NULL);
    CREATE INDEX IF NOT EXISTS attempt_time ON attempts(at);
    CREATE TABLE IF NOT EXISTS cooldown (id INTEGER PRIMARY KEY, until INTEGER NOT NULL);
  `);
  return database;
}

function reserveRequest(root: string) {
  const database = quotaDatabase(root);
  try {
    return transaction(database, () => {
      const now = Date.now();
      database.prepare("DELETE FROM attempts WHERE at <= ?").run(now - MINUTE);
      const cooldown = Number(
        database.prepare("SELECT until FROM cooldown WHERE id = 1").get()?.until ?? 0,
      );
      if (cooldown > now) return cooldown;
      const minute = database
        .prepare("SELECT count(*) AS count, min(at) AS oldest FROM attempts WHERE at > ?")
        .get(now - MINUTE);
      if (Number(minute?.count) >= REQUESTS_PER_MINUTE)
        return Number(minute?.oldest) + MINUTE + 100;
      database.prepare("INSERT INTO attempts VALUES (?)").run(now);
      return null;
    });
  } finally {
    database.close();
  }
}

function setCooldown(root: string, until: number) {
  const database = quotaDatabase(root);
  try {
    database
      .prepare(`
      INSERT INTO cooldown VALUES(1, ?) ON CONFLICT(id) DO UPDATE SET until = max(cooldown.until, excluded.until)
    `)
      .run(until);
  } finally {
    database.close();
  }
}

export async function getEmbeddingQuota(
  firstSlot = 1,
): Promise<{ slot: number; remaining: number | null } | null> {
  endpoint();
  let accepted = false;
  for (const { value, slot } of keys()) {
    if (slot < firstSlot) continue;
    const response = await fetch(`${PROVIDER}/api/v1/key`, {
      headers: { Authorization: `Bearer ${value}` },
      signal: AbortSignal.timeout(6000),
    });
    if (response.status === 401 || response.status === 403) {
      disabledKeys.add(value);
      continue;
    }
    if (!response.ok)
      throw new RagEmbeddingError("transient", `Consulta de cuota HTTP ${response.status}.`);
    accepted = true;
    const quota = record(record(record(await response.json()).data).free_model_daily_requests);
    if (quota.remaining === 0) {
      dailyCooldowns.set(value, nextUtcDay());
      continue;
    }
    dailyCooldowns.delete(value);
    return {
      slot,
      remaining:
        typeof quota.remaining === "number" && quota.remaining > 0 ? quota.remaining : null,
    };
  }
  if (!accepted && firstSlot === 1)
    throw new RagEmbeddingError(
      "credential",
      "Ninguna clave autorizada puede acceder a OpenRouter.",
    );
  return null;
}

function nextUtcDay() {
  return new Date().setUTCHours(24, 0, 0, 0);
}

function retryTimestamp(response: Response, daily: boolean) {
  const now = Date.now();
  const candidates: number[] = [];
  const reset = Number(response.headers.get("x-ratelimit-reset"));
  if (reset > now) candidates.push(reset);
  const retry = response.headers.get("retry-after");
  if (retry) {
    const seconds = Number(retry);
    const timestamp = Number.isFinite(seconds) ? now + seconds * 1000 : Date.parse(retry);
    if (timestamp > now) candidates.push(timestamp);
  }
  return candidates.length ? Math.max(...candidates) : daily ? nextUtcDay() : now + MINUTE;
}

function parseVector(value: unknown): Float32Array {
  const vector =
    typeof value === "string"
      ? (() => {
          const data = Buffer.from(value, "base64");
          return data.byteLength === DIMENSIONS * 4
            ? Float32Array.from({ length: DIMENSIONS }, (_, index) => data.readFloatLE(index * 4))
            : null;
        })()
      : Array.isArray(value) &&
          value.length === DIMENSIONS &&
          value.every((item) => typeof item === "number")
        ? Float32Array.from(value)
        : null;
  if (!vector || vector.some((item) => !Number.isFinite(item))) {
    throw new RagEmbeddingError("response", "El proveedor devolvió un vector incompatible.");
  }
  const length = Math.hypot(...vector);
  if (!Number.isFinite(length) || length <= 0)
    throw new RagEmbeddingError("response", "Vector vacío.");
  for (let index = 0; index < vector.length; index += 1)
    vector[index] = (vector[index] ?? 0) / length;
  return vector;
}

async function requestEmbedding(
  key: string,
  texts: readonly string[],
  task: Task,
  signal?: AbortSignal,
) {
  const timeout = AbortSignal.timeout(task === "document" || texts.length > 1 ? 90_000 : 4500);
  let response: Response;
  try {
    response = await fetch(endpoint(), {
      method: "POST",
      signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: EMBEDDING_MODEL,
        input: texts,
        dimensions: DIMENSIONS,
        encoding_format: "base64",
        input_type: task === "document" ? "search_document" : "search_query",
      }),
    });
  } catch (error) {
    signal?.throwIfAborted();
    if (error instanceof RagEmbeddingError) throw error;
    throw new RagEmbeddingError("transient", "Error de red o timeout de embeddings.");
  }
  const payload = record(await response.json().catch(() => null));
  if (response.status === 401 || response.status === 403)
    throw new RagEmbeddingError("credential", "Credencial rechazada.");
  if (response.status === 429 || response.status === 402) {
    const details = JSON.stringify(payload.error ?? "");
    const daily =
      response.status === 429 &&
      /per[-_ ]day|\bdaily\b|daily_|free.model.*limit.*day/i.test(details);
    throw new RagEmbeddingError(
      daily ? "account-quota" : "quota",
      daily ? "Cuota diaria del proveedor." : "Límite temporal del proveedor.",
      retryTimestamp(response, daily),
    );
  }
  if (response.status >= 500)
    throw new RagEmbeddingError("transient", `Embeddings HTTP ${response.status}.`);
  if (
    response.status === 422 &&
    /content safety screening|content policy/i.test(String(record(payload.error).message ?? ""))
  ) {
    throw new RagEmbeddingError(
      "screened",
      "El filtro de contenido del proveedor rechazó entradas.",
    );
  }
  if (
    response.status === 413 ||
    (response.status === 422 && texts.length > 1) ||
    (response.status === 400 &&
      /batch|maximum.*inputs|payload|too large/i.test(JSON.stringify(payload.error ?? "")))
  ) {
    throw new RagEmbeddingError("size", "El proveedor rechazó el tamaño del lote.");
  }
  if (!response.ok) throw new RagEmbeddingError("response", `Embeddings HTTP ${response.status}.`);
  if (
    ![EMBEDDING_MODEL, EMBEDDING_MODEL.replace(":free", "")].includes(String(payload.model)) ||
    !Array.isArray(payload.data) ||
    payload.data.length !== texts.length
  )
    throw new RagEmbeddingError(
      "response",
      "La respuesta no corresponde al modelo o al tamaño solicitado.",
    );
  const ordered = new Map<number, Float32Array>();
  for (const value of payload.data) {
    const item = record(value);
    if (
      typeof item.index !== "number" ||
      !Number.isInteger(item.index) ||
      item.index < 0 ||
      item.index >= texts.length ||
      ordered.has(item.index)
    )
      throw new RagEmbeddingError("response", "El lote contiene índices incompatibles.");
    ordered.set(item.index, parseVector(item.embedding));
  }
  return [...ordered].sort(([a], [b]) => a - b).map(([, value]) => value);
}

export async function embedTexts(
  root: string,
  texts: readonly string[],
  task: Task,
  options: { signal?: AbortSignal; slot?: number } = {},
) {
  if (!texts.length) return [];
  const retryCount = task === "document" ? 3 : texts.length > 1 ? 2 : 1;
  for (let attempt = 0; attempt < retryCount; attempt += 1) {
    let failure: RagEmbeddingError | null = null;
    const credentials = keys().filter(
      ({ slot }) => options.slot === undefined || options.slot === slot,
    );
    if (!credentials.length)
      throw new RagEmbeddingError("credential", "La clave seleccionada no está disponible.");
    for (const { value } of credentials) {
      options.signal?.throwIfAborted();
      const dayCooldown = dailyCooldowns.get(value);
      if (dayCooldown && dayCooldown > Date.now()) {
        failure = new RagEmbeddingError(
          "account-quota",
          "Cuota diaria del proveedor.",
          dayCooldown,
        );
        continue;
      }
      const waitUntil = reserveRequest(root);
      if (waitUntil !== null) {
        const delay = waitUntil - Date.now();
        if (task === "query" || delay > MINUTE)
          throw new RagEmbeddingError("quota", "Cuota de embeddings en pausa.", waitUntil);
        await setTimeout(Math.max(0, delay), undefined, { signal: options.signal });
        if (reserveRequest(root) !== null) {
          throw new RagEmbeddingError("quota", "Cuota de embeddings en pausa.", waitUntil);
        }
      }
      try {
        return await requestEmbedding(value, texts, task, options.signal);
      } catch (error) {
        if (!(error instanceof RagEmbeddingError)) throw error;
        if (error.kind === "credential") {
          disabledKeys.add(value);
          failure = error;
          continue;
        }
        if (error.kind === "account-quota" && error.retryAt) {
          dailyCooldowns.set(value, error.retryAt);
          failure = error;
          continue;
        }
        if (error.kind === "quota" && error.retryAt) setCooldown(root, error.retryAt);
        if (error.kind !== "transient" || attempt + 1 >= retryCount) throw error;
        failure = error;
        break;
      }
    }
    if (failure?.kind === "credential" || failure?.kind === "account-quota") throw failure;
    await setTimeout(1500 * 2 ** attempt + Math.random() * 700, undefined, {
      signal: options.signal,
    });
  }
  throw new RagEmbeddingError("transient", "Embeddings temporalmente indisponibles.");
}
