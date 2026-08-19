/** @vitest-environment jsdom */

import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/components/app-shell/app-shell", () => ({
  useWorkspaceHydrated: () => true,
}));

vi.mock("@/app/actions/meta4-profile", () => ({
  getMeta4ProfileViewAction: vi.fn(async () => ({
    available: false,
    debugMode: true,
    username: "DEBUG",
    societyCode: null,
    societyLegalName: null,
    displayName: null,
    lookedUpAt: null,
    sections: [],
  })),
}));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: { auth: unknown }) => unknown) =>
    selector({
      auth: { mode: "debug", username: "DEBUG", canUseMeta4: false, societyCode: null, availableSocieties: [] },
    }),
}));

import { SettingsScreen } from "./settings-screen";

describe("settings session view", () => {
  it("shows the debug mode Meta4 limitation through shared settings content", async () => {
    render(<SettingsScreen />);

    expect(screen.getByText("Ajustes")).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText(/El perfil Meta4 no está disponible en modo debug/i)).toBeTruthy();
    });
  });
});
