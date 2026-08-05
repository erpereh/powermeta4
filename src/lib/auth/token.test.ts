import { describe, expect, it } from "vitest";

import {
  SESSION_DURATION_SECONDS,
  createOpaqueSessionId,
  hashOpaqueSessionId,
  isOpaqueSessionId,
} from "@/lib/auth/token";

describe("opaque browser session ids", () => {
  it("creates an opaque random id and stores only its hash", () => {
    const sessionId = createOpaqueSessionId();

    expect(isOpaqueSessionId(sessionId)).toBe(true);
    expect(sessionId).not.toContain("JSESSIONID");
    expect(hashOpaqueSessionId(sessionId)).not.toBe(sessionId);
    expect(hashOpaqueSessionId(sessionId)).toHaveLength(64);
  });

  it("uses a 30-day sliding cookie duration", () => {
    expect(SESSION_DURATION_SECONDS).toBe(30 * 24 * 60 * 60);
    expect(isOpaqueSessionId("not-a-valid-session".repeat(5))).toBe(false);
  });
});
