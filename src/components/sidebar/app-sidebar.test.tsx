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

function toolsList() {
  return within(screen.getByRole("list", { name: "Herramientas" }));
}

describe("app sidebar tools group", () => {
  it("lists Herramientas as an always visible section instead of a /tools link", () => {
    const { container } = renderSidebar();

    expect(container.querySelector('a[href="/tools"]')).toBeNull();
    expect(screen.queryByRole("button", { name: "Herramientas" })).toBeNull();
    const tools = toolsList();
    expect(tools.getByRole("button", { name: "Reg. Retrib." })).toBeTruthy();
    expect(tools.queryByRole("button", { name: "Usuarios" })).toBeNull();
    expect(tools.queryByRole("button", { name: "Empresas" })).toBeNull();
    expect(tools.queryByRole("button", { name: "Nóminas" })).toBeNull();
    expect(tools.queryByRole("button", { name: "Informes" })).toBeNull();
    expect(tools.queryByRole("button", { name: "Procesos" })).toBeNull();
    expect(mocks.push).not.toHaveBeenCalled();
  });

  it("keeps the tools reachable from the collapsed desktop rail", async () => {
    const user = userEvent.setup();
    const { container } = renderSidebar({ defaultOpen: false });

    const sidebar = container.querySelector("[data-slot='sidebar']");
    expect(sidebar?.getAttribute("data-state")).toBe("collapsed");

    await user.click(toolsList().getByRole("button", { name: "Reg. Retrib." }));

    expect(mocks.push).toHaveBeenCalledWith("/tools/registro-retributivo");
  });

  it("marks Reg. Retrib. active", () => {
    mocks.pathname = "/tools/registro-retributivo";
    renderSidebar();

    expect(
      toolsList().getByRole("button", { name: "Reg. Retrib." }).getAttribute("aria-current"),
    ).toBe("page");
  });

  it("closes the mobile sidebar after navigating to a tool", async () => {
    const user = userEvent.setup();
    renderSidebar({ mobile: true });

    const tool = await screen.findByRole("button", { name: "Reg. Retrib." });
    await user.click(tool);

    expect(mocks.push).toHaveBeenCalledWith("/tools/registro-retributivo");
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: "Reg. Retrib." })).toBeNull();
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

  it("selects the employee section for a nested portal URL", () => {
    mocks.pathname = "/portal/empleado/datos/idiomas";
    renderSidebar();
    const submenu = within(document.getElementById("sidebar-portal-submenu")!);
    expect(
      submenu.getByRole("button", { name: "Mi información personal" }).getAttribute("aria-current"),
    ).toBe("page");
    expect(submenu.queryByRole("button", { name: "Mis favoritos" })).toBeNull();
  });

  it("shows the manager sections for the manager profile", () => {
    mocks.pathname = "/portal/responsable/equipo/validar-idiomas";
    renderSidebar();
    const submenu = within(document.getElementById("sidebar-portal-submenu")!);
    expect(
      submenu.getByRole("button", { name: "Información personal" }).getAttribute("aria-current"),
    ).toBe("page");
    expect(submenu.getByRole("button", { name: "Revisión de la remuneración" })).toBeTruthy();
    expect(submenu.queryByRole("button", { name: "Mi información personal" })).toBeNull();
  });

  it("closes the mobile Sheet after navigating to a portal section", async () => {
    mocks.pathname = "/portal";
    const user = userEvent.setup();
    renderSidebar({ mobile: true });
    const portal = await screen.findByRole("button", { name: "Portal" });
    await user.click(portal);
    expect(portal.getAttribute("aria-expanded")).toBe("false");
    await user.click(portal);
    await user.click(screen.getByRole("button", { name: "Mis datos económicos" }));
    expect(mocks.push).toHaveBeenCalledWith("/portal/empleado/retribucion");
    await waitFor(() => expect(screen.queryByRole("button", { name: "Portal" })).toBeNull());
  });

  it("opens the conversation search dialog from Buscar without crashing", async () => {
    const user = userEvent.setup();
    renderSidebar();

    await user.click(screen.getByRole("button", { name: "Buscar" }));

    expect(screen.getByPlaceholderText("Buscar en tus conversaciones...")).toBeTruthy();
    expect(screen.getByText("No hay conversaciones que coincidan.")).toBeTruthy();
  });
});
