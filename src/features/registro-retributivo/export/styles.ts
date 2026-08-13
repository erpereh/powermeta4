import type ExcelJS from "exceljs";

export const COLORS = {
  header: "0F172A",
  headerAccent: "1E3A8A",
  white: "FFFFFF",
  sheetBg: "F8FAFC",
  line: "CBD5E1",
  mutedLine: "E2E8F0",
  text: "0F172A",
  mutedText: "475569",
  successBg: "EAF8EF",
  successText: "166534",
  warningBg: "FFF4E5",
  warningText: "9A3412",
  dangerBg: "FDECEC",
  dangerText: "991B1B",
  infoBg: "EAF2FF",
  infoText: "1D4ED8",
  violetBg: "F1EDFF",
  violetText: "5B21B6",
  grayBg: "F1F5F9",
  grayText: "334155",
} as const;

export const EURO_FORMAT = '#,##0.00 "EUR";-#,##0.00 "EUR";0.00 "EUR"';
export const INTEGER_FORMAT = "#,##0";
export const PERCENT_FORMAT = "0.00%";

function argb(color: string): string {
  return `FF${color}`;
}

function thinBorder(color: string = COLORS.mutedLine): Partial<ExcelJS.Borders> {
  return {
    top: { style: "thin", color: { argb: argb(color) } },
    left: { style: "thin", color: { argb: argb(color) } },
    bottom: { style: "thin", color: { argb: argb(color) } },
    right: { style: "thin", color: { argb: argb(color) } },
  };
}

export function styleTitle(cell: ExcelJS.Cell): void {
  cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: argb(COLORS.header) } };
  cell.font = { bold: true, color: { argb: argb(COLORS.white) }, size: 18 };
  cell.alignment = { vertical: "middle" };
}

export function styleSectionTitle(cell: ExcelJS.Cell): void {
  cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: argb(COLORS.headerAccent) } };
  cell.font = { bold: true, color: { argb: argb(COLORS.white) }, size: 12 };
  cell.alignment = { vertical: "middle" };
  cell.border = thinBorder(COLORS.line);
}

export function styleHeaderRow(row: ExcelJS.Row): void {
  row.height = 34;
  row.eachCell((cell) => {
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: argb(COLORS.header) } };
    cell.font = { bold: true, color: { argb: argb(COLORS.white) }, size: 10 };
    cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
    cell.border = thinBorder(COLORS.line);
  });
}

export function styleBodyRows(sheet: ExcelJS.Worksheet, headerRows: readonly number[] = [1]): void {
  sheet.eachRow((row, rowNumber) => {
    if (headerRows.includes(rowNumber)) {
      return;
    }
    row.eachCell((cell) => {
      cell.alignment = { vertical: "top", wrapText: true };
      cell.border = {
        bottom: { style: "hair", color: { argb: argb(COLORS.line) } },
      };
      cell.font = { color: { argb: argb(COLORS.text) }, size: 10 };
    });
  });
}

export function statusPalette(value: unknown): { readonly bg: string; readonly text: string } | undefined {
  const text = String(value ?? "").toLowerCase();

  if (text === "ok" || text.includes("correcto")) {
    return { bg: COLORS.successBg, text: COLORS.successText };
  }
  if (text.includes("pendiente") || text.includes("revisar") || text.includes("revision") || text.includes("media")) {
    return { bg: COLORS.warningBg, text: COLORS.warningText };
  }
  if (text.includes("diferencia") || text.includes("incidencia") || text.includes("falta") || text.includes("sin mapear real")) {
    return { bg: COLORS.dangerBg, text: COLORS.dangerText };
  }
  if (text.includes("sin registro")) {
    return { bg: COLORS.violetBg, text: COLORS.violetText };
  }
  if (text.includes("sin pdf")) {
    return { bg: COLORS.grayBg, text: COLORS.grayText };
  }
  if (text.includes("ignorado") || text.includes("no aplica") || text.includes("sin datos")) {
    return { bg: COLORS.grayBg, text: COLORS.grayText };
  }
  if (text.includes("sin ")) {
    return { bg: COLORS.infoBg, text: COLORS.infoText };
  }

  return undefined;
}

export function applyStatusStyle(cell: ExcelJS.Cell, value: unknown): void {
  const palette = statusPalette(value);
  if (!palette) {
    return;
  }

  cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: argb(palette.bg) } };
  cell.font = { bold: true, color: { argb: argb(palette.text) } };
  cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
}

export function applyStatusRowStyle(row: ExcelJS.Row, value: unknown, maxColumn: number, statusColumn?: number): void {
  const palette = statusPalette(value);
  if (!palette) {
    return;
  }

  for (let index = 1; index <= maxColumn; index += 1) {
    const cell = row.getCell(index);
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: argb(palette.bg) } };
  }

  if (statusColumn) {
    const cell = row.getCell(statusColumn);
    cell.font = { bold: true, color: { argb: argb(palette.text) } };
    cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
  }
}

export function styleNoteRow(row: ExcelJS.Row, fromColumn: number, toColumn: number): void {
  for (let index = fromColumn; index <= toColumn; index += 1) {
    const cell = row.getCell(index);
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: argb(COLORS.infoBg) } };
    cell.font = { italic: true, color: { argb: argb(COLORS.infoText) }, size: 10 };
    cell.alignment = { vertical: "middle", wrapText: true };
    cell.border = thinBorder(COLORS.mutedLine);
  }
}

export function styleEmptyRow(row: ExcelJS.Row, maxColumn: number): void {
  for (let index = 1; index <= maxColumn; index += 1) {
    const cell = row.getCell(index);
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: argb(COLORS.grayBg) } };
    cell.font = { italic: true, color: { argb: argb(COLORS.grayText) } };
    cell.alignment = { vertical: "middle", wrapText: true };
  }
}
