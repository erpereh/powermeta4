/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("@/app/actions/job-change", () => ({
  getJobChangeSituationAction: vi.fn(),
  getJobChangePlanAction: vi.fn(),
}));

import { getJobChangePlanAction, getJobChangeSituationAction } from "@/app/actions/job-change";
import type { HireCatalogState } from "@/lib/meta4/hire/catalogs";
import { HIRE_TEST_CATALOGS } from "@/lib/meta4/hire/test-catalogs";
import { END_OF_TIME } from "@/lib/meta4/job-change/fields";
import type { JobChangePlan, JobChangeSituation } from "@/lib/meta4/job-change/types";

import { UsersJobChange } from "./users-job-change";

const situationAction = vi.mocked(getJobChangeSituationAction);
const planAction = vi.mocked(getJobChangePlanAction);

const CATALOGS: HireCatalogState = {
  status: "ready",
  society: "CYC",
  catalogs: HIRE_TEST_CATALOGS,
};

const SITUATION: JobChangeSituation = {
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
    {
      field: "job",
      label: "Puesto",
      table: "M4SCO_H_HR_JOB",
      slices: [
        {
          startDate: "2024-01-01",
          endDate: END_OF_TIME,
          value: "RDCI",
          reason: null,
          keys: {},
          extras: {},
        },
      ],
    },
  ],
};

const PLAN: JobChangePlan = {
  mode: "new-role",
  cutDate: "2026-12-01",
  roleOrder: 2,
  previousRoleOrder: 1,
  roleName: "J-Analista senior",
  changes: [{ field: "job", label: "Puesto", from: "RDCI", to: "RDCS" }],
  operations: [
    {
      table: "M4SCO_H_HR_JOB",
      kind: "insert",
      label: "Puesto",
      roleOrder: 2,
      startDate: "2026-12-01",
      endDate: END_OF_TIME,
      columns: [{ column: "SCO_ID_JOB_CODE", value: "RDCS" }],
      audit: "AUC_H_HR_JOB",
    },
  ],
  warnings: ["El bloqueo de nómina (SRCO_PM_PAYROLL_LOCK) no se comprueba todavía."],
  errors: [],
};

beforeAll(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("UsersJobChange", () => {
  it("avisa de que no graba en PeopleNet", () => {
    render(<UsersJobChange catalogs={CATALOGS} />);
    expect(screen.getByText(/no graba en PeopleNet/i)).toBeTruthy();
  });

  it("lee la situación actual y luego prepara el plan sin habilitar la grabación", async () => {
    const user = userEvent.setup();
    situationAction.mockResolvedValue({ ok: true, situation: SITUATION });
    planAction.mockResolvedValue({ ok: true, situation: SITUATION, plan: PLAN });
    render(<UsersJobChange catalogs={CATALOGS} />);

    await user.type(screen.getByRole("textbox", { name: /matrícula/i }), "1023");
    await user.click(screen.getByRole("button", { name: /leer situación actual/i }));

    await waitFor(() => expect(situationAction).toHaveBeenCalledWith("1023"));
    expect(await screen.findByText(/LOPEZ GARCIA, ANA/)).toBeTruthy();

    await user.click(screen.getByRole("button", { name: /preparar el cambio/i }));
    await waitFor(() => expect(planAction).toHaveBeenCalled());
    expect(planAction.mock.calls[0]?.[0]).toMatchObject({ employeeId: "1023" });

    expect(
      await screen.findByText(/Rol nuevo \(la fecha de corte no coincide con el inicio del rol\)/),
    ).toBeTruthy();
    expect(screen.getByText(/SRCO_PM_PAYROLL_LOCK/)).toBeTruthy();
    const save = screen.getByRole("button", { name: /grabar en peoplenet/i });
    expect(save).toHaveProperty("disabled", true);
  });

  it("muestra el mensaje del servidor cuando la matrícula no tiene rol", async () => {
    const user = userEvent.setup();
    situationAction.mockResolvedValue({
      ok: false,
      message: "La matrícula 9999 no tiene rol en la sociedad activa.",
    });
    render(<UsersJobChange catalogs={CATALOGS} />);
    await user.type(screen.getByRole("textbox", { name: /matrícula/i }), "9999");
    await user.click(screen.getByRole("button", { name: /leer situación actual/i }));
    expect(await screen.findByText(/no tiene rol en la sociedad activa/i)).toBeTruthy();
  });
});
