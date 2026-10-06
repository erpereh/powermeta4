import type { DirectoryEntry, FileSection } from "./data/organization-core";
import type { PersonFile } from "./data/organization";
import type { PersonHierarchy } from "./data/person-hierarchy-core";

const record = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;
const nullableString = (value: unknown) => value === null || typeof value === "string";
const person = (value: unknown): value is DirectoryEntry =>
  record(value) &&
  typeof value.key === "string" &&
  typeof value.employeeId === "string" &&
  typeof value.fullName === "string" &&
  [value.society, value.job, value.unit, value.workCenter, value.email].every(nullableString);
const section = (value: unknown): value is FileSection =>
  record(value) &&
  typeof value.id === "string" &&
  typeof value.title === "string" &&
  Array.isArray(value.fields) &&
  value.fields.every(
    (field: unknown) =>
      record(field) && typeof field.label === "string" && typeof field.value === "string",
  );
export const isPersonHierarchy = (value: unknown): value is PersonHierarchy =>
  record(value) &&
  person(value.person) &&
  (value.manager === null || person(value.manager)) &&
  ["available", "none", "missing", "ambiguous", "self"].includes(String(value.managerStatus)) &&
  Array.isArray(value.reports) &&
  value.reports.every(person) &&
  typeof value.omittedReports === "number" &&
  Number.isInteger(value.omittedReports) &&
  value.omittedReports >= 0;
export const isPublicPersonFile = (value: unknown): value is PersonFile =>
  record(value) &&
  person(value.person) &&
  nullableString(value.managerId) &&
  Array.isArray(value.sections) &&
  value.sections.every(section) &&
  Array.isArray(value.emails) &&
  value.emails.length === 0;

/** Valida datos de red y sociedad antes de incorporarlos al estado temporal de la vista. */
export async function loadOrganization<T>(
  id: string,
  kind: "hierarchy" | "person",
  society: string | null,
  signal: AbortSignal,
  guard: (value: unknown) => value is T,
): Promise<T> {
  const response = await fetch(`/api/portal/organization/${encodeURIComponent(id)}/${kind}`, {
    signal,
    cache: "no-store",
  });
  const value: unknown = await response.json();
  if (!record(value)) throw new Error("La respuesta no es válida.");
  if (value.status !== "ok")
    throw new Error(
      typeof value.message === "string" ? value.message : "No se ha podido completar la consulta.",
    );
  if (value.society !== society)
    throw new Error("La sociedad ha cambiado. Vuelve a abrir el organigrama.");
  if (!response.ok || value.data === null)
    throw new Error("La persona no está disponible en esta sociedad.");
  if (!guard(value.data)) throw new Error("La respuesta no cumple el contrato esperado.");
  return value.data;
}
