import { describe, expect, it } from "vitest";

import type { FormSpec } from "../types";
import { isFieldVisible, validatePortalForm } from "./validate";

const spec: FormSpec = {
  id: "prueba",
  title: "Prueba",
  write: { id: "w", label: "Enviar", meta4Method: "OBJ!NODO.GESTION", pending: ["P04"] },
  fields: [
    {
      name: "DECISION",
      label: "Decisión",
      type: "select",
      required: true,
      options: {
        kind: "static",
        values: [
          { value: "A", label: "Aceptar" },
          { value: "C", label: "Cancelar" },
        ],
      },
    },
    {
      name: "MOTIVO",
      label: "Motivo",
      type: "text",
      required: true,
      maxLength: 5,
      showWhen: { field: "DECISION", equals: ["C"] },
    },
    { name: "INICIO", label: "Inicio", type: "date" },
    { name: "FIN", label: "Fin", type: "date" },
    {
      name: "CP",
      label: "Código postal",
      type: "text",
      pattern: { regex: "^[0-9]{5}$", message: "CP inválido" },
    },
  ],
  rules: [
    { kind: "dateOrder", start: "INICIO", end: "FIN", message: "El fin es anterior al inicio." },
    { kind: "notBeforeHireDate", field: "INICIO", message: "Anterior a tu alta." },
  ],
};

describe("validación de formularios del portal", () => {
  it("valida solo los campos visibles", () => {
    expect(isFieldVisible(spec.fields[1], { DECISION: "A" })).toBe(false);
    expect(validatePortalForm(spec, { DECISION: "A" })).toEqual({});
    expect(validatePortalForm(spec, { DECISION: "C" })).toHaveProperty("MOTIVO");
    expect(validatePortalForm(spec, { DECISION: "C", MOTIVO: "demasiado" }).MOTIVO).toMatch(
      /máximo 5/,
    );
  });

  it("aplica patrones, fechas reales y reglas del original", () => {
    expect(validatePortalForm(spec, { DECISION: "A", CP: "28A01" }).CP).toBe("CP inválido");
    expect(validatePortalForm(spec, { DECISION: "A", INICIO: "2026-02-30" }).INICIO).toMatch(
      /no es válida/,
    );
    expect(
      validatePortalForm(spec, { DECISION: "A", INICIO: "2026-05-02", FIN: "2026-05-01" }).FIN,
    ).toBe("El fin es anterior al inicio.");
    expect(
      validatePortalForm(spec, { DECISION: "A", INICIO: "2019-01-01" }, { hireDate: "2020-01-01" })
        .INICIO,
    ).toBe("Anterior a tu alta.");
  });
});
