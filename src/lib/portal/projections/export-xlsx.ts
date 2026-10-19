import "server-only";

import ExcelJS from "exceljs";

import { projectionGraphTotal } from "./core";
import {
  projectionChartTables,
  projectionExportSubtitle,
  projectionExportTitle,
  projectionHistoryTable,
  projectionSectionTable,
  type ExportTable,
} from "./export-layout";
import type { ProjectionReport } from "./types";

// Paleta estática para documentos, independiente del tema del navegador.
const COLORS = {
  ink: "FF243449",
  muted: "FF586779",
  header: "FF243449",
  white: "FFFFFFFF",
  accent: "FFDE001E",
  section: "FFE9EDF2",
  alternate: "FFF6F8FA",
  total: "FFDCE8F2",
  rule: "FFD5DDE5",
} as const;
const MONEY = '#,##0.00 "€";-#,##0.00 "€";0.00 "€"';
const PERCENT = "0.0%";
const FONT: Partial<ExcelJS.Font> = { name: "Inter", size: 10, color: { argb: COLORS.ink } };
const BORDER: Partial<ExcelJS.Borders> = {
  bottom: { style: "hair", color: { argb: COLORS.rule } },
};
const fill = (argb: string): ExcelJS.Fill => ({
  type: "pattern",
  pattern: "solid",
  fgColor: { argb },
});

/** Altura explícita: ExcelJS no autoajusta las filas al abrir el libro. */
const textHeight = (text: string, width: number, size = 10) =>
  Math.max(22, Math.ceil(text.length / Math.max(1, width - 3)) * (size + 4) + 8);

const mergedLine = (
  sheet: ExcelJS.Worksheet,
  row: number,
  columns: number,
  text: string,
  font: Partial<ExcelJS.Font>,
  background?: string,
) => {
  sheet.mergeCells(row, 1, row, columns);
  const cell = sheet.getCell(row, 1);
  cell.value = text;
  cell.font = { ...FONT, ...font };
  cell.alignment = { wrapText: true, vertical: "middle", indent: 1 };
  if (background) cell.fill = fill(background);
  const width = Array.from(
    { length: columns },
    (_, index) => sheet.getColumn(index + 1).width ?? 14,
  ).reduce((sum, value) => sum + value, 0);
  sheet.getRow(row).height = textHeight(text, width, font.size ?? 10);
};

const writeTitle = (sheet: ExcelJS.Worksheet, report: ProjectionReport, columns: number) => {
  mergedLine(
    sheet,
    1,
    columns,
    projectionExportTitle(report),
    { size: 17, bold: true, color: { argb: COLORS.white } },
    COLORS.header,
  );
  sheet.getRow(1).height = Math.max(36, sheet.getRow(1).height ?? 0);
  const subtitles = projectionExportSubtitle(report);
  subtitles.forEach((text, index) =>
    mergedLine(sheet, index + 2, columns, text, {
      size: 11,
      bold: index === 0,
      color: { argb: index === 0 ? COLORS.ink : COLORS.muted },
    }),
  );
  return subtitles.length + 4;
};

/** Mismos valores que la pantalla; no recalcula los totales de PeopleNet. */
const writeTable = (
  sheet: ExcelJS.Worksheet,
  table: ExportTable,
  top: number,
  percentColumn?: number,
): number => {
  const columns = table.headers.length;
  mergedLine(sheet, top, columns, table.title, { bold: true, size: 11 }, COLORS.section);
  top += 1;
  const header = sheet.getRow(top);
  table.headers.forEach((value, index) => {
    const cell = header.getCell(index + 1);
    cell.value =
      index === 0 && (!value || value === table.title) ? "Concepto" : value || "Importe anual";
    cell.font = { ...FONT, bold: true, color: { argb: COLORS.white } };
    cell.fill = fill(COLORS.header);
    cell.alignment = { wrapText: true, vertical: "middle", horizontal: index ? "right" : "left" };
    header.height = Math.max(
      header.height ?? 0,
      textHeight(String(cell.value), sheet.getColumn(index + 1).width ?? 14),
    );
  });
  table.rows.forEach((row, rowIndex) => {
    const line = sheet.getRow(top + 1 + rowIndex);
    if (row.kind === "section") {
      mergedLine(
        sheet,
        line.number,
        columns,
        String(row.cells[0] ?? ""),
        { bold: true },
        COLORS.section,
      );
      return;
    }
    row.cells.forEach((value, index) => {
      const cell = line.getCell(index + 1);
      cell.value =
        value === null
          ? "—"
          : typeof value === "number" && index === percentColumn
            ? value / 100
            : value;
      cell.font = {
        ...FONT,
        bold: row.kind === "total",
        color: { argb: value === null ? COLORS.muted : COLORS.ink },
      };
      cell.fill = fill(
        row.kind === "total" ? COLORS.total : rowIndex % 2 ? COLORS.alternate : COLORS.white,
      );
      cell.border =
        row.kind === "total"
          ? { top: { style: "thin", color: { argb: COLORS.ink } }, ...BORDER }
          : BORDER;
      cell.alignment = {
        horizontal: table.numeric.includes(index) ? "right" : "left",
        vertical: "middle",
        wrapText: true,
      };
      if (typeof value === "number") cell.numFmt = index === percentColumn ? PERCENT : MONEY;
      line.height = Math.max(
        line.height ?? 22,
        typeof value === "string" ? textHeight(value, sheet.getColumn(index + 1).width ?? 14) : 22,
      );
    });
  });
  return top + table.rows.length + 3;
};

const finishSheet = (
  sheet: ExcelJS.Worksheet,
  lastRow: number,
  columns: number,
  frozenRows: number,
) => {
  sheet.views = [{ state: "frozen", xSplit: 1, ySplit: frozenRows, showGridLines: false }];
  sheet.pageSetup = {
    paperSize: 9,
    orientation: "landscape",
    fitToPage: true,
    fitToWidth: 1,
    fitToHeight: 0,
    printArea: `A1:${sheet.getColumn(columns).letter}${lastRow}`,
    printTitlesRow: `1:${frozenRows}`,
    margins: { left: 0.25, right: 0.25, top: 0.4, bottom: 0.4, header: 0.15, footer: 0.15 },
  };
  sheet.headerFooter = { oddFooter: "&Lpowermeta4&R&P / &N" };
  sheet.properties.tabColor = { argb: COLORS.accent };
};

export async function exportProjectionToXlsx(report: ProjectionReport): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  workbook.title = projectionExportTitle(report);

  const summary = workbook.addWorksheet("Resumen");
  summary.getColumn(1).width = 52;
  summary.getColumn(2).width = 24;
  summary.getColumn(3).width = 24;
  let row = writeTitle(summary, report, 3);
  const firstSummaryHeader = row + 1;
  row = writeTable(
    summary,
    {
      id: "summary",
      title: "Resumen de compensación",
      headers: ["Concepto", "Importe anual"],
      numeric: [1],
      rows: [
        {
          kind: "concept",
          cells: ["Retribución fija", report.direct.find((s) => s.id === "fixed")?.value ?? null],
        },
        {
          kind: "concept",
          cells: [
            "Retribución variable",
            report.direct.find((s) => s.id === "variable")?.value ?? null,
          ],
        },
        {
          kind: "concept",
          cells: ["Seguridad Social", report.direct.find((s) => s.id === "social")?.value ?? null],
        },
        { kind: "total", cells: ["Compensación total", projectionGraphTotal(report.compensation)] },
      ],
    },
    row,
  );
  for (const table of projectionChartTables(report)) row = writeTable(summary, table, row, 2);
  const history = projectionHistoryTable(report);
  if (history) row = writeTable(summary, history, row);
  if (report.notices.length) {
    mergedLine(summary, row++, 3, "Avisos", { bold: true }, COLORS.section);
    for (const notice of report.notices)
      mergedLine(summary, row++, 3, notice, { color: { argb: COLORS.muted } });
  }
  finishSheet(summary, row - 1, 3, firstSummaryHeader);

  const detail = workbook.addWorksheet("Desglose");
  const columns = Math.max(4, report.pays.length + 2);
  detail.getColumn(1).width = 48;
  for (let column = 2; column <= columns; column += 1) detail.getColumn(column).width = 17;
  row = writeTitle(detail, report, Math.min(6, columns));
  const firstDetailHeader = row + 1;
  for (const section of report.sections)
    row = writeTable(detail, projectionSectionTable(section, report.pays), row);
  finishSheet(detail, row - 1, columns, firstDetailHeader);

  return Buffer.from(await workbook.xlsx.writeBuffer());
}
