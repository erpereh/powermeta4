import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";

import { proxy } from "@/proxy";
import { SESSION_COOKIE_NAME, createOpaqueSessionId } from "@/lib/auth/token";

describe("Next 16 proxy optimistic checks", () => {
  it("redirects requests without an opaque browser session", () => {
    const response = proxy(new NextRequest("http://localhost/home"));

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
  });

  it("allows an opaque cookie through without touching Prisma or SOAP", () => {
    const request = new NextRequest("http://localhost/home");
    request.cookies.set(SESSION_COOKIE_NAME, createOpaqueSessionId());

    expect(proxy(request).status).toBe(200);
  });

  it("clears an opaque cookie when the server redirects after failed restoration", () => {
    const request = new NextRequest("http://localhost/login?expired=1");
    request.cookies.set(SESSION_COOKIE_NAME, createOpaqueSessionId());

    const response = proxy(request);

    expect(response.status).toBe(200);
    expect(response.headers.get("set-cookie")).toContain(`${SESSION_COOKIE_NAME}=`);
    expect(response.headers.get("set-cookie")).toContain("Max-Age=0");
  });
});
