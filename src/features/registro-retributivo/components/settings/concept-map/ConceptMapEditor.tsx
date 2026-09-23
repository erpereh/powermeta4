"use client";

import { Copy, Download, FileJson, MoreHorizontal, Pencil, Plus, RefreshCcw, RotateCcw, Search, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { SettingsSectionHeader } from "@/features/registro-retributivo/components/settings/SettingsSectionHeader";
import {
  Button,
  Callout,
  Drawer,
  EmptyState,
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
  StatefulButton,
  Surface,
  Switch,
  Tooltip,
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
const BLOCKS: readonly RetributionBlock[] = ["Salario", "C. Salarial", "Extrasalarial"];
const SOURCE_TYPES: readonly ConceptMappingSourceType[] = ["devengo", "informativo", "deduccion", "retencion", "coste_empresa", "unknown"];
const DEDUPE_PRIORITIES: readonly ConceptDedupePriority[] = ["devengo", "informativo"];

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

type UsageFilter = "Todos" | "En uso" | "Desactivados" | "Sin regla";

function matchesUsage(row: ConceptMapRow, filter: UsageFilter): boolean {
  if (filter === "En uso") return row.statusLabel === "Activo";
  if (filter === "Desactivados") return row.statusLabel === "Desactivado";
  if (filter === "Sin regla") return row.statusLabel === "Sin configurar";
  return true;
}

function usageCount(rows: readonly ConceptMapRow[], filter: UsageFilter): number {
  return rows.filter((row) => matchesUsage(row, filter)).length;
}

const USAGE_FILTERS: readonly { readonly value: UsageFilter; readonly dotClass: string }[] = [
  { value: "Todos", dotClass: "" },
  { value: "En uso", dotClass: "bg-emerald-500" },
  { value: "Desactivados", dotClass: "bg-muted-foreground/60" },
  { value: "Sin regla", dotClass: "bg-amber-500" },
];

function FieldLabel({ htmlFor, children, hint }: Readonly<{ htmlFor: string; children: ReactNode; hint?: string }>) {
  return (
    <div className="mb-1.5">
      <label className="block text-sm font-medium text-foreground" htmlFor={htmlFor}>
        {children}
      </label>
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function ConceptMapEditor() {
  const { settings, updateSettings, saveConceptMapAndRefresh, result, activeAnalysis, pushToast, analyzing, registroFile, pdfFiles } =
    useAppState();
  const activeResult = result ?? activeAnalysis?.result;
  const availableCodes = useMemo(() => availableCodesFromResult(activeResult), [activeResult]);
  const detectedConcepts = useMemo(() => detectedConceptsFromResult(activeResult), [activeResult]);
  const sourceRules = useMemo(
    () => composeVisibleRules(activeResult?.conceptMap, settings.conceptMap),
    [activeResult?.conceptMap, settings.conceptMap],
  );
  const unmapped = activeResult?.unmappedConcepts ?? [];
  const canReanalyze = Boolean(registroFile && pdfFiles.length);
  const [rules, setRules] = useState<readonly ConceptMappingRule[]>(() => sourceRules);
  const [query, setQuery] = useState("");
  const [blockFilter, setBlockFilter] = useState<"Todos" | RetributionBlock>("Todos");
  const [usageFilter, setUsageFilter] = useState<UsageFilter>("Todos");
  const [editingIndex, setEditingIndex] = useState<number | "new" | undefined>();
  const [form, setForm] = useState<RuleForm>(EMPTY_RULE_FORM);
  const [formError, setFormError] = useState<string | undefined>();
  const [changed, setChanged] = useState(false);
  const [jsonOpen, setJsonOpen] = useState(false);
  const [jsonDraft, setJsonDraft] = useState("");
  const [jsonMessage, setJsonMessage] = useState<{ readonly ok: boolean; readonly text: string } | undefined>();

  useEffect(() => {
    setRules(sourceRules);
  }, [sourceRules]);

  const rows = useMemo(() => buildRows(rules, unmapped, detectedConcepts, availableCodes), [availableCodes, detectedConcepts, rules, unmapped]);
  const filteredRows = useMemo(
    () => rows.filter((row) => (blockFilter === "Todos" || row.block === blockFilter) && matchesUsage(row, usageFilter) && rowMatches(row, query)),
    [blockFilter, query, rows, usageFilter],
  );
  const unmappedCount = usageCount(rows, "Sin regla");
  const codeWarning = Boolean(form.registroCode.trim()) && !codeExists(form.registroCode, availableCodes);

  function persistRules(next: readonly ConceptMappingRule[], toast?: string): void {
    const normalized = mergeConceptMap(next.map(coerceRule));
    setRules(normalized);
    updateSettings({ conceptMap: normalized });
    setChanged(true);
    if (toast) pushToast({ kind: "success", title: toast });
  }

  function openRule(rule?: ConceptMappingRule, index?: number): void {
    setEditingIndex(typeof index === "number" ? index : "new");
    setForm(rule ? ruleToForm(rule) : EMPTY_RULE_FORM);
    setFormError(undefined);
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

  function saveForm(): void {
    if (!form.pdfConcept.trim()) {
      setFormError("Escribe el nombre del concepto tal como aparece en el recibo.");
      return;
    }
    const nextRule = formToRule(form);
    const next = editingIndex === "new" || editingIndex === undefined ? [...rules, nextRule] : rules.map((rule, index) => (index === editingIndex ? nextRule : rule));
    persistRules(next, "Regla guardada.");
    setEditingIndex(undefined);
  }

  function deleteEditingRule(): void {
    if (typeof editingIndex !== "number") return;
    persistRules(rules.filter((_, itemIndex) => itemIndex !== editingIndex), "Regla eliminada.");
    setEditingIndex(undefined);
  }

  function setRuleActive(index: number, active: boolean): void {
    persistRules(
      rules.map((rule, itemIndex) =>
        itemIndex === index
          ? normalizeConceptMappingRule({ ...rule, active, includedInComparison: active, includedInAdjustedComparison: true })
          : rule,
      ),
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

  function openJson(): void {
    setJsonDraft(JSON.stringify(rules, null, 2));
    setJsonMessage(undefined);
    setJsonOpen(true);
  }

  function parseJsonDraft(): ConceptMappingRule[] | undefined {
    try {
      return normalizeRules(JSON.parse(jsonDraft));
    } catch (error) {
      setJsonMessage({ ok: false, text: error instanceof Error ? error.message : "JSON no válido." });
      return undefined;
    }
  }

  function applyJson(): void {
    const parsed = parseJsonDraft();
    if (!parsed) return;
    persistRules(parsed, `Mapa aplicado: ${parsed.length} reglas.`);
    setJsonOpen(false);
  }

  function resetDefault(): void {
    const defaults = normalizeRules(activeResult?.conceptMap ?? []);
    setRules(defaults);
    updateSettings({ conceptMap: [] });
    setQuery("");
    setBlockFilter("Todos");
    setUsageFilter("Todos");
    setChanged(true);
    pushToast({ kind: "info", title: "Mapa restaurado por defecto." });
  }

  return (
    <div data-surface="concept-map-layout">
      <SettingsSectionHeader
        title="Conceptos del recibo"
        description="Cada concepto de la nómina se asigna a un código del Registro Retributivo y a un bloque (salario, complemento salarial o extrasalarial). Los conceptos que no están en uso no cuentan en la comparación."
        actions={
          <>
            <Button type="button" variant="primary" size="sm" onClick={() => openRule()}>
              <Plus className="size-3.5" aria-hidden="true" />
              Nueva regla
            </Button>
            <Menu>
              <MenuTrigger asChild>
                <Button type="button" variant="outline" size="icon" aria-label="Más opciones del mapa">
                  <MoreHorizontal className="size-4" aria-hidden="true" />
                </Button>
              </MenuTrigger>
              <MenuContent align="end" className="w-60">
                <MenuItem onSelect={exportMap}>
                  <Download />
                  <span>Descargar mapa (JSON)</span>
                </MenuItem>
                <MenuItem onSelect={openJson}>
                  <FileJson />
                  <span>Importar o editar JSON</span>
                </MenuItem>
                <MenuSeparator />
                <MenuItem className="text-destructive focus:text-destructive" onSelect={resetDefault}>
                  <RotateCcw />
                  <span>Restaurar por defecto</span>
                </MenuItem>
              </MenuContent>
            </Menu>
          </>
        }
      />

      <div className="flex flex-col gap-3">
        {unmappedCount && usageFilter !== "Sin regla" ? (
          <Callout
            status="info"
            title={`${unmappedCount} ${unmappedCount === 1 ? "concepto de las nóminas no tiene" : "conceptos de las nóminas no tienen"} regla`}
            action={
              <Button type="button" variant="outline" size="sm" onClick={() => setUsageFilter("Sin regla")}>
                Revisarlos
              </Button>
            }
          >
            Mientras no decidas qué hacer con ellos, las personas que los cobran aparecen como «Sin mapear».
          </Callout>
        ) : null}

        {changed && activeResult ? (
          <Callout
            status="info"
            title="El análisis abierto aún no refleja estos cambios"
            action={
              canReanalyze ? (
                <StatefulButton
                  type="button"
                  variant="outline"
                  size="sm"
                  state={analyzing ? "loading" : "idle"}
                  loadingText="Analizando…"
                  icon={<RefreshCcw className="size-3.5" aria-hidden="true" />}
                  onClick={() => void saveConceptMapAndRefresh(rules).then(() => setChanged(false))}
                >
                  Volver a analizar
                </StatefulButton>
              ) : undefined
            }
          >
            {canReanalyze
              ? "El mapa ya está guardado; vuelve a analizar para aplicarlo."
              : "El mapa ya está guardado y se aplicará en el próximo análisis."}
          </Callout>
        ) : null}
      </div>

      <Surface flush className="mt-4 overflow-hidden rounded-2xl">
        <div className="flex flex-col gap-3 border-b border-border p-3 sm:p-4">
          <div role="group" aria-label="Filtrar conceptos" className="flex flex-wrap gap-1.5">
            {USAGE_FILTERS.map((item) => {
              const active = usageFilter === item.value;
              return (
                <button
                  key={item.value}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setUsageFilter(item.value)}
                  className={cn(
                    "inline-flex h-8 items-center gap-2 rounded-full border px-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                    active ? "border-primary/40 bg-selected text-foreground" : "border-border text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.dotClass ? <span aria-hidden="true" className={cn("size-2 rounded-full", item.dotClass)} /> : null}
                  {item.value}
                  <span className="tabular-nums text-foreground">{usageCount(rows, item.value)}</span>
                </button>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Input
              id="concept-map-search"
              type="search"
              aria-label="Buscar concepto"
              value={query}
              onChange={setQuery}
              placeholder="Buscar por concepto o código"
              leftIcon={<Search className="size-4" aria-hidden="true" />}
              className="min-w-0 flex-1"
            />
            <Select
              value={blockFilter}
              onValueChange={(value) => {
                if (value === "Todos" || isBlock(value)) setBlockFilter(value);
              }}
            >
              <SelectTrigger className="w-full sm:w-52" aria-label="Bloque">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">Todos los bloques</SelectItem>
                {BLOCKS.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div data-testid="concept-map-unified-scroll" className="max-h-[560px] overflow-auto">
          {/* Excepción: cada fila tiene un interruptor y acciones propias; el Table de system activa la fila entera. */}
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10 bg-card text-xs font-medium whitespace-nowrap text-muted-foreground">
              <tr className="border-b border-border">
                <th scope="col" className="px-4 py-2.5">Concepto del recibo</th>
                <th scope="col" className="px-4 py-2.5">Código en el Registro</th>
                <th scope="col" className="px-4 py-2.5">Bloque</th>
                <th scope="col" className="px-4 py-2.5">En uso</th>
                <th scope="col" className="px-4 py-2.5">
                  <span className="sr-only">Acciones</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => {
                const codeValid = row.code ? codeExists(row.code, availableCodes) : true;
                return (
                  <tr key={row.id} className="border-t border-border/60 align-middle first:border-t-0">
                    <td className="px-4 py-2.5">
                      <p className="font-medium text-foreground">{row.concept}</p>
                      {row.kind === "unmapped" ? (
                        <p className="text-xs text-muted-foreground">Aparece en las nóminas</p>
                      ) : activeResult && !row.detected ? (
                        <p className="text-xs text-muted-foreground">No aparece en estas nóminas</p>
                      ) : null}
                    </td>
                    <td className="px-4 py-2.5">
                      {row.code ? (
                        <span className="font-mono text-xs text-foreground">{row.code}</span>
                      ) : (
                        <span className="text-xs text-muted-foreground">Sin código</span>
                      )}
                      {!codeValid ? <p className="text-xs text-destructive">No existe en el Registro cargado</p> : null}
                    </td>
                    <td className="px-4 py-2.5 whitespace-nowrap text-muted-foreground">{row.block}</td>
                    <td className="px-4 py-2.5">
                      {row.kind === "rule" ? (
                        <Switch
                          checked={Boolean(row.active)}
                          onCheckedChange={(active) => setRuleActive(row.index, active)}
                          ariaLabel={`${row.active ? "Desactivar" : "Activar"} regla ${row.concept}`}
                        />
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs whitespace-nowrap text-muted-foreground">
                          <span aria-hidden="true" className="size-2 rounded-full bg-amber-500" />
                          Sin regla
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2.5">
                      <div className="flex justify-end gap-1 whitespace-nowrap">
                        {row.kind === "rule" ? (
                          <Tooltip content="Editar">
                            <Button
                              type="button"
                              variant="ghost"
                              size="icon"
                              aria-label={`Editar regla ${row.concept}`}
                              onClick={() => openRule(row.rule, row.index)}
                              className="size-8 text-muted-foreground"
                            >
                              <Pencil className="size-4" aria-hidden="true" />
                            </Button>
                          </Tooltip>
                        ) : (
                          <>
                            <Button type="button" variant="outline" size="sm" onClick={() => openRule(ruleFromUnmapped(row.row))}>
                              Crear regla
                            </Button>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              aria-label={`Ignorar concepto ${row.concept}`}
                              onClick={() => persistRules([...rules, ruleFromUnmapped(row.row, "Ignorado")], "Concepto ignorado.")}
                            >
                              Ignorar
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!filteredRows.length ? (
            <EmptyState title="Ningún concepto con estos filtros" description="Prueba con otro filtro o búsqueda." className="py-10" />
          ) : null}
        </div>
      </Surface>
      <p className="mt-3 text-xs text-muted-foreground">Los cambios se guardan al momento.</p>

      <Drawer
        open={jsonOpen}
        onOpenChange={setJsonOpen}
        size="lg"
        title="Importar o editar JSON"
        description="Pega un mapa exportado para importarlo o edita las reglas a mano. Al aplicar se sustituye el mapa actual."
        footer={
          <>
            <Button type="button" variant="ghost" size="sm" onClick={() => void navigator.clipboard?.writeText(jsonDraft)}>
              <Copy className="size-3.5" aria-hidden="true" />
              Copiar
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                const parsed = parseJsonDraft();
                if (parsed) setJsonMessage({ ok: true, text: `JSON válido: ${parsed.length} reglas.` });
              }}
            >
              Comprobar
            </Button>
            <Button type="button" variant="primary" size="sm" onClick={applyJson}>
              Aplicar
            </Button>
          </>
        }
      >
        <Textarea
          aria-label="Mapa de conceptos en JSON"
          value={jsonDraft}
          onChange={(event) => {
            setJsonDraft(event.target.value);
            setJsonMessage(undefined);
          }}
          className="min-h-[420px] font-mono text-xs leading-5"
          spellCheck={false}
        />
        {jsonMessage ? (
          <p role={jsonMessage.ok ? "status" : "alert"} className={cn("mt-3 text-sm", jsonMessage.ok ? "text-muted-foreground" : "text-destructive")}>
            {jsonMessage.text}
          </p>
        ) : null}
      </Drawer>

      <Drawer
        open={editingIndex !== undefined}
        onOpenChange={(open) => {
          if (!open) setEditingIndex(undefined);
        }}
        title={editingIndex === "new" ? "Nueva regla" : "Editar regla"}
        description="Indica a qué código del Registro Retributivo y a qué bloque corresponde un concepto del recibo."
        footer={
          <>
            {typeof editingIndex === "number" ? (
              <Button type="button" variant="ghost" size="sm" className="mr-auto text-destructive hover:text-destructive" onClick={deleteEditingRule}>
                <Trash2 className="size-3.5" aria-hidden="true" />
                Eliminar
              </Button>
            ) : null}
            <Button type="button" variant="outline" size="sm" onClick={() => setEditingIndex(undefined)}>
              Cancelar
            </Button>
            <Button type="button" variant="primary" size="sm" onClick={saveForm}>
              Guardar regla
            </Button>
          </>
        }
      >
        {formError ? (
          <p className="mb-4 text-sm font-medium text-destructive" role="alert">
            {formError}
          </p>
        ) : null}
        <div className="grid gap-5">
          <div>
            <FieldLabel htmlFor="concept-map-pdf-concept">Concepto en el recibo</FieldLabel>
            <Input id="concept-map-pdf-concept" value={form.pdfConcept} onChange={(value) => setForm({ ...form, pdfConcept: value })} />
          </div>
          <div>
            <FieldLabel htmlFor="concept-map-registro-code" hint="Columna del Excel del Registro con la que se compara.">
              Código en el Registro Retributivo
            </FieldLabel>
            <Input
              id="concept-map-registro-code"
              list="concept-map-codes"
              value={form.registroCode}
              onChange={(value) => setForm({ ...form, registroCode: value })}
              className="font-mono"
            />
            <datalist id="concept-map-codes">
              {availableCodes.map((code) => (
                <option key={code} value={code} />
              ))}
            </datalist>
            {codeWarning ? <p className="mt-1.5 text-sm text-destructive">Este código no existe en el Registro cargado. Puedes guardarlo igualmente.</p> : null}
          </div>
          <div>
            <p className="mb-1.5 text-sm font-medium text-foreground">Bloque</p>
            <Select
              value={form.block}
              onValueChange={(value) => {
                if (isBlock(value)) setForm({ ...form, block: value });
              }}
            >
              <SelectTrigger aria-label="Bloque de la regla" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {BLOCKS.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-start justify-between gap-4 rounded-xl border border-border px-4 py-3">
            <div>
              <p className="text-sm font-medium text-foreground">En uso</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Si lo desactivas, el concepto no cuenta en la comparación.</p>
            </div>
            <Switch
              checked={form.active}
              onCheckedChange={(active) =>
                setForm({ ...form, active, includedInComparison: active, includedInAdjustedComparison: true, status: active ? "Incluido" : "Ignorado" })
              }
              ariaLabel="En uso"
            />
          </div>
          <div>
            <FieldLabel htmlFor="concept-map-reason">Nota (opcional)</FieldLabel>
            <Textarea
              id="concept-map-reason"
              value={form.reason}
              onChange={(event) => setForm({ ...form, reason: event.target.value })}
              className="min-h-24"
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
