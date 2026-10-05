import { NextResponse, type NextRequest } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "@/lib/portal/context";
import { getOwnDocument } from "@/lib/portal/data/documents";
import { isPortalDocumentKind } from "@/lib/portal/data/documents-core";

export const runtime = "nodejs";

const notFound = () =>
  NextResponse.json({ ok: false, message: "Documento no disponible." }, { status: 404 });

/**
 * Descarga de un documento propio guardado en PeopleNet (recibo, certificado o
 * proyección). Solo lectura: la identidad, la matrícula y la sociedad se
 * resuelven en el servidor; la clave de la URL únicamente elige entre los
 * documentos de esa persona, así que no da acceso a los de nadie más.
 */
export async function GET(request: NextRequest, ctx: RouteContext<"/api/portal/documents/[kind]">) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }
  const { kind } = await ctx.params;
  const key = request.nextUrl.searchParams.get("k") ?? "";
  if (!isPortalDocumentKind(kind) || key.length > 64) return notFound();

  const context = await getPortalContext(authSession);
  if (context.mode !== "meta4" || context.identity.status !== "resolved") return notFound();

  try {
    const document = await getOwnDocument(
      kind,
      key,
      context.society,
      context.identity.person.employeeId,
    );
    if (!document) return notFound();
    return new NextResponse(new Uint8Array(document.bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(document.fileName)}`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("[portal] document download failed", {
      kind,
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(
      { ok: false, message: "No se ha podido leer el documento en PeopleNet." },
      { status: 500 },
    );
  }
}
