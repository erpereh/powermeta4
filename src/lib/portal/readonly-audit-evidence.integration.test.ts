import path from "node:path";
import { describe, expect, it } from "vitest";
import { loadReadonlyVmEvidence } from "../../../scripts/portal/readonly-vm-evidence";

describe("evidencia VM versionada mediante Git LFS", () => {
  it("valida el contenido completo, los hashes y la generación sin conexiones", () => {
    const evidence = loadReadonlyVmEvidence(
      path.resolve("docs/portal/implementacion/evidencias-vm"),
    );
    expect(evidence).not.toBeNull();
    expect(evidence?.dictionary.tables).toBeDefined();
    expect(evidence?.manifest.generationId).toMatch(/^[a-f0-9-]{36}$/);
  }, 60_000);
});
