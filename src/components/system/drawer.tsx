"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";

import { Drawer as BeuiDrawer } from "@/components/motion/drawer";
import { cn } from "@/lib/utils";

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  side?: "left" | "right";
  /** Ancho del panel. */
  size?: "md" | "lg";
  className?: string;
}

/**
 * Panel lateral de producto sobre el Drawer original de beUI: cabecera con
 * título y cierre, cuerpo desplazable y pie opcional. Mueve el foco al panel
 * al abrir y lo devuelve al disparador al cerrar.
 */
export function Drawer({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  side = "right",
  size = "md",
  className,
}: DrawerProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    restoreRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const frame = requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      cancelAnimationFrame(frame);
      restoreRef.current?.focus();
    };
  }, [open]);

  return (
    <BeuiDrawer
      open={open}
      onOpenChange={onOpenChange}
      side={side}
      ariaLabel={title}
      backdropClassName="bg-overlay backdrop-blur-none"
      className={cn(
        "w-full bg-background",
        size === "lg" ? "sm:w-[36rem]" : "sm:w-[26rem]",
        "max-w-full sm:max-w-[90vw]",
        className,
      )}
    >
      <div className="flex min-h-0 flex-1 flex-col">
        <header className="flex items-start gap-3 border-b border-border px-5 py-4">
          <div className="min-w-0 flex-1 space-y-0.5">
            <h2 id={titleId} className="truncate text-base font-semibold text-foreground">
              {title}
            </h2>
            {description ? (
              <p className="text-sm text-muted-foreground">{description}</p>
            ) : null}
          </div>
          <button
            ref={closeRef}
            type="button"
            aria-label="Cerrar panel"
            onClick={() => onOpenChange(false)}
            className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
          {children}
        </div>
        {footer ? (
          <footer className="flex flex-wrap items-center justify-end gap-2 border-t border-border px-5 py-3">
            {footer}
          </footer>
        ) : null}
      </div>
    </BeuiDrawer>
  );
}
