import "server-only";

import ExcelJS from "exceljs";

import type { QuinquenalReport } from "@/types/quinquenal";

import {
  QUINQUENAL_FIXED_HEADERS,
  QUINQUENAL_YEAR_HEADERS,
  quinquenalCells,
  quinquenalHeaders,
  quinquenalYears,
} from "./sheet";

/*
 * Mismo formato que el Excel que exporta PeopleNet: columna A vacía, fila 2
 * con el año sobre cada bloque, fila 3 con las cabeceras y datos desde la 4.
 * Excel no usa los tokens del tema: rellenos del original, uno por bloque.
 */
const YEAR_FILLS = ["FFEEE4DA", "FFC9CE9A", "FFCCE3E6", "FFEDE7EC", "FFC1D5C6"] as const;

const FONT: Partial<ExcelJS.Font> = { name: "Calibri", size: 11 };
const DATE_FORMAT = "mm-dd-yy";
const COLUMN_WIDTH = 40.7109375;
/** La columna A queda vacía, como en el original. */
const FIRST_COLUMN = 2;

const fill = (argb: string): ExcelJS.Fill => ({
  type: "pattern",
  pattern: "solid",
  fgColor: { argb },
});

export async function exportQuinquenalToXlsx(report: QuinquenalReport): Promise<Buffer> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "powermeta4";
  const sheet = workbook.addWorksheet("Sheet1");
  workbook.addWorksheet("Sheet2");

  const headers = quinquenalHeaders(report.currentYear);
  const firstYearColumn = FIRST_COLUMN + QUINQUENAL_FIXED_HEADERS.length;
  const yearFill = (column: number): ExcelJS.Fill | undefined => {
    if (column < firstYearColumn) return undefined;
    const argb =
      YEAR_FILLS[Math.floor((column - firstYearColumn) / QUINQUENAL_YEAR_HEADERS.length)];
    return argb ? fill(argb) : undefined;
  };

  for (let column = 1; column < FIRST_COLUMN + headers.length; column += 1) {
    sheet.getColumn(column).width = COLUMN_WIDTH;
  }

  quinquenalYears(report.currentYear).forEach((year, index) => {
    const column = firstYearColumn + index * QUINQUENAL_YEAR_HEADERS.length;
    const cell = sheet.getCell(2, column);
    cell.value = `AÑO : ${year}`;
    cell.font = { ...FONT, bold: true };
    const background = yearFill(column);
    if (background) cell.fill = background;
  });

  headers.forEach((header, index) => {
    const column = FIRST_COLUMN + index;
    const cell = sheet.getCell(3, column);
    cell.value = header;
    cell.font = { ...FONT, bold: true };
    const background = yearFill(column);
    if (background) cell.fill = background;
  });

  report.rows.forEach((row, rowIndex) => {
    quinquenalCells(row, report.currentYear).forEach((value, index) => {
      const column = FIRST_COLUMN + index;
      const cell = sheet.getCell(4 + rowIndex, column);
      cell.value = value;
      if (value instanceof Date) {
        cell.numFmt = DATE_FORMAT;
        cell.font = FONT;
      }
      const background = yearFill(column);
      if (background) {
        cell.fill = background;
        cell.font = FONT;
      }
    });
  });

  return Buffer.from(await workbook.xlsx.writeBuffer());
}
