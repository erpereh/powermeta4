import { describe, expect, it } from "vitest";

import { compareAnalysis } from "@/features/registro-retributivo/compare/comparePeople";
import {
  accumulatorKey,
  buildRegistroFromPeopleNet,
  monthsInPeriod,
  type RegistroAccumulatorRow,
  type RegistroItemConfig,
  type RegistroPeopleNetData,
  type RegistroSlotRule,
} from "@/features/registro-retributivo/peoplenet/registro-build";

const item = (overrides: Partial<RegistroItemConfig>): RegistroItemConfig => ({
  ti: "SCO_AUX_AC_HRPERIOD2",
  item: "SSP_SAL_BASE",
  table: "M4SCO_AC_HR_PERIOD",
  column: "SSP_SAL_BASE",
  classification: "SAL",
  subclassification: "GEN",
  normType: "NO_NOR",
  sign: 0,
  coefficient: null,
  start: "1800-01-01",
  end: "9999-12-31",
  ...overrides,
});

const rule = (slot: number, overrides: Partial<RegistroSlotRule>): RegistroSlotRule => ({
  sequence: 1,
  slot,
  classification: "SAL",
  subclassification: null,
  normType: null,
  ...overrides,
});

const row = (
  allocation: string,
  values: Record<string, number>,
  overrides: Partial<RegistroAccumulatorRow> = {},
): RegistroAccumulatorRow => ({
  object: "period",
  employeeId: "1023",
  hrPeriod: 1,
  key: `1023|1|${allocation}|${allocation}|${allocation}|004|004`,
  allocation,
  coefJornada: 1,
  horasAnuConvenio: 1800,
  horasReales: 150,
  values: new Map(Object.entries(values)),
  ...overrides,
});

const data = (overrides: Partial<RegistroPeopleNetData>): RegistroPeopleNetData => ({
  organization: "CYC",
  period: { from: "2025-01-01", to: "2025-12-31" },
  items: [],
  slotRules: [],
  lastPayNormas: new Set(["TOT", "SC_SD1"]),
  outputColumns: [],
  people: new Map([["1023", { name: "Ana Pérez", sex: "Mujer" }]]),
  rows: [],
  lastPay: new Map([["1023|1", "2025-12-25"]]),
  coefMonths: new Map(),
  ...overrides,
});

const SAL_BASE = accumulatorKey("M4SCO_AC_HR_PERIOD", "SSP_SAL_BASE");

describe("buildRegistroFromPeopleNet", () => {
  it("cuenta los meses del periodo como DateDiff de Meta4", () => {
    expect(monthsInPeriod("2025-01-01", "2025-12-31")).toBe(12);
    expect(monthsInPeriod("2025-03-01", "2025-03-31")).toBe(1);
  });

  it("suma el importe real y el periodo completo con la norma del item", () => {
    const result = buildRegistroFromPeopleNet(
      data({
        items: [item({})],
        slotRules: [
          // Real sin normalizar en «no normalizada» y normalizado en periodo completo.
          rule(11, { subclassification: "GEN" }),
          rule(13, { subclassification: "GEN", normType: "NO_NOR" }),
        ],
        outputColumns: [{ code: "SSP_SAL_BASE", group: "Conceptos Salario", order: 1, slot: 16 }],
        rows: [
          row("2025-01-25", { [SAL_BASE]: 1000 }),
          row("2025-02-25", { [SAL_BASE]: 1000.004 }),
        ],
      }),
    );
    const [employee] = result.records;
    expect(employee?.nonNormalized.salaryIt).toBe(2000);
    expect(employee?.periodComplete).toEqual({
      salary: 2000,
      salaryComplement: 0,
      extraSalary: 0,
      total: 2000,
    });
    expect(employee?.concepts).toEqual([
      { block: "Salario", blockKey: "salary", code: "SSP_SAL_BASE", amount: 2000 },
    ]);
    expect(result.normalizedAvailable).toBe(true);
    expect(result.internalChecks[0]?.status).toBe("OK");
  });

  it("aplica SC_SD1 solo en la última paga y con las horas del registro", () => {
    const prorrata = item({
      item: "CSP_P_EXT_PRORRAT_N",
      table: "M4CSP_AC_HR_PERIOD",
      column: "CSP_P_EXT_PRORRAT_N",
      subclassification: "PEX",
      normType: "SC_SD1",
    });
    const key = accumulatorKey("M4CSP_AC_HR_PERIOD", "CSP_P_EXT_PRORRAT_N");
    const result = buildRegistroFromPeopleNet(
      data({
        items: [prorrata],
        slotRules: [rule(13, { subclassification: "PEX", normType: "SC_SD1" })],
        outputColumns: [
          { code: "CSP_P_EXT_PRORRAT_N", group: "Conceptos Salario", order: 1, slot: 16 },
        ],
        rows: [
          row("2025-11-25", { [key]: 300 }),
          // Última paga: 1800/12 = 150 h/mes; ×12 meses = 1800 h; 1800 / 150 h reales = ×12.
          row("2025-12-25", { [key]: 300 }),
        ],
      }),
    );
    expect(result.records[0]?.periodComplete.salary).toBe(3600);
    expect(result.records[0]?.concepts[0]?.amount).toBe(3600);
  });

  it("reparte COEF_A entre los meses con aportación y resta los items con signo", () => {
    const aportacion = item({
      item: "CYC_APORTACION_DEFINIDA",
      table: "M4CSP_AC_HR_PERIOD",
      column: "CYC_APORTACION_DEFINIDA",
      classification: "ESAL",
      normType: "COEF_A",
      coefficient: 1,
    });
    const descuento = item({
      item: "SSP_DESCUENTO",
      column: "SSP_DESCUENTO",
      classification: "ESAL",
      normType: "TOT_2",
      sign: 1,
    });
    const result = buildRegistroFromPeopleNet(
      data({
        items: [aportacion, descuento],
        slotRules: [
          rule(15, { classification: "ESAL", normType: "COEF_A" }),
          rule(15, { sequence: 2, classification: "ESAL", normType: "TOT_2" }),
        ],
        outputColumns: [
          { code: "CYC_APORTACION_DEFINIDA", group: "Conceptos Extrasalarial", order: 1, slot: 81 },
          { code: "SSP_DESCUENTO", group: "Conceptos Extrasalarial", order: 2, slot: 82 },
        ],
        coefMonths: new Map([["1023", 4]]),
        rows: [
          row("2025-01-25", {
            [accumulatorKey("M4CSP_AC_HR_PERIOD", "CYC_APORTACION_DEFINIDA")]: 400,
            [accumulatorKey("M4SCO_AC_HR_PERIOD", "SSP_DESCUENTO")]: 10,
          }),
        ],
      }),
    );
    expect(result.records[0]?.concepts.map((concept) => concept.amount)).toEqual([100, -10]);
    expect(result.records[0]?.periodComplete.extraSalary).toBe(90);
  });

  it("toma de la casilla el objeto de un item configurado en alta y en rol", () => {
    const period = item({
      item: "CSP_I_AD_PERSONAM",
      table: "M4CSP_AC_HR_PERIOD",
      column: "CSP_I_AD_PERSONAM",
      classification: "CSAL",
      normType: "NO_NOR_2",
    });
    const role = { ...period, ti: "SCO_AUX_AC_HRROLE2_1", table: "M4CSP_AC_HR_ROLE" as const };
    const result = buildRegistroFromPeopleNet(
      data({
        items: [period, role],
        slotRules: [rule(14, { classification: "CSAL", normType: "NO_NOR_2" })],
        // En CYC la C. Salarial del rol empieza en la casilla 61.
        outputColumns: [
          { code: "CSP_I_AD_PERSONAM", group: "Conceptos C. Salarial", order: 1, slot: 66 },
        ],
        rows: [
          row("2025-01-25", { [accumulatorKey("M4CSP_AC_HR_PERIOD", "CSP_I_AD_PERSONAM")]: 50 }),
          row(
            "2025-01-25",
            { [accumulatorKey("M4CSP_AC_HR_ROLE", "CSP_I_AD_PERSONAM")]: 50 },
            { object: "role" },
          ),
        ],
      }),
    );
    // Como en PeopleNet, el periodo completo suma las dos lecturas; la columna muestra la del rol.
    expect(result.records[0]?.periodComplete.salaryComplement).toBe(100);
    expect(result.records[0]?.concepts[0]?.amount).toBe(50);
  });

  it("habilita las comparativas de normalizados", async () => {
    const registro = buildRegistroFromPeopleNet(
      data({
        items: [item({})],
        slotRules: [
          rule(1, { subclassification: "GEN", normType: "NO_NOR" }),
          rule(13, { subclassification: "GEN", normType: "NO_NOR" }),
        ],
        outputColumns: [{ code: "SSP_SAL_BASE", group: "Conceptos Salario", order: 1, slot: 16 }],
        rows: [row("2025-01-25", { [SAL_BASE]: 1000 })],
      }),
    );
    const result = await compareAnalysis([], registro.records, { tolerance: 1 });
    expect(result.normalizedVsReal).toHaveLength(1);
    expect(result.internalExcelNormalizedVariablesChecks?.[0]?.status).toBe("OK");
    expect(result.people[0]?.status).toBe("Sin PDF");
  });
});
