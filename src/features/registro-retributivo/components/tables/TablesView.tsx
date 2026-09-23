"use client";

import { ChevronDown, Search, Table2, X } from "lucide-react";
import { useMemo, useState } from "react";
import { AiExplanationPanel } from "@/features/registro-retributivo/components/ai/AiExplanationPanel";
import { useAppState, type DashboardFilters, EMPTY_FILTERS, matchesQuery } from "@/features/registro-retributivo/state/AppState";
import { StatusBadge } from "@/features/registro-retributivo/components/common/StatusBadge";
import { StatusPill } from "@/features/registro-retributivo/components/common/StatusPill";
import { DetailField, MoneyTable } from "@/features/registro-retributivo/components/common/DetailParts";
import {
  countPeopleByStatus,
  isComparableStatus,
  personStatusMeta,
  type PersonStatusCount,
} from "@/features/registro-retributivo/components/common/personStatus";
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
  type TableProps,
} from "@/components/system";
import { AgrupacionesView } from "@/features/registro-retributivo/components/groupings/AgrupacionesView";
import { buildPersonExplainPayload } from "@/features/registro-retributivo/ai/explainPayload";
import type { AppView, ConceptComparisonRow, PersonComparisonRow, UnmappedConceptRow } from "@/features/registro-retributivo/types";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { describeConceptCause, describePersonCause, type ProbableCause } from "@/features/registro-retributivo/ui/probableCause";
import { toleranceDiffClass } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/lib/utils";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { selectPersonProfileFromRow } from "@/features/registro-retributivo/selectors/sharedSelectors";
import { parsePayrollPeriod, sortPeriodLabels } from "@/features/registro-retributivo/utils/spanishDates";

type ConceptFilter = "differences" | "all" | "ok" | "review";

const FILTER_ALL = "__all__";
const MONTH_YEAR = new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric", timeZone: "UTC" });

function unique(values: readonly (string | undefined)[]): string[] {
  return [...new Set(values.filter((value): value is string => Boolean(value)))].sort((a, b) => a.localeCompare(b, "es"));
}

function matchesPersonFilters(item: PersonComparisonRow, filters: DashboardFilters): boolean {
  if (!matchesQuery([item.employeeNumber, item.person, item.workplace, item.position, item.category], filters.query)) return false;
  if (filters.center && item.workplace !== filters.center) return false;
  if (filters.group && item.position !== filters.group && item.category !== filters.group) return false;
  return true;
}

function sum(rows: readonly PersonComparisonRow[], pick: (row: PersonComparisonRow) => number): number {
  return rows.reduce((total, row) => total + pick(row), 0);
}

/** Frase que resume las filas visibles, sin mezclar importes no comparables. */
function summariseRows(rows: readonly PersonComparisonRow[], status: string): string {
  const people = `${rows.length} ${rows.length === 1 ? "persona" : "personas"}`;
  if (status === "Sin Registro") return `${people} · ${formatEuro(sum(rows, (row) => row.pdfTotal))} en recibos sin registro`;
  if (status === "Sin PDF") return `${people} · ${formatEuro(sum(rows, (row) => row.registroTotal))} en el registro sin recibo`;
  const comparable = rows.filter((row) => isComparableStatus(row.status));
  const net = formatEuro(sum(comparable, (row) => row.totalDifference));
  return status ? `${people} · diferencia neta ${net}` : `${people} · diferencia neta de las que están en los dos ficheros: ${net}`;
}

function FilterCombobox({
  label,
  allLabel,
  value,
  options,
  onChange,
}: Readonly<{ label: string; allLabel: string; value: string; options: readonly string[]; onChange: (value: string) => void }>) {
  return (
    <Combobox className="w-full sm:w-56" value={value || FILTER_ALL} onValueChange={(next) => onChange(next === FILTER_ALL ? "" : next)}>
      <ComboboxTrigger className="min-w-0">
        <ComboboxInput aria-label={label} placeholder={label} />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxList ariaLabel={label}>
          <ComboboxItem value={FILTER_ALL} textValue={allLabel}>
            {allLabel}
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

/** Filtro por estado: mismos nombres y colores que el resumen de Inicio. */
function StatusChips({
  total,
  statuses,
  value,
  onChange,
}: Readonly<{ total: number; statuses: readonly PersonStatusCount[]; value: string; onChange: (status: string) => void }>) {
  const chipClass = (active: boolean) =>
    cn(
      "inline-flex min-h-8 items-center gap-2 rounded-full border px-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
      active ? "border-foreground/30 bg-selected text-foreground" : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
    );

  return (
    <div role="group" aria-label="Filtrar por estado" className="flex flex-wrap gap-2">
      <button type="button" aria-pressed={!value} className={chipClass(!value)} onClick={() => onChange("")}>
        Todas
        <span className="font-semibold tabular-nums text-foreground">{total}</span>
      </button>
      {statuses.map((item) => (
        <button
          key={item.status}
          type="button"
          aria-pressed={value === item.status}
          className={chipClass(value === item.status)}
          onClick={() => onChange(value === item.status ? "" : item.status)}
        >
          <span aria-hidden="true" className={cn("size-2 rounded-full", item.dotClass)} />
          {item.label}
          <span className="font-semibold tabular-nums text-foreground">{item.count}</span>
        </button>
      ))}
    </div>
  );
}

function DifferenceCell({ row, tolerance }: Readonly<{ row: PersonComparisonRow; tolerance: number }>) {
  if (row.status === "Sin Registro") {
    return (
      <span className="flex flex-col items-end leading-tight">
        <span className="font-mono text-muted-foreground">{formatEuro(row.pdfTotal)}</span>
        <span className="text-xs text-muted-foreground">solo en recibo</span>
      </span>
    );
  }
  if (row.status === "Sin PDF") {
    return (
      <span className="flex flex-col items-end leading-tight">
        <span className="font-mono text-muted-foreground">{formatEuro(row.registroTotal)}</span>
        <span className="text-xs text-muted-foreground">solo en registro</span>
      </span>
    );
  }
  return <span className={cn("font-mono font-medium", toleranceDiffClass(row.totalDifference, tolerance))}>{formatEuro(row.totalDifference)}</span>;
}

/* ---------------------------------- Detalle ---------------------------------- */

type Verdict = { readonly title: string; readonly tone: "danger" | "ok" | "neutral" };

function personVerdict(row: PersonComparisonRow, tolerance: number): Verdict {
  if (row.status === "Sin Registro") {
    return { title: `Tiene ${row.payrollCount} ${row.payrollCount === 1 ? "recibo" : "recibos"}, pero no aparece en el Registro Retributivo.`, tone: "neutral" };
  }
  if (row.status === "Sin PDF") {
    return { title: "Está en el Registro Retributivo, pero no se ha subido ningún recibo suyo.", tone: "neutral" };
  }
  const difference = row.totalDifference;
  if (Math.abs(difference) <= tolerance) {
    return { title: `Recibo y Registro coinciden: la diferencia (${formatEuro(difference)}) está dentro de la tolerancia.`, tone: "ok" };
  }
  return {
    title: `Los recibos suman ${formatEuro(Math.abs(difference))} ${difference > 0 ? "más" : "menos"} que el Registro Retributivo.`,
    tone: "danger",
  };
}

function VerdictBox({ verdict, cause }: Readonly<{ verdict: Verdict; cause: ProbableCause }>) {
  return (
    <section
      aria-label="Conclusión"
      className={cn(
        "flex flex-col gap-3 rounded-xl border p-4",
        verdict.tone === "danger" ? "border-destructive/25 bg-destructive/5" : verdict.tone === "ok" ? "border-emerald-500/30 bg-emerald-500/5" : "border-border bg-muted/40",
      )}
    >
      <p className="text-base font-semibold text-foreground text-pretty">{verdict.title}</p>
      <dl className="grid gap-3 sm:grid-cols-2">
        <div>
          <dt className="text-xs text-muted-foreground">Causa probable</dt>
          <dd className="text-sm font-medium text-foreground">{displayText(cause.label)}</dd>
          <dd className="mt-0.5 text-sm text-muted-foreground text-pretty">{displayText(cause.description)}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Qué revisar</dt>
          <dd className="text-sm text-foreground text-pretty">{displayText(cause.review)}</dd>
        </div>
      </dl>
    </section>
  );
}

function periodRange(periods: readonly string[]): string | undefined {
  const starts = periods.map((period) => parsePayrollPeriod(period).start).filter((value): value is string => Boolean(value)).sort();
  if (!starts.length) return undefined;
  const first = MONTH_YEAR.format(new Date(starts[0]));
  const last = MONTH_YEAR.format(new Date(starts[starts.length - 1]));
  return first === last ? first : `de ${first} a ${last}`;
}

function PeriodsDisclosure({ periods }: Readonly<{ periods: readonly string[] }>) {
  const ordered = useMemo(() => sortPeriodLabels(periods), [periods]);
  const range = periodRange(ordered);
  if (!ordered.length) return <DetailField label="Periodos" value="Sin dato" />;

  return (
    <details className="group col-span-2 min-w-0">
      <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-md text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
        <span className="text-xs text-muted-foreground">Periodos</span>
        <span className="font-medium text-foreground">
          {ordered.length} {ordered.length === 1 ? "periodo" : "periodos"}
          {range ? `, ${range}` : ""}
        </span>
        <ChevronDown className="size-3.5 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="mt-2 flex min-w-0 flex-wrap gap-1.5">
        {ordered.map((period) => (
          <Badge key={period} data-testid="period-chip" status="neutral" size="sm" className="max-w-full whitespace-normal">
            {displayText(period)}
          </Badge>
        ))}
      </div>
    </details>
  );
}

function isReviewConcept(row: ConceptComparisonRow): boolean {
  return row.status === "Revisar" || row.status === "Sin mapear";
}

function isDifferenceConcept(row: ConceptComparisonRow, tolerance: number): boolean {
  return Math.abs(row.difference) > tolerance || row.status === "Diferencia";
}

function matchesConceptFilter(row: ConceptComparisonRow, filter: ConceptFilter, tolerance: number): boolean {
  if (filter === "differences") return isDifferenceConcept(row, tolerance);
  if (filter === "ok") return row.status === "OK";
  if (filter === "review") return isReviewConcept(row);
  return true;
}

function PersonConcepts({
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
  const personConcepts = useMemo(
    () =>
      concepts
        .filter((row) => row.employeeNumber === person.employeeNumber)
        .sort((left, right) => Math.abs(right.difference) - Math.abs(left.difference)),
    [concepts, person.employeeNumber],
  );
  const counts: Record<ConceptFilter, number> = {
    differences: personConcepts.filter((row) => isDifferenceConcept(row, tolerance)).length,
    all: personConcepts.length,
    ok: personConcepts.filter((row) => row.status === "OK").length,
    review: personConcepts.filter(isReviewConcept).length,
  };
  const [filter, setFilter] = useState<ConceptFilter>(counts.differences ? "differences" : "all");
  const visible = personConcepts.filter((row) => matchesConceptFilter(row, filter, tolerance));
  const relatedUnmapped = unmappedConcepts.filter((row) => row.exampleEmployeeNumbers.includes(person.employeeNumber));
  const options: Array<{ value: ConceptFilter; label: string }> = [
    { value: "differences", label: "Con diferencia" },
    { value: "all", label: "Todos" },
    { value: "ok", label: "Cuadran" },
    { value: "review", label: "A revisar" },
  ];

  return (
    <section aria-labelledby="person-concepts-title" className="flex min-w-0 flex-col gap-3">
      <div>
        <h3 id="person-concepts-title" className="text-sm font-semibold text-foreground">Concepto a concepto</h3>
        <p className="text-xs text-muted-foreground">Cada línea compara un concepto del recibo con su código del Registro. Pulsa una para ver por qué difiere.</p>
      </div>

      {personConcepts.length ? (
        <>
          <div role="group" aria-label="Filtrar conceptos" className="flex flex-wrap gap-1.5">
            {options
              .filter((item) => item.value === "all" || counts[item.value] > 0)
              .map((item) => (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={filter === item.value}
                  onClick={() => setFilter(item.value)}
                  className={cn(
                    "inline-flex min-h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                    filter === item.value ? "border-foreground/30 bg-selected text-foreground" : "border-border text-muted-foreground hover:bg-muted",
                  )}
                >
                  {item.label}
                  <span className="font-semibold tabular-nums text-foreground">{counts[item.value]}</span>
                </button>
              ))}
          </div>
          <Accordion
            className="overflow-hidden rounded-xl border border-border"
            classNames={{ trigger: "min-h-12 gap-3 px-3", title: "text-sm", description: "text-sm", content: "[&>div]:px-3 [&>div]:pb-3" }}
            items={visible.map((row, index) => {
              const cause = describeConceptCause(row, tolerance);
              return {
                id: `${row.registroCode}-${row.pdfConcept ?? "sin-pdf"}-${index}`,
                title: (
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="min-w-0 flex-1">
                      <span className="block truncate">{displayText(row.pdfConcept) || displayText(row.block)}</span>
                      <span className="block truncate font-mono text-xs text-muted-foreground">{displayText(row.registroCode) || "Sin código"}</span>
                    </span>
                    <span className={cn("shrink-0 font-mono text-sm tabular-nums", toleranceDiffClass(row.difference, tolerance))}>{formatEuro(row.difference)}</span>
                  </span>
                ),
                description: (
                  <div className="flex flex-col gap-3">
                    <dl className="grid grid-cols-3 gap-3">
                      <DetailField label="En recibo" value={formatEuro(row.pdfAmount)} />
                      <DetailField label="En registro" value={formatEuro(row.registroAmount)} />
                      <DetailField label="Bloque" value={row.block} />
                    </dl>
                    <p className="text-sm text-foreground text-pretty">
                      <span className="font-medium">{displayText(cause.label)}.</span> {displayText(cause.description)}
                    </p>
                    <p className="text-sm text-muted-foreground text-pretty">Qué revisar: {displayText(cause.review)}</p>
                  </div>
                ),
              };
            })}
          />
        </>
      ) : (
        <p className="rounded-xl bg-muted/50 px-4 py-4 text-sm text-muted-foreground">No hay conceptos comparados para esta persona.</p>
      )}

      {relatedUnmapped.length ? (
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-medium text-muted-foreground">Conceptos del recibo que no cuentan en el cálculo</h4>
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

function PersonDrawer({
  row,
  tolerance,
  concepts,
  unmappedConcepts,
  onClose,
}: Readonly<{ row: PersonComparisonRow; tolerance: number; concepts: readonly ConceptComparisonRow[]; unmappedConcepts: readonly UnmappedConceptRow[]; onClose: () => void }>) {
  const cause = describePersonCause(row, tolerance);
  const profile = selectPersonProfileFromRow(row);
  const aiPayload = buildPersonExplainPayload(row, cause, concepts, unmappedConcepts);
  const comparable = isComparableStatus(row.status);

  return (
    <Drawer
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      title={displayText(row.person) || `Matrícula ${row.employeeNumber}`}
      description={`Matrícula ${displayText(row.employeeNumber)} · ${personStatusMeta(row.status).label}`}
      size="lg"
    >
      <div data-surface="person-detail-content" className="flex min-w-0 flex-col gap-6">
        <VerdictBox verdict={personVerdict(row, tolerance)} cause={cause} />

        <dl data-surface="person-overview" className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3">
          <DetailField label="Centro" value={row.workplace} />
          <DetailField label="Recibos" value={row.payrollCount} />
          <DetailField label="Puesto" value={row.position} />
          <DetailField label="Categoría" value={row.category} />
          <PeriodsDisclosure periods={row.periods} />
        </dl>

        <section aria-labelledby="person-amounts-title" className="flex flex-col gap-2">
          <div>
            <h3 id="person-amounts-title" className="text-sm font-semibold text-foreground">Importes por bloque</h3>
            <p className="text-xs text-muted-foreground">
              {comparable
                ? `Suma del periodo en los recibos frente al Registro. En rojo, lo que supera la tolerancia de ${formatEuro(tolerance)}.`
                : "Solo hay datos en uno de los dos ficheros, así que no hay diferencia que comparar."}
            </p>
          </div>
          <MoneyTable
            caption="Importes por bloque"
            leftLabel="Recibo"
            rightLabel="Registro"
            tolerance={comparable ? tolerance : Number.POSITIVE_INFINITY}
            rows={[
              { label: "Salario", left: profile.blocks.salary.payroll, right: profile.blocks.salary.registro, diff: profile.blocks.salary.difference },
              { label: "C. Salarial", left: profile.blocks.salaryComplement.payroll, right: profile.blocks.salaryComplement.registro, diff: profile.blocks.salaryComplement.difference },
              { label: "Extrasalarial", left: profile.blocks.extraSalary.payroll, right: profile.blocks.extraSalary.registro, diff: profile.blocks.extraSalary.difference },
              { label: "Total", left: profile.totals.payroll, right: profile.totals.registro, diff: profile.totals.difference },
            ]}
          />
        </section>

        <PersonConcepts person={row} concepts={concepts} unmappedConcepts={unmappedConcepts} tolerance={tolerance} />
        <AiExplanationPanel type="person" payload={aiPayload} />
      </div>
    </Drawer>
  );
}

/* ---------------------------------- Listado ---------------------------------- */

function PersonasList({ onOpen }: Readonly<{ onOpen: (row: PersonComparisonRow) => void }>) {
  const { result, filters, setFilters } = useAppState();
  const allRows = useMemo(() => result?.people ?? [], [result?.people]);
  const centers = useMemo(() => unique(allRows.map((item) => item.workplace)), [allRows]);
  const groups = useMemo(() => unique(allRows.flatMap((item) => [item.position, item.category])), [allRows]);
  const baseRows = useMemo(() => allRows.filter((item) => matchesPersonFilters(item, filters)), [allRows, filters]);
  const rows = useMemo(() => (filters.status ? baseRows.filter((item) => item.status === filters.status) : baseRows), [baseRows, filters.status]);
  const statuses = useMemo(() => countPeopleByStatus(baseRows), [baseRows]);
  const tolerance = result?.summary?.tolerance ?? 1;
  const selectedMeta = filters.status ? personStatusMeta(filters.status) : undefined;
  const hasFilters = Boolean(filters.query || filters.center || filters.group || filters.status);

  const columns = useMemo<TableProps<PersonComparisonRow>["columns"]>(
    () => [
      {
        key: "employeeNumber",
        header: "Matrícula",
        width: "110px",
        sortable: true,
        cell: (row) => <span className="font-mono text-muted-foreground">{displayText(row.employeeNumber)}</span>,
      },
      {
        key: "person",
        header: "Persona",
        sortable: true,
        sortValue: (row) => displayText(row.person),
        cell: (row) => (
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-medium text-foreground">{displayText(row.person) || "Sin nombre"}</span>
            <span className="truncate text-xs text-muted-foreground">
              {[displayText(row.workplace), displayText(row.position)].filter(Boolean).join(" · ") || "Sin centro ni puesto"}
            </span>
          </span>
        ),
      },
      {
        key: "status",
        header: "Estado",
        width: "190px",
        sortable: true,
        sortValue: (row) => personStatusMeta(row.status).label,
        cell: (row) => <StatusPill status={row.status} />,
      },
      {
        key: "difference",
        header: "Diferencia",
        width: "150px",
        align: "right",
        sortable: true,
        // Sin recibo o sin registro no hay diferencia real: van al final.
        sortValue: (row) => (isComparableStatus(row.status) ? Math.abs(row.totalDifference) : -1),
        cell: (row) => <DifferenceCell row={row} tolerance={tolerance} />,
      },
      {
        key: "cause",
        header: "Causa probable",
        width: "220px",
        cell: (row) => (
          <span className="block truncate text-sm text-muted-foreground">
            {isComparableStatus(row.status) ? displayText(describePersonCause(row, tolerance).label) : "—"}
          </span>
        ),
      },
    ],
    [tolerance],
  );

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-4">
      <header>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Personas</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground text-pretty">
          Cada fila compara lo que suman los recibos de una persona con lo que figura en el Registro Retributivo. Pulsa una fila para ver por qué
          difiere.
        </p>
      </header>

      <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <Input
          id="personas-search"
          type="search"
          aria-label="Buscar"
          value={filters.query}
          onChange={(value) => setFilters({ ...filters, query: value })}
          placeholder="Matrícula o nombre"
          leftIcon={<Search className="size-4" aria-hidden="true" />}
          className="min-w-0 sm:w-72"
        />
        <FilterCombobox label="Centro" allLabel="Todos los centros" value={filters.center} options={centers} onChange={(center) => setFilters({ ...filters, center })} />
        <FilterCombobox label="Puesto o categoría" allLabel="Todos los puestos" value={filters.group} options={groups} onChange={(group) => setFilters({ ...filters, group })} />
        {hasFilters ? (
          <Button type="button" variant="ghost" size="sm" onClick={() => setFilters(EMPTY_FILTERS)}>
            <X className="size-3.5" aria-hidden="true" />
            Quitar filtros
          </Button>
        ) : null}
      </div>

      <StatusChips total={baseRows.length} statuses={statuses} value={filters.status} onChange={(status) => setFilters({ ...filters, status })} />

      <p className="text-sm text-muted-foreground" role="status">
        {selectedMeta?.explanation ? <span className="text-foreground">{selectedMeta.explanation} </span> : null}
        {summariseRows(rows, filters.status)}
      </p>

      <div data-slot="table-viewport" className="min-h-0 min-w-0 flex-1 overflow-hidden">
        <Table
          data={[...rows]}
          columns={columns}
          getRowId={(row) => row.employeeNumber}
          defaultSort={{ key: "difference", direction: "desc" }}
          height={560}
          rowHeight={60}
          className="min-w-0"
          emptyState={<EmptyState title="Ninguna persona coincide con los filtros." />}
          onRowActivate={onOpen}
          getRowAriaLabel={(row) => `Abrir detalle de ${displayText(row.person) || row.employeeNumber}`}
        />
      </div>
    </div>
  );
}

export function TablesView({ mode }: Readonly<{ mode: Extract<AppView, "personas" | "agrupaciones"> }>) {
  const { result } = useAppState();
  const [selected, setSelected] = useState<PersonComparisonRow | undefined>();

  if (!result) {
    return (
      <EmptyState
        icon={<Table2 />}
        title="No hay análisis activo"
        description="Sube los recibos y el Registro Retributivo en Inicio para ver aquí la comparación por persona."
      />
    );
  }

  if (mode === "agrupaciones") {
    return (
      <div className="flex min-w-0 w-full flex-col gap-6">
        <AgrupacionesView />
      </div>
    );
  }

  return (
    <div className="flex min-h-0 min-w-0 w-full flex-1 flex-col">
      <PersonasList onOpen={setSelected} />
      {selected ? (
        <PersonDrawer
          row={selected}
          tolerance={result.summary?.tolerance ?? 1}
          concepts={result.concepts}
          unmappedConcepts={result.unmappedConcepts}
          onClose={() => setSelected(undefined)}
        />
      ) : null}
    </div>
  );
}
