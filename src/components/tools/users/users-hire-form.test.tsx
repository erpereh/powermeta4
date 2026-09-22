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

const inputValue = (label: string): string =>
  (screen.getByLabelText(label) as HTMLInputElement).value;

const fillRequired = async (
  user: ReturnType<typeof userEvent.setup>,
  values: {
    firstName: string;
    lastName1: string;
    lastName2?: string;
    documentType?: string;
    documentNumber: string;
    email: string;
    hireDate: string;
  },
) => {
  await user.type(screen.getByLabelText("Nombre"), values.firstName);
  await user.type(screen.getByLabelText("Primer apellido"), values.lastName1);
  if (values.lastName2) {
    await user.type(screen.getByLabelText("Segundo apellido (opcional)"), values.lastName2);
  }
  await user.type(screen.getByLabelText("Tipo de documento"), values.documentType ?? "DNI");
  await user.type(screen.getByLabelText("Número de documento"), values.documentNumber);
  await user.type(screen.getByLabelText("Correo"), values.email);
  await user.type(screen.getByLabelText("Fecha de alta"), values.hireDate);
};

describe("UsersHireForm", () => {
  it("starts with Persona 1 expanded", () => {
    render(<UsersHireForm />);
    expect(screen.getByText("Persona 1")).toBeTruthy();
    expect(screen.getByLabelText("Nombre")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Editar persona 1" })).toBeNull();
  });

  it("does not add another person when the expanded one is invalid", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm />);

    await user.click(screen.getByRole("button", { name: "Añadir persona" }));

    expect(screen.getByRole("alert").textContent).toMatch(/obligatorio/i);
    expect(screen.queryByText("Persona 2")).toBeNull();
    expect(launchHire).not.toHaveBeenCalled();
  });

  it("collapses a valid person and expands the next empty one", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm />);

    await fillRequired(user, {
      firstName: "Ana",
      lastName1: "López",
      lastName2: "Ruiz",
      documentNumber: "00000000T",
      email: "ana@example.test",
      hireDate: "2026-10-01",
    });
    await user.click(screen.getByRole("button", { name: "Añadir persona" }));

    expect(screen.getByText("Persona 1")).toBeTruthy();
    expect(screen.getByText("Persona 2")).toBeTruthy();
    expect(screen.getByText("Ana López Ruiz")).toBeTruthy();
    expect(screen.getByText("00000000T · ana@example.test")).toBeTruthy();
    expect(inputValue("Nombre")).toBe("");
    expect(screen.getByRole("button", { name: "Editar persona 1" })).toBeTruthy();
  });

  it("restores collapsed values when editing and keeps later people", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm />);

    await fillRequired(user, {
      firstName: "Ana",
      lastName1: "López",
      documentNumber: "00000000T",
      email: "ana@example.test",
      hireDate: "2026-10-01",
    });
    await user.click(screen.getByRole("button", { name: "Añadir persona" }));
    await fillRequired(user, {
      firstName: "Luis",
      lastName1: "Martín",
      documentNumber: "11111111H",
      email: "luis@example.test",
      hireDate: "2026-10-02",
    });
    await user.click(screen.getByRole("button", { name: "Editar persona 1" }));

    expect(inputValue("Nombre")).toBe("Ana");
    expect(inputValue("Primer apellido")).toBe("López");
    expect(inputValue("Número de documento")).toBe("00000000T");
    expect(inputValue("Correo")).toBe("ana@example.test");
    expect(screen.getByText("Luis Martín")).toBeTruthy();
    expect(screen.getByText("11111111H · luis@example.test")).toBeTruthy();
  });

  it("removes a collapsed person and submits every remaining person", async () => {
    launchHire.mockResolvedValue({
      ok: true,
      data: { personCount: 2, fileName: "Hire_user_2026-09-22_11-12-34.xls" },
    });
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm />);

    await fillRequired(user, {
      firstName: "Ana",
      lastName1: "López",
      documentNumber: "00000000T",
      email: "ana@example.test",
      hireDate: "2026-10-01",
    });
    await user.click(screen.getByRole("button", { name: "Añadir persona" }));
    await user.click(screen.getByRole("button", { name: "Eliminar persona 1" }));

    expect(screen.queryByText("Ana López")).toBeNull();
    expect(screen.getByText("Persona 1")).toBeTruthy();
    expect(screen.queryByText("Persona 2")).toBeNull();
    expect(inputValue("Nombre")).toBe("");

    await fillRequired(user, {
      firstName: "Nuria",
      lastName1: "Gil",
      documentNumber: "33333333P",
      email: "nuria@example.test",
      hireDate: "2026-10-04",
    });
    await user.click(screen.getByRole("button", { name: "Añadir persona" }));
    await fillRequired(user, {
      firstName: "Luis",
      lastName1: "Martín",
      documentNumber: "11111111H",
      email: "luis@example.test",
      hireDate: "2026-10-02",
    });

    await user.click(screen.getByRole("button", { name: "Lanzar alta" }));
    expect(screen.getByText("Se van a procesar 2 personas en Meta4")).toBeTruthy();
    expect(launchHire).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Confirmar" }));

    expect(launchHire).toHaveBeenCalledTimes(1);
    expect((await screen.findByRole("status")).textContent).toBe(
      "Alta enviada correctamente · Hire_user_2026-09-22_11-12-34.xls",
    );
    expect(launchHire.mock.calls.at(0)?.at(0)).toEqual([
      expect.objectContaining({
        firstName: "Nuria",
        lastName1: "Gil",
        documentNumber: "33333333P",
        email: "nuria@example.test",
      }),
      expect.objectContaining({
        firstName: "Luis",
        lastName1: "Martín",
        documentNumber: "11111111H",
        email: "luis@example.test",
      }),
    ]);
  }, 15_000);
});
