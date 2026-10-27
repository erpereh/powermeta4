import type { PayrollReportRunDetail } from "@/types/payroll-report";
import { METRICS, normalizeHeader } from "./catalogue";
import { hash } from "./hash";
import type { Snapshot } from "./types";
import { LIMITS, ReconciliationError } from "./import";

/** Deliberately excludes NIF, bank data and unrelated personal columns. */
export function snapshot(detail: PayrollReportRunDetail, populationConfirmed: boolean): Snapshot {
  if (detail.rows.length > LIMITS.rows || detail.rows.length * detail.headers.length > LIMITS.cells)
    throw new ReconciliationError(
      "La ejecución supera los límites de filas/celdas del cuadre.",
      413,
    );
  const allowed = new Set(
    [
      ...METRICS.map((metric) => metric.header),
      "Id Empleado",
      "Apellidos y Nombres",
      "Id Empresa",
      "Fecha de pago",
      "Salario Base",
      "Complemento Experiencia Importe",
      "Complemento Adaptación Individualizado",
      "Paga Extra Prorrateada",
    ].map(normalizeHeader),
  );
  const columns = detail.headers.flatMap((header, index) =>
    allowed.has(normalizeHeader(header)) ? [index] : [],
  );
  const headers = columns.map((index) => detail.headers[index]);
  const rows = detail.rows.map((row) => columns.map((index) => row[index] ?? ""));
  return {
    run: detail.run,
    headers,
    rows,
    hash: hash({ run: detail.run, headers, rows }),
    capturedAt: new Date().toISOString(),
    populationConfirmed,
  };
}
