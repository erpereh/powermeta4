import type { ReadContract } from "../types";
import { HOLIDAY_TABLES } from "../registry/sql/holidays";

export const HOLIDAY_META4 = [
  "SSE_CARGA_FESTIVOS!SSE_FESTIVOS.CARGA",
  "SSE_CARGA_FESTIVOS!SSE_BUSCA_CALENDARIO.BUSQUEDA",
  "SCO_APPLYVAL_CALEN!SCO_INTERMEDIATE_NODE_CALENDAR.APPLY",
] as const;

/** Tablas y campos confirmados por el diccionario; pendiente contraste en vivo. */
export const HOLIDAY_READ_CONTRACT = {
  kind: "sql",
  meta4: HOLIDAY_META4,
  tables: HOLIDAY_TABLES,
  verified: false,
} as const satisfies ReadContract;
