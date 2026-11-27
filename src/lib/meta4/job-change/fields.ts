/**
 * Los históricos del rol que PeopleNet cambia en el tipo de modificación del
 * empleado `02` «Cambio de puesto/posición» (`M4SCO_PM_TYPE`), que se graba con
 * la categoría `SAVE_HIRE` del asistente del alta. Cada entrada es la tabla
 * física tal y como la define el modelo del alta
 * (`src/lib/meta4/hire/direct/model.generated.json`), con sus columnas de
 * vigencia, de valor y de motivo del cambio.
 *
 * Todo lo que vive aquí es declarativo y puro: las lecturas (`current.ts`) y el
 * plan (`plan.ts`) se construyen a partir de estas entradas.
 */
import type { HireCatalogSource } from "../hire/catalogs";

export type JobChangeFieldId =
  | "job"
  | "position"
  | "category"
  | "workUnit"
  | "workLocation"
  | "functionalWorkCenter"
  | "costCenter"
  | "structure"
  | "atradiusJob"
  | "atradiusCategory"
  | "categoryGroup"
  | "categoryEquivalence";

export type JobChangeHistorySpec = {
  id: JobChangeFieldId;
  label: string;
  /** Tabla física del histórico. */
  table: string;
  /** Columna de la matrícula (`SCO_ID_HR` salvo en la agrupación de categoría). */
  hrColumn: string;
  startColumn: string;
  endColumn: string;
  /** Columna con el valor que elige el usuario. */
  valueColumn: string;
  /** Columna del motivo del cambio, cuando la tabla la tiene. */
  reasonColumn?: string;
  /** Columnas que forman parte de la clave además de sociedad, matrícula, rol y fecha. */
  keyColumns?: readonly string[];
  /** Otras columnas del tramo que la pantalla muestra y el plan arrastra. */
  extraColumns?: readonly string[];
  /** Catálogo de PeopleNet que da nombre al valor. */
  catalog?: HireCatalogSource;
  /** Meta4 lo deriva del puesto: el formulario no lo pide. */
  derived?: true;
  /** Solo se escribe si la persona ya tiene tramos (depende de la sociedad). */
  followsExisting?: true;
  /** El formulario lo muestra pero no lo cambia. */
  readOnly?: true;
};

/** Orden de presentación y de ejecución, el del asistente de Meta4. */
export const JOB_CHANGE_HISTORY_SPECS: readonly JobChangeHistorySpec[] = [
  {
    id: "job",
    label: "Puesto",
    table: "M4SCO_H_HR_JOB",
    hrColumn: "SCO_ID_HR",
    startColumn: "SCO_DT_START",
    endColumn: "SCO_DT_END",
    valueColumn: "SCO_ID_JOB_CODE",
    catalog: "job",
  },
  {
    id: "position",
    label: "Posición",
    table: "M4SCO_H_HR_POS_COM",
    hrColumn: "SCO_ID_HR",
    startColumn: "SCO_DT_START",
    endColumn: "SCO_DT_END",
    valueColumn: "SCO_ID_POSITION",
    reasonColumn: "SCO_ID_REASON_CHAN",
    extraColumns: ["SCO_ID_COMPL", "SCO_NUM_HOURS", "SCO_NUM_EJC", "SCO_NUM_HEADCOUNT"],
    catalog: "position",
  },
  {
    id: "category",
    label: "Categoría",
    table: "M4SSP_H_CATEGORIA",
    hrColumn: "SCO_ID_HR",
    startColumn: "SSP_FEC_INICIO",
    endColumn: "SSP_FEC_FIN",
    valueColumn: "SSP_ID_CATEGORIA",
    reasonColumn: "SSP_ID_MOTIVO_CAMB",
    catalog: "category",
  },
  {
    id: "workUnit",
    label: "Unidad organizativa",
    table: "M4SCO_H_HR_WUNIT",
    hrColumn: "SCO_ID_HR",
    startColumn: "SCO_DT_START",
    endColumn: "SCO_DT_END",
    valueColumn: "SCO_ID_WORK_UNIT",
    reasonColumn: "SCO_ID_REAS_CHNG",
    catalog: "workUnit",
  },
  {
    id: "workLocation",
    label: "Ubicación",
    table: "M4SCO_H_HR_WLOC",
    hrColumn: "SCO_ID_HR",
    startColumn: "SCO_DT_START",
    endColumn: "SCO_DT_END",
    valueColumn: "SCO_ID_WORK_LOC",
    reasonColumn: "SCO_ID_REAS_CHNG",
    catalog: "workLocation",
  },
  {
    // Mismo tramo que la ubicación: PeopleNet guarda las dos en M4SCO_H_HR_WLOC.
    id: "functionalWorkCenter",
    label: "Centro de trabajo funcional",
    table: "M4SCO_H_HR_WLOC",
    hrColumn: "SCO_ID_HR",
    startColumn: "SCO_DT_START",
    endColumn: "SCO_DT_END",
    valueColumn: "CSP_ID_WORK_FUNCTIONAL",
    reasonColumn: "SCO_ID_REAS_CHNG",
    catalog: "functionalWorkCenter",
  },
  {
    id: "costCenter",
    label: "Centro de coste",
    table: "M4SSP_H_CENT_COS",
    hrColumn: "SCO_ID_HR",
    startColumn: "SSP_FEC_INICIO",
    endColumn: "SSP_FEC_FIN",
    valueColumn: "SSP_ID_CENT_COSTO",
    reasonColumn: "SSP_ID_MOTIVO_CAMB",
    readOnly: true,
  },
  {
    id: "structure",
    label: "Estructura",
    table: "M4CYC_H_ESTRUCTURA",
    hrColumn: "SCO_ID_HR",
    startColumn: "DT_START",
    endColumn: "DT_END",
    valueColumn: "ID_ESTRUCTURA",
    reasonColumn: "SCO_ID_REA_CHANG",
    catalog: "structure",
  },
  {
    id: "atradiusJob",
    label: "Puesto Atradius",
    table: "M4CSP_H_ATRADIUS_JOB",
    hrColumn: "SCO_ID_HR",
    startColumn: "DT_START",
    endColumn: "DT_END",
    valueColumn: "CSP_ID_ATRADIUS_JOB",
    catalog: "atradiusJob",
  },
  {
    id: "atradiusCategory",
    label: "Categoría Atradius",
    table: "M4CSP_H_CATEG_ATRADIUS",
    hrColumn: "SCO_ID_HR",
    startColumn: "DT_START",
    endColumn: "DT_END",
    valueColumn: "CSP_ID_CATEG_ATRADIUS",
    catalog: "atradiusCategory",
  },
  {
    // `CALCULA_VACIOS`: la agrupación sale de la categoría del puesto.
    id: "categoryGroup",
    label: "Agrupación de categoría",
    table: "M4CSP_H_HR_JOB_AGRUPA_CAT",
    hrColumn: "ID_HR",
    startColumn: "DT_START",
    endColumn: "DT_END",
    valueColumn: "ID_JOB_AGRUPACION_CATEGORIA",
    keyColumns: ["ID_JOB_CODE"],
    derived: true,
  },
  {
    // En CYC no tiene filas; IBER y COLL sí. Solo se replica si ya existen.
    id: "categoryEquivalence",
    label: "Equivalencia categoría/puesto",
    table: "M4CSP_H_EQUIV_CAT_JOB_CYC",
    hrColumn: "SCO_ID_HR",
    startColumn: "DT_START",
    endColumn: "DT_END",
    valueColumn: "CSP_ID_EQUIV_CAT_JOB_CYC",
    keyColumns: ["STD_ID_JOB_CODE"],
    derived: true,
    followsExisting: true,
  },
];

export const jobChangeSpec = (id: JobChangeFieldId): JobChangeHistorySpec => {
  const found = JOB_CHANGE_HISTORY_SPECS.find((spec) => spec.id === id);
  if (!found) throw new Error(`El cambio de puesto no conoce el campo ${id}.`);
  return found;
};

/** Campos que el formulario deja elegir, en el orden del asistente. */
export const JOB_CHANGE_EDITABLE_FIELDS = JOB_CHANGE_HISTORY_SPECS.filter(
  (spec) => spec.derived !== true && spec.readOnly !== true,
).map((spec) => spec.id);

/** Fecha con la que Meta4 deja un tramo abierto. */
export const END_OF_TIME = "4000-01-01";

/** Tabla del rol y su auditoría; la numera `M4RDC_SEQUENCE` al grabar. */
export const ROLE_TABLE = "M4SCO_HR_ROLE";
