"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

import {
  AnimatedToastStack,
  useAnimatedToastStack,
  type ToastStatus,
} from "@/components/motion/animated-toast-stack";

/** Status de producto. `warning` se mapea a `error` (beUI no trae warning). */
export type ProductToastStatus =
  | ToastStatus
  | "warning";

export type ToastOptions = {
  title: ReactNode;
  description?: ReactNode;
  status?: ProductToastStatus;
  duration?: number;
  dismissible?: boolean;
};

type ToastApi = {
  toast: (options: ToastOptions) => string;
  dismiss: (id: string) => void;
  clear: () => void;
};

const ToastContext = createContext<ToastApi | null>(null);

function mapStatus(status: ProductToastStatus | undefined): ToastStatus {
  if (!status || status === "warning") {
    // warning → error: se documenta en DESIGN.md
    if (status === "warning") return "error";
    return "neutral";
  }
  return status;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const stack = useAnimatedToastStack({ limit: 5, defaultDuration: 4200 });

  const toast = useCallback(
    (options: ToastOptions) => {
      return stack.showToast({
        title: options.title,
        description: options.description,
        status: mapStatus(options.status),
        duration: options.duration,
        dismissible: options.dismissible,
      });
    },
    [stack],
  );

  const api = useMemo<ToastApi>(
    () => ({
      toast,
      dismiss: stack.dismissToast,
      clear: stack.clearToasts,
    }),
    [toast, stack.dismissToast, stack.clearToasts],
  );

  return (
    <ToastContext.Provider value={api}>
      {children}
      <AnimatedToastStack
        toasts={stack.toasts}
        onDismiss={stack.dismissToast}
        position="bottom-right"
        fixed
        portal
        maxVisible={3}
      />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastApi {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast debe usarse dentro de ToastProvider");
  }
  return ctx;
}
