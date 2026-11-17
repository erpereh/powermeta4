import { extraRuleTokens } from "./extra-pay-rule";
import type { TeleworkRuleVariant } from "./types";

/**
 * `CSP_HRPERIOD_CALC.CSP_I_ABONO_TELETRABAJO` `_RULE_U_P` read from M4RCH_RULES3
 * (M4PRENOMINA, 2026-11-17). Comments are ignored when comparing.
 */
const PREVIOUS_MONTH_LEAVE = `
alloc = Dxdate(25, dxmonth(SCO_DT_ALLOCATION)-1, Dxyear(SCO_DT_ALLOCATION))
IF dxmonth(SCO_DT_ALLOCATION)= 1 then alloc = Dxdate(25,12,Dxyear(SCO_DT_ALLOCATION)-1)
v_dias_baja = 0
v_baja_mes_completo = 0
CSP_PAGA_MES_ANTERIOR.destroy()
CSP_PAGA_MES_ANTERIOR.FECHA = alloc
CSP_PAGA_MES_ANTERIOR.ID_HR = SCO_ID_HR
CSP_PAGA_MES_ANTERIOR.Load_blk()
Registros = CSP_PAGA_MES_ANTERIOR.count()
If Registros > 0 then
    CSP_PAGA_MES_ANTERIOR.Begin()
    v_dias_mat = CSP_PAGA_MES_ANTERIOR.SSP_DIAS_MATERN
    v_dias_pat = CSP_PAGA_MES_ANTERIOR.SSP_DIAS_PATERN
    v_dias_enf = CSP_PAGA_MES_ANTERIOR.SSP_DIAS_ENF_C_EMP + CSP_PAGA_MES_ANTERIOR.SSP_DIAS_ENF_C_IND + CSP_PAGA_MES_ANTERIOR.SSP_DIAS_ENF_60 + CSP_PAGA_MES_ANTERIOR.SSP_DIAS_ENF_75
    v_dias_acc = CSP_PAGA_MES_ANTERIOR.SSP_DIAS_ACCID
    v_dias_baja = v_dias_mat + v_dias_pat + v_dias_enf + v_dias_acc
    v_baja_mes_completo = 0
k=CSP_PAGA_MES_ANTERIOR.SCO_DT_PAY_START
l=DaysOfMonth(CSP_PAGA_MES_ANTERIOR.SCO_DT_PAY_START)
    If v_dias_baja = DaysOfMonth(alloc) Then
        v_baja_mes_completo = 1
    EndIf
Endif
If  v_baja_mes_completo = 1 or SSP_ES_ALTA = 1 Then
    Return(0)
EndIf`;

const HEAD = `
If CSP_IND_ABONO_TELETRABAJO = 1 then return(0)
If DxDay(SCO_DT_ALLOCATION) <> 25 Then Return(0)
If SSP_ES_ALTA = 1 then Return(0)`;

/** 2022-06-01 – 2026-08-31: only indicator 0 is paid (the price). */
export const TELEWORK_RULE_2022 = `${HEAD}
${PREVIOUS_MONTH_LEAVE}
If CSP_IND_ABONO_TELETRABAJO = 0 then Return(CSP_P_ABONO_TELETRABAJO)`;

/** From 2026-09-01: indicator 2 (80/20 collective) is paid twice the price. */
export const TELEWORK_RULE_2026 = `${HEAD}
${PREVIOUS_MONTH_LEAVE}
If CSP_IND_ABONO_TELETRABAJO = 2 then Return(CSP_P_ABONO_TELETRABAJO*2)
If CSP_IND_ABONO_TELETRABAJO = 0 then Return(CSP_P_ABONO_TELETRABAJO)`;

export const TELEWORK_RULE_VERSIONS: readonly {
  variant: TeleworkRuleVariant;
  source: string;
}[] = [
  { variant: "telework-2022-06", source: TELEWORK_RULE_2022 },
  { variant: "telework-2026-09", source: TELEWORK_RULE_2026 },
];

export function teleworkVariant(source: string | null | undefined): TeleworkRuleVariant | null {
  if (!source) return null;
  const tokens = extraRuleTokens(source);
  return (
    TELEWORK_RULE_VERSIONS.find((version) => extraRuleTokens(version.source) === tokens)?.variant ??
    null
  );
}
