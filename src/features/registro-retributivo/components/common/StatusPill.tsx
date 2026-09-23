import { personStatusMeta } from "@/features/registro-retributivo/components/common/personStatus";
import { cn } from "@/lib/utils";

/** Estado de una persona: punto de color + etiqueta en lenguaje llano. */
export function StatusPill({ status, className }: Readonly<{ status: string; className?: string }>) {
  const meta = personStatusMeta(status);
  return (
    <span className={cn("inline-flex items-center gap-1.5 whitespace-nowrap text-sm text-foreground", className)}>
      <span aria-hidden="true" className={cn("size-2 shrink-0 rounded-full", meta.dotClass)} />
      {meta.label}
    </span>
  );
}
