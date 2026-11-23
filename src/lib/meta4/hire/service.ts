import "server-only";

import path from "node:path";

import type { ResolvedAuthSession } from "@/lib/auth/service";
import {
  Meta4SessionRequiredError,
  SessionExpiredError,
} from "@/lib/meta4/authenticated-soap-client";
import { Meta4HttpError } from "@/lib/meta4/client";
import { getMeta4OperationalContext } from "@/lib/meta4/operational-context";
import { Meta4ProfileError } from "@/lib/meta4/profile-errors";
import { executeAuthenticatedSoap } from "@/lib/meta4/server";
import { Meta4SoapFaultError } from "@/lib/meta4/soap-xml";
import type { Meta4Society } from "@/lib/meta4/societies";

import { editHireWorkbook, type EditHireWorkbookOptions } from "./excel";
import { Meta4HireError, isMeta4HireError } from "./errors";
import { buildHireFileName, buildHireFilePath } from "./filename";
import { readHireImportLog, type HireImportLogRow } from "./import-log";
import { findPendingHireImports, waitForHireImport, type HireImportOutcome } from "./import-status";
import { hireExecutionQueue, type SerializedTask } from "./mutex";
import {
  assertNewHireDocuments,
  chooseHirePersonId,
  findExistingHireDocuments,
  normalizeHireDocument,
  readHireCounters,
  type HirePersonIdChoice,
} from "./existing-people";
import { parseLaunchImportResponse } from "./parser";
import { loadHireCatalogsForLaunch } from "./catalog-queries";
import { assertHireCatalogSelections, type HireCatalogs } from "./catalogs";
import {
  buildLaunchImportEnvelope,
  getMeta4HireDirectory,
  getMeta4HireTemplatePath,
  getMeta4HireUrl,
} from "./soap";
import type { HireLaunchResult, HirePerson } from "./types";
import { parseHirePeople } from "./validate";
import { verifyWrittenHireFile, writeHireFileAtomically } from "./write-file";

export const HIRE_SOAP_TIMEOUT_MS = 60_000;

type HireFile = { fileName: string; filePath: string };

export type LaunchMeta4HireDeps = {
  getOperationalContext?: typeof getMeta4OperationalContext;
  executeSoap?: typeof executeAuthenticatedSoap;
  loadCatalogs?: (society: Meta4Society, placeIds: readonly string[]) => Promise<HireCatalogs>;
  findExistingDocuments?: (documents: readonly string[]) => Promise<ReadonlyMap<string, string>>;
  choosePersonId?: typeof chooseHirePersonId;
  readCounters?: typeof readHireCounters;
  editHireWorkbook?: (
    templatePath: string,
    people: readonly HirePerson[],
    options?: EditHireWorkbookOptions,
  ) => Promise<Buffer>;
  writeHireFile?: typeof writeHireFileAtomically;
  verifyHireFile?: (filePath: string) => Promise<void>;
  hireUrl?: string;
  hireDirectory?: string;
  templatePath?: string;
  now?: () => Date;
  serialize?: SerializedTask;
  readImportLog?: (filePath: string) => Promise<readonly HireImportLogRow[] | null>;
  waitForImport?: (fileName: string) => Promise<HireImportOutcome>;
  findPendingImports?: typeof findPendingHireImports;
  log?: (message: string, details: Record<string, string>) => void;
};

const isKnownSystemError = (error: unknown): boolean =>
  error instanceof Meta4SessionRequiredError ||
  error instanceof SessionExpiredError ||
  error instanceof Meta4SoapFaultError ||
  error instanceof Meta4HttpError ||
  error instanceof Meta4ProfileError ||
  isMeta4HireError(error);

const safeLog = (log: LaunchMeta4HireDeps["log"], details: Record<string, string>): void => {
  log?.("meta4-hire", details);
};

/** The import ran (or may have run) only after these outcomes; others never reached it. */
const importMayHaveRun = (error: unknown): boolean =>
  error instanceof Meta4SoapFaultError ||
  (isMeta4HireError(error) && error.code === "META4_HIRE_IMPORT_FAILED");

/**
 * PeopleNet's own log decides per person: its rejections become a controlled
 * error with each person's message. The text may contain personal data, so
 * only counts are logged here.
 */
const rejectFromImportLog = async (
  readImportLog: NonNullable<LaunchMeta4HireDeps["readImportLog"]>,
  filePath: string,
  log: LaunchMeta4HireDeps["log"],
  firstPerson: number,
): Promise<void> => {
  const rows = await readImportLog(filePath).catch(() => null);
  if (!rows) return;
  const failed = rows.filter((row) => row.failed);
  safeLog(log, {
    operation: "SRTC_LAUNCH_IMPORT",
    code: failed.length > 0 ? "IMPORT_LOG_REJECTED" : "IMPORT_LOG_OK",
    rows: String(rows.length),
    failed: String(failed.length),
  });
  if (failed.length === 0) return;
  const issues = failed.map((row) => ({
    person: firstPerson + row.person - 1,
    message: row.message || "PeopleNet no indicó el motivo.",
  }));
  throw new Meta4HireError(
    "META4_HIRE_IMPORT_REJECTED",
    `PeopleNet rechazó el alta de ${issues.length === 1 ? "1 persona" : `${issues.length} personas`}.`,
    issues,
  );
};

/**
 * Meta4 creates the person with counter + 1 but leaves M4CSP_BLOCK_SEQ as it
 * was, so a hire made by hand in Meta4 would take an ID already given here.
 */
const counterNoteFor = (
  choices: readonly HirePersonIdChoice[],
  counters: ReadonlyMap<string, number> | null,
): string | undefined => {
  const highest = new Map<string, number>();
  for (const choice of choices) {
    highest.set(choice.process, Math.max(highest.get(choice.process) ?? 0, choice.sequence));
  }
  const behind = [...highest].filter(([process, sequence]) => {
    const current = counters?.get(process);
    return current === undefined || current < sequence;
  });
  if (behind.length === 0) return undefined;
  const target = behind.map(([process, sequence]) => `${process} en ${sequence}`).join(" y ");
  const now = counters
    ? `; ahora está en ${behind.map(([process]) => counters.get(process) ?? "blanco").join(" y ")}`
    : "";
  return `El contador de personas de Meta4 no ha subido: pon ${target} en M4CSP_BLOCK_SEQ${now}, para que un alta hecha en Meta4 no choque con estos IDs.`;
};

const idList = (ids: readonly string[]): string =>
  ids.length === 1 ? `ID ${ids[0]}` : `IDs ${ids.join(", ")}`;

const resolveTemplatePath = (templatePath: string): string =>
  path.isAbsolute(templatePath)
    ? templatePath
    : path.resolve(/* turbopackIgnore: true */ process.cwd(), templatePath);

/**
 * Copies Hire_1_PERSONA.xls, edits it with Excel, and launches SRTC_LAUNCH_IMPORT,
 * one file and one finished import per person.
 * Catalog IDs are checked against the PeopleNet catalogs of the context society.
 * Operational context still gates DEBUG sessions before writing the file.
 * filePath is the same string used to write, verify, and fill ARG_PATH_FILE.
 */
export const launchMeta4Hire = async (
  authSession: ResolvedAuthSession,
  people: readonly HirePerson[],
  deps: LaunchMeta4HireDeps = {},
): Promise<HireLaunchResult> => {
  const getContext = deps.getOperationalContext ?? getMeta4OperationalContext;
  const executeSoap = deps.executeSoap ?? executeAuthenticatedSoap;
  const editWorkbook = deps.editHireWorkbook ?? editHireWorkbook;
  const writeHireFile = deps.writeHireFile ?? writeHireFileAtomically;
  const verifyHireFile = deps.verifyHireFile ?? verifyWrittenHireFile;
  const serialize = deps.serialize ?? hireExecutionQueue;
  const loadCatalogs = deps.loadCatalogs ?? loadHireCatalogsForLaunch;
  const readImportLog = deps.readImportLog ?? readHireImportLog;

  const context = await getContext(authSession);
  const catalogs = await loadCatalogs(
    context.society,
    people.map((person) => person.city),
  );
  assertHireCatalogSelections(people, catalogs, context.society);
  // Rules that need catalog names (document type) run once catalogs are loaded.
  const validated = parseHirePeople(people, { documentTypes: catalogs.documentType });
  const findExisting = deps.findExistingDocuments ?? findExistingHireDocuments;
  const existing = await findExisting(validated.map((person) => person.documentNumber)).catch(
    () => {
      throw new Meta4HireError(
        "META4_HIRE_CATALOG_UNAVAILABLE",
        "No se ha podido comprobar en PeopleNet si los documentos ya existen.",
      );
    },
  );
  assertNewHireDocuments(validated, existing);
  const choosePersonId = deps.choosePersonId ?? chooseHirePersonId;
  const readCounters = deps.readCounters ?? readHireCounters;
  const waitForImport = deps.waitForImport ?? waitForHireImport;
  const directory = getMeta4HireDirectory(deps.hireDirectory);
  const url = getMeta4HireUrl(deps.hireUrl);
  const templatePath = resolveTemplatePath(getMeta4HireTemplatePath(deps.templatePath));
  const startedAt = deps.now?.() ?? new Date();
  const files: HireFile[] = validated.map((_, index) => {
    const fileName = buildHireFileName(startedAt, validated.length > 1 ? index + 1 : undefined);
    return { fileName, filePath: buildHireFilePath(directory, fileName) };
  });

  const launchImport = (file: HireFile, count: number): Promise<HireLaunchResult> =>
    executeSoap({
      url,
      xml: buildLaunchImportEnvelope(file.filePath),
      timeoutMs: HIRE_SOAP_TIMEOUT_MS,
      parseResponse: async (response) => {
        const body = await response.text();

        if (!response.ok) {
          try {
            parseLaunchImportResponse(body);
          } catch (error) {
            if (error instanceof Meta4SoapFaultError) {
              // Safe to log verbatim: this call only ever sends
              // ARG_ID_GROUP_INTERFACE/ARG_PATH_FILE/flags to Meta4, never
              // any person field, so nothing personal can come back in a
              // fault on this specific operation.
              safeLog(deps.log, {
                operation: "SRTC_LAUNCH_IMPORT",
                status: String(response.status),
                code: "SOAP_FAULT",
                faultCode: error.code ?? "",
                faultMessage: error.message,
                personCount: String(count),
              });
              throw error;
            }
          }
          safeLog(deps.log, {
            operation: "SRTC_LAUNCH_IMPORT",
            status: String(response.status),
            code: "HTTP_ERROR",
            personCount: String(count),
          });
          throw new Meta4HttpError(response.status);
        }

        try {
          const parsed = parseLaunchImportResponse(body);
          safeLog(deps.log, {
            operation: "SRTC_LAUNCH_IMPORT",
            status: String(response.status),
            code: "OK",
            personCount: String(count),
          });
          return {
            personCount: count,
            returnCode: parsed.returnCode,
            fileName: file.fileName,
            filePath: file.filePath,
            personIds: [],
          };
        } catch (error) {
          if (error instanceof Meta4SoapFaultError) {
            safeLog(deps.log, {
              operation: "SRTC_LAUNCH_IMPORT",
              status: String(response.status),
              code: "SOAP_FAULT",
              faultCode: error.code ?? "",
              faultMessage: error.message,
              personCount: String(count),
            });
            throw error;
          }
          if (isMeta4HireError(error)) {
            safeLog(deps.log, {
              operation: "SRTC_LAUNCH_IMPORT",
              status: String(response.status),
              code: error.code,
              // Just Meta4's numeric return code / a fixed template
              // string, per parseLaunchImportResponse - never person data.
              detail: error.message,
              personCount: String(count),
            });
            throw error;
          }
          throw error;
        }
      },
    });

  /** IDs given in this launch, so two people never get the same one. */
  const reserved = new Set<string>();
  const choices: HirePersonIdChoice[] = [];

  /**
   * Free ID for this person, read again before each import: the previous one
   * has just created a person and Meta4 does not move the counter.
   */
  const choosePersonIdFor = async (
    person: HirePerson,
    index: number,
  ): Promise<HirePersonIdChoice | null> => {
    try {
      const choice = await choosePersonId(person, context.society, reserved);
      if (choice) reserved.add(choice.id);
      return choice;
    } catch (error) {
      if (!isMeta4HireError(error)) {
        throw new Meta4HireError(
          "META4_HIRE_CATALOG_UNAVAILABLE",
          "No se ha podido comprobar en PeopleNet el contador de personas.",
        );
      }
      throw new Meta4HireError(
        error.code,
        error.message,
        error.issues.map((issue) => ({ ...issue, person: index + 1 })),
      );
    }
  };

  /** The import ran: the person must now be in STD_PERSON with the ID of the file. */
  const assertCreatedWithId = async (
    person: HirePerson,
    choice: HirePersonIdChoice,
    index: number,
  ): Promise<void> => {
    const findExisting = deps.findExistingDocuments ?? findExistingHireDocuments;
    const found = await findExisting([person.documentNumber]).catch(() => null);
    const createdId = found?.get(normalizeHireDocument(person.documentNumber));
    if (createdId === choice.id) return;
    if (!found) {
      throw new Meta4HireError(
        "META4_HIRE_CATALOG_UNAVAILABLE",
        "No se ha podido comprobar en PeopleNet el ID de la persona dada de alta.",
        [{ person: index + 1, message: `Comprueba en Meta4 que tiene el ID ${choice.id}.` }],
      );
    }
    throw new Meta4HireError(
      "META4_HIRE_IMPORT_FAILED",
      createdId === undefined
        ? "PeopleNet no ha creado la persona."
        : `Meta4 ha dado de alta a la persona con el ID ${createdId}, no con el ${choice.id} del fichero.`,
      [
        {
          person: index + 1,
          message:
            createdId === undefined
              ? "La importación terminó sin errores pero no hay ninguna persona con su documento."
              : "Revisa la columna «ID PERSONA» de la plantilla antes de lanzar más altas.",
        },
      ],
    );
  };

  /** One import per person: Meta4 reuses the first row's ID for the rest of a file. */
  const launchPerson = async (person: HirePerson, index: number): Promise<HireLaunchResult> => {
    const file = files[index];
    if (!file) throw new Meta4HireError("META4_HIRE_CONFIG", "Fichero de alta no preparado.");
    const choice = await choosePersonIdFor(person, index);
    const workbookBytes = await editWorkbook(templatePath, [person], {
      personIds: choice ? [choice.id] : [],
    });
    await writeHireFile(file.filePath, workbookBytes);
    await verifyHireFile(file.filePath);
    let launched: HireLaunchResult;
    try {
      launched = await launchImport(file, 1);
    } catch (error) {
      if (importMayHaveRun(error)) {
        await rejectFromImportLog(readImportLog, file.filePath, deps.log, index + 1);
      }
      throw error;
    }
    const outcome = await waitForImport(file.fileName);
    safeLog(deps.log, {
      operation: "SRTC_LAUNCH_IMPORT",
      code: `IMPORT_${outcome.state.toUpperCase()}`,
      person: String(index + 1),
      ...(outcome.state === "done"
        ? { rows: String(outcome.total), failed: String(outcome.errors) }
        : {}),
    });
    if (outcome.state === "timeout") {
      throw new Meta4HireError(
        "META4_HIRE_IMPORT_FAILED",
        "El planificador de Meta4 no ha ejecutado la importación a tiempo.",
        [
          {
            person: index + 1,
            message: `La importación ${file.fileName} sigue en la cola del planificador de Meta4 y se ejecutará cuando la procese; no la vuelvas a lanzar.`,
          },
        ],
      );
    }
    if (outcome.state === "not-run") {
      throw new Meta4HireError(
        "META4_HIRE_IMPORT_FAILED",
        "El planificador de Meta4 no ejecutó la importación.",
        [{ person: index + 1, message: `La tarea ${outcome.taskId} terminó sin ejecutarse.` }],
      );
    }
    if (outcome.errors > 0) {
      throw new Meta4HireError("META4_HIRE_IMPORT_REJECTED", "PeopleNet rechazó el alta.", [
        {
          person: index + 1,
          message: outcome.messages.join(" ") || "PeopleNet no indicó el motivo.",
        },
      ]);
    }
    await rejectFromImportLog(readImportLog, file.filePath, deps.log, index + 1);
    if (!choice) return launched;
    await assertCreatedWithId(person, choice, index);
    choices.push(choice);
    return { ...launched, personIds: [choice.id] };
  };

  /** Read after the last import; a failed read only drops the advice. */
  const counterNote = async (): Promise<string | undefined> =>
    choices.length === 0
      ? undefined
      : counterNoteFor(choices, await readCounters(context.society).catch(() => null));

  const findPending = deps.findPendingImports ?? findPendingHireImports;

  return serialize(async () => {
    const pending = await findPending(context.society).catch(() => {
      throw new Meta4HireError(
        "META4_HIRE_CATALOG_UNAVAILABLE",
        "No se ha podido comprobar en PeopleNet si hay altas pendientes.",
      );
    });
    if (pending.length > 0) {
      throw new Meta4HireError(
        "META4_HIRE_VALIDATION",
        "Hay altas pendientes en el planificador de Meta4: espera a que terminen antes de lanzar otras.",
        pending.map((task) => ({
          message: `La importación ${task.fileName || task.taskId} (tarea ${task.taskId}) aún no se ha ejecutado.`,
        })),
      );
    }
    const done: HireLaunchResult[] = [];
    try {
      for (const [index, person] of validated.entries()) {
        done.push(await launchPerson(person, index));
      }
      const last = done.at(-1);
      const note = await counterNote();
      return {
        personCount: done.length,
        returnCode: last?.returnCode ?? "",
        fileName: done.map((result) => result.fileName).join(", "),
        filePath: last?.filePath ?? "",
        personIds: done.flatMap((result) => result.personIds),
        ...(note ? { counterNote: note } : {}),
      };
    } catch (error) {
      if (isMeta4HireError(error) && (done.length > 0 || validated.length > 1)) {
        // Say who is already in Meta4 and which people did not start.
        const failed = error.issues[0]?.person ?? done.length + 1;
        const ids = done.flatMap((result) => result.personIds);
        const range = `${done.length > 1 ? `Personas 1–${done.length}` : "Persona 1"}${
          ids.length > 0 ? `: ${idList(ids)}` : ""
        }`;
        const note = await counterNote();
        const hired =
          done.length > 0
            ? `Se ha dado de alta a ${done.length} de ${validated.length} personas (${range}). `
            : "";
        throw new Meta4HireError(error.code, `${hired}${error.message}`, [
          ...error.issues,
          ...(failed < validated.length
            ? [{ message: `No se han lanzado las personas ${failed + 1} a ${validated.length}.` }]
            : []),
          ...(note ? [{ message: note }] : []),
        ]);
      }
      if (isKnownSystemError(error)) throw error;
      safeLog(deps.log, {
        operation: "SRTC_LAUNCH_IMPORT",
        status: "unknown",
        code: "META4_HIRE_FETCH_FAILED",
        personCount: String(people.length),
      });
      throw new Meta4HireError(
        "META4_HIRE_FETCH_FAILED",
        "No se ha podido completar el alta de personas en Meta4.",
      );
    }
  });
};
