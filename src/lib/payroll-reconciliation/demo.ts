import type { PayrollReportRunDetail, PayrollReportRunKey } from "@/types/payroll-report";
import { METRICS } from "./catalogue";

/** Completely invented, available only behind the development debug gate. */
export function demoReport(period: string, previous = false): PayrollReportRunDetail {
  const labels = [...new Set(METRICS.map((metric) => metric.header))];
  const headers = [
    "Id Empleado",
    "Apellidos y Nombres",
    "Id Empresa",
    "Salario Base",
    "Complemento Experiencia Importe",
    "Complemento Adaptación Individualizado",
    ...labels,
    "Ayuda vehículo",
    "Porcentaje I.R.P.F.",
  ];
  const date = new Date(`${period}-01T00:00:00Z`);
  if (previous) date.setUTCMonth(date.getUTCMonth() - 1);
  const effective = date.toISOString().slice(0, 7);
  return {
    run: {
      reportId: "DEMO",
      accruedOn: `${effective}-25`,
      runAt: `${effective}-26T10:00:00.000Z`,
      payFrequency: "001",
      reportName: "Muestra ficticia",
      payKind: "Normal",
      hasData: true,
    },
    comment: null,
    template: null,
    reportType: null,
    payName: "Muestra",
    payTypeName: null,
    payFrequencyName: null,
    payStart: `${effective}-01`,
    payEnd: `${effective}-28`,
    headers,
    rows: ["009001", "009002", "009003"].map((id, index) =>
      headers.map((header) => {
        if (header === "Id Empleado") return id;
        if (header === "Apellidos y Nombres") return `Persona ficticia ${index + 1}`;
        if (header === "Id Empresa") return "DEMO";
        if (header === "Total conceptos fijos") return previous || index !== 1 ? "2000" : "2050";
        if (header === "Porcentaje I.R.P.F.") return "15";
        if (header === "Salario Base") return "1800";
        if (
          header === "Complemento Experiencia Importe" ||
          header === "Complemento Adaptación Individualizado"
        )
          return "100";
        return "0";
      }),
    ),
  };
}
export const demoKeys = (period: string): PayrollReportRunKey[] => [
  demoReport(period).run,
  demoReport(period, true).run,
];
