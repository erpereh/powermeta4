import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  getOperationalSession: vi.fn(),
  listAvailableSocieties: vi.fn(),
  getProfileRow: vi.fn(),
  getById: vi.fn(),
  reconcileMeta4Workspace: vi.fn(),
}));

vi.mock("@/lib/auth/server", () => ({
  getAuthService: () => ({
    getOperationalSession: mocks.getOperationalSession,
  }),
}));

vi.mock("@/lib/security/dpapi", () => ({
  createDpapiAdapter: () => ({
    protectSecret: vi.fn(),
    unprotectSecret: vi.fn(),
  }),
}));

vi.mock("@/server/database/client", () => ({
  getDatabase: () => ({}),
}));

vi.mock("@/server/database/repositories/meta4-user-profile-repository", () => ({
  createMeta4UserProfileRepository: () => ({
    listAvailableSocieties: mocks.listAvailableSocieties,
    getProfileRow: mocks.getProfileRow,
  }),
}));

vi.mock("@/server/database/repositories/company-repository", () => ({
  createCompanyRepository: () => ({
    getById: mocks.getById,
  }),
}));

vi.mock("@/lib/meta4/workspace-scope", () => ({
  reconcileMeta4Workspace: mocks.reconcileMeta4Workspace,
}));

import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";

beforeEach(() => {
  mocks.getOperationalSession.mockReset();
  mocks.listAvailableSocieties.mockReset();
  mocks.getProfileRow.mockReset();
  mocks.getById.mockReset();
  mocks.reconcileMeta4Workspace.mockReset();
});

describe("getMeta4OperationalContext", () => {
  it("returns the active workspace from persisted profiles and ignores client overrides", async () => {
    mocks.getOperationalSession.mockResolvedValue({
      username: "user",
      jSessionId: "jsession",
      refreshSessionId: "refresh",
    });
    mocks.listAvailableSocieties.mockResolvedValue(["CYC", "COLL"]);
    mocks.reconcileMeta4Workspace.mockReturnValue({
      society: "COLL",
      companyId: "company-coll",
      availableSocieties: ["CYC", "COLL"],
    });
    mocks.getById.mockReturnValue({ id: "company-coll" });
    mocks.getProfileRow.mockResolvedValue({
      username: "user",
      society: "COLL",
    });

    const context = await getMeta4OperationalContext({
      sessionId: "session",
      cookieHash: "hash",
      authContext: {
        mode: "meta4",
        username: "user",
        canUseMeta4: true,
        societyCode: "CYC",
        availableSocieties: ["CYC", "COLL"],
      },
      expiresAt: new Date("2099-01-01T00:00:00.000Z"),
      lastValidatedAt: null,
    });

    expect(context).toEqual({
      mode: "meta4",
      username: "user",
      society: "COLL",
      companyId: "company-coll",
      jSessionId: "jsession",
    });
    expect(mocks.getProfileRow).toHaveBeenCalledWith("COLL");
  });

  it("rejects debug sessions before reading profile or tokens", async () => {
    await expect(
      getMeta4OperationalContext({
        sessionId: "session",
        cookieHash: "hash",
        authContext: {
          mode: "debug",
          username: "DEBUG",
          canUseMeta4: false,
          societyCode: null,
          availableSocieties: [],
        },
        expiresAt: new Date("2099-01-01T00:00:00.000Z"),
        lastValidatedAt: null,
      }),
    ).rejects.toBeInstanceOf(Meta4SessionRequiredError);
    expect(mocks.getOperationalSession).not.toHaveBeenCalled();
    expect(mocks.getProfileRow).not.toHaveBeenCalled();
  });
});
