/**
 * Tipos que comparten el servidor y la pantalla del cambio de puesto o
 * categoría. La situación actual sale de PeopleNet (solo `SELECT`) y el plan lo
 * calcula `plan.ts` reproduciendo el tipo de modificación `02` de Meta4.
 */
import type { JobChangeFieldId } from "./fields";

/** Un tramo de un histórico del rol tal y como está en PeopleNet. */
export type JobChangeSlice = {
  startDate: string;
  endDate: string;
  value: string | null;
  reason: string | null;
  /** Columnas de clave además de sociedad, matrícula, rol y fecha. */
  keys: Record<string, string | null>;
  /** Otras columnas del tramo que la pantalla muestra (horas, EJC, efectivos). */
  extras: Record<string, string | null>;
};

export type JobChangeFieldSituation = {
  field: JobChangeFieldId;
  label: string;
  table: string;
  slices: readonly JobChangeSlice[];
};

export type JobChangeRole = {
  order: number;
  startDate: string;
  endDate: string;
  main: boolean;
  internalRoleType: string | null;
  reason: string | null;
  name: string | null;
};

export type JobChangeSituation = {
  society: string;
  employeeId: string;
  personName: string | null;
  period: { order: number; startDate: string; endDate: string };
  role: JobChangeRole;
  /** Primer ordinal libre de rol de la persona: el que usaría un rol nuevo. */
  nextRoleOrder: number;
  fields: readonly JobChangeFieldSituation[];
};

export type JobChangeRequest = {
  employeeId: string;
  /** Fecha de corte (`SRCO_ARG_DT_HIRE`), en formato `yyyy-mm-dd`. */
  cutDate: string;
  /** Motivo del cambio (`M4SCO_X_JOB_CHG_RE`); vacío si no se indica. */
  reason: string;
  /** Rama del asistente: `SCO_ID_INT_ROLE_TYPE` 1 puesto, 0 posición. */
  positionChoice: "job" | "position";
  occupationType: "hours" | "ejc" | "headcount";
  occupationHours: string;
  occupationEjc: string;
  occupationHeadcount: string;
  /** Valor nuevo de cada campo editable; vacío significa «sin cambio». */
  values: Partial<Record<JobChangeFieldId, string>>;
};

export type JobChangeOperationKind = "insert" | "update" | "close";

export type JobChangeOperation = {
  table: string;
  kind: JobChangeOperationKind;
  /** Etiqueta funcional del dato («Puesto», «Rol»…). */
  label: string;
  roleOrder: number;
  startDate: string;
  endDate: string;
  columns: readonly { column: string; value: string | null }[];
  /** Tabla de auditoría que la LDB escribiría con esta fila. */
  audit?: string;
};

export type JobChangeFieldChange = {
  field: JobChangeFieldId;
  label: string;
  from: string | null;
  to: string | null;
};

export type JobChangePlan = {
  /** `SRCO_PM_VAL_NEW_ROLE_JOB_POS`: rol nuevo o actualización del rol actual. */
  mode: "new-role" | "update-role";
  cutDate: string;
  /** Rol sobre el que se graba. */
  roleOrder: number;
  previousRoleOrder: number;
  /** Nombre del rol (`SHCO_SET_ROLE_NAME`) cuando el rol es nuevo. */
  roleName: string | null;
  changes: readonly JobChangeFieldChange[];
  operations: readonly JobChangeOperation[];
  /** Avisos: lo que Meta4 comprueba y powermeta4 todavía no. */
  warnings: readonly string[];
  /** Motivos por los que la operación no se puede preparar. */
  errors: readonly string[];
};

export type JobChangeSituationResult =
  | { ok: true; situation: JobChangeSituation }
  | { ok: false; message: string };

export type JobChangePlanResult =
  | { ok: true; situation: JobChangeSituation; plan: JobChangePlan }
  | { ok: false; message: string };
