import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  auth: vi.fn(),
  context: vi.fn(),
  read: vi.fn(),
  export: vi.fn(),
}));
vi.mock("@/lib/auth/session", () => ({ getCurrentAuthContext: mocks.auth }));
vi.mock("@/lib/portal/context", () => ({ getPortalContext: mocks.context }));
vi.mock("@/lib/portal/read-provider", () => ({ loadPortalReadPage: mocks.read }));
vi.mock("@/lib/portal/report-export", () => ({ exportPortalReport: mocks.export }));
import { POST } from "./route";
const body = {
  featureId: "empleado.talento.formacion-realizada",
  format: "xlsx",
  params: { q: "datos" },
};
const request = (value: unknown) =>
  new Request("https://local.test/api/portal/reports/export", {
    method: "POST",
    body: JSON.stringify(value),
  });
beforeEach(() => {
  vi.resetAllMocks();
  mocks.auth.mockResolvedValue({ sessionId: "valid" });
  mocks.context.mockResolvedValue({ mode: "unavailable", reason: "debug" });
  mocks.read.mockResolvedValue({ results: { cursos: { status: "ok", data: { rows: [] } } } });
  mocks.export.mockResolvedValue(new Uint8Array([1, 2]));
});
describe("descarga registrada del portal", () => {
  it("requiere sesión y rechaza SQL, sociedad o resultados aportados por el navegador", async () => {
    mocks.auth.mockResolvedValueOnce(null);
    expect((await POST(request(body))).status).toBe(401);
    for (const extra of [{ society: "IBER" }, { sql: "SELECT 1" }, { rows: ["forged"] }])
      expect((await POST(request({ ...body, ...extra }))).status).toBe(400);
    expect(mocks.export).not.toHaveBeenCalled();
  });
  it("vuelve a leer en cada descarga y deniega la persona fuera de alcance", async () => {
    mocks.read.mockResolvedValueOnce({ message: "Fuera del equipo", results: {} });
    expect((await POST(request({ ...body, params: { employee: "outside" } }))).status).toBe(403);
    expect(mocks.export).not.toHaveBeenCalled();
    expect((await POST(request(body))).status).toBe(200);
    expect(mocks.context).toHaveBeenCalledTimes(2);
    expect(mocks.read).toHaveBeenCalledTimes(2);
    expect(mocks.read.mock.calls[1][3]).toEqual(body.params);
  });
  it("no descarga dependencias sin lector ni permite un origen ajeno", async () => {
    mocks.read.mockResolvedValueOnce({
      results: { cursos: { status: "unavailable", message: "Pendiente" } },
    });
    expect((await POST(request(body))).status).toBe(503);
    expect(
      (
        await POST(
          new Request("https://local.test/api/portal/reports/export", {
            method: "POST",
            headers: { Origin: "https://other.test" },
            body: JSON.stringify(body),
          }),
        )
      ).status,
    ).toBe(403);
    expect(mocks.export).not.toHaveBeenCalled();
  });
});
