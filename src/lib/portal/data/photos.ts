import "server-only";

import sql from "mssql";
import { getPeopleNetPool } from "@/lib/peoplenet/client";
import type { Meta4Society } from "@/lib/meta4/societies";
import { assertReadOnlySql } from "../peoplenet/query";
import { isOrgEmployeeId } from "../organization-navigation";
import { PortalDataAmbiguousError } from "./errors";
import {
  decodePortalPhoto,
  MAX_PHOTO_BYTES,
  resolvePhotoStorage,
  type PhotoColumn,
  type PortalPhoto,
} from "./photos-core";

export class PortalPhotoContractError extends Error {
  constructor() {
    super("Pendiente de validar el almacenamiento de STD_PERSON.SCO_BLOB_PHOTO (P08).");
    this.name = "PortalPhotoContractError";
  }
}

const SCHEMA = `SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, DATA_TYPE
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME IN ('STD_PERSON', 'STD_PERSON1')
  AND COLUMN_NAME IN ('ID_ORGANIZATION', 'STD_ID_PERSON', 'SCO_BLOB_PHOTO')`;
const MEMBERSHIP = `SELECT DISTINCT ID_EMPLEADO FROM M4ORO_EMPLEADOS
WHERE ID_ORGANIZATION = @organization AND ID_EMPLEADO = @employeeId AND COMPUTA = '1'`;

/** CSP_QUIEN_ES_QUIEN!CSP_FOTO_ORO: matrícula en STD_PERSON, sin fotos en disco ni caché. */
export const getPortalPhoto = async (
  society: Meta4Society,
  employeeId: string,
): Promise<PortalPhoto | null> => {
  if (!isOrgEmployeeId(employeeId)) return null;
  const pool = await getPeopleNetPool();
  const request = () =>
    pool
      .request()
      .input("organization", sql.VarChar(4), society)
      .input("employeeId", sql.VarChar(20), employeeId);
  assertReadOnlySql(MEMBERSHIP);
  const members = (await request().query<{ ID_EMPLEADO: string }>(MEMBERSHIP)).recordset;
  if (members.length === 0) return null;
  if (members.length !== 1) throw new PortalDataAmbiguousError();
  assertReadOnlySql(SCHEMA);
  const storage = resolvePhotoStorage((await pool.request().query<PhotoColumn>(SCHEMA)).recordset);
  if (!storage) throw new PortalPhotoContractError();
  // Tabla y columna están en una lista cerrada, comprobada contra el esquema antes de leer el BLOB.
  // La clave de persona y sociedad enlaza también la tabla secundaria de campos largos.
  const photoColumn = storage === "STD_PERSON" ? "P.SCO_BLOB_PHOTO" : "B.SCO_BLOB_PHOTO";
  const statement = `SELECT CASE WHEN DATALENGTH(${photoColumn}) <= @maxBytes THEN ${photoColumn} ELSE NULL END AS PHOTO
FROM dbo.STD_PERSON P ${storage === "STD_PERSON" ? "" : "JOIN dbo.STD_PERSON1 B ON B.ID_ORGANIZATION = P.ID_ORGANIZATION AND B.STD_ID_PERSON = P.STD_ID_PERSON"}
WHERE P.ID_ORGANIZATION = @organization AND P.STD_ID_PERSON = @employeeId
  AND EXISTS (SELECT 1 FROM M4ORO_EMPLEADOS E WHERE E.ID_ORGANIZATION = @organization
    AND E.ID_EMPLEADO = P.STD_ID_PERSON AND E.COMPUTA = '1')`;
  assertReadOnlySql(statement);
  const photos = (
    await request()
      .input("maxBytes", sql.Int, MAX_PHOTO_BYTES)
      .query<{ PHOTO: Buffer | null }>(statement)
  ).recordset;
  if (photos.length > 1) throw new PortalDataAmbiguousError();
  return decodePortalPhoto(photos[0]?.PHOTO ?? null);
};
