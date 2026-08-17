import { describe, expect, it } from "vitest";

import {
  USER_MESSAGE_BUBBLE_CLASS,
  USER_MESSAGE_ROOT_CLASS,
} from "@/components/assistant-ui/user-message-layout";

describe("user message layout", () => {
  it("does not use aggressive breaking that splits hola or 1013", () => {
    expect(USER_MESSAGE_BUBBLE_CLASS).not.toContain("break-all");
    expect(USER_MESSAGE_BUBBLE_CLASS).not.toContain("wrap-break-word");
    expect(USER_MESSAGE_BUBBLE_CLASS).toContain("break-words");
    expect(USER_MESSAGE_BUBBLE_CLASS).toContain("[word-break:normal]");
  });

  it("sizes the bubble from a full-width flex parent instead of an auto grid column", () => {
    expect(USER_MESSAGE_ROOT_CLASS).toContain("flex");
    expect(USER_MESSAGE_ROOT_CLASS).toContain("w-full");
    expect(USER_MESSAGE_ROOT_CLASS).not.toContain("grid-cols-");
    expect(USER_MESSAGE_BUBBLE_CLASS).toContain("w-fit");
    expect(USER_MESSAGE_BUBBLE_CLASS).toContain("max-w-[min(85%,48rem)]");
  });
});
