import "server-only";

import type { Meta4Society } from "@/lib/meta4/societies";
import {
  employeeParam,
  organizationParam,
  runPortalSelect,
  type PortalSqlRow,
} from "../peoplenet/query";

/** Columnas y unión ya usadas por payroll-receipt.ts. No reproduce reglas del JSP. */
export const PAYMENT_COLUMNS = {
  M4SCO_PAYMENT_DATA: [
    "ID_ORGANIZATION",
    "SCO_ID_HR",
    "SCO_ID_PERSON",
    "SCO_OR_ACCOUNT",
    "SCO_OR_HR_PERIOD",
    "SCO_ORIGIN_TYPE",
    "SCO_EMP_CHECK",
    "SCO_DT_START",
    "SCO_DT_END",
  ],
  M4SCO_PERSON_BANK: ["SCO_ID_PERSON", "SCO_OR_ACCOUNT", "SCO_GB_IBAN"],
} as const;

/** Cuentas de cobro propias vigentes, conservando todos los periodos y asignaciones. */
export const getOwnPaymentAccounts = async (
  society: Meta4Society,
  employeeId: string,
): Promise<PortalSqlRow[]> => {
  const now = new Date();
  return runPortalSelect(
    `SELECT DISTINCT D.SCO_DT_START, D.SCO_DT_END, D.SCO_OR_HR_PERIOD, BANK.SCO_GB_IBAN
FROM M4SCO_PAYMENT_DATA D
LEFT JOIN M4SCO_PERSON_BANK BANK ON BANK.SCO_ID_PERSON = D.SCO_ID_PERSON AND BANK.SCO_OR_ACCOUNT = D.SCO_OR_ACCOUNT
WHERE D.ID_ORGANIZATION = @organization AND D.SCO_ID_HR = @employeeId
  AND D.SCO_ORIGIN_TYPE = '01' AND D.SCO_EMP_CHECK = '1'
  AND D.SCO_DT_START <= @today AND D.SCO_DT_END >= @today
ORDER BY D.SCO_OR_HR_PERIOD, D.SCO_DT_START`,
    {
      organization: organizationParam(society),
      employeeId: employeeParam(employeeId),
      today: {
        type: "date",
        value: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())),
      },
    },
  );
};
