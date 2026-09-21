import { mkdtemp, readFile, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { writeHireFileAtomically } from "./write-file";

describe("writeHireFileAtomically", () => {
  it("writes to a temp name then replaces Hire.xls and rejects an empty result", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "hire-write-"));
    const destination = path.join(directory, "Hire.xls");
    const payload = Buffer.from("not-empty-hire-bytes");

    await writeHireFileAtomically(destination, payload);

    const stored = await readFile(destination);
    expect(stored.equals(payload)).toBe(true);
    expect((await stat(destination)).size).toBeGreaterThan(0);

    const updated = Buffer.from("second-hire-bytes-here");
    await writeHireFileAtomically(destination, updated);
    expect((await readFile(destination)).equals(updated)).toBe(true);
  });
});
