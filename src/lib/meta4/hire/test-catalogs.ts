import type { HireCatalogOption, HireCatalogs } from "./catalogs";

/** Small catalogs shared by the hire form tests. */
export const HIRE_TEST_CATALOGS: HireCatalogs = {
  currency: [
    { id: "EUR", name: "Euro" },
    { id: "USD", name: "Dolar" },
  ],
  paymentType: [
    { id: "2", name: "Cheque" },
    { id: "4", name: "Transferencia Bancaria" },
  ],
  companyBank: [
    {
      id: "0001",
      name: "0001 - Crédito y Caución S.A.",
      detail: "ES31 0182 3999 3100 0002 7755",
    },
    { id: "0003", name: "0003 ACYC_ES - ACYC España" },
  ],
  agreement: [{ id: "0001", name: "Convenio de Empresa" }],
  adjustmentType: [
    { id: "0", name: "Ninguno" },
    { id: "1", name: "A bruto" },
  ],
  salaryType: [{ id: "1", name: "Mensual" }],
  union: [{ id: "UGT", name: "Unión General de Trabajadores" }],
  irpfType: [{ id: "NAC", name: "Nacional" }],
  perceptionKey: [{ id: "A", name: "Empleados por cuenta ajena" }],
  referenceModelWeek: [
    { id: "001/1", name: "Logística", detail: "Semana 004" },
    { id: "001/2", name: "Logística", detail: "Semana 005" },
  ],
  variableCompensationMode: [{ id: "1", name: "Modelo CYC" }],
  tc1Header: [{ id: "0000", name: "Grupos sin Cotizaciones", detail: "20006589560" }],
  tariffGroup: [{ id: "1", name: "Ingenieros y licenciados" }],
  ssOccupation: [{ id: "a", name: "Personal en trabajos exclusivos de oficina" }],
  ssAgreement: [{ id: "0000", name: "Sin Convenio" }],
  contract: [
    { id: "100/100", name: "Ordinario Indefinido", detail: "Ordinario indefinido tp completo" },
    {
      id: "100/100A",
      name: "Ordinario Indefinido",
      detail: "Contrato Mujer Reincorporada Indef",
    },
  ],
  laborRelation: [{ id: "0100", name: "Personal de alta dirección" }],
  reductionReason: [{ id: "001", name: "Cuidado de menor" }],
  substitutionCause: [{ id: "1", name: "Sustitución por Excedencia" }],
  unemploymentCondition: [{ id: "1", name: "Desempleado inscrito en la Oficina de Empleo." }],
  specialLaborRelation: [{ id: "100", name: "Personal de Alta Dirección" }],
  socialExclusion: [{ id: "1", name: "Exclusión social" }],
  documentType: [
    { id: "1", name: "NIF" },
    { id: "2", name: "Pasaporte" },
  ],
  country: [{ id: "724", name: "España", detail: "ES" }],
  nationality: [{ id: "724", name: "Española", detail: "España" }],
  community: [
    { id: "724/13", name: "Madrid", detail: "España" },
    { id: "724/09", name: "Cataluña", detail: "España" },
  ],
  province: [
    { id: "724/13/28", name: "Madrid", detail: "Madrid · España" },
    { id: "724/09/08", name: "Barcelona", detail: "Cataluña · España" },
  ],
  place: [],
  gender: [{ id: "2", name: "Mujer" }],
  maritalStatus: [{ id: "01", name: "Soltero/a" }],
  atradiusJob: [{ id: "0000", name: "Sin datos" }],
  atradiusCategory: [{ id: "00", name: "Sin datos" }],
  department: [{ id: "1001", name: "1001-295-Local Sales Costs 1-BRA" }],
  locationType: [{ id: "1", name: "Domicilio" }],
  roadType: [{ id: "CL", name: "Calle" }],
  legalEntity: [
    { id: "ACYC_ES", name: "ACYC España" },
    { id: "ACYC_PT", name: "ACYC Portugal" },
  ],
  job: [{ id: "GR_ACAN", name: "Actuarial Analyst" }],
  position: [{ id: "POS01", name: "Analista", detail: "CFO · Actuarial Analyst" }],
  workUnit: [{ id: "00", name: "Pendiente de definir" }],
  workLocation: [{ id: "724", name: "España", detail: "País" }],
  category: [{ id: "I1", name: "Categoría I1" }],
  startReason: [{ id: "001", name: "Nueva Alta" }],
  changeReason: [
    { id: "001", name: "Promoción" },
    { id: "002", name: "Desaparición del puesto anterior" },
  ],
  structure: [{ id: "0", name: "Empleado" }],
  functionalWorkCenter: [{ id: "O_CEN1", name: "Oficinas Centrales", detail: "Madrid" }],
};

export const HIRE_TEST_PLACES: readonly HireCatalogOption[] = [
  { id: "724/13/28/28079", name: "MADRID", detail: "Madrid · Madrid · España" },
  { id: "724/09/08/08019", name: "BARCELONA", detail: "Barcelona · Cataluña · España" },
];
