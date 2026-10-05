import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { Meta4SessionRequiredError } from "@/lib/meta4/errors";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { isMeta4ProfileError } from "@/lib/meta4/profile-errors";
import { exportReceiptsToPdf } from "@/lib/payroll/receipt-export-pdf";
import { exportReceiptsToXlsx } from "@/lib/payroll/receipt-export-xlsx";
import { receiptsFileName } from "@/lib/payroll/receipt-format";
import { parsePayrollReceiptParameters } from "@/lib/payroll/receipt-parameters";
import { getPayrollReceiptRange, PayrollReceiptError } from "@/lib/peoplenet/payroll-receipt";

export const runtime = "nodejs";

const FORMATS = {
  pdf: { contentType: "application/pdf" },
  xlsx: { contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" },
} as const;

type ExportFormat = keyof typeof FORMATS;

const MAX_RECEIPT_IDS = 100;
const RECEIPT_ID_PATTERN = /^\d{4}-\d{2}-\d{2}(-\d{1,2})?$/;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const isFormat = (value: unknown): value is ExportFormat => value === "pdf" || value === "xlsx";

const badRequest = (message: string) => NextResponse.json({ ok: false, message }, { status: 400 });

/**
 * Descarga de recibos en PDF o Excel. El navegador solo envía los parámetros de
 * la consulta y qué nóminas quiere: los recibos se vuelven a leer de PeopleNet
 * con la sociedad de la sesión, así que no se puede exportar un recibo alterado.
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
  if (!isRecord(body)) return badRequest("La petición de descarga no es válida.");
  if (!isFormat(body.format)) return badRequest("El formato de descarga no es válido.");
  const format = body.format;

  const parsed = parsePayrollReceiptParameters(body.parameters);
  if (!parsed.ok) return badRequest(parsed.message);

  const { receiptIds } = body;
  if (
    receiptIds !== undefined &&
    (!Array.isArray(receiptIds) ||
      receiptIds.length === 0 ||
      receiptIds.length > MAX_RECEIPT_IDS ||
      !receiptIds.every((id) => typeof id === "string" && RECEIPT_ID_PATTERN.test(id)))
  ) {
    return badRequest("Las nóminas elegidas no son válidas.");
  }
  const wanted = Array.isArray(receiptIds) ? new Set<unknown>(receiptIds) : null;

  try {
    const context = await getMeta4OperationalContext(authSession);
    const { receipts } = await getPayrollReceiptRange({
      ...parsed.value,
      organization: context.society,
    });
    const entries = wanted ? receipts.filter((entry) => wanted.has(entry.id)) : receipts;
    if (entries.length === 0) {
      return NextResponse.json(
        { ok: false, message: "No hay nóminas que descargar con esos parámetros." },
        { status: 404 },
      );
    }

    const file =
      format === "pdf" ? await exportReceiptsToPdf(entries) : await exportReceiptsToXlsx(entries);
    const fileName = receiptsFileName(parsed.value.employeeId, entries, format);
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "content-type": FORMATS[format].contentType,
        "content-disposition": `attachment; filename="${fileName}"`,
        "cache-control": "no-store",
      },
    });
  } catch (error) {
    if (error instanceof PayrollReceiptError) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 400 });
    }
    if (error instanceof Meta4SessionRequiredError || isMeta4ProfileError(error)) {
      return NextResponse.json({ ok: false, message: error.message }, { status: 403 });
    }
    console.error("[payroll] receipt export failed", {
      name: error instanceof Error ? error.name : "unknown",
    });
    return NextResponse.json(
      { ok: false, message: "No se han podido generar las nóminas para descargar." },
      { status: 500 },
    );
  }
}
