import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";
import type { PortalContext } from "../context";
import { getPortalFeatureByRoute } from "../registry";
import { HOLIDAY_SQL } from "../registry/sql/holidays";
import { assertReadOnlySql, PortalSqlContractError } from "../peoplenet/query";
import { getHolidayCalendar } from "./holidays";

const mocks = vi.hoisted(() => ({ sql: vi.fn(), soap: vi.fn() }));
vi.mock("../peoplenet/query", async (original) => ({
  ...(await original<typeof import("../peoplenet/query")>()),
  runPortalSelect: mocks.sql,
}));
vi.mock("../soap/call", () => ({ callPortalService: mocks.soap }));

const context = (society: "CYC" | "IBER" | "COLL" = "CYC", employeeId = "0042"): PortalContext => ({
  mode: "meta4",
  society,
  variant: society,
  username: "TEST",
  identity: {
    status: "resolved",
    crossChecked: true,
    person: {
      employeeId,
      fullName: "Prueba",
      hireDate: null,
      job: null,
      unit: null,
      workCenter: null,
      managerId: null,
    },
  },
});
const assignment = {
  ROW_KIND: "assignment",
  SOURCE: "center",
  CALENDAR_ID: "C1",
  DATE_FROM: "2026-01-01",
  DATE_TO: "2026-12-31",
};
const holiday = {
  ROW_KIND: "holiday",
  CALENDAR_ID: "C1",
  HOLIDAY_DATE: "2026-08-15",
  DESCRIPTION: "Fiesta de prueba",
};

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-10-21T12:00:00Z"));
  mocks.sql
    .mockReset()
    .mockResolvedValueOnce([{ ROLE_ID: 1 }])
    .mockResolvedValue([assignment, holiday]);
  mocks.soap.mockReset();
});
afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("lectura real de festivos", () => {
  it.each(["CYC", "IBER", "COLL"] as const)(
    "filtra exclusivamente por la sociedad %s y matrícula del servidor",
    async (society) => {
      expect(await getHolidayCalendar(context(society, "0017"))).toEqual({
        status: "ok",
        society,
        data: { year: 2026, holidays: [{ date: "2026-08-15", description: "Fiesta de prueba" }] },
      });
      for (const [statement, params] of mocks.sql.mock.calls) {
        assertReadOnlySql(statement);
        expect(statement).not.toContain("M4SCO_HR_REAL_WORK_DAYS");
        expect(params).toMatchObject({
          organization: { value: society },
          employeeId: { value: "0017" },
        });
        expect(statement).not.toContain("0017");
      }
      expect(mocks.sql.mock.calls[1][1]).toMatchObject({
        roleId: { value: 1 },
        dimension: { value: "DMD_TA" },
        component: { value: "TA001" },
        correctionDate: { value: new Date("4000-01-01T00:00:00Z") },
      });
      expect(mocks.soap).not.toHaveBeenCalled();
    },
  );
  it("no consulta con identidad incoherente o debug", async () => {
    expect(
      await getHolidayCalendar({
        mode: "meta4",
        society: "CYC",
        variant: "CYC",
        username: "TEST",
        identity: { status: "unresolved", message: "Ficha incoherente" },
      }),
    ).toMatchObject({ status: "unavailable", pending: ["P03"], message: "Ficha incoherente" });
    expect(
      await getHolidayCalendar({ mode: "unavailable", reason: "debug", message: "Sin Meta4" }),
    ).toMatchObject({ status: "unavailable", pending: ["P03"] });
    expect(mocks.sql).not.toHaveBeenCalled();
  });
  it("ausencia de rol principal, de asignación y calendario vacío son estados diferentes", async () => {
    mocks.sql.mockReset().mockResolvedValueOnce([]);
    expect(await getHolidayCalendar(context())).toMatchObject({ status: "ok", data: null });
    expect(mocks.sql).toHaveBeenCalledTimes(1);
    mocks.sql
      .mockReset()
      .mockResolvedValueOnce([{ ROLE_ID: 1 }])
      .mockResolvedValueOnce([]);
    expect(await getHolidayCalendar(context())).toMatchObject({ status: "ok", data: null });
    mocks.sql
      .mockReset()
      .mockResolvedValueOnce([{ ROLE_ID: 1 }])
      .mockResolvedValueOnce([assignment]);
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "ok",
      data: { year: 2026, holidays: [] },
    });
  });
  it("no elige arbitrariamente entre roles principales", async () => {
    mocks.sql.mockReset().mockResolvedValue([{ ROLE_ID: 1 }, { ROLE_ID: 2 }]);
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "error",
      code: "AMBIGUOUS",
    });
    expect(mocks.sql).toHaveBeenCalledTimes(1);
  });
  it("devuelve conflicto visible para calendarios incompatibles", async () => {
    mocks.sql
      .mockReset()
      .mockResolvedValueOnce([{ ROLE_ID: 1 }])
      .mockResolvedValueOnce([assignment, { ...assignment, CALENDAR_ID: "C2", SOURCE: "role" }]);
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "error",
      code: "AMBIGUOUS",
    });
  });
  it.each([null, "malformado", 1.5])("rechaza ordinal inválido (%s)", async (ROLE_ID) => {
    mocks.sql.mockReset().mockResolvedValue([{ ROLE_ID }]);
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "error",
      code: "CONTRACT_INCOMPATIBLE",
    });
    expect(mocks.sql).toHaveBeenCalledTimes(1);
  });
  it("valida el tipo y las fechas de cada registro de la BD", async () => {
    mocks.sql
      .mockReset()
      .mockResolvedValueOnce([{ ROLE_ID: 1 }])
      .mockResolvedValueOnce([{ ...assignment, ROW_KIND: "unknown" }]);
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "error",
      code: "CONTRACT_INCOMPATIBLE",
    });
  });
  it("diferencia conexión pendiente, contrato incompatible y error sin exponer detalles del driver", async () => {
    mocks.sql.mockReset().mockRejectedValueOnce(new PeopleNetConfigError(["PEOPLENET_DB_SERVER"]));
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "unavailable",
      pending: ["P05"],
    });
    vi.spyOn(console, "warn").mockImplementation(() => {});
    mocks.sql.mockRejectedValueOnce(new PortalSqlContractError(207));
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "error",
      code: "CONTRACT_INCOMPATIBLE",
    });
    vi.spyOn(console, "error").mockImplementation(() => {});
    mocks.sql.mockRejectedValueOnce(new Error("SECRETO_DEL_DRIVER"));
    expect(await getHolidayCalendar(context())).toMatchObject({
      status: "error",
      code: "READ_FAILED",
    });
    expect(JSON.stringify(vi.mocked(console.error).mock.calls)).not.toContain("SECRETO_DEL_DRIVER");
  });
  it("resuelve hoy y el ejercicio en Madrid al cambiar el año", async () => {
    vi.setSystemTime(new Date("2026-12-31T23:30:00Z"));
    mocks.sql
      .mockReset()
      .mockResolvedValueOnce([{ ROLE_ID: 1 }])
      .mockResolvedValueOnce([]);
    await getHolidayCalendar(context());
    expect(mocks.sql.mock.calls[0][1].today.value).toEqual(new Date("2027-01-01T00:00:00Z"));
    expect(mocks.sql.mock.calls[1][1].yearStart.value).toEqual(new Date("2027-01-01T00:00:00Z"));
    expect(mocks.sql.mock.calls[1][1].hierarchyDate.value).toEqual(
      new Date("2028-01-31T00:00:00Z"),
    );
  });
  it("mantiene ruta y vista con contrato SQL sin declarar contraste en vivo", () => {
    expect(getPortalFeatureByRoute("/portal/empleado/tiempo/festivos")).toMatchObject({
      view: "holidays",
      read: { kind: "sql", verified: false },
    });
    assertReadOnlySql(HOLIDAY_SQL.roles);
    assertReadOnlySql(HOLIDAY_SQL.calendar);
  });
});
