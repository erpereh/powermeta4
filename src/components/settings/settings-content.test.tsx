/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthView } from "@/types/session";

const mocks = vi.hoisted(() => ({
  getMeta4ProfileViewAction: vi.fn(),
  state: {
    auth: {
      mode: "debug" as const,
      username: "DEBUG",
      canUseMeta4: false,
      societyCode: null,
      availableSocieties: [],
    } as AuthView,
  },
}));

vi.mock("@/app/actions/meta4-profile", () => ({
  getMeta4ProfileViewAction: mocks.getMeta4ProfileViewAction,
}));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: typeof mocks.state) => unknown) => selector(mocks.state),
}));

import { SettingsContent } from "./settings-content";
import { SettingsDialog } from "./settings-dialog";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
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
  mocks.state.auth = {
    mode: "debug",
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null,
    availableSocieties: [],
  };
  mocks.getMeta4ProfileViewAction.mockResolvedValue({
    available: false,
    debugMode: true,
    username: "DEBUG",
    societyCode: null,
    societyLegalName: null,
    displayName: null,
    lookedUpAt: null,
    sections: [],
  });
});

describe("settings content", () => {
  it("shows the consolidated navigation in the requested order", () => {
    render(<SettingsContent variant="dialog" />);

    const navigation = screen.getByRole("navigation", { name: "Secciones de ajustes" });
    expect(
      within(navigation)
        .getAllByRole("button")
        .map((button) => button.textContent),
    ).toEqual(["Datos de la persona", "Apariencia", "Datos y copias"]);
  });

  it("renders all profile sections together instead of separate navigation items", async () => {
    mocks.state.auth = {
      mode: "meta4",
      username: "usuario",
      canUseMeta4: true,
      societyCode: "CYC",
      availableSocieties: ["CYC"],
    };
    mocks.getMeta4ProfileViewAction.mockResolvedValue({
      available: true,
      debugMode: false,
      username: "usuario",
      societyCode: "CYC",
      societyLegalName: "CyC",
      displayName: "Usuario",
      lookedUpAt: "2026-08-14T00:00:00.000Z",
      sections: [
        {
          id: "account",
          title: "Cuenta",
          fields: [{ key: "username", label: "Usuario", value: "usuario" }],
        },
        {
          id: "organization",
          title: "Organización",
          fields: [{ key: "society", label: "Sociedad", value: "CYC" }],
        },
        {
          id: "session",
          title: "Sesión Meta4",
          fields: [{ key: "mode", label: "Modo", value: "Meta4" }],
        },
      ],
    });

    render(<SettingsContent variant="dialog" />);

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Cuenta" })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Organización" })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Sesión Meta4" })).toBeTruthy();
    });
    expect(screen.getByText("Sociedad activa: CYC")).toBeTruthy();
  });

  it("shows an empty state when the profile has no sections", async () => {
    mocks.state.auth = {
      mode: "meta4",
      username: "usuario",
      canUseMeta4: true,
      societyCode: "CYC",
      availableSocieties: ["CYC"],
    };
    mocks.getMeta4ProfileViewAction.mockResolvedValue({
      available: true,
      debugMode: false,
      username: "usuario",
      societyCode: "CYC",
      societyLegalName: "CyC",
      displayName: "Usuario",
      lookedUpAt: "2026-08-14T00:00:00.000Z",
      sections: [],
    });

    render(<SettingsContent variant="page" />);

    await waitFor(() => {
      expect(screen.getByText("No hay datos de la persona.")).toBeTruthy();
    });
  });

  it("keeps backup export and restore actions on the copies section", async () => {
    const user = userEvent.setup();
    render(<SettingsContent variant="dialog" />);

    await user.click(screen.getByRole("button", { name: "Datos y copias" }));

    expect(screen.getByRole("heading", { name: "Exportar workspace" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Restaurar workspace" })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Crear y descargar ZIP/i })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Validar ZIP/i })).toBeTruthy();
    expect(screen.getByLabelText("Archivo ZIP")).toBeTruthy();
  });

  it("changes and persists the accent color from the appearance section", async () => {
    const user = userEvent.setup();
    render(<SettingsContent variant="dialog" />);

    await user.click(screen.getByRole("button", { name: "Apariencia" }));

    expect(screen.getByRole("group", { name: "Tema de la interfaz" })).toBeTruthy();
    const accents = screen.getByRole("group", { name: "Color de acento" });
    expect(within(accents).getByRole("radio", { name: "Azul" })).toHaveProperty("checked", true);

    await user.click(within(accents).getByRole("radio", { name: "Violeta" }));

    expect(within(accents).getByRole("radio", { name: "Violeta" })).toHaveProperty("checked", true);
    expect(document.documentElement.getAttribute("data-accent")).toBe("violet");
    expect(localStorage.getItem("powermeta4-accent")).toBe("violet");
  });
});

describe("settings dialog", () => {
  it("opens the large settings modal with shared content", async () => {
    render(<SettingsDialog open onOpenChange={() => undefined} />);

    await waitFor(() => {
      expect(screen.getByRole("dialog", { name: "Ajustes" })).toBeTruthy();
    });
    expect(screen.getByText("Perfil Meta4 y copias locales de este equipo.")).toBeTruthy();
    expect(screen.getByRole("navigation", { name: "Secciones de ajustes" })).toBeTruthy();
  });
});
