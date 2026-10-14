import { beforeEach, describe, expect, it, vi } from "vitest";
import type { PortalContext } from "../context";
import { PROJECTION_SQL } from "../registry/sql/projections";
import { assertReadOnlySql } from "../peoplenet/query";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";

const mocks = vi.hoisted(() => ({ select: vi.fn(), economic: vi.fn() }));
vi.mock("../peoplenet/query", async (original) => ({
  ...(await original<typeof import("../peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
vi.mock("@/lib/peoplenet/quinquenal", () => ({ getQuinquenalReport: mocks.economic }));
import { getOwnProjections } from "./projections";

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
  mocks.select.mockImplementation(async (statement: string) => {
    if (statement === PROJECTION_SQL.currentHeaders.statement)
      return [
        { PAGA01: "Enero 2026", STD_OR_HR_PERIOD: 2, CSP_FEC_EJECUCION: "2026-06-01", CSP_REAL: 1 },
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
    return [{ ID_ITEM: "Total Retribución fija", TOTAL: 100, PAGA01: 10 }];
  });
  mocks.economic.mockResolvedValue({
    rows: [
      {
        employeeId: "0007",
        years: [
          { year: 2026, coefficient: 1, salary: 90, variable: 20 },
          { year: 2025, coefficient: 1, salary: 80, variable: 15 },
        ],
      },
    ],
  });
});
describe("lecturas propias de proyecciones", () => {
  it("todas las consultas son SELECT y filtran la identidad del servidor", () => {
    for (const query of Object.values(PROJECTION_SQL)) {
      expect(() => assertReadOnlySql(query.statement)).not.toThrow();
      expect(query.statement).toContain("@organization");
      expect(query.statement).toContain("@employeeId");
    }
  });
  it("abre el último ejercicio, conserva los documentos y separa periodos", async () => {
    const result = await getOwnProjections(context, { status: "latest" });
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
    expect(mocks.economic).toHaveBeenCalledWith(
      expect.objectContaining({ organization: "COLL", employeeId: "0007" }),
    );
  });
  it("el histórico usa año y periodo propios y admite cambio de sociedad", async () => {
    await getOwnProjections(
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
    expect(await getOwnProjections(context, { status: "selected", year: 2000 })).toMatchObject({
      status: "error",
    });
    expect(mocks.economic).not.toHaveBeenCalled();
    mocks.select.mockClear();
    await getOwnProjections(
      { ...context, identity: { status: "unresolved", message: "Sin identidad" } },
      { status: "latest" },
    );
    await getOwnProjections(
      { mode: "unavailable", reason: "debug", message: "Debug" },
      { status: "latest" },
    );
    expect(mocks.select).not.toHaveBeenCalled();
  });
  it("mantiene los datos actuales si el contrato histórico o económico falla", async () => {
    const original = mocks.select.getMockImplementation();
    mocks.select.mockImplementation(async (statement: string, params: unknown) => {
      if (statement === PROJECTION_SQL.historicalHeaders.statement)
        throw new PeopleNetConfigError(["DB"]);
      return original?.(statement, params);
    });
    mocks.economic.mockRejectedValue(new PeopleNetConfigError(["DB"]));
    const result = await getOwnProjections(context, { status: "latest" });
    expect(result).toMatchObject({ status: "ok", data: { report: { year: 2026, history: [] } } });
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
    await getOwnProjections(context, { status: "latest" });
    expect(
      mocks.select.mock.calls.find(
        ([statement]) => statement === PROJECTION_SQL.currentConcepts.statement,
      )?.[1],
    ).toMatchObject({ period: { value: 3 } });
    mocks.select.mockImplementation(async () => [
      { ANIO: 2026, STD_OR_HR_PERIOD: 1, CSP_FEC_EJECUCION: "2026-06-10" },
      { ANIO: 2026, STD_OR_HR_PERIOD: 2, CSP_FEC_EJECUCION: "2026-06-10" },
    ]);
    expect(await getOwnProjections(context, { status: "latest" })).toMatchObject({
      status: "error",
      code: "AMBIGUOUS",
    });
  });
});
