import "server-only";

import sql from "mssql";

import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { isMeta4Society, orderMeta4Societies, type Meta4Society } from "@/lib/meta4/societies";
import type {
  Meta4UserProfile,
  SocietyLookupMatch,
  SocietyLookupMatches,
} from "@/lib/meta4/user-profile-types";

import { getPeopleNetPool, PeopleNetConfigError } from "./client";
import { mapEmployeeFields } from "./employee-detail";
import {
  EMPLOYEE_FIELD_COLUMNS,
  type PeopleNetEmployeeRow,
  type PeopleNetSqlValue,
} from "./employees";

/**
 * Columnas de `M4ORO_EMPLEADOS` que `CSP_CONSULTA_ORO_INTRAN_NEW` no devolvía.
 * Se omiten para que el perfil leído por SQL tenga los mismos campos que el
 * del servicio y la ficha de `/settings` no cambie.
 */
const COLUMNS_OUTSIDE_PROFILE: ReadonlySet<string> = new Set([
  "DT_LAST_UPDATE",
  "ID_CEO",
  "N_CEO",
  "ID_MB",
  "N_MB",
  "ID_ALT",
  "N_ALT",
  "CSP_ID_FUSION",
  "CORREO2",
  "CLAVE_SELF2",
  "CSP_ID_ATRADIUS",
]);

const PROFILE_COLUMNS = EMPLOYEE_FIELD_COLUMNS.filter(
  ([column]) => !COLUMNS_OUTSIDE_PROFILE.has(column),
);

/** El usuario de aplicación da la matrícula: `SOFIA.ELICES` → persona 1683. */
const APP_USER_QUERY = `SELECT ID_PERSON, ID_ORGANIZATION_DEF
FROM M4RSC_APPUSER
WHERE ID_APP_USER = @username`;

const ORO_BY_EMPLOYEE_QUERY = `SELECT ${PROFILE_COLUMNS.map(([column]) => column).join(", ")}
FROM M4ORO_EMPLEADOS
WHERE ID_EMPLEADO = @employeeId`;

/** Usuarios sin ficha en `M4RSC_APPUSER`: el autoservicio es su propia clave. */
const ORO_BY_SELF_KEY_QUERY = `SELECT ${PROFILE_COLUMNS.map(([column]) => column).join(", ")}
FROM M4ORO_EMPLEADOS
WHERE CLAVE_SELF = @username`;

/** Centro de coste vigente de la persona, con su rol más reciente primero. */
const COST_CENTRE_QUERY = `SELECT SSP_ID_CENT_COSTO, DT_START
FROM M4SSP_H_HR_CTO_COS
WHERE ID_ORGANIZATION = @organization AND SCO_ID_HR = @employeeId
  AND DT_START <= @today AND DT_END >= @today
ORDER BY DT_START DESC`;

const COST_CENTRE_NAME_QUERY = `SELECT SSP_NM_CENT_COESP
FROM M4SSP_CENTR_COSTO
WHERE ID_ORGANIZATION = @organization AND SSP_ID_CENT_COSTO = @costCentre`;

type AppUserRow = { ID_PERSON: PeopleNetSqlValue; ID_ORGANIZATION_DEF: PeopleNetSqlValue };
type CostCentreRow = { SSP_ID_CENT_COSTO: PeopleNetSqlValue; DT_START: PeopleNetSqlValue };
type CostCentreNameRow = { SSP_NM_CENT_COESP: PeopleNetSqlValue };

const text = (value: PeopleNetSqlValue | undefined): string => {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString();
  return String(value).trim();
};

/** La matrícula del usuario de aplicación; `null` si no hay una sola. */
const resolveEmployeeId = async (username: string): Promise<string | null> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("username", sql.VarChar(64), username)
    .query<AppUserRow>(APP_USER_QUERY);
  const ids = new Set(
    result.recordset.map((row) => text(row.ID_PERSON)).filter((value) => value !== ""),
  );
  return ids.size === 1 ? [...ids][0] : null;
};

const loadEmployeeRows = async (
  statement: string,
  parameter: "employeeId" | "username",
  value: string,
): Promise<PeopleNetEmployeeRow[]> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input(parameter, sql.VarChar(64), value)
    .query<PeopleNetEmployeeRow>(statement);
  return result.recordset;
};

/**
 * El centro de coste no está en ORO. Su clave en el histórico es compuesta
 * (`006002|110000`) y el catálogo guarda el último segmento.
 */
const loadCostCentre = async (
  society: Meta4Society,
  employeeId: string,
  today: Date,
): Promise<{ id: string; name: string } | null> => {
  const pool = await getPeopleNetPool();
  const history = await pool
    .request()
    .input("organization", sql.VarChar(4), society)
    .input("employeeId", sql.VarChar(64), employeeId)
    .input("today", sql.Date, today)
    .query<CostCentreRow>(COST_CENTRE_QUERY);
  const id = text(history.recordset[0]?.SSP_ID_CENT_COSTO);
  if (id === "") return null;
  const key = id.split("|").at(-1) ?? id;
  const catalogue = await pool
    .request()
    .input("organization", sql.VarChar(4), society)
    .input("costCentre", sql.VarChar(64), key)
    .query<CostCentreNameRow>(COST_CENTRE_NAME_QUERY);
  return { id, name: text(catalogue.recordset[0]?.SSP_NM_CENT_COESP) };
};

const buildProfile = (input: {
  society: Meta4Society;
  fields: Record<string, string>;
  username: string;
  lookedUpAt: string;
}): Meta4UserProfile => ({
  society: input.society,
  pSociedad: input.society,
  returnCode: null,
  recordSets: [{ fields: input.fields }],
  primaryIndex: 0,
  fields: input.fields,
  consultedUsername: input.username,
  lookedUpAt: input.lookedUpAt,
});

export type LookupProfilesFromDatabaseOptions = {
  username: string;
  now?: () => Date;
  log?: (message: string, details: Record<string, string>) => void;
};

/**
 * Perfil y sociedades del usuario leídos de PeopleNet, en lugar del servicio
 * SOAP `CSP_CONSULTA_ORO_INTRAN_NEW`. La matrícula sale de `M4RSC_APPUSER`
 * (o de `CLAVE_SELF` cuando no hay usuario de aplicación), las fichas de
 * `M4ORO_EMPLEADOS` y el centro de coste de `M4SSP_H_HR_CTO_COS`. Una sociedad
 * con más de una ficha se descarta: la identidad del portal exige una sola.
 * Solo `SELECT`.
 */
export const lookupMeta4SocietyProfilesFromDatabase = async (
  options: LookupProfilesFromDatabaseOptions,
): Promise<SocietyLookupMatches> => {
  try {
    return await readSocietyProfiles(options);
  } catch (error) {
    // El perfil ya no viene por SOAP: sin la conexión de lectura no hay login.
    if (error instanceof PeopleNetConfigError) {
      options.log?.("meta4-profile-sql", { outcome: "NOT_CONFIGURED" });
      throw new Meta4ProfileError(
        "META4_PROFILE_LOOKUP_FAILED",
        "La conexión de solo lectura a PeopleNet no está configurada en este servidor.",
      );
    }
    throw error;
  }
};

const readSocietyProfiles = async (
  options: LookupProfilesFromDatabaseOptions,
): Promise<SocietyLookupMatches> => {
  const username = options.username.trim();
  const lookedUpAt = (options.now ?? (() => new Date()))().toISOString();
  const employeeId = await resolveEmployeeId(username);
  const rows = employeeId
    ? await loadEmployeeRows(ORO_BY_EMPLOYEE_QUERY, "employeeId", employeeId)
    : await loadEmployeeRows(ORO_BY_SELF_KEY_QUERY, "username", username);

  const bySociety = new Map<Meta4Society, PeopleNetEmployeeRow[]>();
  for (const row of rows) {
    const society = text(row.ID_ORGANIZATION);
    if (!isMeta4Society(society)) continue;
    bySociety.set(society, [...(bySociety.get(society) ?? []), row]);
  }

  const matches: SocietyLookupMatch[] = [];
  for (const society of orderMeta4Societies(bySociety.keys())) {
    const societyRows = bySociety.get(society) ?? [];
    if (societyRows.length !== 1) {
      options.log?.("meta4-profile-sql", { society, outcome: "AMBIGUOUS" });
      continue;
    }
    const [row] = societyRows;
    const fields = mapEmployeeFields(row);
    const personId = text(row.ID_EMPLEADO);
    const costCentre = personId ? await loadCostCentre(society, personId, new Date()) : null;
    fields.ssp_Id_Cent_Costo = costCentre?.id ?? "";
    fields.ssp_Nm_Cent_Costo = costCentre?.name ?? "";
    // El servicio devolvía todos sus campos, vacíos incluidos; `mapEmployeeFields`
    // omite los nulos porque la ficha de personas los esconde.
    for (const [, field] of PROFILE_COLUMNS) if (!(field in fields)) fields[field] = "";
    matches.push({ society, profile: buildProfile({ society, fields, username, lookedUpAt }) });
    options.log?.("meta4-profile-sql", { society, outcome: "MATCH" });
  }
  return { matches };
};
