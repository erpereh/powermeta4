import type { LucideIcon } from "lucide-react";
import { AnimatedNumber } from "@/components/system";
import { cn } from "@/features/registro-retributivo/utils/classNames";

type MetricTone = "blue" | "green" | "orange" | "red" | "gray" | "violet";

const TONE_CLASS: Record<MetricTone, string> = {
  blue: "bg-primary/10 text-primary",
  green: "bg-chart-2/15 text-foreground",
  orange: "bg-muted text-muted-foreground",
  red: "bg-destructive/15 text-destructive",
  gray: "bg-muted text-muted-foreground",
  violet: "bg-chart-5/15 text-foreground",
};

export type CompactMetricVariant = "card" | "row";

function isNumericValue(value: string | number): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

export function CompactMetric({
  label,
  value,
  detail,
  icon: Icon,
  tone = "blue",
  variant = "card",
}: Readonly<{
  label: string;
  value: string | number;
  detail?: string;
  icon?: LucideIcon;
  tone?: MetricTone;
  variant?: CompactMetricVariant;
}>) {
  return (
    <div
      data-slot="compact-metric"
      data-variant={variant}
      className={cn(
        "flex min-w-0 items-start gap-3",
        variant === "card"
          ? "rounded-xl border border-border bg-card px-4 py-3"
          : "border-b border-border px-0 py-3 last:border-b-0",
      )}
    >
      {Icon ? (
        <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-lg", TONE_CLASS[tone])}>
          <Icon aria-hidden="true" className="size-4" />
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-muted-foreground">{label}</p>
        <p className="mt-1 break-words font-mono text-lg font-semibold text-foreground tabular-nums">
          {isNumericValue(value) ? (
            <AnimatedNumber value={value} startOnView duration={0.9} />
          ) : (
            value
          )}
        </p>
        {detail ? <p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p> : null}
      </div>
    </div>
  );
}
