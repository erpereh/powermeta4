/** @vitest-environment jsdom */

import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  auth: {
    mode: "meta4" as "debug" | "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC" as "CYC" | "IBER" | "COLL" | null,
  },
}));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: { auth: typeof mocks.auth }) => unknown) =>
    selector({ auth: mocks.auth }),
}));

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { POWERMETA_MARK_SRC } from "@/components/branding/powermeta-logo";
import { SocietyHeader } from "./society-header";

beforeEach(() => {
  mocks.auth = {
    mode: "meta4",
    username: "usuario",
    canUseMeta4: true,
    societyCode: "CYC",
  };
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
  it("shows the Meta4 society code without switcher controls", () => {
    renderHeader();

    expect(screen.getByText("powermeta4")).toBeTruthy();
    expect(screen.getByText("CYC")).toBeTruthy();
    expect(document.querySelector(`img[src="${POWERMETA_MARK_SRC}"]`)).toBeTruthy();
    expect(screen.queryByText("Crear empresa")).toBeNull();
    expect(screen.queryByText("Eliminar empresa")).toBeNull();
    expect(screen.queryByLabelText(/Abrir empresas/i)).toBeNull();
  });

  it("shows IBER for the IBER society", () => {
    mocks.auth.societyCode = "IBER";
    renderHeader();
    expect(screen.getByText("IBER")).toBeTruthy();
  });

  it("shows COLL for the COLL society", () => {
    mocks.auth.societyCode = "COLL";
    renderHeader();
    expect(screen.getByText("COLL")).toBeTruthy();
  });

  it("shows development mode for debug auth", () => {
    mocks.auth = {
      mode: "debug",
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
    };

    renderHeader();

    expect(screen.getByText("Modo desarrollo")).toBeTruthy();
    expect(document.querySelector(`img[src="${POWERMETA_MARK_SRC}"]`)).toBeTruthy();
  });
});
