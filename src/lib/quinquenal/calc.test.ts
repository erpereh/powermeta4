import { describe, expect, it } from "vitest";

import {
  buildQuinquenalYears,
  organizationLevel,
  reducedAnnualSalary,
  roundCents,
  splitJobCategory,
  type QuinquenalFigures,
} from "./calc";

// Importes inventados; las reglas son las de la consulta quinquenal de PeopleNet.
const figures = (overrides: Partial<QuinquenalFigures> = {}): QuinquenalFigures => ({
  coefficient: 1,
  monthlyTotal: 0,
  extraPayProration: 0,
  extraPays: 0,
  minPerformance: 0,
  inspectionPlus: 0,
  vencimiento: 0,
  diuturnidades: 0,
  insencaoHorario: 0,
  compInsencaoHorario: 0,
  diuturnidadesIt: 0,
  compensacaoPosto: 0,
  ajudasCusto: 0,
  target: 0,
  evaluation: 0,
  variablePercent: 0,
  ...overrides,
});

describe("reducedAnnualSalary", () => {
  it("annualizes Spanish pay: 12 months without proration plus extra pays and annual items", () => {
    expect(
      reducedAnnualSalary(
        "ACYC_ES",
        figures({
          monthlyTotal: 3000,
          extraPayProration: 250,
          extraPays: 4500,
          minPerformance: 600,
          inspectionPlus: 100,
        }),
      ),
    ).toBe((3000 - 250) * 12 + 4500 + 600 + 100 * 12);
  });

  it("annualizes Portuguese pay in 14, 12 and 11 payments", () => {
    expect(
      reducedAnnualSalary(
        "ACYC_PT",
        figures({
          vencimiento: 1500,
          diuturnidades: 100,
          insencaoHorario: 300,
          compInsencaoHorario: 50,
          diuturnidadesIt: 20,
          compensacaoPosto: 1000,
          ajudasCusto: 800,
          // Los conceptos españoles no cuentan en Portugal.
          monthlyTotal: 9999,
        }),
      ),
    ).toBe((1500 + 100 + 300 + 50 + 20) * 14 + 1000 * 12 + 800 * 11);
  });
});

describe("buildQuinquenalYears", () => {
  it("derives salary from the part-time coefficient and the current variable from target", () => {
    const [current] = buildQuinquenalYears({
      legalEntity: "ACYC_ES",
      currentYear: 2026,
      current: figures({
        coefficient: 0.8,
        monthlyTotal: 2000,
        extraPays: 2400,
        target: 1500,
        evaluation: 200,
      }),
      previous: new Map(),
      paidVariable: new Map(),
    });
    expect(current).toEqual({
      year: 2026,
      coefficient: 0.8,
      reducedSalary: 26400,
      salary: 33000,
      variable: 1700,
    });
  });

  it("uses the variable percentage of the full-time salary when there is one", () => {
    const [current] = buildQuinquenalYears({
      legalEntity: "ACYC_ES",
      currentYear: 2026,
      current: figures({ monthlyTotal: 10000, variablePercent: 40, target: 99 }),
      previous: new Map(),
      paidVariable: new Map(),
    });
    expect(current?.variable).toBe(48000);
  });

  it("shows zeros and no coefficient when the last published pay has no accrual", () => {
    const [current] = buildQuinquenalYears({
      legalEntity: "ACYC_BR",
      currentYear: 2026,
      current: null,
      previous: new Map(),
      paidVariable: new Map(),
    });
    expect(current).toEqual({
      year: 2026,
      coefficient: null,
      salary: 0,
      reducedSalary: 0,
      variable: 0,
    });
  });

  it("takes previous variables from the following year and leaves years without December empty", () => {
    const years = buildQuinquenalYears({
      legalEntity: "ACYC_ES",
      currentYear: 2026,
      current: figures({ monthlyTotal: 1000 }),
      previous: new Map([
        [2025, figures({ monthlyTotal: 1000, target: 1750, evaluation: 50 })],
        [2024, figures({ monthlyTotal: 1000, target: 1750 })],
        [2023, figures({ monthlyTotal: 1000 })],
      ]),
      paidVariable: new Map([
        [2025, 2100],
        [2024, 0],
        [2023, 500],
      ]),
    });

    expect(years.map((year) => year.year)).toEqual([2026, 2025, 2024, 2023, 2022]);
    // El variable de 2025 se paga en 2026 y aún no hay pago: objetivo más evaluación.
    expect(years[1]?.variable).toBe(1800);
    expect(years[2]?.variable).toBe(2100);
    expect(years[3]?.variable).toBe(0);
    expect(years[4]).toEqual({
      year: 2022,
      coefficient: null,
      salary: null,
      reducedSalary: null,
      variable: null,
    });
  });
});

describe("roundCents", () => {
  it("rounds to cents without floating point bias", () => {
    expect(roundCents(1.005)).toBe(1.01);
    expect(roundCents(0.1 + 0.2)).toBe(0.3);
  });
});

describe("organizationLevel", () => {
  it("keeps a unit only when its id belongs to the level", () => {
    expect(organizationLevel("3_DIR", "Dirección", 3)).toEqual({ id: "3_DIR", name: "Dirección" });
    expect(organizationLevel("2_ALT", "Alt", 3)).toEqual({ id: null, name: null });
    expect(organizationLevel(null, null, 5)).toEqual({ id: null, name: null });
  });

  it("cuts names to the Meta4 item length", () => {
    expect(organizationLevel("5_U", `${"x".repeat(39)} tail`, 5, 40).name).toBe("x".repeat(39));
  });
});

describe("splitJobCategory", () => {
  it.each([
    ["I3", "I", "3"],
    ["III8", "III", "8"],
    ["AD11", "AD", "11"],
    ["012", "0", "12"],
    ["00", "0", "00"],
    ["MB", "MB", "MB"],
    ["CEO", "CEO", "CEO"],
  ])("%s → %s / %s", (code, group, level) => {
    expect(splitJobCategory(code)).toEqual({ group, level });
  });

  it("keeps an empty category empty", () => {
    expect(splitJobCategory(null)).toEqual({ group: null, level: null });
  });
});
