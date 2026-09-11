/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthView } from "@/types/session";

const mocks = vi.hoisted(() => ({
  getMeta4ProfileViewAction: vi.fn(),
  state: {
    auth: {
      mode: "debug" as const,
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
      availableSocieties: [],
    } as AuthView,
  },
}));

vi.mock("@/app/actions/meta4-profile", () => ({
  getMeta4ProfileViewAction: mocks.getMeta4ProfileViewAction,
}));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: typeof mocks.state) => unknown) => selector(mocks.state),
}));

import { SettingsContent } from "./settings-content";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  mocks.state.auth = {
    mode: "debug",
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null,
    availableSocieties: [],
  };
  mocks.getMeta4ProfileViewAction.mockResolvedValue({
    available: false,
    debugMode: true,
    username: "DEBUG",
    societyCode: null,
    societyLegalName: null,
    displayName: null,
    lookedUpAt: null,
    sections: [],
  });
});

describe("settings content", () => {
  it("shows the consolidated navigation in the requested order", () => {
    render(<SettingsContent variant="dialog" />);

    const navigation = screen.getByRole("navigation", { name: "Secciones de ajustes" });
    expect(
      within(navigation)
        .getAllByRole("button")
        .map((button) => button.textContent),
    ).toEqual(["Datos de la persona", "Datos y copias"]);
  });

  it("renders all profile sections together instead of separate navigation items", async () => {
    mocks.state.auth = {
      mode: "meta4",
      username: "usuario",
      canUseMeta4: true,
      societyCode: "CYC",
      availableSocieties: ["CYC"],
    };
    mocks.getMeta4ProfileViewAction.mockResolvedValue({
      available: true,
      debugMode: false,
      username: "usuario",
      societyCode: "CYC",
      societyLegalName: "CyC",
      displayName: "Usuario",
      lookedUpAt: "2026-08-14T00:00:00.000Z",
      sections: [
        {
          id: "account",
          title: "Cuenta",
          fields: [{ key: "username", label: "Usuario", value: "usuario" }],
        },
        {
          id: "organization",
          title: "Organización",
          fields: [{ key: "society", label: "Sociedad", value: "CYC" }],
        },
        {
          id: "session",
          title: "Sesión Meta4",
          fields: [{ key: "mode", label: "Modo", value: "Meta4" }],
        },
      ],
    });

    render(<SettingsContent variant="dialog" />);

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Cuenta" })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Organización" })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Sesión Meta4" })).toBeTruthy();
    });
  });

});
