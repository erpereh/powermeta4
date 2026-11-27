"use client";

/**
 * Cambio de puesto o categoría: reproduce el tipo de modificación del empleado
 * `02` de PeopleNet. Lee la situación actual del rol, deja preparar el cambio y
 * muestra el plan de grabación. **No graba**: el envío queda deshabilitado
 * porque la única escritura ERP aprobada es el alta de personas.
 */
import { useCallback, useId, useMemo, useState, useTransition, type FormEvent } from "react";
import { Lock, Search } from "lucide-react";

import { getJobChangePlanAction, getJobChangeSituationAction } from "@/app/actions/job-change";
import {
  Button,
  Callout,
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  Input,
  RadioGroup,
  RadioGroupItem,
  Section,
  Surface,
  Table,
  type TableProps,
} from "@/components/system";
import type {
  HireCatalogOption,
  HireCatalogSource,
  HireCatalogState,
} from "@/lib/meta4/hire/catalogs";
import {
  END_OF_TIME,
  JOB_CHANGE_HISTORY_SPECS,
  type JobChangeFieldId,
} from "@/lib/meta4/job-change/fields";
import type {
  JobChangeOperation,
  JobChangePlan,
  JobChangeSituation,
} from "@/lib/meta4/job-change/types";

type PositionChoice = "job" | "position";
type OccupationType = "hours" | "ejc" | "headcount";

type FormState = {
  cutDate: string;
  reason: string;
  positionChoice: PositionChoice;
  occupationType: OccupationType;
  occupationHours: string;
  occupationEjc: string;
  occupationHeadcount: string;
  values: Partial<Record<JobChangeFieldId, string>>;
};

const OPERATION_LABEL = {
  insert: "Inserta",
  update: "Actualiza",
  close: "Cierra",
} as const;

const MODE_LABEL = {
  "new-role": "Rol nuevo (la fecha de corte no coincide con el inicio del rol)",
  "update-role": "Actualización del rol actual (la fecha de corte es el inicio del rol)",
} as const;

const EMPTY = "—";

const formatDate = (value: string): string => {
  if (value === "") return EMPTY;
  if (value.startsWith(END_OF_TIME)) return "Vigente";
  const [year, month, day] = value.slice(0, 10).split("-");
  return year && month && day ? `${day}/${month}/${year}` : value;
};

const today = (): string => new Date().toISOString().slice(0, 10);

/** Lista de catálogo de PeopleNet con búsqueda por ID o nombre. */
function CatalogSelect({
  label,
  options,
  value,
  onValueChange,
  disabled = false,
}: {
  label: string;
  options: readonly HireCatalogOption[];
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
}) {
  const id = useId();
  return (
    <div className="min-w-0 space-y-1.5">
      <span id={`${id}-label`} className="block text-xs font-medium text-muted-foreground">
        {label}
      </span>
      <Combobox value={value} onValueChange={onValueChange} disabled={disabled}>
        <ComboboxTrigger className="h-11 rounded-full">
          <ComboboxInput
            aria-label={label}
            aria-labelledby={`${id}-label`}
            placeholder={disabled ? "Catálogo no disponible" : "Buscar por ID o nombre"}
          />
        </ComboboxTrigger>
        <ComboboxContent>
          <ComboboxList ariaLabel={label}>
            {options.map((option) => (
              <ComboboxItem key={option.id} value={option.id} textValue={option.name}>
                <span className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-3">
                  <span className="truncate tabular-nums">{option.id}</span>
                  <span className="min-w-0 truncate text-foreground">{option.name}</span>
                </span>
              </ComboboxItem>
            ))}
            <ComboboxEmpty>
              {options.length === 0 ? "Catálogo vacío en PeopleNet" : "Sin resultados"}
            </ComboboxEmpty>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

const OPERATION_COLUMNS: TableProps<JobChangeOperation & { id: string }>["columns"] = [
  { key: "table", header: "Tabla", width: "26%", cell: (row) => <code>{row.table}</code> },
  {
    key: "kind",
    header: "Operación",
    width: "12%",
    cell: (row) => OPERATION_LABEL[row.kind],
  },
  { key: "label", header: "Dato", width: "20%" },
  {
    key: "slice",
    header: "Tramo",
    width: "18%",
    cell: (row) => `${formatDate(row.startDate)} – ${formatDate(row.endDate)}`,
  },
  {
    key: "columns",
    header: "Columnas",
    cell: (row) => (
      <span className="text-xs">
        {row.columns.map((column) => `${column.column} = ${column.value ?? "NULL"}`).join(" · ")}
      </span>
    ),
  },
];

export function UsersJobChange({ catalogs }: { catalogs: HireCatalogState }) {
  const [employeeId, setEmployeeId] = useState("");
  const [situation, setSituation] = useState<JobChangeSituation | null>(null);
  const [plan, setPlan] = useState<JobChangePlan | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [reading, startReading] = useTransition();
  const [preparing, startPreparing] = useTransition();
  const [form, setForm] = useState<FormState>({
    cutDate: today(),
    reason: "",
    positionChoice: "job",
    occupationType: "hours",
    occupationHours: "",
    occupationEjc: "",
    occupationHeadcount: "",
    values: {},
  });

  const options = useCallback(
    (source: HireCatalogSource): readonly HireCatalogOption[] =>
      catalogs.status === "ready" ? (catalogs.catalogs[source] ?? []) : [],
    [catalogs],
  );

  const nameOf = useCallback(
    (field: JobChangeFieldId, id: string | null): string => {
      if (!id) return EMPTY;
      const source = JOB_CHANGE_HISTORY_SPECS.find((entry) => entry.id === field)?.catalog;
      const found = source ? options(source).find((option) => option.id === id) : undefined;
      return found ? `${id} · ${found.name}` : id;
    },
    [options],
  );

  const search = (event: FormEvent) => {
    event.preventDefault();
    setMessage(null);
    setPlan(null);
    startReading(async () => {
      const result = await getJobChangeSituationAction(employeeId);
      if (!result.ok) {
        setSituation(null);
        setMessage(result.message);
        return;
      }
      setSituation(result.situation);
      const position = result.situation.fields.find((field) => field.field === "position");
      const slice = position?.slices[0];
      setForm((previous) => ({
        ...previous,
        cutDate: previous.cutDate || today(),
        positionChoice: result.situation.role.internalRoleType === "0" ? "position" : "job",
        occupationHours: slice?.extras.SCO_NUM_HOURS ?? "",
        occupationEjc: slice?.extras.SCO_NUM_EJC ?? "",
        occupationHeadcount: slice?.extras.SCO_NUM_HEADCOUNT ?? "",
        values: {},
      }));
    });
  };

  const prepare = () => {
    if (!situation) return;
    setMessage(null);
    startPreparing(async () => {
      const result = await getJobChangePlanAction({ ...form, employeeId: situation.employeeId });
      if (!result.ok) {
        setPlan(null);
        setMessage(result.message);
        return;
      }
      setSituation(result.situation);
      setPlan(result.plan);
    });
  };

  const setValue = (field: JobChangeFieldId, value: string) =>
    setForm((previous) => ({ ...previous, values: { ...previous.values, [field]: value } }));

  const editable = useMemo(
    () =>
      JOB_CHANGE_HISTORY_SPECS.filter(
        (spec) =>
          spec.derived !== true &&
          spec.readOnly !== true &&
          (spec.id === "job"
            ? form.positionChoice === "job"
            : spec.id === "position"
              ? form.positionChoice === "position"
              : true),
      ),
    [form.positionChoice],
  );

  const operations = useMemo(
    () =>
      (plan?.operations ?? []).map((operation, index) => ({
        ...operation,
        id: `${operation.table}-${operation.kind}-${index}`,
      })),
    [plan],
  );

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6 px-4 py-5 sm:px-6">
      <Callout
        title="Esta operación no graba en PeopleNet"
        status="info"
        aria-label="Aviso de solo preparación"
      >
        Reproduce el tipo de modificación del empleado <code>02</code> «Cambio de puesto/posición»
        de Meta4 y muestra las filas que grabaría la categoría <code>SAVE_HIRE</code>. La escritura
        todavía no está aprobada: el envío queda deshabilitado.
      </Callout>

      {catalogs.status === "unavailable" ? (
        <Callout status="error" title="Catálogos no disponibles">
          {catalogs.message}
        </Callout>
      ) : null}

      <Section title="Persona" description="Matrícula de la sociedad activa.">
        <Surface>
          <form onSubmit={search} className="flex flex-wrap items-end gap-3">
            <Input
              label="Matrícula"
              name="employeeId"
              value={employeeId}
              onChange={setEmployeeId}
              autoComplete="off"
              placeholder="Ej. 1023"
            />
            <Button
              type="submit"
              aria-label="Leer situación actual"
              disabled={reading || employeeId.trim() === ""}
              aria-busy={reading}
            >
              <Search aria-hidden="true" className="size-4" />
              {reading ? "Leyendo…" : "Leer situación actual"}
            </Button>
          </form>
        </Surface>
      </Section>

      {message ? (
        <Callout status="error" title="No se ha podido continuar">
          {message}
        </Callout>
      ) : null}

      {situation ? (
        <>
          <Section
            title="Situación actual"
            description={`${situation.personName ?? situation.employeeId} · periodo ${situation.period.order} · rol ${situation.role.order} (${formatDate(situation.role.startDate)} – ${formatDate(situation.role.endDate)})`}
          >
            <Surface>
              <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {situation.fields.map((field) => {
                  const slice = field.slices[0];
                  return (
                    <div key={field.field} className="min-w-0">
                      <dt className="text-xs font-medium text-muted-foreground">{field.label}</dt>
                      <dd className="min-w-0 text-sm text-foreground">
                        {slice ? nameOf(field.field, slice.value) : EMPTY}
                        <span className="block text-xs text-muted-foreground">
                          {slice
                            ? `${formatDate(slice.startDate)} – ${formatDate(slice.endDate)} · ${field.table}`
                            : `Sin tramos · ${field.table}`}
                        </span>
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </Surface>
          </Section>

          <Section
            title="Cambio"
            description="La fecha de corte decide si Meta4 crea un rol nuevo o actualiza el actual."
          >
            <Surface>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  label="Fecha de corte"
                  type="date"
                  value={form.cutDate}
                  onChange={(value) => setForm((previous) => ({ ...previous, cutDate: value }))}
                />
                <CatalogSelect
                  label="Motivo del cambio"
                  options={options("changeReason")}
                  value={form.reason}
                  onValueChange={(value) => setForm((previous) => ({ ...previous, reason: value }))}
                  disabled={catalogs.status !== "ready"}
                />
                <div className="sm:col-span-2">
                  <span className="block text-xs font-medium text-muted-foreground">
                    Tipo de rol interno
                  </span>
                  <RadioGroup
                    className="mt-2 flex gap-6"
                    value={form.positionChoice}
                    onValueChange={(value) => {
                      if (value === "job" || value === "position") {
                        setForm((previous) => ({ ...previous, positionChoice: value }));
                      }
                    }}
                  >
                    <RadioGroupItem value="job" label="Puesto" />
                    <RadioGroupItem value="position" label="Posición" />
                  </RadioGroup>
                </div>
                {editable.map((spec) => (
                  <CatalogSelect
                    key={spec.id}
                    label={spec.label}
                    options={spec.catalog ? options(spec.catalog) : []}
                    value={form.values[spec.id] ?? ""}
                    onValueChange={(value) => setValue(spec.id, value)}
                    disabled={catalogs.status !== "ready" || !spec.catalog}
                  />
                ))}
                {form.positionChoice === "position" ? (
                  <div className="sm:col-span-2 space-y-3 rounded-2xl border border-border p-4">
                    <span className="block text-xs font-medium text-muted-foreground">
                      Ocupación de la posición
                    </span>
                    <RadioGroup
                      className="flex gap-6"
                      value={form.occupationType}
                      onValueChange={(value) => {
                        if (value === "hours" || value === "ejc" || value === "headcount") {
                          setForm((previous) => ({ ...previous, occupationType: value }));
                        }
                      }}
                    >
                      <RadioGroupItem value="hours" label="Horas" />
                      <RadioGroupItem value="ejc" label="EJC" />
                      <RadioGroupItem value="headcount" label="Efectivos" />
                    </RadioGroup>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <Input
                        label="Horas"
                        value={form.occupationHours}
                        onChange={(value) =>
                          setForm((previous) => ({ ...previous, occupationHours: value }))
                        }
                      />
                      <Input
                        label="EJC"
                        value={form.occupationEjc}
                        onChange={(value) =>
                          setForm((previous) => ({ ...previous, occupationEjc: value }))
                        }
                      />
                      <Input
                        label="Efectivos"
                        value={form.occupationHeadcount}
                        onChange={(value) =>
                          setForm((previous) => ({ ...previous, occupationHeadcount: value }))
                        }
                      />
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  aria-label="Preparar el cambio"
                  onClick={prepare}
                  disabled={preparing}
                  aria-busy={preparing}
                >
                  {preparing ? "Preparando…" : "Preparar el cambio"}
                </Button>
                <span className="text-xs text-muted-foreground">
                  Centro de coste y agrupación de categoría no se eligen: Meta4 los deriva o los
                  conserva.
                </span>
              </div>
            </Surface>
          </Section>
        </>
      ) : null}

      {plan ? (
        <Section title="Plan de grabación" description={MODE_LABEL[plan.mode]}>
          <div className="space-y-4">
            {plan.errors.length > 0 ? (
              <Callout status="error" title="El cambio no se puede preparar">
                <ul className="list-disc space-y-1 pl-4">
                  {plan.errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </Callout>
            ) : null}
            {plan.changes.length > 0 ? (
              <Surface title="Cambios">
                <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {plan.changes.map((change) => (
                    <div key={change.field} className="min-w-0">
                      <dt className="text-xs font-medium text-muted-foreground">{change.label}</dt>
                      <dd className="text-sm text-foreground">
                        {nameOf(change.field, change.from)} → {nameOf(change.field, change.to)}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Surface>
            ) : null}
            {operations.length > 0 ? (
              <Surface
                title={`Filas que grabaría Meta4 (rol ${plan.roleOrder})`}
                description={
                  plan.roleName ? `Nombre del rol: ${plan.roleName}` : "El rol conserva su nombre."
                }
                flush
              >
                <Table
                  data={operations}
                  columns={OPERATION_COLUMNS}
                  getRowId={(row) => row.id}
                  autoHeight
                  variableRowHeight
                  emptyState="Sin filas que grabar."
                />
              </Surface>
            ) : null}
            {plan.warnings.length > 0 ? (
              <Callout status="info" title="Avisos">
                <ul className="list-disc space-y-1 pl-4">
                  {plan.warnings.map((warning) => (
                    <li key={warning}>{warning}</li>
                  ))}
                </ul>
              </Callout>
            ) : null}
            <div className="flex flex-wrap items-center gap-3">
              <Button type="button" disabled aria-disabled="true">
                <Lock aria-hidden="true" className="size-4" />
                Grabar en PeopleNet
              </Button>
              <span className="text-xs text-muted-foreground">
                La escritura del cambio de puesto no está aprobada: contra PeopleNet solo se
                ejecutan consultas.
              </span>
            </div>
          </div>
        </Section>
      ) : null}
    </div>
  );
}
