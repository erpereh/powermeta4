import { Info } from "lucide-react";

import { Surface } from "@/components/system";
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
      <ul className="flex min-w-0 flex-col gap-4" aria-label={consult.title}>
        {result.data.rows.map((fields, index) => (
          <li key={index} className="min-w-0 rounded-lg border border-border p-3">
            <dl className="grid min-w-0 gap-3 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.label} className="min-w-0 space-y-1">
                  <dt className="text-xs text-muted-foreground">{field.label}</dt>
                  <dd className="min-w-0 break-words text-sm text-foreground [overflow-wrap:anywhere]">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
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
    <div className="flex min-w-0 flex-col gap-6">
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
            <Surface
              key={section.consult.id}
              title={section.consult.title}
              description={section.consult.description}
            >
              <ConsultContent consult={section.consult} result={results?.[section.consult.id]} />
            </Surface>
          );
        }
        return (
          <Surface key={section.form.id} title={section.form.title}>
            <PortalForm spec={section.form} catalogs={catalogs} hireDate={hireDate} />
          </Surface>
        );
      })}
      {feature.writes && feature.writes.length > 0 ? (
        <Surface
          title="Otras operaciones del original"
          description="Acciones que el portal clásico ofrece sobre los registros de esta pantalla."
        >
          <ul className="flex min-w-0 flex-col gap-3">
            {feature.writes.map((write) => (
              <li key={write.id} className="min-w-0 space-y-1.5">
                <p className="text-sm font-medium text-foreground">{write.label}</p>
                <WriteBlockedNotice write={write} />
              </li>
            ))}
          </ul>
        </Surface>
      ) : null}
    </div>
  );
}
