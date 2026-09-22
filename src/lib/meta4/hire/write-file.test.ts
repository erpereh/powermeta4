import { mkdtemp, readFile, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { verifyWrittenHireFile, writeHireFileAtomically } from "./write-file";

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

  it("checks the written file on disk and keeps that failure distinct from Excel editing", async () => {
    const directory = await mkdtemp(path.join(tmpdir(), "hire-verify-"));
    const destination = path.join(directory, "Hire_USER_2026-09-22_12-00-00.xls");

    await expect(verifyWrittenHireFile(destination)).rejects.toMatchObject({
      code: "META4_HIRE_WRITE_FAILED",
    });
    await expect(verifyWrittenHireFile(destination)).rejects.toThrow(/carpeta compartida/);
    await expect(verifyWrittenHireFile(destination)).rejects.not.toThrow(/Hire_1_PERSONA/);

    await writeFile(destination, Buffer.from("not-an-xls"));
    await expect(verifyWrittenHireFile(destination)).rejects.toMatchObject({
      code: "META4_HIRE_WRITE_FAILED",
    });

    const ole = Buffer.concat([
      Buffer.from([0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]),
      Buffer.from("workbook"),
    ]);
    await writeFile(destination, ole);
    await expect(verifyWrittenHireFile(destination)).resolves.toBeUndefined();
    expect((await stat(destination)).size).toBe(ole.length);
  });
});
