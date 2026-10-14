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
): ProjectionPageData {
  const years = [2026, 2025, 2024];
  const year = selection.status === "selected" ? selection.year : years[0];
  const base = { years, selectedYear: year, documents: [], notices: [] };
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
  const row = (label: string, group: string, monthly: number | null, total?: number | null) => {
    const values = labels.map((_, index) =>
      index === 2 || index === 5 || index === 6 ? 0 : monthly,
    );
    const result: PortalSqlRow = {
      ID_ITEM: label,
      CSP_ID_GRUPO: group,
      CSP_ID_SUBGR: "",
      CSP_ORDEN: concepts.length,
      TOTAL: total === undefined ? (monthly === null ? null : monthly * 12) : total,
    };
    values.forEach((value, index) => {
      result[payField(index)] = value;
    });
    concepts.push(result);
    return result;
  };
  row("Salario Base", "RD", 2150);
  row("Paga Extra Prorrateada", "RD", 537.5);
  row("Complemento Personal", "RD", 85);
  row("Salario base organigrama", "RD", 1275);
  row("Compl Puesto Trabajo", "RD", 430);
  row("Total Retribución fija", "RD", 4477.5);
  const variable = row("Retribución Variable", "RD", 0, 9200);
  variable.PAGA03 = 9200;
  row("Base Referencia Retribucion Variable", "RD", 0, 8500);
  row("Coste S.S. empresa", "RD", 1342.55);
  row("Comida Tarjeta Importe", "RI", 165);
  row("Capital Seguro Accidentes", "RI", 0, 110000);
  row("Capital Seguro de Vida Importe", "RI", 0, 78000);
  row("Prima Anual Seg. Accidente", "RI", 0, 72.6);
  row("Prima Anual Seg. Vida", "RI", 0, 815.4);
  row("Seguro Salud Empresa", "RI", 67.5, 810);
  row("Ayuda Escolar hijos", "RI", 0, 320);
  row("Aportación Ordinaria PPSE", "PPSE", 0, 2450);
  row("Aportación Extraordinaria PPSE", "PPSE", 0, 1200);
  row("Aportación PPSE Ordinaria Acumulada", "PPSE", 0, 16750);
  row("Aportación PPSE Extraordinaria Acumulada", "PPSE", 0, 4800);
  row("Aportación definida", "RQ", 1125, 1125);
  row("aportacion total", "RQ", 7600, 7600);
  row("Desc. Seguro Medico", "RI", 39.5);
  row("Especie Seguro Medico", "RI", 31.25);
  row("Manutención", "RI", 180);
  row("Lote Navidad", "RI", 0, 155.9);
  row("Formación Año Anterior", "RI", 0, 650);
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
    person,
    history,
    economic: history.at(-1),
  });
  return { ...base, report };
}
