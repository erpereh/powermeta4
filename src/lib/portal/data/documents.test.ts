import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/peoplenet/client", () => ({ getPeopleNetPool: vi.fn() }));

const { stripMeta4Blob } = await import("./documents");

describe("documentos guardados por Meta4", () => {
  it("quita la cabecera ~BLOB y conserva la extensión", () => {
    const pdf = Buffer.from("%PDF-1.3 contenido", "latin1");
    const stored = Buffer.concat([Buffer.from("~BLOBD\0pdf\0", "latin1"), pdf]);
    expect(stripMeta4Blob(stored)).toEqual({ extension: "pdf", bytes: pdf });
  });

  it("devuelve intacto un fichero sin cabecera de Meta4", () => {
    const pdf = Buffer.from("%PDF-1.7", "latin1");
    expect(stripMeta4Blob(pdf)).toEqual({ extension: null, bytes: pdf });
  });
});
