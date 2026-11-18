import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { getPrimaveraReport } from "@/lib/peoplenet/primavera";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";
import { parsePrimaveraParameters } from "@/lib/primavera/cuadre";
import { exportPrimaveraToXlsx, primaveraFileName } from "@/lib/primavera/export-xlsx";

export const runtime = "nodejs";

const XLSX_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

const badRequest = (message: string) => NextResponse.json({ ok: false, message }, { status: 400 });

/**
 * Descarga en Excel del informe Primavera. El navegador solo envía el año y
 * los meses: los datos se vuelven a leer de PeopleNet con la sociedad de la
 * sesión y no se guarda ningún fichero.
 */
export async function POST(request: Request) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest("La petición de descarga no es válida.");
  }
  const parsed = parsePrimaveraParameters(body);
  if (!parsed.ok) return badRequest(parsed.message);

  try {
    const context = await getMeta4OperationalContext(authSession);
    const report = await getPrimaveraReport(context.society, parsed.value);
    if (report.months.length === 0) {
      return NextResponse.json(
        { ok: false, message: "No hay nóminas de Portugal que exportar en ese periodo." },
        { status: 404 },
      );
    }

    const generatedAt = new Date();
    const file = await exportPrimaveraToXlsx(report, generatedAt);
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "content-type": XLSX_CONTENT_TYPE,
        "content-disposition": `attachment; filename="${primaveraFileName(report, generatedAt)}"`,
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 403 });
    }
    if (error instanceof PortalSqlContractError) {
      return NextResponse.json(
        { ok: false, message: "El informe Primavera no está disponible en esta sociedad." },
        { status: 400 },
      );
    }
    console.error("[reports] primavera export failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(
      { ok: false, message: "No se ha podido generar el Excel de Primavera." },
      { status: 500 },
    );
  }
}
