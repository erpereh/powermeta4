/** @vitest-environment jsdom */
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
describe("resumen y detalle del portal", () => {
  it("conserva el orden y cierra el detalle si desaparece el registro", async () => {
    const user = userEvent.setup();
    const rows = [
      { id: "2", fields: [{ label: "Persona", value: "Segunda" }] },
      { id: "1", fields: [{ label: "Persona", value: "Primera" }] },
    ];
    const view = render(<PortalDataTable title="Equipo" rows={rows} />);
    expect(
      screen
        .getAllByRole("button", { name: /^Ver detalle:/ })
        .map((button) => button.getAttribute("aria-label")),
    ).toEqual(["Ver detalle: Segunda", "Ver detalle: Primera"]);
    await user.click(screen.getByRole("button", { name: "Ver detalle: Segunda" }));
    view.rerender(<PortalDataTable title="Equipo" rows={[]} />);
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull(), { timeout: 3000 });
    expect(screen.queryByText("Segunda")).toBeNull();
  });
  it.each([
    [1200, 4],
    [700, 3],
    [350, 2],
  ])("muestra el resumen a %i px y conserva todos los campos en el panel", async (width, count) => {
    mockPortalLayout(width);
    const user = userEvent.setup();
    render(
      <PortalDataTable
        title="Consulta"
        rows={[{ id: "1", fields, download: { href: "/documento.pdf", label: "Descargar PDF" } }]}
      />,
    );
    const table = screen.getByRole("table");
    expect(within(table).getAllByRole("columnheader")).toHaveLength(count + 1);
    expect(within(table).queryByText("No informado")).toBeNull();
    expect(screen.getByRole("link", { name: /^Descargar PDF:/ }).hasAttribute("download")).toBe(
      true,
    );
    const trigger = screen.getByRole("button", { name: "Ver detalle: Valor 1 · Valor 2" });
    await user.click(trigger);
    const panel = screen.getByRole("dialog", { name: "Consulta" });
    expect(within(panel).getByText("Campo 8")).toBeTruthy();
    expect(within(panel).getByText("No informado")).toBeTruthy();
    const close = within(panel).getByRole("button", { name: "Cerrar panel" });
    await waitFor(() => expect(document.activeElement).toBe(close));
    await user.keyboard("{Shift>}{Tab}{/Shift}");
    expect(document.activeElement).toBe(
      within(panel).getByRole("link", { name: /^Descargar PDF:/ }),
    );
    await user.keyboard("{Tab}");
    expect(document.activeElement).toBe(close);
    await user.keyboard("{Escape}");
    expect(document.activeElement).toBe(trigger);
  });
  it("limita una ficha a seis campos y ofrece el resto sin perder valores", async () => {
    const user = userEvent.setup();
    render(<PortalRecord title="Ficha" fields={fields} />);
    expect(screen.queryByText("Campo 7")).toBeNull();
    await user.click(screen.getByRole("button", { name: "Ver detalle" }));
    expect(within(screen.getByRole("dialog")).getByText("Campo 8")).toBeTruthy();
  });
});
