import "server-only";

import type { DpapiOperation, DpapiRunner } from "./dpapi";

export const CRYPTPROTECT_UI_FORBIDDEN = 0x1;

export type DataBlob = {
  cbData: number;
  pbData: unknown;
};

export type Crypt32NativeCalls = {
  cryptProtectData: (pDataIn: DataBlob, pDataOut: DataBlob) => boolean;
  cryptUnprotectData: (pDataIn: DataBlob, pDataOut: DataBlob) => boolean;
  getLastError: () => number;
  localFree: (hMem: unknown) => unknown;
  copyBytes: (ptr: unknown, byteLength: number) => Uint8Array;
};

export type KoffiLibrary = {
  func: (definition: string) => (...args: unknown[]) => unknown;
};

export type KoffiLike = {
  struct: (name: string, def: Record<string, string>) => unknown;
  load: (name: string) => KoffiLibrary;
  view: (ptr: unknown, byteLength: number) => ArrayBuffer;
};

const asFailureCode = (code: number): string => (code > 0 ? String(code) : "sin código");

const copyOutputBlob = (native: Crypt32NativeCalls, dataOut: DataBlob): Uint8Array => {
  if (!dataOut.pbData || dataOut.cbData <= 0) {
    throw new Error("DPAPI no devolvió un resultado ().");
  }
  try {
    const bytes = native.copyBytes(dataOut.pbData, dataOut.cbData);
    if (bytes.byteLength === 0) {
      throw new Error("DPAPI no devolvió un resultado ().");
    }
    return bytes;
  } finally {
    native.localFree(dataOut.pbData);
  }
};

export const createCrypt32DpapiRunner =
  (native: Crypt32NativeCalls): DpapiRunner =>
  async (operation: DpapiOperation, value: string): Promise<string> => {
    const input =
      operation === "protect" ? Buffer.from(value, "utf8") : Buffer.from(value, "base64");
    const dataIn: DataBlob = { cbData: input.byteLength, pbData: input };
    const dataOut: DataBlob = { cbData: 0, pbData: null };
    const ok =
      operation === "protect"
        ? native.cryptProtectData(dataIn, dataOut)
        : native.cryptUnprotectData(dataIn, dataOut);
    if (!ok) {
      throw new Error(`DPAPI rechazó la operación (${asFailureCode(native.getLastError())}).`);
    }
    const bytes = copyOutputBlob(native, dataOut);
    return operation === "protect"
      ? Buffer.from(bytes).toString("base64")
      : Buffer.from(bytes).toString("utf8");
  };

export const bindCrypt32Native = (koffi: KoffiLike): Crypt32NativeCalls => {
  koffi.struct("DATA_BLOB", {
    cbData: "uint32",
    pbData: "void *",
  });
  const crypt32 = koffi.load("crypt32.dll");
  const kernel32 = koffi.load("kernel32.dll");
  const cryptProtectData = crypt32.func(
    "bool __stdcall CryptProtectData(_In_ DATA_BLOB *pDataIn, const char16_t *szDataDescr, DATA_BLOB *pOptionalEntropy, void *pvReserved, void *pPromptStruct, uint32 dwFlags, _Out_ DATA_BLOB *pDataOut)",
  );
  const cryptUnprotectData = crypt32.func(
    "bool __stdcall CryptUnprotectData(_In_ DATA_BLOB *pDataIn, char16_t **ppszDataDescr, DATA_BLOB *pOptionalEntropy, void *pvReserved, void *pPromptStruct, uint32 dwFlags, _Out_ DATA_BLOB *pDataOut)",
  );
  const getLastError = kernel32.func("uint32 __stdcall GetLastError()");
  const localFree = kernel32.func("void *__stdcall LocalFree(void *hMem)");

  return {
    cryptProtectData: (pDataIn, pDataOut) =>
      Boolean(
        cryptProtectData(pDataIn, null, null, null, null, CRYPTPROTECT_UI_FORBIDDEN, pDataOut),
      ),
    cryptUnprotectData: (pDataIn, pDataOut) =>
      Boolean(
        cryptUnprotectData(pDataIn, null, null, null, null, CRYPTPROTECT_UI_FORBIDDEN, pDataOut),
      ),
    getLastError: () => Number(getLastError()),
    localFree,
    copyBytes: (ptr, byteLength) => new Uint8Array(koffi.view(ptr, byteLength).slice(0)),
  };
};
