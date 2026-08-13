const MONTHS: Record<string, string> = {
  enero: "01",
  febrero: "02",
  marzo: "03",
  abril: "04",
  mayo: "05",
  junio: "06",
  julio: "07",
  agosto: "08",
  septiembre: "09",
  setiembre: "09",
  octubre: "10",
  noviembre: "11",
  diciembre: "12",
};

export interface ParsedPayrollPeriod {
  readonly label: string;
  readonly start?: string;
  readonly end?: string;
}

function pad(value: string | number): string {
  return String(value).padStart(2, "0");
}

export function toIsoDate(value: unknown): string | undefined {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return `${value.getFullYear()}-${pad(value.getMonth() + 1)}-${pad(value.getDate())}`;
  }

  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  const slash = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slash) {
    return `${slash[3]}-${pad(slash[2])}-${pad(slash[1])}`;
  }

  return undefined;
}

export function parsePayrollPeriod(value: string): ParsedPayrollPeriod {
  const label = value.trim().replace(/\s+/g, " ");
  const match = label.match(/Del\s+(\d{1,2})\s+al\s+(\d{1,2})\s+([A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)\s+(\d{4})/i);
  if (!match) {
    return { label };
  }

  const month = MONTHS[match[3].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()];
  if (!month) {
    return { label };
  }

  return {
    label,
    start: `${match[4]}-${month}-${pad(match[1])}`,
    end: `${match[4]}-${month}-${pad(match[2])}`,
  };
}
