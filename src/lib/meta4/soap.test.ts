import { describe, expect, it, vi } from "vitest";

import {
  buildLoginEnvelope,
  buildRetrieveM4SessionEnvelope,
  parseLoginResponse,
  parseRetrieveM4SessionResponse,
} from "@/lib/meta4/soap-xml";
import { extractJSessionId, parseSetCookieHeaders } from "@/lib/meta4/cookies";
import { createMeta4Client } from "@/lib/meta4/client";

describe("Meta4 SOAP XML", () => {
  it("preserves credential semantics while escaping XML and sends language 3", () => {
    const xml = buildLoginEnvelope(' USER&<" ', 'pass<&"', "3");

    expect(xml).toContain("<sch:ai_sUser> USER&amp;&lt;&quot; </sch:ai_sUser>");
    expect(xml).toContain("<sch:ai_sPassword>pass&lt;&amp;&quot;</sch:ai_sPassword>");
    expect(xml).toContain("<sch:ai_sLanguage>3</sch:ai_sLanguage>");
    expect(xml).not.toContain("SOAPAction");
  });

  it("builds retrieveM4Session without putting the refresh id in headers", () => {
    const xml = buildRetrieveM4SessionEnvelope("refresh&value");

    expect(xml).toContain("<sch:ai_sessionId>refresh&amp;value</sch:ai_sessionId>");
    expect(xml).not.toContain("SOAPAction");
  });

  it("parses namespaced sessionID and rejects SOAP Faults or missing values", () => {
    const xml = `
      <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
        <s:Body>
          <m:loginResponse xmlns:m="http://schemas.meta4.com/">
            <m:loginReturn><m:sessionID>refresh-123</m:sessionID></m:loginReturn>
          </m:loginResponse>
        </s:Body>
      </s:Envelope>`;

    expect(parseLoginResponse(xml)).toEqual({ refreshSessionId: "refresh-123" });
    expect(() =>
      parseLoginResponse(
        "<soap:Envelope><soap:Body><soap:Fault><faultcode>soap:Server</faultcode><faultstring>bad login</faultstring></soap:Fault></soap:Body></soap:Envelope>",
      ),
    ).toThrow(/SOAP Fault/);
    expect(() =>
      parseLoginResponse(
        "<soap:Envelope><soap:Body><soap:Fault><faultstring>bad login</faultstring></soap:Fault></soap:Body></soap:Envelope>",
      ),
    ).toThrow(/bad login/);
    expect(() => parseLoginResponse("<Envelope><Body /></Envelope>")).toThrow(/sessionID/);
  });

  it("requires retrieveM4SessionReturn exactly 0", () => {
    expect(
      parseRetrieveM4SessionResponse("<x><retrieveM4SessionReturn>0</retrieveM4SessionReturn></x>"),
    ).toEqual({
      returnCode: "0",
    });
    expect(() =>
      parseRetrieveM4SessionResponse("<x><retrieveM4SessionReturn>1</retrieveM4SessionReturn></x>"),
    ).toThrow(/return/);
  });
});

describe("Meta4 Set-Cookie", () => {
  it("extracts JSESSIONID from multiple cookies and ignores M4_EVT_WEB_END", () => {
    const headers = {
      getSetCookie: () => [
        "M4_EVT_WEB_END=1; Path=/",
        "JSESSIONID=abc-123; Path=/; Secure; HttpOnly",
      ],
      get: () => null,
    };

    expect(parseSetCookieHeaders(headers)).toEqual([
      { name: "M4_EVT_WEB_END", value: "1" },
      { name: "JSESSIONID", value: "abc-123" },
    ]);
    expect(extractJSessionId(headers)).toBe("abc-123");
    expect(() =>
      extractJSessionId({ getSetCookie: () => ["M4_EVT_WEB_END=1"], get: () => null }),
    ).toThrow(/JSESSIONID/);
  });
});

describe("Meta4 client transport", () => {
  it("posts only the required XML headers and keeps Meta4 cookies server-side", async () => {
    const fetchImpl = vi.fn(async (_input: RequestInfo | URL, init?: RequestInit) => {
      const headers = new Headers(init?.headers);
      expect(headers.get("content-type")).toBe("text/xml; charset=utf-8");
      expect(headers.get("accept")).toBe("text/xml");
      expect(headers.get("soapaction")).toBeNull();
      expect(init?.body).toContain("ai_sUser");
      return new Response(
        "<loginResponse><loginReturn><sessionID>refresh-1</sessionID></loginReturn></loginResponse>",
        { status: 200, headers: { "set-cookie": "JSESSIONID=jsession-1; Path=/; Secure" } },
      );
    });
    const client = createMeta4Client({
      fetchImpl,
      loginUrl: "https://example.test/services/Login",
    });

    await expect(client.login(" USER ", "password")).resolves.toEqual({
      jSessionId: "jsession-1",
      refreshSessionId: "refresh-1",
    });
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("parses a SOAP Fault even when Meta4 returns a non-success HTTP status", async () => {
    const client = createMeta4Client({
      loginUrl: "https://example.test/services/Login",
      fetchImpl: async () =>
        new Response(
          "<soap:Envelope><soap:Body><soap:Fault><faultstring>expired credentials</faultstring></soap:Fault></soap:Body></soap:Envelope>",
          { status: 500, headers: { "set-cookie": "JSESSIONID=ignored" } },
        ),
    });

    await expect(client.login("user", "password")).rejects.toThrow(/expired credentials/);
  });
});
