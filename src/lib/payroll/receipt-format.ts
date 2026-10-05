import {
  PAYROLL_PAYMENT_TYPES,
  type PayrollPaymentType,
  type PayrollReceiptEntry,
  type PayrollReceiptLine,
} from "@/types/payroll-receipt";

const decimalFormatter = new Intl.NumberFormat("es-ES", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  // es-ES no agrupa por defecto importes de cuatro cifras; el recibo Meta4 sí.
  useGrouping: "always",
});

export const formatDecimal = (value: number | null): string =>
  value === null ? "" : decimalFormatter.format(value);

export const formatPercentage = (value: number | null): string =>
  value === null ? "" : `${decimalFormatter.format(value)} %`;

/** `YYYY-MM-DD` → `DD/MM/YYYY`. */
export const formatDate = (isoDate: string | null): string => {
  if (!isoDate) return "";
  const [year, month, day] = isoDate.split("-");
  return year && month && day ? `${day}/${month}/${year}` : isoDate;
};

export const paymentTypeLabel = (paymentType: PayrollPaymentType): string =>
  PAYROLL_PAYMENT_TYPES.find((option) => option.value === paymentType)?.label ?? "";

/** Texto de la línea como en Meta4: los informativos van entre `***`. */
export const lineConcept = (line: PayrollReceiptLine): string =>
  line.section === "informative" && line.level === 0 ? `*** ${line.concept} ***` : line.concept;

export const formatLineUnits = (line: PayrollReceiptLine): string =>
  line.unitsFormat === "percentage" ? formatPercentage(line.units) : formatDecimal(line.units);

const slug = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^A-Za-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

/** `nomina_1013_2026-04-25.pdf` o `nominas_1013_2026-01-25_2026-04-25.xlsx`. */
export const receiptsFileName = (
  employeeId: string,
  entries: readonly PayrollReceiptEntry[],
  extension: "pdf" | "xlsx",
): string => {
  const [first] = entries;
  const last = entries.at(-1);
  const employee = slug(employeeId) || "empleado";
  if (!first || !last || entries.length === 1) {
    return `nomina_${employee}_${slug(first?.id ?? "recibo")}.${extension}`;
  }
  return `nominas_${employee}_${first.paymentDate}_${last.paymentDate}.${extension}`;
};

/** Nombre de hoja de Excel: máximo 31 caracteres, sin `[]:*?/\` y único. */
export const sheetName = (entry: PayrollReceiptEntry, used: Set<string>): string => {
  const base = `${formatDate(entry.paymentDate).replace(/\//g, "-")} ${entry.payName}`
    .replace(/[[\]:*?/\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 31);
  let name = base;
  for (let copy = 2; used.has(name.toLowerCase()); copy++) {
    const suffix = ` (${copy})`;
    name = `${base.slice(0, 31 - suffix.length)}${suffix}`;
  }
  used.add(name.toLowerCase());
  return name;
};
