import { afterEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ request: vi.fn(), unconfigured: false }));

vi.mock("./client", async (original) => ({
  ...(await original<typeof import("./client")>()),
  getPeopleNetPool: async () => {
    if (mocks.unconfigured) throw new PeopleNetConfigError(["PEOPLENET_DB_HOST"]);
    return { request: mocks.request };
  },
}));

import { PeopleNetConfigError } from "./client";

import { Meta4ProfileError } from "@/lib/meta4/profile-errors";

import { lookupMeta4SocietyProfilesFromDatabase } from "./user-profile";

type Row = Record<string, unknown>;

/** Petición de `mssql` encadenable que devuelve la respuesta por sentencia. */
const queueRequests = (answers: readonly { match: string; rows: Row[] }[]): string[] => {
  const executed: string[] = [];
  mocks.request.mockImplementation(() => {
    const request = {
      input: () => request,
      query: async (statement: string) => {
        executed.push(statement);
        const answer = answers.find((entry) => statement.includes(entry.match));
        return { recordset: answer?.rows ?? [] };
      },
    };
    return request;
  });
  return executed;
};

const employeeRow = (society: string, overrides: Row = {}): Row => ({
  ID_ORGANIZATION: society,
  ID_EMPLEADO: "1683",
  CLAVE_SELF: "selicesm",
  NOMBRE: "Sofía",
  APELLIDO_1: "Apellido",
  FEC_ALTA_EMPLEADO: new Date("2024-09-11T00:00:00.000Z"),
  N_SERVICIO: null,
  ...overrides,
});

afterEach(() => {
  mocks.unconfigured = false;
});

describe("perfil del usuario leído de PeopleNet", () => {
  it("resuelve la matrícula por el usuario de aplicación y arma el perfil", async () => {
    const executed = queueRequests([
      { match: "M4RSC_APPUSER", rows: [{ ID_PERSON: "1683", ID_ORGANIZATION_DEF: "CYC" }] },
      { match: "WHERE ID_EMPLEADO = @employeeId", rows: [employeeRow("CYC")] },
      { match: "M4SSP_H_HR_CTO_COS", rows: [{ SSP_ID_CENT_COSTO: "006002|110000" }] },
      { match: "M4SSP_CENTR_COSTO", rows: [{ SSP_NM_CENT_COESP: "Servicios Centrales" }] },
    ]);
    const { matches } = await lookupMeta4SocietyProfilesFromDatabase({
      username: " SOFIA.ELICES ",
      now: () => new Date("2026-11-25T10:00:00.000Z"),
    });
    expect(matches).toHaveLength(1);
    const [match] = matches;
    expect(match.society).toBe("CYC");
    expect(match.profile).toMatchObject({
      society: "CYC",
      pSociedad: "CYC",
      returnCode: null,
      primaryIndex: 0,
      consultedUsername: "SOFIA.ELICES",
      lookedUpAt: "2026-11-25T10:00:00.000Z",
    });
    expect(match.profile.recordSets[0].fields).toBe(match.profile.fields);
    expect(match.profile.fields).toMatchObject({
      id_Empleado: "1683",
      clave_Self: "selicesm",
      nombre: "Sofía",
      // Las fechas salen en ISO, como las devolvía el servicio.
      fec_Alta_Empleado: "2024-09-11T00:00:00.000Z",
      // La clave compuesta del histórico y el nombre del último segmento.
      ssp_Id_Cent_Costo: "006002|110000",
      ssp_Nm_Cent_Costo: "Servicios Centrales",
      // Columna nula: el servicio la devolvía vacía, no ausente.
      n_Servicio: "",
    });
    // Nunca se consulta por clave de autoservicio si el usuario de aplicación resolvió.
    expect(executed.some((statement) => statement.includes("WHERE CLAVE_SELF"))).toBe(false);
    // Las columnas ajenas al perfil no se leen.
    expect(executed.some((statement) => statement.includes("CLAVE_SELF2"))).toBe(false);
  });

  it("usa la clave de autoservicio cuando no hay usuario de aplicación", async () => {
    const executed = queueRequests([
      { match: "M4RSC_APPUSER", rows: [] },
      { match: "WHERE CLAVE_SELF = @username", rows: [employeeRow("IBER")] },
    ]);
    const { matches } = await lookupMeta4SocietyProfilesFromDatabase({ username: "selicesm" });
    expect(matches.map((match) => match.society)).toEqual(["IBER"]);
    expect(matches[0].profile.fields.ssp_Nm_Cent_Costo).toBe("");
    expect(executed.some((statement) => statement.includes("WHERE CLAVE_SELF = @username"))).toBe(
      true,
    );
  });

  it("ordena las sociedades, descarta las ambiguas y las desconocidas", async () => {
    const log = vi.fn();
    queueRequests([
      { match: "M4RSC_APPUSER", rows: [{ ID_PERSON: "1683", ID_ORGANIZATION_DEF: null }] },
      {
        match: "WHERE ID_EMPLEADO = @employeeId",
        rows: [
          employeeRow("IBER"),
          employeeRow("CYC"),
          employeeRow("COLL"),
          employeeRow("COLL", { CLAVE_SELF: "otra" }),
          employeeRow("CYCX"),
        ],
      },
    ]);
    const { matches } = await lookupMeta4SocietyProfilesFromDatabase({
      username: "SOFIA.ELICES",
      log,
    });
    expect(matches.map((match) => match.society)).toEqual(["CYC", "IBER"]);
    expect(log).toHaveBeenCalledWith("meta4-profile-sql", {
      society: "COLL",
      outcome: "AMBIGUOUS",
    });
  });

  it("no devuelve nada si el usuario de aplicación apunta a dos personas", async () => {
    queueRequests([
      {
        match: "M4RSC_APPUSER",
        rows: [
          { ID_PERSON: "1683", ID_ORGANIZATION_DEF: "CYC" },
          { ID_PERSON: "1684", ID_ORGANIZATION_DEF: "CYC" },
        ],
      },
      { match: "WHERE CLAVE_SELF = @username", rows: [] },
    ]);
    const { matches } = await lookupMeta4SocietyProfilesFromDatabase({ username: "duplicado" });
    expect(matches).toEqual([]);
  });

  it("explica que falta la conexión de lectura en lugar de un error opaco", async () => {
    mocks.unconfigured = true;
    const log = vi.fn();
    await expect(
      lookupMeta4SocietyProfilesFromDatabase({ username: "SOFIA.ELICES", log }),
    ).rejects.toMatchObject({
      name: "Meta4ProfileError",
      code: "META4_PROFILE_LOOKUP_FAILED",
    });
    await expect(
      lookupMeta4SocietyProfilesFromDatabase({ username: "SOFIA.ELICES" }),
    ).rejects.toBeInstanceOf(Meta4ProfileError);
    expect(log).toHaveBeenCalledWith("meta4-profile-sql", { outcome: "NOT_CONFIGURED" });
  });

  it("solo ejecuta lecturas", async () => {
    const executed = queueRequests([
      { match: "M4RSC_APPUSER", rows: [{ ID_PERSON: "1683", ID_ORGANIZATION_DEF: "CYC" }] },
      { match: "WHERE ID_EMPLEADO = @employeeId", rows: [employeeRow("CYC")] },
      { match: "M4SSP_H_HR_CTO_COS", rows: [{ SSP_ID_CENT_COSTO: "110000" }] },
      { match: "M4SSP_CENTR_COSTO", rows: [{ SSP_NM_CENT_COESP: "Servicios Centrales" }] },
    ]);
    await lookupMeta4SocietyProfilesFromDatabase({ username: "SOFIA.ELICES" });
    expect(executed).not.toHaveLength(0);
    for (const statement of executed) {
      expect(statement.trimStart().startsWith("SELECT")).toBe(true);
      expect(statement).not.toMatch(/\b(INSERT|UPDATE|DELETE|MERGE|EXEC)\b/i);
      expect(statement).not.toContain(";");
    }
  });
});
