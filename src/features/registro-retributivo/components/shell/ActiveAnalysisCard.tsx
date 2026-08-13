"use client";

import { Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { useAppState } from "@/features/registro-retributivo/state/AppState";

function formatDate(value?: string): string {
  if (!value) return "Sin análisis activo";
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export function ActiveAnalysisCard() {
  const { activeAnalysis, aiStatus } = useAppState();
  const aiConfigured = Boolean(aiStatus?.configured && aiStatus.enabled);
  const aiBadge = aiConfigured ? "IA disponible" : "IA no configurada";

  return (
    <section
      aria-label="Análisis activo"
      className="mt-auto rounded-xl border bg-card p-3 text-card-foreground"
    >
      <div className="flex items-start gap-2">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Clock3 className="size-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Análisis activo
          </p>
          <p className="mt-0.5 text-xs font-semibold leading-snug text-pretty">
            {formatDate(activeAnalysis?.createdAt)}
          </p>
        </div>
      </div>
      <Badge variant={aiConfigured ? "default" : "secondary"} className="mt-2 max-w-full whitespace-normal">
        {aiBadge}
      </Badge>
    </section>
  );
}
