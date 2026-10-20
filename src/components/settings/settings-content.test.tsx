/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { readFileSync } from "node:fs";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthView } from "@/types/session";
import {
  DEVELOPMENT_TEXT_ATTRIBUTE,
  DEVELOPMENT_TEXT_STORAGE_KEY,
} from "@/lib/theme/development-text";
import { DevelopmentTextInitScript } from "@/components/theme/development-text-init-script";
import { DependencyState, PortalError, SensitiveLocked } from "@/components/portal/portal-states";
import { FeatureSections } from "@/components/portal/feature-sections";
import { getPortalFeatureByRoute } from "@/lib/portal/registry";
import { PortalDataTable } from "@/components/portal/portal-data";
import { ToolCard } from "@/components/tools/tool-card";
import { TOOL_REGISTRY } from "@/lib/tools/registry";

const appearanceCss = readFileSync("src/lib/theme/development-text.css", "utf8");
let appearanceStyle: HTMLStyleElement;

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
  appearanceStyle.remove();
  vi.restoreAllMocks();
});

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute(DEVELOPMENT_TEXT_ATTRIBUTE);
  appearanceStyle = document.createElement("style");
  appearanceStyle.textContent = appearanceCss;
  document.head.append(appearanceStyle);
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
    expect(screen.queryByText(/Se aplica a botones/)).toBeNull();
    const accents = screen.getByRole("group", { name: "Color de acento" });
    expect(within(accents).getByRole("radio", { name: "Azul" })).toHaveProperty("checked", true);

    await user.click(within(accents).getByRole("radio", { name: "Violeta" }));

    expect(within(accents).getByRole("radio", { name: "Violeta" })).toHaveProperty("checked", true);
    expect(document.documentElement.getAttribute("data-accent")).toBe("violet");
    expect(localStorage.getItem("powermeta4-accent")).toBe("violet");
  });

  it.each(["page", "dialog"] as const)(
    "toggles development copy, tables and blocked forms together from %s settings",
    async (variant) => {
      const user = userEvent.setup();
      const feature = getPortalFeatureByRoute("/portal/empleado/datos/correo");
      if (!feature) throw new Error("Missing email feature");
      const unavailableTool = TOOL_REGISTRY.find((tool) => !tool.implemented);
      if (!unavailableTool) throw new Error("Missing future action");
      const visit = vi.fn();
      const unavailable = vi.fn();
      const view = render(
        <>
          <SettingsContent variant={variant} />
          <h1>Certificado de Haberes</h1>
          <DependencyState
            message="Generación SSE_CERT_HAB pendiente"
            pending={["P02"]}
            meta4={["sse_g2_cert_hab.jsp"]}
          />
          <FeatureSections feature={feature} catalogs={{ status: "ready", options: {} }} />
          <PortalDataTable
            title="Disponibilidad"
            rows={[
              {
                id: "a",
                fields: [
                  { label: "Pantalla", value: "Mi ficha" },
                  { label: "Estado técnico", value: "Por verificar", developmentOnly: true },
                ],
              },
            ]}
          />
          <PortalError message="La sesión ha caducado" />
          <SensitiveLocked message="Detalles técnicos del alcance" />
          <ToolCard tool={unavailableTool} onVisit={visit} onUnavailable={unavailable} />
        </>,
      );

      await user.click(screen.getByRole("button", { name: "Apariencia" }));
      const toggle = screen.getByRole("switch", { name: "Ocultar textos de desarrollo" });
      expect(toggle.getAttribute("aria-checked")).toBe("true");
      expect(screen.getByRole("heading", { name: "Certificado de Haberes" })).toBeTruthy();
      expect(screen.queryByRole("button", { name: "Ver detalles" })).toBeNull();
      expect(screen.queryByRole("heading", { name: "Correos electrónicos" })).toBeNull();
      expect(screen.queryByRole("columnheader", { name: "Estado técnico" })).toBeNull();
      expect(screen.getByRole("alert").textContent).toContain("La sesión ha caducado");
      expect(screen.getByRole("status").textContent).toContain("Acceso restringido");
      const send = screen.getByRole("button", { name: "Enviar petición" });
      expect(send).toHaveProperty("disabled", true);
      expect(send.hasAttribute("aria-describedby")).toBe(false);
      await user.click(screen.getByRole("button", { name: "Comprobar datos" }));
      expect(screen.getByText(/Se han encontrado/)).toBeTruthy();
      const futureAction = screen.getByText(unavailableTool.name).closest("button");
      if (!futureAction) throw new Error("Missing future action button");
      await user.click(futureAction);
      expect(unavailable).toHaveBeenCalledOnce();
      expect(visit).not.toHaveBeenCalled();

      toggle.focus();
      await user.keyboard(" ");
      expect(toggle.getAttribute("aria-checked")).toBe("false");
      expect(localStorage.getItem(DEVELOPMENT_TEXT_STORAGE_KEY)).toBe("false");
      expect(screen.getAllByRole("button", { name: "Ver detalles" }).length).toBeGreaterThan(1);
      expect(screen.getByRole("columnheader", { name: "Estado técnico" })).toBeTruthy();
      expect(screen.getByRole("heading", { name: "Correos electrónicos" })).toBeTruthy();
      expect(send).toHaveProperty("disabled", true);
      expect(send.getAttribute("aria-describedby")).toBeTruthy();
      const dependency = screen
        .getByText("Datos pendientes de conexión")
        .closest('[role="status"]');
      if (!(dependency instanceof HTMLElement)) throw new Error("Missing dependency block");
      await user.click(within(dependency).getByRole("button", { name: "Ver detalles" }));
      expect(screen.getByText("sse_g2_cert_hab.jsp")).toBeTruthy();
      await user.click(toggle);
      expect(screen.queryByRole("button", { name: "Ver detalles" })).toBeNull();
      expect(send).toHaveProperty("disabled", true);
      expect(localStorage.getItem(DEVELOPMENT_TEXT_STORAGE_KEY)).toBe("true");
      view.unmount();
    },
  );

  it("restores the stored preference on a fresh mount and works without writable storage", async () => {
    const user = userEvent.setup();
    localStorage.setItem(DEVELOPMENT_TEXT_STORAGE_KEY, "false");
    const view = render(
      <>
        <DevelopmentTextInitScript />
        <SettingsContent />
      </>,
    );
    await user.click(screen.getByRole("button", { name: "Apariencia" }));
    const toggle = screen.getByRole("switch", { name: "Ocultar textos de desarrollo" });
    expect(toggle.getAttribute("aria-checked")).toBe("false");
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new DOMException("Unavailable", "SecurityError");
    });
    await user.click(toggle);
    expect(toggle.getAttribute("aria-checked")).toBe("true");
    expect(document.documentElement.getAttribute(DEVELOPMENT_TEXT_ATTRIBUTE)).toBe("true");
    view.unmount();
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
