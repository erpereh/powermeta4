/**
 * Plan del cambio de puesto o categoría: traduce el tipo de modificación del
 * empleado `02` de Meta4 a las filas que `SAVE_HIRE` escribiría en los
 * históricos del rol. Es lógica pura, sin lecturas ni escrituras.
 *
 * Reglas traducidas del LN4 (`M4RCH_RULES3`, TI `SRCO_PA_HIRE`):
 *
 * - `SRCO_PM_VAL_NEW_ROLE_JOB_POS`: si la fecha de corte es distinta del inicio
 *   del rol se crea un rol nuevo; si coincide se actualiza el rol. El periodo
 *   siempre se actualiza, nunca se crea.
 * - `SRCO_PM_SET_PROPS_CHANGE_J_P`: `SRCO_PM_CONTROL_MAIN_ROLE = 1`, así que el
 *   rol nuevo conserva la condición de rol principal.
 * - `SHCO_SET_ROLE_NAME`: el nombre del rol es `J-<puesto>` o `P-<posición>`.
 */
import { roleName } from "../hire/direct/rules";
import {
  END_OF_TIME,
  JOB_CHANGE_HISTORY_SPECS,
  ROLE_TABLE,
  type JobChangeFieldId,
  type JobChangeHistorySpec,
} from "./fields";
import type {
  JobChangeFieldChange,
  JobChangeOperation,
  JobChangePlan,
  JobChangeRequest,
  JobChangeSituation,
  JobChangeSlice,
} from "./types";

/** Valores que Meta4 deriva al grabar y que el servidor lee aparte. */
export type JobChangeDerived = {
  /** `CALCULA_VACIOS`: agrupación de categoría del puesto nuevo. */
  categoryGroup: string | null;
  /** Nombre del puesto o de la posición elegidos, para el nombre del rol. */
  targetName: string | null;
};

export type JobChangePlanInput = {
  situation: JobChangeSituation;
  request: JobChangeRequest;
  derived: JobChangeDerived;
  /** Tablas de auditoría por tabla física, del modelo del alta. */
  auditTables: Readonly<Record<string, string | undefined>>;
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const isDate = (value: string): boolean =>
  ISO_DATE.test(value) && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));

/** Día anterior, que es como Meta4 cierra el tramo que deja de valer. */
export const previousDay = (value: string): string => {
  const date = new Date(`${value}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() - 1);
  return date.toISOString().slice(0, 10);
};

const before = (left: string, right: string): boolean => left < right;

/** Tramo que cubre la fecha; si ninguno la cubre, el último que empezó antes. */
export const sliceAt = (slices: readonly JobChangeSlice[], date: string): JobChangeSlice | null => {
  const covering = slices.find(
    (slice) => !before(date, slice.startDate) && !before(slice.endDate, date),
  );
  if (covering) return covering;
  const earlier = slices.filter((slice) => !before(date, slice.startDate));
  return earlier[0] ?? null;
};

const requestedValue = (request: JobChangeRequest, field: JobChangeFieldId): string =>
  (request.values[field] ?? "").trim();

const occupationValue = (request: JobChangeRequest): { column: string; value: string } => {
  if (request.occupationType === "ejc")
    return { column: "SCO_NUM_EJC", value: request.occupationEjc.trim() };
  if (request.occupationType === "headcount")
    return { column: "SCO_NUM_HEADCOUNT", value: request.occupationHeadcount.trim() };
  return { column: "SCO_NUM_HOURS", value: request.occupationHours.trim() };
};

/** `SCO_ID_COMPL`: 0 horas, 1 EJC, 2 efectivos, como el asistente de Meta4. */
const complementOf = (request: JobChangeRequest): string =>
  request.occupationType === "hours" ? "0" : request.occupationType === "ejc" ? "1" : "2";

const DECIMAL_2 = /^\d{1,4}(?:[.,]\d{1,2})?$/;
const INTEGER = /^\d{1,4}$/;

const slicesOf = (situation: JobChangeSituation, field: JobChangeFieldId) =>
  situation.fields.find((entry) => entry.field === field)?.slices ?? [];

const validate = (input: JobChangePlanInput): string[] => {
  const { situation, request } = input;
  const errors: string[] = [];
  const { cutDate } = request;
  if (!isDate(cutDate)) {
    errors.push("La fecha de corte no es una fecha válida.");
    return errors;
  }
  if (before(cutDate, situation.role.startDate)) {
    errors.push(`La fecha de corte es anterior al inicio del rol (${situation.role.startDate}).`);
  }
  if (situation.role.endDate !== END_OF_TIME && before(situation.role.endDate, cutDate)) {
    errors.push(`La fecha de corte es posterior al fin del rol (${situation.role.endDate}).`);
  }
  if (before(cutDate, situation.period.startDate)) {
    errors.push(
      `La fecha de corte es anterior al alta del periodo (${situation.period.startDate}).`,
    );
  }
  if (situation.period.endDate !== END_OF_TIME && before(situation.period.endDate, cutDate)) {
    errors.push(
      `La fecha de corte es posterior a la baja del periodo (${situation.period.endDate}).`,
    );
  }
  // El rol se queda sin puesto o sin posición si la rama elegida no tiene ninguno.
  if (request.positionChoice === "job") {
    const hasJob =
      requestedValue(request, "job") !== "" ||
      sliceAt(slicesOf(situation, "job"), cutDate) !== null;
    if (!hasJob) errors.push("Indica el puesto que quieres asignar.");
  } else {
    const current = sliceAt(slicesOf(situation, "position"), cutDate);
    const requested = requestedValue(request, "position");
    if (requested === "" && current === null) {
      errors.push("Indica la posición que quieres asignar.");
    }
    const occupation = occupationValue(request);
    const pattern = request.occupationType === "headcount" ? INTEGER : DECIMAL_2;
    const amount = Number(occupation.value.replace(",", "."));
    if (occupation.value === "") {
      if (requested !== "" || current === null) {
        errors.push("Indica la ocupación de la posición (horas, EJC o efectivos).");
      }
    } else if (!pattern.test(occupation.value)) {
      errors.push("La ocupación de la posición no tiene un valor válido.");
    } else if (request.occupationType === "hours" && (amount <= 0 || amount > 168)) {
      errors.push("Las horas de la posición deben estar entre 0 y 168.");
    }
  }
  return errors;
};

const changesOf = (input: JobChangePlanInput): JobChangeFieldChange[] => {
  const { situation, request } = input;
  const changes: JobChangeFieldChange[] = [];
  for (const spec of JOB_CHANGE_HISTORY_SPECS) {
    if (spec.derived === true || spec.readOnly === true) continue;
    if (spec.id === "position" && request.positionChoice === "job") continue;
    if (spec.id === "job" && request.positionChoice === "position") continue;
    const requested = requestedValue(request, spec.id);
    if (requested === "") continue;
    const slice = sliceAt(slicesOf(situation, spec.id), request.cutDate);
    const from = slice?.value ?? null;
    if (from === requested) continue;
    changes.push({ field: spec.id, label: spec.label, from, to: requested });
  }
  return changes;
};

/** Valor que el tramo nuevo debe llevar: el pedido, el derivado o el actual. */
const targetValue = (
  input: JobChangePlanInput,
  spec: JobChangeHistorySpec,
  slice: JobChangeSlice | null,
): string | null => {
  if (spec.id === "categoryGroup") return input.derived.categoryGroup;
  if (spec.derived === true) return slice?.value ?? null;
  const requested = requestedValue(input.request, spec.id);
  return requested === "" ? (slice?.value ?? null) : requested;
};

/** Código de puesto con el que se graba el tramo (clave de las tablas derivadas). */
const jobCodeOf = (input: JobChangePlanInput): string | null =>
  requestedValue(input.request, "job") ||
  sliceAt(slicesOf(input.situation, "job"), input.request.cutDate)?.value ||
  null;

/** Columnas que el tramo nuevo escribe, además de la clave. */
const sliceColumns = (
  input: JobChangePlanInput,
  spec: JobChangeHistorySpec,
  slice: JobChangeSlice | null,
): { column: string; value: string | null }[] => {
  const columns: { column: string; value: string | null }[] = [
    { column: spec.valueColumn, value: targetValue(input, spec, slice) },
  ];
  if (spec.reasonColumn) {
    columns.push({
      column: spec.reasonColumn,
      value: input.request.reason.trim() || (slice?.reason ?? null),
    });
  }
  for (const key of spec.keyColumns ?? []) {
    const value =
      key === "ID_JOB_CODE" || key === "STD_ID_JOB_CODE"
        ? jobCodeOf(input)
        : (slice?.keys[key] ?? null);
    columns.push({ column: key, value });
  }
  if (spec.id === "position" && input.request.positionChoice === "position") {
    const occupation = occupationValue(input.request);
    columns.push({ column: "SCO_ID_COMPL", value: complementOf(input.request) });
    columns.push({ column: occupation.column, value: occupation.value.replace(",", ".") });
  }
  return columns;
};

const roleColumns = (
  input: JobChangePlanInput,
  name: string | null,
): { column: string; value: string | null }[] => {
  const { situation, request } = input;
  return [
    { column: "SCO_OR_HR_PER", value: String(situation.period.order) },
    { column: "SCO_DT_START", value: request.cutDate },
    { column: "SCO_DT_END", value: situation.role.endDate || END_OF_TIME },
    { column: "SCO_MAIN_ROLE", value: situation.role.main ? "1" : "0" },
    { column: "SCO_ID_INT_RO_TY", value: request.positionChoice === "job" ? "1" : "0" },
    { column: "SCO_ID_REA_CHANG", value: request.reason.trim() || situation.role.reason },
    { column: "SCO_N_ROLEESP", value: name },
  ];
};

/**
 * Prepara el cambio. No escribe nada: devuelve las filas que Meta4 grabaría,
 * los cambios detectados, los avisos y los motivos que lo impiden.
 */
export const planJobChange = (input: JobChangePlanInput): JobChangePlan => {
  const { situation, request, auditTables } = input;
  const errors = validate(input);
  const changes = changesOf(input);
  if (errors.length === 0 && changes.length === 0) {
    errors.push("No hay ningún cambio respecto a la situación actual.");
  }
  const newRole = request.cutDate !== situation.role.startDate;
  const mode = newRole ? "new-role" : "update-role";
  const roleOrder = newRole ? situation.nextRoleOrder : situation.role.order;
  const name = input.derived.targetName
    ? roleName(request.positionChoice, input.derived.targetName)
    : situation.role.name;
  const warnings: string[] = [];
  const operations: JobChangeOperation[] = [];
  if (errors.length > 0) {
    return {
      mode,
      cutDate: request.cutDate,
      roleOrder,
      previousRoleOrder: situation.role.order,
      roleName: name,
      changes,
      operations,
      warnings,
      errors,
    };
  }

  const audit = (table: string) => {
    const found = auditTables[table];
    return found ? { audit: found } : {};
  };
  const changed = new Set<JobChangeFieldId>(changes.map((change) => change.field));
  if (changed.has("job")) {
    changed.add("categoryGroup");
    if (slicesOf(situation, "categoryEquivalence").length > 0) changed.add("categoryEquivalence");
  }

  if (newRole) {
    operations.push({
      table: ROLE_TABLE,
      kind: "insert",
      label: "Rol",
      roleOrder,
      startDate: request.cutDate,
      endDate: situation.role.endDate || END_OF_TIME,
      columns: roleColumns(input, name),
      ...audit(ROLE_TABLE),
    });
    operations.push({
      table: ROLE_TABLE,
      kind: "close",
      label: "Rol anterior",
      roleOrder: situation.role.order,
      startDate: situation.role.startDate,
      endDate: previousDay(request.cutDate),
      columns: [{ column: "SCO_DT_END", value: previousDay(request.cutDate) }],
      ...audit(ROLE_TABLE),
    });
  } else {
    operations.push({
      table: ROLE_TABLE,
      kind: "update",
      label: "Rol",
      roleOrder,
      startDate: situation.role.startDate,
      endDate: situation.role.endDate || END_OF_TIME,
      columns: roleColumns(input, name).filter((column) => column.column !== "SCO_DT_START"),
      ...audit(ROLE_TABLE),
    });
  }

  for (const spec of JOB_CHANGE_HISTORY_SPECS) {
    if (spec.id === "position" && request.positionChoice === "job") continue;
    if (spec.id === "job" && request.positionChoice === "position") continue;
    const slices = slicesOf(situation, spec.id);
    const slice = sliceAt(slices, request.cutDate);
    const touched = changed.has(spec.id);
    // Un rol nuevo copia todos los datos del rol; una actualización solo cambia lo pedido.
    if (!newRole && !touched) continue;
    if (newRole && !touched && slice === null) continue;
    if (spec.followsExisting === true && slices.length === 0) continue;
    const endDate = slice?.endDate || END_OF_TIME;
    if (spec.id === "categoryGroup" && touched && input.derived.categoryGroup === null) {
      warnings.push(
        "La agrupación de categoría (CALCULA_VACIOS) no se ha podido calcular para el puesto nuevo.",
      );
    }
    if (spec.id === "categoryEquivalence" && touched) {
      warnings.push(
        "La equivalencia categoría/puesto la deriva Meta4 al grabar: el plan conserva el valor actual.",
      );
    }
    if (newRole) {
      operations.push({
        table: spec.table,
        kind: "insert",
        label: spec.label,
        roleOrder,
        startDate: request.cutDate,
        endDate,
        columns: sliceColumns(input, spec, slice),
        ...audit(spec.table),
      });
      if (slice && !before(slice.endDate, request.cutDate)) {
        operations.push({
          table: spec.table,
          kind: "close",
          label: `${spec.label} (rol anterior)`,
          roleOrder: situation.role.order,
          startDate: slice.startDate,
          endDate: previousDay(request.cutDate),
          columns: [{ column: spec.endColumn, value: previousDay(request.cutDate) }],
          ...audit(spec.table),
        });
      }
      continue;
    }
    // Si el valor nuevo cambia una columna de la clave, el tramo no se puede
    // actualizar: hay que cerrarlo y abrir otro con la clave nueva.
    const keyChanged = (spec.keyColumns ?? []).some((key) => {
      const next = sliceColumns(input, spec, slice).find((entry) => entry.column === key)?.value;
      return (slice?.keys[key] ?? null) !== (next ?? null);
    });
    if (slice && slice.startDate === request.cutDate && !keyChanged) {
      operations.push({
        table: spec.table,
        kind: "update",
        label: spec.label,
        roleOrder,
        startDate: slice.startDate,
        endDate: slice.endDate,
        columns: sliceColumns(input, spec, slice),
        ...audit(spec.table),
      });
      continue;
    }
    if (slice) {
      operations.push({
        table: spec.table,
        kind: "close",
        label: `${spec.label} (tramo anterior)`,
        roleOrder,
        startDate: slice.startDate,
        endDate: previousDay(request.cutDate),
        columns: [{ column: spec.endColumn, value: previousDay(request.cutDate) }],
        ...audit(spec.table),
      });
    } else {
      warnings.push(
        `${spec.label} no tiene ningún tramo vigente en el rol: el plan abre el primero.`,
      );
    }
    operations.push({
      table: spec.table,
      kind: "insert",
      label: spec.label,
      roleOrder,
      startDate: request.cutDate,
      endDate,
      columns: sliceColumns(input, spec, slice),
      ...audit(spec.table),
    });
  }

  for (const spec of JOB_CHANGE_HISTORY_SPECS) {
    const future = slicesOf(situation, spec.id).filter((slice) =>
      before(request.cutDate, slice.startDate),
    );
    if (future.length > 0) {
      warnings.push(
        `${spec.label} tiene ${future.length} tramo(s) posteriores a la fecha de corte que el plan no toca.`,
      );
    }
  }
  if (request.reason.trim() === "") {
    warnings.push("Sin motivo del cambio: Meta4 lo guarda en el rol y en los históricos.");
  }
  warnings.push(
    "El bloqueo de nómina (SRCO_PM_PAYROLL_LOCK) no se comprueba todavía: revísalo en PeopleNet antes de grabar.",
  );

  return {
    mode,
    cutDate: request.cutDate,
    roleOrder,
    previousRoleOrder: situation.role.order,
    roleName: name,
    changes,
    operations,
    warnings,
    errors,
  };
};
