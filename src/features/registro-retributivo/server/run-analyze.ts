import "server-only";

import { compareAnalysis } from "@/features/registro-retributivo/compare/comparePeople";
import {
  buildDefaultConceptMap,
  mergeConceptMap,
  validateConceptMapForCodes,
} from "@/features/registro-retributivo/compare/conceptMapping";
import {
  DEFAULT_INCIDENT_THRESHOLD,
  DEFAULT_REVIEW_THRESHOLD,
} from "@/features/registro-retributivo/compare/salaryDiff";
import { extractGroupedExcelSheets } from "@/features/registro-retributivo/groupings/groupedExcelSheets";
import { parsePayrollPdf } from "@/features/registro-retributivo/parsers/payrollPdfParser";
import { parseRegistroRetributivo } from "@/features/registro-retributivo/parsers/registroRetributivoParser";
import type {
  AnalysisError,
  AnalysisResult,
  ConceptMappingRule,
  GroupedExcelSheet,
  PayrollRecord,
  RegistroParseResult,
} from "@/features/registro-retributivo/types";
import { validationError } from "@/features/registro-retributivo/utils/fileValidation";
import { normalizeEmployeeId } from "@/features/registro-retributivo/utils/normalize";

export const ANALYZE_USER_ERROR = "No se ha podido analizar la documentación.";
export const ANALYZE_USER_HINT = "Comprueba los archivos seleccionados e inténtalo de nuevo.";

export class AnalyzeValidationError extends Error {
  readonly status = 400 as const;
}

async function fileToBuffer(file: File): Promise<Buffer> {
  return Buffer.from(await file.arrayBuffer());
}

function finiteNumber(value: FormDataEntryValue | null, fallback: number): number {
  const parsed = Number(value ?? fallback);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function parseConceptMap(value: FormDataEntryValue | null): ConceptMappingRule[] {
  if (typeof value !== "string" || !value.trim()) {
    return [];
  }
  try {
    const parsed = JSON.parse(value) as unknown;
    return Array.isArray(parsed) ? (parsed as ConceptMappingRule[]) : [];
  } catch {
    return [];
  }
}

function parseExcludedEmployeeIds(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string" || !value.trim()) {
    return [];
  }
  try {
    const parsed = JSON.parse(value) as unknown;
    if (!Array.isArray(parsed)) {
      return [];
    }
    return [...new Set(parsed.map(normalizeEmployeeId).filter(Boolean))];
  } catch {
    return [];
  }
}

export const isFormDataParseError = (error: unknown): boolean =>
  error instanceof TypeError && /Failed to parse body as FormData/i.test(error.message);

export async function runRetributivoAnalyze(formData: FormData): Promise<AnalysisResult> {
  const registro = formData.get("registro");
  const pdfs = formData.getAll("pdfs").filter((item): item is File => item instanceof File);
  const tolerance = finiteNumber(formData.get("tolerance"), 1);
  const reviewThreshold = finiteNumber(formData.get("reviewThreshold"), DEFAULT_REVIEW_THRESHOLD);
  const incidentThreshold = finiteNumber(
    formData.get("incidentThreshold"),
    DEFAULT_INCIDENT_THRESHOLD,
  );
  const excludedEmployeeIds = parseExcludedEmployeeIds(formData.get("excludedEmployeeIds"));
  const errors: AnalysisError[] = [];

  if (!(registro instanceof File)) {
    throw new AnalyzeValidationError("Falta el Excel del Registro Retributivo.");
  }
  if (!pdfs.length) {
    throw new AnalyzeValidationError("No hay PDFs de nominas para analizar.");
  }

  const registroBuffer = await fileToBuffer(registro);
  const registroParsed = await parseRegistroRetributivo(registroBuffer);
  errors.push(...registroParsed.warnings.map((message) => validationError(registro.name, message)));
  const groupedExcelSheets = extractGroupedExcelSheets(registroBuffer);

  const payrollRecords: PayrollRecord[] = [];
  for (const pdf of pdfs) {
    try {
      const parsed = await parsePayrollPdf(await fileToBuffer(pdf), pdf.name);
      payrollRecords.push(...parsed.records);
      errors.push(...parsed.errors);
    } catch (error) {
      errors.push({
        file: pdf.name,
        type: "pdf",
        message: error instanceof Error ? error.message : "No se pudo procesar el PDF.",
        recommendedAction: "Revisar si el PDF contiene texto seleccionable.",
      });
    }
  }

  return finishAnalysis({
    payrollRecords,
    registroParsed,
    options: {
      tolerance,
      reviewThreshold,
      incidentThreshold,
      userConceptMap: parseConceptMap(formData.get("conceptMap")),
      excludedEmployeeIds,
    },
    errors,
    groupedExcelSheets,
    criteria: [
      `Hoja Registro detectada: ${registroParsed.sheetName}.`,
      `Hojas agrupadas Registro leídas: ${groupedExcelSheets.filter((sheet) => sheet.status === "ready").length} hojas.`,
    ],
    extra: { source: "files" },
  });
}

export interface FinishAnalysisInput {
  readonly payrollRecords: readonly PayrollRecord[];
  readonly registroParsed: RegistroParseResult;
  readonly options: {
    readonly tolerance: number;
    readonly reviewThreshold: number;
    readonly incidentThreshold: number;
    readonly userConceptMap: readonly ConceptMappingRule[];
    readonly excludedEmployeeIds: readonly string[];
  };
  readonly errors: readonly AnalysisError[];
  readonly groupedExcelSheets: readonly GroupedExcelSheet[];
  readonly criteria: readonly string[];
  readonly extra?: Pick<AnalysisResult, "source" | "period" | "employeeIdsFilter">;
}

/** Tramo común a los dos orígenes: mapa de conceptos, comparación y resultado. */
export async function finishAnalysis(input: FinishAnalysisInput): Promise<AnalysisResult> {
  const { registroParsed, options } = input;
  const conceptMap = validateConceptMapForCodes(
    mergeConceptMap([...buildDefaultConceptMap(registroParsed.conceptCodes), ...options.userConceptMap]),
    registroParsed.conceptCodes,
  );
  const normalizedAvailable = registroParsed.normalizedAvailable !== false;

  const result = await compareAnalysis(input.payrollRecords, registroParsed.records, {
    tolerance: options.tolerance,
    reviewThreshold: options.reviewThreshold,
    incidentThreshold: options.incidentThreshold,
    conceptMap,
    internalExcelChecks: registroParsed.internalChecks,
    excludedEmployeeIds: options.excludedEmployeeIds,
    normalizedAvailable,
  });

  return {
    ...result,
    summary: {
      ...result.summary,
      pdfsFailed: input.errors.filter((error) => error.type === "pdf").length,
      groupingDifferences: 0,
    },
    groupings: [],
    groupedExcelSheets: [...input.groupedExcelSheets],
    errors: [...result.errors, ...input.errors],
    criteria: [...result.criteria, ...input.criteria, ...registroParsed.warnings],
    ...input.extra,
    normalizedAvailable,
  };
}
