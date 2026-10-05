import { Info } from "lucide-react";

import { Surface } from "@/components/system";
import type { ConsultSpec, PortalFeature } from "@/lib/portal/types";

import { PortalForm, type CatalogAvailability } from "./portal-form";
import { DependencyState, WriteBlockedNotice } from "./portal-states";

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
}: {
  feature: PortalFeature;
  catalogs: CatalogAvailability;
  hireDate?: string | null;
}) {
  const sections = feature.sections ?? [];
  const pendingRead = feature.read.kind === "pending" ? feature.read : null;
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
              <DependencyState
                title="Consulta pendiente de conexión"
                message={
                  pendingRead?.detail ??
                  "Este bloque del original no tiene todavía un contrato de lectura verificado en powermeta4."
                }
                pending={pendingRead?.pending ?? ["P02", "P05"]}
                meta4={[section.consult.meta4]}
              >
                <ConsultStructure consult={section.consult} />
              </DependencyState>
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
