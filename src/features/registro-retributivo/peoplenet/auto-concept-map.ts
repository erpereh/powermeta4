import { normalizePdfConcept } from "@/features/registro-retributivo/compare/conceptMapping";
import type { ConceptMappingRule } from "@/features/registro-retributivo/types";

export interface ColumnSource {
  readonly table: string;
  readonly column: string;
}

/**
 * Reglas automáticas del análisis desde PeopleNet: una línea del recibo RECIBO
 * y un concepto del Registro que leen la misma columna física del acumulado son
 * el mismo importe, sin depender del texto del recibo. Si una columna apunta a
 * varios conceptos no se decide y la línea queda para el mapa del usuario.
 */
export function buildAutoConceptMap(
  lineSources: readonly (ColumnSource & {
    readonly concept: string;
    readonly informative: boolean;
  })[],
  itemColumns: readonly (ColumnSource & { readonly code: string })[],
): ConceptMappingRule[] {
  const byTableColumn = new Map<string, Set<string>>();
  const byColumn = new Map<string, Set<string>>();
  for (const item of itemColumns) {
    const exact = `${item.table}.${item.column}`;
    byTableColumn.set(exact, (byTableColumn.get(exact) ?? new Set()).add(item.code));
    byColumn.set(item.column, (byColumn.get(item.column) ?? new Set()).add(item.code));
  }

  const rules = new Map<string, ConceptMappingRule>();
  for (const line of lineSources) {
    const normalized = normalizePdfConcept(line.concept);
    if (!normalized || rules.has(normalized)) continue;
    // La misma columna puede leerse a nivel de alta o de rol según la tabla.
    const codes = byTableColumn.get(`${line.table}.${line.column}`) ?? byColumn.get(line.column);
    if (codes?.size !== 1) continue;
    const [registroCode] = codes;
    if (!registroCode) continue;
    rules.set(normalized, {
      pdfConcept: line.concept,
      normalizedPdfConcept: normalized,
      // `validateConceptMapForCodes` corrige el bloque con el del Registro.
      block: "C. Salarial",
      blockKey: "salaryComplement",
      registroCode,
      status: "Incluido",
      sourceType: line.informative ? "informativo" : "devengo",
      // Una línea informativa (especie, aportaciones…) cuenta si el Registro la
      // incluye; si el mismo recibo trae un devengo del código, prevalece el devengo.
      allowInformative: line.informative,
      dedupePriority: line.informative ? "informativo" : "devengo",
      includedInComparison: true,
      active: true,
      reason: `Mapeo automático: la línea del recibo y el concepto del Registro leen la misma columna de PeopleNet (${line.column}).`,
    });
  }
  return [...rules.values()];
}
