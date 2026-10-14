/** Informe de lectura del empleado propio; no se persiste en el workspace. */
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
  history: ProjectionHistory[];
  notices: string[];
};

export type ProjectionPageData = {
  report: ProjectionReport | null;
  years: number[];
  selectedYear: number | null;
  documents: ProjectionDocument[];
  notices: string[];
};

export type ProjectionSearchParams = Readonly<Record<string, string | string[] | undefined>>;

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
