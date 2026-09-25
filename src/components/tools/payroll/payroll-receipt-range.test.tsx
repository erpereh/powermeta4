/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import type { PayrollReceiptEntry } from "@/types/payroll-receipt";

import { sampleReceipt } from "./payroll-receipt.fixture";
import { PayrollReceiptRange } from "./payroll-receipt-range";

const entry = (paymentDate: string, payName: string, netPay: number): PayrollReceiptEntry => ({
  paymentDate,
  payName,
  receipt: {
    ...sampleReceipt,
    periodLabel: payName,
    totals: { ...sampleReceipt.totals, netPay },
  },
});

const RECEIPTS = [
  entry("2026-02-25", "Febrero", 4000),
  entry("2026-03-25", "Marzo 2026", 4100),
  entry("2026-04-25", "Abril 2026", 4522.35),
];

beforeEach(() => {
  // jsdom no implementa ResizeObserver; las pestañas lo usan para el desbordamiento.
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
  vi.unstubAllGlobals();
});

describe("PayrollReceiptRange", () => {
  it("shows one receipt at a time, starting with the most recent", () => {
    render(<PayrollReceiptRange receipts={RECEIPTS} missing={[]} />);

    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("article", { name: /Abril 2026/ })).toBeTruthy();
    expect(screen.getByText("3 nóminas")).toBeTruthy();
    expect(screen.getByText("12.622,35 EUR")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Nómina siguiente" })).toHaveProperty(
      "disabled",
      true,
    );
  });

  it("moves between receipts with the previous button and the pay tabs", () => {
    render(<PayrollReceiptRange receipts={RECEIPTS} missing={[]} />);

    fireEvent.click(screen.getByRole("button", { name: "Nómina anterior" }));
    expect(screen.getByRole("article", { name: /Marzo 2026/ })).toBeTruthy();

    fireEvent.click(screen.getByRole("tab", { name: /Febrero/ }));
    expect(screen.getByRole("article", { name: /Febrero/ })).toBeTruthy();
    expect(screen.getAllByRole("article")).toHaveLength(1);
    expect(screen.getByRole("button", { name: "Nómina anterior" })).toHaveProperty(
      "disabled",
      true,
    );
  });

  it("hides the range navigation for a single receipt and lists pays without receipt", () => {
    render(
      <PayrollReceiptRange
        receipts={[RECEIPTS[2] ?? entry("2026-04-25", "Abril 2026", 1)]}
        missing={[
          {
            paymentDate: "2026-04-14",
            payName: "Revisión Convenio 2025",
            reason: "No hay recibo de esta paga para el empleado en la sociedad activa.",
          },
        ]}
      />,
    );

    expect(screen.queryByRole("tablist")).toBeNull();
    expect(screen.getByText("1 paga sin recibo")).toBeTruthy();
    expect(screen.getByText("Revisión Convenio 2025")).toBeTruthy();
  });
});
