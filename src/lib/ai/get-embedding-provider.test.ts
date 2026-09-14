import { afterEach, describe, expect, it, vi } from "vitest";

import { UnsupportedEmbeddingProviderError, getEmbeddingProvider } from "./get-embedding-provider";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("getEmbeddingProvider", () => {
  it("defaults to the http-compatible provider when EMBEDDING_PROVIDER is unset", () => {
    expect(getEmbeddingProvider().name).toBe("http-compatible");
  });

  it("throws a typed, localized error for an unknown provider", () => {
    vi.stubEnv("EMBEDDING_PROVIDER", "unknown-service");
    expect(() => getEmbeddingProvider()).toThrow(UnsupportedEmbeddingProviderError);
  });
});
