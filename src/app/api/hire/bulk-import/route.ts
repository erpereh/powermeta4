import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { parseHireBulkWorkbook } from "@/lib/meta4/hire/bulk-import";
import { resolveHireBulkPlaces } from "@/lib/meta4/hire/bulk-places";
import { loadHireCatalogState } from "@/lib/meta4/hire/catalog-queries";

export const runtime = "nodejs";

/** The proxy accepts 10 MB per request. */
const MAX_FILE_BYTES = 9 * 1024 * 1024;

const badRequest = (message: string) => NextResponse.json({ ok: false, message }, { status: 400 });

/**
 * Reads a filled bulk hire template and returns the people for the form to
 * review; nothing is launched, stored or logged (only counts).
 */
export async function POST(request: Request) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const file = form?.get("file");
  if (!(file instanceof File)) return badRequest("Selecciona el Excel con las personas.");
  if (!/\.xlsx?$/i.test(file.name)) return badRequest("El fichero debe ser un Excel (.xlsx).");
  if (file.size > MAX_FILE_BYTES) return badRequest("El fichero supera los 9 MB.");

  const state = await loadHireCatalogState(authSession);
  if (state.status !== "ready") {
    return NextResponse.json({ ok: false, message: state.message }, { status: 503 });
  }
  try {
    const parsed = parseHireBulkWorkbook(Buffer.from(await file.arrayBuffer()), state.catalogs);
    const places = await resolveHireBulkPlaces(parsed.people);
    console.info(
      `[meta4-hire] bulk import ${JSON.stringify({
        people: places.people.length,
        problems: parsed.problems.length + places.problems.length,
      })}`,
    );
    return NextResponse.json(
      {
        ok: true,
        people: places.people.map(({ values, cityName }) => ({ values, cityName })),
        problems: [...parsed.problems, ...places.problems],
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[meta4-hire] bulk import failed", {
      message: error instanceof Error ? error.message : String(error),
    });
    return badRequest("No se ha podido leer el Excel. Usa la plantilla descargada.");
  }
}
