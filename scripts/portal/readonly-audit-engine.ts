import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { collectMeta4References, parseMeta4References } from "../../src/lib/portal/meta4-refs";
import { withTeamScope } from "../../src/lib/portal/data/team-scope";
import type { PortalFeature } from "../../src/lib/portal/types";
import {
  AUDIT_LIMITS as L,
  REQUIRED_READ_OBJECTS,
  REQUIRED_READ_NODES,
  auditErrorCode,
  digest,
  emptyAuditState,
  identifier,
  mapAuditWork,
  stripOuterOrderBy,
  technicalText,
  type AuditBinding,
  type AuditCacheEntry,
  type AuditParams,
  type AuditRead,
  type AuditReadOptions,
  type AuditReference,
  type AuditRow,
  type AuditState,
} from "./readonly-audit-model";
import {
  SAFE_FIELDS,
  sanitizeMetadataRows,
  assertSafeMetadataEntry,
  safeMetadataText,
} from "./readonly-audit-safety";
import { auditBindingIssue } from "./readonly-audit-bindings";

export type AuditCoreOptions = {
  signal?: AbortSignal;
  dictionaryMs?: number;
  probesMs?: number;
  onSchema?: (
    inventory: readonly AuditRow[],
    primary?: readonly AuditRow[],
  ) => Promise<ReadonlyMap<string, AuditCacheEntry>>;
  onBatch?: (entry: AuditCacheEntry) => void;
  onPhase?: (phase: string) => void;
  onProgress?: (value: { processed: number; pending: number; reused: number }) => void;
  onState?: (state: AuditState) => void;
};
type Column = AuditBinding & { name: string };
type Table = { schema: string; name: string; columns: Column[]; order: string[] };
type Job = { table: Table; key: AuditReference["key"]; values: string[] };
const keys = ["ID_T3", "ID_TI", "ID_OBJECT", "ID_SENTENCE"] as const;
const refId = (ref: AuditReference) => `${ref.key}/${ref.value}`;
const quote = (name: string) => {
  if (!identifier.test(name)) throw new Error("Invalid identifier");
  return `[${name}]`;
};
const binary = new Set(["binary", "varbinary", "image", "timestamp", "rowversion"]);
const timeouts = new Set(["ETIMEOUT", "TimeoutError", "QUERY_TIMEOUT"]);
const fatal = new Set([
  "ELOGIN",
  "ESOCKET",
  "ECONNREFUSED",
  "ENOTFOUND",
  "ECONNCLOSED",
  "ENOCONN",
  "CANCEL_UNCONFIRMED",
]);

export async function collectReadonlyAudit(
  features: readonly PortalFeature[],
  read: AuditRead,
  sourceCandidates: readonly string[] = [],
  options: AuditCoreOptions = {},
): Promise<AuditState> {
  const state = emptyAuditState();
  const references = new Map<
    string,
    { ref: AuditReference; status: "pending" | "processing" | "complete" | "failed" }
  >();
  const symbols = new Set<string>();
  const publishedSymbols = new Set<string>();
  const knownT3 = new Set<string>();
  const absentT3 = new Set<string>();
  const incompatibleT3 = new Set<string>();
  const parsedCode = new Map<string, { objects: string[]; logical: string[] }>();
  const ruleReferences = new Set<string>();
  const physical = new Set(
    features.flatMap((feature) =>
      (feature.sections ?? []).flatMap((section) =>
        section.kind === "consult" ? (section.consult.query?.tables ?? []) : [],
      ),
    ),
  );
  const timeoutCounts = new Map<string, number>();
  const unsupported = new Set<string>();
  const found = new Set<string>();
  const failed = new Set<string>();
  let fatalSql = false;
  let reused = 0;
  let cache: ReadonlyMap<string, AuditCacheEntry> = new Map();
  const publish = () => {
    state.coverage.visited = [...references.values()]
      .filter((item) => item.status === "complete")
      .map((item) => refId(item.ref))
      .sort();
    state.coverage.unvisited = [...references.values()]
      .filter((item) => item.status !== "complete")
      .map((item) => item.ref);
    state.referencesInRules = [...ruleReferences].sort();
    options.onProgress?.({
      processed: state.coverage.visited.length,
      pending: state.coverage.unvisited.length,
      reused,
    });
    options.onState?.(state);
  };
  const enqueue = (ref: AuditReference) => {
    if (!identifier.test(ref.value) || references.has(refId(ref))) return;
    references.set(refId(ref), { ref, status: "pending" });
  };
  const execute = async (
    statement: string,
    params: AuditParams,
    meta: AuditReadOptions,
  ): Promise<AuditRow[] | null> => {
    if (fatalSql || meta.signal?.aborted) return null;
    if (unsupported.has(meta.family) || (timeoutCounts.get(meta.family) ?? 0) >= 2) {
      state.tasks.push({ id: meta.id, status: "incomplete", code: "FAMILY_DEFERRED" });
      return null;
    }
    const started = Date.now();
    try {
      assertReadOnlySql(statement);
      const rows = await read(statement, params, meta);
      timeoutCounts.set(meta.family, 0);
      state.tasks.push({
        id: meta.id,
        status: "ok",
        rows: rows.length,
        durationMs: Date.now() - started,
      });
      return rows;
    } catch (error) {
      const code = auditErrorCode(error);
      if (timeouts.has(code))
        timeoutCounts.set(meta.family, (timeoutCounts.get(meta.family) ?? 0) + 1);
      if (["SQL_207", "SQL_208"].includes(code)) unsupported.add(meta.family);
      if (fatal.has(code)) fatalSql = true;
      state.tasks.push({
        id: meta.id,
        status: meta.signal?.aborted ? "incomplete" : "error",
        code,
        durationMs: Date.now() - started,
      });
      return null;
    }
  };
  const seeds = [
    ...new Set([
      ...REQUIRED_READ_OBJECTS,
      ...collectMeta4References(features).map((ref) => ref.object),
    ]),
  ].sort();
  for (const id of seeds) {
    symbols.add(id);
    enqueue({ key: "ID_T3", value: id });
  }
  // Contrato explícito aún sin correspondencia física: se consulta antes de
  // ampliar el grafo por reglas. No se da por válida la tabla supuesta del lector.
  if (features.some((feature) => feature.id === "empleado.retribucion.certificados"))
    enqueue({ key: "ID_OBJECT", value: "SSP_LG_ENT_ADDRESS" });
  state.coverage.seedObjects = [...seeds];
  const validateEntry = (entry: AuditCacheEntry, id: string): boolean => {
    try {
      assertSafeMetadataEntry(entry);
      return true;
    } catch (error) {
      if (auditErrorCode(error) !== "UNSAFE_CHECKPOINT") throw error;
      state.tasks.push({ id, status: "error", code: "UNSAFE_CHECKPOINT" });
      return false;
    }
  };
  const saveEntry = (entry: AuditCacheEntry, id: string): boolean => {
    if (!validateEntry(entry, id)) return false;
    try {
      options.onBatch?.(entry);
      return true;
    } catch (error) {
      if (auditErrorCode(error) !== "UNSAFE_CHECKPOINT") throw error;
      state.tasks.push({ id, status: "error", code: "UNSAFE_CHECKPOINT" });
      return false;
    }
  };
  const dictController = new AbortController();
  const dictTimer = setTimeout(
    () => dictController.abort(),
    options.dictionaryMs ?? L.dictionaryMs,
  );
  dictTimer.unref();
  const dictSignal = options.signal
    ? AbortSignal.any([options.signal, dictController.signal])
    : dictController.signal;
  options.onPhase?.("esquema");
  const inventory =
    (await execute(
      `SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS ORDER BY TABLE_SCHEMA, TABLE_NAME, ORDINAL_POSITION`,
      {},
      { id: "schema", family: "schema", kind: "metadata", signal: dictSignal },
    )) ?? [];
  const tables = new Map<string, Table>();
  const tablesByName = new Map<string, Table[]>();
  for (const row of inventory) {
    const name = technicalText(row.TABLE_NAME);
    const column = technicalText(row.COLUMN_NAME);
    const type = technicalText(row.DATA_TYPE);
    const schema = technicalText(row.TABLE_SCHEMA) ?? "dbo";
    if (!name || !column || !type) continue;
    const table = tables.get(`${schema}.${name}`) ?? { schema, name, columns: [], order: [] };
    table.columns.push({
      name: column,
      type: type.toLowerCase(),
      ...(typeof row.CHARACTER_MAXIMUM_LENGTH === "number"
        ? { length: row.CHARACTER_MAXIMUM_LENGTH }
        : {}),
    });
    tables.set(`${schema}.${name}`, table);
  }
  for (const table of tables.values())
    tablesByName.set(table.name, [...(tablesByName.get(table.name) ?? []), table]);
  const refreshContracts = (names: Iterable<string>) => {
    for (const name of names)
      state.contracts[name] = (tablesByName.get(name) ?? []).flatMap((table) =>
        table.columns.map((column) => ({
          table: table.name,
          schema: table.schema,
          column: column.name,
          type: column.type,
          length: column.length ?? null,
        })),
      );
  };
  refreshContracts(
    new Set([
      ...physical,
      ...[...tables.values()]
        .filter((table) => /^M4R(?:CH|DC)_/.test(table.name))
        .map((table) => table.name),
    ]),
  );
  publish();
  if (inventory.length) options.onPhase?.("contratos de columnas");
  if (inventory.length) {
    const primary = await execute(
      `SELECT K.TABLE_SCHEMA, K.TABLE_NAME, K.COLUMN_NAME, K.ORDINAL_POSITION, C.CONSTRAINT_NAME
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS C JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE K
ON K.CONSTRAINT_CATALOG = C.CONSTRAINT_CATALOG AND K.CONSTRAINT_SCHEMA = C.CONSTRAINT_SCHEMA AND K.CONSTRAINT_NAME = C.CONSTRAINT_NAME
WHERE C.CONSTRAINT_TYPE = 'PRIMARY KEY' ORDER BY K.TABLE_SCHEMA, K.TABLE_NAME, K.ORDINAL_POSITION`,
      {},
      { id: "schema/keys", family: "schema/keys", kind: "metadata", signal: dictSignal },
    );
    for (const row of primary ?? []) {
      if (!technicalText(row.CONSTRAINT_NAME)) continue;
      const table = tables.get(
        `${technicalText(row.TABLE_SCHEMA) ?? "dbo"}.${technicalText(row.TABLE_NAME)}`,
      );
      const column = technicalText(row.COLUMN_NAME);
      if (table && column && table.columns.some((item) => item.name === column))
        table.order.push(column);
    }
    cache = (await options.onSchema?.(inventory, primary ?? [])) ?? cache;
  }
  const byKey = new Map(
    keys.map((key) => [
      key,
      [...tables.values()].filter(
        (table) =>
          /^M4R(?:CH|DC)_/.test(table.name) &&
          table.columns.some((column) => column.name === key) &&
          !(table.name === "M4RCH_NODES" && key === "ID_TI"),
      ),
    ]),
  );
  const t3Table = [...tables.values()].find((table) => table.name === "M4RCH_T3S");
  const binding = (table: Table | undefined, key: string): AuditBinding => {
    const column = table?.columns.find((item) => item.name === key);
    return column
      ? { type: column.type, length: column.length }
      : { type: "nvarchar", length: 128 };
  };
  const apply = (entry: AuditCacheEntry) => {
    for (const symbol of entry.symbols) symbols.add(symbol);
    const context = new Set(entry.symbols);
    for (const row of entry.rows)
      for (const field of ["SOURCE_CODE", "APISQL"]) {
        const code = row[field];
        if (typeof code === "string") safeMetadataText(code, context, publishedSymbols);
      }
    state.metadataSymbols = [...publishedSymbols].sort();
    for (const ref of entry.references) enqueue(ref);
    for (const name of entry.physical)
      if (!physical.has(name)) {
        physical.add(name);
        refreshContracts([name]);
      }
    for (const id of entry.ruleReferences) {
      knownT3.add(id);
      ruleReferences.add(id);
    }
  };
  let confirming: Promise<void> = Promise.resolve();
  const confirm = (ids: readonly string[]): Promise<boolean> => {
    const next = confirming.then(async () => {
      const wanted = [...new Set(ids)]
        .filter((id) => {
          if (!identifier.test(id) || knownT3.has(id) || absentT3.has(id) || incompatibleT3.has(id))
            return false;
          const issue = auditBindingIssue(id, binding(t3Table, "ID_T3"));
          if (!issue) return true;
          incompatibleT3.add(id);
          let task = state.tasks.find((item) => item.id === `confirm/schema/${issue}`);
          if (!task) {
            task = {
              id: `confirm/schema/${issue}`,
              status: "ok",
              code: "CANDIDATES_EXCLUDED_BY_SCHEMA",
              rows: 0,
            };
            state.tasks.push(task);
          }
          task.rows = (task.rows ?? 0) + 1;
          return false;
        })
        .sort();
      let complete = true;
      for (
        let offset = 0;
        offset < wanted.length && !dictSignal.aborted && !fatalSql;
        offset += L.batchSize
      ) {
        const batch = wanted.slice(offset, offset + L.batchSize);
        const params = Object.fromEntries(batch.map((id, index) => [`v${index}`, id]));
        const statement = `SELECT ID_T3 FROM ${t3Table ? `${quote(t3Table.schema)}.${quote(t3Table.name)}` : "M4RCH_T3S"} WHERE ID_T3 IN (${batch.map((_, index) => `@v${index}`).join(", ")})`;
        const key = digest(statement + JSON.stringify(params));
        const saved = cache.get(key);
        if (saved && !validateEntry(saved, `confirm/${key.slice(0, 12)}`)) {
          complete = false;
          continue;
        }
        const rows =
          saved?.rows ??
          (await execute(statement, params, {
            id: `confirm/${key.slice(0, 12)}`,
            family: "confirm/T3",
            kind: "metadata",
            signal: dictSignal,
            bindings: Object.fromEntries(
              batch.map((_, index) => [`v${index}`, binding(t3Table, "ID_T3")]),
            ),
          }));
        if (saved) {
          reused++;
          state.tasks.push({
            id: `confirm/${key.slice(0, 12)}`,
            status: "ok",
            reused: true,
            rows: rows?.length ?? 0,
          });
        }
        if (!rows) {
          complete = false;
          continue;
        }
        const matches = rows.flatMap((row) => {
          const id = technicalText(row.ID_T3);
          return id && batch.includes(id) ? [id] : [];
        });
        if (
          !saved &&
          !saveEntry(
            {
              key,
              rows: matches.map((id) => ({ ID_T3: id })),
              references: [],
              physical: [],
              symbols: matches,
              ruleReferences: [],
            },
            `confirm/${key.slice(0, 12)}`,
          )
        ) {
          complete = false;
          continue;
        }
        for (const id of matches) {
          knownT3.add(id);
          symbols.add(id);
        }
        for (const id of batch) if (!knownT3.has(id)) absentT3.add(id);
      }
      return complete && !dictSignal.aborted && !fatalSql;
    });
    confirming = next.then(
      () => {},
      () => {},
    );
    return next;
  };
  state.coverage.seedObjects = seeds.sort();
  options.onPhase?.("diccionario");
  publish();

  const processJob = async (job: Job) => {
    const family = `${job.table.schema}.${job.table.name}/${job.key}`;
    const valid: string[] = [];
    const excluded = new Map<string, number>();
    for (const value of job.values) {
      const issue = auditBindingIssue(value, binding(job.table, job.key));
      if (!issue) valid.push(value);
      else {
        failed.add(`${job.key}/${value}`);
        excluded.set(issue, (excluded.get(issue) ?? 0) + 1);
      }
    }
    for (const [code, rows] of excluded)
      state.tasks.push({ id: `${family}/parameters`, status: "incomplete", code, rows });
    if (!valid.length) return;
    job = { ...job, values: valid };
    const columns = job.table.columns.filter(
      (column) => SAFE_FIELDS.has(column.name) && !binary.has(column.type),
    );
    if (!columns.length) return;
    const params = Object.fromEntries(job.values.map((value, index) => [`v${index}`, value]));
    const base = `SELECT ${columns.map((column) => quote(column.name)).join(", ")} FROM ${quote(job.table.schema)}.${quote(job.table.name)} WHERE ${quote(job.key)} IN (${job.values.map((_, index) => `@v${index}`).join(", ")})`;
    const key = digest(base + JSON.stringify(params));
    const taskId = `${family}/${key.slice(0, 12)}`;
    const attach = (rows: readonly AuditRow[]) => {
      for (const value of job.values) {
        const matches = rows.filter((row) => {
          const keyValue = row[job.key];
          return typeof keyValue === "string" && keyValue.trim() === value;
        });
        if (!matches.length) continue;
        found.add(`${job.key}/${value}`);
        const bucket = `${job.table.name}/${job.key}/${value}`;
        state.dictionary[bucket] = [...(state.dictionary[bucket] ?? []), ...matches];
      }
    };
    const saved = cache.get(key);
    if (saved) {
      if (!validateEntry(saved, taskId)) {
        for (const value of job.values) failed.add(`${job.key}/${value}`);
        return;
      }
      reused++;
      apply(saved);
      attach(saved.rows);
      state.tasks.push({ id: taskId, status: "ok", reused: true, rows: saved.rows.length });
      publish();
      return;
    }
    const entry: AuditCacheEntry = {
      key,
      rows: [],
      references: [],
      physical: [],
      symbols: [],
      ruleReferences: [],
    };
    let complete = true;
    const order = job.table.order.length
      ? job.table.order
      : [
          job.key,
          ...columns
            .filter(
              (column) => column.name.startsWith("ID_") && !["text", "ntext"].includes(column.type),
            )
            .map((column) => column.name),
        ];
    if (
      job.table.columns.some((column) => column.name === "SOURCE_CODE") &&
      !columns.some((column) => column.name === "SOURCE_CODE")
    )
      state.tasks.push({
        id: `${taskId}/source`,
        status: "incomplete",
        code: "BINARY_SOURCE_UNAVAILABLE",
      });
    for (let page = 0; page < L.maxPages; page++) {
      const rows = await execute(
        `${base} ORDER BY ${[...new Set(order)].map(quote).join(", ")} OFFSET @offset ROWS FETCH NEXT @size ROWS ONLY`,
        { ...params, offset: page * L.pageSize, size: L.pageSize },
        {
          id: `${taskId}/page-${page}`,
          family,
          kind: "metadata",
          signal: dictSignal,
          bindings: Object.fromEntries(
            job.values.map((_, index) => [`v${index}`, binding(job.table, job.key)]),
          ),
        },
      );
      if (!rows) {
        complete = false;
        break;
      }
      const add = (refKey: AuditReference["key"], value: unknown) => {
        const id = technicalText(value);
        if (id) entry.references.push({ key: refKey, value: id });
      };
      const candidates: string[] = [];
      for (const row of rows) {
        for (const [field, value] of Object.entries(row)) {
          const id = technicalText(value);
          if (SAFE_FIELDS.has(field) && field.startsWith("ID_") && id) {
            entry.symbols.push(id);
          }
        }
        for (const field of [
          "ID_TI_BASE",
          "ID_TI_USED",
          "ID_RULE_TI",
          ...(job.key === "ID_T3" ? ["ID_TI"] : []),
        ])
          add("ID_TI", row[field]);
        for (const field of ["ID_T3_BASE", "ID_T3_USED", "ID_CONNECTOR_T3", "ID_ITEM_CONCTOR_T3"]) {
          const id = technicalText(row[field]);
          if (id) candidates.push(id);
        }
        for (const field of ["ID_READ_OBJECT", "ID_WRITE_OBJECT"]) add("ID_OBJECT", row[field]);
        for (const field of ["ID_READ_SENTENCE", "ID_SENTENCE"]) add("ID_SENTENCE", row[field]);
        if (job.table.name === "M4RDC_LOGIC_OBJECT") {
          const name = technicalText(row.REAL_NAME);
          if (name) entry.physical.push(name);
        }
        for (const field of ["SOURCE_CODE", "APISQL"]) {
          const code = row[field];
          if (typeof code !== "string") continue;
          const hash = digest(code);
          let parsed = parsedCode.get(hash);
          if (!parsed) {
            parsed = {
              objects: [...new Set(parseMeta4References(code).map((ref) => ref.object))],
              logical: [
                ...new Set(
                  [
                    ...code
                      .replace(/'(?:''|[^'])*'/g, " ")
                      .matchAll(/&([A-Z][A-Z0-9_]+)|\b(?:FROM|JOIN)\s+([A-Z][A-Z0-9_]+)/gi),
                  ].map((match) => match[1] ?? match[2]),
                ),
              ],
            };
            parsedCode.set(hash, parsed);
          }
          candidates.push(...parsed.objects);
          if (field === "APISQL") for (const name of parsed.logical) add("ID_OBJECT", name);
        }
      }
      if (!(await confirm(candidates))) complete = false;
      for (const id of new Set(candidates))
        if (knownT3.has(id)) {
          add("ID_T3", id);
          entry.ruleReferences.push(id);
        }
      const used = new Set<string>();
      const safe = sanitizeMetadataRows(rows, new Set([...symbols, ...entry.symbols]), used);
      entry.symbols.push(...used);
      entry.rows.push(...safe);
      publish();
      if (rows.length < L.pageSize) break;
      if (!job.table.order.length || page === L.maxPages - 1) {
        complete = false;
        state.tasks.push({
          id: taskId,
          status: "incomplete",
          code: job.table.order.length ? "PAGE_LIMIT" : "NO_STABLE_PAGINATION_KEY",
        });
        break;
      }
    }
    if (complete) {
      entry.references = [...new Map(entry.references.map((ref) => [refId(ref), ref])).values()];
      entry.symbols = [...new Set(entry.symbols)];
      entry.physical = [...new Set(entry.physical)];
      entry.ruleReferences = [...new Set(entry.ruleReferences)];
    }
    const accepted = complete ? saveEntry(entry, taskId) : validateEntry(entry, taskId);
    if (accepted) {
      apply(entry);
      attach(entry.rows);
      publish();
    }
    if (!complete || !accepted) for (const value of job.values) failed.add(`${job.key}/${value}`);
  };
  let sourceCandidatesQueued = false;
  let rootWaveComplete = false;
  if (inventory.length)
    while (!dictSignal.aborted && !fatalSql) {
      const wave = [...references.values()]
        .filter((item) => item.status === "pending")
        .sort((a, b) => refId(a.ref).localeCompare(refId(b.ref)));
      if (!wave.length) break;
      for (const item of wave) item.status = "processing";
      const jobs: Job[] = [];
      for (const key of keys) {
        const values = wave.filter((item) => item.ref.key === key).map((item) => item.ref.value);
        for (let offset = 0; offset < values.length; offset += L.batchSize)
          for (const table of byKey.get(key) ?? [])
            jobs.push({ table, key, values: values.slice(offset, offset + L.batchSize) });
      }
      await mapAuditWork(jobs, processJob, () => dictSignal.aborted || fatalSql);
      // Mantiene la cobertura del nodo/TI documentado sin confundirlo con un T3.
      for (const node of REQUIRED_READ_NODES) enqueue({ key: "ID_TI", value: node.ti });
      // Primero los contratos del registro y sus nodos; después, los candidatos
      // heurísticos de los originales. El presupuesto temporal limita el cierre.
      if (rootWaveComplete && !sourceCandidatesQueued) {
        sourceCandidatesQueued = true;
        await confirm(sourceCandidates);
        for (const id of knownT3) {
          if (!seeds.includes(id)) seeds.push(id);
          enqueue({ key: "ID_T3", value: id });
        }
        state.coverage.seedObjects = seeds.sort();
      }
      rootWaveComplete = true;
      for (const item of wave) {
        item.status =
          dictSignal.aborted || fatalSql || failed.has(refId(item.ref)) ? "failed" : "complete";
        if (item.status === "complete" && !found.has(refId(item.ref)))
          state.tasks.push({
            id: refId(item.ref),
            status: "incomplete",
            code: "DEFINITION_NOT_FOUND",
          });
      }
      publish();
    }
  clearTimeout(dictTimer);
  if (dictSignal.aborted && !options.signal?.aborted)
    state.tasks.push({ id: "dictionary-budget", status: "incomplete", code: "DICTIONARY_BUDGET" });
  refreshContracts(physical);
  for (const name of [...physical].sort()) {
    if (!tablesByName.has(name))
      state.tasks.push({ id: `physical/${name}`, status: "incomplete", code: "TABLE_NOT_FOUND" });
  }
  options.onPhase?.("sondeos");
  publish();
  const probeController = new AbortController();
  const probeTimer = setTimeout(() => probeController.abort(), options.probesMs ?? L.probesMs);
  probeTimer.unref();
  const probeSignal = options.signal
    ? AbortSignal.any([options.signal, probeController.signal])
    : probeController.signal;
  const queries = new Map<
    string,
    { statement: string; scope: string; uses: { feature: string; consult: string }[] }
  >();
  for (const feature of features)
    for (const section of feature.sections ?? []) {
      if (section.kind !== "consult" || !section.consult.query) continue;
      const query = section.consult.query;
      const statement = stripOuterOrderBy(query.statement);
      const key = digest(query.scope + statement);
      const entry = queries.get(key) ?? { statement, scope: query.scope, uses: [] };
      entry.uses.push({ feature: feature.id, consult: section.consult.id });
      queries.set(key, entry);
    }
  const today = new Date();
  for (const organization of ["CYC", "IBER", "COLL"]) {
    if (probeSignal.aborted || fatalSql || !inventory.length || !queries.size) break;
    const own = await execute(
      `SELECT TOP 1 ID_EMPLEADO FROM M4ORO_EMPLEADOS WHERE ID_ORGANIZATION = @organization AND COMPUTA = '1' ORDER BY ID_EMPLEADO`,
      { organization },
      { id: `sample/${organization}/own`, family: "samples", kind: "private", signal: probeSignal },
    );
    const manager = await execute(
      `SELECT TOP 1 O.ID_EMPLEADO FROM M4ORO_EMPLEADOS O WHERE O.ID_ORGANIZATION = @organization AND O.COMPUTA = '1' AND EXISTS (SELECT 1 FROM M4ORO_EMPLEADOS T WHERE T.ID_ORGANIZATION = O.ID_ORGANIZATION AND T.ID_RESPONSABLE = O.ID_EMPLEADO AND T.COMPUTA = '1') ORDER BY O.ID_EMPLEADO`,
      { organization },
      {
        id: `sample/${organization}/manager`,
        family: "samples",
        kind: "private",
        signal: probeSignal,
      },
    );
    await mapAuditWork(
      [...queries],
      async ([key, query]) => {
        const id = `probe/${organization}/${key.slice(0, 12)}`;
        const sample = (query.scope === "team" ? manager : own)?.[0]?.ID_EMPLEADO;
        const employeeId = typeof sample === "string" ? sample.trim() : null;
        if (query.scope !== "society" && !employeeId) {
          state.tasks.push({ id, status: "incomplete", code: "NO_REPRESENTATIVE_RECORD" });
          return;
        }
        const statement = `SELECT COUNT_BIG(*) AS TOTAL FROM (${query.statement}) P`;
        const result = await execute(
          query.scope === "team" ? withTeamScope(statement) : statement,
          { organization, today, ...(employeeId ? { employeeId } : {}) },
          { id, family: `probe/${key}`, kind: "probe", signal: probeSignal },
        );
        const task = state.tasks.findLast((item) => item.id === id);
        const raw = result?.[0]?.TOTAL;
        const total = typeof raw === "string" && /^\d+$/.test(raw) ? Number(raw) : raw;
        for (const use of query.uses)
          state.probes.push({
            ...use,
            organization,
            queryHash: key,
            status: result ? "ok" : task?.status === "error" ? "error" : "incomplete",
            ...(!result ? { code: task?.code ?? "NOT_EXECUTED" } : {}),
            records:
              typeof total === "number" && Number.isSafeInteger(total) && total >= 0 ? total : null,
          });
        publish();
      },
      () => probeSignal.aborted || fatalSql,
    );
  }
  clearTimeout(probeTimer);
  const attributed = new Set(
    state.probes.map((probe) => `${probe.organization}/${probe.feature}/${probe.consult}`),
  );
  for (const organization of ["CYC", "IBER", "COLL"])
    for (const [key, query] of queries)
      for (const use of query.uses) {
        if (!attributed.has(`${organization}/${use.feature}/${use.consult}`))
          state.probes.push({
            ...use,
            organization,
            queryHash: key,
            status: "incomplete",
            code: "NOT_EXECUTED",
            records: null,
          });
      }
  if (probeSignal.aborted && !options.signal?.aborted)
    state.tasks.push({ id: "probe-budget", status: "incomplete", code: "PROBE_BUDGET" });
  if (options.signal?.aborted)
    state.tasks.push({ id: "interrupted", status: "incomplete", code: "INTERRUPTED" });
  publish();
  return state;
}
