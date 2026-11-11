/** @vitest-environment jsdom */
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { TableProps } from "@/components/system/table";
import { demoReport } from "@/lib/payroll-reconciliation/demo";
import { reconcile } from "@/lib/payroll-reconciliation/engine";
import { snapshot } from "@/lib/payroll-reconciliation/snapshot";
import { DEFAULT_PARAMETERS, type Dossier } from "@/lib/payroll-reconciliation/types";
import { mutationSchema } from "@/lib/payroll-reconciliation/validation";
const tableRenders = vi.hoisted(() => ({ count: 0 }));

vi.mock("@/stores/use-workspace-store", () => ({
  useWorkspaceStore: <T,>(selector: (state: { activeCompanyId: string; auth: null }) => T) =>
    selector({ activeCompanyId: "test-company", auth: null }),
}));
vi.mock("@/components/system/sidebar-toggle", () => ({ SidebarToggle: () => null }));
// jsdom has no viewport measurements. Render every row using the real Table's supported mode.
vi.mock("@/components/system/table", async (importOriginal) => {
  const { Table } = await importOriginal<typeof import("@/components/system/table")>();
  return {
    Table: <T,>(props: TableProps<T>) => {
      tableRenders.count++;
      return <Table {...props} autoHeight />;
    },
  };
});
import { ReconciliationApp } from "./ReconciliationApp";

let saved: Dossier;
let failure: number | undefined;
const patches = vi.fn();
const fetchMock = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
  const url = new URL(String(input), "http://localhost");
  if (init?.method === "PATCH") {
    const patch = mutationSchema.parse(JSON.parse(String(init.body)));
    patches(patch);
    if (failure)
      return Response.json(
        { ok: false, message: "El expediente ha cambiado." },
        { status: failure },
      );
    if (patch.action !== "review" || !patch.state) throw new Error("Operación inesperada");
    const finding = saved.result.findings.find((item) => item.id === patch.findingId);
    if (!finding) throw new Error("Hallazgo inesperado");
    saved = {
      ...saved,
      revision: saved.revision + 1,
      annotations: [
        {
          findingId: finding.id,
          fingerprint: finding.fingerprint,
          state: patch.state,
          comment: patch.comment ?? "",
          actor: "TEST",
          at: "2026-11-03T11:00:00Z",
        },
      ],
    };
    return Response.json({ ok: true, data: saved });
  }
  if (url.searchParams.has("catalog")) return Response.json({ ok: true, data: [] });
  if (url.searchParams.has("id")) return Response.json({ ok: true, data: saved });
  return Response.json({ ok: true, data: [saved] });
});

beforeEach(() => {
  const input = {
    period: "2026-10",
    current: snapshot(demoReport("2026-10"), true),
    previous: snapshot(demoReport("2026-10", true), true),
    sources: [],
    parameters: { ...DEFAULT_PARAMETERS },
  };
  const result = reconcile(input);
  const finding = result.findings.find(
    (item) => item.control === "C01" && item.status === "Con diferencia",
  )!;
  saved = {
    ...input,
    id: "11111111-1111-4111-a111-111111111111",
    title: "Cuadre de prueba",
    revision: 5,
    createdAt: "2026-10-27T10:00:00Z",
    updatedAt: "2026-10-27T10:00:00Z",
    demo: true,
    result,
    annotations: [
      {
        findingId: finding.id,
        fingerprint: finding.fingerprint,
        state: "Pendiente",
        comment: "Comentario anterior",
        actor: "TEST",
        at: "2026-10-27T10:00:00Z",
      },
    ],
  };
  patches.mockClear();
  tableRenders.count = 0;
  fetchMock.mockClear();
  failure = undefined;
  vi.stubGlobal("fetch", fetchMock);
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

async function openReviewList(user: ReturnType<typeof userEvent.setup>) {
  await user.click(await screen.findByRole("button", { name: "Abrir" }));
  await user.click(await screen.findByRole("tab", { name: "Revisión" }));
  return within(await screen.findByRole("region", { name: "Revisiones guardadas" })).findByRole(
    "button",
    { name: /^Editar revisión de 009002/ },
  );
}
const reviewEditor = () => within(screen.getByRole("dialog", { name: "Revisar resultado" }));
const reviewPanel = () => within(screen.getByRole("region", { name: "Revisiones guardadas" }));
async function chooseDecision(user: ReturnType<typeof userEvent.setup>, name: string) {
  const dialog = screen.getByRole("dialog", { name: "Revisar resultado" });
  await user.click(within(dialog).getByRole("button", { name: "Decisión de revisión" }));
  const list = await screen.findByRole("listbox");
  await user.click(within(list).getByRole("option", { name }));
}

describe("saved reconciliation review editing", () => {
  it("mounts data tables on demand and retains their search after leaving the tab", async () => {
    const user = userEvent.setup();
    render(<ReconciliationApp demo />);
    await user.click(await screen.findByRole("button", { name: "Abrir" }));
    expect(screen.queryByLabelText("Buscar en los datos")).toBeNull();
    await user.click(screen.getByRole("tab", { name: "Datos" }));
    await user.type(screen.getByRole("textbox", { name: "Buscar en los datos" }), "009001");
    await user.click(screen.getByRole("tab", { name: "Revisión" }));
    await user.click(screen.getByRole("tab", { name: "Datos" }));
    expect(screen.getByRole("textbox", { name: "Buscar en los datos" }).getAttribute("value")).toBe(
      "009001",
    );
    expect(patches).not.toHaveBeenCalled();
  });
  it("opens deletion confirmation with an accessible icon and leaves deletion pending until confirmed", async () => {
    const user = userEvent.setup();
    render(<ReconciliationApp demo />);
    const trigger = await screen.findByRole("button", {
      name: "Eliminar expediente Cuadre de prueba",
    });
    expect(trigger.textContent).toBe("");
    trigger.focus();
    await user.keyboard("{Enter}");
    expect(screen.getByRole("dialog", { name: "Eliminar expediente" })).toBeTruthy();
    expect(fetchMock.mock.calls.some(([, init]) => init?.method === "DELETE")).toBe(false);
  });
  it("edits from Revisión, sends the current revision/fingerprint and reopens persisted decisions without changing results", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<ReconciliationApp demo />);
    const original = structuredClone(saved.result);
    await user.click(await openReviewList(user));
    const dialog = screen.getByRole("dialog", { name: "Revisar resultado" });
    expect(within(dialog).getByDisplayValue("Comentario anterior")).toBeTruthy();
    await chooseDecision(user, "Diferencia justificada");
    const comment = within(dialog).getByRole("textbox", { name: "Comentario" });
    const beforeTyping = tableRenders.count;
    await user.clear(comment);
    await user.type(comment, "Justificación actualizada");
    expect(tableRenders.count).toBe(beforeTyping);
    await user.click(within(dialog).getByRole("button", { name: "Guardar revisión" }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: "Revisar resultado" })).toBeNull(),
    );
    expect(patches).toHaveBeenCalledWith(
      expect.objectContaining({
        id: saved.id,
        revision: 5,
        findingId: saved.annotations[0].findingId,
        fingerprint: saved.annotations[0].fingerprint,
        state: "Diferencia justificada",
        comment: "Justificación actualizada",
      }),
    );
    expect(saved.result).toEqual(original);
    expect(reviewPanel().getByText("Justificación actualizada")).toBeTruthy();
    unmount();
    render(<ReconciliationApp demo />);
    await user.click(await openReviewList(user));
    expect(reviewEditor().getByDisplayValue("Justificación actualizada")).toBeTruthy();
    expect(
      reviewEditor().getByRole("button", { name: "Decisión de revisión" }).textContent,
    ).toContain("Diferencia justificada");
  });
  it("cancels edits and keeps mandatory comments for non-pending decisions", async () => {
    const user = userEvent.setup();
    render(<ReconciliationApp demo />);
    await user.click(await openReviewList(user));
    await chooseDecision(user, "Requiere corrección manual");
    const comment = reviewEditor().getByRole("textbox", { name: "Comentario" });
    await user.clear(comment);
    expect(
      reviewEditor().getByRole("button", { name: "Guardar revisión" }).hasAttribute("disabled"),
    ).toBe(true);
    await chooseDecision(user, "Pendiente");
    expect(
      reviewEditor().getByRole("button", { name: "Guardar revisión" }).hasAttribute("disabled"),
    ).toBe(false);
    await user.type(comment, "Borrador sin guardar");
    await user.click(reviewEditor().getByRole("button", { name: "Cancelar" }));
    await waitFor(() =>
      expect(screen.queryByRole("dialog", { name: "Revisar resultado" })).toBeNull(),
    );
    expect(patches).not.toHaveBeenCalled();
    await user.click(reviewPanel().getByRole("button", { name: /^Editar revisión de 009002/ }));
    expect(reviewEditor().getByDisplayValue("Comentario anterior")).toBeTruthy();
  });
  it("reopens invalidated reviews as pending, keeping the comment and using the current evidence", async () => {
    saved.annotations[0] = {
      ...saved.annotations[0],
      state: "Diferencia justificada",
      fingerprint: "0".repeat(64),
      invalidated: true,
    };
    const user = userEvent.setup();
    render(<ReconciliationApp demo />);
    await user.click(await openReviewList(user));
    expect(reviewEditor().getByRole("status").textContent).toContain("La evidencia ha cambiado");
    expect(
      reviewEditor().getByRole("button", { name: "Decisión de revisión" }).textContent,
    ).toContain("Pendiente");
    expect(reviewEditor().getByDisplayValue("Comentario anterior")).toBeTruthy();
    await user.click(reviewEditor().getByRole("button", { name: "Guardar revisión" }));
    await waitFor(() => expect(patches).toHaveBeenCalledOnce());
    expect(patches.mock.calls[0][0].fingerprint).not.toBe("0".repeat(64));
    expect(saved.annotations[0].invalidated).toBeUndefined();
  });
  it("disables editing a finding that no longer exists", async () => {
    saved.annotations[0].findingId = "old-finding";
    const user = userEvent.setup();
    render(<ReconciliationApp demo />);
    await user.click(await screen.findByRole("button", { name: "Abrir" }));
    await user.click(await screen.findByRole("tab", { name: "Revisión" }));
    expect(
      (
        await reviewPanel().findByRole("button", { name: "Editar revisión de hallazgo anterior" })
      ).hasAttribute("disabled"),
    ).toBe(true);
    expect(reviewPanel().getAllByText("Hallazgo anterior").length).toBeGreaterThan(0);
    expect(patches).not.toHaveBeenCalled();
  });
  it.each([409, 500])(
    "keeps drafts after HTTP %s and permits reloading the latest dossier before retrying",
    async (status) => {
      const user = userEvent.setup();
      render(<ReconciliationApp demo />);
      await user.click(await openReviewList(user));
      const comment = reviewEditor().getByRole("textbox", { name: "Comentario" });
      await user.clear(comment);
      await user.type(comment, "Borrador conservado");
      failure = status;
      await user.click(reviewEditor().getByRole("button", { name: "Guardar revisión" }));
      const alert = await reviewEditor().findByRole("alert");
      expect(alert.textContent).toContain("El expediente ha cambiado");
      if (status === 409) expect(alert.textContent).toContain("Vuelve a cargar");
      expect(reviewEditor().getByDisplayValue("Borrador conservado")).toBeTruthy();
      saved.revision = 6;
      failure = undefined;
      await user.click(reviewEditor().getByRole("button", { name: "Volver a cargar expediente" }));
      await waitFor(() => expect(reviewEditor().queryByRole("alert")).toBeNull());
      expect(reviewEditor().getByDisplayValue("Borrador conservado")).toBeTruthy();
      await user.click(reviewEditor().getByRole("button", { name: "Guardar revisión" }));
      await waitFor(() => expect(patches).toHaveBeenCalledTimes(2));
      expect(patches.mock.calls[1][0].revision).toBe(6);
    },
  );
});
