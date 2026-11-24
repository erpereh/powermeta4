import "server-only";

import sql from "mssql";

import type { Meta4Society } from "@/lib/meta4/societies";
import { getPeopleNetPool } from "@/lib/peoplenet/client";

import { bankAccountParts } from "../cells";
import type { HirePerson } from "../types";
import type { HireLookups } from "./plan";

type NameRow = { name: string | null };

const first = async (
  statement: string,
  inputs: readonly [string, string][],
): Promise<string | null> => {
  const pool = await getPeopleNetPool();
  const request = pool.request();
  for (const [name, value] of inputs) request.input(name, sql.VarChar(60), value);
  const result = await request.query<NameRow>(statement);
  const value = result.recordset[0]?.name;
  return value === null || value === undefined ? null : String(value).trim() || null;
};

/** `country/community/province/place` IDs of the form's geographic options. */
const geoPath = (value: string): string[] => value.split("/").filter(Boolean);

/**
 * Names and codes Meta4 reads while saving a hire (read-only SELECTs):
 * - job or position name for the role (SHCO_SET_ROLE_NAME),
 * - place, province and country names for SCO_GB_ADDRESS,
 * - BIC of a Spanish bank (SRSP_DEDUCIR_BIC, SSP_SOLICITAR_BIC = 1).
 * Only catalog values; no person data is read.
 */
export const loadHireLookups = async (
  person: HirePerson,
  society: Meta4Society,
): Promise<HireLookups> => {
  const [country = "", community = "", province = "", place = ""] = geoPath(person.city);
  const bank = bankAccountParts(person);
  const spanishBank = bank.iban.toUpperCase().startsWith("ES") ? bank.bank : "";
  const [jobName, positionName, placeName, provinceName, countryName, bic] = await Promise.all([
    person.positionChoice !== "position" && person.job
      ? first(
          "SELECT TOP 1 STD_N_JOB_CODEESP AS name FROM STD_JOB WHERE STD_ID_JOB_CODE = @job AND ID_ORGANIZATION = @society",
          [
            ["job", person.job],
            ["society", society],
          ],
        )
      : Promise.resolve(null),
    person.positionChoice === "position" && person.position
      ? first(
          "SELECT TOP 1 SCO_NM_POSITIONESP AS name FROM M4SCO_POSITION WHERE SCO_ID_POSITION = @position AND ID_ORGANIZATION = @society",
          [
            ["position", person.position],
            ["society", society],
          ],
        )
      : Promise.resolve(null),
    place
      ? first(
          "SELECT TOP 1 STD_N_GEO_PLACESP AS name FROM STD_GEO_PLACE WHERE STD_ID_COUNTRY = @country AND STD_ID_GEO_DIV = @community AND STD_ID_SUB_GEO_DIV = @province AND STD_ID_GEO_PLACE = @place",
          [
            ["country", country],
            ["community", community],
            ["province", province],
            ["place", place],
          ],
        )
      : Promise.resolve(null),
    province
      ? first(
          "SELECT TOP 1 STD_N_SUB_GEO_ESP AS name FROM STD_SUB_GEO_DIV WHERE STD_ID_COUNTRY = @country AND STD_ID_GEO_DIV = @community AND STD_ID_SUB_GEO_DIV = @province",
          [
            ["country", country],
            ["community", community],
            ["province", province],
          ],
        )
      : Promise.resolve(null),
    country
      ? first(
          "SELECT TOP 1 STD_N_COUNTRYESP AS name FROM STD_COUNTRY WHERE STD_ID_COUNTRY = @country",
          [["country", country]],
        )
      : Promise.resolve(null),
    spanishBank
      ? first(
          "SELECT TOP 1 SSP_BIC_CODE AS name FROM M4SSP_BANK_BIC_CODES WHERE SSP_ID_BANK = @bank",
          [["bank", spanishBank]],
        )
      : Promise.resolve(null),
  ]);
  return { jobName, positionName, placeName, provinceName, countryName, bic };
};

/**
 * `SRCO_CHECK_DUPLICITY_SELECT`: people already saved with the same global name.
 * Meta4 only warns (Aceptar o cancelar); the caller decides.
 */
export const countPeopleWithGlobalName = async (globalName: string): Promise<number> => {
  const pool = await getPeopleNetPool();
  const request = pool.request();
  request.input("name", sql.VarChar(254), globalName);
  const result = await request.query<{ total: number }>(
    "SELECT COUNT(*) AS total FROM STD_PERSON WHERE SCO_GB_NAME = @name",
  );
  return Number(result.recordset[0]?.total ?? 0);
};
