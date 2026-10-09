import "server-only";

import ExcelJS from "exceljs";

import type { PayrollReportRunDetail } from "@/types/payroll-report";

import { payrollReportCell } from "./result-data";
import { buildPayrollSummary, type PayrollSummaryRow } from "./summary";

/*
 * Excel de «Resultados para Informes» como el de PeopleNet: hoja «Datos» con
 * el resultado de la ejecución y, para la plantilla de nómina, hoja «informe»
 * con la tabla de la plantilla ya calculada (centro, empleado y nombre, total
 * por centro y total general). La tabla se escribe con sus valores, no como
 * tabla dinámica de Excel. Los valores son los de PeopleNet; el estilo solo
 * mejora la lectura.
 */

/** Excel no usa los tokens del tema: paleta fija y controlada del fichero. */
const PALETTE = {
  header: "FF1F3A5F",
  headerText: "FFFFFFFF",
  band: "FFF3F6FA",
  subtotal: "FFDCE6F2",
  total: "FF1F3A5F",
  title: "FF1F3A5F",
  label: "FF5B6B7F",
  border: "FFD0D7E2",
  infoFill: "FFEEF2F7",
} as const;

const DATE_FORMAT = "dd/mm/yyyy";
const TEXT_FORMAT = "@";
const AMOUNT_FORMAT = "#,##0.00";
const INTEGER_FORMAT = "#,##0";
const TEXT_COLUMNS = new Set(["Id Empleado"]);
const CURRENCY_LABEL = "Euro";
const FONT_NAME = "Calibri";

const fill = (argb: string): ExcelJS.Fill => ({
  type: "pattern",
  pattern: "solid",
  fgColor: { argb },
});

const THIN_BORDER: Partial<ExcelJS.Borders> = {
  top: { style: "thin", color: { argb: PALETTE.border } },
  left: { style: "thin", color: { argb: PALETTE.border } },
  bottom: { style: "thin", color: { argb: PALETTE.border } },
  right: { style: "thin", color: { argb: PALETTE.border } },
};

const columnWidth = (header: string): number => Math.min(40, Math.max(10, header.length + 4));

const styleHeaderCell = (cell: ExcelJS.Cell) => {
  cell.font = { name: FONT_NAME, bold: true, color: { argb: PALETTE.headerText } };
  cell.fill = fill(PALETTE.header);
  cell.border = THIN_BORDER;
  cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
};

/** Filas alternas con un tono suave sin dar estilo a cada celda. */
const addBanding = (sheet: ExcelJS.Worksheet, ref: string) => {
  sheet.addConditionalFormatting({
    ref,
    rules: [
      {
        type: "expression",
        priority: 1,
        formulae: ["MOD(ROW(),2)=0"],
        style: { fill: { type: "pattern", pattern: "solid", bgColor: { argb: PALETTE.band } } },
      },
    ],
  });
};

/** Columnas numéricas con decimales: se muestran como importe. */
const decimalColumns = (detail: PayrollReportRunDetail): Set<number> => {
  const columns = new Set<number>();
  detail.headers.forEach((header, index) => {
    if (TEXT_COLUMNS.has(header)) return;
    if (detail.rows.some((row) => /^-?\d+\.\d+$/.test(row[index] ?? ""))) columns.add(index);
  });
  return columns;
};

const writeDataSheet = (workbook: ExcelJS.Workbook, detail: PayrollReportRunDetail) => {
  const sheet = workbook.addWorksheet("Datos", {
    views: [{ state: "frozen", xSplit: 3, ySplit: 1 }],
  });
  const amounts = decimalColumns(detail);

  detail.headers.forEach((header, index) => {
    sheet.getColumn(index + 1).width = header === "Apellidos y Nombres" ? 36 : columnWidth(header);
    const cell = sheet.getCell(1, index + 1);
    cell.value = header;
    styleHeaderCell(cell);
  });
  sheet.getRow(1).height = 32;

  detail.rows.forEach((row, rowIndex) => {
    row.forEach((raw, index) => {
      const header = detail.headers[index] ?? "";
      const cell = sheet.getCell(rowIndex + 2, index + 1);
      const value = payrollReportCell(raw, header);
      cell.value = value;
      if (TEXT_COLUMNS.has(header)) cell.numFmt = TEXT_FORMAT;
      else if (value instanceof Date) cell.numFmt = DATE_FORMAT;
      else if (typeof value === "number" && amounts.has(index)) cell.numFmt = AMOUNT_FORMAT;
    });
  });

  if (detail.headers.length > 0) {
    const lastColumn = sheet.getColumn(detail.headers.length).letter;
    sheet.autoFilter = { from: "A1", to: `${lastColumn}1` };
    if (detail.rows.length > 0) addBanding(sheet, `A2:${lastColumn}${detail.rows.length + 1}`);
  }
};

const summaryRowStyle = (
  kind: PayrollSummaryRow["kind"],
): { font: Partial<ExcelJS.Font>; fill?: ExcelJS.Fill } => {
  if (kind === "total") {
    return {
      font: { name: FONT_NAME, bold: true, color: { argb: PALETTE.headerText } },
      fill: fill(PALETTE.total),
    };
  }
  if (kind === "subtotal") {
    return { font: { name: FONT_NAME, bold: true }, fill: fill(PALETTE.subtotal) };
  }
  return { font: { name: FONT_NAME } };
};

const writeInfoPair = (sheet: ExcelJS.Worksheet, labelRef: string, valueRef: string) => {
  const label = sheet.getCell(labelRef);
  label.font = { name: FONT_NAME, bold: true, color: { argb: PALETTE.label } };
  label.alignment = { horizontal: "right" };
  const value = sheet.getCell(valueRef);
  value.font = { name: FONT_NAME, bold: true };
  value.fill = fill(PALETTE.infoFill);
  value.alignment = { horizontal: "left" };
};

const writeSummarySheet = (
  workbook: ExcelJS.Workbook,
  detail: PayrollReportRunDetail,
  generatedAt: Date,
): void => {
  const summary = buildPayrollSummary({ headers: detail.headers, rawRows: detail.rows });
  if (!summary) return;
  const sheet = workbook.addWorksheet("informe", {
    views: [{ state: "frozen", xSplit: 3, ySplit: 6, showGridLines: false }],
  });

  sheet.getCell("F2").value = "Fecha Pago:";
  const payDate = sheet.getCell("G2");
  payDate.value = new Date(`${detail.run.accruedOn}T00:00:00.000Z`);
  payDate.numFmt = DATE_FORMAT;
  sheet.mergeCells("A3:D4");
  const title = sheet.getCell("A3");
  title.value = detail.run.reportName ?? detail.run.reportId;
  title.font = { name: FONT_NAME, bold: true, size: 16, color: { argb: PALETTE.title } };
  title.alignment = { vertical: "middle" };
  sheet.getCell("F3").value = "Tipo Paga:";
  sheet.getCell("G3").value = detail.payTypeName ?? detail.run.payKind;
  sheet.getCell("H3").value = "Fecha:";
  const today = sheet.getCell("I3");
  today.value = new Date(
    Date.UTC(generatedAt.getFullYear(), generatedAt.getMonth(), generatedAt.getDate()),
  );
  today.numFmt = DATE_FORMAT;
  sheet.getCell("F4").value = "Moneda:";
  sheet.getCell("G4").value = CURRENCY_LABEL;
  writeInfoPair(sheet, "F2", "G2");
  writeInfoPair(sheet, "F3", "G3");
  writeInfoPair(sheet, "H3", "I3");
  writeInfoPair(sheet, "F4", "G4");
  const data = sheet.getCell("D5");
  data.value = "Data";
  data.font = { name: FONT_NAME, italic: true, color: { argb: PALETTE.label } };

  summary.fields.forEach((field, index) => {
    const cell = sheet.getCell(6, index + 1);
    cell.value = field.header;
    styleHeaderCell(cell);
    sheet.getColumn(index + 1).width = index === 2 ? 38 : columnWidth(field.header.trim());
  });
  sheet.getRow(6).height = 36;

  const dataFields = summary.fields.filter((field) => field.kind !== "rows");
  summary.rows.forEach((row, rowIndex) => {
    const excelRow = sheet.getRow(7 + rowIndex);
    const style = summaryRowStyle(row.kind);
    const banded = row.kind === "employee" && rowIndex % 2 === 1;
    [...row.labels, ...row.values].forEach((value, index) => {
      const cell = excelRow.getCell(index + 1);
      cell.value = value;
      cell.font = style.font;
      cell.border = THIN_BORDER;
      if (style.fill) cell.fill = style.fill;
      else if (banded) cell.fill = fill(PALETTE.band);
      if (index >= 3) {
        const field = dataFields[index - 3];
        cell.numFmt =
          field && (field.kind === "count" || field.column < 0) ? INTEGER_FORMAT : AMOUNT_FORMAT;
      }
    });
  });
};

/** `Normal_Inf 0001_20261091154.xlsx`: tipo de paga, informe y fecha de generación. */
export const payrollReportFileName = (
  detail: PayrollReportRunDetail,
  generatedAt: Date,
): string => {
  const kind = (detail.run.payKind ?? "Informe").replace(/[^A-Za-z0-9 +._-]/g, "");
  const stamp = `${generatedAt.getFullYear()}${generatedAt.getMonth() + 1}${generatedAt.getDate()}${generatedAt.getHours()}${String(generatedAt.getMinutes()).padStart(2, "0")}`;
  return `${kind}_Inf ${detail.run.reportId.padStart(4, "0")}_${stamp}.xlsx`;
};

export async function exportPayrollReportToXlsx(
  detail: PayrollReportRunDetail,
  generatedAt: Date = new Date(),
): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  writeDataSheet(workbook, detail);
  writeSummarySheet(workbook, detail, generatedAt);
  return Buffer.from(await workbook.xlsx.writeBuffer());
}
