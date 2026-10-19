import "server-only";

import ExcelJS from "exceljs";

import {
  projectionChartTables,
  projectionExportSubtitle,
  projectionExportTitle,
  projectionHistoryTable,
  projectionSectionTable,
  type ExportTable,
} from "./export-layout";
import type { ProjectionReport } from "./types";

// Excel no usa los tokens del tema: grises neutros y el rojo/azul del informe original.
const HEADER_FILL = "FFE7E6E6";
const SECTION_FILL = "FFF2F2F2";
const TITLE_COLOR = "FFDE001E";
const MONEY = '#,##0.00 "€";-#,##0.00 "€"';
const PERCENT = '0.0" %"';
const FONT: Partial<ExcelJS.Font> = { name: "Calibri", size: 10 };
const BORDER: Partial<ExcelJS.Borders> = {
  bottom: { style: "thin", color: { argb: "FFBFBFBF" } },
};

const fill = (argb: string): ExcelJS.Fill => ({
  type: "pattern",
  pattern: "solid",
  fgColor: { argb },
});

/** Escribe una tabla desde `top` y devuelve la primera fila libre tras un espacio. */
const writeTable = (
  sheet: ExcelJS.Worksheet,
  table: ExportTable,
  top: number,
  percentColumn?: number,
): number => {
  // Gráficas y comparativa tienen cabeceras propias: su título va en la fila anterior.
  if (table.headers[0] && table.headers[0] !== table.title) {
    const title = sheet.getCell(top, 1);
    title.value = table.title;
    title.font = { ...FONT, size: 11, bold: true };
    top += 1;
  }
  const header = sheet.getRow(top);
  table.headers.forEach((value, index) => {
    const cell = header.getCell(index + 1);
    cell.value = value || (index === 0 ? table.title : "");
    cell.font = { ...FONT, bold: true };
    cell.fill = fill(HEADER_FILL);
    cell.border = BORDER;
    cell.alignment = {
      wrapText: true,
      vertical: "middle",
      horizontal: table.numeric.includes(index) ? "right" : "left",
    };
  });
  table.rows.forEach((row, rowIndex) => {
    const line = sheet.getRow(top + 1 + rowIndex);
    if (row.kind === "section") {
      const cell = line.getCell(1);
      cell.value = row.cells[0] ?? "";
      cell.font = { ...FONT, bold: true };
      for (let column = 1; column <= table.headers.length; column += 1)
        line.getCell(column).fill = fill(SECTION_FILL);
      return;
    }
    row.cells.forEach((value, index) => {
      const cell = line.getCell(index + 1);
      cell.value = value;
      cell.font = { ...FONT, bold: row.kind === "total" };
      cell.border = BORDER;
      if (typeof value === "number") cell.numFmt = index === percentColumn ? PERCENT : MONEY;
      if (table.numeric.includes(index)) cell.alignment = { horizontal: "right" };
    });
  });
  return top + table.rows.length + 3;
};

const writeTitle = (sheet: ExcelJS.Worksheet, report: ProjectionReport) => {
  const title = sheet.getCell(1, 1);
  title.value = projectionExportTitle(report);
  title.font = { ...FONT, size: 14, bold: true, color: { argb: TITLE_COLOR } };
  projectionExportSubtitle(report).forEach((line, index) => {
    const cell = sheet.getCell(2 + index, 1);
    cell.value = line;
    cell.font = { ...FONT, size: 11, bold: index === 0 };
  });
  return 3 + projectionExportSubtitle(report).length;
};

/** Informe completo: desglose por pagas, gráficas como tablas y comparativa anual. */
export async function exportProjectionToXlsx(report: ProjectionReport): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";

  const detail = workbook.addWorksheet("Desglose", {
    views: [{ state: "frozen", xSplit: 1 }],
    pageSetup: { orientation: "landscape", fitToPage: true, fitToWidth: 1, fitToHeight: 0 },
  });
  detail.getColumn(1).width = 38;
  for (let column = 2; column <= report.pays.length + 2; column += 1)
    detail.getColumn(column).width = 14;
  let row = writeTitle(detail, report);
  for (const section of report.sections)
    row = writeTable(detail, projectionSectionTable(section, report.pays), row);

  const charts = workbook.addWorksheet("Gráficas");
  charts.getColumn(1).width = 34;
  charts.getColumn(2).width = 16;
  charts.getColumn(3).width = 10;
  row = writeTitle(charts, report);
  for (const table of projectionChartTables(report)) row = writeTable(charts, table, row, 2);
  const history = projectionHistoryTable(report);
  if (history) writeTable(charts, history, row);

  const buffer = await workbook.xlsx.writeBuffer();
  return Buffer.from(buffer);
}
