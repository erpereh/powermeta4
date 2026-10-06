import { beforeEach, describe, expect, it, vi } from "vitest";
import { portalPhotoJpeg, portalPhotoPng } from "@/test/portal-photo-fixtures";
import { assertReadOnlySql } from "../peoplenet/query";
import {
  decodePortalPhoto,
  MAX_PHOTO_BYTES,
  resolvePhotoStorage,
  type PhotoColumn,
} from "./photos-core";
import { PortalDataAmbiguousError } from "./errors";

const mocks = vi.hoisted(() => ({ pool: vi.fn(), query: vi.fn(), input: vi.fn() }));
vi.mock("@/lib/peoplenet/client", () => ({ getPeopleNetPool: mocks.pool }));
import { getPortalPhoto, PortalPhotoContractError } from "./photos";

const columns = (table = "STD_PERSON"): PhotoColumn[] => [
  {
    TABLE_SCHEMA: "dbo",
    TABLE_NAME: "STD_PERSON",
    COLUMN_NAME: "ID_ORGANIZATION",
    DATA_TYPE: "varchar",
  },
  {
    TABLE_SCHEMA: "dbo",
    TABLE_NAME: "STD_PERSON",
    COLUMN_NAME: "STD_ID_PERSON",
    DATA_TYPE: "varchar",
  },
  ...["ID_ORGANIZATION", "STD_ID_PERSON", "SCO_BLOB_PHOTO"].map((column) => ({
    TABLE_SCHEMA: "dbo",
    TABLE_NAME: table,
    COLUMN_NAME: column,
    DATA_TYPE: column === "SCO_BLOB_PHOTO" ? "image" : "varchar",
  })),
];
beforeEach(() => {
  vi.resetAllMocks();
  const request = { input: mocks.input, query: mocks.query };
  mocks.input.mockReturnValue(request);
  mocks.pool.mockResolvedValue({ request: () => request });
});

describe("fotografías del portal", () => {
  it("reconoce PNG normal y BLOB Meta4 por contenido, sin confiar en la extensión", () => {
    expect(decodePortalPhoto(portalPhotoPng)).toEqual({ bytes: portalPhotoPng, mime: "image/png" });
    expect(
      decodePortalPhoto(Buffer.concat([Buffer.from("~BLOBI\0exe\0"), portalPhotoPng])),
    ).toEqual({ bytes: portalPhotoPng, mime: "image/png" });
  });
  it("reconoce JPEG normal y con encabezado, y rechaza un JPEG truncado", () => {
    expect(decodePortalPhoto(portalPhotoJpeg)).toEqual({
      bytes: portalPhotoJpeg,
      mime: "image/jpeg",
    });
    expect(
      decodePortalPhoto(Buffer.concat([Buffer.from("~BLOBI\0png\0"), portalPhotoJpeg])),
    ).toEqual({ bytes: portalPhotoJpeg, mime: "image/jpeg" });
    expect(decodePortalPhoto(portalPhotoJpeg.subarray(0, portalPhotoJpeg.length - 10))).toBeNull();
  });
  it("rechaza ausencias, truncamiento, corrupción, cabeceras inválidas, SVG y archivos excesivos", () => {
    const corrupt = Buffer.from(portalPhotoPng);
    corrupt[45] ^= 1;
    for (const blob of [
      null,
      Buffer.alloc(0),
      corrupt,
      portalPhotoPng.subarray(0, 40),
      Buffer.from("~BLOBI sin separadores"),
      Buffer.from("<svg onload='x'></svg>"),
      Buffer.from("GIF89a"),
      Buffer.from([0xff, 0xd8, 0xff, 0xd9]),
      Buffer.alloc(MAX_PHOTO_BYTES + 1),
    ])
      expect(decodePortalPhoto(blob)).toBeNull();
  });
  it("exige una única ubicación binaria y las claves de sociedad y persona", () => {
    expect(resolvePhotoStorage(columns())).toBe("STD_PERSON");
    expect(resolvePhotoStorage(columns("STD_PERSON1"))).toBe("STD_PERSON1");
    expect(resolvePhotoStorage([...columns(), ...columns("STD_PERSON1")])).toBeNull();
    expect(
      resolvePhotoStorage(columns().filter((column) => column.COLUMN_NAME !== "STD_ID_PERSON")),
    ).toBeNull();
    expect(
      resolvePhotoStorage(columns().map((column) => ({ ...column, TABLE_SCHEMA: "otra" }))),
    ).toBeNull();
    expect(
      resolvePhotoStorage(columns().map((column) => ({ ...column, DATA_TYPE: "varchar" }))),
    ).toBeNull();
  });
  it.each(["STD_PERSON", "STD_PERSON1"])(
    "lee %s solo después de validar pertenencia y esquema",
    async (table) => {
      mocks.query
        .mockResolvedValueOnce({ recordset: [{ ID_EMPLEADO: "002" }] })
        .mockResolvedValueOnce({ recordset: columns(table) })
        .mockResolvedValueOnce({ recordset: [{ PHOTO: portalPhotoPng }] });
      expect(await getPortalPhoto("CYC", "002")).toMatchObject({ mime: "image/png" });
      expect(
        mocks.input.mock.calls.some(
          ([name, , value]) => name === "organization" && value === "CYC",
        ),
      ).toBe(true);
      expect(
        mocks.input.mock.calls.some(([name, , value]) => name === "employeeId" && value === "002"),
      ).toBe(true);
      for (const [statement] of mocks.query.mock.calls)
        expect(() => assertReadOnlySql(statement)).not.toThrow();
      expect(mocks.query.mock.calls[2][0]).toContain("P.ID_ORGANIZATION = @organization");
      if (table === "STD_PERSON1")
        expect(mocks.query.mock.calls[2][0]).toContain("B.STD_ID_PERSON = P.STD_ID_PERSON");
    },
  );
  it("no lee fotos fuera de sociedad ni ante un contrato pendiente o ambiguo", async () => {
    mocks.query.mockResolvedValueOnce({ recordset: [] });
    expect(await getPortalPhoto("CYC", "002")).toBeNull();
    expect(mocks.query).toHaveBeenCalledTimes(1);
    mocks.query
      .mockResolvedValueOnce({ recordset: [{ ID_EMPLEADO: "002" }] })
      .mockResolvedValueOnce({ recordset: [] });
    await expect(getPortalPhoto("CYC", "002")).rejects.toBeInstanceOf(PortalPhotoContractError);
    mocks.query
      .mockResolvedValueOnce({ recordset: [{ ID_EMPLEADO: "002" }] })
      .mockResolvedValueOnce({ recordset: columns() })
      .mockResolvedValueOnce({ recordset: [{ PHOTO: portalPhotoPng }, { PHOTO: portalPhotoPng }] });
    await expect(getPortalPhoto("CYC", "002")).rejects.toBeInstanceOf(PortalDataAmbiguousError);
    const count = mocks.query.mock.calls.length;
    expect(await getPortalPhoto("CYC", "../2")).toBeNull();
    expect(mocks.query).toHaveBeenCalledTimes(count);
  });
});
