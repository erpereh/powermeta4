"use client";
import { useState, type ReactNode } from "react";
import {
  Button,
  ButtonLink,
  Checkbox,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/system";
import type { PayrollReportRun, PayrollReportRunKey } from "@/types/payroll-report";
import type { Parameters } from "@/lib/payroll-reconciliation/types";
import {
  ALL_REPORTS,
  NO_RUN,
  periodLabel,
  previousCandidate,
  reportRunLabel,
  runId,
  runKey,
  sortRuns,
} from "./selection";

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
function ExecutionChoice({
  label,
  value,
  onChange,
  items,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  items: { id: string; name: string; disabled?: boolean }[];
  disabled: boolean;
}) {
  return (
    <div className="min-w-0 space-y-1">
      <span className="text-sm font-medium">{label}</span>
      <Combobox
        value={value}
        onValueChange={(next) => onChange(next || NO_RUN)}
        disabled={disabled}
      >
        <ComboboxTrigger>
          <ComboboxInput aria-label={label} placeholder={`Buscar ${label.toLocaleLowerCase()}`} />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList ariaLabel={label}>
            {items.map((item) => (
              <ComboboxItem
                key={item.id}
                value={item.id}
                textValue={item.name}
                keywords={[item.name]}
                disabled={item.disabled}
                className="whitespace-normal break-words"
              >
                {item.name}
              </ComboboxItem>
            ))}
            <ComboboxEmpty>Sin ejecuciones que coincidan con la búsqueda.</ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export function SelectionForm({
  runs,
  demo,
  busy,
  initial,
  catalogLoading = false,
  catalogError = "",
  onRetryCatalog,
  onSubmit,
}: {
  runs: PayrollReportRun[];
  demo: boolean;
  busy: boolean;
  catalogLoading?: boolean;
  catalogError?: string;
  onRetryCatalog?: () => void;
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
  const [demoPeriod, setDemoPeriod] = useState(
    initial?.period ?? new Date().toISOString().slice(0, 7),
  );
  const [title, setTitle] = useState(initial?.title ?? "Cuadre mensual");
  const [report, setReport] = useState(initial?.current.reportId ?? ALL_REPORTS);
  const [currentId, setCurrentId] = useState(runId(initial?.current));
  const [previousId, setPreviousId] = useState(runId(initial?.previous));
  const [confirmedFor, setConfirmedFor] = useState<string | null>(null);
  const catalogReady = !catalogLoading && !catalogError;
  const reportRuns = sortRuns(
    runs.filter((run) => report === ALL_REPORTS || report === run.reportId),
  );
  const current = reportRuns.find((run) => runId(run) === currentId && run.hasData);
  const period = demo ? demoPeriod : (current?.accruedOn.slice(0, 7) ?? "");
  const priorRuns = sortRuns(runs.filter((run) => current && run.accruedOn.slice(0, 7) < period));
  const previous = priorRuns.find((run) => runId(run) === previousId && run.hasData);
  const samePeriod = !initial || !current || period === initial.period;
  const validSelection = demo
    ? Boolean(period)
    : Boolean(catalogReady && current && samePeriod && (previousId === NO_RUN || previous));
  const confirmationKey = JSON.stringify({ report, current, previous, period, previousId });
  const confirmed = validSelection && confirmedFor === confirmationKey;
  const reportIds = [...new Set(runs.map((run) => run.reportId))].sort((a, b) =>
    a.localeCompare(b, "es"),
  );
  const options = (candidates: PayrollReportRun[]) =>
    candidates.map((run) => ({
      id: runId(run),
      name: reportRunLabel(run),
      disabled: !run.hasData,
    }));
  const chooseCurrent = (value: string) => {
    setCurrentId(value);
    setConfirmedFor(null);
    const run = reportRuns.find((candidate) => runId(candidate) === value && candidate.hasData);
    setPreviousId(run ? runId(previousCandidate(runs, run)) : NO_RUN);
  };
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (confirmed && !busy)
          onSubmit({
            title,
            period,
            currentKey: current ? runKey(current) : undefined,
            previousKey: previous ? runKey(previous) : null,
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
          readOnly={Boolean(initial)}
        />
        {demo && (
          <Input
            label="Mes de nómina"
            type="month"
            value={demoPeriod}
            onChange={(value) => {
              setDemoPeriod(value);
              setConfirmedFor(null);
            }}
            required
            disabled={Boolean(initial)}
          />
        )}
      </div>
      {demo ? (
        <p className="rounded-lg bg-muted p-3 text-sm">
          Muestra ficticia de desarrollo. No consulta PeopleNet ni representa datos reales.
        </p>
      ) : (
        <>
          {catalogLoading && (
            <p role="status">Cargando las ejecuciones disponibles de PeopleNet…</p>
          )}
          {catalogError && (
            <p role="alert" className="text-sm text-destructive">
              {catalogError}
            </p>
          )}
          {catalogReady && !runs.length && (
            <p role="status">
              No hay ejecuciones guardadas en la sociedad activa. Consulta Resultados de nómina o
              genera el informe en PeopleNet y actualiza el catálogo.
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            <ButtonLink href="/tools/reports/resultados-nomina" variant="outline" size="sm">
              Abrir Resultados de nómina
            </ButtonLink>
            {onRetryCatalog && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={busy || catalogLoading}
                onClick={() => {
                  setConfirmedFor(null);
                  onRetryCatalog();
                }}
              >
                {catalogError ? "Reintentar catálogo" : "Actualizar catálogo"}
              </Button>
            )}
          </div>
          <ExecutionChoice
            label="Informe"
            value={report}
            onChange={(value) => {
              setReport(value === NO_RUN ? ALL_REPORTS : value);
              setCurrentId(NO_RUN);
              setPreviousId(NO_RUN);
              setConfirmedFor(null);
            }}
            disabled={busy || !catalogReady || !runs.length}
            items={[
              { id: ALL_REPORTS, name: "Todos los informes" },
              ...reportIds.map((id) => ({
                id,
                name: `${id} · ${runs.find((run) => run.reportId === id)?.reportName ?? "Informe"}`,
              })),
            ]}
          />
          <ExecutionChoice
            label="Ejecución actual"
            value={currentId}
            onChange={chooseCurrent}
            disabled={busy || !catalogReady || !reportRuns.some((run) => run.hasData)}
            items={[{ id: NO_RUN, name: "Selecciona una ejecución" }, ...options(reportRuns)]}
          />
          {catalogReady && runs.length > 0 && !reportRuns.some((run) => run.hasData) && (
            <p role="status">
              No hay ejecuciones con datos de este informe. Las ejecuciones vacías no pueden
              analizarse. Consulta Resultados de nómina o genera el informe en PeopleNet y actualiza
              el catálogo.
            </p>
          )}
          {reportRuns.some((run) => !run.hasData) && (
            <p className="text-sm text-muted-foreground">
              Las ejecuciones marcadas «Sin datos» no se pueden seleccionar.
            </p>
          )}
          <Input
            label="Mes de nómina"
            value={periodLabel(period)}
            readOnly
            placeholder="Se completa al elegir la ejecución actual"
          />
          <p className="text-sm text-muted-foreground">
            El mes se obtiene de la fecha de acumulación de la ejecución elegida; no de la fecha en
            que se generó el informe.
          </p>
          {!samePeriod && initial && (
            <p role="alert" className="text-sm text-destructive">
              Este expediente corresponde a {periodLabel(initial.period)}. Selecciona una ejecución
              de ese mes; para otro periodo crea un expediente nuevo. Las instantáneas guardadas se
              conservan.
            </p>
          )}
          {catalogReady && currentId !== NO_RUN && !current && (
            <p role="alert">
              La ejecución guardada ya no está disponible con datos en el catálogo. Selecciona otra;
              el expediente no se modificará hasta confirmar.
            </p>
          )}
          <ExecutionChoice
            label="Ejecución anterior"
            value={previousId}
            onChange={(value) => {
              setPreviousId(value);
              setConfirmedFor(null);
            }}
            disabled={busy || !catalogReady || !current}
            items={[
              { id: NO_RUN, name: "Sin anterior: dejar controles mensuales pendientes" },
              ...options(priorRuns),
            ]}
          />
          {current && previousId === NO_RUN && (
            <p className="text-sm text-muted-foreground">
              Sin ejecución anterior seleccionada. Puedes continuar: los controles mensuales
              quedarán pendientes.
            </p>
          )}
          {current && previousId !== NO_RUN && !previous && (
            <p role="alert">
              La ejecución anterior ya no está disponible o no corresponde a un mes anterior. Elige
              otra o continúa sin anterior.
            </p>
          )}
          <p className="text-sm text-muted-foreground">
            Comprueba tipo de paga, frecuencia, fechas y población. El resultado guardado puede
            contener filtros que no constan en el catálogo. La propuesta de anterior no se confirma
            automáticamente.
          </p>
        </>
      )}
      <Checkbox
        checked={confirmed}
        onCheckedChange={(checked) => setConfirmedFor(checked ? confirmationKey : null)}
        disabled={busy || !validSelection}
        label={
          demo
            ? "Confirmo que trabajaré con datos ficticios"
            : "Confirmo las ejecuciones y el alcance de su población"
        }
      />
      <Button type="submit" disabled={busy || !confirmed || !title.trim()}>
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
