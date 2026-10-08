/** @vitest-environment jsdom */
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mockPortalLayout } from "@/test/portal-layout";
import type { PortalTaskLine } from "@/lib/portal/data/tasks-core";
import { TasksView } from "./tasks-view";

const read = vi.hoisted(() => vi.fn());
vi.mock("@/lib/portal/server", () => ({ readPortal: read }));
const context = { mode: "unavailable", reason: "debug", message: "Fixture" } as const;
beforeEach(() => mockPortalLayout());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  read.mockReset();
});

describe("grupos de tareas", () => {
  it("agrupa registros en una card sin duplicar el título ni cambiar las lecturas", async () => {
    const line: PortalTaskLine = {
      kind: "validation",
      title: "Evalúa tus cursos",
      count: 41,
      level: null,
      tooltip: null,
      deadline: null,
      lastUpdate: null,
      source: null,
    };
    read
      .mockResolvedValueOnce({ status: "ok", society: "CYC", data: [line] })
      .mockResolvedValueOnce({ status: "ok", society: "CYC", data: [] })
      .mockResolvedValueOnce({ status: "ok", society: "CYC", data: [] });
    render(await TasksView({ context }));
    expect(read.mock.calls.map((call) => call[2])).toEqual([
      "Validaciones pendientes",
      "Tareas",
      "Valoraciones",
    ]);
    expect(screen.getAllByRole("heading", { name: "Validaciones pendientes" })).toHaveLength(1);
    expect(screen.getAllByRole("table")).toHaveLength(1);
    const table = screen.getByRole("table");
    expect(table.parentElement?.style.height).toBe("auto");
    expect(within(table).getByText("41").closest("[title]")?.className).toContain("bg-tone-amber");
    expect(screen.getAllByText("No hay registros para este apartado.")).toHaveLength(2);
  });
  it("conserva error, dependencia y vacío sin presentar cards de resultados", async () => {
    read
      .mockResolvedValueOnce({ status: "error", code: "UNKNOWN", message: "Error de lectura" })
      .mockResolvedValueOnce({
        status: "unavailable",
        pending: ["P03"],
        message: "Servicio pendiente",
      })
      .mockResolvedValueOnce({ status: "ok", society: "CYC", data: [] });
    render(await TasksView({ context }));
    expect(screen.getByText("Error de lectura")).toBeTruthy();
    expect(screen.getByText("La conexión necesaria todavía no está disponible.")).toBeTruthy();
    expect(screen.getByText("No hay registros para este apartado.")).toBeTruthy();
    expect(screen.queryByRole("table")).toBeNull();
  });
});
