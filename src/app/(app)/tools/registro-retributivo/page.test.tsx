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
    expect(screen.getByText("Análisis activo")).toBeTruthy();
    expect(screen.getByText("Sin análisis activo")).toBeTruthy();
  });

  it("keeps the six local views navigable and marks the tool as implemented", async () => {
    const user = userEvent.setup();
    renderPage();

    const nav = screen.getByRole("navigation", { name: "Navegación de Registro Retributivo" });
    const labels = ["Inicio", "Personas", "Cuadre Reg.", "Agrupaciones", "Historial", "Ajustes"];
    for (const label of labels) {
      expect(within(nav).getByRole("button", { name: label })).toBeTruthy();
    }

    await user.click(within(nav).getByRole("button", { name: "Personas" }));
    expect((await screen.findAllByRole("heading", { name: "Personas" })).length).toBeGreaterThan(0);

    expect(STANDALONE_TOOLS.find((tool) => tool.id === "registro-retributivo")?.implemented).toBe(
      true,
    );
  });

  it("contains person detail in the viewport and sorts period chips", async () => {
    const user = userEvent.setup();
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
              analyses: [
                {
                  id: "analysis-1",
                  createdAt: "2026-08-13T15:58:00.000Z",
                  registroFileName: "registro.xlsx",
                  pdfCount: 1,
                  config: {
                    tolerance: 1,
                    enableAI: false,
                    aiModel: "gemini-3.1-flash-lite",
                    conceptMap: [],
                    excludedEmployeeIds: [],
                    thresholds: { reviewThreshold: 1, incidentThreshold: 50 },
                  },
                  result: {
                    summary: {
                      generatedAt: "2026-08-13T15:58:00.000Z",
                      pdfsAnalyzed: 1,
                      pdfsFailed: 0,
                      uniquePeople: 1,
                      peopleWithDifferences: 1,
                      totalSalaryDifference: 0,
                      totalSalaryComplementDifference: 0,
                      totalExtraSalaryDifference: 0,
                      totalGlobalDifference: 208.05,
                      conceptsUnmapped: 0,
                      internalExcelDifferences: 0,
                      groupingDifferences: 0,
                      tolerance: 1,
                    },
                    payrollRecords: [],
                    registroEmployees: [],
                    people: [
                      {
                        employeeNumber: "10048",
                        person: "Isabel Chavero Torrado",
                        workplace: "Bilbao",
                        position: "Director/a Oficina",
                        category: "Jefe de Primera",
                        salaryRegistro: 0,
                        salaryPdf: 0,
                        salaryDifference: 0,
                        salaryComplementRegistro: 0,
                        salaryComplementPdf: 0,
                        salaryComplementDifference: 0,
                        extraSalaryRegistro: 0,
                        extraSalaryPdf: 0,
                        extraSalaryDifference: 208.05,
                        registroTotal: 63862.04,
                        pdfTotal: 64070.09,
                        totalDifference: 208.05,
                        pdfControlTotalDevengado: 0,
                        payrollCount: 13,
                        unmappedConceptsCount: 0,
                        status: "Diferencia",
                        detail: "",
                        periods: [
                          "Del 1 al 30 Abril 2025",
                          "Del 1 al 31 Diciembre 2025",
                          "Del 1 al 31 Enero 2025",
                          "Del 1 al 28 Febrero 2025",
                        ],
                        files: [],
                      },
                    ],
                    normalizedVsReal: [],
                    concepts: [],
                    unmappedConcepts: [],
                    ignoredConcepts: [],
                    groupings: [],
                    internalExcelChecks: [],
                    conceptMap: [],
                    excludedEmployeeIdsApplied: [],
                    errors: [],
                    criteria: [],
                  },
                },
              ],
              activeAnalysisId: "analysis-1",
            },
          }),
        };
      }),
    );

    renderPage();

    const nav = screen.getByRole("navigation", { name: "Navegación de Registro Retributivo" });
    await user.click(within(nav).getByRole("button", { name: "Personas" }));

    const viewport = await screen.findByRole("row", { name: /Abrir detalle de Isabel Chavero Torrado/i });
    const tableViewport = document.querySelector('[data-slot="table-viewport"]');
    expect(tableViewport?.className).toContain("flex-1");

    await user.click(viewport);

    const dialog = await screen.findByRole("dialog");
    expect(dialog.getAttribute("data-slot")).toBe("modal-shell");
    expect(dialog.className).toContain("overflow-x-hidden");

    const chips = within(dialog).getAllByTestId("period-chip").map((chip) => chip.textContent);
    expect(chips).toEqual([
      "Del 1 al 31 Enero 2025",
      "Del 1 al 28 Febrero 2025",
      "Del 1 al 30 Abril 2025",
      "Del 1 al 31 Diciembre 2025",
    ]);
  });
});
