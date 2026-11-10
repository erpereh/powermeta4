import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentAuthContext } from "@/lib/auth/session";
import { getOwnPayslipsAction } from "@/app/actions/portal";
import { exportReceiptsToPdf } from "@/lib/payroll/receipt-export-pdf";
import { exportReceiptsToXlsx } from "@/lib/payroll/receipt-export-xlsx";

export const runtime = "nodejs";
const schema = z
  .object({
    format: z.enum(["pdf", "xlsx"]),
    fromPaymentDate: z.string().max(10),
    toPaymentDate: z.string().max(10),
    paymentType: z.enum(["current", "retroactive", "current-and-retroactive"]),
    debug: z.record(z.string(), z.string().max(200)).optional(),
  })
  .strict();

/** Reutiliza lectores y exportadores existentes; no acepta una matrícula ni datos del recibo. */
export async function POST(request: Request) {
  if (!(await getCurrentAuthContext()))
    return NextResponse.json({ message: "Vuelve a iniciar sesión." }, { status: 401 });
  const origin = request.headers.get("origin");
  if (
    origin &&
    (!URL.canParse(origin) ||
      new URL(origin).host !== (request.headers.get("host") ?? new URL(request.url).host))
  )
    return NextResponse.json({ message: "Origen no válido." }, { status: 403 });
  let body: unknown;
  try {
    const text = await request.text();
    if (text.length > 16_384) throw new Error();
    body = JSON.parse(text);
  } catch {
    return NextResponse.json({ message: "Petición no válida." }, { status: 400 });
  }
  const parsed = schema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json({ message: "Parámetros de descarga no válidos." }, { status: 400 });
  const { format, ...parameters } = parsed.data;
  const result = await getOwnPayslipsAction(parameters);
  if (!result.ok) return NextResponse.json({ message: result.message }, { status: 403 });
  if (!result.receipts.length)
    return NextResponse.json({ message: "No hay recibos en ese rango." }, { status: 404 });
  try {
    const bytes =
      format === "pdf"
        ? await exportReceiptsToPdf(result.receipts)
        : await exportReceiptsToXlsx(result.receipts);
    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type":
          format === "pdf"
            ? "application/pdf"
            : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="recibos-portal.${format}"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return NextResponse.json({ message: "No se ha podido generar la descarga." }, { status: 503 });
  }
}
