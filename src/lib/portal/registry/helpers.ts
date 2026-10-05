import type {
  ConsultField,
  ConsultSpec,
  FeatureSection,
  FieldOption,
  FormFieldSpec,
  FormSpec,
  PendingId,
  PortalReaderId,
  PortalSqlQuery,
  ReadContract,
  WriteOperation,
} from "../types";
import { PORTAL_READERS } from "./readers";

/** Escritura del controlador genérico `generico_actualizar.jsp`. */
export const genericWrite = (
  id: string,
  label: string,
  tag: string,
  acc: string,
  nod: string,
): WriteOperation => ({
  id,
  label,
  meta4Method: `${tag}!SSE_PRINCIPAL.GESTION`,
  arguments: `TAG=${tag} · ACC=${acc} · NOD=${nod}`,
  pending: ["P04"],
});

/** Escritura de un método específico del objeto. */
export const methodWrite = (
  id: string,
  label: string,
  meta4Method: string,
  argumentsText?: string,
  pending: readonly PendingId[] = ["P04"],
): WriteOperation => ({
  id,
  label,
  meta4Method,
  ...(argumentsText ? { arguments: argumentsText } : {}),
  pending,
});

/** Lectura que solo puede resolverse con el runtime Meta4 o tablas por descubrir. */
export const pendingRead = (meta4: readonly string[], detail?: string): ReadContract => ({
  kind: "pending",
  meta4,
  pending: ["P02", "P05"],
  detail:
    detail ??
    "La pantalla original ejecuta el objeto en el runtime Meta4. Falta publicarlo como servicio o verificar sus tablas en PeopleNet.",
});

export const consult = (
  id: string,
  title: string,
  meta4: string,
  layout: ConsultSpec["layout"],
  fields: readonly (readonly [item: string | null, label: string])[],
  description?: string,
  reader: PortalReaderId = "dependency",
): FeatureSection => ({
  kind: "consult",
  consult: {
    id,
    title,
    meta4,
    layout,
    reader,
    read: reader === "dependency" ? pendingRead([meta4]) : PORTAL_READERS[reader],
    fields: fields.map(([item, label]): ConsultField => (item ? { item, label } : { label })),
    ...(description ? { description } : {}),
  },
});

/**
 * Apartado conectado: reproduce la lectura del nodo Meta4 con su SELECT de
 * `docs/portal/implementacion/lecturas-sql.md`. Cada `item` es un alias de la consulta.
 */
export const sqlConsult = (
  id: string,
  title: string,
  meta4: string,
  layout: ConsultSpec["layout"],
  fields: readonly (readonly [item: string, label: string])[],
  query: PortalSqlQuery,
  description?: string,
  download?: ConsultSpec["download"],
): FeatureSection => ({
  kind: "consult",
  consult: {
    id,
    title,
    meta4,
    layout,
    reader: "sql",
    read: sqlRead(query.tables),
    query,
    fields: fields.map(([item, label]): ConsultField => ({ item, label })),
    ...(description ? { description } : {}),
    ...(download ? { download } : {}),
  },
});

/** Lectura principal de una pantalla cuyos apartados son consultas `sql`. */
export const sqlRead = (tables: readonly string[]): ReadContract => ({
  kind: "sql",
  tables,
  verified: true,
});

export const form = (spec: FormSpec): FeatureSection => ({ kind: "form", form: spec });

export const note = (title: string, body: string): FeatureSection => ({
  kind: "note",
  title,
  body,
});

export const text = (
  name: string,
  label: string,
  options: Partial<Omit<FormFieldSpec, "name" | "label" | "type">> = {},
): FormFieldSpec => ({ name, label, type: "text", ...options });

export const date = (
  name: string,
  label: string,
  options: Partial<Omit<FormFieldSpec, "name" | "label" | "type">> = {},
): FormFieldSpec => ({ name, label, type: "date", ...options });

export const area = (
  name: string,
  label: string,
  options: Partial<Omit<FormFieldSpec, "name" | "label" | "type">> = {},
): FormFieldSpec => ({ name, label, type: "textarea", span: 2, ...options });

export const pendingSelect = (
  name: string,
  label: string,
  meta4: string,
  options: Partial<Omit<FormFieldSpec, "name" | "label" | "type" | "options">> = {},
): FormFieldSpec => ({
  name,
  label,
  type: "select",
  options: { kind: "pending", meta4 },
  ...options,
});

export const staticSelect = (
  name: string,
  label: string,
  values: readonly FieldOption[],
  options: Partial<Omit<FormFieldSpec, "name" | "label" | "type" | "options">> = {},
): FormFieldSpec => ({
  name,
  label,
  type: "select",
  options: { kind: "static", values },
  ...options,
});

export const check = (name: string, label: string, help?: string): FormFieldSpec => ({
  name,
  label,
  type: "checkbox",
  ...(help ? { help } : {}),
});

/**
 * Validación del responsable: cada petición se acepta o se cancela (opciones
 * excluyentes) y la cancelación exige motivo (60 caracteres en el original).
 * El envío se hace por página: no aprueba registros no visibles.
 */
export const validationForm = (
  id: string,
  title: string,
  tag: string,
  nod: string,
  options: { reasonMaxLength?: number; description?: string } = {},
): FeatureSection =>
  form({
    id,
    title,
    description:
      options.description ??
      "Recuerda enviar la aceptación o cancelación de las solicitudes de cada página. Una aceptación puede ser solo un nivel intermedio de validación.",
    fields: [
      staticSelect(
        "DECISION",
        "Decisión",
        [
          { value: "A", label: "Aceptar" },
          { value: "C", label: "Cancelar" },
        ],
        { required: true },
      ),
      text("MOTIVO", "Motivo de cancelación", {
        required: true,
        maxLength: options.reasonMaxLength ?? 60,
        showWhen: { field: "DECISION", equals: ["C"] },
        span: 2,
      }),
    ],
    write: {
      id: `${id}-enviar`,
      label: "Enviar validaciones",
      meta4Method: `${tag}!SSE_PRINCIPAL.GESTION (generico_actualizar.jsp)`,
      arguments: `REC · NOD=${nod} · NIVEL_ACEPTADO`,
      pending: ["P03", "P04"],
    },
  });

/** Campos de dirección comunes a dirección fiscal, otras direcciones y teletrabajo. */
export const ADDRESS_FIELDS: readonly FormFieldSpec[] = [
  {
    name: "SSP_ID_SIGLA_DOMIC",
    label: "Tipo de vía",
    type: "select",
    required: true,
    options: { kind: "catalog", catalog: "roadType" },
  },
  text("STD_ADDRESS_LINE_1", "Vía pública", { required: true, maxLength: 40 }),
  text("SSP_NUM_VIA", "Número", { required: true, maxLength: 5 }),
  text("SSP_BLOQUE", "Bloque", { maxLength: 5 }),
  text("SSP_PISO", "Piso", { maxLength: 10 }),
  text("SSP_ESCALERA", "Escalera", { maxLength: 10 }),
  text("SSP_PUERTA", "Puerta", { maxLength: 10 }),
  {
    name: "SSP_DISTRIT_POSTAL",
    label: "Código postal",
    type: "text",
    required: true,
    maxLength: 5,
    pattern: {
      regex: "^[0-9]{5}$",
      message: "El distrito postal es obligatorio. Es un numérico de 5 cifras.",
    },
    help: "Numérico de 5 cifras. El original completa país, comunidad, provincia y población desde el código postal (CSP_CARGA_CP).",
  },
];
