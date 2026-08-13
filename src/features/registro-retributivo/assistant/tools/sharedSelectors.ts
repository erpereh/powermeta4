import type {
  AnalysisResult,
  InternalExcelCheckRow,
  InternalExcelNormalizedVariablesCheckRow,
  PersonComparisonRow,
} from "@/features/registro-retributivo/types";

export function selectPerson(result: AnalysisResult, personId: string): PersonComparisonRow | undefined {
  return result.people.find((row) => row.employeeNumber === personId);
}

export function selectPersonProfile(result: AnalysisResult, personId: string) {
  const row = selectPerson(result, personId);
  if (!row) return undefined;
  return selectPersonProfileFromRow(row);
}

export function selectPersonProfileFromRow(row: PersonComparisonRow) {
  return {
    personId: row.employeeNumber,
    workplace: row.workplace,
    position: row.position,
    category: row.category,
    totals: { registro: row.registroTotal, payroll: row.pdfTotal, difference: row.totalDifference },
    blocks: {
      salary: { registro: row.salaryRegistro, payroll: row.salaryPdf, difference: row.salaryDifference },
      salaryComplement: {
        registro: row.salaryComplementRegistro,
        payroll: row.salaryComplementPdf,
        difference: row.salaryComplementDifference,
      },
      extraSalary: {
        registro: row.extraSalaryRegistro,
        payroll: row.extraSalaryPdf,
        difference: row.extraSalaryDifference,
      },
    },
    status: row.status,
    periods: [...row.periods],
  };
}

export function selectBreakdownProjection(row: InternalExcelCheckRow) {
  return {
    personId: row.employeeNumber,
    salaryPeriod: row.salaryPeriod,
    salaryBreakdown: row.salaryBreakdown,
    salaryDifference: row.salaryDifference,
    salaryComplementPeriod: row.salaryComplementPeriod,
    salaryComplementBreakdown: row.salaryComplementBreakdown,
    salaryComplementDifference: row.salaryComplementDifference,
    extraSalaryPeriod: row.extraSalaryPeriod,
    extraSalaryBreakdown: row.extraSalaryBreakdown,
    extraSalaryDifference: row.extraSalaryDifference,
    status: row.status,
  };
}

export function selectNormalizedProjection(row: InternalExcelNormalizedVariablesCheckRow) {
  return {
    personId: row.employeeNumber,
    salaryPeriod: row.salaryPeriod,
    salaryNormalizedPlusVariables: row.salaryNormalizedPlusVariables,
    salaryDifference: row.salaryDifference,
    salaryComplementPeriod: row.salaryComplementPeriod,
    salaryComplementNormalizedPlusVariables: row.salaryComplementNormalizedPlusVariables,
    salaryComplementDifference: row.salaryComplementDifference,
    extraSalaryPeriod: row.extraSalaryPeriod,
    extraSalaryNormalizedPlusVariables: row.extraSalaryNormalizedPlusVariables,
    extraSalaryDifference: row.extraSalaryDifference,
    totalPeriod: row.totalPeriod,
    totalNormalizedPlusVariables: row.totalNormalizedPlusVariables,
    totalDifference: row.totalDifference,
    status: row.status,
  };
}

export function selectPersonCuadreReg(result: AnalysisResult, personId: string) {
  const breakdown = result.internalExcelChecks.find((row) => row.employeeNumber === personId);
  const normalized = result.internalExcelNormalizedVariablesChecks?.find(
    (row) => row.employeeNumber === personId,
  );
  return {
    personId,
    breakdown: breakdown ? selectBreakdownProjection(breakdown) : undefined,
    normalizedVariables: normalized ? selectNormalizedProjection(normalized) : undefined,
  };
}

export function selectBreakdownTotalDifference(row: InternalExcelCheckRow): number {
  return row.salaryDifference + row.salaryComplementDifference + row.extraSalaryDifference;
}

export function selectBreakdownMaxDifference(row: InternalExcelCheckRow): number {
  return Math.max(
    Math.abs(row.salaryDifference),
    Math.abs(row.salaryComplementDifference),
    Math.abs(row.extraSalaryDifference),
  );
}

export function selectNormalizedMaxDifference(row: InternalExcelNormalizedVariablesCheckRow): number {
  return Math.max(
    Math.abs(row.salaryDifference),
    Math.abs(row.salaryComplementDifference),
    Math.abs(row.extraSalaryDifference),
    Math.abs(row.totalDifference),
  );
}

export function selectPersonDifferenceGroups(result: AnalysisResult, facet: "workplace" | "position") {
  const groups = new Map<string, { count: number; difference: number }>();
  for (const row of result.people) {
    const key = row[facet] || "Sin dato";
    const current = groups.get(key) ?? { count: 0, difference: 0 };
    groups.set(key, { count: current.count + 1, difference: current.difference + row.totalDifference });
  }
  return [...groups].map(([value, totals]) => ({ value, ...totals })).sort(
    (left, right) => Math.abs(right.difference) - Math.abs(left.difference),
  );
}

export function selectConceptDifferenceGroups(result: AnalysisResult) {
  const groups = new Map<
    string,
    { registroCode: string; pdfConcept?: string; difference: number; status: string }
  >();
  for (const row of result.concepts) {
    const key = `${row.registroCode}\u0000${row.pdfConcept ?? ""}`;
    const current = groups.get(key);
    groups.set(key, {
      registroCode: row.registroCode,
      pdfConcept: row.pdfConcept,
      difference: (current?.difference ?? 0) + row.difference,
      status:
        current?.status === "Diferencia" || row.status === "Diferencia" ? "Diferencia" : row.status,
    });
  }
  return [...groups.values()].sort((left, right) => Math.abs(right.difference) - Math.abs(left.difference));
}
