"use client";

import { BookMarked, Check, ShieldCheck, SlidersHorizontal, UserMinus, type LucideIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { EmployeeExclusionsCard } from "@/features/registro-retributivo/components/settings/EmployeeExclusionsCard";
import { ConceptMapEditor } from "@/features/registro-retributivo/components/settings/concept-map/ConceptMapEditor";
import { SettingsSectionHeader } from "@/features/registro-retributivo/components/settings/SettingsSectionHeader";
import { personStatusMeta } from "@/features/registro-retributivo/components/common/personStatus";
import { Callout, HoverList, Input, Surface } from "@/components/system";
import { formatEuro } from "@/features/registro-retributivo/utils/money";
import { cn } from "@/lib/utils";

type SettingsSection = "general" | "exclusions" | "concepts" | "privacy";

const SETTINGS_SECTIONS: ReadonlyArray<{
  readonly value: SettingsSection;
  readonly label: string;
  readonly hint: string;
  readonly icon: LucideIcon;
  readonly panelId: string;
}> = [
  { value: "general", label: "Diferencias", hint: "Tolerancia y umbral", icon: SlidersHorizontal, panelId: "settings-general-panel" },
  { value: "exclusions", label: "Exclusiones", hint: "Personas fuera del análisis", icon: UserMinus, panelId: "settings-exclusions-panel" },
  { value: "concepts", label: "Conceptos", hint: "Recibo → Registro", icon: BookMarked, panelId: "settings-concepts-panel" },
  { value: "privacy", label: "Privacidad", hint: "Qué datos se usan", icon: ShieldCheck, panelId: "settings-privacy-panel" },
];

const PRIVACY_ITEMS = [
  { title: "Todo se guarda en este equipo", detail: "Los análisis viven en la base SQLite local de powermeta4." },
  { title: "Sin datos bancarios", detail: "Las exportaciones no incluyen IBAN ni otros datos bancarios." },
  { title: "La IA solo actúa cuando la pides", detail: "Nunca se ejecuta sola; los cálculos terminan antes de pedir una explicación." },
  { title: "La IA no ve nombres ni documentos", detail: "Recibe importes y conceptos, no nombres, documentos completos ni datos bancarios." },
] as const;

function MoneyField({
  id,
  label,
  helper,
  value,
  onChange,
}: Readonly<{ id: string; label: string; helper: string; value: number; onChange: (value: number) => void }>) {
  // Borrador local: permite vaciar el campo mientras se escribe sin guardar un 0.
  const [draft, setDraft] = useState(String(value));
  const [previousValue, setPreviousValue] = useState(value);
  if (previousValue !== value) {
    setPreviousValue(value);
    if (Number(draft) !== value) setDraft(String(value));
  }

  return (
    <div className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
      <div className="min-w-0">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <p className="mt-0.5 text-sm text-muted-foreground">{helper}</p>
      </div>
      <Input
        id={id}
        type="number"
        min={0}
        step={0.5}
        value={draft}
        onChange={(next) => {
          setDraft(next);
          const parsed = Number(next);
          if (next.trim() !== "" && Number.isFinite(parsed) && parsed >= 0) onChange(parsed);
        }}
        onBlur={() => setDraft(String(value))}
        rightIcon={<span className="px-3.5 text-sm text-muted-foreground">€</span>}
        className="w-full shrink-0 sm:w-32"
      />
    </div>
  );
}

/** Escala de lectura: qué estado recibe una persona según cuánto se desvía. */
function DifferenceScale({ tolerance, incident }: Readonly<{ tolerance: number; incident: number }>) {
  const bands = [
    { status: "OK", range: `hasta ${formatEuro(tolerance)}` },
    ...(incident > tolerance ? [{ status: "Revisar", range: `de ${formatEuro(tolerance)} a ${formatEuro(incident)}` }] : []),
    { status: "Diferencia", range: `${formatEuro(Math.max(incident, tolerance))} o más` },
  ];
  return (
    <figure aria-label="Cómo se clasifica a cada persona" className="mb-5">
      <figcaption className="mb-2 text-xs font-medium text-muted-foreground">
        Diferencia entre recibos y Registro Retributivo de una persona
      </figcaption>
      <ol className="grid gap-2 sm:auto-cols-fr sm:grid-flow-col">
        {bands.map((band) => {
          const meta = personStatusMeta(band.status);
          return (
            <li key={band.status} className="rounded-xl border border-border bg-muted/30 px-3 py-2.5">
              <span aria-hidden="true" className={cn("mb-2 block h-1.5 rounded-full", meta.dotClass)} />
              <span className="block text-sm font-medium text-foreground">{meta.label}</span>
              <span className="block text-xs tabular-nums text-muted-foreground">{band.range}</span>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

function GeneralSection() {
  const { settings, updateSettings } = useAppState();
  const tolerance = settings.defaultTolerance;
  // El umbral «revisar» solo actúa como suelo del de diferencia (salaryStatus).
  const incident = Math.max(tolerance, settings.reviewThreshold, settings.incidentThreshold);

  return (
    <>
      <SettingsSectionHeader
        title="Cuándo hay una diferencia"
        description="Define cuántos euros pueden separarse los recibos del Registro Retributivo antes de marcar a una persona."
      />
      <Surface data-surface="settings-layout" className="rounded-2xl">
        <DifferenceScale tolerance={tolerance} incident={incident} />
        <div className="divide-y divide-border border-t border-border pt-4">
          <MoneyField
            id="defaultTolerance"
            label="Margen de tolerancia"
            helper="Hasta esta cantidad se considera que coinciden (redondeos, céntimos)."
            value={tolerance}
            onChange={(defaultTolerance) => updateSettings({ defaultTolerance })}
          />
          <MoneyField
            id="incidentThreshold"
            label="«Con diferencia» a partir de"
            helper="Entre el margen y esta cantidad la persona queda «A revisar»."
            value={incident}
            onChange={(incidentThreshold) =>
              updateSettings({ incidentThreshold, reviewThreshold: Math.min(settings.reviewThreshold, incidentThreshold) })
            }
          />
        </div>
        {incident <= tolerance ? (
          <Callout status="info" title="Nadie quedará «A revisar»" className="mt-4">
            El importe de «Con diferencia» es igual o menor que el margen de tolerancia.
          </Callout>
        ) : null}
      </Surface>
      <p className="mt-3 text-xs text-muted-foreground">Los cambios se guardan al momento y se aplican en el próximo análisis.</p>
    </>
  );
}

function PrivacySection() {
  return (
    <>
      <SettingsSectionHeader
        title="Privacidad"
        description="Qué datos usa el Registro Retributivo y qué no sale nunca de este equipo."
      />
      <Surface className="rounded-2xl">
        <ul className="divide-y divide-border">
          {PRIVACY_ITEMS.map((item) => (
            <li key={item.title} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
              <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <Check className="size-3.5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">{item.title}</span>
                <span className="block text-sm text-muted-foreground">{item.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </Surface>
    </>
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
  const [activeSection, setActiveSection] = useState<SettingsSection>("general");
  const [visited, setVisited] = useState<ReadonlySet<SettingsSection>>(() => new Set(["general"]));

  function selectSection(value: SettingsSection) {
    setVisited((current) => new Set(current).add(value));
    setActiveSection(value);
  }

  return (
    <div className="grid min-w-0 gap-6 md:grid-cols-[13rem_minmax(0,1fr)] md:items-start lg:gap-10">
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
          <SettingsPanel id="settings-general-panel" label="Diferencias" active={activeSection === "general"}>
            <div className="max-w-3xl">
              <GeneralSection />
            </div>
          </SettingsPanel>
        ) : null}

        {visited.has("exclusions") ? (
          <SettingsPanel id="settings-exclusions-panel" label="Exclusiones" active={activeSection === "exclusions"}>
            <div className="max-w-3xl">
              <EmployeeExclusionsCard />
            </div>
          </SettingsPanel>
        ) : null}

        {visited.has("concepts") ? (
          <SettingsPanel id="settings-concepts-panel" label="Conceptos" active={activeSection === "concepts"}>
            <ConceptMapEditor />
          </SettingsPanel>
        ) : null}

        {visited.has("privacy") ? (
          <SettingsPanel id="settings-privacy-panel" label="Privacidad" active={activeSection === "privacy"}>
            <div className="max-w-3xl">
              <PrivacySection />
            </div>
          </SettingsPanel>
        ) : null}
      </div>
    </div>
  );
}
