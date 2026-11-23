import "server-only";

import { Uint8ArrayReader, ZipReader } from "@zip.js/zip.js";
import ExcelJS from "exceljs";
import { extractText, getDocumentProxy } from "unpdf";

import { ATTACHMENT_MIME_TYPES, MAX_FILE_BYTES } from "./chat-data";

export class ChatAttachmentError extends Error {
  constructor(
    message: string,
    readonly status = 422,
  ) {
    super(message);
    this.name = "ChatAttachmentError";
  }
}

const MAX_EXTRACTED_CHARS = 120_000;
const MAX_PDF_PAGES = 80;
const MAX_XLSX_EXPANDED_BYTES = 32 * 1024 * 1024;

export type ExtractedAttachment = { text: string; partial: boolean };

export const sanitizeAttachmentName = (value: string) => {
  const name = value.split(/[\\/]/).at(-1)?.trim();
  if (
    !name ||
    name.length > 180 ||
    [...name].some((character) => {
      const code = character.charCodeAt(0);
      return code < 32 || code === 127;
    })
  )
    throw new ChatAttachmentError("El nombre del archivo no es válido.", 400);
  return name;
};

export const getAttachmentFormat = (name: string) => {
  const extension = name.slice(name.lastIndexOf(".") + 1).toLowerCase();
  switch (extension) {
    case "pdf":
    case "txt":
    case "md":
    case "csv":
    case "xlsx":
      if (name.includes(".")) return { extension, mimeType: ATTACHMENT_MIME_TYPES[extension] };
  }
  throw new ChatAttachmentError(
    "Formato incompatible. Usa PDF con texto, TXT, Markdown, CSV o XLSX.",
    415,
  );
};

async function readPdf(bytes: Uint8Array): Promise<ExtractedAttachment> {
  if (!new TextDecoder().decode(bytes.subarray(0, 1024)).includes("%PDF-")) {
    throw new ChatAttachmentError("El archivo no es un PDF válido.");
  }
  const document = await getDocumentProxy(Uint8Array.from(bytes));
  try {
    if (document.numPages > MAX_PDF_PAGES) {
      throw new ChatAttachmentError(`El PDF supera el límite de ${MAX_PDF_PAGES} páginas.`);
    }
    const { text } = await extractText(document, { mergePages: false });
    const pages = text.flatMap((page, index) =>
      page.trim() ? [`[Página ${index + 1}]\n${page.trim()}`] : [],
    );
    if (!pages.length)
      throw new ChatAttachmentError(
        "El PDF no contiene texto extraíble. Adjunta una versión con texto.",
      );
    return { text: pages.join("\n\n"), partial: pages.length < document.numPages };
  } finally {
    await document.destroy();
  }
}

async function readWorkbook(bytes: Uint8Array): Promise<ExtractedAttachment> {
  const zip = new ZipReader(new Uint8ArrayReader(bytes));
  try {
    const entries = await zip.getEntries();
    if (
      !entries.some((entry) => entry.filename === "xl/workbook.xml") ||
      entries.length > 1000 ||
      entries.some((entry) => entry.encrypted) ||
      entries.reduce((total, entry) => total + entry.uncompressedSize, 0) > MAX_XLSX_EXPANDED_BYTES
    ) {
      throw new ChatAttachmentError(
        "El XLSX está protegido, no es válido o supera el límite descomprimido.",
      );
    }
  } finally {
    await zip.close();
  }
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(Uint8Array.from(bytes).buffer);
  const lines: string[] = [];
  let size = 0;
  let partial = false;
  for (const sheet of workbook.worksheets) {
    const label = `[Hoja: ${sheet.name}]`;
    lines.push(label);
    size += label.length + 1;
    sheet.eachRow((row, rowNumber) => {
      if (size >= MAX_EXTRACTED_CHARS) {
        partial = true;
        return;
      }
      const values: string[] = [];
      row.eachCell({ includeEmpty: true }, (cell) => {
        values.push(cell.text.replace(/[\r\n\t]+/g, " "));
      });
      if (!values.some(Boolean)) return;
      const line = `${rowNumber}\t${values.join("\t")}`;
      lines.push(line);
      size += line.length + 1;
    });
    if (size >= MAX_EXTRACTED_CHARS) break;
  }
  if (!lines.some((line) => /^\d+\t/.test(line))) {
    throw new ChatAttachmentError("El Excel no contiene celdas con valores legibles.");
  }
  return { text: lines.join("\n"), partial };
}

export async function extractChatAttachment(
  name: string,
  bytes: Uint8Array,
): Promise<ExtractedAttachment> {
  if (!bytes.byteLength) throw new ChatAttachmentError("El archivo está vacío.");
  if (bytes.byteLength > MAX_FILE_BYTES)
    throw new ChatAttachmentError("Cada archivo admite hasta 5 MiB.", 413);
  const { extension } = getAttachmentFormat(name);
  try {
    const document =
      extension === "pdf"
        ? await readPdf(bytes)
        : extension === "xlsx"
          ? await readWorkbook(bytes)
          : { text: new TextDecoder("utf-8", { fatal: true }).decode(bytes), partial: false };
    const text = document.text.trim();
    if (!text || text.includes("\0"))
      throw new ChatAttachmentError("El archivo no contiene texto legible.");
    return {
      text: text.slice(0, MAX_EXTRACTED_CHARS),
      partial: document.partial || text.length > MAX_EXTRACTED_CHARS,
    };
  } catch (error) {
    if (error instanceof ChatAttachmentError) throw error;
    throw new ChatAttachmentError(
      "No se pudo leer el archivo. Comprueba el formato y que el archivo esté completo.",
    );
  }
}
