import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  EMPLOYEE_FIELD_COLUMNS,
  getEmployeeById,
  getEmployeeEmailsByPersonId,
  PeopleNetEmployeeAmbiguousError,
  type PeopleNetEmployeeEmailRow,
  type PeopleNetEmployeeRow,
} from "./employees";
import {
  getPeopleNetEmployeeDetail,
  mapEmployeeEmails,
  mapEmployeeFields,
  PeopleNetEmployeeDetailError,
} from "./employee-detail";

vi.mock("./employees", async (importOriginal) => ({
  ...(await importOriginal<typeof import("./employees")>()),
  getEmployeeById: vi.fn(),
  getEmployeeEmailsByPersonId: vi.fn(),
}));

const employeeRow = (values: Partial<PeopleNetEmployeeRow> = {}): PeopleNetEmployeeRow =>
  Object.fromEntries(
    EMPLOYEE_FIELD_COLUMNS.map(([column]) => [column, values[column] ?? null]),
  ) as PeopleNetEmployeeRow;

const emailRow = (values: Partial<PeopleNetEmployeeEmailRow> = {}): PeopleNetEmployeeEmailRow => ({
  STD_OR_MAIL: null,
  STD_DT_START: null,
  STD_DT_END: null,
  STD_EMAIL: null,
  STD_ID_LOCAT_TYPE: null,
  DT_LAST_UPDATE: null,
  ...values,
});

beforeEach(() => vi.clearAllMocks());

describe("PeopleNet employee detail mapping", () => {
  it("keeps the former SOAP field keys, leading zeros, dates and null behavior", () => {
    const fields = mapEmployeeFields(
      employeeRow({
        ID_ORGANIZATION: "CYC",
        ID_EMPLEADO: "001013",
        NOMBRE: " Alberto ",
        APELLIDO_1: "Olalla",
        CLAVE_SELF: "aolalla",
        NUM_AFILIACION_SS: "001234",
        FEC_ALTA_EMPLEADO: new Date("2004-03-01T00:00:00.000Z"),
        CORREO2: "",
      }),
    );

    expect(fields).toMatchObject({
      id_Organization: "CYC",
      id_Empleado: "001013",
      nombre: "Alberto",
      apellido_1: "Olalla",
      clave_Self: "aolalla",
      num_Afiliacion_Ss: "001234",
      fec_Alta_Empleado: "2004-03-01T00:00:00.000Z",
      correo2: "",
    });
    expect(fields).not.toHaveProperty("apellido_2");
    expect(fields).not.toHaveProperty("ID_EMPLEADO");
  });

  it("keeps all nonblank emails and the open-ended date sentinel", () => {
    const emails = mapEmployeeEmails([
      emailRow({
        STD_EMAIL: " first@example.test ",
        STD_OR_MAIL: 2,
        STD_DT_START: new Date("2004-03-01T00:00:00.000Z"),
        STD_DT_END: new Date("4000-01-01T00:00:00.000Z"),
        STD_ID_LOCAT_TYPE: 2,
      }),
      emailRow({ STD_EMAIL: "  " }),
      emailRow({ STD_EMAIL: "second@example.test", STD_OR_MAIL: 1 }),
    ]);

    expect(emails).toEqual([
      {
        email: "first@example.test",
        order: "2",
        startDate: "2004-03-01T00:00:00.000Z",
        endDate: "4000-01-01T00:00:00.000Z",
        locationTypeCode: "2",
      },
      {
        email: "second@example.test",
        order: "1",
        startDate: "",
        endDate: "",
        locationTypeCode: "",
      },
    ]);
  });
});

describe("getPeopleNetEmployeeDetail", () => {
  it("combines the selected employee with all email rows", async () => {
    vi.mocked(getEmployeeById).mockResolvedValue(employeeRow({ NOMBRE: "Alberto" }));
    vi.mocked(getEmployeeEmailsByPersonId).mockResolvedValue([
      emailRow({ STD_EMAIL: "one@example.test" }),
      emailRow({ STD_EMAIL: "two@example.test" }),
    ]);

    const detail = await getPeopleNetEmployeeDetail("1013", "CYC");
    expect(getEmployeeById).toHaveBeenCalledWith("1013", "CYC");
    expect(getEmployeeEmailsByPersonId).toHaveBeenCalledWith("1013");
    expect(detail.employeeId).toBe("1013");
    expect(detail.fields.nombre).toBe("Alberto");
    expect(detail.emails.map((email) => email.email)).toEqual([
      "one@example.test",
      "two@example.test",
    ]);
  });

  it("does not query emails when the employee is missing or ambiguous", async () => {
    vi.mocked(getEmployeeById).mockResolvedValueOnce(null);
    await expect(getPeopleNetEmployeeDetail("1013", "CYC")).rejects.toMatchObject({
      code: "NOT_FOUND",
    });
    expect(getEmployeeEmailsByPersonId).not.toHaveBeenCalled();

    vi.mocked(getEmployeeById).mockRejectedValueOnce(new PeopleNetEmployeeAmbiguousError());
    await expect(getPeopleNetEmployeeDetail("1013", "CYC")).rejects.toMatchObject({
      code: "AMBIGUOUS",
    });
    expect(getEmployeeEmailsByPersonId).not.toHaveBeenCalled();
  });

  it("hides raw SQL failure details from the caller", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.mocked(getEmployeeById).mockRejectedValue(new Error("SQL secret connection string"));

    await expect(getPeopleNetEmployeeDetail("1013", "CYC")).rejects.toEqual(
      new PeopleNetEmployeeDetailError(
        "FETCH_FAILED",
        "No se ha podido cargar el detalle del empleado desde Meta4.",
      ),
    );
    expect(JSON.stringify(log.mock.calls)).not.toContain("secret connection string");
    log.mockRestore();
  });
});
