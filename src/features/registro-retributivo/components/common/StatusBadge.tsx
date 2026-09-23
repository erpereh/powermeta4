"use client";

import { Badge, type AnimatedBadgeStatus } from "@/components/system";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { cn } from "@/features/registro-retributivo/utils/classNames";

export type StatusBadgeTone = "danger" | "warning" | "success" | "info" | "neutral";

export interface StatusBadgeProps {
  readonly value?: string;
  readonly tone?: StatusBadgeTone;
  readonly className?: string;
}

function derivedTone(text: string): StatusBadgeTone {
  const lower = text.toLowerCase();
  if (lower.includes("alta") || lower.includes("incidencia") || lower.includes("falta") || lower.includes("diferencia")) {
    return "danger";
  }
  if (lower.includes("media") || lower.includes("revisar") || lower.includes("pendiente")) {
    return "warning";
  }
  if (lower.includes("ok") || lower.includes("configurada") || lower.includes("activa") || lower.includes("activo")) {
    return "success";
  }
  if (lower.includes("sin") || lower.includes("recibo sin")) {
    return "neutral";
  }
  return "info";
}

const TONE_TO_STATUS: Record<StatusBadgeTone, AnimatedBadgeStatus> = {
  danger: "danger",
  warning: "warning",
  success: "success",
  info: "info",
  neutral: "neutral",
};

export function StatusBadge({ value, tone, className }: StatusBadgeProps) {
  const rawText = displayText(value);
  const text =
    rawText === "Sin Registro"
      ? "Recibo sin Reg. Retrib."
      : rawText === "Sin PDF"
        ? "Reg. Retrib. sin Recibo"
        : rawText || "Sin dato";
  const resolvedTone = tone ?? derivedTone(text);

  return (
    <Badge
      status={TONE_TO_STATUS[resolvedTone]}
      size="sm"
      showIcon
      className={cn("max-w-full whitespace-normal", className)}
    >
      {text}
    </Badge>
  );
}
