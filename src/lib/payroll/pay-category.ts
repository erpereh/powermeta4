import type { PayrollPayCategory, PayrollPayFilter } from "@/types/payroll-receipt";

const fold = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

const MONTH_ONLY =
  /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|setiembre|octubre|noviembre|diciembre)( \d{4})?$/;

/**
 * Grupo de una paga del calendario. PeopleNet solo distingue la variable
 * (`SCO_ID_PAY_TYPE` 2); el resto se deduce del nombre, comprobado con las
 * pagas de CYC, IBER y COLL: una mensual se llama solo como su mes.
 */
export const classifyPay = (name: string, payType: string): PayrollPayCategory => {
  const text = fold(name);
  if (MONTH_ONLY.test(text)) return "ordinary";
  if (text.includes("variable")) return "variable";
  if (text.includes("revision") || text.includes("incremento")) return "revision";
  if (payType.trim() === "2") return "variable";
  return "other";
};

export const matchesPayFilter = (category: PayrollPayCategory, filter: PayrollPayFilter): boolean =>
  filter === "all" || category === filter;
