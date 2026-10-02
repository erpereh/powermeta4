# PROYECCION TEÓRICA DE HABERES

Identificador: `sse_g2/sse_g2_inf_proyec_backup_sept2016_antes_PPSE.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_sept2016_antes_PPSE.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_sept2016_antes_PPSE.jsp) | `de627e6c41c6078a29d9841c8127762288d734d6be507013d4751f2cc4d350f5` |   2101 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_sept2016_antes_PPSE.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec_backup_sept2016_antes_PPSE.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L    | Texto literal / etiqueta                                                  |
| ---- | ------------------------------------------------------------------------- |
| 20   | PROYECCION TEÓRICA DE HABERES                                             |
| 331  | PROYECCIÓN TEÓRICA HABERES AÑO [valor dinámico]                           |
| 396  | [valor dinámico] [valor dinámico] [valor dinámico]                        |
| 403  | CENTRO DE TRABAJO                                                         |
| 414  | RETRIBUCIÓN DIRECTA                                                       |
| 1117 | RETRIBUCIÓN INDIRECTA. Beneficios Sociales.                               |
| 1238 | Total                                                                     |
| 1363 | Total                                                                     |
| 1494 | Total                                                                     |
| 1818 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 1880 | Total                                                                     |
| 1907 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 1975 | Total                                                                     |
| 2002 | INVERSIÓN en FORMACIÓN                                                    |
| 2013 | Inversion Individual en Formacion                                         |
| 2072 | Total                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                          |
| --- | ------- | ---------------------------------- |
| 330 | img     | border=0; src=/iconos/logo_cyc.jpg |

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
| 207 | zTOTAL               | ""                                                               |                                                                  |
| 274 | zposiciondp          | 0                                                                | 0                                                                |
| 275 | zposicionsc          | 0                                                                | 0                                                                |
| 276 | zposicioncc          | 0                                                                | 0                                                                |
| 277 | zposicioncf          | 0                                                                | 0                                                                |
| 278 | zposiciontf          | 0                                                                | 0                                                                |
| 279 | zposicionrv          | 0                                                                | 0                                                                |
| 280 | zposiciontv          | 0                                                                | 0                                                                |
| 281 | zposicionbv          | 0                                                                | 0                                                                |
| 282 | zposicionss          | 0                                                                | 0                                                                |
| 283 | zposicionve          | 0                                                                | 0                                                                |
| 284 | zposicioncs          | 0                                                                | 0                                                                |
| 286 | zposicioncj          | 0                                                                | 0                                                                |
| 287 | zposicionpe          | 0                                                                | 0                                                                |
| 288 | zposicionif          | 0                                                                | 0                                                                |
| 289 | zposicionay          | 0                                                                | 0                                                                |
| 290 | zposiciondk          | 0                                                                | 0                                                                |
| 291 | zposicioncm          | 0                                                                | 0                                                                |
| 292 | zposicionrf          | 0                                                                | 0                                                                |
| 294 | i                    | 0                                                                | 0                                                                |
| 320 | id                   | String.valueOf(zposiciondp - 1)                                  | String.valueOf(zposiciondp - 1)                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------- |
| 213 | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                               |
| 215 | m4:beginjob  |                                                                                          |
| 216 | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                      |
| 225 | m4:exec      | m4method=CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                               |
| 227 | m4:outputdef | m4alias=SSE_DATOS_PROYECCION                                                             |
| 227 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                  |
| 228 | m4:outputdef | m4alias=CSP_SALARIO_CONVENIO                                                             |
| 228 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                  |
| 229 | m4:outputdef | m4alias=CSP_COMP_ORG                                                                     |
| 229 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                          |
| 230 | m4:outputdef | m4alias=CSP_COMP_FUNCIONAL                                                               |
| 230 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                    |
| 231 | m4:outputdef | m4alias=CSP_TOTAL_RET_FIJA                                                               |
| 231 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                    |
| 232 | m4:outputdef | m4alias=CSP_RET_VAR                                                                      |
| 232 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                           |
| 233 | m4:outputdef | m4alias=CSP_BASE_RET_VAR                                                                 |
| 233 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                      |
| 234 | m4:outputdef | m4alias=CSP_TOT_RET_VAR                                                                  |
| 234 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                       |
| 235 | m4:outputdef | m4alias=CSP_SEG_SOC                                                                      |
| 235 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                           |
| 236 | m4:outputdef | m4alias=CSP_VAL_ESPECIE                                                                  |
| 236 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                       |
| 237 | m4:outputdef | m4alias=CSP_CONTRATO_SEGUROS                                                             |
| 237 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                  |
| 238 | m4:outputdef | m4alias=CSP_COMPRO_JUB                                                                   |
| 238 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                        |
| 239 | m4:outputdef | m4alias=CSP_PLAN_PREV_EMP                                                                |
| 239 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                     |
| 240 | m4:outputdef | m4alias=CSP_INV_FORMACION                                                                |
| 240 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                     |
| 241 | m4:outputdef | m4alias=CSP_AYUDAS                                                                       |
| 241 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                            |
| 242 | m4:outputdef | m4alias=CSP_DIET_KM                                                                      |
| 242 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                           |
| 243 | m4:outputdef | m4alias=CSP_COMIDAS                                                                      |
| 243 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                           |
| 244 | m4:outputdef | m4alias=CSP_RET_FLEX                                                                     |
| 244 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                          |
| 246 | m4:endjob    |                                                                                          |
| 248 | m4:move      |                                                                                          |
| 248 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 249 | m4:move      |                                                                                          |
| 249 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 250 | m4:move      |                                                                                          |
| 250 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                 |
| 251 | m4:move      |                                                                                          |
| 251 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}     |
| 252 | m4:move      |                                                                                          |
| 252 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}     |
| 253 | m4:move      |                                                                                          |
| 253 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                   |
| 254 | m4:move      |                                                                                          |
| 254 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}           |
| 255 | m4:move      |                                                                                          |
| 255 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}         |
| 256 | m4:move      |                                                                                          |
| 256 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                   |
| 257 | m4:move      |                                                                                          |
| 257 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}           |
| 258 | m4:move      |                                                                                          |
| 258 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"} |
| 259 | m4:move      |                                                                                          |
| 259 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}             |
| 260 | m4:move      |                                                                                          |
| 260 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}       |
| 261 | m4:move      |                                                                                          |
| 261 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}       |
| 262 | m4:move      |                                                                                          |
| 262 | m4:param     | name=CSP_RP_PROYECCIONES; value=SSE_DATOS_PROYECCION                                     |
| 263 | m4:move      |                                                                                          |
| 263 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                     |
| 264 | m4:move      |                                                                                          |
| 264 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                   |
| 265 | m4:move      |                                                                                          |
| 265 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                   |
| 266 | m4:move      |                                                                                          |
| 266 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                 |

| L    | Operación        | Argumentos literales                                  |
| ---- | ---------------- | ----------------------------------------------------- |
| 221  | setItem          | zsubsesion,zsubsesion,"","ANIO",anio                  |
| 298  | getCountInClient | znodoDP,zsubsesion,znodoDP                            |
| 299  | getCountInClient | znodoSC,zsubsesion,znodoSC                            |
| 300  | getCountInClient | znodoCC,zsubsesion,znodoCC                            |
| 301  | getCountInClient | znodoCF,zsubsesion,znodoCF                            |
| 302  | getCountInClient | znodoTF,zsubsesion,znodoTF                            |
| 303  | getCountInClient | znodoRV,zsubsesion,znodoRV                            |
| 304  | getCountInClient | znodoTV,zsubsesion,znodoTV                            |
| 305  | getCountInClient | znodoBV,zsubsesion,znodoBV                            |
| 306  | getCountInClient | znodoSS,zsubsesion,znodoSS                            |
| 307  | getCountInClient | znodoVE,zsubsesion,znodoVE                            |
| 308  | getCountInClient | znodoCS,zsubsesion,znodoCS                            |
| 310  | getCountInClient | znodoCJ,zsubsesion,znodoCJ                            |
| 311  | getCountInClient | znodoPE,zsubsesion,znodoPE                            |
| 312  | getCountInClient | znodoIF,zsubsesion,znodoIF                            |
| 313  | getCountInClient | znodoAY,zsubsesion,znodoAY                            |
| 314  | getCountInClient | znodoDK,zsubsesion,znodoDK                            |
| 315  | getCountInClient | znodoCM,zsubsesion,znodoCM                            |
| 316  | getCountInClient | znodoRF,zsubsesion,znodoRF                            |
| 350  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_REAL"            |
| 351  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA_TOT"            |
| 352  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA01"              |
| 353  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA02"              |
| 354  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA03"              |
| 355  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA04"              |
| 356  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA05"              |
| 357  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA06"              |
| 358  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA07"              |
| 359  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA08"              |
| 360  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA09"              |
| 361  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA10"              |
| 362  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA11"              |
| 363  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA12"              |
| 364  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA13"              |
| 365  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA14"              |
| 366  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA15"              |
| 367  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA16"              |
| 368  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA17"              |
| 369  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA18"              |
| 370  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA19"              |
| 371  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA20"              |
| 372  | getItem          | znodoDP,zmeta4object,znodoDP,"","SCO_N_WORK_LOCATION" |
| 373  | getItem          | znodoDP,zmeta4object,znodoDP,"","SSP_NM_CATEGORIA"    |
| 374  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_ID_HR"           |
| 375  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FAMILY_NAME_1" |
| 376  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FIRST_NAME"    |
| 377  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_OR_HR_PERIOD"    |
| 378  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_COUNT_COL"       |
| 454  | getItem          | znodoSC,zmeta4object,znodoSC,"","TOTAL"               |
| 455  | getItem          | znodoSC,zmeta4object,znodoSC,"","ID_ITEM"             |
| 456  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA01"              |
| 457  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA02"              |
| 458  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA03"              |
| 459  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA04"              |
| 460  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA05"              |
| 461  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA06"              |
| 462  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA07"              |
| 463  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA08"              |
| 464  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA09"              |
| 465  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA10"              |
| 466  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA11"              |
| 467  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA12"              |
| 468  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA13"              |
| 469  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA14"              |
| 470  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA15"              |
| 471  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA16"              |
| 472  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA17"              |
| 473  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA18"              |
| 474  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA19"              |
| 475  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA20"              |
| 545  | getItem          | znodoCC,zmeta4object,znodoCC,"","TOTAL"               |
| 546  | getItem          | znodoCC,zmeta4object,znodoCC,"","ID_ITEM"             |
| 547  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA01"              |
| 548  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA02"              |
| 549  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA03"              |
| 550  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA04"              |
| 551  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA05"              |
| 552  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA06"              |
| 553  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA07"              |
| 554  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA08"              |
| 555  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA09"              |
| 556  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA10"              |
| 557  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA11"              |
| 558  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA12"              |
| 559  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA13"              |
| 560  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA14"              |
| 561  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA15"              |
| 562  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA16"              |
| 563  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA17"              |
| 564  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA18"              |
| 565  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA19"              |
| 566  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA20"              |
| 632  | getItem          | znodoCF,zmeta4object,znodoCF,"","TOTAL"               |
| 633  | getItem          | znodoCF,zmeta4object,znodoCF,"","ID_ITEM"             |
| 634  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA01"              |
| 635  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA02"              |
| 636  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA03"              |
| 637  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA04"              |
| 638  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA05"              |
| 639  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA06"              |
| 640  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA07"              |
| 641  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA08"              |
| 642  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA09"              |
| 643  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA10"              |
| 644  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA11"              |
| 645  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA12"              |
| 646  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA13"              |
| 647  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA14"              |
| 648  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA15"              |
| 649  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA16"              |
| 650  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA17"              |
| 651  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA18"              |
| 652  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA19"              |
| 653  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA20"              |
| 706  | getItem          | znodoTF,zmeta4object,znodoTF,"","TOTAL"               |
| 707  | getItem          | znodoTF,zmeta4object,znodoTF,"","ID_ITEM"             |
| 708  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA01"              |
| 709  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA02"              |
| 710  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA03"              |
| 711  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA04"              |
| 712  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA05"              |
| 713  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA06"              |
| 714  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA07"              |
| 715  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA08"              |
| 716  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA09"              |
| 717  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA10"              |
| 718  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA11"              |
| 719  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA12"              |
| 720  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA13"              |
| 721  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA14"              |
| 722  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA15"              |
| 723  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA16"              |
| 724  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA17"              |
| 725  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA18"              |
| 726  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA19"              |
| 727  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA20"              |
| 792  | getItem          | znodoRV,zmeta4object,znodoRV,"","TOTAL"               |
| 793  | getItem          | znodoRV,zmeta4object,znodoRV,"","ID_ITEM"             |
| 794  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA01"              |
| 795  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA02"              |
| 796  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA03"              |
| 797  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA04"              |
| 798  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA05"              |
| 799  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA06"              |
| 800  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA07"              |
| 801  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA08"              |
| 802  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA09"              |
| 803  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA10"              |
| 804  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA11"              |
| 805  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA12"              |
| 806  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA13"              |
| 807  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA14"              |
| 808  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA15"              |
| 809  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA16"              |
| 810  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA17"              |
| 811  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA18"              |
| 812  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA19"              |
| 813  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA20"              |
| 876  | getItem          | znodoTV,zmeta4object,znodoTV,"","TOTAL"               |
| 877  | getItem          | znodoTV,zmeta4object,znodoTV,"","ID_ITEM"             |
| 878  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA01"              |
| 879  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA02"              |
| 880  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA03"              |
| 881  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA04"              |
| 882  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA05"              |
| 883  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA06"              |
| 884  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA07"              |
| 885  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA08"              |
| 886  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA09"              |
| 887  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA10"              |
| 888  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA11"              |
| 889  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA12"              |
| 890  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA13"              |
| 891  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA14"              |
| 892  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA15"              |
| 893  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA16"              |
| 894  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA17"              |
| 895  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA18"              |
| 896  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA19"              |
| 897  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA20"              |
| 956  | getItem          | znodoBV,zmeta4object,znodoBV,"","ID_ITEM"             |
| 957  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA01"              |
| 958  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA02"              |
| 959  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA03"              |
| 960  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA04"              |
| 961  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA05"              |
| 962  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA06"              |
| 963  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA07"              |
| 964  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA08"              |
| 965  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA09"              |
| 966  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA10"              |
| 967  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA11"              |
| 968  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA12"              |
| 969  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA13"              |
| 970  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA14"              |
| 971  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA15"              |
| 972  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA16"              |
| 973  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA17"              |
| 974  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA18"              |
| 975  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA19"              |
| 976  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA20"              |
| 1049 | getItem          | znodoSS,zmeta4object,znodoSS,"","TOTAL"               |
| 1050 | getItem          | znodoSS,zmeta4object,znodoSS,"","ID_ITEM"             |
| 1051 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA01"              |
| 1052 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA02"              |
| 1053 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA03"              |
| 1054 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA04"              |
| 1055 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA05"              |
| 1056 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA06"              |
| 1057 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA07"              |
| 1058 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA08"              |
| 1059 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA09"              |
| 1060 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA10"              |
| 1061 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA11"              |
| 1062 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA12"              |
| 1063 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA13"              |
| 1064 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA14"              |
| 1065 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA15"              |
| 1066 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA16"              |
| 1067 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA17"              |
| 1068 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA18"              |
| 1069 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA19"              |
| 1070 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA20"              |
| 1148 | getItem          | znodoVE,zmeta4object,znodoVE,"","TOTAL"               |
| 1149 | getItem          | znodoVE,zmeta4object,znodoVE,"","ID_ITEM"             |
| 1150 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA01"              |
| 1151 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA02"              |
| 1152 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA03"              |
| 1153 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA04"              |
| 1154 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA05"              |
| 1155 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA06"              |
| 1156 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA07"              |
| 1157 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA08"              |
| 1158 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA09"              |
| 1159 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA10"              |
| 1160 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA11"              |
| 1161 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA12"              |
| 1162 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA13"              |
| 1163 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA14"              |
| 1164 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA15"              |
| 1165 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA16"              |
| 1166 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA17"              |
| 1167 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA18"              |
| 1168 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA19"              |
| 1169 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA20"              |
| 1274 | getItem          | znodoCS,zmeta4object,znodoCS,"","TOTAL"               |
| 1275 | getItem          | znodoCS,zmeta4object,znodoCS,"","ID_ITEM"             |
| 1276 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA01"              |
| 1277 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA02"              |
| 1278 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA03"              |
| 1279 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA04"              |
| 1280 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA05"              |
| 1281 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA06"              |
| 1282 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA07"              |
| 1283 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA08"              |
| 1284 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA09"              |
| 1285 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA10"              |
| 1286 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA11"              |
| 1287 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA12"              |
| 1288 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA13"              |
| 1289 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA14"              |
| 1290 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA15"              |
| 1291 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA16"              |
| 1292 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA17"              |
| 1293 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA18"              |
| 1294 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA19"              |
| 1295 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA20"              |
| 1399 | getItem          | znodoAY,zmeta4object,znodoAY,"","TOTAL"               |
| 1400 | getItem          | znodoAY,zmeta4object,znodoAY,"","ID_ITEM"             |
| 1401 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA01"              |
| 1402 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA02"              |
| 1403 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA03"              |
| 1404 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA04"              |
| 1405 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA05"              |
| 1406 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA06"              |
| 1407 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA07"              |
| 1408 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA08"              |
| 1409 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA09"              |
| 1410 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA10"              |
| 1411 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA11"              |
| 1412 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA12"              |
| 1413 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA13"              |
| 1414 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA14"              |
| 1415 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA15"              |
| 1416 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA16"              |
| 1417 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA17"              |
| 1418 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA18"              |
| 1419 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA19"              |
| 1420 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA20"              |
| 1546 | getItem          | znodoCM,zmeta4object,znodoCM,"","TOTAL"               |
| 1547 | getItem          | znodoCM,zmeta4object,znodoCM,"","ID_ITEM"             |
| 1548 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA01"              |
| 1549 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA02"              |
| 1550 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA03"              |
| 1551 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA04"              |
| 1552 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA05"              |
| 1553 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA06"              |
| 1554 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA07"              |
| 1555 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA08"              |
| 1556 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA09"              |
| 1557 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA10"              |
| 1558 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA11"              |
| 1559 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA12"              |
| 1560 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA13"              |
| 1561 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA14"              |
| 1562 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA15"              |
| 1563 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA16"              |
| 1564 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA17"              |
| 1565 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA18"              |
| 1566 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA19"              |
| 1567 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA20"              |
| 1646 | getItem          | znodoDK,zmeta4object,znodoDK,"","TOTAL"               |
| 1647 | getItem          | znodoDK,zmeta4object,znodoDK,"","ID_ITEM"             |
| 1648 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA01"              |
| 1649 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA02"              |
| 1650 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA03"              |
| 1651 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA04"              |
| 1652 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA05"              |
| 1653 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA06"              |
| 1654 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA07"              |
| 1655 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA08"              |
| 1656 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA09"              |
| 1657 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA10"              |
| 1658 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA11"              |
| 1659 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA12"              |
| 1660 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA13"              |
| 1661 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA14"              |
| 1662 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA15"              |
| 1663 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA16"              |
| 1664 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA17"              |
| 1665 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA18"              |
| 1666 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA19"              |
| 1667 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA20"              |
| 1747 | getItem          | znodoRF,zmeta4object,znodoRF,"","TOTAL"               |
| 1748 | getItem          | znodoRF,zmeta4object,znodoRF,"","ID_ITEM"             |
| 1749 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA01"              |
| 1750 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA02"              |
| 1751 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA03"              |
| 1752 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA04"              |
| 1753 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA05"              |
| 1754 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA06"              |
| 1755 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA07"              |
| 1756 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA08"              |
| 1757 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA09"              |
| 1758 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA10"              |
| 1759 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA11"              |
| 1760 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA12"              |
| 1761 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA13"              |
| 1762 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA14"              |
| 1763 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA15"              |
| 1764 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA16"              |
| 1765 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA17"              |
| 1766 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA18"              |
| 1767 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA19"              |
| 1768 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA20"              |
| 1843 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM"             |
| 1844 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","PAGA01"              |
| 1845 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","TOTAL"               |
| 1938 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 1939 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 1941 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2029 | getItem          | znodoIF,zmeta4object,znodoIF,"","ID_ITEM"             |
| 2030 | getItem          | znodoIF,zmeta4object,znodoIF,"","TOTAL"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 52  | guion   | cadena     |

| L    | Condición / acción / mensaje literal                                                                                                                                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14   | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";}                                                                                                                                                                                                             |
| 323  | &lt;% if(zposicionsc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 492  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 511  | &lt;% if(zposicioncc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 582  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 598  | &lt;% if(zposicioncf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 669  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 685  | &lt;% if(zposiciontf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 755  | &lt;% if(zposicionrv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 830  | if(contador == '&lt;%=zposicionrv%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 849  | &lt;% if(zposiciontv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 937  | &lt;% if(zposicionbv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1012 | &lt;% if(zposicionss &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1087 | if(contador == '&lt;%=zposicionss%&gt;') {ultimaFila = true;}                                                                                                                                                                                                           |
| 1115 | &lt;% if(zposicionve &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1173 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1199 | if(contador == '&lt;%=zposicionve%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1208 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1222 | if(contador == parseFloat('&lt;%=zposicionve%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1253 | &lt;% if(zposicioncs &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1299 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1325 | if(contador == '&lt;%=zposicioncs%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1334 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1347 | if(contador == parseFloat('&lt;%=zposicioncs%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1378 | &lt;% if(zposicionay &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1424 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1454 | if(contador == '&lt;%=zposicionay%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1464 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1477 | if(contador == parseFloat('&lt;%=zposicionay%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1509 | &lt;% if(zposicioncm &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1584 | if(contador == '&lt;%=zposicioncm%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1609 | &lt;% if(zposiciondk &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1684 | if(contador == '&lt;%=zposiciondk%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1710 | &lt;% if(zposicionrf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1785 | if(contador == '&lt;%=zposicionrf%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1803 | &lt;% if(zposicioncj &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1867 | if(contador == '&lt;%=zposicioncj%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1892 | &lt;% if(zposicionpe &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1962 | if(contador == '&lt;%=zposicionpe%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1986 | &lt;% if(zposicionif &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2057 | if(contador == '&lt;%=zposicionif%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 88   | expresión de cálculo/transformación: String zoutputdefDP = zsubsesion + "!" + znodoDP + "[*]";                                                                                                                                                                          |
| 89   | expresión de cálculo/transformación: String zmoveDP = znodoDP + ":" + znodoDP + "[FIRST]";                                                                                                                                                                              |
| 93   | expresión de cálculo/transformación: String zoutputdefSC = zsubsesion + "!" + znodoSC + "[*]";                                                                                                                                                                          |
| 94   | expresión de cálculo/transformación: String zmoveSC = znodoSC + ":" + znodoSC + "[FIRST]";                                                                                                                                                                              |
| 98   | expresión de cálculo/transformación: String zoutputdefCC = zsubsesion + "!" + znodoCC + "[*]";                                                                                                                                                                          |
| 99   | expresión de cálculo/transformación: String zmoveCC = znodoCC + ":" + znodoCC + "[FIRST]";                                                                                                                                                                              |
| 103  | expresión de cálculo/transformación: String zoutputdefCF = zsubsesion + "!" + znodoCF + "[*]";                                                                                                                                                                          |
| 104  | expresión de cálculo/transformación: String zmoveCF = znodoCF + ":" + znodoCF + "[FIRST]";                                                                                                                                                                              |
| 108  | expresión de cálculo/transformación: String zoutputdefTF = zsubsesion + "!" + znodoTF + "[*]";                                                                                                                                                                          |
| 109  | expresión de cálculo/transformación: String zmoveTF = znodoTF + ":" + znodoTF + "[FIRST]";                                                                                                                                                                              |
| 113  | expresión de cálculo/transformación: String zoutputdefRV = zsubsesion + "!" + znodoRV + "[*]";                                                                                                                                                                          |
| 114  | expresión de cálculo/transformación: String zmoveRV = znodoRV + ":" + znodoRV + "[FIRST]";                                                                                                                                                                              |
| 118  | expresión de cálculo/transformación: String zoutputdefTV = zsubsesion + "!" + znodoTV + "[*]";                                                                                                                                                                          |
| 119  | expresión de cálculo/transformación: String zmoveTV = znodoTV + ":" + znodoTV + "[FIRST]";                                                                                                                                                                              |
| 123  | expresión de cálculo/transformación: String zoutputdefBV = zsubsesion + "!" + znodoBV + "[*]";                                                                                                                                                                          |
| 124  | expresión de cálculo/transformación: String zmoveBV = znodoBV + ":" + znodoBV + "[FIRST]";                                                                                                                                                                              |
| 128  | expresión de cálculo/transformación: String zoutputdefSS = zsubsesion + "!" + znodoSS + "[*]";                                                                                                                                                                          |
| 129  | expresión de cálculo/transformación: String zmoveSS = znodoSS + ":" + znodoSS + "[FIRST]";                                                                                                                                                                              |
| 133  | expresión de cálculo/transformación: String zoutputdefVE = zsubsesion + "!" + znodoVE + "[*]";                                                                                                                                                                          |
| 134  | expresión de cálculo/transformación: String zmoveVE = znodoVE + ":" + znodoVE + "[FIRST]";                                                                                                                                                                              |
| 138  | expresión de cálculo/transformación: String zoutputdefCS = zsubsesion + "!" + znodoCS + "[*]";                                                                                                                                                                          |
| 139  | expresión de cálculo/transformación: String zmoveCS = znodoCS + ":" + znodoCS + "[FIRST]";                                                                                                                                                                              |
| 143  | expresión de cálculo/transformación: String zoutputdefCJ = zsubsesion + "!" + znodoCJ + "[*]";                                                                                                                                                                          |
| 144  | expresión de cálculo/transformación: String zmoveCJ = znodoCJ + ":" + znodoCJ + "[FIRST]";                                                                                                                                                                              |
| 148  | expresión de cálculo/transformación: String zoutputdefPE = zsubsesion + "!" + znodoPE + "[*]";                                                                                                                                                                          |
| 149  | expresión de cálculo/transformación: String zmovePE = znodoPE + ":" + znodoPE + "[FIRST]";                                                                                                                                                                              |
| 153  | expresión de cálculo/transformación: String zoutputdefIF = zsubsesion + "!" + znodoIF + "[*]";                                                                                                                                                                          |
| 154  | expresión de cálculo/transformación: String zmoveIF = znodoIF + ":" + znodoIF + "[FIRST]";                                                                                                                                                                              |
| 157  | expresión de cálculo/transformación: String zoutputdefAY = zsubsesion + "!" + znodoAY + "[*]";                                                                                                                                                                          |
| 158  | expresión de cálculo/transformación: String zmoveAY = znodoAY + ":" + znodoAY + "[FIRST]";                                                                                                                                                                              |
| 162  | expresión de cálculo/transformación: String zoutputdefDK = zsubsesion + "!" + znodoDK + "[*]";                                                                                                                                                                          |
| 163  | expresión de cálculo/transformación: String zmoveDK = znodoDK + ":" + znodoDK + "[FIRST]";                                                                                                                                                                              |
| 167  | expresión de cálculo/transformación: String zoutputdefCM = zsubsesion + "!" + znodoCM + "[*]";                                                                                                                                                                          |
| 168  | expresión de cálculo/transformación: String zmoveCM = znodoCM + ":" + znodoCM + "[FIRST]";                                                                                                                                                                              |
| 172  | expresión de cálculo/transformación: String zoutputdefRF = zsubsesion + "!" + znodoRF + "[*]";                                                                                                                                                                          |
| 173  | expresión de cálculo/transformación: String zmoveRF = znodoRF + ":" + znodoRF + "[FIRST]";                                                                                                                                                                              |
| 320  | expresión de cálculo/transformación: String id = String.valueOf(zposiciondp - 1);                                                                                                                                                                                       |
| 389  | expresión de cálculo/transformación: NumColtotales = parseFloat(NumColtotales);                                                                                                                                                                                         |
| 1839 | expresión de cálculo/transformación: id = String.valueOf(zposicioncj - 1);                                                                                                                                                                                              |
| 1933 | expresión de cálculo/transformación: id = String.valueOf(zposicionpe - 1);                                                                                                                                                                                              |
| 1953 | expresión de cálculo/transformación: totalOrd = parseFloat('&lt;%=zPAGA02%&gt;');                                                                                                                                                                                       |
| 1954 | expresión de cálculo/transformación: totalExtr = parseFloat('&lt;%=zPAGA01%&gt;');                                                                                                                                                                                      |
| 1955 | expresión de cálculo/transformación: totaTotal = totalOrd + totalExtr;                                                                                                                                                                                                  |
| 1967 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');               |
| 1968 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;'); |
| 1969 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[1] + '&lt;/td&gt;'); |
| 1970 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + total + '&lt;/td&gt;');                       |
| 2046 | expresión de cálculo/transformación: totalAsumar = parseFloat(totalAsumar.replace("0000",""));                                                                                                                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 21  | /css/estilo_sse.css                 |
| 22  | /css/tabla.css                      |
| 23  | /css/style_persdata.css             |
| 24  | /library/jquery.js                  |
| 25  | /libreria/functions_proyecciones.js |
| 330 | /iconos/logo_cyc.jpg                |

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

- Confirmar exposición y permisos de `sse_g2/sse_g2_inf_proyec_backup_sept2016_antes_PPSE.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
