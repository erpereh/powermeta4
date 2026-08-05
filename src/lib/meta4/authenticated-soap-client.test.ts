import { describe, expect, it, vi } from "vitest";

import {
  SessionExpiredError,
  createAuthenticatedSoapClient,
} from "@/lib/meta4/authenticated-soap-client";
import { isSessionExpiredResponse } from "@/lib/meta4/session-expiration";

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
  it("single-flights renewal and retries each operation only once", async () => {
    let currentToken = "old-token";
    let renewalCount = 0;
    let renewalFlight: Promise<void> | null = null;
    const auth = {
      getOperationalSession: vi.fn(async () => ({
        jSessionId: currentToken,
        refreshSessionId: "refresh",
      })),
      renewSession: vi.fn(async () => {
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
    expect(auth.renewSession).toHaveBeenCalledTimes(2);
    expect(fetchImpl).toHaveBeenCalledTimes(4);
  });

  it("invalidates the global session after one failed retry", async () => {
    const auth = {
      getOperationalSession: vi.fn(async () => ({
        jSessionId: "token",
        refreshSessionId: "refresh",
      })),
      renewSession: vi.fn(async () => undefined),
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
