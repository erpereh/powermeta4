import { projectionGraphTotal } from "./core";
import type {
  ProjectionPay,
  ProjectionReport,
  ProjectionRow,
  ProjectionSection,
  ProjectionSegment,
} from "./types";

/**
 * Estructura común de las exportaciones: las mismas tablas, cabeceras y gráficas
 * que el informe en pantalla (`report-table.tsx`, `report-view.tsx`).
 */
export type ExportCell = string | number | null;
export type ExportTable = {
  id: string;
  title: string;
  headers: string[];
  /** Índices de columnas numéricas (alineadas a la derecha). */
  numeric: number[];
  rows: { kind: ProjectionRow["kind"]; cells: ExportCell[] }[];
};

const totalHeader = (section: ProjectionSection): string =>
  section.id === "target"
    ? ""
    : section.id === "christmas" || section.id === "vehicle"
      ? "Importe anual"
      : section.layout === "annual"
        ? "Valoración Proyectado/Acum."
        : "Total";

export const projectionSectionTable = (
  section: ProjectionSection,
  pays: readonly ProjectionPay[],
): ExportTable => {
  const labelHeader = ["target", "christmas", "vehicle"].includes(section.id) ? "" : section.title;
  const middle =
    section.layout === "pays"
      ? pays.map((pay) => pay.label)
      : section.layout === "ppse"
        ? ["Ord", "Ext"]
        : [];
  const headers = [labelHeader, ...middle, totalHeader(section)];
  return {
    id: section.id,
    title: section.title,
    headers,
    numeric: headers.map((_, index) => index).slice(1),
    rows: section.rows.map((row) => ({
      kind: row.kind,
      cells:
        row.kind === "section"
          ? [row.label]
          : [row.label, ...middle.map((_, index) => row.amounts[index] ?? null), row.total],
    })),
  };
};

/** A4: conserva cada paga y el total anual del servidor en bloques legibles. */
export const projectionPdfTables = (
  section: ProjectionSection,
  pays: readonly ProjectionPay[],
): ExportTable[] => {
  const table = projectionSectionTable(section, pays);
  if (section.layout !== "pays" || pays.length <= 8) return [table];
  const tables: ExportTable[] = [];
  for (let start = 0; start < pays.length; start += 8) {
    const end = Math.min(start + 8, pays.length);
    tables.push({
      ...table,
      title: `${table.title} · Pagas ${start + 1}-${end} de ${pays.length}`,
      headers: [table.headers[0], ...table.headers.slice(start + 1, end + 1), "Total anual"],
      numeric: Array.from({ length: end - start + 1 }, (_, index) => index + 1),
      rows: table.rows.map((row) => ({
        ...row,
        cells:
          row.kind === "section"
            ? row.cells
            : [row.cells[0], ...row.cells.slice(start + 1, end + 1), row.cells.at(-1) ?? null],
      })),
    });
  }
  return tables;
};

/** Gráfica como tabla: concepto, importe y porcentaje sobre los importes disponibles. */
export const projectionSegmentTable = (
  id: string,
  title: string,
  segments: readonly ProjectionSegment[],
): ExportTable => {
  const available = segments.reduce(
    (total, segment) => total + (segment.value !== null && segment.value > 0 ? segment.value : 0),
    0,
  );
  const total = projectionGraphTotal(segments);
  return {
    id,
    title,
    headers: ["Concepto", "Importe", "%"],
    numeric: [1, 2],
    rows: [
      ...segments.map((segment) => ({
        kind: "concept" as const,
        cells: [
          segment.label,
          segment.value,
          segment.value !== null && available > 0
            ? Math.round((segment.value / available) * 1000) / 10
            : null,
        ],
      })),
      { kind: "total" as const, cells: ["Total", total, total === null ? null : 100] },
    ],
  };
};

export const projectionChartTables = (report: ProjectionReport): ExportTable[] => [
  projectionSegmentTable("direct", `Retribución Directa ${report.year}`, report.direct),
  projectionSegmentTable("compensation", "Compensación Total", report.compensation),
  ...(report.flexible.length
    ? [projectionSegmentTable("flexible", "Retribución Flexible", report.flexible)]
    : []),
];

export const projectionHistoryTable = (report: ProjectionReport): ExportTable | null =>
  report.history.length
    ? {
        id: "history",
        title: "Comparativa Retribución últimos 5 años",
        headers: ["Ejercicio", "Retribución fija", "Retribución variable"],
        numeric: [1, 2],
        rows: report.history.map((entry) => ({
          kind: "concept" as const,
          cells: [String(entry.year), entry.fixed, entry.variable],
        })),
      }
    : null;

export const projectionExportTitle = (report: ProjectionReport) =>
  `Informe de compensación total ${report.year}`;

export const projectionExportSubtitle = (report: ProjectionReport): string[] =>
  [
    `${report.employee.id} - ${report.employee.name}`,
    [report.employee.category, report.employee.workCenter].filter(Boolean).join(" · "),
    report.calculatedAt
      ? `Calculada el ${report.calculatedAt.slice(0, 10).split("-").reverse().join("/")}`
      : "",
  ].filter(Boolean);

/** Nombre de descarga sin caracteres problemáticos para el sistema de archivos. */
export const projectionFileName = (report: ProjectionReport, extension: "pdf" | "xlsx") =>
  `Proyeccion_${report.employee.id.replaceAll(/[^A-Za-z0-9_-]/g, "")}_${report.year}.${extension}`;
