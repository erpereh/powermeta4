/** @vitest-environment jsdom */

import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
      auth: { mode: "debug"; username: string; canUseMeta4: false; societyCode: null; availableSocieties: never[] };
      workspaces: Record<
        string,
        {
          chats: never[];
          activeChatId: null;
          recentTools: never[];
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
        availableSocieties: [],
      },
      workspaces: {
        "company-1": {
          chats: [],
          activeChatId: null,
          recentTools: [],
        },
      },
      recordToolVisit: () => undefined,
    }),
}));

import { SidebarProvider } from "@/components/system";
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
    <SidebarProvider>
      <ToolsLaunchpad />
    </SidebarProvider>,
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

  it("hides unfinished actions with the availability switch", async () => {
    const user = userEvent.setup();
    renderLaunchpad();

    const launcher = within(screen.getByRole("main"));
    const toggle = launcher.getByRole("switch", { name: "Mostrar solo acciones disponibles" });

    expect(toggle.getAttribute("aria-checked")).toBe("false");
    expect(launcher.getByText("Modificar un usuario")).toBeTruthy();

    await user.click(toggle);

    expect(toggle.getAttribute("aria-checked")).toBe("true");
    expect(launcher.queryByText("Modificar un usuario")).toBeNull();
    expect(launcher.queryByText("Próximamente")).toBeNull();
    expect(launcher.getByText("Listado de usuarios")).toBeTruthy();
  });

  it("does not show the workspace scope label", () => {
    renderLaunchpad();

    const launcher = within(screen.getByRole("main"));
    expect(launcher.queryByText("Modo desarrollo")).toBeNull();
  });
});
