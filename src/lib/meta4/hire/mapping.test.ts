import { describe, expect, it } from "vitest";

import { MANUAL_COLUMNS, TEMPLATE_LEGAL_ENTITY_COLUMNS, WRITTEN_COLUMNS, toExcelSerialDate } from "./mapping";

describe("hire mapping", () => {
  it("converts ISO dates to Excel serials without using example values as defaults", () => {
    expect(toExcelSerialDate("1990-01-01")).toBe(32874);
    expect(toExcelSerialDate("2026-09-15")).toBe(46280);
  });

  it("writes duplicate email and identity columns and leaves legal entity to the template", () => {
    expect(MANUAL_COLUMNS.email).toEqual(["AY", "IQ"]);
    expect(WRITTEN_COLUMNS).toContain("IQ");
    expect(WRITTEN_COLUMNS).toContain("AY");
    expect(WRITTEN_COLUMNS).toContain("Y");
    expect(WRITTEN_COLUMNS).not.toContain(TEMPLATE_LEGAL_ENTITY_COLUMNS[0]);
    expect(WRITTEN_COLUMNS).not.toContain(TEMPLATE_LEGAL_ENTITY_COLUMNS[1]);
  });
});
