import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  requireAuthContext: vi.fn(),
  getWorkspaceSnapshot: vi.fn(),
  getDatabase: vi.fn(),
  createDpapiAdapter: vi.fn(),
  createAiProviderConfigRepository: vi.fn(),
  repository: {
    list: vi.fn(),
    create: vi.fn(),
    delete: vi.fn(),
  },
}));

vi.mock("@/lib/auth/session", () => ({
  requireAuthContext: mocks.requireAuthContext,
}));
vi.mock("@/lib/workspace/service", () => ({
  getWorkspaceSnapshot: mocks.getWorkspaceSnapshot,
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

import {
  createAiProviderConfigAction,
  deleteAiProviderConfigAction,
  getAiProviderConfigsAction,
} from "./ai-provider-configs";

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
  mocks.getWorkspaceSnapshot.mockResolvedValue({ activeCompanyId: "company-active" });
  mocks.createAiProviderConfigRepository.mockReturnValue(mocks.repository);
  mocks.repository.list.mockReturnValue([
    {
      id: "config-1",
      name: "Local",
      baseUrl: "http://localhost:11434/v1",
      hasApiKey: true,
      apiKey: "secret",
    },
  ]);
  mocks.repository.create.mockResolvedValue({
    id: "config-2",
    name: "Cloud",
    baseUrl: "https://api.example.com/v1",
    hasApiKey: true,
    apiKey: "secret",
  });
});

describe("AI provider config actions", () => {
  it("lists configs for the server-resolved active company", async () => {
    await expect(getAiProviderConfigsAction()).resolves.toEqual({
      ok: true,
      data: [
        { id: "config-1", name: "Local", baseUrl: "http://localhost:11434/v1", hasApiKey: true },
      ],
    });

    expect(mocks.repository.list).toHaveBeenCalledWith("company-active");
  });

  it("rejects invalid URLs before touching the repository", async () => {
    await expect(
      createAiProviderConfigAction({
        name: "Servidor",
        baseUrl: "javascript:alert(1)",
        apiKey: "secret",
      }),
    ).resolves.toMatchObject({ ok: false, message: expect.stringMatching(/URL/i) });

    expect(mocks.repository.create).not.toHaveBeenCalled();
  });

  it("trims and forwards valid input without returning the API key", async () => {
    const result = await createAiProviderConfigAction({
      name: "  Cloud  ",
      baseUrl: " https://api.example.com/v1 ",
      apiKey: "  secret  ",
    });
    expect(result).toEqual({
      ok: true,
      data: {
        id: "config-2",
        name: "Cloud",
        baseUrl: "https://api.example.com/v1",
        hasApiKey: true,
      },
    });
    expect(JSON.stringify(result)).not.toContain("secret");

    expect(mocks.repository.create).toHaveBeenCalledWith("company-active", {
      name: "Cloud",
      baseUrl: "https://api.example.com/v1",
      apiKey: "secret",
    });
  });

  it("deletes by id in the server-resolved active company", async () => {
    await expect(deleteAiProviderConfigAction("config-1")).resolves.toEqual({ ok: true, data: null });

    expect(mocks.repository.delete).toHaveBeenCalledWith("company-active", "config-1");
  });
});
