import { columnIndex, identity, type Metric } from "./catalogue";
import { decimal } from "./decimal";
import type { Snapshot } from "./types";

export type Value = { value: bigint | null; reason: string; evidence: string[] };
export const missing = (reason: string, evidence: string[] = []): Value => ({
  value: null,
  reason,
  evidence,
});

export function payroll(data: Snapshot | null, rows: number[] | undefined, metric: Metric): Value {
  if (!data) return missing("Falta ejecución anterior.");
  if (!rows?.length)
    return missing("Persona ausente de esta ejecución; no acredita alta o baja laboral.");
  const index = columnIndex(data.headers, metric.header, metric.occurrence);
  if (index < 0)
    return missing(`Columna ausente: ${metric.header} (ocurrencia ${metric.occurrence ?? 1}).`);
  const evidence = rows.map(
    (row) => `${data.run.reportId}@${data.run.runAt}:fila ${row + 2}, columna ${index + 1}`,
  );
  const values = rows.map((row) => decimal(data.rows[row][index]));
  if (values.some((value) => value === null))
    return missing("Importe vacío, inválido o no acreditado en nómina.", evidence);
  const valid = values.filter((value): value is bigint => value !== null);
  if (metric.percentage && new Set(valid.map(String)).size > 1)
    return missing("Porcentajes distintos entre tramos; no se suman.", evidence);
  return {
    value: metric.percentage ? valid[0] : valid.reduce((sum, value) => sum + value, BigInt(0)),
    reason: "",
    evidence,
  };
}

/** Only resolve numeric aliases if the authorized payroll population is unambiguous. */
export function resolveIdentity(raw: string, ids: Set<string>): string | null {
  const id = identity(raw);
  if (ids.has(id)) return id;
  if (!/^\d+$/.test(id)) return null;
  const alias = id.replace(/^0+(?=\d)/, "");
  const candidates = [...ids].filter(
    (candidate) => /^\d+$/.test(candidate) && candidate.replace(/^0+(?=\d)/, "") === alias,
  );
  return candidates.length === 1 ? candidates[0] : null;
}
