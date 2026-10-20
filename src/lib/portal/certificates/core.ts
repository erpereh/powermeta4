import {
  CERTIFICATE_ARREARS,
  CERTIFICATE_FIELDS,
  type CertificateArrearsColumn,
  type CertificateFieldId,
  type CertificateRefundColumn,
} from "./layout";
import {
  CERTIFICATE_FIRST_GENERATED_YEAR,
  type CertificateStoredDocument,
  type CertificateValue,
  type CertificateYear,
} from "./types";

const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
] as const;

/**
 * Importe como lo imprime el informe original: dos decimales con coma y sin
 * separador de miles (`120010,76`). El cero y la ausencia dejan la casilla en
 * blanco, igual que las casillas vacías del original.
 */
export const formatCertificateAmount = (value: number | null | undefined): string =>
  value === null || value === undefined || !Number.isFinite(value) || value === 0
    ? ""
    : value.toFixed(2).replace(".", ",");

/** Texto de una casilla según su tipo. */
export const certificateFieldText = (
  id: CertificateFieldId,
  value: CertificateValue | undefined,
): string => {
  if (value === null || value === undefined) return "";
  const kind = CERTIFICATE_FIELDS[id].kind;
  if (kind === "amount") return formatCertificateAmount(typeof value === "number" ? value : null);
  return String(value).trim();
};

/** Ejercicio de una fila de atrasos o reintegros: año sin formato de importe. */
export const certificateYearText = (value: number | null | undefined): string =>
  value === null || value === undefined || !Number.isInteger(value) ? "" : String(value);

/** «a 20 de Octubre de 2026»: día, mes y año de la fecha de expedición. */
export const certificateIssueParts = (
  isoDate: string,
): { day: string; month: string; year: string } => {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate);
  if (!match) return { day: "", month: "", year: "" };
  const month = MONTHS[Number(match[2]) - 1] ?? "";
  return { day: String(Number(match[3])), month, year: match[1] ?? "" };
};

/** Fecha local `AAAA-MM-DD`, sin pasar por UTC. */
export const localIsoDate = (date: Date): string =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const yearOf = (value: unknown): number | null => {
  const date = value instanceof Date ? value : typeof value === "string" ? new Date(value) : null;
  const year = date && Number.isFinite(date.getTime()) ? date.getUTCFullYear() : null;
  return year !== null && year >= 1900 && year <= 9999 ? year : null;
};

/**
 * Ejercicios que el original ofrece (`CSP_CERTIFICADO_HAB_ANIOS.P_LISTA_ANIOS`
 * sobre `STD_HR_PERIOD`): cada año cubierto por un periodo de alta, desde 2015
 * hasta el último ejercicio cerrado, más los ejercicios declarados en el 190 y
 * los certificados guardados en `CSP_CERT_DOC`, que sustituyen al generado del
 * mismo año. Más reciente primero.
 */
export const certificateYears = (
  periods: readonly { readonly start: unknown; readonly end: unknown }[],
  stored: readonly (CertificateStoredDocument & { readonly year: number })[],
  today: Date,
  /** Ejercicios con registros del 190 del perceptor. */
  declared: readonly number[] = [],
): CertificateYear[] => {
  const lastClosed = today.getFullYear() - 1;
  const years = new Set<number>(declared);
  for (const period of periods) {
    const start = yearOf(period.start);
    if (start === null) continue;
    const end = Math.min(yearOf(period.end) ?? lastClosed, lastClosed);
    for (let year = Math.max(start, CERTIFICATE_FIRST_GENERATED_YEAR); year <= end; year += 1)
      years.add(year);
  }
  const documents = new Map<number, CertificateStoredDocument>();
  for (const { year, label, href } of stored) {
    years.add(year);
    if (!documents.has(year)) documents.set(year, { label, href });
  }
  return [...years]
    .sort((a, b) => b - a)
    .map((year) => ({ year, document: documents.get(year) ?? null }));
};

export const isCertificateFieldId = (key: string): key is CertificateFieldId =>
  Object.hasOwn(CERTIFICATE_FIELDS, key);
export const isCertificateArrearsColumn = (key: string): key is CertificateArrearsColumn =>
  Object.hasOwn(CERTIFICATE_ARREARS.columns, key);
export const isCertificateRefundColumn = (key: string): key is CertificateRefundColumn =>
  key === "ejercicio" || key === "integro" || key === "reducciones";

/** `CYC_RP_CERT_HAB_2025.pdf`, el nombre que da el original. */
export const certificateFileName = (year: number): string => `CYC_RP_CERT_HAB_${year}.pdf`;
