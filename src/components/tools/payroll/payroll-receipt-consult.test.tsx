/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { PayrollPayOption } from "@/types/payroll-receipt";

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: (
    selector: (state: { auth: { mode: "meta4"; societyCode: string } }) => unknown,
  ) => selector({ auth: { mode: "meta4", societyCode: "CYC" } }),
}));

vi.mock("@/app/actions/payroll-receipt", () => ({ getPayrollReceiptAction: vi.fn() }));

import { getPayrollReceiptAction } from "@/app/actions/payroll-receipt";

import { PayrollReceiptConsult } from "./payroll-receipt-consult";

const PAYS: PayrollPayOption[] = [
  { paymentDate: "2026-04-25", name: "Abril 2026", startDate: "2026-04-01", endDate: "2026-04-30" },
  { paymentDate: "2026-03-25", name: "Marzo 2026", startDate: "2026-03-01", endDate: "2026-03-31" },
];

beforeEach(() => {
  // jsdom no implementa ResizeObserver; el Combobox lo usa para colocar el panel.
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
  vi.mocked(getPayrollReceiptAction).mockReset();
  vi.unstubAllGlobals();
});

describe("PayrollReceiptConsult", () => {
  it("shows the Meta4 payment and currency options with honest defaults", () => {
    render(<PayrollReceiptConsult pays={PAYS} paysError={null} />);

    expect(screen.getByText("CYC")).toBeTruthy();
    expect(screen.getByRole("radio", { name: "Paga actual" }).getAttribute("aria-checked")).toBe(
      "true",
    );
    expect(screen.getByRole("radio", { name: "Pagas retroactivas" })).toBeTruthy();
    expect(screen.getByRole("radio", { name: "Paga normal + retroactivas" })).toBeTruthy();
    expect(
      screen.getByRole("radio", { name: "Moneda de cálculo" }).getAttribute("aria-checked"),
    ).toBe("true");
    expect(screen.getByLabelText("ID moneda")).toHaveProperty("disabled", true);
    expect(screen.getByText("Sin recibo seleccionado")).toBeTruthy();
  });

  it("validates the employee and currency before consulting", () => {
    render(<PayrollReceiptConsult pays={PAYS} paysError={null} />);

    fireEvent.click(screen.getByRole("radio", { name: "Otra" }));
    fireEvent.change(screen.getByLabelText("ID moneda"), { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: "Consultar recibos" }));

    expect(screen.getByText("Indica la matrícula del empleado.")).toBeTruthy();
    expect(screen.getByText("Indica el ID de la moneda.")).toBeTruthy();
    expect(getPayrollReceiptAction).not.toHaveBeenCalled();
  });

  it("consults the latest pay by default and shows the server message", async () => {
    vi.mocked(getPayrollReceiptAction).mockResolvedValue({
      ok: false,
      message: "No hay recibo de esta paga para el empleado en la sociedad activa.",
    });
    render(<PayrollReceiptConsult pays={PAYS} paysError={null} />);

    fireEvent.change(screen.getByLabelText("Matrícula"), { target: { value: " 1013 " } });
    fireEvent.click(screen.getByRole("button", { name: "Consultar recibos" }));

    await waitFor(() =>
      expect(
        screen.getByText("No hay recibo de esta paga para el empleado en la sociedad activa."),
      ).toBeTruthy(),
    );
    expect(getPayrollReceiptAction).toHaveBeenCalledWith({
      employeeId: "1013",
      fromPaymentDate: "2026-04-25",
      toPaymentDate: "2026-04-25",
      paymentType: "current",
      currency: { mode: "calculation" },
    });
    expect(screen.queryByRole("table")).toBeNull();
  });

  it("blocks the consult when the pay calendar could not be loaded", () => {
    render(
      <PayrollReceiptConsult
        pays={[]}
        paysError="No se ha podido cargar el calendario de pagas desde PeopleNet."
      />,
    );

    expect(screen.getByText("Calendario de pagas no disponible")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Consultar recibos" })).toHaveProperty(
      "disabled",
      true,
    );
  });
});
