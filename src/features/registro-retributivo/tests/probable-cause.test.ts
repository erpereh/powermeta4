import { describe, expect, test } from "vitest";
import { describePersonCause, describeConceptCause } from "@/features/registro-retributivo/ui/probableCause";
import type { ConceptComparisonRow, PersonComparisonRow } from "@/features/registro-retributivo/types";

function person(overrides: Partial<PersonComparisonRow>): PersonComparisonRow {
  return {
    employeeNumber: "10048",
    person: "Persona Test",
    workplace: "Bilbao",
    position: "Puesto",
    category: "Categoria",
    salaryRegistro: 0,
    salaryPdf: 0,
    salaryDifference: 0,
    salaryComplementRegistro: 0,
    salaryComplementPdf: 0,
    salaryComplementDifference: 0,
    extraSalaryRegistro: 0,
    extraSalaryPdf: 0,
    extraSalaryDifference: 0,
    registroTotal: 0,
    pdfTotal: 0,
    totalDifference: 0,
    pdfControlTotalDevengado: 0,
    payrollCount: 1,
    unmappedConceptsCount: 0,
    status: "OK",
    detail: "",
    periods: [],
    files: [],
    ...overrides,
  };
}

function concept(overrides: Partial<ConceptComparisonRow>): ConceptComparisonRow {
  return {
    employeeNumber: "10048",
    person: "Persona Test",
    block: "Extrasalarial",
    blockKey: "extraSalary",
    registroCode: "CYC_TEST",
    pdfConcept: "Concepto Test",
    registroAmount: 0,
    pdfAmount: 0,
    difference: 0,
    status: "OK",
    detail: "",
    ...overrides,
  };
}

describe("difference explanations", () => {
  test("quantifies the offset and the remaining difference between blocks", () => {
    const evidence = describePersonCause(
      person({
        salaryDifference: 16563.95,
        salaryComplementDifference: -13989.52,
        extraSalaryDifference: 0.04,
        totalDifference: 2574.47,
      }),
      1,
    );

    expect(evidence).toEqual({
      label: "Compensación entre bloques",
      description: "Las diferencias positivas de Salario compensan 13.989,52 EUR de las negativas de Complemento Salarial. La diferencia total es de 2.574,47 EUR (recibos menos Registro).",
    });
  });

  test("describes the offset when the total is within the tolerance", () => {
    const evidence = describePersonCause(
      person({ salaryDifference: 120, salaryComplementDifference: -119.7, totalDifference: 0.3 }),
      1,
    );
    expect(evidence?.description).toContain("compensan 119,70 EUR");
    expect(evidence?.description).toContain("0,30 EUR");
  });

  test("leaves explanations empty when the amounts do not establish one", () => {
    expect(describePersonCause(person({ extraSalaryDifference: 208, totalDifference: 208, detail: "Teletrabajo" }), 1)).toBeUndefined();
    expect(describePersonCause(person({ salaryComplementDifference: 841.92, totalDifference: 841.92 }), 1)).toBeUndefined();
    expect(describePersonCause(person({ salaryDifference: 500, salaryComplementDifference: -500, status: "Sin PDF" }), 1)).toBeUndefined();
    expect(describeConceptCause(concept({ pdfConcept: "Bolsa de Vacaciones", pdfAmount: 900, registroAmount: 58.08, difference: 841.92 }), 1)).toBeUndefined();
    expect(describeConceptCause(concept({ pdfAmount: 1, difference: 1 }), 1)).toBeUndefined();
  });

  test("explains an amount in one source using the compared values", () => {
    expect(describeConceptCause(concept({ pdfConcept: "Gratificación una sola vez", pdfAmount: 3000, difference: 3000 }), 1)).toEqual({
      label: "Importe solo en los recibos",
      description: "Los recibos incluidos suman 3.000,00 EUR para este concepto y el Registro recoge 0,00 EUR.",
    });
    expect(describeConceptCause(concept({ registroAmount: 20, difference: -20 }), 1)?.label).toBe("Importe solo en el Registro");
  });
});
