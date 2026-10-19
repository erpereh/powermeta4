import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "@/lib/portal/context";
import { projectionFileName } from "@/lib/portal/projections/export-layout";
import { exportProjectionToPdf } from "@/lib/portal/projections/export-pdf";
import { exportProjectionToXlsx } from "@/lib/portal/projections/export-xlsx";
import { loadProjectionPage } from "@/lib/portal/projections/load";

export const runtime = "nodejs";

const CONTENT_TYPES = {
  pdf: "application/pdf",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
} as const;

type ExportRequest = {
  format: keyof typeof CONTENT_TYPES;
  year?: string;
  employee?: string;
  scenario?: string;
};

const optionalText = (value: unknown): string | undefined | null =>
  value === undefined || value === null || value === ""
    ? undefined
    : typeof value === "string"
      ? value
      : null;

const parseRequest = (body: unknown): ExportRequest | null => {
  if (typeof body !== "object" || body === null) return null;
  const record: Record<string, unknown> = { ...body };
  const format = record.format;
  if (format !== "pdf" && format !== "xlsx") return null;
  const year = optionalText(record.year);
  const employee = optionalText(record.employee);
  const scenario = optionalText(record.scenario);
  if (year === null || employee === null || scenario === null) return null;
  return { format, year, employee, scenario };
};

const failure = (message: string, status: number) =>
  NextResponse.json({ ok: false, message }, { status });

/**
 * Descarga en PDF o Excel del informe de proyecciones. El navegador solo envía
 * el formato, el ejercicio y, como mucho, una matrícula: el informe se vuelve a
 * leer en servidor con las mismas reglas que la pantalla y no se guarda nada.
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
    return failure("La petición de descarga no es válida.", 400);
  }
  const parsed = parseRequest(body);
  if (!parsed) return failure("La petición de descarga no es válida.", 400);

  try {
    const context = await getPortalContext(authSession);
    const result = await loadProjectionPage(authSession, context, {
      year: parsed.year,
      employee: parsed.employee,
      scenario: parsed.scenario,
    });
    if (result.status === "unavailable") return failure(result.message, 503);
    if (result.status === "error") return failure(result.message, 400);
    const report = result.data.report;
    if (!report) return failure("No hay un desglose de proyecciones que exportar.", 404);

    const file =
      parsed.format === "pdf"
        ? await exportProjectionToPdf(report)
        : new Uint8Array(await exportProjectionToXlsx(report));
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "content-type": CONTENT_TYPES[parsed.format],
        "content-disposition": `attachment; filename="${projectionFileName(report, parsed.format)}"`,
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    console.error("[portal] projection export failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return failure("No se ha podido generar el fichero del informe de proyecciones.", 500);
  }
}
