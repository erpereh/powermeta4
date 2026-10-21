import "server-only";

import type { PortalContext } from "../context";
import type { HolidayCalendar } from "../holidays/calendar";
import { HOLIDAY_READ_CONTRACT } from "../holidays/contract";
import { portalUnavailable, type PortalResult } from "../result";

/**
 * Límite de lectura propio: sociedad e identidad llegan solo del contexto del
 * servidor. `null` representará una ausencia de asignación comprobada en la VM;
 * nunca se deduce esa ausencia de una lectura pendiente o fallida.
 * Hasta confirmar CARGA no ejecuta SQL, SOAP ni recurre a GTA.
 */
export async function getHolidayCalendar(
  context: PortalContext,
): Promise<PortalResult<HolidayCalendar | null>> {
  if (context.mode !== "meta4") return portalUnavailable(["P03"], context.message);
  if (context.identity.status !== "resolved")
    return portalUnavailable(["P03"], context.identity.message);
  return portalUnavailable(HOLIDAY_READ_CONTRACT.pending, HOLIDAY_READ_CONTRACT.detail);
}
