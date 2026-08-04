import { describe, expect, it } from "vitest";

import { validateUserDraft } from "@/lib/users/validation";
import type { UserDraft } from "@/types/workspace";

const validDraft: UserDraft = {
  firstName: "Ana",
  lastName: "López",
  email: "ana@example.com",
  username: "ana.lopez",
  role: "manager",
  status: "active",
};

describe("user validation", () => {
  it("accepts a complete user draft", () => {
    expect(validateUserDraft(validDraft)).toEqual({});
  });

  it("reports required, email and username errors", () => {
    const errors = validateUserDraft({
      ...validDraft,
      firstName: "",
      email: "invalid",
      username: "ana lopez",
    });

    expect(errors).toMatchObject({
      firstName: "Este campo es obligatorio.",
      email: "Introduce un correo válido.",
      username: "Usa letras, números, puntos, guiones o guiones bajos.",
    });
  });
});
