import { describe, expect, it } from "vitest";

import { FIXTURE_HEADERS, fixtureBlob } from "./payroll-report.fixture";
import {
  parsePayrollReportBlob,
  payrollReportCell,
  PayrollReportDataError,
  payrollReportRows,
} from "./result-data";

describe("parsePayrollReportBlob", () => {
  it("reads the Meta4 header, tab separated text and CRLF lines", () => {
    const table = parsePayrollReportBlob(fixtureBlob());

    expect(table.headers).toEqual(FIXTURE_HEADERS);
    expect(table.rawRows).toHaveLength(4);
    expect(table.rawRows[0]?.[0]).toBe("'9001");
    expect(table.rawRows[0]?.[8]).toBe("");
  });

  it("treats a header-only blob as a run without rows", () => {
    expect(parsePayrollReportBlob(Uint8Array.from([126, 66, 76, 79, 66, 68, 0, 0]))).toEqual({
      headers: [],
      rawRows: [],
    });
    expect(parsePayrollReportBlob(null)).toEqual({ headers: [], rawRows: [] });
  });

  it("rejects data without the Meta4 signature", () => {
    expect(() => parsePayrollReportBlob(Uint8Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]))).toThrow(
      PayrollReportDataError,
    );
  });
});

describe("payrollReportCell", () => {
  it("converts cells as Excel does when Meta4 pastes them", () => {
    expect(payrollReportCell("'9001", "Id Empleado")).toBe("9001");
    expect(payrollReportCell("'0028", "Id Cabecera TC1")).toBe("'0028");
    expect(payrollReportCell("1451.3500", "Salario Base")).toBe(1451.35);
    expect(payrollReportCell(" 01/01/2024", "Fecha de Alta")).toBe(" 01/01/2024");
    expect(payrollReportCell("2026-09-25 00:00:00", "Fecha de pago")).toEqual(
      new Date("2026-09-25T00:00:00.000Z"),
    );
    expect(payrollReportCell("", "Fin Previsto Contrato")).toBeNull();
  });

  it("converts every row in order", () => {
    const rows = payrollReportRows(parsePayrollReportBlob(fixtureBlob()));
    expect(rows[1]?.slice(0, 3)).toEqual(["9002", 1, "PRUEBA DOS, Luis"]);
  });
});
