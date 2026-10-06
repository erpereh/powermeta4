import { beforeEach, describe, expect, it, vi } from "vitest";
import { portalPhotoPng } from "@/test/portal-photo-fixtures";
const mocks = vi.hoisted(() => ({
  auth: vi.fn(),
  clear: vi.fn(),
  context: vi.fn(),
  photo: vi.fn(),
}));
vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.auth,
  deleteSessionCookie: mocks.clear,
}));
vi.mock("@/lib/portal/context", () => ({ getPortalContext: mocks.context }));
vi.mock("@/lib/portal/data/photos", async (original) => ({
  ...(await original<typeof import("@/lib/portal/data/photos")>()),
  getPortalPhoto: mocks.photo,
}));
import { GET } from "./route";
import { PortalDataAmbiguousError } from "@/lib/portal/data/errors";
import { PortalPhotoContractError } from "@/lib/portal/data/photos";
const request = (employeeId = "002") =>
  GET(new Request("https://local.test/api/portal/photos/002?sociedad=IBER"), {
    params: Promise.resolve({ employeeId }),
  });
beforeEach(() => {
  vi.resetAllMocks();
  mocks.auth.mockResolvedValue({});
  mocks.context.mockResolvedValue({
    mode: "meta4",
    society: "CYC",
    identity: { status: "resolved" },
  });
  mocks.photo.mockResolvedValue({ bytes: portalPhotoPng, mime: "image/png" });
});
describe("API autenticada de fotos", () => {
  it("rechaza sesión ausente sin consultar personas", async () => {
    mocks.auth.mockResolvedValue(null);
    const response = await request();
    expect(response.status).toBe(401);
    expect(mocks.clear).toHaveBeenCalled();
    expect(mocks.photo).not.toHaveBeenCalled();
  });
  it("usa la sociedad de servidor, sirve MIME comprobado y desactiva caché", async () => {
    const response = await request();
    expect(mocks.photo).toHaveBeenCalledWith("CYC", "002");
    expect(response.headers.get("content-type")).toBe("image/png");
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(response.headers.get("x-content-type-options")).toBe("nosniff");
    expect(Buffer.from(await response.arrayBuffer())).toEqual(portalPhotoPng);
  });
  it("no expone fotos de identidad sin resolver, personas ausentes o resultados ambiguos", async () => {
    mocks.context.mockResolvedValueOnce({ mode: "meta4", identity: { status: "unresolved" } });
    expect((await request()).status).toBe(404);
    expect(mocks.photo).not.toHaveBeenCalled();
    mocks.photo.mockResolvedValueOnce(null);
    expect((await request()).status).toBe(404);
    mocks.photo.mockRejectedValueOnce(new PortalDataAmbiguousError());
    expect((await request()).status).toBe(404);
    mocks.photo.mockRejectedValueOnce(new PortalPhotoContractError());
    expect((await request()).status).toBe(503);
    expect((await request("a/b")).status).toBe(404);
  });
});
