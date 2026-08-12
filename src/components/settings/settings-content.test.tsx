/** @vitest-environment jsdom */

import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

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
      auth: { mode: "debug", username: "DEBUG", canUseMeta4: false, societyCode: null },
    }),
}));

import { SettingsContent } from "./settings-content";

describe("settings content", () => {
  it("shows the debug Meta4 profile alert and backup section navigation", async () => {
    render(<SettingsContent variant="dialog" />);

    expect(screen.getByRole("button", { name: "Cuenta" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Organización" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Puesto" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Centro de trabajo" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Datos laborales" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Sesión Meta4" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Datos y copias" })).toBeTruthy();

    await waitFor(() => {
      expect(screen.getByText(/El perfil Meta4 no está disponible en modo debug/i)).toBeTruthy();
    });
  });
});
