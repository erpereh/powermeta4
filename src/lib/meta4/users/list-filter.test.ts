import { describe, expect, it } from "vitest";

import { filterUsers } from "./list-filter";

const users = [
  { id: "0579", claveSelf: "antonioramon.sanchez", fullName: "Antonio Ramón Sánchez" },
  { id: "0639", claveSelf: "jose.pinero", fullName: "José Piñero Pecero" },
];

describe("filterUsers", () => {
  it("returns every user without a query", () => {
    expect(filterUsers(users, "  ")).toEqual(users);
  });

  it("matches id, Meta4 user or name ignoring accents and case", () => {
    expect(filterUsers(users, "0639")).toEqual([users[1]]);
    expect(filterUsers(users, "ANTONIORAMON")).toEqual([users[0]]);
    expect(filterUsers(users, "pinero")).toEqual([users[1]]);
    expect(filterUsers(users, "nadie")).toEqual([]);
  });
});
