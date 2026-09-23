"use client";

import { AlertTriangle, CheckCircle2, ChevronDown, Search, Table2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { DataTableShell } from "@/features/registro-retributivo/components/common/DataTableShell";
import {
  Callout,
  Drawer,
  EmptyState,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  type TableProps,
} from "@/components/system";
import {
  GAP_BLOCKS,
  GAP_MEASURES,
  GAP_THRESHOLD,
  exceedsThreshold,
  isComparableGroup,
  maxGap,
  parseGapRows,
  type GapMeasure,
  type GapRow,
  type GapStat,
} from "@/features/registro-retributivo/groupings/genderGap";
import type { GroupedExcelCell, GroupedExcelHeaderCell, GroupedExcelSheet } from "@/features/registro-retributivo/types";
import { groupingHeaderSurface } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/features/registro-retributivo/utils/classNames";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

const GROUPED_SHEETS = [
  { fullName: "Análisis por puesto", shortLabel: "Puesto", idLabel: "Puesto ID", nameLabel: "Puesto", plural: "puestos" },
  { fullName: "Análisis por valoración puesto", shortLabel: "Valoración", idLabel: "Valoración ID", nameLabel: "Valoración", plural: "valoraciones" },
  { fullName: "Análisis por categoría", shortLabel: "Categoría", idLabel: "Categoría ID", nameLabel: "Categoría", plural: "categorías" },
  { fullName: "Análisis por familia de puesto", shortLabel: "Familia", idLabel: "Familia ID", nameLabel: "Familia", plural: "familias" },
  { fullName: "Agrupación Categoría Personal", shortLabel: "Categoría personal", idLabel: "Agrupación ID", nameLabel: "Agrupación", plural: "agrupaciones" },
] as const;

type GroupedSheetName = (typeof GROUPED_SHEETS)[number]["fullName"];

const MISSING_SHEET_MESSAGE = "No se ha encontrado esta hoja en el Excel Reg. Retrib.";
const EMPTY_SHEET_MESSAGE = "No hay datos visibles en esta hoja.";
const LEGACY_ANALYSIS_MESSAGE = "Este análisis no contiene datos de hojas agrupadas. Vuelve a analizar el Excel para visualizarlas.";
const TRUNCATED_HISTORY_MESSAGE = "Esta hoja se guardó parcialmente en Historial para mantener el rendimiento. Vuelve a analizar el Excel para ver todos los datos.";
const HEADER_ROW_HEIGHT = 36;
const SHEET_PANEL_ID = "agrupaciones-sheet-panel";

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
      "sticky left-[144px] z-10 min-w-[260px] shadow-[10px_0_16px_-16px_var(--shadow)]",
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
    return "left-[144px] z-30 min-w-[260px] shadow-[10px_0_16px_-16px_var(--shadow)]";
  }
  return "z-20 min-w-[132px]";
}

/** Hoja original del Excel con sus cabeceras multinivel (vista avanzada). */
function RawSheetTable({ sheet }: Readonly<{ sheet: GroupedExcelSheet }>) {
  const [query, setQuery] = useState("");
  const visibleRows = useMemo(() => sheet.rows.filter((row) => rowMatchesQuery(row, sheet, query)), [sheet, query]);
  const activeGroupedHeaders = useMemo(() => groupedHeadersForSheet(sheet), [sheet]);
  const stickyColumnCount = useMemo(() => stickyIdentifierColumnCount(sheet), [sheet]);

  return (
    <DataTableShell
      toolbar={
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground tabular-nums">
            {sheet.sheetName} · {visibleRows.length} filas · {sheet.visibleColumnCount} columnas
          </p>
          <Input
            id="agrupaciones-raw-search"
            type="search"
            aria-label="Buscar en la hoja original"
            value={query}
            onChange={setQuery}
            placeholder="Buscar en la hoja"
            leftIcon={<Search className="size-4" aria-hidden="true" />}
            className="min-w-0 sm:w-72"
          />
        </div>
      }
    >
      <div role="region" id={SHEET_PANEL_ID} aria-label={sheet.sheetName} className="min-w-0">
        {/* Excepción: cabeceras agrupadas multinivel sticky; Table de system no aplica. */}
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
              <tr key={`${sheet.sheetName}-${rowIndex}`} className="odd:bg-muted/30 even:bg-card text-foreground">
                {sheet.columns.map((column, columnIndex) => {
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
      </div>
    </DataTableShell>
  );
}

/* ------------------------------- Brecha por grupo ------------------------------- */

const PERCENT = new Intl.NumberFormat("es-ES", { style: "percent", maximumFractionDigits: 1, minimumFractionDigits: 1 });
const STATS: ReadonlyArray<{ id: GapStat; label: string }> = [
  { id: "media", label: "Media" },
  { id: "mediana", label: "Mediana" },
];

function formatGap(gap: number | undefined): string {
  return gap === undefined ? "—" : PERCENT.format(gap);
}

function gapClass(gap: number | undefined): string {
  if (gap === undefined) return "text-muted-foreground";
  return exceedsThreshold(gap) ? "font-semibold text-destructive" : "text-foreground";
}

/** Frase que explica una brecha concreta. */
function gapSentence(gap: number): string {
  const amount = PERCENT.format(Math.abs(gap));
  if (Math.abs(gap) < 0.0005) return "Mujeres y hombres cobran lo mismo.";
  return gap > 0 ? `Las mujeres cobran un ${amount} menos que los hombres.` : `Las mujeres cobran un ${amount} más que los hombres.`;
}

type GroupState = "over" | "under" | "none";

function groupState(row: GapRow, measure: GapMeasure, stat: GapStat): GroupState {
  const gap = maxGap(row, measure, stat);
  if (gap === undefined) return "none";
  return exceedsThreshold(gap) ? "over" : "under";
}

const GROUP_STATE_META: Record<GroupState, { label: string; dotClass: string }> = {
  over: { label: `Supera el ${PERCENT.format(GAP_THRESHOLD).replace(",0", "")}`, dotClass: "bg-destructive" },
  under: { label: "Por debajo", dotClass: "bg-emerald-500" },
  none: { label: "Sin comparación", dotClass: "bg-muted-foreground/60" },
};

function GroupStatePill({ state }: Readonly<{ state: GroupState }>) {
  const meta = GROUP_STATE_META[state];
  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-foreground">
      <span aria-hidden="true" className={cn("size-2 shrink-0 rounded-full", meta.dotClass)} />
      {meta.label}
    </span>
  );
}

function chipClass(active: boolean): string {
  return cn(
    "inline-flex min-h-8 items-center gap-2 rounded-full border px-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
    active ? "border-foreground/30 bg-selected text-foreground" : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
  );
}

function GapVerdict({ rows, measure, stat, plural }: Readonly<{ rows: readonly GapRow[]; measure: GapMeasure; stat: GapStat; plural: string }>) {
  const comparable = rows.filter(isComparableGroup);
  const over = comparable.filter((row) => groupState(row, measure, stat) === "over").length;
  const notComparable = rows.length - comparable.length;
  const threshold = PERCENT.format(GAP_THRESHOLD).replace(",0", "");

  return (
    <section
      aria-labelledby="gap-verdict-title"
      className={cn("flex items-start gap-3 rounded-2xl border p-5", over ? "border-destructive/25 bg-destructive/5" : "border-emerald-500/30 bg-emerald-500/5")}
    >
      {over ? (
        <AlertTriangle className="mt-0.5 size-6 shrink-0 text-destructive" aria-hidden="true" />
      ) : (
        <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-emerald-500" aria-hidden="true" />
      )}
      <div className="min-w-0">
        <h3 id="gap-verdict-title" className="text-lg font-semibold tracking-tight text-foreground text-balance">
          {over
            ? `${over} de ${comparable.length} ${plural} con mujeres y hombres ${over === 1 ? "tiene" : "tienen"} una brecha del ${threshold} o más`
            : `Ningún grupo con mujeres y hombres llega al ${threshold} de brecha`}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground text-pretty">
          {over ? "Esas brechas deben justificarse en el Registro Retributivo (art. 28.3 del Estatuto de los Trabajadores). " : ""}
          {notComparable
            ? `${notComparable} ${notComparable === 1 ? "no se puede comparar porque solo tiene" : `${plural} no se pueden comparar porque solo tienen`} mujeres u hombres.`
            : "Todos los grupos tienen mujeres y hombres para comparar."}
        </p>
      </div>
    </section>
  );
}

function PeopleCell({ row }: Readonly<{ row: GapRow }>) {
  const total = row.women + row.men;
  const womenShare = total ? (row.women / total) * 100 : 0;
  return (
    <span className="flex w-full flex-col gap-1">
      <span className="text-sm tabular-nums text-foreground">
        {row.women} M · {row.men} H
      </span>
      <span aria-hidden="true" className="flex h-1.5 w-full overflow-hidden rounded-full bg-primary/25">
        <span className="h-full bg-primary" style={{ width: `${womenShare}%` }} />
      </span>
    </span>
  );
}

function people(count: number, singular: string, plural: string): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

function GapDrawer({
  row,
  measure,
  stat,
  onClose,
}: Readonly<{ row: GapRow; measure: GapMeasure; stat: GapStat; onClose: () => void }>) {
  const measureMeta = GAP_MEASURES.find((item) => item.id === measure) ?? GAP_MEASURES[0];
  const statLabel = STATS.find((item) => item.id === stat)?.label.toLowerCase() ?? "media";
  const media = maxGap(row, measure, stat);
  const comparable = isComparableGroup(row);
  const over = exceedsThreshold(media);

  return (
    <Drawer
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      title={row.name || row.id}
      description={`${row.id} · ${people(row.women, "mujer", "mujeres")} y ${people(row.men, "hombre", "hombres")}`}
      size="lg"
    >
      <div className="flex min-w-0 flex-col gap-6">
        <section
          aria-label="Conclusión"
          className={cn(
            "rounded-xl border p-4",
            !comparable ? "border-border bg-muted/40" : over ? "border-destructive/25 bg-destructive/5" : "border-emerald-500/30 bg-emerald-500/5",
          )}
        >
          <p className="text-base font-semibold text-foreground text-pretty">
            {!comparable
              ? `No se puede calcular la brecha: el grupo solo tiene ${row.women ? "mujeres" : "hombres"}.`
              : media === undefined
                ? "El Excel no trae la brecha de este grupo."
                : `${gapSentence(media)} Es la mayor brecha (${statLabel}) entre los bloques${over ? " y supera el 25 %: debe justificarse." : "."}`}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{measureMeta.label}: {measureMeta.description.toLowerCase()}</p>
        </section>

        {comparable
          ? STATS.map((stat) => (
              <section key={stat.id} aria-labelledby={`gap-${stat.id}-title`} className="flex flex-col gap-2">
                <h3 id={`gap-${stat.id}-title`} className="text-sm font-semibold text-foreground">
                  {stat.label} por bloque
                </h3>
                <div className="min-w-0 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full min-w-[26rem] text-sm">
                    <caption className="sr-only">{`${stat.label} por bloque`}</caption>
                    <thead className="bg-muted/50 text-xs text-muted-foreground">
                      <tr>
                        <th scope="col" className="px-3 py-2 text-left font-medium">Bloque</th>
                        <th scope="col" className="px-3 py-2 text-right font-medium">Mujeres</th>
                        <th scope="col" className="px-3 py-2 text-right font-medium">Hombres</th>
                        <th scope="col" className="px-3 py-2 text-right font-medium">Brecha</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {GAP_BLOCKS.map((block, index) => {
                        const values = row.values[measure][stat.id][index] ?? {};
                        return (
                          <tr key={block}>
                            <th scope="row" className="px-3 py-2 text-left font-medium text-foreground">{block}</th>
                            <td className="px-3 py-2 text-right font-mono tabular-nums">{values.women === undefined ? "—" : formatEuro(values.women)}</td>
                            <td className="px-3 py-2 text-right font-mono tabular-nums">{values.men === undefined ? "—" : formatEuro(values.men)}</td>
                            <td className={cn("px-3 py-2 text-right font-mono tabular-nums", gapClass(values.gap))}>{formatGap(values.gap)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            ))
          : null}
      </div>
    </Drawer>
  );
}

export function AgrupacionesView() {
  const { result } = useAppState();
  const groupedExcelSheets = result?.groupedExcelSheets;
  const [activeSheetName, setActiveSheetName] = useState<GroupedSheetName>(GROUPED_SHEETS[0].fullName);
  const [measure, setMeasure] = useState<GapMeasure>("total");
  const [stat, setStat] = useState<GapStat>("media");
  const [query, setQuery] = useState("");
  const [onlyOver, setOnlyOver] = useState(false);
  const [selected, setSelected] = useState<GapRow | undefined>();

  const activeSheet = useMemo(
    () => groupedExcelSheets?.find((sheet) => sheet.sheetName === activeSheetName) ?? placeholderSheet(activeSheetName),
    [activeSheetName, groupedExcelSheets],
  );
  const sheetMeta = sheetMetadata(activeSheetName) ?? GROUPED_SHEETS[0];
  const gapRows = useMemo(() => parseGapRows(activeSheet), [activeSheet]);
  const visibleRows = useMemo(() => {
    const needle = normalizeComparableText(query.trim());
    return (gapRows ?? []).filter((row) => {
      if (onlyOver && groupState(row, measure, stat) !== "over") return false;
      return !needle || normalizeComparableText(`${row.id} ${row.name}`).includes(needle);
    });
  }, [gapRows, measure, onlyOver, query, stat]);
  const overCount = (gapRows ?? []).filter((row) => groupState(row, measure, stat) === "over").length;

  const columns = useMemo<TableProps<GapRow>["columns"]>(
    () => [
      {
        key: "name",
        header: sheetMeta.nameLabel,
        sortable: true,
        sortValue: (row) => row.name,
        cell: (row) => (
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-medium text-foreground">{row.name || row.id}</span>
            <span className="truncate font-mono text-xs text-muted-foreground">{row.id}</span>
          </span>
        ),
      },
      {
        key: "people",
        header: "Personas",
        width: "130px",
        sortable: true,
        sortValue: (row) => row.women + row.men,
        cell: (row) => <PeopleCell row={row} />,
      },
      ...GAP_BLOCKS.map((block, index) => ({
        key: `gap-${index}`,
        header: `Brecha ${block.toLowerCase()}`,
        width: "150px",
        align: "right" as const,
        sortable: true,
        sortValue: (row: GapRow) => (isComparableGroup(row) ? Math.abs(row.values[measure][stat][index]?.gap ?? 0) : -1),
        cell: (row: GapRow) => {
          const gap = isComparableGroup(row) ? row.values[measure][stat][index]?.gap : undefined;
          return <span className={cn("font-mono", gapClass(gap))}>{formatGap(gap)}</span>;
        },
      })),
      {
        key: "state",
        header: "Estado",
        width: "170px",
        sortable: true,
        // Sin comparación al final; después, de mayor a menor brecha.
        sortValue: (row) => {
          const gap = maxGap(row, measure, stat);
          return gap === undefined ? -1 : Math.abs(gap);
        },
        cell: (row) => <GroupStatePill state={groupState(row, measure, stat)} />,
      },
    ],
    [measure, sheetMeta.nameLabel, stat],
  );

  if (!groupedExcelSheets) {
    return <EmptyState icon={<Table2 />} title="Agrupaciones" description={LEGACY_ANALYSIS_MESSAGE} />;
  }

  const message = sheetMessage(activeSheet);

  return (
    <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-5 pb-6">
      <header>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Brecha entre mujeres y hombres por grupo</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground text-pretty">
          Para cada grupo del Registro Retributivo, cuánto cobran las mujeres frente a los hombres. Una brecha positiva significa que las mujeres
          cobran menos; a partir del 25 % debe justificarse.
        </p>
      </header>

      <div className="flex min-w-0 flex-col gap-3">
        <div role="group" aria-label="Agrupar por" className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm text-muted-foreground">Agrupar por</span>
          {GROUPED_SHEETS.map((sheet) => (
            <button
              key={sheet.fullName}
              type="button"
              aria-pressed={sheet.fullName === activeSheetName}
              className={chipClass(sheet.fullName === activeSheetName)}
              onClick={() => {
                setActiveSheetName(sheet.fullName);
                setQuery("");
                setOnlyOver(false);
              }}
            >
              {sheet.shortLabel}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-sm text-muted-foreground">Retribución</span>
          <Select value={measure} onValueChange={(value) => { const next = GAP_MEASURES.find((item) => item.id === value); if (next) setMeasure(next.id); }}>
            <SelectTrigger className="w-full min-w-0 sm:w-64" aria-label="Retribución">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {GAP_MEASURES.map((item) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div role="group" aria-label="Estadístico" className="flex gap-1.5">
            {STATS.map((item) => (
              <button key={item.id} type="button" aria-pressed={stat === item.id} className={chipClass(stat === item.id)} onClick={() => setStat(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {activeSheet.truncated ? <Callout status="info" title="Hoja guardada parcialmente">{TRUNCATED_HISTORY_MESSAGE}</Callout> : null}
      </div>

      {message ? (
        <EmptyState icon={<Table2 />} title={sheetMeta.fullName} description={message} />
      ) : gapRows ? (
        <>
          <GapVerdict rows={gapRows} measure={measure} stat={stat} plural={sheetMeta.plural} />

          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div role="group" aria-label="Filtrar grupos" className="flex flex-wrap gap-2">
              <button type="button" aria-pressed={!onlyOver} className={chipClass(!onlyOver)} onClick={() => setOnlyOver(false)}>
                Todos
                <span className="font-semibold tabular-nums text-foreground">{gapRows.length}</span>
              </button>
              <button type="button" aria-pressed={onlyOver} className={chipClass(onlyOver)} onClick={() => setOnlyOver(true)}>
                <span aria-hidden="true" className="size-2 rounded-full bg-destructive" />
                Brecha del 25 % o más
                <span className="font-semibold tabular-nums text-foreground">{overCount}</span>
              </button>
            </div>
            <Input
              id="agrupaciones-search"
              type="search"
              aria-label="Buscar grupo"
              value={query}
              onChange={setQuery}
              placeholder={`Buscar ${sheetMeta.shortLabel.toLowerCase()}`}
              leftIcon={<Search className="size-4" aria-hidden="true" />}
              className="min-w-0 sm:w-72"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Brecha = cuánto menos cobran las mujeres que los hombres ({STATS.find((item) => item.id === stat)?.label.toLowerCase()}). En rojo, del 25 % en
            adelante. M = mujeres, H = hombres. Pulsa una fila para ver los importes.
          </p>

          <div data-slot="table-viewport" className="min-w-0">
            <Table
              key={`${activeSheetName}-${measure}-${stat}`}
              data={[...visibleRows]}
              columns={columns}
              getRowId={(row) => `${row.id}-${row.name}`}
              defaultSort={{ key: "state", direction: "desc" }}
              height={520}
              rowHeight={56}
              className="min-w-0"
              emptyState={<EmptyState title="Ningún grupo coincide con el filtro." />}
              onRowActivate={setSelected}
              getRowAriaLabel={(row) => `Ver brecha de ${row.name || row.id}`}
            />
          </div>

          <details className="group min-w-0">
            <summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 rounded-md text-sm text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
              <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
              Ver la hoja original del Excel ({activeSheet.visibleColumnCount} columnas)
            </summary>
            <div className="mt-3">
              <RawSheetTable sheet={activeSheet} />
            </div>
          </details>
        </>
      ) : (
        <>
          <Callout status="info" title="Esta hoja no tiene el formato de brecha esperado">
            Se muestra tal cual viene en el Excel.
          </Callout>
          <RawSheetTable sheet={activeSheet} />
        </>
      )}

      {selected ? <GapDrawer row={selected} measure={measure} stat={stat} onClose={() => setSelected(undefined)} /> : null}
    </div>
  );
}
