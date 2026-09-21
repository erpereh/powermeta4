import { describe, expect, it } from "vitest";

import { toExcelSerialDate, WRITTEN_COLUMNS, UNKNOWN_DO_NOT_WRITE_COLUMNS } from "./mapping";

describe("hire mapping", () => {
  it("converts ISO dates to Excel serials without using example values as defaults", () => {
    expect(toExcelSerialDate("1990-01-01")).toBe(32874);
    expect(toExcelSerialDate("2026-09-15")).toBe(46280);
  });

  it("does not write unknown personal or payroll columns", () => {
    const written = new Set(WRITTEN_COLUMNS);
    for (const column of UNKNOWN_DO_NOT_WRITE_COLUMNS) {
      expect(written.has(column)).toBe(false);
    }
    expect(written.has("IQ")).toBe(false);
    expect(written.has("AC")).toBe(false);
    expect(written.has("GJ")).toBe(false);
  });
});
