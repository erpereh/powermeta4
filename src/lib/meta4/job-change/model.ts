/**
 * El cambio de puesto o categoría se graba con la misma categoría de Meta4 que
 * el alta (`SAVE_HIRE`), así que reutiliza su modelo generado del diccionario
 * (`npm run hire:model`) en lugar de generar otro: de él salen las tablas del
 * ámbito del rol y la tabla de auditoría que la LDB escribe con cada fila.
 */
import modelJson from "../hire/direct/model.generated.json";
import type { HireModel } from "../hire/direct/model-types";
import { JOB_CHANGE_HISTORY_SPECS, ROLE_TABLE } from "./fields";

/** El modelo del alta, sin arrastrar su servicio server-only. */
const HIRE_MODEL = modelJson as HireModel;

/** Tablas que toca el cambio, en el orden en el que se presentan. */
export const JOB_CHANGE_TABLES: readonly string[] = [
  ROLE_TABLE,
  ...new Set(JOB_CHANGE_HISTORY_SPECS.map((spec) => spec.table)),
];

/** Tabla de auditoría de cada tabla del cambio, según el modelo del alta. */
export const jobChangeAuditTables = (): Record<string, string | undefined> =>
  Object.fromEntries(JOB_CHANGE_TABLES.map((table) => [table, HIRE_MODEL.tables[table]?.audit]));

/** Tablas del cambio que el modelo del alta no define (debería estar vacío). */
export const missingJobChangeTables = (): string[] =>
  JOB_CHANGE_TABLES.filter((table) => HIRE_MODEL.tables[table] === undefined);
