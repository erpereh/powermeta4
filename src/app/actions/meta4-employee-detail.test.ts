import { beforeEach, describe, expect, it, vi } from "vitest";

import { requireAuthContext } from "@/lib/auth/session";
import { listMeta4Users } from "@/lib/meta4/users/service";
import { getPeopleNetEmployeeDetail } from "@/lib/peoplenet/employee-detail";

import { getMeta4EmployeeDetailViewAction } from "./meta4-employee-detail";

vi.mock("@/lib/auth/session", () => ({ requireAuthContext: vi.fn() }));
vi.mock("@/lib/meta4/users/service", () => ({ listMeta4Users: vi.fn() }));
vi.mock("@/lib/peoplenet/employee-detail", () => ({
  getPeopleNetEmployeeDetail: vi.fn(),
  PeopleNetEmployeeDetailError: class PeopleNetEmployeeDetailError extends Error {
    constructor(
      readonly code: string,
      message: string,
    ) {
      super(message);
    }
  },
}));

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(requireAuthContext).mockResolvedValue(
    {} as Awaited<ReturnType<typeof requireAuthContext>>,
  );
  vi.mocked(listMeta4Users).mockResolvedValue({
    society: "CYC",
    users: [{ id: "1013", fullName: "Alberto Olalla", claveSelf: "aolalla" }],
  });
});

describe("getMeta4EmployeeDetailViewAction", () => {
  it("keeps the UI result, labels and numeric email ordering", async () => {
    vi.mocked(getPeopleNetEmployeeDetail).mockResolvedValue({
      employeeId: "1013",
      fields: {
        id_Empleado: "1013",
        nombre: "Alberto",
        apellido_1: "Olalla",
        n_Puesto: "Analista",
      },
      emails: [
        {
          email: "second@example.test",
          order: "2",
          startDate: "2004-03-01T00:00:00.000Z",
          endDate: "4000-01-01T00:00:00.000Z",
          locationTypeCode: "2",
        },
        {
          email: "first@example.test",
          order: "1",
          startDate: "2004-03-01T00:00:00.000Z",
          endDate: "4000-01-01T00:00:00.000Z",
          locationTypeCode: "2",
        },
      ],
    });

    const view = await getMeta4EmployeeDetailViewAction("1013");
    expect(getPeopleNetEmployeeDetail).toHaveBeenCalledWith("1013", "CYC");
    expect(view).toMatchObject({
      available: true,
      employeeId: "1013",
      displayName: "Alberto Olalla",
      message: null,
    });
    expect(view.sections[0]).toMatchObject({
      title: "Datos personales",
      fields: expect.arrayContaining([{ key: "nombre", label: "Nombre", value: "Alberto" }]),
    });
    expect(view.emails.map((email) => email.email)).toEqual([
      "first@example.test",
      "second@example.test",
    ]);
    expect(view.emails.every((email) => email.dateRange.endsWith("Vigente"))).toBe(true);
  });

  it("does not query PeopleNet for an employee outside the active society list", async () => {
    const view = await getMeta4EmployeeDetailViewAction("9999");
    expect(getPeopleNetEmployeeDetail).not.toHaveBeenCalled();
    expect(view).toMatchObject({
      available: false,
      employeeId: "9999",
      message: "Este empleado no pertenece a la sociedad activa.",
      sections: [],
      emails: [],
    });
  });
});
