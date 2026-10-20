/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  auth: {
    mode: "debug" as "debug" | "meta4",
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null as "CYC" | "IBER" | "COLL" | null,
    availableSocieties: [] as Array<"CYC" | "IBER" | "COLL">,
  },
  openSettings: vi.fn(),
}));

vi.mock("@/app/actions/auth", () => ({ logoutAction: vi.fn() }));
vi.mock("@/app/actions/meta4-profile", () => ({
  getMeta4ProfileViewAction: vi
    .fn()
    .mockResolvedValue({ available: false, debugMode: true, sections: [] }),
}));
vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: { auth: typeof mocks.auth }) => unknown) =>
    selector({ auth: mocks.auth }),
}));
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "system",
    setTheme: vi.fn(),
    resolvedTheme: "light",
  }),
}));
vi.mock("@/components/app-shell/app-shell", () => ({
  useSettingsDialog: () => ({ openSettings: mocks.openSettings }),
}));

import { SidebarProvider } from "@/components/system";
import { UserMenu } from "./user-menu";
import { SettingsDialog } from "@/components/settings/settings-dialog";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

function SettingsHarness() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    mocks.openSettings.mockImplementation(() => setOpen(true));
  }, []);
  return (
    <SidebarProvider>
      <UserMenu />
      <SettingsDialog open={open} onOpenChange={setOpen} />
    </SidebarProvider>
  );
}

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  mocks.auth = {
    mode: "debug",
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null,
    availableSocieties: [],
  };
  mocks.openSettings.mockReset();
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
});

describe("sidebar user menu", () => {
  it("closes the menu before using the appearance switch in the settings dialog", async () => {
    const user = userEvent.setup();
    render(<SettingsHarness />);
    await user.click(screen.getByRole("button", { name: "Abrir menú de DEBUG" }));
    await user.click(screen.getByRole("menuitem", { name: "Ajustes" }));
    await waitFor(() => expect(screen.queryByRole("menu")).toBeNull());
    expect(screen.getByRole("dialog", { name: "Ajustes" })).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Apariencia" }));
    const toggle = screen.getByRole("switch", { name: "Ocultar textos de desarrollo" });
    expect(toggle.getAttribute("aria-checked")).toBe("true");
    await user.click(toggle);
    expect(toggle.getAttribute("aria-checked")).toBe("false");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull());
    document.documentElement.removeAttribute("data-hide-development-text");
    localStorage.removeItem("powermeta4-hide-development-text");
  });
  it("shows development status and a Debug badge only for debug auth", () => {
    const { rerender } = render(
      <SidebarProvider>
        <UserMenu />
      </SidebarProvider>,
    );

    expect(screen.getByText("Modo de desarrollo")).toBeTruthy();
    expect(screen.getByText("Debug")).toBeTruthy();

    mocks.auth = {
      mode: "meta4",
      username: "Meta4 User",
      canUseMeta4: true,
      societyCode: "CYC",
      availableSocieties: ["CYC"],
    };
    rerender(
      <SidebarProvider>
        <UserMenu />
      </SidebarProvider>,
    );

    expect(screen.queryByText("Modo de desarrollo")).toBeNull();
    expect(screen.queryByText("Debug")).toBeNull();
  });
});
