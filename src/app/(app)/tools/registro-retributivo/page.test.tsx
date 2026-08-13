/** @vitest-environment jsdom */

import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import RegistroRetributivoPage from "@/app/(app)/tools/registro-retributivo/page";
import { STANDALONE_TOOLS } from "@/lib/tools/registry";

beforeEach(() => {
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: RequestInfo) => {
      const url = String(input);
      if (url.includes("/api/registro-retributivo/ai/status")) {
        return {
          ok: true,
          json: async () => ({ configured: false, enabled: false, model: "gemini-3.1-flash-lite" }),
        };
      }
      return {
        ok: true,
        json: async () => ({
          ok: true,
          data: {
            settings: {
              defaultTolerance: 1,
              enableAIByDefault: true,
              autoExplainOnOpen: false,
              reviewThreshold: 1,
              incidentThreshold: 50,
              aiModel: "gemini-3.1-flash-lite",
              excludedEmployeeIds: [],
              conceptMap: [],
              normalizedConcepts: [],
            },
            analyses: [],
            activeAnalysisId: null,
          },
        }),
      };
    }),
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

const renderPage = () =>
  render(
    <TooltipProvider>
      <SidebarProvider>
        <RegistroRetributivoPage />
      </SidebarProvider>
    </TooltipProvider>,
  );

describe("Registro Retributivo page", () => {
  it("renders the local tool shell instead of the coming-soon placeholder", () => {
    renderPage();

    expect(screen.getAllByText("Registro Retributivo").length).toBeGreaterThan(0);
    expect(screen.queryByText("Próximamente")).toBeNull();
    expect(screen.queryByText("Esta herramienta estará disponible próximamente.")).toBeNull();
    expect(screen.getByRole("heading", { name: "Inicio" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Exportar Excel" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Nuevo análisis" })).toBeTruthy();
  });

  it("keeps the seven local views navigable while the registry stays unimplemented", async () => {
    const user = userEvent.setup();
    renderPage();

    const nav = screen.getByRole("navigation", { name: "Navegación de Registro Retributivo" });
    const labels = ["Inicio", "Personas", "Cuadre Reg.", "Agrupaciones", "Asistente", "Historial", "Ajustes"];
    for (const label of labels) {
      expect(within(nav).getByRole("button", { name: label })).toBeTruthy();
    }

    await user.click(within(nav).getByRole("button", { name: "Personas" }));
    expect((await screen.findAllByRole("heading", { name: "Personas" })).length).toBeGreaterThan(0);

    expect(STANDALONE_TOOLS.find((tool) => tool.id === "registro-retributivo")?.implemented).toBe(
      false,
    );
  });
});
