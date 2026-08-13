import type { AnalysisStatus, ConceptComparisonRow, PersonComparisonRow } from "@/features/registro-retributivo/types";
import { roundMoney } from "@/features/registro-retributivo/utils/money";

export function conceptGrossDifference(row: ConceptComparisonRow): number {
  return row.grossDifference ?? row.difference;
}

export function conceptJustifiedAmount(row: ConceptComparisonRow): number {
  return row.justifiedAmount ?? 0;
}

export function conceptAdjustedDifference(row: ConceptComparisonRow): number {
  return row.adjustedDifference ?? roundMoney(conceptGrossDifference(row) - conceptJustifiedAmount(row));
}

export function conceptGrossStatus(row: ConceptComparisonRow): AnalysisStatus {
  return row.grossStatus ?? row.status;
}

export function conceptAdjustedStatus(row: ConceptComparisonRow): AnalysisStatus {
  return row.adjustedStatus ?? row.status;
}

export function conceptIsJustified(row: ConceptComparisonRow): boolean {
  return row.isJustified ?? Boolean(row.justificationReason || Math.abs(conceptJustifiedAmount(row)) > 0.005);
}

export function conceptJustificationReason(row: ConceptComparisonRow): string | undefined {
  return row.justificationReason;
}

export function personGrossSalaryDifference(row: PersonComparisonRow): number {
  return row.grossSalaryDifference ?? row.salaryDifference;
}

export function personGrossSalaryComplementDifference(row: PersonComparisonRow): number {
  return row.grossSalaryComplementDifference ?? row.salaryComplementDifference;
}

export function personGrossExtraSalaryDifference(row: PersonComparisonRow): number {
  return row.grossExtraSalaryDifference ?? row.extraSalaryDifference;
}

export function personGrossTotalDifference(row: PersonComparisonRow): number {
  return row.grossTotalDifference ?? row.totalDifference;
}

export function personJustifiedSalaryAmount(row: PersonComparisonRow): number {
  return row.justifiedSalaryAmount ?? 0;
}

export function personJustifiedSalaryComplementAmount(row: PersonComparisonRow): number {
  return row.justifiedSalaryComplementAmount ?? 0;
}

export function personJustifiedExtraSalaryAmount(row: PersonComparisonRow): number {
  return row.justifiedExtraSalaryAmount ?? 0;
}

export function personJustifiedTotalAmount(row: PersonComparisonRow): number {
  return row.justifiedTotalAmount ?? 0;
}

export function personAdjustedSalaryDifference(row: PersonComparisonRow): number {
  return row.adjustedSalaryDifference ?? roundMoney(personGrossSalaryDifference(row) - personJustifiedSalaryAmount(row));
}

export function personAdjustedSalaryComplementDifference(row: PersonComparisonRow): number {
  return row.adjustedSalaryComplementDifference ?? roundMoney(personGrossSalaryComplementDifference(row) - personJustifiedSalaryComplementAmount(row));
}

export function personAdjustedExtraSalaryDifference(row: PersonComparisonRow): number {
  return row.adjustedExtraSalaryDifference ?? roundMoney(personGrossExtraSalaryDifference(row) - personJustifiedExtraSalaryAmount(row));
}

export function personAdjustedTotalDifference(row: PersonComparisonRow): number {
  return row.adjustedTotalDifference ?? roundMoney(personGrossTotalDifference(row) - personJustifiedTotalAmount(row));
}

export function personGrossStatus(row: PersonComparisonRow): AnalysisStatus {
  return row.grossStatus ?? row.status;
}

export function personAdjustedStatus(row: PersonComparisonRow): AnalysisStatus {
  return row.adjustedStatus ?? row.status;
}

export function personHasJustifiedConcepts(row: PersonComparisonRow): boolean {
  return (row.justifiedConceptsCount ?? 0) > 0 || Math.abs(personJustifiedTotalAmount(row)) > 0.005;
}

export function isDifferenceStatus(status: AnalysisStatus): boolean {
  return status === "Diferencia" || status === "Revisar";
}
