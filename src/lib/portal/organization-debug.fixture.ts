import "server-only";
import { DEBUG_ACTORS, foldPortalText, type PortalDebugSelection } from "./read-model";
import {
  buildDirectorySections,
  buildOwnFileSections,
  buildOrgTree,
  type DirectoryEntry,
  type OroRow,
} from "./data/organization-core";
import type { PersonHierarchy } from "./data/person-hierarchy-core";
import type { PersonFile } from "./data/organization";
import type { PortalTaskLine } from "./data/tasks-core";

export function debugOroRows(selection: PortalDebugSelection): OroRow[] {
  if (selection.scenario === "empty") return [];
  return DEBUG_ACTORS.map((person) => ({
    ID_EMPLEADO: person.id,
    ID_ORGANIZATION: null,
    ID_RESPONSABLE: person.manager,
    COMPUTA: "1",
    NOMBRE: person.name.split(" · ")[0],
    N_PUESTO: person.id === "90000" ? "Responsable de operaciones" : "Técnico de operaciones",
    ID_DIRECCION: "D1",
    N_DIRECCION: "Servicios corporativos",
    ID_AREA: "A1",
    N_AREA: "Operaciones",
    ID_UNIDAD: person.unit,
    N_UNIDAD: person.unit,
    N_CENTRO_TRABAJO: "Madrid · muestra",
    CORREO: `muestra.${person.id}@example.invalid`,
    FEC_ALTA_EMPLEADO: "2020-02-03",
    FEC_ANTIGUEDAD: "2020-02-03",
    ID_LEGAL: "DOCUMENTO FICTICIO",
    NUM_AFILIACION_SS: "FICTICIO",
    FEC_NACIMIENTO: "1990-02-10",
    ID_ESTADO_CIVIL: "1",
    CLAVE_SELF: "DEBUG",
    STD_N_LEG_ENT: "Empresa ficticia · DEBUG",
  }));
}
export function debugDirectory(selection: PortalDebugSelection, query = ""): DirectoryEntry[] {
  const needle = foldPortalText(query);
  return debugOroRows(selection)
    .map((row) => ({
      key: `debug:${row.ID_EMPLEADO}`,
      society: null,
      employeeId: String(row.ID_EMPLEADO),
      fullName: String(row.NOMBRE),
      job: String(row.N_PUESTO),
      unit: String(row.N_UNIDAD),
      workCenter: String(row.N_CENTRO_TRABAJO),
      email: String(row.CORREO),
    }))
    .filter((person) => foldPortalText(Object.values(person).join(" ")).includes(needle));
}
export const debugOrgTree = (selection: PortalDebugSelection) =>
  buildOrgTree(debugOroRows(selection));
export function debugPersonHierarchy(
  selection: PortalDebugSelection,
  id: string,
): PersonHierarchy | null {
  const directory = debugDirectory(selection);
  const person = directory.find((entry) => entry.employeeId === id);
  if (!person) return null;
  const actor = DEBUG_ACTORS.find((entry) => entry.id === id);
  const manager = directory.find((entry) => entry.employeeId === actor?.manager) ?? null;
  return {
    person,
    manager,
    managerStatus: manager ? "available" : "none",
    reports: directory.filter((entry) =>
      DEBUG_ACTORS.some(
        (candidate) => candidate.id === entry.employeeId && candidate.manager === id,
      ),
    ),
    omittedReports: 0,
  };
}
export function debugPersonFile(
  selection: PortalDebugSelection,
  id: string,
  own = false,
): PersonFile | null {
  const person = debugDirectory(selection).find((entry) => entry.employeeId === id);
  const row = debugOroRows(selection).find((entry) => entry.ID_EMPLEADO === id);
  if (!person || !row) return null;
  return {
    person,
    managerId: DEBUG_ACTORS.find((entry) => entry.id === id)?.manager ?? null,
    sections: own ? buildOwnFileSections(row) : buildDirectorySections(row),
    emails: [],
  };
}
export function debugTasks(
  selection: PortalDebugSelection,
  kind: PortalTaskLine["kind"],
): PortalTaskLine[] {
  if (selection.scenario === "empty") return [];
  return [
    {
      kind,
      level: "1",
      title:
        kind === "validation"
          ? "Peticiones de formación · muestra"
          : kind === "valuation"
            ? "Evaluación de cursos · muestra"
            : "Consultar datos personales · muestra",
      tooltip: "Tarea ficticia de consulta; no se puede aprobar ni cerrar.",
      count: 2,
      deadline: "2026-12-15",
      lastUpdate: "2026-11-10",
      source: kind === "valuation" ? "sse_g3/sse_g3_p8.jsp" : "sse_g1/sse_g1_p1.jsp",
    },
  ];
}
