import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import {
  exportPayrollReportToXlsx,
  payrollReportFileName,
} from "@/lib/payroll-reports/export-xlsx";
import { PayrollReportDataError } from "@/lib/payroll-reports/result-data";
import { parsePayrollReportRunKey } from "@/lib/payroll-reports/run-key";
import { getPayrollReportRun } from "@/lib/peoplenet/payroll-reports";
import { PortalSqlContractError } from "@/lib/portal/peoplenet/query";

export const runtime = "nodejs";

const XLSX_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

const badRequest = (message: string) => NextResponse.json({ ok: false, message }, { status: 400 });

/**
 * Descarga en Excel del resultado de una ejecución. El navegador solo envía la
 * clave de la ejecución: el resultado se vuelve a leer de PeopleNet con la
 * sociedad de la sesión y no se guarda ningún fichero.
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
  const parsed = parsePayrollReportRunKey(body);
  if (!parsed.ok) return badRequest(parsed.message);

  try {
    const context = await getMeta4OperationalContext(authSession);
    const detail = await getPayrollReportRun(context.society, parsed.value);
    if (!detail || detail.rows.length === 0) {
      return NextResponse.json(
        { ok: false, message: "Esta ejecución no tiene datos que descargar." },
        { status: 404 },
      );
    }

    const generatedAt = new Date();
    const file = await exportPayrollReportToXlsx(detail, generatedAt);
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "content-type": XLSX_CONTENT_TYPE,
        "content-disposition": `attachment; filename="${payrollReportFileName(detail, generatedAt)}"`,
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 403 });
    }
    if (error instanceof PayrollReportDataError || error instanceof PortalSqlContractError) {
      return NextResponse.json(
        { ok: false, message: "El resultado de este informe no se puede exportar." },
        { status: 400 },
      );
    }
    console.error("[reports] payroll report export failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(
      { ok: false, message: "No se ha podido generar el Excel del informe." },
      { status: 500 },
    );
  }
}
