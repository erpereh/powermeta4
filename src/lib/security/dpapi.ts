import "server-only";

import { bindCrypt32Native, createCrypt32DpapiRunner, type KoffiLike } from "./dpapi-crypt32";

export type DpapiOperation = "protect" | "unprotect";
export type DpapiRunner = (operation: DpapiOperation, value: string) => Promise<string>;

export type DpapiAdapter = {
  protectSecret: (value: string) => Promise<string>;
  unprotectSecret: (value: string) => Promise<string>;
};

let defaultRunner: Promise<DpapiRunner> | null = null;

const loadKoffi = async (): Promise<KoffiLike> => {
  const koffi = await import("koffi");
  return {
    struct: (name, def) => koffi.struct(name, def),
    load: (name) => koffi.load(name),
    view: (ptr, byteLength) => koffi.view(ptr, byteLength),
  };
};

const getCrypt32Runner = (): Promise<DpapiRunner> => {
  if (!defaultRunner) {
    defaultRunner = loadKoffi()
      .then((koffi) => createCrypt32DpapiRunner(bindCrypt32Native(koffi)))
      .catch((error: unknown) => {
        defaultRunner = null;
        const message = error instanceof Error ? error.message : "Error desconocido";
        throw new Error(`No se pudo iniciar DPAPI: ${message.slice(0, 160)}`);
      });
  }
  return defaultRunner;
};

const runCrypt32Dpapi: DpapiRunner = async (operation, value) => {
  const runner = await getCrypt32Runner();
  return runner(operation, value);
};

export const createDpapiAdapter = (
  options: {
    platform?: NodeJS.Platform;
    runner?: DpapiRunner;
  } = {},
): DpapiAdapter => {
  const platform = options.platform ?? process.platform;
  const runner = options.runner ?? runCrypt32Dpapi;

  const run = (operation: DpapiOperation, value: string) => {
    if (platform !== "win32") {
      return Promise.reject(
        new Error("Windows DPAPI CurrentUser solo está disponible en Windows."),
      );
    }
    if (!value) return Promise.reject(new Error("DPAPI no acepta un secreto vacío."));
    return runner(operation, value);
  };

  return {
    protectSecret: (value) => run("protect", value),
    unprotectSecret: (value) => run("unprotect", value),
  };
};
