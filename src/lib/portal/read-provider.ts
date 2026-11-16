import "server-only";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import type { PortalContext } from "./context";
import { loadFeatureConsults, mapConsultRows } from "./data/consults";
import { withTeamScope } from "./data/team-scope";
import { employeeParam, organizationParam, runPortalSelect, sqlText } from "./peoplenet/query";
import { portalError, portalUnavailable } from "./result";
import { readPortal } from "./server";
import {
  debugSelection,
  debugTeam,
  EMPTY_READ_FILTERS,
  filterConsultData,
  parseReadFilters,
  type PortalConsultResults,
  type PortalDebugSelection,
  type PortalReadFilters,
  type PortalReadParams,
} from "./read-model";
import type { PortalFeature } from "./types";

export type ReadPersonOption = { readonly value: string; readonly label: string };
export type PortalReadPage = {
  readonly results: PortalConsultResults;
  readonly debug: PortalDebugSelection | null;
  readonly filters: PortalReadFilters;
  readonly people: readonly ReadPersonOption[];
  readonly labels: readonly string[];
  readonly filterValues: readonly string[];
  readonly message?: string;
};

export const canUsePortalDebug = (auth: ResolvedAuthSession, context: PortalContext): boolean =>
  isDebugAuthEnabled() &&
  auth.authContext.mode === "debug" &&
  context.mode === "unavailable" &&
  context.reason === "debug";

const TEAM_OPTIONS = withTeamScope(`SELECT DISTINCT O.ID_EMPLEADO,
  LTRIM(RTRIM(CONCAT(O.NOMBRE, ' ', O.APELLIDO_1, ' ', O.APELLIDO_2))) AS NOMBRE
FROM M4ORO_EMPLEADOS O WHERE O.ID_ORGANIZATION = @organization
  AND O.ID_EMPLEADO IN (@team) AND O.COMPUTA = '1' ORDER BY NOMBRE`);

/** La selección de otra persona siempre se revalida en servidor. */
export async function loadReadPeople(context: PortalContext): Promise<readonly ReadPersonOption[]> {
  if (context.mode !== "meta4" || context.identity.status !== "resolved") return [];
  const rows = await runPortalSelect(TEAM_OPTIONS, {
    organization: organizationParam(context.society),
    employeeId: employeeParam(context.identity.person.employeeId),
  });
  return rows.flatMap((row) => {
    const id = sqlText(row.ID_EMPLEADO);
    return id ? [{ value: id, label: `${sqlText(row.NOMBRE) ?? id} · ${id}` }] : [];
  });
}

export async function loadPortalReadPage(
  feature: PortalFeature,
  auth: ResolvedAuthSession,
  context: PortalContext,
  params: PortalReadParams = {},
): Promise<PortalReadPage> {
  const consults = (feature.sections ?? []).flatMap((section) =>
    section.kind === "consult" ? [section.consult] : [],
  );
  const labels = [
    ...new Set(consults.flatMap((consult) => consult.fields.map((field) => field.label))),
  ];
  const debug = canUsePortalDebug(auth, context) ? debugSelection(params) : null;
  const allowsTarget =
    feature.profile === "responsable" &&
    consults.some((consult) => consult.query?.scope === "team" || consult.reader === "dependency");
  const filters = parseReadFilters(params, labels, allowsTarget);
  const base = {
    debug,
    filters: filters ?? EMPTY_READ_FILTERS,
    labels,
    filterValues: [],
    people: [],
  };
  if (!filters) return { ...base, results: {}, message: "Los filtros de consulta no son válidos." };
  if (debug && feature.availableIn && !feature.availableIn.includes(debug.variant))
    return {
      ...base,
      results: {},
      message: "Esta pantalla no está disponible en la variante de muestra seleccionada.",
    };
  const peopleResult =
    allowsTarget && !debug
      ? await readPortal(context, () => loadReadPeople(context), "el equipo autorizado")
      : null;
  const people = !allowsTarget
    ? []
    : debug
      ? debugTeam(debug.actor).map((person) => ({ value: person.id, label: person.name }))
      : peopleResult?.status === "ok"
        ? peopleResult.data
        : [];
  if (filters.employee && !people.some((person) => person.value === filters.employee))
    return {
      ...base,
      people,
      results: {},
      message: "La persona seleccionada no pertenece a tu equipo autorizado.",
    };
  let results: PortalConsultResults;
  if (debug) {
    const { debugConsultRows } = await import("./debug.fixture");
    results = Object.fromEntries(
      consults.map((consult, index) => [
        consult.id,
        debug.scenario === "error" || (debug.scenario === "partial" && index === 1)
          ? portalError(
              "Error simulado de lectura; los otros apartados se conservan.",
              "READ_FAILED",
            )
          : consult.fields.some((field) => field.item)
            ? {
                status: "ok",
                source: "debug",
                data: mapConsultRows(
                  consult,
                  debugConsultRows(feature, consult, debug, filters.employee),
                ),
              }
            : portalUnavailable(
                ["P02", "P06"],
                "Falta la estructura del original; no se inventan campos en DEBUG.",
              ),
      ]),
    );
  } else
    results = await loadFeatureConsults(
      feature,
      context,
      filters.employee || undefined,
      filters.period || undefined,
    );
  const filterValues = [
    ...new Set(
      Object.values(results).flatMap((result) =>
        result.status === "ok"
          ? result.data.rows.flatMap((row) =>
              row.filter((field) => field.label === filters.field).map((field) => field.value),
            )
          : [],
      ),
    ),
  ].sort((a, b) => a.localeCompare(b, "es"));
  return {
    ...base,
    people,
    filterValues,
    results: Object.fromEntries(
      Object.entries(results).map(([key, result]) => [
        key,
        result.status === "ok"
          ? { ...result, data: filterConsultData(result.data, filters) }
          : result,
      ]),
    ),
  };
}
