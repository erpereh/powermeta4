export type PayrollConceptType =
  | "devengo"
  | "deduccion"
  | "retencion"
  | "cotizacion"
  | "especie"
  | "informativo"
  | "coste_empresa"
  | "unknown";
export type Severity = "Alta" | "Media" | "Baja";
export type RetributionBlock = "Salario" | "C. Salarial" | "Extrasalarial";
export type ConceptBlockKey = "salary" | "salaryComplement" | "extraSalary";
export type MappingStatus = "Incluido" | "Justificado" | "Ignorado" | "Pendiente revisión";
export type ConceptMappingSourceType = "devengo" | "informativo" | "deduccion" | "retencion" | "coste_empresa" | "unknown";
export type ConceptDedupePriority = "devengo" | "informativo";

export type NormalizedConcept = {
  id: string;
  year: number;
  name: string;
  amount: number;
  comments: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
};
export type NonIncludedDecisionType = "Pendiente revision" | "Sin mapear real" | "Ignorado" | "Justificado";
export type AnalysisStatus = "OK" | "Revisar" | "Diferencia" | "Sin mapear" | "Sin PDF" | "Sin Registro" | "Sin datos";
export type SalaryStatus = AnalysisStatus;
export type GroupingPdfStatus = AnalysisStatus | "No aplica";
export type AppView = "dashboard" | "personas" | "cuadre-excel" | "agrupaciones" | "historial" | "ajustes";
export type GroupingType = "puesto" | "valoracionPuesto" | "categoria" | "familiaPuesto" | "agrupacionCategoriaPersonal";
export type GroupingBlock = RetributionBlock;

export interface AnalysisThresholds {
  readonly reviewThreshold: number;
  readonly incidentThreshold: number;
}

export interface AnalysisConfig {
  readonly tolerance: number;
  readonly enableAI: boolean;
  readonly aiModel: string;
  readonly thresholds: AnalysisThresholds;
  readonly conceptMap?: readonly ConceptMappingRule[];
  readonly excludedEmployeeIds?: readonly string[];
}

export interface MoneyByBlock {
  readonly salary: number;
  readonly salaryComplement: number;
  readonly extraSalary: number;
  readonly total: number;
}

export interface PayrollConcept {
  readonly name: string;
  readonly amount: number;
  readonly type: PayrollConceptType;
}

export interface PayrollRecord {
  readonly sourceFile: string;
  readonly pageNumber?: number;
  readonly periodLabel: string;
  readonly periodStart?: string;
  readonly periodEnd?: string;
  readonly companyName?: string;
  readonly cif?: string;
  readonly workerNif?: string;
  readonly workerName: string;
  readonly socialSecurityNumber?: string;
  readonly employeeNumber?: string;
  readonly workplace?: string;
  readonly professionalGroup?: string;
  readonly gt?: string;
  readonly seniorityDate?: string;
  readonly concepts: readonly PayrollConcept[];
  readonly totalDevengado?: number;
  readonly totalDeducir?: number;
  readonly netPay?: number;
  readonly irpfBaseAccumulated?: number;
  readonly irpfFeeAccumulated?: number;
  readonly ssFeeAccumulated?: number;
}

export interface RegistroConceptAmount {
  readonly block: RetributionBlock;
  readonly blockKey: ConceptBlockKey;
  readonly code: string;
  readonly amount: number;
}

export interface RegistroEmployee {
  readonly sourceRow: number;
  readonly workerNif?: string;
  readonly workerName?: string;
  readonly employeeNumber: string;
  readonly sex?: string;
  readonly workplace?: string;
  readonly professionalGroup?: string;
  readonly position?: string;
  readonly valuation?: string;
  readonly category?: string;
  readonly family?: string;
  readonly personalCategoryGroup?: string;
  readonly gt?: string;
  readonly seniorityDate?: string;
  readonly normalizedPlusVariables: MoneyByBlock;
  readonly normalized: MoneyByBlock;
  readonly periodComplete: MoneyByBlock;
  readonly lastSituation: MoneyByBlock;
  readonly nonNormalized: {
    readonly salaryComplementVariable: number;
    readonly extraSalaryVariable: number;
    readonly salaryPpe: number;
    readonly salaryComplementPpe: number;
    readonly salaryIt: number;
    readonly salaryComplementIt: number;
  };
  readonly excelBreakdownDiffs: Pick<MoneyByBlock, "salary" | "salaryComplement" | "extraSalary">;
  readonly concepts: readonly RegistroConceptAmount[];
  readonly raw: Record<string, unknown>;
}

export type RegistroRecord = RegistroEmployee;

export interface RegistroColumnMap {
  readonly employeeNumber?: string;
  readonly sex?: string;
  readonly workerName?: string;
  readonly nif?: string;
  readonly workplace?: string;
  readonly professionalGroup?: string;
  readonly position?: string;
  readonly valuation?: string;
  readonly category?: string;
  readonly family?: string;
  readonly personalCategoryGroup?: string;
  readonly gt?: string;
  readonly seniorityDate?: string;
  readonly periodSalary?: string;
  readonly periodSalaryBreakdownDiff?: string;
  readonly periodSalaryComplement?: string;
  readonly periodSalaryComplementBreakdownDiff?: string;
  readonly periodExtraSalary?: string;
  readonly periodExtraSalaryBreakdownDiff?: string;
}

export interface AvailableConceptCodes {
  readonly salary: readonly string[];
  readonly salaryComplement: readonly string[];
  readonly extraSalary: readonly string[];
}

export interface InternalExcelCheckRow {
  readonly employeeNumber: string;
  readonly sex?: string;
  readonly position?: string;
  readonly category?: string;
  readonly workplace?: string;
  readonly salaryPeriod: number;
  readonly salaryBreakdown: number;
  readonly salaryDifference: number;
  readonly salaryComplementPeriod: number;
  readonly salaryComplementBreakdown: number;
  readonly salaryComplementDifference: number;
  readonly extraSalaryPeriod: number;
  readonly extraSalaryBreakdown: number;
  readonly extraSalaryDifference: number;
  readonly status: AnalysisStatus;
  readonly detail: string;
}

export interface InternalExcelNormalizedVariablesCheckRow {
  readonly employeeNumber: string;
  readonly person?: string;
  readonly workplace?: string;
  readonly position?: string;
  readonly category?: string;
  readonly salaryPeriod: number;
  readonly salaryNormalizedPlusVariables: number;
  readonly salaryDifference: number;
  readonly salaryComplementPeriod: number;
  readonly salaryComplementNormalizedPlusVariables: number;
  readonly salaryComplementDifference: number;
  readonly extraSalaryPeriod: number;
  readonly extraSalaryNormalizedPlusVariables: number;
  readonly extraSalaryDifference: number;
  readonly totalPeriod: number;
  readonly totalNormalizedPlusVariables: number;
  readonly totalDifference: number;
  readonly status: AnalysisStatus;
  readonly detail: string;
}

export interface RegistroParseResult {
  readonly sheetName: string;
  readonly headerRows: { readonly group: number; readonly subheader: number; readonly firstData: number };
  readonly columnMap: RegistroColumnMap;
  readonly conceptCodes: AvailableConceptCodes;
  readonly records: readonly RegistroEmployee[];
  readonly internalChecks: readonly InternalExcelCheckRow[];
  readonly warnings: readonly string[];
}

export interface ConceptMappingRule {
  readonly pdfConcept: string;
  readonly normalizedPdfConcept: string;
  readonly aliases?: readonly string[];
  readonly block: RetributionBlock;
  readonly blockKey: ConceptBlockKey;
  readonly registroCode?: string;
  readonly status: MappingStatus;
  readonly sourceType?: ConceptMappingSourceType;
  readonly allowInformative?: boolean;
  readonly dedupePriority?: ConceptDedupePriority;
  readonly includedInComparison?: boolean;
  readonly includedInAdjustedComparison?: boolean;
  readonly active?: boolean;
  readonly reason?: string;
}

export interface ConceptComparisonRow {
  readonly employeeNumber: string;
  readonly person?: string;
  readonly block: RetributionBlock;
  readonly blockKey: ConceptBlockKey;
  readonly registroCode: string;
  readonly pdfConcept?: string;
  readonly registroAmount: number;
  readonly pdfAmount: number;
  readonly difference: number;
  readonly status: AnalysisStatus;
  readonly detail: string;
  readonly grossDifference?: number;
  readonly justifiedAmount?: number;
  readonly adjustedDifference?: number;
  readonly grossStatus?: AnalysisStatus;
  readonly adjustedStatus?: AnalysisStatus;
  readonly isJustified?: boolean;
  readonly justificationReason?: string;
}

export interface UnmappedConceptRow {
  readonly decisionType?: NonIncludedDecisionType;
  readonly includedInComparison?: boolean;
  readonly pdfConcept: string;
  readonly totalDetected: number;
  readonly peopleCount: number;
  readonly payrollCount: number;
  readonly exampleEmployeeNumbers: readonly string[];
  readonly suggestedBlock?: RetributionBlock;
  readonly suggestedRegistroCode?: string;
  readonly action: MappingStatus;
  readonly recommendedAction?: string;
  readonly reason?: string;
}

export interface IgnoredConceptRow {
  readonly pdfConcept: string;
  readonly totalDetected: number;
  readonly peopleCount: number;
  readonly payrollCount: number;
  readonly reason: string;
}

export interface PersonComparisonRow {
  readonly employeeNumber: string;
  readonly person?: string;
  readonly workplace?: string;
  readonly position?: string;
  readonly category?: string;
  readonly salaryRegistro: number;
  readonly salaryPdf: number;
  readonly salaryDifference: number;
  readonly salaryComplementRegistro: number;
  readonly salaryComplementPdf: number;
  readonly salaryComplementDifference: number;
  readonly extraSalaryRegistro: number;
  readonly extraSalaryPdf: number;
  readonly extraSalaryDifference: number;
  readonly registroTotal: number;
  readonly pdfTotal: number;
  readonly totalDifference: number;
  readonly grossSalaryDifference?: number;
  readonly grossSalaryComplementDifference?: number;
  readonly grossExtraSalaryDifference?: number;
  readonly grossTotalDifference?: number;
  readonly justifiedSalaryAmount?: number;
  readonly justifiedSalaryComplementAmount?: number;
  readonly justifiedExtraSalaryAmount?: number;
  readonly justifiedTotalAmount?: number;
  readonly adjustedSalaryDifference?: number;
  readonly adjustedSalaryComplementDifference?: number;
  readonly adjustedExtraSalaryDifference?: number;
  readonly adjustedTotalDifference?: number;
  readonly grossStatus?: AnalysisStatus;
  readonly adjustedStatus?: AnalysisStatus;
  readonly justifiedConceptsSummary?: string;
  readonly justifiedConceptsCount?: number;
  readonly pdfControlTotalDevengado: number;
  readonly payrollCount: number;
  readonly unmappedConceptsCount: number;
  readonly status: AnalysisStatus;
  readonly detail: string;
  readonly periods: readonly string[];
  readonly files: readonly string[];
}

export interface NormalizedVsRealRow {
  readonly employeeNumber: string;
  readonly person?: string;
  readonly workplace?: string;
  readonly position?: string;
  readonly category?: string;
  readonly normalizedPlusVariables: number;
  readonly normalized: number;
  readonly periodComplete: number;
  readonly realPdf: number;
  readonly diffPdfVsPeriodComplete: number;
  readonly diffPdfVsNormalizedPlusVariables: number;
  readonly diffPdfVsNormalized: number;
  readonly possibleJustification: string;
  readonly status: AnalysisStatus;
  readonly detail: string;
}

export interface GroupingComparisonRow {
  readonly sourceSheet: string;
  readonly groupingType: GroupingType;
  readonly groupId: string;
  readonly groupName: string;
  readonly registroBase: string;
  readonly block: GroupingBlock;
  readonly metric: string;
  readonly segment: string;
  readonly registroSheetValue?: number;
  readonly registroRecalculatedValue?: number;
  readonly excelDifference?: number;
  readonly pdfRegistroRecalculatedValue?: number;
  readonly pdfRecalculatedValue?: number;
  readonly pdfDifference?: number;
  readonly peopleCount: number;
  readonly matchedPeopleCount?: number;
  readonly womenCount: number;
  readonly menCount: number;
  readonly matchedWomenCount?: number;
  readonly matchedMenCount?: number;
  readonly excludedPdfWithoutRegistroCount?: number;
  readonly status: AnalysisStatus;
  readonly excelStatus?: AnalysisStatus;
  readonly pdfStatus?: GroupingPdfStatus;
  readonly detail: string;
}

export type GroupedExcelCellKind = "text" | "number" | "percent" | "empty";
export type GroupedExcelSheetStatus = "ready" | "missing" | "empty";

export interface GroupedExcelColumn {
  readonly key: string;
  readonly label: string;
  readonly sourceColumn: string;
  readonly kind: GroupedExcelCellKind;
}

export interface GroupedExcelHeaderCell {
  readonly label: string;
  readonly colSpan: number;
  readonly rowSpan?: number;
  readonly startColumn: number;
  readonly endColumn: number;
  readonly level: number;
  readonly path: string;
}

export interface GroupedExcelCell {
  readonly value: string | number | boolean | null;
  readonly display: string;
  readonly kind: GroupedExcelCellKind;
}

export type GroupedExcelRow = Readonly<Record<string, GroupedExcelCell>>;

export interface GroupedExcelSheet {
  readonly sheetName: string;
  readonly status: GroupedExcelSheetStatus;
  readonly groupedHeaders?: readonly (readonly GroupedExcelHeaderCell[])[];
  readonly columns: readonly GroupedExcelColumn[];
  readonly rows: readonly GroupedExcelRow[];
  readonly visibleRowCount: number;
  readonly visibleColumnCount: number;
  readonly truncated?: boolean;
  readonly originalRowCount?: number;
  readonly savedRowCount?: number;
}

export interface AnalysisSummary {
  readonly generatedAt: string;
  readonly pdfsAnalyzed: number;
  readonly pdfsFailed: number;
  readonly uniquePeople: number;
  readonly peopleWithDifferences: number;
  readonly totalSalaryDifference: number;
  readonly totalSalaryComplementDifference: number;
  readonly totalExtraSalaryDifference: number;
  readonly totalGlobalDifference: number;
  readonly peopleWithGrossDifferences?: number;
  readonly peopleWithAdjustedDifferences?: number;
  readonly matchedGrossTotalDifference?: number;
  readonly matchedGrossSalaryDifference?: number;
  readonly matchedGrossSalaryComplementDifference?: number;
  readonly matchedGrossExtraSalaryDifference?: number;
  readonly matchedJustifiedTotalAmount?: number;
  readonly matchedJustifiedSalaryAmount?: number;
  readonly matchedJustifiedSalaryComplementAmount?: number;
  readonly matchedJustifiedExtraSalaryAmount?: number;
  readonly matchedAdjustedTotalDifference?: number;
  readonly matchedAdjustedSalaryDifference?: number;
  readonly matchedAdjustedSalaryComplementDifference?: number;
  readonly matchedAdjustedExtraSalaryDifference?: number;
  readonly peopleOkAdjusted?: number;
  readonly conceptsJustifiedActive?: number;
  readonly conceptsJustifiedApplied?: number;
  readonly matchedPeople?: number;
  readonly matchedTotalDifference?: number;
  readonly matchedSalaryDifference?: number;
  readonly matchedSalaryComplementDifference?: number;
  readonly matchedExtraSalaryDifference?: number;
  readonly peopleInRegistroWithoutPdf?: number;
  readonly peopleInPdfWithoutRegistro?: number;
  readonly totalPdfWithoutRegistro?: number;
  readonly conceptsUnmapped: number;
  readonly conceptsNotIncluded?: number;
  readonly conceptsIgnored?: number;
  readonly conceptsPendingReview?: number;
  readonly conceptsRealUnmapped?: number;
  readonly pendingReviewAmount?: number;
  readonly pendingDecisionPdfTotal?: number;
  readonly internalExcelDifferences: number;
  readonly groupingDifferences: number;
  readonly tolerance: number;
  readonly aiEnabled?: boolean;
  readonly aiModel?: string;
  readonly reviewThreshold?: number;
  readonly incidentThreshold?: number;
}

export interface AnalysisError {
  readonly file: string;
  readonly type: "validation" | "pdf" | "excel" | "comparison" | "export";
  readonly message: string;
  readonly recommendedAction: string;
}

export interface FieldIssue {
  readonly workerNif: string;
  readonly workerName: string;
  readonly employeeNumber?: string;
  readonly field: string;
  readonly shouldBe: string;
  readonly actual: string;
  readonly affectedPeriods: readonly string[];
  readonly affectedFiles: readonly string[];
  readonly salaryShouldBe?: number;
  readonly salaryActual?: number;
  readonly salaryDifference?: number;
  readonly severity: Severity;
  readonly observations: string;
  readonly recommendedAction: string;
}

export interface SalaryDifference {
  readonly workerNif?: string;
  readonly workerName: string;
  readonly employeeNumber?: string;
  readonly workplace?: string;
  readonly professionalGroup?: string;
  readonly gt?: string;
  readonly totalShouldBe: number;
  readonly totalActual: number;
  readonly difference: number;
  readonly payrollCount: number;
  readonly periodsIncluded: readonly string[];
  readonly status: SalaryStatus;
  readonly observations: string;
}

export interface AnalysisResult {
  readonly summary: AnalysisSummary;
  readonly payrollRecords: readonly PayrollRecord[];
  readonly registroEmployees: readonly RegistroEmployee[];
  readonly people: readonly PersonComparisonRow[];
  readonly normalizedVsReal: readonly NormalizedVsRealRow[];
  readonly concepts: readonly ConceptComparisonRow[];
  readonly unmappedConcepts: readonly UnmappedConceptRow[];
  readonly ignoredConcepts: readonly IgnoredConceptRow[];
  readonly pdfWithoutRegistro?: readonly PersonComparisonRow[];
  readonly registroWithoutPdf?: readonly PersonComparisonRow[];
  readonly groupings: readonly GroupingComparisonRow[];
  readonly groupedExcelSheets?: readonly GroupedExcelSheet[];
  readonly internalExcelChecks: readonly InternalExcelCheckRow[];
  readonly internalExcelNormalizedVariablesChecks?: readonly InternalExcelNormalizedVariablesCheckRow[];
  readonly conceptMap: readonly ConceptMappingRule[];
  readonly excludedEmployeeIdsApplied: readonly string[];
  readonly errors: readonly AnalysisError[];
  readonly criteria: readonly string[];
}

export interface StoredAnalysis {
  readonly id: string;
  readonly schemaVersion?: number;
  readonly createdAt: string;
  readonly registroFileName: string;
  readonly pdfCount: number;
  readonly result: AnalysisResult;
  readonly config: AnalysisConfig;
}
