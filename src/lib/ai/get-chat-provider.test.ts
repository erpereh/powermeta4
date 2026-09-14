import { afterEach, describe, expect, it, vi } from "vitest";

import { UnsupportedChatProviderError, getChatProvider } from "./get-chat-provider";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getChatProvider", () => {
  it("defaults to the http-compatible provider when AI_PROVIDER is unset", () => {
    expect(getChatProvider().name).toBe("http-compatible");
  });

  it("resolves the http-compatible provider case-insensitively", () => {
    vi.stubEnv("AI_PROVIDER", "  HTTP-Compatible ");
    expect(getChatProvider().name).toBe("http-compatible");
  });

  it("throws a typed, localized error for an unknown provider without touching any caller", () => {
    vi.stubEnv("AI_PROVIDER", "some-other-service");
    expect(() => getChatProvider()).toThrow(UnsupportedChatProviderError);
    try {
      getChatProvider();
      throw new Error("expected getChatProvider to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(UnsupportedChatProviderError);
      expect((error as UnsupportedChatProviderError).provider).toBe("some-other-service");
    }
  });
});
