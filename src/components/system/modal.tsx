"use client";

import { useId, useEffect, useRef, type ReactNode } from "react";

import { CenterMorphModal, CenterMorphModalContent } from "@/components/motion/center-morph-modal";
import { cn } from "@/lib/utils";

export type ModalSize = "sm" | "md" | "lg" | "viewport";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  className?: string;
  /** Si false, no se cierra con Escape ni backdrop. */
  dismissible?: boolean;
}

const SIZE_CLASS: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-[26rem]",
  lg: "max-w-[min(64rem,calc(100vw-2rem))]",
  viewport: "flex h-[calc(100dvh-2rem)] max-w-full flex-col",
};

/**
 * Diálogo controlado de producto sobre CenterMorphModal.
 * Overlay semántico sin blur fuerte; no usa hold-to-confirm.
 */
export function Modal({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
  dismissible = true,
}: ModalProps) {
  const descriptionId = useId();
  const restoreRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!open) return;
    restoreRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    return () => {
      restoreRef.current?.focus();
    };
  }, [open]);

  return (
    <CenterMorphModal open={open} onOpenChange={onOpenChange}>
      <CenterMorphModalContent
        ariaLabel={title}
        ariaDescribedBy={description ? descriptionId : undefined}
        dismissible={dismissible}
        viewport={size === "viewport"}
        closeButtonLabel="Cerrar ventana"
        className={cn(SIZE_CLASS[size], className)}
        backdropClassName="bg-background/70 backdrop-blur-none"
      >
        <div
          className={cn(
            "flex flex-col gap-4 p-6",
            size === "viewport" && "min-h-0 flex-1 p-3 sm:p-5",
          )}
        >
          <div className="flex flex-col gap-1.5 pr-8">
            <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
            {description ? (
              <p id={descriptionId} className="text-sm text-muted-foreground">
                {description}
              </p>
            ) : null}
          </div>
          {children ? (
            <div className={cn("min-w-0", size === "viewport" && "flex min-h-0 flex-1 flex-col")}>
              {children}
            </div>
          ) : null}
          {footer ? (
            <div className="flex flex-wrap items-center justify-end gap-2 pt-1">{footer}</div>
          ) : null}
        </div>
      </CenterMorphModalContent>
    </CenterMorphModal>
  );
}
