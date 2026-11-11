import { createHmac, randomBytes, randomUUID } from "node:crypto";
import {
  closeSync,
  existsSync,
  fsyncSync,
  mkdirSync,
  openSync,
  readFileSync,
  readSync,
  readdirSync,
  renameSync,
  rmdirSync,
  statSync,
  truncateSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { StringDecoder } from "node:string_decoder";
import { z } from "zod";
import {
  AUDIT_LIMITS,
  AUDIT_FILES,
  auditStorageError,
  AuditFailure,
  cacheEntrySchema,
  digest,
  identifier,
  type AuditCacheEntry,
  type AuditMetric,
  type AuditRow,
  type AuditState,
  type AuditTask,
} from "./readonly-audit-model";
import { assertSafeDictionary, assertSafeMetadataEntry } from "./readonly-audit-safety";

export { AUDIT_FILES } from "./readonly-audit-model";
import {
  auditFileHash,
  copyAuditFile,
  publishAuditDocuments,
  type AuditDocuments,
} from "./readonly-audit-publication";
export const canonicalAuditText = (value: string): string => value.replace(/\r\n/g, "\n");
const auditHash = (value: string) => digest(canonicalAuditText(value));

// Valida la forma sin clonar millones de valores del diccionario LFS.
function isDictionaryTables(value: unknown): value is Record<string, AuditRow[]> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    Object.values(value).every(
      (rows: unknown) =>
        Array.isArray(rows) &&
        rows.every(
          (row: unknown) =>
            typeof row === "object" &&
            row !== null &&
            !Array.isArray(row) &&
            Object.values(row).every(
              (field: unknown) =>
                field === null ||
                typeof field === "string" ||
                (typeof field === "number" && Number.isFinite(field)),
            ),
        ),
    )
  );
}
const dictionarySchema = z
  .object({
    tables: z.custom<Record<string, AuditRow[]>>(isDictionaryTables),
    referencesInRules: z.array(z.string()),
    symbols: z.array(z.string().regex(identifier)).optional(),
    sanitizerVersion: z.literal(2).optional(),
  })
  .passthrough();

function parseAuditJson(body: string): unknown {
  if (body.trimStart().startsWith("version https://git-lfs.github.com/spec/v1")) {
    const error = new AuditFailure("EVIDENCE_LFS_POINTER");
    error.message += ": falta descargar el contenido Git LFS; ejecutar git lfs pull y repetir.";
    throw error;
  }
  try {
    return JSON.parse(body);
  } catch {
    throw new AuditFailure("GENERATION_INVALID");
  }
}

/** Valida las seis salidas sin convertir diferencias de contenido en hashes nuevos. */
export function verifyAuditArtifacts(bodies: ReadonlyMap<string, string>): {
  generationId: string;
  normalizedLineEndings: boolean;
  documents: ReadonlyMap<string, unknown>;
  dictionary: z.infer<typeof dictionarySchema>;
} {
  const documents = new Map<string, unknown>();
  const manifest = z
    .object({
      formatVersion: z.literal(2),
      generationId: z.string().uuid(),
      files: z.record(z.string().regex(/^[a-f0-9]{64}$/)),
      coverage: z.object({ seedObjects: z.array(z.string()) }).passthrough(),
    })
    .passthrough()
    .parse(parseAuditJson(bodies.get("manifest.json") ?? "null"));
  documents.set("manifest.json", manifest);
  let normalizedLineEndings = false;
  for (const file of AUDIT_FILES) {
    const body = bodies.get(file);
    if (body === undefined) throw new AuditFailure("GENERATION_INVALID");
    if (file.endsWith(".json") && file !== "manifest.json")
      documents.set(file, parseAuditJson(body));
    if (file !== "manifest.json" && digest(body) !== manifest.files[file]) {
      if (auditHash(body) !== manifest.files[file]) throw new AuditFailure("GENERATION_INVALID");
      normalizedLineEndings = true;
    }
    if (file.endsWith(".json") && file !== "manifest.json") {
      const header = z
        .object({ formatVersion: z.literal(2), generationId: z.string().uuid() })
        .passthrough()
        .parse(documents.get(file));
      if (header.generationId !== manifest.generationId)
        throw new AuditFailure("GENERATION_INVALID");
    }
  }
  const dictionary = dictionarySchema.parse(documents.get("dictionary.json"));
  assertSafeDictionary(
    dictionary.tables,
    manifest.coverage.seedObjects,
    dictionary.referencesInRules,
    dictionary.symbols,
    dictionary.sanitizerVersion ?? 1,
  );
  return { generationId: manifest.generationId, normalizedLineEndings, documents, dictionary };
}
export type AuditRunStatus = "running" | "complete" | "partial" | "interrupted" | "failed";
export type AuditPublication = {
  runId: string;
  startedAt: number;
  status: AuditRunStatus;
  reason?: string;
  revision: string | null;
  sources: readonly { file: string; sha256: string }[];
  registry: readonly AuditRow[];
  metrics: readonly AuditMetric[];
  queriesStarted: number;
  active: number;
  reused: number;
  metadataReusedFrom?: {
    createdAt: number;
    updatedAt: number;
    originRunId: string;
    codeHash: string;
    schemaHash: string;
  };
  tasks: readonly AuditTask[];
  soap: readonly AuditRow[];
};
const hash = z.string().regex(/^[a-f0-9]{64}$/);
const metaSchema = z
  .object({
    formatVersion: z.literal(2),
    code: hash,
    schema: hash,
    context: hash,
    originRunId: z.string().uuid(),
    createdAt: z.number(),
    updatedAt: z.number(),
    status: z.enum(["running", "complete", "partial", "interrupted", "failed"]),
  })
  .strict();
const recordSchema = z.object({ payload: cacheEntrySchema, hash }).strict();
const lockSchema = z
  .object({ pid: z.number().int().positive(), runId: z.string().uuid() })
  .strict();
const ioError = (error: unknown, code: string) =>
  error && typeof error === "object" && "code" in error && error.code === code;
const atomic = (file: string, value: string) => {
  const temp = `${file}.${randomUUID()}.tmp`;
  const fd = openSync(temp, "wx", 0o600);
  try {
    writeFileSync(fd, value, "utf8");
    fsyncSync(fd);
  } finally {
    closeSync(fd);
  }
  try {
    renameSync(temp, file);
  } catch (error) {
    try {
      unlinkSync(temp);
    } catch {
      /* La próxima ejecución ignora temporales; conserva la generación válida. */
    }
    throw error;
  }
};
export function auditDocuments(state: AuditState, info: AuditPublication): AuditDocuments {
  // Los lotes publicados no se mutan; solo se sustituyen sus arrays al añadir filas.
  state = {
    ...state,
    dictionary: { ...state.dictionary },
    contracts: { ...state.contracts },
    probes: [...state.probes],
    tasks: state.tasks.map((task) => ({ ...task })),
    coverage: {
      ...state.coverage,
      seedObjects: [...state.coverage.seedObjects],
      visited: [...state.coverage.visited],
      unvisited: [...state.coverage.unvisited],
    },
    metadataSymbols: [...state.metadataSymbols],
    referencesInRules: [...state.referencesInRules],
  };
  info = { ...info, tasks: [...info.tasks], metrics: [...info.metrics], soap: [...info.soap] };
  assertSafeDictionary(
    state.dictionary,
    state.coverage.seedObjects,
    state.referencesInRules,
    state.metadataSymbols,
  );
  const generationId = randomUUID();
  const common = { formatVersion: 2, generationId };
  const tasks = [...info.tasks, ...state.tasks];
  const errors = tasks.filter((task) => task.status !== "ok");
  const durationMs = Math.max(0, Date.now() - info.startedAt);
  const summary = [
    "# Diagnóstico de solo lectura del portal",
    "",
    `Estado: ${info.status}. Motivo: ${info.reason ?? "—"}.`,
    `Duración: ${(durationMs / 1000).toFixed(1)} s. Consultas iniciadas: ${info.queriesStarted}; completadas: ${info.queriesStarted - info.active}; activas: ${info.active}; lotes reutilizados: ${info.reused}.`,
    `Referencias procesadas: ${state.coverage.visited.length}; pendientes: ${state.coverage.unvisited.length}. Errores: ${errors.filter((task) => task.status === "error").length}; incompletas: ${errors.filter((task) => task.status === "incomplete").length}.`,
    "",
    "Solo SELECT revisadas y GET WSDL. Sin SQL extraído, operaciones SOAP, LN4 ni escrituras. Los metadatos reutilizados conservan su procedencia; sondeos y WSDL se leen de nuevo. Una consulta lenta no acredita un bloqueo.",
    "",
    "| Tarea técnica | Estado | Código |",
    "| --- | --- | --- |",
    ...errors.map(
      (task) => `| ${task.id.replaceAll("|", " ")} | ${task.status} | ${task.code ?? "—"} |`,
    ),
    "",
    "## Consultas más lentas",
    "",
    "| Tarea | Duración ms | Estado |",
    "| --- | --- | --- |",
    ...[...info.metrics]
      .sort((a, b) => b.durationMs - a.durationMs)
      .slice(0, 10)
      .map((metric) => `| ${metric.id} | ${metric.durationMs} | ${metric.code ?? metric.status} |`),
    "",
    "Versionar los seis archivos de esta carpeta. El diario de reanudación se conserva solo en data/portal-readonly-audit/. La misma orden reanuda metadatos compatibles de ejecuciones incompletas de menos de 24 horas. No se hace commit ni push.",
    "",
  ].join("\n");
  const json = (value: unknown) => value;
  const bodies = {
    "dictionary.json": json({
      ...common,
      sanitizerVersion: 2,
      tables: state.dictionary,
      symbols: state.metadataSymbols,
      referencesInRules: state.referencesInRules,
    }),
    "contracts.json": json({ ...common, columns: state.contracts, soap: info.soap }),
    "probes.json": json({ ...common, probes: state.probes }),
    "errors.json": json({ ...common, errors }),
    "resumen.md": summary,
  };
  const manifest = {
    ...common,
    generatedAt: new Date().toISOString(),
    startedAt: new Date(info.startedAt).toISOString(),
    runId: info.runId,
    status: info.status,
    reason: info.reason ?? null,
    revision: info.revision,
    durationMs,
    sources: info.sources,
    registry: info.registry,
    coverage: state.coverage,
    counts: {
      ok: tasks.length - errors.length,
      failed: errors.filter((task) => task.status === "error").length,
      incomplete: errors.filter((task) => task.status === "incomplete").length,
    },
    execution: {
      queriesStarted: info.queriesStarted,
      queriesCompleted: info.queriesStarted - info.active,
      active: info.active,
      reusedMetadataBatches: info.reused,
    },
    metrics: info.metrics,
    tasks,
    metadataReusedFrom: info.metadataReusedFrom ?? null,
    hashNormalization: "utf8-lf",
    files: Object.fromEntries(Object.keys(bodies).map((file) => [file, "0".repeat(64)])),
  };
  return {
    generationId,
    values: { ...bodies, "manifest.json": manifest },
    setHashes: (hashes) => {
      manifest.files = hashes;
    },
  };
}

/** Serializador pequeño para fixtures; producción escribe los mismos valores por fragmentos. */
export function auditArtifacts(
  state: AuditState,
  info: AuditPublication,
): Record<(typeof AUDIT_FILES)[number], string> {
  const documents = auditDocuments(state, info);
  const result = Object.fromEntries(AUDIT_FILES.map((file) => [file, ""]));
  const hashes: Record<string, string> = {};
  for (const file of AUDIT_FILES) {
    if (file === "manifest.json") documents.setHashes(hashes);
    const value = documents.values[file];
    result[file] = file === "resumen.md" ? String(value) : `${JSON.stringify(value, null, 2)}\n`;
    if (file !== "manifest.json") hashes[file] = auditHash(result[file]);
  }
  return {
    "dictionary.json": result["dictionary.json"],
    "contracts.json": result["contracts.json"],
    "probes.json": result["probes.json"],
    "errors.json": result["errors.json"],
    "resumen.md": result["resumen.md"],
    "manifest.json": result["manifest.json"],
  };
}

/** Solo guarda resultados saneados; nunca parámetros SQL ni filas privadas. */
export class AuditStore {
  readonly entries = new Map<string, AuditCacheEntry>();
  readonly runId = randomUUID();
  reuseInfo: AuditPublication["metadataReusedFrom"];
  private readonly lock: string;
  private fd: number | undefined;
  private metadata: z.infer<typeof metaSchema> | undefined;
  private readonly metaFile: string;
  private readonly journal: string;
  private owned = false;
  private readonly now: () => number;
  private publicationWork: Promise<void> | undefined;
  private queuedPublication: { documents: AuditDocuments; info: AuditPublication } | undefined;
  private publicationFailure: unknown;
  get publishing(): boolean {
    return this.publicationWork !== undefined;
  }
  constructor(
    readonly root: string,
    readonly output: string,
    private readonly notice: (code: string) => void,
    now: () => number = Date.now,
  ) {
    this.now = now;
    mkdirSync(root, { recursive: true });
    mkdirSync(output, { recursive: true });
    this.lock = path.join(root, "audit.lock");
    this.metaFile = path.join(root, "checkpoint.json");
    this.journal = path.join(root, "batches.ndjson");
    try {
      this.acquire();
    } catch (error) {
      if (!ioError(error, "EEXIST")) throw error;
      let alive = true;
      try {
        const lock = lockSchema.parse(JSON.parse(readFileSync(this.lock, "utf8")));
        try {
          process.kill(lock.pid, 0);
        } catch (failure) {
          if (ioError(failure, "ESRCH")) alive = false;
        }
      } catch {
        throw new AuditFailure("LOCK_INVALID");
      }
      if (alive) throw new AuditFailure("AUDIT_ALREADY_RUNNING");
      unlinkSync(this.lock);
      this.acquire();
      this.notice("STALE_LOCK_RECOVERED");
    }
  }
  private acquire() {
    const fd = openSync(this.lock, "wx", 0o600);
    try {
      writeFileSync(fd, JSON.stringify({ pid: process.pid, runId: this.runId }));
    } finally {
      closeSync(fd);
    }
    this.owned = true;
  }
  contextFingerprint(values: readonly string[]): string {
    const location = path.join(this.root, "context.key");
    if (!existsSync(location)) {
      const fd = openSync(location, "wx", 0o600);
      try {
        writeFileSync(fd, randomBytes(32));
      } finally {
        closeSync(fd);
      }
    }
    return createHmac("sha256", readFileSync(location))
      .update(JSON.stringify(values))
      .digest("hex");
  }
  resume(code: string, schema: string, context: string): ReadonlyMap<string, AuditCacheEntry> {
    let reusable = false;
    let validLength = 0;
    if (existsSync(this.metaFile)) {
      try {
        const meta = metaSchema.parse(JSON.parse(readFileSync(this.metaFile, "utf8")));
        const age = this.now() - meta.createdAt;
        reusable =
          meta.status !== "complete" &&
          meta.code === code &&
          meta.schema === schema &&
          meta.context === context &&
          age >= 0 &&
          age < AUDIT_LIMITS.checkpointAgeMs;
        if (reusable)
          this.reuseInfo = {
            createdAt: meta.createdAt,
            updatedAt: meta.updatedAt,
            originRunId: meta.originRunId,
            codeHash: meta.code,
            schemaHash: meta.schema,
          };
        if (!reusable) {
          this.notice("CHECKPOINT_INCOMPATIBLE");
          this.notice(
            meta.status === "complete"
              ? "CHECKPOINT_ALREADY_COMPLETE"
              : age < 0 || age >= AUDIT_LIMITS.checkpointAgeMs
                ? "CHECKPOINT_EXPIRED"
                : meta.code !== code
                  ? "CHECKPOINT_CODE_CHANGED"
                  : meta.schema !== schema
                    ? "CHECKPOINT_SCHEMA_CHANGED"
                    : "CHECKPOINT_CONTEXT_CHANGED",
          );
        }
      } catch {
        this.notice("CHECKPOINT_INVALID");
      }
    }
    if (reusable && existsSync(this.journal)) {
      try {
        const fd = openSync(this.journal, "r");
        const buffer = Buffer.alloc(64 * 1024);
        const decoder = new StringDecoder("utf8");
        let pending = "";
        try {
          let length: number;
          while ((length = readSync(fd, buffer)) > 0) {
            pending += decoder.write(buffer.subarray(0, length));
            let end: number;
            while ((end = pending.indexOf("\n")) >= 0) {
              const line = pending.slice(0, end);
              pending = pending.slice(end + 1);
              validLength += Buffer.byteLength(line) + 1;
              if (!line.trim()) continue;
              const record = recordSchema.parse(JSON.parse(line));
              if (digest(JSON.stringify(record.payload)) !== record.hash)
                throw new AuditFailure("CHECKPOINT_INVALID");
              assertSafeMetadataEntry(record.payload);
              this.entries.set(record.payload.key, record.payload);
            }
            if (pending.length > 64 * 1024 * 1024)
              throw new AuditFailure("CHECKPOINT_RECORD_TOO_LARGE");
          }
          pending += decoder.end();
          if (pending.length) this.notice("JOURNAL_TAIL_IGNORED");
        } finally {
          closeSync(fd);
        }
        this.notice("CHECKPOINT_REUSED");
      } catch {
        this.entries.clear();
        reusable = false;
        this.reuseInfo = undefined;
        this.notice("CHECKPOINT_INVALID");
      }
    }
    if (!reusable && existsSync(this.journal))
      renameSync(this.journal, path.join(this.root, `batches-${randomUUID()}.previous`));
    if (reusable && existsSync(this.journal)) truncateSync(this.journal, validLength);
    this.fd = openSync(this.journal, "a", 0o600);
    this.metadata = {
      formatVersion: 2,
      code,
      schema,
      context,
      originRunId: this.reuseInfo?.originRunId ?? this.runId,
      status: "running",
      createdAt: this.reuseInfo?.createdAt ?? this.now(),
      updatedAt: this.now(),
    };
    this.checkpoint("running");
    return this.entries;
  }
  append(entry: AuditCacheEntry): void {
    if (this.entries.has(entry.key)) return;
    const safe = assertSafeMetadataEntry(entry);
    if (this.fd === undefined) throw new AuditFailure("JOURNAL_NOT_OPEN");
    const line = `${JSON.stringify({ payload: safe, hash: digest(JSON.stringify(safe)) })}\n`;
    try {
      writeFileSync(this.fd, line);
      fsyncSync(this.fd);
    } catch (error) {
      throw auditStorageError(error);
    }
    this.entries.set(safe.key, safe);
  }
  checkpoint(status: AuditRunStatus): void {
    if (!this.metadata) return;
    this.metadata = { ...this.metadata, status, updatedAt: this.now() };
    try {
      atomic(this.metaFile, `${JSON.stringify(this.metadata)}\n`);
    } catch (error) {
      throw auditStorageError(error);
    }
  }
  publish(state: AuditState, info: AuditPublication): Promise<void> {
    if (this.publicationFailure) return Promise.reject(this.publicationFailure);
    try {
      this.queuedPublication = { documents: auditDocuments(state, info), info };
    } catch (error) {
      return Promise.reject(error);
    }
    this.publicationWork ??= (async () => {
      try {
        while (this.queuedPublication) {
          const current = this.queuedPublication;
          this.queuedPublication = undefined;
          await publishAuditDocuments(
            this.root,
            this.output,
            current.documents,
            undefined,
            this.notice,
          );
          this.checkpoint(current.info.status);
          this.pruneGenerations(current.documents.generationId);
        }
      } catch (error) {
        const safe = auditStorageError(error);
        this.publicationFailure = safe;
        this.queuedPublication = undefined;
        throw safe;
      } finally {
        this.publicationWork = undefined;
      }
    })();
    return this.publicationWork;
  }
  private pruneGenerations(currentId: string): void {
    const base = path.resolve(this.root, "generations");
    const owned = readdirSync(base, { withFileTypes: true })
      .filter((item) => item.isDirectory() && z.string().uuid().safeParse(item.name).success)
      .filter((item) => item.name !== currentId)
      .map((item) => path.resolve(base, item.name))
      .sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
    for (const directory of owned.slice(1)) {
      // Solo elimina seis archivos conocidos de una generación propia, nunca un árbol arbitrario.
      if (path.dirname(directory) !== base) throw new AuditFailure("UNSAFE_GENERATION_PATH");
      const names = readdirSync(directory);
      if (
        names.length !== AUDIT_FILES.length ||
        names.some((name) => !AUDIT_FILES.some((file) => file === name))
      )
        continue;
      try {
        const manifest: unknown = JSON.parse(
          readFileSync(path.join(directory, "manifest.json"), "utf8"),
        );
        const value = z
          .object({ formatVersion: z.literal(2), generationId: z.string().uuid() })
          .passthrough()
          .parse(manifest);
        if (value.generationId !== path.basename(directory)) continue;
        for (const file of AUDIT_FILES) unlinkSync(path.join(directory, file));
        rmdirSync(directory);
      } catch {
        this.notice("GENERATION_CLEANUP_DEFERRED");
      }
    }
  }
  async restorePublished(): Promise<boolean> {
    const pointer = path.join(this.root, "last-generation.json");
    if (!existsSync(pointer)) return false;
    try {
      const value: unknown = JSON.parse(readFileSync(pointer, "utf8"));
      const parsed = z.object({ id: z.string().uuid() }).strict().parse(value);
      const directory = path.join(this.root, "generations", parsed.id);
      // La ruta normal solo calcula hashes en streaming: no carga de nuevo el diccionario.
      const manifest = z
        .object({ generationId: z.literal(parsed.id), files: z.record(hash) })
        .passthrough()
        .parse(JSON.parse(readFileSync(path.join(directory, "manifest.json"), "utf8")));
      let coherent = true;
      for (const file of AUDIT_FILES) {
        try {
          const expected =
            file === "manifest.json"
              ? await auditFileHash(path.join(directory, file))
              : manifest.files[file];
          if ((await auditFileHash(path.join(this.output, file))) !== expected) coherent = false;
        } catch {
          coherent = false;
        }
      }
      if (coherent) return true;
      const bodies = new Map(
        AUDIT_FILES.map((file) => [file, readFileSync(path.join(directory, file), "utf8")]),
      );
      const verified = verifyAuditArtifacts(bodies);
      if (verified.generationId !== parsed.id) throw new AuditFailure("GENERATION_INVALID");
      if (verified.normalizedLineEndings) this.notice("GENERATION_EOL_NORMALIZED");
      for (const file of AUDIT_FILES)
        await copyAuditFile(path.join(directory, file), path.join(this.output, file));
      return true;
    } catch (error) {
      this.notice(
        error && typeof error === "object" && "code" in error
          ? auditStorageError(error).code
          : "GENERATION_INVALID",
      );
      return false;
    }
  }
  close(): void {
    if (this.fd !== undefined) {
      closeSync(this.fd);
      this.fd = undefined;
    }
    if (this.owned) {
      const lock = lockSchema.parse(JSON.parse(readFileSync(this.lock, "utf8")));
      if (lock.runId === this.runId) unlinkSync(this.lock);
      this.owned = false;
    }
  }
}
