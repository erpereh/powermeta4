import type {
  CertificateArrearsColumn,
  CertificateFieldId,
  CertificateRefundColumn,
} from "./layout";

export type CertificateValue = string | number | null;

export type CertificateArrearsRow = Partial<Record<CertificateArrearsColumn, number | null>>;
export type CertificateRefundRow = Partial<Record<CertificateRefundColumn, number | null>>;

/**
 * Datos de un certificado de retenciones (`CYC_RP_CERT_HAB_<año>`) listos para
 * pintarse sobre la plantilla. No se persisten: se leen en cada petición.
 */
export type WithholdingCertificate = {
  readonly year: number;
  readonly fields: Partial<Record<CertificateFieldId, CertificateValue>>;
  readonly arrears: readonly CertificateArrearsRow[];
  readonly refunds: readonly CertificateRefundRow[];
  /** Fecha de expedición `AAAA-MM-DD`: el día en que se genera, como el original. */
  readonly issuedAt: string;
  /**
   * Línea del firmante (`SSP_FIRMT_CERT_HAB`, cargo y NIF de `STD_LEG_ENT`).
   * La imagen de la firma es fija en el diseño del informe (`assets/cert-hab-firma.jpg`).
   */
  readonly signer: string | null;
};

/** Certificado guardado en PeopleNet (`CSP_CERT_DOC`): el original lo prefiere al generado. */
export type CertificateStoredDocument = { readonly label: string; readonly href: string };

export type CertificateYear = {
  readonly year: number;
  readonly document: CertificateStoredDocument | null;
};

/** Persona consultada por matrícula; ausente en el certificado propio. */
export type CertificateMember = { readonly id: string; readonly name: string };

export type CertificateSelection =
  | { readonly kind: "generated" }
  | { readonly kind: "stored"; readonly document: CertificateStoredDocument }
  | { readonly kind: "unavailable"; readonly message: string }
  | { readonly kind: "none" };

export type CertificatePageData = {
  readonly years: readonly CertificateYear[];
  readonly selectedYear: number | null;
  readonly selection: CertificateSelection;
  readonly notices: readonly string[];
  readonly member?: CertificateMember;
};

export type CertificateSearchParams = Readonly<Record<string, string | string[] | undefined>>;

/**
 * Quién puede abrirse por matrícula desde Inicio. Como «Consultar proyecciones»
 * (`PROJECTION_LOOKUP`, decisión del usuario del 2026-10-19), cualquier
 * matrícula de la sociedad activa; sus PDF guardados nunca se listan.
 */
export const CERTIFICATE_LOOKUP = { scope: "society" } as const;

/** Primer ejercicio que el original genera con el motor de informes («carga después de 2014»). */
export const CERTIFICATE_FIRST_GENERATED_YEAR = 2015;
