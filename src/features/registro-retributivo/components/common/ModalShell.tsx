"use client";

import { useEffect, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ModalShellProps {
  readonly title: string;
  readonly eyebrow?: string;
  readonly children: ReactNode;
  readonly footer?: ReactNode;
  readonly onClose: () => void;
  readonly maxWidth?: "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  readonly className?: string;
}

const WIDTH_CLASS: Record<NonNullable<ModalShellProps["maxWidth"]>, string> = {
  xl: "w-[min(36rem,calc(100vw-2rem))] max-w-[min(36rem,calc(100vw-2rem))] sm:max-w-[min(36rem,calc(100vw-2rem))]",
  "2xl": "w-[min(42rem,calc(100vw-2rem))] max-w-[min(42rem,calc(100vw-2rem))] sm:max-w-[min(42rem,calc(100vw-2rem))]",
  "3xl": "w-[min(48rem,calc(100vw-2rem))] max-w-[min(48rem,calc(100vw-2rem))] sm:max-w-[min(48rem,calc(100vw-2rem))]",
  "4xl": "w-[min(56rem,calc(100vw-2rem))] max-w-[min(56rem,calc(100vw-2rem))] sm:max-w-[min(56rem,calc(100vw-2rem))]",
  "5xl": "w-[min(64rem,calc(100vw-2rem))] max-w-[min(64rem,calc(100vw-2rem))] sm:max-w-[min(64rem,calc(100vw-2rem))]",
};

export function ModalShell({
  title,
  eyebrow = "Detalle determinista",
  children,
  footer,
  onClose,
  maxWidth = "5xl",
  className,
}: ModalShellProps) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <Dialog open onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent
        data-slot="modal-shell"
        showCloseButton
        className={cn(
          "grid max-h-[min(94dvh,100dvh)] min-w-0 grid-rows-[auto_minmax(0,1fr)_auto] gap-0 overflow-hidden overflow-x-hidden p-0",
          WIDTH_CLASS[maxWidth],
          className,
        )}
      >
        <DialogHeader className="min-w-0 border-b px-5 py-4 sm:px-6">
          <DialogDescription className="text-xs font-semibold uppercase tracking-wide">
            {eyebrow}
          </DialogDescription>
          <DialogTitle className="text-xl sm:text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="min-h-0 min-w-0 overflow-x-hidden overflow-y-auto px-5 py-5 sm:px-6">
          <div className="min-w-0 max-w-full">{children}</div>
        </div>
        {footer ? <DialogFooter className="min-w-0 border-t px-5 py-4 sm:px-6">{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}
