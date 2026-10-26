import "server-only";

import {
  DEFAULT_INCIDENT_THRESHOLD,
  DEFAULT_REVIEW_THRESHOLD,
} from "@/features/registro-retributivo/compare/salaryDiff";
import { buildAutoConceptMap } from "@/features/registro-retributivo/peoplenet/auto-concept-map";
import {
  peopleNetReceiptSource,
  receiptToPayrollRecord,
} from "@/features/registro-retributivo/peoplenet/receipt-to-payroll-record";
import { loadRegistroFromPeopleNet } from "@/features/registro-retributivo/peoplenet/registro-query";
import type { PeopleNetAnalyzeRequest } from "@/features/registro-retributivo/peoplenet/request";
import { finishAnalysis } from "@/features/registro-retributivo/server/run-analyze";
import type {
  AnalysisError,
  AnalysisResult,
  PayrollConcept,
  PayrollRecord,
} from "@/features/registro-retributivo/types";
import { roundMoney } from "@/features/registro-retributivo/utils/money";
import { normalizeEmployeeNumber } from "@/features/registro-retributivo/utils/normalize";
import type { Meta4Society } from "@/lib/meta4/societies";
import { getPayrollReceiptsForSociety } from "@/lib/peoplenet/payroll-receipt";

/**
 * El navegador guarda y exporta el análisis entero a través del proxy, que
 * solo admite 10 MB por petición (`proxyClientMaxBodySize`). Por encima de este
 * margen se pide acotar con matrículas en lugar de fallar al guardar.
 */
export const PEOPLENET_RESULT_MAX_BYTES = 9 * 1024 * 1024;

/**
 * Los recibos leídos quedan en un único registro con los conceptos sumados por
 * texto y tipo. Toda una sociedad son miles de recibos; después de comparar
 * solo se usan sus textos de concepto (Ajustes), y los totales por persona ya
 * están en `people`.
 */
export function compactPayrollRecords(records: readonly PayrollRecord[]): PayrollRecord[] {
  if (records.length === 0) return [];
  const concepts = new Map<string, PayrollConcept>();
  for (const record of records) {
    for (const concept of record.concepts) {
      const key = `${concept.type}|${concept.name}`;
      concepts.set(key, {
        ...concept,
        amount: roundMoney((concepts.get(key)?.amount ?? 0) + concept.amount),
      });
    }
  }
  return [
    {
      sourceFile: `PeopleNet · ${records.length} ${records.length === 1 ? "recibo" : "recibos"}`,
      periodLabel: "Periodo analizado",
      workerName: "",
      concepts: [...concepts.values()],
    },
  ];
}

const formatDate = (iso: string): string => {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
};

/**
 * Análisis sin ficheros: recibos y Registro Retributivo de la sociedad activa
 * leídos de PeopleNet para el mismo periodo de meses imputados. La sociedad la
 * resuelve quien llama desde la sesión; del navegador solo llegan el periodo,
 * las matrículas opcionales y los ajustes del análisis.
 */
export async function runRetributivoPeopleNetAnalyze(
  organization: Meta4Society,
  request: PeopleNetAnalyzeRequest,
): Promise<AnalysisResult> {
  const employeeIds = request.employeeIds.length ? request.employeeIds : undefined;
  const [registroParsed, { receipts, lineSources }] = await Promise.all([
    loadRegistroFromPeopleNet({ organization, from: request.from, to: request.to, employeeIds }),
    getPayrollReceiptsForSociety({
      organization,
      fromAllocDate: request.from,
      toAllocDate: request.to,
      employeeIds,
    }),
  ]);

  // Solo se comparan las nóminas de la población del informe: Meta4 descarta
  // ciertas entidades legales y tipos de recurso, y no deben salir como «Sin Registro».
  const population = new Set(
    registroParsed.records.map((record) => normalizeEmployeeNumber(record.employeeNumber)),
  );
  const inPopulation = receipts.filter((entry) =>
    population.has(normalizeEmployeeNumber(entry.employeeId)),
  );
  const outsidePopulation = new Set(
    receipts
      .filter((entry) => !population.has(normalizeEmployeeNumber(entry.employeeId)))
      .map((entry) => entry.employeeId),
  );

  const payrollRecords = inPopulation.map(receiptToPayrollRecord);
  const autoConceptMap = buildAutoConceptMap(lineSources, registroParsed.itemColumns);
  const errors: AnalysisError[] = registroParsed.warnings.map((message) => ({
    file: "PeopleNet",
    type: "validation",
    message,
    recommendedAction: "Revisar la configuración del Registro Retributivo en PeopleNet.",
  }));
  const files = new Set(
    inPopulation.map((entry) => peopleNetReceiptSource(entry.payName, entry.paymentDate)),
  );

  const result = await finishAnalysis({
    payrollRecords,
    registroParsed,
    options: {
      tolerance: request.tolerance,
      reviewThreshold: request.reviewThreshold ?? DEFAULT_REVIEW_THRESHOLD,
      incidentThreshold: request.incidentThreshold ?? DEFAULT_INCIDENT_THRESHOLD,
      // Las reglas del usuario prevalecen sobre las automáticas por columna.
      userConceptMap: [...autoConceptMap, ...request.conceptMap],
      excludedEmployeeIds: request.excludedEmployeeIds,
    },
    errors,
    groupedExcelSheets: [],
    criteria: [
      `Origen: PeopleNet, sociedad ${organization}, meses imputados del ${formatDate(request.from)} al ${formatDate(request.to)}.`,
      employeeIds
        ? `Matrículas consultadas: ${employeeIds.length}.`
        : "Matrículas consultadas: toda la sociedad.",
      `Recibos leídos: ${payrollRecords.length} (${files.size} pagas).`,
      outsidePopulation.size
        ? `Personas con nómina fuera de la población del Registro (no se comparan): ${outsidePopulation.size}.`
        : "Todas las nóminas leídas pertenecen a la población del Registro.",
      `Conceptos del recibo enlazados automáticamente con el Registro por columna de PeopleNet: ${autoConceptMap.length}.`,
      "Registro recalculado con SELECT como CYC_IR_CALC_RETRIB (SSP_PROCESS_ACUM): normas LN4, horas de convenio y última paga. «Última situación» no se reproduce.",
    ],
    extra: {
      source: "peoplenet",
      period: { from: request.from, to: request.to },
      employeeIdsFilter: employeeIds,
    },
  });
  return {
    ...result,
    payrollRecords: compactPayrollRecords(result.payrollRecords),
    // Los conceptos a cero no aportan filas ni totales; los códigos quedan aparte para Ajustes.
    registroEmployees: result.registroEmployees.map((employee) => ({
      ...employee,
      concepts: employee.concepts.filter((concept) => concept.amount !== 0),
    })),
    registroConceptCodes: registroParsed.conceptCodes,
  };
}
