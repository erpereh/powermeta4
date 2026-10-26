/**
 * Normas de `M4SSP_IR_X_TIPO_NORMA`. PeopleNet guarda su fórmula como LN4 en
 * `SCO_LN4_CODE` y la ejecuta con `clcExecuteLN4JIT` desde `SSP_PROCESS_ACUM`
 * con seis argumentos. Aquí cada norma es la traducción literal de su LN4; al
 * leer la configuración se compara el texto con el esperado y, si PeopleNet lo
 * cambia, el análisis lo avisa en lugar de aplicar en silencio otra fórmula.
 */

export interface NormaArgs {
  /** ARG_NUM1: importe del concepto con su signo. */
  readonly value: number;
  /** ARG_NUM2: `SSP_COEF_JORNADA` (1 si no hay dato). */
  readonly coefJornada: number;
  /** ARG_NUM3: `SSP_COEFICIENTE` del item, o 1/meses en `COEF_A`. */
  readonly coefNormalizacion: number;
  /** ARG_NUM4: horas de convenio del mes × meses del periodo del informe. */
  readonly horasConvenioPeriodo: number;
  /** ARG_NUM5: horas reales del mes (`SSP_HORAS_REALES`). */
  readonly horasMesTrabajadas: number;
  /** ARG_NUM6: horas anuales de convenio / 12. */
  readonly horasMesConvenio: number;
}

type NormaFn = (args: NormaArgs) => number;

const extra =
  (factor: number): NormaFn =>
  ({ value, coefJornada, horasMesTrabajadas }) =>
    horasMesTrabajadas === 0 || coefJornada === 0 ? 0 : (value * factor) / coefJornada;

const raw: NormaFn = ({ value }) => value;

interface NormaDefinition {
  readonly fn: NormaFn;
  /** Cuerpo LN4 esperado (sin la cabecera de argumentos), para detectar cambios. */
  readonly ln4: string;
}

const RAW_LN4 = "Return(iValorConcepto)";
const extraLn4 = (factor: number) =>
  `If iHorasMesTrabajadas = 0 Then Return(0) Return((iValorConcepto * ${factor}) / (iCoefJornada))`;

export const NORMAS: Readonly<Record<string, NormaDefinition>> = {
  COEF: {
    fn: ({ value, coefNormalizacion }) => value * coefNormalizacion,
    ln4: "Return(iValorConcepto * iCoefNormalizacion)",
  },
  COEF_A: {
    fn: ({ value, coefNormalizacion }) => value * coefNormalizacion,
    ln4: "Return(iValorConcepto * iCoefNormalizacion)",
  },
  CONSUMO: {
    fn: ({ value, coefNormalizacion }) => value * coefNormalizacion * 10,
    ln4: "Return(iValorConcepto * iCoefNormalizacion) * 10",
  },
  NC_ND: {
    fn: ({ value, horasConvenioPeriodo, horasMesConvenio }) =>
      horasMesConvenio === 0 ? 0 : (value * horasConvenioPeriodo) / horasMesConvenio,
    ln4: "If iHorasMesConvenio = 0 Then Return(0) Return((iValorConcepto * iHorasConvenioPeriodo) / iHorasMesConvenio)",
  },
  NC_SD: {
    fn: ({ value, coefJornada, horasConvenioPeriodo, horasMesTrabajadas }) =>
      horasMesTrabajadas === 0
        ? 0
        : (value * coefJornada * horasConvenioPeriodo) / horasMesTrabajadas,
    ln4: "If iHorasMesTrabajadas = 0 Then Return(0) Return(((iValorConcepto * iCoefJornada) * iHorasConvenioPeriodo) / iHorasMesTrabajadas)",
  },
  NO_NOR: { fn: raw, ln4: RAW_LN4 },
  NO_NOR_2: { fn: raw, ln4: RAW_LN4 },
  SC_ND: {
    fn: ({ value, coefJornada, horasConvenioPeriodo, horasMesConvenio }) =>
      coefJornada === 0 || horasMesConvenio === 0
        ? 0
        : ((value / coefJornada) * horasConvenioPeriodo) / horasMesConvenio,
    ln4: "If iCoefJornada = 0 Then Return(0) If iHorasMesConvenio = 0 Then Return(0) Return(((iValorConcepto / iCoefJornada) * iHorasConvenioPeriodo) / iHorasMesConvenio)",
  },
  SC_SD_EX_1: { fn: extra(2), ln4: extraLn4(2) },
  SC_SD_EX_2: { fn: extra(12), ln4: extraLn4(12) },
  SC_SD_EX_3: { fn: extra(11), ln4: extraLn4(11) },
  SC_SD_EX_4: { fn: extra(12), ln4: extraLn4(12) },
  SC_SD_EX_5: { fn: extra(12), ln4: extraLn4(12) },
  SC_SD_EX_6: { fn: extra(3), ln4: extraLn4(3) },
  SC_SD1: {
    fn: ({ value, horasConvenioPeriodo, horasMesTrabajadas }) =>
      horasMesTrabajadas === 0 ? 0 : (value * horasConvenioPeriodo) / horasMesTrabajadas,
    ln4: "If iHorasMesTrabajadas = 0 Then Return(0) Return((iValorConcepto * iHorasConvenioPeriodo) / iHorasMesTrabajadas)",
  },
  SC_SD2: {
    fn: ({ value, horasMesTrabajadas }) => (horasMesTrabajadas === 0 ? 0 : value),
    ln4: "If iHorasMesTrabajadas = 0 Then Return(0) Return(iValorConcepto)",
  },
  TOT: { fn: raw, ln4: RAW_LN4 },
  TOT_2: { fn: raw, ln4: RAW_LN4 },
  TOT_3: { fn: raw, ln4: RAW_LN4 },
  TOT_4: { fn: raw, ln4: RAW_LN4 },
};

/** Quita comentarios, la cabecera de argumentos y los espacios para comparar LN4. */
export function normalizeLn4(code: string): string {
  return code
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("'") && !/^i\w+\s*=\s*ARG_NUM\d$/i.test(line))
    .join(" ")
    .replace(/\s+/g, "")
    .toLowerCase();
}

/** Normas de la configuración cuyo LN4 no coincide con la traducción conocida. */
export function changedNormas(
  configured: readonly { readonly id: string; readonly ln4: string }[],
): string[] {
  return configured
    .filter((norma) => {
      const known = NORMAS[norma.id];
      return !known || normalizeLn4(known.ln4) !== normalizeLn4(norma.ln4);
    })
    .map((norma) => norma.id);
}
