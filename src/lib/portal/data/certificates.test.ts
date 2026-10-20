import { beforeEach, describe, expect, it, vi } from "vitest";

import type { PortalContext } from "../context";
import { CERTIFICATE_SQL } from "../registry/sql/certificates";
import { RETRIBUCION_SQL } from "../registry/sql/retribucion";
import { assertReadOnlySql } from "../peoplenet/query";

const mocks = vi.hoisted(() => ({ select: vi.fn() }));
vi.mock("../peoplenet/query", async (original) => ({
  ...(await original<typeof import("../peoplenet/query")>()),
  runPortalSelect: mocks.select,
}));
import { getCertificates } from "./certificates";

const context: PortalContext = {
  mode: "meta4",
  society: "CYC",
  variant: "CYC",
  username: "test",
  identity: {
    status: "resolved",
    crossChecked: true,
    person: {
      employeeId: "0007",
      fullName: "Persona de prueba",
      job: null,
      unit: null,
      workCenter: null,
      hireDate: null,
      managerId: null,
    },
  },
};
const today = new Date(2026, 9, 20);
const record = {
  SSP_EJERCICIO: "2025",
  STD_ID_LEG_ENT: "ACYC_ES",
  SSP_ID_TP_IRPF: "NAC",
  SSP_ID_EXE: "CERT-1",
  SSP_TIP_REG: "N",
  SSP_NIF_PERCEPTOR: "00000000T",
  SSP_CLAVE_PERCEP: "A",
  SSP_SUBCLAVE_PERCEP: "00",
  SSP_EJERCICIO_DEVENGO: "0000",
};

beforeEach(() => {
  vi.clearAllMocks();
  mocks.select.mockImplementation(
    async (statement: string, params?: Record<string, { value: unknown }>) => {
      if (statement === CERTIFICATE_SQL.periods.statement)
        return [{ STD_DT_START: new Date("2023-05-01T00:00:00Z"), STD_DT_END: null }];
      if (statement === RETRIBUCION_SQL.certificados.statement)
        return [{ ANIO: 2014, SCO_NM_DOC: "Certificado 2014", DOC_KEY: "1|3" }];
      if (statement === CERTIFICATE_SQL.perceptor.statement)
        return [{ STD_SSN: "00000000T", SCO_GB_NAME: "Ejemplo, Persona" }];
      if (statement === CERTIFICATE_SQL.records.statement)
        return [
          { ...record, SSP_ID_EXE: "EXE-1", SSP_PERCEP_INTEGRA: 99 },
          { ...record, SSP_PERCEP_INTEGRA: 1000.5, SSP_RETEN_PRACTIC: 150.25 },
          { ...record, SSP_EJERCICIO_DEVENGO: "2024", SSP_PERCEP_INTEGRA: 20 },
        ];
      if (statement === CERTIFICATE_SQL.executions.statement)
        return [
          {
            SSP_EJERCICIO: "2025",
            STD_ID_LEG_ENT: "ACYC_ES",
            SSP_ID_TP_IRPF: "NAC",
            SSP_ID_EXE: "EXE-1",
            SSP_ID_EXE_190_CERT: "CERT-1",
            SSP_ID_ESTADO_DECLARACION: 1,
            SSP_CHK_ULT_ENVIADO: 1,
            SSP_TIPO_DECLARA: "N",
          },
        ];
      if (statement === CERTIFICATE_SQL.legalEntities.statement)
        return [
          {
            STD_ID_LEG_ENT: "ACYC_ES",
            STD_N_LEG_ENT: "Empresa de Ejemplo",
            SSP_ID_LEGAL: "A00000000",
            SSP_FIRMT_CERT_HAB: "Firmante de Ejemplo",
          },
        ];
      if (statement === CERTIFICATE_SQL.places.statement)
        return [{ STD_ID_LEG_ENT: "ACYC_ES", STD_N_GEO_PLACE: "MADRID" }];
      if (statement.includes("@targetId"))
        return params?.targetId?.value === "0042"
          ? [{ EMPLEADO: "Ana Ejemplo", COMPUTA: "1" }]
          : [];
      return [];
    },
  );
});

describe("certificados de retenciones en PeopleNet", () => {
  it("solo ejecuta SELECT filtradas por sociedad y, si son propias, por matrícula", () => {
    for (const [name, query] of Object.entries(CERTIFICATE_SQL)) {
      assertReadOnlySql(query.statement);
      if (query.scope === "own") expect(query.statement).toContain("@employeeId");
      // M4SSP_CLAVE_SUBCLA es un catálogo común a las sociedades.
      if (name !== "irregularKeys") expect(query.statement).toContain("@organization");
    }
  });

  it("ofrece los años de alta y los guardados, del más reciente al más antiguo", async () => {
    const result = await getCertificates(context, { status: "latest" }, { status: "own" }, today);
    expect(result.status).toBe("ok");
    if (result.status !== "ok") return;
    expect(result.data.page.years.map((entry) => entry.year)).toEqual([2025, 2024, 2023, 2014]);
    expect(result.data.page.selectedYear).toBe(2025);
    expect(result.data.page.selection.kind).toBe("generated");
    const [certificate] = result.data.certificates;
    expect(certificate?.fields).toMatchObject({
      perceptorNif: "00000000T",
      perceptorNombre: "Ejemplo, Persona",
      pagadorNombre: "Empresa de Ejemplo",
      lugar: "MADRID",
      trabajoDinerariasIntegro: 1000.5,
      trabajoDinerariasRetenciones: 150.25,
    });
    expect(certificate?.arrears[0]).toMatchObject({ ejercicio: 2024, integro: 20 });
    expect(certificate?.signer).toBe("Firmante de Ejemplo ");
    const params = mocks.select.mock.calls[0]?.[1];
    expect(params?.organization.value).toBe("CYC");
    expect(params?.employeeId.value).toBe("0007");
  });

  it("muestra el certificado guardado cuando el original lo tiene", async () => {
    const result = await getCertificates(
      context,
      { status: "selected", year: 2014 },
      { status: "own" },
      today,
    );
    expect(result.status === "ok" && result.data.page.selection).toEqual({
      kind: "stored",
      document: { label: "Certificado 2014", href: "/api/portal/documents/certificate?k=1%7C3" },
    });
  });

  it("no genera el certificado de un año sin 190 ni inventa importes si falla la lectura", async () => {
    const empty = await getCertificates(
      context,
      { status: "selected", year: 2023 },
      { status: "own" },
      today,
    );
    expect(empty.status === "ok" && empty.data.page.selection.kind).toBe("none");
    mocks.select.mockImplementation(async (statement: string) => {
      if (statement === CERTIFICATE_SQL.records.statement) throw new Error("caído");
      if (statement === CERTIFICATE_SQL.periods.statement)
        return [{ STD_DT_START: new Date("2023-05-01T00:00:00Z"), STD_DT_END: null }];
      return [];
    });
    const failed = await getCertificates(context, { status: "latest" }, { status: "own" }, today);
    expect(failed.status === "ok" && failed.data.page.selection.kind).toBe("unavailable");
    expect(failed.status === "ok" && failed.data.certificates).toEqual([]);
  });

  it("rechaza ejercicios que no están en la lista", async () => {
    const result = await getCertificates(
      context,
      { status: "selected", year: 2019 },
      { status: "own" },
      today,
    );
    expect(result.status).toBe("error");
  });

  it("lee otra matrícula de la sociedad sin listar sus PDF guardados", async () => {
    const result = await getCertificates(
      context,
      { status: "latest" },
      { status: "team", employeeId: "0042" },
      today,
    );
    expect(result.status).toBe("ok");
    if (result.status !== "ok") return;
    expect(result.data.page.member).toEqual({ id: "0042", name: "Ana Ejemplo" });
    expect(result.data.page.years.map((entry) => entry.year)).toEqual([2025, 2024, 2023]);
    expect(
      mocks.select.mock.calls.some(
        ([statement]) => statement === RETRIBUCION_SQL.certificados.statement,
      ),
    ).toBe(false);
    const periods = mocks.select.mock.calls.find(
      ([statement]) => statement === CERTIFICATE_SQL.periods.statement,
    );
    expect(periods?.[1]?.employeeId.value).toBe("0042");
  });
});
