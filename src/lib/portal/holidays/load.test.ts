import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import type { PortalContext } from "../context";
import { loadHolidayPage } from "./load";

const mocks = vi.hoisted(() => ({ read: vi.fn() }));
vi.mock("../data/holidays", () => ({ getHolidayCalendar: mocks.read }));

const debugContext = { mode: "unavailable", reason: "debug", message: "Sin Meta4" } as const;
const context: PortalContext = {
  mode: "meta4",
  society: "CYC",
  username: "TEST",
  variant: "CYC",
  identity: { status: "unresolved", message: "Perfil pendiente" },
};
const auth = (mode: "meta4" | "debug"): ResolvedAuthSession => ({
  sessionId: "test",
  cookieHash: "test",
  expiresAt: new Date("2099-01-01"),
  lastValidatedAt: null,
  authContext:
    mode === "debug"
      ? { mode, username: "DEBUG", canUseMeta4: false, societyCode: null, availableSocieties: [] }
      : {
          mode,
          username: "TEST",
          canUseMeta4: true,
          societyCode: "CYC",
          availableSocieties: ["CYC"],
        },
});

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2026-10-21T12:00:00Z"));
  vi.stubEnv("NODE_ENV", "development");
  vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
  mocks.read.mockReset();
  mocks.read.mockResolvedValue({
    status: "unavailable",
    message: "Contrato pendiente",
    pending: ["P02"],
  });
});
afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllEnvs();
});

describe("carga del calendario", () => {
  it("debug autenticado usa la muestra del año actual sin leer PeopleNet", async () => {
    const result = await loadHolidayPage(auth("debug"), debugContext);
    expect(result).toMatchObject({ status: "ok", debug: true, data: { year: 2026 } });
    expect(mocks.read).not.toHaveBeenCalled();
  });
  it.each(["production", "test"])(
    "bloquea la muestra en %s aunque el flag esté habilitado",
    async (mode) => {
      vi.stubEnv("NODE_ENV", mode);
      expect(await loadHolidayPage(auth("debug"), debugContext)).toMatchObject({
        status: "unavailable",
      });
      expect(mocks.read).not.toHaveBeenCalled();
    },
  );
  it("bloquea la muestra con el flag apagado o un contexto distinto", async () => {
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "false");
    expect(await loadHolidayPage(auth("debug"), debugContext)).toMatchObject({
      status: "unavailable",
    });
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
    expect(await loadHolidayPage(auth("debug"), context)).toMatchObject({ status: "unavailable" });
    expect(mocks.read).not.toHaveBeenCalled();
  });
  it("una sesión real no usa la muestra, conserva el contexto y la dependencia", async () => {
    expect(await loadHolidayPage(auth("meta4"), context)).toMatchObject({
      status: "unavailable",
      pending: ["P02"],
    });
    expect(mocks.read).toHaveBeenCalledExactlyOnceWith(context);
  });
  it("distingue lectura vacía, ausencia comprobada de calendario y error", async () => {
    mocks.read.mockResolvedValue({
      status: "ok",
      society: "CYC",
      data: { year: 2026, holidays: [] },
    });
    expect(await loadHolidayPage(auth("meta4"), context)).toEqual({
      status: "ok",
      debug: false,
      data: { year: 2026, holidays: [] },
    });
    mocks.read.mockResolvedValue({ status: "ok", society: "CYC", data: null });
    expect(await loadHolidayPage(auth("meta4"), context)).toEqual({
      status: "unassigned",
      year: 2026,
    });
    mocks.read.mockResolvedValue({ status: "error", message: "Error de lectura" });
    expect(await loadHolidayPage(auth("meta4"), context)).toEqual({
      status: "error",
      message: "Error de lectura",
    });
  });
  it.each([null, { year: 2026, holidays: [] }])(
    "rechaza datos de otra sociedad, también sin asignación",
    async (data) => {
      mocks.read.mockResolvedValue({ status: "ok", society: "IBER", data });
      expect(await loadHolidayPage(auth("meta4"), context)).toMatchObject({ status: "error" });
    },
  );
  it("rechaza otro año y cambia de ejercicio según Madrid", async () => {
    mocks.read.mockResolvedValue({
      status: "ok",
      society: "CYC",
      data: { year: 2025, holidays: [] },
    });
    expect(await loadHolidayPage(auth("meta4"), context)).toMatchObject({ status: "error" });
    vi.setSystemTime(new Date("2026-12-31T23:00:00Z"));
    expect(await loadHolidayPage(auth("debug"), debugContext)).toMatchObject({
      status: "ok",
      data: { year: 2027 },
    });
  });
});
