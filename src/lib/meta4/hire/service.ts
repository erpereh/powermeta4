import "server-only";

import { stat } from "node:fs/promises";
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

import { editHireWorkbook } from "./excel";
import { Meta4HireError, isMeta4HireError } from "./errors";
import { buildHireFileName, buildHireFilePath } from "./filename";
import { hireExecutionQueue, type SerializedTask } from "./mutex";
import { parseLaunchImportResponse } from "./parser";
import {
  buildLaunchImportEnvelope,
  getMeta4HireDirectory,
  getMeta4HireTemplatePath,
  getMeta4HireUrl,
} from "./soap";
import type { HireLaunchResult, HirePerson } from "./types";
import { writeHireFileAtomically } from "./write-file";

export const HIRE_SOAP_TIMEOUT_MS = 60_000;

export type LaunchMeta4HireDeps = {
  getOperationalContext?: typeof getMeta4OperationalContext;
  executeSoap?: typeof executeAuthenticatedSoap;
  editHireWorkbook?: (templatePath: string, people: readonly HirePerson[]) => Promise<Buffer>;
  writeHireFile?: typeof writeHireFileAtomically;
  verifyHireFile?: (filePath: string) => Promise<void>;
  hireUrl?: string;
  hireDirectory?: string;
  templatePath?: string;
  now?: () => Date;
  serialize?: SerializedTask;
  log?: (message: string, details: Record<string, string>) => void;
};

const isKnownSystemError = (error: unknown): boolean =>
  error instanceof Meta4SessionRequiredError ||
  error instanceof SessionExpiredError ||
  error instanceof Meta4SoapFaultError ||
  error instanceof Meta4HttpError ||
  error instanceof Meta4ProfileError ||
  isMeta4HireError(error);

const safeLog = (
  log: LaunchMeta4HireDeps["log"],
  details: Record<string, string>,
): void => {
  log?.("meta4-hire", details);
};

const resolveTemplatePath = (templatePath: string): string =>
  path.isAbsolute(templatePath)
    ? templatePath
    : path.resolve(/* turbopackIgnore: true */ process.cwd(), templatePath);

const defaultVerifyHireFile = async (filePath: string): Promise<void> => {
  try {
    const info = await stat(filePath);
    if (info.size <= 0) {
      throw new Meta4HireError(
        "META4_HIRE_FILE_FAILED",
        "El fichero Hire.xls está vacío tras la escritura.",
      );
    }
  } catch (error) {
    if (isMeta4HireError(error)) throw error;
    throw new Meta4HireError(
      "META4_HIRE_FILE_FAILED",
      "El fichero Hire.xls no existe o no se puede leer tras la escritura.",
    );
  }
};

/**
 * Copies Hire_1_PERSONA.xls, edits it with Excel, and launches SRTC_LAUNCH_IMPORT.
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
  const verifyHireFile = deps.verifyHireFile ?? defaultVerifyHireFile;
  const serialize = deps.serialize ?? hireExecutionQueue;

  const context = await getContext(authSession);
  const directory = getMeta4HireDirectory(deps.hireDirectory);
  const fileName = buildHireFileName(context.username, deps.now?.() ?? new Date());
  const filePath = buildHireFilePath(directory, fileName);
  const url = getMeta4HireUrl(deps.hireUrl);
  const templatePath = resolveTemplatePath(getMeta4HireTemplatePath(deps.templatePath));
  const xml = buildLaunchImportEnvelope(filePath);

  return serialize(async () => {
    try {
      const workbookBytes = await editWorkbook(templatePath, people);
      await writeHireFile(filePath, workbookBytes);
      await verifyHireFile(filePath);

      return await executeSoap({
        url,
        xml,
        timeoutMs: HIRE_SOAP_TIMEOUT_MS,
        parseResponse: async (response) => {
          const body = await response.text();

          if (!response.ok) {
            try {
              parseLaunchImportResponse(body);
            } catch (error) {
              if (error instanceof Meta4SoapFaultError) {
                safeLog(deps.log, {
                  operation: "SRTC_LAUNCH_IMPORT",
                  status: String(response.status),
                  code: "SOAP_FAULT",
                  personCount: String(people.length),
                });
                throw error;
              }
            }
            safeLog(deps.log, {
              operation: "SRTC_LAUNCH_IMPORT",
              status: String(response.status),
              code: "HTTP_ERROR",
              personCount: String(people.length),
            });
            throw new Meta4HttpError(response.status);
          }

          try {
            const parsed = parseLaunchImportResponse(body);
            safeLog(deps.log, {
              operation: "SRTC_LAUNCH_IMPORT",
              status: String(response.status),
              code: "OK",
              personCount: String(people.length),
            });
            return {
              personCount: people.length,
              returnCode: parsed.returnCode,
              fileName,
              filePath,
            };
          } catch (error) {
            if (error instanceof Meta4SoapFaultError) {
              safeLog(deps.log, {
                operation: "SRTC_LAUNCH_IMPORT",
                status: String(response.status),
                code: "SOAP_FAULT",
                personCount: String(people.length),
              });
              throw error;
            }
            if (isMeta4HireError(error)) {
              safeLog(deps.log, {
                operation: "SRTC_LAUNCH_IMPORT",
                status: String(response.status),
                code: error.code,
                personCount: String(people.length),
              });
              throw error;
            }
            throw error;
          }
        },
      });
    } catch (error) {
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
