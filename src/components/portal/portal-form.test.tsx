/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";

import { PortalForm } from "@/components/portal/portal-form";
import type { FormSpec } from "@/lib/portal/types";

afterEach(() => {
  cleanup();
});

const spec: FormSpec = {
  id: "correo",
  title: "Correo personal",
  write: {
    id: "guardar",
    label: "Enviar petición",
    meta4Method: "SSE_EMAIL!SSE_PRINCIPAL.GESTION",
    pending: ["P04"],
  },
  fields: [
    { name: "EMAIL", label: "Correo", type: "email", required: true },
    { name: "OTRO", label: "Otro dato", type: "text" },
  ],
};

describe("PortalForm", () => {
  it("valida como el original y mantiene el envío bloqueado con su método Meta4", async () => {
    const user = userEvent.setup();
    render(<PortalForm spec={spec} catalogs={{ status: "ready", options: {} }} />);

    const submit = screen.getByRole("button", { name: "Enviar petición" });
    expect(submit).toHaveProperty("disabled", true);
    expect(document.body.textContent).toContain("SSE_EMAIL!SSE_PRINCIPAL.GESTION");

    await user.click(screen.getByRole("button", { name: "Comprobar datos" }));
    expect(screen.getByText(/Se han encontrado 1 error/)).toBeTruthy();
    const email = screen.getByRole("textbox", { name: /^Correo/ });
    expect(email.getAttribute("aria-invalid")).toBe("true");

    await user.type(email, "persona@empresa.es");
    await user.click(screen.getByRole("button", { name: "Comprobar datos" }));
    expect(screen.getByText("Los datos cumplen las comprobaciones del portal.")).toBeTruthy();
    expect(submit).toHaveProperty("disabled", true);
  });
});
