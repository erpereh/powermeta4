"use client";

import { BookMarked, CheckCircle2, ShieldCheck, SlidersHorizontal, UserMinus, type LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { EmployeeExclusionsCard } from "@/features/registro-retributivo/components/settings/EmployeeExclusionsCard";
import { ConceptMapEditor } from "@/features/registro-retributivo/components/settings/concept-map/ConceptMapEditor";
import { Callout, HoverList, Input, Surface } from "@/components/system";
import { cn } from "@/lib/utils";

type SettingsSection = "general" | "exclusions" | "concepts" | "privacy";

const SETTINGS_SECTIONS: ReadonlyArray<{
  readonly value: SettingsSection;
  readonly label: string;
  readonly hint: string;
  readonly icon: LucideIcon;
  readonly panelId: string;
}> = [
  { value: "general", label: "General", hint: "Tolerancia y umbrales", icon: SlidersHorizontal, panelId: "settings-general-panel" },
  { value: "exclusions", label: "Exclusiones", hint: "Matrículas fuera del análisis", icon: UserMinus, panelId: "settings-exclusions-panel" },
  { value: "concepts", label: "Conceptos", hint: "Mapa Recibo → Reg. Retrib.", icon: BookMarked, panelId: "settings-concepts-panel" },
  { value: "privacy", label: "Privacidad", hint: "Garantías de exportación e IA", icon: ShieldCheck, panelId: "settings-privacy-panel" },
];

const PRIVACY_ITEMS = [
  "No se exportan IBAN ni datos bancarios.",
  "La IA se ejecuta exclusivamente bajo demanda.",
  "La IA no recibe nombres ni documentos completos.",
  "La IA no recibe datos bancarios.",
  "Los cálculos se completan antes de solicitar una explicación.",
] as const;

function NumberSettingRow({
  id,
  label,
  value,
  onChange,
  helper,
}: Readonly<{ id: string; label: string; value: number; onChange: (value: number) => void; helper: string }>) {
  return (
    <div className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <p className="text-xs text-muted-foreground">{helper}</p>
      </div>
      <Input
        id={id}
        type="number"
        min={0}
        step={0.5}
        value={String(value)}
        onChange={(next) => onChange(Number(next))}
        rightIcon={<span className="text-xs text-muted-foreground">EUR</span>}
        className="w-full shrink-0 sm:w-40"
      />
    </div>
  );
}

function SettingsPanel({
  id,
  label,
  active,
  children,
}: Readonly<{ id: string; label: string; active: boolean; children: ReactNode }>) {
  return (
    <section id={id} aria-label={label} data-surface="settings-panel" hidden={!active} className="min-w-0">
      {children}
    </section>
  );
}

export function SettingsView() {
  const { settings, updateSettings } = useAppState();
  const [activeSection, setActiveSection] = useState<SettingsSection>("general");
  const [visited, setVisited] = useState<ReadonlySet<SettingsSection>>(() => new Set(["general"]));

  function selectSection(value: SettingsSection) {
    setVisited((current) => new Set(current).add(value));
    setActiveSection(value);
  }

  return (
    <div className="grid min-w-0 gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:items-start">
      <nav aria-label="Secciones de ajustes" className="min-w-0 md:sticky md:top-0">
        <HoverList className="no-scrollbar flex overflow-x-auto md:flex-col md:overflow-visible">
          {SETTINGS_SECTIONS.map((item) => {
            const Icon = item.icon;
            const active = activeSection === item.value;
            return (
              <li key={item.value} className="shrink-0 rounded-lg">
                <button
                  type="button"
                  aria-current={active ? "page" : undefined}
                  aria-controls={item.panelId}
                  onClick={() => selectSection(item.value)}
                  className={cn(
                    "relative z-10 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active && "bg-selected",
                  )}
                >
                  <Icon className={cn("size-4 shrink-0", active ? "text-primary" : "text-muted-foreground")} aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium text-foreground">{item.label}</span>
                    <span className="hidden truncate text-xs text-muted-foreground md:block">{item.hint}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </HoverList>
      </nav>

      <div className="min-w-0">
        {visited.has("general") ? (
          <SettingsPanel id="settings-general-panel" label="General" active={activeSection === "general"}>
            <Surface
              data-surface="settings-layout"
              title="Parámetros de análisis"
              description="Valores por defecto para nuevos análisis."
              className="rounded-2xl"
            >
              <div className="divide-y divide-border">
                <NumberSettingRow
                  id="defaultTolerance"
                  label="Tolerancia salarial por defecto"
                  value={settings.defaultTolerance}
                  onChange={(defaultTolerance) => updateSettings({ defaultTolerance })}
                  helper="Importes dentro de esta tolerancia se consideran OK."
                />
                <NumberSettingRow
                  id="reviewThreshold"
                  label="Umbral Revisar"
                  value={settings.reviewThreshold}
                  onChange={(reviewThreshold) => updateSettings({ reviewThreshold })}
                  helper="Desde este importe se marca como revisión si supera la tolerancia."
                />
                <NumberSettingRow
                  id="incidentThreshold"
                  label="Umbral Incidencia"
                  value={settings.incidentThreshold}
                  onChange={(incidentThreshold) => updateSettings({ incidentThreshold })}
                  helper="Desde este importe se marca como incidencia salarial."
                />
              </div>
            </Surface>
          </SettingsPanel>
        ) : null}

        {visited.has("exclusions") ? (
          <SettingsPanel id="settings-exclusions-panel" label="Exclusiones" active={activeSection === "exclusions"}>
            <EmployeeExclusionsCard />
          </SettingsPanel>
        ) : null}

        {visited.has("concepts") ? (
          <SettingsPanel id="settings-concepts-panel" label="Conceptos" active={activeSection === "concepts"}>
            <ConceptMapEditor />
          </SettingsPanel>
        ) : null}

        {visited.has("privacy") ? (
          <SettingsPanel id="settings-privacy-panel" label="Privacidad" active={activeSection === "privacy"}>
            <div className="flex flex-col gap-4">
              <Callout status="success" title="Los análisis permanecen en la base SQLite local de powermeta4." />
              <ul className="grid gap-2 sm:grid-cols-2">
                {PRIVACY_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SettingsPanel>
        ) : null}
      </div>
    </div>
  );
}
