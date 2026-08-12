/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/app/actions/meta4-employee-detail", () => ({
  getMeta4EmployeeDetailViewAction: vi.fn(async () => ({
    available: false,
    employeeId: "",
    displayName: null,
    message: "No se ha podido cargar el detalle del empleado desde Meta4.",
    sections: [],
    emails: [],
  })),
}));

import { getMeta4EmployeeDetailViewAction } from "@/app/actions/meta4-employee-detail";
import { UsersListTable } from "@/components/tools/users/users-list-table";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";

const mockedDetailAction = vi.mocked(getMeta4EmployeeDetailViewAction);

afterEach(() => {
  cleanup();
  mockedDetailAction.mockClear();
});

const buildUsers = (count: number): Meta4UserListItem[] =>
  Array.from({ length: count }, (_, index) => {
    const id = String(index + 1).padStart(4, "0");
    return { id, fullName: `Usuario ${id}`, claveSelf: `usuario${id}` };
  });

const sampleUsers: Meta4UserListItem[] = [
  { id: "0001", fullName: "Paula García López", claveSelf: "paula" },
  { id: "0013", fullName: "Mariana Ruiz Soto", claveSelf: "mruizs" },
  { id: "0021", fullName: "Federica Martín", claveSelf: "fmartin" },
  { id: "0023", fullName: "Raúl Pérez Núñez", claveSelf: "rperezn" },
  { id: "0024", fullName: "María Sánchez Díaz", claveSelf: "msanchezd" },
];

describe("UsersListTable", () => {
  it("renders society copy, columns and rows", () => {
    render(<UsersListTable society="CYC" users={sampleUsers} />);

    expect(screen.getByText("Usuarios")).toBeTruthy();
    expect(screen.getByText("CYC")).toBeTruthy();
    expect(screen.getByText("Todos los usuarios disponibles en CYC.")).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: "ID" })).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: "Usuario Meta4" })).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: "Nombre y apellidos" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ordenar por ID" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ordenar por usuario Meta4" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ordenar por nombre y apellidos" })).toBeTruthy();
    expect(screen.getByText("Paula García López")).toBeTruthy();
    expect(screen.getByText("0001")).toBeTruthy();
    expect(screen.getByText("paula")).toBeTruthy();
  });

  it("shows empty SOAP copy for each society", () => {
    const { rerender } = render(<UsersListTable society="CYC" users={[]} />);
    expect(screen.getByText("No hay usuarios disponibles en CYC.")).toBeTruthy();

    rerender(<UsersListTable society="IBER" users={[]} />);
    expect(screen.getByText("No hay usuarios disponibles en IBER.")).toBeTruthy();

    rerender(<UsersListTable society="COLL" users={[]} />);
    expect(screen.getByText("No hay usuarios disponibles en COLL.")).toBeTruthy();
  });

  it("filters by ID, name and accents", async () => {
    const user = userEvent.setup();
    render(<UsersListTable society="CYC" users={sampleUsers} />);
    const search = screen.getByRole("searchbox", { name: "Buscar por ID, usuario o nombre" });

    await user.clear(search);
    await user.type(search, "0013");
    expect(screen.getByText("Mariana Ruiz Soto")).toBeTruthy();
    expect(screen.queryByText("Paula García López")).toBeNull();

    await user.clear(search);
    await user.type(search, "raul");
    expect(screen.getByText("Raúl Pérez Núñez")).toBeTruthy();

    await user.clear(search);
    await user.type(search, "maria");
    expect(screen.getByText("María Sánchez Díaz")).toBeTruthy();

    await user.clear(search);
    await user.type(search, "mruizs");
    expect(screen.getByText("Mariana Ruiz Soto")).toBeTruthy();
    expect(screen.queryByText("Paula García López")).toBeNull();

    await user.clear(search);
    await user.type(search, "zzzz");
    expect(screen.getByText("No hay usuarios que coincidan con la búsqueda.")).toBeTruthy();
  });

  it("paginates 25 rows with next/prev and counter", async () => {
    const user = userEvent.setup();
    render(<UsersListTable society="IBER" users={buildUsers(30)} />);

    expect(screen.getByText("Mostrando 1–25 de 30")).toBeTruthy();
    expect(screen.getByText("0001")).toBeTruthy();
    expect(screen.queryByText("0026")).toBeNull();

    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    expect(screen.getByText("Mostrando 26–30 de 30")).toBeTruthy();
    expect(screen.getByText("0026")).toBeTruthy();

    await user.click(screen.getByRole("button", { name: "Anterior" }));
    expect(screen.getByText("Mostrando 1–25 de 30")).toBeTruthy();
  });

  it("sorts by ID and name", async () => {
    const user = userEvent.setup();
    render(<UsersListTable society="COLL" users={sampleUsers} />);

    const table = screen.getByRole("table");
    const rows = () =>
      within(table)
        .getAllByRole("row")
        .slice(1)
        .map((row) => within(row).getAllByRole("cell")[0]?.textContent);

    // Default ID asc with zero-preserving digit comparison
    expect(rows()).toEqual(["0001", "0013", "0021", "0023", "0024"]);

    await user.click(screen.getByRole("button", { name: "Ordenar por ID" }));
    expect(rows()).toEqual(["0024", "0023", "0021", "0013", "0001"]);

    await user.click(screen.getByRole("button", { name: "Ordenar por nombre y apellidos" }));
    const namesAsc = within(table)
      .getAllByRole("row")
      .slice(1)
      .map((row) => within(row).getAllByRole("cell")[2]?.textContent);
    expect(namesAsc?.[0]).toBe("Federica Martín");
  });

  it("has an accessible, keyboard-focusable row for each user", () => {
    render(<UsersListTable society="CYC" users={sampleUsers} />);

    const row = screen.getByRole("row", { name: "Ver detalle de Paula García López" });
    expect(row.getAttribute("tabindex")).toBe("0");
  });

  it("opens the detail dialog with the right employee on row click", async () => {
    const user = userEvent.setup();
    render(<UsersListTable society="CYC" users={sampleUsers} />);

    await user.click(screen.getByRole("row", { name: "Ver detalle de Paula García López" }));

    await waitFor(() => expect(mockedDetailAction).toHaveBeenCalledWith("0001"));
    expect(screen.getByRole("dialog")).toBeTruthy();
  });

  it("opens the detail dialog with Enter on a focused row", async () => {
    const user = userEvent.setup();
    render(<UsersListTable society="CYC" users={sampleUsers} />);

    screen.getByRole("row", { name: "Ver detalle de Mariana Ruiz Soto" }).focus();
    await user.keyboard("{Enter}");

    await waitFor(() => expect(mockedDetailAction).toHaveBeenCalledWith("0013"));
  });

  it("opens the detail dialog with Space on a focused row", async () => {
    const user = userEvent.setup();
    render(<UsersListTable society="CYC" users={sampleUsers} />);

    screen.getByRole("row", { name: "Ver detalle de Mariana Ruiz Soto" }).focus();
    await user.keyboard(" ");

    await waitFor(() => expect(mockedDetailAction).toHaveBeenCalledWith("0013"));
  });

  it("does not open the dialog for unrelated keys", async () => {
    const user = userEvent.setup();
    render(<UsersListTable society="CYC" users={sampleUsers} />);

    screen.getByRole("row", { name: "Ver detalle de Paula García López" }).focus();
    await user.keyboard("{Tab}");

    expect(mockedDetailAction).not.toHaveBeenCalled();
  });
});
