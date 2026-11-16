import "server-only";

import { NextResponse } from "next/server";
import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "./context";
import { getDirectoryPerson, getPersonHierarchy } from "./data/organization";
import { isOrgEmployeeId } from "./organization-navigation";
import { portalError, portalUnavailable } from "./result";
import { readPortal } from "./server";
import { canUsePortalDebug } from "./read-provider";
import { debugSelection, type PortalReadParams } from "./read-model";

const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };

/** Solo datos públicos de directorio; la URL nunca elige sociedad ni identidad propia. */
export async function readOrganizationApi(employeeId: string, kind: "hierarchy" | "person", params: PortalReadParams = {}) {
  const auth = await getCurrentAuthContext();
  if (!auth) {
    await deleteSessionCookie();
    return NextResponse.json(portalError("Vuelve a iniciar sesión.", "SESSION_EXPIRED"), {
      status: 401,
      headers,
    });
  }
  if (!isOrgEmployeeId(employeeId))
    return NextResponse.json(portalError("La matrícula no es válida."), { status: 400, headers });
  try {
    const context = await getPortalContext(auth);
    if (canUsePortalDebug(auth, context)) {
      const selection = debugSelection(params);
      if (selection.scenario === "error") return NextResponse.json(portalError("Error simulado del directorio."), { status: 503, headers });
      const { debugPersonFile, debugPersonHierarchy } = await import("./organization-debug.fixture");
      const data = kind === "hierarchy" ? debugPersonHierarchy(selection, employeeId) : debugPersonFile(selection, employeeId);
      return NextResponse.json({ status: "ok", source: "debug", society: null, data }, { status: data ? 200 : 404, headers });
    }
    if (context.mode !== "meta4")
      return NextResponse.json(portalUnavailable(["P03"], context.message), {
        status: 403,
        headers,
      });
    if (context.identity.status !== "resolved")
      return NextResponse.json(portalError(context.identity.message), { status: 403, headers });
    const result = await readPortal(
      context,
      async (meta4) =>
        kind === "hierarchy"
          ? getPersonHierarchy(meta4.society, employeeId)
          : getDirectoryPerson(meta4.society, employeeId, true),
      kind === "hierarchy" ? "el equipo" : "la ficha pública",
    );
    const status = result.status === "ok" ? (result.data ? 200 : 404) : 503;
    return NextResponse.json(result, { status, headers });
  } catch (error) {
    console.error("[portal] organization read failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(portalError("No se ha podido completar la consulta.", "READ_FAILED"), {
      status: 503,
      headers,
    });
  }
}
