import type { Severity } from "@/features/registro-retributivo/types";
import { createGeminiClient, getGeminiModel, isGeminiEnabled } from "@/features/registro-retributivo/ai/geminiClient";
import { issueObservationSchema, type IssueObservation } from "@/features/registro-retributivo/ai/schemas";

export interface IssueObservationInput {
  readonly field: string;
  readonly shouldBe: string;
  readonly actual: string;
  readonly context: string;
  readonly salaryDifference?: number;
  readonly severity: Severity;
  readonly issueType: string;
}

export interface IssueObservationOptions {
  readonly enableAI?: boolean;
  readonly model?: string;
}

export function deterministicObservation(input: IssueObservationInput): IssueObservation {
  const observations = `El campo ${input.field} no coincide con el Registro Retributivo para ${input.context}. La incidencia debe revisarse contra el dato maestro vigente antes de modificar importes.`;
  const recommendedAction = `Validar ${input.field} en el sistema de nomina y actualizar Registro o ficha de trabajador segun proceda.`;
  return { observations, recommendedAction, severity: input.severity };
}

export async function generateIssueObservation(
  input: IssueObservationInput,
  options: IssueObservationOptions = {},
): Promise<IssueObservation> {
  if (options.enableAI === false || !isGeminiEnabled()) {
    return deterministicObservation(input);
  }

  const client = createGeminiClient();
  if (!client) {
    return deterministicObservation(input);
  }

  try {
    const response = await client.models.generateContent({
      model: options.model || getGeminiModel(),
      contents: [
        {
          role: "user",
          parts: [
            {
              text: [
                "Responde en espanol profesional. No inventes datos, no recalcules importes y no modifiques importes.",
                "Maximo 2 frases de observacion y 1 frase de accion recomendada.",
                `Campo: ${input.field}`,
                `Deberia estar: ${input.shouldBe}`,
                `Como esta: ${input.actual}`,
                `Contexto: ${input.context}`,
                `Diferencia salarial: ${input.salaryDifference ?? 0}`,
                `Tipo incidencia: ${input.issueType}`,
              ].join("\n"),
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            observations: { type: "string" },
            recommendedAction: { type: "string" },
            severity: { type: "string", enum: ["Alta", "Media", "Baja"] },
          },
          required: ["observations", "recommendedAction"],
        },
      },
    });
    const text = response.text;
    if (!text) {
      return deterministicObservation(input);
    }

    return issueObservationSchema.parse(JSON.parse(text));
  } catch {
    return deterministicObservation(input);
  }
}
