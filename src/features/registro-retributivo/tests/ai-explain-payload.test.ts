import { describe, expect, test } from "vitest";
import { describePersonCause } from "@/features/registro-retributivo/ui/probableCause";
import type { ConceptComparisonRow, PersonComparisonRow, UnmappedConceptRow } from "@/features/registro-retributivo/types";

describe("AI explain payload builders", () => {
  test("builds a person payload without sending the person name", async () => {
    const { buildPersonExplainPayload } = await import("@/features/registro-retributivo/ai/explainPayload");
    const row: PersonComparisonRow = {
      employeeNumber: "10048",
      person: "Persona Privada",
      workplace: "Bilbao",
      position: "Administracion",
      category: "Categoria A",
      salaryRegistro: 1000,
      salaryPdf: 1100,
      salaryDifference: 100,
      salaryComplementRegistro: 500,
      salaryComplementPdf: 400,
      salaryComplementDifference: -100,
      extraSalaryRegistro: 50,
      extraSalaryPdf: 258.01,
      extraSalaryDifference: 208.01,
      registroTotal: 1550,
      pdfTotal: 1758.01,
      totalDifference: 208.01,
      pdfControlTotalDevengado: 1758.01,
      payrollCount: 1,
      unmappedConceptsCount: 1,
      status: "Diferencia",
      detail: "Teletrabajo pendiente",
      periods: ["Febrero 2025"],
      files: ["PDF_FEBRERO.pdf"],
    };

    const concepts: ConceptComparisonRow[] = [
      {
        employeeNumber: "10048",
        person: "Persona Privada",
        block: "Salario",
        blockKey: "salary",
        registroCode: "SSP_SAL_BASE",
        pdfConcept: "Salario Base",
        registroAmount: 1000,
        pdfAmount: 1100,
        difference: 100,
        status: "Diferencia",
        detail: "Diferencia concepto",
      },
      {
        employeeNumber: "10048",
        person: "Persona Privada",
        block: "Salario",
        blockKey: "salary",
        registroCode: "SSP_ANTIGUEDAD",
        pdfConcept: "Antiguedad",
        registroAmount: 50,
        pdfAmount: 50,
        difference: 0,
        status: "OK",
        detail: "OK",
      },
      {
        employeeNumber: "10048",
        person: "Persona Privada",
        block: "Extrasalarial",
        blockKey: "extraSalary",
        registroCode: "CYC_TEST",
        pdfConcept: "Plus Transporte",
        registroAmount: 0,
        pdfAmount: 208.01,
        difference: 208.01,
        status: "Diferencia",
        detail: "Pendiente",
      },
    ];
    const related: UnmappedConceptRow[] = [
      {
        decisionType: "Pendiente revision",
        includedInComparison: false,
        pdfConcept: "Prestacion Teorica Maternidad",
        totalDetected: 300,
        peopleCount: 1,
        payrollCount: 1,
        exampleEmployeeNumbers: ["10048"],
        suggestedBlock: "C. Salarial",
        action: "Pendiente revisión",
        recommendedAction: "Revisar criterio",
        reason: "Relacionado por matricula explicita",
      },
      {
        decisionType: "Pendiente revision",
        includedInComparison: false,
        pdfConcept: "Paga 40 anos",
        totalDetected: 841.92,
        peopleCount: 1,
        payrollCount: 1,
        exampleEmployeeNumbers: ["10072"],
        suggestedBlock: "C. Salarial",
        action: "Pendiente revisión",
        recommendedAction: "Revisar codigo",
        reason: "Otra matricula",
      },
    ];

    const payload = buildPersonExplainPayload(row, describePersonCause(row, 1), concepts, related);
    const serialized = JSON.stringify(payload);

    expect(serialized).not.toContain("Persona Privada");
    expect(serialized).not.toMatch(/justified|adjusted|grossStatus|adjustedStatus|Importe justificado|Dif\. ajustada|Estado ajustado/i);
    expect(payload.employeeNumber).toBe("10048");
    expect(payload.workplace).toBe("Bilbao");
    expect(payload.position).toBe("Administracion");
    expect(payload.category).toBe("Categoria A");
    expect(payload.amounts.map((item) => item.label)).toEqual(["Salario", "C. Salarial", "Extrasalarial", "Total"]);
    expect(payload.topConceptDifferences?.map((item) => item.registroCode)).toEqual(["CYC_TEST", "SSP_SAL_BASE"]);
    expect(payload.topConceptDifferences?.map((item) => item.registroCode)).not.toContain("SSP_ANTIGUEDAD");
    expect(payload.relatedNotIncludedConcepts?.map((item) => item.pdfConcept)).toEqual(["Prestacion Teorica Maternidad"]);
    expect(payload.deterministicCause.description).toBeTruthy();
  });
});
