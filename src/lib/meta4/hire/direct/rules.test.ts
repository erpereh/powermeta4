import { describe, expect, it } from "vitest";

import {
  familyName,
  formatIban,
  globalAddress,
  globalName,
  needsRetirementRow,
  parkingSpace,
  roleName,
} from "./rules";

describe("Meta4 save rules", () => {
  it("builds the family and global names", () => {
    expect(familyName("Lopez", "Garcia")).toBe("Lopez Garcia");
    expect(familyName("Lopez", "")).toBe("Lopez");
    expect(globalName("Lopez Garcia", "Ana")).toBe("Lopez Garcia, Ana");
    expect(globalName("", "Ana")).toBe("Ana");
  });

  it("builds the Spanish global address with a leading space and only present parts", () => {
    expect(
      globalAddress({
        roadType: "CL",
        line1: "Mayor",
        streetNumber: "5",
        block: "",
        staircase: "B",
        floor: "3",
        door: "",
        postalCode: "28013",
        placeName: "Madrid",
        provinceName: null,
        countryName: "España",
      }),
    ).toBe(" CL Mayor 5 B 3 28013 Madrid España");
  });

  it("formats the IBAN in groups of four", () => {
    expect(formatIban("es52 0049 1500 0612 3456 7890")).toBe("ES52 0049 1500 0612 3456 7890");
    expect(formatIban("DE89370400440532013000")).toBe("DE89 3704 0044 0532 0130 00");
  });

  it("names the role, the parking space and the retirement row", () => {
    expect(roleName("job", "Analista")).toBe("J-Analista");
    expect(roleName("position", "Jefe")).toBe("P-Jefe");
    expect(parkingSpace("2")).toBe("S");
    expect(parkingSpace("0")).toBe("N");
    expect(needsRetirementRow("01", "1830")).toBe(true);
    expect(needsRetirementRow("01", "BC205")).toBe(false);
    expect(needsRetirementRow("04", "1830")).toBe(false);
  });
});
