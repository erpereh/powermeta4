import { describe, expect, it, vi } from "vitest";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import {
  Meta4SessionRequiredError,
  SessionExpiredError,
  type AuthenticatedSoapOperation,
} from "@/lib/meta4/authenticated-soap-client";
import { Meta4HttpError } from "@/lib/meta4/client";
import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import { Meta4UsersError } from "@/lib/meta4/users/errors";
import { listMeta4Users } from "@/lib/meta4/users/service";

type SoapExecute = <T>(operation: AuthenticatedSoapOperation<T>) => Promise<T>;

const AUTH_SESSION = {
  sessionId: "internal-meta4-session",
  cookieHash: "hash-only",
  authContext: {
    mode: "meta4" as const,
    username: "user",
    canUseMeta4: true,
    societyCode: "CYC" as const,
  },
  expiresAt: new Date("2026-09-01T00:00:00.000Z"),
  lastValidatedAt: new Date("2026-08-01T00:00:00.000Z"),
} satisfies ResolvedAuthSession;

const successBody = (society: string) => `
  <soap:Envelope>
    <soap:Body>
      <CSP_POWER4_USER_ALLResponse>
        <CSP_POWER4_USER_ALLReturn>
          <return>1.0</return>
          <Csp_Carga_Users>
            <p_Sociedad>${society}</p_Sociedad>
            <Csp_Carga_UsersRecordSet>
              <nombre>Paula</nombre>
              <apellido_1>García</apellido_1>
              <apellido_2>López</apellido_2>
              <id_Empleado>0001</id_Empleado>
            </Csp_Carga_UsersRecordSet>
          </Csp_Carga_Users>
        </CSP_POWER4_USER_ALLReturn>
      </CSP_POWER4_USER_ALLResponse>
    </soap:Body>
  </soap:Envelope>`;

describe("listMeta4Users service", () => {
  it("builds envelopes from operational society for CYC, IBER and COLL", async () => {
    for (const society of ["CYC", "IBER", "COLL"] as const) {
      let callCount = 0;
      const executeSoap: SoapExecute = async (operation) => {
        callCount += 1;
        expect(operation.xml).toContain(`ARG_SOCIEDAD>${society}<`);
        expect(operation.xml).not.toContain("SOAPAction");
        expect(operation.xml).not.toContain("jsession-should-not-leak");
        return operation.parseResponse(new Response(successBody(society), { status: 200 }));
      };

      const result = await listMeta4Users(AUTH_SESSION, {
        getOperationalContext: async () => ({
          mode: "meta4",
          username: "user",
          society,
          jSessionId: "jsession-should-not-leak",
        }),
        executeSoap,
        usersListUrl: "https://example.test/CSP_POWER4_USER_ALL",
      });

      expect(result.society).toBe(society);
      expect(result.users).toEqual([{ id: "0001", fullName: "Paula García López" }]);
      expect(callCount).toBe(1);
    }
  });

  it("uses executeAuthenticatedSoap path and never accepts a client society", async () => {
    const getOperationalContext = vi.fn(async () => ({
      mode: "meta4" as const,
      username: "user",
      society: "IBER" as const,
      jSessionId: "server-jsession",
    }));
    let callCount = 0;
    const executeSoap: SoapExecute = async (operation) => {
      callCount += 1;
      expect(operation.xml).toContain("ARG_SOCIEDAD>IBER<");
      expect(operation.xml).not.toContain("CYC");
      return operation.parseResponse(new Response(successBody("IBER"), { status: 200 }));
    };

    await listMeta4Users(AUTH_SESSION, {
      getOperationalContext,
      executeSoap,
      usersListUrl: "https://example.test/users",
    });

    expect(getOperationalContext).toHaveBeenCalledWith(AUTH_SESSION);
    expect(callCount).toBe(1);
  });

  it("does not fetch when operational context requires a Meta4 session (debug)", async () => {
    let callCount = 0;
    const executeSoap: SoapExecute = async () => {
      callCount += 1;
      throw new Error("should not fetch");
    };
    await expect(
      listMeta4Users(AUTH_SESSION, {
        getOperationalContext: async () => {
          throw new Meta4SessionRequiredError();
        },
        executeSoap,
      }),
    ).rejects.toBeInstanceOf(Meta4SessionRequiredError);
    expect(callCount).toBe(0);
  });

  it("rethrows known system errors and only wraps unclassified failures", async () => {
    const known = [
      new Meta4SessionRequiredError(),
      new SessionExpiredError(),
      new Meta4SoapFaultError("boom", "soap:Server"),
      new Meta4HttpError(500),
      new Meta4ProfileError("META4_PROFILE_REQUIRED", "perfil"),
      new Meta4UsersError("META4_USERS_SOCIETY_MISMATCH", "mismatch"),
    ];

    for (const error of known) {
      await expect(
        listMeta4Users(AUTH_SESSION, {
          getOperationalContext: async () => ({
            mode: "meta4",
            username: "user",
            society: "CYC",
            jSessionId: "js",
          }),
          executeSoap: async () => {
            throw error;
          },
        }),
      ).rejects.toBe(error);
    }

    await expect(
      listMeta4Users(AUTH_SESSION, {
        getOperationalContext: async () => ({
          mode: "meta4",
          username: "user",
          society: "CYC",
          jSessionId: "js",
        }),
        executeSoap: async () => {
          throw new Error("network cable melted");
        },
      }),
    ).rejects.toMatchObject({ code: "META4_USERS_FETCH_FAILED" });
  });

  it("logs only sanitized operation metadata", async () => {
    const logs: Array<Record<string, string>> = [];
    await listMeta4Users(AUTH_SESSION, {
      getOperationalContext: async () => ({
        mode: "meta4",
        username: "user",
        society: "CYC",
        jSessionId: "secret-jsession",
      }),
      executeSoap: async (operation) =>
        operation.parseResponse(new Response(successBody("CYC"), { status: 200 })),
      usersListUrl: "https://example.test/users",
      log: (_message, details) => logs.push(details),
    });

    expect(logs[0]).toEqual({
      operation: "CSP_POWER4_USER_ALL",
      society: "CYC",
      status: "200",
      code: "OK",
    });
    expect(JSON.stringify(logs)).not.toContain("secret-jsession");
    expect(JSON.stringify(logs)).not.toContain("Paula");
    expect(JSON.stringify(logs)).not.toContain("0001");
  });
});
