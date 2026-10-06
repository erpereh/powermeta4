import "server-only";

import type { Meta4Society } from "@/lib/meta4/societies";
import { getEmployeeEmailsByPersonId } from "@/lib/peoplenet/employees";
import { mapEmployeeEmails, type EmployeeEmailRecord } from "@/lib/peoplenet/employee-detail";

import { employeeParam, organizationParam, runPortalSelect } from "../peoplenet/query";
import {
  buildDirectorySections,
  buildOrgTree,
  buildOwnFileSections,
  distinctFileRows,
  groupDirectoryEntries,
  oroText,
  toDirectoryEntry,
  type DirectoryEntry,
  type FileSection,
  type OrgNode,
  type OroRow,
} from "./organization-core";
import { PortalDataAmbiguousError } from "./errors";
import { isOrgEmployeeId } from "../organization-navigation";
import { buildPersonHierarchy, managerIds, type PersonHierarchy } from "./person-hierarchy-core";

export const DIRECTORY_MIN_QUERY = 2;
const DIRECTORY_LIMIT = 50;

const DIRECTORY_COLUMNS = `ID_ORGANIZATION, ID_EMPLEADO, NOMBRE, APELLIDO_1, APELLIDO_2, N_PUESTO, N_UNIDAD, N_AREA,
  N_DIRECCION, N_CENTRO_TRABAJO, CORREO`;

const FILE_COLUMNS = `${DIRECTORY_COLUMNS}, N_TIPO_PUESTO, N_CLASE_PUESTO, STD_N_LEG_ENT, N_SERVICIO,
  DIR_CENTRO_TRABAJO, N_CENT_TRAB_FIS, FEC_ALTA_EMPLEADO, FEC_ANTIGUEDAD, ID_STATUS_PUESTO,
  N_STATUS_PUESTO, CLAVE_SELF, ID_LEGAL, NUM_AFILIACION_SS, FEC_NACIMIENTO, ID_ESTADO_CIVIL,
  ID_RESPONSABLE`;
const PUBLIC_FILE_COLUMNS = `${DIRECTORY_COLUMNS}, N_TIPO_PUESTO, N_CLASE_PUESTO, STD_N_LEG_ENT, N_SERVICIO, DIR_CENTRO_TRABAJO, N_CENT_TRAB_FIS, ID_RESPONSABLE`;

const ORG_COLUMNS = `${DIRECTORY_COLUMNS}, ID_DIRECCION, ID_AREA, ID_UNIDAD, ID_SERVICIO, N_SERVICIO`;

/** Columnas de `M4ORO_EMPLEADOS` que lee el portal (las comprueba `portal:verify`). */
export const ORO_PORTAL_COLUMNS: readonly string[] = [
  ...new Set(
    `${FILE_COLUMNS}, ${ORG_COLUMNS}, ID_ORGANIZATION, COMPUTA`
      .split(",")
      .map((column) => column.trim()),
  ),
];

/** Escapa los comodines de LIKE con `!` (como la búsqueda de poblaciones). */
const likePattern = (query: string): string =>
  `%${query.replace(/[!%_[\]]/g, (match) => `!${match}`)}%`;

const DIRECTORY_SEARCH = `WITH matches AS (
SELECT TOP ${DIRECTORY_LIMIT} ID_EMPLEADO
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization
  AND (
    (ISNULL(NOMBRE, '') + ' ' + ISNULL(APELLIDO_1, '') + ' ' + ISNULL(APELLIDO_2, '')) COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
    OR N_PUESTO COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
    OR N_UNIDAD COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
    OR N_CENTRO_TRABAJO COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
    OR CORREO COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
  )
GROUP BY ID_EMPLEADO
ORDER BY MIN(APELLIDO_1), MIN(APELLIDO_2), MIN(NOMBRE), ID_EMPLEADO
)
SELECT ${DIRECTORY_COLUMNS}
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO IN (SELECT ID_EMPLEADO FROM matches)`;

/** Búsqueda de personas en la sociedad del contexto (mínimo dos caracteres). */
export const searchDirectory = async (
  society: Meta4Society,
  query: string,
): Promise<DirectoryEntry[]> => {
  const trimmed = query.trim();
  if (trimmed.length < DIRECTORY_MIN_QUERY) return [];
  const rows = await runPortalSelect<OroRow>(DIRECTORY_SEARCH, {
    organization: organizationParam(society),
    pattern: { type: "nvarchar", length: 130, value: likePattern(trimmed.slice(0, 120)) },
  });
  return groupDirectoryEntries(rows);
};

const FILE_QUERY = `SELECT ${FILE_COLUMNS}
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO = @employeeId`;

export type PersonFile = {
  readonly person: DirectoryEntry;
  readonly managerId: string | null;
  readonly sections: readonly FileSection[];
  readonly emails: readonly EmployeeEmailRecord[];
};

const loadFileRow = async (society: Meta4Society, employeeId: string): Promise<OroRow | null> => {
  const rows = await runPortalSelect<OroRow>(FILE_QUERY, {
    organization: organizationParam(society),
    employeeId: employeeParam(employeeId),
  });
  const unique = distinctFileRows(rows);
  if (unique.length > 1) throw new PortalDataAmbiguousError();
  return unique[0] ?? null;
};

/** Ficha de directorio de una persona de la sociedad (sin datos personales). */
export const getDirectoryPerson = async (
  society: Meta4Society,
  employeeId: string,
): Promise<PersonFile | null> => {
  const rows = await runPortalSelect<OroRow>(
    `SELECT ${PUBLIC_FILE_COLUMNS} FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO = @employeeId`,
    {
      organization: organizationParam(society),
      employeeId: employeeParam(employeeId),
    },
  );
  const [person] = groupDirectoryEntries(rows);
  if (!person) return null;
  // Las distintas asignaciones forman un resumen de directorio, nunca una ficha personal.
  const merged: OroRow = Object.fromEntries(
    PUBLIC_FILE_COLUMNS.split(",").map((column) => {
      const name = column.trim();
      const values = [
        ...new Set(
          rows.flatMap((row) => {
            const value = oroText(row[name]);
            return value ? [value] : [];
          }),
        ),
      ].filter(Boolean);
      return [name, values.join(" / ") || null];
    }),
  );
  const managers = new Set(
    rows.flatMap((row) => (row.ID_RESPONSABLE == null ? [] : [String(row.ID_RESPONSABLE).trim()])),
  );
  const manager = managers.size === 1 ? [...managers][0] : null;
  return {
    person,
    managerId:
      typeof manager === "string" || typeof manager === "number"
        ? String(manager).trim() || null
        : null,
    sections: buildDirectorySections(merged),
    emails: [],
  };
};

/** Ficha propia: el `employeeId` llega siempre de la identidad del servidor. */
export const getOwnFile = async (
  society: Meta4Society,
  ownEmployeeId: string,
): Promise<PersonFile | null> => {
  const row = await loadFileRow(society, ownEmployeeId);
  const person = row ? toDirectoryEntry(row) : null;
  if (!row || !person) return null;
  const manager = row.ID_RESPONSABLE;
  return {
    person,
    managerId:
      typeof manager === "string" || typeof manager === "number"
        ? String(manager).trim() || null
        : null,
    sections: buildOwnFileSections(row),
    emails: [],
  };
};

/** Lectura independiente: un error de correos no oculta la ficha. */
export const getOwnEmails = async (ownEmployeeId: string): Promise<EmployeeEmailRecord[]> => [
  ...new Map(
    mapEmployeeEmails(await getEmployeeEmailsByPersonId(ownEmployeeId)).map((email) => [
      JSON.stringify(email),
      email,
    ]),
  ).values(),
];

export const getOwnMaritalStatus = async (
  society: Meta4Society,
  employeeId: string,
): Promise<OroRow[]> => {
  const rows = distinctFileRows(
    await runPortalSelect<OroRow>(
      `SELECT ID_ESTADO_CIVIL FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO = @employeeId`,
      { organization: organizationParam(society), employeeId: employeeParam(employeeId) },
    ),
  );
  if (rows.length > 1) throw new PortalDataAmbiguousError();
  return rows;
};

const ENTRY_BATCH = 200;
const EMPLOYEE_ID = /^[A-Za-z0-9]{1,20}$/;

/** Datos de directorio de una lista de matrículas (parámetros, por lotes). */
export const getDirectoryEntries = async (
  society: Meta4Society,
  employeeIds: readonly string[],
): Promise<DirectoryEntry[]> => {
  const ids = [...new Set(employeeIds.map((id) => id.trim()))].filter((id) => EMPLOYEE_ID.test(id));
  const allRows: OroRow[] = [];
  for (let start = 0; start < ids.length; start += ENTRY_BATCH) {
    const batch = ids.slice(start, start + ENTRY_BATCH);
    const params = Object.fromEntries(batch.map((id, index) => [`id${index}`, employeeParam(id)]));
    const rows = await runPortalSelect<OroRow>(
      `SELECT ${DIRECTORY_COLUMNS}
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO IN (${batch.map((_, index) => `@id${index}`).join(", ")})`,
      { organization: organizationParam(society), ...params },
    );
    allRows.push(...rows);
  }
  return groupDirectoryEntries(allRows);
};

const ORG_QUERY = `SELECT ${ORG_COLUMNS}
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND COMPUTA = '1'`;

/** Organigrama de la sociedad construido con la jerarquía de ORO. */
export const getOrgTree = async (society: Meta4Society): Promise<OrgNode[]> =>
  buildOrgTree(
    await runPortalSelect<OroRow>(ORG_QUERY, { organization: organizationParam(society) }),
  );

/** Jerarquía pública de directorio, limitada a la sociedad activa y al equipo directo. */
export const getPersonHierarchy = async (
  society: Meta4Society,
  employeeId: string,
): Promise<PersonHierarchy | null> => {
  if (!isOrgEmployeeId(employeeId)) return null;
  const columns = `${DIRECTORY_COLUMNS}, ID_RESPONSABLE, COMPUTA`;
  const params = {
    organization: organizationParam(society),
    employeeId: employeeParam(employeeId),
  };
  const selected = await runPortalSelect<OroRow>(
    `SELECT ${columns} FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND COMPUTA = '1' AND ID_EMPLEADO = @employeeId`,
    params,
  );
  if (selected.length === 0) return null;
  const ids = managerIds(selected);
  const managerId =
    ids.length === 1 && ids[0] !== employeeId && isOrgEmployeeId(ids[0]) ? ids[0] : "";
  // Se cargan todas las asignaciones de cada candidato, para detectar responsables contradictorios.
  const related = await runPortalSelect<OroRow>(
    `SELECT ${columns} FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND COMPUTA = '1'
  AND (ID_EMPLEADO = @managerId OR ID_EMPLEADO IN (
    SELECT R.ID_EMPLEADO FROM M4ORO_EMPLEADOS R
    WHERE R.ID_ORGANIZATION = @organization AND R.COMPUTA = '1' AND R.ID_RESPONSABLE = @employeeId
  ))`,
    { ...params, managerId: employeeParam(managerId) },
  );
  return buildPersonHierarchy(employeeId, society, selected, related);
};
