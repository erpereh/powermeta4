"use client";

import { BrainCircuit, Check, Copy, RefreshCw } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAppState } from "@/features/registro-retributivo/state/AppState";
import { Accordion, ActionSwapButton, Badge, Button, Callout, ThinkingShimmer } from "@/components/system";
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

function BulletList({ items }: Readonly<{ items: readonly string[] }>) {
  return (
    <ul className="flex list-disc flex-col gap-1 pl-4 text-sm leading-6 text-muted-foreground marker:text-muted-foreground/60">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function AiExplanationPanel({ type, payload }: AiExplanationPanelProps) {
  const { activeAnalysis, aiStatus } = useAppState();
  const [explanation, setExplanation] = useState<AiExplanation | undefined>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [cacheHit, setCacheHit] = useState(false);
  const [copied, setCopied] = useState(false);
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
    void navigator.clipboard?.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    });
  }, [explanation]);

  return (
    <section className="rounded-xl border border-border bg-elevated/40 p-4" role="region" aria-label="Explicación IA">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <BrainCircuit className="size-4 shrink-0 text-primary" aria-hidden="true" />
          <div className="min-w-0">
            <h3 className="text-sm font-semibold text-foreground">Explicación IA</h3>
            <p className="text-xs text-muted-foreground">
              {cacheHit ? "Guardada para este análisis." : "Bajo demanda, sin nombres, NIF, IBAN ni documentos."}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          {explanation ? (
            <ActionSwapButton
              variant="ghost"
              size="sm"
              animation="roll"
              value={copied ? "copied" : "copy"}
              cycle={false}
              items={[
                { id: "copy", label: "Copiar", icon: <Copy className="size-3.5" aria-hidden="true" /> },
                { id: "copied", label: "Copiado", icon: <Check className="size-3.5" aria-hidden="true" /> },
              ]}
              onClick={copyExplanation}
            />
          ) : null}
          <Button
            type="button"
            variant={explanation ? "ghost" : "outline"}
            size="sm"
            disabled={Boolean(disabledReason) || loading}
            title={disabledReason}
            onClick={() => void requestExplanation(Boolean(explanation))}
          >
            {explanation ? <RefreshCw className="size-3.5" aria-hidden="true" /> : <BrainCircuit className="size-3.5" aria-hidden="true" />}
            {explanation ? "Regenerar" : "Analizar con IA"}
          </Button>
        </div>
      </div>

      {disabledReason ? <p className="mt-3 text-xs text-muted-foreground">{disabledReason}</p> : null}

      {loading ? (
        <p role="status" className="mt-4 text-sm">
          <ThinkingShimmer>Leyendo el cálculo determinista…</ThinkingShimmer>
        </p>
      ) : null}

      {errorMessage ? (
        <Callout status="error" title={errorMessage} className="mt-4" />
      ) : null}

      {explanation && !loading ? (
        <div className="mt-4 flex flex-col gap-3">
          <p className="text-sm leading-6 text-foreground">{explanation.summary}</p>
          <Accordion
            className="overflow-hidden rounded-xl border border-border"
            classNames={{ trigger: "min-h-11 px-3", title: "text-sm", description: "text-sm", content: "[&>div]:px-3 [&>div]:pb-3" }}
            items={[
              { id: "causes", title: "Causas probables", description: <BulletList items={explanation.probableCauses} /> },
              { id: "registro", title: "Qué revisar en Reg. Retrib.", description: <BulletList items={explanation.registroReview} /> },
              { id: "pdf", title: "Qué revisar en Recibo", description: <BulletList items={explanation.pdfReview} /> },
              { id: "actions", title: "Acciones recomendadas", description: <BulletList items={explanation.recommendedActions} /> },
            ]}
          />
          <p className="text-xs text-muted-foreground">
            Confianza: <Badge status="neutral" size="sm">{explanation.confidence}</Badge>
          </p>
        </div>
      ) : null}
    </section>
  );
}

export { clearAiExplanationCache };
