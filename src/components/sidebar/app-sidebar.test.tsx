/** @vitest-environment jsdom */

import { useEffect } from "react";
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  pathname: "/home",
  push: vi.fn(),
  auth: {
    mode: "meta4" as "debug" | "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC" as "CYC" | "IBER" | "COLL" | null,
    availableSocieties: ["CYC"] as Array<"CYC" | "IBER" | "COLL">,
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => mocks.pathname,
  useRouter: () => ({ push: mocks.push }),
}));

vi.mock("@/app/actions/workspace", () => ({
  createConversationAction: vi.fn(),
  deleteConversationAction: vi.fn(),
  selectConversationAction: vi.fn(),
  updateConversationAction: vi.fn(),
  recordToolVisitAction: vi.fn(),
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
        }
      >;
      createChat: () => string;
      selectChat: () => void;
      toggleFavorite: () => void;
      setChatIcon: () => void;
      setChatColor: () => void;
      deleteChat: () => void;
      recordToolVisit: () => void;
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
        },
      },
      createChat: () => "chat-1",
      selectChat: () => undefined,
      toggleFavorite: () => undefined,
      setChatIcon: () => undefined,
      setChatColor: () => undefined,
      deleteChat: () => undefined,
      recordToolVisit: () => undefined,
    }),
}));

vi.mock("@/components/sidebar/user-menu", () => ({
  UserMenu: () => <div>User menu</div>,
}));

import { AppCommandPaletteProvider } from "@/components/app-shell/app-command-palette";
import { SidebarProvider, useSidebar, ToastProvider } from "@/components/system";
import { AppSidebar } from "./app-sidebar";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  mocks.pathname = "/home";
  mocks.push.mockReset();
  mocks.auth = {
    mode: "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC",
    availableSocieties: ["CYC"],
  };
  HTMLElement.prototype.scrollIntoView = vi.fn();
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

function stubMatchMedia(mobile: boolean) {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: mobile && String(query).includes("767"),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

function renderSidebar({ defaultOpen = true, mobile = false } = {}) {
  stubMatchMedia(mobile);
  return render(
    <ToastProvider>
      <AppCommandPaletteProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          {mobile ? <OpenMobileSidebar /> : null}
          <AppSidebar />
        </SidebarProvider>
      </AppCommandPaletteProvider>
    </ToastProvider>,
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
    expect(submenu.getByRole("button", { name: "Reg. Retrib." })).toBeTruthy();
    expect(submenu.queryByRole("button", { name: "Usuarios" })).toBeNull();
    expect(submenu.queryByRole("button", { name: "Empresas" })).toBeNull();
    expect(submenu.queryByRole("button", { name: "Nóminas" })).toBeNull();
    expect(submenu.queryByRole("button", { name: "Informes" })).toBeNull();
    expect(submenu.queryByRole("button", { name: "Procesos" })).toBeNull();

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: "Reg. Retrib." })).toBeNull();
    });
    expect(mocks.push).not.toHaveBeenCalled();

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(toolsSubmenu().getByRole("button", { name: "Reg. Retrib." })).toBeTruthy();
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
    expect(toolsSubmenu().getByRole("button", { name: "Reg. Retrib." })).toBeTruthy();
    expect(mocks.push).not.toHaveBeenCalled();
  });

  it("marks Reg. Retrib. active without activating Herramientas", () => {
    mocks.pathname = "/tools/registro-retributivo";
    renderSidebar();

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("aria-current")).toBeNull();
    expect(
      toolsSubmenu().getByRole("button", { name: "Reg. Retrib." }).getAttribute("aria-current"),
    ).toBe("page");
  });

  it("keeps the mobile sidebar open when toggling Herramientas and closes it when navigating", async () => {
    const user = userEvent.setup();
    renderSidebar({ mobile: true });

    await waitFor(() => {
      expect(toolsTrigger()).toBeTruthy();
    });

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(toolsSubmenu().getByRole("button", { name: "Reg. Retrib." })).toBeTruthy();

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(screen.getByRole("button", { name: "Herramientas" })).toBeTruthy();
    expect(mocks.push).not.toHaveBeenCalled();

    await user.click(trigger);
    await user.click(toolsSubmenu().getByRole("button", { name: "Reg. Retrib." }));

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
      availableSocieties: [],
    };
    renderSidebar();
    expect(screen.getByText("Modo desarrollo")).toBeTruthy();
  });

  it("opens the conversation search dialog from Buscar without crashing", async () => {
    const user = userEvent.setup();
    renderSidebar();

    await user.click(screen.getByRole("button", { name: "Buscar" }));

    expect(screen.getByPlaceholderText("Buscar en tus conversaciones...")).toBeTruthy();
    expect(screen.getByText("No hay conversaciones que coincidan.")).toBeTruthy();
  });
});
