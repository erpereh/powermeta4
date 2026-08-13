/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
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
          preferences: { selectedModelId: string };
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
          preferences: { selectedModelId: "local" },
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

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
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

function renderSidebar(defaultOpen = true) {
  return render(
    <TooltipProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
      </SidebarProvider>
    </TooltipProvider>,
  );
}

function toolsTrigger() {
  return screen.getByRole("button", { name: "Herramientas" });
}

describe("app sidebar tools group", () => {
  it("makes Herramientas a single collapsible control instead of a /tools link", async () => {
    const user = userEvent.setup();
    const { container } = renderSidebar();

    expect(container.querySelector('a[href="/tools"]')).toBeNull();
    expect(screen.getByRole("link", { name: "Reg. Retrib." }).getAttribute("href")).toBe(
      "/tools/registro-retributivo",
    );
    expect(screen.getByRole("link", { name: "Usuarios" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Empresas" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Nóminas" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Informes" })).toBeTruthy();
    expect(screen.getByRole("link", { name: "Procesos" })).toBeTruthy();

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(container.querySelectorAll('[data-sidebar="menu-action"]')).toHaveLength(0);

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(screen.queryByRole("link", { name: "Reg. Retrib." })).toBeNull();
    expect(mocks.push).not.toHaveBeenCalled();

    await user.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("link", { name: "Reg. Retrib." })).toBeTruthy();
  });

  it("expands a collapsed desktop sidebar and opens the tools submenu", async () => {
    const user = userEvent.setup();
    const { container } = renderSidebar(false);

    const sidebar = container.querySelector("[data-slot='sidebar']");
    expect(sidebar?.getAttribute("data-state")).toBe("collapsed");
    expect(toolsTrigger().getAttribute("aria-expanded")).toBe("true");

    await user.click(toolsTrigger());

    expect(sidebar?.getAttribute("data-state")).toBe("expanded");
    expect(toolsTrigger().getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("link", { name: "Reg. Retrib." })).toBeTruthy();
    expect(mocks.push).not.toHaveBeenCalled();
  });

  it("marks Reg. Retrib. active without activating Herramientas", () => {
    mocks.pathname = "/tools/registro-retributivo";
    renderSidebar();

    const trigger = toolsTrigger();
    expect(trigger.getAttribute("data-active")).toBe("false");
    expect(screen.getByRole("link", { name: "Reg. Retrib." }).getAttribute("data-active")).toBe(
      "true",
    );
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
