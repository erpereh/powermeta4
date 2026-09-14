import "server-only";

import { extractText, getDocumentProxy } from "unpdf";

export type PdfPage = {
  pageNumber: number;
  text: string;
};

export type ExtractedPdf = {
  pageCount: number;
  pages: PdfPage[];
};

/**
 * Thin wrapper around unpdf (already a project dependency, already used for
 * page-aware text extraction in
 * src/features/registro-retributivo/parsers/payrollPdfParser.ts) so the
 * rest of the knowledge module depends on a small, testable seam instead of
 * the PDF library directly.
 */
export const extractPdfPages = async (data: Uint8Array): Promise<ExtractedPdf> => {
  const document = await getDocumentProxy(data);
  const { totalPages, text } = await extractText(document, { mergePages: false });
  return {
    pageCount: totalPages,
    pages: text.map((pageText, index) => ({ pageNumber: index + 1, text: pageText })),
  };
};
