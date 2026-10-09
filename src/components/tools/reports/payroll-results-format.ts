import { payrollReportCell } from "@/lib/payroll-reports/result-data";

const numberFormatter = new Intl.NumberFormat("es-ES", {
  maximumFractionDigits: 4,
  useGrouping: "always",
});

const pad = (value: number) => String(value).padStart(2, "0");

/** Las fechas de PeopleNet llegan sin zona: se muestran tal cual (UTC). */
const formatDay = (date: Date) =>
  `${pad(date.getUTCDate())}/${pad(date.getUTCMonth() + 1)}/${date.getUTCFullYear()}`;

/** `2026-10-06T10:49:34.000Z` → `06/10/2026 10:49:34`. */
export const formatRunAt = (iso: string): string => {
  const date = new Date(iso);
  return Number.isNaN(date.getTime())
    ? iso
    : `${formatDay(date)} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}`;
};

/** `YYYY-MM-DD` → `DD/MM/YYYY`. */
export const formatIsoDay = (isoDate: string | null): string => {
  if (!isoDate) return "—";
  const [year, month, day] = isoDate.split("-");
  return year && month && day ? `${day}/${month}/${year}` : isoDate;
};

/** Texto que se ve en pantalla para una celda de la hoja «Datos». */
export const displayReportCell = (raw: string, header: string): string => {
  const value = payrollReportCell(raw, header);
  if (value === null) return "";
  if (value instanceof Date) {
    const hasTime = value.getUTCHours() + value.getUTCMinutes() + value.getUTCSeconds() > 0;
    return hasTime
      ? `${formatDay(value)} ${pad(value.getUTCHours())}:${pad(value.getUTCMinutes())}`
      : formatDay(value);
  }
  if (typeof value === "number") return numberFormatter.format(value);
  // El apóstrofo inicial es la marca de texto de Excel: no se muestra.
  return value.startsWith("'") ? value.slice(1) : value;
};

export const isNumericReportCell = (raw: string, header: string): boolean =>
  typeof payrollReportCell(raw, header) === "number";

export const formatSummaryValue = (value: number | null): string =>
  value === null ? "" : numberFormatter.format(value);

export const foldReportText = (text: string): string =>
  text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
