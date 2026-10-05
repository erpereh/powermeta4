import { afterEach, describe, expect, it, vi } from "vitest";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";

vi.mock("@/lib/meta4/operational-context", () => ({ getMeta4OperationalContext: vi.fn() }));
vi.mock("@/lib/security/dpapi", () => ({ createDpapiAdapter: vi.fn() }));
vi.mock("@/server/database/client", () => ({ getDatabase: vi.fn() }));
vi.mock("@/server/database/repositories/meta4-user-profile-repository", () => ({
  createMeta4UserProfileRepository: vi.fn(),
}));

import { getPortalContext, type PortalContextDeps } from "./context";

const session: ResolvedAuthSession = {
  sessionId: "session",
  cookieHash: "hash",
  expiresAt: new Date("2099-01-01"),
  lastValidatedAt: null,
  authContext: {
    mode: "meta4",
    username: "u",
    canUseMeta4: true,
    societyCode: "CYC",
    availableSocieties: ["CYC", "COLL"],
  },
};
const deps: PortalContextDeps = {
  getOperationalContext: async () => ({
    mode: "meta4",
    society: "COLL",
    username: "u",
    companyId: "coll",
    jSessionId: "synthetic",
  }),
  loadProfile: async () => ({
    recordSets: [{ fields: { id_Empleado: "001471", clave_Self: "u" } }],
  }),
};
afterEach(() => vi.restoreAllMocks());

describe("contexto de identidad del portal", () => {
  it("resuelve sociedad e identidad en servidor y admite duplicados equivalentes", async () => {
    const load = vi.fn(async () => [
      { employeeId: "001471", selfKey: "u" },
      { employeeId: "001471", selfKey: "U" },
    ]);
    const result = await getPortalContext(session, { ...deps, loadOroIdentity: load });
    expect(result).toMatchObject({
      society: "COLL",
      identity: { status: "resolved", crossChecked: true, person: { employeeId: "001471" } },
    });
    expect(load).toHaveBeenCalledWith("COLL", "001471");
  });
  it("falla cerrado ante errores o usuarios contradictorios en PeopleNet configurado", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const result = await getPortalContext(session, {
      ...deps,
      loadOroIdentity: async () => {
        throw new Error("dato sensible sintético");
      },
    });
    expect(result).toMatchObject({ identity: { status: "unresolved" } });
    expect(JSON.stringify(log.mock.calls)).not.toContain("dato sensible");
    const conflict = await getPortalContext(session, {
      ...deps,
      loadOroIdentity: async () => [{ employeeId: "001471", selfKey: "other" }],
    });
    expect(conflict).toMatchObject({ identity: { status: "unresolved" } });
  });
  it("solo permite identidad del perfil cuando PeopleNet no está configurado", async () => {
    const result = await getPortalContext(session, {
      ...deps,
      loadOroIdentity: async () => {
        throw new PeopleNetConfigError(["PEOPLENET_DB_HOST"]);
      },
    });
    expect(result).toMatchObject({ identity: { status: "resolved", crossChecked: false } });
  });
  it("no consulta datos con perfil ambiguo o sesión debug", async () => {
    const load = vi.fn();
    const result = await getPortalContext(session, {
      ...deps,
      loadProfile: async () => ({
        recordSets: [
          { fields: { id_Empleado: "1", clave_Self: "u" } },
          { fields: { id_Empleado: "2", clave_Self: "u" } },
        ],
      }),
      loadOroIdentity: load,
    });
    expect(result).toMatchObject({ identity: { status: "unresolved" } });
    expect(load).not.toHaveBeenCalled();
    expect(
      await getPortalContext(
        { ...session, authContext: { ...session.authContext, mode: "debug" } },
        deps,
      ),
    ).toMatchObject({ mode: "unavailable" });
  });
});
