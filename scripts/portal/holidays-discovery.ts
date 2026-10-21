/** Extracción de estructura y LN4; nunca ejecuta el código del diccionario. */
import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { sentenceObjects, text, type ResolvedNode, type Row } from "./meta4-dictionary";

type MetadataRead = (statement: string, values?: readonly string[]) => Promise<Row[]>;
type NodeResolver = (object: string, node: string) => Promise<ResolvedNode>;
type Column = { table: string; column: string; type: string };

const OBJECT = "SSE_CARGA_FESTIVOS";
const ASSIGNMENT_OBJECT = "SCO_APPLYVAL_CALEN";
const LIMIT = 1000;
const MAX_TIS = 100;
const MAX_OBJECTS = 20;
const MAX_NODES = 200;
const ASSIGNMENT_NODES = [
  "SCO_INTERMEDIATE_NODE_CALENDAR",
  "SCO_V_ROLE",
  "SCO_WC_VALUES",
  "SCO_V_COUNTRY",
  "SCO_H_WCENTER",
  "SSP_WC_DIRECCION",
] as const;
const REQUIRED_SOURCES = [
  ["SSE_FESTIVOS", "CARGA"],
  ["SSE_FESTIVOS", "GENERADIAS"],
  ["SSE_BUSCA_CALENDARIO", "BUSQUEDA"],
  ["SCO_INTERMEDIATE_NODE_CALENDAR", "APPLY"],
] as const;
const IDENTIFIER = /^[A-Z0-9_#$]+$/i;
const BINARY = new Set(["binary", "varbinary", "image", "timestamp", "rowversion"]);
const TEXTUAL = new Set(["char", "nchar", "varchar", "nvarchar"]);
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
  const reads = new Map<string, Row[]>();
  const rowsFor = async (table: string, key: string, value: string) => {
    const cacheKey = `${table}/${key}/${value}`;
    const cached = reads.get(cacheKey);
    if (cached) return cached;
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
    reads.set(cacheKey, selected);
    if (selected.length > 0) metadata[cacheKey] = selected;
    return selected;
  };

  // BUSQUEDA llama a otro objeto. Sus nodos hermanos contienen las tablas de
  // APPLYTABLE; seguir solo ID_TI_BASE deja fuera precisamente la asignación.
  const pendingObjects = new Set([OBJECT, ASSIGNMENT_OBJECT]);
  const visitedObjects = new Set<string>();
  const pendingTis = new Set<string>();
  const visitedTis = new Set<string>();
  const nodes: ResolvedNode[] = [];
  const nodeKeys = new Set<string>();
  const references = (rows: readonly Row[], followObjects = true) => {
    for (const row of rows) {
      for (const [field, value] of Object.entries(row)) {
        const related = text(value);
        if (!related) continue;
        if (/^ID_(?:TI(?:_BASE|_USED)?|RULE_TI)$/.test(field)) pendingTis.add(related);
        if (followObjects && /^ID_(?:T3(?:_BASE|_USED)?|CONNECTOR_T3|ITEM_CONCTOR_T3)$/.test(field))
          pendingObjects.add(related);
      }
      // Solo identificadores: nunca se ejecuta ni interpola el código LN4.
      const source = text(row.SOURCE_CODE);
      if (source)
        for (const match of source.matchAll(/\b([A-Z][A-Z0-9_]*)!([A-Z][A-Z0-9_]*)\b/gi))
          pendingObjects.add(match[1].toUpperCase());
    }
  };

  while (true) {
    for (const object of visitedObjects) pendingObjects.delete(object);
    for (const ti of visitedTis) pendingTis.delete(ti);
    const object = pendingObjects.values().next().value;
    if (object && visitedObjects.size < MAX_OBJECTS) {
      pendingObjects.delete(object);
      visitedObjects.add(object);
      for (const [table, columns] of tables) {
        if (table.startsWith("M4RCH_") && columns.some((column) => column.column === "ID_T3"))
          references(await rowsFor(table, "ID_T3", object));
      }
      const nodeRows = metadata[`M4RCH_NODES/ID_T3/${object}`] ?? [];
      if (nodeRows.length === 0) warnings.push(`No se encontraron nodos de ${object}.`);
      for (const row of nodeRows) {
        const name = text(row.ID_NODE);
        if (!name || nodeKeys.has(`${object}!${name}`)) continue;
        if (nodes.length >= MAX_NODES) {
          warnings.push(`Nodos de ${object} omitidos por el límite de ${MAX_NODES}.`);
          break;
        }
        const node = await resolve(object, name);
        nodes.push(node);
        nodeKeys.add(`${object}!${name}`);
        if (node.ti) pendingTis.add(node.ti);
      }
      continue;
    }
    const ti = pendingTis.values().next().value;
    if (ti && visitedTis.size < MAX_TIS) {
      pendingTis.delete(ti);
      visitedTis.add(ti);
      for (const [table, columns] of tables) {
        if (table.startsWith("M4RCH_") && columns.some((column) => column.column === "ID_TI"))
          // Las filas inversas de NODES/ID_TI incluyen consumidores ajenos a
          // este flujo. Se conservan como metadatos, sin recorrer sus objetos.
          references(await rowsFor(table, "ID_TI", ti), table !== "M4RCH_NODES");
      }
      continue;
    }
    break;
  }
  for (const object of visitedObjects) pendingObjects.delete(object);
  for (const ti of visitedTis) pendingTis.delete(ti);
  if (pendingObjects.size > 0)
    warnings.push(
      `Quedan ${pendingObjects.size} objetos sin extraer por el límite de ${MAX_OBJECTS}.`,
    );
  if (pendingTis.size > 0)
    warnings.push(`Quedan ${pendingTis.size} TI sin extraer por el límite de ${MAX_TIS}.`);

  const missingAssignmentNodes = ASSIGNMENT_NODES.filter(
    (node) => !nodeKeys.has(`${ASSIGNMENT_OBJECT}!${node}`),
  );
  if (missingAssignmentNodes.length > 0)
    warnings.push(`Faltan nodos de ${ASSIGNMENT_OBJECT}: ${missingAssignmentNodes.join(", ")}.`);

  // Definición de la dimensión/grupo citados por INITAPPLYVALUE. Solo tablas
  // conocidas del repositorio, incluso cuando no contienen ID_T3 ni ID_TI.
  const dimensionKeys: string[] = [];
  const missingDimensions = new Set(["DMD_TA", "DMD_GROUP_TA"]);
  for (const [table, columns] of tables) {
    for (const column of columns) {
      if (!/^ID_(?:DMD(?:_.*)?|GROUP)$/.test(column.column) || !TEXTUAL.has(column.type)) continue;
      for (const value of ["DMD_TA", "DMD_GROUP_TA"]) {
        const rows = await rowsFor(table, column.column, value);
        if (rows.length > 0) {
          dimensionKeys.push(`${table}/${column.column}/${value}`);
          missingDimensions.delete(value);
        }
      }
    }
  }
  if (missingDimensions.size > 0)
    warnings.push(`Sin definiciones del diccionario para ${[...missingDimensions].join(", ")}.`);

  const missingSources = REQUIRED_SOURCES.filter(
    ([ti, item]) =>
      !metadata[`M4RCH_RULES3/ID_TI/${ti}`]?.some(
        (row) => text(row.ID_ITEM) === item && text(row.SOURCE_CODE) !== null,
      ),
  ).map(([ti, item]) => `${ti}.${item}`);
  if (missingSources.length > 0)
    warnings.push(`Sin código LN4 de ${missingSources.join(", ")}; falta completar el contrato.`);

  const missingNodeDefinitions = nodes
    .filter((node) => !node.ti)
    .map((node) => `${node.object}!${node.node}`);
  if (missingNodeDefinitions.length > 0)
    warnings.push(`Sin TI para ${missingNodeDefinitions.join(", ")}.`);

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
    const rows = await rowsFor("M4RCH_SENTENCES3", "ID_SENTENCE", sentence);
    if (rows.length === 0) warnings.push(`No se encontró la sentencia ${sentence}.`);
    for (const row of rows) {
      const sql = text(row.APISQL);
      if (sql) for (const object of sentenceObjects(sql)) logicObjects.add(object);
    }
  }
  const physicalTables = new Set(nodes.flatMap((node) => (node.table ? [node.table] : [])));
  for (const object of logicObjects) {
    const mappings = await rowsFor("M4RDC_LOGIC_OBJECT", "ID_OBJECT", object);
    if (mappings.length === 0) warnings.push(`Sin correspondencia física para ${object}.`);
    for (const row of mappings) {
      const table = text(row.REAL_NAME);
      if (table) physicalTables.add(table);
    }
    const fields = await rowsFor("M4RDC_FIELDS", "ID_OBJECT", object);
    if (fields.length === 0) warnings.push(`Sin correspondencias de campos para ${object}.`);
  }
  // Solo columnas físicas. No se consulta ninguna tabla de empleados ni calendario.
  const physicalColumns: Record<string, Row[]> = {};
  for (const table of physicalTables) {
    physicalColumns[table] = await query(
      `SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = @v0 ORDER BY ORDINAL_POSITION`,
      [table],
    );
    if (physicalColumns[table].length === 0) warnings.push(`Sin columnas físicas para ${table}.`);
  }
  const nativeMethods = Object.entries(metadata).flatMap(([key, rows]) =>
    key.startsWith("M4RCH_RULES/")
      ? rows.flatMap((row) =>
          Number(row.IS_METARULE) === 1 && text(row.ID_METHOD)
            ? [{ ti: text(row.ID_TI), item: text(row.ID_ITEM), method: text(row.ID_METHOD) }]
            : [],
        )
      : [],
  );
  return {
    formatVersion: 2,
    object: OBJECT,
    objects: [...visitedObjects],
    nodes,
    metadata,
    physicalColumns,
    assignment: {
      object: ASSIGNMENT_OBJECT,
      missingNodes: missingAssignmentNodes,
      dimensionKeys,
      missingDimensions: [...missingDimensions],
    },
    missingSources,
    nativeMethods,
    warnings,
    counts: {
      nodes: nodes.length,
      objects: visitedObjects.size,
      tis: visitedTis.size,
      metadataRows: Object.values(metadata).reduce((sum, rows) => sum + rows.length, 0),
    },
  };
}
