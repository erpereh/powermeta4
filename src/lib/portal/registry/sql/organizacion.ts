import type { PortalSqlQuery } from "../../types";

/** Lecturas de «Organización» reproducidas desde `SGCO_CONTACT` (`lecturas-sql.md`). */
export const ORGANIZACION_SQL = {
  /** `SGCO_CONTACT!SGCO_CONTACT_MAIN`: personas guardadas como contacto, con sus datos de ORO. */
  contactos: {
    scope: "own",
    tables: ["M4SSE_CONTACT", "M4ORO_EMPLEADOS"],
    statement: `SELECT LTRIM(RTRIM(CONCAT(O.NOMBRE, ' ', O.APELLIDO_1, ' ', O.APELLIDO_2))) AS NOMBRECOMPLETO,
  O.N_PUESTO AS N_PUESTO, O.N_UNIDAD AS N_UNIDAD, O.CORREO AS CORREO, A.SCO_DT_INSERTED AS SCO_DT_INSERTED
FROM M4SSE_CONTACT A
JOIN M4ORO_EMPLEADOS O ON O.ID_ORGANIZATION = A.ID_ORGANIZATION AND O.ID_EMPLEADO = A.SCO_ID_HR_CONTACT
WHERE A.ID_ORGANIZATION = @organization AND A.SCO_ID_HR = @employeeId AND O.COMPUTA = '1'
ORDER BY O.NOMBRE, O.APELLIDO_1`,
  },
} as const satisfies Record<string, PortalSqlQuery>;
