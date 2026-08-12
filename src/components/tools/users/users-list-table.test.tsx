/** @vitest-environment jsdom */

import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { UsersListTable } from "@/components/tools/users/users-list-table";
import type { Meta4UserListItem } from "@/lib/meta4/users/types";

afterEach(() => {
  cleanup();
});

const buildUsers = (count: number): Meta4UserListItem[] =>
  Array.from({ length: count }, (_, index) => {
    const id = String(index + 1).padStart(4, "0");
    return { id, fullName: `Usuario ${id}` };
  });

const sampleUsers: Meta4UserListItem[] = [
  { id: "0001", fullName: "Paula García López" },
  { id: "0013", fullName: "Mariana Ruiz Soto" },
  { id: "0021", fullName: "Federica Martín" },
  { id: "0023", fullName: "Raúl Pérez Núñez" },
  { id: "0024", fullName: "María Sánchez Díaz" },
];

describe("UsersListTable", () => {
  it("renders society copy, columns and rows", () => {
    render(<UsersListTable society="CYC" users={sampleUsers} />);

    expect(screen.getByText("Usuarios")).toBeTruthy();
    expect(screen.getByText("CYC")).toBeTruthy();
    expect(screen.getByText("Todos los usuarios disponibles en CYC.")).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: "ID" })).toBeTruthy();
    expect(screen.getByRole("columnheader", { name: "Nombre y apellidos" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ordenar por ID" })).toBeTruthy();
    expect(screen.getByRole("button", { name: "Ordenar por nombre y apellidos" })).toBeTruthy();
    expect(screen.getByText("Paula García López")).toBeTruthy();
    expect(screen.getByText("0001")).toBeTruthy();
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
    const search = screen.getByRole("searchbox", { name: "Buscar por ID o nombre" });

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
      .map((row) => within(row).getAllByRole("cell")[1]?.textContent);
    expect(namesAsc?.[0]).toBe("Federica Martín");
  });
});
