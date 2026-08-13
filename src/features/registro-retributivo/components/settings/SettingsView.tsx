"use client";

import { CheckCircle2, LockKeyhole, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { SectionTabs } from "@/features/registro-retributivo/components/common/SectionTabs";
import { EmployeeExclusionsCard } from "@/features/registro-retributivo/components/settings/EmployeeExclusionsCard";
import { ConceptMapEditor } from "@/features/registro-retributivo/components/settings/concept-map/ConceptMapEditor";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type SettingsSection = "general" | "exclusions" | "concepts" | "privacy";

const SETTINGS_SECTIONS = [
  { value: "general", label: "General", tabId: "settings-general-tab", panelId: "settings-general-panel" },
  { value: "exclusions", label: "Exclusiones", tabId: "settings-exclusions-tab", panelId: "settings-exclusions-panel" },
  { value: "concepts", label: "Conceptos", tabId: "settings-concepts-tab", panelId: "settings-concepts-panel" },
  { value: "privacy", label: "Privacidad", tabId: "settings-privacy-tab", panelId: "settings-privacy-panel" },
] as const;

function NumberSetting({ id, label, value, onChange, helper }: Readonly<{ id: string; label: string; value: number; onChange: (value: number) => void; helper: string }>) {
  return (
    <Field>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input id={id} type="number" min="0" step="0.5" value={value} onChange={(event) => onChange(Number(event.target.value))} />
      <FieldDescription>{helper}</FieldDescription>
    </Field>
  );
}

function SettingsPanel({ id, labelledBy, label, active, children }: Readonly<{ id: string; labelledBy: string; label: string; active: boolean; children: React.ReactNode }>) {
  return <section id={id} role="tabpanel" aria-labelledby={labelledBy} aria-label={label} data-surface="settings-panel" hidden={!active} aria-hidden={!active ? "true" : undefined}>{children}</section>;
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
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Ajustes</h2>
        <p className="mt-1 text-sm text-muted-foreground">Configura el análisis, las exclusiones y los conceptos sin alterar los resultados ya calculados.</p>
      </div>
      <SectionTabs label="Secciones de ajustes" value={activeSection} items={SETTINGS_SECTIONS} onValueChange={selectSection} />

      {visited.has("general") ? (
        <SettingsPanel id="settings-general-panel" labelledBy="settings-general-tab" label="General" active={activeSection === "general"}>
          <Card data-surface="settings-layout">
            <section data-surface="settings-parameters" aria-labelledby="settings-analysis-heading">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><SlidersHorizontal aria-hidden="true" /></span>
                <div>
                  <h2 id="settings-analysis-heading" className="font-heading text-base leading-snug font-medium">Parámetros de análisis</h2>
                  <CardDescription>Valores por defecto para nuevos análisis.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <FieldGroup className="grid gap-4 lg:grid-cols-3">
                <NumberSetting id="defaultTolerance" label="Tolerancia salarial por defecto" value={settings.defaultTolerance} onChange={(defaultTolerance) => updateSettings({ defaultTolerance })} helper="Importes dentro de esta tolerancia se consideran OK." />
                <NumberSetting id="reviewThreshold" label="Umbral Revisar" value={settings.reviewThreshold} onChange={(reviewThreshold) => updateSettings({ reviewThreshold })} helper="Desde este importe se marca como revisión si supera la tolerancia." />
                <NumberSetting id="incidentThreshold" label="Umbral Incidencia" value={settings.incidentThreshold} onChange={(incidentThreshold) => updateSettings({ incidentThreshold })} helper="Desde este importe se marca como incidencia salarial." />
              </FieldGroup>
            </CardContent>
            </section>
          </Card>
        </SettingsPanel>
      ) : null}

      {visited.has("exclusions") ? <SettingsPanel id="settings-exclusions-panel" labelledBy="settings-exclusions-tab" label="Exclusiones" active={activeSection === "exclusions"}><EmployeeExclusionsCard /></SettingsPanel> : null}

      {visited.has("concepts") ? (
        <SettingsPanel id="settings-concepts-panel" labelledBy="settings-concepts-tab" label="Conceptos" active={activeSection === "concepts"}>
          <ConceptMapEditor />
        </SettingsPanel>
      ) : null}

      {visited.has("privacy") ? (
        <SettingsPanel id="settings-privacy-panel" labelledBy="settings-privacy-tab" label="Privacidad" active={activeSection === "privacy"}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"><ShieldCheck aria-hidden="true" /></span>
                <div>
                  <h2 className="font-heading text-base leading-snug font-medium">Privacidad</h2>
                  <CardDescription>Garantías aplicadas a exportación e IA.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="divide-y divide-border border-y border-border">
                {[
                  "No se exportan IBAN ni datos bancarios.",
                  "La IA se ejecuta exclusivamente bajo demanda.",
                  "La IA no recibe nombres ni documentos completos.",
                  "La IA no recibe datos bancarios.",
                  "Los cálculos se completan antes de solicitar una explicación.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 py-3 text-sm font-medium text-foreground">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Badge variant="secondary" className="mt-4">
                <LockKeyhole data-icon="inline-start" />
                Los análisis permanecen en la base SQLite local de powermeta4.
              </Badge>
            </CardContent>
          </Card>
        </SettingsPanel>
      ) : null}
    </div>
  );
}
