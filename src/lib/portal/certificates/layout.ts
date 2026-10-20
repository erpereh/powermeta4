/**
 * Posiciones del informe `CYC_RP_CERT_HAB_<año>` medidas sobre el PDF que genera
 * el original (A4, puntos PDF con origen abajo a la izquierda). Los importes se
 * alinean a la derecha de su casilla y los textos y ejercicios a la izquierda,
 * igual que el motor de informes de Meta4. La plantilla es la misma para todos
 * los ejercicios.
 */

export const CERTIFICATE_PAGE = { width: 595, height: 842 } as const;

/** Imagen del modelo en blanco de cada página (`assets/cert-hab-p*.jpg`). */
export const CERTIFICATE_BACKGROUND = {
  x: 32.173228,
  y: 53.472441,
  width: 538.582677,
  height: 765.354331,
} as const;

export const CERTIFICATE_TITLE =
  "Certificado de retenciones e ingresos a cuenta del Impuesto sobre la Renta de las Personas Físicas";

/** Banda blanca del título y su texto (Helvetica-Bold 11) en cada página. */
export const CERTIFICATE_TITLE_BAND = [
  {
    x0: 38.153543,
    y0: 800.858268,
    x1: 553.405512,
    y1: 813.350394,
    textX: 40.279528,
    textY: 803.350394,
  },
  {
    x0: 40.42126,
    y0: 800.858268,
    x1: 552.669291,
    y1: 812.582677,
    textX: 41.043307,
    textY: 802.582677,
  },
] as const;

export const CERTIFICATE_FONT_SIZE = { field: 8, signer: 6, title: 11 } as const;

export type CertificatePageIndex = 0 | 1;

export type CertificateAnchor = {
  readonly page: CertificatePageIndex;
  /** Inicio del texto (`left`) o borde derecho de la casilla (`right`). */
  readonly x: number;
  readonly y: number;
  readonly align: "left" | "right";
};

export type CertificateFieldKind = "text" | "year" | "amount";

type FieldSpec = { readonly kind: CertificateFieldKind; readonly at: readonly CertificateAnchor[] };

const left = (page: CertificatePageIndex, x: number, y: number): CertificateAnchor => ({
  page,
  x,
  y,
  align: "left",
});
const right = (page: CertificatePageIndex, x: number, y: number): CertificateAnchor => ({
  page,
  x,
  y,
  align: "right",
});
const text = (...at: CertificateAnchor[]): FieldSpec => ({ kind: "text", at });
const year = (anchor: CertificateAnchor): FieldSpec => ({ kind: "year", at: [anchor] });
const amount = (anchor: CertificateAnchor): FieldSpec => ({ kind: "amount", at: [anchor] });

// Bordes derechos de las columnas de importes.
const P1 = { valuation: 376.047, amount: 467.606, withholding: 559.338, single: 559.11 } as const;
const P2 = {
  valuation: 290.472,
  amount: 382.822,
  withholding: 474.326,
  reduction: 562.114,
  prizeValuation: 377.606,
  prizeAmount: 471.492,
} as const;

/** Casillas de una sola posición (o repetidas en ambas páginas, como el perceptor). */
export const CERTIFICATE_FIELDS = {
  perceptorNif: text(left(0, 41.893701, 761.507874), left(1, 44.728346, 762.102362)),
  perceptorNombre: text(left(0, 149.15748, 761.507874), left(1, 151.255906, 762.102362)),
  pagadorNif: text(left(0, 41.893701, 720.259843), left(1, 44.728346, 720.259843)),
  pagadorNombre: text(left(0, 148.42126, 720.259843), left(1, 151.255906, 720.259843)),
  ejercicio: year(left(0, 536.566929, 692.681102)),

  // Rendimientos del trabajo: retribuciones no derivadas de incapacidad laboral.
  trabajoDinerariasIntegro: amount(right(0, P1.amount, 640.181102)),
  trabajoDinerariasRetenciones: amount(right(0, P1.withholding, 640.181102)),
  trabajoEspecieValoracion: amount(right(0, P1.valuation, 617.562992)),
  trabajoEspecieIngresosEfectuados: amount(right(0, P1.amount, 617.562992)),
  trabajoEspecieIngresosRepercutidos: amount(right(0, P1.withholding, 617.562992)),
  // Retribuciones derivadas de incapacidad laboral.
  incapacidadDinerariasIntegro: amount(right(0, P1.amount, 590.322835)),
  incapacidadDinerariasRetenciones: amount(right(0, P1.withholding, 590.322835)),
  incapacidadEspecieValoracion: amount(right(0, P1.valuation, 564.641732)),
  incapacidadEspecieIngresosEfectuados: amount(right(0, P1.amount, 564.641732)),
  incapacidadEspecieIngresosRepercutidos: amount(right(0, P1.withholding, 564.641732)),
  contribucionesPrevision: amount(right(0, P1.single, 539.807087)),
  contribucionesDependencia: amount(right(0, P1.single, 516.874016)),
  reduccionesArt18: amount(right(0, P1.single, 494.055118)),
  gastosDeducibles: amount(right(0, P1.single, 471.80315)),
  otrasReduccionesIrregularidad: amount(right(0, P1.single, 446.377953)),
  dietasExceptuadas: amount(right(0, P1.single, 180.11811)),
  rentasExentas: amount(right(0, P1.single, 167.787402)),

  // Ganancias patrimoniales por aprovechamientos forestales en montes públicos.
  montesEjercicio: year(left(0, 536.566929, 134.76378)),
  montesDinerariasIntegro: amount(right(0, P1.amount, 88.559055)),
  montesDinerariasRetenciones: amount(right(0, P1.single, 88.559055)),
  montesEspecieValoracion: amount(right(0, 375.370669, 63.897638)),
  montesEspecieIngresosEfectuados: amount(right(0, P1.amount, 63.897638)),
  montesEspecieIngresosRepercutidos: amount(right(0, P1.single, 63.897638)),

  // Rendimientos de actividades económicas.
  actividadesEjercicio: year(left(1, 536.566929, 697.5)),
  // Profesionales, agrícolas o ganaderas, forestales, estimación objetiva y art. 75.2.b).
  profesionalesDinerariasIntegro: amount(right(1, P2.amount, 652.003937)),
  profesionalesDinerariasRetenciones: amount(right(1, P2.withholding, 652.003937)),
  profesionalesReduccionesIrregularidad: amount(right(1, P2.reduction, 642.082677)),
  profesionalesEspecieValoracion: amount(right(1, P2.valuation, 632.586614)),
  profesionalesEspecieIngresosEfectuados: amount(right(1, P2.amount, 632.586614)),
  profesionalesEspecieIngresosRepercutidos: amount(right(1, P2.withholding, 632.586614)),
  agricolasDinerariasIntegro: amount(right(1, P2.amount, 609.425197)),
  agricolasDinerariasRetenciones: amount(right(1, P2.withholding, 609.425197)),
  agricolasReduccionesIrregularidad: amount(right(1, P2.reduction, 599.42126)),
  agricolasEspecieValoracion: amount(right(1, P2.valuation, 589.129921)),
  agricolasEspecieIngresosEfectuados: amount(right(1, P2.amount, 589.129921)),
  agricolasEspecieIngresosRepercutidos: amount(right(1, P2.withholding, 589.129921)),
  forestalesDinerariasIntegro: amount(right(1, P2.amount, 563.590551)),
  forestalesDinerariasRetenciones: amount(right(1, P2.withholding, 563.590551)),
  forestalesReduccionesIrregularidad: amount(right(1, P2.reduction, 553.413386)),
  forestalesEspecieValoracion: amount(right(1, P2.valuation, 543.03937)),
  forestalesEspecieIngresosEfectuados: amount(right(1, P2.amount, 543.03937)),
  forestalesEspecieIngresosRepercutidos: amount(right(1, P2.withholding, 543.03937)),
  estimacionObjetivaDinerariasIntegro: amount(right(1, P2.amount, 511.094488)),
  estimacionObjetivaDinerariasRetenciones: amount(right(1, P2.withholding, 510.326772)),
  estimacionObjetivaReduccionesIrregularidad: amount(right(1, P2.reduction, 501.822835)),
  estimacionObjetivaEspecieValoracion: amount(right(1, P2.valuation, 491.279528)),
  estimacionObjetivaEspecieIngresosEfectuados: amount(right(1, P2.amount, 491.279528)),
  estimacionObjetivaEspecieIngresosRepercutidos: amount(right(1, P2.withholding, 491.279528)),
  articulo75DinerariasIntegro: amount(right(1, P2.amount, 457.574803)),
  articulo75DinerariasRetenciones: amount(right(1, P2.withholding, 458.338583)),
  articulo75ReduccionesIrregularidad: amount(right(1, P2.reduction, 446.149606)),
  articulo75EspecieValoracion: amount(right(1, P2.valuation, 438.385827)),
  articulo75EspecieIngresosEfectuados: amount(right(1, P2.amount, 437.645669)),
  articulo75EspecieIngresosRepercutidos: amount(right(1, P2.withholding, 437.645669)),

  // Premios por la participación en juegos, concursos, rifas o combinaciones aleatorias.
  premiosEjercicio: year(left(1, 536.566929, 411.88189)),
  premiosJuegoDinerariasIntegro: amount(right(1, P2.prizeAmount, 345.322835)),
  premiosJuegoDinerariasRetenciones: amount(right(1, P2.reduction, 346.173228)),
  premiosJuegoEspecieValoracion: amount(right(1, P2.prizeValuation, 325.027559)),
  premiosJuegoEspecieIngresosEfectuados: amount(right(1, P2.prizeAmount, 325.027559)),
  premiosJuegoEspecieIngresosRepercutidos: amount(right(1, P2.reduction, 325.027559)),
  premiosConcursosDinerariasIntegro: amount(right(1, P2.prizeAmount, 260.53937)),
  premiosConcursosDinerariasRetenciones: amount(right(1, P2.reduction, 260.53937)),
  premiosConcursosEspecieValoracion: amount(right(1, P2.prizeValuation, 240.185039)),
  premiosConcursosEspecieIngresosEfectuados: amount(right(1, P2.prizeAmount, 240.185039)),
  premiosConcursosEspecieIngresosRepercutidos: amount(right(1, P2.reduction, 240.185039)),

  // Imputación de rentas por la cesión de derechos de imagen (art. 92.8).
  imagenEjercicio: year(left(1, 536.566929, 211.811024)),
  imagenDinerarias: amount(right(1, P2.reduction, 173.456693)),
  imagenEspecie: amount(right(1, P2.reduction, 153.897638)),
  imagenIngresosACuenta: amount(right(1, P2.reduction, 133.972441)),

  // Fecha y firma.
  lugar: text(left(1, 53.149606, 91.877953)),
} as const satisfies Record<string, FieldSpec>;

export type CertificateFieldId = keyof typeof CERTIFICATE_FIELDS;

/** Fecha de expedición: día, mes y año en sus casillas («a … de … de …»). */
export const CERTIFICATE_ISSUE = {
  day: left(1, 363.807087, 91.877953),
  month: left(1, 394.043307, 91.877953),
  year: left(1, 532.598425, 91.877953),
} as const;

export const CERTIFICATE_SIGNER = {
  name: left(1, 86.909449, 60.228346),
  image: { x: 209.165354, y: 63.594488, width: 78.744094, height: 24.744094 },
} as const;

/** Atrasos de ejercicios anteriores: cuatro filas de seis columnas (página 1). */
export const CERTIFICATE_ARREARS = {
  rows: [381.944882, 370.692913, 358.590551, 347.901575],
  columns: {
    ejercicio: 87.2,
    integro: 186.326,
    retenciones: 279.33,
    reducciones: 373.811,
    gastos: P1.amount,
    otrasReducciones: P1.single,
  },
} as const;

/** Reintegros de ejercicios anteriores: tres filas de tres columnas (página 1). */
export const CERTIFICATE_REFUNDS = {
  rows: [
    {
      ejercicio: [87.476378, 257.07874],
      integro: [186.602362, 257.846457],
      reducciones: [279.606299, 257.07874],
    },
    {
      ejercicio: [86.740157, 246.224409],
      integro: [186.602362, 246.988189],
      reducciones: [279.606299, 246.224409],
    },
    {
      ejercicio: [86.740157, 235.19685],
      integro: [186.602362, 235.19685],
      reducciones: [279.606299, 235.19685],
    },
  ],
} as const;

export type CertificateArrearsColumn = keyof typeof CERTIFICATE_ARREARS.columns;
export type CertificateRefundColumn = keyof (typeof CERTIFICATE_REFUNDS.rows)[number];
