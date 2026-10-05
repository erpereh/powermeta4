import { describe, expect, it } from "vitest";

import { assertReadOnlySql } from "../peoplenet/query";
import { TEAM_MAX_LEVELS, withTeamScope } from "./team-scope";

describe("equipo del responsable", () => {
  const statement = `SELECT A.SCO_ID_HR AS EMPLEADO FROM M4SCO_H_SAL_DATA A
WHERE A.ID_ORGANIZATION = @organization AND A.SCO_ID_HR IN (@team)`;

  it("antepone la jerarquía de ORO y filtra por ella sin listas de matrículas", () => {
    const scoped = withTeamScope(statement);
    expect(scoped.startsWith("WITH TEAM_HR")).toBe(true);
    expect(scoped).toContain("IN (SELECT DISTINCT ID_EMPLEADO FROM TEAM_HR)");
    expect(scoped).not.toContain("@team");
    expect(scoped).toContain(`H.NIVEL < ${TEAM_MAX_LEVELS}`);
    // Parte de la matrícula del servidor y nunca incluye al propio responsable.
    expect(scoped).toContain("T.ID_RESPONSABLE = @employeeId");
    expect(scoped).toContain("T.ID_EMPLEADO <> @employeeId");
    expect(() => assertReadOnlySql(scoped)).not.toThrow();
  });

  it("rechaza consultas de equipo sin filtro de equipo", () => {
    expect(() => withTeamScope("SELECT 1 AS X FROM M4ORO_EMPLEADOS")).toThrow();
  });
});
