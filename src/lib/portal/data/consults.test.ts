import { beforeEach, describe, expect, it, vi } from "vitest";
import type { PortalContext } from "../context";
import { consult } from "../registry/helpers";
import { PORTAL_FEATURES } from "../registry";
import { PeopleNetConfigError } from "@/lib/peoplenet/client";

const mocks = vi.hoisted(() => ({ emails: vi.fn(), payments: vi.fn() }));
vi.mock("@/lib/auth/session", () => ({ requireAuthContext: vi.fn() }));
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
const feature = PORTAL_FEATURES.find((entry) => entry.id === "empleado.datos.ficha")!;
beforeEach(() => vi.clearAllMocks());

describe("apartados independientes", () => {
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
    const result = await loadFeatureConsults(feature, context);
    expect(result["dossier-cyc"].status).toBe("unavailable");
    expect(result.correos.status).toBe("ok");
    expect(result.beneficiario.status).toBe("unavailable");
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
  });
});
