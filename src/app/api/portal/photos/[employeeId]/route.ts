import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "@/lib/portal/context";
import { getPortalPhoto, PortalPhotoContractError } from "@/lib/portal/data/photos";
import { PortalDataAmbiguousError } from "@/lib/portal/data/errors";
import { isOrgEmployeeId } from "@/lib/portal/organization-navigation";

export const runtime = "nodejs";
const headers = { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" };
const unavailable = (status = 404) =>
  NextResponse.json({ message: "Fotografía no disponible." }, { status, headers });

/** La URL elige una persona del directorio; la sociedad siempre procede de la sesión. */
export async function GET(_request: Request, ctx: { params: Promise<{ employeeId: string }> }) {
  const auth = await getCurrentAuthContext();
  if (!auth) {
    await deleteSessionCookie();
    return unavailable(401);
  }
  const { employeeId } = await ctx.params;
  if (!isOrgEmployeeId(employeeId)) return unavailable();
  try {
    const context = await getPortalContext(auth);
    if (context.mode !== "meta4" || context.identity.status !== "resolved") return unavailable();
    const photo = await getPortalPhoto(context.society, employeeId);
    if (!photo) return unavailable();
    return new NextResponse(new Uint8Array(photo.bytes), {
      headers: { ...headers, "Content-Type": photo.mime },
    });
  } catch (error) {
    if (error instanceof PortalDataAmbiguousError) return unavailable();
    if (error instanceof PortalPhotoContractError) return unavailable(503);
    console.error("[portal] photo read failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return unavailable(503);
  }
}
