import { Download, Info } from "lucide-react";

import { PropertyList, Section, Surface } from "@/components/system";
import type { ConsultData, ConsultSpec, PortalFeature } from "@/lib/portal/types";
import type { ConsultResults } from "@/lib/portal/data/consults";
import type { PortalResult } from "@/lib/portal/result";

import { PortalForm, type CatalogAvailability } from "./portal-form";
import { DependencyState, PortalError, WriteBlockedNotice } from "./portal-states";

export function ConsultContent({
  consult,
  result,
}: {
  consult: ConsultSpec;
  result?: PortalResult<ConsultData>;
}) {
  if (result?.status === "error") return <PortalError message={result.message} />;
  if (result?.status === "ok") {
    if (result.data.rows.length === 0)
      return <p className="text-sm text-muted-foreground">No hay registros para este apartado.</p>;
    return (
      <ul className="flex min-w-0 flex-col gap-3" aria-label={consult.title}>
        {result.data.rows.map((fields, index) => {
          const href = result.data.links?.[index];
          return (
            <li key={index} className="min-w-0">
              <PropertyList
                items={fields.map((field) => ({
                  id: field.label,
                  label: field.label,
                  value: <span className="[overflow-wrap:anywhere]">{field.value}</span>,
                }))}
                footer={
                  href && consult.download ? (
                    <a
                      href={href}
                      download
                      aria-label={`${consult.download.label}: ${fields.map((field) => field.value).join(", ")}`}
                      className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Download className="size-4" aria-hidden="true" />
                      {consult.download.label}
                    </a>
                  ) : undefined
                }
              />
            </li>
          );
        })}
      </ul>
    );
  }
  const pending = consult.read.kind === "pending" ? consult.read : null;
  return (
    <DependencyState
      title="Consulta pendiente de conexión"
      message={
        result?.message ?? pending?.detail ?? "Este apartado necesita un contrato de lectura."
      }
      pending={
        result?.status === "unavailable" ? result.pending : (pending?.pending ?? ["P02", "P05"])
      }
      meta4={[consult.meta4]}
    >
      <ConsultStructure consult={consult} />
    </DependencyState>
  );
}

function ConsultStructure({ consult }: { consult: ConsultSpec }) {
  return (
    <div className="min-w-0 space-y-2">
      <p className="text-xs font-medium text-muted-foreground">
        {consult.layout === "list" ? "Columnas del original" : "Datos del original"}
      </p>
      <ul className="flex min-w-0 flex-wrap gap-1.5">
        {consult.fields.map((field) => (
          <li
            key={field.label}
            title={field.item}
            className="rounded-md bg-muted px-2 py-0.5 text-xs text-foreground"
          >
            {field.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Apartados declarados de una pantalla. Las consultas sin contrato muestran
 * qué leía el original y qué falta, nunca datos de ejemplo.
 */
export function FeatureSections({
  feature,
  catalogs,
  hireDate,
  results,
}: {
  feature: PortalFeature;
  catalogs: CatalogAvailability;
  hireDate?: string | null;
  results?: ConsultResults;
}) {
  const sections = feature.sections ?? [];
  return (
    <div className="flex min-w-0 flex-col gap-8">
      {sections.map((section) => {
        if (section.kind === "note") {
          return (
            <div
              key={section.title}
              className="flex min-w-0 items-start gap-3 rounded-xl border border-border bg-muted/30 p-4 text-sm"
            >
              <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="min-w-0 space-y-1">
                <p className="font-medium text-foreground">{section.title}</p>
                <p className="text-muted-foreground">{section.body}</p>
              </div>
            </div>
          );
        }
        if (section.kind === "consult") {
          return (
            <Section
              key={section.consult.id}
              title={section.consult.title}
              description={section.consult.description}
            >
              <ConsultContent consult={section.consult} result={results?.[section.consult.id]} />
            </Section>
          );
        }
        return (
          <Section key={section.form.id} title={section.form.title}>
            <Surface>
              <PortalForm spec={section.form} catalogs={catalogs} hireDate={hireDate} />
            </Surface>
          </Section>
        );
      })}
      {feature.writes && feature.writes.length > 0 ? (
        <Section
          title="Otras operaciones del original"
          description="Acciones que el portal clásico ofrece sobre los registros de esta pantalla."
        >
          <ul className="flex min-w-0 flex-col gap-3 rounded-xl border border-border bg-card p-4">
            {feature.writes.map((write) => (
              <li key={write.id} className="min-w-0 space-y-1.5">
                <p className="text-sm font-medium text-foreground">{write.label}</p>
                <WriteBlockedNotice write={write} />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </div>
  );
}
