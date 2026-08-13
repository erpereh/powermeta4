"use client";

import {
  Copy,
  Download,
  FileJson,
  MoreHorizontal,
  Pencil,
  Plus,
  Power,
  PowerOff,
  RefreshCcw,
  RotateCcw,
  Save,
  Search,
  Trash2,
} from "lucide-react";
import type { MouseEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Card } from "@/features/registro-retributivo/components/common/Card";
import { ModalShell } from "@/features/registro-retributivo/components/common/ModalShell";
import { Toggle } from "@/features/registro-retributivo/components/common/Toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { isRuleEnabledForComparison, mergeConceptMap, normalizeConceptMappingRule, normalizePdfConcept } from "@/features/registro-retributivo/compare/conceptMapping";
import type {
  ConceptBlockKey,
  ConceptDedupePriority,
  ConceptMappingRule,
  ConceptMappingSourceType,
  MappingStatus,
  RetributionBlock,
  UnmappedConceptRow,
} from "@/features/registro-retributivo/types";
import { STATUS_BADGE_TONE } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/features/registro-retributivo/utils/classNames";
import { normalizeComparableText } from "@/features/registro-retributivo/utils/normalize";

type UsageLabel = "Activo" | "Desactivado" | "Sin configurar";
type StatusFilter = "Todos" | "Sin configurar";
type ActivationFilter = "Todos" | "Activos" | "Desactivados";
type DetectedFilter = "Todos" | "Detectados" | "No detectados";

interface RuleForm {
  readonly pdfConcept: string;
  readonly aliasesText: string;
  readonly registroCode: string;
  readonly block: RetributionBlock;
  readonly status: MappingStatus;
  readonly sourceType: ConceptMappingSourceType;
  readonly allowInformative: boolean;
  readonly dedupePriority: ConceptDedupePriority;
  readonly includedInComparison: boolean;
  readonly includedInAdjustedComparison: boolean;
  readonly active: boolean;
  readonly reason: string;
}

interface RuleMeta {
  readonly detected: boolean;
  readonly codeValid: boolean;
}

interface RuleTableBaseRow {
  readonly id: string;
  readonly kind: "rule" | "unmapped";
  readonly statusLabel: UsageLabel;
  readonly concept: string;
  readonly code?: string;
  readonly block: RetributionBlock;
  readonly detected: boolean;
  readonly active?: boolean;
  readonly reason?: string;
  readonly aliases: readonly string[];
  readonly sortRank: number;
}

interface RuleRow extends RuleTableBaseRow {
  readonly kind: "rule";
  readonly rule: ConceptMappingRule;
  readonly index: number;
}

interface UnmappedRow extends RuleTableBaseRow {
  readonly kind: "unmapped";
  readonly row: UnmappedConceptRow;
}

type ConceptMapRow = RuleRow | UnmappedRow;

const STATUSES: readonly MappingStatus[] = ["Incluido", "Justificado", "Pendiente revisión", "Ignorado"];
const ACTIVATION_FILTERS: readonly ActivationFilter[] = ["Todos", "Activos", "Desactivados"];
const DETECTED_FILTERS: readonly DetectedFilter[] = ["Todos", "Detectados", "No detectados"];
const BLOCKS: readonly RetributionBlock[] = ["Salario", "C. Salarial", "Extrasalarial"];
const SOURCE_TYPES: readonly ConceptMappingSourceType[] = ["devengo", "informativo", "deduccion", "retencion", "coste_empresa", "unknown"];
const DEDUPE_PRIORITIES: readonly ConceptDedupePriority[] = ["devengo", "informativo"];

const MAP_NOTE = "Activo = se usa en el análisis. Desactivado = se ignora al actualizar datos.";
const TOP_ACTION_CLASS = "min-h-11 whitespace-nowrap rounded-full px-4";

const EMPTY_RULE_FORM: RuleForm = {
  pdfConcept: "",
  aliasesText: "",
  registroCode: "",
  block: "C. Salarial",
  status: "Incluido",
  sourceType: "devengo",
  allowInformative: false,
  dedupePriority: "devengo",
  includedInComparison: true,
  includedInAdjustedComparison: true,
  active: true,
  reason: "",
};

function blockKeyFromBlock(block: RetributionBlock): ConceptBlockKey {
  if (block === "Salario") return "salary";
  if (block === "Extrasalarial") return "extraSalary";
  return "salaryComplement";
}

function isStatus(value: unknown): value is MappingStatus {
  return typeof value === "string" && STATUSES.includes(value as MappingStatus);
}

function isBlock(value: unknown): value is RetributionBlock {
  return typeof value === "string" && BLOCKS.includes(value as RetributionBlock);
}

function isSourceType(value: unknown): value is ConceptMappingSourceType {
  return typeof value === "string" && SOURCE_TYPES.includes(value as ConceptMappingSourceType);
}

function isDedupePriority(value: unknown): value is ConceptDedupePriority {
  return typeof value === "string" && DEDUPE_PRIORITIES.includes(value as ConceptDedupePriority);
}

function normalizeAliases(input: unknown): readonly string[] {
  const values = Array.isArray(input) ? input : typeof input === "string" ? input.split(",") : [];
  const seen = new Set<string>();
  return values
    .map((value) => String(value).trim())
    .filter((value) => {
      if (!value) return false;
      const normalized = normalizePdfConcept(value);
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
}

function coerceRule(input: unknown): ConceptMappingRule {
  const item = (typeof input === "object" && input ? input : {}) as Partial<ConceptMappingRule>;
  const pdfConcept = String(item.pdfConcept ?? "").trim();
  if (!pdfConcept) {
    throw new Error("Cada regla necesita Concepto Recibo.");
  }
  const block = isBlock(item.block) ? item.block : "C. Salarial";
  const status = isStatus(item.status) ? item.status : "Pendiente revisión";
  return normalizeConceptMappingRule({
    pdfConcept,
    normalizedPdfConcept: item.normalizedPdfConcept || normalizePdfConcept(pdfConcept),
    aliases: normalizeAliases(item.aliases),
    block,
    blockKey: item.blockKey ?? blockKeyFromBlock(block),
    registroCode: item.registroCode?.trim() || undefined,
    status,
    sourceType: isSourceType(item.sourceType) ? item.sourceType : "devengo",
    allowInformative: item.allowInformative ?? false,
    dedupePriority: isDedupePriority(item.dedupePriority) ? item.dedupePriority : "devengo",
    includedInComparison: item.includedInComparison ?? (status === "Incluido" || status === "Justificado"),
    includedInAdjustedComparison: item.includedInAdjustedComparison ?? true,
    active: item.active ?? true,
    reason: item.reason,
  });
}

function normalizeRules(input: unknown): ConceptMappingRule[] {
  if (!Array.isArray(input)) {
    throw new Error("El mapa debe ser un array JSON.");
  }
  return mergeConceptMap(input.map(coerceRule));
}

function composeVisibleRules(defaultRules: readonly ConceptMappingRule[] | undefined, storedRules: readonly ConceptMappingRule[]): ConceptMappingRule[] {
  const base = normalizeRules(defaultRules ?? []);
  const stored = normalizeRules(storedRules);
  if (!stored.length) return base;
  if (!base.length) return stored;

  const storedLooksPartial = stored.length < Math.ceil(base.length * 0.75);
  return storedLooksPartial ? mergeConceptMap([...base, ...stored]) : stored;
}

function ruleToForm(rule: ConceptMappingRule): RuleForm {
  const normalized = normalizeConceptMappingRule(rule);
  return {
    pdfConcept: normalized.pdfConcept,
    aliasesText: (normalized.aliases ?? []).join(", "),
    registroCode: normalized.registroCode ?? "",
    block: normalized.block,
    status: normalized.status,
    sourceType: normalized.sourceType ?? "devengo",
    allowInformative: normalized.allowInformative ?? false,
    dedupePriority: normalized.dedupePriority ?? "devengo",
    includedInComparison: normalized.includedInComparison ?? (normalized.status === "Incluido" || normalized.status === "Justificado"),
    includedInAdjustedComparison: normalized.includedInAdjustedComparison ?? true,
    active: isRuleEnabledForComparison(normalized),
    reason: normalized.reason ?? "",
  };
}

function formToRule(form: RuleForm): ConceptMappingRule {
  const status: MappingStatus = !form.registroCode.trim() ? "Pendiente revisión" : form.active ? "Incluido" : "Ignorado";
  return normalizeConceptMappingRule({
    pdfConcept: form.pdfConcept.trim(),
    normalizedPdfConcept: normalizePdfConcept(form.pdfConcept),
    aliases: normalizeAliases(form.aliasesText),
    block: form.block,
    blockKey: blockKeyFromBlock(form.block),
    registroCode: form.registroCode.trim() || undefined,
    status,
    sourceType: form.sourceType,
    allowInformative: form.allowInformative,
    dedupePriority: form.dedupePriority,
    includedInComparison: form.active,
    includedInAdjustedComparison: true,
    active: form.active,
    reason: form.reason.trim() || undefined,
  });
}

function availableCodesFromResult(result: ReturnType<typeof useAppState>["result"]): readonly string[] {
  const codes = new Set<string>();
  result?.registroEmployees.forEach((employee) => employee.concepts.forEach((concept) => codes.add(concept.code)));
  return [...codes].sort((left, right) => left.localeCompare(right, "es"));
}

function detectedConceptsFromResult(result: ReturnType<typeof useAppState>["result"]): ReadonlySet<string> {
  const concepts = new Set<string>();
  result?.payrollRecords.forEach((record) => record.concepts.forEach((concept) => concepts.add(normalizePdfConcept(concept.name))));
  result?.unmappedConcepts.forEach((row) => concepts.add(normalizePdfConcept(row.pdfConcept)));
  return concepts;
}

function codeExists(code: string, availableCodes: readonly string[]): boolean {
  if (!code.trim() || !availableCodes.length) return true;
  const normalized = normalizeComparableText(code);
  return availableCodes.some((item) => normalizeComparableText(item) === normalized);
}

function ruleMeta(rule: ConceptMappingRule, detectedConcepts: ReadonlySet<string>, availableCodes: readonly string[]): RuleMeta {
  const names = [rule.pdfConcept, ...(rule.aliases ?? [])].map(normalizePdfConcept);
  return {
    detected: names.some((name) => detectedConcepts.has(name)),
    codeValid: codeExists(rule.registroCode ?? "", availableCodes),
  };
}

function ruleMatchesConcept(rule: ConceptMappingRule, normalizedConcept: string): boolean {
  return [rule.pdfConcept, ...(rule.aliases ?? [])].map(normalizePdfConcept).includes(normalizedConcept);
}

function reasonForRule(rule: ConceptMappingRule): string | undefined {
  if (!rule.reason) return undefined;
  const normalized = normalizeComparableText(rule.reason);
  if (normalized.includes("justific") || normalized.includes("diferencia ajustada") || normalized.includes("fase posterior") || normalized.includes("excluirse")) {
    return isRuleEnabledForComparison(rule) ? "Concepto activo en el analisis." : "Concepto desactivado en el analisis.";
  }
  return rule.reason;
}

function sortRankForRule(rule: ConceptMappingRule, meta: RuleMeta): number {
  if (!isRuleEnabledForComparison(rule)) return 5;
  if (meta.detected) return 1;
  if (rule.status === "Pendiente revisión") return 3;
  return 4;
}

function buildRows(
  rules: readonly ConceptMappingRule[],
  unmapped: readonly UnmappedConceptRow[],
  detectedConcepts: ReadonlySet<string>,
  availableCodes: readonly string[],
): ConceptMapRow[] {
  const ruleRows: ConceptMapRow[] = rules.map((rule, index) => {
    const meta = ruleMeta(rule, detectedConcepts, availableCodes);
    const enabled = isRuleEnabledForComparison(rule);
    return {
      kind: "rule",
      id: `rule-${normalizePdfConcept(rule.pdfConcept)}-${index}`,
      statusLabel: enabled ? "Activo" : "Desactivado",
      concept: rule.pdfConcept,
      code: rule.registroCode,
      block: rule.block,
      detected: meta.detected,
      active: enabled,
      reason: reasonForRule(rule),
      aliases: rule.aliases ?? [],
      sortRank: sortRankForRule(rule, meta),
      rule,
      index,
    };
  });

  const unmappedRows: ConceptMapRow[] = unmapped
    .filter((row) => {
      const normalized = normalizePdfConcept(row.pdfConcept);
      return !rules.some((rule) => isRuleEnabledForComparison(rule) && ruleMatchesConcept(rule, normalized));
    })
    .map((row, index) => ({
      kind: "unmapped",
      id: `unmapped-${normalizePdfConcept(row.pdfConcept)}-${index}`,
      statusLabel: "Sin configurar",
      concept: row.pdfConcept,
      code: row.suggestedRegistroCode,
      block: row.suggestedBlock ?? "C. Salarial",
      detected: true,
      reason: row.reason ?? row.recommendedAction,
      aliases: [],
      sortRank: 6,
      row,
    }));

  return [...ruleRows, ...unmappedRows].sort((left, right) => left.sortRank - right.sortRank || left.concept.localeCompare(right.concept, "es"));
}

function rowMatches(row: ConceptMapRow, query: string): boolean {
  if (!query) return true;
  const normalizedQuery = normalizeComparableText(query);
  const values = [row.concept, ...row.aliases, row.code, row.block, row.reason, row.statusLabel];
  return values.some((value) => normalizeComparableText(value).includes(normalizedQuery));
}

function statusBadgeClass(status: UsageLabel): string {
  if (status === "Activo") return STATUS_BADGE_TONE.success;
  if (status === "Sin configurar") return STATUS_BADGE_TONE.warning;
  return STATUS_BADGE_TONE.neutral;
}

function shortText(value: string | undefined, fallback: string): string {
  const text = value?.trim() || fallback;
  return text.length > 96 ? `${text.slice(0, 93)}...` : text;
}

function IconButton({
  label,
  title,
  tone = "neutral",
  disabled,
  onClick,
  children,
}: {
  readonly label: string;
  readonly title?: string;
  readonly tone?: "neutral" | "danger" | "active" | "inactive";
  readonly disabled?: boolean;
  readonly onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  readonly children: ReactNode;
}) {
  const toneClass = {
    neutral: "border-border bg-card text-foreground hover:bg-muted",
    danger: cn("border-transparent", STATUS_BADGE_TONE.danger, "hover:bg-destructive/20"),
    active: cn("border-transparent", STATUS_BADGE_TONE.success, "hover:bg-emerald-500/20"),
    inactive: cn("border-transparent", STATUS_BADGE_TONE.neutral, "hover:bg-muted/80"),
  }[tone];

  return (
    <button
      type="button"
      aria-label={label}
      title={title ?? label}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50",
        toneClass,
      )}
    >
      {children}
    </button>
  );
}

export function ConceptMapEditor() {
  const { settings, updateSettings, saveConceptMapAndRefresh, result, activeAnalysis } = useAppState();
  const activeResult = result ?? activeAnalysis?.result;
  const availableCodes = useMemo(() => availableCodesFromResult(activeResult), [activeResult]);
  const detectedConcepts = useMemo(() => detectedConceptsFromResult(activeResult), [activeResult]);
  const sourceRules = useMemo(
    () => composeVisibleRules(activeResult?.conceptMap, settings.conceptMap),
    [activeResult?.conceptMap, settings.conceptMap],
  );
  const unmapped = activeResult?.unmappedConcepts ?? [];
  const [rules, setRules] = useState<readonly ConceptMappingRule[]>(() => sourceRules);
  const [query, setQuery] = useState("");
  const [blockFilter, setBlockFilter] = useState<"Todos" | RetributionBlock>("Todos");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Todos");
  const [activationFilter, setActivationFilter] = useState<ActivationFilter>("Todos");
  const [detectedFilter, setDetectedFilter] = useState<DetectedFilter>("Todos");
  const [editingIndex, setEditingIndex] = useState<number | "new" | undefined>();
  const [form, setForm] = useState<RuleForm>(EMPTY_RULE_FORM);
  const [message, setMessage] = useState<string | undefined>();
  const [moreOpen, setMoreOpen] = useState(false);
  const [jsonOpen, setJsonOpen] = useState(false);
  const [jsonDraft, setJsonDraft] = useState("");
  const [expandedRow, setExpandedRow] = useState<string | undefined>();

  useEffect(() => {
    setRules(sourceRules);
    setJsonDraft(JSON.stringify(sourceRules, null, 2));
  }, [sourceRules]);

  const rows = useMemo(() => buildRows(rules, unmapped, detectedConcepts, availableCodes), [availableCodes, detectedConcepts, rules, unmapped]);
  const counters = useMemo(() => {
    const ruleRows = rows.filter((row): row is RuleRow => row.kind === "rule");
    return {
      totalRules: ruleRows.length,
      activeRules: ruleRows.filter((row) => row.active).length,
      inactiveRules: ruleRows.filter((row) => !row.active).length,
      detectedRules: ruleRows.filter((row) => row.detected).length,
      unmappedPending: rows.filter((row) => row.kind === "unmapped").length,
    };
  }, [rows]);
  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      if (blockFilter !== "Todos" && row.block !== blockFilter) return false;
      if (statusFilter === "Sin configurar" && row.statusLabel !== "Sin configurar") return false;
      if (activationFilter === "Activos" && row.statusLabel !== "Activo") return false;
      if (activationFilter === "Desactivados" && row.statusLabel !== "Desactivado") return false;
      if (detectedFilter === "Detectados" && !row.detected) return false;
      if (detectedFilter === "No detectados" && row.detected) return false;
      return rowMatches(row, query);
    });
  }, [activationFilter, blockFilter, detectedFilter, query, rows, statusFilter]);
  const codeWarning = form.registroCode.trim() && !codeExists(form.registroCode, availableCodes);

  function resetFilters(): void {
    setQuery("");
    setBlockFilter("Todos");
    setStatusFilter("Todos");
    setActivationFilter("Todos");
    setDetectedFilter("Todos");
  }

  function persistRules(next: readonly ConceptMappingRule[], toast?: string): void {
    const normalized = mergeConceptMap(next.map(coerceRule));
    setRules(normalized);
    setJsonDraft(JSON.stringify(normalized, null, 2));
    updateSettings({ conceptMap: normalized });
    if (toast) setMessage(toast);
  }

  function openRule(rule?: ConceptMappingRule, index?: number): void {
    setEditingIndex(typeof index === "number" ? index : "new");
    setForm(rule ? ruleToForm(rule) : EMPTY_RULE_FORM);
    setMessage(undefined);
  }

  function ruleFromUnmapped(row: UnmappedConceptRow, status: MappingStatus = row.action): ConceptMappingRule {
    const active = Boolean(row.suggestedRegistroCode) && status !== "Ignorado";
    const nextStatus: MappingStatus = !row.suggestedRegistroCode ? "Pendiente revisión" : active ? "Incluido" : "Ignorado";
    return normalizeConceptMappingRule({
      pdfConcept: row.pdfConcept,
      normalizedPdfConcept: normalizePdfConcept(row.pdfConcept),
      aliases: [],
      block: row.suggestedBlock ?? "C. Salarial",
      blockKey: blockKeyFromBlock(row.suggestedBlock ?? "C. Salarial"),
      registroCode: row.suggestedRegistroCode,
      status: nextStatus,
      sourceType: "devengo",
      allowInformative: false,
      dedupePriority: "devengo",
      includedInComparison: active,
      includedInAdjustedComparison: true,
      active,
      reason: row.reason ?? row.recommendedAction,
    });
  }

  function openFromUnmapped(row: UnmappedConceptRow, status: MappingStatus = row.action): void {
    openRule(ruleFromUnmapped(row, status));
  }

  function quickCreateFromUnmapped(row: UnmappedConceptRow, status: MappingStatus, toast: string): void {
    persistRules([...rules, ruleFromUnmapped(row, status)], toast);
  }

  function saveForm(): void {
    if (!form.pdfConcept.trim()) {
      setMessage("Concepto Recibo obligatorio.");
      return;
    }
    if (codeWarning && !window.confirm("El código Reg. Retrib. no existe en el Excel cargado. ¿Guardar igualmente?")) {
      return;
    }
    const nextRule = formToRule(form);
    const next = editingIndex === "new" || editingIndex === undefined ? [...rules, nextRule] : rules.map((rule, index) => (index === editingIndex ? nextRule : rule));
    persistRules(next, "Regla guardada.");
    setEditingIndex(undefined);
  }

  function deleteRule(index: number): void {
    persistRules(rules.filter((_, itemIndex) => itemIndex !== index), "Regla eliminada.");
  }

  function setRuleActive(index: number, active: boolean): void {
    persistRules(
      rules.map((rule, itemIndex) =>
        itemIndex === index
          ? normalizeConceptMappingRule({ ...rule, active, includedInComparison: active, includedInAdjustedComparison: true })
          : rule,
      ),
      active ? "Regla activada." : "Regla desactivada.",
    );
  }

  function exportMap(): void {
    const blob = new Blob([JSON.stringify(rules, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mapa_conceptos_retributivo.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function importMap(): void {
    const pasted = window.prompt("Pega el JSON del mapa de conceptos");
    if (!pasted) return;
    setJsonDraft(pasted);
    try {
      persistRules(normalizeRules(JSON.parse(pasted)), "Mapa importado.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "No se pudo importar el mapa.");
    }
  }

  function validateJson(): void {
    try {
      normalizeRules(JSON.parse(jsonDraft));
      setMessage("JSON válido.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "JSON inválido.");
    }
  }

  function applyJson(): void {
    try {
      persistRules(normalizeRules(JSON.parse(jsonDraft)), "JSON aplicado.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "JSON inválido.");
    }
  }

  function resetDefault(): void {
    const defaults = normalizeRules(activeResult?.conceptMap ?? []);
    setRules(defaults);
    setJsonDraft(JSON.stringify(defaults, null, 2));
    updateSettings({ conceptMap: [] });
    resetFilters();
    setMoreOpen(false);
    setJsonOpen(false);
    setMessage("Mapa restaurado por defecto.");
  }

  const summaryCards = [
    { label: "Conceptos totales", value: counters.totalRules, action: resetFilters, active: false },
    {
      label: "Activos",
      value: counters.activeRules,
      action: () => {
        resetFilters();
        setActivationFilter("Activos");
      },
      active: activationFilter === "Activos",
    },
    {
      label: "Desactivados",
      value: counters.inactiveRules,
      action: () => {
        resetFilters();
        setActivationFilter("Desactivados");
      },
      active: activationFilter === "Desactivados",
    },
    {
      label: "Detectados",
      value: counters.detectedRules,
      action: () => {
        resetFilters();
        setDetectedFilter("Detectados");
      },
      active: detectedFilter === "Detectados",
    },
    {
      label: "Sin configurar",
      value: counters.unmappedPending,
      action: () => {
        resetFilters();
        setStatusFilter("Sin configurar");
      },
      active: statusFilter === "Sin configurar",
    },
  ];

  return (
    <Card data-surface="concept-map-layout" className="p-4 sm:p-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold text-foreground">Conceptos del análisis</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Activa o desactiva conceptos para decidir qué entra en la comparativa.</p>
          <p className="mt-1 text-xs font-medium leading-5 text-muted-foreground">{MAP_NOTE}</p>
        </div>
        <div className="relative flex flex-wrap items-center gap-2 xl:justify-end">
          <Button type="button" className={TOP_ACTION_CLASS} onClick={() => openRule()}>
            <Plus className="h-4 w-4" aria-hidden="true" />
            Crear regla
          </Button>
          <Button type="button" className={TOP_ACTION_CLASS} onClick={() => persistRules(rules, "Mapa de conceptos guardado.")}>
            <Save className="h-4 w-4" aria-hidden="true" />
            Guardar mapa
          </Button>
          <Button type="button" variant="outline" className={TOP_ACTION_CLASS} onClick={() => void saveConceptMapAndRefresh(rules)}>
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            Actualizar datos
          </Button>
          <Button type="button" variant="outline" className={TOP_ACTION_CLASS} onClick={resetDefault}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Restaurar defecto
          </Button>
          <Button type="button" variant="outline" className={TOP_ACTION_CLASS} aria-expanded={moreOpen} onClick={() => setMoreOpen((current) => !current)}>
            <MoreHorizontal className="h-4 w-4" aria-hidden="true" />
            Más opciones
          </Button>
          {moreOpen ? (
            <div className="absolute right-0 top-full z-20 mt-2 w-72 rounded-2xl border border-border bg-popover p-3 shadow-lg">
              <div className="grid gap-2">
                <Button type="button" variant="outline" className="justify-start" onClick={exportMap}>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Exportar mapa
                </Button>
                <Button type="button" variant="outline" className="justify-start" onClick={importMap}>
                  <FileJson className="h-4 w-4" aria-hidden="true" />
                  Importar mapa
                </Button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div data-surface="concept-map-metrics" className="mt-5 grid overflow-hidden rounded-2xl border border-border bg-muted/50 xl:grid-cols-5 xl:divide-x xl:divide-y-0 xl:divide-border/80">
        {summaryCards.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-label={`${item.label} ${item.value}`}
            onClick={item.action}
            className={cn(
              "border-t border-border/70 px-4 py-3 text-left transition-colors first:border-t-0 hover:bg-muted/80 xl:border-t-0",
              item.active ? "bg-primary/10 text-primary" : "bg-transparent",
            )}
          >
            <span className="block text-xs font-semibold uppercase text-muted-foreground">{item.label}</span>
            <span className="mt-1 block text-2xl font-semibold text-foreground">{item.value}</span>
          </button>
        ))}
      </div>

      <section className="mt-6 border-t border-border pt-5" aria-label="Reglas y conceptos">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-foreground">Reglas y conceptos</h3>
          <p className="text-sm leading-6 text-muted-foreground">Regla del mapa = configuración guardada. Concepto sin regla = concepto detectado en este análisis que requiere decisión.</p>
        </div>

        <div className="-mx-4 mt-4 grid gap-3 border-y border-border bg-muted/30 px-4 py-4 sm:-mx-6 sm:px-6 xl:grid-cols-[minmax(280px,1.4fr)_180px_220px_220px]">
          <div className="relative">
            <Label htmlFor="concept-map-search">Buscar</Label>
            <Search className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <Input
              id="concept-map-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar por concepto, código, bloque o motivo"
              className="mt-2 h-12 rounded-full pl-10"
            />
          </div>
          <div>
            <Label htmlFor="concept-map-activation-filter">Uso</Label>
            <select
              id="concept-map-activation-filter"
              className="sr-only"
              tabIndex={-1}
              value={activationFilter}
              onChange={(event) => setActivationFilter(event.target.value as ActivationFilter)}
            >
              {ACTIVATION_FILTERS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <Select value={activationFilter} onValueChange={(value) => { if (value) setActivationFilter(value as ActivationFilter); }}>
              <SelectTrigger className="mt-2 h-12 w-full rounded-full" aria-hidden="true" tabIndex={-1}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {ACTIVATION_FILTERS.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="concept-map-detected-filter">Detectado</Label>
            <select
              id="concept-map-detected-filter"
              className="sr-only"
              tabIndex={-1}
              value={detectedFilter}
              onChange={(event) => setDetectedFilter(event.target.value as DetectedFilter)}
            >
              {DETECTED_FILTERS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <Select value={detectedFilter} onValueChange={(value) => { if (value) setDetectedFilter(value as DetectedFilter); }}>
              <SelectTrigger className="mt-2 h-12 w-full rounded-full" aria-hidden="true" tabIndex={-1}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {DETECTED_FILTERS.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="concept-map-block-filter">Bloque</Label>
            <select
              id="concept-map-block-filter"
              className="sr-only"
              tabIndex={-1}
              value={blockFilter}
              onChange={(event) => setBlockFilter(event.target.value as typeof blockFilter)}
            >
              <option value="Todos">Todos</option>
              {BLOCKS.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <Select value={blockFilter} onValueChange={(value) => { if (value) setBlockFilter(value as typeof blockFilter); }}>
              <SelectTrigger className="mt-2 h-12 w-full rounded-full" aria-hidden="true" tabIndex={-1}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Todos">Todos</SelectItem>
                  {BLOCKS.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div data-testid="concept-map-unified-scroll" className="-mx-4 max-h-[560px] overflow-x-auto overflow-y-auto border-b border-border bg-card sm:-mx-6">
          <table className="min-w-[860px] w-full border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10 bg-muted text-xs font-semibold uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Concepto Recibo</th>
                <th className="px-4 py-3">Código Reg. Retrib.</th>
                <th className="px-4 py-3">Bloque</th>
                <th className="px-4 py-3">Detectado</th>
                <th className="px-4 py-3">Uso</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => {
                const expanded = expandedRow === row.id;
                const codeValid = row.code ? codeExists(row.code, availableCodes) : true;
                return (
                  <tr
                    key={row.id}
                    className="cursor-pointer border-t border-border/70 align-top transition hover:bg-muted/50"
                    onClick={() => setExpandedRow((current) => (current === row.id ? undefined : row.id))}
                  >
                    <td className="max-w-[300px] px-4 py-3">
                      <p className="font-semibold text-foreground">{row.concept}</p>
                      {expanded ? (
                        <div className="mt-2 border-l-2 border-border bg-muted/30 px-3 py-2 text-xs leading-5 text-muted-foreground">
                          <p>Motivo: {row.reason ?? "Sin motivo"}</p>
                        </div>
                      ) : row.reason ? (
                        <p className="mt-1 text-xs text-muted-foreground" title={row.reason}>{shortText(row.reason, "Sin motivo")}</p>
                      ) : null}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">
                      {row.code ?? "Sin código"}
                      {!codeValid ? <p className="mt-1 text-[11px] font-semibold text-destructive">Código no existe en Reg. Retrib. cargado</p> : null}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.block}</td>
                    <td className="px-4 py-3 font-semibold text-muted-foreground">{row.detected ? "Sí" : "No"}</td>
                    <td className="px-4 py-3">
                      <span className={cn("inline-flex rounded-full px-2.5 py-1 text-xs font-semibold", statusBadgeClass(row.statusLabel))}>{row.statusLabel}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        {row.kind === "rule" ? (
                          <>
                            <IconButton label={`Editar regla ${row.concept}`} title="Editar regla" onClick={(event) => { event.stopPropagation(); openRule(row.rule, row.index); }}>
                              <Pencil className="h-4 w-4" aria-hidden="true" />
                            </IconButton>
                            <IconButton
                              label={`${row.active ? "Desactivar regla" : "Activar regla"} ${row.concept}`}
                              title={row.active ? "Desactivar regla" : "Activar regla"}
                              tone={row.active ? "active" : "inactive"}
                              onClick={(event) => { event.stopPropagation(); setRuleActive(row.index, !row.active); }}
                            >
                              {row.active ? <Power className="h-4 w-4" aria-hidden="true" /> : <PowerOff className="h-4 w-4" aria-hidden="true" />}
                            </IconButton>
                            <IconButton label={`Eliminar regla ${row.concept}`} title="Eliminar regla" tone="danger" onClick={(event) => { event.stopPropagation(); deleteRule(row.index); }}>
                              <Trash2 className="h-4 w-4" aria-hidden="true" />
                            </IconButton>
                          </>
                        ) : (
                          <>
                            <IconButton label={`Crear regla ${row.concept}`} title="Crear regla" onClick={(event) => { event.stopPropagation(); openFromUnmapped(row.row); }}>
                              <Plus className="h-4 w-4" aria-hidden="true" />
                            </IconButton>
                            <IconButton
                              label={`Crea una regla para poder activarla o desactivarla ${row.concept}`}
                              title="Crea una regla para poder activarla o desactivarla"
                              tone="inactive"
                              disabled
                              onClick={(event) => { event.stopPropagation(); }}
                            >
                              <PowerOff className="h-4 w-4" aria-hidden="true" />
                            </IconButton>
                            <IconButton label={`Descartar concepto ${row.concept}`} title="Descartar concepto" tone="danger" onClick={(event) => { event.stopPropagation(); quickCreateFromUnmapped(row.row, "Ignorado", "Concepto ignorado."); }}>
                              <Trash2 className="h-4 w-4" aria-hidden="true" />
                            </IconButton>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!filteredRows.length ? <p className="p-6 text-sm font-semibold text-muted-foreground">No hay reglas o conceptos con estos filtros.</p> : null}
        </div>
      </section>

      {message ? <p className="mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary" aria-live="polite">{message}</p> : null}

      <section className="mt-6 border-t border-border pt-5" aria-label="Modo avanzado JSON">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 text-left"
          aria-expanded={jsonOpen}
          onClick={() => setJsonOpen((current) => !current)}
        >
          <span>
            <span className="block text-lg font-semibold text-foreground">Modo avanzado JSON</span>
            <span className="mt-1 block text-sm leading-6 text-muted-foreground">Usa JSON solo para importar, copiar o depurar reglas manualmente.</span>
          </span>
          <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">{jsonOpen ? "Cerrar" : "Abrir"}</span>
        </button>
        {jsonOpen ? (
          <div className="mt-4 border-t border-border pt-4">
            <Textarea
              aria-label="Editor JSON del mapa"
              value={jsonDraft}
              onChange={(event) => setJsonDraft(event.target.value)}
              className="min-h-[320px] font-mono text-xs leading-5 shadow-inner"
              spellCheck={false}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <Button type="button" variant="outline" className="min-h-11 rounded-full px-4" onClick={validateJson}>Validar JSON</Button>
              <Button type="button" className="min-h-11 rounded-full px-4" onClick={applyJson}>Aplicar JSON</Button>
              <Button type="button" variant="outline" className="min-h-11 rounded-full px-4" onClick={() => void navigator.clipboard?.writeText(jsonDraft)}>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copiar JSON
              </Button>
            </div>
          </div>
        ) : null}
      </section>

      {editingIndex !== undefined ? (
        <ModalShell
          title={editingIndex === "new" ? "Crear regla" : "Editar regla"}
          eyebrow="Conceptos del análisis"
          maxWidth="3xl"
          onClose={() => setEditingIndex(undefined)}
          footer={(
            <div className="flex flex-wrap justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setEditingIndex(undefined)}>Cancelar</Button>
              <Button type="button" onClick={saveForm}>Guardar regla</Button>
            </div>
          )}
        >
              <p className="text-sm text-muted-foreground">Define cómo se clasifica un concepto detectado en Recibo.</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="concept-map-pdf-concept">Concepto Recibo</Label>
                  <Input id="concept-map-pdf-concept" value={form.pdfConcept} onChange={(event) => setForm({ ...form, pdfConcept: event.target.value })} className="mt-2 h-12 rounded-full" />
                </div>
                <div>
                  <Label htmlFor="concept-map-registro-code">Código Reg. Retrib.</Label>
                  <Input id="concept-map-registro-code" list="concept-map-codes" value={form.registroCode} onChange={(event) => setForm({ ...form, registroCode: event.target.value })} className="mt-2 h-12 rounded-full font-mono" />
                  <datalist id="concept-map-codes">
                    {availableCodes.map((code) => <option key={code} value={code} />)}
                  </datalist>
                  {codeWarning ? <span className="mt-2 block text-sm font-semibold text-amber-800 dark:text-amber-300">Este código no existe en el Reg. Retrib. cargado.</span> : null}
                </div>
                <div>
                  <Label htmlFor="concept-map-block">Bloque</Label>
                  <Select value={form.block} onValueChange={(value) => setForm({ ...form, block: value as RetributionBlock })}>
                    <SelectTrigger id="concept-map-block" className="mt-2 h-12 w-full rounded-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {BLOCKS.map((item) => (
                          <SelectItem key={item} value={item}>{item}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Toggle
                  checked={form.active}
                  onChange={(active) =>
                    setForm({
                      ...form,
                      active,
                      includedInComparison: active,
                      includedInAdjustedComparison: true,
                      status: active ? "Incluido" : "Ignorado",
                    })
                  }
                  label="Activo"
                  description="Los conceptos desactivados se ignoran al actualizar datos."
                />
              </div>

              <div className="mt-5">
                <Label htmlFor="concept-map-reason">Motivo</Label>
                <Textarea id="concept-map-reason" value={form.reason} onChange={(event) => setForm({ ...form, reason: event.target.value })} className="mt-2 min-h-28" />
              </div>
        </ModalShell>
      ) : null}
    </Card>
  );
}
