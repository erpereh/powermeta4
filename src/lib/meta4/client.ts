import "server-only";

import { extractJSessionId } from "./cookies";
import {
  buildLoginEnvelope,
  buildRetrieveM4SessionEnvelope,
  Meta4SoapFaultError,
  parseLoginResponse,
  parseRetrieveM4SessionResponse,
} from "./soap-xml";
import type { Meta4SoapPoster } from "./user-profile-lookup";

export const DEFAULT_META4_LOGIN_URL = "https://meta4desaop.creditocaucion.es/services/Login";
export const META4_TIMEOUT_MS = 15_000;

export type Meta4LoginResult = {
  jSessionId: string;
  refreshSessionId: string;
};

export type Meta4Client = {
  login: (username: string, password: string) => Promise<Meta4LoginResult>;
  retrieveM4Session: (refreshSessionId: string) => Promise<{ jSessionId: string }>;
  createCookieSoapPoster: () => Meta4SoapPoster;
};

export class Meta4HttpError extends Error {
  readonly status: number;

  constructor(status: number) {
    super(`Meta4 respondió con HTTP ${status}.`);
    this.name = "Meta4HttpError";
    this.status = status;
  }
}

export type Meta4ClientOptions = {
  fetchImpl?: typeof fetch;
  loginUrl?: string;
  timeoutMs?: number;
};

const getLoginUrl = (loginUrl?: string): string => {
  const value = loginUrl ?? process.env.META4_LOGIN_URL ?? DEFAULT_META4_LOGIN_URL;
  if (!value.startsWith("https://")) throw new Error("META4_LOGIN_URL debe usar HTTPS.");
  return value;
};

export const postSoapXml = async (
  fetchImpl: typeof fetch,
  url: string,
  xml: string,
  timeoutMs: number,
  headers?: HeadersInit,
): Promise<Response> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  const requestHeaders = new Headers(headers);
  if (!requestHeaders.has("Accept")) requestHeaders.set("Accept", "text/xml");
  if (!requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "text/xml; charset=utf-8");
  }
  try {
    return await fetchImpl(url, {
      method: "POST",
      headers: requestHeaders,
      body: xml,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("La petición Meta4 excedió el tiempo de espera.");
    }
    throw new Error("No se pudo conectar con Meta4.");
  } finally {
    clearTimeout(timeout);
  }
};

export const createMeta4Client = (options: Meta4ClientOptions = {}): Meta4Client => {
  const fetchImpl = options.fetchImpl ?? fetch;
  const url = getLoginUrl(options.loginUrl);
  const timeoutMs = options.timeoutMs ?? META4_TIMEOUT_MS;

  return {
    login: async (username, password) => {
      const response = await postSoapXml(
        fetchImpl,
        url,
        buildLoginEnvelope(username, password),
        timeoutMs,
      );
      const body = await response.text();
      if (!response.ok) {
        try {
          parseLoginResponse(body);
        } catch (error) {
          if (error instanceof Meta4SoapFaultError) throw error;
        }
        throw new Meta4HttpError(response.status);
      }
      const { refreshSessionId } = parseLoginResponse(body);
      const jSessionId = extractJSessionId(response.headers);
      return { jSessionId, refreshSessionId };
    },
    retrieveM4Session: async (refreshSessionId) => {
      const response = await postSoapXml(
        fetchImpl,
        url,
        buildRetrieveM4SessionEnvelope(refreshSessionId),
        timeoutMs,
      );
      const body = await response.text();
      if (!response.ok) {
        try {
          parseRetrieveM4SessionResponse(body);
        } catch (error) {
          if (error instanceof Meta4SoapFaultError) throw error;
        }
        throw new Meta4HttpError(response.status);
      }
      parseRetrieveM4SessionResponse(body);
      return { jSessionId: extractJSessionId(response.headers) };
    },
    createCookieSoapPoster:
      () =>
      async ({ url: requestUrl, xml, headers }) =>
        postSoapXml(fetchImpl, requestUrl, xml, timeoutMs, headers),
  };
};
