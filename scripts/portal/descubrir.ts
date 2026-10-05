/**
 * Descubrimiento del diccionario Meta4 para las pantallas pendientes del portal.
 *
 * Se ejecuta en la VM con acceso a PeopleNet (`npm run portal:discover`). Solo
 * lanza `SELECT` sobre `INFORMATION_SCHEMA` y las tablas de repositorio
 * `M4RCH_*` / `M4RDC_*` (metadatos: nodos, TI, items, objetos lógicos, campos,
 * conectores y código LN4). Nunca lee tablas de datos de empleados.
 *
 * Salida: `data/portal-discovery/descubrimiento.json`, para copiar a
 * `docs/portal/contratos/descubrimiento/` tras revisarla.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

import sql from "mssql";

import { getPeopleNetConfig } from "../../src/lib/peoplenet/client";
import { collectMeta4References } from "../../src/lib/portal/meta4-refs";
import { assertReadOnlySql } from "../../src/lib/portal/peoplenet/query";
import { PORTAL_FEATURES } from "../../src/lib/portal/registry";

const OUTPUT_DIR = path.resolve("data/portal-discovery");
const ROW_LIMIT = 5000;
const BATCH = 200;
const IDENTIFIER = /^[A-Z0-9_]+$/i;
const BINARY_TYPES = new Set(["binary", "varbinary", "image", "timestamp", "rowversion"]);

type ColumnInfo = { table: string; column: string; type: string; length: number | null };
type Row = Record<string, unknown>;

const loadEnv = () => {
  for (const file of [".env.local", ".env"]) {
    try {
      process.loadEnvFile(file);
    } catch {
      // El fichero es opcional: las variables pueden venir del entorno.
    }
  }
};

const quote = (identifier: string): string => {
  if (!IDENTIFIER.test(identifier)) throw new Error(`Identificador no válido: ${identifier}`);
  return `[${identifier}]`;
};

const select = async (
  pool: sql.ConnectionPool,
  statement: string,
  values: readonly string[] = [],
): Promise<Row[]> => {
  assertReadOnlySql(statement);
  const request = pool.request();
  values.forEach((value, index) => request.input(`v${index}`, sql.NVarChar(128), value));
  const result = await request.query<Row>(statement);
  return result.recordset;
};

const text = (value: unknown): string | null => {
  if (value === null || value === undefined) return null;
  const trimmed = String(value).trim();
  return trimmed === "" ? null : trimmed;
};

/** Lee las filas de una tabla de diccionario cuya columna clave está en `keys`. */
const readByKey = async (
  pool: sql.ConnectionPool,
  table: string,
  keyColumn: string,
  columns: readonly ColumnInfo[],
  keys: readonly string[],
): Promise<{ rows: Row[]; truncated: boolean }> => {
  const selected = columns
    .filter((column) => !BINARY_TYPES.has(column.type))
    .map((column) => quote(column.column));
  const rows: Row[] = [];
  for (let start = 0; start < keys.length && rows.length < ROW_LIMIT; start += BATCH) {
    const batch = keys.slice(start, start + BATCH);
    const params = batch.map((_, index) => `@v${index}`).join(", ");
    rows.push(
      ...(await select(
        pool,
        `SELECT TOP ${ROW_LIMIT + 1} ${selected.join(", ")} FROM ${quote(table)} WHERE ${quote(keyColumn)} IN (${params})`,
        batch,
      )),
    );
  }
  return { rows: rows.slice(0, ROW_LIMIT), truncated: rows.length > ROW_LIMIT };
};

const collectValues = (rows: readonly Row[], columnPattern: RegExp): string[] => [
  ...new Set(
    rows.flatMap((row) =>
      Object.entries(row).flatMap(([column, value]) =>
        columnPattern.test(column) && text(value) ? [text(value) as string] : [],
      ),
    ),
  ),
];

const main = async () => {
  loadEnv();
  const references = collectMeta4References(PORTAL_FEATURES);
  const objects = references.map((reference) => reference.object);
  const pool = await new sql.ConnectionPool(getPeopleNetConfig()).connect();
  try {
    const inventoryRows = await select(
      pool,
      `SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME LIKE 'M4RCH[_]%' OR TABLE_NAME LIKE 'M4RDC[_]%'
ORDER BY TABLE_NAME, ORDINAL_POSITION`,
    );
    const inventory: ColumnInfo[] = inventoryRows.map((row) => ({
      table: String(row.TABLE_NAME),
      column: String(row.COLUMN_NAME),
      type: String(row.DATA_TYPE).toLowerCase(),
      length:
        typeof row.CHARACTER_MAXIMUM_LENGTH === "number" ? row.CHARACTER_MAXIMUM_LENGTH : null,
    }));
    const tables = new Map<string, ColumnInfo[]>();
    for (const column of inventory)
      tables.set(column.table, [...(tables.get(column.table) ?? []), column]);

    const output: Record<string, { key: string; rows: Row[]; truncated: boolean }> = {};
    const readLevel = async (keyColumn: string, keys: readonly string[], prefix: string) => {
      if (keys.length === 0) return;
      for (const [table, columns] of tables) {
        if (!table.startsWith(prefix) || !columns.some((column) => column.column === keyColumn))
          continue;
        try {
          const result = await readByKey(pool, table, keyColumn, columns, keys);
          if (result.rows.length > 0)
            output[`${table}.${keyColumn}`] = { key: keyColumn, ...result };
        } catch (error) {
          console.warn(`  ${table}: ${error instanceof Error ? error.message : "error"}`);
        }
      }
    };

    console.log(`Objetos Meta4 del registro: ${objects.length}`);
    // Nivel 1: estructura de los objetos (nodos, conectores, filtros, métodos).
    await readLevel("ID_T3", objects, "M4RCH_");
    const level1 = Object.values(output).flatMap((entry) => entry.rows);
    // Nivel 2: TI de los nodos → items, reglas LN4 y objetos de lectura/escritura.
    const tis = collectValues(level1, /^ID_TI(_BASE)?$/);
    await readLevel("ID_TI", tis, "M4RCH_");
    const level2 = Object.values(output).flatMap((entry) => entry.rows);
    // Nivel 3: objetos lógicos → tablas físicas y campos.
    const logicObjects = collectValues(level2, /^ID_(READ|WRITE)_OBJECT$/);
    await readLevel("ID_OBJECT", logicObjects, "M4RDC_");

    mkdirSync(OUTPUT_DIR, { recursive: true });
    const file = path.join(OUTPUT_DIR, "descubrimiento.json");
    writeFileSync(
      file,
      `${JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          note: "Solo metadatos del diccionario Meta4. Revisar antes de versionar.",
          references,
          counts: { objects: objects.length, tis: tis.length, logicObjects: logicObjects.length },
          inventory,
          tables: output,
        },
        null,
        2,
      )}\n`,
    );
    console.log(`TI: ${tis.length} · objetos lógicos: ${logicObjects.length}`);
    for (const [name, entry] of Object.entries(output)) {
      console.log(`  ${name}: ${entry.rows.length}${entry.truncated ? " (truncado)" : ""}`);
    }
    console.log(`Escrito ${path.relative(process.cwd(), file)}`);
  } finally {
    await pool.close();
  }
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
