/** @vitest-environment jsdom */
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { mockPortalLayout } from "@/test/portal-layout";
import { PortalDataTable, PortalRecord } from "./portal-data";

const fields = Array.from({ length: 8 }, (_, index) => ({
  label: `Campo ${index + 1}`,
  value: index === 7 ? "No informado" : `Valor ${index + 1}`,
}));
beforeEach(() => mockPortalLayout());
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("datos completos del portal", () => {
  it.each([0, 1, 3, 7, 8, 40])(
    "mantiene altura natural hasta siete registros (%i filas)",
    (count) => {
      const rows = Array.from({ length: count }, (_, index) => ({
        id: String(index),
        fields: [{ label: "Persona", value: `Persona ${index + 1}` }],
      }));
      render(<PortalDataTable title="Equipo" rows={rows} />);
      const table = screen.getByRole("table");
      expect(table.parentElement?.style.height).toBe(count <= 7 ? "auto" : "440px");
      if (count <= 7) expect(table.querySelectorAll("tbody tr[aria-hidden]")).toHaveLength(0);
      expect(screen.queryByRole("button", { name: /detalle/i })).toBeNull();
      expect(screen.queryByRole("dialog")).toBeNull();
    },
  );
  it.each([1200, 700, 350])("muestra todos los campos y conserva la descarga a %i px", (width) => {
    mockPortalLayout(width);
    render(
      <PortalDataTable
        title="Consulta"
        rows={[{ id: "1", fields, download: { href: "/documento.pdf", label: "Descargar PDF" } }]}
      />,
    );
    const table = screen.getByRole("table");
    expect(within(table).getAllByRole("columnheader")).toHaveLength(9);
    expect(within(table).getByText("No informado")).toBeTruthy();
    expect(screen.getByRole("link", { name: /^Descargar PDF:/ }).getAttribute("href")).toBe(
      "/documento.pdf",
    );
    expect(screen.getByRole("region", { name: "Consulta: tabla completa" }).tabIndex).toBe(0);
    expect(screen.getByText(/Desplaza la tabla horizontalmente/)).toBeTruthy();
  });
  it("conserva campos opcionales, etiquetas repetidas, enlaces y orden sin columna de acciones vacía", () => {
    render(
      <PortalDataTable
        title="Personas"
        rows={[
          {
            id: "2",
            href: "/segunda",
            fields: [
              { label: "Persona", value: "Segunda" },
              { label: "Correo", value: "uno@example.test" },
              { label: "Correo", value: "dos@example.test" },
            ],
          },
          {
            id: "1",
            fields: [
              { label: "Persona", value: "Primera" },
              {
                label: "Observación",
                value: "Texto largo con todos los datos disponibles para consultar en la tabla.",
              },
            ],
          },
        ]}
      />,
    );
    const table = screen.getByRole("table");
    expect(
      within(table)
        .getAllByRole("columnheader")
        .map((cell) => cell.textContent),
    ).toEqual(["Persona", "Correo", "Correo", "Observación"]);
    expect(
      within(table)
        .getAllByRole("row")
        .slice(1)
        .map((row) => row.firstChild?.textContent),
    ).toEqual(["Segunda", "Primera"]);
    expect(within(table).getByText("dos@example.test")).toBeTruthy();
    expect(within(table).getAllByText("—")).toHaveLength(3);
    expect(screen.getByRole("link", { name: "Segunda" }).getAttribute("href")).toBe("/segunda");
  });
  it("solo aplica badges a estados explícitos conservando su texto", () => {
    render(
      <PortalDataTable
        title="Estados"
        rows={[
          {
            id: "1",
            fields: [
              { label: "Nombre", value: "Pendiente" },
              { label: "Estado", value: "Pendiente de conexión", tone: "warning" },
              { label: "Recuento", value: "41", tone: "warning", numeric: true },
            ],
          },
        ]}
      />,
    );
    const table = screen.getByRole("table");
    expect(within(table).getByText("Pendiente").className).not.toContain("bg-tone-amber");
    expect(
      within(table).getByText("Pendiente de conexión").closest("[title]")?.className,
    ).toContain("bg-tone-amber");
  });
  it("presenta todos los campos de la ficha, un solo título y una descarga independiente", () => {
    render(
      <PortalRecord
        title="Ficha"
        fields={fields}
        download={{ href: "/ficha.pdf", label: "Descargar PDF" }}
      />,
    );
    expect(screen.getAllByRole("heading", { name: "Ficha" })).toHaveLength(1);
    expect(screen.getByText("Campo 8")).toBeTruthy();
    expect(screen.getByText("No informado")).toBeTruthy();
    expect(screen.getByRole("region", { name: "Ficha: todos los campos" }).tabIndex).toBe(0);
    expect(screen.queryByRole("button", { name: /detalle/i })).toBeNull();
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.getByRole("link", { name: /^Descargar PDF:/ }).hasAttribute("download")).toBe(
      true,
    );
  });
});
