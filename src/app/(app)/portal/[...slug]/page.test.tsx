import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ context: vi.fn(), redirect: vi.fn(), notFound: vi.fn() }));
vi.mock("next/navigation", () => ({ redirect: mocks.redirect, notFound: mocks.notFound }));
vi.mock("@/lib/portal/server", () => ({ getRequestPortalContext: mocks.context }));
vi.mock("@/components/portal/views/feature-dispatch", () => ({ FeatureDispatch: () => null }));
vi.mock("@/components/portal/views/domain-overview", () => ({ DomainOverview: () => null }));
import Page from "./page";

beforeEach(() => {
  vi.resetAllMocks();
  mocks.context.mockResolvedValue({ mode: "meta4", variant: "CYC" });
  mocks.redirect.mockImplementation((route) => {
    throw new Error(`redirect:${route}`);
  });
  mocks.notFound.mockImplementation(() => {
    throw new Error("notFound");
  });
});
describe("rutas retiradas del portal", () => {
  it.each(["empleado/aplicaciones/internas", "empleado/datos/aplicaciones"])(
    "redirige %s antes del 404 del registro",
    async (route) => {
      await expect(
        Page({
          params: Promise.resolve({ slug: route.split("/") }),
          searchParams: Promise.resolve({}),
        }),
      ).rejects.toThrow("redirect:/portal/empleado/aplicaciones/organigrama");
      expect(mocks.notFound).not.toHaveBeenCalled();
    },
  );
  it("mantiene el 404 para páginas no registradas", async () => {
    await expect(
      Page({ params: Promise.resolve({ slug: ["no-existe"] }), searchParams: Promise.resolve({}) }),
    ).rejects.toThrow("notFound");
  });
});
