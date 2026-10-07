import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";

export interface SectionProps extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
  /** Título del bloque, fuera de la caja. */
  title?: ReactNode;
  description?: ReactNode;
  /** Acciones alineadas a la derecha del título. */
  actions?: ReactNode;
  headingLevel?: 2 | 3;
  /** Id del título; si se da, la sección queda etiquetada por él. */
  headingId?: string;
}

/** Bloque con el título fuera de la caja: separa secciones sin anidar tarjetas. */
export function Section({
  title,
  description,
  actions,
  headingLevel = 2,
  headingId,
  className,
  children,
  ...rest
}: SectionProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const hasHeader = Boolean(title || description || actions);

  return (
    <section
      aria-labelledby={title && headingId ? headingId : undefined}
      className={cn("min-w-0 space-y-3", className)}
      {...rest}
    >
      {hasHeader ? (
        <div className="flex min-w-0 flex-wrap items-end justify-between gap-x-4 gap-y-1">
          <div className="min-w-0 space-y-0.5">
            {title ? (
              <Heading id={headingId} className="text-sm font-semibold text-foreground">
                {title}
              </Heading>
            ) : null}
            {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
          </div>
          {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
