export type ToastKind = "success" | "error" | "warning" | "info";

export interface ToastItem {
  readonly id: string;
  readonly kind: ToastKind;
  readonly title: string;
  readonly message?: string;
}
