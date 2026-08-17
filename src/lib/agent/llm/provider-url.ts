const CHAT_COMPLETIONS_SUFFIX = "/chat/completions";

const requireHttpUrl = (baseUrl: string): URL => {
  let parsed: URL;
  try {
    parsed = new URL(baseUrl.trim());
  } catch {
    throw new Error("La Base URL debe ser una URL válida.");
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("La Base URL debe usar http o https.");
  }
  return parsed;
};

export const normalizeProviderBaseUrl = (baseUrl: string): string => {
  const parsed = requireHttpUrl(baseUrl);
  parsed.hash = "";
  parsed.search = "";
  let path = parsed.pathname.replace(/\/+$/, "") || "";
  if (path.endsWith(CHAT_COMPLETIONS_SUFFIX)) {
    path = path.slice(0, -CHAT_COMPLETIONS_SUFFIX.length);
  }
  parsed.pathname = path || "/";
  const href = parsed.toString();
  if (parsed.pathname === "/") {
    return href.endsWith("/") ? href.slice(0, -1) : href;
  }
  return href.endsWith("/") ? href.slice(0, -1) : href;
};

export const resolveChatCompletionsUrl = (baseUrl: string): string => {
  const canonical = normalizeProviderBaseUrl(baseUrl);
  const root = new URL(canonical.endsWith("/") ? canonical : `${canonical}/`);
  return new URL("chat/completions", root).href;
};

export const providerHostForLog = (baseUrl: string): string => {
  try {
    return new URL(baseUrl).host;
  } catch {
    return "invalid-host";
  }
};
