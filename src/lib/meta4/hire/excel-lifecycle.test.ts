import { EventEmitter } from "node:events";
import { PassThrough } from "node:stream";
import { afterEach, describe, expect, it, vi } from "vitest";
import { EXCEL_LIFECYCLE, runOwnedExcel } from "./excel-lifecycle";

const { spawn } = vi.hoisted(() => ({ spawn: vi.fn() }));
vi.mock("node:child_process", () => ({ spawn }));
class Host extends EventEmitter {
  stdout = new PassThrough();
  stderr = new PassThrough();
  kill = vi.fn(() => true);
}
afterEach(() => {
  vi.useRealTimers();
  spawn.mockReset();
});

describe("propiedad y cierre de Excel", () => {
  it("identifica mediante Hwnd y comprueba nombre e instante de creación antes de cerrar", () => {
    expect(EXCEL_LIFECYCLE).toContain('InvokeMember("Hwnd"');
    expect(EXCEL_LIFECYCLE).toContain("GetWindowThreadProcessId");
    expect(EXCEL_LIFECYCLE).toContain("$existingExcel -contains $owner");
    expect(EXCEL_LIFECYCLE).toContain(
      "$owned.StartTime.ToUniversalTime().Ticks.ToString() -eq $script:excelOwnerTicks",
    );
    expect(EXCEL_LIFECYCLE).not.toContain("Compare-Object");
  });
  it("espera la salida de PowerShell y el cierre de su Excel antes de resolver", async () => {
    const editor = new Host(),
      cleanup = new Host();
    spawn.mockReturnValueOnce(editor).mockReturnValueOnce(cleanup);
    let finished = false;
    const onOwner = vi.fn();
    const work = runOwnedExcel(
      "powershell.exe",
      "fixture.ps1",
      { WorkbookPath: "temporary.xls" },
      { onOwner },
    ).then((result) => {
      finished = true;
      return result;
    });
    editor.stdout.write("EXCEL_OWNER=42:123");
    expect(onOwner).not.toHaveBeenCalled();
    editor.stdout.write("456\r\n");
    expect(onOwner).toHaveBeenCalledWith({ pid: 42, ticks: "123456" });
    await Promise.resolve();
    expect(finished).toBe(false);
    editor.emit("close", 0);
    await Promise.resolve();
    expect(finished).toBe(false);
    expect(spawn).toHaveBeenCalledTimes(2);
    const command: string = spawn.mock.calls[1][1].at(-1);
    expect(command).toContain("-OwnerId 42 -OwnerTicks '123456'");
    expect(command).toContain('$owned.ProcessName -eq "EXCEL"');
    expect(command).toContain(
      "$owned.StartTime.ToUniversalTime().Ticks.ToString() -eq $OwnerTicks",
    );
    cleanup.emit("close", 0);
    expect(await work).toEqual({ ok: true, owner: { pid: 42, ticks: "123456" } });
  });
  it("cancela con reserva para limpiar y nunca elige otro proceso", async () => {
    vi.useFakeTimers();
    const editor = new Host(),
      cleanup = new Host();
    spawn.mockReturnValueOnce(editor).mockReturnValueOnce(cleanup);
    const work = runOwnedExcel(
      "powershell.exe",
      "fixture.ps1",
      {},
      { deadline: Date.now() + 10000 },
    );
    editor.stdout.write("EXCEL_OWNER=42:123456\n");
    await vi.advanceTimersByTimeAsync(5000);
    expect(editor.kill).toHaveBeenCalledOnce();
    editor.emit("close", null);
    cleanup.emit("close", 0);
    expect(await work).toMatchObject({ ok: false, exitCode: null, owner: { pid: 42 } });
    expect(spawn).toHaveBeenCalledTimes(2);
  });
  it("sin propiedad comprobada no termina ninguna instancia Excel", async () => {
    const editor = new Host();
    spawn.mockReturnValue(editor);
    const work = runOwnedExcel("powershell.exe", "fixture.ps1", {});
    editor.emit("close", 0);
    expect(await work).toMatchObject({
      ok: false,
      stderr: expect.stringContaining("EXCEL_OWNERSHIP_UNVERIFIED"),
    });
    expect(spawn).toHaveBeenCalledOnce();
  });
  it("un cierre que no responde falla dentro de los cinco segundos reservados", async () => {
    vi.useFakeTimers();
    const editor = new Host(),
      cleanup = new Host();
    spawn.mockReturnValueOnce(editor).mockReturnValueOnce(cleanup);
    const work = runOwnedExcel("powershell.exe", "fixture.ps1", {});
    editor.stdout.write("EXCEL_OWNER=42:123456\n");
    editor.emit("close", 0);
    await vi.advanceTimersByTimeAsync(5000);
    expect(await work).toMatchObject({
      ok: false,
      stderr: expect.stringContaining("EXCEL_CLOSE_TIMEOUT"),
    });
    expect(cleanup.kill).toHaveBeenCalledOnce();
  });
});
