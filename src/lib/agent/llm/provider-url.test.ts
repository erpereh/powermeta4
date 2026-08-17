import { describe, expect, it } from "vitest";

import { normalizeProviderBaseUrl, resolveChatCompletionsUrl } from "@/lib/agent/llm/provider-url";

describe("provider URL normalization", () => {
  it("stores a canonical base without a trailing slash", () => {
    expect(normalizeProviderBaseUrl("https://generativelanguage.googleapis.com/v1beta/openai/")).toBe(
      "https://generativelanguage.googleapis.com/v1beta/openai",
    );
  });

  it("strips a duplicated chat/completions suffix from the stored base", () => {
    expect(normalizeProviderBaseUrl("https://api.example.com/v1/chat/completions")).toBe(
      "https://api.example.com/v1",
    );
  });

  it("resolves chat/completions with URL path joining, not string concatenation", () => {
    expect(resolveChatCompletionsUrl("https://generativelanguage.googleapis.com/v1beta/openai")).toBe(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
    );
    expect(resolveChatCompletionsUrl("https://generativelanguage.googleapis.com/v1beta/openai/")).toBe(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
    );
    expect(resolveChatCompletionsUrl("https://api.example.com/v1/chat/completions")).toBe(
      "https://api.example.com/v1/chat/completions",
    );
  });
});
