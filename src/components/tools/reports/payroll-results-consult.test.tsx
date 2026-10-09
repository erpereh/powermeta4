/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { sampleRunDetail } from "@/lib/payroll-reports/payroll-report.fixture";
import type { PayrollReportRun } from "@/types/payroll-report";

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (
    selector: (state: { auth: { mode: "meta4"; societyCode: string } }) => unknown,
  ) => selector({ auth: { mode: "meta4", societyCode: "COLL" } }),
}));

vi.mock("@/app/actions/payroll-reports", () => ({ getPayrollReportRunAction: vi.fn() }));

import { getPayrollReportRunAction } from "@/app/actions/payroll-reports";

import { PayrollResultsConsult } from "./payroll-results-consult";

const RUNS: PayrollReportRun[] = [
  sampleRunDetail.run,
  {
    reportId: "02",
    runAt: "2026-10-06T10:43:21.000Z",
    accruedOn: "2025-09-25",
    payFrequency: "004",
    reportName: "Informe Seguros Sociales sin ajustes",
    payKind: "Paga Regular",
    hasData: false,
  },
];

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  Element.prototype.scrollIntoView = vi.fn();
});

afterEach(() => {
  cleanup();
  vi.mocked(getPayrollReportRunAction).mockReset();
  vi.unstubAllGlobals();
});

describe("PayrollResultsConsult", () => {
  it("lists the saved runs of the active society", () => {
    render(<PayrollResultsConsult runs={RUNS} runsError={null} />);

    expect(screen.getByText("COLL")).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: /Fecha de ejecución/ })).toBeTruthy();
    expect(screen.getByText("2 ejecuciones")).toBeTruthy();
    expect(screen.getByText("Sin ejecución seleccionada")).toBeTruthy();
  });

  it("shows the PeopleNet error instead of the list", () => {
    render(<PayrollResultsConsult runs={[]} runsError="Sin acceso a PeopleNet." />);

    expect(screen.getByText("Sin acceso a PeopleNet.")).toBeTruthy();
    expect(screen.queryByRole("columnheader", { name: /Fecha de ejecución/ })).toBeNull();
  });

  it("lists every report in the report picker and filters by the chosen one", async () => {
    const user = userEvent.setup();
    render(<PayrollResultsConsult runs={RUNS} runsError={null} />);

    await user.click(screen.getByRole("combobox", { name: "Informe" }));
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "Todos los informes",
      "01 · Informe Normal",
      "02 · Informe Seguros Sociales sin ajustes",
    ]);
    await user.click(screen.getByRole("option", { name: /02 · Informe Seguros/ }));

    expect(screen.getByText("1 de 2 ejecuciones")).toBeTruthy();
  });

  it("filters the runs by text", () => {
    render(<PayrollResultsConsult runs={RUNS} runsError={null} />);

    fireEvent.change(screen.getByRole("searchbox", { name: "Buscar ejecuciones" }), {
      target: { value: "seguros" },
    });

    expect(screen.getByText("1 de 2 ejecuciones")).toBeTruthy();
  });
});

describe("PayrollResultDetail", () => {
  it("shows the pay, the Datos and informe sheets and the enlarged window", async () => {
    const { PayrollResultDetail } = await import("./payroll-result-detail");
    render(<PayrollResultDetail detail={sampleRunDetail} />);

    expect(screen.getByText("Paga Regular")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Descargar Excel" })).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: /Apellidos y Nombres/ })).toBeTruthy();
    expect(
      screen.getByText(
        "4 de 4 filas. Desplaza la tabla horizontalmente para ver todas las columnas.",
      ),
    ).toBeTruthy();

    fireEvent.click(screen.getByRole("tab", { name: "Informe" }));
    expect(screen.getByRole("columnheader", { name: /Nº Empl\./ })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Ampliar ventana" }));
    const dialog = await screen.findByRole("dialog", { name: "01 · Informe Normal" });
    await waitFor(() =>
      expect(within(dialog).getByRole("columnheader", { name: /Suma de Líquido/ })).toBeTruthy(),
    );
  });

  it("tells when a run produced no data", async () => {
    const { PayrollResultDetail } = await import("./payroll-result-detail");
    render(<PayrollResultDetail detail={{ ...sampleRunDetail, headers: [], rows: [] }} />);

    expect(screen.getByText("Esta ejecución no generó resultados.")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Descargar Excel" })).toBeNull();
  });
});
