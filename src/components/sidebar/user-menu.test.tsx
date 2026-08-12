/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  auth: {
    mode: "debug" as "debug" | "meta4",
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null as "CYC" | "IBER" | "COLL" | null,
  },
  openSettings: vi.fn(),
}));

vi.mock("@/app/actions/auth", () => ({ logoutAction: vi.fn() }));
vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: { auth: typeof mocks.auth }) => unknown) =>
    selector({ auth: mocks.auth }),
}));
vi.mock("@/components/theme/theme-menu", () => ({ ThemeMenu: () => <div>Theme menu</div> }));
vi.mock("@/components/app-shell/app-shell", () => ({
  useSettingsDialog: () => ({ openSettings: mocks.openSettings }),
}));

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserMenu } from "./user-menu";

beforeEach(() => {
  mocks.auth = { mode: "debug", username: "DEBUG", canUseMeta4: false, societyCode: null };
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
  it("shows development status and a Debug badge only for debug auth", () => {
    const { rerender } = render(
      <TooltipProvider>
        <SidebarProvider>
          <UserMenu />
        </SidebarProvider>
      </TooltipProvider>,
    );

    expect(screen.getByText("Modo de desarrollo")).toBeTruthy();
    expect(screen.getByText("Debug")).toBeTruthy();

    mocks.auth = {
      mode: "meta4",
      username: "Meta4 User",
      canUseMeta4: true,
      societyCode: "CYC",
    };
    rerender(
      <TooltipProvider>
        <SidebarProvider>
          <UserMenu />
        </SidebarProvider>
      </TooltipProvider>,
    );

    expect(screen.queryByText("Modo de desarrollo")).toBeNull();
    expect(screen.queryByText("Debug")).toBeNull();
  });
});
