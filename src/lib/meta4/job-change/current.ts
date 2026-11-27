import "server-only";

/**
 * Situación actual de una matrícula en PeopleNet: su periodo, el rol principal
 * vigente y los tramos de cada histórico del rol que cambia el tipo de
 * modificación `02` «Cambio de puesto/posición». Solo `SELECT` parametrizadas,
 * con la sociedad del contexto operativo; nunca un valor del navegador.
 */
import {
  employeeParam,
  organizationParam,
  runPortalSelect,
  sqlText,
  type PortalSqlParam,
  type PortalSqlRow,
} from "@/lib/portal/peoplenet/query";
import type { Meta4Society } from "@/lib/meta4/societies";

import { JOB_CHANGE_HISTORY_SPECS, type JobChangeHistorySpec } from "./fields";
import type { JobChangeFieldSituation, JobChangeSituation, JobChangeSlice } from "./types";

/** Periodo, rol principal vigente y nombre de la persona. */
export const ROLE_SQL = `SELECT TOP 1 P.STD_OR_HR_PERIOD, P.STD_DT_START AS PERIOD_START,
  P.STD_DT_END AS PERIOD_END, R.SCO_OR_HR_ROLE, R.SCO_DT_START AS ROLE_START,
  R.SCO_DT_END AS ROLE_END, R.SCO_MAIN_ROLE, R.SCO_ID_INT_RO_TY, R.SCO_ID_REA_CHANG,
  R.SCO_N_ROLEESP, PE.SCO_GB_NAME
FROM STD_HR_PERIOD P
JOIN M4SCO_HR_ROLE R ON R.ID_ORGANIZATION = @organization AND R.SCO_ID_HR = P.STD_ID_HR
  AND R.SCO_OR_HR_PER = P.STD_OR_HR_PERIOD
LEFT JOIN STD_PERSON PE ON PE.STD_ID_PERSON = P.STD_ID_HR
WHERE P.ID_ORGANIZATION = @organization AND P.STD_ID_HR = @employeeId
ORDER BY CASE WHEN R.SCO_MAIN_ROLE = '1' THEN 0 ELSE 1 END,
  P.STD_OR_HR_PERIOD DESC, R.SCO_DT_START DESC`;

/** Primer ordinal de rol libre de la persona, como lo numera Meta4. */
export const NEXT_ROLE_SQL = `SELECT MAX(SCO_OR_HR_ROLE) AS LAST_ROLE
FROM M4SCO_HR_ROLE
WHERE ID_ORGANIZATION = @organization AND SCO_ID_HR = @employeeId`;

/** Tramos de un histórico del rol, los más recientes primero. */
export const sliceSql = (spec: JobChangeHistorySpec): string => {
  const columns = [
    `${spec.startColumn} AS SLICE_START`,
    `${spec.endColumn} AS SLICE_END`,
    `${spec.valueColumn} AS SLICE_VALUE`,
    spec.reasonColumn ? `${spec.reasonColumn} AS SLICE_REASON` : "NULL AS SLICE_REASON",
    ...(spec.keyColumns ?? []),
    ...(spec.extraColumns ?? []),
  ];
  return `SELECT ${columns.join(", ")}
FROM ${spec.table}
WHERE ID_ORGANIZATION = @organization AND ${spec.hrColumn} = @employeeId
  AND SCO_OR_HR_ROLE = @role
ORDER BY ${spec.startColumn} DESC`;
};

type RoleRow = PortalSqlRow;

const roleParams = (society: Meta4Society, employeeId: string): Record<string, PortalSqlParam> => ({
  organization: organizationParam(society),
  employeeId: employeeParam(employeeId),
});

const readSlices = async (
  spec: JobChangeHistorySpec,
  society: Meta4Society,
  employeeId: string,
  role: number,
): Promise<JobChangeFieldSituation> => {
  const rows = await runPortalSelect<PortalSqlRow>(sliceSql(spec), {
    ...roleParams(society, employeeId),
    role: { type: "int", value: role },
  });
  const slices: JobChangeSlice[] = rows.map((row) => ({
    startDate: sqlText(row.SLICE_START) ?? "",
    endDate: sqlText(row.SLICE_END) ?? "",
    value: sqlText(row.SLICE_VALUE),
    reason: sqlText(row.SLICE_REASON),
    keys: Object.fromEntries((spec.keyColumns ?? []).map((name) => [name, sqlText(row[name])])),
    extras: Object.fromEntries((spec.extraColumns ?? []).map((name) => [name, sqlText(row[name])])),
  }));
  return { field: spec.id, label: spec.label, table: spec.table, slices };
};

export class JobChangeEmployeeNotFoundError extends Error {
  constructor(employeeId: string) {
    super(`La matrícula ${employeeId} no tiene rol en la sociedad activa.`);
    this.name = "JobChangeEmployeeNotFoundError";
  }
}

/** Lee la situación actual completa. Una consulta por histórico del rol. */
export const loadJobChangeSituation = async (
  society: Meta4Society,
  employeeId: string,
): Promise<JobChangeSituation> => {
  const [role] = await runPortalSelect<RoleRow>(ROLE_SQL, roleParams(society, employeeId));
  if (!role) throw new JobChangeEmployeeNotFoundError(employeeId);
  const roleOrder = Number(role.SCO_OR_HR_ROLE);
  const [next] = await runPortalSelect<PortalSqlRow>(
    NEXT_ROLE_SQL,
    roleParams(society, employeeId),
  );
  const lastRole = Number(next?.LAST_ROLE ?? roleOrder);
  const fields = await Promise.all(
    JOB_CHANGE_HISTORY_SPECS.map((spec) => readSlices(spec, society, employeeId, roleOrder)),
  );
  return {
    society,
    employeeId,
    personName: sqlText(role.SCO_GB_NAME),
    period: {
      order: Number(role.STD_OR_HR_PERIOD),
      startDate: sqlText(role.PERIOD_START) ?? "",
      endDate: sqlText(role.PERIOD_END) ?? "",
    },
    role: {
      order: roleOrder,
      startDate: sqlText(role.ROLE_START) ?? "",
      endDate: sqlText(role.ROLE_END) ?? "",
      main: sqlText(role.SCO_MAIN_ROLE) === "1",
      internalRoleType: sqlText(role.SCO_ID_INT_RO_TY),
      reason: sqlText(role.SCO_ID_REA_CHANG),
      name: sqlText(role.SCO_N_ROLEESP),
    },
    nextRoleOrder: (Number.isFinite(lastRole) ? lastRole : roleOrder) + 1,
    fields,
  };
};
