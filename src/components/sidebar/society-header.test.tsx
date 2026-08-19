/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  auth: {
    mode: "meta4" as "debug" | "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC" as "CYC" | "IBER" | "COLL" | null,
    availableSocieties: ["CYC"] as Array<"CYC" | "IBER" | "COLL">,
  },
  applySnapshot: vi.fn(),
  switchMeta4WorkspaceAction: vi.fn(),
  refresh: vi.fn(),
}));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (
    selector: (state: { auth: typeof mocks.auth; applySnapshot: typeof mocks.applySnapshot }) => unknown,
  ) => selector({ auth: mocks.auth, applySnapshot: mocks.applySnapshot }),
}));

vi.mock("@/app/actions/meta4-workspace", () => ({
  switchMeta4WorkspaceAction: mocks.switchMeta4WorkspaceAction,
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ refresh: mocks.refresh }),
}));

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { POWERMETA_MARK_SRC } from "@/components/branding/powermeta-logo";
import { SocietyHeader } from "./society-header";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  mocks.auth = {
    mode: "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC",
    availableSocieties: ["CYC"],
  };
  mocks.applySnapshot.mockReset();
  mocks.switchMeta4WorkspaceAction.mockReset();
  mocks.refresh.mockReset();
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
});

function renderHeader() {
  return render(
    <TooltipProvider>
      <SidebarProvider>
        <SocietyHeader />
      </SidebarProvider>
    </TooltipProvider>,
  );
}

describe("society header", () => {
  it("shows a single society without a dropdown", () => {
    renderHeader();

    expect(screen.getByText("CYC")).toBeTruthy();
    expect(screen.getByText("Sociedad Meta4")).toBeTruthy();
    expect(document.querySelector(`img[src="${POWERMETA_MARK_SRC}"]`)).toBeTruthy();
    expect(screen.queryByText("Sociedades")).toBeNull();
    expect(screen.queryByText("Add team")).toBeNull();
    expect(screen.queryByText("Crear empresa")).toBeNull();
    expect(screen.queryByText("Eliminar empresa")).toBeNull();
  });

  it("lists only the available societies and switches IBER", async () => {
    mocks.auth.availableSocieties = ["CYC", "IBER"];
    mocks.switchMeta4WorkspaceAction.mockResolvedValue({
      ok: true,
      data: {
        companies: [],
        activeCompanyId: "company-iber",
        workspaces: {},
        auth: {
          mode: "meta4",
          username: "usuario",
          canUseMeta4: true,
          societyCode: "IBER",
          availableSocieties: ["CYC", "IBER"],
        },
      },
    });
    const user = userEvent.setup();
    renderHeader();

    await user.click(screen.getByRole("button", { name: /Cambiar sociedad Meta4/i }));
    expect(screen.getByText("Sociedades")).toBeTruthy();
    expect(screen.getByText("IBER")).toBeTruthy();
    expect(screen.queryByText("COLL")).toBeNull();
    expect(screen.queryByText("Add team")).toBeNull();

    await user.click(screen.getByText("IBER"));
    expect(mocks.switchMeta4WorkspaceAction).toHaveBeenCalledWith("IBER");
    expect(mocks.applySnapshot).toHaveBeenCalled();
    expect(mocks.refresh).toHaveBeenCalled();
  });

  it("shows development mode for debug auth", () => {
    mocks.auth = {
      mode: "debug",
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
      availableSocieties: [],
    };

    renderHeader();

    expect(screen.getByText("Modo desarrollo")).toBeTruthy();
    expect(screen.queryByText("CYC")).toBeNull();
    expect(screen.queryByText("IBER")).toBeNull();
    expect(screen.queryByText("COLL")).toBeNull();
    expect(document.querySelector(`img[src="${POWERMETA_MARK_SRC}"]`)).toBeTruthy();
  });
});
