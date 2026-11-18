import "server-only";

import ExcelJS from "exceljs";

import type { PrimaveraMonth, PrimaveraReport, PrimaveraRow } from "@/types/primavera";

import { PRIMAVERA_MONTHS, round2 } from "./cuadre";

/*
 * Excel del informe Primavera con el formato de `cuadres-portugal.mjs`: hoja
 * «Resumen» con el estado de cada mes y una hoja por mes con los empleados en
 * verde (OK) o rojo (MAL), más la fila TOTAL. Solo la sociedad activa.
 */

/** Colores ARGB de Excel del script original: excepción controlada y estática. */
const XLSX_COLORS = {
  okFill: "FFC6EFCE",
  okText: "FF006100",
  badFill: "FFFFC7CE",
  badText: "FF9C0006",
  totalFill: "FFD9D9D9",
  headerFill: "FF1F4E78",
  headerText: "FFFFFFFF",
  note: "FF595959",
} as const;

const NUMBER_FORMAT = "#,##0.00";
const HEADERS = [
  "Empleado",
  "Devengos",
  "Suma R",
  "Dif.",
  "Retenidos",
  "Suma D",
  "Dif.",
  "Líquido",
  "Estado",
] as const;

const fill = (argb: string): ExcelJS.Fill => ({
  type: "pattern",
  pattern: "solid",
  fgColor: { argb },
});

const BORDER: Partial<ExcelJS.Borders> = {
  top: { style: "thin" },
  left: { style: "thin" },
  bottom: { style: "thin" },
  right: { style: "thin" },
};

const monthName = (month: number): string => PRIMAVERA_MONTHS[month - 1] ?? String(month);
const pad = (value: number): string => String(value).padStart(2, "0");

const headerCell = (cell: ExcelJS.Cell, value: string) => {
  cell.value = value;
  cell.font = { bold: true, color: { argb: XLSX_COLORS.headerText } };
  cell.fill = fill(XLSX_COLORS.headerFill);
  cell.border = BORDER;
  cell.alignment = { horizontal: "center" };
};

const statusLabel = (month: PrimaveraMonth): string =>
  month.status === "empty" ? "SIN NÓMINA" : month.status === "ok" ? "OK" : "MAL";

const title = (report: PrimaveraReport): string =>
  `${report.society} Portugal (${report.legalEntity})`;

const addSummary = (workbook: ExcelJS.Workbook, report: PrimaveraReport, generatedAt: Date) => {
  const sheet = workbook.addWorksheet("Resumen");
  sheet.getCell("A1").value =
    `Primavera ${title(report)} ${report.year} — ${report.database ?? "PeopleNet"} — ${generatedAt.toLocaleString("es-ES")}`;
  sheet.getCell("A1").font = { bold: true, size: 13 };
  sheet.getCell("A2").value =
    "Verde = cuadra (devengos = suma R, retenidos = suma D, devengos − retenidos = líquido). Rojo = descuadre o mes sin nómina.";
  sheet.getCell("A2").font = { italic: true, color: { argb: XLSX_COLORS.note } };

  ["Mes", "Empleados", "Descuadres", "Estado"].forEach((text, index) =>
    headerCell(sheet.getRow(4).getCell(index + 1), text),
  );
  sheet.getColumn(1).width = 14;
  for (let column = 2; column <= 4; column++) sheet.getColumn(column).width = 15;

  report.months.forEach((month, index) => {
    const row = sheet.getRow(5 + index);
    const ok = month.status === "ok";
    row.getCell(1).value = monthName(month.month);
    row.getCell(2).value = month.rows.length;
    row.getCell(3).value = month.mismatches;
    row.getCell(4).value = statusLabel(month);
    for (let column = 1; column <= 4; column++) {
      const cell = row.getCell(column);
      cell.border = BORDER;
      if (column > 1) cell.alignment = { horizontal: "center" };
    }
    row.getCell(4).fill = fill(ok ? XLSX_COLORS.okFill : XLSX_COLORS.badFill);
    row.getCell(4).font = {
      bold: true,
      color: { argb: ok ? XLSX_COLORS.okText : XLSX_COLORS.badText },
    };
  });
  sheet.views = [{ state: "frozen", ySplit: 4 }];
};

const rowValues = (row: PrimaveraRow): (string | number)[] => [
  row.employeeId,
  round2(row.earnings),
  round2(row.earningsConcepts),
  round2(row.earnings - row.earningsConcepts),
  round2(row.deductions),
  round2(row.deductionsConcepts),
  round2(row.deductions - row.deductionsConcepts),
  round2(row.net),
  row.ok ? "OK" : "MAL",
];

const totalValues = (month: PrimaveraMonth): (string | number)[] => {
  const total = (pick: (row: PrimaveraRow) => number) =>
    round2(month.rows.reduce((sum, row) => sum + pick(row), 0));
  const earnings = total((row) => row.earnings);
  const earningsConcepts = total((row) => row.earningsConcepts);
  const deductions = total((row) => row.deductions);
  const deductionsConcepts = total((row) => row.deductionsConcepts);
  return [
    "TOTAL",
    earnings,
    earningsConcepts,
    round2(earnings - earningsConcepts),
    deductions,
    deductionsConcepts,
    round2(deductions - deductionsConcepts),
    total((row) => row.net),
    month.status === "ok" ? "OK" : "MAL",
  ];
};

const addMonth = (workbook: ExcelJS.Workbook, report: PrimaveraReport, month: PrimaveraMonth) => {
  const sheet = workbook.addWorksheet(monthName(month.month));
  sheet.getCell("A1").value =
    `${monthName(month.month)} ${report.year} — todos los pagos del mes (${pad(month.month)}/${report.year})`;
  sheet.getCell("A1").font = { bold: true, size: 13 };

  const ok = month.status === "ok";
  sheet.mergeCells(3, 1, 3, HEADERS.length);
  const banner = sheet.getCell(3, 1);
  banner.value =
    month.status === "empty"
      ? `${title(report)} — SIN NÓMINA`
      : `${title(report)} — ${month.rows.length} empleados — ${ok ? "TODO OK" : `${month.mismatches} DESCUADRE(S)`}`;
  banner.font = { bold: true, color: { argb: ok ? XLSX_COLORS.okText : XLSX_COLORS.badText } };
  banner.fill = fill(ok ? XLSX_COLORS.okFill : XLSX_COLORS.badFill);
  banner.alignment = { horizontal: "center" };

  HEADERS.forEach((text, index) => headerCell(sheet.getCell(4, index + 1), text));

  let rowNumber = 5;
  for (const row of month.rows) {
    rowValues(row).forEach((value, index) => {
      const cell = sheet.getCell(rowNumber, index + 1);
      cell.value = value;
      cell.border = BORDER;
      if (typeof value === "number") cell.numFmt = NUMBER_FORMAT;
      cell.fill = fill(row.ok ? XLSX_COLORS.okFill : XLSX_COLORS.badFill);
      if (index === HEADERS.length - 1) {
        cell.font = {
          bold: true,
          color: { argb: row.ok ? XLSX_COLORS.okText : XLSX_COLORS.badText },
        };
        cell.alignment = { horizontal: "center" };
      }
    });
    rowNumber++;
  }
  if (month.rows.length > 0) {
    totalValues(month).forEach((value, index) => {
      const cell = sheet.getCell(rowNumber, index + 1);
      cell.value = value;
      cell.font = { bold: true };
      cell.fill = fill(XLSX_COLORS.totalFill);
      cell.border = BORDER;
      if (typeof value === "number") cell.numFmt = NUMBER_FORMAT;
    });
  }

  sheet.getColumn(1).width = 11;
  for (let column = 2; column <= HEADERS.length; column++) {
    sheet.getColumn(column).width = column === HEADERS.length ? 8 : 12;
  }
  sheet.views = [{ state: "frozen", ySplit: 4 }];
};

export async function exportPrimaveraToXlsx(
  report: PrimaveraReport,
  generatedAt: Date = new Date(),
): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  addSummary(workbook, report, generatedAt);
  for (const month of report.months) addMonth(workbook, report, month);
  return Buffer.from(await workbook.xlsx.writeBuffer());
}

/** `Primavera_<sociedad>_<periodo>_<base>_<AAAAMMDD_HHMM>.xlsx`, como el script. */
export const primaveraFileName = (report: PrimaveraReport, generatedAt: Date): string => {
  const period = report.wholeYear
    ? `${report.year}`
    : report.fromMonth === report.toMonth
      ? `${report.year}-${pad(report.fromMonth)}`
      : `${report.year}-${pad(report.fromMonth)}_a_${pad(report.toMonth)}`;
  const stamp = `${generatedAt.getFullYear()}${pad(generatedAt.getMonth() + 1)}${pad(generatedAt.getDate())}_${pad(generatedAt.getHours())}${pad(generatedAt.getMinutes())}`;
  const database = (report.database ?? "PeopleNet").replace(/[^A-Za-z0-9_-]/g, "");
  return `Primavera_${report.society}_${period}_${database}_${stamp}.xlsx`;
};
