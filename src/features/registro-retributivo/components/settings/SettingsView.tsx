"use client";

import { CheckCircle2, LockKeyhole, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { EmployeeExclusionsCard } from "@/features/registro-retributivo/components/settings/EmployeeExclusionsCard";
import { ConceptMapEditor } from "@/features/registro-retributivo/components/settings/concept-map/ConceptMapEditor";
import { Badge, Input, Tabs, TabsList, TabsTrigger } from "@/components/system";

type SettingsSection = "general" | "exclusions" | "concepts" | "privacy";

const SETTINGS_SECTIONS = [
  { value: "general", label: "General", tabId: "settings-general-tab", panelId: "settings-general-panel" },
  { value: "exclusions", label: "Exclusiones", tabId: "settings-exclusions-tab", panelId: "settings-exclusions-panel" },
  { value: "concepts", label: "Conceptos", tabId: "settings-concepts-tab", panelId: "settings-concepts-panel" },
  { value: "privacy", label: "Privacidad", tabId: "settings-privacy-tab", panelId: "settings-privacy-panel" },
] as const;

function NumberSetting({
  id,
  label,
  value,
  onChange,
  helper,
}: Readonly<{ id: string; label: string; value: number; onChange: (value: number) => void; helper: string }>) {
  return (
    <div className="flex flex-col gap-1.5">
      <Input
        id={id}
        label={label}
        type="number"
        min={0}
        step={0.5}
        value={String(value)}
        onChange={(next) => onChange(Number(next))}
      />
      <p className="text-xs text-muted-foreground">{helper}</p>
    </div>
  );
}

function SettingsPanel({
  id,
  label,
  active,
  children,
}: Readonly<{ id: string; label: string; active: boolean; children: React.ReactNode }>) {
  return (
    <section
      id={id}
      role="tabpanel"
      aria-label={label}
      data-surface="settings-panel"
      hidden={!active}
      aria-hidden={!active ? "true" : undefined}
    >
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
    <div className="flex flex-col gap-5">
      <Tabs
        value={activeSection}
        onValueChange={(value) => selectSection(value as SettingsSection)}
        className="w-full"
      >
        <TabsList aria-label="Secciones de ajustes" className="no-scrollbar max-w-full overflow-x-auto">
          {SETTINGS_SECTIONS.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {visited.has("general") ? (
        <SettingsPanel
          id="settings-general-panel"
          label="General"
          active={activeSection === "general"}
        >
          <section
            data-surface="settings-layout"
            className="rounded-xl border border-border bg-card p-4 sm:p-6"
            aria-labelledby="settings-analysis-heading"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <SlidersHorizontal aria-hidden="true" />
              </span>
              <div>
                <h2 id="settings-analysis-heading" className="font-heading text-base leading-snug font-medium">
                  Parámetros de análisis
                </h2>
                <p className="text-sm text-muted-foreground">Valores por defecto para nuevos análisis.</p>
              </div>
            </div>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              <NumberSetting
                id="defaultTolerance"
                label="Tolerancia salarial por defecto"
                value={settings.defaultTolerance}
                onChange={(defaultTolerance) => updateSettings({ defaultTolerance })}
                helper="Importes dentro de esta tolerancia se consideran OK."
              />
              <NumberSetting
                id="reviewThreshold"
                label="Umbral Revisar"
                value={settings.reviewThreshold}
                onChange={(reviewThreshold) => updateSettings({ reviewThreshold })}
                helper="Desde este importe se marca como revisión si supera la tolerancia."
              />
              <NumberSetting
                id="incidentThreshold"
                label="Umbral Incidencia"
                value={settings.incidentThreshold}
                onChange={(incidentThreshold) => updateSettings({ incidentThreshold })}
                helper="Desde este importe se marca como incidencia salarial."
              />
            </div>
          </section>
        </SettingsPanel>
      ) : null}

      {visited.has("exclusions") ? (
        <SettingsPanel
          id="settings-exclusions-panel"
          label="Exclusiones"
          active={activeSection === "exclusions"}
        >
          <EmployeeExclusionsCard />
        </SettingsPanel>
      ) : null}

      {visited.has("concepts") ? (
        <SettingsPanel
          id="settings-concepts-panel"
          label="Conceptos"
          active={activeSection === "concepts"}
        >
          <ConceptMapEditor />
        </SettingsPanel>
      ) : null}

      {visited.has("privacy") ? (
        <SettingsPanel
          id="settings-privacy-panel"
          label="Privacidad"
          active={activeSection === "privacy"}
        >
          <section className="rounded-xl border border-border bg-card p-4 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-lg bg-chart-2/15 text-foreground">
                <ShieldCheck aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-heading text-base leading-snug font-medium">Privacidad</h2>
                <p className="text-sm text-muted-foreground">Garantías aplicadas a exportación e IA.</p>
              </div>
            </div>
            <ul className="mt-4 divide-y divide-border border-y border-border">
              {[
                "No se exportan IBAN ni datos bancarios.",
                "La IA se ejecuta exclusivamente bajo demanda.",
                "La IA no recibe nombres ni documentos completos.",
                "La IA no recibe datos bancarios.",
                "Los cálculos se completan antes de solicitar una explicación.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 text-sm font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Badge status="neutral" size="sm" className="mt-4">
              <LockKeyhole className="size-3.5" aria-hidden="true" />
              Los análisis permanecen en la base SQLite local de powermeta4.
            </Badge>
          </section>
        </SettingsPanel>
      ) : null}
    </div>
  );
}
