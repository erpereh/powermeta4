import { beforeEach, describe, expect, it, vi } from "vitest";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";
const mocks = vi.hoisted(() => ({
  auth: vi.fn(),
  clear: vi.fn(),
  context: vi.fn(),
  hierarchy: vi.fn(),
  person: vi.fn(),
}));
vi.mock("@/lib/auth/session", () => ({
  getCurrentAuthContext: mocks.auth,
  deleteSessionCookie: mocks.clear,
}));
vi.mock("./context", () => ({ getPortalContext: mocks.context }));
vi.mock("./data/organization", () => ({
  getPersonHierarchy: mocks.hierarchy,
  getDirectoryPerson: mocks.person,
}));
import { GET as hierarchy } from "@/app/api/portal/organization/[employeeId]/hierarchy/route";
import { GET as person } from "@/app/api/portal/organization/[employeeId]/person/route";
beforeEach(() => {
  vi.resetAllMocks();
  mocks.auth.mockResolvedValue({});
  mocks.context.mockResolvedValue({
    mode: "meta4",
    society: "CYC",
    identity: { status: "resolved" },
  });
  mocks.hierarchy.mockResolvedValue({ reports: [] });
  mocks.person.mockResolvedValue({ sections: [] });
});
const request = (route: typeof hierarchy, id = "1") =>
  route(new Request("https://local.test/api/portal/organization/1?organization=IBER"), {
    params: Promise.resolve({ employeeId: id }),
  });
describe("lecturas autenticadas del organigrama", () => {
  it.each([hierarchy, person])("rechaza sesión ausente y matrículas inválidas", async (get) => {
    mocks.auth.mockResolvedValueOnce(null);
    expect((await request(get)).status).toBe(401);
    expect(mocks.clear).toHaveBeenCalled();
    expect((await request(get, "../1")).status).toBe(400);
    expect(mocks.hierarchy).not.toHaveBeenCalled();
    expect(mocks.person).not.toHaveBeenCalled();
  });
  it("usa sociedad de servidor y respuestas sin caché", async () => {
    const response = await request(hierarchy);
    expect(mocks.hierarchy).toHaveBeenCalledWith("CYC", "1");
    expect(response.headers.get("cache-control")).toBe("no-store");
    expect(await response.json()).toMatchObject({ status: "ok", society: "CYC" });
    await request(person);
    expect(mocks.person).toHaveBeenCalledWith("CYC", "1", true);
  });
  it("no lee en debug, sin identidad coherente ni fuera de sociedad", async () => {
    mocks.context.mockResolvedValueOnce({ mode: "unavailable", message: "Debug" });
    expect((await request(hierarchy)).status).toBe(403);
    mocks.context.mockResolvedValueOnce({
      mode: "meta4",
      identity: { status: "unresolved", message: "Ambigua" },
    });
    expect((await request(person)).status).toBe(403);
    expect(mocks.person).not.toHaveBeenCalled();
    mocks.hierarchy.mockResolvedValueOnce(null);
    expect((await request(hierarchy)).status).toBe(404);
  });
  it("presenta la dependencia real de PeopleNet", async () => {
    mocks.hierarchy.mockRejectedValueOnce(new PeopleNetConfigError(["PEOPLENET_DB_HOST"]));
    const response = await request(hierarchy);
    expect(response.status).toBe(503);
    expect(await response.json()).toMatchObject({ status: "unavailable", pending: ["P05"] });
  });
});
