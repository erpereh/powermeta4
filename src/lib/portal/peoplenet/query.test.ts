import { describe, expect, it, vi } from "vitest";

vi.mock("@/lib/peoplenet/client", () => ({ getPeopleNetPool: vi.fn() }));

const { assertReadOnlySql, PortalSqlGuardError } = await import("./query");

describe("guardia de solo lectura de PeopleNet", () => {
  it("admite SELECT y WITH parametrizadas", () => {
    expect(() =>
      assertReadOnlySql("SELECT ID_EMPLEADO FROM M4ORO_EMPLEADOS WHERE ID_ORGANIZATION = @org"),
    ).not.toThrow();
    expect(() => assertReadOnlySql("WITH x AS (SELECT 1 AS a) SELECT a FROM x")).not.toThrow();
  });

  it.each([
    "UPDATE M4ORO_EMPLEADOS SET NOMBRE = @nombre",
    "SELECT 1; DELETE FROM T",
    "SELECT * FROM T WHERE 1 = 1 EXEC sp_x",
    "DELETE FROM T",
    "INSERT INTO T VALUES (1)",
    "SELECT 1 AS value INTO destination",
    "WITH x AS (SELECT 1 AS value) SELECT value INTO destination FROM x",
    "WITH x AS (SELECT 1 AS value) UPDATE T SET a = 1",
    "SELECT * FROM OPENROWSET('provider', 'secret', 'query')",
    "SELECT * FROM OPENQUERY(linked, 'query')",
    "SELECT 1 EXECUTE sp_x",
    "SELECT 1 SET NOCOUNT ON",
    "SELECT 1 /* comment */ INTO destination",
    "SELECT 1 -- comment\nINTO destination",
    "SELECT 1 SELECT 2",
    "SELECT 1 WITH x AS (SELECT 2 AS b) SELECT b FROM x",
    "SELECT * FROM linked.database.dbo.people",
    "SELECT * FROM [other_db]..[people]",
  ])("rechaza %s", (statement) => {
    expect(() => assertReadOnlySql(statement)).toThrow(PortalSqlGuardError);
  });
});
