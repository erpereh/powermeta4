/** @vitest-environment jsdom */
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HolidayCalendarView } from "./holidays/calendar-view";
import { HolidaysView, HolidayResult } from "./holidays-view";
import { FeatureDispatch } from "./feature-dispatch";
import { getPortalFeatureByRoute } from "@/lib/portal/registry";
import { mockPortalLayout } from "@/test/portal-layout";

const mocks = vi.hoisted(() => ({ auth: vi.fn(), load: vi.fn() }));
vi.mock("@/lib/auth/session", () => ({ requireAuthContext: mocks.auth }));
vi.mock("@/lib/portal/holidays/load", () => ({ loadHolidayPage: mocks.load }));
vi.mock("./projections-view", () => ({ ProjectionsView: () => null }));
vi.mock("./certificates-view", () => ({ CertificatesView: () => null }));
const context = { mode: "unavailable", reason: "debug", message: "Sin Meta4" } as const;

beforeEach(() => {
  vi.clearAllMocks();
  mockPortalLayout();
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("calendario anual accesible", () => {
  it("muestra doce tablas de seis semanas sin controles de selección de fechas", () => {
    render(
      <HolidayCalendarView
        data={{ year: 2026, holidays: [{ date: "2026-08-15", description: "Fiesta de prueba" }] }}
      />,
    );
    const tables = screen.getAllByRole("table");
    expect(tables).toHaveLength(12);
    for (const table of tables) {
      expect(within(table).getAllByRole("row")).toHaveLength(7);
      expect(within(table).getAllByRole("cell")).toHaveLength(42);
    }
    expect(screen.getByRole("table", { name: "Enero de 2026" })).toBeTruthy();
    const holiday = screen.getByRole("cell", {
      name: /sábado, 15 de agosto de 2026, fin de semana, festivo: Fiesta de prueba/,
    });
    expect(holiday.querySelector("time")?.getAttribute("datetime")).toBe("2026-08-15");
    expect(holiday.firstElementChild?.className).toContain("ring-primary");
    expect(screen.queryByRole("button")).toBeNull();
    expect(screen.queryByRole("combobox")).toBeNull();
    const saturday = screen.getByRole("cell", {
      name: "sábado, 22 de agosto de 2026, fin de semana",
    });
    expect(saturday.firstElementChild?.className).toContain("bg-muted");
  });
  it("una fecha festiva sin descripción conserva la etiqueta accesible y la leyenda", () => {
    render(
      <HolidayCalendarView
        data={{ year: 2026, holidays: [{ date: "2026-01-01", description: null }] }}
      />,
    );
    expect(screen.getByRole("cell", { name: "jueves, 1 de enero de 2026, festivo" })).toBeTruthy();
    expect(screen.getByRole("list", { name: "Leyenda del calendario" })).toBeTruthy();
  });
  it("la muestra permanece identificada aunque se oculten los textos de desarrollo", () => {
    render(<HolidayCalendarView debug data={{ year: 2026, holidays: [] }} />);
    const notice = screen.getByText("Muestra ficticia · modo desarrollo");
    expect(notice.closest("[data-development-only]")).toBeNull();
    expect(screen.getByText(/No corresponden a tu centro de trabajo/)).toBeTruthy();
  });
  it("un calendario sin festivos conserva los doce meses y explica el vacío", () => {
    render(<HolidayCalendarView data={{ year: 2026, holidays: [] }} />);
    expect(screen.getByRole("status").textContent).toContain("No hay festivos registrados");
    expect(screen.getAllByRole("table")).toHaveLength(12);
    expect(screen.queryByText(/Muestra ficticia/)).toBeNull();
  });
});

describe("estados y ruta de festivos", () => {
  it("el contrato pendiente es visible y nunca se presenta como ausencia de festivos", () => {
    render(
      <HolidayResult
        result={{
          status: "unavailable",
          pending: ["P02", "P05"],
          message: "Contrato CARGA pendiente",
        }}
      />,
    );
    const notice = screen.getByText("Calendario no disponible");
    expect(notice.closest("[data-development-only]")).toBeNull();
    expect(screen.getByText(/Esto no significa/)).toBeTruthy();
    expect(screen.queryByRole("table")).toBeNull();
  });
  it("la identidad no resuelta conserva su motivo visible", () => {
    render(
      <HolidayResult
        result={{
          status: "unavailable",
          pending: ["P03"],
          message: "La ficha no coincide con tu usuario.",
        }}
      />,
    );
    expect(screen.getByText("No se ha podido identificar tu calendario")).toBeTruthy();
    const message = screen.getAllByText("La ficha no coincide con tu usuario.")[0];
    expect(message.closest("[data-development-only]")).toBeNull();
  });
  it("distingue falta de asignación y error sin mostrar datos", () => {
    const view = render(<HolidayResult result={{ status: "unassigned", year: 2026 }} />);
    expect(screen.getByText("Sin calendario asignado")).toBeTruthy();
    expect(screen.queryByRole("table")).toBeNull();
    view.rerender(
      <HolidayResult result={{ status: "error", message: "La lectura no está disponible." }} />,
    );
    expect(screen.getByRole("alert").textContent).toContain("La lectura no está disponible.");
    expect(screen.queryByRole("table")).toBeNull();
  });
  it("la vista obtiene una sesión antes de cargar el calendario", async () => {
    const auth = { authContext: { mode: "debug" } };
    mocks.auth.mockResolvedValue(auth);
    mocks.load.mockResolvedValue({ status: "ok", debug: true, data: { year: 2026, holidays: [] } });
    render(await HolidaysView({ context }));
    expect(mocks.auth).toHaveBeenCalledOnce();
    expect(mocks.load).toHaveBeenCalledExactlyOnceWith(auth, context);
    expect(screen.getAllByRole("table")).toHaveLength(12);
  });
  it("el dispatcher conserva la cabecera y anuncia la carga con Suspense", () => {
    const feature = getPortalFeatureByRoute("/portal/empleado/tiempo/festivos");
    if (!feature) throw new Error("Ruta ausente");
    // Inspeccionar el árbol evita ejecutar otros lectores asíncronos del portal.
    const element = FeatureDispatch({ feature, context });
    expect(element.type).toBe("div");
    const suspense = element.props.children[1];
    render(suspense.props.fallback);
    expect(screen.getByRole("status").textContent).toContain("Cargando el calendario de festivos");
    expect(suspense.props.children.type).toBe(HolidaysView);
  });
});
