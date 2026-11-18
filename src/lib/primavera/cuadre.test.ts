import { describe, expect, it } from "vitest";

import {
  buildPrimaveraMonths,
  parsePrimaveraParameters,
  primaveraColumns,
  primaveraSumExpression,
  type PrimaveraMonthRow,
} from "./cuadre";

const row = (overrides: Partial<PrimaveraMonthRow>): PrimaveraMonthRow => ({
  employeeId: "0001",
  month: 1,
  earnings: 100,
  earningsConcepts: 100,
  deductions: 30,
  deductionsConcepts: 30,
  net: 70,
  ...overrides,
});

describe("parsePrimaveraParameters", () => {
  it("uses the whole year when no month is given", () => {
    expect(parsePrimaveraParameters({ year: 2026 })).toEqual({
      ok: true,
      value: {
        year: 2026,
        fromMonth: 1,
        toMonth: 12,
        wholeYear: true,
        from: "2026-01-01",
        to: "2027-01-01",
      },
    });
  });

  it("accepts a single month or a range", () => {
    const single = parsePrimaveraParameters({ year: 2026, fromMonth: 10 });
    expect(single.ok && [single.value.from, single.value.to]).toEqual(["2026-10-01", "2026-11-01"]);
    const range = parsePrimaveraParameters({
      year: 2026,
      fromMonth: 1,
      toMonth: 10,
    });
    expect(range.ok && [range.value.from, range.value.to, range.value.wholeYear]).toEqual([
      "2026-01-01",
      "2026-11-01",
      false,
    ]);
  });

  it("rejects invalid years and ranges", () => {
    expect(parsePrimaveraParameters({ year: 1999 }).ok).toBe(false);
    expect(parsePrimaveraParameters({ year: 2026, fromMonth: 5, toMonth: 2 }).ok).toBe(false);
    expect(parsePrimaveraParameters({ year: 2026, fromMonth: 13 }).ok).toBe(false);
    expect(parsePrimaveraParameters(null).ok).toBe(false);
  });
});

describe("primaveraColumns", () => {
  const accrual = new Set(["CSP_PT_VENCIMIENTO", "CSP_I_RETRIB_VARIABLE", "CSP_PT_IRS", "CSP_A"]);

  it("applies the renames, skips missing columns and deduplicates", () => {
    const codes = [
      { type: "R", column: "CSP_PT_VENCIMENTO" },
      { type: "R", column: "CSP_I_RETRIB_VAR" },
      { type: "R", column: "CSP_A" },
      { type: "R", column: "CSP_A" },
      { type: "R", column: "CSP_PT_COMP_INSENCAO_HOR_TRA_C" },
      { type: "D", column: "CSP_PT_IRS" },
      { type: "D", column: "CSP_PT_IRS_NO_FIXAS" },
    ];
    expect(primaveraColumns(codes, accrual, "R")).toEqual([
      "CSP_PT_VENCIMIENTO",
      "CSP_I_RETRIB_VARIABLE",
      "CSP_A",
    ]);
    expect(primaveraColumns(codes, accrual, "D")).toEqual(["CSP_PT_IRS"]);
  });

  it("never interpolates identifiers outside the schema pattern", () => {
    const unsafe = new Set(["X]; DROP"]);
    expect(primaveraColumns([{ type: "R", column: "X]; DROP" }], unsafe, "R")).toEqual([]);
    expect(primaveraSumExpression([])).toBe("0");
    expect(primaveraSumExpression(["CSP_A", "CSP_B"])).toBe(
      "ISNULL(a.[CSP_A],0) + ISNULL(a.[CSP_B],0)",
    );
  });
});

describe("buildPrimaveraMonths", () => {
  it("marks mismatches beyond the 0.01 tolerance", () => {
    const period = parsePrimaveraParameters({ year: 2026, fromMonth: 1 });
    if (!period.ok) throw new Error("period");
    const [month] = buildPrimaveraMonths(period.value, [
      row({ employeeId: "0002", earningsConcepts: 100.005 }),
      row({ employeeId: "0001", deductionsConcepts: 29 }),
    ]);
    expect(month?.rows.map((entry) => [entry.employeeId, entry.ok])).toEqual([
      ["0001", false],
      ["0002", true],
    ]);
    expect(month?.status).toBe("mismatch");
    expect(month?.mismatches).toBe(1);
  });

  it("trims trailing empty months of a whole year but keeps gaps", () => {
    const period = parsePrimaveraParameters({ year: 2026 });
    if (!period.ok) throw new Error("period");
    const months = buildPrimaveraMonths(period.value, [row({ month: 1 }), row({ month: 3 })]);
    expect(months.map((month) => [month.month, month.status])).toEqual([
      [1, "ok"],
      [2, "empty"],
      [3, "ok"],
    ]);
  });

  it("keeps every requested month of an explicit range", () => {
    const period = parsePrimaveraParameters({
      year: 2026,
      fromMonth: 10,
      toMonth: 11,
    });
    if (!period.ok) throw new Error("period");
    expect(
      buildPrimaveraMonths(period.value, [row({ month: 10 })]).map((month) => month.status),
    ).toEqual(["ok", "empty"]);
  });
});
