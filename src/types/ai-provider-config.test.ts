import { describe, expect, it } from "vitest";

import { isUsableAiProviderConfig, resolveSelectedProviderConfigId, type AiProviderConfigView } from "@/types/ai-provider-config";

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

describe("resolveSelectedProviderConfigId", () => {
  it("returns null when there are no usable configs", () => {
    expect(resolveSelectedProviderConfigId([], null)).toBeNull();
    expect(resolveSelectedProviderConfigId([], "config-1")).toBeNull();
  });

  it("repairs a null selection to the first usable config", () => {
    expect(resolveSelectedProviderConfigId([VALID, { ...VALID, id: "config-2" }], null)).toBe(
      "config-1",
    );
  });

  it("repairs a deleted selection to another usable config", () => {
    expect(resolveSelectedProviderConfigId([VALID], "config-deleted")).toBe("config-1");
  });

  it("keeps a valid stored selection", () => {
    const second = { ...VALID, id: "config-2" };
    expect(resolveSelectedProviderConfigId([VALID, second], "config-2")).toBe("config-2");
  });
});
