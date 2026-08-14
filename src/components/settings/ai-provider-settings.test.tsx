/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const getAiProviderConfigsAction = vi.fn();
const createAiProviderConfigAction = vi.fn();
const updateAiProviderConfigAction = vi.fn();
const deleteAiProviderConfigAction = vi.fn();
const hydrateWorkspaceStore = vi.fn();

vi.mock("@/app/actions/ai-provider-configs", () => ({
  getAiProviderConfigsAction: (...args: unknown[]) => getAiProviderConfigsAction(...args),
  createAiProviderConfigAction: (...args: unknown[]) => createAiProviderConfigAction(...args),
  updateAiProviderConfigAction: (...args: unknown[]) => updateAiProviderConfigAction(...args),
  deleteAiProviderConfigAction: (...args: unknown[]) => deleteAiProviderConfigAction(...args),
}));

vi.mock("@/stores/use-workspace-store", () => ({
  hydrateWorkspaceStore: (...args: unknown[]) => hydrateWorkspaceStore(...args),
}));

import { AiProviderSettings } from "./ai-provider-settings";

const CONFIG = {
  id: "config-1",
  name: "Gemini Flash",
  baseUrl: "https://api.example.com/v1",
  model: "gemini-flash",
  hasApiKey: true,
};

beforeEach(() => {
  getAiProviderConfigsAction.mockReset().mockResolvedValue({ ok: true, data: [] });
  createAiProviderConfigAction.mockReset();
  updateAiProviderConfigAction.mockReset();
  deleteAiProviderConfigAction.mockReset();
  hydrateWorkspaceStore.mockReset().mockResolvedValue(true);
});

afterEach(() => {
  cleanup();
});

describe("AiProviderSettings", () => {
  it("reconciles the workspace store after a successful create", async () => {
    const user = userEvent.setup();
    createAiProviderConfigAction.mockResolvedValue({ ok: true, data: CONFIG });
    render(<AiProviderSettings />);

    await waitFor(() => expect(getAiProviderConfigsAction).toHaveBeenCalled());

    await user.type(screen.getByLabelText("Nombre"), CONFIG.name);
    await user.type(screen.getByLabelText("Base URL"), CONFIG.baseUrl);
    await user.type(screen.getByLabelText("Model id"), CONFIG.model);
    await user.type(screen.getByLabelText("API key"), "secret-key");
    await user.click(screen.getByRole("button", { name: "Añadir configuración" }));

    await waitFor(() => expect(hydrateWorkspaceStore).toHaveBeenCalledTimes(1));
    expect(screen.getByText(CONFIG.name)).toBeTruthy();
  });

  it("does not reconcile the workspace store when create fails", async () => {
    const user = userEvent.setup();
    createAiProviderConfigAction.mockResolvedValue({
      ok: false,
      errorCode: "AI_PROVIDER_CONFIG_OPERATION_FAILED",
      message: "No se pudo completar la operación.",
    });
    render(<AiProviderSettings />);

    await waitFor(() => expect(getAiProviderConfigsAction).toHaveBeenCalled());

    await user.type(screen.getByLabelText("Nombre"), CONFIG.name);
    await user.type(screen.getByLabelText("Base URL"), CONFIG.baseUrl);
    await user.type(screen.getByLabelText("Model id"), CONFIG.model);
    await user.type(screen.getByLabelText("API key"), "secret-key");
    await user.click(screen.getByRole("button", { name: "Añadir configuración" }));

    await waitFor(() =>
      expect(screen.getByText("No se pudo completar la operación.")).toBeTruthy(),
    );
    expect(hydrateWorkspaceStore).not.toHaveBeenCalled();
  });

  it("reconciles the workspace store after a successful delete", async () => {
    const user = userEvent.setup();
    getAiProviderConfigsAction.mockResolvedValue({ ok: true, data: [CONFIG] });
    deleteAiProviderConfigAction.mockResolvedValue({ ok: true, data: null });
    render(<AiProviderSettings />);

    await waitFor(() => expect(screen.getByText(CONFIG.name)).toBeTruthy());

    await user.click(screen.getByLabelText(`Eliminar configuración ${CONFIG.name}`));
    await user.click(screen.getByRole("button", { name: "Eliminar" }));

    await waitFor(() => expect(hydrateWorkspaceStore).toHaveBeenCalledTimes(1));
  });
});
