import { describe, expect, it } from "vitest";

import { isUsableAiProviderConfig, type AiProviderConfigView } from "@/types/ai-provider-config";

const VALID: AiProviderConfigView = {
  id: "config-1",
  name: "Gemini Flash",
  baseUrl: "https://api.example.com/v1",
  model: "gemini-flash",
  hasApiKey: true,
};

describe("isUsableAiProviderConfig", () => {
  it("accepts a complete configuration", () => {
    expect(isUsableAiProviderConfig(VALID)).toBe(true);
  });

  it("rejects a configuration without an API key", () => {
    expect(isUsableAiProviderConfig({ ...VALID, hasApiKey: false })).toBe(false);
  });

  it("rejects a configuration with an empty or missing model", () => {
    expect(isUsableAiProviderConfig({ ...VALID, model: null })).toBe(false);
    expect(isUsableAiProviderConfig({ ...VALID, model: "   " })).toBe(false);
  });

  it("rejects a configuration with a non-http(s) base URL", () => {
    expect(isUsableAiProviderConfig({ ...VALID, baseUrl: "ftp://example.com" })).toBe(false);
  });

  it("rejects a configuration with an unparsable base URL", () => {
    expect(isUsableAiProviderConfig({ ...VALID, baseUrl: "not-a-url" })).toBe(false);
  });
});
