"use client";

import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { cn } from "@/features/registro-retributivo/utils/classNames";

export type ToastKind = "success" | "error" | "warning" | "info";

export interface ToastItem {
  readonly id: string;
  readonly kind: ToastKind;
  readonly title: string;
  readonly message?: string;
}

interface ToastViewportProps {
  readonly toasts: readonly ToastItem[];
  readonly onDismiss: (id: string) => void;
  readonly autoDismissMs?: number;
}

const TOAST_STYLE: Record<ToastKind, string> = {
  success: "border-emerald-500/30 bg-card text-foreground",
  error: "border-destructive/40 bg-card text-foreground",
  warning: "border-amber-500/40 bg-card text-foreground",
  info: "border-sky-500/40 bg-card text-foreground",
};

const ICON_STYLE: Record<ToastKind, string> = {
  success: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  error: "bg-destructive/15 text-destructive",
  warning: "bg-amber-500/15 text-amber-800 dark:text-amber-300",
  info: "bg-sky-500/15 text-sky-800 dark:text-sky-300",
};

function ToastIcon({ kind }: Readonly<{ kind: ToastKind }>) {
  const Icon = kind === "success" ? CheckCircle2 : kind === "error" ? XCircle : kind === "warning" ? AlertTriangle : Info;
  return (
    <span className={cn("flex size-9 shrink-0 items-center justify-center rounded-full", ICON_STYLE[kind])}>
      <Icon className="size-4" aria-hidden="true" />
    </span>
  );
}

export function ToastViewport({ toasts, onDismiss, autoDismissMs = 4500 }: ToastViewportProps) {
  useEffect(() => {
    if (!toasts.length) {
      return undefined;
    }

    const timers = toasts.map((toast) => window.setTimeout(() => onDismiss(toast.id), autoDismissMs));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [autoDismissMs, onDismiss, toasts]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[min(420px,calc(100vw-2rem))] flex-col gap-3" aria-live="polite">
      <AnimatePresence initial={false}>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            role={toast.kind === "error" ? "alert" : "status"}
            aria-label={toast.title}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={cn("pointer-events-auto flex items-start gap-3 rounded-xl border p-4 shadow-lg", TOAST_STYLE[toast.kind])}
          >
            <ToastIcon kind={toast.kind} />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{toast.title}</p>
              {toast.message ? <p className="mt-1 text-sm leading-5 text-muted-foreground">{toast.message}</p> : null}
            </div>
            <button
              type="button"
              aria-label={`Cerrar ${toast.title}`}
              onClick={() => onDismiss(toast.id)}
              className="flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
