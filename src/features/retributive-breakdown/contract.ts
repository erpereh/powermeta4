export const GROUPINGS = [
  {
    sheet: "Agrupación Categoría Personal",
    identifier: "Id. Agrup. Cat. Personal",
    label: "Agrup. Cat. Personal",
    file: "categoria-personal",
  },
  {
    sheet: "Análisis por categoría",
    identifier: "ID Categoría",
    label: "Categoría",
    file: "categoria",
  },
  {
    sheet: "Análisis por familia de puesto",
    identifier: "ID Familia Puesto",
    label: "Familia Puesto",
    file: "familia-de-puesto",
  },
  { sheet: "Análisis por puesto", identifier: "ID Puesto", label: "Puesto", file: "puesto" },
  {
    sheet: "Análisis por valoración puesto",
    identifier: "ID Valoración Retributiva",
    label: "Valoración Retributiva",
    file: "valoracion-del-puesto",
  },
] as const;

export const MAX_UPLOAD_BYTES = 9 * 1024 * 1024;
export const BREAKDOWN_ZIP_NAME = "desglose-retributivo-iber.zip";
export const XLSX_CONTENT_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

export type GroupingId = (typeof GROUPINGS)[number]["file"];
export type BreakdownOutput = "zip" | "complete" | GroupingId;
export type BreakdownMetrics = [number, number, number, number, number, number];

export type BreakdownPreview = {
  period: { from: string; to: string };
  employeeRows: number;
  concepts: { code: string; section: string }[];
  groupings: {
    id: GroupingId;
    groups: {
      identifier: string | number | null;
      label: string | number | null;
      metrics: BreakdownMetrics[];
    }[];
  }[];
};

export type BreakdownHistoryEntry = {
  id: string;
  createdAt: string;
  period: BreakdownPreview["period"];
  employeeRows: number;
  groupCount: number;
};

export type SavedBreakdown = { entry: BreakdownHistoryEntry; result: BreakdownPreview };
export type BreakdownHistory = {
  entries: BreakdownHistoryEntry[];
  activeAnalysisId: string | null;
};

export function isBreakdownOutput(value: unknown): value is BreakdownOutput {
  return value === "zip" || value === "complete" || GROUPINGS.some(({ file }) => file === value);
}

export function breakdownFilename(output: BreakdownOutput) {
  if (output === "zip") return BREAKDOWN_ZIP_NAME;
  if (output === "complete") return "desglose-retributivo-completo.xlsx";
  return "desglose-iber-" + output + ".xlsx";
}
