import type {
  AnalysisResult,
  AnalysisStatus,
  ConceptComparisonRow,
  ConceptMappingRule,
  IgnoredConceptRow,
  InternalExcelCheckRow,
  InternalExcelNormalizedVariablesCheckRow,
  MoneyByBlock,
  NormalizedVsRealRow,
  PayrollConcept,
  PayrollRecord,
  PersonComparisonRow,
  RegistroEmployee,
  UnmappedConceptRow,
} from "@/features/registro-retributivo/types";
import { findConceptRule, isRuleEnabledForComparison, mappingStatusFromConceptType } from "@/features/registro-retributivo/compare/conceptMapping";
import { salaryStatus } from "@/features/registro-retributivo/compare/salaryDiff";
import { roundMoney } from "@/features/registro-retributivo/utils/money";
import { normalizeComparableText, normalizeEmployeeId, normalizeEmployeeNumber } from "@/features/registro-retributivo/utils/normalize";

export interface CompareOptions {
  readonly tolerance: number;
  readonly enableAI?: boolean;
  readonly aiModel?: string;
  readonly reviewThreshold?: number;
  readonly incidentThreshold?: number;
  readonly conceptMap?: readonly ConceptMappingRule[];
  readonly internalExcelChecks?: readonly InternalExcelCheckRow[];
  readonly excludedEmployeeIds?: readonly string[];
}

interface IncludedConceptAggregate {
  amount: number;
  pdfConcepts: Set<string>;
}

interface PayrollAggregate {
  readonly records: PayrollRecord[];
  readonly included: Map<string, IncludedConceptAggregate>;
  readonly totals: { salary: number; salaryComplement: number; extraSalary: number };
  readonly unmapped: Map<string, { amount: number; people: Set<string>; payrolls: Set<string> }>;
  readonly ignored: Map<string, { amount: number; people: Set<string>; payrolls: Set<string>; reason: string }>;
}

const DISALLOWED_INCLUDED_TYPES = new Set(["retencion", "cotizacion", "deduccion", "especie", "coste_empresa"]);

interface IncludedCandidate {
  readonly concept: PayrollConcept;
  readonly rule: ConceptMappingRule & { registroCode: string };
  readonly employeeNumber: string;
  readonly payrollId: string;
}

function emptyMoney(): MoneyByBlock {
  return { salary: 0, salaryComplement: 0, extraSalary: 0, total: 0 };
}

function statusFromDifference(difference: number, options: CompareOptions): AnalysisStatus {
  return salaryStatus(difference, {
    tolerance: options.tolerance,
    reviewThreshold: options.reviewThreshold,
    incidentThreshold: options.incidentThreshold,
  });
}

function internalNormalizedVariablesStatus(difference: number, tolerance: number): AnalysisStatus {
  const absoluteDifference = Math.abs(difference);
  if (absoluteDifference <= tolerance) return "OK";
  if (absoluteDifference > 50) return "Diferencia";
  return "Revisar";
}

function worstStatus(statuses: readonly AnalysisStatus[]): AnalysisStatus {
  if (statuses.includes("Sin Registro")) return "Sin Registro";
  if (statuses.includes("Sin PDF")) return "Sin PDF";
  if (statuses.includes("Sin mapear")) return "Sin mapear";
  if (statuses.includes("Diferencia")) return "Diferencia";
  if (statuses.includes("Revisar")) return "Revisar";
  return "OK";
}

function groupPayroll(records: readonly PayrollRecord[]): Map<string, PayrollRecord[]> {
  const grouped = new Map<string, PayrollRecord[]>();
  records.forEach((record) => {
    const key = normalizeEmployeeNumber(record.employeeNumber);
    if (!key) {
      return;
    }
    grouped.set(key, [...(grouped.get(key) ?? []), record]);
  });
  return grouped;
}

function addGrouped(
  map: Map<string, { amount: number; people: Set<string>; payrolls: Set<string>; reason?: string }>,
  key: string,
  amount: number,
  employeeNumber: string,
  payrollId: string,
  reason?: string,
): void {
  const current = map.get(key) ?? { amount: 0, people: new Set<string>(), payrolls: new Set<string>(), reason };
  current.amount = roundMoney(current.amount + amount);
  current.people.add(employeeNumber);
  current.payrolls.add(payrollId);
  if (reason) {
    current.reason = reason;
  }
  map.set(key, current);
}

function decisionTypeOrder(decisionType: UnmappedConceptRow["decisionType"]): number {
  if (decisionType === "Pendiente revision") return 0;
  if (decisionType === "Sin mapear real") return 1;
  return 2;
}

function pendingReviewAction(pdfConcept: string): string {
  const normalized = normalizeComparableText(pdfConcept);
  if (normalized === "prestacion teorica maternidad") {
    return "Revisar y activar manualmente solo si debe compararse contra el Registro.";
  }
  if (normalized === "paga 40 anos") {
    return "Revisar manualmente; no existe codigo Registro exacto para incluirla por defecto.";
  }
  return "Revisar y activar manualmente desde Ajustes si procede.";
}

function nonIncludedReason(input: {
  readonly pdfConcept: string;
  readonly decisionType: UnmappedConceptRow["decisionType"];
  readonly fallback?: string;
}): string {
  const normalized = normalizeComparableText(input.pdfConcept);
  if (normalized === "prestacion teorica maternidad") {
    return "Concepto teorica con codigo similar en Registro a 0; no se incluye automaticamente.";
  }
  if (normalized === "paga 40 anos") {
    return "No existe codigo exacto de Paga 40 Anos en Registro; no se mapea a paga 25 anos ni a gratificacion.";
  }
  if (normalized === "coste empresa" || normalized.includes("cotizacion") && normalized.includes("empresa")) {
    return "Coste empresa, no retribucion del trabajador.";
  }
  if (normalized.includes("retencion a cuenta")) {
    return "Retencion fiscal, no devengo.";
  }
  if (normalized.includes("cotiz") || normalized.includes("cotizacion")) {
    return normalized.includes("empresa")
      ? "Cotizaciones empresa: coste empresa, no retribucion comparable."
      : "Cotizaciones empleado: deduccion, no retribucion comparable.";
  }
  if (normalized === "aportacion personal al ppse") {
    return "Aportacion o deduccion personal, no retribucion comparable.";
  }
  if (normalized === "descuento seguro medico") {
    return "Descuento o deduccion, no devengo.";
  }
  if (normalized === "especie seguro medico") {
    return "Ajuste negativo de especie, no sumar.";
  }
  if (normalized === "seguro medico mensual") {
    return "Informativo duplicado; CYC_SEG_SALUD ya cuadra con Seguro Medico.";
  }
  if (normalized === "anticipo prorrateado") {
    return "Anticipo o deduccion, no retribucion comparable.";
  }
  if (normalized === "descuento renting") {
    return "Descuento o deduccion.";
  }
  if (normalized === "rendimientos irregulares") {
    return "Dato fiscal o informativo, no concepto retributivo comparable.";
  }
  if (normalized === "descuento seguro ahorro jubilacion") {
    return "Descuento o deduccion.";
  }
  if (normalized === "especie tarjeta") {
    return "Informativo de especie; Comida Tarjeta ya se compara aparte.";
  }
  if (normalized === "descuento transporte") {
    return "Descuento o deduccion.";
  }
  if (normalized === "cuota gimnasio") {
    return "Cuota, deduccion o beneficio no presente en Registro; no incluir por defecto.";
  }
  if (normalized === "exceso defecto paga anterior") {
    return "Ajuste de nomina anterior; no incluir por defecto.";
  }
  if (normalized.includes("vacaciones") && (normalized.includes("cotiz") || normalized.includes("cotizacion"))) {
    return "Cotizaciones vacaciones: cotizaciones o deducciones, no retribucion.";
  }
  if (normalized === "especie renting") {
    return "Especie o informativo; no incluir por defecto.";
  }
  if (input.decisionType === "Sin mapear real") {
    return "No hay regla ni codigo claro en Registro para incluir este concepto automaticamente.";
  }
  return input.fallback ?? "Concepto no incluido en el calculo principal.";
}

function shouldIncludeConcept(rule: ConceptMappingRule | undefined, concept: PayrollConcept): rule is ConceptMappingRule & { registroCode: string } {
  if (
    !rule?.registroCode ||
    !isRuleEnabledForComparison(rule) ||
    DISALLOWED_INCLUDED_TYPES.has(concept.type)
  ) {
    return false;
  }
  if (concept.type === "informativo" && !rule.allowInformative) {
    return false;
  }
  return true;
}

function priorityValue(candidate: IncludedCandidate): number {
  return candidate.rule.dedupePriority === "informativo" || candidate.concept.type === "informativo" ? 1 : 2;
}

function addIncludedConcept(aggregate: PayrollAggregate, candidate: IncludedCandidate): void {
  const { concept, rule } = candidate;
  const current = aggregate.included.get(rule.registroCode) ?? {
    amount: 0,
    pdfConcepts: new Set<string>(),
  };
  current.amount = roundMoney(current.amount + concept.amount);
  current.pdfConcepts.add(concept.name);
  aggregate.included.set(rule.registroCode, current);
  aggregate.totals[rule.blockKey] = roundMoney(aggregate.totals[rule.blockKey] + concept.amount);
}

function normalizeExcludedEmployeeIds(values: readonly string[] | undefined): string[] {
  return [...new Set((values ?? []).map(normalizeEmployeeId).filter(Boolean))];
}

function isExcludedEmployee(value: unknown, excluded: ReadonlySet<string>): boolean {
  const employeeId = normalizeEmployeeId(value);
  return Boolean(employeeId && excluded.has(employeeId));
}

function addIgnoredCandidate(aggregate: PayrollAggregate, candidate: IncludedCandidate, reason: string): void {
  addGrouped(aggregate.ignored, candidate.concept.name, candidate.concept.amount, candidate.employeeNumber, candidate.payrollId, reason);
}

function addIncludedCandidatesForRecord(aggregate: PayrollAggregate, candidates: readonly IncludedCandidate[]): void {
  const byRegistroCode = new Map<string, IncludedCandidate[]>();
  candidates.forEach((candidate) => {
    byRegistroCode.set(candidate.rule.registroCode, [...(byRegistroCode.get(candidate.rule.registroCode) ?? []), candidate]);
  });

  byRegistroCode.forEach((codeCandidates) => {
    const bestPriority = Math.max(...codeCandidates.map(priorityValue));
    const selected = codeCandidates.filter((candidate) => priorityValue(candidate) === bestPriority);
    const selectedSignatures = new Set<string>();

    selected.forEach((candidate) => {
      const signature = `${normalizeComparableText(candidate.concept.name)}|${candidate.concept.amount}|${candidate.concept.type}`;
      if (selectedSignatures.has(signature)) {
        addIgnoredCandidate(aggregate, candidate, "Duplicado exacto detectado dentro del mismo recibo.");
        return;
      }
      selectedSignatures.add(signature);
      addIncludedConcept(aggregate, candidate);
    });

    codeCandidates
      .filter((candidate) => priorityValue(candidate) < bestPriority)
      .forEach((candidate) =>
        addIgnoredCandidate(
          aggregate,
          candidate,
          "Concepto informativo descartado porque existe un devengo real para el mismo codigo en el mismo recibo.",
        ),
      );
  });
}

function aggregatePayroll(records: readonly PayrollRecord[], conceptMap: readonly ConceptMappingRule[]): PayrollAggregate {
  const aggregate: PayrollAggregate = {
    records: [...records],
    included: new Map(),
    totals: { salary: 0, salaryComplement: 0, extraSalary: 0 },
    unmapped: new Map(),
    ignored: new Map(),
  };

  records.forEach((record) => {
    const employeeNumber = normalizeEmployeeNumber(record.employeeNumber) || "SIN_MATRICULA";
    const payrollId = `${record.sourceFile}${record.pageNumber ? ` p.${record.pageNumber}` : ""}`;
    const includedCandidates: IncludedCandidate[] = [];

    record.concepts.forEach((concept) => {
      const rule = findConceptRule(conceptMap, concept.name);
      if (rule && !isRuleEnabledForComparison(rule)) {
        return;
      }
      if (shouldIncludeConcept(rule, concept)) {
        includedCandidates.push({ concept, rule, employeeNumber, payrollId });
        return;
      }

      if (rule?.status === "Ignorado" || mappingStatusFromConceptType(concept.type) === "Ignorado") {
        addGrouped(
          aggregate.ignored,
          concept.name,
          concept.amount,
          employeeNumber,
          payrollId,
          rule?.reason ?? "Concepto excluido por tipo conservador.",
        );
        return;
      }

      addGrouped(aggregate.unmapped, concept.name, concept.amount, employeeNumber, payrollId);
    });

    addIncludedCandidatesForRecord(aggregate, includedCandidates);
  });

  return aggregate;
}

function payrollControlTotal(records: readonly PayrollRecord[]): number {
  return roundMoney(records.reduce((sum, record) => sum + (record.totalDevengado ?? 0), 0));
}

function personStatus(input: {
  readonly hasRegistro: boolean;
  readonly hasPdf: boolean;
  readonly unmappedCount: number;
  readonly differences: readonly number[];
  readonly options: CompareOptions;
}): AnalysisStatus {
  if (!input.hasRegistro) return "Sin Registro";
  if (!input.hasPdf) return "Sin PDF";
  const diffStatus = worstStatus(input.differences.map((difference) => statusFromDifference(difference, input.options)));
  if (diffStatus === "OK" && input.unmappedCount > 0) return "Sin mapear";
  return diffStatus;
}

function hasCompensatedBlockReclassification(input: {
  readonly salaryDifference: number;
  readonly salaryComplementDifference: number;
  readonly extraSalaryDifference: number;
  readonly totalDifference: number;
  readonly options: CompareOptions;
}): boolean {
  const tolerance = Math.max(0, input.options.tolerance);
  const relevant = [input.salaryDifference, input.salaryComplementDifference, input.extraSalaryDifference].filter(
    (difference) => Math.abs(difference) > tolerance,
  );
  if (relevant.length < 2 || !relevant.some((difference) => difference > 0) || !relevant.some((difference) => difference < 0)) {
    return false;
  }

  const positiveTotal = relevant.filter((difference) => difference > 0).reduce((sum, difference) => sum + difference, 0);
  const negativeTotal = Math.abs(relevant.filter((difference) => difference < 0).reduce((sum, difference) => sum + difference, 0));
  const compensatedBase = Math.min(positiveTotal, negativeTotal);
  const maxNetDifference = Math.max(input.options.incidentThreshold ?? 50, compensatedBase * 0.2);
  return Math.abs(input.totalDifference) <= maxNetDifference;
}

function personDetail(input: {
  readonly salaryDifference: number;
  readonly salaryComplementDifference: number;
  readonly extraSalaryDifference: number;
  readonly totalDifference: number;
  readonly options: CompareOptions;
}): string {
  const base = "PDF calculado como suma de conceptos incluidos por mapa. Total Devengado se conserva solo como control auxiliar.";
  if (hasCompensatedBlockReclassification(input)) {
    return `${base} Diferencia principalmente compensada por reclasificacion entre bloques.`;
  }
  return base;
}

function justification(employee: RegistroEmployee | undefined, aggregate: PayrollAggregate | undefined): string {
  if (!employee) return "Persona detectada en PDF sin línea equivalente en Registro.";
  if (!aggregate?.records.length) return "No se han detectado PDFs para la matrícula.";
  if (aggregate.unmapped.size) return "Conceptos no mapeados pendientes de revisión.";
  if (
    employee.nonNormalized.salaryComplementVariable ||
    employee.nonNormalized.extraSalaryVariable ||
    employee.nonNormalized.salaryPpe ||
    employee.nonNormalized.salaryComplementPpe ||
    employee.nonNormalized.salaryIt ||
    employee.nonNormalized.salaryComplementIt
  ) {
    return "Registro contiene importes variables, PPE o IT que pueden explicar diferencias entre normalizado y real.";
  }
  return "Sin causa detectada.";
}

function createConceptRows(
  employee: RegistroEmployee,
  aggregate: PayrollAggregate | undefined,
  options: CompareOptions,
  personFallback?: string,
): ConceptComparisonRow[] {
  const rows: ConceptComparisonRow[] = [];
  const conceptMap = options.conceptMap ?? [];
  employee.concepts.forEach((concept) => {
    if (isRegistroConceptDisabled(concept.code, conceptMap)) {
      return;
    }
    const pdf = aggregate?.included.get(concept.code);
    const pdfAmount = pdf?.amount ?? 0;
    if (!concept.amount && !pdfAmount) {
      return;
    }
    const difference = roundMoney(pdfAmount - concept.amount);
    const status = statusFromDifference(difference, options);
    rows.push({
      employeeNumber: employee.employeeNumber,
      person: employee.workerName || personFallback,
      block: concept.block,
      blockKey: concept.blockKey,
      registroCode: concept.code,
      pdfConcept: pdf ? [...pdf.pdfConcepts].join("; ") : undefined,
      registroAmount: concept.amount,
      pdfAmount,
      difference,
      status,
      grossDifference: difference,
      justifiedAmount: 0,
      adjustedDifference: difference,
      grossStatus: status,
      adjustedStatus: status,
      isJustified: false,
      detail: "Comparación por código de concepto del Registro frente a conceptos PDF incluidos por el mapa.",
    });
  });
  return rows;
}

function isRegistroConceptDisabled(code: string, conceptMap: readonly ConceptMappingRule[]): boolean {
  const normalizedCode = normalizeComparableText(code);
  const matchingRules = conceptMap.filter((rule) => rule.registroCode && normalizeComparableText(rule.registroCode) === normalizedCode);
  return matchingRules.length > 0 && matchingRules.every((rule) => !isRuleEnabledForComparison(rule));
}

function registroTotalsForComparison(employee: RegistroEmployee | undefined, conceptMap: readonly ConceptMappingRule[]): MoneyByBlock {
  const base = employee?.periodComplete ?? emptyMoney();
  if (!employee) {
    return base;
  }

  let disabledSalary = 0;
  let disabledSalaryComplement = 0;
  let disabledExtraSalary = 0;
  let disabledTotal = 0;
  employee.concepts.forEach((concept) => {
    if (!isRegistroConceptDisabled(concept.code, conceptMap)) {
      return;
    }
    if (concept.blockKey === "salary") {
      disabledSalary = roundMoney(disabledSalary + concept.amount);
    } else if (concept.blockKey === "salaryComplement") {
      disabledSalaryComplement = roundMoney(disabledSalaryComplement + concept.amount);
    } else {
      disabledExtraSalary = roundMoney(disabledExtraSalary + concept.amount);
    }
    disabledTotal = roundMoney(disabledTotal + concept.amount);
  });

  return {
    salary: roundMoney(base.salary - disabledSalary),
    salaryComplement: roundMoney(base.salaryComplement - disabledSalaryComplement),
    extraSalary: roundMoney(base.extraSalary - disabledExtraSalary),
    total: roundMoney(base.total - disabledTotal),
  };
}

function createUnmappedRows(aggregates: readonly PayrollAggregate[], conceptMap: readonly ConceptMappingRule[]): UnmappedConceptRow[] {
  const combined = new Map<
    string,
    {
      amount: number;
      people: Set<string>;
      payrolls: Set<string>;
      suggestedBlock?: UnmappedConceptRow["suggestedBlock"];
      suggestedRegistroCode?: string;
      action: UnmappedConceptRow["action"];
      decisionType: UnmappedConceptRow["decisionType"];
      includedInComparison: boolean;
      recommendedAction: string;
      reason?: string;
    }
  >();
  aggregates.forEach((aggregate) => {
    aggregate.unmapped.forEach((value, key) => {
      const rule = findConceptRule(conceptMap, key);
      const normalized = normalizeComparableText(key);
      const isPending = Boolean(rule?.registroCode) || normalized === "paga 40 anos";
      const decisionType: UnmappedConceptRow["decisionType"] = isPending ? "Pendiente revision" : "Sin mapear real";
      const current = combined.get(key) ?? {
        amount: 0,
        people: new Set<string>(),
        payrolls: new Set<string>(),
        suggestedBlock: rule?.registroCode ? rule.block : normalized === "paga 40 anos" ? "C. Salarial" : undefined,
        suggestedRegistroCode: rule?.registroCode,
        action: rule?.status ?? "Pendiente revisión",
        decisionType,
        includedInComparison: false,
        recommendedAction:
          decisionType === "Pendiente revision"
            ? pendingReviewAction(key)
            : "Mantener en revision hasta identificar codigo Registro.",
        reason: nonIncludedReason({ pdfConcept: key, decisionType, fallback: rule?.reason }),
      };
      current.amount = roundMoney(current.amount + value.amount);
      value.people.forEach((item) => current.people.add(item));
      value.payrolls.forEach((item) => current.payrolls.add(item));
      combined.set(key, current);
    });
    aggregate.ignored.forEach((value, key) => {
      const current = combined.get(key) ?? {
        amount: 0,
        people: new Set<string>(),
        payrolls: new Set<string>(),
        action: "Ignorado" as const,
        decisionType: "Ignorado" as const,
        includedInComparison: false,
        recommendedAction: "No incluir en comparativa.",
        reason: nonIncludedReason({ pdfConcept: key, decisionType: "Ignorado", fallback: value.reason }),
      };
      current.amount = roundMoney(current.amount + value.amount);
      value.people.forEach((item) => current.people.add(item));
      value.payrolls.forEach((item) => current.payrolls.add(item));
      current.reason = nonIncludedReason({ pdfConcept: key, decisionType: "Ignorado", fallback: value.reason });
      combined.set(key, current);
    });
  });

  return [...combined.entries()]
    .map(([pdfConcept, value]) => ({
      decisionType: value.decisionType,
      includedInComparison: value.includedInComparison,
      pdfConcept,
      totalDetected: value.amount,
      peopleCount: value.people.size,
      payrollCount: value.payrolls.size,
      exampleEmployeeNumbers: [...value.people].slice(0, 5),
      suggestedBlock: value.suggestedBlock,
      suggestedRegistroCode: value.suggestedRegistroCode,
      action: value.action,
      recommendedAction: value.recommendedAction,
      reason: value.reason,
    }))
    .sort((a, b) => decisionTypeOrder(a.decisionType) - decisionTypeOrder(b.decisionType) || Math.abs(b.totalDetected) - Math.abs(a.totalDetected));
}

function createIgnoredRows(aggregates: readonly PayrollAggregate[]): IgnoredConceptRow[] {
  const combined = new Map<string, { amount: number; people: Set<string>; payrolls: Set<string>; reason: string }>();
  aggregates.forEach((aggregate) => {
    aggregate.ignored.forEach((value, key) => {
      const current = combined.get(key) ?? { amount: 0, people: new Set<string>(), payrolls: new Set<string>(), reason: value.reason };
      current.amount = roundMoney(current.amount + value.amount);
      value.people.forEach((item) => current.people.add(item));
      value.payrolls.forEach((item) => current.payrolls.add(item));
      combined.set(key, current);
    });
  });

  return [...combined.entries()]
    .map(([pdfConcept, value]) => ({
      pdfConcept,
      totalDetected: value.amount,
      peopleCount: value.people.size,
      payrollCount: value.payrolls.size,
      reason: value.reason,
    }))
    .sort((a, b) => Math.abs(b.totalDetected) - Math.abs(a.totalDetected));
}

function justifiedConceptSummary(rows: readonly ConceptComparisonRow[]): { summary: string; count: number } {
  const justified = rows.filter((row) => row.isJustified);
  const names = [...new Set(justified.map((row) => row.pdfConcept || row.registroCode).filter(Boolean))];
  return {
    summary: names.join("; "),
    count: justified.length,
  };
}

function createInternalNormalizedVariablesChecks(
  employees: readonly RegistroEmployee[],
  options: CompareOptions,
): InternalExcelNormalizedVariablesCheckRow[] {
  return employees
    .map((employee) => {
      const salaryDifference = roundMoney(employee.periodComplete.salary - employee.normalizedPlusVariables.salary);
      const salaryComplementDifference = roundMoney(employee.periodComplete.salaryComplement - employee.normalizedPlusVariables.salaryComplement);
      const extraSalaryDifference = roundMoney(employee.periodComplete.extraSalary - employee.normalizedPlusVariables.extraSalary);
      const totalDifference = roundMoney(employee.periodComplete.total - employee.normalizedPlusVariables.total);
      const status = worstStatus(
        [salaryDifference, salaryComplementDifference, extraSalaryDifference, totalDifference].map((difference) =>
          internalNormalizedVariablesStatus(difference, options.tolerance),
        ),
      );

      return {
        employeeNumber: employee.employeeNumber,
        person: employee.workerName,
        workplace: employee.workplace,
        position: employee.position,
        category: employee.category,
        salaryPeriod: employee.periodComplete.salary,
        salaryNormalizedPlusVariables: employee.normalizedPlusVariables.salary,
        salaryDifference,
        salaryComplementPeriod: employee.periodComplete.salaryComplement,
        salaryComplementNormalizedPlusVariables: employee.normalizedPlusVariables.salaryComplement,
        salaryComplementDifference,
        extraSalaryPeriod: employee.periodComplete.extraSalary,
        extraSalaryNormalizedPlusVariables: employee.normalizedPlusVariables.extraSalary,
        extraSalaryDifference,
        totalPeriod: employee.periodComplete.total,
        totalNormalizedPlusVariables: employee.normalizedPlusVariables.total,
        totalDifference,
        status,
        detail: "Comparacion interna entre retribuciones del periodo completo y total normalizado mas variables del Excel Reg. Retrib.",
      };
    })
    .sort((a, b) => a.employeeNumber.localeCompare(b.employeeNumber, "es"));
}

export async function compareAnalysis(
  payrollRecords: readonly PayrollRecord[],
  registroRecords: readonly RegistroEmployee[],
  options: CompareOptions,
): Promise<AnalysisResult> {
  const conceptMap = options.conceptMap ?? [];
  const excludedEmployeeIdsApplied = normalizeExcludedEmployeeIds(options.excludedEmployeeIds);
  const excludedSet = new Set(excludedEmployeeIdsApplied);
  const filteredPayrollRecords = payrollRecords.filter((record) => !isExcludedEmployee(record.employeeNumber, excludedSet));
  const filteredRegistroRecords = registroRecords.filter((record) => !isExcludedEmployee(record.employeeNumber, excludedSet));
  const filteredInternalExcelChecks = (options.internalExcelChecks ?? []).filter((row) => !isExcludedEmployee(row.employeeNumber, excludedSet));
  const internalExcelNormalizedVariablesChecks = createInternalNormalizedVariablesChecks(filteredRegistroRecords, options);
  const payrollByEmployee = groupPayroll(filteredPayrollRecords);
  const registroByEmployee = new Map(filteredRegistroRecords.map((record) => [normalizeEmployeeNumber(record.employeeNumber), record]));
  const allEmployeeNumbers = new Set([...registroByEmployee.keys(), ...payrollByEmployee.keys()]);
  const people: PersonComparisonRow[] = [];
  const normalizedVsReal: NormalizedVsRealRow[] = [];
  const concepts: ConceptComparisonRow[] = [];
  const aggregates: PayrollAggregate[] = [];

  allEmployeeNumbers.forEach((employeeNumber) => {
    const employee = registroByEmployee.get(employeeNumber);
    const records = payrollByEmployee.get(employeeNumber) ?? [];
    const hasRegistro = Boolean(employee);
    const hasPdf = records.length > 0;
    const aggregate = aggregatePayroll(records, conceptMap);
    aggregates.push(aggregate);
    const pdfTotal = roundMoney(aggregate.totals.salary + aggregate.totals.salaryComplement + aggregate.totals.extraSalary);
    const registro = registroTotalsForComparison(employee, conceptMap);
    const salaryDifference = roundMoney(aggregate.totals.salary - registro.salary);
    const salaryComplementDifference = roundMoney(aggregate.totals.salaryComplement - registro.salaryComplement);
    const extraSalaryDifference = roundMoney(aggregate.totals.extraSalary - registro.extraSalary);
    const totalDifference = roundMoney(pdfTotal - registro.total);
    const unmappedCount = [...aggregate.unmapped.values()].reduce((sum, item) => sum + item.payrolls.size, 0);
    const person = records[0]?.workerName || employee?.workerName;
    const conceptRowsForEmployee = employee ? createConceptRows(employee, aggregate, options, person) : [];
    if (employee) {
      concepts.push(...conceptRowsForEmployee);
    }
    const justifiedSalaryAmount = 0;
    const justifiedSalaryComplementAmount = 0;
    const justifiedExtraSalaryAmount = 0;
    const justifiedTotalAmount = 0;
    const adjustedSalaryDifference = salaryDifference;
    const adjustedSalaryComplementDifference = salaryComplementDifference;
    const adjustedExtraSalaryDifference = extraSalaryDifference;
    const adjustedTotalDifference = totalDifference;
    const status = personStatus({
      hasRegistro,
      hasPdf,
      unmappedCount,
      differences: [salaryDifference, salaryComplementDifference, extraSalaryDifference, totalDifference],
      options,
    });
    const adjustedStatus = status;
    const justifiedSummary = justifiedConceptSummary(conceptRowsForEmployee);

    people.push({
      employeeNumber,
      person,
      workplace: employee?.workplace ?? records[0]?.workplace,
      position: employee?.position,
      category: employee?.category ?? records[0]?.professionalGroup,
      salaryRegistro: registro.salary,
      salaryPdf: aggregate.totals.salary,
      salaryDifference,
      salaryComplementRegistro: registro.salaryComplement,
      salaryComplementPdf: aggregate.totals.salaryComplement,
      salaryComplementDifference,
      extraSalaryRegistro: registro.extraSalary,
      extraSalaryPdf: aggregate.totals.extraSalary,
      extraSalaryDifference,
      registroTotal: registro.total,
      pdfTotal,
      totalDifference,
      grossSalaryDifference: salaryDifference,
      grossSalaryComplementDifference: salaryComplementDifference,
      grossExtraSalaryDifference: extraSalaryDifference,
      grossTotalDifference: totalDifference,
      justifiedSalaryAmount,
      justifiedSalaryComplementAmount,
      justifiedExtraSalaryAmount,
      justifiedTotalAmount,
      adjustedSalaryDifference,
      adjustedSalaryComplementDifference,
      adjustedExtraSalaryDifference,
      adjustedTotalDifference,
      grossStatus: status,
      adjustedStatus,
      justifiedConceptsSummary: justifiedSummary.summary,
      justifiedConceptsCount: justifiedSummary.count,
      pdfControlTotalDevengado: payrollControlTotal(records),
      payrollCount: records.length,
      unmappedConceptsCount: unmappedCount,
      status,
      detail: personDetail({ salaryDifference, salaryComplementDifference, extraSalaryDifference, totalDifference, options }),
      periods: [...new Set(records.map((record) => record.periodLabel))],
      files: [...new Set(records.map((record) => `${record.sourceFile}${record.pageNumber ? ` p.${record.pageNumber}` : ""}`))],
    });

    if (employee) {
      const normalizedPlusVariables = employee.normalizedPlusVariables.total;
      const normalized = employee.normalized.total;
      const periodComplete = employee.periodComplete.total;
      const diffPdfVsPeriodComplete = roundMoney(pdfTotal - periodComplete);
      const diffPdfVsNormalizedPlusVariables = roundMoney(pdfTotal - normalizedPlusVariables);
      const diffPdfVsNormalized = roundMoney(pdfTotal - normalized);
      normalizedVsReal.push({
        employeeNumber,
        person,
        workplace: employee.workplace,
        position: employee.position,
        category: employee.category,
        normalizedPlusVariables,
        normalized,
        periodComplete,
        realPdf: pdfTotal,
        diffPdfVsPeriodComplete,
        diffPdfVsNormalizedPlusVariables,
        diffPdfVsNormalized,
        possibleJustification: justification(employee, aggregate),
        status: worstStatus(
          [diffPdfVsPeriodComplete, diffPdfVsNormalizedPlusVariables, diffPdfVsNormalized].map((difference) =>
            statusFromDifference(difference, options),
          ),
        ),
        detail: "Real PDF calculado desde conceptos incluidos por mapa; no usa líquido, coste empresa ni total devengado como importe comparativo.",
      });
    }
  });

  const unmappedConcepts = createUnmappedRows(aggregates, conceptMap);
  const ignoredConcepts = createIgnoredRows(aggregates);
  const matchedPeopleRows = people.filter((row) => row.status !== "Sin Registro" && row.status !== "Sin PDF");
  const pdfWithoutRegistro = people.filter((row) => row.status === "Sin Registro");
  const registroWithoutPdf = people.filter((row) => row.status === "Sin PDF");
  const peopleWithDifferences = matchedPeopleRows.filter((row) => row.status !== "OK").length;
  const reviewThreshold = options.reviewThreshold ?? options.tolerance;
  const incidentThreshold = options.incidentThreshold ?? 50;
  const matchedSalaryDifference = roundMoney(matchedPeopleRows.reduce((sum, row) => sum + row.salaryDifference, 0));
  const matchedSalaryComplementDifference = roundMoney(matchedPeopleRows.reduce((sum, row) => sum + row.salaryComplementDifference, 0));
  const matchedExtraSalaryDifference = roundMoney(matchedPeopleRows.reduce((sum, row) => sum + row.extraSalaryDifference, 0));
  const matchedTotalDifference = roundMoney(matchedPeopleRows.reduce((sum, row) => sum + row.totalDifference, 0));
  const matchedJustifiedSalaryAmount = 0;
  const matchedJustifiedSalaryComplementAmount = 0;
  const matchedJustifiedExtraSalaryAmount = 0;
  const matchedJustifiedTotalAmount = 0;
  const matchedAdjustedSalaryDifference = matchedSalaryDifference;
  const matchedAdjustedSalaryComplementDifference = matchedSalaryComplementDifference;
  const matchedAdjustedExtraSalaryDifference = matchedExtraSalaryDifference;
  const matchedAdjustedTotalDifference = matchedTotalDifference;
  const peopleWithGrossDifferences = matchedPeopleRows.filter((row) => row.grossStatus === "Diferencia" || row.grossStatus === "Revisar").length;
  const peopleWithAdjustedDifferences = peopleWithDifferences;
  const peopleOkAdjusted = matchedPeopleRows.filter((row) => row.status === "OK").length;
  const conceptsJustifiedActive = 0;
  const conceptsJustifiedApplied = 0;
  const conceptsPendingReview = unmappedConcepts.filter((row) => row.decisionType === "Pendiente revision").length;
  const conceptsIgnored = unmappedConcepts.filter((row) => row.decisionType === "Ignorado").length;
  const conceptsRealUnmapped = unmappedConcepts.filter((row) => row.decisionType === "Sin mapear real").length;
  const pendingDecisionPdfTotal = roundMoney(
    unmappedConcepts
      .filter((row) => row.decisionType === "Pendiente revision")
      .reduce((sum, row) => sum + row.totalDetected, 0),
  );

  return {
    summary: {
      generatedAt: new Date().toISOString(),
      pdfsAnalyzed: payrollRecords.length,
      pdfsFailed: 0,
      uniquePeople: allEmployeeNumbers.size,
      peopleWithDifferences,
      totalSalaryDifference: matchedSalaryDifference,
      totalSalaryComplementDifference: matchedSalaryComplementDifference,
      totalExtraSalaryDifference: matchedExtraSalaryDifference,
      totalGlobalDifference: matchedTotalDifference,
      peopleWithGrossDifferences,
      peopleWithAdjustedDifferences,
      matchedGrossTotalDifference: matchedTotalDifference,
      matchedGrossSalaryDifference: matchedSalaryDifference,
      matchedGrossSalaryComplementDifference: matchedSalaryComplementDifference,
      matchedGrossExtraSalaryDifference: matchedExtraSalaryDifference,
      matchedJustifiedTotalAmount,
      matchedJustifiedSalaryAmount,
      matchedJustifiedSalaryComplementAmount,
      matchedJustifiedExtraSalaryAmount,
      matchedAdjustedTotalDifference,
      matchedAdjustedSalaryDifference,
      matchedAdjustedSalaryComplementDifference,
      matchedAdjustedExtraSalaryDifference,
      peopleOkAdjusted,
      conceptsJustifiedActive,
      conceptsJustifiedApplied,
      matchedPeople: matchedPeopleRows.length,
      matchedTotalDifference,
      matchedSalaryDifference,
      matchedSalaryComplementDifference,
      matchedExtraSalaryDifference,
      peopleInRegistroWithoutPdf: registroWithoutPdf.length,
      peopleInPdfWithoutRegistro: pdfWithoutRegistro.length,
      totalPdfWithoutRegistro: roundMoney(pdfWithoutRegistro.reduce((sum, row) => sum + row.pdfTotal, 0)),
      conceptsUnmapped: unmappedConcepts.length,
      conceptsNotIncluded: unmappedConcepts.length,
      conceptsIgnored,
      conceptsPendingReview,
      conceptsRealUnmapped,
      pendingReviewAmount: pendingDecisionPdfTotal,
      pendingDecisionPdfTotal,
      internalExcelDifferences: filteredInternalExcelChecks.filter((row) => row.status !== "OK").length,
      groupingDifferences: 0,
      tolerance: options.tolerance,
      aiEnabled: options.enableAI !== false,
      aiModel: options.aiModel,
      reviewThreshold,
      incidentThreshold,
    },
    payrollRecords: filteredPayrollRecords,
    registroEmployees: filteredRegistroRecords,
    people: people.sort((a, b) => a.employeeNumber.localeCompare(b.employeeNumber, "es")),
    normalizedVsReal: normalizedVsReal.sort((a, b) => a.employeeNumber.localeCompare(b.employeeNumber, "es")),
    concepts,
    unmappedConcepts,
    ignoredConcepts,
    pdfWithoutRegistro,
    registroWithoutPdf,
    groupings: [],
    internalExcelChecks: filteredInternalExcelChecks,
    internalExcelNormalizedVariablesChecks,
    conceptMap,
    excludedEmployeeIdsApplied,
    errors: [],
    criteria: [
      "Clave principal: matricula / ID RH.",
      "No se muestra ni exporta NIF.",
      "PDF comparativo = suma de conceptos incluidos por mapa editable.",
      "Total Devengado PDF se usa solo como control auxiliar.",
      `Tolerancia usada: ${options.tolerance} EUR.`,
      `Umbral revisar: ${reviewThreshold} EUR; umbral diferencia: ${incidentThreshold} EUR.`,
      excludedEmployeeIdsApplied.length
        ? `Exclusiones por matricula aplicadas: ${excludedEmployeeIdsApplied.length}.`
        : "Sin exclusiones por matricula aplicadas.",
      options.enableAI === false
        ? "IA desactivada; explicaciones deterministas."
        : "Gemini solo puede sugerir textos y mapeos, nunca calcular importes.",
    ],
  };
}
