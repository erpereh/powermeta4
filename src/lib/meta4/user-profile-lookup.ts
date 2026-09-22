import "server-only";

import { Meta4HttpError } from "./client";
import { getMeta4ServiceUrl, META4_SERVICE } from "./config";
import { Meta4SoapFaultError } from "./soap-xml";
import { Meta4ProfileError } from "./profile-errors";
import { META4_SOCIETIES, type Meta4Society } from "./societies";
import { buildUserProfileEnvelope, classifyUserProfileResponse } from "./user-profile-soap";
import type { SocietyLookupMatch, SocietyLookupMatches } from "./user-profile-types";

export type Meta4SoapPoster = (input: {
  url: string;
  xml: string;
  headers?: HeadersInit;
}) => Promise<Response>;

export type LookupMeta4SocietyProfileOptions = {
  username: string;
  jSessionId: string;
  postSoap: Meta4SoapPoster;
  profileUrl?: string;
  societies?: readonly Meta4Society[];
  now?: () => Date;
  log?: (message: string, details: Record<string, string>) => void;
};

const getProfileUrl = (profileUrl?: string): string => {
  if (profileUrl !== undefined) {
    if (!profileUrl.startsWith("https://")) {
      throw new Meta4ProfileError("META4_PROFILE_LOOKUP_FAILED", "META4_BASE_URL debe usar HTTPS.");
    }
    return profileUrl;
  }
  try {
    return getMeta4ServiceUrl(META4_SERVICE.profile);
  } catch (error) {
    const message = error instanceof Error ? error.message : "META4_BASE_URL es obligatoria.";
    throw new Meta4ProfileError("META4_PROFILE_LOOKUP_FAILED", message);
  }
};

const safeLog = (
  log: LookupMeta4SocietyProfileOptions["log"],
  society: Meta4Society,
  outcome: string,
): void => {
  log?.("meta4-profile-lookup", { society, outcome });
};

export const lookupMeta4SocietyProfiles = async (
  options: LookupMeta4SocietyProfileOptions,
): Promise<SocietyLookupMatches> => {
  const url = getProfileUrl(options.profileUrl);
  const societies = options.societies ?? META4_SOCIETIES;
  const now = options.now ?? (() => new Date());
  const matches: SocietyLookupMatch[] = [];

  for (const society of societies) {
    let response: Response;
    try {
      response = await options.postSoap({
        url,
        xml: buildUserProfileEnvelope(society, options.username),
        headers: {
          Cookie: `JSESSIONID=${options.jSessionId}`,
          Accept: "text/xml",
          "Content-Type": "text/xml; charset=utf-8",
          SOAPAction: '""',
        },
      });
    } catch (error) {
      safeLog(options.log, society, "LOOKUP_FAILED");
      if (error instanceof Meta4ProfileError) throw error;
      throw new Meta4ProfileError(
        "META4_PROFILE_LOOKUP_FAILED",
        "No se han podido cargar los datos del usuario desde Meta4.",
      );
    }

    let body: string;
    try {
      body = await response.text();
    } catch {
      safeLog(options.log, society, "LOOKUP_FAILED");
      throw new Meta4ProfileError(
        "META4_PROFILE_LOOKUP_FAILED",
        "No se han podido cargar los datos del usuario desde Meta4.",
      );
    }

    if (!response.ok) {
      try {
        classifyUserProfileResponse({
          xml: body,
          queriedSociety: society,
          consultedUsername: options.username,
        });
      } catch (error) {
        if (error instanceof Meta4SoapFaultError) {
          safeLog(options.log, society, "LOOKUP_FAILED");
          throw new Meta4ProfileError(
            "META4_PROFILE_LOOKUP_FAILED",
            "No se han podido cargar los datos del usuario desde Meta4.",
          );
        }
        if (error instanceof Meta4ProfileError && error.code === "META4_PROFILE_INVALID_RESPONSE") {
          safeLog(options.log, society, "INVALID_RESPONSE");
          throw error;
        }
      }
      safeLog(options.log, society, `HTTP_${response.status}`);
      throw new Meta4ProfileError(
        "META4_PROFILE_LOOKUP_FAILED",
        "No se han podido cargar los datos del usuario desde Meta4.",
      );
    }

    let classified;
    try {
      classified = classifyUserProfileResponse({
        xml: body,
        queriedSociety: society,
        consultedUsername: options.username,
        lookedUpAt: now().toISOString(),
      });
    } catch (error) {
      if (error instanceof Meta4SoapFaultError) {
        safeLog(options.log, society, "SOAP_FAULT");
        throw new Meta4ProfileError(
          "META4_PROFILE_LOOKUP_FAILED",
          "No se han podido cargar los datos del usuario desde Meta4.",
        );
      }
      if (error instanceof Meta4ProfileError) {
        safeLog(options.log, society, error.code);
        throw error;
      }
      safeLog(options.log, society, "INVALID_RESPONSE");
      throw new Meta4ProfileError(
        "META4_PROFILE_INVALID_RESPONSE",
        "No se han podido cargar los datos del usuario desde Meta4.",
      );
    }

    if (classified.outcome === "match") {
      safeLog(options.log, society, "match");
      matches.push({ society: classified.society, profile: classified.profile });
      continue;
    }

    safeLog(options.log, society, `no-match:${classified.reason}`);
  }

  if (matches.length === 0) {
    throw new Meta4ProfileError(
      "META4_PROFILE_NOT_FOUND",
      "No se ha podido identificar tu sociedad en Meta4.",
    );
  }

  return { matches };
};

export { Meta4HttpError };
