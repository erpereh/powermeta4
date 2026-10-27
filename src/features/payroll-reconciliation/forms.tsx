"use client";
import { useState, type ReactNode } from "react";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/system";
import type { PayrollReportRun, PayrollReportRunKey } from "@/types/payroll-report";
import type { Parameters } from "@/lib/payroll-reconciliation/types";

export function Choice({
  label,
  value,
  onChange,
  items,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: { id: string; name: string }[];
  disabled?: boolean;
}) {
  return (
    <div className="min-w-0 space-y-1">
      <span className="text-sm font-medium">{label}</span>
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
export function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="min-w-0 space-y-4 rounded-xl border bg-card p-4 sm:p-6">
      <h2 className="text-base font-semibold">{title}</h2>
      {children}
    </section>
  );
}
const keyOf = ({
  reportId,
  runAt,
  accruedOn,
  payFrequency,
}: PayrollReportRun): PayrollReportRunKey => ({ reportId, runAt, accruedOn, payFrequency });
const sameRun = (a: PayrollReportRun, b?: PayrollReportRunKey) =>
  b && JSON.stringify(keyOf(a)) === JSON.stringify(b);
const precedingMonth = (period: string) => {
  const date = new Date(`${period}-01T00:00:00Z`);
  date.setUTCMonth(date.getUTCMonth() - 1);
  return date.toISOString().slice(0, 7);
};

export function SelectionForm({
  runs,
  demo,
  busy,
  initial,
  onSubmit,
}: {
  runs: PayrollReportRun[];
  demo: boolean;
  busy: boolean;
  initial?: {
    title: string;
    period: string;
    current: PayrollReportRunKey;
    previous?: PayrollReportRunKey;
  };
  onSubmit: (input: {
    title: string;
    period: string;
    currentKey?: PayrollReportRunKey;
    previousKey?: PayrollReportRunKey | null;
    populationConfirmed: true;
    demo: boolean;
  }) => void;
}) {
  const [period, setPeriod] = useState(initial?.period ?? new Date().toISOString().slice(0, 7));
  const [title, setTitle] = useState(initial?.title ?? "Cuadre mensual");
  const [report, setReport] = useState(initial?.current.reportId ?? "all");
  const [current, setCurrent] = useState(
    initial ? String(runs.findIndex((run) => sameRun(run, initial.current))) : "none",
  );
  const [previous, setPrevious] = useState(
    initial?.previous ? String(runs.findIndex((run) => sameRun(run, initial.previous))) : "none",
  );
  const [confirmed, setConfirmed] = useState(false);
  const reportIds = [...new Set(runs.map((run) => run.reportId))];
  const options = (predicate: (run: PayrollReportRun) => boolean) =>
    runs.flatMap((run, index) =>
      predicate(run)
        ? [
            {
              id: String(index),
              name: `${run.reportId} · ${run.reportName ?? "Informe"} · paga ${run.accruedOn} · ${run.payFrequency} · ${run.payKind ?? "Tipo no informado"} · ejecución ${run.runAt}`,
            },
          ]
        : [],
    );
  const chooseCurrent = (value: string) => {
    setCurrent(value);
    setConfirmed(false);
    const run = runs[Number(value)];
    if (run) {
      const found = runs.findIndex(
        (candidate) =>
          candidate.hasData &&
          candidate.reportId === run.reportId &&
          candidate.payFrequency === run.payFrequency &&
          candidate.accruedOn.slice(0, 7) === precedingMonth(period),
      );
      setPrevious(found < 0 ? "none" : String(found));
    }
  };
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (confirmed)
          onSubmit({
            title,
            period,
            currentKey: runs[Number(current)] ? keyOf(runs[Number(current)]) : undefined,
            previousKey:
              previous === "none"
                ? null
                : runs[Number(previous)]
                  ? keyOf(runs[Number(previous)])
                  : undefined,
            populationConfirmed: true,
            demo,
          });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label="Nombre del expediente"
          value={title}
          onChange={setTitle}
          required
          maxLength={140}
        />
        <Input
          label="Mes de nómina"
          type="month"
          value={period}
          onChange={(value) => {
            setPeriod(value);
            setCurrent("none");
            setPrevious("none");
            setConfirmed(false);
          }}
          required
          disabled={Boolean(initial)}
        />
      </div>
      {demo ? (
        <p className="rounded-lg bg-muted p-3 text-sm">
          Muestra ficticia de desarrollo. No consulta PeopleNet ni representa datos reales.
        </p>
      ) : (
        <>
          <Choice
            label="Informe"
            value={report}
            onChange={(value) => {
              setReport(value);
              setCurrent("none");
              setPrevious("none");
              setConfirmed(false);
            }}
            items={[
              { id: "all", name: "Todos los informes" },
              ...reportIds.map((id) => ({
                id,
                name: `${id} · ${runs.find((run) => run.reportId === id)?.reportName ?? "Informe"}`,
              })),
            ]}
          />
          <Choice
            label="Ejecución actual"
            value={current}
            onChange={chooseCurrent}
            items={[
              { id: "none", name: "Selecciona una ejecución" },
              ...options(
                (run) =>
                  run.hasData &&
                  run.accruedOn.startsWith(period) &&
                  (report === "all" || report === run.reportId),
              ),
            ]}
          />
          <Choice
            label="Ejecución anterior"
            value={previous}
            onChange={(value) => {
              setPrevious(value);
              setConfirmed(false);
            }}
            items={[
              { id: "none", name: "Sin anterior: dejar controles mensuales pendientes" },
              ...options(
                (run) =>
                  run.hasData &&
                  run.accruedOn.slice(0, 7) < period &&
                  !sameRun(run, runs[Number(current)]),
              ),
            ]}
          />
          <p className="text-sm text-muted-foreground">
            Comprueba tipo de paga, frecuencia, fechas y población. El resultado guardado puede
            contener filtros que no constan en el catálogo. La propuesta de anterior no se confirma
            automáticamente.
          </p>
        </>
      )}
      <Checkbox
        checked={confirmed}
        onCheckedChange={setConfirmed}
        label={
          demo
            ? "Confirmo que trabajaré con datos ficticios"
            : "Confirmo las ejecuciones y el alcance de su población"
        }
      />
      <Button
        type="submit"
        disabled={
          busy || !confirmed || !period || !title.trim() || (!demo && !runs[Number(current)])
        }
      >
        {initial ? "Actualizar instantáneas" : "Crear expediente y analizar"}
      </Button>
    </form>
  );
}

export function ParametersForm({
  parameters,
  busy,
  onSave,
}: {
  parameters: Parameters;
  busy: boolean;
  onSave: (parameters: Parameters) => void;
}) {
  const [draft, setDraft] = useState(parameters);
  const field = (
    key:
      | "tolerance"
      | "percentageTolerance"
      | "teleworkRate"
      | "teleworkDays"
      | "mealRate"
      | "mealDays"
      | "cardRate"
      | "cardBase",
    label: string,
  ) => (
    <Input
      key={key}
      label={label}
      inputMode="decimal"
      value={draft[key] ?? ""}
      onChange={(value) => setDraft((current) => ({ ...current, [key]: value || null }))}
    />
  );
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSave(draft);
      }}
    >
      <p className="text-sm text-muted-foreground">
        Se aplican solo al mes del expediente. Los campos vacíos conservan el control pendiente.
        Confirma las vigencias y usa excepciones por persona cuando corresponda.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {field("tolerance", "Tolerancia EUR (propuesta: 0,01)")}
        {field("percentageTolerance", "Tolerancia puntos porcentuales")}
        {field("teleworkRate", "Teletrabajo: tarifa por día")}
        {field("teleworkDays", "Teletrabajo: días con derecho")}
        {field("mealRate", "Comida: tarifa por día")}
        {field("mealDays", "Comida: días de derecho antes de ausencias")}
        {field("cardRate", "Tarjeta: tarifa del periodo")}
        {field("cardBase", "Tarjeta: base del periodo")}
      </div>
      <Choice
        label="Paga extra para devengo completo"
        value={draft.extraMetric}
        onChange={(value) => setDraft({ ...draft, extraMetric: value })}
        items={[1, 2, 3, 4].map((number) => ({
          id: `extra${number}`,
          name: `Paga extra ${number}`,
        }))}
      />
      <Input
        label="Matrículas con devengo completo acreditado (separadas por coma)"
        value={draft.extraFullEmployeeIds.join(", ")}
        onChange={(value) =>
          setDraft({
            ...draft,
            extraFullEmployeeIds: value
              .split(",")
              .map((id) => id.trim())
              .filter(Boolean),
          })
        }
      />
      <Checkbox
        checked={draft.anniversaryFullBase}
        onCheckedChange={(value) => setDraft({ ...draft, anniversaryFullBase: value })}
        label="Confirmo elegibilidad y salario base completo para los aniversarios del listado y entidad del periodo"
      />
      <Checkbox
        checked={draft.rulesConfirmed}
        onCheckedChange={(value) => setDraft({ ...draft, rulesConfirmed: value })}
        label="Confirmo reglas, parámetros y vigencia para este periodo"
      />
      <Button type="submit" disabled={busy}>
        Guardar parámetros y recalcular
      </Button>
    </form>
  );
}
