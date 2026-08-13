"use client";

import { CheckCircle2, FileCheck2, Search, Sigma, Table2 } from "lucide-react";
import { Fragment, useMemo, useState } from "react";
import { AiExplanationPanel } from "@/features/registro-retributivo/components/ai/AiExplanationPanel";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { StatusBadge } from "@/features/registro-retributivo/components/common/StatusBadge";
import { CompactMetric } from "@/features/registro-retributivo/components/common/CompactMetric";
import { DataTableShell } from "@/features/registro-retributivo/components/common/DataTableShell";
import { ModalShell } from "@/features/registro-retributivo/components/common/ModalShell";
import { SectionTabs } from "@/features/registro-retributivo/components/common/SectionTabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  readonly tone: "blue" | "green" | "orange" | "red";
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

function ModalField({ label, value }: Readonly<{ label: string; value?: string | number }>) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
      <p className="mt-1 min-w-0 break-words text-sm font-semibold text-foreground">{displayText(value) || "Sin dato"}</p>
    </div>
  );
}

function MoneyTriplet({ label, period, breakdown, diff }: Readonly<{ label: string; period: number; breakdown: number; diff: number }>) {
  return (
    <div className="rounded-2xl border border-border bg-muted/50 p-4">
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
        <ModalField label="Periodo" value={formatEuro(period)} />
        <ModalField label="Desglose" value={formatEuro(breakdown)} />
        <ModalField label="Dif." value={formatEuro(diff)} />
      </div>
    </div>
  );
}

function DetailModal({ row, onClose }: Readonly<{ row: InternalExcelCheckRow; onClose: () => void }>) {
  const projection = selectBreakdownProjection(row);
  const aiPayload = buildInternalExcelExplainPayload(row);

  return (
    <ModalShell
      title="Detalle Cuadre Reg."
      onClose={onClose}
      maxWidth="4xl"
    >
        <div className="grid min-w-0 gap-4 md:grid-cols-4">
          <ModalField label="Matrícula" value={projection.personId} />
          <ModalField label="Estado" value={projection.status} />
          <ModalField label="Centro" value={row.workplace} />
          <ModalField label="Puesto" value={row.position} />
          <ModalField label="Categoría" value={row.category} />
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <MoneyTriplet label="Salario" period={projection.salaryPeriod} breakdown={projection.salaryBreakdown} diff={projection.salaryDifference} />
          <MoneyTriplet label="C. Salarial" period={projection.salaryComplementPeriod} breakdown={projection.salaryComplementBreakdown} diff={projection.salaryComplementDifference} />
          <MoneyTriplet label="Extrasalarial" period={projection.extraSalaryPeriod} breakdown={projection.extraSalaryBreakdown} diff={projection.extraSalaryDifference} />
        </div>

        <div className="mt-6 rounded-2xl bg-muted/50 p-4">
          <p className="text-sm font-semibold text-foreground">Detalle</p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground text-pretty">{displayText(row.detail) || "Sin detalle adicional."}</p>
        </div>

        <AiExplanationPanel type="internalExcelCheck" payload={aiPayload} />

    </ModalShell>
  );
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
    <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
      <div className="min-w-0 flex-1 flex flex-col gap-2">
        <Label htmlFor="cuadre-search" className="sr-only">Buscar</Label>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
          <Input
            id="cuadre-search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Buscar en Cuadre Reg."
            className="pl-9"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="cuadre-status">Estado</Label>
        <select
          id="cuadre-status"
          className="sr-only"
          tabIndex={-1}
          value={statusFilter}
          onChange={(event) => onStatusFilterChange(event.target.value as StatusFilter)}
        >
          <option value="Todos">Todos</option>
          <option value="OK">OK</option>
          <option value="Revisar">Revisar</option>
          <option value="Diferencia">Diferencia</option>
        </select>
        <Select value={statusFilter} onValueChange={(value) => { if (value) onStatusFilterChange(value as StatusFilter); }}>
          <SelectTrigger className="w-full min-w-[140px]" aria-hidden="true" tabIndex={-1}>
            <SelectValue placeholder="Todos" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Todos">Todos</SelectItem>
              <SelectItem value="OK">OK</SelectItem>
              <SelectItem value="Revisar">Revisar</SelectItem>
              <SelectItem value="Diferencia">Diferencia</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
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
    { label: "Empleados analizados", value: input.totalCount, tone: "blue" },
    { label: "OK", value: ok, tone: "green" },
    { label: "Con diferencia", value: withDifference, tone: withDifference ? "red" : "green" },
    { label: "Mayor diferencia", value: formatEuro(input.maxDifference), tone: input.maxDifference ? "red" : "green" },
    { label: "Diferencia total visible", value: formatEuro(input.visibleTotalDifference), tone: input.visibleTotalDifference ? "orange" : "green" },
  ];
}

function BreakdownTable({ rows, onSelectRow }: Readonly<{ rows: readonly InternalExcelCheckRow[]; onSelectRow: (row: InternalExcelCheckRow) => void }>) {
  return (
    <table className="w-full min-w-[1440px] border-separate border-spacing-0 text-left text-sm">
      <thead className="sticky top-0 z-20 bg-muted text-muted-foreground shadow-sm">
        <tr>
          {BREAKDOWN_HEADERS.map((header, index) => (
            <th
              key={header}
              className={cn(
                "border-b border-border px-4 py-3 text-xs font-semibold uppercase",
                index === 0 && "sticky left-0 z-30 min-w-[128px] bg-muted shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]",
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
            <td className="sticky left-0 z-10 min-w-[128px] border-b border-border/70 bg-inherit px-4 py-3 font-mono shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]">
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
                index === 0 && "sticky left-0 z-30 min-w-[128px] bg-muted shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]",
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
            <td className="sticky left-0 z-10 min-w-[128px] border-b border-border/70 bg-inherit px-4 py-3 font-mono shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]">
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
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon"><FileCheck2 /></EmptyMedia>
          <EmptyTitle>No hay análisis activo</EmptyTitle>
          <EmptyDescription>Carga el Registro Retributivo y los recibos para generar el Cuadre Reg.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionTabs
        label="Vistas de Cuadre Reg."
        value={activeMode}
        onValueChange={setActiveMode}
        items={MODES.map((mode) => ({ value: mode.id, label: mode.label, tabId: `cuadre-${mode.id}-tab`, panelId: "cuadre-view-panel" }))}
      />

      <div id="cuadre-view-panel" role="tabpanel" aria-labelledby={`cuadre-${activeMode}-tab`} className="space-y-6">
      <p className="text-sm leading-6 text-muted-foreground">{activeDescription}</p>

      <section data-surface="metric-grid" aria-label="Resumen de Cuadre Reg." className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {metrics.map((metric) => {
          const Icon = metric.tone === "green" ? CheckCircle2 : metric.tone === "blue" ? Table2 : Sigma;
          return <CompactMetric key={metric.label} variant="card" label={metric.label} value={metric.value} icon={Icon} tone={metric.tone} />;
        })}
      </section>

      {activeMode === "breakdown" && result.internalExcelChecks.length > 0 && result.internalExcelChecks.every((row) => row.status === "OK") ? (
        <Alert>
          <AlertDescription>El Cuadre Reg. no presenta diferencias en No norm. / Desglose.</AlertDescription>
        </Alert>
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
