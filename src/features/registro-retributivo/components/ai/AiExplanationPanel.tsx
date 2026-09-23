"use client";

import { BrainCircuit, Copy, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Badge, Button, Loader } from "@/components/system";
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
    <section className="rounded-xl border border-border bg-card p-4">
      <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      <ul className="mt-2 flex flex-col gap-1.5 text-sm leading-6 text-muted-foreground">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </section>
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
    <section className="mt-6 rounded-xl border border-border bg-card p-4 sm:p-6" role="region" aria-label="Explicación IA">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <BrainCircuit aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-base font-semibold text-foreground">Explicación IA</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Bajo demanda, sobre datos estructurados ya calculados. No recalcula ni modifica resultados. No se envían nombres, NIF, IBAN, bancos ni documentos completos.
            </p>
            {disabledReason ? <p className="mt-2 text-sm font-semibold text-destructive">{disabledReason}</p> : null}
            {cacheHit ? <Badge status="neutral" size="sm" className="mt-2">Explicación IA guardada para este análisis.</Badge> : null}
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Button
            type="button"
            variant={explanation ? "outline" : "primary"}
            size="sm"
            disabled={Boolean(disabledReason) || loading}
            title={disabledReason}
            onClick={() => void requestExplanation(Boolean(explanation))}
          >
            {loading ? <Loader variant="spinner" size={14} label="Analizando" /> : explanation ? <RefreshCw className="size-3.5" aria-hidden="true" /> : <BrainCircuit className="size-3.5" aria-hidden="true" />}
            {loading ? "Analizando..." : explanation ? "Regenerar IA" : "Analizar con IA"}
          </Button>
          {explanation ? (
            <Button type="button" variant="outline" size="sm" onClick={copyExplanation}>
              <Copy className="size-3.5" aria-hidden="true" />
              Copiar explicación
            </Button>
          ) : null}
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {errorMessage ? (
          <p role="alert" className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
            {errorMessage}
          </p>
        ) : null}

        {!explanation && !loading ? (
          <p role="status" className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
            La explicación determinista anterior se mantiene disponible. Lanza la IA solo cuando necesites una lectura adicional.
          </p>
        ) : null}

        {explanation ? (
          <div className="grid gap-3 lg:grid-cols-2">
            <section className="rounded-xl border border-border bg-card p-4 lg:col-span-2">
              <h4 className="text-sm font-semibold text-foreground">Resumen</h4>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{explanation.summary}</p>
            </section>
            <SectionList title="Causas probables" items={explanation.probableCauses} />
            <SectionList title="Qué revisar en Reg. Retrib." items={explanation.registroReview} />
            <SectionList title="Qué revisar en Recibo" items={explanation.pdfReview} />
            <SectionList title="Acciones recomendadas" items={explanation.recommendedActions} />
            <section className="rounded-xl border border-border bg-card p-4 lg:col-span-2">
              <h4 className="text-sm font-semibold text-foreground">Nivel de confianza</h4>
              <Badge status="neutral" size="sm" className="mt-2">{explanation.confidence}</Badge>
            </section>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export { clearAiExplanationCache };
