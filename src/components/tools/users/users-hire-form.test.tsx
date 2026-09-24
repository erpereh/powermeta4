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
import type { HireCatalogState } from "@/lib/meta4/hire/catalogs";
import { UsersHireForm } from "./users-hire-form";

const launchHire = vi.mocked(launchMeta4HireAction);

const CATALOGS: HireCatalogState = {
  status: "ready",
  society: "CYC",
  catalogs: {
    currency: [
      { id: "EUR", name: "Euro" },
      { id: "USD", name: "Dolar" },
    ],
    paymentType: [
      { id: "2", name: "Cheque" },
      { id: "4", name: "Transferencia Bancaria" },
    ],
    companyBank: [
      {
        id: "0001",
        name: "0001 - Crédito y Caución S.A.",
        detail: "ES31 0182 3999 3100 0002 7755",
      },
      { id: "0003", name: "0003 ACYC_ES - ACYC España" },
    ],
    agreement: [{ id: "0001", name: "Convenio de Empresa" }],
    adjustmentType: [
      { id: "0", name: "Ninguno" },
      { id: "1", name: "A bruto" },
    ],
    salaryType: [{ id: "1", name: "Mensual" }],
    union: [{ id: "UGT", name: "Unión General de Trabajadores" }],
    irpfType: [{ id: "NAC", name: "Nacional" }],
    perceptionKey: [{ id: "A", name: "Empleados por cuenta ajena" }],
    referenceModelWeek: [
      { id: "001/1", name: "Logística", detail: "Semana 004" },
      { id: "001/2", name: "Logística", detail: "Semana 005" },
    ],
    variableCompensationMode: [{ id: "1", name: "Modelo CYC" }],
    tc1Header: [{ id: "0000", name: "Grupos sin Cotizaciones", detail: "20006589560" }],
    tariffGroup: [{ id: "1", name: "Ingenieros y licenciados" }],
    ssOccupation: [{ id: "a", name: "Personal en trabajos exclusivos de oficina" }],
    ssAgreement: [{ id: "0000", name: "Sin Convenio" }],
    contract: [
      { id: "100/100", name: "Ordinario Indefinido", detail: "Ordinario indefinido tp completo" },
      {
        id: "100/100A",
        name: "Ordinario Indefinido",
        detail: "Contrato Mujer Reincorporada Indef",
      },
    ],
    laborRelation: [{ id: "0100", name: "Personal de alta dirección" }],
    reductionReason: [{ id: "001", name: "Cuidado de menor" }],
    substitutionCause: [{ id: "1", name: "Sustitución por Excedencia" }],
    unemploymentCondition: [{ id: "1", name: "Desempleado inscrito en la Oficina de Empleo." }],
    specialLaborRelation: [{ id: "100", name: "Personal de Alta Dirección" }],
    socialExclusion: [{ id: "1", name: "Exclusión social" }],
    documentType: [
      { id: "1", name: "NIF" },
      { id: "2", name: "Pasaporte" },
    ],
    country: [{ id: "724", name: "España", detail: "ES" }],
    nationality: [{ id: "724", name: "Española", detail: "España" }],
    community: [
      { id: "724/13", name: "Madrid", detail: "España" },
      { id: "724/09", name: "Cataluña", detail: "España" },
    ],
    province: [
      { id: "724/13/28", name: "Madrid", detail: "Madrid · España" },
      { id: "724/09/08", name: "Barcelona", detail: "Cataluña · España" },
    ],
    place: [],
    gender: [{ id: "2", name: "Mujer" }],
    maritalStatus: [{ id: "01", name: "Soltero/a" }],
    atradiusJob: [{ id: "0000", name: "Sin datos" }],
    atradiusCategory: [{ id: "00", name: "Sin datos" }],
    department: [{ id: "1001", name: "1001-295-Local Sales Costs 1-BRA" }],
    locationType: [{ id: "1", name: "Domicilio" }],
    roadType: [{ id: "CL", name: "Calle" }],
    legalEntity: [
      { id: "ACYC_ES", name: "ACYC España" },
      { id: "ACYC_PT", name: "ACYC Portugal" },
    ],
    job: [{ id: "GR_ACAN", name: "Actuarial Analyst" }],
    position: [{ id: "POS01", name: "Analista", detail: "CFO · Actuarial Analyst" }],
    workUnit: [{ id: "00", name: "Pendiente de definir" }],
    workLocation: [{ id: "724", name: "España", detail: "País" }],
    category: [{ id: "I1", name: "Categoría I1" }],
    costCenter: [{ id: "000000", name: "Sin Centro de Costo" }],
    startReason: [{ id: "001", name: "Nueva Alta" }],
    structure: [{ id: "0", name: "Empleado" }],
    functionalWorkCenter: [{ id: "O_CEN1", name: "Oficinas Centrales", detail: "Madrid" }],
  },
};

const chooseOption = async (
  user: ReturnType<typeof userEvent.setup>,
  combobox: string,
  option: RegExp,
) => {
  await user.click(screen.getByRole("combobox", { name: combobox }));
  await user.click(screen.getByRole("option", { name: option }));
};

const PLACES = [
  { id: "724/13/28/28079", name: "MADRID", detail: "Madrid · Madrid · España" },
  { id: "724/09/08/08019", name: "BARCELONA", detail: "Barcelona · Cataluña · España" },
];

beforeAll(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: string) => {
      const query = new URL(input, "http://localhost").searchParams.get("q") ?? "";
      const data = PLACES.filter((place) => place.name.includes(query.toUpperCase()));
      return new Response(JSON.stringify({ ok: true, data }), { status: 200 });
    }),
  );
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
    documentType?: RegExp;
    documentNumber: string;
    email: string;
    hireDate: string;
  },
) => {
  await user.click(screen.getByRole("tab", { name: "Organización" }));
  await chooseOption(user, "ID Empresa", /ACYC España/);
  await chooseOption(user, "ID Unidad organizativa", /Pendiente de definir/);
  await chooseOption(user, "ID Lugar trabajo", /España/);
  await chooseOption(user, "Categoría", /Categoría I1/);
  await chooseOption(user, "ID Motivo inicio", /Nueva Alta/);
  await chooseOption(user, "Id Estructura", /Empleado/);
  await chooseOption(user, "Centro de Trabajo Funcional", /Oficinas Centrales/);
  await user.click(screen.getByRole("tab", { name: "Seguridad Social" }));
  await chooseOption(user, "ID Cabecera TC1", /Grupos sin Cotizaciones/);
  await chooseOption(user, "ID Grupo de tarifa", /Ingenieros/);
  await user.click(screen.getByRole("button", { name: "Datos generales del contrato" }));
  await chooseOption(user, "ID Contrato legal", /Reincorporada/);
  await user.click(screen.getByRole("tab", { name: "Nómina" }));
  await chooseOption(user, "ID Convenio", /Convenio de Empresa/);
  await chooseOption(user, "Tipo modalidad Variable", /Modelo CYC/);
  await chooseOption(user, "ID Tipo de ajuste", /Ninguno/);
  await chooseOption(user, "ID Tipo salario", /Mensual/);
  await user.click(screen.getByRole("button", { name: "Datos para el IRPF" }));
  await chooseOption(user, "ID Tipo del IRPF", /Nacional/);
  await chooseOption(user, "ID Clave percepción", /cuenta ajena/);
  await user.click(screen.getByRole("tab", { name: "Datos de pago" }));
  await chooseOption(user, "ID Moneda", /Euro/);
  await chooseOption(user, "ID Tipo pago", /Transferencia/);
  await chooseOption(user, "ID Banco empresa", /Crédito y Caución/);
  await user.click(screen.getByRole("tab", { name: "Datos personales" }));
  fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: values.firstName } });
  fireEvent.change(screen.getByLabelText("Primer apellido"), {
    target: { value: values.lastName1 },
  });
  if (values.lastName2) {
    fireEvent.change(screen.getByLabelText("2º apellido"), {
      target: { value: values.lastName2 },
    });
  }
  await chooseOption(user, "ID Tipo documento", values.documentType ?? /NIF/);
  await chooseOption(user, "ID Estado civil", /Soltero/);
  fireEvent.change(screen.getByLabelText("Núm. de documento"), {
    target: { value: values.documentNumber },
  });
  fireEvent.change(screen.getByLabelText("Fecha de alta"), { target: { value: values.hireDate } });
  await user.click(screen.getByRole("button", { name: "Información Atradius" }));
  await chooseOption(user, "ID Atradius Job Code", /Sin datos/);
  await chooseOption(user, "ID Categoría Atradius", /Sin datos/);
  await user.click(screen.getByRole("button", { name: "Dirección" }));
  await chooseOption(user, "ID Tipo localización", /Domicilio/);
  await chooseOption(user, "ID Tipo de vía", /Calle/);
  await user.type(screen.getByRole("combobox", { name: "ID Población" }), "madr");
  await user.click(await screen.findByRole("option", { name: /MADRID/ }));
  await user.click(screen.getByRole("button", { name: "Contactos" }));
  fireEvent.change(screen.getByLabelText("Correo electrónico"), {
    target: { value: values.email },
  });
};

describe("UsersHireForm", () => {
  it("starts with Persona 1 expanded", () => {
    render(<UsersHireForm catalogs={CATALOGS} />);
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
    ).toHaveLength(38);
    expect(HIRE_FIELD_META.email.peopleNet).toBe("unmarked");
    expect(HIRE_FIELD_META.hireDate.peopleNet).toBe("not-shown");
    expect(HIRE_FIELD_META.email.requiredForCurrentHire).toBe(true);
    expect(HIRE_FIELD_META.hireDate.requiredForCurrentHire).toBe(true);

    render(<UsersHireForm catalogs={CATALOGS} />);
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

  it("exposes only active branch values for future mappings and only connected fields for sending", () => {
    const draft = createHirePersonDraft(1);
    draft.current.firstName = "Nuria";
    draft.current.job = "JOB";
    draft.pendingValues = {
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
      issuingCountry: "",
      nationality: "",
      birthProvince: "",
      birthCountry: "",
      gender: "",
      maritalStatus: "",
      atradiusJobCode: "",
      atradiusCategory: "",
      locationType: "",
      roadType: "",
      city: "",
      province: "",
      community: "",
      country: "",
      legalEntity: "",
      job: "JOB",
      position: "",
      workUnit: "",
      workLocation: "",
      category: "",
      startReason: "",
      structure: "",
      functionalWorkCenter: "",
      tc1Header: "",
      tariffGroup: "",
      ssOccupation: "",
      ssAgreement: "",
      legalContract: "",
      internalContract: "",
      laborRelation: "",
      reductionReason: "",
      substitutionCause: "",
      unemploymentCondition: "",
      specialLaborRelation: "",
      socialExclusion: "",
      payrollAgreement: "",
      adjustmentType: "",
      salaryType: "",
      payrollCurrency: "",
      union: "",
      irpfType: "",
      perceptionKey: "",
      variableCompensationMode: "",
      paymentCurrency: "",
      paymentType: "",
      companyBank: "",
      accountCurrency: "",
    });
  });

  it("lists PeopleNet payment catalogs by ID and name and keeps the name in the field", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);
    await user.click(screen.getByRole("tab", { name: "Datos de pago" }));

    await user.click(screen.getByRole("combobox", { name: "ID Banco empresa" }));
    const options = screen.getAllByRole("option").map((option) => option.textContent);
    expect(options).toEqual([
      "00010001 - Crédito y Caución S.A.ES31 0182 3999 3100 0002 7755",
      "00030003 ACYC_ES - ACYC España",
    ]);
    await user.type(screen.getByRole("combobox", { name: "ID Banco empresa" }), "espana");
    expect(screen.getAllByRole("option")).toHaveLength(1);
    await user.click(screen.getByRole("option", { name: /ACYC España/ }));
    expect(
      (screen.getByRole("combobox", { name: "ID Banco empresa" }) as HTMLInputElement).value,
    ).toBe("0003 ACYC_ES - ACYC España");
  });

  it("reuses the currency catalog for the optional account currency", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);
    await user.click(screen.getByRole("tab", { name: "Datos de pago" }));
    await user.click(screen.getByRole("button", { name: "Datos bancarios de la persona" }));

    const accountCurrency = screen.getByRole("combobox", { name: "ID Moneda" });
    expect(accountCurrency.getAttribute("aria-required")).toBe("false");
    await user.click(accountCurrency);
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "EUREuro",
      "USDDolar",
    ]);
    await user.click(screen.getByRole("option", { name: /Dolar/ }));
    expect((accountCurrency as HTMLInputElement).value).toBe("Dolar");

    await user.click(screen.getByRole("button", { name: "Quitar ID Moneda" }));
    expect((accountCurrency as HTMLInputElement).value).toBe("");
    expect(screen.queryByRole("button", { name: "Quitar ID Moneda" })).toBeNull();
  });

  it("fills payroll catalogs and keeps the reference model out of the payload", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);
    await user.click(screen.getByRole("tab", { name: "Nómina" }));

    const agreement = screen.getByRole("combobox", { name: "ID Convenio" });
    expect(agreement.getAttribute("aria-required")).toBe("true");
    await user.click(agreement);
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "0001Convenio de Empresa",
    ]);
    await user.click(screen.getByRole("option", { name: /Convenio de Empresa/ }));
    expect((agreement as HTMLInputElement).value).toBe("Convenio de Empresa");
    expect(
      screen.getByRole("combobox", { name: "ID Sindicato" }).getAttribute("aria-required"),
    ).toBe("false");

    await user.click(screen.getByRole("button", { name: "Tiempo teórico" }));
    await user.click(screen.getByRole("combobox", { name: "ID Modelo/Semana de referencia" }));
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "001/1LogísticaSemana 004",
      "001/2LogísticaSemana 005",
    ]);
    await user.click(screen.getByRole("option", { name: /Semana 005/ }));
    await user.click(screen.getByRole("button", { name: "Añadir persona" }));
    expect(screen.getByRole("alert").textContent).toMatch(/obligatorio/);
  });

  it("picks legal and internal contract as one PeopleNet pair", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);
    await user.click(screen.getByRole("tab", { name: "Seguridad Social" }));
    await user.click(screen.getByRole("button", { name: "Datos generales del contrato" }));

    await user.click(screen.getByRole("combobox", { name: "ID Contrato legal" }));
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "100/100Ordinario IndefinidoOrdinario indefinido tp completo",
      "100/100AOrdinario IndefinidoContrato Mujer Reincorporada Indef",
    ]);
    await user.click(screen.getByRole("option", { name: /Reincorporada/ }));
    expect(
      (screen.getByRole("combobox", { name: "ID Contrato legal" }) as HTMLInputElement).value,
    ).toBe("Ordinario Indefinido");
    expect(inputValue("ID Contrato interno")).toBe("100A · Contrato Mujer Reincorporada Indef");
  });

  it("searches Población and fills province, community and country from it", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);
    await user.click(screen.getByRole("button", { name: "Dirección" }));
    const place = screen.getByRole("combobox", { name: "ID Población" });
    await user.type(place, "barc");
    const option = await screen.findByRole("option", { name: /BARCELONA/ });
    expect(option.textContent).toBe("08019BARCELONABarcelona · Cataluña · España");
    await user.click(option);

    const value = (name: string) =>
      (screen.getByRole("combobox", { name }) as HTMLInputElement).value;
    expect(value("ID Población")).toBe("BARCELONA");
    expect(value("ID Provincia")).toBe("Barcelona");
    expect(value("ID Comunidad")).toBe("Cataluña");
    expect(value("ID País")).toBe("España");

    await user.click(screen.getByRole("combobox", { name: "ID Provincia" }));
    await user.click(screen.getByRole("option", { name: /Madrid · España/ }));
    expect(value("ID Población")).toBe("");
    expect(value("ID Comunidad")).toBe("Madrid");
  });

  it("shows partial schedule choices only for Jornada parcial", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);
    await user.click(screen.getByRole("tab", { name: "Seguridad Social" }));
    await user.click(screen.getByRole("button", { name: "Datos generales del contrato" }));
    expect(screen.queryByRole("combobox", { name: "Tipo de horas (condicional)" })).toBeNull();

    await user.click(screen.getByRole("radio", { name: "Jornada parcial" }));
    await user.click(screen.getByRole("combobox", { name: "Tipo de horas (condicional)" }));
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "1Semanales",
      "2Mensuales",
      "3Anuales",
    ]);
    await user.click(screen.getByRole("option", { name: /Mensuales/ }));
    await user.click(
      screen.getByRole("combobox", { name: "Tipo de jornada parcial (condicional)" }),
    );
    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "RRegular",
      "IIrregular",
    ]);
  });

  it("sends the job or the position only in its branch and keeps Proyecto local", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);
    await user.click(screen.getByRole("tab", { name: "Organización" }));
    expect(screen.queryByRole("combobox", { name: "ID Puesto (según rama)" })).toBeNull();

    await user.click(screen.getByRole("radio", { name: "Puesto" }));
    await chooseOption(user, "ID Puesto (según rama)", /Actuarial Analyst/);
    expect(
      (screen.getByRole("combobox", { name: "ID Puesto (según rama)" }) as HTMLInputElement).value,
    ).toBe("Actuarial Analyst");
    await chooseOption(user, "Proyecto", /Sin Centro de Costo/);

    const draft = createHirePersonDraft(1);
    draft.current.job = "GR_ACAN";
    expect(toHirePersonInput(draft).job).toBe("");
    draft.branches.positionChoice = "job";
    expect(toHirePersonInput(draft).job).toBe("GR_ACAN");

    await user.click(screen.getByRole("radio", { name: "Posición" }));
    await chooseOption(user, "ID Posición (según rama)", /Analista/);
    draft.current.position = "POS01";
    expect(toHirePersonInput(draft).position).toBe("");
    draft.branches.positionChoice = "position";
    expect(toHirePersonInput(draft)).toMatchObject({ job: "", position: "POS01" });
  });

  it("blocks payment catalogs when PeopleNet is unavailable", async () => {
    const user = userEvent.setup({ delay: null });
    render(
      <UsersHireForm
        catalogs={{
          status: "unavailable",
          message: "No se han podido cargar los catálogos de PeopleNet.",
        }}
      />,
    );
    await user.click(screen.getByRole("tab", { name: "Datos de pago" }));
    expect(screen.getByText("No se han podido cargar los catálogos de PeopleNet.")).toBeTruthy();
    const currency = screen.getByRole("combobox", { name: "ID Moneda" }) as HTMLInputElement;
    expect(currency.disabled).toBe(true);
    expect(currency.placeholder).toBe("Catálogo no disponible");
  });

  it("renders every inventoried field in its PeopleNet section and keeps catalogs visibly pending", async () => {
    const user = userEvent.setup({ delay: null });
    const { container } = render(<UsersHireForm catalogs={CATALOGS} />);
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

    await user.click(screen.getByRole("tab", { name: "Seguridad Social" }));
    collect();
    await user.click(screen.getByRole("radio", { name: "Con Núm. S.S. asignado" }));
    collect();
    await user.click(screen.getByRole("button", { name: "Datos generales del contrato" }));
    await user.click(screen.getByRole("radio", { name: "Jornada parcial" }));
    collect();
    for (const title of [
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
    const { container } = render(<UsersHireForm catalogs={CATALOGS} />);
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
    const { container } = render(<UsersHireForm catalogs={CATALOGS} />);
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
    const { container } = render(<UsersHireForm catalogs={CATALOGS} />);
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
    expect(screen.queryByLabelText("% Jornada parcial (condicional)")).toBeNull();
    expect(screen.queryByRole("combobox", { name: "Tipo de horas (condicional)" })).toBeNull();
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
    render(<UsersHireForm catalogs={CATALOGS} />);

    await user.click(screen.getByRole("button", { name: "Añadir persona" }));

    expect(screen.getByRole("alert").textContent).toMatch(/obligatorio/i);
    expect(screen.queryByText("Persona 2")).toBeNull();
    expect(launchHire).not.toHaveBeenCalled();
  });

  it("collapses a valid person and expands the next empty one", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);

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
  }, 60_000);

  it("restores collapsed values when editing and keeps later people", async () => {
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);

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
  }, 60_000);

  it("removes a collapsed person and submits every remaining person", async () => {
    launchHire.mockResolvedValue({
      ok: true,
      data: { personCount: 2, fileName: "Hire_user_2026-09-22_11-12-34.xls" },
    });
    const user = userEvent.setup({ delay: null });
    render(<UsersHireForm catalogs={CATALOGS} />);

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
        documentType: "1",
        documentNumber: "33333333P",
        email: "nuria@example.test",
        hireDate: "2026-10-04",
        issuingCountry: "",
        nationality: "",
        birthProvince: "",
        birthCountry: "",
        gender: "",
        maritalStatus: "01",
        atradiusJobCode: "0000",
        atradiusCategory: "00",
        locationType: "1",
        roadType: "CL",
        city: "724/13/28/28079",
        province: "724/13/28",
        community: "724/13",
        country: "724",
        legalEntity: "ACYC_ES",
        job: "",
        position: "",
        workUnit: "00",
        workLocation: "724",
        category: "I1",
        startReason: "001",
        structure: "0",
        functionalWorkCenter: "O_CEN1",
        tc1Header: "0000",
        tariffGroup: "1",
        ssOccupation: "",
        ssAgreement: "",
        legalContract: "100",
        internalContract: "100A",
        laborRelation: "",
        reductionReason: "",
        substitutionCause: "",
        unemploymentCondition: "",
        specialLaborRelation: "",
        socialExclusion: "",
        payrollAgreement: "0001",
        adjustmentType: "0",
        salaryType: "1",
        payrollCurrency: "",
        union: "",
        irpfType: "NAC",
        perceptionKey: "A",
        variableCompensationMode: "1",
        paymentCurrency: "EUR",
        paymentType: "4",
        companyBank: "0001",
        accountCurrency: "",
      },
      {
        firstName: "Luis",
        lastName1: "Martín",
        lastName2: "",
        documentType: "1",
        documentNumber: "11111111H",
        email: "luis@example.test",
        hireDate: "2026-10-02",
        issuingCountry: "",
        nationality: "",
        birthProvince: "",
        birthCountry: "",
        gender: "",
        maritalStatus: "01",
        atradiusJobCode: "0000",
        atradiusCategory: "00",
        locationType: "1",
        roadType: "CL",
        city: "724/13/28/28079",
        province: "724/13/28",
        community: "724/13",
        country: "724",
        legalEntity: "ACYC_ES",
        job: "",
        position: "",
        workUnit: "00",
        workLocation: "724",
        category: "I1",
        startReason: "001",
        structure: "0",
        functionalWorkCenter: "O_CEN1",
        tc1Header: "0000",
        tariffGroup: "1",
        ssOccupation: "",
        ssAgreement: "",
        legalContract: "100",
        internalContract: "100A",
        laborRelation: "",
        reductionReason: "",
        substitutionCause: "",
        unemploymentCondition: "",
        specialLaborRelation: "",
        socialExclusion: "",
        payrollAgreement: "0001",
        adjustmentType: "0",
        salaryType: "1",
        payrollCurrency: "",
        union: "",
        irpfType: "NAC",
        perceptionKey: "A",
        variableCompensationMode: "1",
        paymentCurrency: "EUR",
        paymentType: "4",
        companyBank: "0001",
        accountCurrency: "",
      },
    ]);
  }, 90_000);
});
