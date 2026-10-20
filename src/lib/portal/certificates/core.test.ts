import { describe, expect, it } from "vitest";

import {
  certificateFieldText,
  certificateFileName,
  certificateIssueParts,
  certificateYears,
  formatCertificateAmount,
} from "./core";

describe("formato del certificado de retenciones", () => {
  it("imprime los importes como el original y deja en blanco el cero", () => {
    expect(formatCertificateAmount(120010.76)).toBe("120010,76");
    expect(formatCertificateAmount(528.7)).toBe("528,70");
    expect(formatCertificateAmount(-12.5)).toBe("-12,50");
    expect(formatCertificateAmount(0)).toBe("");
    expect(formatCertificateAmount(null)).toBe("");
    expect(formatCertificateAmount(Number.NaN)).toBe("");
  });

  it("formatea cada casilla según su tipo", () => {
    expect(certificateFieldText("ejercicio", 2025)).toBe("2025");
    expect(certificateFieldText("perceptorNombre", "  Ejemplo, Persona ")).toBe("Ejemplo, Persona");
    expect(certificateFieldText("gastosDeducibles", 3817.68)).toBe("3817,68");
    expect(certificateFieldText("gastosDeducibles", "3817.68")).toBe("");
  });

  it("expresa la fecha de expedición con el mes en letra", () => {
    expect(certificateIssueParts("2026-10-20")).toEqual({
      day: "20",
      month: "Octubre",
      year: "2026",
    });
    expect(certificateIssueParts("2026-01-05")).toEqual({ day: "5", month: "Enero", year: "2026" });
    expect(certificateIssueParts("")).toEqual({ day: "", month: "", year: "" });
  });

  it("nombra el fichero como el informe original", () => {
    expect(certificateFileName(2025)).toBe("CYC_RP_CERT_HAB_2025.pdf");
  });
});

describe("ejercicios disponibles", () => {
  const today = new Date(2026, 9, 20);

  it("cubre los años de alta desde 2015 hasta el último ejercicio cerrado", () => {
    const years = certificateYears(
      [
        { start: new Date("2012-03-01T00:00:00Z"), end: new Date("2017-06-30T00:00:00Z") },
        { start: new Date("2021-02-01T00:00:00Z"), end: new Date("4000-01-01T00:00:00Z") },
      ],
      [],
      today,
    );
    expect(years.map((entry) => entry.year)).toEqual([
      2025, 2024, 2023, 2022, 2021, 2017, 2016, 2015,
    ]);
  });

  it("añade los certificados guardados y los prefiere al generado del mismo año", () => {
    const years = certificateYears(
      [{ start: "2024-01-01", end: null }],
      [
        { year: 2013, label: "Certificado 2013", href: "/a" },
        { year: 2024, label: "Certificado 2024", href: "/b" },
      ],
      today,
    );
    expect(years).toEqual([
      { year: 2025, document: null },
      { year: 2024, document: { label: "Certificado 2024", href: "/b" } },
      { year: 2013, document: { label: "Certificado 2013", href: "/a" } },
    ]);
  });

  it("incluye los ejercicios declarados en el 190", () => {
    expect(certificateYears([], [], today, [2019]).map((entry) => entry.year)).toEqual([2019]);
  });

  it("ignora periodos sin fecha de alta válida", () => {
    expect(certificateYears([{ start: null, end: null }], [], today)).toEqual([]);
  });
});
