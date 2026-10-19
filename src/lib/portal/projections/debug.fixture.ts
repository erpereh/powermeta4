import "server-only";

import type { PortalSqlRow } from "../peoplenet/query";
import type { PortalPerson } from "../identity-core";
import { buildProjectionReport, payField } from "./core";
import type { ProjectionPageData, ProjectionYearSelection } from "./types";

const person: PortalPerson = {
  employeeId: "DEMO-01",
  fullName: "Lucía Ejemplo Martín",
  job: "Analista de operaciones",
  unit: "Equipo de demostración",
  workCenter: "Centro de ejemplo",
  hireDate: null,
  managerId: null,
};

/** Muestras inventadas; no proceden del PDF ni de PeopleNet y no se persisten. */
export function projectionDebugData(
  selection: ProjectionYearSelection,
  scenario: string | undefined,
  employeeId?: string,
): ProjectionPageData {
  const years = [2026, 2025, 2024];
  const year = selection.status === "selected" ? selection.year : years[0];
  const member = employeeId ? { id: employeeId, name: "Persona de ejemplo del equipo" } : undefined;
  const base = {
    years,
    selectedYear: year,
    documents: [],
    notices: [],
    ...(member ? { member } : {}),
  };
  if (scenario === "empty" || !years.includes(year)) return { ...base, report: null };
  const labels = [
    `Enero ${year}`,
    "Febrero",
    `Retribución variable ${year - 1}`,
    `Marzo ${year}`,
    `Abril ${year}`,
    `Revisión convenio ${year - 1}`,
    `Revisión convenio ${year}`,
    `Mayo ${year}`,
    `Junio ${year}`,
    `Julio ${year}`,
    `Agosto ${year}`,
    `Septiembre ${year}`,
    `Octubre ${year}`,
    `Noviembre ${year}`,
    `Diciembre ${year}`,
  ];
  if (scenario === "many-pays")
    labels.push(
      `Revisión de convenio adicional ${year} · Primera`,
      `Revisión de convenio adicional ${year} · Segunda`,
      `Retribución variable complementaria ${year}`,
      `Regularización de jornada ${year}`,
      `Liquidación complementaria ${year}`,
    );
  const header: PortalSqlRow = {
    ANIO: year,
    STD_OR_HR_PERIOD: 1,
    CSP_REAL: scenario === "partial" ? null : 9,
    CSP_FEC_EJECUCION: `${year}-07-03`,
    SSP_NM_CATEGORIA: "Grupo II · Nivel 3",
    SCO_N_WORK_LOCATION: "Centro de ejemplo · Área de operaciones y atención a empresas",
    PAGA_TOT: "Total",
  };
  labels.forEach((label, index) => {
    header[payField(index)] = label;
  });
  const concepts: PortalSqlRow[] = [];
  const row = (
    label: string,
    group: string,
    monthly: number | null,
    total?: number | null,
    subgroup = group,
  ) => {
    const values = labels.map((_, index) =>
      index === 2 || index === 5 || index === 6 || index >= 15 ? 0 : monthly,
    );
    const result: PortalSqlRow = {
      ID_ITEM: label,
      CSP_ID_GRUPO: group,
      CSP_ID_SUBGR: subgroup,
      CSP_ORDEN: concepts.length,
      TOTAL: total === undefined ? (monthly === null ? null : monthly * 12) : total,
    };
    values.forEach((value, index) => {
      result[payField(index)] = value;
    });
    concepts.push(result);
    return result;
  };
  row("Salario Base", "RD", 2150, undefined, "SC");
  row("Paga Extra Prorrateada", "RD", 537.5, undefined, "SC");
  const personal = row("Complemento Personal", "RD", 85, undefined, "CC");
  if (scenario === "many-pays")
    personal.ID_ITEM =
      "Complemento personal por responsabilidades y disponibilidad durante la jornada de trabajo";
  row("Salario base organigrama", "RD", 1275, undefined, "CC");
  row("Compl Puesto Trabajo", "RD", 430, undefined, "CF");
  const variable = row("Retribución Variable", "RD", 0, 9200, "RV");
  variable.PAGA03 = 9200;
  row("Base Referencia Retribucion Variable", "RD", 8500, 8500, "RTV");
  row("Coste S.S. empresa", "RD", 1342.55, undefined, "SS");
  row("Comida Tarjeta Importe", "RI", 165, undefined, "CO");
  row("Capital Seguro Accidentes", "RI", 110000, 110000, "SG");
  row("Capital Seguro de Vida Importe", "RI", 78000, 78000, "SG");
  // Las primas se cobran en la primera paga: el JSON valora la especie en esa paga.
  row("Prima Anual Seg. Accidente", "RI", 0, 72.6, "VE").PAGA01 = 72.6;
  row("Prima Anual Seg. Vida", "RI", 0, 815.4, "VE").PAGA01 = 815.4;
  row("Seguro Salud Empresa", "RI", 67.5, 810, "VE");
  row("Lote Navidad", "RI", 0, 155.9, "VE");
  row("Ayuda Escolar hijos", "RI", 320, 320, "AYD");
  row("Aportación Ordinaria PPSE", "PPSE", 0, 2450);
  row("Aportación Extraordinaria PPSE", "PPSE", 0, 1200);
  row("Aportación PPSE Ordinaria Acumulada", "PPSE", 0, 16750);
  row("Aportación PPSE Extraordinaria Acumulada", "PPSE", 0, 4800);
  row("Aportación definida", "PPSE", 1125, 1125, "APOR");
  row("aportacion total", "PPSE", 7600, 7600, "APOR");
  row("Desc. Seguro Medico", "RI", -39.5, undefined, "RFX");
  row("Especie Seguro Medico", "RI", 39.5, undefined, "RFX");
  row("Manutención", "RI", 180, undefined, "RFX");
  row("Coste Seguro Médico", "RI", 74.28, 891.36, "RFA");
  row("Formación Año Anterior", "FORM", 0, 650, "FE");
  row("Retrib anual año actual", "RQ", 51900, 51900, "RA");
  row("Retrib variable año actual", "RQ", 8500, 8500, "RA");
  row("Revisión de convenio de demostración", "G", null, null, "SG");
  row("Cotización del empleado de demostración", "RET", 123.45, undefined, "RET");
  if (scenario === "partial") {
    const missing = concepts.find((entry) => entry.ID_ITEM === "Coste S.S. empresa");
    if (missing) {
      missing.TOTAL = null;
      missing.PAGA08 = null;
    }
  }
  const history = [
    { year: year - 4, fixed: 45600, variable: 6200 },
    { year: year - 3, fixed: 47000, variable: 6700 },
    { year: year - 2, fixed: 48800, variable: 7500 },
    { year: year - 1, fixed: 50500, variable: 8900 },
    { year, fixed: scenario === "partial" ? null : 51900, variable: 8500 },
  ];
  const report = buildProjectionReport({
    header,
    concepts,
    person: member ? { ...person, employeeId: member.id, fullName: member.name } : person,
    history,
  });
  return { ...base, report };
}
