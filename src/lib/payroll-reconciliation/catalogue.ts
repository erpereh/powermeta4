import type { Category, ControlId } from "./types";

export const CATEGORIES: { id: Category; name: string }[] = [
  { id: "mercer", name: "Flex / Mercer" },
  { id: "teletrabajo", name: "Colectivo teletrabajo" },
  { id: "comisiones", name: "Comisiones / kilómetros" },
  { id: "apartamentos", name: "Apartamentos" },
  { id: "comida", name: "Ausencias / compensación comida" },
  { id: "recarga", name: "Recarga tarjeta comida" },
  { id: "eurest", name: "Eurest" },
  { id: "excesos", name: "Excesos (plantilla)" },
  { id: "anticipos", name: "Anticipos (plantilla)" },
  { id: "aniversarios", name: "Aniversarios 25/40" },
  { id: "ppse", name: "PPSE (hoja embebida)" },
  { id: "gimnasio", name: "Gimnasio" },
  { id: "excepciones", name: "Excepciones confirmadas (plantilla)" },
];
export type Metric = {
  id: string;
  header: string;
  occurrence?: number;
  control: ControlId;
  category?: Category;
  monthly?: boolean;
  percentage?: boolean;
};
export const METRICS: Metric[] = [
  { id: "fixed", header: "Total conceptos fijos", control: "C01", monthly: true },
  { id: "irpf", header: "Porcentaje I.R.P.F.", control: "C02", monthly: true, percentage: true },
  ...(
    [
      ["healthCompany", "Seguro Salud Empresa"],
      ["healthDeduction", "Desc. Seguro Medico"],
      ["healthKind", "Especie seguro médico"],
      ["nursery", "Desc. Guarderia"],
      ["transport", "Desc. Transporte"],
      ["transportKind", "Especie transporte"],
      ["renting", "Desc. Renting"],
      ["rentingKind", "Especie Renting"],
      ["savings", "Descuento mes seguro ahorro jubilación"],
    ] as const
  ).map(([id, header]): Metric => ({ id, header, control: "C03", category: "mercer" })),
  ...(["1ª", "2ª", "3ª", "4ª"] as const).map(
    (ordinal, index): Metric => ({
      id: `extra${index + 1}`,
      header: `Paga Extra ${ordinal}`,
      control: "C04",
    }),
  ),
  { id: "telework", header: "importe abono teletrabajo", control: "C05", category: "teletrabajo" },
  { id: "kmExempt", header: "Kilometraje Exento", control: "C06", category: "comisiones" },
  { id: "kmSubject", header: "Kilometraje No Exento", control: "C06", category: "comisiones" },
  {
    id: "kmCancellation",
    header: "Cancelacion Prov (Dieta y KM) Importe",
    control: "C06",
    category: "comisiones",
  },
  {
    id: "apartments",
    header: "Apartamentos grupo empresa",
    control: "C07",
    category: "apartamentos",
  },
  { id: "shifts", header: "Complemento Trabajo a Turnos", control: "C08", monthly: true },
  { id: "holidays", header: "importe compl trabajo fest", control: "C08", monthly: true },
  { id: "meal", header: "importe compensación comida", control: "C09", category: "comida" },
  { id: "cardExempt", header: "Importe Tarjeta Exento", control: "C10", category: "recarga" },
  { id: "cardSubject", header: "Importe Tarjeta No Exento", control: "C10", category: "recarga" },
  { id: "excess", header: "Exceso líquido paga anterior", control: "C11", category: "excesos" },
  {
    id: "advanceProrated",
    header: "Anticipo Prorrateado Importe",
    control: "C12",
    category: "anticipos",
  },
  { id: "advanceDeduct", header: "Anticipos a descontar", control: "C12", category: "anticipos" },
  { id: "anniversary25", header: "Paga 25 años", control: "C13", category: "aniversarios" },
  { id: "anniversary40", header: "Paga 40 Años", control: "C13", category: "aniversarios" },
  { id: "ppse", header: "Aportación plan pensiones", control: "C14", category: "ppse" },
  ...(
    [
      ["minimum", "Asignación Mínima por Desempeño"],
      ["readjustment", "Reajuste"],
      ["groupFee", "Cuota Grupo Empresa"],
      ["vehicleAdvance", "Anticipo Vehículo Importe"],
      ["pensionAid", "Ayuda pensión Importe"],
      ["housing", "Ayuda Vivienda Desplazados Importe"],
      ["vehicleExpat", "Ayuda vehículo desplazados Importe"],
      ["availability", "Acuerdo disponibilidad"],
      ["vehicle", "Ayuda vehículo"],
      ["signatures", "Importe complemento firmas"],
      ["claims", "Importe complemento datos siniestros"],
    ] as const
  ).map(
    ([id, header]): Metric => ({
      id,
      header,
      control: "C15",
      monthly: true,
      ...(id === "vehicle" ? { occurrence: 2 } : {}),
    }),
  ),
  { id: "gym", header: "Cuota Gimnasio Importe", control: "C16", category: "gimnasio" },
];
export const CONTROL_NAMES = [
  "Fijos",
  "IRPF",
  "Flex",
  "Paga extra",
  "Teletrabajo",
  "Kilómetros",
  "Apartamentos",
  "Turnos y festivos",
  "Compensación comida",
  "Tarjeta comida",
  "Excesos",
  "Anticipos",
  "Aniversarios 25/40",
  "PPSE",
  "Conceptos varios",
  "Gimnasio",
];
export const normalizeHeader = (text: string): string =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
export const columnIndex = (headers: string[], label: string, occurrence = 1): number => {
  let seen = 0;
  return headers.findIndex(
    (header) => normalizeHeader(header) === normalizeHeader(label) && ++seen === occurrence,
  );
};
export const identity = (value: string): string => value.trim().replace(/^'/, "");
export const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
