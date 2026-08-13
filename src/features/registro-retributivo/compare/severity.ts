import type { Severity } from "@/features/registro-retributivo/types";

export function severityForField(field: string, salaryDifference = 0): Severity {
  const normalized = field.toLowerCase();
  if (
    normalized.includes("nif") ||
    normalized.includes("registro") ||
    normalized.includes("gt") ||
    normalized.includes("grupo profesional") ||
    Math.abs(salaryDifference) > 50
  ) {
    return "Alta";
  }

  if (normalized.includes("centro") || normalized.includes("matricula") || normalized.includes("antiguedad")) {
    return "Media";
  }

  return "Baja";
}
