"use client";

import { BrainCircuit, CheckCircle2, LoaderCircle } from "lucide-react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Card } from "@/features/registro-retributivo/components/common/Card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { clearAiExplanationCache } from "@/features/registro-retributivo/ai/explainCache";

export function AssistantAiSettings() {
  const { aiStatus, aiTesting, aiTestMessage, refreshAiStatus, testAiConnection, updateSettings, settings } =
    useAppState();
  const available = Boolean(aiStatus?.configured && aiStatus.enabled);

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <BrainCircuit aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-base leading-snug font-medium">Explicaciones IA</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Gemini se usa solo bajo demanda para explicar diferencias ya calculadas. No envía
              nombres, documentos completos ni datos bancarios.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Badge variant={available ? "default" : "secondary"}>
                {available ? "IA disponible" : "IA no configurada"}
              </Badge>
              <Badge variant="outline">{aiStatus?.model ?? settings.aiModel}</Badge>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button type="button" variant="outline" onClick={() => void refreshAiStatus()}>
                Actualizar estado
              </Button>
              <Button type="button" disabled={aiTesting} onClick={() => void testAiConnection()}>
                {aiTesting ? <LoaderCircle className="animate-spin" data-icon="inline-start" /> : null}
                Probar conexión
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  clearAiExplanationCache();
                  updateSettings({ autoExplainOnOpen: false });
                }}
              >
                Vaciar caché de explicaciones
              </Button>
            </div>
            {aiTestMessage ? (
              <p className="mt-3 flex items-start gap-2 text-sm" role="status">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {aiTestMessage}
              </p>
            ) : null}
          </div>
        </div>
      </Card>
      <p className="text-sm leading-6 text-muted-foreground">
        El catálogo de proveedores del asistente conversacional se conectará cuando el almacenamiento
        SQLite del chat retributivo esté listo. Las API keys se leen solo desde variables de entorno
        del servidor.
      </p>
    </div>
  );
}
