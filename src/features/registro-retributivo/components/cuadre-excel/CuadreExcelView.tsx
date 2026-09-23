"use client";

import { FileCheck2, Search } from "lucide-react";
import { Fragment, useMemo, useState } from "react";
import { AiExplanationPanel } from "@/features/registro-retributivo/components/ai/AiExplanationPanel";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { StatusBadge } from "@/features/registro-retributivo/components/common/StatusBadge";
import { DetailField, MoneyTable } from "@/features/registro-retributivo/components/common/DetailParts";
import { DataTableShell } from "@/features/registro-retributivo/components/common/DataTableShell";
import {
  Callout,
  EmptyState,
  Input,
  Modal,
  NumberTicker,
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/system";
import { buildInternalExcelExplainPayload } from "@/features/registro-retributivo/ai/explainPayload";
import type { AnalysisStatus, InternalExcelCheckRow, InternalExcelNormalizedVariablesCheckRow } from "@/features/registro-retributivo/types";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { diffClass, rowTone } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/features/registro-retributivo/utils/classNames";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { selectBreakdownProjection, selectNormalizedProjection } from "@/features/registro-retributivo/selectors/sharedSelectors";

type CuadreMode = "breakdown" | "normalizedVariables";
type StatusFilter = "Todos" | Extract<AnalysisStatus, "OK" | "Revisar" | "Diferencia">;

interface SummaryMetric {
  readonly label: string;
  readonly value: string | number;
  readonly alert?: boolean;
}

const MODES: ReadonlyArray<{ id: CuadreMode; label: string; description: string }> = [
  {
    id: "breakdown",
    label: "No norm. / Desglose",
    description: "Compara las retribuciones del periodo completo frente a la suma de conceptos desglosados.",
  },
  {
    id: "normalizedVariables",
    label: "No norm. / Norm. + variables",
    description: "Compara las retribuciones del periodo completo frente al total normalizado más variables del Excel Reg. Retrib.",
  },
];

const BREAKDOWN_HEADERS = [
  "Matrícula",
  "Salario periodo completo",
  "Salario desglose",
  "Dif. Salario",
  "C. Salarial periodo completo",
  "C. Salarial desglose",
  "Dif. C. Salarial",
  "Extrasalarial periodo completo",
  "Extrasalarial desglose",
  "Dif. Extrasalarial",
  "Estado",
] as const;

const NORMALIZED_BLOCKS = [
  {
    label: "Salario",
    period: "salaryPeriod",
    normalized: "salaryNormalizedPlusVariables",
    difference: "salaryDifference",
  },
  {
    label: "C. Salarial",
    period: "salaryComplementPeriod",
    normalized: "salaryComplementNormalizedPlusVariables",
    difference: "salaryComplementDifference",
  },
  {
    label: "Extrasalarial",
    period: "extraSalaryPeriod",
    normalized: "extraSalaryNormalizedPlusVariables",
    difference: "extraSalaryDifference",
  },
  {
    label: "Total",
    period: "totalPeriod",
    normalized: "totalNormalizedPlusVariables",
    difference: "totalDifference",
  },
] as const;

function matchesText(value: string | number | undefined, query: string): boolean {
  return displayText(value).toLocaleLowerCase("es").includes(query);
}

function DetailModal({ row, onClose }: Readonly<{ row: InternalExcelCheckRow; onClose: () => void }>) {
  const projection = selectBreakdownProjection(row);
  const aiPayload = buildInternalExcelExplainPayload(row);

  return (
    <Modal
      open
      onOpenChange={(open) => { if (!open) onClose(); }}
      title={`Cuadre Reg. · ${displayText(projection.personId)}`}
      description="Periodo completo frente a desglose del Excel."
      size="lg"
      className="max-h-[min(94dvh,100dvh)] overflow-y-auto"
    >
      <div className="flex min-w-0 flex-col gap-5">
        <dl className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4">
          <DetailField label="Estado" value={<StatusBadge value={projection.status} />} />
          <DetailField label="Centro" value={row.workplace} />
          <DetailField label="Puesto" value={row.position} />
          <DetailField label="Categoría" value={row.category} />
        </dl>
        <MoneyTable
          caption="Periodo completo frente a desglose"
          leftLabel="Periodo"
          rightLabel="Desglose"
          rows={[
            { label: "Salario", left: projection.salaryPeriod, right: projection.salaryBreakdown, diff: projection.salaryDifference },
            { label: "C. Salarial", left: projection.salaryComplementPeriod, right: projection.salaryComplementBreakdown, diff: projection.salaryComplementDifference },
            { label: "Extrasalarial", left: projection.extraSalaryPeriod, right: projection.extraSalaryBreakdown, diff: projection.extraSalaryDifference },
          ]}
        />
        <p className="text-sm leading-6 text-muted-foreground text-pretty">{displayText(row.detail) || "Sin detalle adicional."}</p>
        <AiExplanationPanel type="internalExcelCheck" payload={aiPayload} />
      </div>
    </Modal>
  );
}

const STATUS_FILTERS: readonly StatusFilter[] = ["Todos", "OK", "Revisar", "Diferencia"];

function isStatusFilter(value: string): value is StatusFilter {
  return STATUS_FILTERS.some((item) => item === value);
}

function CuadreControls({
  query,
  statusFilter,
  onQueryChange,
  onStatusFilterChange,
}: Readonly<{
  query: string;
  statusFilter: StatusFilter;
  onQueryChange: (value: string) => void;
  onStatusFilterChange: (value: StatusFilter) => void;
}>) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Input
        id="cuadre-search"
        type="search"
        aria-label="Buscar en Cuadre Reg."
        value={query}
        onChange={onQueryChange}
        placeholder="Matrícula, centro, puesto…"
        leftIcon={<Search className="size-4" aria-hidden="true" />}
        className="min-w-0 sm:w-80"
      />
      <Tabs variant="pill" value={statusFilter} onValueChange={(value) => { if (isStatusFilter(value)) onStatusFilterChange(value); }}>
        <TabsList aria-label="Filtrar por estado" className="border border-border" wrapperClassName="max-w-full">
          {STATUS_FILTERS.map((item) => (
            <TabsTrigger key={item} value={item} className="px-3 py-1 text-xs">
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

function MetricStrip({ metrics }: Readonly<{ metrics: readonly SummaryMetric[] }>) {
  return (
    <dl
      data-surface="metric-grid"
      aria-label="Resumen de Cuadre Reg."
      className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-4 sm:grid-cols-3 xl:grid-cols-5"
    >
      {metrics.map((metric) => (
        <div key={metric.label} className="min-w-0">
          <dt className="text-xs text-muted-foreground">{metric.label}</dt>
          <dd className={cn("mt-1 truncate text-xl font-semibold tracking-tight tabular-nums", metric.alert ? "text-destructive" : "text-foreground")}>
            {typeof metric.value === "number" ? <NumberTicker value={metric.value} locale /> : metric.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function buildMetrics(input: {
  readonly totalCount: number;
  readonly rows: readonly { readonly status: AnalysisStatus }[];
  readonly maxDifference: number;
  readonly visibleTotalDifference: number;
}): SummaryMetric[] {
  const ok = input.rows.filter((row) => row.status === "OK").length;
  const withDifference = input.rows.filter((row) => row.status !== "OK").length;
  return [
    { label: "Empleados analizados", value: input.totalCount },
    { label: "OK", value: ok },
    { label: "Con diferencia", value: withDifference, alert: withDifference > 0 },
    { label: "Mayor diferencia", value: formatEuro(input.maxDifference), alert: input.maxDifference > 0 },
    { label: "Diferencia total visible", value: formatEuro(input.visibleTotalDifference) },
  ];
}

function BreakdownTable({ rows, onSelectRow }: Readonly<{ rows: readonly InternalExcelCheckRow[]; onSelectRow: (row: InternalExcelCheckRow) => void }>) {
  // Excepción: Table de system no cubre activación + densidad custom.
  return (
    <table className="w-full min-w-[1440px] border-separate border-spacing-0 text-left text-sm">
      <thead className="sticky top-0 z-20 bg-muted text-muted-foreground shadow-sm">
        <tr>
          {BREAKDOWN_HEADERS.map((header, index) => (
            <th
              key={header}
              className={cn(
                "border-b border-border px-4 py-3 text-xs font-semibold uppercase",
                index === 0 && "sticky left-0 z-30 min-w-[128px] bg-muted shadow-[10px_0_16px_-16px_var(--shadow)]",
              )}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const projection = selectBreakdownProjection(row);
          return (
          <tr
            key={projection.personId}
            tabIndex={0}
            onClick={() => onSelectRow(row)}
            onKeyDown={(event) => {
              if (event.key === "Enter") onSelectRow(row);
            }}
            className={cn("cursor-pointer transition", rowTone(projection.status))}
          >
            <td className="sticky left-0 z-10 min-w-[128px] border-b border-border/70 bg-inherit px-4 py-3 font-mono shadow-[10px_0_16px_-16px_var(--shadow)]">
              {displayText(projection.personId)}
            </td>
            <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(projection.salaryPeriod)}</td>
            <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(projection.salaryBreakdown)}</td>
            <td className={cn("border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums", diffClass(projection.salaryDifference))}>{formatEuro(projection.salaryDifference)}</td>
            <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(projection.salaryComplementPeriod)}</td>
            <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(projection.salaryComplementBreakdown)}</td>
            <td className={cn("border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums", diffClass(projection.salaryComplementDifference))}>
              {formatEuro(projection.salaryComplementDifference)}
            </td>
            <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(projection.extraSalaryPeriod)}</td>
            <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(projection.extraSalaryBreakdown)}</td>
            <td className={cn("border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums", diffClass(projection.extraSalaryDifference))}>{formatEuro(projection.extraSalaryDifference)}</td>
            <td className="border-b border-border/70 px-4 py-3">
<StatusBadge value={projection.status} />
            </td>
          </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function NormalizedVariablesTable({ rows }: Readonly<{ rows: readonly InternalExcelNormalizedVariablesCheckRow[] }>) {
  // Excepción: cabeceras multinivel (rowSpan/colSpan) no caben en Table de system.
  return (
    <table className="w-full min-w-[1920px] border-separate border-spacing-0 text-left text-sm">
      <thead className="sticky top-0 z-20 bg-muted text-muted-foreground shadow-sm">
        <tr>
          {["Matrícula", "Persona", "Centro", "Puesto", "Categoría"].map((header, index) => (
            <th
              key={header}
              rowSpan={2}
              className={cn(
                "border-b border-border px-4 py-3 text-xs font-semibold uppercase",
                index === 0 && "sticky left-0 z-30 min-w-[128px] bg-muted shadow-[10px_0_16px_-16px_var(--shadow)]",
              )}
            >
              {header}
            </th>
          ))}
          {NORMALIZED_BLOCKS.map((block) => (
            <th key={block.label} colSpan={3} className="border-b border-border px-4 py-2 text-center text-xs font-semibold uppercase">
              {block.label}
            </th>
          ))}
          <th rowSpan={2} className="border-b border-border px-4 py-3 text-xs font-semibold uppercase">
            Estado
          </th>
        </tr>
        <tr>
          {NORMALIZED_BLOCKS.flatMap((block) => [
            <th key={`${block.label}-period`} className="border-b border-border px-4 py-2 text-right text-xs font-semibold uppercase">
              No norm.
            </th>,
            <th key={`${block.label}-normalized`} className="border-b border-border px-4 py-2 text-right text-xs font-semibold uppercase">
              Norm. + variables
            </th>,
            <th key={`${block.label}-difference`} className="border-b border-border px-4 py-2 text-right text-xs font-semibold uppercase">
              Dif.
            </th>,
          ])}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => {
          const projection = selectNormalizedProjection(row);
          return (
          <tr key={projection.personId} className={cn("transition", rowTone(projection.status))}>
            <td className="sticky left-0 z-10 min-w-[128px] border-b border-border/70 bg-inherit px-4 py-3 font-mono shadow-[10px_0_16px_-16px_var(--shadow)]">
              {displayText(projection.personId)}
            </td>
            <td className="border-b border-border/70 px-4 py-3">{displayText(row.person) || "Sin dato"}</td>
            <td className="border-b border-border/70 px-4 py-3">{displayText(row.workplace) || "Sin dato"}</td>
            <td className="border-b border-border/70 px-4 py-3">{displayText(row.position) || "Sin dato"}</td>
            <td className="border-b border-border/70 px-4 py-3">{displayText(row.category) || "Sin dato"}</td>
            {NORMALIZED_BLOCKS.map((block) => {
              const period = projection[block.period];
              const normalized = projection[block.normalized];
              const difference = projection[block.difference];
              return (
                <Fragment key={`${projection.personId}-${block.label}`}>
                  <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(period)}</td>
                  <td className="border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums">{formatEuro(normalized)}</td>
                  <td className={cn("border-b border-border/70 px-4 py-3 text-right font-mono tabular-nums", diffClass(difference))}>{formatEuro(difference)}</td>
                </Fragment>
              );
            })}
            <td className="border-b border-border/70 px-4 py-3">
<StatusBadge value={projection.status} />
            </td>
          </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function CuadreExcelView() {
  const { result } = useAppState();
  const [activeMode, setActiveMode] = useState<CuadreMode>("breakdown");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Todos");
  const [selectedRow, setSelectedRow] = useState<InternalExcelCheckRow | undefined>();
  const activeDescription = MODES.find((mode) => mode.id === activeMode)?.description ?? MODES[0].description;

  const normalizedRows = result?.internalExcelNormalizedVariablesChecks;
  const normalizedLegacyMissing = activeMode === "normalizedVariables" && result && normalizedRows === undefined;

  const filteredBreakdownRows = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");
    return (result?.internalExcelChecks ?? []).filter((row) => {
      const matchesStatus = statusFilter === "Todos" || row.status === statusFilter;
      const matchesQuery =
        !normalizedQuery ||
        [row.employeeNumber, row.workplace, row.position, row.category].some((value) => matchesText(value, normalizedQuery));
      return matchesStatus && matchesQuery;
    });
  }, [query, result?.internalExcelChecks, statusFilter]);

  const filteredNormalizedRows = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("es");
    return (normalizedRows ?? []).filter((row) => {
      const matchesStatus = statusFilter === "Todos" || row.status === statusFilter;
      const matchesQuery =
        !normalizedQuery ||
        [row.employeeNumber, row.person, row.workplace, row.position, row.category].some((value) => matchesText(value, normalizedQuery));
      return matchesStatus && matchesQuery;
    });
  }, [normalizedRows, query, statusFilter]);

  const metrics = useMemo(() => {
    if (activeMode === "normalizedVariables") {
      return buildMetrics({
        totalCount: normalizedRows?.length ?? 0,
        rows: filteredNormalizedRows,
        maxDifference: filteredNormalizedRows.reduce((max, row) => { const projected = selectNormalizedProjection(row); return Math.max(max, Math.abs(projected.salaryDifference), Math.abs(projected.salaryComplementDifference), Math.abs(projected.extraSalaryDifference), Math.abs(projected.totalDifference)); }, 0),
        visibleTotalDifference: filteredNormalizedRows.reduce((sum, row) => sum + selectNormalizedProjection(row).totalDifference, 0),
      });
    }

    return buildMetrics({
      totalCount: result?.internalExcelChecks.length ?? 0,
      rows: filteredBreakdownRows,
      maxDifference: filteredBreakdownRows.reduce((max, row) => { const projected = selectBreakdownProjection(row); return Math.max(max, Math.abs(projected.salaryDifference), Math.abs(projected.salaryComplementDifference), Math.abs(projected.extraSalaryDifference)); }, 0),
      visibleTotalDifference: filteredBreakdownRows.reduce((sum, row) => { const projected = selectBreakdownProjection(row); return sum + projected.salaryDifference + projected.salaryComplementDifference + projected.extraSalaryDifference; }, 0),
    });
  }, [activeMode, filteredBreakdownRows, filteredNormalizedRows, normalizedRows?.length, result?.internalExcelChecks.length]);

  if (!result) {
    return (
      <EmptyState
        icon={<FileCheck2 />}
        title="No hay análisis activo"
        description="Carga el Registro Retributivo y los recibos para generar el Cuadre Reg."
      />
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Tabs variant="segment" value={activeMode} onValueChange={(value) => setActiveMode(value as CuadreMode)}>
          <TabsList aria-label="Vistas de Cuadre Reg." className="border border-border" wrapperClassName="max-w-full">
            {MODES.map((mode) => (
              <TabsTrigger key={mode.id} value={mode.id}>{mode.label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <p className="text-sm text-muted-foreground">{activeDescription}</p>
      </div>

      <div id="cuadre-view-panel" role="tabpanel" aria-label={MODES.find((mode) => mode.id === activeMode)?.label ?? "Cuadre"} className="flex flex-col gap-5">
      <MetricStrip metrics={metrics} />

      {activeMode === "breakdown" && result.internalExcelChecks.length > 0 && result.internalExcelChecks.every((row) => row.status === "OK") ? (
        <Callout status="success" title="Sin diferencias en No norm. / Desglose" />
      ) : null}

      <DataTableShell
        toolbar={<CuadreControls query={query} statusFilter={statusFilter} onQueryChange={setQuery} onStatusFilterChange={setStatusFilter} />}
      >
        {normalizedLegacyMissing ? (
          <p className="p-6 text-sm font-medium text-muted-foreground">
            Este análisis no contiene el cuadre No norm. / Norm. + variables. Vuelve a analizar el Excel para generarlo.
          </p>
        ) : (
          <>
            {activeMode === "breakdown" ? <BreakdownTable rows={filteredBreakdownRows} onSelectRow={setSelectedRow} /> : <NormalizedVariablesTable rows={filteredNormalizedRows} />}
            {activeMode === "breakdown" && !filteredBreakdownRows.length ? <p className="p-6 text-sm text-muted-foreground">No hay filas visibles en No norm. / Desglose.</p> : null}
            {activeMode === "normalizedVariables" && !filteredNormalizedRows.length ? <p className="p-6 text-sm text-muted-foreground">No hay filas visibles en No norm. / Norm. + variables.</p> : null}
          </>
        )}
      </DataTableShell>
      </div>

      {selectedRow ? <DetailModal row={selectedRow} onClose={() => setSelectedRow(undefined)} /> : null}
    </div>
  );
}
