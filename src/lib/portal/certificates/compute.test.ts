import { describe, expect, it } from "vitest";

import {
  buildWithholdingCertificates,
  certificateSignerText,
  irregularKey,
  model190ExecutionFromRow,
  model190RecordFromRow,
  selectCertificateExecution,
  type CertificateInputs,
  type Model190Execution,
  type Model190Record,
} from "./compute";

const today = new Date(2026, 9, 20);

const record = (overrides: Partial<Model190Record>): Model190Record => ({
  year: "2025",
  legalEntity: "ACYC_ES",
  irpfType: "NAC",
  execution: "CERT-1",
  recordType: "N",
  nif: "00000000T",
  key: "A",
  subkey: "00",
  accrualYear: "0000",
  gross: 0,
  withholding: 0,
  valuation: 0,
  paidOnAccount: 0,
  passedOnAccount: 0,
  expenses: 0,
  reduction: 0,
  grossIl: 0,
  withholdingIl: 0,
  valuationIl: 0,
  paidOnAccountIl: 0,
  passedOnAccountIl: 0,
  ...overrides,
});

const execution = (overrides: Partial<Model190Execution>): Model190Execution => ({
  year: "2025",
  legalEntity: "ACYC_ES",
  irpfType: "NAC",
  execution: "EXE-1",
  origin: null,
  certificateExecution: "CERT-1",
  declarationState: 1,
  lastSent: true,
  declarationType: "N",
  testMode: false,
  launchedAt: 0,
  ...overrides,
});

/** Registro de la declaración presentada: la que da acceso a la ejecución del certificado. */
const declaration = record({ execution: "EXE-1", gross: 99 });

/** Estructura del certificado de referencia, con importes ficticios. */
const reference = [
  declaration,
  record({
    gross: 120010.76,
    withholding: 40971.79,
    valuation: 1546.07,
    paidOnAccount: 528.77,
    passedOnAccount: 528.77,
    expenses: 3817.68,
  }),
  record({ accrualYear: "2024", gross: 1178.88, withholding: 401.52 }),
];

const inputs = (overrides: Partial<CertificateInputs> = {}): CertificateInputs => ({
  year: 2025,
  perceptorName: "Ejemplo Muestra, Persona",
  executions: [execution({})],
  legalEntities: new Map([
    [
      "ACYC_ES",
      {
        name: "Empresa de Ejemplo",
        nif: "A00000000",
        signer: "Firmante de Ejemplo",
        signerRole: null,
        signerNif: null,
        place: "MADRID",
      },
    ],
  ]),
  irregularKeys: new Set(),
  today,
  ...overrides,
  records: overrides.records ? [declaration, ...overrides.records] : reference,
});

describe("selección de la ejecución del 190", () => {
  it("usa la ejecución de certificado de la declaración presentada", () => {
    expect(
      selectCertificateExecution([execution({})], reference, "2025", {
        legalEntity: "ACYC_ES",
        irpfType: "NAC",
      }),
    ).toBe("CERT-1");
  });

  it("toma la mayor ejecución de certificado entre la normal y su complementaria", () => {
    const executions = [
      execution({}),
      execution({ execution: "EXE-2", origin: "EXE-1", certificateExecution: "CERT-2" }),
    ];
    const records = [...reference, record({ execution: "EXE-2", recordType: "C" })];
    expect(
      selectCertificateExecution(executions, records, "2025", {
        legalEntity: "ACYC_ES",
        irpfType: "NAC",
      }),
    ).toBe("CERT-2");
  });

  it("antes de 2024 usa el último 190 enviado o su última complementaria", () => {
    const executions = [
      execution({ year: "2020", certificateExecution: null, declarationState: null }),
      execution({
        year: "2020",
        execution: "COMP-1",
        origin: "EXE-1",
        certificateExecution: null,
        declarationState: null,
        lastSent: false,
        declarationType: "C",
        launchedAt: 1,
      }),
      execution({
        year: "2020",
        execution: "COMP-2",
        origin: "EXE-1",
        certificateExecution: null,
        declarationState: null,
        lastSent: false,
        declarationType: "C",
        launchedAt: 2,
      }),
    ];
    expect(
      selectCertificateExecution(executions, [], "2020", {
        legalEntity: "ACYC_ES",
        irpfType: "NAC",
      }),
    ).toBe("COMP-2");
  });

  it("no genera nada sin una declaración presentada", () => {
    expect(
      selectCertificateExecution(
        [execution({ declarationState: 0, lastSent: false })],
        reference,
        "2025",
        { legalEntity: "ACYC_ES", irpfType: "NAC" },
      ),
    ).toBeNull();
  });
});

describe("casillas del certificado (SSP_CALC_EMPLEADOS)", () => {
  it("reproduce el certificado de referencia con sus atrasos", () => {
    const [certificate, extra] = buildWithholdingCertificates(inputs());
    expect(extra).toBeUndefined();
    expect(certificate?.fields).toMatchObject({
      ejercicio: 2025,
      perceptorNif: "00000000T",
      perceptorNombre: "Ejemplo Muestra, Persona",
      pagadorNif: "A00000000",
      pagadorNombre: "Empresa de Ejemplo",
      lugar: "MADRID",
      trabajoDinerariasIntegro: 120010.76,
      trabajoDinerariasRetenciones: 40971.79,
      trabajoEspecieValoracion: 1546.07,
      trabajoEspecieIngresosEfectuados: 528.77,
      trabajoEspecieIngresosRepercutidos: 528.77,
      gastosDeducibles: 3817.68,
    });
    expect(certificate?.arrears[0]).toMatchObject({
      ejercicio: 2024,
      integro: 1178.88,
      retenciones: 401.52,
    });
    expect(certificate?.arrears[1]?.ejercicio).toBeNull();
    expect(certificate?.signer).toBe("Firmante de Ejemplo ");
    expect(certificate?.issuedAt).toBe("2026-10-20");
  });

  it("suma especie, ingresos a cuenta e IL de los atrasos como el original", () => {
    const [certificate] = buildWithholdingCertificates(
      inputs({
        records: [
          record({ gross: 10 }),
          record({
            accrualYear: "2023",
            gross: 100,
            valuation: 10,
            paidOnAccount: 5,
            passedOnAccount: 2,
            grossIl: 3,
            withholding: 20,
            withholdingIl: 1,
            reduction: 4,
            expenses: 6,
          }),
        ],
      }),
    );
    expect(certificate?.arrears[0]).toMatchObject({
      ejercicio: 2023,
      integro: 116,
      retenciones: 23,
      reducciones: 4,
      gastos: 6,
    });
  });

  it("lleva los importes negativos de ejercicios anteriores a reintegros", () => {
    const [certificate] = buildWithholdingCertificates(
      inputs({
        records: [
          record({ gross: 10 }),
          record({ accrualYear: "2022", gross: -50, withholding: 8 }),
        ],
      }),
    );
    expect(certificate?.refunds[0]).toEqual({ ejercicio: 2022, integro: -50, reducciones: 8 });
    expect(certificate?.arrears[0]?.ejercicio).toBeNull();
  });

  it("pasa a otro certificado a partir del quinto año de atrasos", () => {
    const years = ["2024", "2023", "2022", "2021", "2020"];
    const certificates = buildWithholdingCertificates(
      inputs({
        records: [
          record({ gross: 10 }),
          ...years.map((accrualYear) => record({ accrualYear, gross: 1 })),
        ],
      }),
    );
    expect(certificates).toHaveLength(2);
    expect(certificates[0]?.arrears.map((row) => row.ejercicio)).toEqual([2024, 2023, 2022, 2021]);
    expect(certificates[1]?.arrears[0]?.ejercicio).toBe(2020);
  });

  it("separa dietas exceptuadas, rentas exentas y reducciones por irregularidad", () => {
    const [certificate] = buildWithholdingCertificates(
      inputs({
        records: [
          record({ gross: 10, reduction: 7, subkey: "01" }),
          record({ key: "L", subkey: "01", gross: 30 }),
          record({ key: "L", subkey: "05", gross: 40, expenses: 2 }),
        ],
        irregularKeys: new Set([irregularKey("NAC", "A", "01")]),
      }),
    );
    expect(certificate?.fields).toMatchObject({
      dietasExceptuadas: 30,
      rentasExentas: 40,
      gastosDeducibles: 2,
      otrasReduccionesIrregularidad: 7,
    });
    expect(certificate?.fields.reduccionesArt18).toBeUndefined();
  });

  it("rellena los bloques de la página 2 con su ejercicio", () => {
    const [certificate] = buildWithholdingCertificates(
      inputs({
        records: [
          record({ gross: 10 }),
          record({ key: "G", subkey: "01", gross: 500, withholding: 75 }),
          record({ key: "H", subkey: "03", gross: 60 }),
          record({ key: "J", gross: 20, withholding: 5, valuation: 3, paidOnAccount: 1 }),
          record({ key: "K", subkey: "02", gross: 9, withholding: 1 }),
        ],
      }),
    );
    expect(certificate?.fields).toMatchObject({
      actividadesEjercicio: 2025,
      profesionalesDinerariasIntegro: 500,
      profesionalesDinerariasRetenciones: 75,
      forestalesDinerariasIntegro: 60,
      imagenEjercicio: 2025,
      imagenDinerarias: 20,
      imagenEspecie: 3,
      imagenIngresosACuenta: 1,
      montesEjercicio: 2025,
      montesDinerariasIntegro: 9,
      montesDinerariasRetenciones: 1,
    });
  });

  it("genera un certificado por clave de rendimientos del trabajo", () => {
    const certificates = buildWithholdingCertificates(
      inputs({ records: [record({ gross: 10 }), record({ key: "B", subkey: "03", gross: 5 })] }),
    );
    expect(certificates.map((entry) => entry.fields.trabajoDinerariasIntegro)).toEqual([10, 5]);
  });

  it("no genera certificados de un ejercicio sin registros", () => {
    expect(buildWithholdingCertificates(inputs({ year: 2019 }))).toEqual([]);
  });
});

describe("firmante y filas de PeopleNet", () => {
  it("compone la línea del firmante como el diseño del informe", () => {
    expect(certificateSignerText(null, null, null)).toBe(" ");
    expect(certificateSignerText("Ana", null, null)).toBe("Ana ");
    expect(certificateSignerText("Ana", "Directora", null)).toBe("Ana, en calidad de Directora ");
    expect(certificateSignerText("Ana", "Directora", "1X")).toBe(
      "Ana, en calidad de Directora, N.I.F. 1X",
    );
  });

  it("convierte las filas de las consultas", () => {
    expect(
      model190RecordFromRow({
        SSP_EJERCICIO: "2025 ",
        SSP_CLAVE_PERCEP: "A",
        SSP_PERCEP_INTEGRA: "12.5",
        SSP_RETEN_PRACTIC: null,
      }),
    ).toMatchObject({ year: "2025", key: "A", gross: 12.5, withholding: 0 });
    expect(
      model190ExecutionFromRow({
        SSP_ID_EXE: "E",
        SSP_ID_EXE_190_CERT: null,
        SSP_ID_ESTADO_DECLARACION: 1,
        SSP_CHK_ULT_ENVIADO: 1,
      }),
    ).toMatchObject({
      execution: "E",
      certificateExecution: null,
      declarationState: 1,
      lastSent: true,
    });
  });
});
