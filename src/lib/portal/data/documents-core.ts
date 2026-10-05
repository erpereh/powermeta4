import type { PortalDocumentKind } from "../types";

/** Clave de un documento propio. Nunca contiene la matrícula ni la sociedad. */
export type DocumentKey =
  | {
      readonly kind: "payslip";
      readonly period: number;
      readonly date: string;
      readonly frequency: string;
      readonly order: number;
    }
  | {
      readonly kind: "certificate" | "projection";
      readonly period: number;
      readonly order: number;
    };

const INTEGER = /^\d{1,6}$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;
const FREQUENCY = /^[A-Za-z0-9]{1,8}$/;

/**
 * `payslip`: `periodo|AAAA-MM-DD|frecuencia|orden`; `certificate`: `periodo|orden`;
 * `projection`: `periodo|año`. Cualquier otra forma se rechaza.
 */
export const parseDocumentKey = (kind: PortalDocumentKind, raw: string): DocumentKey | null => {
  const parts = raw.split("|");
  if (kind === "payslip") {
    const [period, date, frequency, order] = parts;
    if (
      parts.length !== 4 ||
      !INTEGER.test(period ?? "") ||
      !DATE.test(date ?? "") ||
      !FREQUENCY.test(frequency ?? "") ||
      !INTEGER.test(order ?? "")
    )
      return null;
    return {
      kind,
      period: Number(period),
      date: date ?? "",
      frequency: frequency ?? "",
      order: Number(order),
    };
  }
  const [period, order] = parts;
  if (parts.length !== 2 || !INTEGER.test(period ?? "") || !INTEGER.test(order ?? "")) return null;
  return { kind, period: Number(period), order: Number(order) };
};

export const PORTAL_DOCUMENT_KINDS: readonly PortalDocumentKind[] = [
  "payslip",
  "certificate",
  "projection",
];

export const isPortalDocumentKind = (value: string): value is PortalDocumentKind =>
  (PORTAL_DOCUMENT_KINDS as readonly string[]).includes(value);

/** Enlace de descarga a partir del alias `DOC_KEY` de la consulta. */
export const documentHref = (kind: PortalDocumentKind, key: string): string =>
  `/api/portal/documents/${kind}?k=${encodeURIComponent(key)}`;
