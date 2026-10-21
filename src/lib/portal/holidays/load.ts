import "server-only";

import { isDebugAuthEnabled } from "@/lib/auth/debug-config";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import type { PortalContext } from "../context";
import { getHolidayCalendar } from "../data/holidays";
import type { PendingId } from "../types";
import { currentHolidayYear, type HolidayCalendar } from "./calendar";

export type HolidayLoad =
  | { readonly status: "ok"; readonly data: HolidayCalendar; readonly debug: boolean }
  | { readonly status: "unassigned"; readonly year: number }
  | {
      readonly status: "unavailable";
      readonly message: string;
      readonly pending: readonly PendingId[];
    }
  | { readonly status: "error"; readonly message: string };

export async function loadHolidayPage(
  auth: ResolvedAuthSession,
  context: PortalContext,
): Promise<HolidayLoad> {
  const now = new Date();
  const year = currentHolidayYear(now);
  if (
    isDebugAuthEnabled() &&
    auth.authContext.mode === "debug" &&
    context.mode === "unavailable" &&
    context.reason === "debug"
  ) {
    const { holidayDebugData } = await import("./debug.fixture");
    return { status: "ok", data: holidayDebugData(year), debug: true };
  }
  if (auth.authContext.mode !== "meta4")
    return {
      status: "unavailable",
      message: "El calendario necesita una sesión Meta4 válida.",
      pending: ["P03"],
    };
  const result = await getHolidayCalendar(context, now);
  if (result.status !== "ok") return result;
  if (context.mode !== "meta4" || result.society !== context.society)
    return {
      status: "error",
      message: "El calendario recibido no corresponde a la sociedad actual.",
    };
  if (!result.data) return { status: "unassigned", year };
  // La pantalla no acepta un ejercicio del navegador ni mezcla sociedades.
  if (result.data.year !== year)
    return {
      status: "error",
      message: "El calendario recibido no corresponde a la sociedad y al año actuales.",
    };
  return { status: "ok", data: result.data, debug: false };
}
