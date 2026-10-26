/**
 * Compara el Registro Retributivo que powermeta4 recalcula desde PeopleNet con
 * el Excel que genera PeopleNet para la misma sociedad y periodo
 * (`npm run retributivo:verify -- <excel> <sociedad> <desde> <hasta> [matrícula…]`).
 * Solo ejecuta `SELECT` y solo imprime recuentos y códigos de concepto; nunca
 * importes ni datos de empleados.
 */
import { readFileSync } from "node:fs";

import { parseRegistroRetributivo } from "../../src/features/registro-retributivo/parsers/registroRetributivoParser";
import { loadRegistroFromPeopleNet } from "../../src/features/registro-retributivo/peoplenet/registro-query";
import { periodDays } from "../../src/features/registro-retributivo/peoplenet/request";
import type { MoneyByBlock, RegistroEmployee } from "../../src/features/registro-retributivo/types";
import { normalizeEmployeeNumber } from "../../src/features/registro-retributivo/utils/normalize";
import { isMeta4Society } from "../../src/lib/meta4/societies";
import { getPeopleNetPool } from "../../src/lib/peoplenet/client";
import { getPayrollReceiptsForSociety } from "../../src/lib/peoplenet/payroll-receipt";

const USAGE =
  "Uso: npm run retributivo:verify -- <excel> <sociedad> <desde AAAA-MM-DD> <hasta AAAA-MM-DD> [matrícula…]";

const loadEnv = () => {
  for (const file of [".env.local", ".env"]) {
    try {
      process.loadEnvFile(file);
    } catch {
      // El fichero es opcional: las variables pueden venir del entorno.
    }
  }
};

const same = (a: number, b: number) => Math.abs(a - b) < 0.011;

type Tally = { ok: number; ko: number };
const tally = (map: Map<string, Tally>, key: string, equal: boolean) => {
  const current = map.get(key) ?? { ok: 0, ko: 0 };
  if (equal) current.ok += 1;
  else current.ko += 1;
  map.set(key, current);
};

const GROUPS = ["normalizedPlusVariables", "normalized", "periodComplete"] as const;

const BLOCKS: readonly (keyof MoneyByBlock)[] = [
  "salary",
  "salaryComplement",
  "extraSalary",
  "total",
];

const main = async () => {
  loadEnv();
  const [file, society, from, to, ...employeeIds] = process.argv.slice(2);
  if (!file || !society || !from || !to) throw new Error(USAGE);
  if (!isMeta4Society(society)) throw new Error(`Sociedad no válida. ${USAGE}`);
  const days = periodDays(from, to);
  if (days === null || days < 1 || days > 366) throw new Error(`Periodo no válido. ${USAGE}`);

  const excel = await parseRegistroRetributivo(readFileSync(file));
  const filter = new Set(employeeIds.map(normalizeEmployeeNumber));
  const pick = (records: readonly RegistroEmployee[]) =>
    new Map(
      records
        .filter(
          (record) => !filter.size || filter.has(normalizeEmployeeNumber(record.employeeNumber)),
        )
        .map((record) => [normalizeEmployeeNumber(record.employeeNumber), record]),
    );

  const [peopleNet, { receipts }] = await Promise.all([
    loadRegistroFromPeopleNet({
      organization: society,
      from,
      to,
      employeeIds: employeeIds.length ? employeeIds : undefined,
    }),
    getPayrollReceiptsForSociety({
      organization: society,
      fromAllocDate: from,
      toAllocDate: to,
      employeeIds: employeeIds.length ? employeeIds : undefined,
    }),
  ]);

  const expected = pick(excel.records);
  const actual = pick(peopleNet.records);
  const concepts = new Map<string, Tally>();
  const blocks = new Map<string, Tally>();
  const failing = new Set<string>();

  for (const [id, excelRow] of expected) {
    const mine = actual.get(id);
    if (!mine) continue;
    const mineConcepts = new Map(mine.concepts.map((concept) => [concept.code, concept.amount]));
    for (const concept of excelRow.concepts) {
      const equal = same(mineConcepts.get(concept.code) ?? 0, concept.amount);
      tally(concepts, concept.code, equal);
      if (!equal) failing.add(id);
    }
    for (const group of GROUPS) {
      for (const block of BLOCKS) {
        const equal = same(mine[group][block], excelRow[group][block]);
        tally(blocks, `${group}.${block}`, equal);
        if (!equal) failing.add(id);
      }
    }
    for (const [field, value] of Object.entries(excelRow.nonNormalized)) {
      const key = field as keyof RegistroEmployee["nonNormalized"];
      const equal = same(mine.nonNormalized[key], value);
      tally(blocks, `nonNormalized.${field}`, equal);
      if (!equal) failing.add(id);
    }
  }

  const peopleNetCodes = new Set(Object.values(peopleNet.conceptCodes).flat());
  const missingCodes = [
    ...new Set(excel.records.flatMap((record) => record.concepts.map((concept) => concept.code))),
  ].filter((code) => !peopleNetCodes.has(code));

  console.log(`Sociedad ${society} · meses imputados ${from} a ${to}`);
  console.log(`Personas: Excel ${expected.size} · powermeta4 ${actual.size}`);
  console.log(
    `Solo en Excel: ${[...expected.keys()].filter((id) => !actual.has(id)).length} · solo en powermeta4: ${[...actual.keys()].filter((id) => !expected.has(id)).length}`,
  );
  console.log(`Recibos leídos de PeopleNet: ${receipts.length}`);
  console.log(
    `Columnas de concepto del Excel sin equivalente en PeopleNet: ${missingCodes.length ? missingCodes.join(", ") : "ninguna"}`,
  );
  const blockFailures = [...blocks].filter(([, value]) => value.ko > 0);
  console.log(`Bloques idénticos: ${blocks.size - blockFailures.length}/${blocks.size}`);
  for (const [key, value] of blockFailures) {
    console.log(`  ${key}: ${value.ok} coinciden · ${value.ko} distintas`);
  }
  const conceptFailures = [...concepts].filter(([, value]) => value.ko > 0);
  console.log(`Conceptos idénticos: ${concepts.size - conceptFailures.length}/${concepts.size}`);
  for (const [code, value] of conceptFailures) {
    console.log(`  ${code}: ${value.ok} coinciden · ${value.ko} distintas`);
  }
  console.log(`Personas con alguna diferencia: ${failing.size}`);
  if (peopleNet.warnings.length)
    console.log(`Avisos: ${peopleNet.warnings.length}\n  ${peopleNet.warnings.join("\n  ")}`);

  const pool = await getPeopleNetPool();
  await pool.close();
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? `${error.name}: ${error.message}` : error);
  process.exitCode = 1;
});
