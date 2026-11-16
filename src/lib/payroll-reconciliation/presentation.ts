import { CATEGORIES, METRICS } from "./catalogue";
import type { Category, Parameters } from "./types";

export const metricLabel = (id: string): string =>
  METRICS.find((metric) => metric.id === id)?.header ??
  id.replace(/([a-z])([A-Z])/g, "$1 $2").replaceAll("_", " ");

export const categoryLabel = (id: Category): string =>
  CATEGORIES.find((category) => category.id === id)?.name ?? id;

const timestampFormat = new Intl.DateTimeFormat("es-ES", {
  dateStyle: "short",
  timeStyle: "medium",
  timeZone: "Europe/Madrid",
});
export function reconciliationDate(value: string | undefined): string {
  if (!value) return "Pendiente";
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value.split("-").reverse().join("/");
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : timestampFormat.format(date);
}

/** Export-only wording: persisted reasons and review fingerprints stay intact. */
const SHORT_REASONS: readonly (readonly [string, string])[] = [
  ["Falta ejecución anterior.", "Sin ejecución anterior"],
  [
    "Persona ausente de esta ejecución; no acredita alta o baja laboral.",
    "Persona ausente de la ejecución (alta/baja sin acreditar)",
  ],
  ["Importe vacío, inválido o no acreditado en nómina.", "Importe de nómina vacío o inválido"],
  ["Porcentajes distintos entre tramos; no se suman.", "Porcentajes distintos entre tramos"],
  ["Excepciones concurrentes o inválidas.", "Excepciones duplicadas o inválidas"],
  ["Devengo completo declarado para esta persona y paga.", "Devengo completo confirmado"],
  ["Componentes de la extra incompletos.", "Paga extra incompleta"],
  [
    "Falta confirmar devengo completo individual o regla proporcional (Q06).",
    "Pendiente de confirmar devengo o proporcionalidad",
  ],
  ["Falta fuente independiente para este control.", "Falta fuente independiente"],
  ["Fuera del listado cuya cobertura completa se ha confirmado.", "Fuera del listado"],
  [
    "Sin registro en fuente parcial o con incidencias; no equivale a cero.",
    "Sin registro; cobertura parcial o con incidencias (importe desconocido)",
  ],
  [
    "Elegibilidad y base completa declaradas para el periodo.",
    "Elegibilidad y base completa confirmadas",
  ],
  [
    "Falta confirmar elegibilidad/base por entidad o no corresponde este aniversario (Q12).",
    "Elegibilidad/base sin confirmar o aniversario no aplicable",
  ],
  [
    "Duplicado o solape de fuentes: resolver procedencia antes de sumar.",
    "Fuentes duplicadas o solapadas",
  ],
  [
    "Faltan valores/reglas de periodo confirmados; no se usa la cache del libro.",
    "Valores o reglas del periodo sin confirmar",
  ],
  [
    "Columna mensual PPSE; semántica/calendario pendientes de validación Q13.",
    "PPSE mensual: criterio y calendario sin validar",
  ],
  [
    "Identidad inválida; corregir el original. No se une por nombre.",
    "Matrícula inválida; corregir el original",
  ],
  ["Artículo de comisiones no acreditado en el perfil v1.", "Artículo de comisiones no reconocido"],
  ["Carga/descarga inválida o ambas cargas vacías.", "Carga/descarga inválida o vacía"],
  ["Antigüedad no interpretable.", "Antigüedad inválida"],
];

export function exportReason(reason: string): string {
  // The exception contains the user's own reason and document reference. Never rewrite it.
  const exception = reason.indexOf("Excepción declarada:");
  const automatic = exception < 0 ? reason : reason.slice(0, exception);
  const shortened = SHORT_REASONS.reduce(
    (text, [original, replacement]) => text.replaceAll(original, replacement),
    automatic,
  ).replace(/Columna ausente: (.*?) \(ocurrencia (\d+)\)\./g, "Falta columna: $1 (posición $2)");
  return shortened + (exception < 0 ? "" : reason.slice(exception));
}

export function exportDiagnostic(message: string): string {
  const labeled = CATEGORIES.reduce(
    (text, category) =>
      text.startsWith(`${category.id}:`)
        ? `${category.name}:${text.slice(category.id.length + 1)}`
        : text,
    message,
  );
  return labeled
    .replace(
      "El colectivo no acredita tarifa/días: confirmar parámetros y excepciones del periodo. No se utiliza BP/BQ como esperado.",
      "Confirmar tarifa, días y excepciones del periodo.",
    )
    .replace(
      "Se usa el mes seleccionado, no M ni el límite histórico de fila 252. Validar semántica/calendario PPSE (Q13).",
      "PPSE del mes seleccionado: confirmar criterio y calendario.",
    )
    .replace(
      "Perfil de tres bloques acreditados (filas 3:25/15); confirmar año de las cuotas y cobertura del documento.",
      "Confirmar año de las cuotas y cobertura del documento.",
    )
    .replace(/\s*\(?Q\d+\)?/g, "");
}

const EXTRA_FIELDS: Readonly<Record<string, string>> = {
  member: "Incluido en el colectivo",
  absences: "Número de ausencias",
  net: "Importe neto de tarjeta",
  anniversary: "Aniversario",
  personalReference: "Aportación personal de referencia",
};
export const sourceFieldLabel = (field: string): string =>
  EXTRA_FIELDS[field] ?? metricLabel(field);
export const sourceFieldValue = (field: string, value: string | null): string | null =>
  field === "anniversary" && value
    ? metricLabel(value)
    : field === "member" && value === "1"
      ? "Sí"
      : value;

export function exportParameters(parameters: Parameters): [string, string | null][] {
  return [
    ["Tolerancia EUR", parameters.tolerance],
    ["Tolerancia puntos porcentuales", parameters.percentageTolerance],
    ["Teletrabajo: tarifa por día", parameters.teleworkRate],
    ["Teletrabajo: días con derecho", parameters.teleworkDays],
    ["Comida: tarifa por día", parameters.mealRate],
    ["Comida: días de derecho antes de ausencias", parameters.mealDays],
    ["Tarjeta: tarifa del periodo", parameters.cardRate],
    ["Tarjeta: base del periodo", parameters.cardBase],
    ["Reglas y vigencia confirmadas", parameters.rulesConfirmed ? "Sí" : "No"],
    ["Paga extra para devengo completo", metricLabel(parameters.extraMetric)],
    ["Matrículas con devengo completo acreditado", parameters.extraFullEmployeeIds.join(", ")],
    [
      "Elegibilidad y base completa de aniversarios confirmadas",
      parameters.anniversaryFullBase ? "Sí" : "No",
    ],
  ];
}
