import type { PortalResult } from "./result";
import type { ConsultData, PortalVariant } from "./types";

export const DEBUG_ACTORS = [
  { id: "90000", name: "Clara Martín · responsable", manager: null, unit: "Operaciones" },
  { id: "90001", name: "Ana López · empleada", manager: "90000", unit: "Administración" },
  { id: "90002", name: "Luis García · empleado", manager: "90000", unit: "Tecnología" },
  { id: "90003", name: "Marta Ruiz · equipo indirecto", manager: "90002", unit: "Tecnología" },
  { id: "91001", name: "Eva Sánchez · sin equipo", manager: null, unit: "Servicios" },
] as const;
export type DebugActorId = (typeof DEBUG_ACTORS)[number]["id"];
export type DebugScenario = "full" | "partial" | "empty" | "error";
export type PortalDebugSelection = {
  readonly actor: DebugActorId;
  readonly variant: PortalVariant;
  readonly scenario: DebugScenario;
};
export type PortalReadParams = Readonly<Record<string, string | string[] | undefined>>;
export const firstParam = (value: string | readonly string[] | undefined): string =>
  typeof value === "string" ? value : "";

export function copyPortalDebugParams(
  from: Pick<URLSearchParams, "get">,
  to: URLSearchParams,
): URLSearchParams {
  for (const key of ["debugActor", "debugVariant", "debugScenario"]) {
    const value = from.get(key);
    if (value) to.set(key, value);
  }
  return to;
}

export function debugSelection(params: PortalReadParams = {}): PortalDebugSelection {
  if (!params || typeof params !== "object" || Array.isArray(params)) params = {};
  const actor = DEBUG_ACTORS.find((entry) => entry.id === firstParam(params.debugActor));
  const variant = firstParam(params.debugVariant);
  const scenario = firstParam(params.debugScenario);
  return {
    actor: actor?.id ?? "90000",
    variant: variant === "BASE" || variant === "IBER" || variant === "COLL" ? variant : "CYC",
    scenario:
      scenario === "partial" || scenario === "empty" || scenario === "error" ? scenario : "full",
  };
}

/** Datos ficticios no llevan una sociedad operativa ni se hacen pasar por Meta4. */
export type PortalReadResult<T> =
  | PortalResult<T>
  | {
      readonly status: "ok";
      readonly source: "debug";
      readonly data: T;
    };
export type PortalConsultResults = Readonly<Record<string, PortalReadResult<ConsultData>>>;
export type PortalReadFilters = {
  readonly q: string;
  readonly period: string;
  readonly field: string;
  readonly value: string;
  readonly employee: string;
};
export const EMPTY_READ_FILTERS: PortalReadFilters = {
  q: "",
  period: "",
  field: "",
  value: "",
  employee: "",
};

export const foldPortalText = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es")
    .trim();

/** Solo se filtran datos ya autorizados; el texto del navegador nunca genera SQL. */
export function filterConsultData(data: ConsultData, filters: PortalReadFilters): ConsultData {
  const indexes = data.rows.flatMap((row, index) => {
    const haystack = foldPortalText(row.map((field) => field.value).join(" "));
    if (filters.q && !haystack.includes(foldPortalText(filters.q))) return [];
    if (
      filters.field &&
      filters.value &&
      !row.some(
        (field) =>
          field.label === filters.field &&
          foldPortalText(field.value) === foldPortalText(filters.value),
      )
    )
      return [];
    if (
      filters.period &&
      !row.some((field) => {
        const match = /^(\d{2})\/(\d{2})\/(\d{4})/.exec(field.value);
        return match
          ? `${match[3]}-${match[2]}` === filters.period
          : field.value.startsWith(filters.period);
      })
    )
      return [];
    return [index];
  });
  return {
    rows: indexes.map((index) => data.rows[index]),
    ...(data.links ? { links: indexes.map((index) => data.links?.[index] ?? null) } : {}),
    ...(data.personLinks
      ? { personLinks: indexes.map((index) => data.personLinks?.[index] ?? null) }
      : {}),
  };
}

export function parseReadFilters(
  params: PortalReadParams,
  labels: readonly string[],
  manager: boolean,
): PortalReadFilters | null {
  const q = firstParam(params.q).trim();
  const period = firstParam(params.period);
  const field = firstParam(params.field);
  const value = firstParam(params.value);
  const employee = firstParam(params.employee);
  if (
    q.length > 120 ||
    value.length > 200 ||
    (field && !labels.includes(field)) ||
    (period && !/^\d{4}-(0[1-9]|1[0-2])$/.test(period)) ||
    (employee && (!manager || !/^[A-Za-z0-9_-]{1,64}$/.test(employee))) ||
    [params.q, params.period, params.field, params.value, params.employee].some(Array.isArray)
  )
    return null;
  return { q, period, field, value, employee };
}

export function debugTeam(actor: DebugActorId): readonly (typeof DEBUG_ACTORS)[number][] {
  const ids = new Set<string>([actor]);
  for (let level = 0; level < 10; level++)
    for (const person of DEBUG_ACTORS)
      if (person.manager && ids.has(person.manager)) ids.add(person.id);
  return DEBUG_ACTORS.filter((person) => person.id !== actor && ids.has(person.id));
}
