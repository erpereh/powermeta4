import { beforeEach, describe, expect, it, vi } from "vitest";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "@/lib/portal/context";
import { projectionDebugData } from "@/lib/portal/projections/debug.fixture";
import { exportProjectionToPdf } from "@/lib/portal/projections/export-pdf";
import { exportProjectionToXlsx } from "@/lib/portal/projections/export-xlsx";
import { loadProjectionPage } from "@/lib/portal/projections/load";

import { POST } from "./route";

vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: vi.fn(),
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/portal/context", () => ({ getPortalContext: vi.fn() }));
vi.mock("@/lib/portal/projections/load", () => ({ loadProjectionPage: vi.fn() }));
vi.mock("@/lib/portal/projections/export-pdf", () => ({ exportProjectionToPdf: vi.fn() }));
vi.mock("@/lib/portal/projections/export-xlsx", () => ({ exportProjectionToXlsx: vi.fn() }));

const post = (body: unknown) =>
  POST(
    new Request("http://localhost/api/portal/projections/export", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    }),
  );

const data = projectionDebugData({ status: "latest" }, "full");

beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(getCurrentAuthContext).mockResolvedValue(
    {} as Awaited<ReturnType<typeof getCurrentAuthContext>>,
  );
  vi.mocked(getPortalContext).mockResolvedValue({
    mode: "unavailable",
    reason: "debug",
    message: "Debug",
  });
  vi.mocked(loadProjectionPage).mockResolvedValue({ status: "ok", data, debug: false });
  vi.mocked(exportProjectionToPdf).mockResolvedValue(new Uint8Array([37, 80, 68, 70]));
  vi.mocked(exportProjectionToXlsx).mockResolvedValue(Buffer.from([80, 75]));
});

describe("POST /api/portal/projections/export", () => {
  it("rechaza peticiones sin sesión", async () => {
    vi.mocked(getCurrentAuthContext).mockResolvedValueOnce(null);
    const response = await post({ format: "pdf" });
    expect(response.status).toBe(401);
    expect(deleteSessionCookie).toHaveBeenCalled();
    expect(loadProjectionPage).not.toHaveBeenCalled();
  });

  it("rechaza formatos o parámetros no válidos sin leer datos", async () => {
    for (const body of [{}, { format: "csv" }, { format: "pdf", year: 2026 }, null])
      expect((await post(body)).status).toBe(400);
    expect(loadProjectionPage).not.toHaveBeenCalled();
  });

  it("vuelve a leer en servidor con el ejercicio y la matrícula y descarga el PDF", async () => {
    const response = await post({ format: "pdf", year: "2026", employee: "0042" });
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/pdf");
    expect(response.headers.get("content-disposition")).toContain(
      'filename="Proyeccion_DEMO-01_2026.pdf"',
    );
    expect(vi.mocked(loadProjectionPage).mock.calls[0]?.[2]).toEqual({
      year: "2026",
      employee: "0042",
      scenario: undefined,
    });
  });

  it("descarga el Excel y traslada los errores de la lectura", async () => {
    const xlsx = await post({ format: "xlsx" });
    expect(xlsx.headers.get("content-type")).toContain("spreadsheetml");
    vi.mocked(loadProjectionPage).mockResolvedValueOnce({
      status: "error",
      message: "Esa matrícula no pertenece a tu equipo en la sociedad activa.",
    });
    const rejected = await post({ format: "pdf", employee: "9999" });
    expect(rejected.status).toBe(400);
    expect(await rejected.json()).toMatchObject({ message: expect.stringContaining("equipo") });
    vi.mocked(loadProjectionPage).mockResolvedValueOnce({
      status: "ok",
      data: { ...data, report: null },
      debug: false,
    });
    expect((await post({ format: "pdf" })).status).toBe(404);
  });
});
