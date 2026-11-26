/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { afterEach, beforeEach, expect, it, vi } from "vitest";

import { BreakdownForm } from "./breakdown-form";
import type { BreakdownPreview } from "./contract";

vi.mock("@/components/tools/tools-page-header", () => ({
  ToolsPageHeader: ({ actions, toolbar }: { actions: ReactNode; toolbar: ReactNode }) => (
    <header>
      {actions}
      {toolbar}
    </header>
  ),
}));

const files = Array.from(
  { length: 5 },
  (_, index) => new File(["ficticio"], "entrada-" + index + ".xlsx"),
);

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it("muestra un formulario listo y un historial vacío sin avisos", async () => {
  const user = userEvent.setup();
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue(Response.json({ entries: [], activeAnalysisId: null })),
  );
  render(<BreakdownForm />);

  await screen.findByRole("heading", { name: "Nuevo análisis" });
  expect(screen.queryByRole("alert")).toBeNull();
  await user.click(screen.getByRole("tab", { name: "Historial" }));
  expect(await screen.findByText("No hay análisis guardados todavía")).toBeTruthy();
  expect(screen.queryByRole("alert")).toBeNull();
});

it("muestra el fallo de carga en Historial y permite reintentar", async () => {
  const user = userEvent.setup();
  const error = "No se ha podido cargar el historial.";
  const fetch = vi
    .fn()
    .mockResolvedValueOnce(Response.json({ error }, { status: 500 }))
    .mockResolvedValueOnce(Response.json({ entries: [], activeAnalysisId: null }));
  vi.stubGlobal("fetch", fetch);
  render(<BreakdownForm />);

  await screen.findByRole("heading", { name: "Nuevo análisis" });
  expect(screen.queryByRole("alert")).toBeNull();
  await user.click(screen.getByRole("tab", { name: "Historial" }));
  const alert = await screen.findByRole("alert");
  expect(alert.textContent).toContain(error);
  expect(screen.queryByText("No hay análisis guardados todavía")).toBeNull();
  await user.click(within(alert).getByRole("button", { name: "Reintentar" }));
  expect(await screen.findByText("No hay análisis guardados todavía")).toBeTruthy();
  expect(screen.queryByRole("alert")).toBeNull();
});

it("conserva los Excel seleccionados si falla el guardado", async () => {
  const user = userEvent.setup();
  const error = "La base local debe actualizarse para usar el Desglose Retributivo.";
  const fetch = vi
    .fn()
    .mockResolvedValueOnce(Response.json({ entries: [], activeAnalysisId: null }))
    .mockResolvedValueOnce(Response.json({ error }, { status: 503 }));
  vi.stubGlobal("fetch", fetch);
  render(<BreakdownForm />);

  await user.upload(await screen.findByLabelText("Excel de PeopleNet"), files);
  await user.click(screen.getByRole("button", { name: "Analizar" }));
  expect((await screen.findByRole("alert")).textContent).toBe(error);
  expect(screen.getByRole("status").textContent).toBe("5 de 5 archivos seleccionados");
  expect(screen.getByRole("button", { name: "Reintentar" })).toBeTruthy();
});

it("analiza los cinco Excel y permite consultar y filtrar los resultados", async () => {
  const user = userEvent.setup();
  const preview: BreakdownPreview = {
    period: { from: "01/01/2025", to: "31/12/2025" },
    employeeRows: 9,
    concepts: [{ code: "BASE_FICTICIO", section: "Conceptos Salario" }],
    groupings: [
      {
        id: "categoria-personal",
        groups: [
          { identifier: "G01", label: "Grupo ficticio", metrics: [[200, 400, 0.5, 200, 400, 0.5]] },
        ],
      },
    ],
  };
  const entry = {
    id: "guardado",
    createdAt: "2026-11-26T09:00:00Z",
    period: preview.period,
    employeeRows: 9,
    groupCount: 1,
  };
  const saved = { entry, result: preview };
  const fetch = vi
    .fn()
    .mockResolvedValueOnce(Response.json({ entries: [], activeAnalysisId: null }))
    .mockResolvedValueOnce(Response.json(saved))
    .mockResolvedValueOnce(Response.json(null))
    .mockResolvedValueOnce(Response.json(saved));
  vi.stubGlobal("fetch", fetch);
  render(<BreakdownForm />);
  const button = await screen.findByRole("button", { name: "Analizar" });
  expect((button as HTMLButtonElement).disabled).toBe(true);
  await user.upload(screen.getByLabelText("Excel de PeopleNet"), files);
  expect(screen.getByRole("status").textContent).toBe("5 de 5 archivos seleccionados");
  await user.click(button);
  await screen.findByRole("heading", { name: "Resumen del análisis" });
  expect(fetch).toHaveBeenCalledWith(
    "/api/desglose-retributivo/history",
    expect.objectContaining({ method: "POST" }),
  );
  const body: unknown = fetch.mock.calls[1][1].body;
  expect(body).toBeInstanceOf(FormData);
  if (!(body instanceof FormData)) throw new Error("Se esperaba multipart.");
  expect(body.getAll("files")).toEqual(files);
  await user.click(screen.getByRole("button", { name: /Agrupación Categoría Personal/ }));
  const table = await screen.findByRole("table", { name: "Resultados de BASE_FICTICIO" });
  expect(within(table).getByText("Grupo ficticio")).toBeTruthy();
  await user.type(screen.getByRole("textbox", { name: "Buscar grupo" }), "sin resultado");
  expect(screen.getByText("No hay grupos que coincidan.")).toBeTruthy();
  await user.click(screen.getByRole("button", { name: "Nuevo análisis" }));
  expect(await screen.findByText("0 de 5 archivos seleccionados")).toBeTruthy();
  await user.click(screen.getByRole("tab", { name: "Historial" }));
  await user.click(screen.getByRole("button", { name: /Abrir análisis del/ }));
  expect(await screen.findByRole("heading", { name: "Resumen del análisis" })).toBeTruthy();
});

it("hace visible un error de validación del servidor y permite corregir la selección", async () => {
  const user = userEvent.setup();
  const fetch = vi
    .fn()
    .mockResolvedValueOnce(Response.json({ entries: [], activeAnalysisId: null }))
    .mockResolvedValue(Response.json({ error: "La agrupación está repetida." }, { status: 422 }));
  vi.stubGlobal("fetch", fetch);
  render(<BreakdownForm />);
  const dropzone = await screen.findByRole("button", { name: /Arrastra los cinco Excel/ });
  fireEvent.drop(dropzone, {
    dataTransfer: { files: [...files, new File(["otro"], "sexto.xlsx")] },
  });
  expect(screen.getByRole("alert").textContent).toBe("Selecciona solo cinco archivos Excel.");
  await user.click(screen.getByRole("button", { name: "Quitar sexto.xlsx" }));
  await user.click(screen.getByRole("button", { name: "Analizar" }));
  expect((await screen.findByRole("alert")).textContent).toBe("La agrupación está repetida.");
  await user.click(screen.getByRole("button", { name: "Quitar entrada-0.xlsx" }));
  expect(screen.queryByRole("alert")).toBeNull();
  expect(screen.getByRole("status").textContent).toBe("4 de 5 archivos seleccionados");
});
