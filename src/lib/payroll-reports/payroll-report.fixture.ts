import type { PayrollReportRunDetail } from "@/types/payroll-report";

/** Cabeceras reducidas de la plantilla de nómina; valores inventados. */
export const FIXTURE_HEADERS = [
  "Id Empleado",
  "Periodo",
  "Apellidos y Nombres",
  "NIF",
  "Porcentaje I.R.P.F.",
  "Porcentaje Jornada",
  "Id Centro Trabajo",
  "Fecha de pago",
  "Fin Previsto Contrato",
  "Salario Base",
  "Líquido",
  "Porcentaje I.R.P.F.",
];

export const FIXTURE_ROWS = [
  [
    "'9001",
    "1",
    "PRUEBA UNO, Ana",
    "'00000000T",
    "10.5",
    "1",
    "'C1",
    "2026-09-25 00:00:00",
    "",
    "1000.0000",
    "900.0000",
    "",
  ],
  [
    "'9002",
    "1",
    "PRUEBA DOS, Luis",
    "'00000001R",
    "12",
    "1",
    "'C1",
    "2026-09-25 00:00:00",
    "",
    "1200.5000",
    "1000.2500",
    "12",
  ],
  [
    "'9002",
    "1",
    "PRUEBA DOS, Luis",
    "'00000001R",
    "12",
    "0.5",
    "'C1",
    "2026-09-25 00:00:00",
    "",
    "300.0000",
    "250.0000",
    "",
  ],
  [
    "'9003",
    "1",
    "PRUEBA TRES, Eva",
    "'00000002W",
    "8",
    "1",
    "'C0",
    "2026-09-25 00:00:00",
    "",
    "800.0000",
    "700.0000",
    "8",
  ],
];

const encode = (text: string): Uint8Array =>
  Uint8Array.from(
    [..."~BLOBD"]
      .map((char) => char.charCodeAt(0))
      .concat(
        [0, 0],
        [...text].map((char) => char.charCodeAt(0)),
      ),
  );

/** BLOB como lo guarda Meta4: cabecera `~BLOBD\0\0` y texto con tabuladores y CRLF. */
export const fixtureBlob = (): Uint8Array =>
  encode(`${[FIXTURE_HEADERS, ...FIXTURE_ROWS].map((row) => row.join("\t")).join("\r\n")}\r\n`);

export const sampleRunDetail: PayrollReportRunDetail = {
  run: {
    reportId: "01",
    runAt: "2026-10-06T10:49:34.000Z",
    accruedOn: "2026-09-25",
    payFrequency: "004",
    reportName: "Informe Normal",
    payKind: "Normal",
    hasData: true,
  },
  comment: null,
  template: "plantilla_infconnom.xls",
  reportType: "N",
  payName: "Septiembre",
  payTypeName: "Paga Regular",
  payFrequencyName: "Mensual",
  payStart: "2026-09-01",
  payEnd: "2026-09-30",
  headers: FIXTURE_HEADERS,
  rows: FIXTURE_ROWS,
};
