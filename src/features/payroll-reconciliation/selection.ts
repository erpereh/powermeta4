import { payrollReportRunId } from "@/lib/payroll-reports/run-key";
import { formatIsoDay, formatRunAt } from "@/components/tools/reports/payroll-results-format";
import type { PayrollReportRun, PayrollReportRunKey } from "@/types/payroll-report";

export const NO_RUN = "none";
export const ALL_REPORTS = "all";
export const runKey = ({
  reportId,
  runAt,
  accruedOn,
  payFrequency,
}: PayrollReportRunKey): PayrollReportRunKey => ({ reportId, runAt, accruedOn, payFrequency });
export const runId = (key: PayrollReportRunKey | undefined): string =>
  key ? payrollReportRunId(key) : NO_RUN;
export const sortRuns = (runs: readonly PayrollReportRun[]): PayrollReportRun[] =>
  [...runs].sort(
    (a, b) =>
      b.runAt.localeCompare(a.runAt) ||
      b.accruedOn.localeCompare(a.accruedOn) ||
      payrollReportRunId(a).localeCompare(payrollReportRunId(b)),
  );
export const reportRunLabel = (run: PayrollReportRun): string =>
  `${run.reportId} · ${run.reportName ?? "Informe"} · acumulación ${formatIsoDay(run.accruedOn)} · frecuencia ${run.payFrequency} · ${run.payKind ?? "Tipo no informado"} · ejecución ${formatRunAt(run.runAt)}${run.hasData ? "" : " · Sin datos"}`;
export const periodLabel = (period: string): string =>
  period
    ? new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric", timeZone: "UTC" }).format(
        new Date(`${period}-01T00:00:00Z`),
      )
    : "";
export function previousCandidate(
  runs: readonly PayrollReportRun[],
  current: PayrollReportRun,
): PayrollReportRun | undefined {
  if (!current.payKind?.trim()) return undefined;
  const month = new Date(`${current.accruedOn.slice(0, 7)}-01T00:00:00Z`);
  month.setUTCMonth(month.getUTCMonth() - 1);
  const preceding = month.toISOString().slice(0, 7);
  return sortRuns(runs).find(
    (run) =>
      run.hasData &&
      run.reportId === current.reportId &&
      run.payFrequency === current.payFrequency &&
      run.payKind === current.payKind &&
      run.accruedOn.startsWith(preceding),
  );
}
