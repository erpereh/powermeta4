/** @vitest-environment jsdom */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { PayrollReportRun } from "@/types/payroll-report";
import { SelectionForm } from "./forms";
import { previousCandidate, reportRunLabel, runKey } from "./selection";

const run = (overrides: Partial<PayrollReportRun> = {}): PayrollReportRun => ({
  reportId: "01_C",
  runAt: "2026-10-16T11:41:00.000Z",
  accruedOn: "2026-09-25",
  payFrequency: "004",
  reportName: "Informe Normal CYC",
  payKind: "Normal",
  hasData: true,
  ...overrides,
});
const CURRENT = run();
const HISTORICAL = run({ runAt: "2015-05-07T11:05:22.000Z", accruedOn: "2015-04-25" });
const PREVIOUS = run({ runAt: "2026-08-29T11:00:00.000Z", accruedOn: "2026-08-25" });
const OLDER_PREVIOUS = run({ runAt: "2026-08-28T11:00:00.000Z", accruedOn: "2026-08-25" });
const OTHER_REPORT = run({ reportId: "01", reportName: "Informe Normal" });
const EMPTY = run({ reportId: "02", reportName: "Informe vacío", hasData: false });
const RUNS = [HISTORICAL, OTHER_REPORT, CURRENT, OLDER_PREVIOUS, EMPTY, PREVIOUS];

beforeEach(() => {
  vi.stubGlobal(
    "ResizeObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});
async function choose(user: ReturnType<typeof userEvent.setup>, label: string, name: string) {
  await user.click(screen.getByRole("combobox", { name: label }));
  await user.click(await screen.findByRole("option", { name }));
}
const confirm = async (user: ReturnType<typeof userEvent.setup>) =>
  user.click(
    screen.getByRole("checkbox", { name: "Confirmo las ejecuciones y el alcance de su población" }),
  );
const submit = () => screen.getByRole("button", { name: "Crear expediente y analizar" });

describe("real payroll execution selection", () => {
  it("offers a historical execution without depending on today's month and submits its actual period", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    render(<SelectionForm runs={[HISTORICAL]} demo={false} busy={false} onSubmit={onSubmit} />);
    await choose(user, "Ejecución actual", reportRunLabel(HISTORICAL));
    expect(
      screen.getByRole("textbox", { name: "Mes de nómina" }).getAttribute("readonly"),
    ).not.toBeNull();
    expect(screen.getByDisplayValue("abril de 2015")).toBeTruthy();
    await confirm(user);
    await user.click(submit());
    expect(onSubmit).toHaveBeenCalledWith({
      title: "Cuadre mensual",
      period: "2015-04",
      currentKey: runKey(HISTORICAL),
      previousKey: null,
      populationConfirmed: true,
      demo: false,
    });
  });
  it("keeps 01 and 01_C separate and lists all periods of the selected report", async () => {
    const user = userEvent.setup();
    render(<SelectionForm runs={RUNS} demo={false} busy={false} onSubmit={vi.fn()} />);
    await choose(user, "Informe", "01_C · Informe Normal CYC");
    await user.click(screen.getByRole("combobox", { name: "Ejecución actual" }));
    expect(screen.getByRole("option", { name: reportRunLabel(HISTORICAL) })).toBeTruthy();
    expect(screen.getByRole("option", { name: reportRunLabel(CURRENT) })).toBeTruthy();
    expect(screen.queryByRole("option", { name: reportRunLabel(OTHER_REPORT) })).toBeNull();
  });
  it("proposes the most recent compatible previous run and requires confirmation", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    const incompatible = run({
      runAt: "2026-08-31T11:00:00.000Z",
      accruedOn: "2026-08-25",
      payKind: "Retroactiva",
    });
    render(
      <SelectionForm
        runs={[...RUNS, incompatible]}
        demo={false}
        busy={false}
        onSubmit={onSubmit}
      />,
    );
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    expect(screen.getByDisplayValue("septiembre de 2026")).toBeTruthy();
    expect(screen.getByRole("combobox", { name: "Ejecución anterior" }).getAttribute("value")).toBe(
      reportRunLabel(PREVIOUS),
    );
    expect(submit().hasAttribute("disabled")).toBe(true);
    await confirm(user);
    await user.click(submit());
    expect(onSubmit.mock.calls[0][0].previousKey).toEqual(runKey(PREVIOUS));
  });
  it("preserves stable selections when the catalog is reordered", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    const props = { runs: RUNS, demo: false, busy: false, onSubmit };
    const { rerender } = render(<SelectionForm {...props} />);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    rerender(<SelectionForm {...props} runs={[...RUNS].reverse()} />);
    await confirm(user);
    await user.click(submit());
    expect(onSubmit.mock.calls[0][0]).toMatchObject({
      period: "2026-09",
      currentKey: runKey(CURRENT),
      previousKey: runKey(PREVIOUS),
    });
  });
  it("clears the prior selection and confirmation when the report changes", async () => {
    const user = userEvent.setup();
    render(<SelectionForm runs={RUNS} demo={false} busy={false} onSubmit={vi.fn()} />);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    await confirm(user);
    await choose(user, "Informe", "01 · Informe Normal");
    expect(submit().hasAttribute("disabled")).toBe(true);
    expect(screen.getByRole("checkbox").getAttribute("aria-checked")).toBe("false");
    expect(screen.queryByDisplayValue("septiembre de 2026")).toBeNull();
    await choose(user, "Ejecución actual", reportRunLabel(OTHER_REPORT));
    expect(screen.getByText(/Sin ejecución anterior seleccionada/)).toBeTruthy();
  });
  it("clears confirmation and recomputes the prior suggestion when the current run changes", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    render(<SelectionForm runs={RUNS} demo={false} busy={false} onSubmit={onSubmit} />);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    await confirm(user);
    await choose(user, "Ejecución actual", reportRunLabel(HISTORICAL));
    expect(submit().hasAttribute("disabled")).toBe(true);
    await confirm(user);
    await user.click(submit());
    expect(onSubmit.mock.calls[0][0]).toMatchObject({ period: "2015-04", previousKey: null });
  });
  it("handles late catalog loading without capturing stale array indices", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    const { rerender } = render(
      <SelectionForm runs={[]} demo={false} busy={false} catalogLoading onSubmit={onSubmit} />,
    );
    expect(screen.getByRole("status").textContent).toContain("Cargando");
    expect(submit().hasAttribute("disabled")).toBe(true);
    rerender(
      <SelectionForm
        runs={[CURRENT]}
        demo={false}
        busy={false}
        catalogLoading={false}
        onSubmit={onSubmit}
      />,
    );
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    await confirm(user);
    await user.click(submit());
    expect(onSubmit.mock.calls[0][0].currentKey).toEqual(runKey(CURRENT));
  });
  it("shows loading errors and retries inside the form, with a real results link", async () => {
    const user = userEvent.setup(),
      retry = vi.fn();
    render(
      <SelectionForm
        runs={[]}
        demo={false}
        busy={false}
        catalogError="Conexión no disponible"
        onRetryCatalog={retry}
        onSubmit={vi.fn()}
      />,
    );
    expect(screen.getByRole("alert").textContent).toBe("Conexión no disponible");
    expect(
      screen.getByRole("link", { name: "Abrir Resultados de nómina" }).getAttribute("href"),
    ).toBe("/tools/reports/resultados-nomina");
    await user.click(screen.getByRole("button", { name: "Reintentar catálogo" }));
    expect(retry).toHaveBeenCalledOnce();
    expect(submit().hasAttribute("disabled")).toBe(true);
  });
  it("explains an empty catalog and an empty report instead of showing an unexplained picker", async () => {
    const { rerender } = render(
      <SelectionForm runs={[]} demo={false} busy={false} onSubmit={vi.fn()} />,
    );
    expect(screen.getByRole("status").textContent).toContain("No hay ejecuciones guardadas");
    rerender(<SelectionForm runs={[EMPTY]} demo={false} busy={false} onSubmit={vi.fn()} />);
    expect(screen.getByRole("status").textContent).toContain("No hay ejecuciones con datos");
    expect(submit().hasAttribute("disabled")).toBe(true);
  });
  it("makes empty runs unselectable and blocks a selection removed during refresh", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    const { rerender } = render(
      <SelectionForm runs={[CURRENT, EMPTY]} demo={false} busy={false} onSubmit={onSubmit} />,
    );
    await user.click(screen.getByRole("combobox", { name: "Ejecución actual" }));
    expect(
      screen.getByRole("option", { name: reportRunLabel(EMPTY) }).hasAttribute("disabled"),
    ).toBe(true);
    await user.click(screen.getByRole("option", { name: reportRunLabel(CURRENT) }));
    await confirm(user);
    rerender(
      <SelectionForm
        runs={[{ ...CURRENT, hasData: false }]}
        demo={false}
        busy={false}
        onSubmit={onSubmit}
      />,
    );
    expect(submit().hasAttribute("disabled")).toBe(true);
    fireEvent.submit(submit().closest("form")!);
    expect(onSubmit).not.toHaveBeenCalled();
    expect(screen.getByRole("alert").textContent).toContain("ya no está disponible");
  });
  it("recovers initial keys after a delayed catalog and protects the period of a saved dossier", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    const initial = {
      title: "Cuadre guardado",
      period: "2026-09",
      current: runKey(CURRENT),
      previous: runKey(PREVIOUS),
    };
    const { rerender } = render(
      <SelectionForm
        runs={[]}
        demo={false}
        busy={false}
        catalogLoading
        initial={initial}
        onSubmit={onSubmit}
      />,
    );
    rerender(
      <SelectionForm runs={RUNS} demo={false} busy={false} initial={initial} onSubmit={onSubmit} />,
    );
    await waitFor(() => expect(screen.getByDisplayValue("septiembre de 2026")).toBeTruthy());
    await choose(user, "Ejecución actual", reportRunLabel(HISTORICAL));
    expect(screen.getByRole("alert").textContent).toContain("crea un expediente nuevo");
    expect(
      screen.getByRole("button", { name: "Actualizar instantáneas" }).hasAttribute("disabled"),
    ).toBe(true);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    await confirm(user);
    await user.click(screen.getByRole("button", { name: "Actualizar instantáneas" }));
    expect(onSubmit.mock.calls[0][0].currentKey).toEqual(runKey(CURRENT));
  });
  it("handles December/January and never proposes an unknown or incompatible pay kind", () => {
    const january = run({ accruedOn: "2027-01-25" });
    const december = run({ accruedOn: "2026-12-25", runAt: "2026-12-26T10:00:00.000Z" });
    expect(previousCandidate([december], january)).toEqual(december);
    expect(previousCandidate([december], { ...january, payKind: null })).toBeUndefined();
    expect(previousCandidate([{ ...december, payKind: "Retroactiva" }], january)).toBeUndefined();
    expect(previousCandidate([{ ...december, payFrequency: "003" }], january)).toBeUndefined();
  });
});
