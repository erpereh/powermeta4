/**
 * Lecturas del diccionario Meta4 (`M4RCH_*` / `M4RDC_*`) compartidas por los
 * scripts de descubrimiento del portal. Solo `SELECT` de metadatos; nunca lee
 * tablas de datos de empleados.
 */
import sql from "mssql";

import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";

export type Row = Record<string, unknown>;

type FieldConnector = { item: string; parentNode: string; parentItem: string };

export type ResolvedNode = {
  object: string;
  node: string;
  ti: string | null;
  isRoot: boolean;
  readObject: string | null;
  table: string | null;
  sentence: string | null;
  sentenceParams: { position: number; item: string; whereType: number | null }[];
  connectors: FieldConnector[];
};

export const loadEnv = () => {
  for (const file of [".env.local", ".env"]) {
    try {
      process.loadEnvFile(file);
    } catch {
      // El fichero es opcional: las variables pueden venir del entorno.
    }
  }
};

export const text = (value: unknown): string | null => {
  if (value === null || value === undefined) return null;
  const trimmed = String(value).trim();
  return trimmed === "" ? null : trimmed;
};

export const select = async (
  pool: sql.ConnectionPool,
  statement: string,
  values: readonly string[] = [],
): Promise<Row[]> => {
  assertReadOnlySql(statement);
  const request = pool.request();
  values.forEach((value, index) => request.input(`v${index}`, sql.NVarChar(128), value));
  return (await request.query<Row>(statement)).recordset;
};

export const inList = (values: readonly string[]) =>
  values.map((_, index) => `@v${index}`).join(", ");

/** Objetos lógicos citados en una sentencia: `&OBJ` y los de la cláusula FROM. */
export const sentenceObjects = (sentence: string): string[] => {
  const from = /\bFROM\b([\s\S]*?)(?:\bWHERE\b|\bORDER\b|\bGROUP\b|$)/i.exec(sentence)?.[1] ?? "";
  const names = [...from.matchAll(/&?([A-Z][A-Z0-9_]+)\s+[A-Z]\b/gi)].map((match) => match[1]);
  return [...new Set(names.map((name) => name.toUpperCase()))];
};

export const resolveNode = async (
  pool: sql.ConnectionPool,
  object: string,
  node: string,
): Promise<ResolvedNode> => {
  const [nodeRow] = await select(
    pool,
    "SELECT ID_TI, IS_ROOT FROM M4RCH_NODES WHERE ID_T3 = @v0 AND ID_NODE = @v1",
    [object, node],
  );
  const ti = text(nodeRow?.ID_TI);
  let readObject: string | null = null;
  let sentenceId: string | null = null;
  // La TI puede heredar la sentencia y el objeto de su TI base.
  for (let current = ti, depth = 0; current && depth < 5; depth += 1) {
    const [tiRow] = await select(
      pool,
      "SELECT ID_READ_OBJECT, ID_READ_SENTENCE, ID_TI_BASE FROM M4RCH_TIS WHERE ID_TI = @v0",
      [current],
    );
    readObject ??= text(tiRow?.ID_READ_OBJECT);
    sentenceId ??= text(tiRow?.ID_READ_SENTENCE);
    if (readObject && sentenceId) break;
    current = text(tiRow?.ID_TI_BASE);
  }
  const [tableRow] = readObject
    ? await select(pool, "SELECT REAL_NAME FROM M4RDC_LOGIC_OBJECT WHERE ID_OBJECT = @v0", [
        readObject,
      ])
    : [];
  const [sentenceRow] = sentenceId
    ? await select(pool, "SELECT APISQL FROM M4RCH_SENTENCES3 WHERE ID_SENTENCE = @v0", [
        sentenceId,
      ])
    : [];
  const params = ti
    ? await select(
        pool,
        "SELECT PARAM_POS, ID_ITEM, ID_WHERE_TYPE FROM M4RCH_TI_SENT_PAR WHERE ID_TI = @v0 ORDER BY PARAM_POS",
        [ti],
      )
    : [];
  const connectors = await select(
    pool,
    `SELECT ID_ITEM, ID_NODE_USED, ID_ITEM_USED FROM M4RCH_CONCTOR_ITEM
WHERE ID_T3 = @v0 AND ID_NODE = @v1 AND ID_CSTYPE = 3`,
    [object, node],
  );
  return {
    object,
    node,
    ti,
    isRoot: Number(nodeRow?.IS_ROOT) === 1,
    readObject,
    table: text(tableRow?.REAL_NAME),
    sentence: text(sentenceRow?.APISQL),
    sentenceParams: params.map((row) => ({
      position: Number(row.PARAM_POS),
      item: text(row.ID_ITEM) ?? "",
      whereType: row.ID_WHERE_TYPE === null ? null : Number(row.ID_WHERE_TYPE),
    })),
    connectors: connectors.map((row) => ({
      item: text(row.ID_ITEM) ?? "",
      parentNode: text(row.ID_NODE_USED) ?? "",
      parentItem: text(row.ID_ITEM_USED) ?? "",
    })),
  };
};
