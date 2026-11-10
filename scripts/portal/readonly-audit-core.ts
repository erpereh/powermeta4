/** Motor inyectable del diagnóstico. Solo SELECT revisadas; nunca ejecuta LN4/APISQL extraído. */
import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { collectMeta4References, parseMeta4References } from "../../src/lib/portal/meta4-refs";
import { withTeamScope } from "../../src/lib/portal/data/team-scope";
import type { PortalFeature } from "../../src/lib/portal/types";

export type AuditRow = Record<string, unknown>;
export type AuditRead = (
  statement: string,
  params?: Readonly<Record<string, string | number | Date>>,
) => Promise<AuditRow[]>;
export type AuditTask = {
  id: string;
  status: "ok" | "error" | "incomplete";
  code?: string;
  rows?: number;
};
const IDENTIFIER = /^[A-Z][A-Z0-9_#$]*$/i;
const PAGE_SIZE = 2000;
const MAX_PAGES = 100;
const MAX_REFERENCES = 5000;
const SAFE_FIELDS = new Set([
  "ID_T3",
  "ID_T3_BASE",
  "ID_T3_USED",
  "ID_NODE",
  "ID_NODE_USED",
  "ID_TI",
  "ID_TI_BASE",
  "ID_TI_USED",
  "ID_RULE_TI",
  "ID_ITEM",
  "ID_ITEM_USED",
  "ID_OBJECT",
  "ID_FIELD",
  "REAL_NAME",
  "ID_READ_OBJECT",
  "ID_WRITE_OBJECT",
  "ID_READ_FIELD",
  "ID_READ_SENTENCE",
  "ID_SENTENCE",
  "ID_WHERE_TYPE",
  "ID_METHOD",
  "IS_METARULE",
  "IS_ROOT",
  "ID_CSTYPE",
  "PARAM_POS",
  "APISQL",
  "SOURCE_CODE",
  "DATA_TYPE",
  "LENGTH",
  "PRECISION",
  "SCALE",
  "IS_NULLABLE",
  "ID_CONNECTOR_T3",
  "ID_ITEM_CONCTOR_T3",
  "ID_TI_BASE",
  "ID_TYPE",
  "ID_NODE_BASE",
]);
const SAFE_LITERALS = new Set([
  "PENDIENTE",
  "ACEPTADO",
  "ACEPTADA",
  "RECHAZADO",
  "BORRADO",
  "CYC",
  "IBER",
  "COLL",
  "EUR",
]);
const text = (value: unknown): string | null =>
  typeof value === "string" && value.trim() ? value.trim() : null;
export const auditErrorCode = (error: unknown): string => {
  if (
    error &&
    typeof error === "object" &&
    "code" in error &&
    typeof error.code === "string" &&
    [
      "ELOGIN",
      "ETIMEOUT",
      "ESOCKET",
      "EINSTLOOKUP",
      "ECONNREFUSED",
      "ENOTFOUND",
      "ECONNCLOSED",
      "ENOCONN",
    ].includes(error.code)
  )
    return error.code;
  if (error && typeof error === "object" && "number" in error && typeof error.number === "number")
    return `SQL_${error.number}`;
  return error instanceof Error &&
    ["PortalSqlGuardError", "TimeoutError", "AbortError"].includes(error.name)
    ? error.name
    : "READ_FAILED";
};

/** No se guardan comentarios, direcciones, credenciales ni literales libres del diccionario. */
export function safeMetadataText(value: string, symbols: ReadonlySet<string> = new Set()): string {
  return value
    .replace(
      /'(?:''|\\.|[^'\\])*'|"(?:""|\\.|[^"\\])*"|\/\*[\s\S]*?\*\/|\/\/[^\r\n]*|--[^\r\n]*/g,
      (token) => {
        if (token.startsWith("/*") || token.startsWith("//") || token.startsWith("--")) return " ";
        const content = token.slice(1, -1);
        // Ningún número libre: puede ser una cuenta, documento o importe individual.
        return `${token[0]}${SAFE_LITERALS.has(content) || symbols.has(content) || ["0", "1", "2", "3", "4", "5", "-1", "4000-01-01"].includes(content) ? content : "[LITERAL OMITIDO]"}${token[0]}`;
      },
    )
    .replace(/(?:https?:\/\/|\\\\)[^\s'"<>]+/gi, "[DIRECCIÓN OMITIDA]")
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[CORREO OMITIDO]");
}

export const REQUIRED_READ_OBJECTS = [
  "SSE_BFT_EE_BNFT_ELEC",
  "SSE_H_HR_KNC_LVL",
  "SSE_H_HR_KNC_EXP",
  "SSE_CR_PREFERENC",
  "SSE_OBJECTIVES",
  "SSM_EV_ROL_LV_OBJ",
  "SCO_GTA_EMPLOYEE_PRESENCE_REPR",
  "SCO_MENU",
  "SMCO_BUDGET",
  "SSM_JOB_COMPETENCES",
  "SSM_DEFINE_CRITERIA",
  "SMCO_EVALUATOR",
  "SSCO_H_EVALUTE",
  "SSM_TRAINING_REQUEST",
  "SSM_SALARY_REVIEW_PROCESS",
  "SMCO_EMPLOYEE_PROFESIONAL_DATA",
  "SCO_APPLYVAL_CALEN",
  "SSE_CARGA_FESTIVOS",
  "SSM_R_JOB_COMP",
  "SSCO_OR_RP_BUDGET_SAL_WU",
] as const;

export async function collectReadonlyAudit(
  features: readonly PortalFeature[],
  read: AuditRead,
  sourceCandidates: readonly string[] = [],
) {
  const tasks: AuditTask[] = [];
  const dictionary: Record<string, AuditRow[]> = {};
  const contracts: Record<string, AuditRow[]> = {};
  const probes: AuditRow[] = [];
  const rawSources: string[] = [];
  const execute = async (
    id: string,
    statement: string,
    params: Readonly<Record<string, string | number | Date>> = {},
  ): Promise<AuditRow[] | null> => {
    try {
      assertReadOnlySql(statement);
      const rows = await read(statement, params);
      tasks.push({ id, status: "ok", rows: rows.length });
      return rows;
    } catch (error) {
      tasks.push({ id, status: "error", code: auditErrorCode(error) });
      return null;
    }
  };
  const inventory =
    (await execute(
      "schema",
      `SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS ORDER BY TABLE_NAME, ORDINAL_POSITION`,
    )) ?? [];
  const tables = new Map<string, { name: string; type: string }[]>();
  for (const row of inventory) {
    const table = text(row.TABLE_NAME);
    const column = text(row.COLUMN_NAME);
    if (table && column && IDENTIFIER.test(table) && IDENTIFIER.test(column))
      tables.set(table, [
        ...(tables.get(table) ?? []),
        { name: column, type: text(row.DATA_TYPE) ?? "" },
      ]);
  }
  const seeds = new Set<string>([
    ...REQUIRED_READ_OBJECTS,
    ...collectMeta4References(features).map((ref) => ref.object),
  ]);
  const symbols = new Set(seeds);
  const checkedCodeRefs = new Set<string>();
  // Los identificadores hallados en JSP/Java solo se siguen si el repositorio confirma que son T3.
  for (let offset = 0; offset < sourceCandidates.length; offset += 150) {
    const batch = sourceCandidates
      .slice(offset, offset + 150)
      .filter((item) => IDENTIFIER.test(item));
    if (!batch.length) continue;
    const rows = await execute(
      `source-objects/${offset}`,
      `SELECT ID_T3 FROM M4RCH_T3S WHERE ID_T3 IN (${batch.map((_, i) => `@v${i}`).join(", ")})`,
      Object.fromEntries(batch.map((id, i) => [`v${i}`, id])),
    );
    for (const row of rows ?? [])
      if (typeof row.ID_T3 === "string" && IDENTIFIER.test(row.ID_T3.trim())) {
        seeds.add(row.ID_T3.trim());
        symbols.add(row.ID_T3.trim());
      }
  }
  const pending = [...seeds].map((id) => ({ key: "ID_T3", value: id }));
  const seen = new Set<string>();
  const physical = new Set(
    features.flatMap((feature) =>
      (feature.sections ?? []).flatMap((section) =>
        section.kind === "consult" ? (section.consult.query?.tables ?? []) : [],
      ),
    ),
  );
  const inspectRows = async (rows: readonly AuditRow[], sourceTable: string, key: string) => {
    const add = (nextKey: string, value: unknown) => {
      const id = text(value);
      if (id && IDENTIFIER.test(id)) pending.push({ key: nextKey, value: id });
    };
    for (const row of rows)
      for (const [field, value] of Object.entries(row))
        if (
          SAFE_FIELDS.has(field) &&
          field.startsWith("ID_") &&
          typeof value === "string" &&
          IDENTIFIER.test(value.trim())
        )
          symbols.add(value.trim());
    for (const row of rows) {
      for (const field of [
        "ID_TI_BASE",
        "ID_TI_USED",
        "ID_RULE_TI",
        ...(key === "ID_T3" ? ["ID_TI"] : []),
      ])
        add("ID_TI", row[field]);
      // NODES/ID_TI es un índice inverso: no recorrer sus consumidores ajenos.
      if (!(sourceTable === "M4RCH_NODES" && key === "ID_TI"))
        for (const field of ["ID_T3_BASE", "ID_T3_USED", "ID_CONNECTOR_T3", "ID_ITEM_CONCTOR_T3"])
          add("ID_T3", row[field]);
      for (const field of ["ID_READ_OBJECT", "ID_WRITE_OBJECT"]) add("ID_OBJECT", row[field]);
      for (const field of ["ID_READ_SENTENCE", "ID_SENTENCE"]) add("ID_SENTENCE", row[field]);
      if (sourceTable === "M4RDC_LOGIC_OBJECT" && text(row.REAL_NAME))
        physical.add(String(row.REAL_NAME).trim());
      for (const field of ["SOURCE_CODE", "APISQL"]) {
        const code = text(row[field]);
        if (!code) continue;
        const candidates = [...new Set(parseMeta4References(code).map((ref) => ref.object))].filter(
          (ref) => !symbols.has(ref) && !checkedCodeRefs.has(ref),
        );
        for (let offset = 0; offset < candidates.length; offset += 150) {
          const batch = candidates.slice(offset, offset + 150);
          for (const ref of batch) checkedCodeRefs.add(ref);
          const confirmed = await execute(
            `code-references/${checkedCodeRefs.size}`,
            `SELECT ID_T3 FROM M4RCH_T3S WHERE ID_T3 IN (${batch.map((_, i) => `@v${i}`).join(", ")})`,
            Object.fromEntries(batch.map((ref, i) => [`v${i}`, ref])),
          );
          for (const match of confirmed ?? [])
            if (typeof match.ID_T3 === "string" && IDENTIFIER.test(match.ID_T3.trim())) {
              symbols.add(match.ID_T3.trim());
              add("ID_T3", match.ID_T3);
            }
        }
        const safeCode = safeMetadataText(code, symbols);
        rawSources.push(code);
        for (const ref of parseMeta4References(safeCode))
          if (safeCode.includes(`${ref.object}!`)) add("ID_T3", ref.object);
        if (field === "APISQL") {
          for (const match of safeCode.matchAll(/&([A-Z][A-Z0-9_]+)/gi)) add("ID_OBJECT", match[1]);
          for (const match of safeCode.matchAll(/\b(?:FROM|JOIN)\s+([A-Z][A-Z0-9_]+)/gi))
            add("ID_OBJECT", match[1]);
        }
      }
    }
  };
  while (pending.length && seen.size < MAX_REFERENCES) {
    const entry = pending.shift();
    if (!entry) break;
    const entryKey = `${entry.key}/${entry.value}`;
    if (seen.has(entryKey)) continue;
    seen.add(entryKey);
    let found = false;
    for (const [table, columns] of tables) {
      if (!/^M4R(?:CH|DC)_/.test(table) || !columns.some((column) => column.name === entry.key))
        continue;
      const selected = columns.filter(
        (column) =>
          SAFE_FIELDS.has(column.name) &&
          !["binary", "varbinary", "image", "timestamp", "rowversion"].includes(column.type),
      );
      if (!selected.length) continue;
      if (
        columns.some((column) => column.name === "SOURCE_CODE") &&
        !selected.some((column) => column.name === "SOURCE_CODE")
      )
        tasks.push({
          id: `${table}/${entryKey}/source`,
          status: "incomplete",
          code: "BINARY_SOURCE_UNAVAILABLE",
        });
      const ordering = selected.filter(
        (column) => column.name.startsWith("ID_") && !["text", "ntext"].includes(column.type),
      );
      if (!ordering.length) {
        tasks.push({
          id: `${table}/${entryKey}`,
          status: "incomplete",
          code: "NO_STABLE_PAGINATION_KEY",
        });
        continue;
      }
      const all: AuditRow[] = [];
      for (let page = 0; page < MAX_PAGES; page++) {
        const rows = await execute(
          `${table}/${entryKey}/page-${page}`,
          `SELECT ${selected.map((column) => `[${column.name}]`).join(", ")} FROM [${table}]
WHERE [${entry.key}] = @key ORDER BY ${ordering.map((column) => `[${column.name}]`).join(", ")}
OFFSET @offset ROWS FETCH NEXT @size ROWS ONLY`,
          { key: entry.value, offset: page * PAGE_SIZE, size: PAGE_SIZE },
        );
        if (!rows) break;
        all.push(...rows);
        if (rows.length < PAGE_SIZE) break;
        if (page === MAX_PAGES - 1)
          tasks.push({ id: `${table}/${entryKey}`, status: "incomplete", code: "PAGE_LIMIT" });
      }
      if (!all.length) continue;
      found = true;
      await inspectRows(all, table, entry.key);
      dictionary[`${table}/${entryKey}`] = all.map((row) =>
        Object.fromEntries(
          Object.entries(row).flatMap(([name, value]) =>
            SAFE_FIELDS.has(name) &&
            (typeof value === "string" || typeof value === "number" || value === null)
              ? [
                  [
                    name,
                    typeof value === "string"
                      ? name === "SOURCE_CODE" || name === "APISQL"
                        ? safeMetadataText(value, symbols)
                        : IDENTIFIER.test(value.trim()) || /^\d{1,4}$/.test(value.trim())
                          ? value.trim()
                          : "[VALOR OMITIDO]"
                      : value,
                  ],
                ]
              : [],
          ),
        ),
      );
    }
    if (!found) tasks.push({ id: entryKey, status: "incomplete", code: "DEFINITION_NOT_FOUND" });
  }
  if (pending.length)
    tasks.push({ id: "reference-closure", status: "incomplete", code: "REFERENCE_LIMIT" });
  for (const table of [...physical].sort()) {
    const rows = inventory.filter((row) => row.TABLE_NAME === table);
    contracts[table] = rows.map((row) => ({
      table: row.TABLE_NAME,
      column: row.COLUMN_NAME,
      type: row.DATA_TYPE,
      length: row.CHARACTER_MAXIMUM_LENGTH,
    }));
    if (!rows.length)
      tasks.push({ id: `physical/${table}`, status: "incomplete", code: "TABLE_NOT_FOUND" });
  }
  for (const organization of ["CYC", "IBER", "COLL"]) {
    const own = await execute(
      `sample/${organization}/own`,
      `SELECT TOP 1 ID_EMPLEADO FROM M4ORO_EMPLEADOS WHERE ID_ORGANIZATION = @organization AND COMPUTA = '1' ORDER BY ID_EMPLEADO`,
      { organization },
    );
    const manager = await execute(
      `sample/${organization}/manager`,
      `SELECT TOP 1 O.ID_EMPLEADO FROM M4ORO_EMPLEADOS O
WHERE O.ID_ORGANIZATION = @organization AND O.COMPUTA = '1' AND EXISTS
  (SELECT 1 FROM M4ORO_EMPLEADOS T WHERE T.ID_ORGANIZATION = O.ID_ORGANIZATION AND T.ID_RESPONSABLE = O.ID_EMPLEADO AND T.COMPUTA = '1')
ORDER BY O.ID_EMPLEADO`,
      { organization },
    );
    for (const feature of features)
      for (const section of feature.sections ?? []) {
        if (section.kind !== "consult" || !section.consult.query) continue;
        const consult = section.consult;
        const query = consult.query;
        if (!query) continue;
        const employeeId = text((query.scope === "team" ? manager : own)?.[0]?.ID_EMPLEADO);
        const id = `probe/${organization}/${feature.id}/${consult.id}`;
        if (query.scope !== "society" && !employeeId) {
          tasks.push({ id, status: "incomplete", code: "NO_REPRESENTATIVE_RECORD" });
          continue;
        }
        // Solo sentencias del código, jamás el APISQL/LN4 recibido del diccionario.
        const statement = query.statement.replace(/\s+ORDER BY\s+[^]*$/i, "");
        const wrapped = `SELECT COUNT_BIG(*) AS TOTAL FROM (${statement}) P`;
        const result = await execute(
          id,
          query.scope === "team" ? withTeamScope(wrapped) : wrapped,
          { organization, today: new Date(), ...(employeeId ? { employeeId } : {}) },
        );
        const rawTotal = result?.[0]?.TOTAL;
        const total =
          typeof rawTotal === "string" && /^\d+$/.test(rawTotal) ? Number(rawTotal) : rawTotal;
        probes.push({
          feature: feature.id,
          consult: consult.id,
          organization,
          status: result ? "ok" : "error",
          records:
            typeof total === "number" && Number.isSafeInteger(total) && total >= 0 ? total : null,
        });
      }
  }
  return {
    formatVersion: 1,
    dictionary,
    contracts,
    probes,
    tasks,
    coverage: {
      seedObjects: [...seeds].sort(),
      visited: [...seen].sort(),
      unvisited: pending.filter((entry) => !seen.has(`${entry.key}/${entry.value}`)),
    },
    referencesInRules: [
      ...new Set(
        rawSources.flatMap((source) =>
          parseMeta4References(safeMetadataText(source, symbols)).map((ref) => ref.object),
        ),
      ),
    ].sort(),
  };
}
