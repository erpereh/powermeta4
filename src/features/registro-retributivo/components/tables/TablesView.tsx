"use client";

import { Search, Table2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { AiExplanationPanel } from "@/features/registro-retributivo/components/ai/AiExplanationPanel";
import { useAppState, type DashboardFilters, EMPTY_FILTERS, matchesQuery } from "@/features/registro-retributivo/state/AppState";
import { StatusBadge } from "@/features/registro-retributivo/components/common/StatusBadge";
import { TruncatedText } from "@/features/registro-retributivo/components/common/TruncatedText";
import { CauseBlocks, DetailField, MoneyTable } from "@/features/registro-retributivo/components/common/DetailParts";
import {
  Accordion,
  Badge,
  Button,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  Drawer,
  EmptyState,
  Input,
  Table,
  Tabs,
  TabsList,
  TabsTrigger,
  type TableProps,
} from "@/components/system";
import { AgrupacionesView } from "@/features/registro-retributivo/components/groupings/AgrupacionesView";
import { buildConceptExplainPayload, buildNotIncludedConceptExplainPayload, buildPersonExplainPayload } from "@/features/registro-retributivo/ai/explainPayload";
import type { AppView, ConceptComparisonRow, PersonComparisonRow, UnmappedConceptRow } from "@/features/registro-retributivo/types";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { describeConceptCause, describePersonCause, type ProbableCause } from "@/features/registro-retributivo/ui/probableCause";
import { diffClass } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/features/registro-retributivo/utils/classNames";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { selectPersonProfileFromRow } from "@/features/registro-retributivo/selectors/sharedSelectors";
import { sortPeriodLabels } from "@/features/registro-retributivo/utils/spanishDates";

type DetailState =
  | { readonly kind: "person"; readonly row: PersonComparisonRow }
  | { readonly kind: "concept"; readonly row: ConceptComparisonRow }
  | { readonly kind: "unmapped"; readonly row: UnmappedConceptRow };
type PersonConceptFilter = "all" | "differences" | "ok" | "review";

const FILTER_ALL = "__all__";
const STATUS_FILTERS = ["", "Diferencia", "Revisar", "Sin mapear", "Sin Registro", "Sin PDF", "OK"] as const;

function unique(values: readonly (string | undefined)[]): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b, "es"));
}

function statusLabel(status: string): string {
  if (!status) return "Todos";
  if (status === "Sin Registro") return "Recibo sin Reg.";
  if (status === "Sin PDF") return "Reg. sin Recibo";
  return status;
}

function matchesPersonFilters(item: PersonComparisonRow, filters: DashboardFilters): boolean {
  if (!matchesQuery([item.employeeNumber, item.person, item.workplace, item.position, item.category], filters.query)) return false;
  if (filters.center && item.workplace !== filters.center) return false;
  if (filters.group && item.position !== filters.group && item.category !== filters.group) return false;
  return true;
}

function FilterCombobox({
  label,
  value,
  options,
  onChange,
}: Readonly<{ label: string; value: string; options: readonly string[]; onChange: (value: string) => void }>) {
  return (
    <Combobox value={value || FILTER_ALL} onValueChange={(next) => onChange(next === FILTER_ALL ? "" : next)}>
      <ComboboxTrigger className="min-w-0 sm:w-52">
        <ComboboxInput aria-label={label} placeholder={label} />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList ariaLabel={label}>
          <ComboboxItem value={FILTER_ALL} textValue={`${label}: todos`}>
            {`${label}: todos`}
          </ComboboxItem>
          {options.map((item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          ))}
          <ComboboxEmpty>Sin coincidencias</ComboboxEmpty>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

function PersonasToolbar({
  filters,
  centers,
  groups,
  statusCounts,
  onChange,
}: Readonly<{
  filters: DashboardFilters;
  centers: readonly string[];
  groups: readonly string[];
  statusCounts: ReadonlyMap<string, number>;
  onChange: (filters: DashboardFilters) => void;
}>) {
  const hasFilters = Boolean(filters.query || filters.center || filters.group || filters.status);

  return (
    <div className="flex min-w-0 flex-col gap-3">
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <Input
          id="personas-search"
          type="search"
          aria-label="Buscar"
          value={filters.query}
          onChange={(value) => onChange({ ...filters, query: value })}
          placeholder="Matrícula, persona o concepto"
          leftIcon={<Search className="size-4" aria-hidden="true" />}
          className="min-w-0 sm:w-72"
        />
        <FilterCombobox label="Centro" value={filters.center} options={centers} onChange={(center) => onChange({ ...filters, center })} />
        <FilterCombobox label="Puesto / categoría" value={filters.group} options={groups} onChange={(group) => onChange({ ...filters, group })} />
        {hasFilters ? (
          <Button type="button" variant="ghost" size="sm" onClick={() => onChange(EMPTY_FILTERS)}>
            <X className="size-3.5" aria-hidden="true" />
            Limpiar filtros
          </Button>
        ) : null}
      </div>
      <Tabs variant="pill" value={filters.status || FILTER_ALL} onValueChange={(value) => onChange({ ...filters, status: value === FILTER_ALL ? "" : value })}>
        <TabsList aria-label="Filtrar por estado" className="border border-border" wrapperClassName="max-w-full">
          {STATUS_FILTERS.map((status) => (
            <TabsTrigger key={status || FILTER_ALL} value={status || FILTER_ALL} className="gap-1.5 px-3 py-1 text-xs">
              {statusLabel(status)}
              <span className="tabular-nums opacity-70">{statusCounts.get(status) ?? 0}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}

function CauseBadge({ cause }: Readonly<{ cause: ProbableCause }>) {
  return (
    <Badge status="neutral" size="sm">
      {displayText(cause.label)}
    </Badge>
  );
}

function PeriodChips({ periods }: Readonly<{ periods: readonly string[] }>) {
  const ordered = useMemo(() => sortPeriodLabels(periods), [periods]);

  return (
    <div className="min-w-0">
      <p className="text-xs text-muted-foreground">Periodos</p>
      {ordered.length ? (
        <div className="mt-1.5 flex min-w-0 flex-wrap gap-1.5">
          {ordered.map((period) => (
            <Badge key={period} data-testid="period-chip" status="neutral" size="sm" className="max-w-full whitespace-normal">
              {displayText(period)}
            </Badge>
          ))}
        </div>
      ) : (
        <p className="mt-0.5 text-sm font-medium text-foreground">Sin dato</p>
      )}
    </div>
  );
}

function conceptPriority(row: ConceptComparisonRow): number {
  if (row.status === "Diferencia") return 0;
  if (row.status === "Revisar") return 1;
  if (["Sin mapear", "Sin PDF", "Sin Registro"].includes(row.status)) return 3;
  return 4;
}

function isReviewConcept(row: ConceptComparisonRow): boolean {
  return row.status === "Revisar" || row.status === "Sin mapear";
}

function isDifferenceConcept(row: ConceptComparisonRow, tolerance: number): boolean {
  return Math.abs(row.difference) > tolerance || row.status === "Diferencia";
}

function filterPersonConcept(row: ConceptComparisonRow, filter: PersonConceptFilter, tolerance: number): boolean {
  if (filter === "differences") return isDifferenceConcept(row, tolerance);
  if (filter === "ok") return row.status === "OK";
  if (filter === "review") return isReviewConcept(row);
  return true;
}

function sortPersonConcepts(rows: readonly ConceptComparisonRow[]): ConceptComparisonRow[] {
  return [...rows].sort((left, right) => {
    const priority = conceptPriority(left) - conceptPriority(right);
    if (priority !== 0) return priority;
    return Math.abs(right.difference) - Math.abs(left.difference);
  });
}

function PersonConceptsSection({
  person,
  concepts,
  unmappedConcepts,
  tolerance,
}: Readonly<{
  person: PersonComparisonRow;
  concepts: readonly ConceptComparisonRow[];
  unmappedConcepts: readonly UnmappedConceptRow[];
  tolerance: number;
}>) {
  const [filter, setFilter] = useState<PersonConceptFilter>("all");
  const personConcepts = useMemo(() => sortPersonConcepts(concepts.filter((row) => row.employeeNumber === person.employeeNumber)), [concepts, person.employeeNumber]);
  const visibleConcepts = useMemo(() => personConcepts.filter((row) => filterPersonConcept(row, filter, tolerance)), [filter, personConcepts, tolerance]);
  const relatedUnmapped = useMemo(
    () => unmappedConcepts.filter((row) => row.exampleEmployeeNumbers.includes(person.employeeNumber)),
    [person.employeeNumber, unmappedConcepts],
  );
  const counts: Record<PersonConceptFilter, number> = {
    all: personConcepts.length,
    differences: personConcepts.filter((row) => isDifferenceConcept(row, tolerance)).length,
    ok: personConcepts.filter((row) => row.status === "OK").length,
    review: personConcepts.filter(isReviewConcept).length,
  };
  const visibleDifference = visibleConcepts.reduce((sum, row) => sum + row.difference, 0);
  const filterOptions: Array<{ label: string; value: PersonConceptFilter }> = [
    { label: "Todos", value: "all" },
    { label: "Diferencias", value: "differences" },
    { label: "OK", value: "ok" },
    { label: "Revisar", value: "review" },
  ];

  return (
    <section className="flex min-w-0 flex-col gap-3" aria-label="Conceptos de la persona">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-semibold text-foreground">Conceptos</h3>
        <p className="text-xs text-muted-foreground">
          Dif. visible <span className={cn("font-mono font-semibold tabular-nums", diffClass(visibleDifference))}>{formatEuro(visibleDifference)}</span>
        </p>
      </div>

      {personConcepts.length ? (
        <>
          <Tabs variant="underline" value={filter} onValueChange={(value) => setFilter(value as PersonConceptFilter)}>
            <TabsList aria-label="Filtrar conceptos" className="w-full" wrapperClassName="max-w-full">
              {filterOptions.map((item) => (
                <TabsTrigger key={item.value} value={item.value} className="gap-1.5 text-xs">
                  {item.label}
                  <span className="tabular-nums text-muted-foreground">{counts[item.value]}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          {visibleConcepts.length ? (
            <Accordion
              className="overflow-hidden rounded-xl border border-border"
              classNames={{ trigger: "min-h-12 gap-3 px-3", title: "text-sm", description: "text-sm", content: "[&>div]:px-3 [&>div]:pb-3" }}
              items={visibleConcepts.map((row, index) => {
                const cause = describeConceptCause(row, tolerance);
                return {
                  id: `${row.employeeNumber}-${row.registroCode}-${row.pdfConcept ?? "sin-pdf"}-${index}`,
                  title: (
                    <span className="flex min-w-0 items-center gap-2">
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">{displayText(row.registroCode) || "—"}</span>
                      <span className="min-w-0 flex-1 truncate">{displayText(row.pdfConcept) || displayText(row.block)}</span>
                      <span className={cn("shrink-0 font-mono text-xs tabular-nums", diffClass(row.difference))}>{formatEuro(row.difference)}</span>
                    </span>
                  ),
                  description: (
                    <div className="flex flex-col gap-3">
                      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        <DetailField label="Bloque" value={row.block} />
                        <DetailField label="Reg. Retrib." value={formatEuro(row.registroAmount)} />
                        <DetailField label="Recibo" value={formatEuro(row.pdfAmount)} />
                        <DetailField label="Estado" value={<StatusBadge value={row.status} />} />
                      </dl>
                      <CauseBlocks label={cause.label} description={cause.description} review={cause.review} />
                    </div>
                  ),
                };
              })}
            />
          ) : (
            <p className="py-4 text-center text-sm text-muted-foreground">No hay conceptos con el filtro actual.</p>
          )}
        </>
      ) : (
        <p className="rounded-xl bg-muted/50 px-4 py-4 text-sm text-muted-foreground">No hay conceptos comparados para esta matrícula.</p>
      )}

      {relatedUnmapped.length ? (
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-medium text-muted-foreground">No incluidos en el cálculo</h4>
          <ul className="divide-y divide-border rounded-xl border border-border">
            {relatedUnmapped.map((row) => (
              <li key={row.pdfConcept} className="flex flex-col gap-1 px-3 py-2.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="min-w-0 truncate text-sm font-medium text-foreground">{displayText(row.pdfConcept)}</span>
                  <span className="shrink-0 font-mono text-xs tabular-nums">{formatEuro(row.totalDetected)}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <StatusBadge value={row.decisionType ?? row.action} />
                  <span>{displayText(row.recommendedAction ?? row.action)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

function DetailDrawer({
  state,
  tolerance,
  concepts,
  unmappedConcepts,
  onClose,
}: Readonly<{ state: DetailState; tolerance: number; concepts: readonly ConceptComparisonRow[]; unmappedConcepts: readonly UnmappedConceptRow[]; onClose: () => void }>) {
  const cause =
    state.kind === "person"
      ? describePersonCause(state.row, tolerance)
      : state.kind === "concept"
        ? describeConceptCause(state.row, tolerance)
        : {
            label: state.row.decisionType ?? (state.row.action === "Ignorado" ? "Ignorado" : "Sin mapear real"),
            description: displayText(state.row.reason) || "Concepto no incluido en el cálculo principal.",
            review: displayText(state.row.recommendedAction) || "Revisar criterio de decisión.",
          };
  const aiType = state.kind === "person" ? "person" : state.kind === "concept" ? "concept" : "notIncludedConcept";
  const aiPayload =
    state.kind === "person"
      ? buildPersonExplainPayload(state.row, cause, concepts, unmappedConcepts)
      : state.kind === "concept"
        ? buildConceptExplainPayload(state.row, cause)
        : buildNotIncludedConceptExplainPayload(state.row, cause);
  const title =
    state.kind === "person"
      ? displayText(state.row.person) || "Detalle persona"
      : state.kind === "concept"
        ? "Detalle concepto"
        : "Concepto no incluido";
  const description =
    state.kind === "unmapped"
      ? displayText(state.row.pdfConcept)
      : `Matrícula ${displayText(state.row.employeeNumber)} · ${statusLabel(state.row.status)}`;

  return (
    <Drawer open onOpenChange={(open) => { if (!open) onClose(); }} title={title} description={description} size="lg">
      <div data-surface="person-detail-content" className="flex min-w-0 flex-col gap-6">
        {state.kind === "person" ? (
          <>
            <dl data-surface="person-overview" className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3">
              <DetailField label="Centro" value={state.row.workplace} />
              <DetailField label="Recibos" value={state.row.payrollCount} />
              <DetailField label="Puesto" value={state.row.position} />
              <DetailField label="Categoría" value={state.row.category} />
              <DetailField label="Estado" value={<StatusBadge value={state.row.status} />} />
            </dl>
            <PeriodChips periods={state.row.periods} />
            <PersonMoney row={state.row} />
            <PersonConceptsSection person={state.row} concepts={concepts} unmappedConcepts={unmappedConcepts} tolerance={tolerance} />
          </>
        ) : state.kind === "concept" ? (
          <>
            <dl className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3">
              <DetailField label="Persona" value={state.row.person} />
              <DetailField label="Bloque" value={state.row.block} />
              <DetailField label="Código Reg. Retrib." value={state.row.registroCode} />
              <DetailField label="Concepto Recibo" value={state.row.pdfConcept} />
              <DetailField label="Regla usada" value={state.row.detail} className="col-span-2" />
            </dl>
            <MoneyTable
              caption="Importes del concepto"
              leftLabel="Reg. Retrib."
              rightLabel="Recibo"
              rows={[{ label: "Concepto", left: state.row.registroAmount, right: state.row.pdfAmount, diff: state.row.difference }]}
            />
          </>
        ) : (
          <dl className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3">
            <DetailField label="Total detectado" value={formatEuro(state.row.totalDetected)} />
            <DetailField label="Tipo decisión" value={state.row.decisionType} />
            <DetailField label="Personas" value={state.row.peopleCount} />
            <DetailField label="Recibos" value={state.row.payrollCount} />
            <DetailField label="Sugerencia bloque" value={state.row.suggestedBlock} />
            <DetailField label="Sugerencia código" value={state.row.suggestedRegistroCode} />
            <DetailField label="Ejemplos matrículas" value={state.row.exampleEmployeeNumbers.join("; ")} className="col-span-2" />
          </dl>
        )}

        <CauseBlocks label={cause.label} description={cause.description} review={cause.review} />
        <AiExplanationPanel type={aiType} payload={aiPayload} />
      </div>
    </Drawer>
  );
}

function PersonMoney({ row }: Readonly<{ row: PersonComparisonRow }>) {
  const profile = selectPersonProfileFromRow(row);
  return (
    <MoneyTable
      caption="Importes por bloque"
      leftLabel="Reg. Retrib."
      rightLabel="Recibo"
      rows={[
        { label: "Salario", left: profile.blocks.salary.registro, right: profile.blocks.salary.payroll, diff: profile.blocks.salary.difference },
        { label: "C. Salarial", left: profile.blocks.salaryComplement.registro, right: profile.blocks.salaryComplement.payroll, diff: profile.blocks.salaryComplement.difference },
        { label: "Extrasalarial", left: profile.blocks.extraSalary.registro, right: profile.blocks.extraSalary.payroll, diff: profile.blocks.extraSalary.difference },
        { label: "Total", left: profile.totals.registro, right: profile.totals.payroll, diff: profile.totals.difference },
      ]}
    />
  );
}

function PersonasTable({ onOpen }: Readonly<{ onOpen: (state: DetailState) => void }>) {
  const { result, filters, setFilters } = useAppState();
  const allRows = useMemo(() => result?.people ?? [], [result?.people]);
  const centers = useMemo(() => unique(allRows.map((item) => item.workplace)), [allRows]);
  const groups = useMemo(() => unique(allRows.flatMap((item) => [item.position, item.category])), [allRows]);
  const baseRows = useMemo(() => allRows.filter((item) => matchesPersonFilters(item, filters)), [allRows, filters]);
  const rows = useMemo(() => (filters.status ? baseRows.filter((item) => item.status === filters.status) : baseRows), [baseRows, filters.status]);
  const statusCounts = useMemo(() => {
    const counts = new Map<string, number>([["", baseRows.length]]);
    baseRows.forEach((row) => counts.set(row.status, (counts.get(row.status) ?? 0) + 1));
    return counts;
  }, [baseRows]);
  const totalDifference = rows.reduce((sum, row) => sum + row.totalDifference, 0);
  const tolerance = result?.summary?.tolerance ?? 1;

  const columns = useMemo<TableProps<PersonComparisonRow>["columns"]>(
    () => [
      {
        key: "employeeNumber",
        header: "Matrícula",
        width: "120px",
        cell: (row) => <span className="font-mono">{displayText(row.employeeNumber)}</span>,
      },
      {
        key: "person",
        header: "Persona",
        width: "220px",
        cell: (row) => (
          <span className="font-medium">
            <TruncatedText>{displayText(row.person)}</TruncatedText>
          </span>
        ),
      },
      {
        key: "status",
        header: "Estado",
        width: "170px",
        cell: (row) => <StatusBadge value={row.status} />,
      },
      {
        key: "difference",
        header: "Diferencia",
        width: "130px",
        align: "right",
        cell: (row) => (
          <span className={cn("font-mono", diffClass(row.totalDifference))}>{formatEuro(row.totalDifference)}</span>
        ),
      },
      {
        key: "cause",
        header: "Causa",
        width: "170px",
        cell: (row) => <CauseBadge cause={describePersonCause(row, tolerance)} />,
      },
      { key: "workplace", header: "Centro", width: "140px", cell: (row) => displayText(row.workplace) },
      {
        key: "position",
        header: "Puesto",
        width: "180px",
        cell: (row) => <TruncatedText>{displayText(row.position)}</TruncatedText>,
      },
      {
        key: "category",
        header: "Categoría",
        width: "180px",
        cell: (row) => <TruncatedText>{displayText(row.category)}</TruncatedText>,
      },
      {
        key: "registroTotal",
        header: "Total Reg. Retrib.",
        width: "140px",
        align: "right",
        cell: (row) => <span className="font-mono">{formatEuro(row.registroTotal)}</span>,
      },
      {
        key: "pdfTotal",
        header: "Total Recibo",
        width: "140px",
        align: "right",
        cell: (row) => <span className="font-mono">{formatEuro(row.pdfTotal)}</span>,
      },
    ],
    [tolerance],
  );

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
      <PersonasToolbar filters={filters} centers={centers} groups={groups} statusCounts={statusCounts} onChange={setFilters} />
      <p className="text-xs text-muted-foreground" role="status">
        <span className="font-semibold text-foreground tabular-nums">{rows.length}</span> de {allRows.length} personas · suma diferencia{" "}
        <span className={cn("font-mono font-semibold tabular-nums", diffClass(totalDifference))}>{formatEuro(totalDifference)}</span>
      </p>
      <div data-slot="table-viewport" className="min-h-0 min-w-0 flex-1 overflow-hidden">
        <Table
          data={[...rows]}
          columns={columns}
          getRowId={(row) => row.employeeNumber}
          height={560}
          rowHeight={48}
          className="min-w-0"
          emptyState={<EmptyState title="Sin personas con los filtros actuales." />}
          onRowActivate={(row) => onOpen({ kind: "person", row })}
          getRowAriaLabel={(row) => `Abrir detalle de ${displayText(row.person) || row.employeeNumber}`}
        />
      </div>
    </div>
  );
}

export function TablesView({ mode }: Readonly<{ mode: Extract<AppView, "personas" | "agrupaciones"> }>) {
  const { result } = useAppState();
  const [detail, setDetail] = useState<DetailState | undefined>();

  if (!result) {
    return (
      <EmptyState
        icon={<Table2 />}
        title="No hay análisis activo"
        description="Carga el Registro Retributivo y los recibos para generar una comparativa antes de revisar esta sección."
      />
    );
  }

  return (
    <div className={cn("flex min-w-0 w-full flex-col", mode === "personas" ? "min-h-0 flex-1" : "gap-6")}>
      {mode === "personas" ? <PersonasTable onOpen={setDetail} /> : <AgrupacionesView />}
      {detail ? (
        <DetailDrawer
          state={detail}
          tolerance={result.summary?.tolerance ?? 1}
          concepts={result.concepts}
          unmappedConcepts={result.unmappedConcepts}
          onClose={() => setDetail(undefined)}
        />
      ) : null}
    </div>
  );
}
