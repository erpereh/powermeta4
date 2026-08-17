import { describe, expect, it, vi } from "vitest";

import {
  bindCrypt32Native,
  createCrypt32DpapiRunner,
  CRYPTPROTECT_UI_FORBIDDEN,
  type Crypt32NativeCalls,
  type DataBlob,
  type KoffiLike,
} from "./dpapi-crypt32";

const PROTECT_PTR = BigInt(11);
const UNPROTECT_PTR = BigInt(22);
const BIND_PTR = BigInt(77);

const createNative = (overrides: Partial<Crypt32NativeCalls> = {}): Crypt32NativeCalls => {
  const cryptProtectData = vi.fn((_pDataIn: DataBlob, pDataOut: DataBlob) => {
    pDataOut.cbData = 4;
    pDataOut.pbData = PROTECT_PTR;
    return true;
  });
  const cryptUnprotectData = vi.fn((_pDataIn: DataBlob, pDataOut: DataBlob) => {
    pDataOut.cbData = 11;
    pDataOut.pbData = UNPROTECT_PTR;
    return true;
  });
  return {
    cryptProtectData,
    cryptUnprotectData,
    getLastError: vi.fn(() => 0),
    localFree: vi.fn(),
    copyBytes: vi.fn((ptr: unknown) =>
      ptr === UNPROTECT_PTR ? Buffer.from("token-value", "utf8") : Buffer.from([1, 2, 3, 4]),
    ),
    ...overrides,
  };
};

describe("crypt32 DPAPI runner", () => {
  it("protects to base64 and unprotects UTF-8", async () => {
    const native = createNative();
    const runner = createCrypt32DpapiRunner(native);

    await expect(runner("protect", "token-value")).resolves.toBe(
      Buffer.from([1, 2, 3, 4]).toString("base64"),
    );
    await expect(runner("unprotect", Buffer.from([1, 2, 3, 4]).toString("base64"))).resolves.toBe(
      "token-value",
    );

    expect(native.cryptProtectData).toHaveBeenCalledOnce();
    expect(native.cryptUnprotectData).toHaveBeenCalledOnce();
    expect(native.localFree).toHaveBeenCalledWith(PROTECT_PTR);
    expect(native.localFree).toHaveBeenCalledWith(UNPROTECT_PTR);
    expect(native.cryptProtectData).toHaveBeenCalledWith(
      expect.objectContaining({ cbData: Buffer.byteLength("token-value", "utf8") }),
      expect.objectContaining({ cbData: 4, pbData: PROTECT_PTR }),
    );
  });

  it("frees the output blob even when copying the ciphertext fails", async () => {
    const native = createNative({
      copyBytes: vi.fn(() => {
        throw new Error("copy");
      }),
    });
    const runner = createCrypt32DpapiRunner(native);

    await expect(runner("protect", "token-value")).rejects.toThrow(/copy/);
    expect(native.localFree).toHaveBeenCalledWith(PROTECT_PTR);
  });

  it("surfaces GetLastError when CryptProtectData rejects the operation", async () => {
    const native = createNative({
      cryptProtectData: vi.fn(() => false),
      getLastError: vi.fn(() => 13),
    });
    const runner = createCrypt32DpapiRunner(native);

    await expect(runner("protect", "token-value")).rejects.toThrow(
      /DPAPI rechazó la operación \(13\)/,
    );
    expect(native.localFree).not.toHaveBeenCalled();
  });
});

describe("crypt32 native bindings", () => {
  it("loads crypt32 and kernel32, copies the blob, and calls LocalFree", async () => {
    const localFree = vi.fn();
    const cryptProtectData = vi.fn(
      (
        _pDataIn: unknown,
        _szDataDescr: unknown,
        _pOptionalEntropy: unknown,
        _pvReserved: unknown,
        _pPromptStruct: unknown,
        dwFlags: unknown,
        pDataOut: DataBlob,
      ) => {
        expect(dwFlags).toBe(CRYPTPROTECT_UI_FORBIDDEN);
        pDataOut.cbData = 3;
        pDataOut.pbData = BIND_PTR;
        return true;
      },
    );
    const func = vi.fn((definition: string) => {
      if (definition.includes("CryptProtectData")) return cryptProtectData;
      if (definition.includes("CryptUnprotectData")) return vi.fn();
      if (definition.includes("GetLastError")) return () => 0;
      if (definition.includes("LocalFree")) return localFree;
      throw new Error(definition);
    });
    const koffi: KoffiLike = {
      struct: vi.fn(() => ({})),
      load: vi.fn(() => ({ func })),
      view: vi.fn(() => Uint8Array.from([9, 8, 7]).buffer),
    };

    const runner = createCrypt32DpapiRunner(bindCrypt32Native(koffi));
    await expect(runner("protect", "token-value")).resolves.toBe(
      Buffer.from([9, 8, 7]).toString("base64"),
    );

    expect(koffi.load).toHaveBeenCalledWith("crypt32.dll");
    expect(koffi.load).toHaveBeenCalledWith("kernel32.dll");
    expect(koffi.view).toHaveBeenCalledWith(BIND_PTR, 3);
    expect(localFree).toHaveBeenCalledWith(BIND_PTR);
  });
});
