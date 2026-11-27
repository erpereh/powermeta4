import { describe, expect, it } from "vitest";

import { END_OF_TIME } from "./fields";
import { planJobChange, previousDay, sliceAt, type JobChangePlanInput } from "./plan";
import type { JobChangeRequest, JobChangeSituation } from "./types";

const slice = (value: string, startDate = "2024-01-01", endDate = END_OF_TIME) => ({
  startDate,
  endDate,
  value,
  reason: null,
  keys: {},
  extras: {},
});

const situation = (overrides: Partial<JobChangeSituation> = {}): JobChangeSituation => ({
  society: "CYC",
  employeeId: "1023",
  personName: "LOPEZ GARCIA, ANA",
  period: { order: 1, startDate: "2020-05-01", endDate: END_OF_TIME },
  role: {
    order: 1,
    startDate: "2024-01-01",
    endDate: END_OF_TIME,
    main: true,
    internalRoleType: "1",
    reason: null,
    name: "J-Analista",
  },
  nextRoleOrder: 2,
  fields: [
    { field: "job", label: "Puesto", table: "M4SCO_H_HR_JOB", slices: [slice("RDCI")] },
    { field: "category", label: "Categoría", table: "M4SSP_H_CATEGORIA", slices: [slice("I1")] },
    {
      field: "workUnit",
      label: "Unidad organizativa",
      table: "M4SCO_H_HR_WUNIT",
      slices: [slice("00")],
    },
    { field: "position", label: "Posición", table: "M4SCO_H_HR_POS_COM", slices: [] },
    { field: "workLocation", label: "Ubicación", table: "M4SCO_H_HR_WLOC", slices: [slice("724")] },
    {
      field: "functionalWorkCenter",
      label: "Centro de trabajo funcional",
      table: "M4SCO_H_HR_WLOC",
      slices: [slice("01")],
    },
    {
      field: "costCenter",
      label: "Centro de coste",
      table: "M4SSP_H_CENT_COS",
      slices: [slice("000000")],
    },
    {
      field: "structure",
      label: "Estructura",
      table: "M4CYC_H_ESTRUCTURA",
      slices: [slice("1")],
    },
    {
      field: "atradiusJob",
      label: "Puesto Atradius",
      table: "M4CSP_H_ATRADIUS_JOB",
      slices: [slice("0000")],
    },
    {
      field: "atradiusCategory",
      label: "Categoría Atradius",
      table: "M4CSP_H_CATEG_ATRADIUS",
      slices: [slice("00")],
    },
    {
      field: "categoryGroup",
      label: "Agrupación de categoría",
      table: "M4CSP_H_HR_JOB_AGRUPA_CAT",
      slices: [{ ...slice("02"), keys: { ID_JOB_CODE: "RDCI" } }],
    },
    {
      field: "categoryEquivalence",
      label: "Equivalencia categoría/puesto",
      table: "M4CSP_H_EQUIV_CAT_JOB_CYC",
      slices: [],
    },
  ],
  ...overrides,
});

const request = (overrides: Partial<JobChangeRequest> = {}): JobChangeRequest => ({
  employeeId: "1023",
  cutDate: "2026-12-01",
  reason: "001",
  positionChoice: "job",
  occupationType: "hours",
  occupationHours: "",
  occupationEjc: "",
  occupationHeadcount: "",
  values: { job: "RDCS" },
  ...overrides,
});

const input = (overrides: Partial<JobChangePlanInput> = {}): JobChangePlanInput => ({
  situation: situation(),
  request: request(),
  derived: { categoryGroup: "03", targetName: "Analista senior" },
  auditTables: { M4SCO_HR_ROLE: "AUC_HR_ROLE", M4SCO_H_HR_JOB: "AUC_H_HR_JOB" },
  ...overrides,
});

const rows = (plan: ReturnType<typeof planJobChange>, table: string) =>
  plan.operations.filter((operation) => operation.table === table);

const columnOf = (
  operation: { columns: readonly { column: string; value: string | null }[] } | undefined,
  column: string,
) => operation?.columns.find((entry) => entry.column === column)?.value;

describe("previousDay", () => {
  it("cierra el tramo el día anterior, también en cambio de mes", () => {
    expect(previousDay("2026-12-01")).toBe("2026-11-30");
    expect(previousDay("2026-01-01")).toBe("2025-12-31");
  });
});

describe("sliceAt", () => {
  it("devuelve el tramo que cubre la fecha", () => {
    const slices = [slice("B", "2026-01-01"), slice("A", "2020-01-01", "2025-12-31")];
    expect(sliceAt(slices, "2024-06-01")?.value).toBe("A");
    expect(sliceAt(slices, "2026-06-01")?.value).toBe("B");
  });

  it("sin tramo que la cubra, toma el último que empezó antes", () => {
    const slices = [slice("A", "2020-01-01", "2021-12-31")];
    expect(sliceAt(slices, "2026-01-01")?.value).toBe("A");
  });
});

describe("planJobChange", () => {
  it("con fecha de corte distinta del inicio del rol crea un rol nuevo y cierra el anterior", () => {
    const plan = planJobChange(input());
    expect(plan.mode).toBe("new-role");
    expect(plan.roleOrder).toBe(2);
    expect(plan.errors).toEqual([]);
    const role = rows(plan, "M4SCO_HR_ROLE");
    expect(role.map((operation) => operation.kind)).toEqual(["insert", "close"]);
    expect(columnOf(role[0], "SCO_DT_START")).toBe("2026-12-01");
    expect(columnOf(role[0], "SCO_MAIN_ROLE")).toBe("1");
    expect(columnOf(role[0], "SCO_N_ROLEESP")).toBe("J-Analista senior");
    expect(columnOf(role[1], "SCO_DT_END")).toBe("2026-11-30");
    expect(role[0]?.audit).toBe("AUC_HR_ROLE");
  });

  it("el rol nuevo copia los históricos del rol con el puesto nuevo", () => {
    const plan = planJobChange(input());
    const job = rows(plan, "M4SCO_H_HR_JOB");
    expect(job.map((operation) => operation.kind)).toEqual(["insert", "close"]);
    expect(columnOf(job[0], "SCO_ID_JOB_CODE")).toBe("RDCS");
    expect(job[0]?.roleOrder).toBe(2);
    expect(job[1]?.roleOrder).toBe(1);
    // La categoría no cambia, pero el rol nuevo la arrastra con su valor actual.
    const category = rows(plan, "M4SSP_H_CATEGORIA");
    expect(columnOf(category[0], "SSP_ID_CATEGORIA")).toBe("I1");
  });

  it("con la fecha de corte igual al inicio del rol actualiza el rol", () => {
    const plan = planJobChange(input({ request: request({ cutDate: "2024-01-01" }) }));
    expect(plan.mode).toBe("update-role");
    expect(plan.roleOrder).toBe(1);
    const role = rows(plan, "M4SCO_HR_ROLE");
    expect(role.map((operation) => operation.kind)).toEqual(["update"]);
    // El tramo empieza ese mismo día: se actualiza en vez de abrir otro.
    const job = rows(plan, "M4SCO_H_HR_JOB");
    expect(job.map((operation) => operation.kind)).toEqual(["update"]);
    expect(columnOf(job[0], "SCO_ID_JOB_CODE")).toBe("RDCS");
    // Sin cambio no se toca la categoría.
    expect(rows(plan, "M4SSP_H_CATEGORIA")).toHaveLength(0);
  });

  it("el puesto arrastra la agrupación de categoría y no la equivalencia vacía", () => {
    const plan = planJobChange(input({ request: request({ cutDate: "2024-01-01" }) }));
    const group = rows(plan, "M4CSP_H_HR_JOB_AGRUPA_CAT");
    expect(group.map((operation) => operation.kind)).toEqual(["close", "insert"]);
    expect(columnOf(group[1], "ID_JOB_AGRUPACION_CATEGORIA")).toBe("03");
    expect(columnOf(group[1], "ID_JOB_CODE")).toBe("RDCS");
    expect(rows(plan, "M4CSP_H_EQUIV_CAT_JOB_CYC")).toHaveLength(0);
  });

  it("cambiar solo la categoría no toca el puesto", () => {
    const plan = planJobChange(
      input({ request: request({ cutDate: "2024-01-01", values: { category: "I3" } }) }),
    );
    expect(plan.changes.map((change) => change.field)).toEqual(["category"]);
    expect(columnOf(rows(plan, "M4SSP_H_CATEGORIA")[0], "SSP_ID_CATEGORIA")).toBe("I3");
    expect(rows(plan, "M4SCO_H_HR_JOB")).toHaveLength(0);
    expect(rows(plan, "M4CSP_H_HR_JOB_AGRUPA_CAT")).toHaveLength(0);
  });

  it("guarda el motivo del cambio en el rol y en los históricos que lo tienen", () => {
    const plan = planJobChange(
      input({ request: request({ cutDate: "2024-01-01", values: { category: "I3" } }) }),
    );
    expect(columnOf(rows(plan, "M4SCO_HR_ROLE")[0], "SCO_ID_REA_CHANG")).toBe("001");
    expect(columnOf(rows(plan, "M4SSP_H_CATEGORIA")[0], "SSP_ID_MOTIVO_CAMB")).toBe("001");
  });

  it("abre un tramo nuevo cuando la fecha de corte cae dentro del tramo vigente", () => {
    const plan = planJobChange(
      input({
        situation: situation({
          role: {
            order: 1,
            startDate: "2024-01-01",
            endDate: END_OF_TIME,
            main: true,
            internalRoleType: "1",
            reason: null,
            name: "J-Analista",
          },
        }),
        request: request({ cutDate: "2024-01-01", values: { workUnit: "01" } }),
      }),
    );
    const unit = rows(plan, "M4SCO_H_HR_WUNIT");
    expect(unit.map((operation) => operation.kind)).toEqual(["update"]);
    expect(columnOf(unit[0], "SCO_ID_WORK_UNIT")).toBe("01");
  });

  it("rechaza una fecha de corte fuera del rol y del periodo", () => {
    const early = planJobChange(input({ request: request({ cutDate: "2019-01-01" }) }));
    expect(early.errors).toContain("La fecha de corte es anterior al inicio del rol (2024-01-01).");
    expect(early.operations).toEqual([]);
  });

  it("rechaza una fecha de corte inválida", () => {
    const plan = planJobChange(input({ request: request({ cutDate: "01/12/2026" }) }));
    expect(plan.errors).toEqual(["La fecha de corte no es una fecha válida."]);
  });

  it("rechaza que no haya ningún cambio", () => {
    const plan = planJobChange(input({ request: request({ values: { job: "RDCI" } }) }));
    expect(plan.errors).toContain("No hay ningún cambio respecto a la situación actual.");
  });

  it("en la rama de posición exige posición y ocupación válida", () => {
    const missing = planJobChange(
      input({ request: request({ positionChoice: "position", values: {} }) }),
    );
    expect(missing.errors).toContain("Indica la posición que quieres asignar.");
    const hours = planJobChange(
      input({
        request: request({
          positionChoice: "position",
          values: { position: "P001" },
          occupationHours: "200",
        }),
      }),
    );
    expect(hours.errors).toContain("Las horas de la posición deben estar entre 0 y 168.");
    const ok = planJobChange(
      input({
        request: request({
          positionChoice: "position",
          values: { position: "P001" },
          occupationHours: "40",
        }),
      }),
    );
    expect(ok.errors).toEqual([]);
    const position = rows(ok, "M4SCO_H_HR_POS_COM");
    expect(columnOf(position[0], "SCO_ID_POSITION")).toBe("P001");
    expect(columnOf(position[0], "SCO_ID_COMPL")).toBe("0");
    expect(columnOf(position[0], "SCO_NUM_HOURS")).toBe("40");
    // En la rama de posición el puesto no se toca.
    expect(rows(ok, "M4SCO_H_HR_JOB")).toHaveLength(0);
  });

  it("avisa de que el bloqueo de nómina no se comprueba", () => {
    const plan = planJobChange(input());
    expect(plan.warnings.some((warning) => warning.includes("SRCO_PM_PAYROLL_LOCK"))).toBe(true);
  });

  it("avisa si no se indica motivo del cambio", () => {
    const plan = planJobChange(input({ request: request({ reason: "" }) }));
    expect(plan.warnings.some((warning) => warning.includes("Sin motivo del cambio"))).toBe(true);
  });
});
