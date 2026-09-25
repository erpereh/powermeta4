import type sql from "mssql";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { getPeopleNetPool } from "./client";
import {
  EMPLOYEE_FIELD_COLUMNS,
  getEmployeeById,
  getEmployeeEmailsByPersonId,
  PeopleNetEmployeeAmbiguousError,
  type PeopleNetEmployeeEmailRow,
  type PeopleNetEmployeeRow,
} from "./employees";

vi.mock("./client", () => ({ getPeopleNetPool: vi.fn() }));

const employeeRow = (values: Partial<PeopleNetEmployeeRow> = {}): PeopleNetEmployeeRow =>
  Object.fromEntries(
    EMPLOYEE_FIELD_COLUMNS.map(([column]) => [column, values[column] ?? null]),
  ) as PeopleNetEmployeeRow;

const request = {
  input: vi.fn(),
  query: vi.fn(
    async (_statement: string): Promise<{ recordset: unknown[] }> => ({ recordset: [] }),
  ),
};
request.input.mockReturnValue(request);
const pool = { request: vi.fn(() => request) };

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getPeopleNetPool).mockResolvedValue(pool as unknown as sql.ConnectionPool);
});

describe("PeopleNet employee repository", () => {
  it("queries all employee fields using bound employee and server society parameters", async () => {
    const row = employeeRow({ ID_EMPLEADO: "001013", ID_ORGANIZATION: "CYC" });
    request.query.mockResolvedValueOnce({ recordset: [row] });

    expect(await getEmployeeById("001013", "CYC")).toBe(row);
    expect(request.input).toHaveBeenCalledWith("employeeId", expect.anything(), "001013");
    expect(request.input).toHaveBeenCalledWith("organization", expect.anything(), "CYC");
    const statement = request.query.mock.calls[0]?.[0] ?? "";
    expect(statement).toContain("FROM M4ORO_EMPLEADOS");
    expect(statement).toContain(
      "WHERE ID_EMPLEADO = @employeeId AND ID_ORGANIZATION = @organization",
    );
    expect(statement).not.toContain("001013");
    for (const [column] of EMPLOYEE_FIELD_COLUMNS) expect(statement).toContain(column);
  });

  it("returns null for no employee and rejects ambiguous rows", async () => {
    request.query.mockResolvedValueOnce({ recordset: [] });
    expect(await getEmployeeById("1013", "CYC")).toBeNull();

    request.query.mockResolvedValueOnce({ recordset: [employeeRow(), employeeRow()] });
    await expect(getEmployeeById("1013", "CYC")).rejects.toBeInstanceOf(
      PeopleNetEmployeeAmbiguousError,
    );
  });

  it("retrieves every STD_EMAIL row with a bound person id", async () => {
    const emails: PeopleNetEmployeeEmailRow[] = [
      {
        STD_OR_MAIL: 2,
        STD_DT_START: null,
        STD_DT_END: null,
        STD_EMAIL: "second@example.test",
        STD_ID_LOCAT_TYPE: "2",
        DT_LAST_UPDATE: null,
      },
      {
        STD_OR_MAIL: 1,
        STD_DT_START: null,
        STD_DT_END: null,
        STD_EMAIL: "first@example.test",
        STD_ID_LOCAT_TYPE: "2",
        DT_LAST_UPDATE: null,
      },
    ];
    request.query.mockResolvedValueOnce({ recordset: emails });

    expect(await getEmployeeEmailsByPersonId("001013")).toEqual(emails);
    expect(request.input).toHaveBeenCalledWith("employeeId", expect.anything(), "001013");
    expect(request.input).not.toHaveBeenCalledWith("organization", expect.anything(), "CYC");
    const statement = request.query.mock.calls[0]?.[0] ?? "";
    expect(statement).toContain("FROM STD_EMAIL");
    expect(statement).toContain("WHERE STD_ID_PERSON = @employeeId");
    expect(statement).not.toContain("001013");
  });
});
