import "server-only";

import type { Meta4Society } from "@/lib/meta4/societies";
import { getEmployeeEmailsByPersonId } from "@/lib/peoplenet/employees";
import { mapEmployeeEmails, type EmployeeEmailRecord } from "@/lib/peoplenet/employee-detail";

import { employeeParam, organizationParam, runPortalSelect } from "../peoplenet/query";
import {
  buildDirectorySections,
  buildOrgTree,
  buildOwnFileSections,
  toDirectoryEntry,
  type DirectoryEntry,
  type FileSection,
  type OrgNode,
  type OroRow,
} from "./organization-core";

export const DIRECTORY_MIN_QUERY = 2;
const DIRECTORY_LIMIT = 50;

const DIRECTORY_COLUMNS = `ID_EMPLEADO, NOMBRE, APELLIDO_1, APELLIDO_2, N_PUESTO, N_UNIDAD, N_AREA,
  N_DIRECCION, N_CENTRO_TRABAJO, CORREO`;

const FILE_COLUMNS = `${DIRECTORY_COLUMNS}, N_TIPO_PUESTO, N_CLASE_PUESTO, STD_N_LEG_ENT, N_SERVICIO,
  DIR_CENTRO_TRABAJO, N_CENT_TRAB_FIS, FEC_ALTA_EMPLEADO, FEC_ANTIGUEDAD, ID_STATUS_PUESTO,
  N_STATUS_PUESTO, CLAVE_SELF, ID_LEGAL, NUM_AFILIACION_SS, FEC_NACIMIENTO, ID_ESTADO_CIVIL,
  ID_RESPONSABLE`;

const ORG_COLUMNS = `${DIRECTORY_COLUMNS}, ID_DIRECCION, ID_AREA, ID_UNIDAD, ID_SERVICIO, N_SERVICIO`;

/** Columnas de `M4ORO_EMPLEADOS` que lee el portal (las comprueba `portal:verify`). */
export const ORO_PORTAL_COLUMNS: readonly string[] = [
  ...new Set(
    `${FILE_COLUMNS}, ${ORG_COLUMNS}, ID_ORGANIZATION`.split(",").map((column) => column.trim()),
  ),
];

/** Escapa los comodines de LIKE con `!` (como la búsqueda de poblaciones). */
const likePattern = (query: string): string =>
  `%${query.replace(/[!%_[\]]/g, (match) => `!${match}`)}%`;

const DIRECTORY_SEARCH = `SELECT TOP ${DIRECTORY_LIMIT} ${DIRECTORY_COLUMNS}
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization
  AND (
    (ISNULL(NOMBRE, '') + ' ' + ISNULL(APELLIDO_1, '') + ' ' + ISNULL(APELLIDO_2, '')) COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
    OR N_PUESTO COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
    OR N_UNIDAD COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
    OR CORREO COLLATE Latin1_General_CI_AI LIKE @pattern ESCAPE '!'
  )
ORDER BY APELLIDO_1, APELLIDO_2, NOMBRE`;

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
  return rows.flatMap((row) => {
    const entry = toDirectoryEntry(row);
    return entry ? [entry] : [];
  });
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
  return rows.length === 1 ? rows[0] : null;
};

/** Ficha de directorio de una persona de la sociedad (sin datos personales). */
export const getDirectoryPerson = async (
  society: Meta4Society,
  employeeId: string,
): Promise<PersonFile | null> => {
  const row = await loadFileRow(society, employeeId);
  const person = row ? toDirectoryEntry(row) : null;
  if (!row || !person) return null;
  const manager = row.ID_RESPONSABLE;
  return {
    person,
    managerId:
      typeof manager === "string" || typeof manager === "number"
        ? String(manager).trim() || null
        : null,
    sections: buildDirectorySections(row),
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
  const emails = mapEmployeeEmails(await getEmployeeEmailsByPersonId(ownEmployeeId));
  const manager = row.ID_RESPONSABLE;
  return {
    person,
    managerId:
      typeof manager === "string" || typeof manager === "number"
        ? String(manager).trim() || null
        : null,
    sections: buildOwnFileSections(row),
    emails,
  };
};

const ENTRY_BATCH = 200;
const EMPLOYEE_ID = /^[A-Za-z0-9]{1,20}$/;

/** Datos de directorio de una lista de matrículas (parámetros, por lotes). */
export const getDirectoryEntries = async (
  society: Meta4Society,
  employeeIds: readonly string[],
): Promise<DirectoryEntry[]> => {
  const ids = [...new Set(employeeIds.map((id) => id.trim()))].filter((id) => EMPLOYEE_ID.test(id));
  const entries: DirectoryEntry[] = [];
  for (let start = 0; start < ids.length; start += ENTRY_BATCH) {
    const batch = ids.slice(start, start + ENTRY_BATCH);
    const params = Object.fromEntries(batch.map((id, index) => [`id${index}`, employeeParam(id)]));
    const rows = await runPortalSelect<OroRow>(
      `SELECT ${DIRECTORY_COLUMNS}
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO IN (${batch.map((_, index) => `@id${index}`).join(", ")})`,
      { organization: organizationParam(society), ...params },
    );
    for (const row of rows) {
      const entry = toDirectoryEntry(row);
      if (entry) entries.push(entry);
    }
  }
  return entries.sort((a, b) => a.fullName.localeCompare(b.fullName, "es"));
};

const ORG_QUERY = `SELECT ${ORG_COLUMNS}
FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization`;

/** Organigrama de la sociedad construido con la jerarquía de ORO. */
export const getOrgTree = async (society: Meta4Society): Promise<OrgNode[]> =>
  buildOrgTree(
    await runPortalSelect<OroRow>(ORG_QUERY, { organization: organizationParam(society) }),
  );
