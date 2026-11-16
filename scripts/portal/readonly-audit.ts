/** Una orden, sin parámetros interactivos: npm run portal:readonly-audit. */
import { execFileSync } from "node:child_process";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sql from "mssql";
import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import { getMeta4BaseUrl } from "../../src/lib/meta4/config";
import { PORTAL_FEATURES } from "../../src/lib/portal/registry";
import { collectMeta4References, parseMeta4References } from "../../src/lib/portal/meta4-refs";
import { SOAP_CATALOG } from "../../src/lib/portal/soap/catalog.generated";
import { inspectPortalWsdl } from "../../src/lib/portal/soap/wsdl";
import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { loadEnv } from "./meta4-dictionary";
import { collectReadonlyAudit } from "./readonly-audit-core";
import {
  createAuditExecutor,
  closeAuditWithin,
  type CancellableAuditRequest,
} from "./readonly-audit-executor";
import {
  AUDIT_LIMITS as L,
  REQUIRED_READ_OBJECTS,
  AuditFailure,
  auditErrorCode,
  digest,
  emptyAuditState,
  mapAuditWork,
  type AuditRow,
  type AuditTask,
} from "./readonly-audit-model";
import { AuditStore, type AuditPublication, type AuditRunStatus } from "./readonly-audit-store";
import { assertAuditBindings } from "./readonly-audit-bindings";
import { auditMethodReferences, type AuditMethod } from "./readonly-audit-methods";

export type AuditConnection = {
  context: readonly string[];
  request: (timeoutMs: number) => CancellableAuditRequest;
  close: () => Promise<unknown>;
  monitor?: () => Promise<{ categories: string[]; blocked: boolean }>;
};
type Sources = {
  sources: { file: string; sha256: string }[];
  candidates: string[];
  code: string;
  methods?: AuditMethod[];
};
export type AuditRunnerDeps = {
  root: string;
  connect: (appName: string) => Promise<AuditConnection>;
  sources: (signal?: AbortSignal) => Promise<Sources>;
  wsdl: (service: string, signal: AbortSignal) => Promise<{ status: number; body: string }>;
  revision: () => string | null;
  log: (line: string) => void;
};
export type AuditRunnerOptions = {
  signal?: AbortSignal;
  totalMs?: number;
  heartbeatMs?: number;
  publishMs?: number;
  connectionMs?: number;
  dictionaryMs?: number;
  probesMs?: number;
  wsdlMs?: number;
};

/** Espera la cancelación real; si no se asienta, el llamante deja de planificar. */
async function abortable<T>(
  work: Promise<T>,
  signal: AbortSignal,
  unconfirmed: () => void,
): Promise<T> {
  let listener: (() => void) | undefined;
  let grace: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      work,
      new Promise<never>((_, reject) => {
        listener = () => {
          grace = setTimeout(() => {
            unconfirmed();
            reject(new AuditFailure("CANCEL_UNCONFIRMED"));
          }, L.cancelMs);
        };
        if (signal.aborted) listener();
        else signal.addEventListener("abort", listener, { once: true });
      }),
    ]);
  } finally {
    if (listener) signal.removeEventListener("abort", listener);
    clearTimeout(grace);
  }
}

async function sourceInventory(root: string, signal?: AbortSignal): Promise<Sources> {
  const names = new Set(
    PORTAL_FEATURES.flatMap((feature) =>
      feature.sources.map((source) => path.basename(source.split("?")[0])),
    ),
  );
  const sources: Sources["sources"] = [];
  const candidates = new Set<string>();
  const methods = new Map<string, AuditMethod>();
  const walk = async (directory: string, source: boolean) => {
    for (const file of await readdir(directory, { withFileTypes: true })) {
      if (signal?.aborted) throw new AuditFailure("INTERRUPTED");
      const location = path.join(directory, file.name);
      if (file.isDirectory()) {
        await walk(location, source);
        continue;
      }
      if (
        !file.isFile() ||
        (source
          ? !names.has(file.name) && !/^menu_(?:sse|mss).*\.js$/.test(file.name)
          : !file.name.endsWith(".ts"))
      )
        continue;
      const bytes = await readFile(location, { signal });
      const fileName = path.relative(root, location).replaceAll("\\", "/");
      if (source) {
        sources.push({ file: fileName, sha256: digest(bytes) });
        for (const ref of parseMeta4References(bytes.toString("utf8"))) candidates.add(ref.object);
        for (const method of auditMethodReferences(bytes.toString("utf8")))
          methods.set(JSON.stringify(method), method);
      } else codeParts.push(`${fileName}:${digest(bytes)}`);
    }
  };
  const codeParts: string[] = [];
  await walk(path.join(root, "clon_portal/portal"), true);
  await walk(path.join(root, "src/lib/portal/registry"), false);
  for (const file of (await readdir(path.join(root, "scripts/portal"))).filter(
    (name) => name.startsWith("readonly-audit") && name.endsWith(".ts"),
  ))
    codeParts.push(`${file}:${digest(await readFile(path.join(root, "scripts/portal", file)))}`);
  for (const file of [
    "src/lib/portal/meta4-refs.ts",
    "src/lib/portal/data/team-scope.ts",
    "src/lib/portal/peoplenet/query.ts",
    "src/lib/portal/soap/catalog.generated.ts",
    "src/lib/portal/soap/wsdl.ts",
  ])
    codeParts.push(`${file}:${digest(await readFile(path.join(root, file)))}`);
  sources.sort((a, b) => a.file.localeCompare(b.file));
  return {
    sources,
    candidates: [...candidates].sort(),
    methods: [...methods.values()],
    code: digest(JSON.stringify([codeParts.sort(), sources])),
  };
}

function nativeRequest(pool: sql.ConnectionPool, timeoutMs: number): CancellableAuditRequest {
  // mssql 12 admite overrides por petición; @types/mssql aún omite ese argumento.
  const Request = sql.Request as new (
    parent: sql.ConnectionPool,
    overrides: { requestTimeout: number },
  ) => sql.Request;
  const request = new Request(pool, { requestTimeout: timeoutMs });
  return {
    cancel: () => {
      request.cancel();
    },
    query: async (statement, params, meta) => {
      assertReadOnlySql(statement);
      for (const [key, value] of Object.entries(params)) {
        const type = meta.bindings?.[key];
        if (value instanceof Date) {
          request.input(key, sql.Date, value);
          continue;
        }
        if (typeof value === "number" && !type) {
          request.input(key, sql.Int, value);
          continue;
        }
        const effective = type ?? {
          type: key === "organization" || key === "employeeId" ? "varchar" : "nvarchar",
          length: key === "organization" ? 4 : key === "employeeId" ? 64 : 128,
        };
        assertAuditBindings({ [key]: value }, { bindings: { [key]: effective } });
        const length = type?.length === -1 ? sql.MAX : (type?.length ?? 128);
        switch (type?.type) {
          case "varchar":
            request.input(key, sql.VarChar(length), value);
            break;
          case "char":
            request.input(key, sql.Char(length), value);
            break;
          case "nchar":
            request.input(key, sql.NChar(length), value);
            break;
          case "int":
            request.input(key, sql.Int, Number(value));
            break;
          case "smallint":
            request.input(key, sql.SmallInt, Number(value));
            break;
          case "tinyint":
            request.input(key, sql.TinyInt, Number(value));
            break;
          case "bigint":
            request.input(key, sql.BigInt, value);
            break;
          case "bit":
            request.input(key, sql.Bit, Number(value));
            break;
          default:
            request.input(
              key,
              key === "organization"
                ? sql.VarChar(4)
                : key === "employeeId"
                  ? sql.VarChar(64)
                  : sql.NVarChar(length),
              value,
            );
        }
      }
      return (await request.query<AuditRow>(statement)).recordset;
    },
  };
}

function defaultDeps(): AuditRunnerDeps {
  const root = process.cwd();
  return {
    root,
    sources: (signal) => sourceInventory(root, signal),
    log: (line) => console.log(line),
    revision: () => {
      try {
        return execFileSync("git", ["rev-parse", "HEAD"], {
          encoding: "utf8",
          windowsHide: true,
          stdio: ["ignore", "pipe", "ignore"],
          timeout: 5000,
        }).trim();
      } catch {
        return null;
      }
    },
    connect: async (appName) => {
      const config = getPeopleNetConfig();
      const pool = new sql.ConnectionPool({
        ...config,
        connectionTimeout: L.connectionMs,
        pool: {
          ...config.pool,
          max: 2,
          min: 0,
          acquireTimeoutMillis: L.connectionMs,
          destroyTimeoutMillis: L.closeMs,
        },
        options: { ...config.options, appName },
      });
      // EventEmitter no debe volcar errores crudos ni iniciar más lecturas tras perder el pool.
      let poolFailed = false;
      pool.on("error", () => {
        poolFailed = true;
      });
      try {
        await pool.connect();
      } catch (error) {
        if (!(await closeAuditWithin(() => pool.close())))
          throw new AuditFailure("CONNECTION_CLOSE_TIMEOUT");
        throw error;
      }
      return {
        context: [config.server, String(config.port), config.database ?? "", config.user ?? ""],
        request: (timeout) => {
          if (poolFailed) throw new AuditFailure("ECONNCLOSED");
          return nativeRequest(pool, timeout);
        },
        close: () => pool.close(),
        monitor: async () => {
          const monitor = new sql.ConnectionPool({
            ...config,
            connectionTimeout: 2000,
            requestTimeout: 2000,
            pool: { max: 1, min: 0, acquireTimeoutMillis: 2000, destroyTimeoutMillis: 2000 },
            options: { ...config.options, appName: `${appName}/monitor` },
          });
          let monitorFailed = false;
          monitor.on("error", () => {
            monitorFailed = true;
          });
          const outcome = await (async () => {
            await monitor.connect();
            if (monitorFailed) throw new AuditFailure("ECONNCLOSED");
            const request = nativeRequest(monitor, 2000);
            const rows = await request.query(
              `SELECT R.wait_type AS WAIT_TYPE, CASE WHEN R.blocking_session_id > 0 THEN 1 ELSE 0 END AS BLOCKED FROM sys.dm_exec_requests R JOIN sys.dm_exec_sessions S ON S.session_id = R.session_id WHERE S.program_name = @appName`,
              { appName },
              {
                id: "waits",
                family: "waits",
                kind: "private",
                bindings: { appName: { type: "nvarchar", length: 128 } },
              },
            );
            if (monitorFailed) throw new AuditFailure("ECONNCLOSED");
            const categories = [
              ...new Set(
                rows.map((row) => {
                  const value = typeof row.WAIT_TYPE === "string" ? row.WAIT_TYPE : "";
                  return value.startsWith("LCK_")
                    ? "lock"
                    : /IO|IOLATCH/.test(value)
                      ? "io"
                      : /SCHEDULER/.test(value)
                        ? "cpu"
                        : /NETWORK/.test(value)
                          ? "network"
                          : "other";
                }),
              ),
            ];
            return { categories, blocked: rows.some((row) => row.BLOCKED === 1) };
          })().then(
            (value) => ({ value }),
            (error: unknown) => ({ error }),
          );
          if (!(await closeAuditWithin(() => monitor.close(), 2000)))
            throw new AuditFailure("MONITOR_CLOSE_TIMEOUT");
          if ("error" in outcome) throw outcome.error;
          return outcome.value;
        },
      };
    },
    wsdl: async (service, signal) => {
      let base: string;
      try {
        base = getMeta4BaseUrl();
      } catch {
        throw new AuditFailure("SOAP_NOT_CONFIGURED");
      }
      const response = await fetch(`${base}/services/${service}?wsdl`, {
        method: "GET",
        redirect: "manual",
        signal,
      });
      if (!response.ok || !response.body) return { status: response.status, body: "" };
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let bytes = 0;
      let body = "";
      try {
        while (true) {
          const part = await reader.read();
          if (part.done) break;
          bytes += part.value.byteLength;
          if (bytes > 4_000_000) throw new AuditFailure("WSDL_SIZE_LIMIT");
          body += decoder.decode(part.value, { stream: true });
        }
        body += decoder.decode();
      } finally {
        await reader.cancel();
        reader.releaseLock();
      }
      return { status: response.status, body };
    },
  };
}

/** Inyectable para comprobar interrupciones y salidas sin conexiones corporativas. */
export async function runReadonlyAudit(
  deps: AuditRunnerDeps,
  options: AuditRunnerOptions = {},
): Promise<{ exitCode: number; forceExit: boolean }> {
  const startedAt = Date.now();
  const control = new AbortController();
  const signal = options.signal
    ? AbortSignal.any([options.signal, control.signal])
    : control.signal;
  const totalMs = options.totalMs ?? L.totalMs;
  const deadline = setTimeout(
    () => control.abort(),
    Math.max(1, totalMs - Math.min(15_000, totalMs / 10)),
  );
  deadline.unref();
  let state = emptyAuditState();
  const seeds = [
    ...new Set([
      ...REQUIRED_READ_OBJECTS,
      ...collectMeta4References(PORTAL_FEATURES).map((ref) => ref.object),
    ]),
  ].sort();
  state.coverage.seedObjects = seeds;
  state.coverage.unvisited = seeds.map((value) => ({ key: "ID_T3", value }));
  let sources: Sources = { sources: [], candidates: [], code: digest("sources-unavailable") };
  let sourcesLoaded = false;
  let phase = "inicio";
  let progress = { processed: 0, pending: seeds.length, reused: 0 };
  let wsdlDone = 0;
  let connection: AuditConnection | undefined;
  let executor: ReturnType<typeof createAuditExecutor> | undefined;
  let status: AuditRunStatus = "running";
  let reason: string | undefined;
  let forceExit = false;
  const tasks: AuditTask[] = [];
  const soap: AuditRow[] = [];
  const elapsed = () =>
    `${Math.floor((Date.now() - startedAt) / 60_000)
      .toString()
      .padStart(2, "0")}:${Math.floor(((Date.now() - startedAt) / 1000) % 60)
      .toString()
      .padStart(2, "0")}`;
  const log = (message: string) => deps.log(`[${elapsed()}] ${message}`);
  log("Inicio del diagnóstico de solo lectura; límite total: 30 minutos.");
  let store: AuditStore;
  try {
    store = new AuditStore(
      path.join(deps.root, "data/portal-readonly-audit"),
      path.join(deps.root, "docs/portal/implementacion/evidencias-vm"),
      (code) => log(code),
    );
  } catch (error) {
    clearTimeout(deadline);
    log(`No se inicia: ${auditErrorCode(error)}.`);
    return { exitCode: 1, forceExit: false };
  }
  const revision = deps.revision();
  const publication = (): AuditPublication => ({
    runId: store.runId,
    startedAt,
    status,
    reason,
    revision,
    sources: sources.sources,
    registry: PORTAL_FEATURES.map((feature) => ({
      id: feature.id,
      route: feature.route,
      sources: feature.sources,
    })),
    metrics: executor?.metrics ?? [],
    queriesStarted: executor?.progress().started ?? 0,
    active: executor?.activeCount ?? 0,
    reused: progress.reused,
    metadataReusedFrom: store.reuseInfo,
    tasks,
    soap,
  });
  const persist = () => {
    return store.publish(state, publication());
  };
  const setPhase = async (value: string) => {
    phase = value;
    log(`Fase: ${value}.`);
    await persist();
  };
  const heartbeat = setInterval(() => {
    const sql = executor?.progress();
    const errors = [...tasks, ...state.tasks].filter((task) => task.status === "error").length;
    log(
      `fase=${phase} referencias=${progress.processed} pendientes=${progress.pending} consultas=${sql?.started ?? 0} completadas=${sql?.completed ?? 0} reutilizadas=${progress.reused} activas=${sql?.active ?? 0} WSDL=${wsdlDone}/${Object.keys(SOAP_CATALOG).length} errores=${errors}${sql?.current.length ? ` actual=${sql.current.map((item) => `${item.id}:${Math.floor(item.elapsedMs / 1000)}s`).join(",")}` : ""}`,
    );
  }, options.heartbeatMs ?? L.heartbeatMs);
  const publisher = setInterval(() => {
    if (store.publishing) return;
    void persist().then(
      () => {
        log("Resultados parciales guardados.");
      },
      (error: unknown) => {
        reason = "OUTPUT_WRITE_FAILED";
        status = "failed";
        tasks.push({ id: "publication", status: "error", code: reason });
        log(`Publicación detenida: ${auditErrorCode(error)}.`);
        control.abort();
      },
    );
  }, options.publishMs ?? L.publishMs);
  let monitorRunning: Promise<void> | undefined;
  let lastMonitor = 0;
  const monitorSlow = (query: { id: string; queryHash: string }) => {
    log(`Consulta lenta: ${query.id}; huella=${query.queryHash.slice(0, 12)}; supera 5 segundos.`);
    if (!connection?.monitor || monitorRunning || Date.now() - lastMonitor < 30_000) return;
    lastMonitor = Date.now();
    const monitor = connection.monitor;
    monitorRunning = monitor()
      .then(
        (value) => {
          log(
            `Espera SQL: categorías=${value.categories.join(",") || "sin espera observada"}; bloqueo=${value.blocked ? "observado" : "no observado"}.`,
          );
          tasks.push({
            id: `waits/${query.queryHash.slice(0, 12)}`,
            status: "ok",
            code: value.blocked ? "BLOCKING_OBSERVED" : "NO_BLOCKING_OBSERVED",
          });
        },
        (error: unknown) => {
          const code = auditErrorCode(error);
          log(`Diagnóstico de esperas no disponible: ${code}. Continúa el diagnóstico.`);
          tasks.push({ id: "waits", status: "ok", code: "WAIT_DIAGNOSTIC_UNAVAILABLE" });
          if (code === "MONITOR_CLOSE_TIMEOUT") forceExit = true;
        },
      )
      .finally(() => {
        monitorRunning = undefined;
      });
  };
  let wsdlWork: Promise<void> | undefined;
  let wsdlStopped = false;
  try {
    await store.restorePublished();
    await persist();
    await setPhase("fuentes");
    try {
      sources = await abortable(deps.sources(signal), signal, () => {
        forceExit = true;
      });
      sourcesLoaded = true;
      tasks.push({ id: "sources", status: "ok", rows: sources.sources.length });
      log(`Fuentes revisadas: ${sources.sources.length}.`);
    } catch {
      tasks.push({ id: "sources", status: "error", code: "SOURCE_READ_FAILED" });
    }
    wsdlWork = mapAuditWork(
      Object.entries(SOAP_CATALOG),
      async ([service, contract]) => {
        const wsdlStarted = Date.now();
        const timeout = AbortSignal.timeout(options.wsdlMs ?? L.wsdlMs);
        const wsdlSignal = AbortSignal.any([signal, timeout]);
        log(`WSDL: ${service}.`);
        try {
          const result = await abortable(deps.wsdl(service, wsdlSignal), wsdlSignal, () => {
            wsdlStopped = true;
            forceExit = true;
          });
          const issues =
            result.body.length > 4_000_000
              ? ["WSDL_SIZE_LIMIT"]
              : result.status >= 200 && result.status < 300
                ? inspectPortalWsdl(contract, result.body)
                : ["WSDL no disponible"];
          soap.push({ service, status: result.status, issues });
          tasks.push({
            id: `wsdl/${service}`,
            status: issues.length ? "incomplete" : "ok",
            durationMs: Date.now() - wsdlStarted,
            ...(issues.length ? { code: "WSDL_INCOMPATIBLE_OR_UNAVAILABLE" } : {}),
          });
        } catch (error) {
          soap.push({ service, status: null, issues: [auditErrorCode(error)] });
          tasks.push({
            id: `wsdl/${service}`,
            status: signal.aborted ? "incomplete" : "error",
            code: auditErrorCode(error),
            durationMs: Date.now() - wsdlStarted,
          });
        } finally {
          wsdlDone++;
        }
      },
      () => signal.aborted || wsdlStopped,
    );
    await setPhase("conexión SQL");
    const connectTimeout = AbortSignal.timeout(options.connectionMs ?? L.connectionMs);
    const connectSignal = AbortSignal.any([signal, connectTimeout]);
    let connectSettled = signal.aborted;
    const connecting = signal.aborted
      ? Promise.reject(new AuditFailure("INTERRUPTED"))
      : deps.connect(`powermeta4-readonly-audit:${store.runId}`).then(
          (value) => value,
          (error: unknown) => {
            connectSettled = true;
            throw error;
          },
        );
    let listener: (() => void) | undefined;
    try {
      connection = await Promise.race([
        connecting.then((value) => {
          connectSettled = true;
          if (connectSignal.aborted) {
            void closeAuditWithin(value.close);
            throw new AuditFailure("CONNECTION_TIMEOUT");
          }
          return value;
        }),
        new Promise<never>((_, reject) => {
          listener = () => reject(new AuditFailure("CONNECTION_TIMEOUT"));
          if (connectSignal.aborted) listener();
          else connectSignal.addEventListener("abort", listener, { once: true });
        }),
      ]);
      tasks.push({ id: "connection", status: "ok" });
      log("Conexión SQL establecida.");
    } catch (error) {
      tasks.push({ id: "connection", status: "error", code: auditErrorCode(error) });
      log(`SQL no disponible: ${auditErrorCode(error)}. Se conservan fuentes y WSDL.`);
      if (!connectSettled || auditErrorCode(error) === "CONNECTION_CLOSE_TIMEOUT") forceExit = true;
    } finally {
      if (listener) connectSignal.removeEventListener("abort", listener);
    }
    if (connection && !signal.aborted) {
      const current = connection;
      executor = createAuditExecutor(current.request, { signal, onSlow: monitorSlow });
      let context = store.contextFingerprint([...current.context, store.runId]);
      try {
        const rows = await executor.read(
          `SELECT CONVERT(VARCHAR(170), SUSER_SID(), 2) AS PRINCIPAL_SCOPE, USER_ID() AS DATABASE_SCOPE, HAS_PERMS_BY_NAME(DB_NAME(), 'DATABASE', 'VIEW DEFINITION') AS CAN_VIEW_DEFINITION, HAS_PERMS_BY_NAME(NULL, 'SERVER', 'VIEW SERVER STATE') AS CAN_MONITOR`,
          {},
          { id: "context", family: "context", kind: "private", signal },
        );
        if (
          rows.length !== 1 ||
          typeof rows[0].PRINCIPAL_SCOPE !== "string" ||
          !rows[0].PRINCIPAL_SCOPE
        )
          throw new AuditFailure("CONTEXT_UNVERIFIED");
        const permissions = await executor.read(
          `SELECT T.TABLE_SCHEMA, T.TABLE_NAME, HAS_PERMS_BY_NAME(QUOTENAME(T.TABLE_SCHEMA) + '.' + QUOTENAME(T.TABLE_NAME), 'OBJECT', 'SELECT') AS CAN_READ FROM INFORMATION_SCHEMA.TABLES T WHERE T.TABLE_TYPE = 'BASE TABLE' AND (T.TABLE_NAME LIKE 'M4RCH[_]%' OR T.TABLE_NAME LIKE 'M4RDC[_]%' OR T.TABLE_NAME = 'M4ORO_EMPLEADOS') ORDER BY T.TABLE_SCHEMA, T.TABLE_NAME`,
          {},
          { id: "context/permissions", family: "context", kind: "private", signal },
        );
        context = store.contextFingerprint([
          ...current.context,
          JSON.stringify(rows),
          JSON.stringify(permissions),
        ]);
      } catch (error) {
        tasks.push({ id: "context", status: "error", code: auditErrorCode(error) });
        log("Contexto de permisos no comprobado; no se reutilizan metadatos anteriores.");
      }
      if (!executor.isStopped)
        state = await collectReadonlyAudit(PORTAL_FEATURES, executor.read, sources.candidates, {
          signal,
          dictionaryMs: options.dictionaryMs,
          probesMs: options.probesMs,
          onSchema: async (inventory, primary) =>
            store.resume(
              sourcesLoaded ? sources.code : digest(store.runId),
              digest(JSON.stringify([inventory, primary])),
              context,
            ),
          onBatch: (entry) => store.append(entry),
          methods: sources.methods,
          onProgress: (value) => {
            progress = value;
          },
          onState: (value) => {
            state = value;
          },
          onPhase: setPhase,
        });
      else tasks.push({ id: "sql", status: "incomplete", code: "SQL_STOPPED" });
    }
    phase = "WSDL";
    log("Fase: WSDL y consolidación de contratos.");
    await wsdlWork;
    await setPhase("guardado");
    status =
      reason === "OUTPUT_WRITE_FAILED"
        ? "failed"
        : signal.aborted
          ? "interrupted"
          : [...tasks, ...state.tasks].some((task) => task.status !== "ok")
            ? "partial"
            : "complete";
    if (signal.aborted) reason ??= options.signal?.aborted ? "INTERRUPTED" : "RUN_BUDGET";
  } catch (error) {
    status = "failed";
    reason = auditErrorCode(error);
    tasks.push({ id: "runner", status: "error", code: reason });
    log(`Interrupción controlada: ${reason}.`);
    control.abort();
  } finally {
    clearInterval(publisher);
    clearInterval(heartbeat);
    clearTimeout(deadline);
    executor?.stop();
    if (wsdlWork)
      try {
        await wsdlWork;
      } catch {
        tasks.push({ id: "wsdl", status: "error", code: "READ_FAILED" });
      }
    for (const service of Object.keys(SOAP_CATALOG)) {
      const code = signal.aborted ? "INTERRUPTED" : "WSDL_DEFERRED";
      if (!tasks.some((task) => task.id === `wsdl/${service}`))
        tasks.push({ id: `wsdl/${service}`, status: "incomplete", code });
      if (!soap.some((row) => row.service === service))
        soap.push({ service, status: null, issues: [code] });
    }
    if (
      monitorRunning &&
      !(await closeAuditWithin(() => monitorRunning ?? Promise.resolve(), 5000))
    ) {
      forceExit = true;
      if (status !== "failed") status = "partial";
      reason ??= "MONITOR_CLOSE_TIMEOUT";
      tasks.push({ id: "waits/close", status: "incomplete", code: "MONITOR_CLOSE_TIMEOUT" });
    }
    log("Cierre de conexiones y guardado final.");
    if (connection && !(await closeAuditWithin(connection.close))) {
      forceExit = true;
      if (status !== "failed") status = "partial";
      reason ??= "CLOSE_TIMEOUT";
      tasks.push({ id: "connection-close", status: "incomplete", code: "CLOSE_TIMEOUT" });
    }
    if (executor?.activeCount) {
      forceExit = true;
      if (status !== "failed") status = "partial";
      reason ??= "CANCEL_UNCONFIRMED";
    }
    try {
      await persist();
    } catch (error) {
      status = "failed";
      reason = "OUTPUT_WRITE_FAILED";
      log(`Causa de almacenamiento: ${auditErrorCode(error)}.`);
      log("OUTPUT_WRITE_FAILED; se conserva la última generación válida y el diario.");
    } finally {
      try {
        store.close();
      } catch (error) {
        status = "failed";
        reason = "OUTPUT_WRITE_FAILED";
        log(`Cierre del diario: ${auditErrorCode(error)}.`);
      }
    }
  }
  const errors = [...tasks, ...state.tasks].filter((task) => task.status === "error").length;
  log(
    `Fin: estado=${status}; duración=${((Date.now() - startedAt) / 1000).toFixed(1)}s; consultas=${executor?.progress().started ?? 0}; reutilizadas=${progress.reused}; referencias=${state.coverage.visited.length}; pendientes=${state.coverage.unvisited.length}; errores=${errors}; motivo=${reason ?? "fin de tareas"}.`,
  );
  log(`Archivos: ${store.output}`);
  return { exitCode: status === "complete" ? 0 : 1, forceExit };
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const interrupt = new AbortController();
  const stop = () => interrupt.abort();
  process.once("SIGINT", stop);
  process.once("SIGTERM", stop);
  if (process.argv.length !== 2) {
    console.error("Ejecuta npm run portal:readonly-audit sin parámetros.");
    process.exitCode = 1;
  } else {
    loadEnv();
    void runReadonlyAudit(defaultDeps(), { signal: interrupt.signal })
      .then(
        (result) => {
          process.exitCode = result.exitCode;
          if (result.forceExit) process.stdout.write("", () => process.exit(result.exitCode));
        },
        (error: unknown) => {
          console.error(
            `Diagnóstico detenido: ${auditErrorCode(error)}. No se muestran mensajes del servidor.`,
          );
          process.exitCode = 1;
        },
      )
      .finally(() => {
        process.removeListener("SIGINT", stop);
        process.removeListener("SIGTERM", stop);
      });
  }
}
