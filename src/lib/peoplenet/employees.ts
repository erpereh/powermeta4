import "server-only";

import sql from "mssql";

import type { Meta4Society } from "@/lib/meta4/societies";
import { getPeopleNetPool } from "@/lib/peoplenet/client";

/** SQL column and its corresponding scalar field in the former detail response. */
export const EMPLOYEE_FIELD_COLUMNS = [
  ["ID_ORGANIZATION", "id_Organization"],
  ["ID_EMPLEADO", "id_Empleado"],
  ["ID_UNIDAD_RAIZ", "id_Unidad_Raiz"],
  ["N_PUESTO", "n_Puesto"],
  ["FEC_ALTA_EMPLEADO", "fec_Alta_Empleado"],
  ["APELLIDO_1", "apellido_1"],
  ["APELLIDO_2", "apellido_2"],
  ["NOMBRE", "nombre"],
  ["CORREO", "correo"],
  ["N_UNIDAD_RAIZ", "n_Unidad_Raiz"],
  ["ID_DIRECCION", "id_Direccion"],
  ["N_DIRECCION", "n_Direccion"],
  ["ID_TIPO_DIRECCION", "id_Tipo_Direccion"],
  ["ID_AREA", "id_Area"],
  ["N_AREA", "n_Area"],
  ["ID_TIPO_AREA", "id_Tipo_Area"],
  ["ID_UNIDAD", "id_Unidad"],
  ["N_UNIDAD", "n_Unidad"],
  ["ID_TIPO_UNIDAD", "id_Tipo_Unidad"],
  ["ID_SERVICIO", "id_Servicio"],
  ["N_SERVICIO", "n_Servicio"],
  ["ID_TIPO_SERVICIO", "id_Tipo_Servicio"],
  ["ID_PUESTO", "id_Puesto"],
  ["ID_TIPO_PUESTO", "id_Tipo_Puesto"],
  ["N_TIPO_PUESTO", "n_Tipo_Puesto"],
  ["ID_CENT_TRAB_FIS", "id_Cent_Trab_Fis"],
  ["ID_CENTRO_TRABAJO", "id_Centro_Trabajo"],
  ["N_CENTRO_TRABAJO", "n_Centro_Trabajo"],
  ["DIR_CENTRO_TRABAJO", "dir_Centro_Trabajo"],
  ["ID_RESPONSABLE", "id_Responsable"],
  ["ID_LEGAL", "id_Legal"],
  ["NUM_AFILIACION_SS", "num_Afiliacion_Ss"],
  ["ID_ESTADO_CIVIL", "id_Estado_Civil"],
  ["FEC_NACIMIENTO", "fec_Nacimiento"],
  ["CLAVE_SELF", "clave_Self"],
  ["APELLIDO_1V", "apellido_1V"],
  ["APELLIDO_2V", "apellido_2V"],
  ["NOMBREV", "nombreV"],
  ["N_PUESTOV", "n_PuestoV"],
  ["N_UNIDAD_RAIZV", "n_Unidad_RaizV"],
  ["N_DIRECCIONV", "n_DireccionV"],
  ["N_AREAV", "n_AreaV"],
  ["N_UNIDADV", "n_UnidadV"],
  ["N_SERVICIOV", "n_ServicioV"],
  ["N_CENTRO_TRABAJOV", "n_Centro_TrabajoV"],
  ["FEC_ANTIGUEDAD", "fec_Antiguedad"],
  ["COMPUTA", "computa"],
  ["CSP_LUGAR_WU_ORO", "csp_Lugar_Wu_Oro"],
  ["N_LUGAR_WU_ORO_AREA", "n_Lugar_Wu_Oro_Area"],
  ["N_LUGAR_WU_ORO_UNIDAD", "n_Lugar_Wu_Oro_Unidad"],
  ["N_LUGAR_WU_ORO_DIRECCION", "n_Lugar_Wu_Oro_Direccion"],
  ["N_LUGAR_WU_ORO_SERVICIO", "n_Lugar_Wu_Oro_Servicio"],
  ["STD_ID_LEG_ENT", "std_Id_Leg_Ent"],
  ["STD_N_LEG_ENT", "std_N_Leg_Ent"],
  ["N_CENT_TRAB_FIS", "n_Cent_Trab_Fis"],
  ["ID_CLASE_PUESTO", "id_Clase_Puesto"],
  ["N_CLASE_PUESTO", "n_Clase_Puesto"],
  ["ID_STATUS_PUESTO", "id_Status_Puesto"],
  ["N_STATUS_PUESTO", "n_Status_Puesto"],
  ["ID_CEO", "id_Ceo"],
  ["N_CEO", "n_Ceo"],
  ["ID_MB", "id_Mb"],
  ["N_MB", "n_Mb"],
  ["ID_ALT", "id_Alt"],
  ["N_ALT", "n_Alt"],
  ["CSP_ID_FUSION", "csp_Id_Fusion"],
  ["CORREO2", "correo2"],
  ["CLAVE_SELF2", "clave_Self2"],
  ["CSP_ID_ATRADIUS", "csp_Id_Atradius"],
  ["DT_LAST_UPDATE", "dt_Last_Update"],
] as const;

type EmployeeColumn = (typeof EMPLOYEE_FIELD_COLUMNS)[number][0];
export type PeopleNetSqlValue = string | number | boolean | Date | null;
export type PeopleNetEmployeeRow = Record<EmployeeColumn, PeopleNetSqlValue>;

export type PeopleNetEmployeeEmailRow = {
  STD_OR_MAIL: PeopleNetSqlValue;
  STD_DT_START: PeopleNetSqlValue;
  STD_DT_END: PeopleNetSqlValue;
  STD_EMAIL: PeopleNetSqlValue;
  STD_ID_LOCAT_TYPE: PeopleNetSqlValue;
  DT_LAST_UPDATE: PeopleNetSqlValue;
};

const EMPLOYEE_QUERY = `SELECT ${EMPLOYEE_FIELD_COLUMNS.map(([column]) => column).join(", ")}
FROM M4ORO_EMPLEADOS
WHERE ID_EMPLEADO = @employeeId AND ID_ORGANIZATION = @organization`;

const EMAIL_QUERY = `SELECT STD_OR_MAIL, STD_DT_START, STD_DT_END, STD_EMAIL, STD_ID_LOCAT_TYPE, DT_LAST_UPDATE
FROM STD_EMAIL
WHERE STD_ID_PERSON = @employeeId`;

export class PeopleNetEmployeeAmbiguousError extends Error {
  constructor() {
    super("Hay más de una ficha para este empleado y sociedad en PeopleNet.");
    this.name = "PeopleNetEmployeeAmbiguousError";
  }
}

/** Returns the one employee row in the server-selected society, or null. */
export const getEmployeeById = async (
  employeeId: string,
  organization: Meta4Society,
): Promise<PeopleNetEmployeeRow | null> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("employeeId", sql.VarChar(64), employeeId)
    .input("organization", sql.VarChar(4), organization)
    .query<PeopleNetEmployeeRow>(EMPLOYEE_QUERY);
  if (result.recordset.length > 1) throw new PeopleNetEmployeeAmbiguousError();
  return result.recordset[0] ?? null;
};

/** Returns every email row for a person; presentation decides the order. */
export const getEmployeeEmailsByPersonId = async (
  employeeId: string,
): Promise<PeopleNetEmployeeEmailRow[]> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("employeeId", sql.VarChar(64), employeeId)
    .query<PeopleNetEmployeeEmailRow>(EMAIL_QUERY);
  return result.recordset;
};
