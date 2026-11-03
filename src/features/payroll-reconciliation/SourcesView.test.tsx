/** @vitest-environment jsdom */
import { useState, type ComponentProps } from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { TableProps } from "@/components/system/table";
import { demoReport } from "@/lib/payroll-reconciliation/demo";
import { snapshot } from "@/lib/payroll-reconciliation/snapshot";
import { reconcile } from "@/lib/payroll-reconciliation/engine";
import {
  DEFAULT_PARAMETERS,
  type Dossier,
  type SourceImportResult,
} from "@/lib/payroll-reconciliation/types";
import { ReconciliationRequestError } from "./request-error";
vi.mock("@/components/system/table", async (importOriginal) => {
  const { Table } = await importOriginal<typeof import("@/components/system/table")>();
  return { Table: <T,>(props: TableProps<T>) => <Table {...props} autoHeight /> };
});
import { SourcesView } from "./SourcesView";

let saved: Dossier, failOnce: boolean;
const requests: { filename: string; revision: number }[] = [];
const remove = vi.fn();
const backend = vi.fn(
  async (path = "", init?: RequestInit): Promise<Dossier | SourceImportResult> => {
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
    requests.push({ filename: file.name, revision: metadata.revision });
    if (failOnce) {
      failOnce = false;
      saved.revision++;
      throw new ReconciliationRequestError("El expediente ha cambiado.", 409);
    }
    if (file.name.startsWith("bad"))
      throw new ReconciliationRequestError(
        "El archivo no contiene datos para julio. Meses disponibles: octubre.",
        422,
        "comida",
      );
    const category = file.name.startsWith("meal") ? "comida" : "gimnasio";
    const previous = saved.sources.filter((source) => source.category === category);
    const duplicate = previous.some((source) => source.filename === file.name);
    if (!duplicate)
      saved = {
        ...saved,
        revision: saved.revision + 1,
        sources: [
          ...saved.sources.filter((source) => source.category !== category),
          {
            id: category,
            category,
            filename: file.name,
            hash: "internal-hash",
            profile: "internal-profile",
            period: saved.period,
            complete: false,
            facts: [{ employeeId: "009001", values: { gym: "15" }, reference: "Hoja1!A2" }],
            diagnostics: [],
            cellCount: 2,
          },
        ],
      };
    return {
      dossier: structuredClone(saved),
      category,
      filename: file.name,
      records: 1,
      status: duplicate ? "ya_incorporado" : previous.length ? "sustituido" : "incorporado",
      replacedFiles: duplicate ? [] : previous.map((source) => source.filename ?? "Anterior"),
    };
  },
);
const api: ComponentProps<typeof SourcesView>["api"] = async <T,>(
  path?: string,
  init?: RequestInit,
) => (await backend(path, init)) as T;
function Harness() {
  const [dossier, setDossier] = useState(saved),
    [busy, setBusy] = useState(false);
  return (
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
  failOnce = false;
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

describe("automatic multi-file source upload", () => {
  it("has one action and no category, period, coverage or confirmation controls", () => {
    render(<Harness />);
    expect(input().hasAttribute("multiple")).toBe(true);
    expect(screen.getByRole("button", { name: "Comprobar" }).hasAttribute("disabled")).toBe(true);
    expect(screen.queryByRole("checkbox")).toBeNull();
    expect(screen.queryByRole("combobox")).toBeNull();
    expect(screen.queryByText("Huella")).toBeNull();
    expect(screen.queryByText("Cobertura")).toBeNull();
    expect(screen.queryByText("Perfil")).toBeNull();
  });
  it("persists valid files around a failed file and chains only successful revisions", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("gym.xlsx"), file("bad.xlsx"), file("meal.xlsx")]);
    await user.click(screen.getByRole("button", { name: "Comprobar" }));
    await waitFor(() => expect(requests).toHaveLength(3));
    expect(requests).toEqual([
      { filename: "gym.xlsx", revision: 1 },
      { filename: "bad.xlsx", revision: 2 },
      { filename: "meal.xlsx", revision: 2 },
    ]);
    expect(saved.sources.map((source) => source.category)).toEqual(["gimnasio", "comida"]);
    expect(screen.getAllByText(/Meses disponibles: octubre/).length).toBeGreaterThan(0);
    expect(screen.getByRole("status").textContent).toContain("2 archivos procesados");
    await user.click(screen.getByRole("button", { name: "Reintentar bad.xlsx" }));
    await waitFor(() => expect(requests).toHaveLength(4));
    expect(requests[3]).toEqual({ filename: "bad.xlsx", revision: 3 });
    expect(requests.filter((request) => request.filename === "gym.xlsx")).toHaveLength(1);
  });
  it("processes multiple same-category files in queue order and displays which one replaced the other", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.upload(input(), [file("gym-a.xlsx"), file("gym-b.xlsx")]);
    await user.click(screen.getByRole("button", { name: "Comprobar" }));
    await waitFor(() => expect(saved.sources[0]?.filename).toBe("gym-b.xlsx"));
    expect(saved.sources).toHaveLength(1);
    expect(screen.getByText("Sustituido por gym-b.xlsx")).toBeTruthy();
    expect(screen.getByText(/Reemplaza: gym-a.xlsx/)).toBeTruthy();
  });
  it("stops on a revision conflict, retains pending files, then reloads and continues", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    failOnce = true;
    await user.upload(input(), [file("gym.xlsx"), file("meal.xlsx")]);
    await user.click(screen.getByRole("button", { name: "Comprobar" }));
    expect((await screen.findByRole("alert")).textContent).toContain(
      "Los archivos incorporados están guardados",
    );
    expect(requests).toHaveLength(1);
    await user.click(screen.getByRole("button", { name: "Volver a cargar expediente" }));
    await waitFor(() => expect(screen.queryByRole("alert")).toBeNull());
    await user.click(screen.getByRole("button", { name: "Comprobar" }));
    await waitFor(() => expect(saved.sources).toHaveLength(2));
    expect(requests.map((request) => request.revision)).toEqual([1, 2, 3]);
  });
  it("shows legacy sources without technical columns and retains icon-triggered removal confirmation", async () => {
    saved.sources = [
      {
        id: "legacy",
        hash: "internal-hash",
        profile: "gimnasio-v1",
        category: "gimnasio",
        period: saved.period,
        complete: true,
        facts: [],
        diagnostics: [],
        cellCount: 1,
      },
    ];
    const user = userEvent.setup();
    render(<Harness />);
    expect(screen.queryByText("internal-hash")).toBeNull();
    expect(screen.queryByText("gimnasio-v1")).toBeNull();
    await user.click(screen.getByRole("button", { name: "Retirar fuente Gimnasio" }));
    expect(screen.getByRole("dialog", { name: "Retirar fuente" })).toBeTruthy();
    expect(remove).not.toHaveBeenCalled();
    await user.click(screen.getByRole("button", { name: "Retirar fuente" }));
    expect(remove).toHaveBeenCalledWith("legacy");
  });
});
