/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { sampleQuinquenalRow } from "@/lib/quinquenal/quinquenal.fixture";

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (
    selector: (state: { auth: { mode: "meta4"; societyCode: string } }) => unknown,
  ) => selector({ auth: { mode: "meta4", societyCode: "CYC" } }),
}));

vi.mock("@/app/actions/quinquenal", () => ({ getQuinquenalAction: vi.fn() }));

import { getQuinquenalAction } from "@/app/actions/quinquenal";

import { QuinquenalConsult } from "./quinquenal-consult";

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
  vi.mocked(getQuinquenalAction).mockReset();
  vi.unstubAllGlobals();
});

describe("QuinquenalConsult", () => {
  it("consults every employee by default and keeps the employee id disabled", () => {
    render(<QuinquenalConsult />);

    expect(screen.getByText("CYC")).toBeTruthy();
    expect(
      screen
        .getByRole("radio", { name: "Todos los empleados computables" })
        .getAttribute("aria-checked"),
    ).toBe("true");
    expect(screen.getByLabelText(/Matrícula/)).toHaveProperty("disabled", true);
    expect(screen.getByText("Sin consulta")).toBeTruthy();
  });

  it("asks for the employee id before consulting one employee", () => {
    render(<QuinquenalConsult />);

    fireEvent.click(screen.getByRole("radio", { name: "Un empleado" }));
    fireEvent.click(screen.getByRole("button", { name: "Consultar" }));

    expect(screen.getByText("Indica la matrícula del empleado.")).toBeTruthy();
    expect(getQuinquenalAction).not.toHaveBeenCalled();
  });

  it("shows the five years of a single employee with the Excel export", async () => {
    vi.mocked(getQuinquenalAction).mockResolvedValue({
      ok: true,
      report: { generatedOn: "2026-10-09", currentYear: 2026, rows: [sampleQuinquenalRow] },
    });
    render(<QuinquenalConsult />);

    fireEvent.click(screen.getByRole("radio", { name: "Un empleado" }));
    fireEvent.change(screen.getByLabelText(/Matrícula/), { target: { value: "9001" } });
    fireEvent.click(screen.getByRole("button", { name: "Consultar" }));

    await waitFor(() =>
      expect(screen.getByText("Retribución de los últimos cinco años")).toBeTruthy(),
    );
    expect(getQuinquenalAction).toHaveBeenCalledWith({ employeeId: "9001" });
    expect(screen.getByRole("rowheader", { name: "2025" })).toBeTruthy();
    expect(screen.getByText("19.500,00")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Exportar a Excel" })).toBeTruthy();
  });

  it("shows every field for all employees and keeps the view in the enlarged window", async () => {
    vi.mocked(getQuinquenalAction).mockResolvedValue({
      ok: true,
      report: {
        generatedOn: "2026-10-09",
        currentYear: 2026,
        rows: [
          sampleQuinquenalRow,
          { ...sampleQuinquenalRow, employeeId: "9002", legalEntity: "ACYC_PT" },
        ],
      },
    });
    render(<QuinquenalConsult />);

    fireEvent.click(screen.getByRole("button", { name: "Consultar" }));

    await waitFor(() =>
      expect(screen.getByRole("button", { name: "Ampliar ventana" })).toBeTruthy(),
    );
    expect(
      screen.getByRole("tab", { name: "Todos los campos" }).getAttribute("aria-selected"),
    ).toBe("true");
    expect(screen.getByRole("columnheader", { name: /Global grade/ })).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: /Con reducción 2022/ })).toBeTruthy();

    fireEvent.change(screen.getByRole("searchbox", { name: "Buscar por matrícula o nombre" }), {
      target: { value: "9002" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Ampliar ventana" }));

    const dialog = await screen.findByRole("dialog", { name: "Consulta quinquenal 2026" });
    expect(within(dialog).getByRole("columnheader", { name: /Variable 2026/ })).toBeTruthy();
    expect(
      within(dialog).getByRole<HTMLInputElement>("searchbox", {
        name: "Buscar por matrícula o nombre",
      }).value,
    ).toBe("9002");
    expect(within(dialog).queryByRole("button", { name: "Ampliar ventana" })).toBeNull();

    fireEvent.click(within(dialog).getByRole("tab", { name: "Resumen" }));
    expect(within(dialog).queryByRole("columnheader", { name: /Global grade/ })).toBeNull();
    for (const year of [2026, 2025, 2024, 2023, 2022]) {
      expect(
        within(dialog).getByRole("columnheader", { name: new RegExp(`Retribución ${year}`) }),
      ).toBeTruthy();
      expect(
        within(dialog).getByRole("columnheader", { name: new RegExp(`Variable ${year}`) }),
      ).toBeTruthy();
    }
    expect(within(dialog).queryByRole("columnheader", { name: /Con reducción/ })).toBeNull();
    expect(within(dialog).queryByRole("columnheader", { name: /Coef. jornada/ })).toBeNull();
  });

  it("shows server errors as they come", async () => {
    vi.mocked(getQuinquenalAction).mockResolvedValue({
      ok: false,
      message: "La consulta quinquenal no está disponible en esta sociedad.",
    });
    render(<QuinquenalConsult />);

    fireEvent.click(screen.getByRole("button", { name: "Consultar" }));

    await waitFor(() =>
      expect(
        screen.getByText("La consulta quinquenal no está disponible en esta sociedad."),
      ).toBeTruthy(),
    );
    expect(getQuinquenalAction).toHaveBeenCalledWith({});
  });
});
