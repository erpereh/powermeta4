import "server-only";

/**
 * Valores que Meta4 deriva al grabar el cambio y que powermeta4 lee aparte,
 * siempre con `SELECT`: el nombre del puesto o de la posición (para el nombre
 * del rol, `SHCO_SET_ROLE_NAME`) y la agrupación de categoría del puesto
 * (`CALCULA_VACIOS`), que ya resuelve el alta.
 */
import type { Meta4Society } from "@/lib/meta4/societies";
import { organizationParam, runPortalSelect, sqlText } from "@/lib/portal/peoplenet/query";

import { jobCategoryGroup } from "../hire/direct/lookups";
import type { JobChangeDerived } from "./plan";
import type { JobChangeRequest } from "./types";

const JOB_NAME_SQL = `SELECT TOP 1 ISNULL(STD_N_JOB_CODEESP, STD_N_JOB_CODEENG) AS name
FROM STD_JOB
WHERE ID_ORGANIZATION = @organization AND STD_ID_JOB_CODE = @code`;

const POSITION_NAME_SQL = `SELECT TOP 1 ISNULL(SCO_NM_POSITIONESP, SCO_NM_POSITIONENG) AS name
FROM M4SCO_POSITION
WHERE ID_ORGANIZATION = @organization AND SCO_ID_POSITION = @code`;

const name = async (
  statement: string,
  society: Meta4Society,
  code: string,
): Promise<string | null> => {
  const [row] = await runPortalSelect<{ name: string | null }>(statement, {
    organization: organizationParam(society),
    code: { type: "varchar", length: 30, value: code },
  });
  return sqlText(row?.name ?? null);
};

/**
 * Lee lo que el plan necesita del puesto o la posición elegidos. Sin valor
 * nuevo no hay nada que derivar: el plan conserva lo que ya tiene el rol.
 */
export const loadJobChangeDerived = async (
  society: Meta4Society,
  request: JobChangeRequest,
): Promise<JobChangeDerived> => {
  const job = (request.values.job ?? "").trim();
  const position = (request.values.position ?? "").trim();
  if (request.positionChoice === "position") {
    return {
      categoryGroup: null,
      targetName: position === "" ? null : await name(POSITION_NAME_SQL, society, position),
    };
  }
  if (job === "") return { categoryGroup: null, targetName: null };
  const [targetName, categoryGroup] = await Promise.all([
    name(JOB_NAME_SQL, society, job),
    jobCategoryGroup(job, request.cutDate, society),
  ]);
  return { categoryGroup, targetName };
};
