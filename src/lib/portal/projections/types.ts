/** Informe de lectura propio o de una persona del equipo; no se persiste en el workspace. */
export type ProjectionPay = {
  id: string;
  label: string;
  kind: "actual" | "projected" | "unknown";
};

export type ProjectionRow = {
  id: string;
  kind: "concept" | "section" | "total";
  label: string;
  amounts: readonly (number | null)[];
  total: number | null;
  subtotal: boolean;
};

export type ProjectionSection = {
  id: string;
  title: string;
  layout: "pays" | "annual" | "ppse";
  placement: "wide" | "benefits" | "compact";
  rows: ProjectionRow[];
};

export type ProjectionSegment = { id: string; label: string; value: number | null };
export type ProjectionHistory = { year: number; fixed: number | null; variable: number | null };
export type ProjectionDocument = { year: number; label: string; href: string };

export type ProjectionReport = {
  year: number;
  employee: { id: string; name: string; category: string | null; workCenter: string | null };
  calculatedAt: string | null;
  pays: ProjectionPay[];
  sections: ProjectionSection[];
  direct: ProjectionSegment[];
  compensation: ProjectionSegment[];
  /** Bloque RI/RFA: tercera gráfica del original, solo si la persona lo tiene. */
  flexible: ProjectionSegment[];
  history: ProjectionHistory[];
  notices: string[];
};

/** Persona consultada por matrícula; ausente en el informe propio. */
export type ProjectionTeamMember = { id: string; name: string };

/**
 * Quién puede abrirse por matrícula (`CARGA_2`). `society`: cualquier matrícula
 * de la sociedad activa (decisión del usuario del 2026-10-19). `team`: solo la
 * jerarquía ORO del usuario (`PROJECTION_TEAM_SQL` + `withTeamScope`), la regla
 * anterior, que se conserva para poder volver a ella cambiando este valor.
 */
export type ProjectionLookupScope = "society" | "team";
export const PROJECTION_LOOKUP: { readonly scope: ProjectionLookupScope } = { scope: "society" };

export type ProjectionPageData = {
  report: ProjectionReport | null;
  years: number[];
  selectedYear: number | null;
  documents: ProjectionDocument[];
  notices: string[];
  member?: ProjectionTeamMember;
};

export type ProjectionSearchParams = Readonly<Record<string, string | string[] | undefined>>;

/** Matrícula de ORO tal como se escribe; el servidor comprueba después que sea del equipo. */
export const PROJECTION_EMPLOYEE_PATTERN = /^[A-Za-z0-9._-]{1,20}$/;

export type ProjectionEmployeeSelection =
  | { status: "own" }
  | { status: "team"; employeeId: string }
  | { status: "invalid" };

export const projectionEmployeeSelection = (
  value: string | string[] | undefined,
): ProjectionEmployeeSelection => {
  if (value === undefined) return { status: "own" };
  const trimmed = typeof value === "string" ? value.trim() : "";
  return PROJECTION_EMPLOYEE_PATTERN.test(trimmed)
    ? { status: "team", employeeId: trimmed }
    : { status: "invalid" };
};

export type ProjectionYearSelection =
  | { status: "latest" }
  | { status: "selected"; year: number }
  | { status: "invalid" };

export const projectionYearSelection = (
  value: string | string[] | undefined,
): ProjectionYearSelection =>
  value === undefined
    ? { status: "latest" }
    : typeof value === "string" && /^(19|20)\d{2}$/.test(value)
      ? { status: "selected", year: Number(value) }
      : { status: "invalid" };
