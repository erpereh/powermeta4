import { isBreakdownOutput } from "@/features/retributive-breakdown/contract";
import { generateBreakdown } from "@/features/retributive-breakdown/server/generate";
import { BreakdownInputError } from "@/features/retributive-breakdown/server/workbook";

import { breakdownDownload, withBreakdownFiles } from "../request";

export const runtime = "nodejs";

export function POST(request: Request): Promise<Response> {
  return withBreakdownFiles(
    request,
    "No se ha podido exportar el desglose.",
    async (files, form) => {
      const output = form.get("output") ?? "zip";
      if (!isBreakdownOutput(output)) throw new BreakdownInputError("Tipo de descarga no válido.");
      return breakdownDownload(await generateBreakdown(files, output), output);
    },
  );
}
