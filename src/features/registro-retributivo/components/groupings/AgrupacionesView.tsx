"use client";

import { Search, Table2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { DataTableShell } from "@/features/registro-retributivo/components/common/DataTableShell";
import { SectionTabs } from "@/features/registro-retributivo/components/common/SectionTabs";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { GroupedExcelCell, GroupedExcelHeaderCell, GroupedExcelSheet } from "@/features/registro-retributivo/types";
import { groupingHeaderSurface } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/features/registro-retributivo/utils/classNames";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

const GROUPED_SHEETS = [
  { fullName: "Análisis por puesto", shortLabel: "Puesto", idLabel: "Puesto ID", nameLabel: "Puesto" },
  { fullName: "Análisis por valoración puesto", shortLabel: "Valoración", idLabel: "Valoración ID", nameLabel: "Valoración" },
  { fullName: "Análisis por categoría", shortLabel: "Categoría", idLabel: "Categoría ID", nameLabel: "Categoría" },
  { fullName: "Análisis por familia de puesto", shortLabel: "Familia", idLabel: "Familia ID", nameLabel: "Familia" },
  { fullName: "Agrupación Categoría Personal", shortLabel: "Cat. personal", idLabel: "Agrupación ID", nameLabel: "Agrupación" },
] as const;

type GroupedSheetName = (typeof GROUPED_SHEETS)[number]["fullName"];

const MISSING_SHEET_MESSAGE = "No se ha encontrado esta hoja en el Excel Reg. Retrib.";
const EMPTY_SHEET_MESSAGE = "No hay datos visibles en esta hoja.";
const LEGACY_ANALYSIS_MESSAGE = "Este análisis no contiene datos de hojas agrupadas. Vuelve a analizar el Excel para visualizarlas.";
const TRUNCATED_HISTORY_MESSAGE = "Esta hoja se guardó parcialmente en Historial para mantener el rendimiento. Vuelve a analizar el Excel para ver todos los datos.";
const HEADER_ROW_HEIGHT = 36;
const SHEET_PANEL_ID = "agrupaciones-sheet-panel";

function sheetTabId(index: number): string {
  return `agrupaciones-sheet-tab-${index}`;
}

function placeholderSheet(sheetName: string): GroupedExcelSheet {
  return {
    sheetName,
    status: "missing",
    columns: [],
    rows: [],
    visibleRowCount: 0,
    visibleColumnCount: 0,
  };
}

function sheetMessage(sheet: GroupedExcelSheet): string | undefined {
  if (sheet.status === "missing") return MISSING_SHEET_MESSAGE;
  if (sheet.status === "empty") return EMPTY_SHEET_MESSAGE;
  return undefined;
}

function cellDisplay(cell: GroupedExcelCell | undefined): string {
  return cell?.display?.trim() || "—";
}

function isNumericCell(cell: GroupedExcelCell | undefined): boolean {
  return cell?.kind === "number" || cell?.kind === "percent";
}

function splitHeaderLabel(label: string): string[] {
  return label
    .split("·")
    .map((part) => part.trim())
    .filter(Boolean);
}

function isMetricHeader(label: string): boolean {
  const normalized = normalizeComparableText(label);
  return (
    normalized.includes("total personas") ||
    normalized.includes("retribucion") ||
    normalized.includes("registro retributivo") ||
    normalized.includes("mujeres") ||
    normalized.includes("varones") ||
    normalized.includes("diferencia")
  );
}

function sheetMetadata(sheetName: string) {
  return GROUPED_SHEETS.find((sheet) => sheet.fullName === sheetName);
}

function naturalFirstColumnLabel(sheet: GroupedExcelSheet, columnIndex: number): string | undefined {
  if (columnIndex > 1) return undefined;

  const metadata = sheetMetadata(sheet.sheetName);
  if (!metadata) return undefined;

  const current = sheet.columns[columnIndex]?.label ?? "";
  const previous = sheet.columns[columnIndex - 1]?.label ?? "";
  const next = sheet.columns[columnIndex + 1]?.label ?? "";
  const normalizedCurrent = normalizeComparableText(current);
  const normalizedPrevious = normalizeComparableText(previous);
  const normalizedNext = normalizeComparableText(next);

  if (columnIndex === 0) {
    if (normalizedCurrent.includes(" id") || normalizedCurrent.startsWith("id ") || normalizedCurrent === "id" || normalizedCurrent === normalizedNext) {
      return metadata.idLabel;
    }

    if (!isMetricHeader(current)) {
      return metadata.nameLabel;
    }
  }

  if (columnIndex === 1 && (normalizedCurrent === normalizedPrevious || !isMetricHeader(current))) {
    return metadata.nameLabel;
  }

  return undefined;
}

function rowMatchesQuery(row: GroupedExcelSheet["rows"][number], sheet: GroupedExcelSheet, query: string): boolean {
  if (!query) return true;
  const normalizedQuery = normalizeComparableText(query);
  return sheet.columns.some((column) => normalizeComparableText(cellDisplay(row[column.key])).includes(normalizedQuery));
}

function fallbackColumnPath(sheet: GroupedExcelSheet, columnIndex: number): string[] {
  const naturalLabel = naturalFirstColumnLabel(sheet, columnIndex);
  if (naturalLabel) return [naturalLabel];

  const label = sheet.columns[columnIndex]?.label ?? `Columna ${columnIndex + 1}`;
  const parts = splitHeaderLabel(label);
  return parts.length ? parts : [label];
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

function buildFallbackGroupedHeaders(sheet: GroupedExcelSheet): GroupedExcelHeaderCell[][] {
  if (!sheet.columns.length) return [];

  const paths = sheet.columns.map((_, index) => fallbackColumnPath(sheet, index));
  const maxDepth = Math.max(...paths.map((path) => path.length), 1);

  return Array.from({ length: maxDepth }, (_, level) => {
    const cells: GroupedExcelHeaderCell[] = [];
    let columnIndex = 0;
    while (columnIndex < sheet.columns.length) {
      const currentPath = paths[columnIndex];
      const current = headerPartAtLevel(currentPath, level, maxDepth);
      if (!current) {
        columnIndex += 1;
        continue;
      }

      let endColumn = columnIndex;
      while (endColumn + 1 < sheet.columns.length && sameHeaderCell(currentPath, paths[endColumn + 1], current.partIndex, current.label)) {
        endColumn += 1;
      }

      cells.push({
        label: current.label,
        colSpan: endColumn - columnIndex + 1,
        rowSpan: current.rowSpan,
        startColumn: columnIndex,
        endColumn,
        level,
        path:
          currentPath.length === 1 && columnIndex === endColumn
            ? sheet.columns[columnIndex]?.label || currentPath[0]
            : currentPath.slice(0, current.partIndex + 1).join(" > "),
      });
      columnIndex = endColumn + 1;
    }
    return cells;
  });
}

function groupedHeadersForSheet(sheet: GroupedExcelSheet): readonly (readonly GroupedExcelHeaderCell[])[] {
  return sheet.groupedHeaders?.length ? sheet.groupedHeaders : buildFallbackGroupedHeaders(sheet);
}

function displayHeaderLabel(cell: GroupedExcelHeaderCell): string {
  const normalized = normalizeComparableText(cell.label);
  if (normalized === "mujeres") return "Mujeres";
  if (normalized === "varones") return "Varones";
  if (normalized === "% mujeres") return "% Mujeres";
  if (normalized === "diferencia %") return "Diferencia %";
  if (normalized === "media") return "Media";
  if (normalized === "mediana") return "Mediana";
  if (cell.level === 0 && isMetricHeader(cell.label)) return cell.label.toLocaleUpperCase("es-ES");
  return cell.label;
}

function stickyIdentifierColumnCount(sheet: GroupedExcelSheet): number {
  return sheet.columns.slice(0, 2).filter((column) => !isMetricHeader(column.label)).length;
}

function stickyColumnClass(columnIndex: number, stickyCount: number, rowIndex?: number): string {
  const rowSurface = rowIndex === undefined
    ? ""
    : rowIndex % 2 === 0
      ? "bg-muted"
      : "bg-card";
  if (columnIndex === 0 && stickyCount >= 1) {
    return cn("sticky left-0 z-10 min-w-[144px]", rowSurface);
  }
  if (columnIndex === 1 && stickyCount >= 2) {
    return cn(
      "sticky left-[144px] z-10 min-w-[260px] shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]",
      rowSurface,
    );
  }
  return "min-w-[132px]";
}

function headerStickyColumnClass(cell: GroupedExcelHeaderCell, stickyCount: number): string {
  if (cell.startColumn === 0 && cell.colSpan === 1 && stickyCount >= 1) {
    return "left-0 z-30 min-w-[144px]";
  }
  if (cell.startColumn === 1 && cell.colSpan === 1 && stickyCount >= 2) {
    return "left-[144px] z-30 min-w-[260px] shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]";
  }
  return "z-20 min-w-[132px]";
}

export function AgrupacionesView() {
  const { result, assistantNavigationIntent, consumeAssistantNavigationIntent } = useAppState();
  const groupedExcelSheets = result?.groupedExcelSheets;
  const [activeSheetName, setActiveSheetName] = useState<GroupedSheetName>(GROUPED_SHEETS[0].fullName);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (assistantNavigationIntent?.type !== "open_grouping" || !groupedExcelSheets) return;
    const target = groupedExcelSheets.find((sheet) => sheet.rows.some((row) => rowMatchesQuery(row, sheet, assistantNavigationIntent.groupingId)));
    if (target && GROUPED_SHEETS.some((sheet) => sheet.fullName === target.sheetName)) setActiveSheetName(target.sheetName as GroupedSheetName);
    setQuery(assistantNavigationIntent.groupingId);
    consumeAssistantNavigationIntent();
  }, [assistantNavigationIntent, consumeAssistantNavigationIntent, groupedExcelSheets]);

  const activeSheet = useMemo(() => {
    return groupedExcelSheets?.find((sheet) => sheet.sheetName === activeSheetName) ?? placeholderSheet(activeSheetName);
  }, [activeSheetName, groupedExcelSheets]);

  const visibleRows = useMemo(() => activeSheet.rows.filter((row) => rowMatchesQuery(row, activeSheet, query)), [activeSheet, query]);
  const activeGroupedHeaders = useMemo(() => groupedHeadersForSheet(activeSheet), [activeSheet]);
  const stickyColumnCount = useMemo(() => stickyIdentifierColumnCount(activeSheet), [activeSheet]);
  const activeSheetIndex = GROUPED_SHEETS.findIndex((sheet) => sheet.fullName === activeSheetName);

  if (!groupedExcelSheets) {
    return (
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon"><Table2 /></EmptyMedia>
          <EmptyTitle>Agrupaciones</EmptyTitle>
          <EmptyDescription>{LEGACY_ANALYSIS_MESSAGE}</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="min-w-0 w-full">

      <DataTableShell
        toolbar={
          <div className="flex flex-col gap-4">
            <SectionTabs
              label="Vistas de Agrupaciones"
              value={activeSheetName}
              onValueChange={(value) => {
                setActiveSheetName(value);
                setQuery("");
              }}
              items={GROUPED_SHEETS.map((sheet, index) => ({
                value: sheet.fullName,
                label: sheet.shortLabel,
                title: sheet.fullName,
                tabId: sheetTabId(index),
                panelId: SHEET_PANEL_ID,
              }))}
            />
            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:items-end">
              <div>
                <p
                  className="text-sm font-semibold"
                  aria-label={`${activeSheet.sheetName} · ${visibleRows.length} filas · ${activeSheet.visibleColumnCount} columnas`}
                >
                  {activeSheet.sheetName} · <span className="tabular-nums">{visibleRows.length} filas</span> · <span className="tabular-nums">{activeSheet.visibleColumnCount} columnas</span>
                </p>
                {activeSheet.truncated ? <p className="mt-2 text-sm font-semibold leading-6 text-amber-800 dark:text-amber-300">{TRUNCATED_HISTORY_MESSAGE}</p> : null}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="agrupaciones-search">Buscar en esta hoja</Label>
                <div className="relative">
                  <Search className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                  <Input
                    id="agrupaciones-search"
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Buscar en esta hoja"
                    className="pl-9"
                  />
                </div>
              </div>
            </div>
          </div>
        }
      >
        <div role="tabpanel" id={SHEET_PANEL_ID} aria-labelledby={sheetTabId(activeSheetIndex)} className="min-w-0">
          {sheetMessage(activeSheet) ? (
            <p className="p-6 text-sm font-semibold text-muted-foreground">{sheetMessage(activeSheet)}</p>
          ) : (
            <>
            <table className="w-full min-w-[1100px] border-separate border-spacing-0 text-left text-sm">
              <thead className="text-muted-foreground shadow-sm">
                {activeGroupedHeaders.map((headerRow, rowIndex) => (
                  <tr key={`header-row-${rowIndex}`} style={{ height: HEADER_ROW_HEIGHT }}>
                    {headerRow.map((headerCell) => (
                      <th
                        key={`${headerCell.level}-${headerCell.startColumn}-${headerCell.endColumn}-${headerCell.label}`}
                        title={headerCell.path || headerCell.label}
                        aria-label={displayHeaderLabel(headerCell)}
                        colSpan={headerCell.colSpan}
                        rowSpan={headerCell.rowSpan}
                        className={cn(
                          "sticky border-b border-r border-border px-3 py-2 text-center text-[11px] font-semibold uppercase leading-4",
                          groupingHeaderSurface(headerCell.label, headerCell.level),
                          headerStickyColumnClass(headerCell, stickyColumnCount),
                        )}
                        style={{ top: headerCell.level * HEADER_ROW_HEIGHT }}
                      >
                        {displayHeaderLabel(headerCell)}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {visibleRows.map((row, rowIndex) => (
                  <tr key={`${activeSheet.sheetName}-${rowIndex}`} className="odd:bg-muted/30 even:bg-card text-foreground">
                    {activeSheet.columns.map((column, columnIndex) => {
                      const cell = row[column.key];
                      return (
                        <td
                          key={`${rowIndex}-${column.key}`}
                          className={cn(
                            "border-b border-border/70 px-4 py-3 align-top",
                            columnIndex < stickyColumnCount ? stickyColumnClass(columnIndex, stickyColumnCount, rowIndex) : "bg-inherit",
                            isNumericCell(cell) ? "text-right font-mono tabular-nums" : "text-left",
                            columnIndex >= stickyColumnCount && "min-w-[132px]",
                          )}
                        >
                          {cellDisplay(cell)}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
              {!visibleRows.length ? <p className="p-6 text-sm text-muted-foreground">No hay filas con la búsqueda actual.</p> : null}
            </>
          )}
        </div>
      </DataTableShell>
    </div>
  );
}
