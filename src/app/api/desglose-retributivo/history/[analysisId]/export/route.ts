import { isBreakdownOutput } from "@/features/retributive-breakdown/contract";
import { exportBreakdown } from "@/features/retributive-breakdown/server/generate";

import { breakdownDownload, failure } from "../../../request";
import { analysisNotFound, withBreakdownHistory } from "../../scope";

export const runtime = "nodejs";

export function GET(request: Request, { params }: { params: Promise<{ analysisId: string }> }) {
  return withBreakdownHistory(
    "No se ha podido exportar el desglose.",
    async (repository, companyId) => {
      const output = new URL(request.url).searchParams.get("output") ?? "zip";
      if (!isBreakdownOutput(output)) return failure("Tipo de descarga no válido.", 400);
      const { analysisId } = await params;
      const grouping = output === "zip" || output === "complete" ? undefined : output;
      const books = repository.readBooks(companyId, analysisId, grouping);
      if (!books.size) return analysisNotFound();
      return breakdownDownload(await exportBreakdown(books, output), output);
    },
  );
}
