import { describe, expect, it } from "vitest";

import { buildAutoConceptMap } from "@/features/registro-retributivo/peoplenet/auto-concept-map";

describe("buildAutoConceptMap", () => {
  it("enlaza la línea del recibo con el concepto del Registro que lee la misma columna", () => {
    const rules = buildAutoConceptMap(
      [
        {
          concept: "Salario Base",
          table: "M4SCO_AC_HR_PERIOD",
          column: "SSP_SAL_BASE",
          informative: false,
        },
        {
          concept: "Comida Tarjeta",
          table: "M4CSP_AC_HR_PERIOD",
          column: "CSP_I_TARJETA_COMIDA",
          informative: true,
        },
        // Columna de rol frente a item de alta: se enlaza por nombre de columna.
        {
          concept: "Complemento Personal",
          table: "M4CSP_AC_HR_ROLE",
          column: "CSP_I_COMP_PERSONAL",
          informative: false,
        },
        // Una columna con dos conceptos no se decide automáticamente.
        {
          concept: "Ambiguo",
          table: "M4SCO_AC_HR_PERIOD",
          column: "SSP_COMPARTIDA",
          informative: false,
        },
        {
          concept: "Sin concepto",
          table: "M4SCO_AC_HR_PERIOD",
          column: "SSP_OTRA",
          informative: false,
        },
      ],
      [
        { code: "SSP_SAL_BASE", table: "M4SCO_AC_HR_PERIOD", column: "SSP_SAL_BASE" },
        {
          code: "CSP_I_TARJETA_COMIDA",
          table: "M4CSP_AC_HR_PERIOD",
          column: "CSP_I_TARJETA_COMIDA",
        },
        { code: "CSP_I_COMP_PERSONAL", table: "M4CSP_AC_HR_PERIOD", column: "CSP_I_COMP_PERSONAL" },
        { code: "SSP_A", table: "M4SCO_AC_HR_PERIOD", column: "SSP_COMPARTIDA" },
        { code: "SSP_B", table: "M4SCO_AC_HR_PERIOD", column: "SSP_COMPARTIDA" },
      ],
    );

    expect(
      rules.map((rule) => [rule.pdfConcept, rule.registroCode, rule.allowInformative]),
    ).toEqual([
      ["Salario Base", "SSP_SAL_BASE", false],
      ["Comida Tarjeta", "CSP_I_TARJETA_COMIDA", true],
      ["Complemento Personal", "CSP_I_COMP_PERSONAL", false],
    ]);
    expect(rules[1]).toMatchObject({
      status: "Incluido",
      sourceType: "informativo",
      dedupePriority: "informativo",
    });
  });
});
