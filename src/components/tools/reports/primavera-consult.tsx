"use client";

import { useMemo, useState, useTransition, type FormEvent } from "react";
import { Download, Scale } from "lucide-react";

import { getPrimaveraAction } from "@/app/actions/primavera";
import {
  Badge,
  Button,
  Callout,
  Checkbox,
  EmptyState,
  Input,
  Section,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Surface,
  Table,
  type TableProps,
} from "@/components/system";
import { PRIMAVERA_MONTHS, round2, type PrimaveraParameters } from "@/lib/primavera/cuadre";
import { getWorkspaceScopeLabel } from "@/lib/workspaces/scope-label";
import { useWorkspaceStore } from "@/stores/use-workspace-store";
import type {
  PrimaveraMonth,
  PrimaveraReport,
  PrimaveraRow,
  PrimaveraStatus,
} from "@/types/primavera";

import { formatMoney } from "./quinquenal-format";

type ConsultState =
  | { status: "idle" }
  | { status: "error"; message: string }
  | { status: "ready"; parameters: PrimaveraParameters; report: PrimaveraReport };

const WHOLE_YEAR = "all";
const ROW_HEIGHT = 44;
const MAX_TABLE_HEIGHT = 14 * ROW_HEIGHT;

const MONTH_ITEMS = PRIMAVERA_MONTHS.map((name, index) => ({
  id: String(index + 1),
  name,
}));

const STATUS_BADGE: Record<PrimaveraStatus, { status: "success" | "danger"; label: string }> = {
  ok: { status: "success", label: "OK" },
  mismatch: { status: "danger", label: "MAL" },
  empty: { status: "danger", label: "Sin nómina" },
};

const monthName = (month: number): string => PRIMAVERA_MONTHS[month - 1] ?? String(month);

function StatusBadge({ status }: { status: PrimaveraStatus }) {
  const badge = STATUS_BADGE[status];
  return (
    <Badge status={badge.status} size="sm">
      {badge.label}
    </Badge>
  );
}

function MonthChoice({
  label,
  value,
  onChange,
  items,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: readonly { id: string; name: string }[];
  disabled?: boolean;
}) {
  return (
    <div className="min-w-0 space-y-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger aria-label={label} className="w-full">
          <SelectValue placeholder="Seleccionar" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

const money = (value: number) => (
  <span className="font-mono text-sm tabular-nums">{formatMoney(round2(value))}</span>
);

const difference = (value: number) => {
  const rounded = round2(value);
  return (
    <span
      className={
        rounded === 0
          ? "font-mono text-sm tabular-nums text-muted-foreground"
          : "font-mono text-sm font-semibold tabular-nums text-destructive"
      }
    >
      {formatMoney(rounded)}
    </span>
  );
};

type EmployeeColumns = TableProps<PrimaveraRow>["columns"];

const EMPLOYEE_COLUMNS: EmployeeColumns = [
  {
    key: "employeeId",
    header: "Empleado",
    width: "110px",
    sortable: true,
    cell: (row) => <span className="font-mono text-sm tabular-nums">{row.employeeId}</span>,
  },
  {
    key: "earnings",
    header: "Devengos",
    align: "right",
    sortable: true,
    width: "130px",
    cell: (row) => money(row.earnings),
  },
  {
    key: "earningsConcepts",
    header: "Suma R",
    align: "right",
    sortable: true,
    width: "130px",
    cell: (row) => money(row.earningsConcepts),
  },
  {
    key: "earningsDiff",
    header: "Dif.",
    align: "right",
    sortable: true,
    width: "110px",
    sortValue: (row) => row.earnings - row.earningsConcepts,
    cell: (row) => difference(row.earnings - row.earningsConcepts),
  },
  {
    key: "deductions",
    header: "Retenidos",
    align: "right",
    sortable: true,
    width: "130px",
    cell: (row) => money(row.deductions),
  },
  {
    key: "deductionsConcepts",
    header: "Suma D",
    align: "right",
    sortable: true,
    width: "130px",
    cell: (row) => money(row.deductionsConcepts),
  },
  {
    key: "deductionsDiff",
    header: "Dif.",
    align: "right",
    sortable: true,
    width: "110px",
    sortValue: (row) => row.deductions - row.deductionsConcepts,
    cell: (row) => difference(row.deductions - row.deductionsConcepts),
  },
  {
    key: "net",
    header: "Líquido",
    align: "right",
    sortable: true,
    width: "130px",
    cell: (row) => money(row.net),
  },
  {
    key: "ok",
    header: "Estado",
    align: "center",
    sortable: true,
    width: "110px",
    sortValue: (row) => (row.ok ? 1 : 0),
    cell: (row) => <StatusBadge status={row.ok ? "ok" : "mismatch"} />,
  },
];

const SUMMARY_COLUMNS: TableProps<PrimaveraMonth>["columns"] = [
  {
    key: "month",
    header: "Mes",
    cell: (row) => <span className="text-sm">{monthName(row.month)}</span>,
  },
  {
    key: "employees",
    header: "Empleados",
    align: "right",
    cell: (row) => <span className="text-sm tabular-nums">{row.rows.length}</span>,
  },
  {
    key: "mismatches",
    header: "Descuadres",
    align: "right",
    cell: (row) => <span className="text-sm tabular-nums">{row.mismatches}</span>,
  },
  {
    key: "status",
    header: "Estado",
    align: "center",
    cell: (row) => <StatusBadge status={row.status} />,
  },
];

function MonthTotals({ month }: { month: PrimaveraMonth }) {
  const total = (pick: (row: PrimaveraRow) => number) =>
    round2(month.rows.reduce((sum, row) => sum + pick(row), 0));
  const items = [
    ["Devengos", total((row) => row.earnings)],
    ["Suma R", total((row) => row.earningsConcepts)],
    ["Retenidos", total((row) => row.deductions)],
    ["Suma D", total((row) => row.deductionsConcepts)],
    ["Líquido", total((row) => row.net)],
  ] as const;
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-5">
      {items.map(([label, value]) => (
        <div key={label} className="min-w-0 rounded-lg border border-border px-3 py-2">
          <dt className="text-xs text-muted-foreground">{label}</dt>
          <dd className="truncate font-mono text-sm tabular-nums">{formatMoney(value)}</dd>
        </div>
      ))}
    </dl>
  );
}

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

/** Exporta a Excel como `Cuadres Portugal.cmd`; el servidor vuelve a leer PeopleNet. */
function PrimaveraDownload({ parameters }: { parameters: PrimaveraParameters }) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const download = async () => {
    setPending(true);
    setError(null);
    try {
      const response = await fetch("/api/reports/primavera/export", {
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
        "Primavera.xlsx";
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
        {pending ? "Preparando…" : "Exportar a Excel"}
      </Button>
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function PrimaveraResults({
  parameters,
  report,
}: {
  parameters: PrimaveraParameters;
  report: PrimaveraReport;
}) {
  const firstWithIssue =
    report.months.find((month) => month.status !== "ok") ?? report.months.at(-1);
  const [selectedMonth, setSelectedMonth] = useState(String(firstWithIssue?.month ?? ""));
  const [onlyMismatches, setOnlyMismatches] = useState(false);

  const month = report.months.find((entry) => String(entry.month) === selectedMonth);
  const rows = useMemo(
    () => (month ? (onlyMismatches ? month.rows.filter((row) => !row.ok) : month.rows) : []),
    [month, onlyMismatches],
  );
  const badMonths = report.months.filter((entry) => entry.status !== "ok").length;
  const tableHeight = Math.min(
    MAX_TABLE_HEIGHT,
    Math.max(ROW_HEIGHT * 3, rows.length * ROW_HEIGHT + ROW_HEIGHT),
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <PrimaveraDownload parameters={parameters} />
      </div>
      <Callout
        status={badMonths === 0 ? "success" : "error"}
        title={
          badMonths === 0
            ? "Todo cuadrado"
            : `${badMonths} ${badMonths === 1 ? "mes" : "meses"} con descuadre o sin nómina`
        }
      >
        {`${report.society} · entidad ${report.legalEntity} · ${report.year}${report.database ? ` · base ${report.database}` : ""}. Devengos = suma R, retenidos = suma D y devengos − retenidos = líquido (tolerancia 0,01).`}
      </Callout>

      <Section title="Resumen por mes">
        <Table
          data={report.months}
          columns={SUMMARY_COLUMNS}
          getRowId={(row) => String(row.month)}
          rowHeight={ROW_HEIGHT}
          autoHeight
          onRowActivate={(row) => setSelectedMonth(String(row.month))}
          getRowAriaLabel={(row) => `Ver los empleados de ${monthName(row.month)}`}
          scrollAreaLabel="Resumen del cuadre por mes"
          className="min-w-0 rounded-xl"
        />
      </Section>

      <Section
        title={month ? `${monthName(month.month)} ${report.year}` : "Empleados"}
        actions={month ? <StatusBadge status={month.status} /> : null}
      >
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-[minmax(0,16rem)_auto] sm:items-end">
            <MonthChoice
              label="Mes"
              value={selectedMonth}
              onChange={setSelectedMonth}
              items={report.months.map((entry) => ({
                id: String(entry.month),
                name: monthName(entry.month),
              }))}
            />
            <Checkbox
              checked={onlyMismatches}
              onCheckedChange={setOnlyMismatches}
              label="Solo descuadres"
            />
          </div>
          {month && month.rows.length > 0 ? (
            <>
              <MonthTotals month={month} />
              <Table
                data={rows}
                columns={EMPLOYEE_COLUMNS}
                getRowId={(row) => row.employeeId}
                defaultSort={{ key: "employeeId", direction: "asc" }}
                rowHeight={ROW_HEIGHT}
                height={tableHeight}
                emptyState="No hay descuadres en este mes."
                scrollAreaLabel={`Empleados de ${monthName(month.month)}`}
                className="min-w-0 rounded-xl"
              />
              <p className="text-sm text-muted-foreground" aria-live="polite">
                {`${month.rows.length} empleados, ${month.mismatches} con descuadre. Todos los pagos del mes sumados.`}
              </p>
            </>
          ) : (
            <Callout status="error" title="Sin nómina">
              No hay nóminas de la entidad portuguesa con fecha de pago en este mes.
            </Callout>
          )}
        </div>
      </Section>
    </div>
  );
}

/** Informe «Primavera»: cuadre de la nómina de Portugal cargada desde Primavera. */
export function PrimaveraConsult() {
  const scopeLabel = getWorkspaceScopeLabel(useWorkspaceStore((state) => state.auth));
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [fromMonth, setFromMonth] = useState(WHOLE_YEAR);
  const [toMonth, setToMonth] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [state, setState] = useState<ConsultState>({ status: "idle" });
  const [pending, startTransition] = useTransition();

  const changeFrom = (value: string) => {
    setFromMonth(value);
    if (value === WHOLE_YEAR) setToMonth("");
    else if (toMonth === "" || Number(toMonth) < Number(value)) setToMonth(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedYear = Number(year.trim());
    if (!/^\d{4}$/.test(year.trim()) || parsedYear < 2000 || parsedYear > 2100) {
      setError("Indica un año entre 2000 y 2100.");
      return;
    }
    setError(undefined);
    const parameters: PrimaveraParameters =
      fromMonth === WHOLE_YEAR
        ? { year: parsedYear }
        : {
            year: parsedYear,
            fromMonth: Number(fromMonth),
            toMonth: Number(toMonth || fromMonth),
          };
    startTransition(async () => {
      try {
        const result = await getPrimaveraAction(parameters);
        if (!result.ok) setState({ status: "error", message: result.message });
        else if (result.report.months.length === 0) {
          setState({
            status: "error",
            message: `No hay ninguna nómina de Portugal en ${parsedYear} en la sociedad activa.`,
          });
        } else setState({ status: "ready", parameters, report: result.report });
      } catch {
        setState({
          status: "error",
          message: "No se ha podido cargar el cuadre de Primavera desde PeopleNet.",
        });
      }
    });
  };

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-5 sm:px-6">
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted-foreground">
          {scopeLabel}
        </span>
        <p className="text-sm text-muted-foreground">
          Cuadre de la nómina de Portugal cargada desde Primavera: totales de PeopleNet frente a la
          suma de los conceptos R y D, por empleado y mes de pago. Solo lectura.
        </p>
      </div>

      <Section title="Parámetros de la consulta">
        <Surface>
          <form noValidate onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3 md:items-start">
              <Input
                label="Año"
                name="year"
                inputMode="numeric"
                autoComplete="off"
                value={year}
                onChange={setYear}
                error={error}
                required
              />
              <MonthChoice
                label="Desde"
                value={fromMonth}
                onChange={changeFrom}
                items={[{ id: WHOLE_YEAR, name: "Año entero" }, ...MONTH_ITEMS]}
              />
              <MonthChoice
                label="Hasta"
                value={toMonth}
                onChange={setToMonth}
                items={MONTH_ITEMS.filter(
                  (item) => fromMonth === WHOLE_YEAR || Number(item.id) >= Number(fromMonth),
                )}
                disabled={fromMonth === WHOLE_YEAR}
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

      <section aria-label="Resultado del cuadre de Primavera" aria-busy={pending}>
        {state.status === "idle" ? (
          <EmptyState
            icon={<Scale aria-hidden="true" />}
            title="Sin consulta"
            description="Elige el año y, si quieres, un mes o un rango, y pulsa Consultar."
          />
        ) : null}
        {state.status === "error" ? (
          <Callout status="error" title="No se ha podido mostrar el cuadre">
            {state.message}
          </Callout>
        ) : null}
        {state.status === "ready" ? (
          <PrimaveraResults
            key={`${state.report.society}-${state.report.year}-${state.report.months.length}`}
            parameters={state.parameters}
            report={state.report}
          />
        ) : null}
      </section>
    </div>
  );
}
