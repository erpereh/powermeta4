import { describe, expect, it, vi } from "vitest";
import {
  collectReadonlyAudit,
  auditErrorCode,
  safeMetadataText,
  type AuditRead,
} from "../../../scripts/portal/readonly-audit-core";
import { PORTAL_FEATURES } from "./registry";

describe("diagnóstico de metadatos y recuentos", () => {
  it("sanea cadenas con URL, comentarios, correos, cuentas y secretos sin filtrar sus referencias", () => {
    const value = safeMetadataText(
      `CALL OBJ_TEST!NODE_TEST ("https://secret.invalid/password", 'Nombre Apellido', 'ES6612341234123412341234', 'PENDIENTE', '123456789'); // usuario secreto\n/* contraseña */ user@example.invalid`,
    );
    for (const secret of [
      "secret.invalid",
      "password",
      "Nombre",
      "ES661234",
      "123456789",
      "usuario",
      "contraseña",
      "user@example.invalid",
    ])
      expect(value).not.toContain(secret);
    expect(value).toContain("OBJ_TEST!NODE_TEST");
    expect(value).toContain("PENDIENTE");
    expect(auditErrorCode({ code: "ELOGIN", message: "usuario y contraseña privados" })).toBe(
      "ELOGIN",
    );
    expect(auditErrorCode({ code: "PRIVATE_SECRET" })).toBe("READ_FAILED");
  });
  it("continúa tras errores independientes y mantiene identidades y mensajes solo en memoria", async () => {
    const feature = PORTAL_FEATURES.find(
      (entry) => entry.id === "empleado.talento.formacion-realizada",
    )!;
    const read: AuditRead = vi.fn(async (statement) => {
      if (statement.includes("INFORMATION_SCHEMA"))
        return [
          { TABLE_NAME: "M4RCH_T3S", COLUMN_NAME: "ID_T3", DATA_TYPE: "varchar" },
          { TABLE_NAME: "M4RCH_T3S", COLUMN_NAME: "ID_TI", DATA_TYPE: "varchar" },
          { TABLE_NAME: "M4RCH_RULES3", COLUMN_NAME: "ID_TI", DATA_TYPE: "varchar" },
          { TABLE_NAME: "M4RCH_RULES3", COLUMN_NAME: "ID_ITEM", DATA_TYPE: "varchar" },
          { TABLE_NAME: "M4RCH_RULES3", COLUMN_NAME: "SOURCE_CODE", DATA_TYPE: "text" },
        ];
      if (statement.includes("TOP 1")) return [{ ID_EMPLEADO: "PRIVATE_EMPLOYEE_ID" }];
      if (statement.includes("COUNT_BIG"))
        throw Object.assign(new Error("SECRET_PASSWORD PRIVATE_NAME 999999999"), { number: 207 });
      return [];
    });
    const result = await collectReadonlyAudit([feature], read);
    expect(result.probes).toHaveLength(3);
    expect(result.tasks.some((task) => task.code === "SQL_207")).toBe(true);
    const output = JSON.stringify(result);
    for (const secret of ["PRIVATE_EMPLOYEE_ID", "SECRET_PASSWORD", "PRIVATE_NAME", "999999999"])
      expect(output).not.toContain(secret);
    expect(result.coverage.seedObjects).toContain("SSE_BFT_EE_BNFT_ELEC");
    expect(result.coverage.seedObjects).toContain("SSM_R_JOB_COMP");
    expect(result.coverage.seedObjects).toContain("SSCO_OR_RP_BUDGET_SAL_WU");
  });
  it("recorre herencia y reglas y no ejecuta APISQL recibido ni consultas de escritura", async () => {
    const original = PORTAL_FEATURES.find(
      (entry) => entry.id === "empleado.talento.formacion-realizada",
    )!;
    const feature = {
      ...original,
      sections: original.sections?.map((section) =>
        section.kind === "consult"
          ? {
              ...section,
              consult: {
                ...section.consult,
                query: {
                  scope: "own" as const,
                  tables: [],
                  statement: "SELECT * INTO should_never_exist FROM X WHERE ID = @employeeId",
                },
              },
            }
          : section,
      ),
    };
    const executed: string[] = [];
    const read: AuditRead = async (statement, params) => {
      executed.push(statement);
      if (statement.includes("INFORMATION_SCHEMA"))
        return [
          ...["ID_T3", "ID_TI"].map((column) => ({
            TABLE_NAME: "M4RCH_T3S",
            COLUMN_NAME: column,
            DATA_TYPE: "varchar",
          })),
          ...["ID_TI", "ID_ITEM", "SOURCE_CODE"].map((column) => ({
            TABLE_NAME: "M4RCH_RULES3",
            COLUMN_NAME: column,
            DATA_TYPE: column === "SOURCE_CODE" ? "text" : "varchar",
          })),
        ];
      if (statement.includes("TOP 1")) return [{ ID_EMPLEADO: "MEMORY_ONLY" }];
      if (statement.includes("[M4RCH_T3S]") && params?.key === "SSE_BFT_EE_BNFT_ELEC")
        return [{ ID_T3: "SSE_BFT_EE_BNFT_ELEC", ID_TI: "TI_TEST" }];
      if (statement.includes("[M4RCH_RULES3]") && params?.key === "TI_TEST")
        return [
          {
            ID_TI: "TI_TEST",
            ID_ITEM: "METHOD_TEST",
            SOURCE_CODE: `OTHER_OBJECT!NODE_TEST.METHOD('Nombre confidencial')`,
            PASSWORD: "DO_NOT_KEEP",
          },
        ];
      return [];
    };
    const result = await collectReadonlyAudit([feature], read);
    expect(
      executed.every(
        (statement) =>
          !statement.includes("should_never_exist") && !statement.includes("OTHER_OBJECT!"),
      ),
    ).toBe(true);
    expect(result.tasks.some((task) => task.code === "PortalSqlGuardError")).toBe(true);
    expect(result.coverage.visited).toContain("ID_TI/TI_TEST");
    expect(result.coverage.visited).toContain("ID_T3/OTHER_OBJECT");
    expect(JSON.stringify(result)).not.toMatch(/Nombre confidencial|DO_NOT_KEEP|MEMORY_ONLY/);
  });
});
