/** Semantic status styles that remain legible in light and dark themes. */

export function rowTone(status?: string): string {
  switch (status) {
    case "OK":
      return "bg-chart-2/10 text-foreground hover:bg-chart-2/15";
    case "Revisar":
    case "Sin mapear":
      return "bg-muted text-foreground hover:bg-muted/80";
    case "Diferencia":
      return "bg-destructive/10 text-foreground hover:bg-destructive/15";
    case "Sin Registro":
      return "bg-chart-5/15 text-foreground hover:bg-chart-5/20";
    case "Sin PDF":
      return "bg-muted text-foreground hover:bg-muted/80";
    default:
      return "odd:bg-muted/30 even:bg-card text-foreground hover:bg-muted/50";
  }
}

export function diffClass(value: number): string {
  if (value > 0) return "text-destructive";
  if (value < 0) return "text-primary";
  return "text-muted-foreground";
}

/**
 * Color de una diferencia según la tolerancia: rojo si la supera (sea del
 * signo que sea), atenuado si está dentro de ella.
 */
export function toleranceDiffClass(value: number, tolerance: number): string {
  return Math.abs(value) > tolerance ? "text-destructive" : "text-muted-foreground";
}

export const STATUS_BADGE_TONE: Record<"danger" | "warning" | "success" | "info" | "neutral", string> = {
  danger: "border-transparent bg-destructive/15 text-destructive",
  warning: "border-transparent bg-muted text-muted-foreground",
  success: "border-transparent bg-chart-2/15 text-foreground",
  info: "border-transparent bg-chart-4/15 text-foreground",
  neutral: "border-transparent bg-muted text-muted-foreground",
};

export function groupingHeaderTone(label: string, level: number): string {
  const normalized = label.toLocaleLowerCase("es-ES").normalize("NFD").replace(/\p{M}/gu, "");
  if (normalized.includes("total personas")) {
    return "bg-chart-2/15 text-foreground";
  }
  if (normalized.includes("total retribuciones normalizadas") && normalized.includes("variables")) {
    return "bg-muted text-foreground";
  }
  if (normalized.includes("retribuciones normalizadas")) {
    return "bg-chart-4/15 text-foreground";
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
    return "bg-muted text-foreground";
  }
  if (normalized.includes("total retribuciones normalizadas") && normalized.includes("variables")) {
    return "bg-secondary text-foreground";
  }
  if (normalized.includes("retribuciones normalizadas")) {
    return "bg-accent text-foreground";
  }
  if (normalized.includes("periodo completo") || level === 0) {
    return "bg-muted text-foreground";
  }
  if (level === 1) {
    return "bg-secondary text-foreground";
  }
  return "bg-card text-foreground";
}
