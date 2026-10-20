import { NextResponse, type NextRequest } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { certificateFileName } from "@/lib/portal/certificates/core";
import { renderCertificatePdf } from "@/lib/portal/certificates/export-pdf";
import { loadCertificatePage } from "@/lib/portal/certificates/load";
import { getPortalContext } from "@/lib/portal/context";

export const runtime = "nodejs";

const failure = (message: string, status: number) =>
  NextResponse.json({ ok: false, message }, { status });

const optional = (value: string | null): string | undefined =>
  value === null || value === "" ? undefined : value;

/**
 * Certificado de retenciones en PDF (`CYC_RP_CERT_HAB_<año>`). La vista previa
 * lo abre `inline` y «Descargar PDF» con `?download=1`: son los mismos bytes.
 * El navegador solo envía ejercicio y matrícula; el servidor vuelve a leer con
 * las reglas de la pantalla y no guarda ficheros.
 */
export async function GET(request: NextRequest) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }
  const search = request.nextUrl.searchParams;
  const year = optional(search.get("year"));
  if (!year) return failure("Indica el ejercicio del certificado.", 400);
  try {
    const context = await getPortalContext(authSession);
    const result = await loadCertificatePage(authSession, context, {
      year,
      employee: optional(search.get("employee")),
    });
    if (result.status === "unavailable") return failure(result.message, 503);
    if (result.status === "error") return failure(result.message, 400);
    if (!result.certificate)
      return failure(
        result.page.selection.kind === "unavailable"
          ? result.page.selection.message
          : "No hay un certificado generado de ese ejercicio.",
        404,
      );
    const bytes = await renderCertificatePdf(result.certificate);
    const disposition = search.get("download") === "1" ? "attachment" : "inline";
    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `${disposition}; filename="${certificateFileName(result.certificate.year)}"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("[portal] certificate pdf failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return failure("No se ha podido generar el certificado de retenciones.", 500);
  }
}
