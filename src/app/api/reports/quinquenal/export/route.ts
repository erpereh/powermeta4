import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { getQuinquenalReport } from "@/lib/peoplenet/quinquenal";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";
import { exportQuinquenalToXlsx } from "@/lib/quinquenal/export-xlsx";
import { parseQuinquenalParameters } from "@/lib/quinquenal/parameters";
import { quinquenalFileName } from "@/lib/quinquenal/sheet";

export const runtime = "nodejs";

const XLSX_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

const badRequest = (message: string) => NextResponse.json({ ok: false, message }, { status: 400 });

/**
 * Descarga en Excel de la consulta quinquenal. El navegador solo envía la
 * matrícula opcional: los datos se vuelven a leer de PeopleNet con la sociedad
 * de la sesión y no se guarda ningún fichero.
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
  const parsed = parseQuinquenalParameters(body);
  if (!parsed.ok) return badRequest(parsed.message);

  try {
    const context = await getMeta4OperationalContext(authSession);
    const report = await getQuinquenalReport({
      organization: context.society,
      today: new Date().toISOString().slice(0, 10),
      employeeId: parsed.value.employeeId,
    });
    if (report.rows.length === 0) {
      return NextResponse.json(
        { ok: false, message: "No hay empleados que exportar con esos parámetros." },
        { status: 404 },
      );
    }

    const file = await exportQuinquenalToXlsx(report);
    const fileName = quinquenalFileName(report.generatedOn, parsed.value.employeeId);
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "content-type": XLSX_CONTENT_TYPE,
        "content-disposition": `attachment; filename="${fileName}"`,
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 403 });
    }
    if (error instanceof PortalSqlContractError) {
      return NextResponse.json(
        { ok: false, message: "La consulta quinquenal no está disponible en esta sociedad." },
        { status: 400 },
      );
    }
    console.error("[reports] quinquenal export failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(
      { ok: false, message: "No se ha podido generar el Excel de la consulta quinquenal." },
      { status: 500 },
    );
  }
}
