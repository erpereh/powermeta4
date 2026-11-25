import { copyFile, mkdtemp, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";

import { createCanvas } from "@napi-rs/canvas";
import { getDocument, OPS, Util } from "pdfjs-dist/legacy/build/pdf.mjs";
import type { PDFPageProxy, TextItem } from "pdfjs-dist/types/src/display/api";
import { createWorker, PSM, type Worker } from "tesseract.js";

import { sha256 } from "./config";
import {
  hasBrokenPdfEncoding,
  passagesFromPages,
  redact,
  type FormattedPage,
  type LayoutLine,
} from "./layout";
import type { ManualInput, PageStatus } from "./store";

type Box = [number, number, number, number];
type PdfLine = LayoutLine & { columns: [number, number][] };
const require = createRequire(import.meta.url);
const pdfRoot = path.dirname(require.resolve("pdfjs-dist/package.json"));
const assetPath = (dir: string) => path.join(pdfRoot, dir).replaceAll("\\", "/") + "/";
const visualCue =
  /\b(?:figura|imagen|captura|diagrama|gr[aá]fic[oa]|pantalla|screenshot|figure|screen|fluxograma)\b/i;

export const letters = (value: string) => (value.match(/\p{L}/gu) ?? []).length;

function readingLines(page: PDFPageProxy, items: readonly TextItem[]): PdfLine[] {
  const viewport = page.getViewport({ scale: 1 });
  const points = items
    .filter((item) => item.str.trim())
    .map((item) => {
      const [x, y] = viewport.convertToViewportPoint(item.transform[4], item.transform[5]);
      return { x, y, width: item.width, size: Math.max(1, item.height), text: item.str };
    })
    .sort((a, b) => a.y - b.y || a.x - b.x);
  const rows: Array<{ y: number; words: typeof points }> = [];
  for (const point of points) {
    const last = rows.at(-1);
    if (last && point.y - last.y <= Math.max(1.5, point.size * 0.22)) last.words.push(point);
    else rows.push({ y: point.y, words: [point] });
  }
  return rows.map(({ y, words }) => {
    words.sort((a, b) => a.x - b.x);
    const cells: string[] = [];
    const columns: PdfLine["columns"] = [];
    let current = "";
    let start = 0;
    let end = 0;
    for (const word of words) {
      const gap = word.x - end;
      if (current && gap > Math.max(21, word.size * 2.15)) {
        cells.push(current.trim());
        columns.push([start, end]);
        current = "";
      }
      if (!current) start = word.x;
      if (current && gap > word.size * 0.16 && !/\s$/.test(current)) current += " ";
      current += word.text;
      end = Math.max(word.x + word.width, word.x);
    }
    if (current.trim()) {
      cells.push(current.trim());
      columns.push([start, end]);
    }
    return {
      x: words[0]?.x ?? 0,
      y,
      size: Math.max(...words.map((word) => word.size)),
      cells,
      columns,
    };
  });
}

async function pageGraphics(page: PDFPageProxy) {
  const viewport = page.getViewport({ scale: 1 });
  const list = await page.getOperatorList();
  const images: Box[] = [];
  const stack: number[][] = [];
  let matrix = [1, 0, 0, 1, 0, 0];
  let drawings = 0;
  for (const [index, operator] of list.fnArray.entries()) {
    const args: unknown = list.argsArray[index];
    if (operator === OPS.save) stack.push(matrix);
    if (operator === OPS.restore) matrix = stack.pop() ?? matrix;
    if (operator === OPS.transform && Array.isArray(args) && args.length === 6)
      matrix = Util.transform(matrix, args);
    if (operator === OPS.constructPath) drawings += 1;
    if (operator !== OPS.paintImageXObject && operator !== OPS.paintInlineImageXObject) continue;
    const [a = 0, b = 0, c = 0, d = 0, x = 0, y = 0] = matrix;
    const corners = [
      [x, y],
      [x + a, y + b],
      [x + c, y + d],
      [x + a + c, y + b + d],
    ].map(([px, py]) => viewport.convertToViewportPoint(px ?? 0, py ?? 0));
    const xs = corners.map((point) => point[0] ?? 0);
    const ys = corners.map((point) => point[1] ?? 0);
    images.push([
      Math.max(0, Math.min(...xs)),
      Math.max(0, Math.min(...ys)),
      Math.min(viewport.width, Math.max(...xs)),
      Math.min(viewport.height, Math.max(...ys)),
    ]);
  }
  const area = ([l, t, r, b]: Box) => Math.max(0, r - l) * Math.max(0, b - t);
  return {
    drawings,
    images: images
      .filter((box) => area(box) >= viewport.width * viewport.height * 0.095)
      .sort((a, b) => area(b) - area(a))
      .slice(0, 2),
  };
}

export async function createOcrLanguageDirectory() {
  const directory = await mkdtemp(path.join(os.tmpdir(), "powermeta4-ocr-"));
  try {
    await Promise.all(
      ["spa", "eng", "por"].map(async (code) => {
        const root = path.dirname(require.resolve("@tesseract.js-data/" + code));
        await copyFile(
          path.join(root, "4.0.0_best_int", code + ".traineddata.gz"),
          path.join(directory, code + ".traineddata.gz"),
        );
      }),
    );
    return { directory, close: () => rm(directory, { recursive: true, force: true }) };
  } catch (error) {
    await rm(directory, { recursive: true, force: true });
    throw error;
  }
}

export function createPdfReader(languagePath: string) {
  let worker: Promise<Worker> | undefined;
  const seenImages = new Map<string, { text: string; confidence: number; blank: boolean }>();
  const getWorker = () =>
    (worker ??= createWorker(["spa", "eng", "por"], 1, {
      langPath: languagePath,
      cacheMethod: "none",
      gzip: true,
      errorHandler: () => console.error("El worker OCR encontró un error."),
    }));

  async function recognize(
    page: PDFPageProxy,
    boxes: readonly Box[],
    mode = boxes.length ? PSM.SPARSE_TEXT : PSM.AUTO,
  ) {
    const base = page.getViewport({ scale: 1 });
    const scale = Math.min(2.7, 1800 / Math.max(base.width, base.height));
    const viewport = page.getViewport({ scale });
    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
    await page.render({ canvas: canvas as unknown as HTMLCanvasElement, viewport }).promise;
    const results = [];
    const crops: readonly Box[] = boxes.length ? boxes : [[0, 0, base.width, base.height]];
    for (const [left, top, right, bottom] of crops) {
      const width = Math.max(1, Math.floor((right - left) * scale));
      const height = Math.max(1, Math.floor((bottom - top) * scale));
      const crop = createCanvas(width, height);
      const context = crop.getContext("2d");
      context.drawImage(canvas, left * scale, top * scale, width, height, 0, 0, width, height);
      const pixels = context.getImageData(0, 0, width, height).data;
      let ink = 0;
      for (let i = 0; i < pixels.length; i += 32) {
        if (
          (pixels[i] ?? 255) < 220 ||
          (pixels[i + 1] ?? 255) < 220 ||
          (pixels[i + 2] ?? 255) < 220
        )
          ink += 1;
      }
      if (ink < (pixels.length / 32) * 0.00045) {
        results.push({ text: "", confidence: 0, blank: true });
        continue;
      }
      const bytes = await crop.encode("png");
      const hash = mode + ":" + sha256(bytes);
      const old = seenImages.get(hash);
      if (old) {
        results.push(old);
        continue;
      }
      const ocr = await getWorker();
      await ocr.setParameters({ tessedit_pageseg_mode: mode });
      const { data } = await ocr.recognize(bytes);
      const result = { text: redact(data.text.trim()), confidence: data.confidence, blank: false };
      if (seenImages.size >= 1600) seenImages.clear();
      seenImages.set(hash, result);
      results.push(result);
    }
    return results;
  }

  async function repairLines(page: PDFPageProxy, lines: PdfLine[]) {
    const { width, height } = page.getViewport({ scale: 1 });
    const damaged = lines.flatMap((line) =>
      line.cells.flatMap((cell, index) => {
        const column = line.columns[index];
        return column && hasBrokenPdfEncoding(cell) ? [{ line, index, column }] : [];
      }),
    );
    if (!damaged.length) return false;
    const crops = damaged.map(
      ({ line: { y, size }, column: [left, right] }): Box => [
        Math.max(0, left - 3),
        Math.max(0, y - size * 1.2),
        Math.min(width, right + 3),
        Math.min(height, y + size * 0.4),
      ],
    );
    const images = await recognize(page, crops, PSM.SINGLE_LINE);
    let repaired = false;
    damaged.forEach(({ line, index }, crop) => {
      const image = images[crop];
      if (!image || image.confidence < 55 || letters(image.text) < 4) return;
      line.cells[index] = image.text.replace(/\s+/g, " ");
      repaired = true;
    });
    return repaired;
  }

  return {
    async read(
      bytes: Uint8Array,
      input: Omit<ManualInput, "pages" | "passages">,
    ): Promise<ManualInput> {
      const task = getDocument({
        data: bytes.slice(),
        verbosity: 0,
        useSystemFonts: true,
        standardFontDataUrl: assetPath("standard_fonts"),
        cMapUrl: assetPath("cmaps"),
        wasmUrl: assetPath("wasm"),
        useWorkerFetch: false,
      });
      try {
        const pdf = await task.promise;
        const pages: ManualInput["pages"] = [];
        const formatted: FormattedPage[] = [];
        for (let number = 1; number <= pdf.numPages; number += 1) {
          const page = await pdf.getPage(number);
          const content = await page.getTextContent();
          const lines = readingLines(
            page,
            content.items.filter((item): item is TextItem => "str" in item),
          );
          const repaired = await repairLines(page, lines);
          const height = page.getViewport({ scale: 1 }).height;
          const text = lines.map((line) => line.cells.join(" ")).join(" ");
          const body = lines
            .filter(({ y }) => y > height * 0.065 && y < height * 0.94)
            .map(({ cells }) => cells.join(" "))
            .join(" ");
          const sparse =
            letters(body) < 33 ||
            (text.match(/\uFFFD/g) ?? []).length > Math.max(4, text.length * 0.025);
          let status: PageStatus = sparse ? "review" : repaired ? "mixed" : "text";
          const visualText: string[] = [];
          if (sparse || (visualCue.test(text) && text.length < 3500)) {
            const graphics = await pageGraphics(page);
            if (sparse || graphics.images.length) {
              const images = await recognize(page, sparse ? [] : graphics.images);
              for (const image of images) {
                if (image.confidence < 45 || letters(image.text) < 15) continue;
                const keywords = image.text.match(/\p{L}{4,}/gu) ?? [];
                const base = text.toLocaleLowerCase();
                if (
                  !sparse &&
                  keywords.filter((word) => !base.includes(word.toLocaleLowerCase())).length < 3
                )
                  continue;
                visualText.push(image.text);
              }
              if (visualText.length) status = sparse ? "ocr" : "mixed";
              else if (sparse && images.every((image) => image.blank) && !letters(text))
                status = "blank";
              else if (
                sparse &&
                letters(text) >= 12 &&
                !graphics.images.length &&
                graphics.drawings < 12
              )
                status = "text";
            }
          }
          pages.push({ page: number, status });
          formatted.push({ page: number, height, lines, visualText });
          page.cleanup();
        }
        const passages = passagesFromPages(formatted, input.title);
        if (!passages.length) throw new Error("Documento sin contenido indexable.");
        return { ...input, pages, passages };
      } finally {
        await task.destroy();
      }
    },
    async close() {
      if (worker) await (await worker).terminate();
    },
  };
}
