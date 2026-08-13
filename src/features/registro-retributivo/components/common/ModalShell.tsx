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
import { ScrollArea } from "@/components/ui/scroll-area";
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
  xl: "sm:max-w-xl",
  "2xl": "sm:max-w-2xl",
  "3xl": "sm:max-w-3xl",
  "4xl": "sm:max-w-4xl",
  "5xl": "sm:max-w-5xl",
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
          "grid max-h-[min(94dvh,100dvh)] w-full min-w-0 max-w-full grid-rows-[auto_minmax(0,1fr)_auto] gap-0 overflow-hidden p-0 sm:max-w-[calc(100%-2rem)]",
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
        <ScrollArea className="min-h-0 min-w-0 max-w-full overflow-x-hidden px-5 py-5 sm:px-6">
          {children}
        </ScrollArea>
        {footer ? <DialogFooter className="min-w-0 border-t px-5 py-4 sm:px-6">{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}
