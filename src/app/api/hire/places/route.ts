import { NextResponse, type NextRequest } from "next/server";

import { deleteSessionCookie, getCurrentAuthContext } from "@/lib/auth/session";
import { searchHirePlaces } from "@/lib/meta4/hire/catalog-queries";

export const runtime = "nodejs";

/** Población search for the hire form; STD_GEO_PLACE is too large to ship whole. */
export async function GET(request: NextRequest) {
  const authSession = await getCurrentAuthContext();
  if (!authSession) {
    await deleteSessionCookie();
    return NextResponse.json({ ok: false, errorCode: "UNAUTHENTICATED" }, { status: 401 });
  }

  try {
    const places = await searchHirePlaces(request.nextUrl.searchParams.get("q") ?? "");
    return NextResponse.json(
      { ok: true, data: places },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("[peoplenet] place search failed", {
      message: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json({ ok: false, errorCode: "PLACE_SEARCH_FAILED" }, { status: 500 });
  }
}
