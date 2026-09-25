/** @vitest-environment jsdom */

import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { sampleReceipt as receipt } from "./payroll-receipt.fixture";

import { PayrollReceiptView } from "./payroll-receipt-view";

afterEach(() => {
  cleanup();
});

describe("PayrollReceiptView", () => {
  it("renders header, concepts, informative lines and totals", () => {
    render(<PayrollReceiptView receipt={receipt} />);

    expect(screen.getByRole("article", { name: /Ana Pérez Gómez/ })).toBeTruthy();
    expect(screen.getByText("A28008795")).toBeTruthy();
    expect(screen.getByText("01/03/2004")).toBeTruthy();

    const table = screen.getByRole("table");
    const salaryRow = within(table).getByRole("row", { name: /Salario Base/ });
    expect(within(salaryRow).getAllByText("2.606,04")).toHaveLength(2);
    const irpfRow = within(table).getByRole("row", { name: /IRPF/ });
    expect(within(irpfRow).getByText("34,16 %")).toBeTruthy();
    expect(within(irpfRow).getByText("2.642,47")).toBeTruthy();

    const informative = table.querySelectorAll('[data-receipt-section="informative"]');
    expect(informative).toHaveLength(2);
    expect(within(table).getByText("*** Coste Empresa ***")).toBeTruthy();

    expect(screen.getByText("Líquido total a percibir")).toBeTruthy();
    expect(screen.getAllByText("4.522,35")).toHaveLength(2);
    expect(screen.getByText("ES00 0000 0000 0000 0000 0001")).toBeTruthy();
    expect(screen.getByText("Datos del banco beneficiario")).toBeTruthy();
    expect(screen.queryByText("Recibo incompleto")).toBeNull();
  });

  it("warns when Meta4 totals include concepts that are not mapped yet", () => {
    render(
      <PayrollReceiptView receipt={{ ...receipt, unmapped: { accrued: 120.5, deducted: 0 } }} />,
    );

    expect(screen.getByText("Recibo incompleto")).toBeTruthy();
    expect(screen.getByText(/faltan 120,50 EUR en devengos/)).toBeTruthy();
  });
});
