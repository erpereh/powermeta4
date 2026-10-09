import { describe, expect, it } from "vitest";

import { parseQuinquenalParameters } from "./parameters";

describe("parseQuinquenalParameters", () => {
  it("accepts every employee when there is no employee id", () => {
    expect(parseQuinquenalParameters({})).toEqual({ ok: true, value: {} });
    expect(parseQuinquenalParameters(undefined)).toEqual({ ok: true, value: {} });
    expect(parseQuinquenalParameters({ employeeId: "" })).toEqual({ ok: true, value: {} });
  });

  it("trims a valid employee id", () => {
    expect(parseQuinquenalParameters({ employeeId: " 9001 " })).toEqual({
      ok: true,
      value: { employeeId: "9001" },
    });
  });

  it("rejects invalid input", () => {
    expect(parseQuinquenalParameters({ employeeId: "90 OR 1=1" }).ok).toBe(false);
    expect(parseQuinquenalParameters({ employeeId: 9001 }).ok).toBe(false);
    expect(parseQuinquenalParameters([]).ok).toBe(false);
  });
});
