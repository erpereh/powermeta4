import { describe, expect, it } from "vitest";
import { excessRulesFingerprint, type AutomaticRow } from "./automatic";
import { reconcile } from "./engine";
import { automaticExtraFixture } from "./extra-pay.fixture";
import { resolveExtraPrices, type ExtraPriceData } from "./extra-pay-price";
import { resolveAutomaticExtras } from "./extra-pay-resolution";
import { METRICS } from "./catalogue";

/** Invented prices; shapes reproduce M4PRENOMINA October 2026 (CYC). */
type Fixture = ReturnType<typeof automaticExtraFixture>;
const CALCULATED = "2026-11-05 19:00:00";
const rules: AutomaticRow[] = [
  { RULE_ID: "RULE111", DATE_FROM: "2026-10-01", DATE_TO: "4000-01-01", SOURCE: "valor = 1" },
];
function fixture(): Fixture {
  const input = automaticExtraFixture();
  input.data.payroll[0] = { ...input.data.payroll[0], CALCULATED, PRICE_TOTAL: "2000" };
  return input;
}
function price(overrides: Partial<ExtraPriceData> = {}): ExtraPriceData {
  return {
    rules,
    accrual: [
      {
        AGREEMENT: "A1",
        START_DAY: "1",
        START_MONTH: "1",
        START_BACK: "0",
        END_DAY: "31",
        END_MONTH: "12",
        END_BACK: "0",
      },
    ],
    // Nine closed months: eight at 1900 and one at 2000 (a raise during the year).
    history: [
      {
        EMPLOYEE: "009001",
        HR_PERIOD: "1",
        PRICES: "17200",
        MONTHS: "9",
        FIRST_ALLOC: "2026-01-25",
      },
    ],
    assignments: [],
    payroll: [],
    ...overrides,
  };
}
function capture(input: Fixture, data = price(), verified = excessRulesFingerprint(rules)) {
  const evidence = resolveAutomaticExtras(input.current, input.data);
  input.current.extraPayAutomatic = resolveExtraPrices(
    evidence,
    { ...data, payroll: input.data.payroll },
    verified,
  );
  return input;
}
const paid = (input: Fixture, amount: string, units = "1") => {
  const header = METRICS.find((item) => item.id === "extra3")!.header;
  input.current.rows[0][input.current.headers.indexOf(header)] = amount;
  input.data.payroll[0] = { ...input.data.payroll[0], PAID3: amount, UNITS3: units };
};
const third = (input: Fixture) =>
  reconcile(input).findings.find((row) => row.metric === "extra3" && row.control === "C04");

describe("C04 third extra at the average price of the accrual year (RULE111 10/2026)", () => {
  it("expects units × average of closed months, the current price and the projected months", () => {
    const input = fixture();
    // (17200 + 3 × 2000) / (9 + 1 + 2) = 1933.33
    paid(input, "1933.33");
    capture(input);
    expect(third(input)).toMatchObject({ status: "Coincide", expected: "1933.33" });
    expect(third(input)?.reason).toContain("precio medio del devengo 1933.33");
    paid(input, "2000");
    capture(input);
    expect(third(input)).toMatchObject({ status: "Con diferencia", delta: "66.67" });
  });

  it("requires Meta4's current price to be base + experience + CAI (Calculos.txt)", () => {
    const input = fixture();
    input.data.payroll[0] = { ...input.data.payroll[0], PRICE_TOTAL: "2100" };
    paid(input, "1933.33");
    capture(input);
    expect(third(input)).toMatchObject({ status: "No comparable", expected: null });
    expect(third(input)?.reason).toContain("no es Salario Base");
  });

  it("keeps the base formula when the LN4 rules or the accrual window are not the verified ones", () => {
    const input = fixture();
    paid(input, "2000");
    capture(input, price(), "otra");
    expect(third(input)).toMatchObject({ status: "Coincide", expected: "2000" });
    capture(input, price({ accrual: [{ ...price().accrual[0], START_MONTH: "7" }] }));
    expect(third(input)).toMatchObject({ status: "Coincide", expected: "2000" });
  });

  it("expects zero when the extra price is individually set to 0 in PeopleNet", () => {
    const input = fixture();
    paid(input, "2000");
    const zero: AutomaticRow = {
      EMPLOYEE: "009001",
      HR_PERIOD: "1",
      COMPONENT: "SSP_P_PAGA_EX_3",
      VALUE: "0.00000000",
      DATE_FROM: "2025-01-01",
      DATE_TO: "4000-01-01",
      UPDATED: "2025-01-10 10:00:00",
    };
    capture(input, price({ assignments: [zero] }));
    expect(third(input)).toMatchObject({ status: "Con diferencia", expected: "0" });
    expect(third(input)?.reason).toContain("fijado a 0");
    // Written after the calculation: the price history is not accredited.
    capture(input, price({ assignments: [{ ...zero, UPDATED: "2026-11-10 10:00:00" }] }));
    expect(third(input)?.expected).not.toBe("0");
  });

  it("accepts Meta4's partial units only when RRHH confirms them", () => {
    const input = fixture();
    // 0.5 × 1933.333… = 966.67
    paid(input, "966.67", "0.5");
    capture(input);
    expect(third(input)).toMatchObject({ status: "No comparable", expected: null });
    expect(third(input)?.reason).toContain("El importe es Unidades (0.5)");
    input.parameters = { ...input.parameters, rulesConfirmed: true, extraUnitsAccepted: true };
    expect(third(input)).toMatchObject({ status: "Coincide", expected: "966.67" });
    expect(third(input)?.reason).toContain("aceptadas por RRHH");
  });

  it("pays apart the months before a change to prorated inside the year, not before a hire", () => {
    const input = fixture();
    input.data.values = [1, 2, 3].map((order) => ({
      LEVEL: "individual",
      KEY1: "009001",
      KEY2: "1",
      COMPONENT: `CSP_PRORRATEADA_PE${order}`,
      VALUE: "1.00000000",
      PRIORITY: "2",
      DATE_FROM: "2026-03-01",
      DATE_TO: "4000-01-01",
    }));
    const switched: AutomaticRow = {
      EMPLOYEE: "009001",
      HR_PERIOD: "1",
      COMPONENT: "CSP_PRORRATEADA_PE3",
      VALUE: "1.00000000",
      DATE_FROM: "2026-03-01",
      DATE_TO: "4000-01-01",
      UPDATED: "2026-03-05 15:39:54",
    };
    // Two non-prorated months: 60 / 360 = 0.1667; 0.1667 × 1933.333… = 322.29
    paid(input, "322.29", "0.1667");
    capture(input, price({ assignments: [switched] }));
    expect(third(input)).toMatchObject({ status: "Coincide", expected: "322.29" });
    expect(third(input)?.reason).toContain("Pasó a prorrateada");
    // Meta4 discounted days: pending unless RRHH accepts its units.
    paid(input, "155.82", "0.0806");
    capture(input, price({ assignments: [switched] }));
    expect(third(input)).toMatchObject({ status: "No comparable", expected: null });
    // Hired on the day the prorated row starts: no earlier months, nothing apart.
    paid(input, "0", "0");
    const hired = price({ assignments: [switched] });
    hired.history = [{ ...hired.history[0], FIRST_ALLOC: "2026-03-25" }];
    capture(input, hired);
    expect(third(input)).toBeUndefined();
  });
});
