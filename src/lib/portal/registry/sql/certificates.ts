import type { PortalSqlQuery } from "../../types";

/**
 * Lecturas del certificado de retenciones (`sse_g2_cert_hab_cyc.jsp`).
 * Parámetros que pone el servidor: `@organization`, `@employeeId` y, en las
 * casillas, `@year`. Ver `docs/portal/implementacion/lecturas-sql.md`.
 */
export const CERTIFICATE_SQL = {
  /**
   * `CSP_CERTIFICADO_HAB_ANIOS`: lee `STD_HR_PERIOD` (`STD_DT_START`,
   * `STD_DT_END`) y compone `P_LISTA_ANIOS` con los años de alta.
   */
  periods: {
    scope: "own",
    tables: ["STD_HR_PERIOD"],
    statement: `SELECT P.STD_DT_START AS STD_DT_START, P.STD_DT_END AS STD_DT_END
FROM STD_HR_PERIOD P
WHERE P.ID_ORGANIZATION = @organization AND P.STD_ID_HR = @employeeId`,
  },
} as const satisfies Record<string, PortalSqlQuery>;

/**
 * Casillas del informe `CYC_RP_CERT_HAB_<año>` (sentencia
 * `CSP_RP_CERT_HAB;SSP_RP_C_HABERES … SSE_EJECUCION_CYC "<año>"`).
 *
 * - `boxes`: una fila; cada columna con el alias de su casilla en
 *   `CERTIFICATE_FIELDS` (`perceptorNif`, `trabajoDinerariasIntegro`, `lugar`…).
 * - `arrears`: hasta cuatro filas de atrasos con `ejercicio`, `integro`,
 *   `retenciones`, `reducciones`, `gastos` y `otrasReducciones`.
 * - `refunds`: hasta tres filas de reintegros con `ejercicio`, `integro` y `reducciones`.
 * - `signer`: una fila con `FIRMANTE` y la imagen `FIRMA` (blob Meta4).
 *
 * Las tablas de esos Meta4Objects no están resueltas todavía: se obtienen en la
 * VM con `npm run portal:discover` y `scripts/portal/resolver-tablas.ts`, que
 * ya los incluyen. Hasta entonces el certificado generado queda pendiente (P02)
 * y nunca se inventan importes.
 */
export type CertificateDataSql = {
  readonly boxes: PortalSqlQuery;
  readonly arrears: PortalSqlQuery;
  readonly refunds: PortalSqlQuery;
  readonly signer: PortalSqlQuery;
};

export const CERTIFICATE_DATA_SQL: CertificateDataSql | null = null;
