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
  it("uses only guarded parametrized SELECTs and eight grouped reads for the full population", async () => {
    const input = automaticExtraFixture();
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
    expect(mocks.read).toHaveBeenCalledTimes(8);
    for (const [, parameters] of mocks.read.mock.calls) {
      expect(parameters.organization.value).toBe("CYC");
      expect(parameters.correctionDate.value.toISOString()).toBe(input.current.run.runAt);
      expect(parameters.frequency.value).toBe(input.current.run.payFrequency);
    }
    expect(result.hash).not.toBe(before.hash);
    expect(input.current).toEqual(before);
  });
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
  it("does not query or extrapolate the confirmed rule for November", async () => {
    const input = automaticExtraFixture();
    input.current.run.accruedOn = "2026-11-25";
    expect((await captureAutomaticExtras(input.current)).extraPayAutomatic?.issue).toContain(
      "agosto a octubre",
    );
    expect(mocks.read).not.toHaveBeenCalled();
  });
});
