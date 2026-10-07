import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { IconChip } from "./icon-chip";
import type { IconTone } from "@/lib/theme/icon-tones";
import { cn } from "@/lib/utils";

export interface DetailHeaderProps {
  title: ReactNode;
  icon?: LucideIcon;
  tone?: IconTone;
  /** Ruta de vuelta (Breadcrumb del sistema). */
  breadcrumb?: ReactNode;
  /** Estado junto al título. */
  badge?: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  /** Sustituye al icono (p. ej. un avatar). */
  media?: ReactNode;
  headingLevel?: 1 | 2;
  className?: string;
}

/** Cabecera de detalle: breadcrumb, icono grande, título con estado y descripción. */
export function DetailHeader({
  title,
  icon,
  tone,
  breadcrumb,
  badge,
  description,
  actions,
  media,
  headingLevel = 1,
  className,
}: DetailHeaderProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <header className={cn("min-w-0 space-y-4", className)}>
      {breadcrumb ? <div className="min-w-0">{breadcrumb}</div> : null}
      {media ?? (icon ? <IconChip icon={icon} tone={tone} size="lg" /> : null)}
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <Heading className="min-w-0 text-xl font-semibold tracking-tight text-foreground">
              {title}
            </Heading>
            {badge}
          </div>
          {description ? (
            <p className="max-w-2xl text-sm text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div>
        ) : null}
      </div>
    </header>
  );
}
