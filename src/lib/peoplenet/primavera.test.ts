import type sql from "mssql";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { assertReadOnlySql } from "@/lib/portal/peoplenet/query";
import { parsePrimaveraParameters } from "@/lib/primavera/cuadre";

import { getPeopleNetPool } from "./client";
import { getPrimaveraReport } from "./primavera";

vi.mock("./client", () => ({ getPeopleNetPool: vi.fn() }));

const inputs: [string, unknown][] = [];
const statements: string[] = [];

const request = {
  input: vi.fn((name: string, _type: unknown, value: unknown) => {
    inputs.push([name, value]);
    return request;
  }),
  query: vi.fn(async (statement: string): Promise<{ recordset: unknown[] }> => {
    statements.push(statement);
    if (statement.includes("DB_NAME()")) {
      return { recordset: [{ DATABASE_NAME: "M4PRENOMINA" }] };
    }
    if (statement.includes("INFORMATION_SCHEMA.COLUMNS")) {
      return {
        recordset: [{ COLUMN_NAME: "CSP_PT_VENCIMIENTO" }, { COLUMN_NAME: "CSP_PT_IRS" }],
      };
    }
    if (statement.includes("M4CSP_CODIGOS_PRIMAVERA")) {
      return {
        recordset: [
          { CODE_TYPE: "R", CSP_COLUMNA: "CSP_PT_VENCIMENTO" },
          { CODE_TYPE: "D", CSP_COLUMNA: "CSP_PT_IRS" },
          { CODE_TYPE: "D", CSP_COLUMNA: "CSP_PT_IRS_NO_FIXAS" },
        ],
      };
    }
    return {
      recordset: [
        { EMPLOYEE_ID: "0398", PAY_MONTH: 10, DEV: 100, SR: 100, RET: 20, SD: 20, LIQ: 80 },
        { EMPLOYEE_ID: "0938", PAY_MONTH: 10, DEV: 100, SR: 90, RET: 20, SD: 20, LIQ: 80 },
      ],
    };
  }),
};
const pool = { request: vi.fn(() => request) };

beforeEach(() => {
  vi.clearAllMocks();
  inputs.length = 0;
  statements.length = 0;
  vi.mocked(getPeopleNetPool).mockResolvedValue(pool as unknown as sql.ConnectionPool);
});

describe("getPrimaveraReport", () => {
  it("reads only with SELECT, the active society and its Portuguese legal entity", async () => {
    const period = parsePrimaveraParameters({ year: 2026, fromMonth: 10 });
    if (!period.ok) throw new Error("period");

    const report = await getPrimaveraReport("IBER", period.value);

    expect(statements).toHaveLength(4);
    for (const statement of statements) expect(() => assertReadOnlySql(statement)).not.toThrow();
    const cuadre = statements.find((statement) => statement.includes("GROUP BY")) ?? "";
    expect(cuadre).toContain("ISNULL(a.[CSP_PT_VENCIMIENTO],0) AS SR");
    expect(cuadre).toContain("ISNULL(a.[CSP_PT_IRS],0) AS SD");
    expect(cuadre).not.toContain("CSP_PT_IRS_NO_FIXAS");
    expect(inputs).toContainEqual(["organization", "IBER"]);
    expect(inputs).toContainEqual(["legalEntity", "IBER PORT"]);

    expect(report).toMatchObject({
      society: "IBER",
      legalEntity: "IBER PORT",
      database: "M4PRENOMINA",
      year: 2026,
      fromMonth: 10,
      toMonth: 10,
      wholeYear: false,
    });
    expect(report.months).toHaveLength(1);
    expect(report.months[0]?.status).toBe("mismatch");
    expect(report.months[0]?.rows.map((row) => [row.employeeId, row.ok])).toEqual([
      ["0398", true],
      ["0938", false],
    ]);
  });
});
