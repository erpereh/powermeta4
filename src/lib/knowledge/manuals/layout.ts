import type { Passage } from "./store";

export type LayoutLine = { x: number; y: number; size: number; cells: string[] };
export type FormattedPage = {
  page: number;
  height: number;
  lines: LayoutLine[];
  visualText: string[];
};

const technicalCode =
  /^(?:\s{2,}|\b(?:if|elseif|else|endif|for|next|var|return|select|insert|update|delete)\b.*[;=()<>])/i;
const bullet = /^(?:[•▪●–]|(?:\d+|[a-z])[.)])\s/u;
const headingNumber = /^\d+(?:\.\d+){1,5}\.?\s+\p{L}/u;
const sentenceEnd = /[.!?;:]$/;
const MAX_PASSAGE = 3000;

export const hasBrokenPdfEncoding = (text: string) =>
  // eslint-disable-next-line no-control-regex -- An embedded control signals a broken glyph map.
  /[\p{L}\p{N}][\u0080-\u009f]|[\u0080-\u009f][\p{L}\p{N}]/u.test(text);

export function redact(text: string) {
  return (
    text
      .toWellFormed()
      // eslint-disable-next-line no-control-regex -- PDF text can contain non-printing characters.
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ")
      .replace(/[\w.%+-]+@[\w.-]+\.[a-z]{2,}/gi, "[correo omitido]")
      .replace(/\b(?:[XYZ]\s?)?\d{7,8}[- ]?[A-Z]\b/gi, "[identificador personal omitido]")
      .replace(/\b(?:ES|PT)\d{2}(?:[ -]?\d){20,21}\b/gi, "[cuenta omitida]")
      .replace(
        /\b(?:sk-or-v1-[a-f0-9]+|AIza[\w-]{30,}|bearer\s+[A-Za-z0-9._-]{15,})\b/gi,
        "[secreto omitido]",
      )
      .replace(
        /(\b(?:bind|login|authenticate|setcredentials)\s*\(\s*)(["'])[^"'\r\n]+\2(\s*,\s*)(["'])[^"'\r\n]+\4/gi,
        "$1$2[usuario omitido]$2$3$4[valor omitido]$4",
      )
      .replace(
        /(<(?:[\w-]+:)?(?:password|passwd|clientsecret|apikey)>)[^<]+(<\/[^>]+>)/gi,
        "$1[valor omitido]$2",
      )
      .replace(/(\b(?:setpassword|setsecret)\s*\(\s*)(["'])[^"'\r\n]+\2/gi, "$1$2[valor omitido]$2")
      .replace(
        /((?:contraseña|password|api[_ -]?key|client[_ -]?secret)\s*[:=][ \t]*)(?!"?\[)(?:"[^"\r\n]+"|'[^'\r\n]+'|[^\s,;]+)/gi,
        "$1[valor omitido]",
      )
      .replace(
        /((?:nombre(?: y apellidos)?|apellidos?|beneficiario|titular|razón social)[:=]\s*)(?:\p{Lu}[\p{L}'’-]+\s+){1,4}\p{Lu}[\p{L}'’-]+/gu,
        "$1[nombre omitido]",
      )
      .replace(
        /((?:matr[ií]cula(?: del empleado)?|ID_HR_PERSON|tel[eé]fono|m[oó]vil)\s*[:=]\s*)[+\d][\d .-]{3,}/giu,
        "$1[valor omitido]",
      )
  );
}

const signature = (line: LayoutLine) =>
  line.cells.join(" ").normalize("NFKC").toLowerCase().replace(/\d+/g, "#").trim();

function recurringMargins(pages: readonly FormattedPage[]) {
  const frequency = new Map<string, number>();
  for (const page of pages) {
    const margins = new Set(
      page.lines
        .filter(({ y }) => y <= page.height * 0.065 || y >= page.height * 0.94)
        .map(signature)
        .filter(Boolean),
    );
    for (const line of margins) frequency.set(line, (frequency.get(line) ?? 0) + 1);
  }
  return new Set(
    [...frequency]
      .filter(([, count]) => count >= Math.max(3, pages.length * 0.28))
      .map(([line]) => line),
  );
}

function splitLarge(text: string, max: number): string[] {
  const parts: string[] = [];
  let offset = 0;
  while (offset < text.length) {
    const limit = Math.min(offset + max, text.length);
    const divider = Math.max(text.lastIndexOf("\n", limit), text.lastIndexOf(". ", limit) + 1);
    const end = limit < text.length && divider > offset + max * 0.55 ? divider : limit;
    const piece = text.slice(offset, end).trim();
    if (piece) parts.push(piece);
    offset = end;
  }
  return parts;
}

export function passagesFromPages(pages: readonly FormattedPage[], title: string): Passage[] {
  const repeated = recurringMargins(pages);
  const passages: Passage[] = [];
  let section = "";
  for (const page of pages) {
    const lines = page.lines.filter((line) => {
      const text = line.cells.join(" ");
      return (
        text.trim() &&
        !(
          (line.y <= page.height * 0.065 || line.y >= page.height * 0.94) &&
          (repeated.has(signature(line)) || /^\s*\d{1,4}\s*$/.test(text))
        )
      );
    });
    const fontSizes = lines.map(({ size }) => size).sort((a, b) => a - b);
    const bodyFont = fontSizes[Math.floor(fontSizes.length / 2)] ?? 10;
    const blocks: string[] = [];
    let block = "";
    let previous: LayoutLine | undefined;
    const flush = () => {
      if (block.trim()) blocks.push(block.trim());
      block = "";
    };
    const emit = (kind: Passage["kind"], value: string) => {
      for (const text of splitLarge(redact(value), MAX_PASSAGE)) {
        passages.push({ page: page.page, section: redact(section || title), kind, text });
      }
    };
    const emitProse = () => {
      flush();
      let accumulated = "";
      for (const part of blocks.splice(0)) {
        if (accumulated && accumulated.length + part.length + 2 > 2200) {
          emit("prose", accumulated);
          accumulated = "";
        }
        accumulated += accumulated ? "\n\n" + part : part;
      }
      if (accumulated) emit("prose", accumulated);
    };

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (!line) continue;
      const text = line.cells.join(" ").trim();
      const neighbors = lines.slice(i, i + 3);
      const isHeading =
        line.cells.length === 1 &&
        text.length >= 4 &&
        text.length <= 115 &&
        !sentenceEnd.test(text) &&
        /\p{L}/u.test(text) &&
        !bullet.test(text) &&
        (line.size > bodyFont * 1.18 || headingNumber.test(text));
      if (isHeading) {
        flush();
        // Heading stays in the content. A heading alone is never a passage.
        if (block || blocks.join("").length >= 680) emitProse();
        section = text;
        block = text;
      } else if (
        neighbors.length >= 2 &&
        neighbors.every((candidate) => candidate.cells.length >= 2)
      ) {
        emitProse();
        const rows: string[] = [];
        while (lines[i] && (lines[i]?.cells.length ?? 0) >= 2) {
          rows.push(lines[i]?.cells.join(" | ") ?? "");
          i += 1;
        }
        const [header, ...values] = rows;
        if (header) {
          let table = header;
          for (const row of values) {
            if (table.length + row.length >= 2300 && table !== header) {
              emit("table", table);
              table = header;
            }
            table += "\n" + row;
          }
          emit("table", table);
        }
        i -= 1;
      } else if (technicalCode.test(text)) {
        emitProse();
        const code = [text];
        while (lines[i + 1] && technicalCode.test(lines[i + 1]?.cells.join(" ") ?? "")) {
          i += 1;
          code.push(lines[i]?.cells.join(" ") ?? "");
        }
        emit("code", code.join("\n"));
      } else {
        if (previous && (line.y - previous.y > bodyFont * 1.8 || bullet.test(text))) flush();
        const wordContinuation =
          block.endsWith("-") && /^\p{Ll}/u.test(text) && /\p{L}{3}-$/u.test(block);
        block = wordContinuation ? block.slice(0, -1) + text : block ? block + " " + text : text;
      }
      previous = line;
    }
    emitProse();
    for (const text of page.visualText) emit("figure", text);
  }
  return passages;
}

export function catalogPassages(value: string): Passage[] {
  return value.split(/(?=^#{1,4} )/m).flatMap((section) => {
    const title =
      section
        .split("\n")[0]
        ?.replace(/^#+\s*/, "")
        .trim() || "Catálogo";
    return splitLarge(section, MAX_PASSAGE).map((text) => ({
      page: 1,
      section: title,
      kind: "catalog",
      text,
    }));
  });
}
