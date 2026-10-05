/**
 * Equipo de un responsable: toda su jerarquía en ORO (`M4ORO_EMPLEADOS.ID_RESPONSABLE`),
 * directos y los que dependen de ellos, hasta `TEAM_MAX_LEVELS` niveles y solo
 * personas que computan. Es la regla acordada con el usuario (2026-10-05) porque
 * `SNTC_AD_POPULATION` llega vacío por SOAP fuera del runtime de Meta4.
 *
 * Se calcula en la propia base con un CTE recursivo a partir de `@employeeId`
 * (la matrícula que resuelve el servidor), así no hay límite de parámetros ni
 * ninguna lista de personas sale del navegador.
 */
export const TEAM_MAX_LEVELS = 10;

const TEAM_CTE = `WITH TEAM_HR (ID_EMPLEADO, NIVEL) AS (
  SELECT T.ID_EMPLEADO, 1 FROM M4ORO_EMPLEADOS T
  WHERE T.ID_ORGANIZATION = @organization AND T.ID_RESPONSABLE = @employeeId
    AND T.COMPUTA = '1' AND T.ID_EMPLEADO <> @employeeId
  UNION ALL
  SELECT T.ID_EMPLEADO, H.NIVEL + 1 FROM M4ORO_EMPLEADOS T
  JOIN TEAM_HR H ON T.ID_RESPONSABLE = H.ID_EMPLEADO
  WHERE T.ID_ORGANIZATION = @organization AND T.COMPUTA = '1'
    AND T.ID_EMPLEADO <> @employeeId AND H.NIVEL < ${TEAM_MAX_LEVELS}
)`;

/** `IN (@team)` → subconsulta sobre el CTE de la jerarquía, antepuesto a la SELECT. */
export const withTeamScope = (statement: string): string => {
  if (!/IN \(@team\)/.test(statement))
    throw new Error("La consulta de equipo no filtra por @team.");
  return `${TEAM_CTE}\n${statement.replaceAll(/IN \(@team\)/g, "IN (SELECT DISTINCT ID_EMPLEADO FROM TEAM_HR)")}`;
};
