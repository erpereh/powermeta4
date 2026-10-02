# PROYECCION TEÓRICA DE HABERES

Identificador: `sse_g2/sse_g2_inf_proyec_pepe_ppse.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_pepe_ppse.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_pepe_ppse.jsp) | `34e9955ea852e3d6ddda9cef2d3c6c24fa20de381f0d3cb6086f881948681199` |   2299 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_pepe_ppse.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_pepe_ppse.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L    | Texto literal / etiqueta                                                  |
| ---- | ------------------------------------------------------------------------- |
| 20   | PROYECCION TEÓRICA DE HABERES                                             |
| 334  | PROYECCIÓN TEÓRICA HABERES AÑO [valor dinámico]                           |
| 399  | [valor dinámico] [valor dinámico] [valor dinámico]                        |
| 406  | CENTRO DE TRABAJO                                                         |
| 417  | RETRIBUCIÓN DIRECTA                                                       |
| 1120 | RETRIBUCIÓN INDIRECTA. Beneficios Sociales.                               |
| 1241 | Total                                                                     |
| 1366 | Total                                                                     |
| 1497 | Total                                                                     |
| 1821 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 1883 | Total                                                                     |
| 1914 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 2038 | Total                                                                     |
| 2069 | PLAN PREVISIÓN SOCIAL EMPRESARIAL pepe                                    |
| 2171 | Total                                                                     |
| 2200 | INVERSIÓN en FORMACIÓN                                                    |
| 2211 | Inversion Individual en Formacion                                         |
| 2270 | Total                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                          |
| --- | ------- | ---------------------------------- |
| 333 | img     | border=0; src=/iconos/logo_cyc.jpg |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 13  | anio            | getParameter(request,"anio") |

| L   | Variable             | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | -------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 13  | anio                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") |
| 62  | zsubsesion           | "CSP_RP_PROYECCIONES"                                            | CSP_RP_PROYECCIONES                                              |
| 63  | zmeta4object         | "CSP_RP_PROYECCIONES"                                            | CSP_RP_PROYECCIONES                                              |
| 64  | znodoDP              | "SSE_DATOS_PROYECCION"                                           | SSE_DATOS_PROYECCION                                             |
| 65  | znodoSC              | "CSP_SALARIO_CONVENIO"                                           | CSP_SALARIO_CONVENIO                                             |
| 66  | znodoCC              | "CSP_COMP_ORG"                                                   | CSP_COMP_ORG                                                     |
| 67  | znodoCF              | "CSP_COMP_FUNCIONAL"                                             | CSP_COMP_FUNCIONAL                                               |
| 68  | znodoTF              | "CSP_TOTAL_RET_FIJA"                                             | CSP_TOTAL_RET_FIJA                                               |
| 69  | znodoRV              | "CSP_RET_VAR"                                                    | CSP_RET_VAR                                                      |
| 70  | znodoTV              | "CSP_TOT_RET_VAR"                                                | CSP_TOT_RET_VAR                                                  |
| 71  | znodoBV              | "CSP_BASE_RET_VAR"                                               | CSP_BASE_RET_VAR                                                 |
| 72  | znodoSS              | "CSP_SEG_SOC"                                                    | CSP_SEG_SOC                                                      |
| 75  | znodoVE              | "CSP_VAL_ESPECIE"                                                | CSP_VAL_ESPECIE                                                  |
| 76  | znodoCS              | "CSP_CONTRATO_SEGUROS"                                           | CSP_CONTRATO_SEGUROS                                             |
| 77  | znodoCJ              | "CSP_COMPRO_JUB"                                                 | CSP_COMPRO_JUB                                                   |
| 78  | znodoPE              | "CSP_PLAN_PREV_EMP"                                              | CSP_PLAN_PREV_EMP                                                |
| 79  | znodoIF              | "CSP_INV_FORMACION"                                              | CSP_INV_FORMACION                                                |
| 80  | znodoAY              | "CSP_AYUDAS"                                                     | CSP_AYUDAS                                                       |
| 81  | znodoDK              | "CSP_DIET_KM"                                                    | CSP_DIET_KM                                                      |
| 82  | znodoCM              | "CSP_COMIDAS"                                                    | CSP_COMIDAS                                                      |
| 83  | znodoRF              | "CSP_RET_FLEX"                                                   | CSP_RET_FLEX                                                     |
| 85  | zmetodocarga         | zsubsesion +"!CSP_RP_PROYECCIONES.CSP_CARGA"                     | CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                |
| 88  | zoutputdefDP         | zsubsesion + "!" + znodoDP + "[*]"                               | CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}              |
| 89  | zmoveDP              | znodoDP + ":" + znodoDP + "[FIRST]"                              | SSE_DATOS_PROYECCION{":"}SSE_DATOS_PROYECCION{"[FIRST]"}         |
| 93  | zoutputdefSC         | zsubsesion + "!" + znodoSC + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}              |
| 94  | zmoveSC              | znodoSC + ":" + znodoSC + "[FIRST]"                              | CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"}         |
| 98  | zoutputdefCC         | zsubsesion + "!" + znodoCC + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                      |
| 99  | zmoveCC              | znodoCC + ":" + znodoCC + "[FIRST]"                              | CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                         |
| 103 | zoutputdefCF         | zsubsesion + "!" + znodoCF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                |
| 104 | zmoveCF              | znodoCF + ":" + znodoCF + "[FIRST]"                              | CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}             |
| 108 | zoutputdefTF         | zsubsesion + "!" + znodoTF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                |
| 109 | zmoveTF              | znodoTF + ":" + znodoTF + "[FIRST]"                              | CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}             |
| 113 | zoutputdefRV         | zsubsesion + "!" + znodoRV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                       |
| 114 | zmoveRV              | znodoRV + ":" + znodoRV + "[FIRST]"                              | CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                           |
| 118 | zoutputdefTV         | zsubsesion + "!" + znodoTV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                   |
| 119 | zmoveTV              | znodoTV + ":" + znodoTV + "[FIRST]"                              | CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}                   |
| 123 | zoutputdefBV         | zsubsesion + "!" + znodoBV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                  |
| 124 | zmoveBV              | znodoBV + ":" + znodoBV + "[FIRST]"                              | CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}                 |
| 128 | zoutputdefSS         | zsubsesion + "!" + znodoSS + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                       |
| 129 | zmoveSS              | znodoSS + ":" + znodoSS + "[FIRST]"                              | CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                           |
| 133 | zoutputdefVE         | zsubsesion + "!" + znodoVE + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                   |
| 134 | zmoveVE              | znodoVE + ":" + znodoVE + "[FIRST]"                              | CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}                   |
| 138 | zoutputdefCS         | zsubsesion + "!" + znodoCS + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}              |
| 139 | zmoveCS              | znodoCS + ":" + znodoCS + "[FIRST]"                              | CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"}         |
| 143 | zoutputdefCJ         | zsubsesion + "!" + znodoCJ + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                    |
| 144 | zmoveCJ              | znodoCJ + ":" + znodoCJ + "[FIRST]"                              | CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}                     |
| 148 | zoutputdefPE         | zsubsesion + "!" + znodoPE + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                 |
| 149 | zmovePE              | znodoPE + ":" + znodoPE + "[FIRST]"                              | CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}               |
| 153 | zoutputdefIF         | zsubsesion + "!" + znodoIF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                 |
| 154 | zmoveIF              | znodoIF + ":" + znodoIF + "[FIRST]"                              | CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}               |
| 157 | zoutputdefAY         | zsubsesion + "!" + znodoAY + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                        |
| 158 | zmoveAY              | znodoAY + ":" + znodoAY + "[FIRST]"                              | CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                             |
| 162 | zoutputdefDK         | zsubsesion + "!" + znodoDK + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                       |
| 163 | zmoveDK              | znodoDK + ":" + znodoDK + "[FIRST]"                              | CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                           |
| 167 | zoutputdefCM         | zsubsesion + "!" + znodoCM + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                       |
| 168 | zmoveCM              | znodoCM + ":" + znodoCM + "[FIRST]"                              | CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                           |
| 172 | zoutputdefRF         | zsubsesion + "!" + znodoRF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                      |
| 173 | zmoveRF              | znodoRF + ":" + znodoRF + "[FIRST]"                              | CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                         |
| 177 | zCSP_REAL            | ""                                                               |                                                                  |
| 178 | zPAGA_TOT            | ""                                                               |                                                                  |
| 179 | zPAGA01              | ""                                                               |                                                                  |
| 180 | zPAGA02              | ""                                                               |                                                                  |
| 181 | zPAGA03              | ""                                                               |                                                                  |
| 182 | zPAGA04              | ""                                                               |                                                                  |
| 183 | zPAGA05              | ""                                                               |                                                                  |
| 184 | zPAGA06              | ""                                                               |                                                                  |
| 185 | zPAGA07              | ""                                                               |                                                                  |
| 186 | zPAGA08              | ""                                                               |                                                                  |
| 187 | zPAGA09              | ""                                                               |                                                                  |
| 188 | zPAGA10              | ""                                                               |                                                                  |
| 189 | zPAGA11              | ""                                                               |                                                                  |
| 190 | zPAGA12              | ""                                                               |                                                                  |
| 191 | zPAGA13              | ""                                                               |                                                                  |
| 192 | zPAGA14              | ""                                                               |                                                                  |
| 193 | zPAGA15              | ""                                                               |                                                                  |
| 194 | zPAGA16              | ""                                                               |                                                                  |
| 195 | zPAGA17              | ""                                                               |                                                                  |
| 196 | zPAGA18              | ""                                                               |                                                                  |
| 197 | zPAGA19              | ""                                                               |                                                                  |
| 198 | zPAGA20              | ""                                                               |                                                                  |
| 199 | zSCO_N_WORK_LOCATION | ""                                                               |                                                                  |
| 200 | zSSP_NM_CATEGORIA    | ""                                                               |                                                                  |
| 201 | zSTD_ID_HR           | ""                                                               |                                                                  |
| 202 | zSTD_N_FAMILY_NAME_1 | ""                                                               |                                                                  |
| 203 | zSTD_N_FIRST_NAME    | ""                                                               |                                                                  |
| 204 | zSTD_OR_HR_PERIOD    | ""                                                               |                                                                  |
| 205 | zCSP_COUNT_COL       | ""                                                               |                                                                  |
| 206 | zID_ITEM             | ""                                                               |                                                                  |
| 208 | zID_ITEM_2           | ""                                                               |                                                                  |
| 210 | zTOTAL               | ""                                                               |                                                                  |
| 277 | zposiciondp          | 0                                                                | 0                                                                |
| 278 | zposicionsc          | 0                                                                | 0                                                                |
| 279 | zposicioncc          | 0                                                                | 0                                                                |
| 280 | zposicioncf          | 0                                                                | 0                                                                |
| 281 | zposiciontf          | 0                                                                | 0                                                                |
| 282 | zposicionrv          | 0                                                                | 0                                                                |
| 283 | zposiciontv          | 0                                                                | 0                                                                |
| 284 | zposicionbv          | 0                                                                | 0                                                                |
| 285 | zposicionss          | 0                                                                | 0                                                                |
| 286 | zposicionve          | 0                                                                | 0                                                                |
| 287 | zposicioncs          | 0                                                                | 0                                                                |
| 289 | zposicioncj          | 0                                                                | 0                                                                |
| 290 | zposicionpe          | 0                                                                | 0                                                                |
| 291 | zposicionif          | 0                                                                | 0                                                                |
| 292 | zposicionay          | 0                                                                | 0                                                                |
| 293 | zposiciondk          | 0                                                                | 0                                                                |
| 294 | zposicioncm          | 0                                                                | 0                                                                |
| 295 | zposicionrf          | 0                                                                | 0                                                                |
| 297 | i                    | 0                                                                | 0                                                                |
| 323 | id                   | String.valueOf(zposiciondp - 1)                                  | String.valueOf(zposiciondp - 1)                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------- |
| 216 | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                               |
| 218 | m4:beginjob  |                                                                                          |
| 219 | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                      |
| 228 | m4:exec      | m4method=CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                               |
| 230 | m4:outputdef | m4alias=SSE_DATOS_PROYECCION                                                             |
| 230 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                  |
| 231 | m4:outputdef | m4alias=CSP_SALARIO_CONVENIO                                                             |
| 231 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                  |
| 232 | m4:outputdef | m4alias=CSP_COMP_ORG                                                                     |
| 232 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                          |
| 233 | m4:outputdef | m4alias=CSP_COMP_FUNCIONAL                                                               |
| 233 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                    |
| 234 | m4:outputdef | m4alias=CSP_TOTAL_RET_FIJA                                                               |
| 234 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                    |
| 235 | m4:outputdef | m4alias=CSP_RET_VAR                                                                      |
| 235 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                           |
| 236 | m4:outputdef | m4alias=CSP_BASE_RET_VAR                                                                 |
| 236 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                      |
| 237 | m4:outputdef | m4alias=CSP_TOT_RET_VAR                                                                  |
| 237 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                       |
| 238 | m4:outputdef | m4alias=CSP_SEG_SOC                                                                      |
| 238 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                           |
| 239 | m4:outputdef | m4alias=CSP_VAL_ESPECIE                                                                  |
| 239 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                       |
| 240 | m4:outputdef | m4alias=CSP_CONTRATO_SEGUROS                                                             |
| 240 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                  |
| 241 | m4:outputdef | m4alias=CSP_COMPRO_JUB                                                                   |
| 241 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                        |
| 242 | m4:outputdef | m4alias=CSP_PLAN_PREV_EMP                                                                |
| 242 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                     |
| 243 | m4:outputdef | m4alias=CSP_INV_FORMACION                                                                |
| 243 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                     |
| 244 | m4:outputdef | m4alias=CSP_AYUDAS                                                                       |
| 244 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                            |
| 245 | m4:outputdef | m4alias=CSP_DIET_KM                                                                      |
| 245 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                           |
| 246 | m4:outputdef | m4alias=CSP_COMIDAS                                                                      |
| 246 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                           |
| 247 | m4:outputdef | m4alias=CSP_RET_FLEX                                                                     |
| 247 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                          |
| 249 | m4:endjob    |                                                                                          |
| 251 | m4:move      |                                                                                          |
| 251 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 252 | m4:move      |                                                                                          |
| 252 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 253 | m4:move      |                                                                                          |
| 253 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                 |
| 254 | m4:move      |                                                                                          |
| 254 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}     |
| 255 | m4:move      |                                                                                          |
| 255 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}     |
| 256 | m4:move      |                                                                                          |
| 256 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                   |
| 257 | m4:move      |                                                                                          |
| 257 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}           |
| 258 | m4:move      |                                                                                          |
| 258 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}         |
| 259 | m4:move      |                                                                                          |
| 259 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                   |
| 260 | m4:move      |                                                                                          |
| 260 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}           |
| 261 | m4:move      |                                                                                          |
| 261 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"} |
| 262 | m4:move      |                                                                                          |
| 262 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}             |
| 263 | m4:move      |                                                                                          |
| 263 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}       |
| 264 | m4:move      |                                                                                          |
| 264 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}       |
| 265 | m4:move      |                                                                                          |
| 265 | m4:param     | name=CSP_RP_PROYECCIONES; value=SSE_DATOS_PROYECCION                                     |
| 266 | m4:move      |                                                                                          |
| 266 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                     |
| 267 | m4:move      |                                                                                          |
| 267 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                   |
| 268 | m4:move      |                                                                                          |
| 268 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                   |
| 269 | m4:move      |                                                                                          |
| 269 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                 |

| L    | Operación        | Argumentos literales                                  |
| ---- | ---------------- | ----------------------------------------------------- |
| 224  | setItem          | zsubsesion,zsubsesion,"","ANIO",anio                  |
| 301  | getCountInClient | znodoDP,zsubsesion,znodoDP                            |
| 302  | getCountInClient | znodoSC,zsubsesion,znodoSC                            |
| 303  | getCountInClient | znodoCC,zsubsesion,znodoCC                            |
| 304  | getCountInClient | znodoCF,zsubsesion,znodoCF                            |
| 305  | getCountInClient | znodoTF,zsubsesion,znodoTF                            |
| 306  | getCountInClient | znodoRV,zsubsesion,znodoRV                            |
| 307  | getCountInClient | znodoTV,zsubsesion,znodoTV                            |
| 308  | getCountInClient | znodoBV,zsubsesion,znodoBV                            |
| 309  | getCountInClient | znodoSS,zsubsesion,znodoSS                            |
| 310  | getCountInClient | znodoVE,zsubsesion,znodoVE                            |
| 311  | getCountInClient | znodoCS,zsubsesion,znodoCS                            |
| 313  | getCountInClient | znodoCJ,zsubsesion,znodoCJ                            |
| 314  | getCountInClient | znodoPE,zsubsesion,znodoPE                            |
| 315  | getCountInClient | znodoIF,zsubsesion,znodoIF                            |
| 316  | getCountInClient | znodoAY,zsubsesion,znodoAY                            |
| 317  | getCountInClient | znodoDK,zsubsesion,znodoDK                            |
| 318  | getCountInClient | znodoCM,zsubsesion,znodoCM                            |
| 319  | getCountInClient | znodoRF,zsubsesion,znodoRF                            |
| 353  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_REAL"            |
| 354  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA_TOT"            |
| 355  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA01"              |
| 356  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA02"              |
| 357  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA03"              |
| 358  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA04"              |
| 359  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA05"              |
| 360  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA06"              |
| 361  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA07"              |
| 362  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA08"              |
| 363  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA09"              |
| 364  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA10"              |
| 365  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA11"              |
| 366  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA12"              |
| 367  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA13"              |
| 368  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA14"              |
| 369  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA15"              |
| 370  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA16"              |
| 371  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA17"              |
| 372  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA18"              |
| 373  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA19"              |
| 374  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA20"              |
| 375  | getItem          | znodoDP,zmeta4object,znodoDP,"","SCO_N_WORK_LOCATION" |
| 376  | getItem          | znodoDP,zmeta4object,znodoDP,"","SSP_NM_CATEGORIA"    |
| 377  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_ID_HR"           |
| 378  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FAMILY_NAME_1" |
| 379  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FIRST_NAME"    |
| 380  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_OR_HR_PERIOD"    |
| 381  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_COUNT_COL"       |
| 457  | getItem          | znodoSC,zmeta4object,znodoSC,"","TOTAL"               |
| 458  | getItem          | znodoSC,zmeta4object,znodoSC,"","ID_ITEM"             |
| 459  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA01"              |
| 460  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA02"              |
| 461  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA03"              |
| 462  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA04"              |
| 463  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA05"              |
| 464  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA06"              |
| 465  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA07"              |
| 466  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA08"              |
| 467  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA09"              |
| 468  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA10"              |
| 469  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA11"              |
| 470  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA12"              |
| 471  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA13"              |
| 472  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA14"              |
| 473  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA15"              |
| 474  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA16"              |
| 475  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA17"              |
| 476  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA18"              |
| 477  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA19"              |
| 478  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA20"              |
| 548  | getItem          | znodoCC,zmeta4object,znodoCC,"","TOTAL"               |
| 549  | getItem          | znodoCC,zmeta4object,znodoCC,"","ID_ITEM"             |
| 550  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA01"              |
| 551  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA02"              |
| 552  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA03"              |
| 553  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA04"              |
| 554  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA05"              |
| 555  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA06"              |
| 556  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA07"              |
| 557  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA08"              |
| 558  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA09"              |
| 559  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA10"              |
| 560  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA11"              |
| 561  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA12"              |
| 562  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA13"              |
| 563  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA14"              |
| 564  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA15"              |
| 565  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA16"              |
| 566  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA17"              |
| 567  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA18"              |
| 568  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA19"              |
| 569  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA20"              |
| 635  | getItem          | znodoCF,zmeta4object,znodoCF,"","TOTAL"               |
| 636  | getItem          | znodoCF,zmeta4object,znodoCF,"","ID_ITEM"             |
| 637  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA01"              |
| 638  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA02"              |
| 639  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA03"              |
| 640  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA04"              |
| 641  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA05"              |
| 642  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA06"              |
| 643  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA07"              |
| 644  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA08"              |
| 645  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA09"              |
| 646  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA10"              |
| 647  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA11"              |
| 648  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA12"              |
| 649  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA13"              |
| 650  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA14"              |
| 651  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA15"              |
| 652  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA16"              |
| 653  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA17"              |
| 654  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA18"              |
| 655  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA19"              |
| 656  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA20"              |
| 709  | getItem          | znodoTF,zmeta4object,znodoTF,"","TOTAL"               |
| 710  | getItem          | znodoTF,zmeta4object,znodoTF,"","ID_ITEM"             |
| 711  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA01"              |
| 712  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA02"              |
| 713  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA03"              |
| 714  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA04"              |
| 715  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA05"              |
| 716  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA06"              |
| 717  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA07"              |
| 718  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA08"              |
| 719  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA09"              |
| 720  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA10"              |
| 721  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA11"              |
| 722  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA12"              |
| 723  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA13"              |
| 724  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA14"              |
| 725  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA15"              |
| 726  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA16"              |
| 727  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA17"              |
| 728  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA18"              |
| 729  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA19"              |
| 730  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA20"              |
| 795  | getItem          | znodoRV,zmeta4object,znodoRV,"","TOTAL"               |
| 796  | getItem          | znodoRV,zmeta4object,znodoRV,"","ID_ITEM"             |
| 797  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA01"              |
| 798  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA02"              |
| 799  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA03"              |
| 800  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA04"              |
| 801  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA05"              |
| 802  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA06"              |
| 803  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA07"              |
| 804  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA08"              |
| 805  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA09"              |
| 806  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA10"              |
| 807  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA11"              |
| 808  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA12"              |
| 809  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA13"              |
| 810  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA14"              |
| 811  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA15"              |
| 812  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA16"              |
| 813  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA17"              |
| 814  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA18"              |
| 815  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA19"              |
| 816  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA20"              |
| 879  | getItem          | znodoTV,zmeta4object,znodoTV,"","TOTAL"               |
| 880  | getItem          | znodoTV,zmeta4object,znodoTV,"","ID_ITEM"             |
| 881  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA01"              |
| 882  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA02"              |
| 883  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA03"              |
| 884  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA04"              |
| 885  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA05"              |
| 886  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA06"              |
| 887  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA07"              |
| 888  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA08"              |
| 889  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA09"              |
| 890  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA10"              |
| 891  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA11"              |
| 892  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA12"              |
| 893  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA13"              |
| 894  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA14"              |
| 895  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA15"              |
| 896  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA16"              |
| 897  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA17"              |
| 898  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA18"              |
| 899  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA19"              |
| 900  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA20"              |
| 959  | getItem          | znodoBV,zmeta4object,znodoBV,"","ID_ITEM"             |
| 960  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA01"              |
| 961  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA02"              |
| 962  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA03"              |
| 963  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA04"              |
| 964  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA05"              |
| 965  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA06"              |
| 966  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA07"              |
| 967  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA08"              |
| 968  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA09"              |
| 969  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA10"              |
| 970  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA11"              |
| 971  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA12"              |
| 972  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA13"              |
| 973  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA14"              |
| 974  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA15"              |
| 975  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA16"              |
| 976  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA17"              |
| 977  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA18"              |
| 978  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA19"              |
| 979  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA20"              |
| 1052 | getItem          | znodoSS,zmeta4object,znodoSS,"","TOTAL"               |
| 1053 | getItem          | znodoSS,zmeta4object,znodoSS,"","ID_ITEM"             |
| 1054 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA01"              |
| 1055 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA02"              |
| 1056 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA03"              |
| 1057 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA04"              |
| 1058 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA05"              |
| 1059 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA06"              |
| 1060 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA07"              |
| 1061 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA08"              |
| 1062 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA09"              |
| 1063 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA10"              |
| 1064 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA11"              |
| 1065 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA12"              |
| 1066 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA13"              |
| 1067 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA14"              |
| 1068 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA15"              |
| 1069 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA16"              |
| 1070 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA17"              |
| 1071 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA18"              |
| 1072 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA19"              |
| 1073 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA20"              |
| 1151 | getItem          | znodoVE,zmeta4object,znodoVE,"","TOTAL"               |
| 1152 | getItem          | znodoVE,zmeta4object,znodoVE,"","ID_ITEM"             |
| 1153 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA01"              |
| 1154 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA02"              |
| 1155 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA03"              |
| 1156 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA04"              |
| 1157 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA05"              |
| 1158 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA06"              |
| 1159 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA07"              |
| 1160 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA08"              |
| 1161 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA09"              |
| 1162 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA10"              |
| 1163 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA11"              |
| 1164 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA12"              |
| 1165 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA13"              |
| 1166 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA14"              |
| 1167 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA15"              |
| 1168 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA16"              |
| 1169 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA17"              |
| 1170 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA18"              |
| 1171 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA19"              |
| 1172 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA20"              |
| 1277 | getItem          | znodoCS,zmeta4object,znodoCS,"","TOTAL"               |
| 1278 | getItem          | znodoCS,zmeta4object,znodoCS,"","ID_ITEM"             |
| 1279 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA01"              |
| 1280 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA02"              |
| 1281 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA03"              |
| 1282 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA04"              |
| 1283 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA05"              |
| 1284 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA06"              |
| 1285 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA07"              |
| 1286 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA08"              |
| 1287 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA09"              |
| 1288 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA10"              |
| 1289 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA11"              |
| 1290 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA12"              |
| 1291 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA13"              |
| 1292 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA14"              |
| 1293 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA15"              |
| 1294 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA16"              |
| 1295 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA17"              |
| 1296 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA18"              |
| 1297 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA19"              |
| 1298 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA20"              |
| 1402 | getItem          | znodoAY,zmeta4object,znodoAY,"","TOTAL"               |
| 1403 | getItem          | znodoAY,zmeta4object,znodoAY,"","ID_ITEM"             |
| 1404 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA01"              |
| 1405 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA02"              |
| 1406 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA03"              |
| 1407 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA04"              |
| 1408 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA05"              |
| 1409 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA06"              |
| 1410 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA07"              |
| 1411 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA08"              |
| 1412 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA09"              |
| 1413 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA10"              |
| 1414 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA11"              |
| 1415 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA12"              |
| 1416 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA13"              |
| 1417 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA14"              |
| 1418 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA15"              |
| 1419 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA16"              |
| 1420 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA17"              |
| 1421 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA18"              |
| 1422 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA19"              |
| 1423 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA20"              |
| 1549 | getItem          | znodoCM,zmeta4object,znodoCM,"","TOTAL"               |
| 1550 | getItem          | znodoCM,zmeta4object,znodoCM,"","ID_ITEM"             |
| 1551 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA01"              |
| 1552 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA02"              |
| 1553 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA03"              |
| 1554 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA04"              |
| 1555 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA05"              |
| 1556 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA06"              |
| 1557 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA07"              |
| 1558 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA08"              |
| 1559 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA09"              |
| 1560 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA10"              |
| 1561 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA11"              |
| 1562 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA12"              |
| 1563 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA13"              |
| 1564 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA14"              |
| 1565 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA15"              |
| 1566 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA16"              |
| 1567 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA17"              |
| 1568 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA18"              |
| 1569 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA19"              |
| 1570 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA20"              |
| 1649 | getItem          | znodoDK,zmeta4object,znodoDK,"","TOTAL"               |
| 1650 | getItem          | znodoDK,zmeta4object,znodoDK,"","ID_ITEM"             |
| 1651 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA01"              |
| 1652 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA02"              |
| 1653 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA03"              |
| 1654 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA04"              |
| 1655 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA05"              |
| 1656 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA06"              |
| 1657 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA07"              |
| 1658 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA08"              |
| 1659 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA09"              |
| 1660 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA10"              |
| 1661 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA11"              |
| 1662 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA12"              |
| 1663 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA13"              |
| 1664 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA14"              |
| 1665 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA15"              |
| 1666 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA16"              |
| 1667 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA17"              |
| 1668 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA18"              |
| 1669 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA19"              |
| 1670 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA20"              |
| 1750 | getItem          | znodoRF,zmeta4object,znodoRF,"","TOTAL"               |
| 1751 | getItem          | znodoRF,zmeta4object,znodoRF,"","ID_ITEM"             |
| 1752 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA01"              |
| 1753 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA02"              |
| 1754 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA03"              |
| 1755 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA04"              |
| 1756 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA05"              |
| 1757 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA06"              |
| 1758 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA07"              |
| 1759 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA08"              |
| 1760 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA09"              |
| 1761 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA10"              |
| 1762 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA11"              |
| 1763 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA12"              |
| 1764 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA13"              |
| 1765 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA14"              |
| 1766 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA15"              |
| 1767 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA16"              |
| 1768 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA17"              |
| 1769 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA18"              |
| 1770 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA19"              |
| 1771 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA20"              |
| 1846 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM"             |
| 1847 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","PAGA01"              |
| 1848 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","TOTAL"               |
| 1947 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 1948 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 1950 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 1956 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 1959 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 1963 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2102 | getItem          | znodoPE,zmeta4object,znodoPE,"","ID_ITEM"             |
| 2103 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2227 | getItem          | znodoIF,zmeta4object,znodoIF,"","ID_ITEM"             |
| 2228 | getItem          | znodoIF,zmeta4object,znodoIF,"","TOTAL"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 52  | guion   | cadena     |

| L    | Condición / acción / mensaje literal                                                                                                                                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14   | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";}                                                                                                                                                                                                                     |
| 326  | &lt;% if(zposicionsc &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 495  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 514  | &lt;% if(zposicioncc &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 585  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 601  | &lt;% if(zposicioncf &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 672  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 688  | &lt;% if(zposiciontf &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 758  | &lt;% if(zposicionrv &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 833  | if(contador == '&lt;%=zposicionrv%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 852  | &lt;% if(zposiciontv &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 940  | &lt;% if(zposicionbv &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1015 | &lt;% if(zposicionss &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1090 | if(contador == '&lt;%=zposicionss%&gt;') {ultimaFila = true;}                                                                                                                                                                                                                   |
| 1118 | &lt;% if(zposicionve &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1176 | if (i==0) { %&gt;                                                                                                                                                                                                                                                               |
| 1202 | if(contador == '&lt;%=zposicionve%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 1211 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                               |
| 1225 | if(contador == parseFloat('&lt;%=zposicionve%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                                  |
| 1256 | &lt;% if(zposicioncs &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1302 | if (i==0) { %&gt;                                                                                                                                                                                                                                                               |
| 1328 | if(contador == '&lt;%=zposicioncs%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 1337 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                               |
| 1350 | if(contador == parseFloat('&lt;%=zposicioncs%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                                  |
| 1381 | &lt;% if(zposicionay &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1427 | if (i==0) { %&gt;                                                                                                                                                                                                                                                               |
| 1457 | if(contador == '&lt;%=zposicionay%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 1467 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                               |
| 1480 | if(contador == parseFloat('&lt;%=zposicionay%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                                  |
| 1512 | &lt;% if(zposicioncm &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1587 | if(contador == '&lt;%=zposicioncm%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 1612 | &lt;% if(zposiciondk &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1687 | if(contador == '&lt;%=zposiciondk%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 1713 | &lt;% if(zposicionrf &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1788 | if(contador == '&lt;%=zposicionrf%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 1806 | &lt;% if(zposicioncj &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1870 | if(contador == '&lt;%=zposicioncj%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 1895 | &lt;% if(zposicionpe &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 1986 | if(contador == '&lt;%=zposicionpe%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 2013 | if(contador == '&lt;%=zposicionpe%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 2050 | &lt;% if(zposicionpe &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 2121 | if (concepto == "Aportación Ordinaria PPSE") {vOrdinaria = importe;}                                                                                                                                                                                                            |
| 2122 | if (concepto == "Aportacion Personal al PPSE") {vExtraordinaria = importe;}                                                                                                                                                                                                     |
| 2123 | if (concepto == "Aportación PPSE Ordinaria Acumulada") {vOrdinariaAcum = importe;}                                                                                                                                                                                              |
| 2124 | if (concepto == "Aportación PPSE Extraordinaria Acumulada") {vExtraordinariaAcum = importe;}                                                                                                                                                                                    |
| 2184 | &lt;% if(zposicionif &gt; 0) { %&gt;                                                                                                                                                                                                                                            |
| 2255 | if(contador == '&lt;%=zposicionif%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                                  |
| 88   | expresión de cálculo/transformación: String zoutputdefDP = zsubsesion + "!" + znodoDP + "[*]";                                                                                                                                                                                  |
| 89   | expresión de cálculo/transformación: String zmoveDP = znodoDP + ":" + znodoDP + "[FIRST]";                                                                                                                                                                                      |
| 93   | expresión de cálculo/transformación: String zoutputdefSC = zsubsesion + "!" + znodoSC + "[*]";                                                                                                                                                                                  |
| 94   | expresión de cálculo/transformación: String zmoveSC = znodoSC + ":" + znodoSC + "[FIRST]";                                                                                                                                                                                      |
| 98   | expresión de cálculo/transformación: String zoutputdefCC = zsubsesion + "!" + znodoCC + "[*]";                                                                                                                                                                                  |
| 99   | expresión de cálculo/transformación: String zmoveCC = znodoCC + ":" + znodoCC + "[FIRST]";                                                                                                                                                                                      |
| 103  | expresión de cálculo/transformación: String zoutputdefCF = zsubsesion + "!" + znodoCF + "[*]";                                                                                                                                                                                  |
| 104  | expresión de cálculo/transformación: String zmoveCF = znodoCF + ":" + znodoCF + "[FIRST]";                                                                                                                                                                                      |
| 108  | expresión de cálculo/transformación: String zoutputdefTF = zsubsesion + "!" + znodoTF + "[*]";                                                                                                                                                                                  |
| 109  | expresión de cálculo/transformación: String zmoveTF = znodoTF + ":" + znodoTF + "[FIRST]";                                                                                                                                                                                      |
| 113  | expresión de cálculo/transformación: String zoutputdefRV = zsubsesion + "!" + znodoRV + "[*]";                                                                                                                                                                                  |
| 114  | expresión de cálculo/transformación: String zmoveRV = znodoRV + ":" + znodoRV + "[FIRST]";                                                                                                                                                                                      |
| 118  | expresión de cálculo/transformación: String zoutputdefTV = zsubsesion + "!" + znodoTV + "[*]";                                                                                                                                                                                  |
| 119  | expresión de cálculo/transformación: String zmoveTV = znodoTV + ":" + znodoTV + "[FIRST]";                                                                                                                                                                                      |
| 123  | expresión de cálculo/transformación: String zoutputdefBV = zsubsesion + "!" + znodoBV + "[*]";                                                                                                                                                                                  |
| 124  | expresión de cálculo/transformación: String zmoveBV = znodoBV + ":" + znodoBV + "[FIRST]";                                                                                                                                                                                      |
| 128  | expresión de cálculo/transformación: String zoutputdefSS = zsubsesion + "!" + znodoSS + "[*]";                                                                                                                                                                                  |
| 129  | expresión de cálculo/transformación: String zmoveSS = znodoSS + ":" + znodoSS + "[FIRST]";                                                                                                                                                                                      |
| 133  | expresión de cálculo/transformación: String zoutputdefVE = zsubsesion + "!" + znodoVE + "[*]";                                                                                                                                                                                  |
| 134  | expresión de cálculo/transformación: String zmoveVE = znodoVE + ":" + znodoVE + "[FIRST]";                                                                                                                                                                                      |
| 138  | expresión de cálculo/transformación: String zoutputdefCS = zsubsesion + "!" + znodoCS + "[*]";                                                                                                                                                                                  |
| 139  | expresión de cálculo/transformación: String zmoveCS = znodoCS + ":" + znodoCS + "[FIRST]";                                                                                                                                                                                      |
| 143  | expresión de cálculo/transformación: String zoutputdefCJ = zsubsesion + "!" + znodoCJ + "[*]";                                                                                                                                                                                  |
| 144  | expresión de cálculo/transformación: String zmoveCJ = znodoCJ + ":" + znodoCJ + "[FIRST]";                                                                                                                                                                                      |
| 148  | expresión de cálculo/transformación: String zoutputdefPE = zsubsesion + "!" + znodoPE + "[*]";                                                                                                                                                                                  |
| 149  | expresión de cálculo/transformación: String zmovePE = znodoPE + ":" + znodoPE + "[FIRST]";                                                                                                                                                                                      |
| 153  | expresión de cálculo/transformación: String zoutputdefIF = zsubsesion + "!" + znodoIF + "[*]";                                                                                                                                                                                  |
| 154  | expresión de cálculo/transformación: String zmoveIF = znodoIF + ":" + znodoIF + "[FIRST]";                                                                                                                                                                                      |
| 157  | expresión de cálculo/transformación: String zoutputdefAY = zsubsesion + "!" + znodoAY + "[*]";                                                                                                                                                                                  |
| 158  | expresión de cálculo/transformación: String zmoveAY = znodoAY + ":" + znodoAY + "[FIRST]";                                                                                                                                                                                      |
| 162  | expresión de cálculo/transformación: String zoutputdefDK = zsubsesion + "!" + znodoDK + "[*]";                                                                                                                                                                                  |
| 163  | expresión de cálculo/transformación: String zmoveDK = znodoDK + ":" + znodoDK + "[FIRST]";                                                                                                                                                                                      |
| 167  | expresión de cálculo/transformación: String zoutputdefCM = zsubsesion + "!" + znodoCM + "[*]";                                                                                                                                                                                  |
| 168  | expresión de cálculo/transformación: String zmoveCM = znodoCM + ":" + znodoCM + "[FIRST]";                                                                                                                                                                                      |
| 172  | expresión de cálculo/transformación: String zoutputdefRF = zsubsesion + "!" + znodoRF + "[*]";                                                                                                                                                                                  |
| 173  | expresión de cálculo/transformación: String zmoveRF = znodoRF + ":" + znodoRF + "[FIRST]";                                                                                                                                                                                      |
| 323  | expresión de cálculo/transformación: String id = String.valueOf(zposiciondp - 1);                                                                                                                                                                                               |
| 392  | expresión de cálculo/transformación: NumColtotales = parseFloat(NumColtotales);                                                                                                                                                                                                 |
| 1842 | expresión de cálculo/transformación: id = String.valueOf(zposicioncj - 1);                                                                                                                                                                                                      |
| 1942 | expresión de cálculo/transformación: id = String.valueOf(zposicionpe - 1);                                                                                                                                                                                                      |
| 1953 | expresión de cálculo/transformación: id = String.valueOf(zposicionpe - 2);                                                                                                                                                                                                      |
| 1957 | expresión de cálculo/transformación: id = String.valueOf(zposicionpe - 3);                                                                                                                                                                                                      |
| 1961 | expresión de cálculo/transformación: id = String.valueOf(zposicionpe - 4);                                                                                                                                                                                                      |
| 1977 | expresión de cálculo/transformación: totalOrd = parseFloat('&lt;%=zPAGA01%&gt;');                                                                                                                                                                                               |
| 1978 | expresión de cálculo/transformación: totalExtr = parseFloat('&lt;%=zPAGA02%&gt;');                                                                                                                                                                                              |
| 1979 | expresión de cálculo/transformación: totaTotal = totalOrd + totalExtr;                                                                                                                                                                                                          |
| 1991 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                       |
| 1992 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + "el1" + '&lt;/td&gt;'); |
| 1993 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[1] + "el2" +'&lt;/td&gt;');  |
| 1994 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + total + '&lt;/td&gt;');                               |
| 2003 | expresión de cálculo/transformación: totalExtrAcum = parseFloat('&lt;%=zPAGA04%&gt;');                                                                                                                                                                                          |
| 2004 | expresión de cálculo/transformación: totalOrdAcum = parseFloat('&lt;%=zPAGA03%&gt;');                                                                                                                                                                                           |
| 2006 | expresión de cálculo/transformación: totaTotal = totalExtrAcum + totalOrdAcum;                                                                                                                                                                                                  |
| 2018 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto2 + '&lt;/td&gt;');                      |
| 2019 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores2[0] + "el3" +'&lt;/td&gt;'); |
| 2020 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores2[1] + "el4" +'&lt;/td&gt;'); |
| 2021 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + total2 + '&lt;/td&gt;');                              |
| 2026 | expresión de cálculo/transformación: totalOrdinario = totalOrd + totalOrdAcum                                                                                                                                                                                                   |
| 2027 | expresión de cálculo/transformación: totalExtraOrdinario = totalExtr + totalExtrAcum                                                                                                                                                                                            |
| 2028 | expresión de cálculo/transformación: totaldetotales = totalOrdinario + totalExtraOrdinario                                                                                                                                                                                      |
| 2116 | expresión de cálculo/transformación: importe = parseFloat('&lt;%=zTOTAL%&gt;');                                                                                                                                                                                                 |
| 2140 | expresión de cálculo/transformación: total = vOrdinaria + vExtraordinaria                                                                                                                                                                                                       |
| 2142 | expresión de cálculo/transformación: totalAcum = vOrdinariaAcum + vExtraordinariaAcum                                                                                                                                                                                           |
| 2144 | expresión de cálculo/transformación: totalOrdinario = totalOrd + totalOrdAcum                                                                                                                                                                                                   |
| 2146 | expresión de cálculo/transformación: totalExtraOrdinario = totalExtr + totalExtrAcum                                                                                                                                                                                            |
| 2148 | expresión de cálculo/transformación: totaldetotales = totalOrdinario + totalExtraOrdinario                                                                                                                                                                                      |
| 2155 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal1 + '&lt;/td&gt;');                       |
| 2156 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + vOrdinaria + '&lt;/td&gt;');         |
| 2157 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + vExtraordinaria +'&lt;/td&gt;');     |
| 2158 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + total + '&lt;/td&gt;');                               |
| 2163 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal2 + '&lt;/td&gt;');                       |
| 2164 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + vOrdinariaAcum + '&lt;/td&gt;');     |
| 2165 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + vExtraordinariaAcum +'&lt;/td&gt;'); |
| 2166 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + totalAcum + '&lt;/td&gt;');                           |
| 2244 | expresión de cálculo/transformación: totalAsumar = parseFloat(totalAsumar.replace("0000",""));                                                                                                                                                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 21  | /css/estilo_sse.css                 |
| 22  | /css/tabla.css                      |
| 23  | /css/style_persdata.css             |
| 24  | /library/jquery.js                  |
| 25  | /libreria/functions_proyecciones.js |
| 333 | /iconos/logo_cyc.jpg                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                                        |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| CYC    | 24  | /library/jquery.js                  | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                    |
| CYC    | 25  | /libreria/functions_proyecciones.js | contextual | [libreria/functions_proyecciones.js](../../transversal/dependencias/libreria--functions_proyecciones.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_inf_proyec_pepe_ppse.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
