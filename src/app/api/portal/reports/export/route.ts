import { NextResponse } from "next/server";
import { z } from "zod";
import { getCurrentAuthContext } from "@/lib/auth/session";
import { getPortalContext } from "@/lib/portal/context";
import { getPortalFeature } from "@/lib/portal/registry";
import { loadPortalReadPage } from "@/lib/portal/read-provider";
import { exportPortalReport } from "@/lib/portal/report-export";

export const runtime = "nodejs";
const RequestSchema = z
  .object({
    featureId: z.string().max(160),
    format: z.enum(["pdf", "xlsx"]),
    params: z.record(z.string().max(200)).default({}),
  })
  .strict();
const failure = (status: number, message: string) =>
  NextResponse.json({ ok: false, message }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const auth = await getCurrentAuthContext();
  if (!auth) return failure(401, "Vuelve a iniciar sesión.");
  const origin = request.headers.get("origin");
  if (
    origin &&
    (!URL.canParse(origin) ||
      new URL(origin).host !== (request.headers.get("host") ?? new URL(request.url).host))
  )
    return failure(403, "Origen no permitido.");
  if (Number(request.headers.get("content-length") ?? 0) > 16_384)
    return failure(413, "Petición demasiado grande.");
  let body: unknown;
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > 16_384)
      return failure(413, "Petición demasiado grande.");
    body = JSON.parse(text);
  } catch {
    return failure(400, "La petición no es válida.");
  }
  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) return failure(400, "La petición no es válida.");
  const feature = getPortalFeature(parsed.data.featureId);
  if (!feature || !feature.sections?.some((section) => section.kind === "query"))
    return failure(404, "Consulta no disponible.");
  try {
    const context = await getPortalContext(auth);
    const page = await loadPortalReadPage(feature, auth, context, parsed.data.params);
    if (page.message) return failure(403, page.message);
    if (
      context.mode === "meta4" &&
      feature.availableIn &&
      !feature.availableIn.includes(context.variant)
    )
      return failure(403, "Pantalla no disponible.");
    if (!Object.values(page.results).some((result) => result.status === "ok"))
      return failure(503, "No hay lecturas disponibles para exportar.");
    const file = await exportPortalReport(feature, page, parsed.data.format);
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type":
          parsed.data.format === "pdf"
            ? "application/pdf"
            : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="portal-consulta.${parsed.data.format}"`,
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (cause) {
    console.error("[portal] readonly export failed", {
      name: cause instanceof Error ? cause.name : "unknown",
    });
    return failure(500, "No se ha podido generar el informe.");
  }
}
