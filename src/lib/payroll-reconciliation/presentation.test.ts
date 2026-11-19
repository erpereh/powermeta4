import { describe, expect, it } from "vitest";
import { METRICS } from "./catalogue";
import {
  findingReason,
  findingValue,
  reconciliationDate,
  reconciliationRunAt,
} from "./presentation";
import type { Finding } from "./types";

function finding(metric = "fixed", patch: Partial<Finding> = {}): Finding {
  const definition = METRICS.find((item) => item.id === metric);
  if (!definition) throw new Error("Unknown synthetic metric");
  return {
    id: "synthetic-finding",
    fingerprint: "unchanged-fingerprint",
    control: definition.control,
    metric,
    employeeId: "009001",
    name: "Persona ficticia",
    actual: "110",
    expected: "100",
    delta: "10",
    unit: definition.percentage ? "pp" : "EUR",
    status: "Con diferencia",
    reason: "",
    evidence: ["Synthetic evidence"],
    ...patch,
  };
}

describe("finding values for screen and workbook", () => {
  it.each(["actual", "expected", "delta"] as const)("keeps an explicit zero in %s", (field) => {
    expect(findingValue(finding("fixed", { [field]: "0" }), field, true)).toBe("0");
  });
  it.each(["actual", "expected", "delta"] as const)(
    "leaves an unavailable %s blank when a file is supplied",
    (field) => {
      const row = finding("meal", {
        actual: null,
        expected: null,
        delta: null,
        status: "No comparable",
        reason: "Valores o reglas del periodo sin confirmar",
      });
      expect(findingValue(row, field, true)).toBeNull();
    },
  );
  it("marks only expected/delta pending for a missing independent source, including advances", () => {
    const row = finding("advanceDeduct", {
      actual: "0",
      expected: null,
      delta: null,
      status: "Falta fuente",
    });
    expect(findingValue(row, "actual", true)).toBe("0");
    expect(findingValue(row, "expected", true)).toBe("Pendiente");
    expect(findingValue(row, "delta", true)).toBe("Pendiente");
    expect(findingValue({ ...row, actual: null }, "actual", true)).toBeNull();
  });
  it.each(["fixed", "irpf", "shifts", "readjustment"])(
    "marks %s pending only when the previous execution is absent",
    (metric) => {
      const row = finding(metric, { expected: null, delta: null, status: "No comparable" });
      expect(findingValue(row, "expected", false)).toBe("Pendiente");
      expect(findingValue(row, "delta", false)).toBe("Pendiente");
      expect(findingValue(row, "expected", true)).toBeNull();
      expect(findingValue(row, "delta", true)).toBeNull();
    },
  );
  it("does not mark independent controls pending just because the previous execution is absent", () => {
    expect(
      findingValue(finding("ppse", { expected: null, status: "No comparable" }), "expected", false),
    ).toBeNull();
  });
  it("keeps absent optional dates blank", () => {
    expect(reconciliationDate(undefined)).toBe("");
    expect(reconciliationRunAt(undefined)).toBe("");
  });
});

describe("brief evidence-based reasons", () => {
  it.each(METRICS.map((metric) => metric.id))(
    "hides reasons for a matching %s without changing its evidence or fingerprint",
    (metric) => {
      const row = finding(metric, {
        status: "Coincide",
        reason: "Explicación original conservada",
      });
      const original = structuredClone(row);
      expect(findingReason(row)).toBe("");
      expect(row).toEqual(original);
    },
  );
  it.each([
    ["fixed", "110", "100", "El total fijo aumenta respecto al mes anterior."],
    ["fixed", "90", "100", "El total fijo disminuye respecto al mes anterior."],
    ["irpf", "23.23", "23.21", "El IRPF aumenta respecto al mes anterior."],
    ["irpf", "23.21", "23.23", "El IRPF disminuye respecto al mes anterior."],
    ["shifts", "0", "32.88", "Importe a cero este mes; el anterior tenía valor."],
    ["holidays", "28.42", "26.52", "El importe aumenta respecto al mes anterior."],
    ["readjustment", "735.87", "0", "Importe distinto de cero este mes; el anterior era cero."],
    ["vehicleAdvance", "50.81", "94.85", "El importe disminuye respecto al mes anterior."],
    [
      "rentingKind",
      "-303.2",
      "-343.87800000000004",
      "Importe distinto al indicado en Flex / Mercer.",
    ],
    ["apartments", "0", "98", "Importe en nómina a cero; la fuente indica un importe."],
    ["apartments", "100", "98", "Importe distinto al indicado en Apartamentos."],
  ])("describes %s (%s vs %s) without inventing a cause", (metric, actual, expected, reason) => {
    const row = finding(metric, { actual, expected });
    const original = structuredClone(row);
    expect(findingReason(row)).toBe(reason);
    expect(reason.length).toBeLessThanOrEqual(100);
    expect(row).toEqual(original);
  });
  it("compares at the original decimal precision", () => {
    expect(
      findingReason(
        finding("irpf", {
          actual: "15.000000000000000000000002",
          expected: "15.000000000000000000000001",
        }),
      ),
    ).toBe("El IRPF aumenta respecto al mes anterior.");
  });
  it("keeps existing reasons and user exception references intact", () => {
    const reason = "Excepción declarada: importe acordado · referencia DOC-FICTICIO.";
    expect(findingReason(finding("apartments", { reason }))).toBe(reason);
    expect(
      findingReason(
        finding("ppse", {
          reason: "Columna mensual PPSE; semántica/calendario pendientes de validación Q13.",
        }),
      ),
    ).toBe("PPSE mensual: criterio y calendario sin validar");
  });
  it.each([
    { actual: null },
    { expected: null },
    { actual: "inválido" },
    { actual: "100" },
    { status: "No comparable" as const },
    { status: "Falta fuente" as const },
  ])("does not invent an explanation when the observation is unavailable: %j", (patch) => {
    expect(findingReason(finding("fixed", patch))).toBe("");
  });
});
