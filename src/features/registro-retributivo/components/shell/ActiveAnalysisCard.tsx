"use client";

import { Badge } from "@/components/system";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { cn } from "@/lib/utils";

function formatDate(value?: string): string {
  if (!value) return "Sin análisis activo";
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

type ActiveAnalysisCardProps = {
  readonly className?: string;
};

/** Estado compacto: análisis activo e IA, alineado a la derecha de la nav. */
export function ActiveAnalysisCard({ className }: ActiveAnalysisCardProps) {
  const { activeAnalysis, aiStatus } = useAppState();
  const aiConfigured = Boolean(aiStatus?.configured && aiStatus.enabled);

  return (
    <section
      aria-label="Análisis activo"
      className={cn("shrink-0 items-center gap-2 text-xs", className)}
    >
      <p className="flex items-center gap-1.5 whitespace-nowrap text-muted-foreground">
        <span
          aria-hidden="true"
          className={cn("size-1.5 rounded-full", activeAnalysis ? "bg-primary" : "bg-muted-foreground/50")}
        />
        <span className="sr-only">Análisis activo</span>
        <span className="font-medium text-foreground tabular-nums">
          {formatDate(activeAnalysis?.createdAt)}
        </span>
      </p>
      <Badge status={aiConfigured ? "success" : "neutral"} size="sm">
        {aiConfigured ? "IA disponible" : "IA no configurada"}
      </Badge>
    </section>
  );
}
