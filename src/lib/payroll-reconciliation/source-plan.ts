import { LIMITS } from "./limits";
import type { Source, SourceCheckResult } from "./types";

/** The preview and the write use exactly the same replacement/duplicate rules. */
export function sourceChange(sources: Source[], source: Source) {
  const existing = sources.filter((item) => item.category === source.category);
  const duplicate = existing.find((item) => item.hash === source.hash);
  const check: SourceCheckResult = {
    category: source.category,
    filename: source.filename ?? source.category,
    operation: duplicate ? "skip" : existing.length ? "replace" : "add",
    records: (duplicate ?? source).facts.length,
    replacedFiles: duplicate ? [] : existing.map((item) => item.filename ?? item.category),
    hash: source.hash,
    cellCount: source.cellCount,
    diagnostics: source.diagnostics,
  };
  return {
    check,
    sources: duplicate
      ? sources
      : [...sources.filter((item) => item.category !== source.category), source],
  };
}

export function sourceLimitError(sources: { cellCount: number }[]): string {
  return sources.length > LIMITS.files ||
    sources.reduce((sum, item) => sum + item.cellCount, 0) > LIMITS.cells
    ? "El expediente supera el límite de veinte archivos o de dos millones de celdas. Quita archivos y vuelve a comprobar."
    : "";
}
