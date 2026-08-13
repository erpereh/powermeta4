"use client";

import { AlertTriangle, CheckCircle2, CircleDashed, Info, XCircle, type LucideIcon } from "lucide-react";
import { displayText } from "@/features/registro-retributivo/ui/displayText";
import { STATUS_BADGE_TONE } from "@/features/registro-retributivo/ui/statusStyles";
import { cn } from "@/features/registro-retributivo/utils/classNames";

export type StatusBadgeTone = "danger" | "warning" | "success" | "info" | "neutral";

export interface StatusBadgeProps {
  readonly value?: string;
  readonly tone?: StatusBadgeTone;
  readonly icon?: LucideIcon;
  readonly className?: string;
}

function derivedTone(text: string): StatusBadgeTone {
  const lower = text.toLowerCase();
  if (lower.includes("alta") || lower.includes("incidencia") || lower.includes("falta") || lower.includes("diferencia")) return "danger";
  if (lower.includes("media") || lower.includes("revisar") || lower.includes("pendiente")) return "warning";
  if (lower.includes("ok") || lower.includes("configurada") || lower.includes("activa") || lower.includes("activo")) return "success";
  if (lower.includes("sin") || lower.includes("recibo sin")) return "neutral";
  return "info";
}

const TONE_ICON: Record<StatusBadgeTone, LucideIcon> = {
  danger: XCircle,
  warning: AlertTriangle,
  success: CheckCircle2,
  info: Info,
  neutral: CircleDashed,
};

export function StatusBadge({ value, tone, icon, className }: StatusBadgeProps) {
  const rawText = displayText(value);
  const text = rawText === "Sin Registro" ? "Recibo sin Reg. Retrib." : rawText === "Sin PDF" ? "Reg. Retrib. sin Recibo" : rawText || "Sin dato";
  const resolvedTone = tone ?? derivedTone(text);
  const Icon = icon ?? TONE_ICON[resolvedTone];

  return (
    <span className={cn("inline-flex min-h-7 items-center gap-1.5 rounded-full border px-2.5 text-xs font-semibold", STATUS_BADGE_TONE[resolvedTone], className)}>
      <Icon className="size-3.5" aria-hidden="true" />
      {text}
    </span>
  );
}
