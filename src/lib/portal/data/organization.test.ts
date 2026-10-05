import { beforeEach, describe, expect, it, vi } from "vitest";
import { assertReadOnlySql } from "../peoplenet/query";

const mocks = vi.hoisted(() => ({ select: vi.fn(), emails: vi.fn() }));
vi.mock("../peoplenet/query", async (original) => ({
  ...(await original<typeof import("../peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
vi.mock("@/lib/peoplenet/employees", () => ({ getEmployeeEmailsByPersonId: mocks.emails }));
import { getOwnFile, getDirectoryPerson, searchDirectory } from "./organization";
import { PortalDataAmbiguousError } from "./errors";
import { getOwnPaymentAccounts } from "./payments";
beforeEach(() => vi.clearAllMocks());

describe("lecturas ORO parametrizadas", () => {
  it("limita personas únicas y filtra siempre por sociedad", async () => {
    mocks.select.mockResolvedValue([
      { ID_EMPLEADO: "001471", NOMBRE: "Ana" },
      { ID_EMPLEADO: "001471", NOMBRE: "Ana" },
    ]);
    expect(await searchDirectory("IBER", "An%")).toHaveLength(1);
    const [statement, params] = mocks.select.mock.calls[0];
    expect(() => assertReadOnlySql(statement)).not.toThrow();
    expect(statement).toContain("GROUP BY ID_EMPLEADO");
    expect(params.organization.value).toBe("IBER");
    expect(params.pattern.value).toBe("%An!%%");
  });
  it("colapsa ficha equivalente y no carga correos junto a ella", async () => {
    mocks.select.mockResolvedValue([
      { ID_EMPLEADO: "001471", NOMBRE: "Ana" },
      { ID_EMPLEADO: "001471", NOMBRE: "Ana " },
    ]);
    expect(await getOwnFile("CYC", "001471")).toMatchObject({ person: { employeeId: "001471" } });
    expect(mocks.emails).not.toHaveBeenCalled();
    expect(mocks.select.mock.calls[0][1].employeeId.value).toBe("001471");
    mocks.select.mockResolvedValue([
      { ID_EMPLEADO: "001471", NOMBRE: "Ana" },
      { ID_EMPLEADO: "001471", NOMBRE: "Eva" },
    ]);
    await expect(getOwnFile("CYC", "001471")).rejects.toBeInstanceOf(PortalDataAmbiguousError);
  });
  it("el directorio no selecciona columnas personales ni elige una asignación", async () => {
    mocks.select.mockResolvedValue([
      { ID_EMPLEADO: "1", N_PUESTO: "A" },
      { ID_EMPLEADO: "1", N_PUESTO: "B" },
    ]);
    expect(await getDirectoryPerson("COLL", "1")).toMatchObject({ person: { job: "A / B" } });
    const [statement, params] = mocks.select.mock.calls[0];
    expect(statement).not.toContain("ID_LEGAL");
    expect(statement).not.toContain("FEC_NACIMIENTO");
    expect(params.organization.value).toBe("COLL");
  });
  it("las cuentas usan SELECT y sociedad/matrícula del servidor", async () => {
    mocks.select.mockResolvedValue([]);
    await getOwnPaymentAccounts("IBER", "001471");
    const [statement, params] = mocks.select.mock.calls[0];
    expect(() => assertReadOnlySql(statement)).not.toThrow();
    expect(params.organization.value).toBe("IBER");
    expect(params.employeeId.value).toBe("001471");
    expect(statement).toContain("SCO_EMP_CHECK = '1'");
  });
});
