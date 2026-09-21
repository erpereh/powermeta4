/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/app/actions/meta4-hire", () => ({
  launchMeta4HireAction: vi.fn(),
}));

import { launchMeta4HireAction } from "@/app/actions/meta4-hire";
import { UsersHireForm } from "./users-hire-form";

const launchHire = vi.mocked(launchMeta4HireAction);

afterEach(() => {
  cleanup();
  launchHire.mockReset();
});

const fillRequired = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByLabelText("Nombre"), "Ana");
  await user.type(screen.getByLabelText("Primer apellido"), "López");
  await user.type(screen.getByLabelText("Tipo de documento"), "DNI");
  await user.type(screen.getByLabelText("Número de documento"), "00000000T");
  await user.type(screen.getByLabelText("Correo"), "ana@example.test");
  await user.type(screen.getByLabelText("Fecha de alta"), "2026-10-01");
};

describe("UsersHireForm", () => {
  it("adds and removes people and asks for confirmation before submit", async () => {
    launchHire.mockResolvedValue({ ok: true, data: { personCount: 1 } });
    const user = userEvent.setup();
    render(<UsersHireForm />);

    expect(screen.getByText("Persona 1")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Añadir persona" }));
    expect(screen.getByText("Persona 2")).toBeTruthy();
    await user.click(screen.getByRole("button", { name: "Eliminar persona 2" }));
    expect(screen.queryByText("Persona 2")).toBeNull();

    await user.click(screen.getByRole("button", { name: "Lanzar alta" }));
    expect(screen.getByRole("alert").textContent).toMatch(/obligatorio/i);
    expect(launchHire).not.toHaveBeenCalled();

    await fillRequired(user);
    await user.click(screen.getByRole("button", { name: "Lanzar alta" }));
    expect(screen.getByText("Se van a procesar 1 personas en Meta4")).toBeTruthy();
    expect(launchHire).not.toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Confirmar" }));
    expect(launchHire).toHaveBeenCalledTimes(1);
  });
});
