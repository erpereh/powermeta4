import { describe, expect, it } from "vitest";

import { createSessionToken, verifySessionToken } from "@/lib/auth/token";

describe("session tokens", () => {
  it("creates and verifies a signed expiring token", () => {
    const now = Date.parse("2026-08-04T10:00:00.000Z");
    const token = createSessionToken("demo-user", "test-secret", now);

    expect(token).toBeTruthy();
    expect(verifySessionToken(token ?? undefined, "test-secret", now)).toMatchObject({
      userId: "demo-user",
    });
  });

  it("rejects a token with a bad signature or expired timestamp", () => {
    const now = Date.parse("2026-08-04T10:00:00.000Z");
    const token = createSessionToken("demo-user", "test-secret", now);

    expect(verifySessionToken(token ?? undefined, "other-secret", now)).toBeNull();
    expect(
      verifySessionToken(token ?? undefined, "test-secret", now + 8 * 60 * 60 * 1000),
    ).toBeNull();
  });
});
