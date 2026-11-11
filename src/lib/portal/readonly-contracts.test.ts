import { describe, expect, it } from "vitest";
import { assertReadOnlySql } from "./peoplenet/query";
import { READONLY_SQL, ownQueryForTeam } from "./registry/sql/readonly";
import { CERTIFICATE_SQL } from "./registry/sql/certificates";
import { withTeamScope } from "./data/team-scope";
import { PORTAL_FEATURES } from "./registry";

// Contratos técnicos mínimos extraídos del esquema VM, sin filas de empleados.
const columns: Readonly<Record<string, readonly string[]>> = {
  M4SCO_H_HRP_CONTR: [
    "SCO_ID_CONTRACT",
    "SCO_OR_HR_PERIOD",
    "SCO_DT_START",
    "SCO_DT_END",
    "SCO_DT_PROBA_END",
    "SCO_DT_EXPECT_END",
    "ID_ORGANIZATION",
    "SCO_ID_HR",
  ],
  M4SCO_CR_PREFERENC: [
    "SCO_PREFERENCES",
    "SCO_PREF_PRIORITY",
    "SCO_COMMENT",
    "DT_START",
    "DT_END",
    "ID_ORGANIZATION",
    "STD_ID_HR",
    "STD_OR_HR_PERIOD",
    "SCO_CK_DISCART_PRE",
  ],
  STD_HR_PERIOD: ["ID_ORGANIZATION", "STD_ID_HR", "STD_OR_HR_PERIOD", "STD_DT_START", "STD_DT_END"],
  M4SCO_OBJECTIVE: ["SCO_NM_OBJECTESP", "ID_ORGANIZATION", "SCO_ID_OBJECTIVE"],
  M4SCO_X_OBJ_MAGN: ["SCO_NM_MAGNITESP", "ID_ORGANIZATION", "SCO_ID_MAGNITUD"],
  M4SCO_ROL_LV_OBJ: [
    "ID_ORGANIZATION",
    "SCO_ID_HR",
    "SCO_ID_OBJECTIVE",
    "SCO_ID_MAGNITUD",
    "SCO_WEIGHT",
    "SCO_SCHED_VALUE",
    "SCO_ACCOMP_VALUE",
    "SCO_ID_LEVEL",
    "SCO_OR_HR_ROLE",
    "SCO_DT_START",
    "SCO_DT_END",
  ],
  M4SSE_ROL_LV_OBJ: [
    "ID_ORGANIZATION",
    "SCO_ID_HR",
    "SCO_ID_OBJECTIVE",
    "SCO_ID_MAGNITUD",
    "SCO_WEIGHT",
    "SCO_SCHED_VALUE",
    "SCO_ACCOMP_VALUE",
    "SCO_ID_LEVEL",
    "SCO_OR_HR_ROLE",
    "SCO_DT_START",
    "SCO_DT_END",
    "SCO_COMMENT",
    "ID_ESTADO_REG",
  ],
};

describe("consultas corregidas con el esquema VM", () => {
  it.each(["contracts", "registeredPreferences", "registeredObjectives", "objectives"] as const)(
    "%s conserva columnas existentes, parámetros y alcance propio",
    (name) => {
      const query = READONLY_SQL[name];
      const aliases = new Map(
        [...query.statement.matchAll(/\b(?:FROM|JOIN)\s+(\w+)\s+(\w+)/g)].map((match) => [
          match[2],
          match[1],
        ]),
      );
      for (const [, alias, field] of query.statement.matchAll(/\b([A-Z]+)\.([A-Z_0-9]+)\b/g))
        expect(columns[aliases.get(alias) ?? ""], `${alias}.${field}`).toContain(field);
      expect(() => assertReadOnlySql(query.statement)).not.toThrow();
      expect(query.scope).toBe("own");
      expect(query.statement).toContain("A.ID_ORGANIZATION = @organization");
      expect(query.statement).toContain("= @employeeId");
    },
  );
  it("conserva los alias de presentación y los filtros funcionales", () => {
    expect(READONLY_SQL.contracts.statement).toContain(
      "A.SCO_DT_PROBA_END AS SCO_DT_PROBATION_END",
    );
    expect(READONLY_SQL.contracts.statement).toContain(
      "A.SCO_DT_EXPECT_END AS SCO_DT_EXPECTED_END",
    );
    expect(READONLY_SQL.registeredPreferences.statement).toContain("SCO_CK_DISCART_PRE <> '1'");
    for (const query of [READONLY_SQL.registeredObjectives, READONLY_SQL.objectives]) {
      expect(query.statement).toContain("SCO_NM_OBJECTESP AS SCO_NM_OBJECTIVE");
      expect(query.statement).toContain("SCO_NM_MAGNITESP AS SCO_NM_MAGNITUDE");
    }
    expect(READONLY_SQL.objectives.statement).toContain("A.ID_ESTADO_REG = 'PENDIENTE'");
  });
  it("los contratos de otra persona permanecen sujetos a la jerarquía ORO", () => {
    const query = ownQueryForTeam(READONLY_SQL.contracts);
    expect(query.scope).toBe("team");
    expect(query.statement).toContain("A.SCO_ID_HR IN (@team)");
    const statement = withTeamScope(query.statement);
    expect(statement).toContain("ID_RESPONSABLE");
    expect(statement).toContain("@employeeId");
    expect(statement).toContain("@organization");
    expect(() => assertReadOnlySql(statement)).not.toThrow();
  });
  it("el certificado usa la correspondencia física confirmada sin atribuirse un sondeo", () => {
    expect(CERTIFICATE_SQL.places.statement).toContain("C.STD_N_GEO_PLACESP AS STD_N_GEO_PLACE");
    expect(CERTIFICATE_SQL.places.statement).toContain("FROM M4SSP_LG_ENT_ADD B");
    expect(CERTIFICATE_SQL.places.statement).toContain("B.ID_ORGANIZATION = @organization");
    expect(CERTIFICATE_SQL.places.statement).toContain("ORDER BY B.SSP_FEC_FIN DESC");
    const feature = PORTAL_FEATURES.find((item) => item.id === "empleado.retribucion.certificados");
    const section = feature?.sections?.find(
      (item) => item.kind === "consult" && item.consult.id === "poblacion",
    );
    if (section?.kind !== "consult") throw new Error("Missing certificate contract");
    expect(section.consult.read).toMatchObject({ verified: false });
    expect(section.consult.description).toContain("SSP_LG_ENT_ADDRESS");
    expect(section.consult.description).toContain("no tiene un sondeo VM");
  });
});
