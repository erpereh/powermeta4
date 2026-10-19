import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { PortalContext } from "../context";
import { PROJECTION_SQL, PROJECTION_TEAM_SQL } from "../registry/sql/projections";
import { assertReadOnlySql } from "../peoplenet/query";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";

const mocks = vi.hoisted(() => ({
  select: vi.fn(),
  lookup: { scope: "society" as "society" | "team" },
}));
vi.mock("../projections/types", async (original) => ({
  ...(await original<typeof import("../projections/types")>()),
  PROJECTION_LOOKUP: mocks.lookup,
}));
vi.mock("../peoplenet/query", async (original) => ({
  ...(await original<typeof import("../peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
import { getProjectionTeamSize, getProjections } from "./projections";

const context: PortalContext = {
  mode: "meta4",
  society: "COLL",
  variant: "COLL",
  username: "test",
  identity: {
    status: "resolved",
    crossChecked: true,
    person: {
      employeeId: "0007",
      fullName: "Persona de prueba",
      job: null,
      unit: null,
      workCenter: null,
      hireDate: null,
      managerId: null,
    },
  },
};
beforeEach(() => {
  vi.clearAllMocks();
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date("2026-10-19T12:00:00Z"));
  mocks.lookup.scope = "society";
  mocks.select.mockImplementation(
    async (statement: string, params?: Record<string, { value: unknown }>) => {
      if (statement.includes("COUNT(DISTINCT O.ID_EMPLEADO)")) return [{ TOTAL: 3 }];
      if (statement.includes("@targetId"))
        return params?.targetId?.value === "0042"
          ? [{ ID_EMPLEADO: "0042", EMPLEADO: "Ana Equipo" }]
          : [];
      if (statement === PROJECTION_SQL.currentHeaders.statement)
        return [
          {
            PAGA01: "Enero 2026",
            STD_OR_HR_PERIOD: 2,
            CSP_FEC_EJECUCION: "2026-06-01",
            CSP_REAL: 1,
          },
        ];
      if (statement === PROJECTION_SQL.historicalHeaders.statement)
        return [
          {
            ANIO: 2025,
            PAGA01: "Enero 2025",
            STD_OR_HR_PERIOD: 1,
            CSP_FEC_EJECUCION: "2025-06-01",
            CSP_REAL: 1,
          },
        ];
      if (statement.includes("M4CSP_PROYEC_DOC"))
        return [{ ANIO: 2025, DOC_KEY: "1|2025", SCO_NM_DOC: "Informe propio" }];
      return [
        { CSP_ID_GRUPO: "RD", CSP_ID_SUBGR: "SC", ID_ITEM: "Salario Base", TOTAL: 100, PAGA01: 10 },
        {
          CSP_ID_GRUPO: "RQ",
          CSP_ID_SUBGR: "RA",
          ID_ITEM: "Retrib anual año actual",
          TOTAL: 1200,
          PAGA01: 100,
        },
      ];
    },
  );
});
afterEach(() => vi.useRealTimers());
describe("lecturas propias de proyecciones", () => {
  it("todas las consultas son SELECT y filtran la identidad del servidor", () => {
    for (const query of Object.values(PROJECTION_SQL)) {
      expect(() => assertReadOnlySql(query.statement)).not.toThrow();
      expect(query.statement).toContain("@organization");
      expect(query.statement).toContain("@employeeId");
    }
  });
  it("abre el último ejercicio, conserva los documentos y separa periodos", async () => {
    const result = await getProjections(context, { status: "latest" });
    expect(result).toMatchObject({
      status: "ok",
      data: {
        selectedYear: 2026,
        years: [2026, 2025],
        report: { year: 2026, employee: { id: "0007" } },
        documents: [{ href: "/api/portal/documents/projection?k=1%7C2025" }],
      },
    });
    for (const [, params] of mocks.select.mock.calls)
      expect(params).toMatchObject({
        organization: { value: "COLL" },
        employeeId: { value: "0007" },
      });
    expect(
      mocks.select.mock.calls.find(
        ([statement]) => statement === PROJECTION_SQL.currentConcepts.statement,
      )?.[1],
    ).toMatchObject({ period: { value: 2 } });
  });
  it("la comparativa lee RQ/RA de cada proyección: TOTAL si está cerrada y paga real si no", async () => {
    const result = await getProjections(context, { status: "latest" });
    expect(result).toMatchObject({
      status: "ok",
      data: {
        report: {
          history: [
            { year: 2025, fixed: 1200, variable: 0 },
            { year: 2026, fixed: 100, variable: 0 },
          ],
        },
      },
    });
    expect(
      mocks.select.mock.calls.find(
        ([statement]) => statement === PROJECTION_SQL.historicalConcepts.statement,
      )?.[1],
    ).toMatchObject({ year: { value: 2025 }, period: { value: 1 } });
  });
  it("el histórico usa año y periodo propios y admite cambio de sociedad", async () => {
    await getProjections(
      { ...context, society: "CYC", variant: "CYC" },
      { status: "selected", year: 2025 },
    );
    const call = mocks.select.mock.calls.find(
      ([statement]) => statement === PROJECTION_SQL.historicalConcepts.statement,
    );
    expect(call?.[1]).toMatchObject({
      organization: { value: "CYC" },
      year: { value: 2025 },
      period: { value: 1 },
    });
  });
  it("rechaza años ajenos y no consulta sin identidad coherente ni en debug", async () => {
    expect(await getProjections(context, { status: "selected", year: 2000 })).toMatchObject({
      status: "error",
    });
    mocks.select.mockClear();
    await getProjections(
      { ...context, identity: { status: "unresolved", message: "Sin identidad" } },
      { status: "latest" },
    );
    await getProjections(
      { mode: "unavailable", reason: "debug", message: "Debug" },
      { status: "latest" },
    );
    expect(mocks.select).not.toHaveBeenCalled();
  });
  it("mantiene los datos actuales si el contrato histórico falla", async () => {
    const original = mocks.select.getMockImplementation();
    mocks.select.mockImplementation(async (statement: string, params: unknown) => {
      if (statement === PROJECTION_SQL.historicalHeaders.statement)
        throw new PeopleNetConfigError(["DB"]);
      return original?.(statement, params);
    });
    const result = await getProjections(context, { status: "latest" });
    expect(result).toMatchObject({
      status: "ok",
      data: { report: { year: 2026, history: [{ year: 2026, fixed: 100, variable: 0 }] } },
    });
    if (result.status === "ok") expect(result.data.notices.length).toBeGreaterThan(0);
  });
  it("ordena fechas SQL reales y rechaza proyecciones igualmente recientes de periodos distintos", async () => {
    const original = mocks.select.getMockImplementation();
    mocks.select.mockImplementation(async (statement: string, params: unknown) => {
      if (statement === PROJECTION_SQL.currentHeaders.statement)
        return [
          { PAGA01: "Enero 2026", STD_OR_HR_PERIOD: 3, CSP_FEC_EJECUCION: new Date("2026-06-10") },
          { PAGA01: "Enero 2026", STD_OR_HR_PERIOD: 2, CSP_FEC_EJECUCION: new Date("2026-06-09") },
        ];
      return original?.(statement, params);
    });
    await getProjections(context, { status: "latest" });
    expect(
      mocks.select.mock.calls.find(
        ([statement]) => statement === PROJECTION_SQL.currentConcepts.statement,
      )?.[1],
    ).toMatchObject({ period: { value: 3 } });
    mocks.select.mockImplementation(async () => [
      { ANIO: 2026, STD_OR_HR_PERIOD: 1, CSP_FEC_EJECUCION: "2026-06-10" },
      { ANIO: 2026, STD_OR_HR_PERIOD: 2, CSP_FEC_EJECUCION: "2026-06-10" },
    ]);
    expect(await getProjections(context, { status: "latest" })).toMatchObject({
      status: "error",
      code: "AMBIGUOUS",
    });
  });
  it("con alcance de sociedad abre cualquier matrícula de la sociedad activa", async () => {
    const result = await getProjections(
      context,
      { status: "latest" },
      { status: "team", employeeId: "9999" },
    );
    expect(result).toMatchObject({
      status: "ok",
      data: { member: { id: "9999", name: "9999" }, documents: [] },
    });
    const check = mocks.select.mock.calls.find(([statement]) => statement.includes("@targetId"));
    expect(check?.[0]).not.toContain("TEAM_HR");
    expect(check?.[1]).toMatchObject({
      organization: { value: "COLL" },
      targetId: { value: "9999" },
    });
    for (const [statement, params] of mocks.select.mock.calls)
      if (Object.values(PROJECTION_SQL).some((query) => query.statement === statement))
        expect(params).toMatchObject({
          organization: { value: "COLL" },
          employeeId: { value: "9999" },
        });
  });
  it("con alcance de equipo solo abre una matrícula de la jerarquía, validada en servidor", async () => {
    mocks.lookup.scope = "team";
    const result = await getProjections(
      context,
      { status: "latest" },
      { status: "team", employeeId: "0042" },
    );
    expect(result).toMatchObject({
      status: "ok",
      data: {
        member: { id: "0042", name: "Ana Equipo" },
        report: { employee: { id: "0042", name: "Ana Equipo" } },
        documents: [],
      },
    });
    const check = mocks.select.mock.calls.find(([statement]) => statement.includes("@targetId"));
    expect(check?.[0]).toContain("TEAM_HR");
    expect(check?.[0]).toContain("IN (SELECT DISTINCT ID_EMPLEADO FROM TEAM_HR)");
    expect(check?.[1]).toMatchObject({
      employeeId: { value: "0007" },
      targetId: { value: "0042" },
    });
    for (const [statement, params] of mocks.select.mock.calls)
      if (Object.values(PROJECTION_SQL).some((query) => query.statement === statement))
        expect(params).toMatchObject({ employeeId: { value: "0042" } });
    expect(
      mocks.select.mock.calls.some(([statement]) => statement.includes("M4CSP_PROYEC_DOC")),
    ).toBe(false);
  });
  it("con alcance de equipo rechaza matrículas ajenas, e inválidas siempre, sin leer su proyección", async () => {
    mocks.lookup.scope = "team";
    expect(
      await getProjections(context, { status: "latest" }, { status: "team", employeeId: "9999" }),
    ).toMatchObject({ status: "error" });
    expect(
      await getProjections(context, { status: "latest" }, { status: "invalid" }),
    ).toMatchObject({ status: "error" });
    expect(
      mocks.select.mock.calls.some(([statement]) =>
        Object.values(PROJECTION_SQL).some((query) => query.statement === statement),
      ),
    ).toBe(false);
  });
  it("cuenta el equipo con la jerarquía del servidor y lee la propia con la matrícula propia", async () => {
    expect(await getProjectionTeamSize(context)).toMatchObject({ status: "ok", data: 3 });
    expect(PROJECTION_TEAM_SQL.size.statement).toContain("IN (@team)");
    const own = await getProjections(
      context,
      { status: "latest" },
      { status: "team", employeeId: "0007" },
    );
    expect(own).toMatchObject({ status: "ok", data: { report: { employee: { id: "0007" } } } });
    if (own.status === "ok") expect(own.data.member).toBeUndefined();
  });
});
