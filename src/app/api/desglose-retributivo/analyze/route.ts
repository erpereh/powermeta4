import { analyzeBreakdown } from "@/features/retributive-breakdown/server/generate";

import { BREAKDOWN_NO_CACHE, withBreakdownFiles } from "../request";

export const runtime = "nodejs";

export function POST(request: Request): Promise<Response> {
  return withBreakdownFiles(request, "No se ha podido analizar el desglose.", async (files) =>
    Response.json(await analyzeBreakdown(files), { headers: BREAKDOWN_NO_CACHE }),
  );
}
