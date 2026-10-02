# mss_g4_gta_view_alerts_actions_json

Identificador: `mss_g4/mss_g4_gta_view_alerts_actions_json.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_gta_view_alerts_actions_json.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_view_alerts_actions_json.jsp) | `a875e15b8006ef1f2b1338584e9423d31e0a144193405711a5a9fca561a077cc` |    316 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_gta_view_alerts_actions_json.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_gta_view_alerts_actions_json.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave          | Acceso literal                                   |
| --- | ------------------------ | ------------------------------------------------ |
| 25  | ActionTp                 | getParameter(request,"ActionTp")                 |
| 26  | Reload                   | getParameter(request,"Reload")                   |
| 27  | NumCurReg                | getParameter(request,"NumCurReg")                |
| 28  | aRows                    | getParameter(request,"aRows")                    |
| 29  | DefInc                   | getParameter(request,"DefInc")                   |
| 33  | DtStart                  | getParameter(request,"DtStart")                  |
| 34  | DtEnd                    | getParameter(request,"DtEnd")                    |
| 35  | ALERT_TYPE               | getParameter(request,"ALERT_TYPE")               |
| 36  | ID_ALERT                 | getParameter(request,"ID_ALERT")                 |
| 37  | AlSevLevel1              | getParameter(request,"AlSevLevel1")              |
| 38  | AlSevLevel2              | getParameter(request,"AlSevLevel2")              |
| 39  | ID_DISPLAY_CLASIFICATION | getParameter(request,"ID_DISPLAY_CLASIFICATION") |
| 40  | HIDDEN_ALERTS            | getParameter(request,"HIDDEN_ALERTS")            |
| 41  | ID_HR                    | getParameter(request,"ID_HR")                    |
| 42  | OR_PER                   | getParameter(request,"OR_PER")                   |
| 43  | IdWu                     | getParameter(request,"IdWu")                     |

| L   | Variable                  | Expresión fuente                                                                     | Resolución estática parcial                                                          |
| --- | ------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| 25  | sActionTp                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ActionTp")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ActionTp")                 |
| 26  | sReload                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Reload")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Reload")                   |
| 27  | sNumCurReg                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")                |
| 28  | sRows                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")                    |
| 29  | sDefInc                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DefInc")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DefInc")                   |
| 33  | sDtStart                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart")                  |
| 34  | sDtEnd                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtEnd")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtEnd")                    |
| 35  | sALERT_TYPE               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ALERT_TYPE")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ALERT_TYPE")               |
| 36  | sID_ALERT                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_ALERT")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_ALERT")                 |
| 37  | sAlSevLevel1              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel1")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel1")              |
| 38  | sAlSevLevel2              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel2")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel2")              |
| 39  | sID_DISPLAY_CLASIFICATION | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_DISPLAY_CLASIFICATION") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_DISPLAY_CLASIFICATION") |
| 40  | sHIDDEN_ALERTS            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HIDDEN_ALERTS")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HIDDEN_ALERTS")            |
| 41  | sIDHr                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")                    |
| 42  | sOrPer                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER")                   |
| 43  | sIdWu                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu")                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu")                     |
| 44  | sLoadType                 | ""                                                                                   |                                                                                      |
| 48  | sMethod                   | ""                                                                                   |                                                                                      |
| 66  | sChannelID                | "SCO_GTA_VIEW_ALERTS"                                                                | SCO_GTA_VIEW_ALERTS                                                                  |
| 67  | sChannelAlias             | sChannelID                                                                           | SCO_GTA_VIEW_ALERTS                                                                  |
| 68  | sRootNode                 | "SHCO_GN_ROOT"                                                                       | SHCO_GN_ROOT                                                                         |
| 69  | sLogNode                  | "SHCO_GN_LOGS"                                                                       | SHCO_GN_LOGS                                                                         |
| 70  | sLabelNode                | "SHCO_GN_LABEL"                                                                      | SHCO_GN_LABEL                                                                        |
| 71  | sMainNode                 | "SCO_GTA_VIEW_ALERTS"                                                                | SCO_GTA_VIEW_ALERTS                                                                  |
| 72  | sRootNodeOutDef           | sChannelAlias + "!" + sRootNode + "[*]"                                              | SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_ROOT{"[*]"}                                          |
| 73  | sLogNodeOutDef            | sChannelAlias + "!" + sLogNode + "[*]"                                               | SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_LOGS{"[*]"}                                          |
| 74  | sOutDefLabel              | sChannelAlias + "!" + sLabelNode + "[*]"                                             | SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_LABEL{"[*]"}                                         |
| 75  | sOutDefMain               | sChannelAlias + "!" + sMainNode + "[*]"                                              | SCO_GTA_VIEW_ALERTS{"!"}SCO_GTA_VIEW_ALERTS{"[*]"}                                   |
| 76  | sLoadMethod               | sChannelAlias + "!" + sRootNode + "." + sMethod                                      | SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_ROOT{"."}                                            |
| 77  | sComunRoot                | sRootNode + ":" + sChannelAlias + "!" + sRootNode + "[&amp;VAR.m4lix]" + "."         | SHCO_GN_ROOT{":"}SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_ROOT{"[&amp;VAR.m4lix]"}{"."}       |
| 79  | nullStr                   | null                                                                                 | null                                                                                 |
| 83  | sLogErrorMsg              | ""                                                                                   |                                                                                      |
| 84  | sIdHR                     | ""                                                                                   |                                                                                      |
| 84  | sOrHrPer                  | ""                                                                                   |                                                                                      |
| 84  | sDtStartRet               | ""                                                                                   |                                                                                      |
| 84  | sNmEmpl                   | ""                                                                                   |                                                                                      |
| 85  | sComment                  | ""                                                                                   |                                                                                      |
| 85  | sIdRefMod                 | ""                                                                                   |                                                                                      |
| 85  | sIdWeekModel              | ""                                                                                   |                                                                                      |
| 85  | sIdDayType                | ""                                                                                   |                                                                                      |
| 86  | sTheorTS                  | ""                                                                                   |                                                                                      |
| 86  | sWorkTheo                 | ""                                                                                   |                                                                                      |
| 86  | sAbsCal                   | ""                                                                                   |                                                                                      |
| 86  | sAbs                      | ""                                                                                   |                                                                                      |
| 87  | sGrosClock                | ""                                                                                   |                                                                                      |
| 87  | sClockTS                  | ""                                                                                   |                                                                                      |
| 87  | sReal                     | ""                                                                                   |                                                                                      |
| 87  | sRealTS                   | ""                                                                                   |                                                                                      |
| 88  | sIDAlert                  | ""                                                                                   |                                                                                      |
| 88  | sNMProp                   | ""                                                                                   |                                                                                      |
| 88  | sNmAlSevLevel             | ""                                                                                   |                                                                                      |
| 88  | sText                     | ""                                                                                   |                                                                                      |
| 89  | sHide                     | ""                                                                                   |                                                                                      |
| 89  | sSup                      | ""                                                                                   |                                                                                      |
| 89  | sCommentAlert             | ""                                                                                   |                                                                                      |
| 89  | sAlertClasification       | ""                                                                                   |                                                                                      |
| 91  | sWorkTheoString           | ""                                                                                   |                                                                                      |
| 91  | sAbsCalString             | ""                                                                                   |                                                                                      |
| 91  | sAbsString                | ""                                                                                   |                                                                                      |
| 92  | sSupString                | ""                                                                                   |                                                                                      |
| 92  | sRealString               | ""                                                                                   |                                                                                      |
| 92  | sAlertIcon                | ""                                                                                   |                                                                                      |
| 93  | sHasRequestInc            | ""                                                                                   |                                                                                      |
| 93  | sDtStartFix               | ""                                                                                   |                                                                                      |
| 93  | sNumRegClock              | ""                                                                                   |                                                                                      |
| 94  | sIsClockChangeable        | ""                                                                                   |                                                                                      |
| 94  | sIdHRhinc                 | ""                                                                                   |                                                                                      |
| 94  | sOrHrPerhinc              | ""                                                                                   |                                                                                      |
| 98  | sret                      | ""                                                                                   |                                                                                      |
| 144 | nCount                    | 0                                                                                    | 0                                                                                    |
| 144 | sCount                    | ""                                                                                   |                                                                                      |
| 145 | nLogCount                 | 0                                                                                    | 0                                                                                    |
| 145 | sLogCount                 | ""                                                                                   |                                                                                      |
| 162 | i                         | 0                                                                                    | 0                                                                                    |
| 163 | sI                        | String.valueOf(i)                                                                    | String.valueOf(i)                                                                    |
| 294 | sChartData                | oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,"-1","SCO_CHART_DATA")            | oOperDef.getItem(sMainNode,sChannelAlias,sMainNode,"-1","SCO_CHART_DATA")            |
| 303 | j                         | 0                                                                                    | 0                                                                                    |
| 305 | sJ                        | String.valueOf(j)                                                                    | String.valueOf(j)                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                            |
| --- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| 102 | m4:startpage | m4task=SCO_GTA_VIEW_ALERTS                                                                                                    |
| 102 | m4:beginjob  |                                                                                                                               |
| 103 | m4:datadef   | m4o=SCO_GTA_VIEW_ALERTS; m4name=SCO_GTA_VIEW_ALERTS                                                                           |
| 104 | m4:exec      | m4method=SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_ROOT{"."}                                                                            |
| 108 | m4:param     | name=ARG_DT_START; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtStart")                                  |
| 109 | m4:param     | name=ARG_DT_END; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DtEnd")                                      |
| 110 | m4:param     | name=ARG_ALERT_TYPE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ALERT_TYPE")                             |
| 111 | m4:param     | name=ARG_ID_ALERT; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_ALERT")                                 |
| 112 | m4:param     | name=ARG_AL_SEV_LEVEL1; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel1")                         |
| 113 | m4:param     | name=ARG_AL_SEV_LEVEL2; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"AlSevLevel2")                         |
| 114 | m4:param     | name=ARG_ID_DISPLAY_CLASIFICATION; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_DISPLAY_CLASIFICATION") |
| 115 | m4:param     | name=ARG_HIDDEN_ALERTS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"HIDDEN_ALERTS")                       |
| 116 | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")                                       |
| 117 | m4:param     | name=ARG_OR_PER; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_PER")                                     |
| 118 | m4:param     | name=ARG_ID_WU; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IdWu")                                        |
| 119 | m4:param     | name=ARG_LOAD_TYPE; value=                                                                                                    |
| 122 | m4:param     | name=ARG_NUM_REG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")                                 |
| 123 | m4:param     | name=ARG_RELOAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Reload")                                     |
| 124 | m4:param     | name=ARG_LIST_CHECKED; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")                                |
| 126 | m4:param     | name=ARG_NUM_REG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")                                 |
| 127 | m4:param     | name=ARG_RELOAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Reload")                                     |
| 129 | m4:param     | name=ARG_NUM_REG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NumCurReg")                                 |
| 130 | m4:param     | name=ARG_RELOAD; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Reload")                                     |
| 131 | m4:param     | name=ARG_LIST_CHECKED; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")                                |
| 133 | m4:param     | name=ARG_DEF_INC; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DefInc")                                    |
| 134 | m4:param     | name=ARG_LIST_CHECKS; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"aRows")                                 |
| 137 | m4:outputdef | m4alias=SHCO_GN_ROOT                                                                                                          |
| 137 | m4:param     | name=m4name0; value=SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_ROOT{"[*]"}                                                               |
| 138 | m4:outputdef | m4alias=SHCO_GN_LOGS                                                                                                          |
| 138 | m4:param     | name=m4name0; value=SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_LOGS{"[*]"}                                                               |
| 139 | m4:outputdef | m4alias=SHCO_GN_LABEL                                                                                                         |
| 139 | m4:param     | name=m4name0; value=SCO_GTA_VIEW_ALERTS{"!"}SHCO_GN_LABEL{"[*]"}                                                              |
| 140 | m4:outputdef | m4alias=SCO_GTA_VIEW_ALERTS                                                                                                   |
| 140 | m4:param     | name=m4name0; value=SCO_GTA_VIEW_ALERTS{"!"}SCO_GTA_VIEW_ALERTS{"[*]"}                                                        |
| 141 | m4:endjob    |                                                                                                                               |
| 316 | m4:endpage   |                                                                                                                               |

| L   | Operación | Argumentos literales                                                  |
| --- | --------- | --------------------------------------------------------------------- |
| 158 | getCount  | sMainNode,sChannelAlias,sMainNode                                     |
| 164 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"STD_ID_HR"                      |
| 166 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"STD_OR_HR_PERIOD"               |
| 167 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SSM_DT_START_STRING"            |
| 168 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"DT_START"                       |
| 169 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_GB_NAME"                    |
| 170 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_TEXT"                       |
| 171 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_COMMENT"                    |
| 172 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_REF_MOD"                 |
| 173 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_WEEK_MDL"                |
| 174 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_DAY_TYPE"                |
| 175 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_TRANSLATED_TIMESLOT_PER_VW" |
| 176 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_WORK_THEO"                  |
| 177 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS_CAL"                    |
| 178 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS"                        |
| 179 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_SUP"                        |
| 180 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SSM_GROSS_CLOCK_DEC_HOURS_S"    |
| 181 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_TRANSLATED_TS_GROSS_CLOCK"  |
| 182 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_REAL_WORK"                  |
| 183 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_TRANSLATED_TS_REAL"         |
| 184 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ID_ALERT"                   |
| 185 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_PROPERTY"                |
| 186 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_ALERT_SEVERITY_LEVEL"    |
| 187 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_HIDE"                       |
| 188 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_COMMENT_ALERT"              |
| 189 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_WORK_THEO_STRING"           |
| 190 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS_CAL_STRING"             |
| 191 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_ABS_STRING"                 |
| 192 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_SUP_STRING"                 |
| 193 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_REAL_WORK_STRING"           |
| 194 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_HTML_ICON"                  |
| 195 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_HAS_REQUEST_INCIDENCES"     |
| 196 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_NUM_REG_CLOCK"              |
| 197 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_IS_CLOCK_DEC_CHANGEABLE"    |
| 198 | getItem   | sMainNode,sChannelAlias,sMainNode,sI,"SCO_NM_DISPLAY_DLASIFICATION"   |
| 294 | getItem   | sMainNode,sChannelAlias,sMainNode,"-1","SCO_CHART_DATA"               |
| 299 | getCount  | sLogNode,sChannelAlias,sLogNode                                       |
| 306 | getItem   | sLogNode,sChannelAlias,sLogNode,sJ,"SHCO_LOG_TEXT"                    |
| 307 | getItem   | sLogNode,sChannelAlias,sLogNode,"0","SHCO_LOG_TYPE"                   |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 49  | if (sActionTp.equals("1")){                                                                                                              |
| 52  | }else if (sActionTp.equals("2")){                                                                                                        |
| 54  | }else if (sActionTp.equals("3")){                                                                                                        |
| 56  | }else if (sActionTp.equals("4")){                                                                                                        |
| 58  | }else if (sActionTp.equals("5")){                                                                                                        |
| 60  | }else if (sActionTp.equals("6")){                                                                                                        |
| 106 | if (sActionTp.equals("1")&#124;&#124;sActionTp.equals("6")){                                                                             |
| 121 | }else if (sActionTp.equals("2")){                                                                                                        |
| 125 | } else if (sActionTp.equals("3")){                                                                                                       |
| 128 | } else if (sActionTp.equals("4")){                                                                                                       |
| 132 | } else if (sActionTp.equals("5")){                                                                                                       |
| 156 | if (sActionTp.equals("1")&#124;&#124;sReload.equals("1")){                                                                               |
| 201 | if (sOrHrPer != ""){                                                                                                                     |
| 203 | }else {sOrHrPer="1";}                                                                                                                    |
| 206 | if (sNumRegClock != ""){                                                                                                                 |
| 208 | }else {sNumRegClock="0";}                                                                                                                |
| 210 | if (sWorkTheo != ""){                                                                                                                    |
| 212 | }else {sWorkTheo="0";}                                                                                                                   |
| 214 | if (sAbsCal != ""){                                                                                                                      |
| 216 | }else {sAbsCal="0";}                                                                                                                     |
| 218 | if (sAbs != ""){                                                                                                                         |
| 220 | }else {sAbs="0";}                                                                                                                        |
| 222 | if (sSup != ""){                                                                                                                         |
| 224 | }else {sSup="0";}                                                                                                                        |
| 226 | if (sGrosClock != ""){                                                                                                                   |
| 228 | }else {sGrosClock="0";}                                                                                                                  |
| 230 | if (sReal != ""){                                                                                                                        |
| 232 | }else {sReal="0";}                                                                                                                       |
| 234 | if (sHide.equals("Y")){sHide = "1";}else {sHide = "0";}                                                                                  |
| 236 | if (sIsClockChangeable.equals("1.00000000")){sIsClockChangeable = "1";}else {sIsClockChangeable = "0";}                                  |
| 238 | if (sHasRequestInc.equals("1.00000000")){sHasRequestInc = "1";}else {sHasRequestInc = "0";}                                              |
| 292 | }else if (sActionTp.equals("6")){                                                                                                        |
| 302 | if (nLogCount&gt;0){                                                                                                                     |
| 304 | if (j!=0){sLogErrorMsg = "\n" + sLogErrorMsg;}                                                                                           |
| 72  | expresión de cálculo/transformación: String sRootNodeOutDef = sChannelAlias + "!" + sRootNode + "[*]";                                   |
| 73  | expresión de cálculo/transformación: String sLogNodeOutDef = sChannelAlias + "!" + sLogNode + "[*]";                                     |
| 74  | expresión de cálculo/transformación: String sOutDefLabel = sChannelAlias + "!" + sLabelNode + "[*]";                                     |
| 75  | expresión de cálculo/transformación: String sOutDefMain = sChannelAlias + "!" + sMainNode + "[*]";                                       |
| 76  | expresión de cálculo/transformación: String sLoadMethod = sChannelAlias + "!" + sRootNode + "." + sMethod;                               |
| 77  | expresión de cálculo/transformación: String sComunRoot = sRootNode + ":" + sChannelAlias + "!" + sRootNode + "[&amp;VAR.m4lix]" + ".";   |
| 306 | expresión de cálculo/transformación: sLogErrorMsg = sLogErrorMsg + oOperDef.getItem(sLogNode,sChannelAlias,sLogNode,sJ,"SHCO_LOG_TEXT"); |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_gta_view_alerts_actions_json.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
