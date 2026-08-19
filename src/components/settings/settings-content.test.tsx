/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { AuthView } from "@/types/session";

const mocks = vi.hoisted(() => ({
  getMeta4ProfileViewAction: vi.fn(),
  getAiProviderConfigsAction: vi.fn(),
  createAiProviderConfigAction: vi.fn(),
  deleteAiProviderConfigAction: vi.fn(),
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

vi.mock("@/app/actions/ai-provider-configs", () => ({
  getAiProviderConfigsAction: mocks.getAiProviderConfigsAction,
  createAiProviderConfigAction: mocks.createAiProviderConfigAction,
  deleteAiProviderConfigAction: mocks.deleteAiProviderConfigAction,
}));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (selector: (state: typeof mocks.state) => unknown) => selector(mocks.state),
}));

import { SettingsContent } from "./settings-content";

afterEach(() => {
  cleanup();
});

beforeEach(() => {
  vi.clearAllMocks();
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
  mocks.getAiProviderConfigsAction.mockResolvedValue({ ok: true, data: [] });
  mocks.createAiProviderConfigAction.mockResolvedValue({
    ok: true,
    data: {
      id: "config-created",
      name: "Servidor local",
      baseUrl: "http://localhost:11434/v1",
      model: "grok-4-1-fast",
      hasApiKey: true,
    },
  });
  mocks.deleteAiProviderConfigAction.mockResolvedValue({ ok: true, data: null });
});

describe("settings content", () => {
  it("shows the consolidated navigation in the requested order", () => {
    render(<SettingsContent variant="dialog" />);

    const navigation = screen.getByRole("navigation", { name: "Secciones de ajustes" });
    expect(
      within(navigation)
        .getAllByRole("button")
        .map((button) => button.textContent),
    ).toEqual(["Datos de la persona", "Inteligencia artificial", "Datos y copias"]);
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
  });

  it("keeps AI settings available in debug mode and lists a created config", async () => {
    const user = userEvent.setup();
    render(<SettingsContent variant="dialog" />);

    await user.click(screen.getByRole("button", { name: "Inteligencia artificial" }));
    expect(
      await screen.findByRole("heading", { name: "Configuraciones de inteligencia artificial" }),
    ).toBeTruthy();

    await user.type(screen.getByLabelText("Nombre"), "Servidor local");
    await user.type(screen.getByLabelText("Base URL"), "http://localhost:11434/v1");
    await user.type(screen.getByLabelText("Model id"), "grok-4-1-fast");
    await user.type(screen.getByLabelText("API key"), "local-secret");
    await user.click(screen.getByRole("button", { name: "Añadir configuración" }));

    expect(mocks.createAiProviderConfigAction).toHaveBeenCalledWith({
      name: "Servidor local",
      baseUrl: "http://localhost:11434/v1",
      model: "grok-4-1-fast",
      apiKey: "local-secret",
    });
    expect(await screen.findByText("Servidor local")).toBeTruthy();
    expect(screen.getByText("API key: ••••••••")).toBeTruthy();
    expect((screen.getByLabelText("Nombre") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("Base URL") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("Model id") as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText("API key") as HTMLInputElement).value).toBe("");
  });

  it("confirms deletion of an existing AI config", async () => {
    const user = userEvent.setup();
    mocks.getAiProviderConfigsAction.mockResolvedValue({
      ok: true,
      data: [
        {
          id: "config-existing",
          name: "Servidor local",
          baseUrl: "http://localhost:11434/v1",
          model: "grok-4-1-fast",
          hasApiKey: true,
        },
      ],
    });

    render(<SettingsContent variant="dialog" />);
    await user.click(screen.getByRole("button", { name: "Inteligencia artificial" }));
    await screen.findByText("Servidor local");

    await user.click(
      screen.getByRole("button", { name: "Eliminar configuración Servidor local" }),
    );
    const dialog = screen.getByRole("alertdialog");
    expect(within(dialog).getByText(/¿Eliminar la configuración/i)).toBeTruthy();
    await user.click(within(dialog).getByRole("button", { name: "Eliminar" }));

    expect(mocks.deleteAiProviderConfigAction).toHaveBeenCalledWith("config-existing");
    await waitFor(() => expect(screen.queryByText("Servidor local")).toBeNull());
  });
});
