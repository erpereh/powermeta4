import type { QuinquenalRow, QuinquenalUnit } from "@/types/quinquenal";

const moneyFormatter = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: "always",
});

const coefficientFormatter = new Intl.NumberFormat("es-ES", { maximumFractionDigits: 4 });

export const formatMoney = (value: number | null): string =>
  value === null ? "—" : moneyFormatter.format(value);

export const formatCoefficient = (value: number | null): string =>
  value === null ? "—" : coefficientFormatter.format(value);

/** `YYYY-MM-DD` → `DD/MM/YYYY`. */
export const formatIsoDate = (isoDate: string | null): string => {
  if (!isoDate) return "—";
  const [year, month, day] = isoDate.split("-");
  return year && month && day ? `${day}/${month}/${year}` : isoDate;
};

export const fullName = (row: QuinquenalRow): string =>
  [row.firstName, row.lastName1, row.lastName2]
    .filter((part): part is string => Boolean(part && part !== "."))
    .join(" ");

export const unitLabel = (unit: QuinquenalUnit): string =>
  unit.id ? (unit.name ? `${unit.name} (${unit.id})` : unit.id) : "—";

/** «ACYC_ES» → «ES». */
export const legalEntityLabel = (legalEntity: string | null): string =>
  legalEntity ? legalEntity.replace(/^ACYC_/, "") : "—";

export const foldText = (text: string): string =>
  text.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
