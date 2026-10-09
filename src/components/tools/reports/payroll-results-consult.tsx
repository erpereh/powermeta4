"use client";

import { useId, useMemo, useRef, useState, useTransition } from "react";
import { FileSpreadsheet } from "lucide-react";

import { getPayrollReportRunAction } from "@/app/actions/payroll-reports";
import {
  Badge,
  Callout,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  EmptyState,
  Input,
  Section,
  Table,
  type ComboboxFilter,
  type TableProps,
} from "@/components/system";
import { payrollReportRunId } from "@/lib/payroll-reports/run-key";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import type { PayrollReportRun, PayrollReportRunDetail } from "@/types/payroll-report";

import { PayrollResultDetail } from "./payroll-result-detail";
import { foldReportText, formatIsoDay, formatRunAt } from "./payroll-results-format";

type DetailState =
  | { status: "idle" }
  | { status: "loading"; id: string }
  | { status: "error"; id: string; message: string }
  | { status: "ready"; id: string; detail: PayrollReportRunDetail };

const ALL_REPORTS = "all";
const ROW_HEIGHT = 44;
const MAX_TABLE_HEIGHT = 10 * ROW_HEIGHT;

/** Busca por id y nombre del informe, sin tildes ni mayúsculas. */
const reportFilter: ComboboxFilter = (value, query, keywords) => {
  const needle = foldReportText(query.trim());
  return !needle || foldReportText([value, ...keywords].join(" ")).includes(needle);
};

const reportLabel = (run: Pick<PayrollReportRun, "reportId" | "reportName">) =>
  run.reportName ? `${run.reportId} · ${run.reportName}` : run.reportId;

/** «Resultados para Informes»: ejecuciones guardadas en PeopleNet y su resultado. */
export function PayrollResultsConsult({
  runs,
  runsError,
}: {
  runs: readonly PayrollReportRun[];
  runsError: string | null;
}) {
  const scopeLabel = getWorkspaceScopeLabel(useWorkspaceStore((state) => state.auth));
  const reportLabelId = useId();
  const [report, setReport] = useState(ALL_REPORTS);
  const [search, setSearch] = useState("");
  const [state, setState] = useState<DetailState>({ status: "idle" });
  const [pending, startTransition] = useTransition();
  const detailRef = useRef<HTMLElement>(null);

  const reports = useMemo(() => {
    const unique = new Map<string, string>();
    for (const run of runs)
      if (!unique.has(run.reportId)) unique.set(run.reportId, reportLabel(run));
    return [...unique.entries()].sort(([a], [b]) => a.localeCompare(b, "es"));
  }, [runs]);

  const visibleRuns = useMemo(() => {
    const query = foldReportText(search.trim());
    return runs.filter(
      (run) =>
        (report === ALL_REPORTS || run.reportId === report) &&
        (!query ||
          foldReportText(
            [
              reportLabel(run),
              formatRunAt(run.runAt),
              formatIsoDay(run.accruedOn),
              run.payFrequency,
              run.payKind ?? "",
            ].join(" "),
          ).includes(query)),
    );
  }, [runs, report, search]);

  const columns = useMemo<TableProps<PayrollReportRun>["columns"]>(
    () => [
      {
        key: "reportId",
        header: "Id Informe",
        width: "100px",
        sortable: true,
        cell: (run) => <span className="font-mono text-sm">{run.reportId}</span>,
      },
      {
        key: "reportName",
        header: "Informe",
        width: "240px",
        sortable: true,
        sortValue: (run) => run.reportName ?? "",
        cell: (run) => <span className="text-sm">{run.reportName ?? "—"}</span>,
      },
      {
        key: "runAt",
        header: "Fecha de ejecución",
        width: "180px",
        sortable: true,
        cell: (run) => <span className="text-sm tabular-nums">{formatRunAt(run.runAt)}</span>,
      },
      {
        key: "accruedOn",
        header: "Fecha acumulación",
        width: "150px",
        sortable: true,
        cell: (run) => <span className="text-sm tabular-nums">{formatIsoDay(run.accruedOn)}</span>,
      },
      {
        key: "payFrequency",
        header: "Frecuencia",
        width: "110px",
        sortable: true,
        cell: (run) => <span className="font-mono text-sm">{run.payFrequency}</span>,
      },
      {
        key: "payKind",
        header: "Tipo de paga",
        width: "190px",
        sortable: true,
        sortValue: (run) => run.payKind ?? "",
        cell: (run) => <span className="text-sm">{run.payKind ?? "—"}</span>,
      },
      {
        key: "hasData",
        header: "Resultado",
        width: "120px",
        sortable: true,
        sortValue: (run) => (run.hasData ? 1 : 0),
        cell: (run) =>
          run.hasData ? (
            <span className="text-sm">Con datos</span>
          ) : (
            <Badge status="neutral" size="sm">
              Sin datos
            </Badge>
          ),
      },
    ],
    [],
  );

  const openRun = (run: PayrollReportRun) => {
    const id = payrollReportRunId(run);
    setState({ status: "loading", id });
    startTransition(async () => {
      try {
        const result = await getPayrollReportRunAction({
          reportId: run.reportId,
          runAt: run.runAt,
          accruedOn: run.accruedOn,
          payFrequency: run.payFrequency,
        });
        setState(
          result.ok
            ? { status: "ready", id, detail: result.detail }
            : { status: "error", id, message: result.message },
        );
      } catch {
        setState({
          status: "error",
          id,
          message: "No se ha podido cargar el resultado del informe desde PeopleNet.",
        });
      }
      requestAnimationFrame(() =>
        detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      );
    });
  };

  const tableHeight = Math.min(
    MAX_TABLE_HEIGHT,
    Math.max(ROW_HEIGHT * 3, visibleRuns.length * ROW_HEIGHT + ROW_HEIGHT),
  );

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted-foreground">
          {scopeLabel}
        </span>
        <p className="text-sm text-muted-foreground">
          Resultados guardados de los informes de nómina de PeopleNet. Elige una ejecución para ver
          sus datos y descargar el Excel.
        </p>
      </div>

      {runsError ? (
        <Callout status="error" title="Resultados no disponibles">
          {runsError}
        </Callout>
      ) : (
        <Section title="Resultados para informes">
          <div className="space-y-3">
            <div className="grid gap-3 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:items-end">
              <div className="flex min-w-0 flex-col gap-1.5">
                <span id={reportLabelId} className="text-sm font-medium text-foreground">
                  Informe
                </span>
                <Combobox
                  value={report}
                  onValueChange={(value) => setReport(value || ALL_REPORTS)}
                  filter={reportFilter}
                >
                  <ComboboxTrigger className="h-11 rounded-full">
                    <ComboboxInput aria-labelledby={reportLabelId} placeholder="Buscar informe" />
                  </ComboboxTrigger>
                  <ComboboxContent>
                    <ComboboxList ariaLabel="Informe">
                      <ComboboxItem
                        value={ALL_REPORTS}
                        textValue="Todos los informes"
                        keywords={["todos"]}
                      >
                        Todos los informes
                      </ComboboxItem>
                      {reports.map(([id, label]) => (
                        <ComboboxItem key={id} value={id} textValue={label} keywords={[id, label]}>
                          {label}
                        </ComboboxItem>
                      ))}
                      <ComboboxEmpty>Sin resultados</ComboboxEmpty>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
              <Input
                type="search"
                value={search}
                onChange={setSearch}
                placeholder="Buscar por fecha, paga o tipo..."
                aria-label="Buscar ejecuciones"
              />
            </div>
            <Table
              data={visibleRuns}
              columns={columns}
              getRowId={payrollReportRunId}
              defaultSort={{ key: "runAt", direction: "desc" }}
              rowHeight={ROW_HEIGHT}
              height={tableHeight}
              emptyState="No hay ejecuciones que coincidan."
              onRowActivate={openRun}
              getRowAriaLabel={(run) =>
                `Ver ${reportLabel(run)} ejecutado el ${formatRunAt(run.runAt)}`
              }
              scrollAreaLabel="Ejecuciones de informes"
              className="min-w-0 rounded-xl"
            />
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {visibleRuns.length === runs.length
                ? `${runs.length} ejecuciones`
                : `${visibleRuns.length} de ${runs.length} ejecuciones`}
            </p>
          </div>
        </Section>
      )}

      <section ref={detailRef} aria-label="Resultado del informe" aria-busy={pending}>
        {state.status === "idle" ? (
          <EmptyState
            icon={<FileSpreadsheet aria-hidden="true" />}
            title="Sin ejecución seleccionada"
            description="Selecciona una ejecución de la lista para ver su resultado."
          />
        ) : null}
        {state.status === "loading" ? (
          <p role="status" className="text-sm text-muted-foreground">
            Cargando el resultado desde PeopleNet…
          </p>
        ) : null}
        {state.status === "error" ? (
          <Callout status="error" title="No se ha podido mostrar el resultado">
            {state.message}
          </Callout>
        ) : null}
        {state.status === "ready" ? (
          <PayrollResultDetail key={state.id} detail={state.detail} />
        ) : null}
      </section>
    </div>
  );
}
