"use client";

import { Search, Table2 } from "lucide-react";
import { Fragment, useMemo, useState, type ReactNode } from "react";
import { AiExplanationPanel } from "@/features/registro-retributivo/components/ai/AiExplanationPanel";
import { useAppState, type DashboardFilters, EMPTY_FILTERS, matchesQuery } from "@/features/registro-retributivo/state/AppState";
import { Badge } from "@/features/registro-retributivo/components/common/Badge";
import { DataTableShell } from "@/features/registro-retributivo/components/common/DataTableShell";
import { ModalShell } from "@/features/registro-retributivo/components/common/ModalShell";
import { TruncatedText } from "@/features/registro-retributivo/components/common/TruncatedText";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Badge as UiBadge } from "@/components/ui/badge";
import { AgrupacionesView } from "@/features/registro-retributivo/components/groupings/AgrupacionesView";
import { buildConceptExplainPayload, buildNotIncludedConceptExplainPayload, buildPersonExplainPayload } from "@/features/registro-retributivo/ai/explainPayload";
import type { AppView, ConceptComparisonRow, PersonComparisonRow, UnmappedConceptRow } from "@/features/registro-retributivo/types";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { describeConceptCause, describePersonCause, type ProbableCause } from "@/features/registro-retributivo/ui/probableCause";
import { diffClass, rowTone } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/features/registro-retributivo/utils/classNames";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { selectPersonProfileFromRow } from "@/features/registro-retributivo/selectors/sharedSelectors";
import { sortPeriodLabels } from "@/features/registro-retributivo/utils/spanishDates";

interface TableHeader {
  readonly key: string;
  readonly label: string;
}

type TableDensity = "comfortable" | "compact";
type DetailModalState =
  | { readonly kind: "person"; readonly row: PersonComparisonRow }
  | { readonly kind: "concept"; readonly row: ConceptComparisonRow }
  | { readonly kind: "unmapped"; readonly row: UnmappedConceptRow };
type PersonConceptFilter = "all" | "differences" | "ok" | "review";

const PERSONAS_HEADERS: readonly TableHeader[] = [
  { key: "employeeNumber", label: "Matrícula" },
  { key: "person", label: "Persona" },
  { key: "cause", label: "Causa" },
  { key: "workplace", label: "Centro" },
  { key: "position", label: "Puesto" },
  { key: "category", label: "Categoría" },
  { key: "registroTotal", label: "Total Reg. Retrib." },
  { key: "pdfTotal", label: "Total Recibo" },
  { key: "difference", label: "Diferencia" },
  { key: "status", label: "Estado" },
];

const CONCEPTOS_HEADERS: readonly TableHeader[] = [
  { key: "employeeNumber", label: "Matrícula" },
  { key: "person", label: "Persona" },
  { key: "block", label: "Bloque" },
  { key: "registroCode", label: "Código Reg. Retrib." },
  { key: "pdfConcept", label: "Concepto Recibo" },
  { key: "registroAmount", label: "Reg. Retrib." },
  { key: "pdfAmount", label: "Recibo" },
  { key: "difference", label: "Diferencia" },
  { key: "status", label: "Estado" },
  { key: "reason", label: "Motivo" },
];

const CONCEPTOS_NO_INCLUIDOS_HEADERS: readonly TableHeader[] = [
  { key: "decisionType", label: "Tipo decisión" },
  { key: "includedInComparison", label: "Incluido en cálculo" },
  { key: "pdfConcept", label: "Concepto Recibo" },
  { key: "totalDetected", label: "Total detectado" },
  { key: "peopleCount", label: "Personas" },
  { key: "payrollCount", label: "Recibos" },
  { key: "exampleEmployeeNumbers", label: "Ejemplos matrículas" },
  { key: "suggestedBlock", label: "Sugerencia bloque" },
  { key: "suggestedRegistroCode", label: "Sugerencia código Reg. Retrib." },
  { key: "recommendedAction", label: "Acción recomendada" },
  { key: "reason", label: "Motivo" },
];

function unique(values: readonly (string | undefined)[]): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b, "es"));
}

const FILTER_ALL_SENTINEL = "__all__";

function statusLabel(status: string): string {
  if (status === "Sin Registro") return "Recibo sin Reg. Retrib.";
  if (status === "Sin PDF") return "Reg. Retrib. sin Recibo";
  return status;
}

function cellPadding(density: TableDensity): string {
  return density === "compact" ? "px-3 py-2" : "px-4 py-4";
}

function stickyFirstColumn(density: TableDensity): string {
  return cn("sticky left-0 z-10 min-w-[128px] bg-inherit shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]", cellPadding(density));
}

function FiltersPanel({
  filters,
  centers,
  groups,
  onChange,
}: Readonly<{
  filters: DashboardFilters;
  centers: readonly string[];
  groups: readonly string[];
  onChange: (filters: DashboardFilters) => void;
}>) {
  const quick = (status: string) => onChange({ ...filters, status });

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col gap-2 xl:col-span-1">
          <Label htmlFor="personas-search">Buscar</Label>
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              id="personas-search"
              type="search"
              value={filters.query}
              onChange={(event) => onChange({ ...filters, query: event.target.value })}
              placeholder="Matrícula, persona o concepto"
              className="pl-9"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="filter-center">Centro</Label>
          <Select
            value={filters.center || FILTER_ALL_SENTINEL}
            onValueChange={(value) => onChange({ ...filters, center: value === FILTER_ALL_SENTINEL || value == null ? "" : value })}
          >
            <SelectTrigger id="filter-center" className="w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={FILTER_ALL_SENTINEL}>Todos</SelectItem>
                {centers.map((item) => (
                  <SelectItem key={item} value={item}>{item}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="filter-group">Puesto / categoria</Label>
          <Select
            value={filters.group || FILTER_ALL_SENTINEL}
            onValueChange={(value) => onChange({ ...filters, group: value === FILTER_ALL_SENTINEL || value == null ? "" : value })}
          >
            <SelectTrigger id="filter-group" className="w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={FILTER_ALL_SENTINEL}>Todos</SelectItem>
                {groups.map((item) => (
                  <SelectItem key={item} value={item}>{item}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="filter-status">Estado</Label>
          <Select
            value={filters.status || FILTER_ALL_SENTINEL}
            onValueChange={(value) => onChange({ ...filters, status: value === FILTER_ALL_SENTINEL || value == null ? "" : value })}
          >
            <SelectTrigger id="filter-status" className="w-full">
              <SelectValue placeholder="Todos" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={FILTER_ALL_SENTINEL}>Todos</SelectItem>
                {["OK", "Revisar", "Diferencia", "Sin mapear", "Sin PDF", "Sin Registro"].map((item) => (
                  <SelectItem key={item} value={item}>{statusLabel(item)}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="secondary" size="sm" onClick={() => quick("Diferencia")}>Ver solo diferencias</Button>
        <Button type="button" variant="secondary" size="sm" onClick={() => quick("Revisar")}>Ver pendientes</Button>
        <Button type="button" variant="secondary" size="sm" onClick={() => quick("Sin Registro")}>Ver Recibo sin Reg. Retrib.</Button>
        <Button type="button" variant="secondary" size="sm" onClick={() => quick("OK")}>Ver OK</Button>
        <Button type="button" variant="outline" size="sm" onClick={() => onChange(EMPTY_FILTERS)}>Limpiar filtros</Button>
      </div>
    </div>
  );
}

function TableSummary({
  visible,
  total,
  difference,
  extra,
}: Readonly<{ visible: number; total: number; difference: number; extra?: string }>) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
      <span className="font-semibold text-foreground">
        {visible} filas visibles de {total}
      </span>
      <span className="text-muted-foreground">Suma diferencia visible: {formatEuro(difference)}</span>
      {extra ? <span className="text-muted-foreground">{extra}</span> : null}
    </div>
  );
}

function CauseBadge({ cause }: Readonly<{ cause: ProbableCause }>) {
  return <UiBadge variant="secondary">{displayText(cause.label)}</UiBadge>;
}

function ModalField({ label, value }: Readonly<{ label: string; value?: string | number }>) {
  return (
    <div className="min-w-0">
      <p className="break-words text-xs font-semibold uppercase text-muted-foreground">{label}</p>
      <p className="mt-1 min-w-0 break-words text-sm font-semibold text-foreground">{displayText(value) || "Sin dato"}</p>
    </div>
  );
}

function PeriodChips({ periods }: Readonly<{ periods: readonly string[] }>) {
  const ordered = useMemo(() => sortPeriodLabels(periods), [periods]);

  return (
    <div className="col-span-full min-w-0 max-w-full">
      <p className="text-xs font-semibold uppercase text-muted-foreground">Periodos</p>
      {ordered.length ? (
        <div className="mt-2 flex min-w-0 max-w-full flex-wrap gap-2">
          {ordered.map((period) => (
            <UiBadge
              key={period}
              data-testid="period-chip"
              variant="outline"
              className="max-w-full shrink-0 whitespace-normal"
            >
              {displayText(period)}
            </UiBadge>
          ))}
        </div>
      ) : (
        <p className="mt-1 text-sm font-semibold text-foreground">Sin dato</p>
      )}
    </div>
  );
}

function MoneyTriplet({ label, registro, pdf, diff }: Readonly<{ label: string; registro: number; pdf: number; diff: number }>) {
  return (
    <div data-surface="economic-row" className="grid min-w-0 gap-3 py-4 sm:grid-cols-[minmax(120px,0.7fr)_minmax(0,2fr)] sm:items-center">
      <p className="min-w-0 text-sm font-semibold text-foreground">{label}</p>
      <div className="grid min-w-0 grid-cols-1 gap-3 text-xs sm:grid-cols-3 sm:gap-2">
        <ModalField label="Reg. Retrib." value={formatEuro(registro)} />
        <ModalField label="Recibo" value={formatEuro(pdf)} />
        <ModalField label="Dif." value={formatEuro(diff)} />
      </div>
    </div>
  );
}

function PersonSummarySection({ row }: Readonly<{ row: PersonComparisonRow }>) {
  const profile = selectPersonProfileFromRow(row);
  return (
    <section data-surface="person-summary" className="mt-6 min-w-0 border-y border-border bg-muted/50 px-4 py-4" aria-label="Resumen">
      <h3 className="text-lg font-semibold text-foreground">Resumen</h3>
      <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <ModalField label="Total Reg. Retrib." value={formatEuro(profile.totals.registro)} />
        <ModalField label="Total Recibo" value={formatEuro(profile.totals.payroll)} />
        <ModalField label="Diferencia" value={formatEuro(profile.totals.difference)} />
        <ModalField label="Estado" value={profile.status} />
      </div>
    </section>
  );
}

function conceptRowKey(row: ConceptComparisonRow, index: number): string {
  return `${row.employeeNumber}-${row.registroCode}-${row.pdfConcept ?? "sin-pdf"}-${index}`;
}

function conceptPriority(row: ConceptComparisonRow): number {
  if (row.status === "Diferencia") return 0;
  if (row.status === "Revisar") return 1;
  if (["Sin mapear", "Sin PDF", "Sin Registro"].includes(row.status)) return 3;
  if (row.status === "OK") return 4;
  return 4;
}

function isReviewConcept(row: ConceptComparisonRow): boolean {
  return row.status === "Revisar" || row.status === "Sin mapear";
}

function filterPersonConcept(row: ConceptComparisonRow, filter: PersonConceptFilter, tolerance: number): boolean {
  if (filter === "differences") return Math.abs(row.difference) > tolerance || row.status === "Diferencia";
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
  const [expandedKey, setExpandedKey] = useState<string | undefined>();
  const personConcepts = useMemo(() => sortPersonConcepts(concepts.filter((row) => row.employeeNumber === person.employeeNumber)), [concepts, person.employeeNumber]);
  const visibleConcepts = useMemo(() => personConcepts.filter((row) => filterPersonConcept(row, filter, tolerance)), [filter, personConcepts, tolerance]);
  const relatedUnmapped = useMemo(
    () => unmappedConcepts.filter((row) => row.exampleEmployeeNumbers.includes(person.employeeNumber)),
    [person.employeeNumber, unmappedConcepts],
  );
  const okCount = personConcepts.filter((row) => row.status === "OK").length;
  const realDifferenceCount = personConcepts.filter((row) => Math.abs(row.difference) > tolerance || row.status === "Diferencia").length;
  const reviewCount = personConcepts.filter(isReviewConcept).length;
  const visibleDifference = visibleConcepts.reduce((sum, row) => sum + row.difference, 0);
  const filterOptions: Array<{ label: string; value: PersonConceptFilter }> = [
    { label: "Todos", value: "all" },
    { label: "Solo diferencias", value: "differences" },
    { label: "OK", value: "ok" },
    { label: "Revisar", value: "review" },
  ];

  return (
    <section className="mt-6 min-w-0 border-t border-border pt-5" aria-label="Conceptos de la persona">
      <div className="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Conceptos de la persona</h3>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Comparativa de conceptos del Reg. Retrib. contra los importes detectados en recibos para esta matrícula.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={cn("min-h-9 rounded-full px-3 text-xs font-semibold transition", filter === item.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80")}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 grid min-w-0 gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {[
          ["Conceptos totales", personConcepts.length],
          ["Conceptos OK", okCount],
          ["Conceptos con diferencia", realDifferenceCount],
          ["Conceptos en revisión", reviewCount],
          ["Diferencia visible", formatEuro(visibleDifference)],
        ].map(([label, value]) => (
          <div key={label} className="min-w-0 rounded-2xl bg-muted/50 px-3 py-3">
            <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
            <p className="mt-1 text-sm font-semibold text-foreground tabular-nums">{value}</p>
          </div>
        ))}
      </div>

      {personConcepts.length ? (
        <div data-surface="person-concepts-scroll" className="mt-4 min-w-0 max-w-full max-h-[420px] overflow-x-auto overflow-y-auto rounded-2xl border border-border">
          <table className="w-full min-w-[920px] border-separate border-spacing-0 text-left text-sm">
            <thead className="sticky top-0 z-20 bg-muted text-muted-foreground shadow-sm">
              <tr>
                {["Bloque", "Código Reg. Retrib.", "Concepto Recibo", "Reg. Retrib.", "Recibo", "Diferencia", "Estado", "Motivo"].map((header) => (
                  <th key={`person-concept-${header}`} className="border-b border-border px-3 py-3 text-xs font-semibold uppercase">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleConcepts.map((row, index) => {
                const key = conceptRowKey(row, index);
                const conceptCause = describeConceptCause(row, tolerance);
                const expanded = expandedKey === key;

                return (
                  <Fragment key={key}>
                    <tr
                      tabIndex={0}
                      onClick={() => setExpandedKey(expanded ? undefined : key)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") setExpandedKey(expanded ? undefined : key);
                      }}
                      className={cn("cursor-pointer transition", rowTone(row.status))}
                    >
                      <td className="border-b border-border/70 px-3 py-3 font-semibold">{displayText(row.block)}</td>
                      <td className="border-b border-border/70 px-3 py-3 font-mono">{displayText(row.registroCode)}</td>
                      <td className="max-w-[260px] truncate border-b border-border/70 px-3 py-3 font-semibold">{displayText(row.pdfConcept)}</td>
                      <td className="border-b border-border/70 px-3 py-3 text-right font-mono">{formatEuro(row.registroAmount)}</td>
                      <td className="border-b border-border/70 px-3 py-3 text-right font-mono">{formatEuro(row.pdfAmount)}</td>
                      <td className={cn("border-b border-border/70 px-3 py-3 text-right font-mono", diffClass(row.difference))}>{formatEuro(row.difference)}</td>
                      <td className="border-b border-border/70 px-3 py-3"><Badge value={row.status} /></td>
                      <td className="border-b border-border/70 px-3 py-3"><CauseBadge cause={conceptCause} /></td>
                    </tr>
                    {expanded ? (
                      <tr className="bg-card">
                        <td colSpan={8} className="border-b border-border/70 p-4">
                          <div className="grid gap-3 rounded-2xl bg-muted/50 p-4 md:grid-cols-4">
                            <ModalField label="Código Reg. Retrib." value={row.registroCode} />
                            <ModalField label="Concepto Recibo" value={row.pdfConcept} />
                            <ModalField label="Bloque" value={row.block} />
                            <ModalField label="Diferencia" value={formatEuro(row.difference)} />
                            <ModalField label="Estado" value={row.status} />
                            <div className="md:col-span-2">
                              <p className="text-sm font-semibold text-foreground">Causa probable: {conceptCause.label}</p>
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">{displayText(conceptCause.description)}</p>
                            </div>
                            <div className="md:col-span-2">
                              <p className="text-sm font-semibold text-foreground">Qué revisar</p>
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">{displayText(conceptCause.review)}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ) : null}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
          {!visibleConcepts.length ? <p className="p-5 text-sm text-muted-foreground">No hay conceptos con el filtro actual.</p> : null}
        </div>
      ) : (
        <p className="mt-4 rounded-2xl bg-muted/50 px-4 py-5 text-sm font-semibold text-muted-foreground">No hay conceptos comparados para esta matrícula.</p>
      )}

      {relatedUnmapped.length ? (
        <div className="mt-5 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-4">
          <h4 className="text-sm font-semibold text-foreground">Conceptos no incluidos de esta persona</h4>
          <div className="mt-3 min-w-0 max-w-full overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  {["Concepto Recibo", "Total detectado", "Tipo decisión", "Motivo", "Acción recomendada"].map((header) => (
                    <th key={`person-unmapped-${header}`} className="px-3 py-2 text-xs font-semibold uppercase">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {relatedUnmapped.map((row) => (
                  <tr key={row.pdfConcept} className="border-t border-border">
                    <td className="px-3 py-2 font-semibold">{displayText(row.pdfConcept)}</td>
                    <td className="px-3 py-2 text-right font-mono">{formatEuro(row.totalDetected)}</td>
                    <td className="px-3 py-2"><Badge value={row.decisionType ?? row.action} /></td>
                    <td className="px-3 py-2 text-muted-foreground">{displayText(row.reason)}</td>
                    <td className="px-3 py-2 text-muted-foreground">{displayText(row.recommendedAction ?? row.action)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function DetailModal({
  state,
  tolerance,
  concepts,
  unmappedConcepts,
  onClose,
}: Readonly<{ state: DetailModalState; tolerance: number; concepts: readonly ConceptComparisonRow[]; unmappedConcepts: readonly UnmappedConceptRow[]; onClose: () => void }>) {
  const title = state.kind === "person" ? "Detalle persona" : state.kind === "concept" ? "Detalle concepto" : "Detalle concepto no incluido";
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
  const personProfile = state.kind === "person" ? selectPersonProfileFromRow(state.row) : undefined;

  return (
    <ModalShell
      title={title}
      onClose={onClose}
      maxWidth="5xl"
    >
      <div data-surface="person-detail-content" className="min-w-0 max-w-full overflow-x-hidden">
        <div data-surface={state.kind === "person" ? "person-overview" : "detail-overview"} className="grid min-w-0 max-w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {state.kind === "person" ? (
            <>
              <ModalField label="Matrícula" value={state.row.employeeNumber} />
              <ModalField label="Persona" value={state.row.person} />
              <ModalField label="Centro" value={state.row.workplace} />
              <ModalField label="Puesto" value={state.row.position} />
              <ModalField label="Categoría" value={state.row.category} />
              <ModalField label="Estado" value={state.row.status} />
              <ModalField label="Recibos" value={state.row.payrollCount} />
              <PeriodChips periods={state.row.periods} />
            </>
          ) : state.kind === "concept" ? (
            <>
              <ModalField label="Matrícula" value={state.row.employeeNumber} />
              <ModalField label="Persona" value={state.row.person} />
              <ModalField label="Bloque" value={state.row.block} />
              <ModalField label="Código Reg. Retrib." value={state.row.registroCode} />
              <ModalField label="Concepto Recibo" value={state.row.pdfConcept} />
              <ModalField label="Estado" value={state.row.status} />
              <ModalField label="Motivo" value={state.row.detail} />
              <ModalField label="Regla usada" value={state.row.detail} />
            </>
          ) : (
            <>
              <ModalField label="Concepto Recibo" value={state.row.pdfConcept} />
              <ModalField label="Total detectado" value={formatEuro(state.row.totalDetected)} />
              <ModalField label="Personas" value={state.row.peopleCount} />
              <ModalField label="Recibos" value={state.row.payrollCount} />
              <ModalField label="Ejemplos matrículas" value={state.row.exampleEmployeeNumbers.join("; ")} />
              <ModalField label="Tipo decisión" value={state.row.decisionType} />
              <ModalField label="Sugerencia bloque" value={state.row.suggestedBlock} />
              <ModalField label="Sugerencia código Reg. Retrib." value={state.row.suggestedRegistroCode} />
            </>
          )}
        </div>

        {state.kind === "person" ? <PersonSummarySection row={state.row} /> : null}

        {state.kind === "person" ? (
          <div data-surface="economic-breakdown" className="mt-6 min-w-0 divide-y divide-border border-y border-border">
            <MoneyTriplet label="Salario" registro={personProfile!.blocks.salary.registro} pdf={personProfile!.blocks.salary.payroll} diff={personProfile!.blocks.salary.difference} />
            <MoneyTriplet label="C. Salarial" registro={personProfile!.blocks.salaryComplement.registro} pdf={personProfile!.blocks.salaryComplement.payroll} diff={personProfile!.blocks.salaryComplement.difference} />
            <MoneyTriplet label="Extrasalarial" registro={personProfile!.blocks.extraSalary.registro} pdf={personProfile!.blocks.extraSalary.payroll} diff={personProfile!.blocks.extraSalary.difference} />
            <MoneyTriplet label="Total" registro={personProfile!.totals.registro} pdf={personProfile!.totals.payroll} diff={personProfile!.totals.difference} />
          </div>
        ) : state.kind === "concept" ? (
          <div className="mt-6">
            <MoneyTriplet label="Concepto" registro={state.row.registroAmount} pdf={state.row.pdfAmount} diff={state.row.difference} />
          </div>
        ) : null}

        {state.kind === "person" ? (
          <>
            <PersonConceptsSection person={state.row} concepts={concepts} unmappedConcepts={unmappedConcepts} tolerance={tolerance} />
          </>
        ) : null}

        <div className="mt-6 grid min-w-0 gap-4 md:grid-cols-2">
          <div className="min-w-0 rounded-2xl bg-sky-500/10 p-4">
            <p className="text-sm font-semibold text-foreground">Causa probable: {cause.label}</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{displayText(cause.description)}</p>
          </div>
          <div className="min-w-0 rounded-2xl bg-muted/50 p-4">
            <p className="text-sm font-semibold text-foreground">Qué revisar</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{displayText(cause.review)}</p>
          </div>
        </div>

        <AiExplanationPanel type={aiType} payload={aiPayload} />
      </div>
    </ModalShell>
  );
}

function PersonasTable({ density, onOpen, toolbar }: Readonly<{ density: TableDensity; onOpen: (state: DetailModalState) => void; toolbar: ReactNode }>) {
  const { result, filters } = useAppState();
  const allRows = result?.people ?? [];
  const rows = useMemo(
    () =>
      allRows.filter((item) => {
        if (!matchesQuery([item.employeeNumber, item.person, item.workplace, item.position, item.category], filters.query)) return false;
        if (filters.center && item.workplace !== filters.center) return false;
        if (filters.group && item.position !== filters.group && item.category !== filters.group) return false;
        if (filters.status && item.status !== filters.status) return false;
        return true;
      }),
    [allRows, filters],
  );
  const totalDifference = rows.reduce((sum, row) => sum + row.totalDifference, 0);
  const pdfWithoutRegistro = rows.filter((row) => row.status === "Sin Registro").reduce((sum, row) => sum + row.pdfTotal, 0);

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <DataTableShell
        className="min-h-0 flex-1"
        viewportClassName="min-h-0 flex-1"
        toolbar={toolbar}
        summary={<TableSummary visible={rows.length} total={allRows.length} difference={totalDifference} extra={`Recibo sin Reg. Retrib. visible: ${formatEuro(pdfWithoutRegistro)}`} />}
        empty={!rows.length ? <p className="p-6 text-sm text-muted-foreground">Sin personas con los filtros actuales.</p> : null}
      >
          <table className="w-full min-w-[1320px] border-separate border-spacing-0 text-left text-sm">
            <thead className="sticky top-0 z-20 bg-muted text-muted-foreground shadow-sm">
              <tr>
                {PERSONAS_HEADERS.map((header, index) => (
                  <th
                    key={header.key}
                    className={cn(
                      "border-b border-border px-4 py-3 text-xs font-semibold uppercase",
                      index === 0 && "sticky left-0 z-30 min-w-[128px] bg-muted shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]",
                    )}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const cause = describePersonCause(row, result?.summary?.tolerance ?? 1);
                return (
                  <tr
                    key={row.employeeNumber}
                    tabIndex={0}
                    aria-label={`Abrir detalle de ${displayText(row.person) || row.employeeNumber}`}
                    onClick={() => onOpen({ kind: "person", row })}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onOpen({ kind: "person", row });
                      }
                    }}
                    className={cn("cursor-pointer transition", rowTone(row.status))}
                  >
                    <td className={cn(stickyFirstColumn(density), "border-b border-border/70 font-mono")}>{displayText(row.employeeNumber)}</td>
                    <td className={cn("min-w-[220px] max-w-[260px] border-b border-border/70 font-semibold", cellPadding(density))}><TruncatedText>{displayText(row.person)}</TruncatedText></td>
                    <td className={cn("border-b border-border/70", cellPadding(density))}><CauseBadge cause={cause} /></td>
                    <td className={cn("border-b border-border/70", cellPadding(density))}>{displayText(row.workplace)}</td>
                    <td className={cn("max-w-[220px] border-b border-border/70", cellPadding(density))}><TruncatedText>{displayText(row.position)}</TruncatedText></td>
                    <td className={cn("max-w-[220px] border-b border-border/70", cellPadding(density))}><TruncatedText>{displayText(row.category)}</TruncatedText></td>
                    <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density))}>{formatEuro(row.registroTotal)}</td>
                    <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density))}>{formatEuro(row.pdfTotal)}</td>
                    <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density), diffClass(row.totalDifference))}>{formatEuro(row.totalDifference)}</td>
                    <td className={cn("border-b border-border/70", cellPadding(density))}><Badge value={row.status} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
      </DataTableShell>
    </div>
  );
}

function ConceptosTable({ density, onOpen }: Readonly<{ density: TableDensity; onOpen: (state: DetailModalState) => void }>) {
  const { result, filters } = useAppState();
  const allRows = result?.concepts ?? [];
  const rows = useMemo(
    () =>
      allRows.filter((item) => {
        if (!matchesQuery([item.employeeNumber, item.person, item.block, item.registroCode, item.pdfConcept], filters.query)) return false;
        if (filters.status && item.status !== filters.status) return false;
        return true;
      }),
    [allRows, filters],
  );
  const unmapped = result?.unmappedConcepts ?? [];
  const totalDifference = rows.reduce((sum, row) => sum + row.difference, 0);
  const pending = unmapped.filter((row) => row.decisionType === "Pendiente revision").length;

  return (
    <div className="space-y-6">
      <TableSummary visible={rows.length} total={allRows.length} difference={totalDifference} extra={`Pendientes visibles: ${pending}`} />
      <Card className="gap-0 overflow-hidden py-0">
        <CardHeader className="border-b">
          <CardTitle>Conceptos comparados</CardTitle>
        </CardHeader>
        <CardContent className="max-h-[62dvh] overflow-auto p-0">
          <table className="w-full min-w-[1160px] border-separate border-spacing-0 text-left text-sm">
            <thead className="sticky top-0 z-20 bg-muted text-muted-foreground shadow-sm">
              <tr>
                {CONCEPTOS_HEADERS.map((header, index) => (
                  <th
                    key={header.key}
                    className={cn(
                      "border-b border-border px-4 py-3 text-xs font-semibold uppercase",
                      index === 0 && "sticky left-0 z-30 min-w-[128px] bg-muted shadow-[10px_0_16px_-16px_rgba(15,23,42,0.55)]",
                    )}
                  >
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const cause = describeConceptCause(row, result?.summary?.tolerance ?? 1);
                return (
                  <tr
                    key={`${row.employeeNumber}-${row.registroCode}-${index}`}
                    tabIndex={0}
                    onClick={() => onOpen({ kind: "concept", row })}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") onOpen({ kind: "concept", row });
                    }}
                    className={cn("cursor-pointer transition", rowTone(row.status))}
                  >
                    <td className={cn(stickyFirstColumn(density), "border-b border-border/70 font-mono")}>{displayText(row.employeeNumber)}</td>
                    <td className={cn("min-w-[220px] border-b border-border/70 font-semibold", cellPadding(density))}>{displayText(row.person)}</td>
                    <td className={cn("border-b border-border/70", cellPadding(density))}>{displayText(row.block)}</td>
                    <td className={cn("border-b border-border/70 font-mono", cellPadding(density))}>{displayText(row.registroCode)}</td>
                    <td className={cn("max-w-[260px] truncate border-b border-border/70", cellPadding(density))}>{displayText(row.pdfConcept)}</td>
                    <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density))}>{formatEuro(row.registroAmount)}</td>
                    <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density))}>{formatEuro(row.pdfAmount)}</td>
                    <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density), diffClass(row.difference))}>{formatEuro(row.difference)}</td>
                    <td className={cn("border-b border-border/70", cellPadding(density))}><Badge value={row.status} /></td>
                    <td className={cn("max-w-[320px] border-b border-border/70", cellPadding(density))}>
                      {displayText(row.detail || cause.label)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!rows.length ? <p className="p-6 text-sm text-muted-foreground">Sin conceptos comparados con los filtros actuales.</p> : null}
        </CardContent>
      </Card>
      <Card className="overflow-hidden p-0">
        <div className="border-b border-border px-5 py-4">
          <h2 className="text-lg font-semibold text-foreground">Conceptos no incluidos</h2>
        </div>
        <div className="max-h-[52dvh] overflow-auto">
          <table className="w-full min-w-[1320px] border-separate border-spacing-0 text-left text-sm">
            <thead className="sticky top-0 z-20 bg-muted text-muted-foreground shadow-sm">
              <tr>
                {CONCEPTOS_NO_INCLUIDOS_HEADERS.map((header, index) => (
                  <th key={header.key} className={cn("border-b border-border px-4 py-3 text-xs font-semibold uppercase", index === 0 && "sticky left-0 z-30 bg-muted")}>
                    {header.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {unmapped.map((row) => (
                <tr key={row.pdfConcept} tabIndex={0} onClick={() => onOpen({ kind: "unmapped", row })} className={cn("cursor-pointer transition", rowTone())}>
                  <td className={cn(stickyFirstColumn(density), "border-b border-border/70")}><Badge value={row.decisionType ?? (row.action === "Ignorado" ? "Ignorado" : "Sin mapear real")} /></td>
                  <td className={cn("border-b border-border/70", cellPadding(density))}>{row.includedInComparison ? "Sí" : "No"}</td>
                  <td className={cn("border-b border-border/70 font-semibold", cellPadding(density))}>{displayText(row.pdfConcept)}</td>
                  <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density))}>{formatEuro(row.totalDetected)}</td>
                  <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density))}>{row.peopleCount}</td>
                  <td className={cn("border-b border-border/70 text-right font-mono", cellPadding(density))}>{row.payrollCount}</td>
                  <td className={cn("border-b border-border/70 font-mono", cellPadding(density))}>{row.exampleEmployeeNumbers.join("; ")}</td>
                  <td className={cn("border-b border-border/70", cellPadding(density))}>{displayText(row.suggestedBlock)}</td>
                  <td className={cn("border-b border-border/70 font-mono", cellPadding(density))}>{displayText(row.suggestedRegistroCode)}</td>
                  <td className={cn("border-b border-border/70", cellPadding(density))}>{displayText(row.recommendedAction ?? row.action)}</td>
                  <td className={cn("max-w-[320px] border-b border-border/70", cellPadding(density))}>{displayText(row.reason)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!unmapped.length ? <p className="p-6 text-sm text-muted-foreground">No hay conceptos no incluidos.</p> : null}
        </div>
      </Card>
    </div>
  );
}

function AgrupacionesTable() {
  return <AgrupacionesView />;
}

export function TablesView({ mode }: Readonly<{ mode: Extract<AppView, "personas" | "agrupaciones"> }>) {
  const { result, filters, setFilters } = useAppState();
  const density: TableDensity = "compact";
  const [modal, setModal] = useState<DetailModalState | undefined>();
  const people = result?.people ?? [];
  const centers = unique(people.map((item) => item.workplace));
  const groups = unique(people.flatMap((item) => [item.position, item.category]));

  if (!result) {
    return (
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon"><Table2 /></EmptyMedia>
          <EmptyTitle>No hay análisis activo</EmptyTitle>
          <EmptyDescription>Carga el Registro Retributivo y los recibos para generar una comparativa antes de revisar esta sección.</EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
  }

  return (
    <div className={cn("flex min-w-0 w-full flex-col", mode === "personas" ? "min-h-0 flex-1" : "gap-6")}>
      {mode === "personas" ? (
        <PersonasTable
          density={density}
          onOpen={setModal}
          toolbar={<FiltersPanel filters={filters} centers={centers} groups={groups} onChange={setFilters} />}
        />
      ) : (
        <AgrupacionesTable />
      )}
      {modal ? (
        <DetailModal
          state={modal}
          tolerance={result.summary?.tolerance ?? 1}
          concepts={result.concepts}
          unmappedConcepts={result.unmappedConcepts}
          onClose={() => setModal(undefined)}
        />
      ) : null}
    </div>
  );
}
