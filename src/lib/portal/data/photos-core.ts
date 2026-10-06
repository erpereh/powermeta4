import { stripMeta4Blob } from "./documents";

export const MAX_PHOTO_BYTES = 5 * 1024 * 1024;
export type PortalPhoto = { readonly bytes: Buffer; readonly mime: "image/png" | "image/jpeg" };
export type PhotoColumn = {
  TABLE_SCHEMA: string;
  TABLE_NAME: string;
  COLUMN_NAME: string;
  DATA_TYPE: string;
};
export type PhotoStorage = "STD_PERSON" | "STD_PERSON1";

/** Familia física del objeto original: nunca se busca una foto en tablas ajenas. */
export const resolvePhotoStorage = (columns: readonly PhotoColumn[]): PhotoStorage | null => {
  const has = (table: string, field: string) =>
    columns.some(
      (column) =>
        column.TABLE_SCHEMA === "dbo" &&
        column.TABLE_NAME === table &&
        column.COLUMN_NAME === field,
    );
  const keys = (table: string) => has(table, "ID_ORGANIZATION") && has(table, "STD_ID_PERSON");
  if (!keys("STD_PERSON")) return null;
  const candidates = (["STD_PERSON", "STD_PERSON1"] as const).filter(
    (table) =>
      keys(table) &&
      columns.some(
        (column) =>
          column.TABLE_SCHEMA === "dbo" &&
          column.TABLE_NAME === table &&
          column.COLUMN_NAME === "SCO_BLOB_PHOTO" &&
          ["image", "varbinary", "binary"].includes(column.DATA_TYPE),
      ),
  );
  return candidates.length === 1 ? candidates[0] : null;
};

const png = (bytes: Buffer): boolean => {
  if (
    bytes.length < 57 ||
    !bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  )
    return false;
  let offset = 8;
  let data = false;
  while (offset + 12 <= bytes.length) {
    const length = bytes.readUInt32BE(offset);
    const end = offset + length + 12;
    if (end > bytes.length) return false;
    const type = bytes.toString("ascii", offset + 4, offset + 8);
    let crc = 0xffffffff;
    for (const byte of bytes.subarray(offset + 4, end - 4)) {
      crc ^= byte;
      for (let bit = 0; bit < 8; bit++) crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
    if ((crc ^ 0xffffffff) >>> 0 !== bytes.readUInt32BE(end - 4)) return false;
    if (
      offset === 8 &&
      (type !== "IHDR" ||
        length !== 13 ||
        bytes.readUInt32BE(offset + 8) === 0 ||
        bytes.readUInt32BE(offset + 12) === 0)
    )
      return false;
    if (type === "IDAT" && length > 0) data = true;
    if (type === "IEND") return data && length === 0 && end === bytes.length;
    offset = end;
  }
  return false;
};

const jpeg = (bytes: Buffer): boolean => {
  if (
    bytes.length < 20 ||
    bytes.readUInt16BE(0) !== 0xffd8 ||
    bytes.readUInt16BE(bytes.length - 2) !== 0xffd9
  )
    return false;
  let offset = 2;
  let frame = false;
  while (offset + 4 < bytes.length) {
    if (bytes[offset] !== 0xff) return false;
    while (bytes[offset] === 0xff) offset++;
    const marker = bytes[offset++];
    if (marker === undefined || offset + 2 > bytes.length) return false;
    const length = bytes.readUInt16BE(offset);
    if (length < 2 || offset + length > bytes.length) return false;
    if ([0xc0, 0xc1, 0xc2].includes(marker)) {
      if (
        length < 8 ||
        bytes.readUInt16BE(offset + 3) === 0 ||
        bytes.readUInt16BE(offset + 5) === 0
      )
        return false;
      frame = true;
    }
    if (marker === 0xda) return frame && offset + length < bytes.length - 2;
    offset += length;
  }
  return false;
};

/** MIME por contenido y estructura; nunca por la extensión del encabezado Meta4. */
export const decodePortalPhoto = (blob: Buffer | null): PortalPhoto | null => {
  if (!blob || blob.length === 0 || blob.length > MAX_PHOTO_BYTES) return null;
  const { bytes } = stripMeta4Blob(blob);
  if (png(bytes)) return { bytes, mime: "image/png" };
  if (jpeg(bytes)) return { bytes, mime: "image/jpeg" };
  return null;
};
