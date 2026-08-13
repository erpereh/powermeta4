export function parseSpanishMoney(value: unknown): number | undefined {
  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.round(value * 100) / 100;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value
    .replace(/\s/g, "")
    .replace(/EUR/gi, "")
    .trim();

  if (!trimmed) {
    return undefined;
  }

  const normalized = trimmed.replace(/\./g, "").replace(",", ".");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? Math.round(parsed * 100) / 100 : undefined;
}

export function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

export function formatEuro(value?: number): string {
  if (value === undefined || Number.isNaN(value)) {
    return "";
  }

  const amount = new Intl.NumberFormat("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return `${amount} EUR`;
}
