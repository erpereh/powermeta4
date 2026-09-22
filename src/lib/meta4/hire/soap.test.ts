import { describe, expect, it } from "vitest";

import { escapeXml } from "@/lib/meta4/user-profile-soap";

import { Meta4HireError } from "./errors";
import {
  buildLaunchImportEnvelope,
  getMeta4HireDirectory,
  getMeta4HireTemplatePath,
  getMeta4HireUrl,
} from "./soap";

describe("Meta4 hire SOAP builder", () => {
  it("builds SRTC_LAUNCH_IMPORT with escaped UNC path and without SOAPAction", () => {
    const filePath = String.raw`\\WMETA4PRE2\powermeta4\import_users_excel\Hire_JORGE.SALVADOR_2026-09-22_11-12-34.xls`;
    const xml = buildLaunchImportEnvelope(filePath);

    expect(xml).toContain("<sch:SRTC_LAUNCH_IMPORT>");
    expect(xml).toContain("<sch:ARG_ID_GROUP_INTERFACE>INIT_EMPLOYEES_FD</sch:ARG_ID_GROUP_INTERFACE>");
    expect(xml).toContain(`<sch:ARG_PATH_FILE>${escapeXml(filePath)}</sch:ARG_PATH_FILE>`);
    expect(xml).toContain("<sch:ARG_LIST_EMAIL>0</sch:ARG_LIST_EMAIL>");
    expect(xml).toContain("<sch:ARG_ATTACH_FILE>0</sch:ARG_ATTACH_FILE>");
    expect(xml).toContain("<sch:ARG_SCHEDULE_TASK>0</sch:ARG_SCHEDULE_TASK>");
    expect(xml).not.toContain("SOAPAction");
  });

  it("escapes XML special characters in the UNC path", () => {
    const xml = buildLaunchImportEnvelope(String.raw`\\host\share\a&b<c>.xls`);
    expect(xml).toContain("&amp;");
    expect(xml).toContain("&lt;");
    expect(xml).toContain("&gt;");
    expect(xml).not.toContain("<c>");
  });

  it("requires HTTPS hire URL and a file path", () => {
    expect(() => getMeta4HireUrl("")).toThrow(Meta4HireError);
    expect(() => getMeta4HireUrl("http://insecure/services/SRTC_LAUNCH_IMPORT")).toThrow(/HTTPS/);
    expect(
      getMeta4HireUrl("https://meta4desasoap.creditocaucion.es/services/SRTC_LAUNCH_IMPORT"),
    ).toBe("https://meta4desasoap.creditocaucion.es/services/SRTC_LAUNCH_IMPORT");
    expect(() => getMeta4HireDirectory("")).toThrow(/META4_HIRE_FILE_PATH/);
    const directory = String.raw`\\WMETA4PRE2\powermeta4\import_users_excel`;
    expect(getMeta4HireDirectory(directory)).toBe(directory);
    expect(getMeta4HireDirectory(`${directory}\\`)).toBe(directory);
    expect(getMeta4HireTemplatePath("")).toBe("./fuentes/HIRE/Hire_1_PERSONA.xls");
  });
});
