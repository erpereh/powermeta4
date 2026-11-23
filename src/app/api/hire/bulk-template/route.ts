import { NextResponse } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { buildHireBulkTemplate, hireBulkTemplateFileName } from "@/lib/meta4/hire/bulk-template";
import { loadHireCatalogState } from "@/lib/meta4/hire/catalog-queries";

export const runtime = "nodejs";

const XLSX_CONTENT_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

/**
 * Bulk hire template with the catalogs of the session's society. Nothing is
 * read from the browser and no file is stored.
 */
export async function GET() {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }
  const state = await loadHireCatalogState(authSession);
  if (state.status !== "ready") {
    return NextResponse.json(
      { ok: false, errorCode: "CATALOGS_UNAVAILABLE", message: state.message },
      { status: 503 },
    );
  }
  try {
    const bytes = await buildHireBulkTemplate(state.catalogs);
    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        "Content-Type": XLSX_CONTENT_TYPE,
        "Content-Disposition": `attachment; filename="${hireBulkTemplateFileName(state.society)}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[meta4-hire] bulk template failed", {
      message: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json({ ok: false, errorCode: "TEMPLATE_FAILED" }, { status: 500 });
  }
}
