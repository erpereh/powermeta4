"use client";

import { AlertTriangle, CheckCircle2, FileCheck2, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { AiExplanationPanel } from "@/features/registro-retributivo/components/ai/AiExplanationPanel";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { StatusPill } from "@/features/registro-retributivo/components/common/StatusPill";
import { DetailField, MoneyTable } from "@/features/registro-retributivo/components/common/DetailParts";
import { countPeopleByStatus } from "@/features/registro-retributivo/components/common/personStatus";
import { Callout, Drawer, EmptyState, Input, Table, type TableProps } from "@/components/system";
import { buildInternalExcelExplainPayload } from "@/features/registro-retributivo/ai/explainPayload";
import type { AnalysisStatus, InternalExcelCheckRow, InternalExcelNormalizedVariablesCheckRow } from "@/features/registro-retributivo/types";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { toleranceDiffClass } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/lib/utils";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

type CuadreMode = "breakdown" | "normalizedVariables";

const LIST_FORMAT = new Intl.ListFormat("es-ES", { style: "long", type: "conjunction" });

type CuadreBlock = {
  readonly label: string;
  readonly period: number;
  readonly other: number;
  readonly difference: number;
};

/** Fila común a los dos modos del cuadre. */
type CuadreRow = {
  readonly employeeNumber: string;
  readonly person?: string;
  readonly workplace?: string;
  readonly position?: string;
  readonly category?: string;
  readonly status: AnalysisStatus;
  readonly detail: string;
  readonly blocks: readonly CuadreBlock[];
  readonly total: CuadreBlock;
  readonly breakdownSource?: InternalExcelCheckRow;
};

type ModeInfo = {
  readonly id: CuadreMode;
  readonly title: string;
  readonly question: string;
  readonly otherLabel: string;
  /** Si las diferencias son esperables (no implican un error en el Excel). */
  readonly expected: boolean;
  readonly failingHint: string;
};

const MODES: readonly ModeInfo[] = [
  {
    id: "breakdown",
    title: "Total frente a desglose",
    question: "¿El importe del periodo completo coincide con la suma de sus conceptos?",
    otherLabel: "Suma del desglose",
    expected: false,
    failingHint: "Su total del periodo no coincide con la suma del desglose. Corrígelo en el Excel del Registro Retributivo; no depende de los recibos.",
  },
  {
    id: "normalizedVariables",
    title: "Total frente a normalizado + variables",
    question: "¿Cuánto se aleja lo cobrado en el periodo del normalizado más las variables?",
    otherLabel: "Normalizado + variables",
    expected: true,
    failingHint:
      "No es necesariamente un error: el normalizado se calcula como si la persona hubiera trabajado todo el año a jornada completa, así que difiere en altas, bajas, jornadas parciales o excedencias. Revisa las diferencias de quien trabajó el año entero a jornada completa.",
  },
];

function fromBreakdown(row: InternalExcelCheckRow, person?: string): CuadreRow {
  const blocks: CuadreBlock[] = [
    { label: "Salario", period: row.salaryPeriod, other: row.salaryBreakdown, difference: row.salaryDifference },
    { label: "C. Salarial", period: row.salaryComplementPeriod, other: row.salaryComplementBreakdown, difference: row.salaryComplementDifference },
    { label: "Extrasalarial", period: row.extraSalaryPeriod, other: row.extraSalaryBreakdown, difference: row.extraSalaryDifference },
  ];
  return {
    employeeNumber: row.employeeNumber,
    person,
    workplace: row.workplace,
    position: row.position,
    category: row.category,
    status: row.status,
    detail: row.detail,
    blocks,
    total: {
      label: "Total",
      period: blocks.reduce((sum, block) => sum + block.period, 0),
      other: blocks.reduce((sum, block) => sum + block.other, 0),
      difference: blocks.reduce((sum, block) => sum + block.difference, 0),
    },
    breakdownSource: row,
  };
}

function fromNormalized(row: InternalExcelNormalizedVariablesCheckRow, person?: string): CuadreRow {
  return {
    employeeNumber: row.employeeNumber,
    person: row.person ?? person,
    workplace: row.workplace,
    position: row.position,
    category: row.category,
    status: row.status,
    detail: row.detail,
    blocks: [
      { label: "Salario", period: row.salaryPeriod, other: row.salaryNormalizedPlusVariables, difference: row.salaryDifference },
      { label: "C. Salarial", period: row.salaryComplementPeriod, other: row.salaryComplementNormalizedPlusVariables, difference: row.salaryComplementDifference },
      { label: "Extrasalarial", period: row.extraSalaryPeriod, other: row.extraSalaryNormalizedPlusVariables, difference: row.extraSalaryDifference },
    ],
    total: { label: "Total", period: row.totalPeriod, other: row.totalNormalizedPlusVariables, difference: row.totalDifference },
  };
}

function notOkCount(rows: readonly { readonly status: AnalysisStatus }[]): number {
  return rows.filter((row) => row.status !== "OK").length;
}

/** Selector de modo: cada tarjeta explica qué compara y cuál es su resultado. */
function ModeCards({
  mode,
  onChange,
  results,
}: Readonly<{ mode: CuadreMode; onChange: (mode: CuadreMode) => void; results: Record<CuadreMode, { total: number; failing: number } | undefined> }>) {
  return (
    <div role="group" aria-label="Qué comprobar" className="grid gap-3 md:grid-cols-2">
      {MODES.map((item) => {
        const active = item.id === mode;
        const result = results[item.id];
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(item.id)}
            className={cn(
              "flex min-w-0 flex-col gap-1 rounded-2xl border p-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
              active ? "border-primary/50 bg-selected" : "border-border bg-card hover:bg-muted/50",
            )}
          >
            <span className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-foreground">{item.title}</span>
              {result ? (
                result.failing ? (
                  <span
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 text-xs font-medium",
                      item.expected ? "text-foreground" : "text-destructive",
                    )}
                  >
                    <span aria-hidden="true" className={cn("size-2 rounded-full", item.expected ? "bg-amber-500" : "bg-destructive")} />
                    {result.failing} {item.expected ? "difieren" : "no cuadran"}
                  </span>
                ) : (
                  <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-foreground">
                    <span aria-hidden="true" className="size-2 rounded-full bg-emerald-500" />
                    Todo cuadra
                  </span>
                )
              ) : (
                <span className="shrink-0 text-xs text-muted-foreground">No disponible</span>
              )}
            </span>
            <span className="text-sm text-muted-foreground text-pretty">{item.question}</span>
          </button>
        );
      })}
    </div>
  );
}

function CuadreVerdict({ rows, tolerance, mode }: Readonly<{ rows: readonly CuadreRow[]; tolerance: number; mode: ModeInfo }>) {
  const failing = notOkCount(rows);
  const maxDifference = rows.reduce((max, row) => Math.max(max, Math.abs(row.total.difference), ...row.blocks.map((block) => Math.abs(block.difference))), 0);
  const allOk = failing === 0;

  return (
    <section
      aria-labelledby="cuadre-verdict-title"
      className={cn(
        "flex items-start gap-3 rounded-2xl border p-5",
        allOk ? "border-emerald-500/30 bg-emerald-500/5" : mode.expected ? "border-amber-500/30 bg-amber-500/5" : "border-destructive/25 bg-destructive/5",
      )}
    >
      {allOk ? (
        <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-emerald-500" aria-hidden="true" />
      ) : (
        <AlertTriangle className={cn("mt-0.5 size-6 shrink-0", mode.expected ? "text-amber-500" : "text-destructive")} aria-hidden="true" />
      )}
      <div className="min-w-0">
        <h3 id="cuadre-verdict-title" className="text-lg font-semibold tracking-tight text-foreground text-balance">
          {allOk
            ? `Las ${rows.length} personas cuadran en el Excel`
            : mode.expected
              ? `${failing} de ${rows.length} personas tienen un total distinto del ${mode.otherLabel.toLowerCase()}`
              : `${failing} de ${rows.length} personas no cuadran en el Excel`}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground text-pretty">
          {allOk
            ? `La mayor diferencia es de ${formatEuro(maxDifference)}, dentro de la tolerancia de ${formatEuro(tolerance)}.`
            : mode.failingHint}
        </p>
      </div>
    </section>
  );
}

function StatusChips({
  rows,
  value,
  onChange,
}: Readonly<{ rows: readonly CuadreRow[]; value: string; onChange: (status: string) => void }>) {
  // Reutiliza nombres y colores de Personas para que el estado se lea igual en toda la herramienta.
  const statuses = countPeopleByStatus(rows.map((row) => ({ status: row.status })));
  const chipClass = (active: boolean) =>
    cn(
      "inline-flex min-h-8 items-center gap-2 rounded-full border px-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
      active ? "border-foreground/30 bg-selected text-foreground" : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
    );

  return (
    <div role="group" aria-label="Filtrar por estado" className="flex flex-wrap gap-2">
      <button type="button" aria-pressed={!value} className={chipClass(!value)} onClick={() => onChange("")}>
        Todas
        <span className="font-semibold tabular-nums text-foreground">{rows.length}</span>
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

function CuadreDrawer({
  row,
  tolerance,
  otherLabel,
  onClose,
}: Readonly<{ row: CuadreRow; tolerance: number; otherLabel: string; onClose: () => void }>) {
  const failing = [...row.blocks].filter((block) => Math.abs(block.difference) > tolerance);
  const title = failing.length
    ? `No cuadra en ${LIST_FORMAT.format(failing.map((block) => block.label.toLowerCase()))}: el total del periodo difiere de «${otherLabel.toLowerCase()}».`
    : "Cuadra: el total del periodo coincide dentro de la tolerancia.";

  return (
    <Drawer
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      title={displayText(row.person) || `Matrícula ${row.employeeNumber}`}
      description={`Matrícula ${displayText(row.employeeNumber)} · Cuadre del Registro`}
      size="lg"
    >
      <div className="flex min-w-0 flex-col gap-6">
        <section
          aria-label="Conclusión"
          className={cn("rounded-xl border p-4", failing.length ? "border-destructive/25 bg-destructive/5" : "border-emerald-500/30 bg-emerald-500/5")}
        >
          <p className="text-base font-semibold text-foreground text-pretty">{title}</p>
          {displayText(row.detail) ? <p className="mt-2 text-sm text-muted-foreground text-pretty">{displayText(row.detail)}</p> : null}
        </section>

        <dl className="grid min-w-0 grid-cols-2 gap-x-4 gap-y-3">
          <DetailField label="Estado" value={<StatusPill status={row.status} />} />
          <DetailField label="Centro" value={row.workplace} />
          <DetailField label="Puesto" value={row.position} />
          <DetailField label="Categoría" value={row.category} />
        </dl>

        <section aria-labelledby="cuadre-amounts-title" className="flex flex-col gap-2">
          <div>
            <h3 id="cuadre-amounts-title" className="text-sm font-semibold text-foreground">Importes del Excel</h3>
            <p className="text-xs text-muted-foreground">En rojo, lo que supera la tolerancia de {formatEuro(tolerance)}.</p>
          </div>
          <MoneyTable
            caption={`Periodo completo frente a ${otherLabel.toLowerCase()}`}
            leftLabel="Periodo completo"
            rightLabel={otherLabel}
            tolerance={tolerance}
            rows={[...row.blocks, row.total].map((block) => ({ label: block.label, left: block.period, right: block.other, diff: block.difference }))}
          />
        </section>

        {row.breakdownSource ? <AiExplanationPanel type="internalExcelCheck" payload={buildInternalExcelExplainPayload(row.breakdownSource)} /> : null}
      </div>
    </Drawer>
  );
}

function DiffCell({ value, tolerance }: Readonly<{ value: number; tolerance: number }>) {
  return <span className={cn("font-mono", toleranceDiffClass(value, tolerance))}>{formatEuro(value)}</span>;
}

export function CuadreExcelView() {
  const { result } = useAppState();
  const [mode, setMode] = useState<CuadreMode>("breakdown");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [selected, setSelected] = useState<CuadreRow | undefined>();
  const tolerance = result?.summary.tolerance ?? 1;
  const activeMode = MODES.find((item) => item.id === mode) ?? MODES[0];

  const namesById = useMemo(
    () => new Map((result?.people ?? []).map((row) => [row.employeeNumber, displayText(row.person)])),
    [result?.people],
  );
  const breakdownRows = useMemo(
    () => (result?.internalExcelChecks ?? []).map((row) => fromBreakdown(row, namesById.get(row.employeeNumber))),
    [namesById, result?.internalExcelChecks],
  );
  const normalizedSource = result?.internalExcelNormalizedVariablesChecks;
  const normalizedRows = useMemo(
    () => (normalizedSource ?? []).map((row) => fromNormalized(row, namesById.get(row.employeeNumber))),
    [namesById, normalizedSource],
  );
  const modeRows = mode === "breakdown" ? breakdownRows : normalizedRows;
  const searchedRows = useMemo(() => {
    const needle = normalizeComparableText(query.trim());
    if (!needle) return modeRows;
    return modeRows.filter((row) =>
      [row.employeeNumber, row.person, row.workplace, row.position, row.category].some((value) => normalizeComparableText(displayText(value)).includes(needle)),
    );
  }, [modeRows, query]);
  const visibleRows = status ? searchedRows.filter((row) => row.status === status) : searchedRows;

  const columns = useMemo<TableProps<CuadreRow>["columns"]>(
    () => [
      {
        key: "person",
        header: "Persona",
        sortable: true,
        sortValue: (row) => displayText(row.person) || row.employeeNumber,
        cell: (row) => (
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate font-medium text-foreground">{displayText(row.person) || `Matrícula ${row.employeeNumber}`}</span>
            <span className="truncate text-xs text-muted-foreground">
              {[displayText(row.employeeNumber), displayText(row.workplace)].filter(Boolean).join(" · ")}
            </span>
          </span>
        ),
      },
      {
        key: "status",
        header: "Estado",
        width: "170px",
        sortable: true,
        sortValue: (row) => row.status,
        cell: (row) => <StatusPill status={row.status} />,
      },
      ...["Salario", "C. Salarial", "Extrasalarial"].map((label, index) => ({
        key: `diff-${index}`,
        header: `Dif. ${label.toLowerCase()}`,
        width: "140px",
        align: "right" as const,
        sortable: true,
        sortValue: (row: CuadreRow) => Math.abs(row.blocks[index]?.difference ?? 0),
        cell: (row: CuadreRow) => <DiffCell value={row.blocks[index]?.difference ?? 0} tolerance={tolerance} />,
      })),
      {
        key: "total",
        header: "Dif. total",
        width: "140px",
        align: "right",
        sortable: true,
        sortValue: (row) => Math.abs(row.total.difference),
        cell: (row) => <DiffCell value={row.total.difference} tolerance={tolerance} />,
      },
    ],
    [tolerance],
  );

  if (!result) {
    return (
      <EmptyState
        icon={<FileCheck2 />}
        title="No hay análisis activo"
        description="Sube el Registro Retributivo en Inicio para comprobar si el propio Excel cuadra."
      />
    );
  }

  const legacyWithoutNormalized = mode === "normalizedVariables" && normalizedSource === undefined;

  return (
    <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-5 pb-6">
      <header>
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Cuadre del Registro</h2>
        <p className="mt-1 max-w-3xl text-sm text-muted-foreground text-pretty">
          Comprueba que el Excel del Registro Retributivo es coherente consigo mismo: que el total de cada persona coincide con las cifras que lo
          componen. No usa los recibos.
        </p>
      </header>

      <ModeCards
        mode={mode}
        onChange={(next) => {
          setMode(next);
          setStatus("");
        }}
        results={{
          breakdown: { total: breakdownRows.length, failing: notOkCount(breakdownRows) },
          normalizedVariables: normalizedSource ? { total: normalizedRows.length, failing: notOkCount(normalizedRows) } : undefined,
        }}
      />

      {legacyWithoutNormalized ? (
        <Callout status="info" title="Este análisis no incluye esta comprobación">
          Se añadió después de crear el análisis. Vuelve a analizar el Excel para generarla.
        </Callout>
      ) : !modeRows.length ? (
        <EmptyState
          icon={<FileCheck2 />}
          title="No hay filas que comprobar"
          description="El Excel del Registro Retributivo no tiene personas con importes para este cuadre."
        />
      ) : (
        <>
          <CuadreVerdict rows={modeRows} tolerance={tolerance} mode={activeMode} />

          <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <StatusChips rows={searchedRows} value={status} onChange={setStatus} />
            <Input
              id="cuadre-search"
              type="search"
              aria-label="Buscar en Cuadre Reg."
              value={query}
              onChange={setQuery}
              placeholder="Matrícula, nombre o centro"
              leftIcon={<Search className="size-4" aria-hidden="true" />}
              className="min-w-0 sm:w-72"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Diferencia = periodo completo − {activeMode.otherLabel.toLowerCase()}. Pulsa una fila para ver los importes.
          </p>

          <div data-slot="table-viewport" className="min-w-0">
            <Table
              key={mode}
              data={[...visibleRows]}
              columns={columns}
              getRowId={(row) => row.employeeNumber}
              defaultSort={{ key: "total", direction: "desc" }}
              height={520}
              rowHeight={56}
              className="min-w-0"
              emptyState={<EmptyState title="Ninguna persona coincide con la búsqueda." />}
              onRowActivate={setSelected}
              getRowAriaLabel={(row) => `Ver cuadre de ${displayText(row.person) || row.employeeNumber}`}
            />
          </div>
        </>
      )}

      {selected ? <CuadreDrawer row={selected} tolerance={tolerance} otherLabel={activeMode.otherLabel} onClose={() => setSelected(undefined)} /> : null}
    </div>
  );
}
