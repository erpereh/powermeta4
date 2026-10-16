"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";

import { Drawer as BeuiDrawer } from "@/components/motion/drawer";
import { cn } from "@/lib/utils";
import { PanelResizeHandle } from "./panel-resize-handle";
import { usePanelWidth } from "./use-panel-width";

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
  const contentRef = useRef<HTMLDivElement>(null);
  const panel = usePanelWidth({ open, size });

  useEffect(() => {
    if (!open) return;
    restoreRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const frame = requestAnimationFrame(() => closeRef.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      const root = contentRef.current;
      if (!root || event.key !== "Tab") return;
      const dialogs = [...document.querySelectorAll('[role="dialog"][aria-modal="true"]')].filter(
        (element) => !element.closest("[inert]"),
      );
      if (dialogs.at(-1) !== root.closest('[role="dialog"]')) return;
      const focusable = [
        ...root.querySelectorAll<HTMLElement>(
          "button, a[href], input, select, textarea, [tabindex]",
        ),
      ].filter(
        (element) =>
          element.tabIndex >= 0 &&
          !element.matches(":disabled") &&
          !element.closest("[inert], [hidden]") &&
          getComputedStyle(element).display !== "none" &&
          getComputedStyle(element).visibility !== "hidden" &&
          (element.checkVisibility?.({ visibilityProperty: true }) ?? true),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last || !root.contains(document.activeElement))
      ) {
        event.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKey);
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
      panelRef={panel.panelRef}
      style={{ width: panel.width }}
      className={cn(
        "w-full bg-background",
        size === "lg" ? "sm:w-[36rem]" : "sm:w-[26rem]",
        "max-w-full md:max-w-[90vw]",
        className,
      )}
    >
      <div id={titleId} ref={contentRef} className="flex min-h-0 min-w-0 flex-1 flex-col">
        <header className="flex items-start gap-3 border-b border-border px-5 py-4">
          <div className="min-w-0 flex-1 space-y-0.5">
            <h2 className="wrap-break-word text-base font-semibold text-foreground">{title}</h2>
            {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
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
        <div className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4">
          {children}
        </div>
        {footer ? (
          <footer className="flex flex-wrap items-center justify-end gap-2 border-t border-border px-5 py-3">
            {footer}
          </footer>
        ) : null}
        {panel.resizable && panel.width ? (
          <PanelResizeHandle
            controls={titleId}
            side={side}
            width={panel.width}
            min={panel.min}
            max={panel.max}
            onWidthChange={panel.setWidth}
          />
        ) : null}
      </div>
    </BeuiDrawer>
  );
}
