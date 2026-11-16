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
const submit = () => screen.getByRole("button", { name: "Crear expediente y analizar" });

describe("real payroll execution selection", () => {
  it("excludes non-consecutive or incompatible runs and blocks a saved invalid selection", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    const older = run({ accruedOn: "2026-07-25" });
    const otherKind = run({
      ...PREVIOUS,
      runAt: "2026-08-30T11:00:00.000Z",
      payKind: "Retroactivas",
    });
    const props = { runs: [...RUNS, older, otherKind], demo: false, busy: false, onSubmit };
    render(
      <SelectionForm
        {...props}
        initial={{
          title: "Cuadre",
          period: "2026-09",
          current: runKey(CURRENT),
          previous: runKey(older),
        }}
      />,
    );
    const action = screen.getByRole("button", { name: "Actualizar instantáneas" });
    expect(action.hasAttribute("disabled")).toBe(true);
    expect(screen.getByRole("alert").textContent).toContain("mes inmediatamente anterior");
    fireEvent.submit(action.closest("form")!);
    expect(onSubmit).not.toHaveBeenCalled();
    await user.click(screen.getByRole("combobox", { name: "Ejecución anterior" }));
    expect(screen.queryByRole("option", { name: reportRunLabel(older) })).toBeNull();
    expect(screen.queryByRole("option", { name: reportRunLabel(otherKind) })).toBeNull();
    expect(screen.getByRole("option", { name: reportRunLabel(PREVIOUS) })).toBeTruthy();
    await user.click(
      screen.getByRole("option", { name: "Sin anterior: dejar controles mensuales pendientes" }),
    );
    await user.click(action);
    expect(onSubmit.mock.calls[0][0].previousKey).toBeNull();
  });
  it("offers a historical execution without depending on today's month and submits its actual period", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    render(<SelectionForm runs={[HISTORICAL]} demo={false} busy={false} onSubmit={onSubmit} />);
    await choose(user, "Ejecución actual", reportRunLabel(HISTORICAL));
    expect(
      screen.getByRole("textbox", { name: "Mes de nómina" }).getAttribute("readonly"),
    ).not.toBeNull();
    expect(screen.getByDisplayValue("abril de 2015")).toBeTruthy();
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
  it("proposes the most recent compatible previous run and confirms it on submission", async () => {
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
    expect(submit().hasAttribute("disabled")).toBe(false);
    expect(onSubmit).not.toHaveBeenCalled();
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
    await user.click(submit());
    expect(onSubmit.mock.calls[0][0]).toMatchObject({
      period: "2026-09",
      currentKey: runKey(CURRENT),
      previousKey: runKey(PREVIOUS),
    });
  });
  it("clears the prior selection and blocks submission until a run of the new report is selected", async () => {
    const user = userEvent.setup();
    render(<SelectionForm runs={RUNS} demo={false} busy={false} onSubmit={vi.fn()} />);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    await choose(user, "Informe", "01 · Informe Normal");
    expect(submit().hasAttribute("disabled")).toBe(true);
    expect(screen.queryByRole("checkbox")).toBeNull();
    expect(screen.queryByDisplayValue("septiembre de 2026")).toBeNull();
    await choose(user, "Ejecución actual", reportRunLabel(OTHER_REPORT));
    expect(screen.getByText(/Sin ejecución anterior seleccionada/)).toBeTruthy();
    expect(submit().hasAttribute("disabled")).toBe(false);
  });
  it("recomputes the prior suggestion and submits the new current run directly", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    render(<SelectionForm runs={RUNS} demo={false} busy={false} onSubmit={onSubmit} />);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    await choose(user, "Ejecución actual", reportRunLabel(HISTORICAL));
    expect(submit().hasAttribute("disabled")).toBe(false);
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
    await user.click(submit());
    expect(onSubmit.mock.calls[0][0].currentKey).toEqual(runKey(CURRENT));
  });
  it("shows loading errors and retries inside the form without a results link", async () => {
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
    expect(screen.queryByRole("link", { name: "Abrir Resultados de nómina" })).toBeNull();
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
    await user.click(screen.getByRole("button", { name: "Actualizar instantáneas" }));
    expect(onSubmit.mock.calls[0][0].currentKey).toEqual(runKey(CURRENT));
  });
  it.each([false, true])(
    "preserves selection after catalog refresh and blocks concurrent operations, with initial=%s",
    async (saved) => {
      const user = userEvent.setup(),
        retry = vi.fn(),
        onSubmit = vi.fn();
      const initial = saved
        ? { title: "Cuadre guardado", period: "2026-09", current: runKey(CURRENT) }
        : undefined;
      const props = {
        runs: RUNS,
        demo: false,
        busy: false,
        initial,
        onRetryCatalog: retry,
        onSubmit,
      };
      const { rerender } = render(<SelectionForm {...props} />);
      if (!saved) await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
      const refresh = screen.getByRole("button", { name: "Actualizar catálogo" });
      expect(screen.queryByRole("checkbox")).toBeNull();
      expect(screen.queryByRole("link", { name: "Abrir Resultados de nómina" })).toBeNull();
      await user.click(refresh);
      expect(retry).toHaveBeenCalledOnce();
      expect(onSubmit).not.toHaveBeenCalled();
      rerender(<SelectionForm {...props} catalogLoading />);
      expect(refresh.hasAttribute("disabled")).toBe(true);
      const action = screen.getByRole("button", {
        name: saved ? "Actualizar instantáneas" : "Crear expediente y analizar",
      });
      expect(action.hasAttribute("disabled")).toBe(true);
      fireEvent.submit(action.closest("form")!);
      expect(onSubmit).not.toHaveBeenCalled();
      rerender(<SelectionForm {...props} runs={[...RUNS].reverse()} />);
      expect(refresh.hasAttribute("disabled")).toBe(false);
      expect(action.hasAttribute("disabled")).toBe(false);
      rerender(<SelectionForm {...props} busy />);
      expect(refresh.hasAttribute("disabled")).toBe(true);
      expect(action.hasAttribute("disabled")).toBe(true);
      fireEvent.submit(action.closest("form")!);
      expect(onSubmit).not.toHaveBeenCalled();
    },
  );
  it("submits an explicitly changed previous run or no previous run without another confirmation", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    render(<SelectionForm runs={RUNS} demo={false} busy={false} onSubmit={onSubmit} />);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    await choose(user, "Ejecución anterior", reportRunLabel(OLDER_PREVIOUS));
    await user.click(submit());
    expect(onSubmit.mock.calls[0][0].previousKey).toEqual(runKey(OLDER_PREVIOUS));
    await choose(user, "Ejecución anterior", "Sin anterior: dejar controles mensuales pendientes");
    await user.click(submit());
    expect(onSubmit.mock.calls[1][0].previousKey).toBeNull();
  });
  it("blocks an empty name and a previous run removed from the catalog, including direct submit events", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    const props = { runs: RUNS, demo: false, busy: false, onSubmit };
    const { rerender } = render(<SelectionForm {...props} />);
    await choose(user, "Ejecución actual", reportRunLabel(CURRENT));
    const name = screen.getByRole("textbox", { name: "Nombre del expediente" });
    await user.clear(name);
    await user.type(name, "   ");
    expect(submit().hasAttribute("disabled")).toBe(true);
    fireEvent.submit(submit().closest("form")!);
    expect(onSubmit).not.toHaveBeenCalled();
    await user.type(name, "Cuadre");
    rerender(<SelectionForm {...props} runs={[CURRENT]} />);
    expect(submit().hasAttribute("disabled")).toBe(true);
    expect(screen.getByRole("alert").textContent).toContain(
      "La ejecución anterior ya no está disponible",
    );
    fireEvent.submit(submit().closest("form")!);
    expect(onSubmit).not.toHaveBeenCalled();
  });
  it("keeps the demo notice and submits a valid demo period without a checkbox", async () => {
    const user = userEvent.setup(),
      onSubmit = vi.fn();
    render(<SelectionForm runs={[]} demo busy={false} onSubmit={onSubmit} />);
    expect(screen.getByText(/Muestra ficticia de desarrollo/)).toBeTruthy();
    expect(screen.queryByRole("checkbox")).toBeNull();
    fireEvent.change(screen.getByLabelText("Mes de nómina"), { target: { value: "2026-10" } });
    await user.click(submit());
    expect(onSubmit).toHaveBeenCalledWith({
      title: "Cuadre mensual",
      period: "2026-10",
      currentKey: undefined,
      previousKey: null,
      populationConfirmed: true,
      demo: true,
    });
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
