import "server-only";

import sql from "mssql";

import type { Meta4Society } from "@/lib/meta4/societies";
import { getPeopleNetPool } from "@/lib/peoplenet/client";

import { Meta4HireError, type Meta4HireIssue } from "./errors";
import type { HirePerson } from "./types";

type ExistingPersonRow = { personId: string | number | null; document: string | null };

/** Documents compare without spaces or hyphens and in upper case. */
export const normalizeHireDocument = (value: string): string =>
  value.replace(/[\s-]/g, "").toUpperCase();

/**
 * PeopleNet persons whose document (STD_PERSON.STD_SSN) matches one being hired.
 * Read-only SELECT; returns document → person ID.
 */
export const findExistingHireDocuments = async (
  documents: readonly string[],
): Promise<ReadonlyMap<string, string>> => {
  const unique = [...new Set(documents.map(normalizeHireDocument).filter(Boolean))];
  if (unique.length === 0) return new Map();
  const pool = await getPeopleNetPool();
  const request = pool.request();
  unique.forEach((document, index) => request.input(`doc${index}`, sql.VarChar(30), document));
  const list = unique.map((_, index) => `@doc${index}`).join(", ");
  const result = await request.query<ExistingPersonRow>(
    `SELECT STD_ID_PERSON AS personId, STD_SSN AS document
FROM STD_PERSON
WHERE UPPER(REPLACE(REPLACE(STD_SSN, ' ', ''), '-', '')) IN (${list})`,
  );
  const found = new Map<string, string>();
  for (const row of result.recordset) {
    if (row.document === null || row.personId === null) continue;
    found.set(normalizeHireDocument(row.document), String(row.personId).trim());
  }
  return found;
};

/**
 * Meta4 reuses the existing person with the same document instead of creating
 * one (the import modified person 1815 three times in PRE), so the launch stops.
 */
export const assertNewHireDocuments = (
  people: readonly HirePerson[],
  existing: ReadonlyMap<string, string>,
): void => {
  const issues: Meta4HireIssue[] = [];
  people.forEach((person, index) => {
    const personId = existing.get(normalizeHireDocument(person.documentNumber));
    if (personId === undefined) return;
    issues.push({
      person: index + 1,
      field: "documentNumber",
      message: `Núm. de documento: ya existe en PeopleNet (persona ${personId}); Meta4 modificaría esa persona en vez de crear una nueva.`,
    });
  });
  if (issues.length === 0) return;
  throw new Meta4HireError(
    "META4_HIRE_VALIDATION",
    issues.length === 1
      ? "El documento ya existe en PeopleNet."
      : `${issues.length} documentos ya existen en PeopleNet.`,
    issues,
  );
};

type SequenceRow = { process: string; sequence: number | string | null };
type PersonIdRow = { personId: string | number | null };

export type HireCounterProcess = "STD_PERSON" | "STD_PERSON_BEC";

/** Interns (contrato interno BEC/BEC1) take a separate counter with a «BC» prefix. */
export const hireCounterProcess = (person: HirePerson): HireCounterProcess =>
  person.internalContract === "BEC" || person.internalContract === "BEC1"
    ? "STD_PERSON_BEC"
    : "STD_PERSON";

/** Same format as SRCO_BLOCK_BEFORE_PERSIST_CO: «BC» for interns, four digits in COLL. */
export const formatHirePersonId = (
  process: HireCounterProcess,
  society: Meta4Society,
  sequence: number,
): string => {
  const value = String(sequence);
  if (process === "STD_PERSON_BEC") return `BC${value}`;
  return society === "COLL" ? value.padStart(4, "0") : value;
};

/** IDs looked at after the counter; more taken in a row means the counter is far behind. */
export const HIRE_ID_LOOKAHEAD = 50;

export type HirePersonIdCandidate = { id: string; sequence: number };

export type HirePersonIdChoice = HirePersonIdCandidate & {
  process: HireCounterProcess;
  /** M4CSP_BLOCK_SEQ when the ID was chosen. */
  counter: number;
};

export const hirePersonIdCandidates = (
  process: HireCounterProcess,
  society: Meta4Society,
  counter: number,
  lookahead = HIRE_ID_LOOKAHEAD,
): HirePersonIdCandidate[] =>
  Array.from({ length: lookahead }, (_, offset) => {
    const sequence = counter + 1 + offset;
    return { sequence, id: formatHirePersonId(process, society, sequence) };
  });

/** First candidate neither in STD_PERSON nor given earlier in the batch. */
export const pickFreeHirePersonId = (
  candidates: readonly HirePersonIdCandidate[],
  taken: ReadonlySet<string>,
  reserved: ReadonlySet<string>,
): HirePersonIdCandidate | null =>
  candidates.find((candidate) => !taken.has(candidate.id) && !reserved.has(candidate.id)) ?? null;

/** M4CSP_BLOCK_SEQ of the society for persons and interns (read-only). */
export const readHireCounters = async (
  society: Meta4Society,
): Promise<ReadonlyMap<HireCounterProcess, number>> => {
  const pool = await getPeopleNetPool();
  const result = await pool
    .request()
    .input("organization", sql.VarChar(4), society)
    .query<SequenceRow>(
      `SELECT SCO_ID_PROCESS AS process, SCO_SEQUENCE AS sequence
FROM M4CSP_BLOCK_SEQ
WHERE ID_ORGANIZATION = @organization AND SCO_ID_PROCESS IN ('STD_PERSON', 'STD_PERSON_BEC')`,
    );
  const counters = new Map<HireCounterProcess, number>();
  for (const row of result.recordset) {
    const process = row.process.trim();
    const value = Number(row.sequence);
    if ((process === "STD_PERSON" || process === "STD_PERSON_BEC") && Number.isFinite(value)) {
      counters.set(process, value);
    }
  }
  return counters;
};

/**
 * ID written in «ID PERSONA» so Meta4 does not take its counter: in PRE the
 * import creates the person with counter + 1 but never saves the counter, so
 * the next hire would overwrite it. Starts after M4CSP_BLOCK_SEQ and skips the
 * IDs already in STD_PERSON or given earlier in the batch (read-only).
 * `null` when the society has no counter: the cell stays empty.
 */
export const chooseHirePersonId = async (
  person: HirePerson,
  society: Meta4Society,
  reserved: ReadonlySet<string>,
): Promise<HirePersonIdChoice | null> => {
  const process = hireCounterProcess(person);
  const counter = (await readHireCounters(society)).get(process);
  if (counter === undefined) return null;
  const candidates = hirePersonIdCandidates(process, society, counter);
  const pool = await getPeopleNetPool();
  const request = pool.request();
  candidates.forEach((candidate, index) =>
    request.input(`id${index}`, sql.VarChar(20), candidate.id),
  );
  const result = await request.query<PersonIdRow>(
    `SELECT STD_ID_PERSON AS personId FROM STD_PERSON WHERE STD_ID_PERSON IN (${candidates
      .map((_, index) => `@id${index}`)
      .join(", ")})`,
  );
  const taken = new Set(
    result.recordset
      .map((row) => (row.personId === null ? "" : String(row.personId).trim()))
      .filter(Boolean),
  );
  const free = pickFreeHirePersonId(candidates, taken, reserved);
  if (!free) {
    throw new Meta4HireError(
      "META4_HIRE_VALIDATION",
      "El contador de personas de Meta4 está muy atrasado.",
      [
        {
          message: `Los ${HIRE_ID_LOOKAHEAD} IDs siguientes al contador (${process} = ${counter}) ya existen en PeopleNet; avisa al administrador de Meta4 para que suba M4CSP_BLOCK_SEQ.`,
        },
      ],
    );
  }
  return { ...free, process, counter };
};
