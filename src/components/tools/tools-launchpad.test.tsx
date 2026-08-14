/** @vitest-environment jsdom */

import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock("@/app/actions/workspace", () => ({
  recordToolVisitAction: vi.fn(),
}));

vi.mock("@/stores/use-workspace-store", () => ({
  hydrateWorkspaceStore: vi.fn(),
  useWorkspaceStore: (
    selector: (state: {
      activeCompanyId: string;
      auth: { mode: "debug"; username: string; canUseMeta4: false; societyCode: null };
      workspaces: Record<
        string,
        {
          chats: never[];
          activeChatId: null;
          recentTools: never[];
      preferences: { selectedProviderConfigId: string | null };
      aiProviderConfigs: never[];
        }
      >;
      recordToolVisit: () => void;
    }) => unknown,
  ) =>
    selector({
      activeCompanyId: "company-1",
      auth: {
        mode: "debug",
        username: "DEBUG",
        canUseMeta4: false,
        societyCode: null,
      },
      workspaces: {
        "company-1": {
          chats: [],
          activeChatId: null,
          recentTools: [],
          preferences: { selectedProviderConfigId: null },
          aiProviderConfigs: [],
        },
      },
      recordToolVisit: () => undefined,
    }),
}));

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ToolsLaunchpad } from "./tools-launchpad";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

function renderLaunchpad() {
  return render(
    <TooltipProvider>
      <SidebarProvider>
        <ToolsLaunchpad />
      </SidebarProvider>
    </TooltipProvider>,
  );
}

describe("tools launchpad", () => {
  it("shows Acciones ERP without Registro Retributivo", () => {
    renderLaunchpad();

    const launcher = within(screen.getByRole("main"));

    expect(launcher.getByRole("heading", { name: "Acciones" })).toBeTruthy();
    expect(launcher.queryByRole("heading", { name: "Herramientas" })).toBeNull();
    expect(launcher.queryByText("Registro Retributivo")).toBeNull();
    expect(launcher.queryByText("Reg. Retrib.")).toBeNull();
    expect(launcher.getByRole("tab", { name: "Usuarios" })).toBeTruthy();
    expect(launcher.getByRole("tab", { name: "Empresas" })).toBeTruthy();
    expect(launcher.getByRole("tab", { name: "Nóminas" })).toBeTruthy();
    expect(launcher.getByRole("tab", { name: "Informes" })).toBeTruthy();
    expect(launcher.getByRole("tab", { name: "Procesos" })).toBeTruthy();
    expect(launcher.getByText("Listado de usuarios")).toBeTruthy();
  });
});
