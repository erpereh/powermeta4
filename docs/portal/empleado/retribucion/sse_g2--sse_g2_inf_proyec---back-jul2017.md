# PROYECCION TEÓRICA DE HABERES

Identificador: `sse_g2/sse_g2_inf_proyec - back jul2017.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp](<../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp>) | `de9306b1d04e6067ee4dc2182359f7980c7b8c09a3526540c6d5f19286b26016` |   2164 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp](<../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp>)   | `63f036084d9c1aa0b460670ebfb67230deab002270ab66aec6ef2e014438bd9f` |   2168 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp](<../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp>) | `de9306b1d04e6067ee4dc2182359f7980c7b8c09a3526540c6d5f19286b26016` |   2164 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp](<../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp>). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L    | Texto literal / etiqueta                                                  |
| ---- | ------------------------------------------------------------------------- |
| 20   | PROYECCION TEÓRICA DE HABERES                                             |
| 338  | PROYECCIÓN TEÓRICA HABERES AÑO [valor dinámico]                           |
| 403  | [valor dinámico] [valor dinámico] [valor dinámico]                        |
| 410  | CENTRO DE TRABAJO                                                         |
| 421  | RETRIBUCIÓN DIRECTA                                                       |
| 1124 | RETRIBUCIÓN INDIRECTA. Beneficios Sociales.                               |
| 1245 | Total                                                                     |
| 1380 | Total                                                                     |
| 1514 | Total                                                                     |
| 1838 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 1900 | Total                                                                     |
| 1931 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 2037 | Total                                                                     |
| 2065 | INVERSIÓN en FORMACIÓN                                                    |
| 2076 | Inversion Individual en Formacion                                         |
| 2135 | Total                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                          |
| --- | ------- | ---------------------------------- |
| 337 | img     | border=0; src=/iconos/logo_cyc.jpg |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 13  | anio            | getParameter(request,"anio") |

| L   | Variable             | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | -------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 13  | anio                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") |
| 66  | zsubsesion           | "CSP_RP_PROYECCIONES"                                            | CSP_RP_PROYECCIONES                                              |
| 67  | zmeta4object         | "CSP_RP_PROYECCIONES"                                            | CSP_RP_PROYECCIONES                                              |
| 68  | znodoDP              | "SSE_DATOS_PROYECCION"                                           | SSE_DATOS_PROYECCION                                             |
| 69  | znodoSC              | "CSP_SALARIO_CONVENIO"                                           | CSP_SALARIO_CONVENIO                                             |
| 70  | znodoCC              | "CSP_COMP_ORG"                                                   | CSP_COMP_ORG                                                     |
| 71  | znodoCF              | "CSP_COMP_FUNCIONAL"                                             | CSP_COMP_FUNCIONAL                                               |
| 72  | znodoTF              | "CSP_TOTAL_RET_FIJA"                                             | CSP_TOTAL_RET_FIJA                                               |
| 73  | znodoRV              | "CSP_RET_VAR"                                                    | CSP_RET_VAR                                                      |
| 74  | znodoTV              | "CSP_TOT_RET_VAR"                                                | CSP_TOT_RET_VAR                                                  |
| 75  | znodoBV              | "CSP_BASE_RET_VAR"                                               | CSP_BASE_RET_VAR                                                 |
| 76  | znodoSS              | "CSP_SEG_SOC"                                                    | CSP_SEG_SOC                                                      |
| 79  | znodoVE              | "CSP_VAL_ESPECIE"                                                | CSP_VAL_ESPECIE                                                  |
| 80  | znodoCS              | "CSP_CONTRATO_SEGUROS"                                           | CSP_CONTRATO_SEGUROS                                             |
| 81  | znodoCJ              | "CSP_COMPRO_JUB"                                                 | CSP_COMPRO_JUB                                                   |
| 82  | znodoPE              | "CSP_PLAN_PREV_EMP"                                              | CSP_PLAN_PREV_EMP                                                |
| 83  | znodoIF              | "CSP_INV_FORMACION"                                              | CSP_INV_FORMACION                                                |
| 84  | znodoAY              | "CSP_AYUDAS"                                                     | CSP_AYUDAS                                                       |
| 85  | znodoDK              | "CSP_DIET_KM"                                                    | CSP_DIET_KM                                                      |
| 86  | znodoCM              | "CSP_COMIDAS"                                                    | CSP_COMIDAS                                                      |
| 87  | znodoRF              | "CSP_RET_FLEX"                                                   | CSP_RET_FLEX                                                     |
| 89  | zmetodocarga         | zsubsesion +"!CSP_RP_PROYECCIONES.CSP_CARGA"                     | CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                |
| 92  | zoutputdefDP         | zsubsesion + "!" + znodoDP + "[*]"                               | CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}              |
| 93  | zmoveDP              | znodoDP + ":" + znodoDP + "[FIRST]"                              | SSE_DATOS_PROYECCION{":"}SSE_DATOS_PROYECCION{"[FIRST]"}         |
| 97  | zoutputdefSC         | zsubsesion + "!" + znodoSC + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}              |
| 98  | zmoveSC              | znodoSC + ":" + znodoSC + "[FIRST]"                              | CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"}         |
| 102 | zoutputdefCC         | zsubsesion + "!" + znodoCC + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                      |
| 103 | zmoveCC              | znodoCC + ":" + znodoCC + "[FIRST]"                              | CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                         |
| 107 | zoutputdefCF         | zsubsesion + "!" + znodoCF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                |
| 108 | zmoveCF              | znodoCF + ":" + znodoCF + "[FIRST]"                              | CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}             |
| 112 | zoutputdefTF         | zsubsesion + "!" + znodoTF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                |
| 113 | zmoveTF              | znodoTF + ":" + znodoTF + "[FIRST]"                              | CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}             |
| 117 | zoutputdefRV         | zsubsesion + "!" + znodoRV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                       |
| 118 | zmoveRV              | znodoRV + ":" + znodoRV + "[FIRST]"                              | CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                           |
| 122 | zoutputdefTV         | zsubsesion + "!" + znodoTV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                   |
| 123 | zmoveTV              | znodoTV + ":" + znodoTV + "[FIRST]"                              | CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}                   |
| 127 | zoutputdefBV         | zsubsesion + "!" + znodoBV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                  |
| 128 | zmoveBV              | znodoBV + ":" + znodoBV + "[FIRST]"                              | CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}                 |
| 132 | zoutputdefSS         | zsubsesion + "!" + znodoSS + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                       |
| 133 | zmoveSS              | znodoSS + ":" + znodoSS + "[FIRST]"                              | CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                           |
| 137 | zoutputdefVE         | zsubsesion + "!" + znodoVE + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                   |
| 138 | zmoveVE              | znodoVE + ":" + znodoVE + "[FIRST]"                              | CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}                   |
| 142 | zoutputdefCS         | zsubsesion + "!" + znodoCS + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}              |
| 143 | zmoveCS              | znodoCS + ":" + znodoCS + "[FIRST]"                              | CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"}         |
| 147 | zoutputdefCJ         | zsubsesion + "!" + znodoCJ + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                    |
| 148 | zmoveCJ              | znodoCJ + ":" + znodoCJ + "[FIRST]"                              | CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}                     |
| 152 | zoutputdefPE         | zsubsesion + "!" + znodoPE + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                 |
| 153 | zmovePE              | znodoPE + ":" + znodoPE + "[FIRST]"                              | CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}               |
| 157 | zoutputdefIF         | zsubsesion + "!" + znodoIF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                 |
| 158 | zmoveIF              | znodoIF + ":" + znodoIF + "[FIRST]"                              | CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}               |
| 161 | zoutputdefAY         | zsubsesion + "!" + znodoAY + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                        |
| 162 | zmoveAY              | znodoAY + ":" + znodoAY + "[FIRST]"                              | CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                             |
| 166 | zoutputdefDK         | zsubsesion + "!" + znodoDK + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                       |
| 167 | zmoveDK              | znodoDK + ":" + znodoDK + "[FIRST]"                              | CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                           |
| 171 | zoutputdefCM         | zsubsesion + "!" + znodoCM + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                       |
| 172 | zmoveCM              | znodoCM + ":" + znodoCM + "[FIRST]"                              | CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                           |
| 176 | zoutputdefRF         | zsubsesion + "!" + znodoRF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                      |
| 177 | zmoveRF              | znodoRF + ":" + znodoRF + "[FIRST]"                              | CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                         |
| 181 | zCSP_REAL            | ""                                                               |                                                                  |
| 182 | zPAGA_TOT            | ""                                                               |                                                                  |
| 183 | zPAGA01              | ""                                                               |                                                                  |
| 184 | zPAGA02              | ""                                                               |                                                                  |
| 185 | zPAGA03              | ""                                                               |                                                                  |
| 186 | zPAGA04              | ""                                                               |                                                                  |
| 187 | zPAGA05              | ""                                                               |                                                                  |
| 188 | zPAGA06              | ""                                                               |                                                                  |
| 189 | zPAGA07              | ""                                                               |                                                                  |
| 190 | zPAGA08              | ""                                                               |                                                                  |
| 191 | zPAGA09              | ""                                                               |                                                                  |
| 192 | zPAGA10              | ""                                                               |                                                                  |
| 193 | zPAGA11              | ""                                                               |                                                                  |
| 194 | zPAGA12              | ""                                                               |                                                                  |
| 195 | zPAGA13              | ""                                                               |                                                                  |
| 196 | zPAGA14              | ""                                                               |                                                                  |
| 197 | zPAGA15              | ""                                                               |                                                                  |
| 198 | zPAGA16              | ""                                                               |                                                                  |
| 199 | zPAGA17              | ""                                                               |                                                                  |
| 200 | zPAGA18              | ""                                                               |                                                                  |
| 201 | zPAGA19              | ""                                                               |                                                                  |
| 202 | zPAGA20              | ""                                                               |                                                                  |
| 203 | zSCO_N_WORK_LOCATION | ""                                                               |                                                                  |
| 204 | zSSP_NM_CATEGORIA    | ""                                                               |                                                                  |
| 205 | zSTD_ID_HR           | ""                                                               |                                                                  |
| 206 | zSTD_N_FAMILY_NAME_1 | ""                                                               |                                                                  |
| 207 | zSTD_N_FIRST_NAME    | ""                                                               |                                                                  |
| 208 | zSTD_OR_HR_PERIOD    | ""                                                               |                                                                  |
| 209 | zCSP_COUNT_COL       | ""                                                               |                                                                  |
| 210 | zID_ITEM             | ""                                                               |                                                                  |
| 212 | zID_ITEM_2           | ""                                                               |                                                                  |
| 214 | zTOTAL               | ""                                                               |                                                                  |
| 281 | zposiciondp          | 0                                                                | 0                                                                |
| 282 | zposicionsc          | 0                                                                | 0                                                                |
| 283 | zposicioncc          | 0                                                                | 0                                                                |
| 284 | zposicioncf          | 0                                                                | 0                                                                |
| 285 | zposiciontf          | 0                                                                | 0                                                                |
| 286 | zposicionrv          | 0                                                                | 0                                                                |
| 287 | zposiciontv          | 0                                                                | 0                                                                |
| 288 | zposicionbv          | 0                                                                | 0                                                                |
| 289 | zposicionss          | 0                                                                | 0                                                                |
| 290 | zposicionve          | 0                                                                | 0                                                                |
| 291 | zposicioncs          | 0                                                                | 0                                                                |
| 293 | zposicioncj          | 0                                                                | 0                                                                |
| 294 | zposicionpe          | 0                                                                | 0                                                                |
| 295 | zposicionif          | 0                                                                | 0                                                                |
| 296 | zposicionay          | 0                                                                | 0                                                                |
| 297 | zposiciondk          | 0                                                                | 0                                                                |
| 298 | zposicioncm          | 0                                                                | 0                                                                |
| 299 | zposicionrf          | 0                                                                | 0                                                                |
| 301 | i                    | 0                                                                | 0                                                                |
| 327 | id                   | String.valueOf(zposiciondp - 1)                                  | String.valueOf(zposiciondp - 1)                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------- |
| 220 | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                               |
| 222 | m4:beginjob  |                                                                                          |
| 223 | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                      |
| 232 | m4:exec      | m4method=CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                               |
| 234 | m4:outputdef | m4alias=SSE_DATOS_PROYECCION                                                             |
| 234 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                  |
| 235 | m4:outputdef | m4alias=CSP_SALARIO_CONVENIO                                                             |
| 235 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                  |
| 236 | m4:outputdef | m4alias=CSP_COMP_ORG                                                                     |
| 236 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                          |
| 237 | m4:outputdef | m4alias=CSP_COMP_FUNCIONAL                                                               |
| 237 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                    |
| 238 | m4:outputdef | m4alias=CSP_TOTAL_RET_FIJA                                                               |
| 238 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                    |
| 239 | m4:outputdef | m4alias=CSP_RET_VAR                                                                      |
| 239 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                           |
| 240 | m4:outputdef | m4alias=CSP_BASE_RET_VAR                                                                 |
| 240 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                      |
| 241 | m4:outputdef | m4alias=CSP_TOT_RET_VAR                                                                  |
| 241 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                       |
| 242 | m4:outputdef | m4alias=CSP_SEG_SOC                                                                      |
| 242 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                           |
| 243 | m4:outputdef | m4alias=CSP_VAL_ESPECIE                                                                  |
| 243 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                       |
| 244 | m4:outputdef | m4alias=CSP_CONTRATO_SEGUROS                                                             |
| 244 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                  |
| 245 | m4:outputdef | m4alias=CSP_COMPRO_JUB                                                                   |
| 245 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                        |
| 246 | m4:outputdef | m4alias=CSP_PLAN_PREV_EMP                                                                |
| 246 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                     |
| 247 | m4:outputdef | m4alias=CSP_INV_FORMACION                                                                |
| 247 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                     |
| 248 | m4:outputdef | m4alias=CSP_AYUDAS                                                                       |
| 248 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                            |
| 249 | m4:outputdef | m4alias=CSP_DIET_KM                                                                      |
| 249 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                           |
| 250 | m4:outputdef | m4alias=CSP_COMIDAS                                                                      |
| 250 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                           |
| 251 | m4:outputdef | m4alias=CSP_RET_FLEX                                                                     |
| 251 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                          |
| 253 | m4:endjob    |                                                                                          |
| 255 | m4:move      |                                                                                          |
| 255 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 256 | m4:move      |                                                                                          |
| 256 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 257 | m4:move      |                                                                                          |
| 257 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                 |
| 258 | m4:move      |                                                                                          |
| 258 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}     |
| 259 | m4:move      |                                                                                          |
| 259 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}     |
| 260 | m4:move      |                                                                                          |
| 260 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                   |
| 261 | m4:move      |                                                                                          |
| 261 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}           |
| 262 | m4:move      |                                                                                          |
| 262 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}         |
| 263 | m4:move      |                                                                                          |
| 263 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                   |
| 264 | m4:move      |                                                                                          |
| 264 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}           |
| 265 | m4:move      |                                                                                          |
| 265 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"} |
| 266 | m4:move      |                                                                                          |
| 266 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}             |
| 267 | m4:move      |                                                                                          |
| 267 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}       |
| 268 | m4:move      |                                                                                          |
| 268 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}       |
| 269 | m4:move      |                                                                                          |
| 269 | m4:param     | name=CSP_RP_PROYECCIONES; value=SSE_DATOS_PROYECCION                                     |
| 270 | m4:move      |                                                                                          |
| 270 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                     |
| 271 | m4:move      |                                                                                          |
| 271 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                   |
| 272 | m4:move      |                                                                                          |
| 272 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                   |
| 273 | m4:move      |                                                                                          |
| 273 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                 |

| L    | Operación        | Argumentos literales                                  |
| ---- | ---------------- | ----------------------------------------------------- |
| 228  | setItem          | zsubsesion,zsubsesion,"","ANIO",anio                  |
| 305  | getCountInClient | znodoDP,zsubsesion,znodoDP                            |
| 306  | getCountInClient | znodoSC,zsubsesion,znodoSC                            |
| 307  | getCountInClient | znodoCC,zsubsesion,znodoCC                            |
| 308  | getCountInClient | znodoCF,zsubsesion,znodoCF                            |
| 309  | getCountInClient | znodoTF,zsubsesion,znodoTF                            |
| 310  | getCountInClient | znodoRV,zsubsesion,znodoRV                            |
| 311  | getCountInClient | znodoTV,zsubsesion,znodoTV                            |
| 312  | getCountInClient | znodoBV,zsubsesion,znodoBV                            |
| 313  | getCountInClient | znodoSS,zsubsesion,znodoSS                            |
| 314  | getCountInClient | znodoVE,zsubsesion,znodoVE                            |
| 315  | getCountInClient | znodoCS,zsubsesion,znodoCS                            |
| 317  | getCountInClient | znodoCJ,zsubsesion,znodoCJ                            |
| 318  | getCountInClient | znodoPE,zsubsesion,znodoPE                            |
| 319  | getCountInClient | znodoIF,zsubsesion,znodoIF                            |
| 320  | getCountInClient | znodoAY,zsubsesion,znodoAY                            |
| 321  | getCountInClient | znodoDK,zsubsesion,znodoDK                            |
| 322  | getCountInClient | znodoCM,zsubsesion,znodoCM                            |
| 323  | getCountInClient | znodoRF,zsubsesion,znodoRF                            |
| 357  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_REAL"            |
| 358  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA_TOT"            |
| 359  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA01"              |
| 360  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA02"              |
| 361  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA03"              |
| 362  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA04"              |
| 363  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA05"              |
| 364  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA06"              |
| 365  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA07"              |
| 366  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA08"              |
| 367  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA09"              |
| 368  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA10"              |
| 369  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA11"              |
| 370  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA12"              |
| 371  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA13"              |
| 372  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA14"              |
| 373  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA15"              |
| 374  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA16"              |
| 375  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA17"              |
| 376  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA18"              |
| 377  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA19"              |
| 378  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA20"              |
| 379  | getItem          | znodoDP,zmeta4object,znodoDP,"","SCO_N_WORK_LOCATION" |
| 380  | getItem          | znodoDP,zmeta4object,znodoDP,"","SSP_NM_CATEGORIA"    |
| 381  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_ID_HR"           |
| 382  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FAMILY_NAME_1" |
| 383  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FIRST_NAME"    |
| 384  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_OR_HR_PERIOD"    |
| 385  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_COUNT_COL"       |
| 461  | getItem          | znodoSC,zmeta4object,znodoSC,"","TOTAL"               |
| 462  | getItem          | znodoSC,zmeta4object,znodoSC,"","ID_ITEM"             |
| 463  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA01"              |
| 464  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA02"              |
| 465  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA03"              |
| 466  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA04"              |
| 467  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA05"              |
| 468  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA06"              |
| 469  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA07"              |
| 470  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA08"              |
| 471  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA09"              |
| 472  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA10"              |
| 473  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA11"              |
| 474  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA12"              |
| 475  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA13"              |
| 476  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA14"              |
| 477  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA15"              |
| 478  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA16"              |
| 479  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA17"              |
| 480  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA18"              |
| 481  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA19"              |
| 482  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA20"              |
| 552  | getItem          | znodoCC,zmeta4object,znodoCC,"","TOTAL"               |
| 553  | getItem          | znodoCC,zmeta4object,znodoCC,"","ID_ITEM"             |
| 554  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA01"              |
| 555  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA02"              |
| 556  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA03"              |
| 557  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA04"              |
| 558  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA05"              |
| 559  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA06"              |
| 560  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA07"              |
| 561  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA08"              |
| 562  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA09"              |
| 563  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA10"              |
| 564  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA11"              |
| 565  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA12"              |
| 566  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA13"              |
| 567  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA14"              |
| 568  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA15"              |
| 569  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA16"              |
| 570  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA17"              |
| 571  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA18"              |
| 572  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA19"              |
| 573  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA20"              |
| 639  | getItem          | znodoCF,zmeta4object,znodoCF,"","TOTAL"               |
| 640  | getItem          | znodoCF,zmeta4object,znodoCF,"","ID_ITEM"             |
| 641  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA01"              |
| 642  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA02"              |
| 643  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA03"              |
| 644  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA04"              |
| 645  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA05"              |
| 646  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA06"              |
| 647  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA07"              |
| 648  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA08"              |
| 649  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA09"              |
| 650  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA10"              |
| 651  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA11"              |
| 652  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA12"              |
| 653  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA13"              |
| 654  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA14"              |
| 655  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA15"              |
| 656  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA16"              |
| 657  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA17"              |
| 658  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA18"              |
| 659  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA19"              |
| 660  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA20"              |
| 713  | getItem          | znodoTF,zmeta4object,znodoTF,"","TOTAL"               |
| 714  | getItem          | znodoTF,zmeta4object,znodoTF,"","ID_ITEM"             |
| 715  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA01"              |
| 716  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA02"              |
| 717  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA03"              |
| 718  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA04"              |
| 719  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA05"              |
| 720  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA06"              |
| 721  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA07"              |
| 722  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA08"              |
| 723  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA09"              |
| 724  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA10"              |
| 725  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA11"              |
| 726  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA12"              |
| 727  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA13"              |
| 728  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA14"              |
| 729  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA15"              |
| 730  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA16"              |
| 731  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA17"              |
| 732  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA18"              |
| 733  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA19"              |
| 734  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA20"              |
| 799  | getItem          | znodoRV,zmeta4object,znodoRV,"","TOTAL"               |
| 800  | getItem          | znodoRV,zmeta4object,znodoRV,"","ID_ITEM"             |
| 801  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA01"              |
| 802  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA02"              |
| 803  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA03"              |
| 804  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA04"              |
| 805  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA05"              |
| 806  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA06"              |
| 807  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA07"              |
| 808  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA08"              |
| 809  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA09"              |
| 810  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA10"              |
| 811  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA11"              |
| 812  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA12"              |
| 813  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA13"              |
| 814  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA14"              |
| 815  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA15"              |
| 816  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA16"              |
| 817  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA17"              |
| 818  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA18"              |
| 819  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA19"              |
| 820  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA20"              |
| 883  | getItem          | znodoTV,zmeta4object,znodoTV,"","TOTAL"               |
| 884  | getItem          | znodoTV,zmeta4object,znodoTV,"","ID_ITEM"             |
| 885  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA01"              |
| 886  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA02"              |
| 887  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA03"              |
| 888  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA04"              |
| 889  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA05"              |
| 890  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA06"              |
| 891  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA07"              |
| 892  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA08"              |
| 893  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA09"              |
| 894  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA10"              |
| 895  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA11"              |
| 896  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA12"              |
| 897  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA13"              |
| 898  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA14"              |
| 899  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA15"              |
| 900  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA16"              |
| 901  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA17"              |
| 902  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA18"              |
| 903  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA19"              |
| 904  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA20"              |
| 963  | getItem          | znodoBV,zmeta4object,znodoBV,"","ID_ITEM"             |
| 964  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA01"              |
| 965  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA02"              |
| 966  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA03"              |
| 967  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA04"              |
| 968  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA05"              |
| 969  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA06"              |
| 970  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA07"              |
| 971  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA08"              |
| 972  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA09"              |
| 973  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA10"              |
| 974  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA11"              |
| 975  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA12"              |
| 976  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA13"              |
| 977  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA14"              |
| 978  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA15"              |
| 979  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA16"              |
| 980  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA17"              |
| 981  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA18"              |
| 982  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA19"              |
| 983  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA20"              |
| 1056 | getItem          | znodoSS,zmeta4object,znodoSS,"","TOTAL"               |
| 1057 | getItem          | znodoSS,zmeta4object,znodoSS,"","ID_ITEM"             |
| 1058 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA01"              |
| 1059 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA02"              |
| 1060 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA03"              |
| 1061 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA04"              |
| 1062 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA05"              |
| 1063 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA06"              |
| 1064 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA07"              |
| 1065 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA08"              |
| 1066 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA09"              |
| 1067 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA10"              |
| 1068 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA11"              |
| 1069 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA12"              |
| 1070 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA13"              |
| 1071 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA14"              |
| 1072 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA15"              |
| 1073 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA16"              |
| 1074 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA17"              |
| 1075 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA18"              |
| 1076 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA19"              |
| 1077 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA20"              |
| 1155 | getItem          | znodoVE,zmeta4object,znodoVE,"","TOTAL"               |
| 1156 | getItem          | znodoVE,zmeta4object,znodoVE,"","ID_ITEM"             |
| 1157 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA01"              |
| 1158 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA02"              |
| 1159 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA03"              |
| 1160 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA04"              |
| 1161 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA05"              |
| 1162 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA06"              |
| 1163 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA07"              |
| 1164 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA08"              |
| 1165 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA09"              |
| 1166 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA10"              |
| 1167 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA11"              |
| 1168 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA12"              |
| 1169 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA13"              |
| 1170 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA14"              |
| 1171 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA15"              |
| 1172 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA16"              |
| 1173 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA17"              |
| 1174 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA18"              |
| 1175 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA19"              |
| 1176 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA20"              |
| 1281 | getItem          | znodoCS,zmeta4object,znodoCS,"","TOTAL"               |
| 1282 | getItem          | znodoCS,zmeta4object,znodoCS,"","ID_ITEM"             |
| 1283 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA01"              |
| 1284 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA02"              |
| 1285 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA03"              |
| 1286 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA04"              |
| 1287 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA05"              |
| 1288 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA06"              |
| 1289 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA07"              |
| 1290 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA08"              |
| 1291 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA09"              |
| 1292 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA10"              |
| 1293 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA11"              |
| 1294 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA12"              |
| 1295 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA13"              |
| 1296 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA14"              |
| 1297 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA15"              |
| 1298 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA16"              |
| 1299 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA17"              |
| 1300 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA18"              |
| 1301 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA19"              |
| 1302 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA20"              |
| 1419 | getItem          | znodoAY,zmeta4object,znodoAY,"","TOTAL"               |
| 1420 | getItem          | znodoAY,zmeta4object,znodoAY,"","ID_ITEM"             |
| 1421 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA01"              |
| 1422 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA02"              |
| 1423 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA03"              |
| 1424 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA04"              |
| 1425 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA05"              |
| 1426 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA06"              |
| 1427 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA07"              |
| 1428 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA08"              |
| 1429 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA09"              |
| 1430 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA10"              |
| 1431 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA11"              |
| 1432 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA12"              |
| 1433 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA13"              |
| 1434 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA14"              |
| 1435 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA15"              |
| 1436 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA16"              |
| 1437 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA17"              |
| 1438 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA18"              |
| 1439 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA19"              |
| 1440 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA20"              |
| 1566 | getItem          | znodoCM,zmeta4object,znodoCM,"","TOTAL"               |
| 1567 | getItem          | znodoCM,zmeta4object,znodoCM,"","ID_ITEM"             |
| 1568 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA01"              |
| 1569 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA02"              |
| 1570 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA03"              |
| 1571 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA04"              |
| 1572 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA05"              |
| 1573 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA06"              |
| 1574 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA07"              |
| 1575 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA08"              |
| 1576 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA09"              |
| 1577 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA10"              |
| 1578 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA11"              |
| 1579 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA12"              |
| 1580 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA13"              |
| 1581 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA14"              |
| 1582 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA15"              |
| 1583 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA16"              |
| 1584 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA17"              |
| 1585 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA18"              |
| 1586 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA19"              |
| 1587 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA20"              |
| 1666 | getItem          | znodoDK,zmeta4object,znodoDK,"","TOTAL"               |
| 1667 | getItem          | znodoDK,zmeta4object,znodoDK,"","ID_ITEM"             |
| 1668 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA01"              |
| 1669 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA02"              |
| 1670 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA03"              |
| 1671 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA04"              |
| 1672 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA05"              |
| 1673 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA06"              |
| 1674 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA07"              |
| 1675 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA08"              |
| 1676 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA09"              |
| 1677 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA10"              |
| 1678 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA11"              |
| 1679 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA12"              |
| 1680 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA13"              |
| 1681 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA14"              |
| 1682 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA15"              |
| 1683 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA16"              |
| 1684 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA17"              |
| 1685 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA18"              |
| 1686 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA19"              |
| 1687 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA20"              |
| 1767 | getItem          | znodoRF,zmeta4object,znodoRF,"","TOTAL"               |
| 1768 | getItem          | znodoRF,zmeta4object,znodoRF,"","ID_ITEM"             |
| 1769 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA01"              |
| 1770 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA02"              |
| 1771 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA03"              |
| 1772 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA04"              |
| 1773 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA05"              |
| 1774 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA06"              |
| 1775 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA07"              |
| 1776 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA08"              |
| 1777 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA09"              |
| 1778 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA10"              |
| 1779 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA11"              |
| 1780 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA12"              |
| 1781 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA13"              |
| 1782 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA14"              |
| 1783 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA15"              |
| 1784 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA16"              |
| 1785 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA17"              |
| 1786 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA18"              |
| 1787 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA19"              |
| 1788 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA20"              |
| 1863 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM"             |
| 1864 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","PAGA01"              |
| 1865 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","TOTAL"               |
| 1970 | getItem          | znodoPE,zmeta4object,znodoPE,"","ID_ITEM"             |
| 1971 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2092 | getItem          | znodoIF,zmeta4object,znodoIF,"","ID_ITEM"             |
| 2093 | getItem          | znodoIF,zmeta4object,znodoIF,"","TOTAL"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 56  | guion   | cadena     |

| L    | Condición / acción / mensaje literal                                                                                                                                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14   | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";}                                                                                                                                                                                                             |
| 330  | &lt;% if(zposicionsc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 499  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 518  | &lt;% if(zposicioncc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 589  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 605  | &lt;% if(zposicioncf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 676  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 692  | &lt;% if(zposiciontf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 762  | &lt;% if(zposicionrv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 837  | if(contador == '&lt;%=zposicionrv%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 856  | &lt;% if(zposiciontv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 944  | &lt;% if(zposicionbv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1019 | &lt;% if(zposicionss &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1094 | if(contador == '&lt;%=zposicionss%&gt;') {ultimaFila = true;}                                                                                                                                                                                                           |
| 1122 | &lt;% if(zposicionve &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1180 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1206 | if(contador == '&lt;%=zposicionve%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1215 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1229 | if(contador == parseFloat('&lt;%=zposicionve%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1260 | &lt;% if(zposicioncs &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1306 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1334 | if(contador == '&lt;%=zposicioncs%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1347 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1359 | if(contador == parseFloat('&lt;%=zposicioncs%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1398 | &lt;% if(zposicionay &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1444 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1474 | if(contador == '&lt;%=zposicionay%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1484 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1497 | if(contador == parseFloat('&lt;%=zposicionay%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1529 | &lt;% if(zposicioncm &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1604 | if(contador == '&lt;%=zposicioncm%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1629 | &lt;% if(zposiciondk &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1704 | if(contador == '&lt;%=zposiciondk%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1730 | &lt;% if(zposicionrf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1805 | if(contador == '&lt;%=zposicionrf%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1823 | &lt;% if(zposicioncj &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1887 | if(contador == '&lt;%=zposicioncj%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1912 | &lt;% if(zposicionpe &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1985 | if (concepto == "Aportación Ordinaria PPSE") {vOrdinaria = importe;}                                                                                                                                                                                                    |
| 1986 | if (concepto == "Aportacion Personal al PPSE") {vExtraordinaria = importe;}                                                                                                                                                                                             |
| 1987 | if (concepto == "Aportación PPSE Ordinaria Acumulada") {vOrdinariaAcum = importe;}                                                                                                                                                                                      |
| 1988 | if (concepto == "Aportación PPSE Extraordinaria Acumulada") {vExtraordinariaAcum = importe;}                                                                                                                                                                            |
| 1992 | if (vExtraordinaria &gt; vOrdinaria) {vExtraordinaria = vOrdinaria;}                                                                                                                                                                                                    |
| 2049 | &lt;% if(zposicionif &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2120 | if(contador == '&lt;%=zposicionif%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 92   | expresión de cálculo/transformación: String zoutputdefDP = zsubsesion + "!" + znodoDP + "[*]";                                                                                                                                                                          |
| 93   | expresión de cálculo/transformación: String zmoveDP = znodoDP + ":" + znodoDP + "[FIRST]";                                                                                                                                                                              |
| 97   | expresión de cálculo/transformación: String zoutputdefSC = zsubsesion + "!" + znodoSC + "[*]";                                                                                                                                                                          |
| 98   | expresión de cálculo/transformación: String zmoveSC = znodoSC + ":" + znodoSC + "[FIRST]";                                                                                                                                                                              |
| 102  | expresión de cálculo/transformación: String zoutputdefCC = zsubsesion + "!" + znodoCC + "[*]";                                                                                                                                                                          |
| 103  | expresión de cálculo/transformación: String zmoveCC = znodoCC + ":" + znodoCC + "[FIRST]";                                                                                                                                                                              |
| 107  | expresión de cálculo/transformación: String zoutputdefCF = zsubsesion + "!" + znodoCF + "[*]";                                                                                                                                                                          |
| 108  | expresión de cálculo/transformación: String zmoveCF = znodoCF + ":" + znodoCF + "[FIRST]";                                                                                                                                                                              |
| 112  | expresión de cálculo/transformación: String zoutputdefTF = zsubsesion + "!" + znodoTF + "[*]";                                                                                                                                                                          |
| 113  | expresión de cálculo/transformación: String zmoveTF = znodoTF + ":" + znodoTF + "[FIRST]";                                                                                                                                                                              |
| 117  | expresión de cálculo/transformación: String zoutputdefRV = zsubsesion + "!" + znodoRV + "[*]";                                                                                                                                                                          |
| 118  | expresión de cálculo/transformación: String zmoveRV = znodoRV + ":" + znodoRV + "[FIRST]";                                                                                                                                                                              |
| 122  | expresión de cálculo/transformación: String zoutputdefTV = zsubsesion + "!" + znodoTV + "[*]";                                                                                                                                                                          |
| 123  | expresión de cálculo/transformación: String zmoveTV = znodoTV + ":" + znodoTV + "[FIRST]";                                                                                                                                                                              |
| 127  | expresión de cálculo/transformación: String zoutputdefBV = zsubsesion + "!" + znodoBV + "[*]";                                                                                                                                                                          |
| 128  | expresión de cálculo/transformación: String zmoveBV = znodoBV + ":" + znodoBV + "[FIRST]";                                                                                                                                                                              |
| 132  | expresión de cálculo/transformación: String zoutputdefSS = zsubsesion + "!" + znodoSS + "[*]";                                                                                                                                                                          |
| 133  | expresión de cálculo/transformación: String zmoveSS = znodoSS + ":" + znodoSS + "[FIRST]";                                                                                                                                                                              |
| 137  | expresión de cálculo/transformación: String zoutputdefVE = zsubsesion + "!" + znodoVE + "[*]";                                                                                                                                                                          |
| 138  | expresión de cálculo/transformación: String zmoveVE = znodoVE + ":" + znodoVE + "[FIRST]";                                                                                                                                                                              |
| 142  | expresión de cálculo/transformación: String zoutputdefCS = zsubsesion + "!" + znodoCS + "[*]";                                                                                                                                                                          |
| 143  | expresión de cálculo/transformación: String zmoveCS = znodoCS + ":" + znodoCS + "[FIRST]";                                                                                                                                                                              |
| 147  | expresión de cálculo/transformación: String zoutputdefCJ = zsubsesion + "!" + znodoCJ + "[*]";                                                                                                                                                                          |
| 148  | expresión de cálculo/transformación: String zmoveCJ = znodoCJ + ":" + znodoCJ + "[FIRST]";                                                                                                                                                                              |
| 152  | expresión de cálculo/transformación: String zoutputdefPE = zsubsesion + "!" + znodoPE + "[*]";                                                                                                                                                                          |
| 153  | expresión de cálculo/transformación: String zmovePE = znodoPE + ":" + znodoPE + "[FIRST]";                                                                                                                                                                              |
| 157  | expresión de cálculo/transformación: String zoutputdefIF = zsubsesion + "!" + znodoIF + "[*]";                                                                                                                                                                          |
| 158  | expresión de cálculo/transformación: String zmoveIF = znodoIF + ":" + znodoIF + "[FIRST]";                                                                                                                                                                              |
| 161  | expresión de cálculo/transformación: String zoutputdefAY = zsubsesion + "!" + znodoAY + "[*]";                                                                                                                                                                          |
| 162  | expresión de cálculo/transformación: String zmoveAY = znodoAY + ":" + znodoAY + "[FIRST]";                                                                                                                                                                              |
| 166  | expresión de cálculo/transformación: String zoutputdefDK = zsubsesion + "!" + znodoDK + "[*]";                                                                                                                                                                          |
| 167  | expresión de cálculo/transformación: String zmoveDK = znodoDK + ":" + znodoDK + "[FIRST]";                                                                                                                                                                              |
| 171  | expresión de cálculo/transformación: String zoutputdefCM = zsubsesion + "!" + znodoCM + "[*]";                                                                                                                                                                          |
| 172  | expresión de cálculo/transformación: String zmoveCM = znodoCM + ":" + znodoCM + "[FIRST]";                                                                                                                                                                              |
| 176  | expresión de cálculo/transformación: String zoutputdefRF = zsubsesion + "!" + znodoRF + "[*]";                                                                                                                                                                          |
| 177  | expresión de cálculo/transformación: String zmoveRF = znodoRF + ":" + znodoRF + "[FIRST]";                                                                                                                                                                              |
| 327  | expresión de cálculo/transformación: String id = String.valueOf(zposiciondp - 1);                                                                                                                                                                                       |
| 396  | expresión de cálculo/transformación: NumColtotales = parseFloat(NumColtotales);                                                                                                                                                                                         |
| 1859 | expresión de cálculo/transformación: id = String.valueOf(zposicioncj - 1);                                                                                                                                                                                              |
| 1982 | expresión de cálculo/transformación: importe = parseFloat('&lt;%=zTOTAL%&gt;');                                                                                                                                                                                         |
| 1997 | expresión de cálculo/transformación: total = vOrdinaria + vExtraordinaria;                                                                                                                                                                                              |
| 1998 | expresión de cálculo/transformación: totalAcum = vOrdinariaAcum + vExtraordinariaAcum;                                                                                                                                                                                  |
| 1999 | expresión de cálculo/transformación: totalOrdinario = vOrdinaria + vOrdinariaAcum;                                                                                                                                                                                      |
| 2000 | expresión de cálculo/transformación: totalExtraOrdinario = vExtraordinaria + vExtraordinariaAcum;                                                                                                                                                                       |
| 2001 | expresión de cálculo/transformación: totaldetotales = totalOrdinario + totalExtraOrdinario;                                                                                                                                                                             |
| 2020 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal1 + '&lt;/td&gt;');               |
| 2021 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;'); |
| 2022 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[1] +'&lt;/td&gt;');  |
| 2023 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[0] + '&lt;/td&gt;');           |
| 2029 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal2 + '&lt;/td&gt;');               |
| 2030 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[2] + '&lt;/td&gt;'); |
| 2031 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[3] +'&lt;/td&gt;');  |
| 2032 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[1] + '&lt;/td&gt;');           |
| 2109 | expresión de cálculo/transformación: totalAsumar = parseFloat(totalAsumar.replace("0000",""));                                                                                                                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 21  | /css/estilo_sse.css                 |
| 22  | /css/tabla.css                      |
| 23  | /css/style_persdata.css             |
| 24  | /library/jquery.js                  |
| 25  | /libreria/functions_proyecciones.js |
| 337 | /iconos/logo_cyc.jpg                |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp](<../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec - back jul2017.jsp>). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L    | Texto literal / etiqueta                                                  |
| ---- | ------------------------------------------------------------------------- |
| 24   | PROYECCION TEÓRICA DE HABERES                                             |
| 342  | PROYECCIÓN TEÓRICA HABERES AÑO [valor dinámico]                           |
| 407  | [valor dinámico] [valor dinámico] [valor dinámico]                        |
| 414  | CENTRO DE TRABAJO                                                         |
| 425  | RETRIBUCIÓN DIRECTA                                                       |
| 1128 | RETRIBUCIÓN INDIRECTA. Beneficios Sociales.                               |
| 1249 | Total                                                                     |
| 1384 | Total                                                                     |
| 1518 | Total                                                                     |
| 1842 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 1904 | Total                                                                     |
| 1935 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 2041 | Total                                                                     |
| 2069 | INVERSIÓN en FORMACIÓN                                                    |
| 2080 | Inversion Individual en Formacion                                         |
| 2139 | Total                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                          |
| --- | ------- | ---------------------------------- |
| 341 | img     | border=0; src=/iconos/logo_cyc.jpg |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 13  | anio            | getParameter(request,"anio") |

| L   | Variable             | Expresión fuente                                                 | Resolución estática parcial                                      |
| --- | -------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| 13  | anio                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio") |
| 70  | zsubsesion           | "CSP_RP_PROYECCIONES"                                            | CSP_RP_PROYECCIONES                                              |
| 71  | zmeta4object         | "CSP_RP_PROYECCIONES"                                            | CSP_RP_PROYECCIONES                                              |
| 72  | znodoDP              | "SSE_DATOS_PROYECCION"                                           | SSE_DATOS_PROYECCION                                             |
| 73  | znodoSC              | "CSP_SALARIO_CONVENIO"                                           | CSP_SALARIO_CONVENIO                                             |
| 74  | znodoCC              | "CSP_COMP_ORG"                                                   | CSP_COMP_ORG                                                     |
| 75  | znodoCF              | "CSP_COMP_FUNCIONAL"                                             | CSP_COMP_FUNCIONAL                                               |
| 76  | znodoTF              | "CSP_TOTAL_RET_FIJA"                                             | CSP_TOTAL_RET_FIJA                                               |
| 77  | znodoRV              | "CSP_RET_VAR"                                                    | CSP_RET_VAR                                                      |
| 78  | znodoTV              | "CSP_TOT_RET_VAR"                                                | CSP_TOT_RET_VAR                                                  |
| 79  | znodoBV              | "CSP_BASE_RET_VAR"                                               | CSP_BASE_RET_VAR                                                 |
| 80  | znodoSS              | "CSP_SEG_SOC"                                                    | CSP_SEG_SOC                                                      |
| 83  | znodoVE              | "CSP_VAL_ESPECIE"                                                | CSP_VAL_ESPECIE                                                  |
| 84  | znodoCS              | "CSP_CONTRATO_SEGUROS"                                           | CSP_CONTRATO_SEGUROS                                             |
| 85  | znodoCJ              | "CSP_COMPRO_JUB"                                                 | CSP_COMPRO_JUB                                                   |
| 86  | znodoPE              | "CSP_PLAN_PREV_EMP"                                              | CSP_PLAN_PREV_EMP                                                |
| 87  | znodoIF              | "CSP_INV_FORMACION"                                              | CSP_INV_FORMACION                                                |
| 88  | znodoAY              | "CSP_AYUDAS"                                                     | CSP_AYUDAS                                                       |
| 89  | znodoDK              | "CSP_DIET_KM"                                                    | CSP_DIET_KM                                                      |
| 90  | znodoCM              | "CSP_COMIDAS"                                                    | CSP_COMIDAS                                                      |
| 91  | znodoRF              | "CSP_RET_FLEX"                                                   | CSP_RET_FLEX                                                     |
| 93  | zmetodocarga         | zsubsesion +"!CSP_RP_PROYECCIONES.CSP_CARGA"                     | CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                |
| 96  | zoutputdefDP         | zsubsesion + "!" + znodoDP + "[*]"                               | CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}              |
| 97  | zmoveDP              | znodoDP + ":" + znodoDP + "[FIRST]"                              | SSE_DATOS_PROYECCION{":"}SSE_DATOS_PROYECCION{"[FIRST]"}         |
| 101 | zoutputdefSC         | zsubsesion + "!" + znodoSC + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}              |
| 102 | zmoveSC              | znodoSC + ":" + znodoSC + "[FIRST]"                              | CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"}         |
| 106 | zoutputdefCC         | zsubsesion + "!" + znodoCC + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                      |
| 107 | zmoveCC              | znodoCC + ":" + znodoCC + "[FIRST]"                              | CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                         |
| 111 | zoutputdefCF         | zsubsesion + "!" + znodoCF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                |
| 112 | zmoveCF              | znodoCF + ":" + znodoCF + "[FIRST]"                              | CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}             |
| 116 | zoutputdefTF         | zsubsesion + "!" + znodoTF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                |
| 117 | zmoveTF              | znodoTF + ":" + znodoTF + "[FIRST]"                              | CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}             |
| 121 | zoutputdefRV         | zsubsesion + "!" + znodoRV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                       |
| 122 | zmoveRV              | znodoRV + ":" + znodoRV + "[FIRST]"                              | CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                           |
| 126 | zoutputdefTV         | zsubsesion + "!" + znodoTV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                   |
| 127 | zmoveTV              | znodoTV + ":" + znodoTV + "[FIRST]"                              | CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}                   |
| 131 | zoutputdefBV         | zsubsesion + "!" + znodoBV + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                  |
| 132 | zmoveBV              | znodoBV + ":" + znodoBV + "[FIRST]"                              | CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}                 |
| 136 | zoutputdefSS         | zsubsesion + "!" + znodoSS + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                       |
| 137 | zmoveSS              | znodoSS + ":" + znodoSS + "[FIRST]"                              | CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                           |
| 141 | zoutputdefVE         | zsubsesion + "!" + znodoVE + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                   |
| 142 | zmoveVE              | znodoVE + ":" + znodoVE + "[FIRST]"                              | CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}                   |
| 146 | zoutputdefCS         | zsubsesion + "!" + znodoCS + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}              |
| 147 | zmoveCS              | znodoCS + ":" + znodoCS + "[FIRST]"                              | CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"}         |
| 151 | zoutputdefCJ         | zsubsesion + "!" + znodoCJ + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                    |
| 152 | zmoveCJ              | znodoCJ + ":" + znodoCJ + "[FIRST]"                              | CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}                     |
| 156 | zoutputdefPE         | zsubsesion + "!" + znodoPE + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                 |
| 157 | zmovePE              | znodoPE + ":" + znodoPE + "[FIRST]"                              | CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}               |
| 161 | zoutputdefIF         | zsubsesion + "!" + znodoIF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                 |
| 162 | zmoveIF              | znodoIF + ":" + znodoIF + "[FIRST]"                              | CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}               |
| 165 | zoutputdefAY         | zsubsesion + "!" + znodoAY + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                        |
| 166 | zmoveAY              | znodoAY + ":" + znodoAY + "[FIRST]"                              | CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                             |
| 170 | zoutputdefDK         | zsubsesion + "!" + znodoDK + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                       |
| 171 | zmoveDK              | znodoDK + ":" + znodoDK + "[FIRST]"                              | CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                           |
| 175 | zoutputdefCM         | zsubsesion + "!" + znodoCM + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                       |
| 176 | zmoveCM              | znodoCM + ":" + znodoCM + "[FIRST]"                              | CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                           |
| 180 | zoutputdefRF         | zsubsesion + "!" + znodoRF + "[*]"                               | CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                      |
| 181 | zmoveRF              | znodoRF + ":" + znodoRF + "[FIRST]"                              | CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                         |
| 185 | zCSP_REAL            | ""                                                               |                                                                  |
| 186 | zPAGA_TOT            | ""                                                               |                                                                  |
| 187 | zPAGA01              | ""                                                               |                                                                  |
| 188 | zPAGA02              | ""                                                               |                                                                  |
| 189 | zPAGA03              | ""                                                               |                                                                  |
| 190 | zPAGA04              | ""                                                               |                                                                  |
| 191 | zPAGA05              | ""                                                               |                                                                  |
| 192 | zPAGA06              | ""                                                               |                                                                  |
| 193 | zPAGA07              | ""                                                               |                                                                  |
| 194 | zPAGA08              | ""                                                               |                                                                  |
| 195 | zPAGA09              | ""                                                               |                                                                  |
| 196 | zPAGA10              | ""                                                               |                                                                  |
| 197 | zPAGA11              | ""                                                               |                                                                  |
| 198 | zPAGA12              | ""                                                               |                                                                  |
| 199 | zPAGA13              | ""                                                               |                                                                  |
| 200 | zPAGA14              | ""                                                               |                                                                  |
| 201 | zPAGA15              | ""                                                               |                                                                  |
| 202 | zPAGA16              | ""                                                               |                                                                  |
| 203 | zPAGA17              | ""                                                               |                                                                  |
| 204 | zPAGA18              | ""                                                               |                                                                  |
| 205 | zPAGA19              | ""                                                               |                                                                  |
| 206 | zPAGA20              | ""                                                               |                                                                  |
| 207 | zSCO_N_WORK_LOCATION | ""                                                               |                                                                  |
| 208 | zSSP_NM_CATEGORIA    | ""                                                               |                                                                  |
| 209 | zSTD_ID_HR           | ""                                                               |                                                                  |
| 210 | zSTD_N_FAMILY_NAME_1 | ""                                                               |                                                                  |
| 211 | zSTD_N_FIRST_NAME    | ""                                                               |                                                                  |
| 212 | zSTD_OR_HR_PERIOD    | ""                                                               |                                                                  |
| 213 | zCSP_COUNT_COL       | ""                                                               |                                                                  |
| 214 | zID_ITEM             | ""                                                               |                                                                  |
| 216 | zID_ITEM_2           | ""                                                               |                                                                  |
| 218 | zTOTAL               | ""                                                               |                                                                  |
| 285 | zposiciondp          | 0                                                                | 0                                                                |
| 286 | zposicionsc          | 0                                                                | 0                                                                |
| 287 | zposicioncc          | 0                                                                | 0                                                                |
| 288 | zposicioncf          | 0                                                                | 0                                                                |
| 289 | zposiciontf          | 0                                                                | 0                                                                |
| 290 | zposicionrv          | 0                                                                | 0                                                                |
| 291 | zposiciontv          | 0                                                                | 0                                                                |
| 292 | zposicionbv          | 0                                                                | 0                                                                |
| 293 | zposicionss          | 0                                                                | 0                                                                |
| 294 | zposicionve          | 0                                                                | 0                                                                |
| 295 | zposicioncs          | 0                                                                | 0                                                                |
| 297 | zposicioncj          | 0                                                                | 0                                                                |
| 298 | zposicionpe          | 0                                                                | 0                                                                |
| 299 | zposicionif          | 0                                                                | 0                                                                |
| 300 | zposicionay          | 0                                                                | 0                                                                |
| 301 | zposiciondk          | 0                                                                | 0                                                                |
| 302 | zposicioncm          | 0                                                                | 0                                                                |
| 303 | zposicionrf          | 0                                                                | 0                                                                |
| 305 | i                    | 0                                                                | 0                                                                |
| 331 | id                   | String.valueOf(zposiciondp - 1)                                  | String.valueOf(zposiciondp - 1)                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------- |
| 224 | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                               |
| 226 | m4:beginjob  |                                                                                          |
| 227 | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                      |
| 236 | m4:exec      | m4method=CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                               |
| 238 | m4:outputdef | m4alias=SSE_DATOS_PROYECCION                                                             |
| 238 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                  |
| 239 | m4:outputdef | m4alias=CSP_SALARIO_CONVENIO                                                             |
| 239 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                  |
| 240 | m4:outputdef | m4alias=CSP_COMP_ORG                                                                     |
| 240 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                          |
| 241 | m4:outputdef | m4alias=CSP_COMP_FUNCIONAL                                                               |
| 241 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                    |
| 242 | m4:outputdef | m4alias=CSP_TOTAL_RET_FIJA                                                               |
| 242 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                    |
| 243 | m4:outputdef | m4alias=CSP_RET_VAR                                                                      |
| 243 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                           |
| 244 | m4:outputdef | m4alias=CSP_BASE_RET_VAR                                                                 |
| 244 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                      |
| 245 | m4:outputdef | m4alias=CSP_TOT_RET_VAR                                                                  |
| 245 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                       |
| 246 | m4:outputdef | m4alias=CSP_SEG_SOC                                                                      |
| 246 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                           |
| 247 | m4:outputdef | m4alias=CSP_VAL_ESPECIE                                                                  |
| 247 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                       |
| 248 | m4:outputdef | m4alias=CSP_CONTRATO_SEGUROS                                                             |
| 248 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                  |
| 249 | m4:outputdef | m4alias=CSP_COMPRO_JUB                                                                   |
| 249 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                        |
| 250 | m4:outputdef | m4alias=CSP_PLAN_PREV_EMP                                                                |
| 250 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                     |
| 251 | m4:outputdef | m4alias=CSP_INV_FORMACION                                                                |
| 251 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                     |
| 252 | m4:outputdef | m4alias=CSP_AYUDAS                                                                       |
| 252 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                            |
| 253 | m4:outputdef | m4alias=CSP_DIET_KM                                                                      |
| 253 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                           |
| 254 | m4:outputdef | m4alias=CSP_COMIDAS                                                                      |
| 254 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                           |
| 255 | m4:outputdef | m4alias=CSP_RET_FLEX                                                                     |
| 255 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                          |
| 257 | m4:endjob    |                                                                                          |
| 259 | m4:move      |                                                                                          |
| 259 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 260 | m4:move      |                                                                                          |
| 260 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 261 | m4:move      |                                                                                          |
| 261 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                 |
| 262 | m4:move      |                                                                                          |
| 262 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}     |
| 263 | m4:move      |                                                                                          |
| 263 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}     |
| 264 | m4:move      |                                                                                          |
| 264 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                   |
| 265 | m4:move      |                                                                                          |
| 265 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}           |
| 266 | m4:move      |                                                                                          |
| 266 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}         |
| 267 | m4:move      |                                                                                          |
| 267 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                   |
| 268 | m4:move      |                                                                                          |
| 268 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}           |
| 269 | m4:move      |                                                                                          |
| 269 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"} |
| 270 | m4:move      |                                                                                          |
| 270 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}             |
| 271 | m4:move      |                                                                                          |
| 271 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}       |
| 272 | m4:move      |                                                                                          |
| 272 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}       |
| 273 | m4:move      |                                                                                          |
| 273 | m4:param     | name=CSP_RP_PROYECCIONES; value=SSE_DATOS_PROYECCION                                     |
| 274 | m4:move      |                                                                                          |
| 274 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                     |
| 275 | m4:move      |                                                                                          |
| 275 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                   |
| 276 | m4:move      |                                                                                          |
| 276 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                   |
| 277 | m4:move      |                                                                                          |
| 277 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                 |

| L    | Operación        | Argumentos literales                                  |
| ---- | ---------------- | ----------------------------------------------------- |
| 232  | setItem          | zsubsesion,zsubsesion,"","ANIO",anio                  |
| 309  | getCountInClient | znodoDP,zsubsesion,znodoDP                            |
| 310  | getCountInClient | znodoSC,zsubsesion,znodoSC                            |
| 311  | getCountInClient | znodoCC,zsubsesion,znodoCC                            |
| 312  | getCountInClient | znodoCF,zsubsesion,znodoCF                            |
| 313  | getCountInClient | znodoTF,zsubsesion,znodoTF                            |
| 314  | getCountInClient | znodoRV,zsubsesion,znodoRV                            |
| 315  | getCountInClient | znodoTV,zsubsesion,znodoTV                            |
| 316  | getCountInClient | znodoBV,zsubsesion,znodoBV                            |
| 317  | getCountInClient | znodoSS,zsubsesion,znodoSS                            |
| 318  | getCountInClient | znodoVE,zsubsesion,znodoVE                            |
| 319  | getCountInClient | znodoCS,zsubsesion,znodoCS                            |
| 321  | getCountInClient | znodoCJ,zsubsesion,znodoCJ                            |
| 322  | getCountInClient | znodoPE,zsubsesion,znodoPE                            |
| 323  | getCountInClient | znodoIF,zsubsesion,znodoIF                            |
| 324  | getCountInClient | znodoAY,zsubsesion,znodoAY                            |
| 325  | getCountInClient | znodoDK,zsubsesion,znodoDK                            |
| 326  | getCountInClient | znodoCM,zsubsesion,znodoCM                            |
| 327  | getCountInClient | znodoRF,zsubsesion,znodoRF                            |
| 361  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_REAL"            |
| 362  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA_TOT"            |
| 363  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA01"              |
| 364  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA02"              |
| 365  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA03"              |
| 366  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA04"              |
| 367  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA05"              |
| 368  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA06"              |
| 369  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA07"              |
| 370  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA08"              |
| 371  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA09"              |
| 372  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA10"              |
| 373  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA11"              |
| 374  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA12"              |
| 375  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA13"              |
| 376  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA14"              |
| 377  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA15"              |
| 378  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA16"              |
| 379  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA17"              |
| 380  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA18"              |
| 381  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA19"              |
| 382  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA20"              |
| 383  | getItem          | znodoDP,zmeta4object,znodoDP,"","SCO_N_WORK_LOCATION" |
| 384  | getItem          | znodoDP,zmeta4object,znodoDP,"","SSP_NM_CATEGORIA"    |
| 385  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_ID_HR"           |
| 386  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FAMILY_NAME_1" |
| 387  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FIRST_NAME"    |
| 388  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_OR_HR_PERIOD"    |
| 389  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_COUNT_COL"       |
| 465  | getItem          | znodoSC,zmeta4object,znodoSC,"","TOTAL"               |
| 466  | getItem          | znodoSC,zmeta4object,znodoSC,"","ID_ITEM"             |
| 467  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA01"              |
| 468  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA02"              |
| 469  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA03"              |
| 470  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA04"              |
| 471  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA05"              |
| 472  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA06"              |
| 473  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA07"              |
| 474  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA08"              |
| 475  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA09"              |
| 476  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA10"              |
| 477  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA11"              |
| 478  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA12"              |
| 479  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA13"              |
| 480  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA14"              |
| 481  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA15"              |
| 482  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA16"              |
| 483  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA17"              |
| 484  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA18"              |
| 485  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA19"              |
| 486  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA20"              |
| 556  | getItem          | znodoCC,zmeta4object,znodoCC,"","TOTAL"               |
| 557  | getItem          | znodoCC,zmeta4object,znodoCC,"","ID_ITEM"             |
| 558  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA01"              |
| 559  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA02"              |
| 560  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA03"              |
| 561  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA04"              |
| 562  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA05"              |
| 563  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA06"              |
| 564  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA07"              |
| 565  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA08"              |
| 566  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA09"              |
| 567  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA10"              |
| 568  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA11"              |
| 569  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA12"              |
| 570  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA13"              |
| 571  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA14"              |
| 572  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA15"              |
| 573  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA16"              |
| 574  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA17"              |
| 575  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA18"              |
| 576  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA19"              |
| 577  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA20"              |
| 643  | getItem          | znodoCF,zmeta4object,znodoCF,"","TOTAL"               |
| 644  | getItem          | znodoCF,zmeta4object,znodoCF,"","ID_ITEM"             |
| 645  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA01"              |
| 646  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA02"              |
| 647  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA03"              |
| 648  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA04"              |
| 649  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA05"              |
| 650  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA06"              |
| 651  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA07"              |
| 652  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA08"              |
| 653  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA09"              |
| 654  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA10"              |
| 655  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA11"              |
| 656  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA12"              |
| 657  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA13"              |
| 658  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA14"              |
| 659  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA15"              |
| 660  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA16"              |
| 661  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA17"              |
| 662  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA18"              |
| 663  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA19"              |
| 664  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA20"              |
| 717  | getItem          | znodoTF,zmeta4object,znodoTF,"","TOTAL"               |
| 718  | getItem          | znodoTF,zmeta4object,znodoTF,"","ID_ITEM"             |
| 719  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA01"              |
| 720  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA02"              |
| 721  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA03"              |
| 722  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA04"              |
| 723  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA05"              |
| 724  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA06"              |
| 725  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA07"              |
| 726  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA08"              |
| 727  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA09"              |
| 728  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA10"              |
| 729  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA11"              |
| 730  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA12"              |
| 731  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA13"              |
| 732  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA14"              |
| 733  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA15"              |
| 734  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA16"              |
| 735  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA17"              |
| 736  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA18"              |
| 737  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA19"              |
| 738  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA20"              |
| 803  | getItem          | znodoRV,zmeta4object,znodoRV,"","TOTAL"               |
| 804  | getItem          | znodoRV,zmeta4object,znodoRV,"","ID_ITEM"             |
| 805  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA01"              |
| 806  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA02"              |
| 807  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA03"              |
| 808  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA04"              |
| 809  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA05"              |
| 810  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA06"              |
| 811  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA07"              |
| 812  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA08"              |
| 813  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA09"              |
| 814  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA10"              |
| 815  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA11"              |
| 816  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA12"              |
| 817  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA13"              |
| 818  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA14"              |
| 819  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA15"              |
| 820  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA16"              |
| 821  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA17"              |
| 822  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA18"              |
| 823  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA19"              |
| 824  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA20"              |
| 887  | getItem          | znodoTV,zmeta4object,znodoTV,"","TOTAL"               |
| 888  | getItem          | znodoTV,zmeta4object,znodoTV,"","ID_ITEM"             |
| 889  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA01"              |
| 890  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA02"              |
| 891  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA03"              |
| 892  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA04"              |
| 893  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA05"              |
| 894  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA06"              |
| 895  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA07"              |
| 896  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA08"              |
| 897  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA09"              |
| 898  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA10"              |
| 899  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA11"              |
| 900  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA12"              |
| 901  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA13"              |
| 902  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA14"              |
| 903  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA15"              |
| 904  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA16"              |
| 905  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA17"              |
| 906  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA18"              |
| 907  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA19"              |
| 908  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA20"              |
| 967  | getItem          | znodoBV,zmeta4object,znodoBV,"","ID_ITEM"             |
| 968  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA01"              |
| 969  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA02"              |
| 970  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA03"              |
| 971  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA04"              |
| 972  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA05"              |
| 973  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA06"              |
| 974  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA07"              |
| 975  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA08"              |
| 976  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA09"              |
| 977  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA10"              |
| 978  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA11"              |
| 979  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA12"              |
| 980  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA13"              |
| 981  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA14"              |
| 982  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA15"              |
| 983  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA16"              |
| 984  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA17"              |
| 985  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA18"              |
| 986  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA19"              |
| 987  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA20"              |
| 1060 | getItem          | znodoSS,zmeta4object,znodoSS,"","TOTAL"               |
| 1061 | getItem          | znodoSS,zmeta4object,znodoSS,"","ID_ITEM"             |
| 1062 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA01"              |
| 1063 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA02"              |
| 1064 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA03"              |
| 1065 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA04"              |
| 1066 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA05"              |
| 1067 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA06"              |
| 1068 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA07"              |
| 1069 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA08"              |
| 1070 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA09"              |
| 1071 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA10"              |
| 1072 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA11"              |
| 1073 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA12"              |
| 1074 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA13"              |
| 1075 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA14"              |
| 1076 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA15"              |
| 1077 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA16"              |
| 1078 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA17"              |
| 1079 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA18"              |
| 1080 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA19"              |
| 1081 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA20"              |
| 1159 | getItem          | znodoVE,zmeta4object,znodoVE,"","TOTAL"               |
| 1160 | getItem          | znodoVE,zmeta4object,znodoVE,"","ID_ITEM"             |
| 1161 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA01"              |
| 1162 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA02"              |
| 1163 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA03"              |
| 1164 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA04"              |
| 1165 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA05"              |
| 1166 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA06"              |
| 1167 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA07"              |
| 1168 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA08"              |
| 1169 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA09"              |
| 1170 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA10"              |
| 1171 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA11"              |
| 1172 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA12"              |
| 1173 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA13"              |
| 1174 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA14"              |
| 1175 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA15"              |
| 1176 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA16"              |
| 1177 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA17"              |
| 1178 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA18"              |
| 1179 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA19"              |
| 1180 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA20"              |
| 1285 | getItem          | znodoCS,zmeta4object,znodoCS,"","TOTAL"               |
| 1286 | getItem          | znodoCS,zmeta4object,znodoCS,"","ID_ITEM"             |
| 1287 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA01"              |
| 1288 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA02"              |
| 1289 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA03"              |
| 1290 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA04"              |
| 1291 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA05"              |
| 1292 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA06"              |
| 1293 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA07"              |
| 1294 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA08"              |
| 1295 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA09"              |
| 1296 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA10"              |
| 1297 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA11"              |
| 1298 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA12"              |
| 1299 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA13"              |
| 1300 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA14"              |
| 1301 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA15"              |
| 1302 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA16"              |
| 1303 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA17"              |
| 1304 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA18"              |
| 1305 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA19"              |
| 1306 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA20"              |
| 1423 | getItem          | znodoAY,zmeta4object,znodoAY,"","TOTAL"               |
| 1424 | getItem          | znodoAY,zmeta4object,znodoAY,"","ID_ITEM"             |
| 1425 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA01"              |
| 1426 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA02"              |
| 1427 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA03"              |
| 1428 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA04"              |
| 1429 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA05"              |
| 1430 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA06"              |
| 1431 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA07"              |
| 1432 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA08"              |
| 1433 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA09"              |
| 1434 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA10"              |
| 1435 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA11"              |
| 1436 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA12"              |
| 1437 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA13"              |
| 1438 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA14"              |
| 1439 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA15"              |
| 1440 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA16"              |
| 1441 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA17"              |
| 1442 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA18"              |
| 1443 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA19"              |
| 1444 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA20"              |
| 1570 | getItem          | znodoCM,zmeta4object,znodoCM,"","TOTAL"               |
| 1571 | getItem          | znodoCM,zmeta4object,znodoCM,"","ID_ITEM"             |
| 1572 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA01"              |
| 1573 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA02"              |
| 1574 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA03"              |
| 1575 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA04"              |
| 1576 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA05"              |
| 1577 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA06"              |
| 1578 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA07"              |
| 1579 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA08"              |
| 1580 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA09"              |
| 1581 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA10"              |
| 1582 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA11"              |
| 1583 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA12"              |
| 1584 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA13"              |
| 1585 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA14"              |
| 1586 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA15"              |
| 1587 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA16"              |
| 1588 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA17"              |
| 1589 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA18"              |
| 1590 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA19"              |
| 1591 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA20"              |
| 1670 | getItem          | znodoDK,zmeta4object,znodoDK,"","TOTAL"               |
| 1671 | getItem          | znodoDK,zmeta4object,znodoDK,"","ID_ITEM"             |
| 1672 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA01"              |
| 1673 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA02"              |
| 1674 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA03"              |
| 1675 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA04"              |
| 1676 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA05"              |
| 1677 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA06"              |
| 1678 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA07"              |
| 1679 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA08"              |
| 1680 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA09"              |
| 1681 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA10"              |
| 1682 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA11"              |
| 1683 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA12"              |
| 1684 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA13"              |
| 1685 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA14"              |
| 1686 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA15"              |
| 1687 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA16"              |
| 1688 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA17"              |
| 1689 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA18"              |
| 1690 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA19"              |
| 1691 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA20"              |
| 1771 | getItem          | znodoRF,zmeta4object,znodoRF,"","TOTAL"               |
| 1772 | getItem          | znodoRF,zmeta4object,znodoRF,"","ID_ITEM"             |
| 1773 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA01"              |
| 1774 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA02"              |
| 1775 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA03"              |
| 1776 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA04"              |
| 1777 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA05"              |
| 1778 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA06"              |
| 1779 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA07"              |
| 1780 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA08"              |
| 1781 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA09"              |
| 1782 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA10"              |
| 1783 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA11"              |
| 1784 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA12"              |
| 1785 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA13"              |
| 1786 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA14"              |
| 1787 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA15"              |
| 1788 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA16"              |
| 1789 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA17"              |
| 1790 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA18"              |
| 1791 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA19"              |
| 1792 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA20"              |
| 1867 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM"             |
| 1868 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","PAGA01"              |
| 1869 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","TOTAL"               |
| 1974 | getItem          | znodoPE,zmeta4object,znodoPE,"","ID_ITEM"             |
| 1975 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2096 | getItem          | znodoIF,zmeta4object,znodoIF,"","ID_ITEM"             |
| 2097 | getItem          | znodoIF,zmeta4object,znodoIF,"","TOTAL"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 60  | guion   | cadena     |

| L    | Condición / acción / mensaje literal                                                                                                                                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14   | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";}                                                                                                                                                                                                             |
| 334  | &lt;% if(zposicionsc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 503  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 522  | &lt;% if(zposicioncc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 593  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 609  | &lt;% if(zposicioncf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 680  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 696  | &lt;% if(zposiciontf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 766  | &lt;% if(zposicionrv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 841  | if(contador == '&lt;%=zposicionrv%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 860  | &lt;% if(zposiciontv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 948  | &lt;% if(zposicionbv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1023 | &lt;% if(zposicionss &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1098 | if(contador == '&lt;%=zposicionss%&gt;') {ultimaFila = true;}                                                                                                                                                                                                           |
| 1126 | &lt;% if(zposicionve &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1184 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1210 | if(contador == '&lt;%=zposicionve%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1219 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1233 | if(contador == parseFloat('&lt;%=zposicionve%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1264 | &lt;% if(zposicioncs &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1310 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1338 | if(contador == '&lt;%=zposicioncs%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1351 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1363 | if(contador == parseFloat('&lt;%=zposicioncs%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1402 | &lt;% if(zposicionay &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1448 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1478 | if(contador == '&lt;%=zposicionay%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1488 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1501 | if(contador == parseFloat('&lt;%=zposicionay%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1533 | &lt;% if(zposicioncm &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1608 | if(contador == '&lt;%=zposicioncm%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1633 | &lt;% if(zposiciondk &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1708 | if(contador == '&lt;%=zposiciondk%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1734 | &lt;% if(zposicionrf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1809 | if(contador == '&lt;%=zposicionrf%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1827 | &lt;% if(zposicioncj &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1891 | if(contador == '&lt;%=zposicioncj%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1916 | &lt;% if(zposicionpe &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1989 | if (concepto == "Aportación Ordinaria PPSE") {vOrdinaria = importe;}                                                                                                                                                                                                    |
| 1990 | if (concepto == "Aportación Extraordinaria PPSE") {vExtraordinaria = importe;}                                                                                                                                                                                          |
| 1991 | if (concepto == "Aportación PPSE Ordinaria Acumulada") {vOrdinariaAcum = importe;}                                                                                                                                                                                      |
| 1992 | if (concepto == "Aportación PPSE Extraordinaria Acumulada") {vExtraordinariaAcum = importe;}                                                                                                                                                                            |
| 1996 | if (vExtraordinaria &gt; vOrdinaria) {vExtraordinaria = vOrdinaria;}                                                                                                                                                                                                    |
| 2053 | &lt;% if(zposicionif &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2124 | if(contador == '&lt;%=zposicionif%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 96   | expresión de cálculo/transformación: String zoutputdefDP = zsubsesion + "!" + znodoDP + "[*]";                                                                                                                                                                          |
| 97   | expresión de cálculo/transformación: String zmoveDP = znodoDP + ":" + znodoDP + "[FIRST]";                                                                                                                                                                              |
| 101  | expresión de cálculo/transformación: String zoutputdefSC = zsubsesion + "!" + znodoSC + "[*]";                                                                                                                                                                          |
| 102  | expresión de cálculo/transformación: String zmoveSC = znodoSC + ":" + znodoSC + "[FIRST]";                                                                                                                                                                              |
| 106  | expresión de cálculo/transformación: String zoutputdefCC = zsubsesion + "!" + znodoCC + "[*]";                                                                                                                                                                          |
| 107  | expresión de cálculo/transformación: String zmoveCC = znodoCC + ":" + znodoCC + "[FIRST]";                                                                                                                                                                              |
| 111  | expresión de cálculo/transformación: String zoutputdefCF = zsubsesion + "!" + znodoCF + "[*]";                                                                                                                                                                          |
| 112  | expresión de cálculo/transformación: String zmoveCF = znodoCF + ":" + znodoCF + "[FIRST]";                                                                                                                                                                              |
| 116  | expresión de cálculo/transformación: String zoutputdefTF = zsubsesion + "!" + znodoTF + "[*]";                                                                                                                                                                          |
| 117  | expresión de cálculo/transformación: String zmoveTF = znodoTF + ":" + znodoTF + "[FIRST]";                                                                                                                                                                              |
| 121  | expresión de cálculo/transformación: String zoutputdefRV = zsubsesion + "!" + znodoRV + "[*]";                                                                                                                                                                          |
| 122  | expresión de cálculo/transformación: String zmoveRV = znodoRV + ":" + znodoRV + "[FIRST]";                                                                                                                                                                              |
| 126  | expresión de cálculo/transformación: String zoutputdefTV = zsubsesion + "!" + znodoTV + "[*]";                                                                                                                                                                          |
| 127  | expresión de cálculo/transformación: String zmoveTV = znodoTV + ":" + znodoTV + "[FIRST]";                                                                                                                                                                              |
| 131  | expresión de cálculo/transformación: String zoutputdefBV = zsubsesion + "!" + znodoBV + "[*]";                                                                                                                                                                          |
| 132  | expresión de cálculo/transformación: String zmoveBV = znodoBV + ":" + znodoBV + "[FIRST]";                                                                                                                                                                              |
| 136  | expresión de cálculo/transformación: String zoutputdefSS = zsubsesion + "!" + znodoSS + "[*]";                                                                                                                                                                          |
| 137  | expresión de cálculo/transformación: String zmoveSS = znodoSS + ":" + znodoSS + "[FIRST]";                                                                                                                                                                              |
| 141  | expresión de cálculo/transformación: String zoutputdefVE = zsubsesion + "!" + znodoVE + "[*]";                                                                                                                                                                          |
| 142  | expresión de cálculo/transformación: String zmoveVE = znodoVE + ":" + znodoVE + "[FIRST]";                                                                                                                                                                              |
| 146  | expresión de cálculo/transformación: String zoutputdefCS = zsubsesion + "!" + znodoCS + "[*]";                                                                                                                                                                          |
| 147  | expresión de cálculo/transformación: String zmoveCS = znodoCS + ":" + znodoCS + "[FIRST]";                                                                                                                                                                              |
| 151  | expresión de cálculo/transformación: String zoutputdefCJ = zsubsesion + "!" + znodoCJ + "[*]";                                                                                                                                                                          |
| 152  | expresión de cálculo/transformación: String zmoveCJ = znodoCJ + ":" + znodoCJ + "[FIRST]";                                                                                                                                                                              |
| 156  | expresión de cálculo/transformación: String zoutputdefPE = zsubsesion + "!" + znodoPE + "[*]";                                                                                                                                                                          |
| 157  | expresión de cálculo/transformación: String zmovePE = znodoPE + ":" + znodoPE + "[FIRST]";                                                                                                                                                                              |
| 161  | expresión de cálculo/transformación: String zoutputdefIF = zsubsesion + "!" + znodoIF + "[*]";                                                                                                                                                                          |
| 162  | expresión de cálculo/transformación: String zmoveIF = znodoIF + ":" + znodoIF + "[FIRST]";                                                                                                                                                                              |
| 165  | expresión de cálculo/transformación: String zoutputdefAY = zsubsesion + "!" + znodoAY + "[*]";                                                                                                                                                                          |
| 166  | expresión de cálculo/transformación: String zmoveAY = znodoAY + ":" + znodoAY + "[FIRST]";                                                                                                                                                                              |
| 170  | expresión de cálculo/transformación: String zoutputdefDK = zsubsesion + "!" + znodoDK + "[*]";                                                                                                                                                                          |
| 171  | expresión de cálculo/transformación: String zmoveDK = znodoDK + ":" + znodoDK + "[FIRST]";                                                                                                                                                                              |
| 175  | expresión de cálculo/transformación: String zoutputdefCM = zsubsesion + "!" + znodoCM + "[*]";                                                                                                                                                                          |
| 176  | expresión de cálculo/transformación: String zmoveCM = znodoCM + ":" + znodoCM + "[FIRST]";                                                                                                                                                                              |
| 180  | expresión de cálculo/transformación: String zoutputdefRF = zsubsesion + "!" + znodoRF + "[*]";                                                                                                                                                                          |
| 181  | expresión de cálculo/transformación: String zmoveRF = znodoRF + ":" + znodoRF + "[FIRST]";                                                                                                                                                                              |
| 331  | expresión de cálculo/transformación: String id = String.valueOf(zposiciondp - 1);                                                                                                                                                                                       |
| 400  | expresión de cálculo/transformación: NumColtotales = parseFloat(NumColtotales);                                                                                                                                                                                         |
| 1863 | expresión de cálculo/transformación: id = String.valueOf(zposicioncj - 1);                                                                                                                                                                                              |
| 1986 | expresión de cálculo/transformación: importe = parseFloat('&lt;%=zTOTAL%&gt;');                                                                                                                                                                                         |
| 2001 | expresión de cálculo/transformación: total = vOrdinaria + vExtraordinaria;                                                                                                                                                                                              |
| 2002 | expresión de cálculo/transformación: totalAcum = vOrdinariaAcum + vExtraordinariaAcum;                                                                                                                                                                                  |
| 2003 | expresión de cálculo/transformación: totalOrdinario = vOrdinaria + vOrdinariaAcum;                                                                                                                                                                                      |
| 2004 | expresión de cálculo/transformación: totalExtraOrdinario = vExtraordinaria + vExtraordinariaAcum;                                                                                                                                                                       |
| 2005 | expresión de cálculo/transformación: totaldetotales = totalOrdinario + totalExtraOrdinario;                                                                                                                                                                             |
| 2024 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal1 + '&lt;/td&gt;');               |
| 2025 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;'); |
| 2026 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[1] +'&lt;/td&gt;');  |
| 2027 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[0] + '&lt;/td&gt;');           |
| 2033 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal2 + '&lt;/td&gt;');               |
| 2034 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[2] + '&lt;/td&gt;'); |
| 2035 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[3] +'&lt;/td&gt;');  |
| 2036 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[1] + '&lt;/td&gt;');           |
| 2113 | expresión de cálculo/transformación: totalAsumar = parseFloat(totalAsumar.replace("0000",""));                                                                                                                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 25  | /css/estilo_sse.css                 |
| 26  | /css/tabla.css                      |
| 27  | /css/style_persdata.css             |
| 28  | /library/jquery.js                  |
| 29  | /libreria/functions_proyecciones.js |
| 341 | /iconos/logo_cyc.jpg                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                                        |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| COLL   | 24  | /library/jquery.js                  | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                   |
| COLL   | 25  | /libreria/functions_proyecciones.js | contextual | [libreria/functions_proyecciones.js](../../transversal/dependencias/libreria--functions_proyecciones.md) |
| CYC    | 28  | /library/jquery.js                  | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                    |
| CYC    | 29  | /libreria/functions_proyecciones.js | contextual | [libreria/functions_proyecciones.js](../../transversal/dependencias/libreria--functions_proyecciones.md) |
| IBER   | 24  | /library/jquery.js                  | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                   |
| IBER   | 25  | /libreria/functions_proyecciones.js | contextual | [libreria/functions_proyecciones.js](../../transversal/dependencias/libreria--functions_proyecciones.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_inf_proyec - back jul2017.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
