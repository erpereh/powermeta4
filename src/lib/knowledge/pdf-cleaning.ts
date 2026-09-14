import "server-only";

import type { PdfPage } from "./pdf-extraction";

const EDGE_HEAD_LINES = 2;
const EDGE_TAIL_LINES = 3;
const BOILERPLATE_MIN_PAGES = 3;
const BOILERPLATE_MIN_FRACTION = 0.6;

const normalizeWhitespace = (text: string): string =>
  text
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

/** Same repeated header/footer text can carry a different page number or
 * date per page ("Page 1 of 82" vs "Page 2 of 82"); normalizing digit runs
 * away lets those still count as "the same" boilerplate line. */
const normalizeForBoilerplate = (line: string): string =>
  line
    .trim()
    .toLowerCase()
    .replace(/\d+/g, "#")
    .replace(/\s+/g, " ");

const trimBlankEdges = (lines: readonly string[]): string[] => {
  let start = 0;
  let end = lines.length;
  while (start < end && !(lines[start] ?? "").trim()) start += 1;
  while (end > start && !(lines[end - 1] ?? "").trim()) end -= 1;
  return lines.slice(start, end);
};

/**
 * Detects lines that repeat, near-identically, at the very start or end of
 * most pages of a single document (running headers/footers such as a page
 * counter, the document title, or a generation date/path) and strips them,
 * without touching text that happens to repeat inside the body.
 */
export const cleanRepeatedBoilerplate = (pages: readonly PdfPage[]): PdfPage[] => {
  const pageLines = pages.map((page) => trimBlankEdges(page.text.replace(/\r\n?/g, "\n").split("\n")));

  if (pages.length < BOILERPLATE_MIN_PAGES) {
    return pages.map((page, index) => ({
      ...page,
      text: normalizeWhitespace((pageLines[index] ?? []).join("\n")),
    }));
  }

  const edgePageCounts = new Map<string, number>();
  for (const lines of pageLines) {
    const edgeLines = [...lines.slice(0, EDGE_HEAD_LINES), ...lines.slice(-EDGE_TAIL_LINES)];
    const seenOnThisPage = new Set<string>();
    for (const line of edgeLines) {
      const normalized = normalizeForBoilerplate(line);
      if (!normalized || seenOnThisPage.has(normalized)) continue;
      seenOnThisPage.add(normalized);
      edgePageCounts.set(normalized, (edgePageCounts.get(normalized) ?? 0) + 1);
    }
  }

  const minPagesToCount = Math.max(
    BOILERPLATE_MIN_PAGES,
    Math.ceil(pages.length * BOILERPLATE_MIN_FRACTION),
  );
  const boilerplate = new Set(
    [...edgePageCounts.entries()]
      .filter(([, count]) => count >= minPagesToCount)
      .map(([normalized]) => normalized),
  );

  return pages.map((page, index) => {
    const lines = [...(pageLines[index] ?? [])];
    while (lines.length > 0 && boilerplate.has(normalizeForBoilerplate(lines[0] ?? ""))) {
      lines.shift();
    }
    while (
      lines.length > 0 &&
      boilerplate.has(normalizeForBoilerplate(lines[lines.length - 1] ?? ""))
    ) {
      lines.pop();
    }
    return { ...page, text: normalizeWhitespace(lines.join("\n")) };
  });
};
