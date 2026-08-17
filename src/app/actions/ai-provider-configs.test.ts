import { beforeEach, describe, expect, it, vi } from "vitest";

import { ProviderValidationError } from "@/lib/agent/errors";

const mocks = vi.hoisted(() => ({
  requireAuthContext: vi.fn(),
  getWorkspaceSnapshot: vi.fn(),
  getWorkspaceRepository: vi.fn(),
  getDatabase: vi.fn(),
  createDpapiAdapter: vi.fn(),
  createAiProviderConfigRepository: vi.fn(),
  probeOpenAiCompatibleProvider: vi.fn(),
  repository: {
    list: vi.fn(),
    create: vi.fn(),
    delete: vi.fn(),
    update: vi.fn(),
    readApiKey: vi.fn(),
  },
  workspaceRepository: {
    setSelectedProviderConfig: vi.fn(),
  },
}));

vi.mock("@/lib/auth/session", () => ({
  requireAuthContext: mocks.requireAuthContext,
}));
vi.mock("@/lib/workspace/service", () => ({
  getWorkspaceSnapshot: mocks.getWorkspaceSnapshot,
  getWorkspaceRepository: mocks.getWorkspaceRepository,
}));
vi.mock("@/server/database/client", () => ({
  getDatabase: mocks.getDatabase,
}));
vi.mock("@/lib/security/dpapi", () => ({
  createDpapiAdapter: mocks.createDpapiAdapter,
}));
vi.mock("@/server/database/repositories/ai-provider-config-repository", () => ({
  createAiProviderConfigRepository: mocks.createAiProviderConfigRepository,
}));
vi.mock("@/lib/agent/llm/validate-provider", () => ({
  probeOpenAiCompatibleProvider: mocks.probeOpenAiCompatibleProvider,
}));

import {
  createAiProviderConfigAction,
  deleteAiProviderConfigAction,
  getAiProviderConfigsAction,
} from "./ai-provider-configs";

const SNAPSHOT = {
  activeCompanyId: "company-active",
  workspaces: {
    "company-active": {
      preferences: { selectedProviderConfigId: null },
    },
  },
};

beforeEach(() => {
  vi.clearAllMocks();
  mocks.requireAuthContext.mockResolvedValue({
    authContext: {
      mode: "debug",
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
    },
  });
  mocks.getWorkspaceSnapshot.mockResolvedValue(SNAPSHOT);
  mocks.getWorkspaceRepository.mockReturnValue(mocks.workspaceRepository);
  mocks.createAiProviderConfigRepository.mockReturnValue(mocks.repository);
  mocks.probeOpenAiCompatibleProvider.mockResolvedValue(undefined);
  mocks.workspaceRepository.setSelectedProviderConfig.mockResolvedValue(null);
  mocks.repository.list.mockReturnValue([
    {
      id: "config-1",
      name: "Local",
      baseUrl: "http://localhost:11434/v1",
      model: "local-model",
      hasApiKey: true,
      apiKey: "secret",
    },
  ]);
  mocks.repository.create.mockResolvedValue({
    id: "config-2",
    name: "Cloud",
    baseUrl: "https://api.example.com/v1",
    model: "gpt-5.6",
    hasApiKey: true,
    apiKey: "secret",
  });
});

describe("AI provider config actions", () => {
  it("lists configs for the server-resolved active company", async () => {
    await expect(getAiProviderConfigsAction()).resolves.toEqual({
      ok: true,
      data: [
        { id: "config-1", name: "Local", baseUrl: "http://localhost:11434/v1", model: "local-model", hasApiKey: true },
      ],
    });

    expect(mocks.repository.list).toHaveBeenCalledWith("company-active");
  });

  it("rejects invalid URLs before touching the repository", async () => {
    await expect(
      createAiProviderConfigAction({
        name: "Servidor",
        baseUrl: "javascript:alert(1)",
        model: "gpt-5.6",
        apiKey: "secret",
      }),
    ).resolves.toMatchObject({ ok: false, message: expect.stringMatching(/URL/i) });

    expect(mocks.probeOpenAiCompatibleProvider).not.toHaveBeenCalled();
    expect(mocks.repository.create).not.toHaveBeenCalled();
  });

  it("probes a valid config then persists it without returning the API key", async () => {
    const result = await createAiProviderConfigAction({
      name: "  Cloud  ",
      baseUrl: " https://api.example.com/v1 ",
      model: " gpt-5.6 ",
      apiKey: "  secret  ",
    });
    expect(result).toEqual({
      ok: true,
      data: {
        id: "config-2",
        name: "Cloud",
        baseUrl: "https://api.example.com/v1",
        model: "gpt-5.6",
        hasApiKey: true,
      },
    });
    expect(JSON.stringify(result)).not.toContain("secret");
    expect(mocks.probeOpenAiCompatibleProvider).toHaveBeenCalledWith({
      baseUrl: "https://api.example.com/v1",
      apiKey: "secret",
      model: "gpt-5.6",
    });
    expect(mocks.repository.create).toHaveBeenCalledWith("company-active", {
      name: "Cloud",
      baseUrl: "https://api.example.com/v1",
      model: "gpt-5.6",
      apiKey: "secret",
    });
    expect(mocks.workspaceRepository.setSelectedProviderConfig).toHaveBeenCalledWith(
      "company-active",
      "config-2",
    );
  });

  it("does not persist when the API key is rejected", async () => {
    mocks.probeOpenAiCompatibleProvider.mockRejectedValue(
      new ProviderValidationError("PROVIDER_API_KEY_INVALID", "API key no válida."),
    );
    const result = await createAiProviderConfigAction({
      name: "Cloud",
      baseUrl: "https://api.example.com/v1",
      model: "gpt-5.6",
      apiKey: "bad-key",
    });
    expect(result).toEqual({
      ok: false,
      errorCode: "PROVIDER_API_KEY_INVALID",
      message: "API key no válida.",
    });
    expect(mocks.repository.create).not.toHaveBeenCalled();
  });

  it("does not persist when the model is unavailable", async () => {
    mocks.probeOpenAiCompatibleProvider.mockRejectedValue(
      new ProviderValidationError(
        "PROVIDER_MODEL_UNAVAILABLE",
        "El modelo indicado no existe o no está disponible.",
      ),
    );
    const result = await createAiProviderConfigAction({
      name: "Cloud",
      baseUrl: "https://api.example.com/v1",
      model: "does-not-exist",
      apiKey: "secret",
    });
    expect(result).toEqual({
      ok: false,
      errorCode: "PROVIDER_MODEL_UNAVAILABLE",
      message: "El modelo indicado no existe o no está disponible.",
    });
    expect(mocks.repository.create).not.toHaveBeenCalled();
  });

  it("keeps an existing selection when creating an additional config", async () => {
    mocks.getWorkspaceSnapshot.mockResolvedValue({
      activeCompanyId: "company-active",
      workspaces: {
        "company-active": {
          preferences: { selectedProviderConfigId: "config-1" },
        },
      },
    });
    await createAiProviderConfigAction({
      name: "Cloud",
      baseUrl: "https://api.example.com/v1",
      model: "gpt-5.6",
      apiKey: "secret",
    });
    expect(mocks.workspaceRepository.setSelectedProviderConfig).not.toHaveBeenCalled();
  });

  it("deletes by id in the server-resolved active company", async () => {
    await expect(deleteAiProviderConfigAction("config-1")).resolves.toEqual({ ok: true, data: null });

    expect(mocks.repository.delete).toHaveBeenCalledWith("company-active", "config-1");
  });
});
