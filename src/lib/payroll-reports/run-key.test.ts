import { describe, expect, it } from "vitest";

import { parsePayrollReportRunKey, payrollReportRunId } from "./run-key";

const key = {
  reportId: "01_C",
  runAt: "2026-10-06T10:49:34.000Z",
  accruedOn: "2026-09-25",
  payFrequency: "004",
};

describe("parsePayrollReportRunKey", () => {
  it("accepts a run key", () => {
    expect(parsePayrollReportRunKey({ ...key, organization: "OTRA" })).toEqual({
      ok: true,
      value: key,
    });
    expect(payrollReportRunId(key)).toBe("01_C|2026-10-06T10:49:34.000Z|2026-09-25|004");
  });

  it.each([
    { ...key, reportId: "01'; --" },
    { ...key, runAt: "2026-10-06" },
    { ...key, accruedOn: "25/09/2026" },
    { ...key, payFrequency: 4 },
    null,
  ])("rejects %j", (input) => {
    expect(parsePayrollReportRunKey(input).ok).toBe(false);
  });
});
