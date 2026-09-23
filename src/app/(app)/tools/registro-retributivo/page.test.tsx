/** @vitest-environment jsdom */

import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { SidebarProvider, ToastProvider } from "@/components/system";
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
    "ResizeObserver",
    class {
      callback: ResizeObserverCallback;
      constructor(callback: ResizeObserverCallback) {
        this.callback = callback;
      }
      observe(target: Element) {
        this.callback(
          [
            {
              target,
              contentRect: {
                x: 0,
                y: 0,
                width: 1200,
                height: 600,
                top: 0,
                left: 0,
                bottom: 600,
                right: 1200,
                toJSON() {
                  return {};
                },
              },
              borderBoxSize: [],
              contentBoxSize: [],
              devicePixelContentBoxSize: [],
            } as ResizeObserverEntry,
          ],
          this,
        );
      }
      unobserve() {}
      disconnect() {}
    },
  );
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
      root = null;
      rootMargin = "";
      thresholds = [];
    },
  );
  Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
    configurable: true,
    get() {
      return 600;
    },
  });
  Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
    configurable: true,
    get() {
      return 1200;
    },
  });
  Object.defineProperty(HTMLElement.prototype, "clientHeight", {
    configurable: true,
    get() {
      return 600;
    },
  });
  Object.defineProperty(HTMLElement.prototype, "clientWidth", {
    configurable: true,
    get() {
      return 1200;
    },
  });
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

function stubAnalysisFetch(resultOverrides: Record<string, unknown> = {}) {
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
                  ...resultOverrides,
                },
              },
            ],
            activeAnalysisId: "analysis-1",
          },
        }),
      };
    }),
  );
}

const renderPage = () =>
  render(
    <ToastProvider>
      <SidebarProvider>
        <RegistroRetributivoPage />
      </SidebarProvider>
    </ToastProvider>,
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
    expect(screen.getAllByText("Análisis activo").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Sin análisis activo").length).toBeGreaterThan(0);
  });

  it("keeps the six local views navigable and marks the tool as implemented", async () => {
    const user = userEvent.setup();
    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    const labels = ["Inicio", "Personas", "Cuadre Reg.", "Agrupaciones", "Historial", "Ajustes"];
    for (const label of labels) {
      expect(within(nav).getByRole("tab", { name: label })).toBeTruthy();
    }

    await user.click(within(nav).getByRole("tab", { name: "Personas" }));
    expect((await screen.findAllByRole("heading", { name: "Personas" })).length).toBeGreaterThan(0);

    expect(STANDALONE_TOOLS.find((tool) => tool.id === "registro-retributivo")?.implemented).toBe(
      true,
    );
  });

  it("contains person detail in the viewport and sorts period chips", async () => {
    const user = userEvent.setup();
    stubAnalysisFetch();

    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    await user.click(within(nav).getByRole("tab", { name: "Personas" }));

    const row = await screen.findByRole("row", { name: /Abrir detalle de Isabel Chavero Torrado/i });
    const tableViewport = document.querySelector('[data-slot="table-viewport"]');
    expect(tableViewport).toBeTruthy();

    await user.click(row);

    const dialog = await screen.findByRole("dialog");
    expect(dialog).toBeTruthy();

    const chips = within(dialog).getAllByTestId("period-chip").map((chip) => chip.textContent);
    expect(chips).toEqual([
      "Del 1 al 31 Enero 2025",
      "Del 1 al 28 Febrero 2025",
      "Del 1 al 30 Abril 2025",
      "Del 1 al 31 Diciembre 2025",
    ]);
  });

  it("summarises the active analysis in plain language on Inicio", async () => {
    stubAnalysisFetch();
    renderPage();

    expect(await screen.findByRole("heading", { name: "1 de 1 personas tienen diferencias" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Resumen del análisis" })).toBeTruthy();
    expect(screen.getByText("Diferencia neta (recibo − registro)")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Con diferencia: 1 personas. Ver listado" })).toBeTruthy();
    expect(screen.getByText("No queda nada pendiente de decidir.")).toBeTruthy();
  });

  it("opens Personas filtered by status from the Inicio breakdown", async () => {
    const user = userEvent.setup();
    stubAnalysisFetch();
    renderPage();

    await user.click(await screen.findByRole("button", { name: "Ver personas con diferencia" }));

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    expect(within(nav).getByRole("tab", { name: "Personas" }).getAttribute("aria-selected")).toBe("true");
    const statusFilter = screen.getByRole("group", { name: "Filtrar por estado" });
    expect(within(statusFilter).getByRole("button", { pressed: true }).textContent).toContain("Con diferencia");
    expect(await screen.findByRole("row", { name: /Abrir detalle de Isabel Chavero Torrado/i })).toBeTruthy();
  });

  it("explains both files before the first analysis", async () => {
    renderPage();

    expect(await screen.findByRole("heading", { name: "Nuevo análisis" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Recibos de nómina" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Registro Retributivo" })).toBeTruthy();
    expect(screen.getByText("Faltan recibos.")).toBeTruthy();
    expect(screen.queryByTestId("analysis-verdict")).toBeNull();
  });

  it("explains the Personas list and filters it by status", async () => {
    const user = userEvent.setup();
    stubAnalysisFetch();
    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    await user.click(within(nav).getByRole("tab", { name: "Personas" }));

    expect(await screen.findByRole("heading", { name: "Personas", level: 2 })).toBeTruthy();
    expect(screen.getByText("1 persona · diferencia neta de las que están en los dos ficheros: 208,05 EUR")).toBeTruthy();

    const statusFilter = screen.getByRole("group", { name: "Filtrar por estado" });
    await user.click(within(statusFilter).getByRole("button", { name: /Con diferencia/ }));
    expect(screen.getByText("El recibo no coincide con el Registro Retributivo.")).toBeTruthy();
    expect(screen.getByText("1 persona · diferencia neta 208,05 EUR")).toBeTruthy();
  });

  it("leads the person detail with a plain-language conclusion", async () => {
    const user = userEvent.setup();
    stubAnalysisFetch();
    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    await user.click(within(nav).getByRole("tab", { name: "Personas" }));
    await user.click(await screen.findByRole("row", { name: /Abrir detalle de Isabel Chavero Torrado/i }));

    const dialog = await screen.findByRole("dialog");
    const conclusion = within(dialog).getByRole("region", { name: "Conclusión" });
    expect(conclusion.textContent).toContain("Los recibos suman 208,05 EUR más que el Registro Retributivo.");
    expect(within(conclusion).getByText("Qué revisar")).toBeTruthy();
    expect(within(dialog).getByText(/4 periodos, de enero de 2025 a diciembre de 2025/)).toBeTruthy();
  });

  it("explains the Cuadre Reg. check and opens a failing row", async () => {
    const user = userEvent.setup();
    stubAnalysisFetch({
      internalExcelChecks: [
        {
          employeeNumber: "10048",
          workplace: "Bilbao",
          position: "Director/a Oficina",
          category: "Jefe de Primera",
          salaryPeriod: 1000,
          salaryBreakdown: 900,
          salaryDifference: 100,
          salaryComplementPeriod: 0,
          salaryComplementBreakdown: 0,
          salaryComplementDifference: 0,
          extraSalaryPeriod: 0,
          extraSalaryBreakdown: 0,
          extraSalaryDifference: 0,
          status: "Diferencia",
          detail: "",
        },
      ],
    });
    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    await user.click(within(nav).getByRole("tab", { name: "Cuadre Reg." }));

    expect(await screen.findByRole("heading", { name: "Cuadre del Registro" })).toBeTruthy();
    expect(screen.getByText(/No usa los recibos/)).toBeTruthy();
    expect(screen.getByRole("heading", { name: "1 de 1 personas no cuadran en el Excel" })).toBeTruthy();

    await user.click(await screen.findByRole("row", { name: /Ver cuadre de Isabel Chavero Torrado/i }));
    const dialog = await screen.findByRole("dialog");
    expect(within(dialog).getByRole("region", { name: "Conclusión" }).textContent).toContain("No cuadra en salario");
  });

  it("tells when the Excel has nothing to check in Cuadre Reg.", async () => {
    const user = userEvent.setup();
    stubAnalysisFetch();
    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    await user.click(within(nav).getByRole("tab", { name: "Cuadre Reg." }));

    expect(await screen.findByText("No hay filas que comprobar")).toBeTruthy();
  });

  it("reads Agrupaciones as a women/men pay gap per group", async () => {
    const user = userEvent.setup();
    const labels = [
      "Puesto",
      "Puesto",
      "Total personas · Mujeres",
      "Total personas · Varones",
      "Total retribuciones normalizadas + variables · Salario · Media · Mujeres",
      "Total retribuciones normalizadas + variables · Salario · Media · Varones",
      "Total retribuciones normalizadas + variables · Salario · Media · Diferencia %",
    ];
    const columns = labels.map((label, index) => ({ key: `c${index}`, label, sourceColumn: String(index), kind: index < 2 ? "text" : "number" }));
    const toRow = (values: ReadonlyArray<string | number>) =>
      Object.fromEntries(values.map((value, index) => [`c${index}`, { value, display: String(value), kind: typeof value === "number" ? "number" : "text" }]));
    stubAnalysisFetch({
      groupedExcelSheets: [
        {
          sheetName: "Análisis por puesto",
          status: "ready",
          columns,
          rows: [toRow(["DCOMP", "Delegado/a de Compras", 1, 6, 17206.14, 23551.06, 0.269]), toRow(["CCAL", "Control de Calidad", 1, 0, 21993.2, 0, 0])],
          visibleRowCount: 2,
          visibleColumnCount: columns.length,
        },
      ],
    });
    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    await user.click(within(nav).getByRole("tab", { name: "Agrupaciones" }));

    expect(await screen.findByRole("heading", { name: "Brecha entre mujeres y hombres por grupo" })).toBeTruthy();
    expect(
      screen.getByRole("heading", { name: /^1 de 1 puestos con mujeres y hombres tiene una brecha del 25\s%\so más$/ }),
    ).toBeTruthy();
    expect(screen.getByText(/1 no se puede comparar porque solo tiene mujeres u hombres/)).toBeTruthy();

    await user.click(await screen.findByRole("row", { name: /Ver brecha de Delegado\/a de Compras/i }));
    const dialog = await screen.findByRole("dialog");
    expect(within(dialog).getByRole("region", { name: "Conclusión" }).textContent).toMatch(/Las mujeres cobran un 26,9\s% menos que los hombres\./);
  });

  it("explains Ajustes: difference scale, pending exclusions and concepts without a rule", async () => {
    const user = userEvent.setup();
    stubAnalysisFetch({
      unmappedConcepts: [
        {
          pdfConcept: "Cotiz MEI Empresa",
          totalDetected: 120,
          peopleCount: 3,
          payrollCount: 12,
          exampleEmployeeNumbers: ["10048"],
          action: "Pendiente revisión",
        },
      ],
    });
    renderPage();

    const nav = screen.getAllByRole("navigation", { name: "Navegación de Registro Retributivo" })[0];
    await user.click(within(nav).getByRole("tab", { name: "Ajustes" }));

    expect(await screen.findByRole("heading", { name: "Cuándo hay una diferencia" })).toBeTruthy();
    const scale = screen.getByRole("figure", { name: "Cómo se clasifica a cada persona" });
    expect(within(scale).getByText("A revisar")).toBeTruthy();
    expect(within(scale).getByText(/^de 1,00\sEUR a 50,00\sEUR$/)).toBeTruthy();

    const incident = screen.getByLabelText("«Con diferencia» a partir de");
    await user.clear(incident);
    await user.type(incident, "100");
    expect(within(scale).getByText(/^de 1,00\sEUR a 100,00\sEUR$/)).toBeTruthy();

    await user.click(screen.getByRole("button", { name: /^Exclusiones/ }));
    expect(await screen.findByRole("heading", { name: "Personas excluidas" })).toBeTruthy();
    await user.type(screen.getByLabelText("Añadir matrículas"), "10048");
    await user.click(screen.getByRole("button", { name: "Excluir" }));
    expect(within(screen.getByRole("list", { name: "Matrículas excluidas" })).getByText("10048")).toBeTruthy();
    expect(screen.getByText("El análisis abierto aún no refleja esta lista")).toBeTruthy();

    await user.click(screen.getByRole("button", { name: /^Conceptos/ }));
    expect(await screen.findByRole("heading", { name: "Conceptos del recibo" })).toBeTruthy();
    expect(screen.getByText("1 concepto de las nóminas no tiene regla")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Revisarlos" }));
    const filters = screen.getByRole("group", { name: "Filtrar conceptos" });
    expect(within(filters).getByRole("button", { name: /Sin regla/, pressed: true })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ignorar concepto Cotiz MEI Empresa" })).toBeTruthy();
  });
});
