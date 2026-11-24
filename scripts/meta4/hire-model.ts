/**
 * Genera `src/lib/meta4/hire/direct/model.generated.json`: el modelo con el
 * que powermeta4 graba un alta en las tablas de PeopleNet igual que la
 * categoría de traspaso `SAVE_HIRE` de Meta4.
 *
 * Solo lee (`SELECT`) el diccionario Meta4 (`M4RCH_*`, `M4RDC_*`,
 * `INFORMATION_SCHEMA`) y la plantilla `Hire_1_PERSONA.xls`. De la plantilla
 * guarda las cabeceras técnicas (fila 5) y solo los valores de la fila 6 de
 * las columnas que el formulario no escribe (nunca datos de la persona de
 * ejemplo). Uso: `npm run hire:model`.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

import sql from "mssql";
import * as XLSX from "xlsx";

import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import {
  FIRST_PERSON_ROW,
  HIRE_DATA_SHEET,
  HIRE_IMPORT_HEADERS,
  HIRE_PERSON_ID_COLUMN,
  MANUAL_COLUMNS,
  WRITTEN_COLUMNS,
} from "../../src/lib/meta4/hire/mapping";
import type {
  HireModel,
  HireModelColumn,
  HireModelGroup,
  HireModelMap,
} from "../../src/lib/meta4/hire/direct/model-types";
import { loadEnv, select, text, type Row } from "../portal/meta4-dictionary";

const HIRE_T3 = ["CSP_PA_MN_HIRE", "SRSP_PA_MN_HIRE", "SRCO_PA_MN_HIRE"] as const;
const CATEGORY = "SAVE_HIRE";
const TEMPLATE = path.join(process.cwd(), "fuentes", "HIRE", "Hire_1_PERSONA.xls");
const OUT = path.join(
  process.cwd(),
  "src",
  "lib",
  "meta4",
  "hire",
  "direct",
  "model.generated.json",
);
const HEADER_ROW = FIRST_PERSON_ROW - 1;

/**
 * Written outside the transfer copies: the role's job history (from the role's
 * job code), SRCO_SAVE_HIRE (SRSP) retirement row and CSP_ACT_CV experience.
 */
const EXTRA_TABLES = [
  "M4SCO_H_HR_JOB",
  "M4CSP_H_COMP_JUBILACION",
  "STD_HR_PREV_JOBS",
  "M4CSP_H_HR_JOB_AGRUPA_CAT",
];

/**
 * Value constraint of an extended type: `ID_CONSTRAINT_FUNC` 11 and 12 list the
 * accepted values in `CONSTRAINT_ARGS`, 14 and 15 give `min|max` for numbers
 * and dates. 1 is "no constraint".
 */
const constraintOf = (func: string, args: string): Pick<HireModelColumn, "allowed" | "range"> => {
  const parts = args.split("|");
  if (func === "11" || func === "12") {
    const allowed = parts.filter((part) => part !== "");
    return allowed.length > 0 ? { allowed } : {};
  }
  if (func === "14" || func === "15") {
    const [min, max] = parts;
    if (!min || !max) return {};
    return { range: { kind: func === "14" ? "number" : "date", min, max } };
  }
  return {};
};

const rank = (t3: string): number => HIRE_T3.indexOf(t3 as (typeof HIRE_T3)[number]);
const s = (value: unknown): string => text(value) ?? "";
const quoted = (values: readonly string[]) =>
  values.map((v) => `'${v.replace(/'/g, "''")}'`).join(",");

const chunked = async (values: readonly string[], run: (part: string) => Promise<Row[]>) => {
  const rows: Row[] = [];
  for (let i = 0; i < values.length; i += 300)
    rows.push(...(await run(quoted(values.slice(i, i + 300)))));
  return rows;
};

const readTemplate = (): HireModel["template"] => {
  const workbook = XLSX.read(readFileSync(TEMPLATE), { type: "buffer" });
  const sheet = workbook.Sheets[HIRE_DATA_SHEET];
  if (!sheet?.["!ref"]) throw new Error(`La plantilla no tiene la hoja ${HIRE_DATA_SHEET}.`);
  const range = XLSX.utils.decode_range(sheet["!ref"]);
  // Optional currencies left empty keep the template value (cells.ts skips them).
  const inherited = new Set<string>([
    ...MANUAL_COLUMNS.payrollCurrency,
    ...MANUAL_COLUMNS.accountCurrency,
  ]);
  const written = new Set(
    [...WRITTEN_COLUMNS, HIRE_PERSON_ID_COLUMN].filter((c) => !inherited.has(c)),
  );
  const headers: Record<string, string> = {};
  const defaults: Record<string, string | number> = {};
  for (let c = range.s.c; c <= range.e.c; c += 1) {
    const column = XLSX.utils.encode_col(c);
    const header =
      HIRE_IMPORT_HEADERS[column as keyof typeof HIRE_IMPORT_HEADERS] ??
      sheet[`${column}${HEADER_ROW}`]?.v;
    if (typeof header !== "string" || !/^[A-Z0-9_]+\.[A-Z0-9_]+$/.test(header.trim())) continue;
    headers[column] = header.trim();
    const cell = sheet[`${column}${FIRST_PERSON_ROW}`];
    if (written.has(column) || cell?.v === undefined || cell.v === "") continue;
    if (typeof cell.v === "number" || typeof cell.v === "string") defaults[column] = cell.v;
  }
  return { headers, defaults };
};

const main = async () => {
  loadEnv();
  const pool = await new sql.ConnectionPool(getPeopleNetConfig()).connect();
  const q = (statement: string) => select(pool, statement);
  try {
    // 1. Groups of SAVE_HIRE and their execution order (most derived T3 wins).
    const categoryRows = await q(
      `SELECT ID_T3_OR, ID_GROUP, EXE_ORDER FROM M4RCH_CATEGORY_GRP WHERE ID_CATEGORIE = '${CATEGORY}' AND ID_T3_OR IN (${quoted(HIRE_T3)})`,
    );
    const groupOrder = new Map<string, { order: number; t3: string }>();
    for (const row of categoryRows) {
      const group = s(row.ID_GROUP);
      const current = groupOrder.get(group);
      if (!current || rank(s(row.ID_T3_OR)) < rank(current.t3)) {
        groupOrder.set(group, { order: Number(row.EXE_ORDER), t3: s(row.ID_T3_OR) });
      }
    }
    const groupNames = [...groupOrder.keys()];
    const destRows = await q(
      `SELECT ID_GROUP, ID_T3_OR, ID_T3_DEST FROM M4RCH_GROUPS WHERE ID_GROUP IN (${quoted(groupNames)}) AND ID_T3_OR IN (${quoted(HIRE_T3)})`,
    );
    const mapRows = await q(
      `SELECT ID_GROUP, ID_T3_OR, ID_MAP, ID_T3_MAP_OR, EXE_ORDER, IS_DELETED FROM M4RCH_GROUP_MAPP WHERE ID_GROUP IN (${quoted(groupNames)}) AND ID_T3_OR IN (${quoted(HIRE_T3)})`,
    );
    // One map per (group, ID_MAP, source T3): the most derived level decides and a
    // deletion removes only that copy (SRSP deletes the SRCO one and adds its own).
    const chosenMaps = new Map<string, Row>();
    for (const row of mapRows) {
      const key = `${s(row.ID_GROUP)}|${s(row.ID_MAP)}|${s(row.ID_T3_MAP_OR)}`;
      const current = chosenMaps.get(key);
      if (!current || rank(s(row.ID_T3_OR)) < rank(s(current.ID_T3_OR))) chosenMaps.set(key, row);
    }
    const liveMaps = [...chosenMaps.values()].filter((row) => s(row.IS_DELETED) !== "1");
    const itemRows = await chunked([...new Set(liveMaps.map((row) => s(row.ID_MAP)))], (part) =>
      q(`SELECT * FROM M4RCH_ITEMS_MAPPED WHERE ID_MAP IN (${part})`),
    );

    // 2. Dest item -> physical column(s), through TI inheritance and split real objects.
    const inherit = await q(`SELECT ID_TI, ID_TI_BASE, ID_LEVEL FROM M4RCH_TIS_INHERIT`);
    const bases = new Map<string, string[]>();
    for (const row of inherit.sort((a, b) => Number(a.ID_LEVEL) - Number(b.ID_LEVEL))) {
      bases.set(s(row.ID_TI), [...(bases.get(s(row.ID_TI)) ?? []), s(row.ID_TI_BASE)]);
    }
    // TI of each maintenance node as Meta4 runs it: the node's TI in the dest T3
    // (or its bases), replaced by its most derived CSP/SRSP version.
    const destT3s = [...new Set(destRows.map((row) => s(row.ID_T3_DEST)))].filter(Boolean);
    const t3Bases = await q(
      `SELECT ID_T3, ID_T3_BASE, ID_LEVEL FROM M4RCH_T3_INHERIT WHERE ID_T3 IN (${quoted(destT3s)})`,
    );
    const allT3 = [...new Set([...destT3s, ...t3Bases.map((row) => s(row.ID_T3_BASE))])];
    const nodeRows = await q(
      `SELECT ID_T3, ID_NODE, ID_TI FROM M4RCH_NODES WHERE ID_T3 IN (${quoted(allT3)})`,
    );
    const derived = new Map<string, string[]>();
    for (const row of inherit) {
      if (s(row.ID_TI) !== s(row.ID_TI_BASE)) {
        derived.set(s(row.ID_TI_BASE), [...(derived.get(s(row.ID_TI_BASE)) ?? []), s(row.ID_TI)]);
      }
    }
    const prefixRank = (ti: string) => (ti.startsWith("CSP_") ? 0 : ti.startsWith("SRSP_") ? 1 : 2);
    const nodeTi = (destT3: string, node: string): string | null => {
      const levels = [
        destT3,
        ...t3Bases
          .filter((r) => s(r.ID_T3) === destT3)
          .sort((a, b) => Number(a.ID_LEVEL) - Number(b.ID_LEVEL))
          .map((r) => s(r.ID_T3_BASE)),
      ];
      for (const t3 of levels) {
        const row = nodeRows.find((r) => s(r.ID_T3) === t3 && s(r.ID_NODE) === node);
        if (!row) continue;
        const base = s(row.ID_TI);
        return (
          [base, ...(derived.get(base) ?? [])].sort((a, b) => prefixRank(a) - prefixRank(b))[0] ??
          base
        );
      }
      return null;
    };
    const nodeTis = destRows.flatMap((row) =>
      itemRows
        .map((item) => nodeTi(s(row.ID_T3_DEST), s(item.ID_NODE_DEST)))
        .filter((ti): ti is string => ti !== null),
    );
    const destTis = [
      ...new Set(
        [...itemRows.map((row) => s(row.ID_TI_DEST)), ...nodeTis].flatMap((ti) => [
          ti,
          ...(bases.get(ti) ?? []),
        ]),
      ),
    ].filter(Boolean);
    const itemDefs = await chunked(destTis, (part) =>
      q(
        `SELECT ID_TI, ID_ITEM, ID_WRITE_OBJECT, ID_WRITE_FIELD, ID_READ_OBJECT, ID_READ_FIELD FROM M4RCH_ITEMS WHERE ID_TI IN (${part})`,
      ),
    );
    const tiRows = await chunked(destTis, (part) =>
      q(`SELECT ID_TI, ID_WRITE_OBJECT, ID_READ_OBJECT FROM M4RCH_TIS WHERE ID_TI IN (${part})`),
    );
    const tiObject = new Map(
      tiRows.map((row) => [s(row.ID_TI), s(row.ID_WRITE_OBJECT) || s(row.ID_READ_OBJECT)]),
    );
    const itemDef = new Map(itemDefs.map((row) => [`${s(row.ID_TI)}.${s(row.ID_ITEM)}`, row]));
    const realFields = await q(
      `SELECT ID_OBJECT, ID_FIELD, ID_REAL_OBJECT, ID_REAL_FIELD FROM M4RDC_REAL_FIELDS`,
    );
    const realOf = new Map<string, string[]>();
    for (const row of realFields) {
      const key = `${s(row.ID_OBJECT)}.${s(row.ID_FIELD)}`;
      realOf.set(key, [
        ...(realOf.get(key) ?? []),
        `${s(row.ID_REAL_OBJECT)}.${s(row.ID_REAL_FIELD)}`,
      ]);
    }
    const resolve = (ti: string, item: string): { object: string; columns: string[] } => {
      for (const candidate of [ti, ...(bases.get(ti) ?? [])]) {
        const def = itemDef.get(`${candidate}.${item}`);
        if (!def) continue;
        // The node's own TI object wins over the item's read object (a shared
        // DT_START may read from another table but is written to the node's).
        const object =
          s(def.ID_WRITE_OBJECT) ||
          tiObject.get(ti) ||
          tiObject.get(candidate) ||
          s(def.ID_READ_OBJECT);
        const field = s(def.ID_WRITE_FIELD) || s(def.ID_READ_FIELD);
        return { object, columns: object && field ? (realOf.get(`${object}.${field}`) ?? []) : [] };
      }
      return { object: "", columns: [] };
    };

    const groups: HireModelGroup[] = groupNames
      .map((group): HireModelGroup => {
        const { order, t3 } = groupOrder.get(group) ?? { order: 0, t3: "" };
        const dest = destRows
          .filter((row) => s(row.ID_GROUP) === group)
          .sort((a, b) => rank(s(a.ID_T3_OR)) - rank(s(b.ID_T3_OR)))[0];
        const maps = liveMaps
          .filter((row) => s(row.ID_GROUP) === group)
          .sort(
            (a, b) =>
              Number(a.EXE_ORDER) - Number(b.EXE_ORDER) || s(a.ID_MAP).localeCompare(s(b.ID_MAP)),
          )
          .flatMap((row) =>
            itemRows
              .filter(
                (item) =>
                  s(item.ID_MAP) === s(row.ID_MAP) && s(item.ID_T3_MAP_OR) === s(row.ID_T3_MAP_OR),
              )
              .map((item): HireModelMap => {
                const node = s(item.ID_NODE_DEST);
                const target = s(item.ID_ITEM_DEST);
                if (s(item.MAP_TYPE) === "2") return { kind: "exec", node, item: target };
                const runTi = nodeTi(s(dest?.ID_T3_DEST), node);
                const byNode = runTi ? resolve(runTi, target) : { object: "", columns: [] };
                const { columns } =
                  byNode.columns.length > 0 ? byNode : resolve(s(item.ID_TI_DEST), target);
                const from =
                  s(item.ID_NODE_OR) && s(item.ID_ITEM_OR)
                    ? `${s(item.ID_NODE_OR)}.${s(item.ID_ITEM_OR)}`
                    : "";
                return {
                  kind: "copy",
                  node,
                  item: target,
                  ...(from ? { from } : {}),
                  ...(s(item.DEFAULT_VALUE) ? { default: s(item.DEFAULT_VALUE) } : {}),
                  ...(s(item.IS_PK) === "1" ? { pk: true } : {}),
                  columns,
                };
              }),
          );
        return { group, order, t3, destT3: s(dest?.ID_T3_DEST), maps };
      })
      .sort((a, b) => a.order - b.order || a.group.localeCompare(b.group));

    // 3. LDB definition of every physical column touched, plus its audit table.
    const tables = [
      ...new Set(
        groups.flatMap((g) =>
          g.maps.flatMap((m) =>
            m.kind === "copy" ? m.columns.map((c) => c.split(".")[0] ?? "") : [],
          ),
        ),
      ),
    ]
      .filter(Boolean)
      .sort();
    const objects = await q(
      `SELECT r.ID_REAL_OBJECT, r.ID_OBJECT, l.HAS_AUDITORY, l.ID_AUDIT_OBJECT FROM M4RDC_REAL_OBJECTS r LEFT JOIN M4RDC_LOGIC_OBJECT l ON l.ID_OBJECT = r.ID_OBJECT WHERE r.ID_REAL_OBJECT IN (${quoted([...tables, ...EXTRA_TABLES])})`,
    );
    const auditObjects = [
      ...new Set(objects.filter((o) => s(o.HAS_AUDITORY) === "1").map((o) => s(o.ID_AUDIT_OBJECT))),
    ].filter(Boolean);
    const auditReal = auditObjects.length
      ? await q(
          `SELECT ID_OBJECT, ID_REAL_OBJECT FROM M4RDC_REAL_OBJECTS WHERE ID_OBJECT IN (${quoted(auditObjects)})`,
        )
      : [];
    const allTables = [
      ...new Set([...tables, ...EXTRA_TABLES, ...auditReal.map((r) => s(r.ID_REAL_OBJECT))]),
    ].sort();
    const columnRows = await q(`
      SELECT c.TABLE_NAME, c.COLUMN_NAME, c.ORDINAL_POSITION, c.DATA_TYPE, c.CHARACTER_MAXIMUM_LENGTH AS LEN, c.NUMERIC_PRECISION AS PREC,
             c.NUMERIC_SCALE AS SCALE, c.IS_NULLABLE, c.COLUMN_DEFAULT, r.ID_OBJECT, r.ID_FIELD, f.ID_TYPE, f.POS_PK, f.NOT_NULL,
             CAST(e.ID_DEFAULT_FUNC AS varchar(5)) AS DF, e.DEFAULT_ARGS,
             CAST(e.ID_CONSTRAINT_FUNC AS varchar(5)) AS CF, e.CONSTRAINT_ARGS
      FROM INFORMATION_SCHEMA.COLUMNS c
      LEFT JOIN M4RDC_REAL_FIELDS r ON r.ID_REAL_OBJECT = c.TABLE_NAME AND r.ID_REAL_FIELD = c.COLUMN_NAME
      LEFT JOIN M4RDC_FIELDS f ON f.ID_OBJECT = r.ID_OBJECT AND f.ID_FIELD = r.ID_FIELD
      LEFT JOIN M4RDC_EXTENDED_TPS e ON e.ID_TYPE = f.ID_TYPE
      WHERE c.TABLE_NAME IN (${quoted(allTables)})`);
    const tableModel: HireModel["tables"] = {};
    for (const table of allTables) {
      const object = objects.find((o) => s(o.ID_REAL_OBJECT) === table);
      const audit =
        object && s(object.HAS_AUDITORY) === "1"
          ? s(auditReal.find((r) => s(r.ID_OBJECT) === s(object.ID_AUDIT_OBJECT))?.ID_REAL_OBJECT)
          : "";
      const columns = columnRows
        .filter((row) => s(row.TABLE_NAME) === table)
        .sort((a, b) => Number(a.ORDINAL_POSITION) - Number(b.ORDINAL_POSITION))
        .map(
          (row): HireModelColumn => ({
            name: s(row.COLUMN_NAME),
            sqlType: s(row.DATA_TYPE),
            ...(row.LEN !== null && row.LEN !== undefined ? { length: Number(row.LEN) } : {}),
            ...(row.PREC !== null && row.PREC !== undefined && !/char|text/.test(s(row.DATA_TYPE))
              ? { precision: Number(row.PREC), scale: Number(row.SCALE ?? 0) }
              : {}),
            ...(s(row.POS_PK) && s(row.POS_PK) !== "0" ? { pk: Number(row.POS_PK) } : {}),
            ...(s(row.NOT_NULL) === "1" || s(row.IS_NULLABLE) === "NO" ? { required: true } : {}),
            ...(s(row.ID_TYPE) ? { type: s(row.ID_TYPE) } : {}),
            ...(s(row.COLUMN_DEFAULT) ? { sqlDefault: true } : {}),
            ...(s(row.DF) && s(row.DF) !== "1" ? { defaultFunction: Number(row.DF) } : {}),
            ...(s(row.DEFAULT_ARGS) ? { defaultArgs: s(row.DEFAULT_ARGS) } : {}),
            ...constraintOf(s(row.CF), s(row.CONSTRAINT_ARGS)),
          }),
        );
      tableModel[table] = { object: s(object?.ID_OBJECT), ...(audit ? { audit } : {}), columns };
    }

    const model: HireModel = {
      generatedFrom: {
        category: CATEGORY,
        t3: [...HIRE_T3],
        template: "fuentes/HIRE/Hire_1_PERSONA.xls",
      },
      template: readTemplate(),
      groups,
      tables: tableModel,
    };
    mkdirSync(path.dirname(OUT), { recursive: true });
    writeFileSync(OUT, `${JSON.stringify(model, null, 1)}\n`);
    console.log(
      `grupos=${groups.length} pasos=${groups.reduce((n, g) => n + g.maps.length, 0)} tablas=${allTables.length} cabeceras=${Object.keys(model.template.headers).length} valores de plantilla=${Object.keys(model.template.defaults).length}`,
    );
  } finally {
    await pool.close();
  }
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
