/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("@/components/app-shell/app-shell", () => ({
  useWorkspaceHydrated: () => true,
}));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: { auth: unknown }) => unknown) =>
    selector({
      auth: { mode: "debug", username: "DEBUG", canUseMeta4: false },
    }),
}));

import { SettingsScreen } from "./settings-screen";

describe("settings session view", () => {
  it("shows the safe debug mode details and Meta4 limitation", () => {
    render(<SettingsScreen />);

    expect(screen.getByText("Modo")).toBeTruthy();
    expect(screen.getByText("Debug")).toBeTruthy();
    expect(screen.getByText("Usuario")).toBeTruthy();
    expect(screen.getByText("DEBUG")).toBeTruthy();
    expect(screen.getByText("Estado")).toBeTruthy();
    expect(screen.getByText("Modo de desarrollo")).toBeTruthy();
    expect(screen.getByText("Meta4")).toBeTruthy();
    expect(screen.getByText("No conectado")).toBeTruthy();
    expect(screen.getByText(/requieren una sesión Meta4 real/i)).toBeTruthy();
  });
});
