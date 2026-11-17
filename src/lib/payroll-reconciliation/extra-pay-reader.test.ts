import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ read: vi.fn() }));
vi.mock("@/lib/portal/peoplenet/query", async (original) => ({
  ...(await original<typeof import("@/lib/portal/peoplenet/query")>()),
  runPortalSelect: mocks.read,
}));
import { captureAutomaticExtras } from "./extra-pay-reader";
import { automaticExtraFixture } from "./extra-pay.fixture";
import { EXTRA_PAY_SQL, EXTRA_PAY_UNSUPPORTED_SQL, EXTRA_PAY_APPLIED_SQL } from "./extra-pay-sql";
import { assertReadOnlySql } from "@/lib/portal/peoplenet/query";

beforeEach(() => vi.resetAllMocks());
describe("grouped automatic extra reader", () => {
  it.each(["2026-07", "2026-10"])(
    "uses guarded parametrized SELECTs and eight grouped reads for %s",
    async (period) => {
      const input = automaticExtraFixture(period, period === "2026-07" ? "historical" : "R1");
      if (period === "2026-07")
        input.data.rules[0] = { ...input.data.rules[0], DATE_TO: "4000-01-01" };
      const queries = {
        ...EXTRA_PAY_SQL,
        unsupported: EXTRA_PAY_UNSUPPORTED_SQL,
        applied: EXTRA_PAY_APPLIED_SQL,
      };
      for (const query of Object.values(queries))
        expect(() => assertReadOnlySql(query)).not.toThrow();
      mocks.read.mockImplementation(async (sql: string) => {
        const entry = Object.entries(queries).find(([, query]) => query === sql);
        return entry ? input.data[entry[0] as keyof typeof input.data] : [];
      });
      const before = structuredClone(input.current);
      const result = await captureAutomaticExtras(input.current);
      expect(result.extraPayAutomatic?.people[0].issue).toBeUndefined();
      expect(result.extraPayAutomatic?.rule?.variant).toBe(
        period === "2026-07" ? "r1-through-july-2026" : "r1-aug-oct-2026",
      );
      expect(result.extraPayAutomatic?.rule?.versions[0].validTo).toBe(
        period === "2026-07" ? "4000-01-01" : "2026-10-31",
      );
      expect(EXTRA_PAY_SQL.rules).toContain("R.RULE_ORDER");
      // Eight configuration reads plus the recalculated-accrual explanation.
      expect(mocks.read).toHaveBeenCalledTimes(9);
      for (const [, parameters] of mocks.read.mock.calls) {
        expect(parameters.organization.value).toBe("CYC");
        expect(parameters.correctionDate.value.toISOString()).toBe(input.current.run.runAt);
        expect(parameters.frequency.value).toBe(input.current.run.payFrequency);
      }
      expect(result.hash).not.toBe(before.hash);
      expect(input.current).toEqual(before);
    },
  );
  it("isolates an unavailable SQL contract to C04 and retains the report", async () => {
    const input = automaticExtraFixture();
    mocks.read.mockRejectedValue(new Error("Unreachable"));
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const result = await captureAutomaticExtras(input.current);
    expect(result.rows).toEqual(input.current.rows);
    expect(result.extraPayAutomatic?.issue).toContain("No se ha podido acreditar");
    expect(result.extraPayAutomatic?.people).toEqual([]);
    log.mockRestore();
  });
  it.each(["2026-07", "2026-11", "2027-01"])(
    "reads %s configuration without querying indicators when the rule preserves definitions",
    async (period) => {
      const input = automaticExtraFixture(period, "definition");
      const needed = ["rules", "payroll", "histories", "definitions", "recalculated"] as const;
      mocks.read.mockImplementation(async (sql: string) => {
        const key = needed.find((key) => EXTRA_PAY_SQL[key] === sql);
        if (!key) throw new Error("UnusedIndicatorQuery");
        return input.data[key] ?? [];
      });
      const result = await captureAutomaticExtras(input.current);
      expect(mocks.read).toHaveBeenCalledTimes(5);
      expect(result.extraPayAutomatic?.issue).toBeUndefined();
      expect(result.extraPayAutomatic?.rule?.mode).toBe("definition");
      expect(result.extraPayAutomatic?.people[0]).toMatchObject({ monthlyFull: true });
      expect(result.extraPayAutomatic?.people[0].issue).toBeUndefined();
      expect(mocks.read.mock.calls[0][1].firstDay.value.toISOString().slice(0, 7)).toBe(period);
      expect(mocks.read.mock.calls[0][1].correctionDate.value.toISOString()).toBe(
        input.current.run.runAt,
      );
    },
  );
  it("keeps an unknown later executable pending even when its validity covers the month", async () => {
    const input = automaticExtraFixture("2026-11");
    mocks.read.mockResolvedValue([
      { ...input.data.rules[0], DATE_TO: "4000-01-01", SOURCE: "Return(0)" },
    ]);
    const result = await captureAutomaticExtras(input.current);
    expect(mocks.read).toHaveBeenCalledTimes(1);
    expect(result.extraPayAutomatic?.issue).toContain("R1");
    expect(result.extraPayAutomatic?.issue).toContain("2026-11");
  });
  it("isolates a failed July definition read to C04 and retains the saved report", async () => {
    const input = automaticExtraFixture("2026-07", "definition");
    mocks.read.mockImplementation(async (sql: string) => {
      if (sql === EXTRA_PAY_SQL.rules) return input.data.rules;
      if (sql === EXTRA_PAY_SQL.definitions) throw new Error("UnavailableDefinition");
      return [];
    });
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      const result = await captureAutomaticExtras(input.current);
      expect(result.rows).toEqual(input.current.rows);
      expect(result.extraPayAutomatic?.issue).toContain("No se ha podido acreditar");
      expect(result.extraPayAutomatic?.rule?.mode).toBe("definition");
      expect(mocks.read).toHaveBeenCalledTimes(5);
    } finally {
      log.mockRestore();
    }
  });
  it("retains the recognized historical rule if a later grouped SQL read fails", async () => {
    const input = automaticExtraFixture("2026-07", "historical");
    mocks.read.mockImplementation(async (sql: string) => {
      if (sql === EXTRA_PAY_SQL.rules) return input.data.rules;
      throw new Error("UnavailablePayroll");
    });
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    try {
      const result = await captureAutomaticExtras(input.current);
      expect(result.rows).toEqual(input.current.rows);
      expect(result.extraPayAutomatic?.issue).toContain("No se ha podido acreditar");
      expect(result.extraPayAutomatic?.rule).toMatchObject({
        mode: "R1",
        variant: "r1-through-july-2026",
      });
    } finally {
      log.mockRestore();
    }
  });
});
