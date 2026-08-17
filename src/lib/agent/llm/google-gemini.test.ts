import { describe, expect, it } from "vitest";

import {
  geminiRequestHeaders,
  isGoogleGenerativeLanguageHost,
  looksLikeGeminiGenerateContent,
  parseGeminiGenerateContent,
  resolveGeminiGenerateContentUrl,
  toGeminiGenerateContentBody,
} from "@/lib/agent/llm/google-gemini";

const GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/openai";

describe("google gemini native transport", () => {
  it("detects the Generative Language host and ignores other providers", () => {
    expect(isGoogleGenerativeLanguageHost(GEMINI_BASE)).toBe(true);
    expect(isGoogleGenerativeLanguageHost(`${GEMINI_BASE}/`)).toBe(true);
    expect(isGoogleGenerativeLanguageHost("https://api.example.com/v1")).toBe(false);
    expect(isGoogleGenerativeLanguageHost("not a url")).toBe(false);
  });

  it("derives generateContent from the OpenAI-compatible Base URL without putting the key in the URL", () => {
    expect(resolveGeminiGenerateContentUrl(GEMINI_BASE, "gemini-3.1-flash-lite")).toBe(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent",
    );
    expect(
      resolveGeminiGenerateContentUrl(
        "https://generativelanguage.googleapis.com/v1beta/openai/",
        "models/gemini-3.1-flash-lite",
      ),
    ).toBe(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent",
    );
    expect(resolveGeminiGenerateContentUrl(GEMINI_BASE, "gemini-3.1-flash-lite")).not.toContain(
      "key=",
    );
  });

  it("sends x-goog-api-key and never an Authorization header", () => {
    const headers = geminiRequestHeaders("AQ.secret");
    expect(headers["x-goog-api-key"]).toBe("AQ.secret");
    expect(headers.Authorization).toBeUndefined();
    expect(Object.keys(headers)).not.toContain("Authorization");
  });

  it("maps OpenAI messages and tools to native generateContent JSON", () => {
    const body = toGeminiGenerateContentBody({
      messages: [
        { role: "system", content: "Reply only with OK" },
        { role: "user", content: "OK" },
      ],
      tools: [
        {
          type: "function",
          function: {
            name: "test_tool",
            description: "Synthetic connectivity probe. Call with value PING.",
            parameters: { type: "object", properties: { value: { type: "string" } } },
          },
        },
      ],
    });
    expect(body).toMatchObject({
      systemInstruction: { parts: [{ text: "Reply only with OK" }] },
      contents: [{ role: "user", parts: [{ text: "OK" }] }],
      generationConfig: { temperature: 0 },
    });
    const tools = body.tools as { functionDeclarations: { name: string }[] }[];
    expect(tools[0]?.functionDeclarations[0]?.name).toBe("test_tool");
    expect(JSON.stringify(body)).not.toMatch(/empleado|CYC|1013/i);
  });

  it("parses native text and functionCall into the runner result", () => {
    expect(
      parseGeminiGenerateContent({
        candidates: [{ content: { parts: [{ text: "Hola" }] } }],
      }),
    ).toEqual({ type: "text", text: "Hola" });
    expect(
      parseGeminiGenerateContent({
        candidates: [
          {
            content: {
              parts: [
                {
                  functionCall: {
                    name: "employee.get_field",
                    args: { employeeRef: "EMP_DEADBEEF", field: "JOB_TITLE" },
                  },
                },
              ],
            },
          },
        ],
      }),
    ).toEqual({
      type: "tool_calls",
      toolCalls: [
        {
          id: "call-employee.get_field-0",
          name: "employee.get_field",
          arguments: JSON.stringify({ employeeRef: "EMP_DEADBEEF", field: "JOB_TITLE" }),
        },
      ],
    });
    expect(
      looksLikeGeminiGenerateContent({
        candidates: [{ content: { parts: [{ text: "OK" }] } }],
      }),
    ).toBe(true);
    expect(looksLikeGeminiGenerateContent({ choices: [{ message: { content: "OK" } }] })).toBe(
      false,
    );
  });
});
