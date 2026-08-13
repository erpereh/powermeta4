import * as XLSX from "xlsx";
import type { GroupedExcelCell, GroupedExcelCellKind, GroupedExcelColumn, GroupedExcelHeaderCell, GroupedExcelRow, GroupedExcelSheet } from "@/features/registro-retributivo/types";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

export const GROUPED_EXCEL_SHEET_NAMES = [
  "Análisis por puesto",
  "Análisis por valoración puesto",
  "Análisis por categoría",
  "Análisis por familia de puesto",
  "Agrupación Categoría Personal",
] as const;

const EMPTY_DISPLAY = "";

function normalizeSheetName(value: string): string {
  return normalizeComparableText(value);
}

function cell(rows: readonly unknown[][], row: number, col: number): unknown {
  return rows[row]?.[col];
}

function textValue(value: unknown): string {
  return String(value ?? "").trim();
}

function hasVisibleValue(value: unknown): boolean {
  return textValue(value).length > 0;
}

function resolveMergedValue(sheet: XLSX.WorkSheet, rows: readonly unknown[][], rowIndex: number, colIndex: number): unknown {
  const merges = sheet["!merges"] ?? [];
  for (const range of merges) {
    if (range.s.r <= rowIndex && rowIndex <= range.e.r && range.s.c <= colIndex && colIndex <= range.e.c) {
      return cell(rows, range.s.r, range.s.c);
    }
  }
  return undefined;
}

function headerValue(sheet: XLSX.WorkSheet, rows: readonly unknown[][], row: number, col: number): string {
  return textValue(cell(rows, row, col) ?? resolveMergedValue(sheet, rows, row, col));
}

function maxColumnCount(sheet: XLSX.WorkSheet, rows: readonly unknown[][]): number {
  if (sheet["!ref"]) {
    return XLSX.utils.decode_range(sheet["!ref"]).e.c + 1;
  }
  return Math.max(...rows.map((row) => row.length), 0);
}

function nonEmptyCount(row: readonly unknown[] | undefined): number {
  return row?.filter(hasVisibleValue).length ?? 0;
}

function headerSignal(row: readonly unknown[] | undefined): number {
  const normalized = (row ?? []).map((value) => normalizeComparableText(value));
  const women = normalized.filter((value) => value.includes("mujer")).length;
  const men = normalized.filter((value) => value.includes("varon") || value.includes("hombre")).length;
  const differences = normalized.filter((value) => value.includes("diferencia")).length;
  return women * 2 + men * 2 + differences + nonEmptyCount(row) * 0.05;
}

function findSegmentHeaderRow(rows: readonly unknown[][]): number {
  let bestIndex = -1;
  let bestScore = 0;
  rows.forEach((row, index) => {
    const score = headerSignal(row);
    if (score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });
  return bestScore >= 8 ? bestIndex : -1;
}

function isTitleLikeRow(row: readonly unknown[] | undefined): boolean {
  const normalized = normalizeComparableText((row ?? []).filter(hasVisibleValue).join(" "));
  if (!normalized) return true;
  return normalized.includes("registro retributivo") || normalized.includes("periodo de calculo");
}

function findFallbackHeaderRow(rows: readonly unknown[][]): number {
  let bestIndex = -1;
  let bestScore = 0;
  rows.forEach((row, index) => {
    if (isTitleLikeRow(row)) return;
    const count = nonEmptyCount(row);
    const nextCount = nonEmptyCount(rows[index + 1]);
    const score = count * 2 + Math.min(nextCount, count);
    if (count >= 2 && nextCount >= 1 && score > bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  });
  return bestIndex;
}

function formatHeader(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) return trimmed;
  const lower = trimmed.toLocaleLowerCase("es-ES");
  return `${lower.slice(0, 1).toLocaleUpperCase("es-ES")}${lower.slice(1)}`;
}

function compactHeaderParts(parts: readonly string[]): string[] {
  const result: string[] = [];
  parts.forEach((part) => {
    const cleaned = part.replace(/\s+/g, " ").trim();
    if (!cleaned) return;
    const normalized = normalizeComparableText(cleaned);
    if (result.some((existing) => normalizeComparableText(existing) === normalized)) return;
    result.push(cleaned);
  });
  if (result.length === 2 && normalizeComparableText(result[1]).startsWith("id ") && normalizeComparableText(result[0]).includes(normalizeComparableText(result[1]).replace(/^id\s+/, ""))) {
    return [result[0]];
  }
  return result;
}

function compactHeaderPathParts(parts: readonly string[]): string[] {
  const result: string[] = [];
  parts.forEach((part) => {
    const cleaned = part.replace(/\s+/g, " ").trim();
    if (!cleaned) return;
    const normalized = normalizeComparableText(cleaned);
    if (result.some((existing) => normalizeComparableText(existing) === normalized)) return;
    result.push(normalizeGroupedHeaderLabel(cleaned));
  });

  const lastPart = result.at(-1);
  const previousPart = result.at(-2);
  if (
    result.length === 2 &&
    lastPart &&
    previousPart &&
    normalizeComparableText(lastPart).startsWith("id ") &&
    normalizeComparableText(previousPart).includes(normalizeComparableText(lastPart).replace(/^id\s+/, ""))
  ) {
    return [lastPart];
  }

  return result;
}

function normalizeGroupedHeaderLabel(label: string): string {
  if (normalizeComparableText(label) === "retribuciones periodo completo") {
    return "RETRIBUCIONES PERIODO COMPLETO";
  }
  return label;
}

function sourceColumnIndex(column: GroupedExcelColumn): number {
  return XLSX.utils.decode_col(column.sourceColumn);
}

function findMultilevelHeaderRows(sheet: XLSX.WorkSheet, rows: readonly unknown[][], segmentRow: number, maxCols: number): number[] {
  let firstHeaderRow = segmentRow;
  for (let rowIndex = segmentRow - 1; rowIndex >= 0; rowIndex -= 1) {
    const values = Array.from({ length: maxCols }, (_, col) => headerValue(sheet, rows, rowIndex, col)).filter(Boolean);
    if (!values.length || isTitleLikeRow(rows[rowIndex])) {
      break;
    }
    firstHeaderRow = rowIndex;
  }

  return Array.from({ length: segmentRow - firstHeaderRow + 1 }, (_, index) => firstHeaderRow + index);
}

function headerPathsBySourceColumn(sheet: XLSX.WorkSheet, rows: readonly unknown[][], headerRows: readonly number[], maxCols: number): string[][] {
  return Array.from({ length: maxCols }, (_, col) => compactHeaderPathParts(headerRows.map((row) => headerValue(sheet, rows, row, col))));
}

function flatColumnPath(column: GroupedExcelColumn): string[] {
  const parts = compactHeaderPathParts(column.label.split("·"));
  return parts.length ? parts : [column.label || column.sourceColumn];
}

function headerPartAtLevel(path: readonly string[], level: number, maxDepth: number): { label: string; rowSpan?: number; partIndex: number } | undefined {
  if (!path.length) return undefined;

  const leadingRowSpan = Math.max(1, maxDepth - path.length + 1);
  if (level === 0 && leadingRowSpan > 1) {
    return { label: path[0], rowSpan: leadingRowSpan, partIndex: 0 };
  }
  if (level > 0 && level < leadingRowSpan) {
    return undefined;
  }

  const partIndex = leadingRowSpan > 1 ? level - leadingRowSpan + 1 : level;
  const label = path[partIndex];
  return label ? { label, partIndex } : undefined;
}

function sameHeaderCell(pathA: readonly string[], pathB: readonly string[], partIndex: number, label: string): boolean {
  if (pathB[partIndex] !== label) return false;
  return pathA.slice(0, partIndex + 1).join("\u0000") === pathB.slice(0, partIndex + 1).join("\u0000");
}

function buildGroupedHeadersFromPaths(columns: readonly GroupedExcelColumn[], columnPaths: readonly (readonly string[])[]): GroupedExcelHeaderCell[][] | undefined {
  if (!columns.length) return undefined;

  const paths = columns.map((column, index) => {
    const path = columnPaths[index]?.filter(Boolean) ?? [];
    return path.length ? path : flatColumnPath(column);
  });
  const maxDepth = Math.max(...paths.map((path) => path.length), 1);

  return Array.from({ length: maxDepth }, (_, level) => {
    const cells: GroupedExcelHeaderCell[] = [];
    let col = 0;
    while (col < columns.length) {
      const currentPath = paths[col];
      const current = headerPartAtLevel(currentPath, level, maxDepth);
      if (!current) {
        col += 1;
        continue;
      }

      let endColumn = col;
      while (endColumn + 1 < columns.length && sameHeaderCell(currentPath, paths[endColumn + 1], current.partIndex, current.label)) {
        endColumn += 1;
      }

      cells.push({
        label: current.label,
        colSpan: endColumn - col + 1,
        rowSpan: current.rowSpan,
        startColumn: col,
        endColumn,
        level,
        path: currentPath.slice(0, current.partIndex + 1).join(" > "),
      });
      col = endColumn + 1;
    }
    return cells;
  });
}

function buildGroupedHeaders(
  sheet: XLSX.WorkSheet,
  rows: readonly unknown[][],
  columns: readonly GroupedExcelColumn[],
  segmentRow: number,
  maxCols: number,
): GroupedExcelHeaderCell[][] | undefined {
  if (segmentRow < 0) {
    return buildGroupedHeadersFromPaths(columns, columns.map(flatColumnPath));
  }

  const headerRows = findMultilevelHeaderRows(sheet, rows, segmentRow, maxCols);
  const pathsBySourceColumn = headerPathsBySourceColumn(sheet, rows, headerRows, maxCols);
  return buildGroupedHeadersFromPaths(
    columns,
    columns.map((column) => pathsBySourceColumn[sourceColumnIndex(column)] ?? flatColumnPath(column)),
  );
}

function buildMultilevelColumns(sheet: XLSX.WorkSheet, rows: readonly unknown[][], segmentRow: number, maxCols: number): GroupedExcelColumn[] {
  const headerRows = findMultilevelHeaderRows(sheet, rows, segmentRow, maxCols);
  return Array.from({ length: maxCols }, (_, col): GroupedExcelColumn => {
    const parts = compactHeaderParts(
      headerRows.map((row) => headerValue(sheet, rows, row, col)),
    );
    const label = parts.length ? parts.map(formatHeader).join(" · ") : `Columna ${XLSX.utils.encode_col(col)}`;
    return {
      key: `c${col}`,
      label,
      sourceColumn: XLSX.utils.encode_col(col),
      kind: "empty",
    };
  });
}

function buildFallbackColumns(sheet: XLSX.WorkSheet, rows: readonly unknown[][], headerRow: number, maxCols: number): GroupedExcelColumn[] {
  return Array.from({ length: maxCols }, (_, col): GroupedExcelColumn => {
    const label = formatHeader(headerValue(sheet, rows, headerRow, col)) || `Columna ${XLSX.utils.encode_col(col)}`;
    return {
      key: `c${col}`,
      label,
      sourceColumn: XLSX.utils.encode_col(col),
      kind: "empty",
    };
  });
}

function cellKind(raw: unknown, display: string): GroupedExcelCellKind {
  if (!hasVisibleValue(display) && raw === undefined) return "empty";
  if (display.includes("%")) return "percent";
  if (typeof raw === "number" && Number.isFinite(raw)) return "number";
  return "text";
}

function buildCell(raw: unknown, displayValue: unknown): GroupedExcelCell {
  const display = textValue(displayValue);
  const kind = cellKind(raw, display);
  const value = raw === undefined || raw === null || kind === "empty" ? null : typeof raw === "string" || typeof raw === "number" || typeof raw === "boolean" ? raw : display;
  return {
    value,
    display: display || EMPTY_DISPLAY,
    kind,
  };
}

function mergeColumnKind(current: GroupedExcelCellKind, next: GroupedExcelCellKind): GroupedExcelCellKind {
  if (current === "text" || next === "text") return "text";
  if (current === "percent" || next === "percent") return "percent";
  if (current === "number" || next === "number") return "number";
  return "empty";
}

function rowHasVisibleCells(row: GroupedExcelRow, columns: readonly GroupedExcelColumn[]): boolean {
  return columns.some((column) => row[column.key]?.kind !== "empty" && hasVisibleValue(row[column.key]?.display));
}

function stripEmptyColumns(columns: readonly GroupedExcelColumn[], rows: readonly GroupedExcelRow[]): GroupedExcelColumn[] {
  return columns.filter((column) => rows.some((row) => row[column.key]?.kind !== "empty" && hasVisibleValue(row[column.key]?.display)));
}

function parseSheet(workbook: XLSX.WorkBook, expectedName: string): GroupedExcelSheet {
  const sheetName = workbook.SheetNames.find((name) => normalizeSheetName(name) === normalizeSheetName(expectedName));
  const sheet = sheetName ? workbook.Sheets[sheetName] : undefined;
  if (!sheetName || !sheet) {
    return {
      sheetName: expectedName,
      status: "missing",
      columns: [],
      rows: [],
      visibleRowCount: 0,
      visibleColumnCount: 0,
    };
  }

  const rawRows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: true, defval: undefined, blankrows: true }) as unknown[][];
  const displayRows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false, defval: undefined, blankrows: true }) as unknown[][];
  const maxCols = maxColumnCount(sheet, displayRows);
  const segmentRow = findSegmentHeaderRow(displayRows);
  const headerRow = segmentRow >= 0 ? segmentRow : findFallbackHeaderRow(displayRows);
  if (headerRow < 0) {
    return {
      sheetName,
      status: "empty",
      columns: [],
      rows: [],
      visibleRowCount: 0,
      visibleColumnCount: 0,
    };
  }

  const baseColumns = segmentRow >= 0 ? buildMultilevelColumns(sheet, displayRows, segmentRow, maxCols) : buildFallbackColumns(sheet, displayRows, headerRow, maxCols);
  const rows: GroupedExcelRow[] = [];
  for (let rowIndex = headerRow + 1; rowIndex < Math.max(rawRows.length, displayRows.length); rowIndex += 1) {
    const row: Record<string, GroupedExcelCell> = {};
    baseColumns.forEach((column, col) => {
      row[column.key] = buildCell(cell(rawRows, rowIndex, col), cell(displayRows, rowIndex, col));
    });
    if (rowHasVisibleCells(row, baseColumns)) {
      rows.push(row);
    }
  }

  const columnsWithData = stripEmptyColumns(baseColumns, rows).map((column) => {
    const kind = rows.reduce<GroupedExcelCellKind>((current, row) => mergeColumnKind(current, row[column.key]?.kind ?? "empty"), "empty");
    return { ...column, kind };
  });

  if (!rows.length || !columnsWithData.length) {
    return {
      sheetName,
      status: "empty",
      columns: [],
      rows: [],
      visibleRowCount: 0,
      visibleColumnCount: 0,
    };
  }

  const groupedHeaders = buildGroupedHeaders(sheet, displayRows, columnsWithData, segmentRow, maxCols);

  return {
    sheetName,
    status: "ready",
    groupedHeaders,
    columns: columnsWithData,
    rows,
    visibleRowCount: rows.length,
    visibleColumnCount: columnsWithData.length,
  };
}

export function extractGroupedExcelSheets(input: Buffer | ArrayBuffer | Uint8Array): GroupedExcelSheet[] {
  const workbook = XLSX.read(input, { type: "buffer", cellDates: true, raw: true });
  return GROUPED_EXCEL_SHEET_NAMES.map((sheetName) => parseSheet(workbook, sheetName));
}
