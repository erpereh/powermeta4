import { describe, expect, it, vi } from "vitest";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import type { Meta4Society } from "@/lib/meta4/societies";
import type { PeopleNetEmployeeListRow } from "@/lib/peoplenet/employees";

import { listMeta4Users } from "./service";

const AUTH_SESSION = {
  sessionId: "internal-meta4-session",
  cookieHash: "hash-only",
  authContext: {
    mode: "meta4" as const,
    username: "user",
    canUseMeta4: true,
    societyCode: "CYC" as const,
    availableSocieties: ["CYC"],
  },
  expiresAt: new Date("2026-09-01T00:00:00.000Z"),
  lastValidatedAt: new Date("2026-08-01T00:00:00.000Z"),
} satisfies ResolvedAuthSession;

const operationalContext = (society: Meta4Society) => ({
  mode: "meta4" as const,
  username: "user",
  society,
  jSessionId: "secret-jsession",
  companyId: `company-${society}`,
});

const employee = (values: Partial<PeopleNetEmployeeListRow> = {}): PeopleNetEmployeeListRow => ({
  ID_EMPLEADO: "0001",
  CLAVE_SELF: "paula",
  NOMBRE: "Paula",
  APELLIDO_1: "García",
  APELLIDO_2: "López",
  DT_LAST_UPDATE: null,
  ...values,
});

describe("listMeta4Users service", () => {
  it("queries the server-resolved society and preserves the result contract", async () => {
    for (const society of ["CYC", "IBER", "COLL"] as const) {
      const getOperationalContext = vi.fn(async () => operationalContext(society));
      const listEmployees = vi.fn(async (_organization: Meta4Society) => [employee()]);

      await expect(
        listMeta4Users(AUTH_SESSION, { getOperationalContext, listEmployees }),
      ).resolves.toEqual({
        society,
        users: [{ id: "0001", fullName: "Paula García López", claveSelf: "paula" }],
      });
      expect(getOperationalContext).toHaveBeenCalledWith(AUTH_SESSION);
      expect(listEmployees).toHaveBeenCalledExactlyOnceWith(society);
    }
  });

  it("returns an empty list when PeopleNet has no rows", async () => {
    await expect(
      listMeta4Users(AUTH_SESSION, {
        getOperationalContext: async () => operationalContext("CYC"),
        listEmployees: async () => [],
      }),
    ).resolves.toEqual({ society: "CYC", users: [] });
  });

  it("does not query PeopleNet if the operational context requires Meta4 login", async () => {
    const listEmployees = vi.fn(async () => [employee()]);
    await expect(
      listMeta4Users(AUTH_SESSION, {
        getOperationalContext: async () => {
          throw new Meta4SessionRequiredError();
        },
        listEmployees,
      }),
    ).rejects.toBeInstanceOf(Meta4SessionRequiredError);
    expect(listEmployees).not.toHaveBeenCalled();
  });

  it("wraps SQL failures without exposing employee data or connection details", async () => {
    const logs: Array<Record<string, string>> = [];
    const failure = listMeta4Users(AUTH_SESSION, {
      getOperationalContext: async () => operationalContext("IBER"),
      listEmployees: async () => {
        throw new Error("SQL host secret; employee 0001");
      },
      log: (_message, details) => logs.push(details),
    });

    await expect(failure).rejects.toMatchObject({
      name: "Meta4UsersError",
      code: "META4_USERS_FETCH_FAILED",
      message: "No se han podido cargar los usuarios desde Meta4.",
    });
    expect(logs).toEqual([{ society: "IBER", code: "META4_USERS_FETCH_FAILED" }]);
    expect(JSON.stringify(logs)).not.toContain("secret");
    expect(JSON.stringify(logs)).not.toContain("0001");
  });

  it("logs only aggregate metadata after a successful query", async () => {
    const logs: Array<Record<string, string>> = [];
    await listMeta4Users(AUTH_SESSION, {
      getOperationalContext: async () => operationalContext("CYC"),
      listEmployees: async () => [employee()],
      log: (_message, details) => logs.push(details),
    });
    expect(logs).toEqual([{ society: "CYC", code: "OK", count: "1" }]);
    expect(JSON.stringify(logs)).not.toContain("Paula");
    expect(JSON.stringify(logs)).not.toContain("0001");
  });
});
