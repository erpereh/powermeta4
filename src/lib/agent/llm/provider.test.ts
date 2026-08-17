import { describe, expect, it, vi } from "vitest";

import { AgentProviderConfigError, AgentProviderRuntimeError } from "@/lib/agent/errors";
import { resolveUsableProviderConfig } from "@/lib/agent/llm/provider";
import type { AiProviderConfigView } from "@/types/ai-provider-config";
import type { CompanyId } from "@/types/workspace";

const GEMINI: AiProviderConfigView = {
  id: "config-gemini",
  name: "Gemini",
  baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai",
  model: "gemini-2.5-flash-lite",
  hasApiKey: true,
};

const GROK: AiProviderConfigView = {
  id: "config-grok",
  name: "Grok",
  baseUrl: "https://api.example.com/v1",
  model: "grok-4-fast",
  hasApiKey: true,
};

const runtime = {
  id: GEMINI.id,
  name: GEMINI.name,
  baseUrl: GEMINI.baseUrl,
  model: GEMINI.model ?? "",
  apiKey: "secret",
};

const createRepository = (
  usable: AiProviderConfigView[],
  resolveImpl?: () => Promise<typeof runtime>,
) => ({
  listUsable: vi.fn(() => usable),
  resolveRuntime: vi.fn(resolveImpl ?? (async () => runtime)),
});

describe("resolveUsableProviderConfig", () => {
  it("uses the requested picker id when it is usable", async () => {
    const repository = createRepository([GEMINI, GROK], async () => ({
      ...runtime,
      id: GROK.id,
      name: GROK.name,
      model: GROK.model ?? "",
    }));
    const resolved = await resolveUsableProviderConfig({
      companyId: "company-1" as CompanyId,
      requestedId: GROK.id,
      persistedId: GEMINI.id,
      repository: repository as never,
    });
    expect(resolved.id).toBe(GROK.id);
    expect(repository.resolveRuntime).toHaveBeenCalledWith("company-1", GROK.id);
  });

  it("falls back to the persisted id when the requested id is missing", async () => {
    const repository = createRepository([GEMINI]);
    const resolved = await resolveUsableProviderConfig({
      companyId: "company-1" as CompanyId,
      requestedId: null,
      persistedId: GEMINI.id,
      repository: repository as never,
    });
    expect(resolved.id).toBe(GEMINI.id);
  });

  it("throws AgentProviderConfigError when no usable config is selected", async () => {
    const repository = createRepository([]);
    await expect(
      resolveUsableProviderConfig({
        companyId: "company-1" as CompanyId,
        requestedId: GEMINI.id,
        persistedId: GEMINI.id,
        repository: repository as never,
      }),
    ).rejects.toBeInstanceOf(AgentProviderConfigError);
  });

  it("does not disguise a decrypt failure as a missing model", async () => {
    const repository = createRepository([GEMINI], async () => {
      throw new Error("DPAPI unprotect failed");
    });
    await expect(
      resolveUsableProviderConfig({
        companyId: "company-1" as CompanyId,
        requestedId: GEMINI.id,
        persistedId: GEMINI.id,
        repository: repository as never,
      }),
    ).rejects.toBeInstanceOf(AgentProviderRuntimeError);
  });
});
