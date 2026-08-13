"use client";

import { BrainCircuit, Copy, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import {
  clearAiExplanationCache,
  createAiExplanationCacheKey,
  readCachedAiExplanation,
  writeCachedAiExplanation,
} from "@/features/registro-retributivo/ai/explainCache";
import {
  AI_EXPLAIN_FALLBACK_MESSAGE,
  AI_NOT_CONFIGURED_MESSAGE,
  normalizeAiExplanation,
  type AiExplanation,
  type ExplainPayload,
  type ExplainRequestType,
} from "@/features/registro-retributivo/ai/explainTypes";

interface AiExplanationPanelProps {
  readonly type: ExplainRequestType;
  readonly payload: ExplainPayload;
}

interface ExplainResponse {
  readonly explanation?: AiExplanation;
  readonly error?: string;
}

function SectionList({ title, items }: Readonly<{ title: string; items: readonly string[] }>) {
  return (
    <Card size="sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-1.5 text-sm leading-6 text-muted-foreground">
          {items.map((item) => (
            <li key={item}>- {item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function AiExplanationPanel({ type, payload }: AiExplanationPanelProps) {
  const { activeAnalysis, aiStatus } = useAppState();
  const [explanation, setExplanation] = useState<AiExplanation | undefined>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [cacheHit, setCacheHit] = useState(false);
  const analysisId = activeAnalysis?.id;
  const disabledReason = !aiStatus?.configured || !aiStatus.enabled ? AI_NOT_CONFIGURED_MESSAGE : undefined;
  const cacheKey = useMemo(() => createAiExplanationCacheKey(type, payload, analysisId), [analysisId, payload, type]);

  const requestExplanation = useCallback(
    async (forceRefresh: boolean) => {
      if (disabledReason) {
        setErrorMessage(undefined);
        return;
      }

      setLoading(true);
      setErrorMessage(undefined);

      try {
        if (!forceRefresh) {
          const cached = readCachedAiExplanation(type, payload, analysisId);
          if (cached) {
            setExplanation(cached);
            setCacheHit(true);
            return;
          }
        }

        const response = await fetch("/api/registro-retributivo/explain", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ type, payload }),
        });
        const body = (await response.json().catch(() => ({}))) as ExplainResponse;
        if (!response.ok || !body.explanation) {
          throw new Error(body.error ?? AI_EXPLAIN_FALLBACK_MESSAGE);
        }

        const normalized = normalizeAiExplanation(body.explanation);
        writeCachedAiExplanation(type, payload, normalized, analysisId);
        setExplanation(normalized);
        setCacheHit(true);
      } catch (error) {
        if (process.env.NODE_ENV !== "production") {
          console.warn("[ai-explain] Explanation request failed", error);
        }
        setErrorMessage(AI_EXPLAIN_FALLBACK_MESSAGE);
      } finally {
        setLoading(false);
      }
    },
    [analysisId, disabledReason, payload, type],
  );

  useEffect(() => {
    const cached = readCachedAiExplanation(type, payload, analysisId);
    setExplanation(cached);
    setErrorMessage(undefined);
    setCacheHit(Boolean(cached));
  }, [analysisId, cacheKey, payload, type]);

  const copyExplanation = useCallback(() => {
    if (!explanation) return;
    const text = [
      `Resumen: ${explanation.summary}`,
      `Causas probables: ${explanation.probableCauses.join("; ")}`,
      `Revisar en Reg. Retrib.: ${explanation.registroReview.join("; ")}`,
      `Revisar en Recibo: ${explanation.pdfReview.join("; ")}`,
      `Acciones recomendadas: ${explanation.recommendedActions.join("; ")}`,
      `Confianza: ${explanation.confidence}`,
    ].join("\n");
    void navigator.clipboard?.writeText(text);
  }, [explanation]);

  return (
    <Card className="mt-6" role="region" aria-label="Explicación IA">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <BrainCircuit aria-hidden="true" />
            </span>
            <div>
              <CardTitle>Explicación IA</CardTitle>
              <CardDescription className="mt-1">
                Bajo demanda, sobre datos estructurados ya calculados. No recalcula ni modifica resultados. No se envían nombres, NIF, IBAN, bancos ni documentos completos.
              </CardDescription>
              {disabledReason ? <p className="mt-2 text-sm font-semibold text-destructive">{disabledReason}</p> : null}
              {cacheHit ? <Badge variant="outline" className="mt-2">Explicación IA guardada para este análisis.</Badge> : null}
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Button
              type="button"
              variant={explanation ? "outline" : "default"}
              disabled={Boolean(disabledReason) || loading}
              title={disabledReason}
              onClick={() => void requestExplanation(Boolean(explanation))}
            >
              {loading ? <Spinner data-icon="inline-start" /> : explanation ? <RefreshCw data-icon="inline-start" /> : <BrainCircuit data-icon="inline-start" />}
              {loading ? "Analizando..." : explanation ? "Regenerar IA" : "Analizar con IA"}
            </Button>
            {explanation ? (
              <Button type="button" variant="outline" onClick={copyExplanation}>
                <Copy data-icon="inline-start" />
                Copiar explicación
              </Button>
            ) : null}
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {errorMessage ? (
          <Alert variant="destructive" role="alert">
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        ) : null}

        {!explanation && !loading ? (
          <Alert>
            <AlertDescription>
              La explicación determinista anterior se mantiene disponible. Lanza la IA solo cuando necesites una lectura adicional.
            </AlertDescription>
          </Alert>
        ) : null}

        {explanation ? (
          <div className="grid gap-3 lg:grid-cols-2">
            <Card size="sm" className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Resumen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{explanation.summary}</p>
              </CardContent>
            </Card>
            <SectionList title="Causas probables" items={explanation.probableCauses} />
            <SectionList title="Qué revisar en Reg. Retrib." items={explanation.registroReview} />
            <SectionList title="Qué revisar en Recibo" items={explanation.pdfReview} />
            <SectionList title="Acciones recomendadas" items={explanation.recommendedActions} />
            <Card size="sm" className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Nivel de confianza</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary">{explanation.confidence}</Badge>
              </CardContent>
            </Card>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

export { clearAiExplanationCache };
