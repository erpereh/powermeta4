/** @vitest-environment jsdom */

import { useEffect } from "react";
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  pathname: "/home",
  push: vi.fn(),
  isMobile: false,
  auth: {
    mode: "meta4" as "debug" | "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC" as "CYC" | "IBER" | "COLL" | null,
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => mocks.pathname,
  useRouter: () => ({ push: mocks.push }),
}));

vi.mock("@/hooks/use-mobile", () => ({
  useIsMobile: () => mocks.isMobile,
}));

vi.mock("@/app/actions/workspace", () => ({
  createConversationAction: vi.fn(),
  deleteConversationAction: vi.fn(),
  selectConversationAction: vi.fn(),
  updateConversationAction: vi.fn(),
}));

vi.mock("@/stores/use-workspace-store", () => ({
  hydrateWorkspaceStore: vi.fn(),
  workspaceStore: {
    getState: () => ({
      workspaces: {
        "company-1": { activeChatId: null },
      },
    }),
  },
  useWorkspaceStore: (
    selector: (state: {
      activeCompanyId: string;
      auth: typeof mocks.auth;
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
      createChat: () => string;
      selectChat: () => void;
      toggleFavorite: () => void;
      setChatIcon: () => void;
      setChatColor: () => void;
      deleteChat: () => void;
    }) => unknown,
  ) =>
    selector({
      activeCompanyId: "company-1",
      auth: mocks.auth,
      workspaces: {
        "company-1": {
          chats: [],
          activeChatId: null,
          recentTools: [],
          preferences: { selectedProviderConfigId: null },
          aiProviderConfigs: [],
        },
      },
      createChat: () => "chat-1",
      selectChat: () => undefined,
      toggleFavorite: () => undefined,
      setChatIcon: () => undefined,
      setChatColor: () => undefined,
      deleteChat: () => undefined,
    }),
}));

vi.mock("@/components/sidebar/user-menu", () => ({
  UserMenu: () => <div>User menu</div>,
}));

import { SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "./app-sidebar";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  mocks.pathname = "/home";
  mocks.push.mockReset();
  mocks.isMobile = false;
  mocks.auth = {
    mode: "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC",
  };
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

function OpenMobileSidebar() {
  const { setOpenMobile } = useSidebar();
  useEffect(() => {
    setOpenMobile(true);
  }, [setOpenMobile]);
  return null;
}

function renderSidebar({ defaultOpen = true, mobile = false } = {}) {
  mocks.isMobile = mobile;
  return render(
    <TooltipProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        {mobile ? <OpenMobileSidebar /> : null}
        <AppSidebar />
      </SidebarProvider>
    </TooltipProvider>,
  );
}

function toolsTrigger() {
  return screen.getByRole("button", { name: "Herramientas" });
}

function toolsSubmenu() {
  const submenu = document.getElementById("sidebar-tools-submenu");
  if (!submenu) throw new Error("expected tools submenu");
  return within(submenu);
}

describe("app sidebar tools group", () => {
  it("makes Herramientas a single collapsible control instead of a /tools link", async () => {
    const user = userEvent.setup();
    const { container } = renderSidebar();

    expect(container.querySelector('a[href="/tools"]')).toBeNull();
    const submenu = toolsSubmenu();
    expect(submenu.getByRole("link", { name: "Reg. Retrib." }).getAttribute("href")).toBe(
      "/tools/registro-retributivo",
    );
    expect(submenu.queryByRole("link", { name: "Usuarios" })).toBeNull();
    expect(submenu.queryByRole("link", { name: "Empresas" })).toBeNull();
    expect(submenu.queryByRole("link", { name: "Nóminas" })).toBeNull();
    expect(submenu.queryByRole("link", { name: "Informes" })).toBeNull();
    expect(submenu.queryByRole("link", { name: "Procesos" })).toBeNull();

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(container.querySelectorAll('[data-sidebar="menu-action"]')).toHaveLength(0);

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("link", { name: "Reg. Retrib." })).toBeNull();
    expect(mocks.push).not.toHaveBeenCalled();

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(toolsSubmenu().getByRole("link", { name: "Reg. Retrib." })).toBeTruthy();
  });

  it("expands a collapsed desktop sidebar and opens the tools submenu", async () => {
    const user = userEvent.setup();
    const { container } = renderSidebar({ defaultOpen: false });

    const sidebar = container.querySelector("[data-slot='sidebar']");
    expect(sidebar?.getAttribute("data-state")).toBe("collapsed");
    expect(toolsTrigger().getAttribute("aria-expanded")).toBe("true");

    await user.click(toolsTrigger());

    expect(sidebar?.getAttribute("data-state")).toBe("expanded");
    expect(toolsTrigger().getAttribute("aria-expanded")).toBe("true");
    expect(toolsSubmenu().getByRole("link", { name: "Reg. Retrib." })).toBeTruthy();
    expect(mocks.push).not.toHaveBeenCalled();
  });

  it("marks Reg. Retrib. active without activating Herramientas", () => {
    mocks.pathname = "/tools/registro-retributivo";
    renderSidebar();

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("data-active")).toBe("false");
    expect(
      toolsSubmenu().getByRole("link", { name: "Reg. Retrib." }).getAttribute("data-active"),
    ).toBe("true");
  });

  it("keeps the mobile sidebar open when toggling Herramientas and closes it when navigating", async () => {
    const user = userEvent.setup();
    renderSidebar({ mobile: true });

    await waitFor(() => {
      expect(toolsTrigger()).toBeTruthy();
    });

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(toolsSubmenu().getByRole("link", { name: "Reg. Retrib." })).toBeTruthy();

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(screen.getByRole("button", { name: "Herramientas" })).toBeTruthy();
    expect(mocks.push).not.toHaveBeenCalled();

    await user.click(trigger);
    await user.click(toolsSubmenu().getByRole("link", { name: "Reg. Retrib." }));

    await waitFor(() => {
      expect(screen.queryByRole("button", { name: "Herramientas" })).toBeNull();
    });
  });

  it("keeps society and development labels in the header", () => {
    const { unmount } = renderSidebar();
    expect(screen.getByText("CYC")).toBeTruthy();
    unmount();

    mocks.auth = {
      mode: "debug",
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
    };
    renderSidebar();
    expect(screen.getByText("Modo desarrollo")).toBeTruthy();
  });
});
