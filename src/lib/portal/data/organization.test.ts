import { beforeEach, describe, expect, it, vi } from "vitest";
import { assertReadOnlySql } from "../peoplenet/query";

const mocks = vi.hoisted(() => ({ select: vi.fn(), emails: vi.fn() }));
vi.mock("../peoplenet/query", async (original) => ({
  ...(await original<typeof import("../peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
vi.mock("@/lib/peoplenet/employees", () => ({ getEmployeeEmailsByPersonId: mocks.emails }));
import {
  getOwnFile,
  getDirectoryPerson,
  searchDirectory,
  getPersonHierarchy,
  getOrgTree,
} from "./organization";
import { PortalDataAmbiguousError } from "./errors";
import { getOwnPaymentAccounts } from "./payments";
beforeEach(() => vi.clearAllMocks());

describe("lecturas ORO parametrizadas", () => {
  it("filtra el organigrama y su jerarquía por sociedad y COMPUTA con parámetros", async () => {
    mocks.select
      .mockResolvedValueOnce([
        { ID_ORGANIZATION: "CYC", ID_EMPLEADO: "2", ID_RESPONSABLE: "1", COMPUTA: "1" },
      ])
      .mockResolvedValueOnce([]);
    expect(await getPersonHierarchy("CYC", "2")).toMatchObject({
      managerStatus: "missing",
      reports: [],
    });
    for (const [statement, params] of mocks.select.mock.calls) {
      expect(() => assertReadOnlySql(statement)).not.toThrow();
      expect(statement).toContain("COMPUTA = '1'");
      expect(params.organization.value).toBe("CYC");
      expect(params.employeeId.value).toBe("2");
      expect(statement).not.toContain("FEC_NACIMIENTO");
    }
    expect(mocks.select.mock.calls[1][1].managerId.value).toBe("1");
    mocks.select.mockResolvedValueOnce([]);
    expect(await getPersonHierarchy("IBER", "2")).toBeNull();
    const count = mocks.select.mock.calls.length;
    expect(await getPersonHierarchy("CYC", "../2")).toBeNull();
    expect(mocks.select).toHaveBeenCalledTimes(count);
    mocks.select.mockResolvedValueOnce([]);
    await getOrgTree("IBER");
    expect(mocks.select.mock.calls.at(-1)?.[0]).toContain("COMPUTA = '1'");
  });
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
