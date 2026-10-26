/** @vitest-environment jsdom */
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Drawer } from "@/components/system";
import { UploadPanel } from "./UploadPanel";

const mockState = vi.hoisted(() => vi.fn());
vi.mock("@/features/registro-retributivo/state/AppState", () => ({ useAppState: mockState }));
beforeEach(() => {
  // Las pestañas de origen miden su lista con ResizeObserver, que jsdom no trae.
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
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  mockState.mockReset();
});
const files = (count: number) =>
  Array.from(
    { length: count },
    (_, i) => new File(["pdf"], `Recibo ${i + 1}.pdf`, { type: "application/pdf" }),
  );

function Harness({
  count,
  nested = false,
  analyze = vi.fn(),
}: {
  count: number;
  nested?: boolean;
  analyze?: (files: readonly File[]) => void;
}) {
  const [pdfFiles, setPdfFiles] = useState<readonly File[]>(() => files(count));
  const [registroFile, setRegistroFile] = useState<File | undefined>(
    () => new File(["excel"], "Registro.xlsx"),
  );
  const [drawerOpen, setDrawerOpen] = useState(true);
  mockState.mockReturnValue({
    sourceMode: "files",
    setSourceMode: vi.fn(),
    pdfFiles,
    setPdfFiles,
    registroFile,
    setRegistroFile,
    settings: { defaultTolerance: 1 },
    updateSettings: vi.fn(),
    analyzing: false,
    error: undefined,
    status: "Listo",
    analyze: () => analyze(pdfFiles),
  });
  return nested ? (
    <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} title="Analizar otros archivos">
      <UploadPanel layout="stacked" />
    </Drawer>
  ) : (
    <UploadPanel />
  );
}

describe("lista compacta de recibos", () => {
  it.each([0, 1, 3, 4, 50])(
    "muestra hasta tres PDF sin quitar archivos del análisis (%i)",
    (count) => {
      render(<Harness count={count} />);
      expect(screen.queryAllByRole("button", { name: /^Remove Recibo/ })).toHaveLength(
        Math.min(3, count),
      );
      expect(Boolean(screen.queryByRole("button", { name: `Ver todos (${count})` }))).toBe(
        count > 3,
      );
      expect(screen.getByRole("button", { name: "Analizar" }).hasAttribute("disabled")).toBe(
        count === 0,
      );
    },
  );
  it("analiza todos los archivos y elimina desde el modal con el manejador existente", async () => {
    const user = userEvent.setup();
    const analyze = vi.fn();
    render(<Harness count={5} analyze={analyze} />);
    await user.click(screen.getByRole("button", { name: "Analizar" }));
    expect(analyze.mock.calls[0][0]).toHaveLength(5);
    const trigger = screen.getByRole("button", { name: "Ver todos (5)" });
    await user.click(trigger);
    const modal = screen.getByRole("dialog", { name: "Recibos de nómina (5)" });
    expect(within(modal).getAllByRole("button", { name: /^Remove Recibo/ })).toHaveLength(5);
    await user.click(within(modal).getByRole("button", { name: "Remove Recibo 5.pdf" }));
    await waitFor(() =>
      expect(screen.getByRole("dialog", { name: "Recibos de nómina (4)" })).toBeTruthy(),
    );
    await user.keyboard("{Escape}");
    await waitFor(() => expect(screen.queryByRole("dialog")).toBeNull(), { timeout: 3000 });
    expect(document.activeElement).toBe(trigger);
    await user.click(screen.getByRole("button", { name: "Analizar" }));
    expect(analyze.mock.calls[1][0].map((file: File) => file.name)).toEqual([
      "Recibo 1.pdf",
      "Recibo 2.pdf",
      "Recibo 3.pdf",
      "Recibo 4.pdf",
    ]);
  });
  it.each([false, true])(
    "Escape cierra solo el modal y devuelve el foco a la carpeta, con movimiento reducido: %s",
    async (reduced) => {
      vi.stubGlobal(
        "matchMedia",
        vi.fn((media: string) => ({
          media,
          matches: reduced,
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          addListener: vi.fn(),
          removeListener: vi.fn(),
        })),
      );
      const user = userEvent.setup();
      render(<Harness count={4} nested />);
      await user.click(screen.getByRole("button", { name: "Ver todos (4)" }));
      const modal = screen.getByRole("dialog", { name: "Recibos de nómina (4)" });
      await user.click(within(modal).getByRole("button", { name: "Remove Recibo 4.pdf" }));
      await user.keyboard("{Escape}");
      await waitFor(
        () => expect(screen.queryByRole("dialog", { name: /Recibos de nómina/ })).toBeNull(),
        { timeout: 3000 },
      );
      expect(screen.getByRole("dialog", { name: "Analizar otros archivos" })).toBeTruthy();
      await waitFor(() =>
        expect(document.activeElement).toBe(
          screen.getByRole("button", { name: "Seleccionar carpeta" }),
        ),
      );
    },
  );
});

function PeopleNetHarness({
  analyze = vi.fn(),
  setSourceMode = vi.fn(),
  initialPeriod = { from: "2025-01-01", to: "2025-12-31" },
}: {
  analyze?: () => void;
  setSourceMode?: (mode: string) => void;
  initialPeriod?: { from: string; to: string };
}) {
  const [peopleNetPeriod, setPeopleNetPeriod] = useState(initialPeriod);
  const [peopleNetEmployeeIds, setPeopleNetEmployeeIds] = useState("");
  mockState.mockReturnValue({
    sourceMode: "peoplenet",
    setSourceMode,
    peopleNetPeriod,
    setPeopleNetPeriod,
    peopleNetEmployeeIds,
    setPeopleNetEmployeeIds,
    pdfFiles: [],
    setPdfFiles: vi.fn(),
    registroFile: undefined,
    setRegistroFile: vi.fn(),
    settings: { defaultTolerance: 1 },
    updateSettings: vi.fn(),
    analyzing: false,
    error: undefined,
    status: "Pendiente de archivos",
    analyze,
  });
  return <UploadPanel />;
}

describe("análisis desde PeopleNet", () => {
  it("sustituye la subida por el periodo y las matrículas, y analiza sin ficheros", async () => {
    const user = userEvent.setup();
    const analyze = vi.fn();
    render(<PeopleNetHarness analyze={analyze} />);
    expect(screen.queryByRole("button", { name: "Seleccionar recibos" })).toBeNull();
    expect((screen.getByLabelText("Desde") as HTMLInputElement).value).toBe("2025-01");
    expect((screen.getByLabelText("Hasta") as HTMLInputElement).value).toBe("2025-12");
    await user.type(screen.getByLabelText("Matrículas (opcional)"), "1023, 1045");
    expect(screen.getByRole("status").textContent).toBe("Listo para leer de PeopleNet.");
    await user.click(screen.getByRole("button", { name: "Analizar" }));
    expect(analyze).toHaveBeenCalledTimes(1);
  });

  it("bloquea un periodo de más de un año con un motivo visible", () => {
    render(<PeopleNetHarness initialPeriod={{ from: "2024-01-01", to: "2025-12-31" }} />);
    expect(screen.getByRole("button", { name: "Analizar" }).hasAttribute("disabled")).toBe(true);
    expect(screen.getByRole("status").textContent).toBe("El periodo no puede superar doce meses.");
  });

  it("cambia de origen desde las pestañas sin perder la subida de ficheros", async () => {
    const user = userEvent.setup();
    const setSourceMode = vi.fn();
    render(<PeopleNetHarness setSourceMode={setSourceMode} />);
    expect(screen.getByRole("tab", { name: "Desde PeopleNet" }).getAttribute("aria-selected")).toBe("true");
    await user.click(screen.getByRole("tab", { name: "Subir ficheros" }));
    expect(setSourceMode).toHaveBeenCalledWith("files");
  });
});
