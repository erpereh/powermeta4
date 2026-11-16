import { beforeEach, describe, expect, it, vi } from "vitest";
import type { PortalContext } from "./context";
const mocks = vi.hoisted(() => ({ select: vi.fn() }));
vi.mock("@/lib/auth/session", () => ({ requireAuthContext: vi.fn() }));
vi.mock("./context", () => ({ getPortalContext: vi.fn() }));
vi.mock("./data/organization", () => ({ getOwnEmails: vi.fn(), getOwnMaritalStatus: vi.fn() }));
vi.mock("./data/scope", () => ({ MANAGER_SCOPE_VERIFIED: true }));
vi.mock("./peoplenet/query", async (original) => ({
  ...(await original<typeof import("./peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
import { loadFeatureConsults, mapConsultRows } from "./data/consults";
import { PORTAL_FEATURES, getPortalFeatureByRoute } from "./registry";
const context: PortalContext = {
  mode: "meta4",
  society: "IBER",
  username: "u",
  variant: "IBER",
  identity: {
    status: "resolved",
    crossChecked: true,
    person: {
      employeeId: "owner",
      fullName: "Test",
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
  mocks.select.mockResolvedValue([]);
});
describe("consultas parametrizadas de históricos y equipo", () => {
  it("cambia la ventana GTA por el mes solicitado sin concatenar filtros del navegador", async () => {
    const feature = PORTAL_FEATURES.find((entry) =>
      entry.sections?.some(
        (section) =>
          section.kind === "consult" && section.consult.query?.periodColumn === "W.DT_START",
      ),
    )!;
    await loadFeatureConsults(feature, context, undefined, "2025-02");
    const [statement, params] = mocks.select.mock.calls.find(([statement]) =>
      String(statement).includes("@periodStart"),
    )!;
    expect(statement).not.toContain("TOP 31");
    expect(statement).not.toContain("W.DT_START >= @today");
    expect(statement).toContain("W.DT_START < @periodEnd");
    expect(params).toMatchObject({
      organization: { value: "IBER" },
      employeeId: { value: "owner" },
      periodStart: { value: new Date("2025-02-01") },
      periodEnd: { value: new Date("2025-03-01") },
    });
  });
  it("mantiene la jerarquía ORO en cada apartado de la ficha con persona objetivo", async () => {
    await loadFeatureConsults(
      getPortalFeatureByRoute("/portal/responsable/equipo/ficha")!,
      context,
      "target",
    );
    expect(mocks.select.mock.calls.length).toBeGreaterThan(6);
    for (const [statement, params] of mocks.select.mock.calls) {
      expect(statement).toContain("WITH TEAM_HR");
      expect(statement).toContain("WHERE ID_EMPLEADO = @targetEmployeeId");
      expect(params).toMatchObject({
        organization: { value: "IBER" },
        employeeId: { value: "owner" },
        targetEmployeeId: { value: "target" },
      });
      expect(statement).not.toContain("'target'");
    }
  });
  it("no pierde la hora de los fichajes almacenados", () => {
    const feature = PORTAL_FEATURES.find((entry) =>
      entry.sections?.some(
        (section) =>
          section.kind === "consult" &&
          section.consult.fields.some((field) => field.item === "SCO_DT_DATE_AND_HOUR"),
      ),
    )!;
    const spec = feature.sections?.find(
      (section) =>
        section.kind === "consult" &&
        section.consult.fields.some((field) => field.item === "SCO_DT_DATE_AND_HOUR"),
    );
    if (spec?.kind !== "consult") throw new Error("Falta contrato de fichajes");
    expect(
      mapConsultRows(spec.consult, [{ SCO_DT_DATE_AND_HOUR: new Date("2026-10-05T08:35:00Z") }])
        .rows[0][0].value,
    ).toBe("05/10/2026 08:35");
  });
});
