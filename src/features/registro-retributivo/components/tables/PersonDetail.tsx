"use client";

import { ArrowRight, MessageSquareText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { PersonComparisonRow } from "@/features/registro-retributivo/types";

export function PersonDetail({ row, ready, busy, onContinue }: Readonly<{
  row: PersonComparisonRow;
  ready: boolean;
  busy: boolean;
  onContinue: (personId: string) => Promise<void>;
}>) {
  return (
    <section className="mb-6" aria-label="Integración con Asistente">
      <Card
        data-surface="assistant-continuation"
        className="border-primary/20 bg-primary/5 shadow-none"
      >
        <CardContent className="flex min-w-0 flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-5">
          <div className="flex min-w-0 items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MessageSquareText className="size-4" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-card-foreground">Continuar con esta matrícula</h3>
              <p className="mt-1 break-words text-sm leading-5 text-muted-foreground">
                Reutiliza o crea una conversación de este análisis sin enviar ninguna pregunta.
              </p>
            </div>
          </div>
          <Button
            type="button"
            className="w-full sm:w-auto"
            disabled={!ready || busy}
            onClick={() => void onContinue(row.employeeNumber)}
          >
            <MessageSquareText data-icon="inline-start" />
            {busy ? "Abriendo…" : !ready ? "Asistente no disponible" : "Continuar en Asistente"}
            <ArrowRight data-icon="inline-end" />
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
