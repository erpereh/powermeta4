import "server-only";

import { callPortalService, type CallPortalServiceDeps } from "../soap/call";
import { mapTaskRecords, type PortalTaskLine } from "./tasks-core";

const OPERATIONS = [
  ["PGCO_TASKS", "task"],
  ["PGCO_VALIDATIONS", "validation"],
  ["PGCO_VALUATIONS", "valuation"],
] as const;

export type PortalTasks = {
  readonly lines: readonly PortalTaskLine[];
};

export const loadPortalTaskGroup = async (
  kind: PortalTaskLine["kind"],
  deps: CallPortalServiceDeps = {},
): Promise<readonly PortalTaskLine[]> => {
  const operation = OPERATIONS.find((entry) => entry[1] === kind)?.[0];
  if (!operation) throw new Error("Grupo de tareas desconocido.");
  const result = await callPortalService("PGCO_ES_WS_VALIDATIONS", operation, {}, deps);
  return mapTaskRecords(kind, result.nodes.PGCO_ES_WS_VALIDATIONS ?? []);
};

/**
 * Tareas, validaciones y valoraciones del usuario de la sesión. El servicio no
 * recibe argumentos: Meta4 resuelve la persona con su propia sesión.
 */
export const loadPortalTasks = async (deps: CallPortalServiceDeps = {}): Promise<PortalTasks> => {
  const results: PortalTaskLine[][] = [];
  for (const [, kind] of OPERATIONS) results.push([...(await loadPortalTaskGroup(kind, deps))]);
  return { lines: results.flat() };
};
