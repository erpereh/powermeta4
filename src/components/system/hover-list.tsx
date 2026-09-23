"use client";

import { forwardRef, type ReactNode } from "react";

import { SharedLayoutBg } from "@/components/motion/shared-layout-bg";
import { cn } from "@/lib/utils";

export interface HoverListProps {
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

/**
 * Lista de filas con el pill de hover compartido de beUI (shared-layout-bg).
 * Cada hijo debe ser un `<li>` con una única acción (Link o button).
 */
export const HoverList = forwardRef<HTMLElement, HoverListProps>(function HoverList(
  { children, className, ...rest },
  ref,
) {
  return (
    <SharedLayoutBg
      ref={ref}
      as="ul"
      inset={0}
      pillClassName="rounded-lg bg-muted"
      className={cn("gap-0.5", className)}
      {...rest}
    >
      {children}
    </SharedLayoutBg>
  );
});
