import { NextRequest } from "next/server";
import { getDocumentProxy } from "unpdf";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const session = vi.hoisted(() => ({ current: { authContext: { mode: "debug" } } as unknown }));

// Solo sustituye la sesión/contexto: carga debug, plantilla y PDF son reales.
vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: async () => session.current,
  deleteSessionCookie: vi.fn(),
}));
vi.mock("@/lib/portal/context", () => ({
  getPortalContext: async () => ({ mode: "unavailable", reason: "debug" }),
}));

import { GET } from "./route";

beforeEach(() => {
  vi.stubEnv("NODE_ENV", "development");
  vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date("2026-10-20T10:00:00"));
  session.current = { authContext: { mode: "debug" } };
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.useRealTimers();
});

const get = (query: string) =>
  GET(new NextRequest(`http://localhost/api/portal/certificates/pdf?${query}`));

describe("PDF del certificado de retenciones", () => {
  it("sirve los mismos bytes para la vista previa y para la descarga", async () => {
    const preview = await get("year=2025");
    const download = await get("year=2025&download=1");
    expect(preview.status).toBe(200);
    expect(preview.headers.get("content-type")).toBe("application/pdf");
    expect(preview.headers.get("cache-control")).toBe("no-store");
    expect(preview.headers.get("content-disposition")).toBe(
      'inline; filename="CYC_RP_CERT_HAB_2025.pdf"',
    );
    expect(download.headers.get("content-disposition")).toBe(
      'attachment; filename="CYC_RP_CERT_HAB_2025.pdf"',
    );
    const [a, b] = await Promise.all([preview.arrayBuffer(), download.arrayBuffer()]);
    expect(new Uint8Array(a)).toEqual(new Uint8Array(b));
    expect((await getDocumentProxy(new Uint8Array(a))).numPages).toBe(2);
  });

  it("acepta otra matrícula y cualquier ejercicio de la lista", async () => {
    expect((await get("year=2023&employee=0042")).status).toBe(200);
  });

  it("rechaza peticiones sin sesión, sin ejercicio o con parámetros inválidos", async () => {
    expect((await get("")).status).toBe(400);
    expect((await get("year=otro")).status).toBe(400);
    expect((await get("year=2025&employee=../x")).status).toBe(400);
    expect((await get("year=2026")).status).toBe(400);
    session.current = null;
    expect((await get("year=2025")).status).toBe(401);
  });
});
