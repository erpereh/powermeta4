# PROYECCION TEÓRICA DE HABERES

Identificador: `sse_g2/sse_g2_inf_proyec_backup_oct2016_antes_CAPITALES.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_oct2016_antes_CAPITALES.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_oct2016_antes_CAPITALES.jsp) | `0bca25c4f78219b51710e32f04f9b24c821de3e855f9b18e308928592f3f7958` |   2147 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_oct2016_antes_CAPITALES.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_oct2016_antes_CAPITALES.jsp). Líneas físicas, contando desde 1.

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
| 1370 | Total                                                                     |
| 1501 | Total                                                                     |
| 1825 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 1887 | Total                                                                     |
| 1918 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 2020 | Total                                                                     |
| 2048 | INVERSIÓN en FORMACIÓN                                                    |
| 2059 | Inversion Individual en Formacion                                         |
| 2118 | Total                                                                     |

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
| 1406 | getItem          | znodoAY,zmeta4object,znodoAY,"","TOTAL"               |
| 1407 | getItem          | znodoAY,zmeta4object,znodoAY,"","ID_ITEM"             |
| 1408 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA01"              |
| 1409 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA02"              |
| 1410 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA03"              |
| 1411 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA04"              |
| 1412 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA05"              |
| 1413 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA06"              |
| 1414 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA07"              |
| 1415 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA08"              |
| 1416 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA09"              |
| 1417 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA10"              |
| 1418 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA11"              |
| 1419 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA12"              |
| 1420 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA13"              |
| 1421 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA14"              |
| 1422 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA15"              |
| 1423 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA16"              |
| 1424 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA17"              |
| 1425 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA18"              |
| 1426 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA19"              |
| 1427 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA20"              |
| 1553 | getItem          | znodoCM,zmeta4object,znodoCM,"","TOTAL"               |
| 1554 | getItem          | znodoCM,zmeta4object,znodoCM,"","ID_ITEM"             |
| 1555 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA01"              |
| 1556 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA02"              |
| 1557 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA03"              |
| 1558 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA04"              |
| 1559 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA05"              |
| 1560 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA06"              |
| 1561 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA07"              |
| 1562 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA08"              |
| 1563 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA09"              |
| 1564 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA10"              |
| 1565 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA11"              |
| 1566 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA12"              |
| 1567 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA13"              |
| 1568 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA14"              |
| 1569 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA15"              |
| 1570 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA16"              |
| 1571 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA17"              |
| 1572 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA18"              |
| 1573 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA19"              |
| 1574 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA20"              |
| 1653 | getItem          | znodoDK,zmeta4object,znodoDK,"","TOTAL"               |
| 1654 | getItem          | znodoDK,zmeta4object,znodoDK,"","ID_ITEM"             |
| 1655 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA01"              |
| 1656 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA02"              |
| 1657 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA03"              |
| 1658 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA04"              |
| 1659 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA05"              |
| 1660 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA06"              |
| 1661 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA07"              |
| 1662 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA08"              |
| 1663 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA09"              |
| 1664 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA10"              |
| 1665 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA11"              |
| 1666 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA12"              |
| 1667 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA13"              |
| 1668 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA14"              |
| 1669 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA15"              |
| 1670 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA16"              |
| 1671 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA17"              |
| 1672 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA18"              |
| 1673 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA19"              |
| 1674 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA20"              |
| 1754 | getItem          | znodoRF,zmeta4object,znodoRF,"","TOTAL"               |
| 1755 | getItem          | znodoRF,zmeta4object,znodoRF,"","ID_ITEM"             |
| 1756 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA01"              |
| 1757 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA02"              |
| 1758 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA03"              |
| 1759 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA04"              |
| 1760 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA05"              |
| 1761 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA06"              |
| 1762 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA07"              |
| 1763 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA08"              |
| 1764 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA09"              |
| 1765 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA10"              |
| 1766 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA11"              |
| 1767 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA12"              |
| 1768 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA13"              |
| 1769 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA14"              |
| 1770 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA15"              |
| 1771 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA16"              |
| 1772 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA17"              |
| 1773 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA18"              |
| 1774 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA19"              |
| 1775 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA20"              |
| 1850 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM"             |
| 1851 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","PAGA01"              |
| 1852 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","TOTAL"               |
| 1957 | getItem          | znodoPE,zmeta4object,znodoPE,"","ID_ITEM"             |
| 1958 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2075 | getItem          | znodoIF,zmeta4object,znodoIF,"","ID_ITEM"             |
| 2076 | getItem          | znodoIF,zmeta4object,znodoIF,"","TOTAL"               |

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
| 1332 | if(contador == '&lt;%=zposicioncs%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1341 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1354 | if(contador == parseFloat('&lt;%=zposicioncs%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1385 | &lt;% if(zposicionay &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1431 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1461 | if(contador == '&lt;%=zposicionay%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1471 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1484 | if(contador == parseFloat('&lt;%=zposicionay%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1516 | &lt;% if(zposicioncm &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1591 | if(contador == '&lt;%=zposicioncm%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1616 | &lt;% if(zposiciondk &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1691 | if(contador == '&lt;%=zposiciondk%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1717 | &lt;% if(zposicionrf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1792 | if(contador == '&lt;%=zposicionrf%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1810 | &lt;% if(zposicioncj &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1874 | if(contador == '&lt;%=zposicioncj%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1899 | &lt;% if(zposicionpe &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1972 | if (concepto == "Aportación Ordinaria PPSE") {vOrdinaria = importe;}                                                                                                                                                                                                    |
| 1973 | if (concepto == "Aportacion Personal al PPSE") {vExtraordinaria = importe;}                                                                                                                                                                                             |
| 1974 | if (concepto == "Aportación PPSE Ordinaria Acumulada") {vOrdinariaAcum = importe;}                                                                                                                                                                                      |
| 1975 | if (concepto == "Aportación PPSE Extraordinaria Acumulada") {vExtraordinariaAcum = importe;}                                                                                                                                                                            |
| 2032 | &lt;% if(zposicionif &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2103 | if(contador == '&lt;%=zposicionif%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
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
| 1846 | expresión de cálculo/transformación: id = String.valueOf(zposicioncj - 1);                                                                                                                                                                                              |
| 1969 | expresión de cálculo/transformación: importe = parseFloat('&lt;%=zTOTAL%&gt;');                                                                                                                                                                                         |
| 1980 | expresión de cálculo/transformación: total = vOrdinaria + vExtraordinaria;                                                                                                                                                                                              |
| 1981 | expresión de cálculo/transformación: totalAcum = vOrdinariaAcum + vExtraordinariaAcum;                                                                                                                                                                                  |
| 1982 | expresión de cálculo/transformación: totalOrdinario = vOrdinaria + vOrdinariaAcum;                                                                                                                                                                                      |
| 1983 | expresión de cálculo/transformación: totalExtraOrdinario = vExtraordinaria + vExtraordinariaAcum;                                                                                                                                                                       |
| 1984 | expresión de cálculo/transformación: totaldetotales = totalOrdinario + totalExtraOrdinario;                                                                                                                                                                             |
| 2003 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal1 + '&lt;/td&gt;');               |
| 2004 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;'); |
| 2005 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[1] +'&lt;/td&gt;');  |
| 2006 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[0] + '&lt;/td&gt;');           |
| 2012 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal2 + '&lt;/td&gt;');               |
| 2013 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[2] + '&lt;/td&gt;'); |
| 2014 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[3] +'&lt;/td&gt;');  |
| 2015 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[1] + '&lt;/td&gt;');           |
| 2092 | expresión de cálculo/transformación: totalAsumar = parseFloat(totalAsumar.replace("0000",""));                                                                                                                                                                          |

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

- Confirmar exposición y permisos de `sse_g2/sse_g2_inf_proyec_backup_oct2016_antes_CAPITALES.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
