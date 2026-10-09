"use client";

import { useCallback, useMemo, useRef, useState, useTransition, type FormEvent } from "react";
import { CalendarRange, Download, Maximize2 } from "lucide-react";

import { getQuinquenalAction } from "@/app/actions/quinquenal";
import {
  Button,
  Callout,
  Drawer,
  EmptyState,
  Input,
  Modal,
  RadioGroup,
  RadioGroupItem,
  Section,
  Surface,
  Table,
  Tabs,
  TabsList,
  TabsTrigger,
  type TableProps,
} from "@/components/system";
import type { QuinquenalParameters } from "@/lib/quinquenal/parameters";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import type { QuinquenalReport, QuinquenalRow } from "@/types/quinquenal";

import { fullQuinquenalColumns, summaryQuinquenalColumns } from "./quinquenal-columns";
import { QuinquenalDetail } from "./quinquenal-detail";
import { foldText, fullName, legalEntityLabel } from "./quinquenal-format";

type Scope = "all" | "one";

type ConsultState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "ready"; parameters: QuinquenalParameters; report: QuinquenalReport };

const EMPLOYEE_ID_PATTERN = /^[A-Za-z0-9]{1,20}$/;
const ROW_HEIGHT = 48;
const MAX_TABLE_HEIGHT = 12 * ROW_HEIGHT;
const ALL_ENTITIES = "all";

const isScope = (value: string): value is Scope => value === "all" || value === "one";

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const saveFile = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

/** Exporta a Excel lo consultado; el servidor vuelve a leer los datos de PeopleNet. */
function QuinquenalDownload({
  parameters,
  total,
}: {
  parameters: QuinquenalParameters;
  total: number;
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const download = async () => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/reports/quinquenal/export", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parameters),
      });
      if (!response.ok) {
        const data: unknown = await response.json().catch(() => null);
        setError(
          isRecord(data) && typeof data.message === "string"
            ? data.message
            : "No se ha podido descargar el Excel.",
        );
        return;
      }
      const fileName =
        /filename="([^"]+)"/.exec(response.headers.get("content-disposition") ?? "")?.[1] ??
        "CONSULTA_QUINQUENAL.xlsx";
      saveFile(await response.blob(), fileName);
    } catch {
      setError("No se ha podido descargar el Excel.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex flex-col items-end gap-1">
      <Button
        type="button"
        variant="outline"
        onClick={() => void download()}
        disabled={pending}
        aria-busy={pending}
      >
        <Download aria-hidden="true" className="size-4" />
        {pending ? "Preparando…" : total === 1 ? "Exportar a Excel" : `Exportar ${total} a Excel`}
      </Button>
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type ResultsView = "full" | "summary";
type SortState = NonNullable<TableProps<QuinquenalRow>["sort"]>;

const DEFAULT_SORT: SortState = { key: "employeeId", direction: "asc" };

const isResultsView = (value: string): value is ResultsView =>
  value === "full" || value === "summary";

/** Alto disponible de un contenedor flexible, para la tabla de la ventana ampliada. */
function useElementHeight(fallback: number) {
  const [height, setHeight] = useState(fallback);
  const observer = useRef<ResizeObserver | null>(null);
  const ref = useCallback((element: HTMLDivElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (!element) return;
    const measure = () => {
      const next = Math.floor(element.getBoundingClientRect().height);
      if (next > 0) setHeight(next);
    };
    measure();
    observer.current = new ResizeObserver(measure);
    observer.current.observe(element);
  }, []);
  return [ref, height] as const;
}

function QuinquenalResults({ report }: { report: QuinquenalReport }) {
  const [entity, setEntity] = useState<string>(ALL_ENTITIES);
  const [search, setSearch] = useState("");
  const [view, setView] = useState<ResultsView>("full");
  const [sort, setSort] = useState<SortState | null>(DEFAULT_SORT);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [enlarged, setEnlarged] = useState(false);
  const enlargeTrigger = useRef<HTMLButtonElement>(null);
  const [enlargedBodyRef, enlargedHeight] = useElementHeight(480);

  const entityCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const row of report.rows) {
      const key = row.legalEntity ?? "";
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    return [...counts.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [report.rows]);

  const visibleRows = useMemo(() => {
    const query = foldText(search.trim());
    return report.rows.filter(
      (row) =>
        (entity === ALL_ENTITIES || (row.legalEntity ?? "") === entity) &&
        (!query ||
          foldText(row.employeeId).includes(query) ||
          foldText(fullName(row)).includes(query)),
    );
  }, [report.rows, entity, search]);

  const columns = useMemo(
    () =>
      view === "full"
        ? fullQuinquenalColumns(report.currentYear)
        : summaryQuinquenalColumns(report.currentYear),
    [view, report.currentYear],
  );

  const changeView = (value: string) => {
    if (!isResultsView(value)) return;
    setView(value);
    // Cada vista tiene sus columnas: el orden vuelve a la matrícula.
    setSort(DEFAULT_SORT);
  };

  const changeEnlarged = (open: boolean) => {
    setEnlarged(open);
    if (!open) requestAnimationFrame(() => enlargeTrigger.current?.focus());
  };

  const selected = report.rows.find((row) => row.employeeId === selectedId) ?? null;
  const tableHeight = Math.min(
    MAX_TABLE_HEIGHT,
    Math.max(ROW_HEIGHT * 3, visibleRows.length * ROW_HEIGHT + ROW_HEIGHT),
  );

  const toolbar = (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex min-w-0 flex-wrap items-center gap-2">
        <Tabs value={view} onValueChange={changeView} variant="pill">
          <TabsList aria-label="Columnas">
            <TabsTrigger value="full">Todos los campos</TabsTrigger>
            <TabsTrigger value="summary">Resumen</TabsTrigger>
          </TabsList>
        </Tabs>
        {entityCounts.length > 1 ? (
          <Tabs value={entity} onValueChange={setEntity} variant="pill">
            <TabsList aria-label="Empresa">
              <TabsTrigger value={ALL_ENTITIES}>
                Todas
                <span className="ml-1.5 tabular-nums text-muted-foreground">
                  {report.rows.length}
                </span>
              </TabsTrigger>
              {entityCounts.map(([key, count]) => (
                <TabsTrigger key={key} value={key}>
                  {legalEntityLabel(key || null)}
                  <span className="ml-1.5 tabular-nums text-muted-foreground">{count}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        ) : null}
      </div>
      <div className="flex min-w-0 items-center gap-2">
        <Input
          type="search"
          value={search}
          onChange={setSearch}
          placeholder="Buscar por matrícula o nombre..."
          aria-label="Buscar por matrícula o nombre"
          classNames={{ root: "min-w-0 flex-1 lg:w-72 lg:flex-none" }}
        />
        {!enlarged ? (
          <Button
            ref={enlargeTrigger}
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Ampliar ventana"
            title="Ampliar ventana"
            aria-haspopup="dialog"
            onClick={() => changeEnlarged(true)}
          >
            <Maximize2 className="size-4" aria-hidden="true" />
          </Button>
        ) : null}
      </div>
    </div>
  );

  const summary = (
    <p className="text-sm text-muted-foreground" aria-live="polite">
      {visibleRows.length === report.rows.length
        ? `${report.rows.length} empleados`
        : `${visibleRows.length} de ${report.rows.length} empleados`}
      . Desplaza la tabla horizontalmente para ver todas las columnas.
    </p>
  );

  const table = (height: number, inWindow: boolean) => (
    <Table
      data={visibleRows}
      columns={columns}
      getRowId={(row) => row.employeeId}
      sort={sort}
      onSortChange={setSort}
      rowHeight={ROW_HEIGHT}
      height={height}
      emptyState="No hay empleados que coincidan con la búsqueda."
      // En la ventana ampliada se ven todos los campos sin abrir otro panel.
      onRowActivate={inWindow ? undefined : (row) => setSelectedId(row.employeeId)}
      getRowAriaLabel={
        inWindow ? undefined : (row) => `Ver los cinco años de ${fullName(row) || row.employeeId}`
      }
      scrollAreaLabel="Empleados de la consulta quinquenal"
      className="min-w-0 rounded-xl"
    />
  );

  return (
    <div className="space-y-4">
      {toolbar}
      {enlarged ? (
        <div className="flex h-32 items-center justify-center rounded-xl border border-border text-sm text-muted-foreground">
          Consulta abierta en la ventana ampliada.
        </div>
      ) : (
        table(tableHeight, false)
      )}
      {summary}

      <Modal
        open={enlarged}
        onOpenChange={changeEnlarged}
        size="viewport"
        title={`Consulta quinquenal ${report.currentYear}`}
      >
        {enlarged ? (
          <div className="flex min-h-0 flex-1 flex-col gap-3">
            {toolbar}
            <div ref={enlargedBodyRef} className="min-h-0 flex-1">
              {table(enlargedHeight, true)}
            </div>
            {summary}
          </div>
        ) : null}
      </Modal>

      <Drawer
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null);
        }}
        title={selected ? fullName(selected) || selected.employeeId : "Empleado"}
        description={selected ? `Matrícula ${selected.employeeId}` : undefined}
        size="lg"
      >
        {selected ? <QuinquenalDetail row={selected} /> : null}
      </Drawer>
    </div>
  );
}

/** Ventana «Consultar quinquenal»: todos los empleados o una matrícula, con exportación. */
export function QuinquenalConsult() {
  const scopeLabel = getWorkspaceScopeLabel(useWorkspaceStore((state) => state.auth));
  const [scope, setScope] = useState<Scope>("all");
  const [employeeId, setEmployeeId] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [state, setState] = useState<ConsultState>({ status: "idle" });
  const [pending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = employeeId.trim();
    if (scope === "one" && !EMPLOYEE_ID_PATTERN.test(trimmed)) {
      setError("Indica la matrícula del empleado.");
      return;
    }
    setError(undefined);
    const parameters: QuinquenalParameters = scope === "one" ? { employeeId: trimmed } : {};
    startTransition(async () => {
      try {
        const result = await getQuinquenalAction(parameters);
        if (!result.ok) setState({ status: "error", message: result.message });
        else if (result.report.rows.length === 0) {
          setState({
            status: "error",
            message:
              scope === "one"
                ? "La matrícula no es un empleado computable de la sociedad activa."
                : "No hay empleados computables en la sociedad activa.",
          });
        } else setState({ status: "ready", parameters, report: result.report });
      } catch {
        setState({
          status: "error",
          message: "No se ha podido cargar la consulta quinquenal desde PeopleNet.",
        });
      }
    });
  };

  const single =
    state.status === "ready" && state.report.rows.length === 1 ? state.report.rows[0] : null;

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted-foreground">
          {scopeLabel}
        </span>
        <p className="text-sm text-muted-foreground">
          Coeficiente de jornada, retribución y variable del año actual y los cuatro anteriores,
          como la Consulta Quinquenal de PeopleNet.
        </p>
      </div>

      <Section title="Parámetros de la consulta">
        <Surface>
          <form noValidate onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,16rem)] md:items-end">
              <fieldset className="min-w-0 space-y-3">
                <legend className="text-sm font-medium text-foreground">Empleados</legend>
                <RadioGroup
                  value={scope}
                  onValueChange={(value) => {
                    if (isScope(value)) setScope(value);
                  }}
                >
                  <RadioGroupItem value="all" label="Todos los empleados computables" />
                  <RadioGroupItem value="one" label="Un empleado" />
                </RadioGroup>
              </fieldset>
              <Input
                label="Matrícula"
                name="employeeId"
                autoComplete="off"
                placeholder="Ej. 0579"
                value={employeeId}
                onChange={setEmployeeId}
                disabled={scope !== "one"}
                error={scope === "one" ? error : undefined}
                required={scope === "one"}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" disabled={pending} aria-busy={pending}>
                {pending ? "Consultando…" : "Consultar"}
              </Button>
            </div>
          </form>
        </Surface>
      </Section>

      <section aria-label="Resultado de la consulta quinquenal" aria-busy={pending}>
        {state.status === "idle" ? (
          <EmptyState
            icon={<CalendarRange aria-hidden="true" />}
            title="Sin consulta"
            description="Elige todos los empleados o una matrícula y pulsa Consultar."
          />
        ) : null}
        {state.status === "error" ? (
          <Callout status="error" title="No se ha podido mostrar la consulta">
            {state.message}
          </Callout>
        ) : null}
        {state.status === "ready" ? (
          <Section
            title={
              single
                ? `${fullName(single) || single.employeeId} · ${single.employeeId}`
                : "Empleados"
            }
            actions={
              <QuinquenalDownload parameters={state.parameters} total={state.report.rows.length} />
            }
          >
            {single ? (
              <QuinquenalDetail row={single} />
            ) : (
              <QuinquenalResults key={state.report.generatedOn} report={state.report} />
            )}
          </Section>
        ) : null}
      </section>
    </div>
  );
}
