import { z } from "zod";

export const AI_NOT_CONFIGURED_MESSAGE = "IA no configurada. Añade GEMINI_API_KEY en .env";
export const AI_EXPLAIN_FALLBACK_MESSAGE = "No se pudo generar explicación IA. Se mantiene la explicación determinista.";

export const explainRequestTypeSchema = z.enum(["person", "concept", "notIncludedConcept", "internalExcelCheck"]);

export type ExplainRequestType = z.infer<typeof explainRequestTypeSchema>;

export const aiConfidenceSchema = z.enum(["Alta", "Media", "Baja"]);

export type AiConfidence = z.infer<typeof aiConfidenceSchema>;

export const deterministicCauseSchema = z.object({
  label: z.string().min(1),
  description: z.string().min(1),
  review: z.string().min(1),
});

export const explainAmountSchema = z.object({
  label: z.string().min(1),
  registro: z.number().optional(),
  pdf: z.number().optional(),
  period: z.number().optional(),
  breakdown: z.number().optional(),
  detected: z.number().optional(),
  difference: z.number().optional(),
});

export const explainConceptDifferenceSchema = z.object({
  block: z.string().min(1),
  registroCode: z.string().optional(),
  pdfConcept: z.string().optional(),
  registroAmount: z.number(),
  pdfAmount: z.number(),
  difference: z.number(),
  status: z.string().optional(),
  detail: z.string().optional(),
});

export const explainRelatedNotIncludedConceptSchema = z.object({
  pdfConcept: z.string().min(1),
  totalDetected: z.number(),
  decisionType: z.string().optional(),
  includedInComparison: z.boolean().optional(),
  suggestedBlock: z.string().optional(),
  suggestedRegistroCode: z.string().optional(),
  reason: z.string().optional(),
  recommendedAction: z.string().optional(),
});

export const explainPayloadSchema = z.object({
  rowId: z.string().min(1),
  employeeNumber: z.string().optional(),
  workplace: z.string().optional(),
  position: z.string().optional(),
  category: z.string().optional(),
  block: z.string().optional(),
  concept: z.string().optional(),
  registroCode: z.string().optional(),
  status: z.string().optional(),
  decisionType: z.string().optional(),
  includedInComparison: z.boolean().optional(),
  payrollCount: z.number().optional(),
  peopleCount: z.number().optional(),
  periods: z.array(z.string()).max(12).optional(),
  exampleEmployeeNumbers: z.array(z.string()).max(12).optional(),
  suggestedBlock: z.string().optional(),
  suggestedRegistroCode: z.string().optional(),
  detail: z.string().optional(),
  amounts: z.array(explainAmountSchema).max(12),
  topConceptDifferences: z.array(explainConceptDifferenceSchema).max(12).optional(),
  relatedNotIncludedConcepts: z.array(explainRelatedNotIncludedConceptSchema).max(5).optional(),
  deterministicCause: deterministicCauseSchema,
});

export type ExplainPayload = z.infer<typeof explainPayloadSchema>;

export const explainRequestSchema = z.object({
  type: explainRequestTypeSchema,
  payload: explainPayloadSchema,
});

export type ExplainRequest = z.infer<typeof explainRequestSchema>;

export const aiExplanationSchema = z.object({
  summary: z.string().min(1),
  probableCauses: z.array(z.string()),
  registroReview: z.array(z.string()),
  pdfReview: z.array(z.string()),
  recommendedActions: z.array(z.string()),
  confidence: aiConfidenceSchema,
});

export type AiExplanation = z.infer<typeof aiExplanationSchema>;

function cleanText(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }

  const clean = value.trim();
  return clean || undefined;
}

function cleanList(value: unknown, fallback: string): string[] {
  if (!Array.isArray(value)) {
    return [fallback];
  }

  const items = value.map(cleanText).filter((item): item is string => Boolean(item));
  return items.length ? items : [fallback];
}

function sanitizeAiText(value: string): string {
  return value
    .replace(/\bsalario base\b/gi, "bloque Salario")
    .replace(/\berróneamente\b/gi, "de forma distinta")
    .replace(/\berroneamente\b/gi, "de forma distinta")
    .replace(/\berror(?:es)?\b/gi, "diferencia");
}

export function normalizeAiExplanation(value: unknown): AiExplanation {
  const record = typeof value === "object" && value !== null ? (value as Record<string, unknown>) : {};
  const confidence = aiConfidenceSchema.safeParse(record.confidence).success ? (record.confidence as AiConfidence) : "Baja";
  const explanation: AiExplanation = {
    summary: sanitizeAiText(cleanText(record.summary) ?? "La IA no aportó un resumen adicional."),
    probableCauses: cleanList(record.probableCauses, "Sin causa adicional sobre la explicación determinista.").map(sanitizeAiText),
    registroReview: cleanList(record.registroReview, "Revisar los importes y el bloque en Registro.").map(sanitizeAiText),
    pdfReview: cleanList(record.pdfReview, "Revisar los datos extraídos de los PDFs o nóminas.").map(sanitizeAiText),
    recommendedActions: cleanList(record.recommendedActions, "Mantener la explicación determinista y revisar manualmente.").map(sanitizeAiText),
    confidence,
  };

  return aiExplanationSchema.parse(explanation);
}
