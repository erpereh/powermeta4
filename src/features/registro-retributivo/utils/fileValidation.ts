import type { AnalysisError } from "@/features/registro-retributivo/types";

export function validationError(file: string, message: string): AnalysisError {
  return {
    file,
    type: "validation",
    message,
    recommendedAction: "Revisar el archivo aportado y volver a ejecutar el analisis.",
  };
}

export function isPdfFile(fileName: string): boolean {
  return fileName.toLowerCase().endsWith(".pdf");
}

export function isExcelFile(fileName: string): boolean {
  return /\.(xlsx|xlsm|xls)$/i.test(fileName);
}
