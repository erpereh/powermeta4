import "server-only";

import sql from "mssql";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import type { Meta4Society } from "@/lib/meta4/societies";
import { getPeopleNetPool, PeopleNetConfigError } from "@/lib/peoplenet/client";

import {
  contractOptionId,
  HIRE_CATALOG_SOURCES,
  type HireCatalogOption,
  type HireCatalogs,
  type HireCatalogSource,
  type HireCatalogState,
} from "./catalogs";
import { Meta4HireError } from "./errors";

type CatalogRow = { id: unknown; name: unknown; detail?: unknown };

// Every query returns id/name(/detail). Only catalogs whose rows belong to one
// ID_ORGANIZATION filter by @organization (the active Meta4 society); the rest
// are shared by all societies (ID_ORGANIZATION = '0000').
const CATALOG_QUERIES: Record<
  Exclude<HireCatalogSource, "referenceModelWeek" | "contract" | "place">,
  string
> = {
  documentType: `
SELECT SSP_ID_TP_DOC AS id, SSP_NM_TP_DOCESP AS name
FROM M4SSP_LU_TP_DOC
ORDER BY SSP_ID_TP_DOC ASC`,
  country: `
SELECT STD_ID_COUNTRY AS id, STD_N_COUNTRYESP AS name, SSP_CODIGO_ISO AS detail
FROM STD_COUNTRY
ORDER BY STD_ID_COUNTRY ASC`,
  nationality: `
SELECT STD_ID_COUNTRY AS id, ISNULL(STD_N_NACIONALESP, STD_N_COUNTRYESP) AS name,
  STD_N_COUNTRYESP AS detail
FROM STD_COUNTRY
ORDER BY STD_ID_COUNTRY ASC`,
  community: `
SELECT BASE_0.STD_ID_COUNTRY + '/' + BASE_0.STD_ID_GEO_DIV AS id,
  ISNULL(BASE_0.STD_N_GEO_DIVESP, BASE_0.STD_N_GEO_DIVGEN) AS name,
  ALIAS_1_0.STD_N_COUNTRYESP AS detail
FROM STD_GEO_DIV BASE_0
LEFT JOIN STD_COUNTRY ALIAS_1_0 ON (BASE_0.STD_ID_COUNTRY = ALIAS_1_0.STD_ID_COUNTRY)
ORDER BY BASE_0.STD_ID_COUNTRY ASC, BASE_0.STD_ID_GEO_DIV ASC`,
  province: `
SELECT BASE_0.STD_ID_COUNTRY + '/' + BASE_0.STD_ID_GEO_DIV + '/' + BASE_0.STD_ID_SUB_GEO_DIV AS id,
  ISNULL(BASE_0.STD_N_SUB_GEO_ESP, BASE_0.STD_N_SUB_GEO_GEN) AS name,
  CONCAT(ISNULL(ALIAS_1_0.STD_N_GEO_DIVESP, ALIAS_1_0.STD_N_GEO_DIVGEN), ' · ',
    ALIAS_2_0.STD_N_COUNTRYESP) AS detail
FROM STD_SUB_GEO_DIV BASE_0
LEFT JOIN STD_GEO_DIV ALIAS_1_0 ON (BASE_0.STD_ID_COUNTRY = ALIAS_1_0.STD_ID_COUNTRY
  AND BASE_0.STD_ID_GEO_DIV = ALIAS_1_0.STD_ID_GEO_DIV)
LEFT JOIN STD_COUNTRY ALIAS_2_0 ON (ALIAS_1_0.STD_ID_COUNTRY = ALIAS_2_0.STD_ID_COUNTRY)
ORDER BY BASE_0.STD_ID_COUNTRY ASC, BASE_0.STD_ID_GEO_DIV ASC, BASE_0.STD_ID_SUB_GEO_DIV ASC`,
  gender: `
SELECT STD_ID_GENDER AS id, ISNULL(STD_N_GENDERESP, STD_N_GENDERENG) AS name
FROM STD_LU_GENDER
ORDER BY STD_ID_GENDER ASC`,
  maritalStatus: `
SELECT STD_ID_MARITAL_ST AS id, ISNULL(STD_MARITAL_STESP, STD_MARITAL_STENG) AS name
FROM STD_LU_MAR_STAT
ORDER BY STD_ID_MARITAL_ST ASC`,
  atradiusJob: `
SELECT CSP_ID_ATRADIUS_JOB AS id, CSP_N_ATRADIUS_JOB AS name
FROM M4CSP_ATRADIUS_JOB
WHERE ID_ORGANIZATION = @organization
ORDER BY CSP_ID_ATRADIUS_JOB ASC`,
  atradiusCategory: `
SELECT CSP_ID_CATEG_ATRADIUS AS id, CSP_NM_CATEG_ATRADIUS AS name
FROM M4CSP_CATEG_ATRADIUS
WHERE ID_ORGANIZATION = @organization
ORDER BY CSP_ID_CATEG_ATRADIUS ASC`,
  department: `
SELECT CSP_ID_DEPARTMENT AS id, CSP_NM_DEPARTMENT AS name
FROM M4CSP_DEPARTMENT
WHERE ID_ORGANIZATION = @organization
ORDER BY CSP_ID_DEPARTMENT ASC`,
  locationType: `
SELECT STD_ID_LOCAT_TYPE AS id, ISNULL(STD_N_LOCAT_TYESP, STD_N_LOCAT_TYENG) AS name
FROM STD_LU_LOCAT_TYPE
ORDER BY STD_ID_LOCAT_TYPE ASC`,
  roadType: `
SELECT SSP_ID_SIGLA_DOMIC AS id, ISNULL(SSP_N_SIGLA_DOESP, SSP_N_SIGLA_DOGEN) AS name
FROM M4SSP_ID_SIGLA_DOM
ORDER BY SSP_ID_SIGLA_DOMIC ASC`,
  legalEntity: `
SELECT STD_ID_LEG_ENT AS id, STD_N_LEG_ENT AS name
FROM STD_LEG_ENT
WHERE ID_ORGANIZATION = @organization
ORDER BY STD_ID_LEG_ENT ASC`,
  // Organisation structures: open-ended rows (end 4000-01-01) already started.
  job: `
SELECT STD_ID_JOB_CODE AS id, ISNULL(STD_N_JOB_CODEESP, STD_N_JOB_CODEENG) AS name
FROM STD_JOB
WHERE ID_ORGANIZATION = @organization AND STD_DT_END >= {d '4000-01-01'} AND STD_DT_START <= CAST(GETDATE() AS date)
  AND (STD_ID_JOB_CODE <> 'ROOT')
ORDER BY STD_KEY_JOB DESC, ISNULL(STD_N_JOB_CODEESP, STD_N_JOB_CODEENG) ASC`,
  // PeopleNet's lookup without the display-only joins (status, complement,
  // work location); the history joins stay because they filter.
  position: `
SELECT BASE_0.SCO_ID_POSITION AS id,
  ISNULL(BASE_0.SCO_NM_POSITIONESP, BASE_0.SCO_NM_POSITIONENG) AS name,
  CONCAT(ISNULL(ALIAS_2_0.STD_N_WORK_UNITESP, ALIAS_2_0.STD_N_WORK_UNITENG), ' · ',
    ISNULL(ALIAS_1_0.STD_N_JOB_CODEESP, ALIAS_1_0.STD_N_JOB_CODEENG)) AS detail
FROM M4SCO_POSITION BASE_0
LEFT JOIN M4SCO_H_POSITION ALIAS_4_0 ON ((ALIAS_4_0.ID_ORGANIZATION = @organization)
  AND BASE_0.SCO_ID_POSITION = ALIAS_4_0.SCO_ID_POSITION)
LEFT JOIN M4SCO_H_POS_COMP ALIAS_6_0 ON ((ALIAS_6_0.ID_ORGANIZATION = @organization)
  AND BASE_0.SCO_ID_POSITION = ALIAS_6_0.SCO_ID_POSITION)
LEFT JOIN STD_JOB ALIAS_1_0 ON ((ALIAS_1_0.STD_DT_START <= {ts '4000-01-01 00:00:00'})
  AND (ALIAS_1_0.STD_DT_END >= CAST(GETDATE() AS date))
  AND (ALIAS_1_0.ID_ORGANIZATION = @organization)
  AND BASE_0.SCO_ID_JOB_CODE = ALIAS_1_0.STD_ID_JOB_CODE)
LEFT JOIN STD_WORK_UNIT ALIAS_2_0 ON ((ALIAS_2_0.STD_DT_START <= {ts '4000-01-01 00:00:00'})
  AND (ALIAS_2_0.STD_DT_END >= CAST(GETDATE() AS date))
  AND (ALIAS_2_0.ID_ORGANIZATION = @organization)
  AND BASE_0.SCO_ID_WORK_UNIT = ALIAS_2_0.STD_ID_WORK_UNIT)
WHERE BASE_0.ID_ORGANIZATION = @organization
  AND (BASE_0.SCO_ID_POSITION <> 'ROOT'
    AND ALIAS_4_0.SCO_DT_START <= CAST(GETDATE() AS date)
    AND ALIAS_4_0.SCO_DT_END >= CAST(GETDATE() AS date)
    AND ALIAS_6_0.SCO_DT_START <= CAST(GETDATE() AS date)
    AND ALIAS_6_0.SCO_DT_END >= CAST(GETDATE() AS date))
  AND (BASE_0.SCO_DT_END >= CAST(GETDATE() AS date)
    AND BASE_0.SCO_DT_START <= {ts '4000-01-01 00:00:00'})
ORDER BY BASE_0.SCO_ID_POSITION ASC`,
  workUnit: `
SELECT BASE_0.STD_ID_WORK_UNIT AS id,
  ISNULL(BASE_0.STD_N_WORK_UNITESP, BASE_0.STD_N_WORK_UNITENG) AS name,
  ISNULL(ALIAS_1_0.STD_N_WU_TYPEESP, ALIAS_1_0.STD_N_WU_TYPEENG) AS detail
FROM STD_WORK_UNIT BASE_0
LEFT JOIN STD_LU_WU_TYPE ALIAS_1_0 ON (BASE_0.STD_ID_WU_TYPE = ALIAS_1_0.STD_ID_WU_TYPE)
WHERE BASE_0.ID_ORGANIZATION = @organization
  AND BASE_0.STD_DT_END >= {d '4000-01-01'} AND BASE_0.STD_DT_START <= CAST(GETDATE() AS date)
  AND (BASE_0.STD_ID_WORK_UNIT <> 'ROOT')
ORDER BY BASE_0.STD_ID_WORK_UNIT ASC`,
  workLocation: `
SELECT BASE_0.STD_ID_WORK_LOCAT AS id, BASE_0.STD_WORK_LOCESP AS name,
  ISNULL(ALIAS_1_0.STD_N_WL_TYPEESP, ALIAS_1_0.STD_N_WL_TYPEENG) AS detail
FROM STD_WORK_LOCATION BASE_0
LEFT JOIN STD_LU_WL_TYPE ALIAS_1_0 ON (BASE_0.STD_ID_WL_TYPE = ALIAS_1_0.STD_ID_WL_TYPE)
WHERE BASE_0.ID_ORGANIZATION = @organization
  AND BASE_0.STD_DT_END >= {d '4000-01-01'} AND BASE_0.STD_DT_START <= CAST(GETDATE() AS date)
  AND (BASE_0.STD_ID_WORK_LOCAT <> 'ROOT')
ORDER BY BASE_0.STD_ID_WORK_LOCAT ASC`,
  category: `
SELECT SSP_ID_CATEGORIA AS id, SSP_NM_CATEGORESP AS name
FROM M4SSP_CATEGORIAS
WHERE ID_ORGANIZATION = @organization
ORDER BY SSP_ID_CATEGORIA ASC`,
  costCenter: `
SELECT SSP_ID_CENT_COSTO AS id, SSP_NM_CENT_COESP AS name
FROM M4SSP_CENTR_COSTO
WHERE ID_ORGANIZATION = @organization
ORDER BY SSP_ID_CENT_COSTO ASC`,
  startReason: `
SELECT STD_ID_HRP_SRT_REA AS id, ISNULL(STD_START_REAESP, STD_START_REAENG) AS name
FROM STD_LU_HRP_BEG_RE
ORDER BY STD_ID_HRP_SRT_REA ASC`,
  structure: `
SELECT ID_ESTRUCTURA AS id, N_ESTRUCTURA AS name
FROM M4CYC_ESTRUCTURA
WHERE ID_ORGANIZATION = @organization
ORDER BY ID_ESTRUCTURA ASC`,
  functionalWorkCenter: `
SELECT CSP_ID_WORK_FUNCTIONAL AS id, CSP_N_WORK_FUNESP AS name, CSP_CIUDAD AS detail
FROM M4CSP_WORK_FUNCTIONAL
WHERE ID_ORGANIZATION = @organization
ORDER BY CSP_ID_WORK_FUNCTIONAL ASC`,
  currency: `
SELECT ID_CURRENCY AS id, ISNULL(NM_CURRENCYESP, NM_CURRENCYENG) AS name
FROM M4RCH_CURRENCY
WHERE (DT_START <= GETDATE() AND ((DT_END IS NULL) OR (DT_END >= GETDATE())))
ORDER BY ID_CURRENCY ASC`,
  paymentType: `
SELECT SCO_ID_PAYM_TYPE AS id, ISNULL(SOC_NM_PAYM_TYPESP, SOC_NM_PAYM_TYPENG) AS name
FROM M4SCO_PAYMENT_TYPE
ORDER BY SCO_ID_PAYM_TYPE ASC`,
  companyBank: `
SELECT SCO_ID_COMP_BANK AS id, SCO_NM_COMP_BANK AS name, SCO_GB_BANK AS detail
FROM M4SCO_COMPANY_BANK
WHERE ID_ORGANIZATION = @organization
ORDER BY SCO_ID_COMP_BANK ASC`,
  agreement: `
SELECT SSP_ID_CONVENIO AS id, SSP_NM_CONVENIESP AS name
FROM M4SSP_CONVENIOS
WHERE ID_ORGANIZATION = @organization
ORDER BY SSP_ID_CONVENIO ASC`,
  adjustmentType: `
SELECT SCO_ID_TYPE_ADJUST AS id, ISNULL(SCO_NM_TYP_ADJESP, SCO_NM_TYP_ADJENG) AS name
FROM M4SCO_X_TYPE_ADJ
ORDER BY SCO_ID_TYPE_ADJUST ASC`,
  salaryType: `
SELECT SSP_ID_TP_SALARIO AS id, SSP_NM_TP_SALAESP AS name
FROM M4SSP_TP_SALARIO
ORDER BY SSP_ID_TP_SALARIO ASC`,
  union: `
SELECT SSP_ID_SINDICATO AS id, SSP_NM_SINDICAESP AS name
FROM M4SSP_SINDICATOS
ORDER BY SSP_ID_SINDICATO ASC`,
  irpfType: `
SELECT SSP_ID_TP_IRPF AS id, SSP_NM_TP_IRPFESP AS name
FROM M4SSP_TP_IRPF
ORDER BY SSP_ID_TP_IRPF ASC`,
  perceptionKey: `
SELECT SSP_ID_CLAVE_PERCE AS id, SSP_NM_CLAV_PEESP AS name
FROM M4SSP_CLAVE_PERCEP
ORDER BY SSP_ID_CLAVE_PERCE ASC`,
  variableCompensationMode: `
SELECT CSP_TP_MOD_VAR AS id, CSP_NM_MOD_VAR AS name
FROM M4CSP_MOD_VAR
WHERE ID_ORGANIZATION = @organization
ORDER BY CSP_TP_MOD_VAR ASC`,
  tc1Header: `
SELECT SSP_ID_CABEC_TC1 AS id, SSP_NM_CABEC_TESP AS name, SSP_NUM_CUENTA_COT AS detail
FROM M4SSP_CABEC_TC1
WHERE ID_ORGANIZATION = @organization
ORDER BY SSP_ID_CABEC_TC1 ASC`,
  tariffGroup: `
SELECT SSP_ID_GRUP_TARIFA AS id, SSP_NM_GRUP_TAESP AS name
FROM M4SSP_GRUPO_TARIFA
ORDER BY SSP_ID_GRUP_TARIFA ASC`,
  ssOccupation: `
SELECT SSP_ID_OCUPACION AS id, ISNULL(SSP_N_OCUPACIOESP, SSP_N_OCUPACIOENG) AS name
FROM M4SSP_OCUPACION
ORDER BY SSP_ID_OCUPACION ASC`,
  ssAgreement: `
SELECT SSP_ID_CONV_SS AS id, ISNULL(SSP_NM_CONV_SSESP, SSP_NM_CONV_SSENG) AS name
FROM M4SSP_CONV_SS
ORDER BY SSP_ID_CONV_SS ASC`,
  laborRelation: `
SELECT SSP_ID_REL_LAB AS id, ISNULL(SSP_N_REL_LABESP, SSP_N_REL_LABENG) AS name
FROM M4SSP_REL_LAB
ORDER BY SSP_ID_REL_LAB ASC`,
  reductionReason: `
SELECT SSP_ID_MOTIV_REDUC AS id, SSP_N_MOTIV_REESP AS name
FROM M4SSP_MOTIV_REDUC
WHERE (SSP_OCULTAR_LISTADO <> 1)
ORDER BY SSP_ID_MOTIV_REDUC ASC`,
  substitutionCause: `
SELECT SSP_ID_CAUSA_SUST AS id, ISNULL(SSP_N_CAUSA_SUESP, SSP_N_CAUSA_SUENG) AS name
FROM M4SSP_CAUSAS_SUST
ORDER BY SSP_ID_CAUSA_SUST ASC`,
  unemploymentCondition: `
SELECT SSP_ID_COND_DESEMP AS id, ISNULL(SSP_N_COND_DESESP, SSP_N_COND_DESENG) AS name
FROM M4SSP_COND_DESEMPL
WHERE (SSP_VISIBLE_AFI = 0)
ORDER BY SSP_ID_COND_DESEMP ASC`,
  specialLaborRelation: `
SELECT SSP_ID_REL_LAB_ESP AS id, ISNULL(SSP_N_REL_LAB_ESP1, SSP_N_REL_LAB_ENG) AS name
FROM M4SSP_REL_LAB_ESP
ORDER BY SSP_ID_REL_LAB_ESP ASC`,
  socialExclusion: `
SELECT SSP_ID_EXCL_SOCIAL AS id, SSP_N_EXCL_SOCESP AS name
FROM M4SSP_EXCLU_SOCIAL
ORDER BY SSP_ID_EXCL_SOCIAL ASC`,
};

const CONTRACT_QUERY = `
SELECT BASE_0.SSP_ID_CONT_LEGAL AS legal, BASE_0.SSP_NM_CONT_LEESP AS legalName,
  ALIAS_1_0.SSP_ID_CONT_INTERN AS internal, ALIAS_1_0.SSP_NM_CONT_INESP AS internalName
FROM M4SSP_CONTRATO_LEG BASE_0
LEFT JOIN M4SSP_CONTRATO_INT ALIAS_1_0 ON (BASE_0.SSP_ID_CONT_LEGAL = ALIAS_1_0.SSP_ID_CONT_LEGAL)
WHERE ((ALIAS_1_0.SSP_OCULTAR_LISTADO = '0'))
ORDER BY BASE_0.SSP_ID_CONT_LEGAL ASC, ALIAS_1_0.SSP_ID_CONT_INTERN ASC`;

type ContractRow = { legal: unknown; legalName: unknown; internal: unknown; internalName: unknown };

const REFERENCE_MODEL_WEEK_QUERY = `
SELECT BASE_0.SCO_ID_REF_MOD AS model, BASE_0.SCO_OR_REF_MOD AS sequence,
  BASE_0.SCO_ID_WEEK_MDL AS week, ISNULL(ALIAS_1_0.NM_REF_MODESP, ALIAS_1_0.NM_REF_MODENG) AS name
FROM M4SCO_REF_W_MOD BASE_0
LEFT JOIN M4SCO_REF_MOD ALIAS_1_0 ON (BASE_0.SCO_ID_REF_MOD = ALIAS_1_0.SCO_ID_REF_MOD)
ORDER BY BASE_0.SCO_ID_REF_MOD ASC, BASE_0.SCO_OR_REF_MOD ASC`;

// STD_GEO_PLACE has ~36,000 rows: the form searches it and launches only
// reload the places actually chosen.
const PLACE_SELECT = `
SELECT TOP (@limit)
  BASE_0.STD_ID_COUNTRY + '/' + BASE_0.STD_ID_GEO_DIV + '/' + BASE_0.STD_ID_SUB_GEO_DIV
    + '/' + BASE_0.STD_ID_GEO_PLACE AS id,
  ISNULL(BASE_0.STD_N_GEO_PLACESP, BASE_0.STD_N_GEO_PLACGEN) AS name,
  CONCAT(ISNULL(ALIAS_2_0.STD_N_SUB_GEO_ESP, ALIAS_2_0.STD_N_SUB_GEO_GEN), ' · ',
    ISNULL(ALIAS_3_0.STD_N_GEO_DIVESP, ALIAS_3_0.STD_N_GEO_DIVGEN), ' · ',
    ALIAS_1_0.STD_N_COUNTRYESP) AS detail
FROM STD_GEO_PLACE BASE_0
LEFT JOIN STD_COUNTRY ALIAS_1_0 ON (BASE_0.STD_ID_COUNTRY = ALIAS_1_0.STD_ID_COUNTRY)
LEFT JOIN STD_SUB_GEO_DIV ALIAS_2_0 ON (BASE_0.STD_ID_COUNTRY = ALIAS_2_0.STD_ID_COUNTRY
  AND BASE_0.STD_ID_GEO_DIV = ALIAS_2_0.STD_ID_GEO_DIV
  AND BASE_0.STD_ID_SUB_GEO_DIV = ALIAS_2_0.STD_ID_SUB_GEO_DIV)
LEFT JOIN STD_GEO_DIV ALIAS_3_0 ON (BASE_0.STD_ID_COUNTRY = ALIAS_3_0.STD_ID_COUNTRY
  AND BASE_0.STD_ID_GEO_DIV = ALIAS_3_0.STD_ID_GEO_DIV)`;

const PLACE_ORDER = `
ORDER BY BASE_0.STD_ID_COUNTRY ASC, BASE_0.STD_ID_GEO_DIV ASC,
  BASE_0.STD_ID_SUB_GEO_DIV ASC, BASE_0.STD_ID_GEO_PLACE ASC`;

export const PLACE_SEARCH_MIN_LENGTH = 2;
const PLACE_SEARCH_LIMIT = 50;

/** LIKE pattern for user text: %, _, [ and the escape character match literally. */
const likeContains = (text: string): string =>
  `%${text.replace(/[!%_[]/g, (character) => `!${character}`)}%`;

type ReferenceModelRow = { model: unknown; sequence: unknown; week: unknown; name: unknown };

const readText = (value: unknown): string => {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  return "";
};

const toOptions = (rows: readonly CatalogRow[]): HireCatalogOption[] =>
  rows.flatMap((row) => {
    const id = readText(row.id);
    if (!id) return [];
    const detail = readText(row.detail);
    return [{ id, name: readText(row.name) || id, ...(detail ? { detail } : {}) }];
  });

/** One option per model + week order, as PeopleNet lists them ("001/1", "001/2"...). */
const toReferenceModelOptions = (rows: readonly ReferenceModelRow[]): HireCatalogOption[] =>
  rows.flatMap((row) => {
    const model = readText(row.model);
    const sequence = readText(row.sequence);
    if (!model || !sequence) return [];
    const week = readText(row.week);
    return [
      {
        id: `${model}/${sequence}`,
        name: readText(row.name) || model,
        ...(week ? { detail: `Semana ${week}` } : {}),
      },
    ];
  });

/** One option per legal + internal contract pair; name is the legal one, detail the internal one. */
const toContractOptions = (rows: readonly ContractRow[]): HireCatalogOption[] =>
  rows.flatMap((row) => {
    const legalContract = readText(row.legal);
    const internalContract = readText(row.internal);
    if (!legalContract || !internalContract) return [];
    return [
      {
        id: contractOptionId({ legalContract, internalContract }),
        name: readText(row.legalName) || legalContract,
        detail: readText(row.internalName) || internalContract,
      },
    ];
  });

/** Places matching a name or an ID, for the Población combobox. */
export const searchHirePlaces = async (query: string): Promise<HireCatalogOption[]> => {
  const text = query.trim().slice(0, 60);
  if (text.length < PLACE_SEARCH_MIN_LENGTH) return [];
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("limit", sql.Int, PLACE_SEARCH_LIMIT)
    .input("text", sql.NVarChar(128), likeContains(text))
    .query<CatalogRow>(
      `${PLACE_SELECT}
WHERE ISNULL(BASE_0.STD_N_GEO_PLACESP, BASE_0.STD_N_GEO_PLACGEN) COLLATE Latin1_General_CI_AI
    LIKE @text ESCAPE '!'
  OR BASE_0.STD_ID_GEO_PLACE COLLATE Latin1_General_CI_AI LIKE @text ESCAPE '!'${PLACE_ORDER}`,
    );
  return toOptions(result.recordset);
};

const loadPlacesById = async (
  pool: sql.ConnectionPool,
  placeIds: readonly string[],
): Promise<HireCatalogOption[]> => {
  const unique = [...new Set(placeIds.filter(Boolean))];
  if (unique.length === 0) return [];
  const request = pool.request().input("limit", sql.Int, unique.length);
  unique.forEach((id, index) => request.input(`place${index}`, sql.NVarChar(128), id));
  const list = unique.map((_, index) => `@place${index}`).join(", ");
  const result = await request.query<CatalogRow>(
    `${PLACE_SELECT}
WHERE BASE_0.STD_ID_COUNTRY + '/' + BASE_0.STD_ID_GEO_DIV + '/' + BASE_0.STD_ID_SUB_GEO_DIV
  + '/' + BASE_0.STD_ID_GEO_PLACE IN (${list})${PLACE_ORDER}`,
  );
  return toOptions(result.recordset);
};

/** Record with exactly `keys`; the only place the key set is asserted. */
const recordOf = <K extends string, V>(keys: readonly K[], valueOf: (key: K) => V): Record<K, V> =>
  Object.fromEntries(keys.map((key) => [key, valueOf(key)])) as Record<K, V>;

const isQuerySource = (source: HireCatalogSource): source is keyof typeof CATALOG_QUERIES =>
  Object.hasOwn(CATALOG_QUERIES, source);

/**
 * Loads every catalog for the society. `place` only holds `placeIds`: the
 * form searches places on demand and launches validate the chosen ones.
 */
export const loadHireCatalogs = async (
  society: Meta4Society,
  placeIds: readonly string[] = [],
): Promise<HireCatalogs> => {
  const pool = await getPeopleNetPool();
  const load = async (source: HireCatalogSource): Promise<HireCatalogOption[]> => {
    if (isQuerySource(source)) {
      const result = await pool
        .request()
        .input("organization", sql.VarChar(4), society)
        .query<CatalogRow>(CATALOG_QUERIES[source]);
      return toOptions(result.recordset);
    }
    if (source === "place") return loadPlacesById(pool, placeIds);
    if (source === "contract") {
      return toContractOptions((await pool.request().query<ContractRow>(CONTRACT_QUERY)).recordset);
    }
    return toReferenceModelOptions(
      (await pool.request().query<ReferenceModelRow>(REFERENCE_MODEL_WEEK_QUERY)).recordset,
    );
  };
  const loaded = await Promise.all(HIRE_CATALOG_SOURCES.map(load));
  return recordOf(
    HIRE_CATALOG_SOURCES,
    (source) => loaded[HIRE_CATALOG_SOURCES.indexOf(source)] ?? [],
  );
};

const logCatalogFailure = (error: unknown): void => {
  console.error("[peoplenet] hire catalogs failed", {
    name: error instanceof Error ? error.name : "unknown",
    message: error instanceof Error ? error.message : String(error),
  });
};

/** Same catalogs the form showed, reloaded for the society of the operation. */
export const loadHireCatalogsForLaunch = async (
  society: Meta4Society,
  placeIds: readonly string[],
): Promise<HireCatalogs> => {
  try {
    return await loadHireCatalogs(society, placeIds);
  } catch (error) {
    logCatalogFailure(error);
    throw new Meta4HireError(
      "META4_HIRE_CATALOG_UNAVAILABLE",
      "No se han podido comprobar los catálogos del alta en PeopleNet.",
    );
  }
};

export const loadHireCatalogState = async (
  authSession: ResolvedAuthSession,
): Promise<HireCatalogState> => {
  try {
    const context = await getMeta4OperationalContext(authSession);
    const catalogs = await loadHireCatalogs(context.society);
    return { status: "ready", society: context.society, catalogs };
  } catch (error) {
    logCatalogFailure(error);
    return {
      status: "unavailable",
      message:
        error instanceof PeopleNetConfigError
          ? "La conexión a PeopleNet no está configurada."
          : "No se han podido cargar los catálogos de PeopleNet.",
    };
  }
};
