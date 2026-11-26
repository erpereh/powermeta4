import { prepareBreakdown } from "@/features/retributive-breakdown/server/generate";

import { failure, readBreakdownFiles } from "../request";
import { analysisNotFound, historyJson, withBreakdownHistory } from "./scope";

export const runtime = "nodejs";

export function GET() {
  return withBreakdownHistory(
    "No se ha podido cargar el historial.",
    async (repository, companyId) => historyJson(repository.list(companyId)),
  );
}

export function POST(request: Request) {
  return withBreakdownHistory("No se ha podido guardar el análisis.", (repository, companyId) =>
    readBreakdownFiles(request, async (files) => {
      const { result, books } = await prepareBreakdown(files);
      return historyJson(await repository.save(companyId, result, books), 201);
    }),
  );
}

export function PATCH(request: Request) {
  return withBreakdownHistory(
    "No se ha podido cambiar el análisis activo.",
    async (repository, companyId) => {
      const patch: unknown = await request.json().catch(() => null);
      if (!patch || typeof patch !== "object" || !("activeAnalysisId" in patch)) {
        return failure("Selecciona un análisis válido.", 400);
      }
      const id = patch.activeAnalysisId;
      if (id !== null && (typeof id !== "string" || !id)) {
        return failure("Selecciona un análisis válido.", 400);
      }
      const analysis = await repository.activate(companyId, id);
      return analysis === undefined ? analysisNotFound() : historyJson(analysis);
    },
  );
}

export function DELETE() {
  return withBreakdownHistory(
    "No se ha podido limpiar el historial.",
    async (repository, companyId) => {
      await repository.remove(companyId);
      return historyJson(repository.list(companyId));
    },
  );
}
