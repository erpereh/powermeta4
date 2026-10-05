import { describe, expect, it } from "vitest";

import { documentHref, isPortalDocumentKind, parseDocumentKey } from "./documents-core";

describe("claves de documentos propios", () => {
  it("interpreta recibos, certificados y proyecciones", () => {
    expect(parseDocumentKey("payslip", "1|2026-07-25|004|1")).toEqual({
      kind: "payslip",
      period: 1,
      date: "2026-07-25",
      frequency: "004",
      order: 1,
    });
    expect(parseDocumentKey("certificate", "2|3")).toEqual({
      kind: "certificate",
      period: 2,
      order: 3,
    });
    expect(parseDocumentKey("projection", "1|2025")).toEqual({
      kind: "projection",
      period: 1,
      order: 2025,
    });
  });

  it("rechaza claves mal formadas o con contenido inyectado", () => {
    for (const raw of [
      "",
      "1|2026-07-25|004",
      "1|2026-07-25|004|1|9",
      "1|25/07/2026|004|1",
      "1|2026-07-25|00 4|1",
      "1;DROP|2026-07-25|004|1",
      "x|1",
    ])
      expect(parseDocumentKey(raw.split("|").length === 2 ? "certificate" : "payslip", raw)).toBe(
        null,
      );
  });

  it("solo admite los tipos de documento conocidos y codifica la clave", () => {
    expect(isPortalDocumentKind("payslip")).toBe(true);
    expect(isPortalDocumentKind("../payslip")).toBe(false);
    expect(documentHref("certificate", "2|3")).toBe("/api/portal/documents/certificate?k=2%7C3");
  });
});
