/** @vitest-environment jsdom */

import { DatabaseSync } from "node:sqlite";

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { createAuthRepository } from "@/lib/auth/session-repository";
import { createAuthService } from "@/lib/auth/service";
import { runMigrations } from "@/server/database/migrations";

const mocks = vi.hoisted(() => ({
  isDebugAuthEnabled: vi.fn(),
  getAuthService: vi.fn(),
  setSessionCookie: vi.fn(),
  redirect: vi.fn(),
}));

vi.mock("@/lib/auth/debug-config", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/lib/auth/debug-config")>();
  return { ...original, isDebugAuthEnabled: mocks.isDebugAuthEnabled };
});
vi.mock("@/lib/auth/server", () => ({ getAuthService: mocks.getAuthService }));
vi.mock("@/lib/auth/session", () => ({
  deleteSessionCookie: vi.fn(),
  getBrowserSessionNonce: vi.fn(),
  setSessionCookie: mocks.setSessionCookie,
}));
vi.mock("next/navigation", () => ({ redirect: mocks.redirect }));

import { debugLoginAction } from "@/app/actions/auth";
import LoginPage from "./page";

let database: DatabaseSync;

beforeEach(() => {
  database = new DatabaseSync(":memory:");
  database.exec("PRAGMA foreign_keys = ON");
  runMigrations(database);
  for (const mock of Object.values(mocks)) mock.mockReset();
  mocks.redirect.mockImplementation((location: string) => {
    throw new Error(`redirect:${location}`);
  });
});

afterEach(() => {
  cleanup();
  database.close();
  vi.unstubAllEnvs();
});

describe("debug authentication configuration integration", () => {
  it("uses the same enabled configuration for the login page and debug action", async () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "false");
    mocks.isDebugAuthEnabled.mockReturnValue(true);
    mocks.getAuthService.mockReturnValue(
      createAuthService({
        repository: createAuthRepository(database),
        profileRepository: {
          getProfileRow: vi.fn(async () => null),
          getDecryptedProfile: vi.fn(async () => null),
          clearProfile: vi.fn(async () => undefined),
        },
        dpapi: { protectSecret: vi.fn(), unprotectSecret: vi.fn() },
        soap: {
          login: vi.fn(),
          retrieveM4Session: vi.fn(),
          createCookieSoapPoster: vi.fn(() => vi.fn()),
        },
        createSessionNonce: () => "A".repeat(43),
        createLocalSessionId: () => "debug-integration-session",
      }),
    );

    render(<LoginPage />);
    expect(screen.getByRole("button", { name: "Entrar en modo debug" })).toBeTruthy();

    await expect(debugLoginAction({}, new FormData())).rejects.toThrow("redirect:/home");

    expect(mocks.setSessionCookie).toHaveBeenCalledWith("A".repeat(43));
    expect(
      database.prepare("SELECT id, username, auth_mode FROM local_browser_sessions").get(),
    ).toEqual({
      id: "debug-integration-session",
      username: "DEBUG",
      auth_mode: "debug",
    });
  });

  it("keeps the page and action disabled in production even when the flag is true", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    mocks.isDebugAuthEnabled.mockReturnValue(false);

    render(<LoginPage />);
    expect(screen.queryByRole("button", { name: "Entrar en modo debug" })).toBeNull();
    await expect(debugLoginAction({}, new FormData())).resolves.toEqual({
      error: "El modo debug no está disponible.",
      errorCode: "DEBUG_AUTH_NOT_ALLOWED",
    });
    expect(mocks.getAuthService).not.toHaveBeenCalled();
  });
});
