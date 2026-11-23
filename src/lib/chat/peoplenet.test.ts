import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ResolvedAuthSession } from "@/lib/auth/service";
import { detectPeopleNetTurn, type PeopleNetQuery } from "./peoplenet-query";
import { executePeopleNetQuery, PeopleNetScopeError } from "./peoplenet-service";
import { peopleNetResultSchema } from "./peoplenet-result";

const mocks = vi.hoisted(() => ({ pool: vi.fn(), operational: vi.fn(), quinquenal: vi.fn() }));
vi.mock("@/lib/peoplenet/client", () => ({ getPeopleNetPool: mocks.pool }));
vi.mock("@/lib/meta4/operational-context", () => ({
  getMeta4OperationalContext: mocks.operational,
}));
vi.mock("@/lib/peoplenet/quinquenal", () => ({ getQuinquenalReport: mocks.quinquenal }));

const auth: ResolvedAuthSession = {
  sessionId: "debug-session",
  cookieHash: "debug-cookie",
  expiresAt: new Date("2027-01-01"),
  lastValidatedAt: null,
  authContext: {
    mode: "debug",
    username: "DEBUG",
    canUseMeta4: false,
    societyCode: null,
    availableSocieties: [],
  },
};

function query(text: string, previous?: PeopleNetQuery) {
  const turn = detectPeopleNetTurn(text, previous);
  if (turn.kind !== "query") throw new Error("La prueba esperaba una consulta de PeopleNet.");
  return turn.query;
}

const execute = (input: PeopleNetQuery, page = 0) =>
  executePeopleNetQuery(input, auth, "company-debug", page, new AbortController().signal);

describe("Lenguaje de consulta de PeopleNet", () => {
  it("distingue manual, adjunto, alta y consultas reales", () => {
    expect(detectPeopleNetTurn("¿Cómo se consulta una nómina?").kind).toBe("general");
    expect(detectPeopleNetTurn("¿Cómo puedo consultar el sueldo de un empleado?").kind).toBe(
      "general",
    );
    expect(detectPeopleNetTurn("Pasa esta nómina adjunta a conceptos en LN4").kind).toBe("general");
    expect(detectPeopleNetTurn("Como se hace un alta paso a paso?").kind).toBe("general");
    expect(detectPeopleNetTurn("Da de alta a una persona").kind).toBe("clarify");
    expect(detectPeopleNetTurn("¿Cómo consulto la nómina de matrícula 90001?").kind).toBe(
      "clarify",
    );
    expect(query("PeopleNet: consulta la nómina de 09001 en octubre de 2026")).toMatchObject({
      person: { type: "id", value: "09001" },
      periods: [{ year: 2026, month: 10 }],
    });
    expect(query("Dime el correo de Ana López").person).toEqual({
      type: "name",
      value: "ana lopez",
    });
    expect(query("¿Cuánto cobró Ana López en octubre de 2026?").person).toEqual({
      type: "name",
      value: "ana lopez",
    });
  });

  it("conserva el alcance del seguimiento y reconoce fechas", () => {
    const previous = query("Consulta la nómina de matrícula 90001 de enero de 2026");
    expect(query("Compárala con la del mes anterior", previous)).toMatchObject({
      person: previous.person,
      compare: true,
      periods: [
        { year: 2026, month: 1 },
        { year: 2025, month: 12 },
      ],
    });
    expect(query("Y en octubre?", previous).periods).toEqual([{ year: 2026, month: 10 }]);
    expect(query("Nómina de matrícula 2025 del 2026-10-25").periods).toEqual([
      { year: 2026, month: 10, day: 25 },
    ]);
    expect(detectPeopleNetTurn("Y en octubre?").kind).toBe("general");
    expect(query("90002", previous).person).toEqual({ type: "id", value: "90002" });
    const directory = query("Lista todos los usuarios de la unidad Tecnología");
    expect(query("¿Cuántos tienen correo informado?", directory).filters).toEqual([
      { field: "unit", value: "tecnologia" },
    ]);
  });
});

describe("Lecturas de PeopleNet en DEBUG", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("POWERMETA4_DEBUG_AUTH", "true");
  });
  afterEach(() => {
    expect(mocks.pool).not.toHaveBeenCalled();
    expect(mocks.operational).not.toHaveBeenCalled();
    expect(mocks.quinquenal).not.toHaveBeenCalled();
    vi.unstubAllEnvs();
  });

  it.each([
    [
      "Lista los usuarios con nombre y correo principal. ¿Cuántos tienen correo informado?",
      "Listado de usuarios",
    ],
    [
      "Consulta la nómina ordinaria de matrícula 90001 de octubre de 2026 y muestra el líquido y el desglose de devengos y deducciones",
      "Consultar una nómina",
    ],
    [
      "En el quinquenal de matrícula 90001 compara la retribución y el coeficiente de jornada de 2025 y 2026",
      "Consultar quinquenal",
    ],
    [
      "Busca la ejecución guardada de «Informe Normal» de septiembre de 2026 y suma la columna Salario Base",
      "Resultados de nómina",
    ],
    [
      "En la proyección de matrícula 90001 de 2026, desglosa la compensación total",
      "Consultar proyecciones",
    ],
    [
      "Consulta el certificado de retenciones de matrícula 90001 de 2025 y las retribuciones dinerarias",
      "Consultar certificado de retenciones",
    ],
    [
      "En Primavera, compara los descuadres de septiembre y octubre de 2026. Indica qué empleados presentan diferencias",
      "Primavera",
    ],
  ])("resuelve «%s» sin tocar PeopleNet", async (prompt, label) => {
    const result = await execute(query(prompt));
    expect(result).toMatchObject({ debug: true, source: { label } });
    expect(result.rows.length).toBeGreaterThan(0);
    expect(peopleNetResultSchema.safeParse(result).success).toBe(true);
  });

  it("cuenta antes de paginar y conserva filas sin correo", async () => {
    const directory = await execute(
      query("Lista los usuarios con nombre y correo principal. ¿Cuántos tienen correo informado?"),
    );
    expect(directory.total).toBe(5);
    expect(directory.calculations).toContainEqual({
      label: "Usuarios con correo principal",
      value: 4,
    });
    const first = await execute(query("Cuenta todas las filas de Primavera en 2026"));
    const last = await execute(query("Cuenta todas las filas de Primavera en 2026"), 1);
    expect(first.rows).toHaveLength(25);
    expect(last.rows).toHaveLength(11);
    expect(first.calculations).toEqual(last.calculations);
    expect(last.calculations).toContainEqual({ label: "Filas que coinciden", value: 36 });
  });

  it("distingue una fecha inválida de una persona ausente", async () => {
    const date = await execute(query("Consulta la nómina de matrícula 90001 del 2026-02-31"));
    expect(date.message).toMatch(/periodo válido/);
    const employee = await execute(
      query("Consulta la nómina de matrícula 00000 de octubre de 2026"),
    );
    expect(employee.message).toMatch(/no se ha encontrado/i);
  });
});

it("verifica que sociedad y workspace coincidan antes de leer un informe", async () => {
  mocks.operational.mockResolvedValue({ mode: "meta4", companyId: "otra", society: "IBER" });
  await expect(
    executePeopleNetQuery(
      query("Consulta el quinquenal"),
      {
        ...auth,
        authContext: { ...auth.authContext, mode: "meta4", canUseMeta4: true },
      },
      "company-1",
      0,
      new AbortController().signal,
    ),
  ).rejects.toBeInstanceOf(PeopleNetScopeError);
  expect(mocks.quinquenal).not.toHaveBeenCalled();
});
