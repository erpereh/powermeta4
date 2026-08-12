import { describe, expect, it } from "vitest";

import { compareEmployeeIds } from "@/lib/meta4/users/employee-id";

describe("compareEmployeeIds", () => {
  it("compares digit-only employee ids without Number()", () => {
    const ids = ["1001512", "0023", "0002", "0013"];
    expect([...ids].sort(compareEmployeeIds)).toEqual(["0002", "0013", "0023", "1001512"]);
  });
});
