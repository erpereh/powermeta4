import "server-only";

import { localIsoDate } from "./core";
import type { CertificateRead } from "../data/certificates";
import type { ProjectionEmployeeSelection, ProjectionYearSelection } from "../projections/types";

/**
 * Muestra inventada para la sesión debug: no procede del PDF de referencia ni
 * de PeopleNet y no se persiste. Ofrece los tres últimos ejercicios cerrados.
 */
export function certificateDebugData(
  selection: ProjectionYearSelection,
  employee: ProjectionEmployeeSelection,
  today: Date,
): CertificateRead | null {
  const last = today.getFullYear() - 1;
  const years = [last, last - 1, last - 2].map((year) => ({ year, document: null }));
  const year = selection.status === "selected" ? selection.year : last;
  if (!years.some((entry) => entry.year === year)) return null;
  const member =
    employee.status === "team"
      ? { id: employee.employeeId, name: "Persona de ejemplo" }
      : undefined;
  const scale = 1 + (last - year) * -0.03;
  const money = (value: number) => Math.round(value * scale * 100) / 100;
  return {
    page: {
      years,
      selectedYear: year,
      selection: { kind: "generated" },
      notices: [],
      ...(member ? { member } : {}),
    },
    certificates: [
      {
        year,
        fields: {
          perceptorNif: "00000000T",
          perceptorNombre: member ? "Ejemplo Muestra, Persona" : "Ejemplo Martín, Lucía",
          pagadorNif: "A00000000",
          pagadorNombre: "Empresa de Ejemplo",
          ejercicio: year,
          trabajoDinerariasIntegro: money(42150.32),
          trabajoDinerariasRetenciones: money(8735.1),
          trabajoEspecieValoracion: money(612.4),
          trabajoEspecieIngresosEfectuados: money(118.2),
          trabajoEspecieIngresosRepercutidos: money(118.2),
          gastosDeducibles: money(2674.55),
          lugar: "MADRID",
        },
        arrears: [{ ejercicio: year - 1, integro: money(512.3), retenciones: money(98.4) }],
        refunds: [],
        issuedAt: localIsoDate(today),
        signer: "Firmante de Ejemplo ",
      },
    ],
  };
}
