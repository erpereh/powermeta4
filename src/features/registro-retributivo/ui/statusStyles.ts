/** Semantic status styles that remain legible in light and dark themes. */

export function rowTone(status?: string): string {
  switch (status) {
    case "OK":
      return "bg-emerald-500/10 text-foreground hover:bg-emerald-500/15";
    case "Revisar":
    case "Sin mapear":
      return "bg-amber-500/10 text-foreground hover:bg-amber-500/15";
    case "Diferencia":
      return "bg-destructive/10 text-foreground hover:bg-destructive/15";
    case "Sin Registro":
      return "bg-violet-500/10 text-foreground hover:bg-violet-500/15";
    case "Sin PDF":
      return "bg-muted text-foreground hover:bg-muted/80";
    default:
      return "odd:bg-muted/30 even:bg-card text-foreground hover:bg-muted/50";
  }
}

export function diffClass(value: number): string {
  if (value > 0) return "text-destructive";
  if (value < 0) return "text-emerald-700 dark:text-emerald-400";
  return "text-muted-foreground";
}

export const STATUS_BADGE_TONE: Record<"danger" | "warning" | "success" | "info" | "neutral", string> = {
  danger: "border-transparent bg-destructive/15 text-destructive",
  warning: "border-transparent bg-amber-500/15 text-amber-800 dark:text-amber-300",
  success: "border-transparent bg-emerald-500/15 text-emerald-800 dark:text-emerald-300",
  info: "border-transparent bg-sky-500/15 text-sky-800 dark:text-sky-300",
  neutral: "border-transparent bg-muted text-muted-foreground",
};

export function groupingHeaderTone(label: string, level: number): string {
  const normalized = label.toLocaleLowerCase("es-ES").normalize("NFD").replace(/\p{M}/gu, "");
  if (normalized.includes("total personas")) {
    return "bg-emerald-500/15 text-foreground";
  }
  if (normalized.includes("total retribuciones normalizadas") && normalized.includes("variables")) {
    return "bg-amber-500/15 text-foreground";
  }
  if (normalized.includes("retribuciones normalizadas")) {
    return "bg-sky-500/15 text-foreground";
  }
  if (normalized.includes("periodo completo") || level === 0) {
    return "bg-muted text-foreground";
  }
  if (level === 1) {
    return "bg-muted/60 text-foreground";
  }
  return "bg-card text-foreground";
}

/** Opaque surfaces for sticky grouped table headers (Agrupaciones). */
export function groupingHeaderSurface(label: string, level: number): string {
  const normalized = label.toLocaleLowerCase("es-ES").normalize("NFD").replace(/\p{M}/gu, "");
  if (normalized.includes("total personas")) {
    return "bg-emerald-100 text-foreground dark:bg-emerald-950";
  }
  if (normalized.includes("total retribuciones normalizadas") && normalized.includes("variables")) {
    return "bg-amber-100 text-foreground dark:bg-amber-950";
  }
  if (normalized.includes("retribuciones normalizadas")) {
    return "bg-sky-100 text-foreground dark:bg-sky-950";
  }
  if (normalized.includes("periodo completo") || level === 0) {
    return "bg-muted text-foreground";
  }
  if (level === 1) {
    return "bg-secondary text-foreground";
  }
  return "bg-card text-foreground";
}
