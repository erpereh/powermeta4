/** @vitest-environment jsdom */

import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("@/app/actions/meta4-hire", () => ({
  launchMeta4HireAction: vi.fn(),
}));

import { launchMeta4HireAction } from "@/app/actions/meta4-hire";
import {
  createHirePersonDraft,
  selectActiveBranchValues,
  toHirePersonInput,
} from "./hire-form/draft";
import { HIRE_FIELD_META, hireFieldLabelClass } from "./hire-form/field-metadata";
import { UsersHireForm } from "./users-hire-form";

const launchHire = vi.mocked(launchMeta4HireAction);

beforeAll(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

afterAll(() => vi.unstubAllGlobals());

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
  fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: values.firstName } });
  fireEvent.change(screen.getByLabelText("Primer apellido"), {
    target: { value: values.lastName1 },
  });
  if (values.lastName2) {
    fireEvent.change(screen.getByLabelText("2º apellido"), {
      target: { value: values.lastName2 },
    });
  }
  fireEvent.change(screen.getByLabelText("ID Tipo documento"), {
    target: { value: values.documentType ?? "DNI" },
  });
  fireEvent.change(screen.getByLabelText("Núm. de documento"), {
    target: { value: values.documentNumber },
  });
  fireEvent.change(screen.getByLabelText("Fecha de alta"), { target: { value: values.hireDate } });
  await user.click(screen.getByRole("button", { name: "Contactos" }));
  fireEvent.change(screen.getByLabelText("Correo electrónico"), {
    target: { value: values.email },
  });
};

describe("UsersHireForm", () => {
  it("starts with Persona 1 expanded", () => {
    render(<UsersHireForm />);
    expect(screen.getByText("Persona 1")).toBeTruthy();
    expect(screen.getByLabelText("Nombre")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Editar persona 1" })).toBeNull();
  });

  it("distinguishes the 37 PeopleNet requirements from temporary send requirements", async () => {
    const fields = Object.values(HIRE_FIELD_META);
    expect(fields).toHaveLength(113); // 112 PeopleNet rows and the current hire date.
    expect(
      fields.filter(
        (field) => field.peopleNet === "required" || field.peopleNet === "conditional-required",
      ),
    ).toHaveLength(37);
    expect(HIRE_FIELD_META.email.peopleNet).toBe("unmarked");
    expect(HIRE_FIELD_META.hireDate.peopleNet).toBe("not-shown");
    expect(HIRE_FIELD_META.email.requiredForCurrentHire).toBe(true);
    expect(HIRE_FIELD_META.hireDate.requiredForCurrentHire).toBe(true);

    render(<UsersHireForm />);
    const hireDate = document.querySelector('[data-hire-field="hireDate"]');
    expect(hireDate?.textContent).toContain("Requerido para enviar");
    expect(hireDate?.textContent).not.toContain("*");
    expect(document.querySelector('[data-hire-field="lastName2"]')?.textContent).not.toContain(
      "opcional",
    );
    await userEvent.setup({ delay: null }).click(screen.getByRole("button", { name: "Contactos" }));
    const email = document.querySelector('[data-hire-field="email"]');
    expect(email?.textContent).toContain("Requerido para enviar");
    expect(email?.textContent).not.toContain("*");
    expect(screen.getByLabelText("Correo electrónico").hasAttribute("required")).toBe(true);
  });

  it("exposes only active branch values for future mappings and only seven current fields for sending", () => {
    const draft = createHirePersonDraft(1);
    draft.current.firstName = "Nuria";
    draft.pendingValues = {
      job: "JOB",
      position: "POSITION",
      occupationHours: "35",
      ssNumberPrefix: "28",
      partialSchedulePercent: "50",
      disabilityPercent: "25",
      iban: "ES1234",
      bankBranch: "BRANCH",
      bic: "BIC1",
    };
    draft.branches = {
      ...draft.branches,
      positionChoice: "job",
      ssNumberChoice: "unassigned",
      scheduleChoice: "full",
      disabilityChoice: "without",
      bankFormatChoice: "iban",
    };

    expect(selectActiveBranchValues(draft)).toEqual({
      position: { choice: "job", job: "JOB" },
      socialSecurityNumber: { choice: "unassigned" },
      schedule: { choice: "full" },
      disability: { choice: "without" },
      bank: { choice: "iban", iban: "ES1234", bic: "BIC1" },
    });
    expect(toHirePersonInput(draft)).toEqual({
      firstName: "Nuria",
      lastName1: "",
      lastName2: "",
      documentType: "",
      documentNumber: "",
      email: "",
      hireDate: "",
    });
  });

  it("renders every inventoried field in its PeopleNet section and keeps catalogs visibly pending", async () => {
    const user = userEvent.setup({ delay: null });
    const { container } = render(<UsersHireForm />);
    const seen = new Set<string>();
    const collect = () => {
      container.querySelectorAll<HTMLElement>("[data-hire-field]").forEach((node) => {
        const id = node.dataset.hireField;
        if (id) {
          seen.add(id);
          expect(node.getAttribute("data-peoplenet-requirement")).toBe(
            HIRE_FIELD_META[id as keyof typeof HIRE_FIELD_META].peopleNet,
          );
          const label = node.querySelector<HTMLElement>("[tabindex='0'][aria-describedby]");
          expect(label, id).not.toBeNull();
          expect(label?.className, id).toContain(
            hireFieldLabelClass(id as keyof typeof HIRE_FIELD_META),
          );
        }
      });
    };

    collect();
    for (const title of ["Información Atradius", "Contactos", "Dirección"]) {
      await user.click(screen.getByRole("button", { name: title }));
      collect();
    }
    await user.click(screen.getByRole("tab", { name: "Organización" }));
    collect();
    await user.click(screen.getByRole("radio", { name: "Puesto" }));
    collect();
    await user.click(screen.getByRole("radio", { name: "Posición" }));
    collect();
    const companyCatalog = container.querySelector<HTMLInputElement>(
      '[data-hire-field="legalEntity"] input',
    );
    expect(companyCatalog?.disabled).toBe(true);
    expect(companyCatalog?.placeholder).toBe("Catálogo pendiente");

    await user.click(screen.getByRole("tab", { name: "Seguridad Social" }));
    collect();
    await user.click(screen.getByRole("radio", { name: "Con Núm. S.S. asignado" }));
    collect();
    for (const title of [
      "Datos generales del contrato",
      "Guarda Legal y reducción especial de jornada",
      "Bonificaciones contrato",
      "Otros datos contrato",
    ]) {
      await user.click(screen.getByRole("button", { name: title }));
      collect();
    }
    await user.click(screen.getByRole("tab", { name: "Nómina" }));
    collect();
    for (const title of ["Datos para el IRPF", "Tiempo teórico"]) {
      await user.click(screen.getByRole("button", { name: title }));
      collect();
    }
    await user.click(screen.getByRole("tab", { name: "Datos de pago" }));
    collect();
    await user.click(screen.getByRole("button", { name: "Datos bancarios de la persona" }));
    collect();
    await user.click(screen.getByRole("radio", { name: "IBAN" }));
    collect();
    await user.click(screen.getByRole("radio", { name: "Otro formato" }));
    collect();

    expect([...seen].sort()).toEqual(Object.keys(HIRE_FIELD_META).sort());
  }, 20_000);

  it("shows mapped, unresolved, and UI-only tooltips from focusable labels", async () => {
    const user = userEvent.setup({ delay: null });
    const { container } = render(<UsersHireForm />);
    const labelFor = (field: keyof typeof HIRE_FIELD_META): HTMLElement => {
      const label = container.querySelector<HTMLElement>(
        `[data-hire-field="${field}"] [tabindex='0'][aria-describedby]`,
      );
      if (!label) throw new Error(`Missing focusable mapping label: ${field}`);
      return label;
    };

    const nameLabel = labelFor("firstName");
    expect(nameLabel.getAttribute("for")).toBe(screen.getByLabelText("Nombre").id);
    nameLabel.focus();
    expect((await screen.findByRole("tooltip")).textContent).toBe("STD_N_FIRST_NAME");

    const redLabel = labelFor("birthCommunity");
    const redCatalog = container.querySelector<HTMLElement>(
      '[data-hire-field="birthCommunity"] [role="combobox"]',
    );
    expect(redCatalog?.getAttribute("aria-labelledby")).toBe(redLabel.id);
    redLabel.focus();
    await waitFor(() =>
      expect(screen.getByRole("tooltip").textContent).toBe("Mapping pendiente de confirmar"),
    );

    await user.click(screen.getByRole("button", { name: "Contactos" }));
    const emailLabel = labelFor("email");
    emailLabel.focus();
    await waitFor(() =>
      expect(screen.getByRole("tooltip").textContent).toBe("STD_EMAIL / STD_EMAIL_ATRADIUS"),
    );

    await user.click(screen.getByRole("tab", { name: "Organización" }));
    const choiceLabel = labelFor("positionChoice");
    choiceLabel.focus();
    await waitFor(() =>
      expect(screen.getByRole("tooltip").textContent).toBe("Control de UI · sin mapping directo"),
    );
  });

  it("keeps checkbox labels clickable and exposes their mapping on hover", async () => {
    const user = userEvent.setup({ delay: null });
    const { container } = render(<UsersHireForm />);
    await user.click(screen.getByRole("tab", { name: "Seguridad Social" }));
    await user.click(screen.getByRole("button", { name: "Bonificaciones contrato" }));
    const field = container.querySelector<HTMLElement>('[data-hire-field="specificFic"]');
    const label = field?.querySelector<HTMLLabelElement>("label[tabindex='0']");
    const checkbox = field?.querySelector<HTMLElement>("[role='checkbox']");
    expect(label).toBeTruthy();
    expect(label?.getAttribute("for")).toBe(checkbox?.id);
    expect(checkbox?.getAttribute("aria-checked")).toBe("false");
    if (!label) throw new Error("Missing FIC label");
    await user.hover(label);
    expect((await screen.findByRole("tooltip")).textContent).toBe("Mapping pendiente de confirmar");
    await user.click(label);
    expect(checkbox?.getAttribute("aria-checked")).toBe("true");
  });

  it("retains values when switching tabs and all five conditional branches", async () => {
    const user = userEvent.setup({ delay: null });
    const { container } = render(<UsersHireForm />);
    await user.click(screen.getByRole("tab", { name: "Organización" }));
    await user.click(screen.getByRole("radio", { name: "Posición" }));
    await user.type(screen.getByLabelText("Núm. Horas"), "35");
    await user.click(screen.getByRole("radio", { name: "Puesto" }));
    await user.click(screen.getByRole("radio", { name: "Posición" }));
    expect(inputValue("Núm. Horas")).toBe("35");

    await user.click(screen.getByRole("tab", { name: "Seguridad Social" }));
    await user.click(screen.getByRole("radio", { name: "Con Núm. S.S. asignado" }));
    await user.type(screen.getByLabelText("Núm. SS, Segmento 1"), "28");
    await user.click(screen.getByRole("radio", { name: "Sin Núm. S.S. asignado" }));
    expect(container.querySelector('[data-hire-field="ssNumber"]')).toBeNull();
    await user.click(screen.getByRole("radio", { name: "Con Núm. S.S. asignado" }));
    expect(inputValue("Núm. SS, Segmento 1")).toBe("28");

    await user.click(screen.getByRole("button", { name: "Datos generales del contrato" }));
    await user.click(screen.getByRole("radio", { name: "Jornada parcial" }));
    await user.type(screen.getByLabelText("% Jornada parcial (condicional)"), "50");
    await user.click(screen.getByRole("radio", { name: "Jornada completa" }));
    expect(screen.getByLabelText("% Jornada parcial (condicional)").hasAttribute("disabled")).toBe(
      true,
    );
    await user.click(screen.getByRole("radio", { name: "Jornada parcial" }));
    expect(inputValue("% Jornada parcial (condicional)")).toBe("50");

    await user.click(screen.getByRole("button", { name: "Bonificaciones contrato" }));
    await user.click(screen.getByRole("radio", { name: "Con minusvalía" }));
    await user.type(screen.getByLabelText("% minusvalía (condicional)"), "25");
    await user.click(screen.getByRole("radio", { name: "Sin minusvalía" }));
    expect(screen.getByLabelText("% minusvalía (condicional)").hasAttribute("disabled")).toBe(true);
    await user.click(screen.getByRole("radio", { name: "Con minusvalía" }));
    expect(inputValue("% minusvalía (condicional)")).toBe("25");

    await user.click(screen.getByRole("tab", { name: "Datos de pago" }));
    await user.click(screen.getByRole("button", { name: "Datos bancarios de la persona" }));
    await user.click(screen.getByRole("radio", { name: "IBAN" }));
    await user.type(screen.getByLabelText("IBAN (condicional)"), "ES1234");
    await user.click(screen.getByRole("radio", { name: "Otro formato" }));
    await user.type(screen.getByLabelText("Sucursal bancaria (condicional)"), "Sucursal demo");
    await user.click(screen.getByRole("radio", { name: "IBAN" }));
    expect(inputValue("IBAN (condicional)")).toBe("ES1234");
    await user.click(screen.getByRole("radio", { name: "Otro formato" }));
    expect(inputValue("Sucursal bancaria (condicional)")).toBe("Sucursal demo");
    await user.click(screen.getByRole("tab", { name: "Organización" }));
    expect(inputValue("Núm. Horas")).toBe("35");
  }, 20_000);

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
    await user.type(screen.getByLabelText("Teléfono, Prefijo"), "34");
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
    expect(inputValue("Núm. de documento")).toBe("00000000T");
    await user.click(screen.getByRole("button", { name: "Contactos" }));
    expect(inputValue("Correo electrónico")).toBe("ana@example.test");
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
    await user.type(screen.getByLabelText("Teléfono, Prefijo"), "34");
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
      {
        firstName: "Nuria",
        lastName1: "Gil",
        lastName2: "",
        documentType: "DNI",
        documentNumber: "33333333P",
        email: "nuria@example.test",
        hireDate: "2026-10-04",
      },
      {
        firstName: "Luis",
        lastName1: "Martín",
        lastName2: "",
        documentType: "DNI",
        documentNumber: "11111111H",
        email: "luis@example.test",
        hireDate: "2026-10-02",
      },
    ]);
  }, 15_000);
});
