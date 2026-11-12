import type { PayrollReportRun } from "@/types/payroll-report";
import { normalizeHeader } from "./catalogue";
import type { Snapshot } from "./types";

export function previousPeriod(period: string): string {
  const date = new Date(`${period}-01T00:00:00Z`);
  date.setUTCMonth(date.getUTCMonth() - 1);
  return date.toISOString().slice(0, 7);
}

/** Compare codes and CSP_TIPO_PAGA, never report/calendar display names. */
export function monthlyRunIssue(
  period: string,
  current: PayrollReportRun,
  previous: PayrollReportRun | null,
): string | null {
  if (current.accruedOn.slice(0, 7) !== period)
    return "La ejecución actual no corresponde al mes del expediente.";
  if (!previous) return "Falta ejecución anterior.";
  if (previous.accruedOn.slice(0, 7) !== previousPeriod(period))
    return `La ejecución anterior debe corresponder al mes inmediatamente anterior (${previousPeriod(period)}).`;
  if (!current.hasData || !previous.hasData) return "Una ejecución no contiene datos.";
  if (!current.reportId.trim() || current.reportId.trim() !== previous.reportId.trim())
    return "Los códigos de informe son distintos; su equivalencia no está acreditada.";
  if (!current.payFrequency.trim() || current.payFrequency.trim() !== previous.payFrequency.trim())
    return "Las frecuencias de las ejecuciones son distintas o no están acreditadas.";
  const currentKind = normalizeHeader(current.payKind ?? "");
  const previousKind = normalizeHeader(previous.payKind ?? "");
  if (!currentKind || !previousKind) return "Falta acreditar el tipo de paga de una ejecución.";
  if (currentKind !== previousKind)
    return "Los tipos de paga son distintos; su equivalencia no está acreditada.";
  return null;
}

export function monthlySnapshotIssue(
  period: string,
  current: Snapshot,
  previous: Snapshot | null,
): string | null {
  const issue = monthlyRunIssue(period, current.run, previous?.run ?? null);
  if (issue) return issue;
  if (!current.populationConfirmed || !previous?.populationConfirmed)
    return "El alcance de población de las ejecuciones no está confirmado.";
  return null;
}
