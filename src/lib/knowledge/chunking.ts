import "server-only";

import type { PdfPage } from "./pdf-extraction";

export type DocumentChunk = {
  chunkIndex: number;
  pageNumber: number;
  sectionTitle: string | null;
  charStart: number;
  charEnd: number;
  text: string;
};

export type ChunkingOptions = {
  /** Target chunk size, in characters. Configurable via KB_CHUNK_SIZE_CHARS. */
  chunkSizeChars: number;
  /** How much trailing text carries into the next chunk, in characters.
   * Configurable via KB_CHUNK_OVERLAP_CHARS. */
  overlapChars: number;
};

type Line = { text: string; start: number; end: number };

const toLines = (pageText: string): Line[] => {
  const lines: Line[] = [];
  let cursor = 0;
  for (const rawLine of pageText.split("\n")) {
    const start = cursor;
    const end = start + rawLine.length;
    lines.push({ text: rawLine, start, end });
    cursor = end + 1; // account for the '\n' separator removed by split
  }
  return lines;
};

/**
 * Chunks a single page's (already cleaned) text without ever crossing a
 * page boundary, so every chunk can be attributed to exactly one page.
 * Accumulates whole lines up to chunkSizeChars (manuals extracted from PDF
 * tend to already be line-per-clause, see pdf-cleaning.ts), carrying the
 * trailing overlapChars worth of lines into the next chunk so surrounding
 * context is not lost at a cut. A single line longer than the whole budget
 * (rare - e.g. a very long table row or URL) is hard-split into
 * non-overlapping windows rather than left unbounded.
 */
export const chunkPageText = (
  pageText: string,
  options: ChunkingOptions,
): Array<{ text: string; charStart: number; charEnd: number }> => {
  if (!pageText.trim()) return [];
  const { chunkSizeChars, overlapChars } = options;
  const lines = toLines(pageText);

  const chunks: Array<{ text: string; charStart: number; charEnd: number }> = [];
  let current: Line[] = [];
  let currentLength = 0;

  const flush = () => {
    if (current.length === 0) return;
    const charStart = current[0]!.start;
    const charEnd = current[current.length - 1]!.end;
    const text = pageText.slice(charStart, charEnd).trim();
    if (text) chunks.push({ text, charStart, charEnd });
  };

  const overlapTail = (): Line[] => {
    const tail: Line[] = [];
    let length = 0;
    for (let i = current.length - 1; i >= 0 && length < overlapChars; i -= 1) {
      const line = current[i]!;
      tail.unshift(line);
      length += line.text.length + 1;
    }
    return tail;
  };

  for (const line of lines) {
    const lineLength = line.text.length + 1;

    if (lineLength > chunkSizeChars) {
      flush();
      current = [];
      currentLength = 0;
      let offset = line.start;
      while (offset < line.end) {
        const sliceEnd = Math.min(offset + chunkSizeChars, line.end);
        const text = pageText.slice(offset, sliceEnd).trim();
        if (text) chunks.push({ text, charStart: offset, charEnd: sliceEnd });
        offset = sliceEnd;
      }
      continue;
    }

    if (currentLength > 0 && currentLength + lineLength > chunkSizeChars) {
      flush();
      current = overlapTail();
      currentLength = current.reduce((sum, l) => sum + l.text.length + 1, 0);
    }

    current.push(line);
    currentLength += lineLength;
  }
  flush();

  return chunks;
};

const HEADING_MAX_LENGTH = 80;

/** Best-effort: a page's first short, unpunctuated line is often its
 * heading. Not guaranteed - many pages won't have one, and that's fine. */
export const detectSectionTitle = (pageText: string): string | null => {
  const firstLine = pageText
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line.length > 0);
  if (!firstLine) return null;
  if (firstLine.length > HEADING_MAX_LENGTH) return null;
  if (/[.,;:]$/.test(firstLine)) return null;
  if (!/\p{L}/u.test(firstLine)) return null;
  return firstLine;
};

export const DEFAULT_CHUNKING_OPTIONS: ChunkingOptions = {
  chunkSizeChars: 1200,
  overlapChars: 150,
};

export const chunkDocument = (
  pages: readonly PdfPage[],
  options: ChunkingOptions = DEFAULT_CHUNKING_OPTIONS,
): DocumentChunk[] => {
  const chunks: DocumentChunk[] = [];
  let chunkIndex = 0;
  for (const page of pages) {
    const sectionTitle = detectSectionTitle(page.text);
    for (const piece of chunkPageText(page.text, options)) {
      chunks.push({
        chunkIndex,
        pageNumber: page.pageNumber,
        sectionTitle,
        charStart: piece.charStart,
        charEnd: piece.charEnd,
        text: piece.text,
      });
      chunkIndex += 1;
    }
  }
  return chunks;
};
