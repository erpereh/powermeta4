/** @vitest-environment jsdom */
import { useState, type ComponentProps } from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { TableProps } from "@/components/system/table";
import { demoReport } from "@/lib/payroll-reconciliation/demo";
import { snapshot } from "@/lib/payroll-reconciliation/snapshot";
import { reconcile } from "@/lib/payroll-reconciliation/engine";
import { sourceChange, sourceLimitError } from "@/lib/payroll-reconciliation/source-plan";
import { DEFAULT_PARAMETERS, type Dossier, type Source } from "@/lib/payroll-reconciliation/types";
import { ReconciliationRequestError } from "./request-error";
vi.mock("@/components/system/table", async (importOriginal) => {
  const { Table } = await importOriginal<typeof import("@/components/system/table")>();
  return { Table: <T,>(props: TableProps<T>) => <Table {...props} autoHeight /> };
});
import { SourcesView } from "./SourcesView";

let saved: Dossier;
let failure: { path: string; filename: string; status: number } | undefined;
let pause: Promise<void> | undefined;
const requests: { path: string; filename: string; revision: number }[] = [];
const remove = vi.fn();
function source(filename: string, cellCount = 2): Source {
  return {
    id: filename,
    category: filename.startsWith("meal") ? "comida" : "gimnasio",
    filename,
    hash: filename,
    profile: "test",
    period: saved.period,
    complete: false,
    facts: [{ employeeId: "009001", values: { gym: "15" }, reference: "Hoja1!A2" }],
    diagnostics: [],
    cellCount,
  };
}
const backend = vi.fn(async (path = "", init?: RequestInit) => {
  if (path.startsWith("?id=")) return structuredClone(saved);
  if (!(init?.body instanceof FormData)) throw new Error("Expected multipart");
  const file = init.body.get("file");
  if (!(file instanceof File)) throw new Error("Expected file");
  const metadata: unknown = JSON.parse(String(init.body.get("metadata")));
  if (
    !metadata ||
    typeof metadata !== "object" ||
    !("revision" in metadata) ||
    typeof metadata.revision !== "number"
  )
    throw new Error("Expected revision");
  requests.push({ path, filename: file.name, revision: metadata.revision });
  await pause;
  if (failure && failure.path === path && failure.filename === file.name)
    throw new ReconciliationRequestError("Operación interrumpida.", failure.status);
  if (metadata.revision !== saved.revision)
    throw new ReconciliationRequestError("El expediente ha cambiado.", 409);
  if (file.name.startsWith("bad"))
    throw new ReconciliationRequestError(
      "El archivo no contiene datos para julio. Meses disponibles: octubre.",
      422,
      "comida",
    );
  const next = source(file.name, file.name.includes("large") ? 1_100_000 : 2);
  const change = sourceChange(saved.sources, next);
  if (path === "/preview") return change.check;
  if (path !== "/analyze") throw new Error("Unexpected endpoint");
  const limitError = sourceLimitError(change.sources);
  if (limitError) throw new ReconciliationRequestError(limitError, 413);
  if (change.check.operation !== "skip")
    saved = { ...saved, revision: saved.revision + 1, sources: change.sources };
  return {
    dossier: structuredClone(saved),
    category: next.category,
    filename: file.name,
    records: 1,
    status:
      change.check.operation === "skip"
        ? "ya_incorporado"
        : change.check.operation === "replace"
          ? "sustituido"
          : "incorporado",
    replacedFiles: change.check.replacedFiles,
  };
});
const api: ComponentProps<typeof SourcesView>["api"] = async <T,>(
  path?: string,
  init?: RequestInit,
) => (await backend(path, init)) as T;
function Harness() {
  const [dossier, setDossier] = useState(saved),
    [busy, setBusy] = useState(false);
  return (
    <>
      <button onClick={() => setDossier(structuredClone(saved))}>Actualizar externo</button>
      <SourcesView
        dossier={dossier}
        busy={busy}
        api={api}
        onRemove={remove}
        onBatch={async (operation) => {
          setBusy(true);
          try {
            await operation(setDossier);
          } finally {
            setBusy(false);
          }
        }}
      />
    </>
  );
}
beforeEach(() => {
  const input = {
    period: "2026-10",
    current: snapshot(demoReport("2026-10"), true),
    previous: null,
    sources: [],
    parameters: { ...DEFAULT_PARAMETERS },
  };
  saved = {
    ...input,
    id: "11111111-1111-4111-a111-111111111111",
    title: "Prueba",
    revision: 1,
    demo: true,
    createdAt: "2026-10-01",
    updatedAt: "2026-10-01",
    annotations: [],
    result: reconcile(input),
  };
  failure = undefined;
  pause = undefined;
  requests.length = 0;
  backend.mockClear();
  remove.mockClear();
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
const file = (name: string) =>
  new File(["fixture"], name, {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
const input = () => screen.getByLabelText("Upload files");
const button = (name: string) => screen.getByRole("button", { name });
const disabled = (name: string) => button(name).hasAttribute("disabled");
async function check(user: ReturnType<typeof userEvent.setup>) {
  await user.click(button("Comprobar"));
  await waitFor(() => expect(screen.queryByRole("button", { name: "Comprobando…" })).toBeNull());
}

describe("source checking and explicit application", () => {
  it("offers both disabled actions initially without manual source selectors", () => {
    render(<Harness />);
    expect(disabled("Comprobar")).toBe(true);
    expect(disabled("Aplicar")).toBe(true);
    expect(input().hasAttribute("multiple")).toBe(true);
    expect(screen.queryByRole("checkbox")).toBeNull();
    expect(screen.queryByRole("combobox")).toBeNull();
    expect(screen.queryByText("Huella")).toBeNull();
  });
  it("checks without saving, then applies only valid files and chains write revisions", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("gym.xlsx"), file("bad.xlsx"), file("meal.xlsx")]);
    const original = structuredClone(saved);
    await check(user);
    expect(saved).toEqual(original);
    expect(requests.map((r) => [r.path, r.revision])).toEqual([
      ["/preview", 1],
      ["/preview", 1],
      ["/preview", 1],
    ]);
    expect(screen.getAllByText(/Nuevo · se añadirá/)).toHaveLength(2);
    expect(screen.getByRole("status").textContent).toContain(
      "2 archivos para aplicar · 1 pendiente",
    );
    expect(screen.getByText(/Meses disponibles: octubre/)).toBeTruthy();
    await user.click(button("Aplicar"));
    await waitFor(() => expect(saved.sources).toHaveLength(2));
    expect(requests.filter((r) => r.path === "/analyze").map((r) => r.revision)).toEqual([1, 2]);
    await waitFor(() =>
      expect(screen.getByRole("status").textContent).toContain("2 archivos aplicados"),
    );
    expect(disabled("Aplicar")).toBe(true);
    await user.click(button("Reintentar bad.xlsx"));
    await waitFor(() => expect(requests).toHaveLength(6));
    expect(requests[5]).toEqual({ path: "/preview", filename: "bad.xlsx", revision: 3 });
  });
  it("previews a replacement by name and preserves the old source until Apply", async () => {
    saved.sources = [source("old.xlsx")];
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), file("new.xlsx"));
    await check(user);
    expect(screen.getByText(/Sustitución · sustituirá: old.xlsx/)).toBeTruthy();
    expect(saved.sources[0].filename).toBe("old.xlsx");
    await user.click(button("Aplicar"));
    await waitFor(() => expect(saved.sources[0].filename).toBe("new.xlsx"));
    expect(await screen.findByText(/Sustituido · reemplaza: old.xlsx/)).toBeTruthy();
  });
  it("skips an already incorporated file without enabling Apply or changing revision", async () => {
    saved.sources = [source("gym.xlsx")];
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), file("gym.xlsx"));
    await check(user);
    expect(screen.getByText(/Ya incorporado · no se harán cambios/)).toBeTruthy();
    expect(disabled("Aplicar")).toBe(true);
    expect(saved.revision).toBe(1);
    expect(requests.every((r) => r.path === "/preview")).toBe(true);
  });
  it("excludes conflicting categories, applies the rest, and rechecks after choosing one", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("gym-a.xlsx"), file("gym-b.xlsx"), file("meal.xlsx")]);
    await check(user);
    expect(screen.getAllByText(/Conflicto de categoría · gym-a.xlsx, gym-b.xlsx/)).toHaveLength(2);
    await user.click(button("Aplicar"));
    await waitFor(() => expect(saved.sources.map((s) => s.category)).toEqual(["comida"]));
    await waitFor(() => expect(disabled("Comprobar")).toBe(false));
    await user.click(button("Quitar de la lista gym-b.xlsx"));
    expect(disabled("Aplicar")).toBe(true);
    await check(user);
    expect(screen.queryByText(/Conflicto de categoría/)).toBeNull();
    await user.click(button("Aplicar"));
    await waitFor(() => expect(saved.sources).toHaveLength(2));
    expect(saved.sources.some((s) => s.filename === "gym-a.xlsx")).toBe(true);
  });
  it("invalidates previews after adding files or receiving an external dossier revision", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), file("gym.xlsx"));
    await check(user);
    expect(disabled("Aplicar")).toBe(false);
    await user.upload(input(), file("meal.xlsx"));
    expect(disabled("Aplicar")).toBe(true);
    await check(user);
    saved.revision++;
    await user.click(button("Actualizar externo"));
    expect(disabled("Aplicar")).toBe(true);
    await check(user);
    expect(disabled("Aplicar")).toBe(false);
  });
  it("blocks combined resource overflow even when each file fits separately", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("gym-large.xlsx"), file("meal-large.xlsx")]);
    await check(user);
    expect(screen.getByRole("alert").textContent).toContain("dos millones de celdas");
    expect(disabled("Aplicar")).toBe(true);
    expect(saved.sources).toHaveLength(0);
    await user.click(button("Quitar de la lista meal-large.xlsx"));
    await check(user);
    expect(disabled("Aplicar")).toBe(false);
  });
  it("applies shrinking replacements before additions to respect intermediate limits", async () => {
    saved.sources = [source("old.xlsx", 1_500_000)];
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("meal-large.xlsx"), file("gym.xlsx")]);
    await check(user);
    await user.click(button("Aplicar"));
    await waitFor(() => expect(saved.sources).toHaveLength(2));
    expect(requests.filter((r) => r.path === "/analyze").map((r) => r.filename)).toEqual([
      "gym.xlsx",
      "meal-large.xlsx",
    ]);
  });
  it("frees legacy file slots with replacements before adding a new category", async () => {
    saved.sources = Array.from({ length: 20 }, (_, index) => source(`old-${index}.xlsx`, 1));
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("meal.xlsx"), file("gym-large.xlsx")]);
    await check(user);
    await user.click(button("Aplicar"));
    await waitFor(() => expect(saved.sources).toHaveLength(2));
    expect(requests.filter((r) => r.path === "/analyze").map((r) => r.filename)).toEqual([
      "gym-large.xlsx",
      "meal.xlsx",
    ]);
  });
  it.each([409, 503])(
    "keeps partial writes after HTTP %s and requires new checks after reload",
    async (status) => {
      const user = userEvent.setup();
      render(<Harness />);
      await user.upload(input(), [file("gym.xlsx"), file("meal.xlsx")]);
      await check(user);
      failure = { path: "/analyze", filename: "meal.xlsx", status };
      await user.click(button("Aplicar"));
      expect((await screen.findByRole("alert")).textContent).toContain(
        "Los archivos ya aplicados están guardados",
      );
      expect(saved.sources.map((s) => s.category)).toEqual(["gimnasio"]);
      expect(disabled("Aplicar")).toBe(true);
      failure = undefined;
      await user.click(button("Volver a cargar expediente"));
      await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
      expect(disabled("Aplicar")).toBe(true);
      await check(user);
      await user.click(button("Aplicar"));
      await waitFor(() => expect(saved.sources).toHaveLength(2));
      expect(
        requests.filter((r) => r.path === "/analyze" && r.filename === "gym.xlsx"),
      ).toHaveLength(1);
    },
  );
  it("stops a failed preview without applying and recovers after reload", async () => {
    failure = { path: "/preview", filename: "gym.xlsx", status: 503 };
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("gym.xlsx"), file("meal.xlsx")]);
    await check(user);
    expect(saved.sources).toHaveLength(0);
    expect(requests).toHaveLength(1);
    expect(disabled("Aplicar")).toBe(true);
    failure = undefined;
    await user.click(button("Volver a cargar expediente"));
    await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
    await check(user);
    expect(disabled("Aplicar")).toBe(false);
  });
  it("locks the selection and actions while checking or applying", async () => {
    let release = () => {};
    pause = new Promise<void>((resolve) => {
      release = resolve;
    });
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), file("gym.xlsx"));
    await user.click(button("Comprobar"));
    expect(disabled("Quitar de la lista gym.xlsx")).toBe(true);
    expect(input().hasAttribute("disabled")).toBe(true);
    expect(disabled("Aplicar")).toBe(true);
    release();
    await waitFor(() => expect(disabled("Aplicar")).toBe(false));
    pause = new Promise<void>((resolve) => {
      release = resolve;
    });
    await user.click(button("Aplicar"));
    expect(button("Aplicando…")).toBeTruthy();
    expect(disabled("Comprobar")).toBe(true);
    expect(disabled("Quitar de la lista gym.xlsx")).toBe(true);
    release();
    await waitFor(() => expect(screen.queryByRole("button", { name: "Aplicando…" })).toBeNull());
  });
  it("retains icon removal and its confirmation for legacy sources", async () => {
    const legacy = source("legacy.xlsx");
    delete legacy.filename;
    saved.sources = [legacy];
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(button("Retirar fuente Gimnasio"));
    expect(screen.getByRole("dialog", { name: "Retirar fuente" })).toBeTruthy();
    expect(remove).not.toHaveBeenCalled();
    await user.click(button("Retirar fuente"));
    expect(remove).toHaveBeenCalledWith("legacy.xlsx");
  });
});
