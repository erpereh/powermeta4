import { beforeEach, describe, expect, it, vi } from "vitest";

const { query, input } = vi.hoisted(() => ({
  query: vi.fn<(text: string) => Promise<{ recordset: Record<string, unknown>[] }>>(),
  input: vi.fn(),
}));

vi.mock("@/lib/peoplenet/client", () => {
  const request = { query, input };
  input.mockReturnValue(request);
  return {
    getPeopleNetPool: async () => ({ request: () => request }),
    PeopleNetConfigError: class extends Error {},
  };
});

import { loadHireCatalogs, searchHirePlaces } from "./catalog-queries";

// Independent literals: changes to these SELECTs require explicit user approval.
const COMMUNITY_SQL =
  "SELECT BASE_0.STD_ID_COUNTRY, ALIAS_1_0.STD_N_COUNTRYESP, BASE_0.STD_ID_GEO_DIV, ISNULL(BASE_0.STD_N_GEO_DIVESP,BASE_0.STD_N_GEO_DIVGEN), BASE_0.DT_LAST_UPDATE FROM STD_GEO_DIV BASE_0 LEFT JOIN STD_COUNTRY ALIAS_1_0 ON (BASE_0.STD_ID_COUNTRY=ALIAS_1_0.STD_ID_COUNTRY) ORDER BY BASE_0.STD_ID_COUNTRY ASC, BASE_0.STD_ID_GEO_DIV ASC";
const DEPARTMENT_SQL =
  "SELECT CSP_ID_DEPARTMENT, CSP_NM_DEPARTMENT, DT_LAST_UPDATE FROM M4CSP_DEPARTMENT";
const REFERENCE_SQL =
  "SELECT BASE_0.DT_END, BASE_0.DT_START, BASE_0.SCO_ID_REF_MOD, BASE_0.SCO_OR_REF_MOD, BASE_0.SCO_ID_WEEK_MDL, ISNULL(ALIAS_1_0.NM_REF_MODESP,ALIAS_1_0.NM_REF_MODENG), ALIAS_1_0.SCO_ID_REFMOD_GRP, BASE_0.DT_LAST_UPDATE FROM M4SCO_REF_W_MOD BASE_0 LEFT JOIN M4SCO_REF_MOD ALIAS_1_0 ON (BASE_0.SCO_ID_REF_MOD=ALIAS_1_0.SCO_ID_REF_MOD) ORDER BY BASE_0.SCO_ID_REF_MOD ASC, BASE_0.SCO_OR_REF_MOD ASC";

beforeEach(() => {
  query.mockReset();
  query.mockImplementation(async (text) => {
    if (text === COMMUNITY_SQL)
      return {
        recordset: [
          {
            STD_ID_COUNTRY: "724",
            STD_N_COUNTRYESP: "España",
            STD_ID_GEO_DIV: "13",
            "": "Madrid",
            DT_LAST_UPDATE: null,
          },
          {
            STD_ID_COUNTRY: "620",
            STD_N_COUNTRYESP: "Portugal",
            STD_ID_GEO_DIV: "13",
            "": "Porto",
            DT_LAST_UPDATE: null,
          },
          { STD_ID_COUNTRY: "", STD_ID_GEO_DIV: "13", "": "Invalid" },
        ],
      };
    if (text === DEPARTMENT_SQL)
      return {
        recordset: [
          { CSP_ID_DEPARTMENT: "0010", CSP_NM_DEPARTMENT: "Ventas", DT_LAST_UPDATE: null },
          { CSP_ID_DEPARTMENT: "0000", CSP_NM_DEPARTMENT: null, DT_LAST_UPDATE: null },
        ],
      };
    if (text === REFERENCE_SQL)
      return {
        recordset: [
          {
            DT_END: "2000-01-01",
            DT_START: "1999-01-01",
            SCO_ID_REF_MOD: "001",
            SCO_OR_REF_MOD: 1,
            SCO_ID_WEEK_MDL: "004",
            "": "Logística",
            SCO_ID_REFMOD_GRP: "G1",
            DT_LAST_UPDATE: null,
          },
          { SCO_ID_REF_MOD: "001", SCO_OR_REF_MOD: "02", SCO_ID_WEEK_MDL: "005", "": null },
          { SCO_ID_REF_MOD: "", SCO_OR_REF_MOD: 1, "": "Invalid" },
        ],
      };
    return { recordset: [] };
  });
});

describe("user-confirmed hire catalog SQL", () => {
  it("executes the three literal SELECTs and adapts unaliased PeopleNet rows", async () => {
    const catalogs = await loadHireCatalogs("CYC");
    const executed = query.mock.calls.map(([text]) => text);
    for (const sql of [COMMUNITY_SQL, DEPARTMENT_SQL, REFERENCE_SQL]) {
      expect(executed.filter((text) => text === sql)).toHaveLength(1);
    }
    expect(executed.some((text) => text.includes("SSP_FEC_EXTRAS"))).toBe(false);
    expect(catalogs.community).toEqual([
      { id: "724/13", name: "Madrid", detail: "España" },
      { id: "620/13", name: "Porto", detail: "Portugal" },
    ]);
    expect(catalogs.department).toEqual([
      { id: "0010", name: "Ventas" },
      { id: "0000", name: "0000" },
    ]);
    expect(catalogs.referenceModelWeek).toEqual([
      { id: "001/1", name: "Logística", detail: "Semana 004" },
      { id: "001/02", name: "001", detail: "Semana 005" },
    ]);
  });
});

describe("unique hire catalog options", () => {
  it("delivers one Department option per normalized ID, keeping the first row and order", async () => {
    query.mockImplementation(async (text) => ({
      recordset:
        text === DEPARTMENT_SQL
          ? [
              { CSP_ID_DEPARTMENT: 1001, CSP_NM_DEPARTMENT: "Primero", DT_LAST_UPDATE: null },
              { CSP_ID_DEPARTMENT: "1002", CSP_NM_DEPARTMENT: "Segundo" },
              { CSP_ID_DEPARTMENT: "1001", CSP_NM_DEPARTMENT: "Duplicado" },
              {
                CSP_ID_DEPARTMENT: " 1001 ",
                CSP_NM_DEPARTMENT: "Más reciente",
                DT_LAST_UPDATE: "2026-09-28",
              },
              { CSP_ID_DEPARTMENT: "01001", CSP_NM_DEPARTMENT: "ID distinto" },
            ]
          : [],
    }));

    const catalogs = await loadHireCatalogs("CYC");

    expect(query).toHaveBeenCalledWith(DEPARTMENT_SQL);
    expect(catalogs.department).toEqual([
      { id: "1001", name: "Primero" },
      { id: "1002", name: "Segundo" },
      { id: "01001", name: "ID distinto" },
    ]);
    expect(catalogs.department.filter((option) => option.id === "1001")).toHaveLength(1);
  });

  it("deduplicates other generic catalogs without merging or replacing option data", async () => {
    query.mockImplementation(async (text) => ({
      recordset: text.includes("FROM STD_COUNTRY")
        ? [
            { id: 724, name: "España", detail: "ES" },
            { id: "620", name: "Portugal", detail: "PT" },
            { id: " 724 ", name: "Duplicado", detail: "Otro detalle" },
            { id: "620", name: "Duplicado sin detalle" },
            { id: "0724", name: "ID distinto" },
            { id: " ", name: "Sin ID" },
          ]
        : [],
    }));

    const catalogs = await loadHireCatalogs("CYC");

    expect(catalogs.country).toEqual([
      { id: "724", name: "España", detail: "ES" },
      { id: "620", name: "Portugal", detail: "PT" },
      { id: "0724", name: "ID distinto" },
    ]);
  });

  it("deduplicates communities by the complete country/community key", async () => {
    query.mockImplementation(async (text) => ({
      recordset:
        text === COMMUNITY_SQL
          ? [
              { STD_ID_COUNTRY: 724, STD_ID_GEO_DIV: 13, "": "Madrid", STD_N_COUNTRYESP: "España" },
              {
                STD_ID_COUNTRY: "620",
                STD_ID_GEO_DIV: "13",
                "": "Porto",
                STD_N_COUNTRYESP: "Portugal",
              },
              {
                STD_ID_COUNTRY: " 724 ",
                STD_ID_GEO_DIV: "13",
                "": "Duplicado",
                STD_N_COUNTRYESP: "Otro",
              },
              { STD_ID_COUNTRY: "724", STD_ID_GEO_DIV: "14", "": "Otra comunidad" },
            ]
          : [],
    }));

    const catalogs = await loadHireCatalogs("CYC");

    expect(catalogs.community).toEqual([
      { id: "724/13", name: "Madrid", detail: "España" },
      { id: "620/13", name: "Porto", detail: "Portugal" },
      { id: "724/14", name: "Otra comunidad" },
    ]);
  });

  it("deduplicates reference models by the complete model/ordinal pair", async () => {
    query.mockImplementation(async (text) => ({
      recordset:
        text === REFERENCE_SQL
          ? [
              { SCO_ID_REF_MOD: "001", SCO_OR_REF_MOD: 1, SCO_ID_WEEK_MDL: "004", "": "Primero" },
              {
                SCO_ID_REF_MOD: "001",
                SCO_OR_REF_MOD: "2",
                SCO_ID_WEEK_MDL: "005",
                "": "Otro ordinal",
              },
              {
                SCO_ID_REF_MOD: " 001 ",
                SCO_OR_REF_MOD: " 1 ",
                SCO_ID_WEEK_MDL: "999",
                "": "Duplicado",
              },
              {
                SCO_ID_REF_MOD: "002",
                SCO_OR_REF_MOD: 1,
                SCO_ID_WEEK_MDL: "006",
                "": "Otro modelo",
              },
            ]
          : [],
    }));

    const catalogs = await loadHireCatalogs("CYC");

    expect(catalogs.referenceModelWeek).toEqual([
      { id: "001/1", name: "Primero", detail: "Semana 004" },
      { id: "001/2", name: "Otro ordinal", detail: "Semana 005" },
      { id: "002/1", name: "Otro modelo", detail: "Semana 006" },
    ]);
  });

  it("deduplicates contracts by the complete legal/internal pair", async () => {
    query.mockImplementation(async (text) => ({
      recordset: text.includes("FROM M4SSP_CONTRATO_LEG")
        ? [
            { legal: "100", legalName: "Indefinido", internal: "001", internalName: "Primero" },
            {
              legal: "100",
              legalName: "Indefinido",
              internal: "002",
              internalName: "Otro interno",
            },
            {
              legal: " 100 ",
              legalName: "Duplicado",
              internal: " 001 ",
              internalName: "Otro detalle",
            },
            { legal: "200", legalName: "Otro legal", internal: "001", internalName: "Interno" },
          ]
        : [],
    }));

    const catalogs = await loadHireCatalogs("CYC");

    expect(catalogs.contract).toEqual([
      { id: "100/001", name: "Indefinido", detail: "Primero" },
      { id: "100/002", name: "Indefinido", detail: "Otro interno" },
      { id: "200/001", name: "Otro legal", detail: "Interno" },
    ]);
  });

  it.each(["search", "selected"] as const)(
    "deduplicates %s places by the complete geographic path",
    async (mode) => {
      const ids = ["724/13/28/001", "620/13/28/001"];
      query.mockImplementation(async (text) => ({
        recordset: text.includes("FROM STD_GEO_PLACE")
          ? [
              { id: ids[0], name: "Madrid", detail: "España" },
              { id: ids[1], name: "Porto", detail: "Portugal" },
              { id: ` ${ids[0]} `, name: "Duplicado", detail: "Otro" },
            ]
          : [],
      }));

      const options =
        mode === "search"
          ? await searchHirePlaces("Madrid")
          : (await loadHireCatalogs("CYC", ids)).place;

      expect(options).toEqual([
        { id: ids[0], name: "Madrid", detail: "España" },
        { id: ids[1], name: "Porto", detail: "Portugal" },
      ]);
    },
  );
});
