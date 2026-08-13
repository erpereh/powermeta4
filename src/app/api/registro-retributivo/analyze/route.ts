import { NextResponse } from "next/server";

import { requireRetributivoApiSession } from "@/features/registro-retributivo/server/api-auth";
import { getGeminiModel } from "@/features/registro-retributivo/ai/geminiClient";
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
import type { AnalysisError, AnalysisResult, PayrollRecord } from "@/features/registro-retributivo/types";
import type { ConceptMappingRule } from "@/features/registro-retributivo/types";
import { validationError } from "@/features/registro-retributivo/utils/fileValidation";
import { normalizeEmployeeId } from "@/features/registro-retributivo/utils/normalize";

export const runtime = "nodejs";

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

export async function POST(request: Request) {
  const session = await requireRetributivoApiSession();
  if (!session.ok) {
    return session.response;
  }

  try {
    const formData = await request.formData();
    const registro = formData.get("registro");
    const pdfs = formData.getAll("pdfs").filter((item): item is File => item instanceof File);
    const tolerance = finiteNumber(formData.get("tolerance"), 1);
    const reviewThreshold = finiteNumber(formData.get("reviewThreshold"), DEFAULT_REVIEW_THRESHOLD);
    const incidentThreshold = finiteNumber(
      formData.get("incidentThreshold"),
      DEFAULT_INCIDENT_THRESHOLD,
    );
    const aiModel = getGeminiModel();
    const enableAI = false;
    const excludedEmployeeIds = parseExcludedEmployeeIds(formData.get("excludedEmployeeIds"));
    const errors: AnalysisError[] = [];

    if (!(registro instanceof File)) {
      return NextResponse.json(
        { error: "Falta el Excel del Registro Retributivo." },
        { status: 400 },
      );
    }
    if (!pdfs.length) {
      return NextResponse.json(
        { error: "No hay PDFs de nominas para analizar." },
        { status: 400 },
      );
    }

    const registroBuffer = await fileToBuffer(registro);
    const registroParsed = await parseRegistroRetributivo(registroBuffer);
    errors.push(...registroParsed.warnings.map((message) => validationError(registro.name, message)));
    const groupedExcelSheets = extractGroupedExcelSheets(registroBuffer);
    const userConceptMap = parseConceptMap(formData.get("conceptMap"));
    const conceptMap = validateConceptMapForCodes(
      mergeConceptMap([...buildDefaultConceptMap(registroParsed.conceptCodes), ...userConceptMap]),
      registroParsed.conceptCodes,
    );

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

    const result = await compareAnalysis(payrollRecords, registroParsed.records, {
      tolerance,
      enableAI,
      aiModel,
      reviewThreshold,
      incidentThreshold,
      conceptMap,
      internalExcelChecks: registroParsed.internalChecks,
      excludedEmployeeIds,
    });
    const response: AnalysisResult = {
      ...result,
      summary: {
        ...result.summary,
        pdfsFailed: errors.filter((error) => error.type === "pdf").length,
        groupingDifferences: 0,
      },
      groupings: [],
      groupedExcelSheets,
      errors: [...result.errors, ...errors],
      criteria: [
        ...result.criteria,
        `Hoja Registro detectada: ${registroParsed.sheetName}.`,
        `Hojas agrupadas Registro leídas: ${groupedExcelSheets.filter((sheet) => sheet.status === "ready").length} hojas.`,
        ...registroParsed.warnings,
      ],
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Error inesperado durante el analisis.",
      },
      { status: 500 },
    );
  }
}
