import { Info } from "lucide-react";

import { Accordion, Section } from "@/components/system";
import type { ConsultData, ConsultSpec, PortalFeature } from "@/lib/portal/types";
import type { ConsultResults } from "@/lib/portal/data/consults";
import type { PortalResult } from "@/lib/portal/result";

import { PortalForm, type CatalogAvailability } from "./portal-form";
import { PortalDataTable, PortalRecord } from "./portal-data";
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
    const rows = result.data.rows.map((fields, index) => {
      const href = result.data.links?.[index];
      return {
        id: String(index),
        fields,
        download: href && consult.download ? { href, label: consult.download.label } : undefined,
      };
    });
    return consult.layout !== "list" && rows.length === 1 ? (
      <PortalRecord title={consult.title} fields={rows[0].fields} download={rows[0].download} />
    ) : (
      <PortalDataTable title={consult.title} rows={rows} />
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
            <div key={section.title} className="flex min-w-0 items-start gap-3 text-sm">
              <Info className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div className="min-w-0 space-y-1">
                <p className="font-medium text-foreground">{section.title}</p>
                <Accordion
                  items={[{ id: "details", title: "Ver detalles", description: section.body }]}
                  classNames={{
                    item: "border-0 bg-transparent",
                    trigger: "px-0 py-2 text-xs",
                    description: "text-sm",
                  }}
                />
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
            <PortalForm spec={section.form} catalogs={catalogs} hireDate={hireDate} />
          </Section>
        );
      })}
      {feature.writes && feature.writes.length > 0 ? (
        <Section title="Otras operaciones">
          <ul className="flex min-w-0 flex-col gap-4">
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
