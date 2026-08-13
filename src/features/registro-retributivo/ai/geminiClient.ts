import { GoogleGenAI } from "@google/genai";

export function isGeminiConfigured(): boolean {
  return Boolean(process.env.GEMINI_API_KEY);
}

export function isGeminiEnabled(): boolean {
  return isGeminiConfigured() && process.env.ENABLE_AI_REVIEW !== "false";
}

export function getGeminiModel(): string {
  return process.env.GEMINI_MODEL || "gemini-3.1-flash-lite";
}

export function createGeminiClient(): GoogleGenAI | undefined {
  if (!process.env.GEMINI_API_KEY) {
    return undefined;
  }

  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}
