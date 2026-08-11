import { afterEach, describe, expect, it, vi } from "vitest";

import {
  DEBUG_AUTH_DISABLED,
  DEBUG_AUTH_NOT_ALLOWED,
  DebugAuthConfigurationError,
  assertDebugAuthEnabled,
  getDebugUsername,
  isDebugAuthEnabled,
} from "@/lib/auth/debug-config";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("debug authentication configuration", () => {
  it("enables debug authentication only for the exact development and true combination", () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    expect(isDebugAuthEnabled()).toBe(true);

    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "TRUE");
    expect(isDebugAuthEnabled()).toBe(false);

    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    expect(isDebugAuthEnabled()).toBe(false);
  });

  it("uses a trimmed server username and falls back to DEBUG", () => {
    vi.stubEnv("POWERMETA4_DEBUG_USERNAME", "  Desarrollo local  ");
    expect(getDebugUsername()).toBe("Desarrollo local");

    vi.stubEnv("POWERMETA4_DEBUG_USERNAME", "   ");
    expect(getDebugUsername()).toBe("DEBUG");
  });

  it("returns a sanitized error code when debug is disabled or forbidden", () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "false");
    expect(() => assertDebugAuthEnabled()).toThrow(
      expect.objectContaining({ code: DEBUG_AUTH_DISABLED }),
    );

    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    try {
      assertDebugAuthEnabled();
      throw new Error("Expected debug configuration error");
    } catch (error) {
      expect(error).toBeInstanceOf(DebugAuthConfigurationError);
      expect(error).toMatchObject({ code: DEBUG_AUTH_NOT_ALLOWED });
    }
  });
});
