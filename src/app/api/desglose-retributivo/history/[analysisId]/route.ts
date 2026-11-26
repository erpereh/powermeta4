import { analysisNotFound, historyJson, withBreakdownHistory } from "../scope";

export const runtime = "nodejs";

type Context = { params: Promise<{ analysisId: string }> };

export function GET(_request: Request, { params }: Context) {
  return withBreakdownHistory(
    "No se ha podido abrir el análisis.",
    async (repository, companyId) => {
      const { analysisId } = await params;
      const analysis = repository.get(companyId, analysisId);
      return analysis ? historyJson(analysis) : analysisNotFound();
    },
  );
}

export function DELETE(_request: Request, { params }: Context) {
  return withBreakdownHistory(
    "No se ha podido eliminar el análisis.",
    async (repository, companyId) => {
      const { analysisId } = await params;
      if (!(await repository.remove(companyId, analysisId))) return analysisNotFound();
      return historyJson(repository.list(companyId));
    },
  );
}
