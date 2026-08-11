import { describe, expect, it, vi } from "vitest";

import {
  Meta4SessionRequiredError,
  SessionExpiredError,
  createAuthenticatedSoapClient,
} from "@/lib/meta4/authenticated-soap-client";
import { isSessionExpiredResponse } from "@/lib/meta4/session-expiration";

const META4_AUTH_SESSION = {
  sessionId: "internal-meta4-session",
  cookieHash: "hash-only",
  authContext: { mode: "meta4" as const, username: "user", canUseMeta4: true },
  expiresAt: new Date("2026-09-01T00:00:00.000Z"),
  lastValidatedAt: new Date("2026-08-01T00:00:00.000Z"),
};

describe("Meta4 session expiration detection", () => {
  it("detects only known authentication failures", async () => {
    expect(await isSessionExpiredResponse(new Response("", { status: 401 }))).toBe(true);
    expect(await isSessionExpiredResponse(new Response("", { status: 403 }))).toBe(true);
    expect(
      await isSessionExpiredResponse(
        new Response("<Fault><faultcode>M4_SESSION_EXPIRED</faultcode></Fault>", { status: 500 }),
      ),
    ).toBe(true);
    expect(
      await isSessionExpiredResponse(
        new Response(
          "<Fault><faultcode>BUSINESS_ERROR</faultcode><faultstring>invalid company</faultstring></Fault>",
          { status: 500 },
        ),
      ),
    ).toBe(false);
  });
});

describe("authenticated SOAP client", () => {
  it("rejects debug before reading operational tokens, renewal, DPAPI, or fetch", async () => {
    const auth = {
      getCurrentAuthContext: vi.fn(async () => ({
        sessionId: "internal-debug-session",
        cookieHash: "hash-only",
        authContext: { mode: "debug" as const, username: "DEBUG", canUseMeta4: false },
        expiresAt: new Date("2026-09-01T00:00:00.000Z"),
        lastValidatedAt: null,
      })),
      getOperationalSession: vi.fn(),
      renewSession: vi.fn(),
      invalidate: vi.fn(async () => null),
    };
    const fetchImpl = vi.fn();
    const client = createAuthenticatedSoapClient({ auth, fetchImpl });

    await expect(
      client.executeAuthenticatedSoap({
        url: "https://example.test/tool",
        xml: "<request />",
        parseResponse: async () => "never",
      }),
    ).rejects.toMatchObject({
      name: "Meta4SessionRequiredError",
      code: "META4_SESSION_REQUIRED",
    });
    expect(Meta4SessionRequiredError).toBeTypeOf("function");
    expect(auth.getOperationalSession).not.toHaveBeenCalled();
    expect(auth.renewSession).not.toHaveBeenCalled();
    expect(auth.invalidate).not.toHaveBeenCalled();
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("rejects every non-Meta4 context even if a malformed view claims Meta4 access", async () => {
    const auth = {
      getCurrentAuthContext: vi.fn(async () => ({
        sessionId: "internal-debug-session",
        cookieHash: "hash-only",
        authContext: { mode: "debug" as const, username: "DEBUG", canUseMeta4: true },
        expiresAt: new Date("2026-09-01T00:00:00.000Z"),
        lastValidatedAt: null,
      })),
      getOperationalSession: vi.fn(),
      renewSession: vi.fn(),
      invalidate: vi.fn(async () => null),
    };
    const fetchImpl = vi.fn();
    const client = createAuthenticatedSoapClient({ auth, fetchImpl });

    await expect(
      client.executeAuthenticatedSoap({
        url: "https://example.test/tool",
        xml: "<request />",
        parseResponse: async () => "never",
      }),
    ).rejects.toBeInstanceOf(Meta4SessionRequiredError);
    expect(auth.getOperationalSession).not.toHaveBeenCalled();
    expect(auth.renewSession).not.toHaveBeenCalled();
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("single-flights renewal and retries each operation only once", async () => {
    let currentToken = "old-token";
    let renewalCount = 0;
    let renewalFlight: Promise<void> | null = null;
    const auth = {
      getCurrentAuthContext: vi.fn(async () => META4_AUTH_SESSION),
      getOperationalSession: vi.fn(async (_authSession: unknown) => ({
        jSessionId: currentToken,
        refreshSessionId: "refresh",
      })),
      renewSession: vi.fn(async (_authSession: unknown) => {
        if (!renewalFlight) {
          renewalFlight = (async () => {
            renewalCount += 1;
            await new Promise((resolve) => setTimeout(resolve, 5));
            currentToken = "new-token";
          })();
        }
        await renewalFlight;
      }),
      invalidate: vi.fn(async () => null),
    };
    const fetchImpl = vi.fn(async (_input: RequestInfo | URL, init?: RequestInit) => {
      const cookie = new Headers(init?.headers).get("cookie");
      if (cookie === "JSESSIONID=old-token") return new Response("", { status: 401 });
      return new Response("<ok><value>done</value></ok>", { status: 200 });
    });
    const client = createAuthenticatedSoapClient({ auth, fetchImpl });
    const operation = {
      url: "https://example.test/tool",
      xml: "<request />",
      parseResponse: async (response: Response) => response.text(),
    };

    const [first, second] = await Promise.all([
      client.executeAuthenticatedSoap(operation),
      client.executeAuthenticatedSoap(operation),
    ]);

    expect(first).toContain("done");
    expect(second).toContain("done");
    expect(renewalCount).toBe(1);
    expect(auth.renewSession).toHaveBeenCalledOnce();
    expect(fetchImpl).toHaveBeenCalledTimes(4);
  });

  it("invalidates the global session after one failed retry", async () => {
    const auth = {
      getCurrentAuthContext: vi.fn(async () => META4_AUTH_SESSION),
      getOperationalSession: vi.fn(async (_authSession: unknown) => ({
        jSessionId: "token",
        refreshSessionId: "refresh",
      })),
      renewSession: vi.fn(async (_authSession: unknown) => undefined),
      invalidate: vi.fn(async () => null),
    };
    const client = createAuthenticatedSoapClient({
      auth,
      fetchImpl: vi.fn(async () => new Response("", { status: 403 })),
    });

    await expect(
      client.executeAuthenticatedSoap({
        url: "https://example.test/tool",
        xml: "<request />",
        parseResponse: async () => "never",
      }),
    ).rejects.toBeInstanceOf(SessionExpiredError);
    expect(auth.invalidate).toHaveBeenCalledOnce();
  });
});
