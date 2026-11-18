import type { Meta4Society } from "@/lib/meta4/societies";
import type { PrimaveraMonth, PrimaveraRow } from "@/types/primavera";

/*
 * Cuadre de la carga Primavera → PeopleNet (nómina de Portugal), como
 * `Desktop/Primavera/herramienta/cuadres-portugal.mjs`: por empleado y mes de
 * pago, devengos = suma de las columnas R, retenidos = suma de las columnas D
 * y devengos − retenidos = líquido.
 */

/** Entidad legal portuguesa de cada sociedad; las españolas no entran. */
export const PRIMAVERA_LEGAL_ENTITIES: Record<Meta4Society, string> = {
  CYC: "ACYC_PT",
  IBER: "IBER PORT",
  COLL: "COLL",
};

/** Columna de la importación/códigos → columna del acumulado `M4CSP_AC_HR_PERIOD`. */
export const PRIMAVERA_COLUMN_RENAMES: Readonly<Record<string, string>> = {
  CSP_PT_VENCIMENTO: "CSP_PT_VENCIMIENTO",
  CSP_I_RETRIB_VAR: "CSP_I_RETRIB_VARIABLE",
};

export const PRIMAVERA_TOLERANCE = 0.01;

export const PRIMAVERA_MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

export type PrimaveraParameters = {
  year: number;
  /** Sin meses = el año entero. */
  fromMonth?: number;
  toMonth?: number;
};

export type PrimaveraPeriod = {
  year: number;
  fromMonth: number;
  toMonth: number;
  wholeYear: boolean;
  /** Fechas ISO `YYYY-MM-DD`: `from` incluida, `to` excluida. */
  from: string;
  to: string;
};

const isMonth = (value: unknown): value is number =>
  typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 12;

const pad = (value: number): string => String(value).padStart(2, "0");

export const parsePrimaveraParameters = (
  input: unknown,
): { ok: true; value: PrimaveraPeriod } | { ok: false; message: string } => {
  if (typeof input !== "object" || input === null) {
    return { ok: false, message: "Parámetros no válidos." };
  }
  const { year, fromMonth, toMonth } = input as Record<string, unknown>;
  if (typeof year !== "number" || !Number.isInteger(year) || year < 2000 || year > 2100) {
    return { ok: false, message: "Indica un año entre 2000 y 2100." };
  }
  const wholeYear = fromMonth === undefined && toMonth === undefined;
  const start = fromMonth ?? toMonth ?? 1;
  const end = toMonth ?? fromMonth ?? 12;
  if (!isMonth(start) || !isMonth(end) || start > end) {
    return { ok: false, message: "El rango de meses no es válido." };
  }
  return {
    ok: true,
    value: {
      year,
      fromMonth: start,
      toMonth: end,
      wholeYear,
      from: `${year}-${pad(start)}-01`,
      to: end === 12 ? `${year + 1}-01-01` : `${year}-${pad(end + 1)}-01`,
    },
  };
};

export type PrimaveraCodeRow = { type: string; column: string };

const IDENTIFIER = /^[A-Z0-9_]+$/;

/**
 * Columnas del acumulado de los códigos R o D de la sociedad, con los renombres
 * aplicados. Las que no existen en `M4CSP_AC_HR_PERIOD` se saltan: solo se
 * interpolan identificadores presentes en `INFORMATION_SCHEMA`.
 */
export const primaveraColumns = (
  codes: readonly PrimaveraCodeRow[],
  accrualColumns: ReadonlySet<string>,
  type: "R" | "D",
): string[] => [
  ...new Set(
    codes
      .filter((code) => code.type === type)
      .map((code) => PRIMAVERA_COLUMN_RENAMES[code.column] ?? code.column)
      .filter((column) => IDENTIFIER.test(column) && accrualColumns.has(column)),
  ),
];

export const primaveraSumExpression = (columns: readonly string[]): string =>
  columns.length ? columns.map((column) => `ISNULL(a.[${column}],0)`).join(" + ") : "0";

const close = (a: number, b: number): boolean => Math.abs(a - b) <= PRIMAVERA_TOLERANCE;

export const isPrimaveraRowOk = (row: Omit<PrimaveraRow, "ok">): boolean =>
  close(row.earnings, row.earningsConcepts) &&
  close(row.deductions, row.deductionsConcepts) &&
  close(row.earnings - row.deductions, row.net);

export type PrimaveraMonthRow = Omit<PrimaveraRow, "ok"> & { month: number };

/**
 * Agrupa por mes. Con el año entero no se muestran los meses finales que aún
 * no tienen nómina; los huecos intermedios salen como «sin nómina».
 */
export const buildPrimaveraMonths = (
  period: PrimaveraPeriod,
  rows: readonly PrimaveraMonthRow[],
): PrimaveraMonth[] => {
  const byMonth = new Map<number, PrimaveraRow[]>();
  for (const { month, ...values } of rows) {
    const list = byMonth.get(month) ?? [];
    list.push({ ...values, ok: isPrimaveraRowOk(values) });
    byMonth.set(month, list);
  }
  const lastMonth = period.wholeYear ? Math.max(0, ...byMonth.keys()) : period.toMonth;
  const months: PrimaveraMonth[] = [];
  for (let month = period.fromMonth; month <= lastMonth; month++) {
    const list = (byMonth.get(month) ?? []).sort((a, b) =>
      a.employeeId.localeCompare(b.employeeId),
    );
    const mismatches = list.filter((row) => !row.ok).length;
    months.push({
      month,
      rows: list,
      mismatches,
      status: list.length === 0 ? "empty" : mismatches === 0 ? "ok" : "mismatch",
    });
  }
  return months;
};

export const round2 = (value: number): number => Math.round(value * 100) / 100;
