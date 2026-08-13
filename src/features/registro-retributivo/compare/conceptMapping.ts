import type {
  AvailableConceptCodes,
  ConceptBlockKey,
  ConceptDedupePriority,
  ConceptMappingRule,
  ConceptMappingSourceType,
  MappingStatus,
  RetributionBlock,
} from "@/features/registro-retributivo/types";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

interface CodeLocation {
  readonly block: RetributionBlock;
  readonly blockKey: ConceptBlockKey;
}

interface DefaultRule {
  readonly pdfConcept: string;
  readonly aliases?: readonly string[];
  readonly registroCode: string;
  readonly status?: MappingStatus;
  readonly sourceType?: ConceptMappingSourceType;
  readonly allowInformative?: boolean;
  readonly dedupePriority?: ConceptDedupePriority;
  readonly includedInComparison?: boolean;
  readonly includedInAdjustedComparison?: boolean;
  readonly active?: boolean;
  readonly reason?: string;
}

interface IgnoredRule {
  readonly pdfConcept: string;
  readonly sourceType?: ConceptMappingSourceType;
  readonly reason?: string;
}

const BLOCKS: ReadonlyArray<CodeLocation> = [
  { block: "Salario", blockKey: "salary" },
  { block: "C. Salarial", blockKey: "salaryComplement" },
  { block: "Extrasalarial", blockKey: "extraSalary" },
];

const DEFAULT_RULES: readonly DefaultRule[] = [
  { pdfConcept: "Salario Base", registroCode: "SSP_SAL_BASE" },
  { pdfConcept: "Paga Extra Prorrateada", registroCode: "CSP_P_EXT_PRORRAT_NN" },
  { pdfConcept: "Paga Extra Junio", registroCode: "SSP_PAGA_EXTRA_1" },
  { pdfConcept: "Paga Extra Diciembre", registroCode: "SSP_PAGA_EXTRA_2" },
  { pdfConcept: "Paga 25 anos", registroCode: "CSP_I_PAGA_25_ANYOS" },
  { pdfConcept: "Antiguedad", registroCode: "SSP_ANTIGUEDAD" },
  { pdfConcept: "Complemento Puesto de trabajo", registroCode: "CSP_I_COMP_PTO_TRA" },
  { pdfConcept: "Complemento Personal", registroCode: "CSP_I_COMP_PERSONAL" },
  { pdfConcept: "Complemento salario base organigrama", registroCode: "CSP_I_COMP_SB_ORG" },
  { pdfConcept: "Complemento personal por no absentismo", registroCode: "CSP_I_COMP_PERS_N_ABS" },
  { pdfConcept: "Plus Convenio", registroCode: "SSP_PLUS_CONVENIO" },
  { pdfConcept: "Plus de Transporte", registroCode: "SSP_PLUS_TRANSPORTE" },
  { pdfConcept: "Retribucion Variable", registroCode: "CSP_I_RETRIB_VARIABLE" },
  { pdfConcept: "Variable Comercial", registroCode: "CSP_I_VARIABLE_COMERCIAL" },
  { pdfConcept: "Comisiones Cross Sell", registroCode: "CSP_I_COMISI_CROSS_SELL" },
  { pdfConcept: "Participacion en Resultados", registroCode: "CSP_I_PART_RESULTADOS" },
  { pdfConcept: "Gratificacion una sola Vez", registroCode: "CSP_I_GRATIF_1_VEZ" },
  { pdfConcept: "Bolsa de Vacaciones", registroCode: "SSP_VACACIONES" },
  { pdfConcept: "Vacaciones", registroCode: "SSP_VACACIONES" },
  { pdfConcept: "Complementos de I.T.", registroCode: "SSP_COMP_TOT_IT" },
  { pdfConcept: "Prestacion de Enfermedad al 75", registroCode: "SSP_PREST_ENF_75" },
  { pdfConcept: "Prestacion de Enfermedad al 60", registroCode: "SSP_PREST_ENF_60" },
  { pdfConcept: "Enfermedad Cargo Empresa", registroCode: "SSP_TOT_E_CARGO_EMP" },
  { pdfConcept: "Finiquito Primera Paga Extra", registroCode: "SSP_FINIQ_PAGA_1" },
  { pdfConcept: "Finiquito Segunda Paga Extra", registroCode: "SSP_FINIQ_PAGA_2" },
  { pdfConcept: "Finiquito Cuarta Paga Extra", registroCode: "SSP_FINIQ_PAGA_4" },
  { pdfConcept: "Importe Beca Curricular", registroCode: "CSP_BECA_CURRICULAR" },
  { pdfConcept: "Indemnizacion", registroCode: "SSP_INDEM_PAGO" },
  { pdfConcept: "Reajuste", registroCode: "CSP_I_REAJUSTE" },
  { pdfConcept: "Compensacion Comida", registroCode: "CSP_I_COMPENSACION_COMIDA" },
  { pdfConcept: "Comida Tarjeta", registroCode: "CSP_I_TARJETA_COMIDA" },
  { pdfConcept: "Ayuda Escolar hijos", registroCode: "CSP_I_AYU_ESCOLAR_HIJOS" },
  {
    pdfConcept: "Abono teletrabajo",
    aliases: ["Teletrabajo", "Compensación teletrabajo"],
    registroCode: "CSP_I_COMP_TELETR_COVID",
    status: "Incluido",
    includedInComparison: true,
    active: true,
    reason: "Abono teletrabajo incluido en el analisis cuando la regla esta activa.",
  },
  { pdfConcept: "Lote de Navidad", registroCode: "CSP_I_LOTE_NAVIDAD" },
  { pdfConcept: "Seguro Medico", registroCode: "CYC_SEG_SALUD" },
  {
    pdfConcept: "Seguro de vida mensual",
    registroCode: "CSP_COT_SEG_VIDA_MENS",
    sourceType: "informativo",
    allowInformative: true,
    dedupePriority: "informativo",
  },
  {
    pdfConcept: "Seguro de accidente mensual",
    registroCode: "CSP_COT_PRIMA_ACC_MENS",
    sourceType: "informativo",
    allowInformative: true,
    dedupePriority: "informativo",
  },
  {
    pdfConcept: "Plan de Pensiones Mensual",
    registroCode: "CYC_PLAN_PENSIONES_ORD",
    sourceType: "informativo",
    allowInformative: true,
    dedupePriority: "informativo",
  },
  {
    pdfConcept: "Plan de Pensiones Extraordinario Mensual",
    registroCode: "CYC_PLAN_PENSIONES_EXTRAO_NN",
    sourceType: "informativo",
    allowInformative: true,
    dedupePriority: "informativo",
  },
  { pdfConcept: "Kilometraje con Retencion", registroCode: "SSP_KM_CON_RETEN" },
  { pdfConcept: "Kilometraje sin Retencion", registroCode: "SSP_KM_SIN_RETEN" },
  {
    pdfConcept: "Prestacion Teorica Maternidad",
    registroCode: "CSP_I_AJUSTE_MATERNIDAD",
    status: "Pendiente revisión",
  },
];

const IGNORED_CONCEPTS: readonly IgnoredRule[] = [
  { pdfConcept: "Seguro Medico mensual", sourceType: "informativo", reason: "Informativo mensual excluido para no duplicar el devengo Seguro Medico." },
  { pdfConcept: "Especie Seguro Medico", sourceType: "unknown" },
  { pdfConcept: "Descuento Seguro Medico", sourceType: "deduccion" },
  { pdfConcept: "Descuento Transporte", sourceType: "deduccion" },
  { pdfConcept: "Cancelacion Prov (Dieta y KM)", sourceType: "deduccion" },
  { pdfConcept: "Aportacion Personal al PPSE", sourceType: "deduccion" },
  { pdfConcept: "Anticipo Prorrateado", sourceType: "deduccion" },
  { pdfConcept: "Rendimientos Irregulares", sourceType: "informativo" },
  { pdfConcept: "Cuota Gimnasio", sourceType: "deduccion" },
  { pdfConcept: "Exceso defecto paga anterior", sourceType: "unknown" },
  { pdfConcept: "Retencion a Cuenta del IRPF", sourceType: "retencion" },
  { pdfConcept: "Retencion a Cuenta IRPF Pagos", sourceType: "retencion" },
  { pdfConcept: "Cotizacion Regimen General Ind", sourceType: "retencion" },
  { pdfConcept: "Cotizacion D+F+P+S Individuo", sourceType: "retencion" },
  { pdfConcept: "Cotiz. MEI Empleado", sourceType: "retencion" },
  { pdfConcept: "Coste Empresa", sourceType: "coste_empresa" },
];

export function normalizePdfConcept(value: string): string {
  return normalizeComparableText(value);
}

function findCodeLocation(codes: AvailableConceptCodes, code: string): CodeLocation | undefined {
  return BLOCKS.find(({ blockKey }) =>
    codes[blockKey].some((available) => normalizeComparableText(available) === normalizeComparableText(code)),
  );
}

function fallbackLocation(): CodeLocation {
  return { block: "C. Salarial", blockKey: "salaryComplement" };
}

function defaultSourceTypeForRule(rule: Pick<ConceptMappingRule, "status" | "sourceType">): ConceptMappingSourceType {
  if (rule.sourceType) {
    return rule.sourceType;
  }
  return rule.status === "Incluido" ? "devengo" : "unknown";
}

function defaultDedupePriority(rule: Pick<ConceptMappingRule, "dedupePriority" | "sourceType" | "status">): ConceptDedupePriority {
  if (rule.dedupePriority) {
    return rule.dedupePriority;
  }
  return defaultSourceTypeForRule(rule) === "informativo" ? "informativo" : "devengo";
}

function normalizeAliases(aliases: ConceptMappingRule["aliases"]): readonly string[] {
  const seen = new Set<string>();
  return (aliases ?? [])
    .map((alias) => alias.trim())
    .filter((alias) => {
      if (!alias) {
        return false;
      }
      const normalized = normalizePdfConcept(alias);
      if (seen.has(normalized)) {
        return false;
      }
      seen.add(normalized);
      return true;
    });
}

export function normalizeConceptMappingRule(rule: ConceptMappingRule): ConceptMappingRule {
  const active = rule.active ?? true;
  return {
    ...rule,
    normalizedPdfConcept: rule.normalizedPdfConcept || normalizePdfConcept(rule.pdfConcept),
    aliases: normalizeAliases(rule.aliases),
    sourceType: defaultSourceTypeForRule(rule),
    allowInformative: rule.allowInformative ?? false,
    dedupePriority: defaultDedupePriority(rule),
    includedInComparison: rule.includedInComparison ?? (rule.status === "Incluido" || rule.status === "Justificado"),
    includedInAdjustedComparison: rule.includedInAdjustedComparison ?? true,
    active,
  };
}

export function isRuleEnabledForComparison(rule: Pick<ConceptMappingRule, "active" | "includedInComparison">): boolean {
  return rule.active !== false && rule.includedInComparison !== false;
}

export function buildDefaultConceptMap(codes: AvailableConceptCodes): ConceptMappingRule[] {
  const rules: ConceptMappingRule[] = [];

  DEFAULT_RULES.forEach((rule) => {
    const location = findCodeLocation(codes, rule.registroCode);
    const status = rule.status ?? (location ? "Incluido" : "Pendiente revisión");
    const included = Boolean(location && (status === "Incluido" || status === "Justificado") && rule.includedInComparison !== false);
    const visibleLocation = location ?? fallbackLocation();
    rules.push({
      pdfConcept: rule.pdfConcept,
      normalizedPdfConcept: normalizePdfConcept(rule.pdfConcept),
      aliases: rule.aliases ?? [],
      block: visibleLocation.block,
      blockKey: visibleLocation.blockKey,
      registroCode: location ? rule.registroCode : undefined,
      status,
      sourceType: rule.sourceType ?? "devengo",
      allowInformative: rule.allowInformative ?? false,
      dedupePriority: rule.dedupePriority ?? "devengo",
      includedInComparison: included,
      includedInAdjustedComparison: rule.includedInAdjustedComparison ?? true,
      active: rule.active ?? true,
      reason:
        rule.reason ??
        (location
          ? status === "Incluido"
            ? "Mapeo por defecto validado contra codigos del Excel."
            : "Sugerencia de mapeo pendiente de revision; no incluida automaticamente."
          : `El codigo ${rule.registroCode} no existe en el Excel cargado.`),
    });
  });

  IGNORED_CONCEPTS.forEach(({ pdfConcept, sourceType, reason }) => {
    rules.push({
      pdfConcept,
      normalizedPdfConcept: normalizePdfConcept(pdfConcept),
      block: "Extrasalarial",
      blockKey: "extraSalary",
      status: "Ignorado",
      sourceType: sourceType ?? "unknown",
      allowInformative: false,
      dedupePriority: "informativo",
      includedInComparison: false,
      includedInAdjustedComparison: false,
      active: true,
      reason: reason ?? "Concepto conservadoramente excluido por ser deduccion, retencion, cotizacion, especie, informativo o coste empresa.",
    });
  });

  return mergeConceptMap(rules);
}

export function mergeConceptMap(rules: readonly ConceptMappingRule[]): ConceptMappingRule[] {
  const byName = new Map<string, ConceptMappingRule>();
  rules.forEach((rule) => {
    const normalized = rule.normalizedPdfConcept || normalizePdfConcept(rule.pdfConcept);
    byName.set(normalized, normalizeConceptMappingRule({ ...rule, normalizedPdfConcept: normalized }));
  });
  return [...byName.values()].sort((a, b) => a.pdfConcept.localeCompare(b.pdfConcept, "es"));
}

export function findConceptRule(
  rules: readonly ConceptMappingRule[],
  pdfConcept: string,
): ConceptMappingRule | undefined {
  const normalized = normalizePdfConcept(pdfConcept);
  for (const rule of rules) {
    const normalizedRule = normalizeConceptMappingRule(rule);
    if ((normalizedRule.normalizedPdfConcept || normalizePdfConcept(normalizedRule.pdfConcept)) === normalized) {
      return normalizedRule;
    }
    if ((normalizedRule.aliases ?? []).some((alias) => normalizePdfConcept(alias) === normalized)) {
      return normalizedRule;
    }
  }
  return undefined;
}

export function mappingStatusFromConceptType(type: string): MappingStatus {
  return ["retencion", "cotizacion", "deduccion", "especie", "coste_empresa"].includes(type) ? "Ignorado" : "Pendiente revisión";
}

export function validateConceptMapForCodes(
  rules: readonly ConceptMappingRule[],
  codes: AvailableConceptCodes,
): ConceptMappingRule[] {
  return mergeConceptMap(
    rules.map((rule) => {
      if (!rule.registroCode) {
        return rule;
      }
      const location = findCodeLocation(codes, rule.registroCode);
      if (!location) {
        return {
          ...rule,
          registroCode: undefined,
          status: "Pendiente revisión",
          includedInComparison: false,
          reason: "Regla no incluida porque el codigo no existe en el Excel cargado.",
        };
      }
      return {
        ...rule,
        block: location.block,
        blockKey: location.blockKey,
        includedInComparison: rule.includedInComparison ?? (rule.status === "Incluido" || rule.status === "Justificado"),
        includedInAdjustedComparison: rule.includedInAdjustedComparison ?? true,
      };
    }),
  );
}
