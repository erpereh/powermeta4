import type { LucideIcon } from "lucide-react";
import { cn } from "@/features/registro-retributivo/utils/classNames";

type MetricTone = "blue" | "green" | "orange" | "red" | "gray" | "violet";

const TONE_CLASS: Record<MetricTone, string> = {
  blue: "bg-primary/10 text-primary",
  green: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  orange: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
  red: "bg-destructive/15 text-destructive",
  gray: "bg-muted text-muted-foreground",
  violet: "bg-violet-500/15 text-violet-700 dark:text-violet-300",
};

export type CompactMetricVariant = "card" | "row";

export function CompactMetric({ label, value, detail, icon: Icon, tone = "blue", variant = "card" }: Readonly<{ label: string; value: string | number; detail?: string; icon?: LucideIcon; tone?: MetricTone; variant?: CompactMetricVariant }>) {
  return (
    <div
      data-slot="compact-metric"
      data-variant={variant}
      className={cn(
        "flex min-w-0 items-start gap-3",
        variant === "card"
          ? "rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
          : "border-b border-border px-0 py-3 last:border-b-0",
      )}
    >
      {Icon ? <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-xl", TONE_CLASS[tone])}><Icon aria-hidden="true" /></span> : null}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-muted-foreground">{label}</p>
        <p className="mt-1 break-words font-mono text-lg font-semibold text-foreground tabular-nums">{value}</p>
        {detail ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p> : null}
      </div>
    </div>
  );
}
