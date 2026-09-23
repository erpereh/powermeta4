"use client";

import {
  ChevronDown,
  Copy,
  Download,
  FileJson,
  MoreHorizontal,
  Pencil,
  Plus,
  RefreshCcw,
  RotateCcw,
  Save,
  Search,
  Trash2,
} from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import {
  Badge,
  Button,
  Drawer,
  Input,
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Tooltip,
  type AnimatedBadgeStatus,
} from "@/components/system";
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

function usageBadgeStatus(status: UsageLabel): AnimatedBadgeStatus {
  if (status === "Activo") return "success";
  if (status === "Sin configurar") return "warning";
  return "neutral";
}

function shortText(value: string | undefined, fallback: string): string {
  const text = value?.trim() || fallback;
  return text.length > 96 ? `${text.slice(0, 93)}...` : text;
}

function RowAction({
  label,
  danger,
  onClick,
  children,
}: {
  readonly label: string;
  readonly danger?: boolean;
  readonly onClick: () => void;
  readonly children: ReactNode;
}) {
  return (
    <Tooltip content={label}>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label={label}
        onClick={onClick}
        className={cn("size-8 text-muted-foreground", danger && "hover:text-destructive")}
      >
        {children}
      </Button>
    </Tooltip>
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
    <section data-surface="concept-map-layout" className="rounded-2xl border border-border bg-card p-4 sm:p-5">
      {/* Excepción: tabla con acciones por fila; Table de system pierde campos. */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-sm font-semibold text-foreground">Conceptos del análisis</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">{MAP_NOTE}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Button type="button" variant="outline" size="sm" onClick={() => persistRules(rules, "Mapa de conceptos guardado.")}>
            <Save className="size-3.5" aria-hidden="true" />
            Guardar
          </Button>
          <Button type="button" variant="primary" size="sm" onClick={() => openRule()}>
            <Plus className="size-3.5" aria-hidden="true" />
            Crear regla
          </Button>
          <Menu>
            <MenuTrigger asChild>
              <Button type="button" variant="ghost" size="icon" aria-label="Más opciones del mapa">
                <MoreHorizontal className="size-4" aria-hidden="true" />
              </Button>
            </MenuTrigger>
            <MenuContent align="end" className="w-56">
              <MenuItem onSelect={() => void saveConceptMapAndRefresh(rules)}>
                <RefreshCcw />
                <span>Guardar y actualizar datos</span>
              </MenuItem>
              <MenuItem onSelect={exportMap}>
                <Download />
                <span>Exportar mapa</span>
              </MenuItem>
              <MenuItem onSelect={importMap}>
                <FileJson />
                <span>Importar mapa</span>
              </MenuItem>
              <MenuSeparator />
              <MenuItem className="text-destructive focus:text-destructive" onSelect={resetDefault}>
                <RotateCcw />
                <span>Restaurar por defecto</span>
              </MenuItem>
            </MenuContent>
          </Menu>
        </div>
      </div>

      <div data-surface="concept-map-metrics" role="group" aria-label="Filtros rápidos" className="mt-4 flex flex-wrap gap-2">
        {summaryCards.map((item) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={item.active}
            aria-label={`${item.label} ${item.value}`}
            onClick={item.action}
            className={cn(
              "inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
              item.active ? "border-primary/40 bg-selected text-foreground" : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {item.label}
            <span className="font-semibold tabular-nums text-foreground">{item.value}</span>
          </button>
        ))}
      </div>

      <section className="mt-5" aria-label="Reglas y conceptos">
        <p className="sr-only">Regla del mapa = configuración guardada. Concepto sin regla = concepto detectado en este análisis que requiere decisión.</p>

        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-[minmax(240px,1.4fr)_repeat(3,minmax(0,200px))]">
          <Input
            id="concept-map-search"
            type="search"
            aria-label="Buscar"
            value={query}
            onChange={(value) => setQuery(value)}
            placeholder="Concepto, código, bloque o motivo"
            leftIcon={<Search className="size-4" aria-hidden="true" />}
          />
          <div>
            <Select value={activationFilter} onValueChange={(value) => { if (value) setActivationFilter(value as ActivationFilter); }}>
              <SelectTrigger className="w-full" aria-label="Uso">
                <span className="text-muted-foreground">Uso:</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>

                  {ACTIVATION_FILTERS.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={detectedFilter} onValueChange={(value) => { if (value) setDetectedFilter(value as DetectedFilter); }}>
              <SelectTrigger className="w-full" aria-label="Detectado">
                <span className="text-muted-foreground">Detectado:</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>

                  {DETECTED_FILTERS.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={blockFilter} onValueChange={(value) => { if (value) setBlockFilter(value as typeof blockFilter); }}>
              <SelectTrigger className="w-full" aria-label="Bloque">
                <span className="text-muted-foreground">Bloque:</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>

                  <SelectItem value="Todos">Todos</SelectItem>
                  {BLOCKS.map((item) => (
                    <SelectItem key={item} value={item}>{item}</SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div data-testid="concept-map-unified-scroll" className="mt-3 max-h-[560px] overflow-x-auto overflow-y-auto rounded-xl border border-border">
          {/* Excepción: acciones anidadas por fila; Table de system no encaja. */}
          <table className="min-w-[860px] w-full border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10 bg-muted text-xs font-medium text-muted-foreground">
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
                      {row.kind === "rule" ? (
                        <div className="flex items-center gap-2" onClick={(event) => event.stopPropagation()}>
                          <Switch
                            checked={Boolean(row.active)}
                            onCheckedChange={(active) => setRuleActive(row.index, active)}
                            ariaLabel={`${row.active ? "Desactivar" : "Activar"} regla ${row.concept}`}
                          />
                          <span className="text-xs text-muted-foreground">{row.statusLabel}</span>
                        </div>
                      ) : (
                        <Badge status={usageBadgeStatus(row.statusLabel)} size="sm">{row.statusLabel}</Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-0.5" onClick={(event) => event.stopPropagation()}>
                        {row.kind === "rule" ? (
                          <>
                            <RowAction label={`Editar regla ${row.concept}`} onClick={() => openRule(row.rule, row.index)}>
                              <Pencil className="size-4" aria-hidden="true" />
                            </RowAction>
                            <RowAction label={`Eliminar regla ${row.concept}`} danger onClick={() => deleteRule(row.index)}>
                              <Trash2 className="size-4" aria-hidden="true" />
                            </RowAction>
                          </>
                        ) : (
                          <>
                            <RowAction label={`Crear regla ${row.concept}`} onClick={() => openFromUnmapped(row.row)}>
                              <Plus className="size-4" aria-hidden="true" />
                            </RowAction>
                            <RowAction label={`Descartar concepto ${row.concept}`} danger onClick={() => quickCreateFromUnmapped(row.row, "Ignorado", "Concepto ignorado.")}>
                              <Trash2 className="size-4" aria-hidden="true" />
                            </RowAction>
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

      <p className="mt-3 min-h-5 text-sm text-muted-foreground" aria-live="polite">{message}</p>

      <section className="mt-4 border-t border-border pt-4" aria-label="Modo avanzado JSON">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-expanded={jsonOpen}
          onClick={() => setJsonOpen((current) => !current)}
        >
          <span>
            <span className="block text-sm font-medium text-foreground">Modo avanzado JSON</span>
            <span className="block text-xs text-muted-foreground">Importar, copiar o depurar reglas manualmente.</span>
          </span>
          <ChevronDown className={cn("size-4 shrink-0 text-muted-foreground transition-transform", jsonOpen && "rotate-180")} aria-hidden="true" />
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
              <Button type="button" variant="outline" size="sm" onClick={validateJson}>Validar JSON</Button>
              <Button type="button" variant="primary" size="sm" onClick={applyJson}>Aplicar JSON</Button>
              <Button type="button" variant="ghost" size="sm" onClick={() => void navigator.clipboard?.writeText(jsonDraft)}>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copiar JSON
              </Button>
            </div>
          </div>
        ) : null}
      </section>

      {editingIndex !== undefined ? (
        <Drawer
          open
          onOpenChange={(open) => {
            if (!open) setEditingIndex(undefined);
          }}
          title={editingIndex === "new" ? "Crear regla" : "Editar regla"}
          description="Define cómo se clasifica un concepto detectado en Recibo."
          footer={(
            <>
              <Button type="button" variant="outline" size="sm" onClick={() => setEditingIndex(undefined)}>Cancelar</Button>
              <Button type="button" variant="primary" size="sm" onClick={saveForm}>Guardar regla</Button>
            </>
          )}
        >
              {message && editingIndex !== undefined ? <p className="mb-4 text-sm font-medium text-destructive" role="alert">{message}</p> : null}
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="concept-map-pdf-concept">Concepto Recibo</label>
                  <Input id="concept-map-pdf-concept" value={form.pdfConcept} onChange={(value) => setForm({ ...form, pdfConcept: value })} className="mt-2" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="concept-map-registro-code">Código Reg. Retrib.</label>
                  <Input id="concept-map-registro-code" list="concept-map-codes" value={form.registroCode} onChange={(value) => setForm({ ...form, registroCode: value })} className="mt-2 font-mono" />
                  <datalist id="concept-map-codes">
                    {availableCodes.map((code) => <option key={code} value={code} />)}
                  </datalist>
                  {codeWarning ? <span className="mt-2 block text-sm font-semibold text-destructive">Este código no existe en el Reg. Retrib. cargado.</span> : null}
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground" htmlFor="concept-map-block">Bloque</label>
                  <Select value={form.block} onValueChange={(value) => setForm({ ...form, block: value as RetributionBlock })}>
                    <SelectTrigger className="mt-2 w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {BLOCKS.map((item) => (
                        <SelectItem key={item} value={item}>{item}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Activo</p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">Los conceptos desactivados se ignoran al actualizar datos.</p>
                  </div>
                  <Switch
                    checked={form.active}
                    onCheckedChange={(active) =>
                      setForm({
                        ...form,
                        active,
                        includedInComparison: active,
                        includedInAdjustedComparison: true,
                        status: active ? "Incluido" : "Ignorado",
                      })
                    }
                    ariaLabel="Activo"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="text-sm font-medium text-foreground" htmlFor="concept-map-reason">Motivo</label>
                <Textarea id="concept-map-reason" value={form.reason} onChange={(event) => setForm({ ...form, reason: event.target.value })} className="mt-2 min-h-28" />
              </div>
        </Drawer>
      ) : null}
    </section>
  );
}
