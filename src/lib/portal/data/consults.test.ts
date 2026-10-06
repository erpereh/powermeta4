import { beforeEach, describe, expect, it, vi } from "vitest";
import type { PortalContext } from "../context";
import { consult } from "../registry/helpers";
import { PORTAL_FEATURES } from "../registry";
import { EMPLEADO_DATOS } from "../registry/empleado-datos";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";

const mocks = vi.hoisted(() => ({ emails: vi.fn(), payments: vi.fn(), select: vi.fn() }));
vi.mock("@/lib/auth/session", () => ({ requireAuthContext: vi.fn() }));
vi.mock("../peoplenet/query", async (original) => ({
  ...(await original<typeof import("../peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
vi.mock("../context", () => ({ getPortalContext: vi.fn() }));
vi.mock("./organization", () => ({ getOwnEmails: mocks.emails, getOwnMaritalStatus: vi.fn() }));
vi.mock("./payments", () => ({ getOwnPaymentAccounts: mocks.payments }));
vi.mock("./scope", () => ({ MANAGER_SCOPE_VERIFIED: false }));
import { loadFeatureConsults, mapConsultRows } from "./consults";
const context: PortalContext = {
  mode: "meta4",
  society: "COLL",
  username: "u",
  variant: "COLL",
  identity: {
    status: "resolved",
    crossChecked: true,
    person: {
      employeeId: "001471",
      fullName: "Sintético",
      job: null,
      unit: null,
      workCenter: null,
      hireDate: null,
      managerId: null,
    },
  },
};
const feature = EMPLEADO_DATOS.find((entry) => entry.id === "empleado.datos.ficha")!;
beforeEach(() => vi.clearAllMocks());

describe("apartados independientes", () => {
  it("separa tipos de solicitud y conserva las descargas de sus filas", () => {
    const section = consult("solicitudes", "Peticiones", "SSE_ADDRESS", "list", [["TIPO", "Tipo"]]);
    if (section.kind !== "consult") throw new Error("Se esperaba consulta");
    const spec = {
      ...section.consult,
      rowFilter: { item: "TIPO", equals: ["Dirección"] },
      download: { kind: "certificate", label: "PDF" },
    } as const;
    const result = mapConsultRows(spec, [
      { TIPO: "Idioma", DOC_KEY: "ajeno" },
      { TIPO: "Dirección", DOC_KEY: "propio" },
    ]);
    expect(result.rows).toEqual([[{ label: "Tipo", value: "Dirección" }]]);
    expect(result.links).toEqual(["/api/portal/documents/certificate?k=propio"]);
  });
  it("presenta fechas y vigencias sin alterar identificadores", () => {
    const section = consult(
      "x",
      "Cuenta",
      "PAYMENT",
      "list",
      [
        ["SCO_GB_IBAN", "IBAN"],
        ["SCO_DT_START", "Inicio"],
        ["SCO_DT_END", "Fin"],
      ],
      undefined,
      "own-payment-accounts",
    );
    if (section.kind !== "consult") throw new Error("Se esperaba una consulta");
    expect(
      mapConsultRows(section.consult, [
        { SCO_GB_IBAN: "ES00123", SCO_DT_START: new Date("2026-10-05"), SCO_DT_END: "4000-01-01" },
      ]).rows[0].map((field) => field.value),
    ).toEqual(["ES00123", "05/10/2026", "Vigente"]);
  });
  it("muestra todos los campos declarados aunque no tengan valor", () => {
    const section = consult(
      "x",
      "Cuenta",
      "PAYMENT",
      "list",
      [
        ["IBAN", "IBAN"],
        ["DATE", "Inicio"],
      ],
      undefined,
      "own-payment-accounts",
    );
    if (section.kind !== "consult") throw new Error("Se esperaba una consulta");
    expect(mapConsultRows(section.consult, [{ IBAN: null, EXTRA: "no se expone" }])).toEqual({
      rows: [
        [
          { label: "IBAN", value: "No informado" },
          { label: "Inicio", value: "No informado" },
        ],
      ],
    });
  });
  it("un fallo en cuentas conserva correos y las dependencias concretas", async () => {
    mocks.payments.mockRejectedValue(new PeopleNetConfigError(["PEOPLENET_DB_HOST"]));
    mocks.emails.mockResolvedValue([
      {
        email: "synthetic@example.test",
        order: "1",
        startDate: "",
        endDate: "",
        locationTypeCode: "",
      },
    ]);
    mocks.select.mockResolvedValue([]);
    const result = await loadFeatureConsults(feature, context);
    expect(result["dossier-cyc"].status).toBe("unavailable");
    expect(result.correos.status).toBe("ok");
    expect(result.beneficiario.status).toBe("ok");
    expect(mocks.payments).toHaveBeenCalledWith("COLL", "001471");
    expect(mocks.emails).toHaveBeenCalledWith("001471");
  });
  it("no lee datos personales sin identidad ni para un responsable sin población contrastada", async () => {
    const result = await loadFeatureConsults(feature, {
      ...context,
      identity: { status: "unresolved", message: "Identidad incoherente" },
    });
    expect(result.correos.status).toBe("unavailable");
    await loadFeatureConsults({ ...feature, profile: "responsable" }, context);
    expect(mocks.emails).not.toHaveBeenCalled();
    expect(mocks.payments).not.toHaveBeenCalled();
    expect(mocks.select).not.toHaveBeenCalled();
  });
});

describe("apartados sql", () => {
  const sqlFeature = (id: string) => PORTAL_FEATURES.find((entry) => entry.id === id)!;
  const params = (call: number) => mocks.select.mock.calls[call]?.[1] as Record<string, unknown>;

  it("lee los datos propios con la sociedad y la matrícula del servidor", async () => {
    mocks.select.mockResolvedValue([{ SSP_NM_CATEGORIA: "Grupo I" }]);
    const result = await loadFeatureConsults(feature, context);
    expect(result["grupo-nivel"]).toMatchObject({
      status: "ok",
      data: { rows: [[{ label: "Grupo y nivel", value: "Grupo I" }]] },
    });
    for (const call of mocks.select.mock.calls.keys())
      expect(params(call)).toMatchObject({
        organization: { value: "COLL" },
        employeeId: { value: "001471" },
      });
  });

  it("un cambio de sociedad usa el nuevo contexto del servidor en las páginas separadas", async () => {
    mocks.select.mockResolvedValue([]);
    const page = sqlFeature("menu.empleado.datos.idiomas");
    await loadFeatureConsults(page, context);
    expect(params(0)).toMatchObject({
      organization: { value: "COLL" },
      employeeId: { value: "001471" },
    });
    mocks.select.mockClear();
    await loadFeatureConsults(page, { ...context, society: "CYC", variant: "CYC" });
    expect(params(0)).toMatchObject({
      organization: { value: "CYC" },
      employeeId: { value: "001471" },
    });
  });
  it("el equipo se calcula en la base desde la matrícula del responsable", async () => {
    mocks.select.mockResolvedValue([]);
    // La puerta del responsable se prueba aparte; aquí solo cómo se forma la consulta de equipo.
    await loadFeatureConsults(
      { ...sqlFeature("responsable.retribucion.salarios"), profile: "empleado" },
      context,
    );
    const [statement, values] = mocks.select.mock.calls[0] ?? [];
    expect(statement).toMatch(/^WITH TEAM_HR/);
    expect(statement).not.toContain("@team");
    expect(values).toMatchObject({ employeeId: { value: "001471" } });
  });

  it("los catálogos de la sociedad no reciben ninguna matrícula", async () => {
    mocks.select.mockResolvedValue([]);
    await loadFeatureConsults(sqlFeature("empleado.talento.formacion"), context);
    expect(params(0)).not.toHaveProperty("employeeId");
  });

  it("enlaza cada documento por su clave sin exponerla como dato", async () => {
    mocks.select.mockResolvedValue([
      { SCO_NM_PAY: "Julio 2026", DOC_KEY: "1|2026-07-25|004|1" },
      { SCO_NM_PAY: "Junio 2026", DOC_KEY: null },
    ]);
    const result = await loadFeatureConsults(
      sqlFeature("empleado.retribucion.recibos-pdf"),
      context,
    );
    const recibos = result.recibos;
    if (recibos?.status !== "ok") throw new Error("Se esperaban recibos");
    expect(recibos.data.links).toEqual([
      "/api/portal/documents/payslip?k=1%7C2026-07-25%7C004%7C1",
      null,
    ]);
    expect(recibos.data.rows[0].map((field) => field.value)).not.toContain("1|2026-07-25|004|1");
  });
});
