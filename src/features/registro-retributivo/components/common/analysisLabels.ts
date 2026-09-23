import type { StoredAnalysis } from "@/features/registro-retributivo/types";
import { countPeopleByStatus } from "@/features/registro-retributivo/components/common/personStatus";

function plural(count: number, one: string, many: string): string {
  return `${count} ${count === 1 ? one : many}`;
}

/**
 * Un fichero PDF puede contener muchos recibos (uno por persona y mes), así
 * que se muestran ambas cifras para no confundirlas.
 */
export function pdfSourceLabel(fileCount: number | undefined, payslipCount: number | undefined): string {
  const files = fileCount ?? 0;
  const payslips = payslipCount ?? 0;
  if (!payslips || payslips === files) return plural(files, "fichero PDF", "ficheros PDF");
  return `${plural(files, "fichero PDF", "ficheros PDF")} · ${plural(payslips, "recibo", "recibos")}`;
}

/** Resumen de una fila del historial con los mismos estados que Inicio y Personas. */
export function historySummary(analysis: StoredAnalysis): string {
  // Análisis antiguos pueden llegar incompletos desde SQLite.
  const people = analysis.result?.people ?? [];
  const summary = analysis.result?.summary;
  const byStatus = new Map(countPeopleByStatus(people).map((item) => [item.status, item.count]));
  const parts = [
    pdfSourceLabel(analysis.pdfCount, summary?.pdfsAnalyzed),
    plural(people.length, "persona", "personas"),
    `${byStatus.get("Diferencia") ?? 0} con diferencia`,
  ];
  const review = byStatus.get("Revisar") ?? 0;
  if (review) parts.push(`${review} a revisar`);
  const pending = summary?.conceptsPendingReview ?? 0;
  if (pending) parts.push(plural(pending, "concepto pendiente", "conceptos pendientes"));
  return parts.join(" · ");
}
