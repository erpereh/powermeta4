import { describe, expect, it } from "vitest";

import { jspSourceFromLink, mapTaskRecords } from "./tasks-core";

describe("tareas de PGCO_ES_WS_VALIDATIONS", () => {
  it("extrae la JSP del enlace del portal clásico", () => {
    expect(jspSourceFromLink("../JSP/MSS_G4/mss_g4_p1_val.jsp?x=1")).toBe(
      "mss_g4/mss_g4_p1_val.jsp",
    );
    expect(jspSourceFromLink("javascript:void(0)")).toBeNull();
  });

  it("mapea por tipo, descarta líneas sin título y no rellena huecos", () => {
    const lines = mapTaskRecords("validation", [
      {
        PGCO_VAL_TITLE: "Vacaciones",
        PGCO_VAL_COUNT: "2",
        PGCO_VAL_LINK: "mss_g4/mss_g4_p1_val.jsp",
        PGCO_LAST_UPDATE: "4000-01-01",
      },
      { PGCO_VAL_COUNT: "1" },
    ]);
    expect(lines).toEqual([
      {
        kind: "validation",
        level: null,
        title: "Vacaciones",
        tooltip: null,
        count: 2,
        deadline: null,
        lastUpdate: null,
        source: "mss_g4/mss_g4_p1_val.jsp",
      },
    ]);
  });
});
