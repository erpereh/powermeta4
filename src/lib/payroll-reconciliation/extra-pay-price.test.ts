import { describe, expect, it } from "vitest";
import { excessRulesFingerprint, type AutomaticRow } from "./automatic";
import { reconcile } from "./engine";
import { automaticExtraFixture } from "./extra-pay.fixture";
import { COMPUTING_CONCEPTS, resolveExtraPrices, type ExtraPriceData } from "./extra-pay-price";
import { resolveAutomaticExtras } from "./extra-pay-resolution";
import { METRICS } from "./catalogue";

/** Invented prices; shapes reproduce M4PRENOMINA June/December 2025–26 and October 2026. */
type Fixture = ReturnType<typeof automaticExtraFixture>;
const CALCULATED = "2026-11-05 19:00:00";
const rule = (order: number): AutomaticRow => ({
  ITEM: `SSP_PAGA_EXTRA_${order}`,
  RULE_ID: "RULE111",
  DATE_FROM: order === 3 ? "2026-10-01" : "1800-01-01",
  DATE_TO: "4000-01-01",
  SOURCE: `valor = ${order}`,
});
const rules = [rule(1), rule(2), rule(3)];
const verified = (order: number) => excessRulesFingerprint([rule(order)]);
const semester = { 1: verified(1), 2: verified(2) };
const accrual = [
  [1, "1", "30", "6"],
  [2, "7", "31", "12"],
  [3, "1", "31", "12"],
].map(([order, start, endDay, endMonth]) => ({
  AGREEMENT: "A1",
  ORDINAL: String(order),
  START_DAY: "1",
  START_MONTH: String(start),
  START_BACK: "0",
  END_DAY: String(endDay),
  END_MONTH: String(endMonth),
  END_BACK: "0",
}));
/** One closed month per price, from `start` (YYYY-MM) on. */
const months = (start: string, prices: string[], order = 3): AutomaticRow[] =>
  prices.map((price, index) => ({
    EMPLOYEE: "009001",
    HR_PERIOD: "1",
    ALLOC: `${start.slice(0, 4)}-${String(Number(start.slice(5, 7)) + index).padStart(2, "0")}-25`,
    PRICES1: order === 1 ? price : "0",
    PRICES2: order === 2 ? price : "0",
    PRICES3: order === 3 ? price : "0",
    MONTHS: "1",
  }));
function fixture(period = "2026-10"): Fixture {
  // The CSP_PRORRATEADA rule version of each month: R1 08–10/2026, the earlier R1 up to 07/2026.
  const mode = period === "2026-10" ? "R1" : period < "2026-08" ? "historical" : "definition";
  const input = automaticExtraFixture(period, mode);
  input.data.payroll[0] = { ...input.data.payroll[0], CALCULATED, PRICE_TOTAL: "2000" };
  return input;
}
function price(overrides: Partial<ExtraPriceData> = {}): ExtraPriceData {
  return {
    rules,
    accrual,
    // Nine closed months: eight at 1900 and one at 2000 (a raise during the year).
    history: months("2026-01", [...Array<string>(8).fill("1900"), "2000"]),
    assignments: [],
    payroll: [],
    ...overrides,
  };
}
function capture(input: Fixture, data = price(), third = verified(3)) {
  const evidence = resolveAutomaticExtras(input.current, input.data);
  input.current.extraPayAutomatic = resolveExtraPrices(
    evidence,
    { ...data, payroll: input.data.payroll },
    third,
    semester,
  );
  return input;
}
const paid = (input: Fixture, amount: string, units = "1", order = 3) => {
  const header = METRICS.find((item) => item.id === `extra${order}`)!.header;
  input.current.rows[0][input.current.headers.indexOf(header)] = amount;
  input.data.payroll[0] = {
    ...input.data.payroll[0],
    [`PAID${order}`]: amount,
    [`UNITS${order}`]: units,
  };
};
const finding = (input: Fixture, order = 3) =>
  reconcile(input).findings.find((row) => row.metric === `extra${order}` && row.control === "C04");
const third = (input: Fixture) => finding(input, 3);

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
    capture(input, price({ accrual: [{ ...accrual[2], START_MONTH: "7" }] }));
    expect(third(input)).toMatchObject({ status: "Coincide", expected: "2000" });
  });

  it("expects zero when the extra price or amount is individually set to 0 in PeopleNet", () => {
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
    // The amount item itself (SSP_PAGA_EXTRA_n) overrides RULE111 the same way.
    capture(input, price({ assignments: [{ ...zero, COMPONENT: "SSP_PAGA_EXTRA_3" }] }));
    expect(third(input)).toMatchObject({ status: "Con diferencia", expected: "0" });
    // Written after the calculation: the price history is not accredited.
    capture(input, price({ assignments: [{ ...zero, UPDATED: "2026-11-10 10:00:00" }] }));
    expect(third(input)?.expected).not.toBe("0");
  });

  it("accepts Meta4's partial units only when RRHH confirms them and the amount holds", () => {
    const input = fixture();
    // 0.5 × 1933.333… = 966.67
    paid(input, "966.67", "0.5");
    capture(input);
    expect(third(input)).toMatchObject({ status: "No comparable", expected: null });
    expect(third(input)?.reason).toContain("El importe es Unidades (0.5)");
    input.parameters = { ...input.parameters, rulesConfirmed: true, extraUnitsAccepted: true };
    expect(third(input)).toMatchObject({ status: "Coincide", expected: "966.67" });
    expect(third(input)?.reason).toContain("aceptadas por RRHH");
    // Accepted units do not explain an amount that is not units × average price.
    paid(input, "980", "0.5");
    capture(input);
    expect(third(input)).toMatchObject({ status: "No comparable", expected: null });
    expect(third(input)?.reason).toContain("no es unidades × precio medio");
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
    hired.history = hired.history.filter((row) => (row.ALLOC ?? "") >= "2026-03");
    capture(input, hired);
    expect(third(input)).toBeUndefined();
  });
});

describe("C04 June and December extras at the semester average (SSP_PAGA_EXTRA_1/2 RULE111)", () => {
  // January–May: three months at 1900, two at 2000; June at 2000 (no projection).
  const june = () => months("2026-01", ["1900", "1900", "1900", "2000", "2000"], 1);

  it("expects units × average of the closed semester months and the current price", () => {
    const input = fixture("2026-06");
    // (9700 + 2000) / 6 = 1950
    paid(input, "1950", "1", 1);
    capture(input, price({ history: june() }));
    expect(finding(input, 1)).toMatchObject({ status: "Coincide", expected: "1950" });
    expect(finding(input, 1)?.reason).toContain("precio medio del semestre 1950");
    // Without the verified LN4 rule the base formula (the current price) is expected.
    capture(input, price({ history: june(), rules: [rule(3)] }));
    expect(finding(input, 1)).toMatchObject({ status: "Con diferencia", expected: "2000" });
  });

  it("pays the days before a change to prorated at the average of the earlier months", () => {
    const input = fixture("2026-06");
    input.data.values = [1, 2, 3].map((order) => ({
      LEVEL: "individual",
      KEY1: "009001",
      KEY2: "1",
      COMPONENT: `CSP_PRORRATEADA_PE${order}`,
      VALUE: "1.00000000",
      PRIORITY: "2",
      DATE_FROM: "2026-04-01",
      DATE_TO: "4000-01-01",
    }));
    const switched: AutomaticRow = {
      EMPLOYEE: "009001",
      HR_PERIOD: "1",
      COMPONENT: "CSP_PRORRATEADA_PE1",
      VALUE: "1.00000000",
      DATE_FROM: "2026-04-01",
      DATE_TO: "4000-01-01",
      UPDATED: "2026-04-02 09:00:00",
    };
    // January–March at 1900: 90 / 180 × 1900 = 950 (Meta4 stores no units here).
    paid(input, "950", "0", 1);
    capture(input, price({ history: june(), assignments: [switched] }));
    expect(finding(input, 1)).toMatchObject({ status: "Coincide", expected: "950" });
    expect(finding(input, 1)?.reason).toContain("90/180 días");
    // Days discounted for absences are not reproduced: pending, never a difference.
    paid(input, "427.5", "0", 1);
    capture(input, price({ history: june(), assignments: [switched] }));
    expect(finding(input, 1)).toMatchObject({ status: "No comparable", expected: null });
  });

  it("leaves pending an extra regularized in the month its accrual closes", () => {
    const input = fixture("2026-12");
    // The third extra (paid in October) is recalculated in December, its last accrual month.
    paid(input, "-219.16", "0", 3);
    input.data.definitions = input.data.definitions.map((row) =>
      row.ORDINAL === "3" ? { ...row, PAY_MONTH: "10" } : row,
    );
    capture(input, price({ history: months("2026-07", Array<string>(5).fill("2000"), 2) }));
    expect(third(input)).toMatchObject({ status: "No comparable", expected: null });
    expect(third(input)?.reason).toContain("cierre de su devengo");
  });

  it("leaves pending a due extra in the month the HR period ends (paid in the settlement)", () => {
    const input = fixture("2026-12");
    input.data.payroll[0] = { ...input.data.payroll[0], HR_END: "2026-12-31" };
    paid(input, "0", "1", 2);
    capture(input, price({ history: months("2026-07", Array<string>(5).fill("2000"), 2) }));
    expect(finding(input, 2)).toMatchObject({ status: "No comparable", expected: null });
    expect(finding(input, 2)?.reason).toContain("finiquito");
  });
});

describe("C04 concepts that compute for the extra price (CSP_IPE_*)", () => {
  const flag = (component: string, level = "workCenter"): AutomaticRow => ({
    LEVEL: level,
    KEY1: "724",
    COMPONENT: component,
    VALUE: "1.00000000",
    DATE_FROM: "2014-01-01",
    DATE_TO: "4000-01-01",
    UPDATED: "2014-01-01 00:00:00",
  });
  const iber = COMPUTING_CONCEPTS.IBER.flags.map((component) => flag(component));

  it("uses base + seniority in IBER and requires the verified indicators", () => {
    const input = fixture();
    const evidence = resolveAutomaticExtras(input.current, input.data);
    const resolve = (computing: AutomaticRow[]) =>
      resolveExtraPrices(
        { ...evidence, society: "IBER" },
        { ...price(), computing, payroll: input.data.payroll },
        verified(3),
        semester,
      ).price?.formula;
    expect(resolve(iber)).toEqual(["Salario Base", "Antigüedad"]);
    // A new concept that computes, another level or a late edit: the formula is not accredited.
    expect(resolve([...iber, flag("CSP_IPE_PLUS_CONVENIO")])).toEqual([]);
    expect(resolve([...iber, flag("CSP_IPE_COMP_PERSONAL", "individual")])).toEqual([]);
    expect(resolve([{ ...iber[0], UPDATED: "2026-11-10 10:00:00" }, ...iber.slice(1)])).toEqual([]);
  });

  it("checks the report formula against Meta4's price and reports unverified indicators", () => {
    const input = fixture();
    paid(input, "1933.33");
    capture(input);
    input.current.extraPayAutomatic = {
      ...input.current.extraPayAutomatic!,
      price: { ...input.current.extraPayAutomatic!.price!, formula: [] },
    };
    expect(third(input)).toMatchObject({ status: "No comparable", expected: null });
    expect(third(input)?.reason).toContain("CSP_IPE_*");
  });
});
