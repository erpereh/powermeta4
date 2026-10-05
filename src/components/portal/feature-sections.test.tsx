/** @vitest-environment jsdom */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { consult } from "@/lib/portal/registry/helpers";
import { ConsultContent } from "./feature-sections";
const section = consult(
  "x",
  "Cuenta",
  "PAYMENT",
  "list",
  [["IBAN", "IBAN"]],
  undefined,
  "own-payment-accounts",
);
if (section.kind !== "consult") throw new Error("Se esperaba consulta");
const spec = section.consult;
afterEach(cleanup);
describe("apartados de consultas", () => {
  it("muestra datos y campos ausentes sin el aviso incondicional de pendiente", () => {
    render(
      <ConsultContent
        consult={spec}
        result={{
          status: "ok",
          society: "CYC",
          data: { rows: [[{ label: "IBAN", value: "No informado" }]] },
        }}
      />,
    );
    expect(screen.getByRole("list", { name: "Cuenta" })).toBeTruthy();
    expect(screen.getByText("No informado")).toBeTruthy();
    expect(screen.queryByText("Consulta pendiente de conexión")).toBeNull();
  });
  it("muestra un vacío y un error diferenciados", () => {
    const view = render(
      <ConsultContent
        consult={spec}
        result={{ status: "ok", society: "CYC", data: { rows: [] } }}
      />,
    );
    expect(screen.getByText("No hay registros para este apartado.")).toBeTruthy();
    view.rerender(
      <ConsultContent
        consult={spec}
        result={{ status: "error", code: "AMBIGUOUS", message: "Ficha ambigua" }}
      />,
    );
    expect(screen.getByText("Ficha ambigua")).toBeTruthy();
  });
  it("ofrece la descarga de cada documento con un nombre accesible propio", () => {
    render(
      <ConsultContent
        consult={{ ...spec, download: { kind: "payslip", label: "Descargar PDF" } }}
        result={{
          status: "ok",
          society: "CYC",
          data: {
            rows: [
              [{ label: "IBAN", value: "Julio 2026" }],
              [{ label: "IBAN", value: "Junio 2026" }],
            ],
            links: ["/api/portal/documents/payslip?k=1", null],
          },
        }}
      />,
    );
    const link = screen.getByRole("link", { name: "Descargar PDF: Julio 2026" });
    expect(link.getAttribute("href")).toBe("/api/portal/documents/payslip?k=1");
    expect(screen.getAllByRole("link")).toHaveLength(1);
  });
});
