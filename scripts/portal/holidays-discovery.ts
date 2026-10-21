/** Extracción de estructura y LN4; nunca ejecuta el código del diccionario. */
import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { sentenceObjects, text, type ResolvedNode, type Row } from "./meta4-dictionary";

type MetadataRead = (statement: string, values?: readonly string[]) => Promise<Row[]>;
type NodeResolver = (object: string, node: string) => Promise<ResolvedNode>;
type Column = { table: string; column: string; type: string };

const OBJECT = "SSE_CARGA_FESTIVOS";
const LIMIT = 1000;
const MAX_TIS = 60;
const IDENTIFIER = /^[A-Z0-9_#$]+$/i;
const BINARY = new Set(["binary", "varbinary", "image", "timestamp", "rowversion"]);
const quote = (identifier: string): string => {
  if (!IDENTIFIER.test(identifier)) throw new Error("Identificador del diccionario no válido.");
  return `[${identifier}]`;
};

export async function discoverHolidayMetadata(read: MetadataRead, resolve: NodeResolver) {
  const warnings: string[] = [];
  const query: MetadataRead = (statement, values = []) => {
    assertReadOnlySql(statement);
    return read(statement, values);
  };
  const inventory: Column[] = (
    await query(
      `SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME LIKE 'M4RCH[_]%' OR TABLE_NAME LIKE 'M4RDC[_]%'
ORDER BY TABLE_NAME, ORDINAL_POSITION`,
    )
  ).map((row) => ({
    table: String(row.TABLE_NAME),
    column: String(row.COLUMN_NAME),
    type: String(row.DATA_TYPE).toLowerCase(),
  }));
  const tables = new Map<string, Column[]>();
  for (const column of inventory) {
    if (!/^M4R(?:CH|DC)_/i.test(column.table)) throw new Error("Tabla ajena al diccionario.");
    if (column.column === "SOURCE_CODE" && BINARY.has(column.type))
      warnings.push(`${column.table}.SOURCE_CODE es binario y necesita una extracción específica.`);
    tables.set(column.table, [...(tables.get(column.table) ?? []), column]);
  }
  const metadata: Record<string, Row[]> = {};
  const rowsFor = async (table: string, key: "ID_T3" | "ID_TI" | "ID_OBJECT", value: string) => {
    const columns = tables.get(table);
    if (!columns?.some((column) => column.column === key)) return [];
    const visible = columns
      .filter((column) => !BINARY.has(column.type))
      .map((column) => quote(column.column));
    const rows = await query(
      `SELECT TOP ${LIMIT + 1} ${visible.join(", ")} FROM ${quote(table)} WHERE ${quote(key)} = @v0`,
      [value],
    );
    if (rows.length > LIMIT)
      warnings.push(`${table}/${key}/${value}: extracción truncada a ${LIMIT} filas.`);
    const selected = rows.slice(0, LIMIT);
    if (selected.length > 0) metadata[`${table}/${key}/${value}`] = selected;
    return selected;
  };

  // Definición completa del objeto: nodos, filtros, conectores y sobrescrituras.
  for (const [table, columns] of tables) {
    if (table.startsWith("M4RCH_") && columns.some((column) => column.column === "ID_T3"))
      await rowsFor(table, "ID_T3", OBJECT);
  }
  const nodeRows = metadata[`M4RCH_NODES/ID_T3/${OBJECT}`] ?? [];
  const nodes: ResolvedNode[] = [];
  for (const row of nodeRows) {
    const node = text(row.ID_NODE);
    if (node) nodes.push(await resolve(OBJECT, node));
  }
  if (nodes.length === 0) warnings.push(`No se encontraron nodos de ${OBJECT}.`);

  // Incluye TI base y reglas heredadas: CARGA puede delegar en otra TI.
  const pendingTis = new Set(nodes.flatMap((node) => (node.ti ? [node.ti] : [])));
  const visitedTis = new Set<string>();
  while (pendingTis.size > 0 && visitedTis.size < MAX_TIS) {
    const ti = pendingTis.values().next().value;
    if (!ti) break;
    pendingTis.delete(ti);
    if (visitedTis.has(ti)) continue;
    visitedTis.add(ti);
    for (const [table, columns] of tables) {
      if (!table.startsWith("M4RCH_") || !columns.some((column) => column.column === "ID_TI"))
        continue;
      for (const row of await rowsFor(table, "ID_TI", ti)) {
        for (const field of ["ID_TI_BASE", "ID_TI_USED", "ID_RULE_TI"]) {
          const related = text(row[field]);
          if (related && !visitedTis.has(related)) pendingTis.add(related);
        }
      }
    }
  }
  if (pendingTis.size > 0)
    warnings.push(`Quedan ${pendingTis.size} TI sin extraer por el límite de ${MAX_TIS}.`);

  const hasCargaSource = Object.entries(metadata).some(
    ([key, rows]) =>
      key.startsWith("M4RCH_RULES3/") &&
      rows.some((row) => text(row.ID_ITEM) === "CARGA" && text(row.SOURCE_CODE) !== null),
  );
  if (!hasCargaSource)
    warnings.push("No se obtuvo código fuente de CARGA; falta completar su contrato.");

  const logicObjects = new Set(
    nodes.flatMap((node) => [
      ...(node.readObject ? [node.readObject] : []),
      ...(node.sentence ? sentenceObjects(node.sentence) : []),
    ]),
  );
  const sentences = new Set<string>();
  for (const rows of Object.values(metadata)) {
    for (const row of rows) {
      for (const field of ["ID_READ_OBJECT", "ID_READ_OBJECT_NEW"]) {
        const object = text(row[field]);
        if (object) logicObjects.add(object);
      }
      for (const field of ["ID_READ_SENTENCE", "ID_SENTENCE"]) {
        const sentence = text(row[field]);
        if (sentence) sentences.add(sentence);
      }
    }
  }
  // Sentencias auxiliares citadas por ítems o conectores, además de la TI.
  for (const sentence of sentences) {
    const rows = await query(
      "SELECT ID_SENTENCE, APISQL FROM M4RCH_SENTENCES3 WHERE ID_SENTENCE = @v0",
      [sentence],
    );
    metadata[`M4RCH_SENTENCES3/ID_SENTENCE/${sentence}`] = rows;
    for (const row of rows) {
      const sql = text(row.APISQL);
      if (sql) for (const object of sentenceObjects(sql)) logicObjects.add(object);
    }
  }
  const physicalTables = new Set(nodes.flatMap((node) => (node.table ? [node.table] : [])));
  for (const object of logicObjects) {
    for (const row of await rowsFor("M4RDC_LOGIC_OBJECT", "ID_OBJECT", object)) {
      const table = text(row.REAL_NAME);
      if (table) physicalTables.add(table);
    }
    await rowsFor("M4RDC_FIELDS", "ID_OBJECT", object);
  }
  // Solo columnas físicas. No se consulta ninguna tabla de empleados ni calendario.
  const physicalColumns: Record<string, Row[]> = {};
  for (const table of physicalTables) {
    physicalColumns[table] = await query(
      `SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = @v0 ORDER BY ORDINAL_POSITION`,
      [table],
    );
  }
  return {
    object: OBJECT,
    nodes,
    metadata,
    physicalColumns,
    warnings,
    counts: {
      nodes: nodes.length,
      tis: visitedTis.size,
      metadataRows: Object.values(metadata).reduce((sum, rows) => sum + rows.length, 0),
    },
  };
}
