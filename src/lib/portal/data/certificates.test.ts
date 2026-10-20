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

beforeEach(() => {
  vi.clearAllMocks();
  mocks.select.mockImplementation(
    async (statement: string, params?: Record<string, { value: unknown }>) => {
      if (statement === CERTIFICATE_SQL.periods.statement)
        return [{ STD_DT_START: new Date("2023-05-01T00:00:00Z"), STD_DT_END: null }];
      if (statement === RETRIBUCION_SQL.certificados.statement)
        return [{ ANIO: 2014, SCO_NM_DOC: "Certificado 2014", DOC_KEY: "1|3" }];
      if (statement.includes("@targetId"))
        return params?.targetId?.value === "0042"
          ? [{ EMPLEADO: "Ana Ejemplo", COMPUTA: "1" }]
          : [];
      return [];
    },
  );
});

describe("certificados de retenciones en PeopleNet", () => {
  it("solo ejecuta SELECT filtradas por sociedad y matrícula", () => {
    assertReadOnlySql(CERTIFICATE_SQL.periods.statement);
    expect(CERTIFICATE_SQL.periods.statement).toContain("@organization");
    expect(CERTIFICATE_SQL.periods.statement).toContain("@employeeId");
  });

  it("ofrece los años de alta y los guardados, del más reciente al más antiguo", async () => {
    const result = await getCertificates(context, { status: "latest" }, { status: "own" }, today);
    expect(result.status).toBe("ok");
    if (result.status !== "ok") return;
    expect(result.data.page.years.map((entry) => entry.year)).toEqual([2025, 2024, 2023, 2014]);
    expect(result.data.page.selectedYear).toBe(2025);
    // Sin las casillas de SSP_RP_C_HABERES resueltas no se inventa el certificado.
    expect(result.data.page.selection.kind).toBe("unavailable");
    expect(result.data.certificate).toBeNull();
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
