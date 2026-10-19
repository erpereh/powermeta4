import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
const mocks = vi.hoisted(() => ({ auth: vi.fn(), read: vi.fn() }));
vi.mock("@/lib/auth/session", () => ({ requireAuthContext: mocks.auth }));
vi.mock("@/lib/portal/data/projections", () => ({ getProjections: mocks.read }));
vi.mock("./projections/report-view", () => ({
  ProjectionReportView: ({ debug }: { debug?: boolean }) => (
    <div>{debug ? "Muestra ficticia" : "Informe real"}</div>
  ),
}));
import { ProjectionsView } from "./projections-view";
const context = { mode: "unavailable", reason: "debug", message: "Sin Meta4" } as const;
beforeEach(() => {
  vi.clearAllMocks();
  mocks.auth.mockResolvedValue({ authContext: { mode: "debug" } });
  mocks.read.mockResolvedValue({
    status: "unavailable",
    pending: ["P03"],
    message: "Necesita Meta4",
  });
});
afterEach(() => vi.unstubAllEnvs());
describe("puerta de la muestra de proyecciones", () => {
  it("requiere desarrollo, flag y sesión debug válida; no llama a PeopleNet", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    expect(renderToStaticMarkup(await ProjectionsView({ context, params: {} }))).toContain(
      "Muestra ficticia",
    );
    expect(mocks.auth).toHaveBeenCalledOnce();
    expect(mocks.read).not.toHaveBeenCalled();
  });
  it.each(["production", "test"])(
    "no muestra datos ficticios en %s incluso con flag",
    async (mode) => {
      vi.stubEnv("NODE_ENV", mode);
      vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
      expect(
        renderToStaticMarkup(await ProjectionsView({ context, params: { scenario: "full" } })),
      ).not.toContain("Muestra ficticia");
      expect(mocks.read).toHaveBeenCalledOnce();
    },
  );
  it("ni el flag apagado ni una sesión real permiten activar la muestra por URL", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "false");
    expect(renderToStaticMarkup(await ProjectionsView({ context, params: {} }))).not.toContain(
      "Muestra ficticia",
    );
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    mocks.auth.mockResolvedValue({ authContext: { mode: "meta4" } });
    expect(
      renderToStaticMarkup(await ProjectionsView({ context, params: { scenario: "full" } })),
    ).not.toContain("Muestra ficticia");
  });
  it("pasa la matrícula del equipo al servidor y rechaza una matrícula inválida sin leer", async () => {
    vi.stubEnv("NODE_ENV", "production");
    await ProjectionsView({ context, params: { employee: "0042" } });
    expect(mocks.read).toHaveBeenCalledWith(
      context,
      { status: "latest" },
      { status: "team", employeeId: "0042" },
    );
    mocks.read.mockClear();
    expect(
      renderToStaticMarkup(await ProjectionsView({ context, params: { employee: "00 42" } })),
    ).toContain("La matrícula indicada no es válida.");
    expect(mocks.read).not.toHaveBeenCalled();
  });
});
