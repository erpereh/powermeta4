import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import {
  PDFDocument,
  rgb,
  StandardFonts,
  type PDFFont,
  type PDFImage,
  type PDFPage,
} from "pdf-lib";

import {
  certificateFieldText,
  certificateIssueParts,
  certificateYearText,
  formatCertificateAmount,
  isCertificateArrearsColumn,
  isCertificateFieldId,
  isCertificateRefundColumn,
} from "./core";
import {
  CERTIFICATE_ARREARS,
  CERTIFICATE_BACKGROUND,
  CERTIFICATE_FIELDS,
  CERTIFICATE_FONT_SIZE,
  CERTIFICATE_ISSUE,
  CERTIFICATE_PAGE,
  CERTIFICATE_REFUNDS,
  CERTIFICATE_SIGNER,
  CERTIFICATE_TITLE,
  CERTIFICATE_TITLE_BAND,
  type CertificateAnchor,
} from "./layout";
import type { WithholdingCertificate } from "./types";

/** Modelo en blanco de cada página y firma fija del diseño del informe. */
const ASSETS = ["cert-hab-p1.jpg", "cert-hab-p2.jpg", "cert-hab-firma.jpg"] as const;

let assets: Promise<readonly Uint8Array[]> | null = null;

/** Recursos del informe, leídos una vez del disco del servidor. */
const loadAssets = (): Promise<readonly Uint8Array[]> => {
  assets ??= Promise.all(
    ASSETS.map(
      async (name) =>
        new Uint8Array(
          await readFile(
            path.join(
              /* turbopackIgnore: true */ process.cwd(),
              "src/lib/portal/certificates/assets",
              name,
            ),
          ),
        ),
    ),
  ).catch((error: unknown) => {
    assets = null;
    throw error;
  });
  return assets;
};

const BLACK = rgb(0, 0, 0);
const WHITE = rgb(1, 1, 1);

/** Helvetica estándar solo admite WinAnsi: se descartan caracteres que no puede pintar. */
const printable = (font: PDFFont, value: string): string =>
  [...value]
    .filter((char) => {
      try {
        font.encodeText(char);
        return true;
      } catch {
        return false;
      }
    })
    .join("");

/**
 * Certificados de retenciones con la misma plantilla, tipografía y posiciones
 * que el informe `CYC_RP_CERT_HAB_<año>` del portal original: dos páginas por
 * certificado, en el orden en que el original los imprime. La previsualización
 * y la descarga usan exactamente estos bytes.
 */
export async function renderCertificatePdf(
  certificates: readonly WithholdingCertificate[],
): Promise<Uint8Array> {
  const document = await PDFDocument.create();
  const year = certificates[0]?.year;
  document.setTitle(year === undefined ? "CYC_RP_CERT_HAB" : `CYC_RP_CERT_HAB_${year}`);
  document.setCreator("powermeta4");
  document.setProducer("powermeta4");
  const [regular, bold] = await Promise.all([
    document.embedFont(StandardFonts.Helvetica),
    document.embedFont(StandardFonts.HelveticaBold),
  ]);
  const [first, second, signatureBytes] = await loadAssets();
  if (!first || !second || !signatureBytes)
    throw new Error("Faltan las plantillas del certificado.");
  const [backgrounds, signature] = await Promise.all([
    Promise.all([document.embedJpg(first), document.embedJpg(second)]),
    document.embedJpg(signatureBytes),
  ]);
  for (const certificate of certificates)
    drawCertificate(document, certificate, { regular, bold, backgrounds, signature });
  return document.save();
}

type Resources = {
  readonly regular: PDFFont;
  readonly bold: PDFFont;
  readonly backgrounds: readonly PDFImage[];
  readonly signature: PDFImage;
};

function drawCertificate(
  document: PDFDocument,
  certificate: WithholdingCertificate,
  { regular, bold, backgrounds, signature }: Resources,
) {
  const pages: PDFPage[] = backgrounds.map((background, index) => {
    const page = document.addPage([CERTIFICATE_PAGE.width, CERTIFICATE_PAGE.height]);
    page.drawImage(background, CERTIFICATE_BACKGROUND);
    const band = CERTIFICATE_TITLE_BAND[index];
    if (band) {
      page.drawRectangle({
        x: band.x0,
        y: band.y0,
        width: band.x1 - band.x0,
        height: band.y1 - band.y0,
        color: WHITE,
        borderColor: WHITE,
        borderWidth: 1,
      });
      page.drawText(printable(bold, CERTIFICATE_TITLE), {
        x: band.textX,
        y: band.textY,
        size: CERTIFICATE_FONT_SIZE.title,
        font: bold,
        color: BLACK,
      });
    }
    return page;
  });

  const draw = (
    anchor: CertificateAnchor,
    value: string,
    font: PDFFont = regular,
    size: number = CERTIFICATE_FONT_SIZE.field,
  ) => {
    const textValue = printable(font, value);
    const page = pages[anchor.page];
    if (!textValue.trim() || !page) return;
    const x =
      anchor.align === "right" ? anchor.x - font.widthOfTextAtSize(textValue, size) : anchor.x;
    page.drawText(textValue, { x, y: anchor.y, size, font, color: BLACK });
  };

  for (const [fieldId, spec] of Object.entries(CERTIFICATE_FIELDS)) {
    if (!isCertificateFieldId(fieldId)) continue;
    const text = certificateFieldText(fieldId, certificate.fields[fieldId]);
    for (const anchor of spec.at) draw(anchor, text);
  }

  certificate.arrears.slice(0, CERTIFICATE_ARREARS.rows.length).forEach((row, index) => {
    const y = CERTIFICATE_ARREARS.rows[index];
    if (y === undefined) return;
    for (const [column, x] of Object.entries(CERTIFICATE_ARREARS.columns)) {
      if (!isCertificateArrearsColumn(column)) continue;
      const value = row[column];
      draw(
        { page: 0, x, y, align: "right" },
        column === "ejercicio" ? certificateYearText(value) : formatCertificateAmount(value),
      );
    }
  });

  certificate.refunds.slice(0, CERTIFICATE_REFUNDS.rows.length).forEach((row, index) => {
    const cells = CERTIFICATE_REFUNDS.rows[index];
    if (!cells) return;
    for (const [column, [x, y]] of Object.entries(cells)) {
      if (!isCertificateRefundColumn(column)) continue;
      const value = row[column];
      draw(
        { page: 0, x, y, align: "right" },
        column === "ejercicio" ? certificateYearText(value) : formatCertificateAmount(value),
      );
    }
  });

  const issue = certificateIssueParts(certificate.issuedAt);
  draw(CERTIFICATE_ISSUE.day, issue.day);
  draw(CERTIFICATE_ISSUE.month, issue.month);
  draw(CERTIFICATE_ISSUE.year, issue.year);

  if (certificate.signer)
    draw(CERTIFICATE_SIGNER.name, certificate.signer, regular, CERTIFICATE_FONT_SIZE.signer);
  pages[1]?.drawImage(signature, CERTIFICATE_SIGNER.image);
}
