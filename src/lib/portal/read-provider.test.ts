import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import type { PortalContext } from "./context";
const mocks = vi.hoisted(() => ({ select: vi.fn(), load: vi.fn() }));
vi.mock("@/lib/auth/session", () => ({ requireAuthContext: vi.fn() }));
vi.mock("./context", () => ({ getPortalContext: vi.fn() }));
vi.mock("./data/organization", () => ({ getOwnEmails: vi.fn(), getOwnMaritalStatus: vi.fn() }));
vi.mock("./peoplenet/query", async (original) => ({
  ...(await original<typeof import("./peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
vi.mock("./data/consults", async (original) => ({
  ...(await original<typeof import("./data/consults")>()),
  loadFeatureConsults: mocks.load,
}));
import { canUsePortalDebug, loadPortalReadPage } from "./read-provider";
import { loadProjectionPage } from "./projections/load";
import { loadCertificatePage } from "./certificates/load";
import { getPortalFeatureByRoute } from "./registry";
import {
  debugSelection,
  debugTeam,
  filterConsultData,
  parseReadFilters,
  EMPTY_READ_FILTERS,
} from "./read-model";

const auth: ResolvedAuthSession = {
  sessionId: "test",
  cookieHash: "hash",
  expiresAt: new Date("2099-01-01"),
  lastValidatedAt: null,
  authContext: {
    mode: "debug",
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null,
    availableSocieties: [],
  },
};
const debug: PortalContext = { mode: "unavailable", reason: "debug", message: "DEBUG" };
const real: PortalContext = {
  mode: "meta4",
  society: "COLL",
  username: "u",
  variant: "COLL",
  identity: {
    status: "resolved",
    crossChecked: true,
    person: {
      employeeId: "real-memory-only",
      fullName: "Test",
      job: null,
      unit: null,
      workCenter: null,
      hireDate: null,
      managerId: null,
    },
  },
};
const team = getPortalFeatureByRoute("/portal/responsable/equipo/ficha")!;
const own = getPortalFeatureByRoute("/portal/empleado/talento/formacion-realizada")!;
beforeEach(() => {
  vi.clearAllMocks();
  vi.stubEnv("NODE_ENV", "development");
  vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
});
afterEach(() => vi.unstubAllEnvs());

describe("proveedores independientes de lectura", () => {
  it("mantiene la misma persona ficticia en proyecciones y certificados, también sin parámetros", async () => {
    for (const params of [{}, { debugActor: "90001" }]) {
      const expected = params.debugActor ? "Ana López" : "Clara Martín";
      const projection = await loadProjectionPage(auth, debug, params);
      const certificate = await loadCertificatePage(auth, debug, params, new Date("2026-11-10"));
      expect(projection.status === "ok" && projection.data.report?.employee.name).toBe(expected);
      expect(
        certificate.status === "ok" && certificate.certificates[0].fields.perceptorNombre,
      ).toBe(expected);
    }
    expect((await loadProjectionPage(auth, debug, { employee: "unknown" })).status).toBe("error");
    expect((await loadCertificatePage(auth, debug, { employee: "unknown" })).status).toBe("error");
    expect(mocks.select).not.toHaveBeenCalled();
  });
  it("requiere sesión DEBUG, desarrollo, flag y contexto explícito", () => {
    expect(canUsePortalDebug(auth, debug)).toBe(true);
    expect(canUsePortalDebug(auth, real)).toBe(false);
    expect(
      canUsePortalDebug({ ...auth, authContext: { ...auth.authContext, mode: "meta4" } }, debug),
    ).toBe(false);
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "false");
    expect(canUsePortalDebug(auth, debug)).toBe(false);
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    vi.stubEnv("NODE_ENV", "production");
    expect(canUsePortalDebug(auth, debug)).toBe(false);
  });
  it.each(["full", "partial", "empty", "error"])(
    "resuelve %s sin SQL ni lector real",
    async (scenario) => {
      const page = await loadPortalReadPage(team, auth, debug, { debugScenario: scenario });
      const results = Object.values(page.results);
      expect(results.length).toBeGreaterThan(6);
      if (scenario === "error")
        expect(results.every((result) => result.status === "error")).toBe(true);
      if (scenario === "empty")
        expect(
          results.every((result) => result.status === "ok" && result.data.rows.length === 0),
        ).toBe(true);
      if (scenario === "full")
        expect(
          results.every(
            (result) => result.status === "ok" && "source" in result && result.source === "debug",
          ),
        ).toBe(true);
      if (scenario === "partial")
        expect(new Set(results.map((result) => result.status))).toEqual(new Set(["ok", "error"]));
      expect(mocks.select).not.toHaveBeenCalled();
      expect(mocks.load).not.toHaveBeenCalled();
    },
  );
  it("autoriza equipo indirecto y rechaza enlaces ajenos o actores sin equipo", async () => {
    expect(debugTeam("90000").map((person) => person.id)).toEqual(["90001", "90002", "90003"]);
    expect(
      (await loadPortalReadPage(team, auth, debug, { employee: "90003" })).message,
    ).toBeUndefined();
    expect((await loadPortalReadPage(team, auth, debug, { employee: "91001" })).message).toMatch(
      /equipo/,
    );
    expect(
      (await loadPortalReadPage(team, auth, debug, { employee: "90001", debugActor: "91001" }))
        .message,
    ).toMatch(/equipo/);
  });
  it("vuelve a comprobar la persona real en la sociedad del contexto antes de leer", async () => {
    mocks.select.mockResolvedValue([{ ID_EMPLEADO: "authorized", NOMBRE: "Test" }]);
    const page = await loadPortalReadPage(team, auth, real, { employee: "outside" });
    expect(page.message).toMatch(/equipo/);
    expect(mocks.load).not.toHaveBeenCalled();
    expect(mocks.select.mock.calls[0][1]).toMatchObject({
      organization: { value: "COLL" },
      employeeId: { value: "real-memory-only" },
    });
  });
  it("un fallo real nunca se reemplaza por muestras", async () => {
    mocks.load.mockResolvedValue({ cursos: { status: "error", message: "Fallo real" } });
    const page = await loadPortalReadPage(own, auth, real, { debugScenario: "full" });
    expect(page.debug).toBeNull();
    expect(page.results.cursos).toEqual({ status: "error", message: "Fallo real" });
  });
});
describe("contratos de filtros y escenarios", () => {
  it("normaliza parámetros DEBUG manipulados y duplicados", () => {
    expect(
      debugSelection({ debugActor: ["90001"], debugVariant: "OTHER", debugScenario: "sql" }),
    ).toEqual({ actor: "90000", variant: "CYC", scenario: "full" });
  });
  it.each([
    { employee: "90001" },
    { period: "2026-13" },
    { q: ["a", "b"] },
    { field: "SQL" },
    { q: "a".repeat(121) },
  ])("rechaza filtros fuera del contrato %j", (params) => {
    expect(parseReadFilters(params, ["Estado"], false)).toBeNull();
  });
  it("combina texto, mes y valor exacto manteniendo vínculos de filas", () => {
    const data = {
      rows: [
        [
          { label: "Curso", value: "Protección de datos" },
          { label: "Inicio", value: "05/10/2026" },
          { label: "Estado", value: "Finalizado" },
        ],
        [{ label: "Curso", value: "Otro" }],
      ],
      links: ["one", "two"],
      personLinks: ["person-one", "person-two"],
    };
    expect(
      filterConsultData(data, {
        ...EMPTY_READ_FILTERS,
        q: "proteccion",
        period: "2026-10",
        field: "Estado",
        value: "finalizado",
      }),
    ).toEqual({ rows: [data.rows[0]], links: ["one"], personLinks: ["person-one"] });
  });
});
