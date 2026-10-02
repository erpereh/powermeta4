# PROYECCION TEÓRICA DE HABERES

Identificador: `sse_g2/sse_g2_inf_proyec.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec.jsp) | `6fd18f1b9a7a3ae3de4c730d7758ba20c5238dc8941ab1cc9efe3f3da6b98118` |   2182 |
| CYC / español     | [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec.jsp)   | `0061f023688101fe8541c096602557721750046f1d097de8b933bddbbf51c467` |   2345 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_inf_proyec.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_inf_proyec.jsp) | `6fd18f1b9a7a3ae3de4c730d7758ba20c5238dc8941ab1cc9efe3f3da6b98118` |   2182 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_inf_proyec.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L    | Texto literal / etiqueta                                                  |
| ---- | ------------------------------------------------------------------------- |
| 24   | PROYECCION TEÓRICA DE HABERES                                             |
| 237  | Nuevo V1                                                                  |
| 358  | PROYECCIÓN TEÓRICA HABERES AÑO [valor dinámico]                           |
| 423  | [valor dinámico] [valor dinámico] [valor dinámico]                        |
| 430  | CENTRO DE TRABAJO                                                         |
| 441  | RETRIBUCIÓN DIRECTA                                                       |
| 1144 | RETRIBUCIÓN INDIRECTA. Beneficios Sociales.                               |
| 1265 | Total                                                                     |
| 1398 | Total                                                                     |
| 1532 | Total                                                                     |
| 1856 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 1918 | Total                                                                     |
| 1949 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 2055 | Total                                                                     |
| 2083 | INVERSIÓN en FORMACIÓN                                                    |
| 2094 | Inversion Individual en Formacion                                         |
| 2153 | Total                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                         |
| --- | ------- | ----------------------------------------------------------------- |
| 237 | a       | href=./proyecciones/index.jsp?anio=&lt;%=anio%&gt;; target=_blank |
| 357 | img     | border=0; src=/iconos/logo_cyc.jpg                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 13  | anio            | getParameter(request,"anio") |
| 226 | zIdPerson       | getBagEntries("zIdPerson")   |

| L   | Variable             | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| --- | -------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 13  | anio                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio")                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio")                                    |
| 70  | zsubsesion           | "CSP_RP_PROYECCIONES"                                                                               | CSP_RP_PROYECCIONES                                                                                 |
| 71  | zmeta4object         | "CSP_RP_PROYECCIONES"                                                                               | CSP_RP_PROYECCIONES                                                                                 |
| 72  | znodoDP              | "SSE_DATOS_PROYECCION"                                                                              | SSE_DATOS_PROYECCION                                                                                |
| 73  | znodoSC              | "CSP_SALARIO_CONVENIO"                                                                              | CSP_SALARIO_CONVENIO                                                                                |
| 74  | znodoCC              | "CSP_COMP_ORG"                                                                                      | CSP_COMP_ORG                                                                                        |
| 75  | znodoCF              | "CSP_COMP_FUNCIONAL"                                                                                | CSP_COMP_FUNCIONAL                                                                                  |
| 76  | znodoTF              | "CSP_TOTAL_RET_FIJA"                                                                                | CSP_TOTAL_RET_FIJA                                                                                  |
| 77  | znodoRV              | "CSP_RET_VAR"                                                                                       | CSP_RET_VAR                                                                                         |
| 78  | znodoTV              | "CSP_TOT_RET_VAR"                                                                                   | CSP_TOT_RET_VAR                                                                                     |
| 79  | znodoBV              | "CSP_BASE_RET_VAR"                                                                                  | CSP_BASE_RET_VAR                                                                                    |
| 80  | znodoSS              | "CSP_SEG_SOC"                                                                                       | CSP_SEG_SOC                                                                                         |
| 83  | znodoVE              | "CSP_VAL_ESPECIE"                                                                                   | CSP_VAL_ESPECIE                                                                                     |
| 84  | znodoCS              | "CSP_CONTRATO_SEGUROS"                                                                              | CSP_CONTRATO_SEGUROS                                                                                |
| 85  | znodoCJ              | "CSP_COMPRO_JUB"                                                                                    | CSP_COMPRO_JUB                                                                                      |
| 86  | znodoPE              | "CSP_PLAN_PREV_EMP"                                                                                 | CSP_PLAN_PREV_EMP                                                                                   |
| 87  | znodoIF              | "CSP_INV_FORMACION"                                                                                 | CSP_INV_FORMACION                                                                                   |
| 88  | znodoAY              | "CSP_AYUDAS"                                                                                        | CSP_AYUDAS                                                                                          |
| 89  | znodoDK              | "CSP_DIET_KM"                                                                                       | CSP_DIET_KM                                                                                         |
| 90  | znodoCM              | "CSP_COMIDAS"                                                                                       | CSP_COMIDAS                                                                                         |
| 91  | znodoRF              | "CSP_RET_FLEX"                                                                                      | CSP_RET_FLEX                                                                                        |
| 93  | zmetodocarga         | zsubsesion +"!CSP_RP_PROYECCIONES.CSP_CARGA"                                                        | CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                                                   |
| 96  | zoutputdefDP         | zsubsesion + "!" + znodoDP + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                                                 |
| 97  | zmoveDP              | znodoDP + ":" + znodoDP + "[FIRST]"                                                                 | SSE_DATOS_PROYECCION{":"}SSE_DATOS_PROYECCION{"[FIRST]"}                                            |
| 101 | zoutputdefSC         | zsubsesion + "!" + znodoSC + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                                                 |
| 102 | zmoveSC              | znodoSC + ":" + znodoSC + "[FIRST]"                                                                 | CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"}                                            |
| 106 | zoutputdefCC         | zsubsesion + "!" + znodoCC + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                                                         |
| 107 | zmoveCC              | znodoCC + ":" + znodoCC + "[FIRST]"                                                                 | CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                                                            |
| 111 | zoutputdefCF         | zsubsesion + "!" + znodoCF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                                                   |
| 112 | zmoveCF              | znodoCF + ":" + znodoCF + "[FIRST]"                                                                 | CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}                                                |
| 116 | zoutputdefTF         | zsubsesion + "!" + znodoTF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                                                   |
| 117 | zmoveTF              | znodoTF + ":" + znodoTF + "[FIRST]"                                                                 | CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}                                                |
| 121 | zoutputdefRV         | zsubsesion + "!" + znodoRV + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                                                          |
| 122 | zmoveRV              | znodoRV + ":" + znodoRV + "[FIRST]"                                                                 | CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                                                              |
| 126 | zoutputdefTV         | zsubsesion + "!" + znodoTV + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                                                      |
| 127 | zmoveTV              | znodoTV + ":" + znodoTV + "[FIRST]"                                                                 | CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}                                                      |
| 131 | zoutputdefBV         | zsubsesion + "!" + znodoBV + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                                                     |
| 132 | zmoveBV              | znodoBV + ":" + znodoBV + "[FIRST]"                                                                 | CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}                                                    |
| 136 | zoutputdefSS         | zsubsesion + "!" + znodoSS + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                                                          |
| 137 | zmoveSS              | znodoSS + ":" + znodoSS + "[FIRST]"                                                                 | CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                                                              |
| 141 | zoutputdefVE         | zsubsesion + "!" + znodoVE + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                                                      |
| 142 | zmoveVE              | znodoVE + ":" + znodoVE + "[FIRST]"                                                                 | CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}                                                      |
| 146 | zoutputdefCS         | zsubsesion + "!" + znodoCS + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                                                 |
| 147 | zmoveCS              | znodoCS + ":" + znodoCS + "[FIRST]"                                                                 | CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"}                                            |
| 151 | zoutputdefCJ         | zsubsesion + "!" + znodoCJ + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                                                       |
| 152 | zmoveCJ              | znodoCJ + ":" + znodoCJ + "[FIRST]"                                                                 | CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}                                                        |
| 156 | zoutputdefPE         | zsubsesion + "!" + znodoPE + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                                                    |
| 157 | zmovePE              | znodoPE + ":" + znodoPE + "[FIRST]"                                                                 | CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}                                                  |
| 161 | zoutputdefIF         | zsubsesion + "!" + znodoIF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                                                    |
| 162 | zmoveIF              | znodoIF + ":" + znodoIF + "[FIRST]"                                                                 | CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}                                                  |
| 165 | zoutputdefAY         | zsubsesion + "!" + znodoAY + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                                                           |
| 166 | zmoveAY              | znodoAY + ":" + znodoAY + "[FIRST]"                                                                 | CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                                                                |
| 170 | zoutputdefDK         | zsubsesion + "!" + znodoDK + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                                                          |
| 171 | zmoveDK              | znodoDK + ":" + znodoDK + "[FIRST]"                                                                 | CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                                                              |
| 175 | zoutputdefCM         | zsubsesion + "!" + znodoCM + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                                                          |
| 176 | zmoveCM              | znodoCM + ":" + znodoCM + "[FIRST]"                                                                 | CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                                                              |
| 180 | zoutputdefRF         | zsubsesion + "!" + znodoRF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                                                         |
| 181 | zmoveRF              | znodoRF + ":" + znodoRF + "[FIRST]"                                                                 | CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                                                            |
| 185 | zCSP_REAL            | ""                                                                                                  |                                                                                                     |
| 186 | zPAGA_TOT            | ""                                                                                                  |                                                                                                     |
| 187 | zPAGA01              | ""                                                                                                  |                                                                                                     |
| 188 | zPAGA02              | ""                                                                                                  |                                                                                                     |
| 189 | zPAGA03              | ""                                                                                                  |                                                                                                     |
| 190 | zPAGA04              | ""                                                                                                  |                                                                                                     |
| 191 | zPAGA05              | ""                                                                                                  |                                                                                                     |
| 192 | zPAGA06              | ""                                                                                                  |                                                                                                     |
| 193 | zPAGA07              | ""                                                                                                  |                                                                                                     |
| 194 | zPAGA08              | ""                                                                                                  |                                                                                                     |
| 195 | zPAGA09              | ""                                                                                                  |                                                                                                     |
| 196 | zPAGA10              | ""                                                                                                  |                                                                                                     |
| 197 | zPAGA11              | ""                                                                                                  |                                                                                                     |
| 198 | zPAGA12              | ""                                                                                                  |                                                                                                     |
| 199 | zPAGA13              | ""                                                                                                  |                                                                                                     |
| 200 | zPAGA14              | ""                                                                                                  |                                                                                                     |
| 201 | zPAGA15              | ""                                                                                                  |                                                                                                     |
| 202 | zPAGA16              | ""                                                                                                  |                                                                                                     |
| 203 | zPAGA17              | ""                                                                                                  |                                                                                                     |
| 204 | zPAGA18              | ""                                                                                                  |                                                                                                     |
| 205 | zPAGA19              | ""                                                                                                  |                                                                                                     |
| 206 | zPAGA20              | ""                                                                                                  |                                                                                                     |
| 207 | zSCO_N_WORK_LOCATION | ""                                                                                                  |                                                                                                     |
| 208 | zSSP_NM_CATEGORIA    | ""                                                                                                  |                                                                                                     |
| 209 | zSTD_ID_HR           | ""                                                                                                  |                                                                                                     |
| 210 | zSTD_N_FAMILY_NAME_1 | ""                                                                                                  |                                                                                                     |
| 211 | zSTD_N_FIRST_NAME    | ""                                                                                                  |                                                                                                     |
| 212 | zSTD_OR_HR_PERIOD    | ""                                                                                                  |                                                                                                     |
| 213 | zCSP_COUNT_COL       | ""                                                                                                  |                                                                                                     |
| 214 | zID_ITEM             | ""                                                                                                  |                                                                                                     |
| 216 | zID_ITEM_2           | ""                                                                                                  |                                                                                                     |
| 218 | zTOTAL               | ""                                                                                                  |                                                                                                     |
| 226 | matricula            | zsesionDA.getBagEntries("zIdPerson")                                                                | zsesionDA.getBagEntries("zIdPerson")                                                                |
| 227 | matriculaEnc         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) |
| 301 | zposiciondp          | 0                                                                                                   | 0                                                                                                   |
| 302 | zposicionsc          | 0                                                                                                   | 0                                                                                                   |
| 303 | zposicioncc          | 0                                                                                                   | 0                                                                                                   |
| 304 | zposicioncf          | 0                                                                                                   | 0                                                                                                   |
| 305 | zposiciontf          | 0                                                                                                   | 0                                                                                                   |
| 306 | zposicionrv          | 0                                                                                                   | 0                                                                                                   |
| 307 | zposiciontv          | 0                                                                                                   | 0                                                                                                   |
| 308 | zposicionbv          | 0                                                                                                   | 0                                                                                                   |
| 309 | zposicionss          | 0                                                                                                   | 0                                                                                                   |
| 310 | zposicionve          | 0                                                                                                   | 0                                                                                                   |
| 311 | zposicioncs          | 0                                                                                                   | 0                                                                                                   |
| 313 | zposicioncj          | 0                                                                                                   | 0                                                                                                   |
| 314 | zposicionpe          | 0                                                                                                   | 0                                                                                                   |
| 315 | zposicionif          | 0                                                                                                   | 0                                                                                                   |
| 316 | zposicionay          | 0                                                                                                   | 0                                                                                                   |
| 317 | zposiciondk          | 0                                                                                                   | 0                                                                                                   |
| 318 | zposicioncm          | 0                                                                                                   | 0                                                                                                   |
| 319 | zposicionrf          | 0                                                                                                   | 0                                                                                                   |
| 321 | i                    | 0                                                                                                   | 0                                                                                                   |
| 347 | id                   | String.valueOf(zposiciondp - 1)                                                                     | String.valueOf(zposiciondp - 1)                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                       |
| --- | ------------ | ---------------------------------------------------------------------------------------- |
| 240 | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                               |
| 242 | m4:beginjob  |                                                                                          |
| 243 | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                      |
| 252 | m4:exec      | m4method=CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                               |
| 254 | m4:outputdef | m4alias=SSE_DATOS_PROYECCION                                                             |
| 254 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                  |
| 255 | m4:outputdef | m4alias=CSP_SALARIO_CONVENIO                                                             |
| 255 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                  |
| 256 | m4:outputdef | m4alias=CSP_COMP_ORG                                                                     |
| 256 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                          |
| 257 | m4:outputdef | m4alias=CSP_COMP_FUNCIONAL                                                               |
| 257 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                    |
| 258 | m4:outputdef | m4alias=CSP_TOTAL_RET_FIJA                                                               |
| 258 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                    |
| 259 | m4:outputdef | m4alias=CSP_RET_VAR                                                                      |
| 259 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                           |
| 260 | m4:outputdef | m4alias=CSP_BASE_RET_VAR                                                                 |
| 260 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                      |
| 261 | m4:outputdef | m4alias=CSP_TOT_RET_VAR                                                                  |
| 261 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                       |
| 262 | m4:outputdef | m4alias=CSP_SEG_SOC                                                                      |
| 262 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                           |
| 263 | m4:outputdef | m4alias=CSP_VAL_ESPECIE                                                                  |
| 263 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                       |
| 264 | m4:outputdef | m4alias=CSP_CONTRATO_SEGUROS                                                             |
| 264 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                  |
| 265 | m4:outputdef | m4alias=CSP_COMPRO_JUB                                                                   |
| 265 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                        |
| 266 | m4:outputdef | m4alias=CSP_PLAN_PREV_EMP                                                                |
| 266 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                     |
| 267 | m4:outputdef | m4alias=CSP_INV_FORMACION                                                                |
| 267 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                     |
| 268 | m4:outputdef | m4alias=CSP_AYUDAS                                                                       |
| 268 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                            |
| 269 | m4:outputdef | m4alias=CSP_DIET_KM                                                                      |
| 269 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                           |
| 270 | m4:outputdef | m4alias=CSP_COMIDAS                                                                      |
| 270 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                           |
| 271 | m4:outputdef | m4alias=CSP_RET_FLEX                                                                     |
| 271 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                          |
| 273 | m4:endjob    |                                                                                          |
| 275 | m4:move      |                                                                                          |
| 275 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 276 | m4:move      |                                                                                          |
| 276 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"} |
| 277 | m4:move      |                                                                                          |
| 277 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                 |
| 278 | m4:move      |                                                                                          |
| 278 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}     |
| 279 | m4:move      |                                                                                          |
| 279 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}     |
| 280 | m4:move      |                                                                                          |
| 280 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                   |
| 281 | m4:move      |                                                                                          |
| 281 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}           |
| 282 | m4:move      |                                                                                          |
| 282 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}         |
| 283 | m4:move      |                                                                                          |
| 283 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                   |
| 284 | m4:move      |                                                                                          |
| 284 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}           |
| 285 | m4:move      |                                                                                          |
| 285 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"} |
| 286 | m4:move      |                                                                                          |
| 286 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}             |
| 287 | m4:move      |                                                                                          |
| 287 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}       |
| 288 | m4:move      |                                                                                          |
| 288 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}       |
| 289 | m4:move      |                                                                                          |
| 289 | m4:param     | name=CSP_RP_PROYECCIONES; value=SSE_DATOS_PROYECCION                                     |
| 290 | m4:move      |                                                                                          |
| 290 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                     |
| 291 | m4:move      |                                                                                          |
| 291 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                   |
| 292 | m4:move      |                                                                                          |
| 292 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                   |
| 293 | m4:move      |                                                                                          |
| 293 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                 |

| L    | Operación        | Argumentos literales                                  |
| ---- | ---------------- | ----------------------------------------------------- |
| 248  | setItem          | zsubsesion,zsubsesion,"","ANIO",anio                  |
| 325  | getCountInClient | znodoDP,zsubsesion,znodoDP                            |
| 326  | getCountInClient | znodoSC,zsubsesion,znodoSC                            |
| 327  | getCountInClient | znodoCC,zsubsesion,znodoCC                            |
| 328  | getCountInClient | znodoCF,zsubsesion,znodoCF                            |
| 329  | getCountInClient | znodoTF,zsubsesion,znodoTF                            |
| 330  | getCountInClient | znodoRV,zsubsesion,znodoRV                            |
| 331  | getCountInClient | znodoTV,zsubsesion,znodoTV                            |
| 332  | getCountInClient | znodoBV,zsubsesion,znodoBV                            |
| 333  | getCountInClient | znodoSS,zsubsesion,znodoSS                            |
| 334  | getCountInClient | znodoVE,zsubsesion,znodoVE                            |
| 335  | getCountInClient | znodoCS,zsubsesion,znodoCS                            |
| 337  | getCountInClient | znodoCJ,zsubsesion,znodoCJ                            |
| 338  | getCountInClient | znodoPE,zsubsesion,znodoPE                            |
| 339  | getCountInClient | znodoIF,zsubsesion,znodoIF                            |
| 340  | getCountInClient | znodoAY,zsubsesion,znodoAY                            |
| 341  | getCountInClient | znodoDK,zsubsesion,znodoDK                            |
| 342  | getCountInClient | znodoCM,zsubsesion,znodoCM                            |
| 343  | getCountInClient | znodoRF,zsubsesion,znodoRF                            |
| 377  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_REAL"            |
| 378  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA_TOT"            |
| 379  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA01"              |
| 380  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA02"              |
| 381  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA03"              |
| 382  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA04"              |
| 383  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA05"              |
| 384  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA06"              |
| 385  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA07"              |
| 386  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA08"              |
| 387  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA09"              |
| 388  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA10"              |
| 389  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA11"              |
| 390  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA12"              |
| 391  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA13"              |
| 392  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA14"              |
| 393  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA15"              |
| 394  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA16"              |
| 395  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA17"              |
| 396  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA18"              |
| 397  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA19"              |
| 398  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA20"              |
| 399  | getItem          | znodoDP,zmeta4object,znodoDP,"","SCO_N_WORK_LOCATION" |
| 400  | getItem          | znodoDP,zmeta4object,znodoDP,"","SSP_NM_CATEGORIA"    |
| 401  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_ID_HR"           |
| 402  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FAMILY_NAME_1" |
| 403  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FIRST_NAME"    |
| 404  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_OR_HR_PERIOD"    |
| 405  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_COUNT_COL"       |
| 481  | getItem          | znodoSC,zmeta4object,znodoSC,"","TOTAL"               |
| 482  | getItem          | znodoSC,zmeta4object,znodoSC,"","ID_ITEM"             |
| 483  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA01"              |
| 484  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA02"              |
| 485  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA03"              |
| 486  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA04"              |
| 487  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA05"              |
| 488  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA06"              |
| 489  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA07"              |
| 490  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA08"              |
| 491  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA09"              |
| 492  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA10"              |
| 493  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA11"              |
| 494  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA12"              |
| 495  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA13"              |
| 496  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA14"              |
| 497  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA15"              |
| 498  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA16"              |
| 499  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA17"              |
| 500  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA18"              |
| 501  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA19"              |
| 502  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA20"              |
| 572  | getItem          | znodoCC,zmeta4object,znodoCC,"","TOTAL"               |
| 573  | getItem          | znodoCC,zmeta4object,znodoCC,"","ID_ITEM"             |
| 574  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA01"              |
| 575  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA02"              |
| 576  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA03"              |
| 577  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA04"              |
| 578  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA05"              |
| 579  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA06"              |
| 580  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA07"              |
| 581  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA08"              |
| 582  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA09"              |
| 583  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA10"              |
| 584  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA11"              |
| 585  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA12"              |
| 586  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA13"              |
| 587  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA14"              |
| 588  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA15"              |
| 589  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA16"              |
| 590  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA17"              |
| 591  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA18"              |
| 592  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA19"              |
| 593  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA20"              |
| 659  | getItem          | znodoCF,zmeta4object,znodoCF,"","TOTAL"               |
| 660  | getItem          | znodoCF,zmeta4object,znodoCF,"","ID_ITEM"             |
| 661  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA01"              |
| 662  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA02"              |
| 663  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA03"              |
| 664  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA04"              |
| 665  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA05"              |
| 666  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA06"              |
| 667  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA07"              |
| 668  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA08"              |
| 669  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA09"              |
| 670  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA10"              |
| 671  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA11"              |
| 672  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA12"              |
| 673  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA13"              |
| 674  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA14"              |
| 675  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA15"              |
| 676  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA16"              |
| 677  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA17"              |
| 678  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA18"              |
| 679  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA19"              |
| 680  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA20"              |
| 733  | getItem          | znodoTF,zmeta4object,znodoTF,"","TOTAL"               |
| 734  | getItem          | znodoTF,zmeta4object,znodoTF,"","ID_ITEM"             |
| 735  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA01"              |
| 736  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA02"              |
| 737  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA03"              |
| 738  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA04"              |
| 739  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA05"              |
| 740  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA06"              |
| 741  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA07"              |
| 742  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA08"              |
| 743  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA09"              |
| 744  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA10"              |
| 745  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA11"              |
| 746  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA12"              |
| 747  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA13"              |
| 748  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA14"              |
| 749  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA15"              |
| 750  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA16"              |
| 751  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA17"              |
| 752  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA18"              |
| 753  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA19"              |
| 754  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA20"              |
| 819  | getItem          | znodoRV,zmeta4object,znodoRV,"","TOTAL"               |
| 820  | getItem          | znodoRV,zmeta4object,znodoRV,"","ID_ITEM"             |
| 821  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA01"              |
| 822  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA02"              |
| 823  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA03"              |
| 824  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA04"              |
| 825  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA05"              |
| 826  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA06"              |
| 827  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA07"              |
| 828  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA08"              |
| 829  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA09"              |
| 830  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA10"              |
| 831  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA11"              |
| 832  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA12"              |
| 833  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA13"              |
| 834  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA14"              |
| 835  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA15"              |
| 836  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA16"              |
| 837  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA17"              |
| 838  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA18"              |
| 839  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA19"              |
| 840  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA20"              |
| 903  | getItem          | znodoTV,zmeta4object,znodoTV,"","TOTAL"               |
| 904  | getItem          | znodoTV,zmeta4object,znodoTV,"","ID_ITEM"             |
| 905  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA01"              |
| 906  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA02"              |
| 907  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA03"              |
| 908  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA04"              |
| 909  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA05"              |
| 910  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA06"              |
| 911  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA07"              |
| 912  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA08"              |
| 913  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA09"              |
| 914  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA10"              |
| 915  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA11"              |
| 916  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA12"              |
| 917  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA13"              |
| 918  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA14"              |
| 919  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA15"              |
| 920  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA16"              |
| 921  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA17"              |
| 922  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA18"              |
| 923  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA19"              |
| 924  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA20"              |
| 983  | getItem          | znodoBV,zmeta4object,znodoBV,"","ID_ITEM"             |
| 984  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA01"              |
| 985  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA02"              |
| 986  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA03"              |
| 987  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA04"              |
| 988  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA05"              |
| 989  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA06"              |
| 990  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA07"              |
| 991  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA08"              |
| 992  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA09"              |
| 993  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA10"              |
| 994  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA11"              |
| 995  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA12"              |
| 996  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA13"              |
| 997  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA14"              |
| 998  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA15"              |
| 999  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA16"              |
| 1000 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA17"              |
| 1001 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA18"              |
| 1002 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA19"              |
| 1003 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA20"              |
| 1076 | getItem          | znodoSS,zmeta4object,znodoSS,"","TOTAL"               |
| 1077 | getItem          | znodoSS,zmeta4object,znodoSS,"","ID_ITEM"             |
| 1078 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA01"              |
| 1079 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA02"              |
| 1080 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA03"              |
| 1081 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA04"              |
| 1082 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA05"              |
| 1083 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA06"              |
| 1084 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA07"              |
| 1085 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA08"              |
| 1086 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA09"              |
| 1087 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA10"              |
| 1088 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA11"              |
| 1089 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA12"              |
| 1090 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA13"              |
| 1091 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA14"              |
| 1092 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA15"              |
| 1093 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA16"              |
| 1094 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA17"              |
| 1095 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA18"              |
| 1096 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA19"              |
| 1097 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA20"              |
| 1175 | getItem          | znodoVE,zmeta4object,znodoVE,"","TOTAL"               |
| 1176 | getItem          | znodoVE,zmeta4object,znodoVE,"","ID_ITEM"             |
| 1177 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA01"              |
| 1178 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA02"              |
| 1179 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA03"              |
| 1180 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA04"              |
| 1181 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA05"              |
| 1182 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA06"              |
| 1183 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA07"              |
| 1184 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA08"              |
| 1185 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA09"              |
| 1186 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA10"              |
| 1187 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA11"              |
| 1188 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA12"              |
| 1189 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA13"              |
| 1190 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA14"              |
| 1191 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA15"              |
| 1192 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA16"              |
| 1193 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA17"              |
| 1194 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA18"              |
| 1195 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA19"              |
| 1196 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA20"              |
| 1301 | getItem          | znodoCS,zmeta4object,znodoCS,"","TOTAL"               |
| 1302 | getItem          | znodoCS,zmeta4object,znodoCS,"","ID_ITEM"             |
| 1303 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA01"              |
| 1304 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA02"              |
| 1305 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA03"              |
| 1306 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA04"              |
| 1307 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA05"              |
| 1308 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA06"              |
| 1309 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA07"              |
| 1310 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA08"              |
| 1311 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA09"              |
| 1312 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA10"              |
| 1313 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA11"              |
| 1314 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA12"              |
| 1315 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA13"              |
| 1316 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA14"              |
| 1317 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA15"              |
| 1318 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA16"              |
| 1319 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA17"              |
| 1320 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA18"              |
| 1321 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA19"              |
| 1322 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA20"              |
| 1437 | getItem          | znodoAY,zmeta4object,znodoAY,"","TOTAL"               |
| 1438 | getItem          | znodoAY,zmeta4object,znodoAY,"","ID_ITEM"             |
| 1439 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA01"              |
| 1440 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA02"              |
| 1441 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA03"              |
| 1442 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA04"              |
| 1443 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA05"              |
| 1444 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA06"              |
| 1445 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA07"              |
| 1446 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA08"              |
| 1447 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA09"              |
| 1448 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA10"              |
| 1449 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA11"              |
| 1450 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA12"              |
| 1451 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA13"              |
| 1452 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA14"              |
| 1453 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA15"              |
| 1454 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA16"              |
| 1455 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA17"              |
| 1456 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA18"              |
| 1457 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA19"              |
| 1458 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA20"              |
| 1584 | getItem          | znodoCM,zmeta4object,znodoCM,"","TOTAL"               |
| 1585 | getItem          | znodoCM,zmeta4object,znodoCM,"","ID_ITEM"             |
| 1586 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA01"              |
| 1587 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA02"              |
| 1588 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA03"              |
| 1589 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA04"              |
| 1590 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA05"              |
| 1591 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA06"              |
| 1592 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA07"              |
| 1593 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA08"              |
| 1594 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA09"              |
| 1595 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA10"              |
| 1596 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA11"              |
| 1597 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA12"              |
| 1598 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA13"              |
| 1599 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA14"              |
| 1600 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA15"              |
| 1601 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA16"              |
| 1602 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA17"              |
| 1603 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA18"              |
| 1604 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA19"              |
| 1605 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA20"              |
| 1684 | getItem          | znodoDK,zmeta4object,znodoDK,"","TOTAL"               |
| 1685 | getItem          | znodoDK,zmeta4object,znodoDK,"","ID_ITEM"             |
| 1686 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA01"              |
| 1687 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA02"              |
| 1688 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA03"              |
| 1689 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA04"              |
| 1690 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA05"              |
| 1691 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA06"              |
| 1692 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA07"              |
| 1693 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA08"              |
| 1694 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA09"              |
| 1695 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA10"              |
| 1696 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA11"              |
| 1697 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA12"              |
| 1698 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA13"              |
| 1699 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA14"              |
| 1700 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA15"              |
| 1701 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA16"              |
| 1702 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA17"              |
| 1703 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA18"              |
| 1704 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA19"              |
| 1705 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA20"              |
| 1785 | getItem          | znodoRF,zmeta4object,znodoRF,"","TOTAL"               |
| 1786 | getItem          | znodoRF,zmeta4object,znodoRF,"","ID_ITEM"             |
| 1787 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA01"              |
| 1788 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA02"              |
| 1789 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA03"              |
| 1790 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA04"              |
| 1791 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA05"              |
| 1792 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA06"              |
| 1793 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA07"              |
| 1794 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA08"              |
| 1795 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA09"              |
| 1796 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA10"              |
| 1797 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA11"              |
| 1798 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA12"              |
| 1799 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA13"              |
| 1800 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA14"              |
| 1801 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA15"              |
| 1802 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA16"              |
| 1803 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA17"              |
| 1804 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA18"              |
| 1805 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA19"              |
| 1806 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA20"              |
| 1881 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM"             |
| 1882 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","PAGA01"              |
| 1883 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","TOTAL"               |
| 1988 | getItem          | znodoPE,zmeta4object,znodoPE,"","ID_ITEM"             |
| 1989 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2110 | getItem          | znodoIF,zmeta4object,znodoIF,"","ID_ITEM"             |
| 2111 | getItem          | znodoIF,zmeta4object,znodoIF,"","TOTAL"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 60  | guion   | cadena     |

| L    | Condición / acción / mensaje literal                                                                                                                                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14   | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";}                                                                                                                                                                                                             |
| 236  | &lt;% if(useSet(puedenver, matricula)){ %&gt;                                                                                                                                                                                                                           |
| 350  | &lt;% if(zposicionsc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 519  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 538  | &lt;% if(zposicioncc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 609  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 625  | &lt;% if(zposicioncf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 696  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 712  | &lt;% if(zposiciontf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 782  | &lt;% if(zposicionrv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 857  | if(contador == '&lt;%=zposicionrv%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 876  | &lt;% if(zposiciontv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 964  | &lt;% if(zposicionbv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1039 | &lt;% if(zposicionss &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1114 | if(contador == '&lt;%=zposicionss%&gt;') {ultimaFila = true;}                                                                                                                                                                                                           |
| 1142 | &lt;% if(zposicionve &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1200 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1226 | if(contador == '&lt;%=zposicionve%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1235 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1249 | if(contador == parseFloat('&lt;%=zposicionve%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1280 | &lt;% if(zposicioncs &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1326 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1354 | if(contador == '&lt;%=zposicioncs%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1365 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1377 | if(contador == parseFloat('&lt;%=zposicioncs%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1416 | &lt;% if(zposicionay &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1462 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1492 | if(contador == '&lt;%=zposicionay%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1502 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1515 | if(contador == parseFloat('&lt;%=zposicionay%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1547 | &lt;% if(zposicioncm &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1622 | if(contador == '&lt;%=zposicioncm%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1647 | &lt;% if(zposiciondk &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1722 | if(contador == '&lt;%=zposiciondk%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1748 | &lt;% if(zposicionrf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1823 | if(contador == '&lt;%=zposicionrf%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1841 | &lt;% if(zposicioncj &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1905 | if(contador == '&lt;%=zposicioncj%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1930 | &lt;% if(zposicionpe &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2003 | if (concepto == "Aportación Ordinaria PPSE") {vOrdinaria = importe;}                                                                                                                                                                                                    |
| 2004 | if (concepto == "Aportación Extraordinaria PPSE") {vExtraordinaria = importe;}                                                                                                                                                                                          |
| 2005 | if (concepto == "Aportación PPSE Ordinaria Acumulada") {vOrdinariaAcum = importe;}                                                                                                                                                                                      |
| 2006 | if (concepto == "Aportación PPSE Extraordinaria Acumulada") {vExtraordinariaAcum = importe;}                                                                                                                                                                            |
| 2010 | if (vExtraordinaria &gt; vOrdinaria) {vExtraordinaria = vOrdinaria;}                                                                                                                                                                                                    |
| 2067 | &lt;% if(zposicionif &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2138 | if(contador == '&lt;%=zposicionif%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
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
| 347  | expresión de cálculo/transformación: String id = String.valueOf(zposiciondp - 1);                                                                                                                                                                                       |
| 416  | expresión de cálculo/transformación: NumColtotales = parseFloat(NumColtotales);                                                                                                                                                                                         |
| 1877 | expresión de cálculo/transformación: id = String.valueOf(zposicioncj - 1);                                                                                                                                                                                              |
| 2000 | expresión de cálculo/transformación: importe = parseFloat('&lt;%=zTOTAL%&gt;');                                                                                                                                                                                         |
| 2015 | expresión de cálculo/transformación: total = vOrdinaria + vExtraordinaria;                                                                                                                                                                                              |
| 2016 | expresión de cálculo/transformación: totalAcum = vOrdinariaAcum + vExtraordinariaAcum;                                                                                                                                                                                  |
| 2017 | expresión de cálculo/transformación: totalOrdinario = vOrdinaria + vOrdinariaAcum;                                                                                                                                                                                      |
| 2018 | expresión de cálculo/transformación: totalExtraOrdinario = vExtraordinaria + vExtraordinariaAcum;                                                                                                                                                                       |
| 2019 | expresión de cálculo/transformación: totaldetotales = totalOrdinario + totalExtraOrdinario;                                                                                                                                                                             |
| 2038 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal1 + '&lt;/td&gt;');               |
| 2039 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;'); |
| 2040 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[1] +'&lt;/td&gt;');  |
| 2041 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[0] + '&lt;/td&gt;');           |
| 2047 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal2 + '&lt;/td&gt;');               |
| 2048 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[2] + '&lt;/td&gt;'); |
| 2049 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[3] +'&lt;/td&gt;');  |
| 2050 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[1] + '&lt;/td&gt;');           |
| 2127 | expresión de cálculo/transformación: totalAsumar = parseFloat(totalAsumar.replace("0000",""));                                                                                                                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                             |
| --- | --------------------------------------------- |
| 25  | /css/estilo_sse.css                           |
| 26  | /css/tabla.css                                |
| 27  | /css/style_persdata.css                       |
| 28  | /library/jquery.js                            |
| 29  | /libreria/functions_proyecciones.js           |
| 237 | ./proyecciones/index.jsp?anio=&lt;%=anio%&gt; |
| 357 | /iconos/logo_cyc.jpg                          |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g2/espanol/sse_g2_inf_proyec.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L    | Texto literal / etiqueta                                                  |
| ---- | ------------------------------------------------------------------------- |
| 25   | PROYECCION TEÓRICA DE HABERES                                             |
| 244  | Nuevo V1                                                                  |
| 369  | PROYECCIÓN TEÓRICA HABERES AÑO [valor dinámico]                           |
| 434  | [valor dinámico] [valor dinámico] [valor dinámico]                        |
| 441  | CENTRO DE TRABAJO                                                         |
| 452  | RETRIBUCIÓN DIRECTA                                                       |
| 1155 | RETRIBUCIÓN INDIRECTA. Beneficios Sociales.                               |
| 1276 | Total                                                                     |
| 1409 | Total                                                                     |
| 1543 | Total                                                                     |
| 1875 | COMPROMISOS A LA JUBILACIÓN (Último estudio actuarial ejercicio anterior) |
| 1937 | Total                                                                     |
| 2016 | PLAN PREVISIÓN SOCIAL EMPRESARIAL                                         |
| 2022 | SEGURO APORTACIÓN DEFINIDA CONVENIO COLECTIVO                             |
| 2115 | Seguro Aportación Definida Convenio Colectivo                             |
| 2135 | Aportación último año                                                     |
| 2155 | Aportación Acumulada                                                      |
| 2163 | Total                                                                     |
| 2173 | Total                                                                     |
| 2197 | SEGURO APORTACIÓN DEFINIDA CONVENIO COLECTIVO                             |
| 2209 | Seguro Aportación Definida Convenio Colectivo                             |
| 2213 | Aportación último año                                                     |
| 2217 | Aportación Acumulada                                                      |
| 2222 | Total                                                                     |
| 2246 | INVERSIÓN en FORMACIÓN                                                    |
| 2257 | Inversion Individual en Formacion                                         |
| 2316 | Total                                                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                         |
| --- | ------- | ----------------------------------------------------------------- |
| 244 | a       | href=./proyecciones/index.jsp?anio=&lt;%=anio%&gt;; target=_blank |
| 368 | img     | border=0; src=/iconos/logo_cyc.jpg                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal               |
| --- | --------------- | ---------------------------- |
| 14  | anio            | getParameter(request,"anio") |
| 233 | zIdPerson       | getBagEntries("zIdPerson")   |

| L    | Variable             | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| ---- | -------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 14   | anio                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio")                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"anio")                                    |
| 71   | zsubsesion           | "CSP_RP_PROYECCIONES"                                                                               | CSP_RP_PROYECCIONES                                                                                 |
| 72   | zmeta4object         | "CSP_RP_PROYECCIONES"                                                                               | CSP_RP_PROYECCIONES                                                                                 |
| 73   | znodoDP              | "SSE_DATOS_PROYECCION"                                                                              | SSE_DATOS_PROYECCION                                                                                |
| 74   | znodoSC              | "CSP_SALARIO_CONVENIO"                                                                              | CSP_SALARIO_CONVENIO                                                                                |
| 75   | znodoCC              | "CSP_COMP_ORG"                                                                                      | CSP_COMP_ORG                                                                                        |
| 76   | znodoCF              | "CSP_COMP_FUNCIONAL"                                                                                | CSP_COMP_FUNCIONAL                                                                                  |
| 77   | znodoTF              | "CSP_TOTAL_RET_FIJA"                                                                                | CSP_TOTAL_RET_FIJA                                                                                  |
| 78   | znodoRV              | "CSP_RET_VAR"                                                                                       | CSP_RET_VAR                                                                                         |
| 79   | znodoTV              | "CSP_TOT_RET_VAR"                                                                                   | CSP_TOT_RET_VAR                                                                                     |
| 80   | znodoBV              | "CSP_BASE_RET_VAR"                                                                                  | CSP_BASE_RET_VAR                                                                                    |
| 81   | znodoSS              | "CSP_SEG_SOC"                                                                                       | CSP_SEG_SOC                                                                                         |
| 84   | znodoVE              | "CSP_VAL_ESPECIE"                                                                                   | CSP_VAL_ESPECIE                                                                                     |
| 85   | znodoCS              | "CSP_CONTRATO_SEGUROS"                                                                              | CSP_CONTRATO_SEGUROS                                                                                |
| 86   | znodoCJ              | "CSP_COMPRO_JUB"                                                                                    | CSP_COMPRO_JUB                                                                                      |
| 87   | znodoPE              | "CSP_PLAN_PREV_EMP"                                                                                 | CSP_PLAN_PREV_EMP                                                                                   |
| 88   | znodoRP              | "CSP_RP_APORTACION_DEFINIDA"                                                                        | CSP_RP_APORTACION_DEFINIDA                                                                          |
| 89   | znodoIF              | "CSP_INV_FORMACION"                                                                                 | CSP_INV_FORMACION                                                                                   |
| 90   | znodoAY              | "CSP_AYUDAS"                                                                                        | CSP_AYUDAS                                                                                          |
| 91   | znodoDK              | "CSP_DIET_KM"                                                                                       | CSP_DIET_KM                                                                                         |
| 92   | znodoCM              | "CSP_COMIDAS"                                                                                       | CSP_COMIDAS                                                                                         |
| 93   | znodoRF              | "CSP_RET_FLEX"                                                                                      | CSP_RET_FLEX                                                                                        |
| 95   | zmetodocarga         | zsubsesion +"!CSP_RP_PROYECCIONES.CSP_CARGA"                                                        | CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                                                   |
| 98   | zoutputdefDP         | zsubsesion + "!" + znodoDP + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                                                 |
| 99   | zmoveDP              | znodoDP + ":" + znodoDP + "[FIRST]"                                                                 | SSE_DATOS_PROYECCION{":"}SSE_DATOS_PROYECCION{"[FIRST]"}                                            |
| 103  | zoutputdefSC         | zsubsesion + "!" + znodoSC + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                                                 |
| 104  | zmoveSC              | znodoSC + ":" + znodoSC + "[FIRST]"                                                                 | CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"}                                            |
| 108  | zoutputdefCC         | zsubsesion + "!" + znodoCC + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                                                         |
| 109  | zmoveCC              | znodoCC + ":" + znodoCC + "[FIRST]"                                                                 | CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                                                            |
| 113  | zoutputdefCF         | zsubsesion + "!" + znodoCF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                                                   |
| 114  | zmoveCF              | znodoCF + ":" + znodoCF + "[FIRST]"                                                                 | CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}                                                |
| 118  | zoutputdefTF         | zsubsesion + "!" + znodoTF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                                                   |
| 119  | zmoveTF              | znodoTF + ":" + znodoTF + "[FIRST]"                                                                 | CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}                                                |
| 123  | zoutputdefRV         | zsubsesion + "!" + znodoRV + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                                                          |
| 124  | zmoveRV              | znodoRV + ":" + znodoRV + "[FIRST]"                                                                 | CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                                                              |
| 128  | zoutputdefTV         | zsubsesion + "!" + znodoTV + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                                                      |
| 129  | zmoveTV              | znodoTV + ":" + znodoTV + "[FIRST]"                                                                 | CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}                                                      |
| 133  | zoutputdefBV         | zsubsesion + "!" + znodoBV + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                                                     |
| 134  | zmoveBV              | znodoBV + ":" + znodoBV + "[FIRST]"                                                                 | CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}                                                    |
| 138  | zoutputdefSS         | zsubsesion + "!" + znodoSS + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                                                          |
| 139  | zmoveSS              | znodoSS + ":" + znodoSS + "[FIRST]"                                                                 | CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                                                              |
| 143  | zoutputdefVE         | zsubsesion + "!" + znodoVE + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                                                      |
| 144  | zmoveVE              | znodoVE + ":" + znodoVE + "[FIRST]"                                                                 | CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}                                                      |
| 148  | zoutputdefCS         | zsubsesion + "!" + znodoCS + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                                                 |
| 149  | zmoveCS              | znodoCS + ":" + znodoCS + "[FIRST]"                                                                 | CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"}                                            |
| 153  | zoutputdefCJ         | zsubsesion + "!" + znodoCJ + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                                                       |
| 154  | zmoveCJ              | znodoCJ + ":" + znodoCJ + "[FIRST]"                                                                 | CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}                                                        |
| 158  | zoutputdefPE         | zsubsesion + "!" + znodoPE + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                                                    |
| 159  | zmovePE              | znodoPE + ":" + znodoPE + "[FIRST]"                                                                 | CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}                                                  |
| 163  | zoutputdefRP         | zsubsesion + "!" + znodoRP + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_RP_APORTACION_DEFINIDA{"[*]"}                                           |
| 164  | zmoveRP              | znodoRP + ":" + znodoRP + "[FIRST]"                                                                 | CSP_RP_APORTACION_DEFINIDA{":"}CSP_RP_APORTACION_DEFINIDA{"[FIRST]"}                                |
| 168  | zoutputdefIF         | zsubsesion + "!" + znodoIF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                                                    |
| 169  | zmoveIF              | znodoIF + ":" + znodoIF + "[FIRST]"                                                                 | CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}                                                  |
| 172  | zoutputdefAY         | zsubsesion + "!" + znodoAY + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                                                           |
| 173  | zmoveAY              | znodoAY + ":" + znodoAY + "[FIRST]"                                                                 | CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                                                                |
| 177  | zoutputdefDK         | zsubsesion + "!" + znodoDK + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                                                          |
| 178  | zmoveDK              | znodoDK + ":" + znodoDK + "[FIRST]"                                                                 | CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                                                              |
| 182  | zoutputdefCM         | zsubsesion + "!" + znodoCM + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                                                          |
| 183  | zmoveCM              | znodoCM + ":" + znodoCM + "[FIRST]"                                                                 | CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                                                              |
| 187  | zoutputdefRF         | zsubsesion + "!" + znodoRF + "[*]"                                                                  | CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                                                         |
| 188  | zmoveRF              | znodoRF + ":" + znodoRF + "[FIRST]"                                                                 | CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                                                            |
| 192  | zCSP_REAL            | ""                                                                                                  |                                                                                                     |
| 193  | zPAGA_TOT            | ""                                                                                                  |                                                                                                     |
| 194  | zPAGA01              | ""                                                                                                  |                                                                                                     |
| 195  | zPAGA02              | ""                                                                                                  |                                                                                                     |
| 196  | zPAGA03              | ""                                                                                                  |                                                                                                     |
| 197  | zPAGA04              | ""                                                                                                  |                                                                                                     |
| 198  | zPAGA05              | ""                                                                                                  |                                                                                                     |
| 199  | zPAGA06              | ""                                                                                                  |                                                                                                     |
| 200  | zPAGA07              | ""                                                                                                  |                                                                                                     |
| 201  | zPAGA08              | ""                                                                                                  |                                                                                                     |
| 202  | zPAGA09              | ""                                                                                                  |                                                                                                     |
| 203  | zPAGA10              | ""                                                                                                  |                                                                                                     |
| 204  | zPAGA11              | ""                                                                                                  |                                                                                                     |
| 205  | zPAGA12              | ""                                                                                                  |                                                                                                     |
| 206  | zPAGA13              | ""                                                                                                  |                                                                                                     |
| 207  | zPAGA14              | ""                                                                                                  |                                                                                                     |
| 208  | zPAGA15              | ""                                                                                                  |                                                                                                     |
| 209  | zPAGA16              | ""                                                                                                  |                                                                                                     |
| 210  | zPAGA17              | ""                                                                                                  |                                                                                                     |
| 211  | zPAGA18              | ""                                                                                                  |                                                                                                     |
| 212  | zPAGA19              | ""                                                                                                  |                                                                                                     |
| 213  | zPAGA20              | ""                                                                                                  |                                                                                                     |
| 214  | zSCO_N_WORK_LOCATION | ""                                                                                                  |                                                                                                     |
| 215  | zSSP_NM_CATEGORIA    | ""                                                                                                  |                                                                                                     |
| 216  | zSTD_ID_HR           | ""                                                                                                  |                                                                                                     |
| 217  | zSTD_N_FAMILY_NAME_1 | ""                                                                                                  |                                                                                                     |
| 218  | zSTD_N_FIRST_NAME    | ""                                                                                                  |                                                                                                     |
| 219  | zSTD_OR_HR_PERIOD    | ""                                                                                                  |                                                                                                     |
| 220  | zCSP_COUNT_COL       | ""                                                                                                  |                                                                                                     |
| 221  | zID_ITEM             | ""                                                                                                  |                                                                                                     |
| 223  | zID_ITEM_2           | ""                                                                                                  |                                                                                                     |
| 225  | zTOTAL               | ""                                                                                                  |                                                                                                     |
| 233  | matricula            | zsesionDA.getBagEntries("zIdPerson")                                                                | zsesionDA.getBagEntries("zIdPerson")                                                                |
| 234  | matriculaEnc         | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) |
| 310  | zposiciondp          | 0                                                                                                   | 0                                                                                                   |
| 311  | zposicionsc          | 0                                                                                                   | 0                                                                                                   |
| 312  | zposicioncc          | 0                                                                                                   | 0                                                                                                   |
| 313  | zposicioncf          | 0                                                                                                   | 0                                                                                                   |
| 314  | zposiciontf          | 0                                                                                                   | 0                                                                                                   |
| 315  | zposicionrv          | 0                                                                                                   | 0                                                                                                   |
| 316  | zposiciontv          | 0                                                                                                   | 0                                                                                                   |
| 317  | zposicionbv          | 0                                                                                                   | 0                                                                                                   |
| 318  | zposicionss          | 0                                                                                                   | 0                                                                                                   |
| 319  | zposicionve          | 0                                                                                                   | 0                                                                                                   |
| 320  | zposicioncs          | 0                                                                                                   | 0                                                                                                   |
| 322  | zposicioncj          | 0                                                                                                   | 0                                                                                                   |
| 323  | zposicionpe          | 0                                                                                                   | 0                                                                                                   |
| 324  | zposicionrp          | 0                                                                                                   | 0                                                                                                   |
| 325  | zposicionif          | 0                                                                                                   | 0                                                                                                   |
| 326  | zposicionay          | 0                                                                                                   | 0                                                                                                   |
| 327  | zposiciondk          | 0                                                                                                   | 0                                                                                                   |
| 328  | zposicioncm          | 0                                                                                                   | 0                                                                                                   |
| 329  | zposicionrf          | 0                                                                                                   | 0                                                                                                   |
| 331  | i                    | 0                                                                                                   | 0                                                                                                   |
| 358  | id                   | String.valueOf(zposiciondp - 1)                                                                     | String.valueOf(zposiciondp - 1)                                                                     |
| 1951 | auxval01             | ""                                                                                                  |                                                                                                     |
| 1952 | dauxval01            | 0.0                                                                                                 | 0.0                                                                                                 |
| 1953 | auxval02             | ""                                                                                                  |                                                                                                     |
| 1954 | dauxval02            | 0.0                                                                                                 | 0.0                                                                                                 |
| 1955 | auxtot01             | ""                                                                                                  |                                                                                                     |
| 1956 | dauxtot01            | 0.0                                                                                                 | 0.0                                                                                                 |
| 1957 | auxid                | ""                                                                                                  |                                                                                                     |
| 1958 | auxzTOTAL            | ""                                                                                                  |                                                                                                     |
| 1959 | auxzID_ITEM          | ""                                                                                                  |                                                                                                     |
| 1960 | numpaga              | zCSP_REAL.split("\\.")[0]                                                                           | zCSP_REAL.split("\\.")[0]                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------- |
| 247 | m4:startpage | m4task=CSP_RP_PROYECCIONES                                                                           |
| 249 | m4:beginjob  |                                                                                                      |
| 250 | m4:datadef   | m4o=CSP_RP_PROYECCIONES; m4name=CSP_RP_PROYECCIONES                                                  |
| 259 | m4:exec      | m4method=CSP_RP_PROYECCIONES!CSP_RP_PROYECCIONES.CSP_CARGA                                           |
| 261 | m4:outputdef | m4alias=SSE_DATOS_PROYECCION                                                                         |
| 261 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}SSE_DATOS_PROYECCION{"[*]"}                              |
| 262 | m4:outputdef | m4alias=CSP_SALARIO_CONVENIO                                                                         |
| 262 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SALARIO_CONVENIO{"[*]"}                              |
| 263 | m4:outputdef | m4alias=CSP_COMP_ORG                                                                                 |
| 263 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_ORG{"[*]"}                                      |
| 264 | m4:outputdef | m4alias=CSP_COMP_FUNCIONAL                                                                           |
| 264 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMP_FUNCIONAL{"[*]"}                                |
| 265 | m4:outputdef | m4alias=CSP_TOTAL_RET_FIJA                                                                           |
| 265 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOTAL_RET_FIJA{"[*]"}                                |
| 266 | m4:outputdef | m4alias=CSP_RET_VAR                                                                                  |
| 266 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_VAR{"[*]"}                                       |
| 267 | m4:outputdef | m4alias=CSP_BASE_RET_VAR                                                                             |
| 267 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_BASE_RET_VAR{"[*]"}                                  |
| 268 | m4:outputdef | m4alias=CSP_TOT_RET_VAR                                                                              |
| 268 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_TOT_RET_VAR{"[*]"}                                   |
| 269 | m4:outputdef | m4alias=CSP_SEG_SOC                                                                                  |
| 269 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_SEG_SOC{"[*]"}                                       |
| 270 | m4:outputdef | m4alias=CSP_VAL_ESPECIE                                                                              |
| 270 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_VAL_ESPECIE{"[*]"}                                   |
| 271 | m4:outputdef | m4alias=CSP_CONTRATO_SEGUROS                                                                         |
| 271 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_CONTRATO_SEGUROS{"[*]"}                              |
| 272 | m4:outputdef | m4alias=CSP_COMPRO_JUB                                                                               |
| 272 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMPRO_JUB{"[*]"}                                    |
| 273 | m4:outputdef | m4alias=CSP_PLAN_PREV_EMP                                                                            |
| 273 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_PLAN_PREV_EMP{"[*]"}                                 |
| 274 | m4:outputdef | m4alias=CSP_RP_APORTACION_DEFINIDA                                                                   |
| 274 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RP_APORTACION_DEFINIDA{"[*]"}                        |
| 275 | m4:outputdef | m4alias=CSP_INV_FORMACION                                                                            |
| 275 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_INV_FORMACION{"[*]"}                                 |
| 276 | m4:outputdef | m4alias=CSP_AYUDAS                                                                                   |
| 276 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_AYUDAS{"[*]"}                                        |
| 277 | m4:outputdef | m4alias=CSP_DIET_KM                                                                                  |
| 277 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_DIET_KM{"[*]"}                                       |
| 278 | m4:outputdef | m4alias=CSP_COMIDAS                                                                                  |
| 278 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_COMIDAS{"[*]"}                                       |
| 279 | m4:outputdef | m4alias=CSP_RET_FLEX                                                                                 |
| 279 | m4:param     | name=m4name0; value=CSP_RP_PROYECCIONES{"!"}CSP_RET_FLEX{"[*]"}                                      |
| 281 | m4:endjob    |                                                                                                      |
| 283 | m4:move      |                                                                                                      |
| 283 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"}             |
| 284 | m4:move      |                                                                                                      |
| 284 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SALARIO_CONVENIO{":"}CSP_SALARIO_CONVENIO{"[FIRST]"}             |
| 285 | m4:move      |                                                                                                      |
| 285 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_ORG{":"}CSP_COMP_ORG{"[FIRST]"}                             |
| 286 | m4:move      |                                                                                                      |
| 286 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMP_FUNCIONAL{":"}CSP_COMP_FUNCIONAL{"[FIRST]"}                 |
| 287 | m4:move      |                                                                                                      |
| 287 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOTAL_RET_FIJA{":"}CSP_TOTAL_RET_FIJA{"[FIRST]"}                 |
| 288 | m4:move      |                                                                                                      |
| 288 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_VAR{":"}CSP_RET_VAR{"[FIRST]"}                               |
| 289 | m4:move      |                                                                                                      |
| 289 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_TOT_RET_VAR{":"}CSP_TOT_RET_VAR{"[FIRST]"}                       |
| 290 | m4:move      |                                                                                                      |
| 290 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_BASE_RET_VAR{":"}CSP_BASE_RET_VAR{"[FIRST]"}                     |
| 291 | m4:move      |                                                                                                      |
| 291 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_SEG_SOC{":"}CSP_SEG_SOC{"[FIRST]"}                               |
| 292 | m4:move      |                                                                                                      |
| 292 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_VAL_ESPECIE{":"}CSP_VAL_ESPECIE{"[FIRST]"}                       |
| 293 | m4:move      |                                                                                                      |
| 293 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_CONTRATO_SEGUROS{":"}CSP_CONTRATO_SEGUROS{"[FIRST]"}             |
| 294 | m4:move      |                                                                                                      |
| 294 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMPRO_JUB{":"}CSP_COMPRO_JUB{"[FIRST]"}                         |
| 295 | m4:move      |                                                                                                      |
| 295 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_PLAN_PREV_EMP{":"}CSP_PLAN_PREV_EMP{"[FIRST]"}                   |
| 296 | m4:move      |                                                                                                      |
| 296 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RP_APORTACION_DEFINIDA{":"}CSP_RP_APORTACION_DEFINIDA{"[FIRST]"} |
| 297 | m4:move      |                                                                                                      |
| 297 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_INV_FORMACION{":"}CSP_INV_FORMACION{"[FIRST]"}                   |
| 298 | m4:move      |                                                                                                      |
| 298 | m4:param     | name=CSP_RP_PROYECCIONES; value=SSE_DATOS_PROYECCION                                                 |
| 299 | m4:move      |                                                                                                      |
| 299 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_AYUDAS{":"}CSP_AYUDAS{"[FIRST]"}                                 |
| 300 | m4:move      |                                                                                                      |
| 300 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_DIET_KM{":"}CSP_DIET_KM{"[FIRST]"}                               |
| 301 | m4:move      |                                                                                                      |
| 301 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_COMIDAS{":"}CSP_COMIDAS{"[FIRST]"}                               |
| 302 | m4:move      |                                                                                                      |
| 302 | m4:param     | name=CSP_RP_PROYECCIONES; value=CSP_RET_FLEX{":"}CSP_RET_FLEX{"[FIRST]"}                             |

| L    | Operación        | Argumentos literales                                  |
| ---- | ---------------- | ----------------------------------------------------- |
| 255  | setItem          | zsubsesion,zsubsesion,"","ANIO",anio                  |
| 335  | getCountInClient | znodoDP,zsubsesion,znodoDP                            |
| 336  | getCountInClient | znodoSC,zsubsesion,znodoSC                            |
| 337  | getCountInClient | znodoCC,zsubsesion,znodoCC                            |
| 338  | getCountInClient | znodoCF,zsubsesion,znodoCF                            |
| 339  | getCountInClient | znodoTF,zsubsesion,znodoTF                            |
| 340  | getCountInClient | znodoRV,zsubsesion,znodoRV                            |
| 341  | getCountInClient | znodoTV,zsubsesion,znodoTV                            |
| 342  | getCountInClient | znodoBV,zsubsesion,znodoBV                            |
| 343  | getCountInClient | znodoSS,zsubsesion,znodoSS                            |
| 344  | getCountInClient | znodoVE,zsubsesion,znodoVE                            |
| 345  | getCountInClient | znodoCS,zsubsesion,znodoCS                            |
| 347  | getCountInClient | znodoCJ,zsubsesion,znodoCJ                            |
| 348  | getCountInClient | znodoPE,zsubsesion,znodoPE                            |
| 349  | getCountInClient | znodoRP,zsubsesion,znodoRP                            |
| 350  | getCountInClient | znodoIF,zsubsesion,znodoIF                            |
| 351  | getCountInClient | znodoAY,zsubsesion,znodoAY                            |
| 352  | getCountInClient | znodoDK,zsubsesion,znodoDK                            |
| 353  | getCountInClient | znodoCM,zsubsesion,znodoCM                            |
| 354  | getCountInClient | znodoRF,zsubsesion,znodoRF                            |
| 388  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_REAL"            |
| 389  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA_TOT"            |
| 390  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA01"              |
| 391  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA02"              |
| 392  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA03"              |
| 393  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA04"              |
| 394  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA05"              |
| 395  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA06"              |
| 396  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA07"              |
| 397  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA08"              |
| 398  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA09"              |
| 399  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA10"              |
| 400  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA11"              |
| 401  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA12"              |
| 402  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA13"              |
| 403  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA14"              |
| 404  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA15"              |
| 405  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA16"              |
| 406  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA17"              |
| 407  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA18"              |
| 408  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA19"              |
| 409  | getItem          | znodoDP,zmeta4object,znodoDP,"","PAGA20"              |
| 410  | getItem          | znodoDP,zmeta4object,znodoDP,"","SCO_N_WORK_LOCATION" |
| 411  | getItem          | znodoDP,zmeta4object,znodoDP,"","SSP_NM_CATEGORIA"    |
| 412  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_ID_HR"           |
| 413  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FAMILY_NAME_1" |
| 414  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_N_FIRST_NAME"    |
| 415  | getItem          | znodoDP,zmeta4object,znodoDP,"","STD_OR_HR_PERIOD"    |
| 416  | getItem          | znodoDP,zmeta4object,znodoDP,"","CSP_COUNT_COL"       |
| 492  | getItem          | znodoSC,zmeta4object,znodoSC,"","TOTAL"               |
| 493  | getItem          | znodoSC,zmeta4object,znodoSC,"","ID_ITEM"             |
| 494  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA01"              |
| 495  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA02"              |
| 496  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA03"              |
| 497  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA04"              |
| 498  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA05"              |
| 499  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA06"              |
| 500  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA07"              |
| 501  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA08"              |
| 502  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA09"              |
| 503  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA10"              |
| 504  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA11"              |
| 505  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA12"              |
| 506  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA13"              |
| 507  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA14"              |
| 508  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA15"              |
| 509  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA16"              |
| 510  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA17"              |
| 511  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA18"              |
| 512  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA19"              |
| 513  | getItem          | znodoSC,zmeta4object,znodoSC,"","PAGA20"              |
| 583  | getItem          | znodoCC,zmeta4object,znodoCC,"","TOTAL"               |
| 584  | getItem          | znodoCC,zmeta4object,znodoCC,"","ID_ITEM"             |
| 585  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA01"              |
| 586  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA02"              |
| 587  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA03"              |
| 588  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA04"              |
| 589  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA05"              |
| 590  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA06"              |
| 591  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA07"              |
| 592  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA08"              |
| 593  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA09"              |
| 594  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA10"              |
| 595  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA11"              |
| 596  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA12"              |
| 597  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA13"              |
| 598  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA14"              |
| 599  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA15"              |
| 600  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA16"              |
| 601  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA17"              |
| 602  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA18"              |
| 603  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA19"              |
| 604  | getItem          | znodoCC,zmeta4object,znodoCC,"","PAGA20"              |
| 670  | getItem          | znodoCF,zmeta4object,znodoCF,"","TOTAL"               |
| 671  | getItem          | znodoCF,zmeta4object,znodoCF,"","ID_ITEM"             |
| 672  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA01"              |
| 673  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA02"              |
| 674  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA03"              |
| 675  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA04"              |
| 676  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA05"              |
| 677  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA06"              |
| 678  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA07"              |
| 679  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA08"              |
| 680  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA09"              |
| 681  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA10"              |
| 682  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA11"              |
| 683  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA12"              |
| 684  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA13"              |
| 685  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA14"              |
| 686  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA15"              |
| 687  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA16"              |
| 688  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA17"              |
| 689  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA18"              |
| 690  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA19"              |
| 691  | getItem          | znodoCF,zmeta4object,znodoCF,"","PAGA20"              |
| 744  | getItem          | znodoTF,zmeta4object,znodoTF,"","TOTAL"               |
| 745  | getItem          | znodoTF,zmeta4object,znodoTF,"","ID_ITEM"             |
| 746  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA01"              |
| 747  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA02"              |
| 748  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA03"              |
| 749  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA04"              |
| 750  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA05"              |
| 751  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA06"              |
| 752  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA07"              |
| 753  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA08"              |
| 754  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA09"              |
| 755  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA10"              |
| 756  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA11"              |
| 757  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA12"              |
| 758  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA13"              |
| 759  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA14"              |
| 760  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA15"              |
| 761  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA16"              |
| 762  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA17"              |
| 763  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA18"              |
| 764  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA19"              |
| 765  | getItem          | znodoTF,zmeta4object,znodoTF,"","PAGA20"              |
| 830  | getItem          | znodoRV,zmeta4object,znodoRV,"","TOTAL"               |
| 831  | getItem          | znodoRV,zmeta4object,znodoRV,"","ID_ITEM"             |
| 832  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA01"              |
| 833  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA02"              |
| 834  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA03"              |
| 835  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA04"              |
| 836  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA05"              |
| 837  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA06"              |
| 838  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA07"              |
| 839  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA08"              |
| 840  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA09"              |
| 841  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA10"              |
| 842  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA11"              |
| 843  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA12"              |
| 844  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA13"              |
| 845  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA14"              |
| 846  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA15"              |
| 847  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA16"              |
| 848  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA17"              |
| 849  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA18"              |
| 850  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA19"              |
| 851  | getItem          | znodoRV,zmeta4object,znodoRV,"","PAGA20"              |
| 914  | getItem          | znodoTV,zmeta4object,znodoTV,"","TOTAL"               |
| 915  | getItem          | znodoTV,zmeta4object,znodoTV,"","ID_ITEM"             |
| 916  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA01"              |
| 917  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA02"              |
| 918  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA03"              |
| 919  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA04"              |
| 920  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA05"              |
| 921  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA06"              |
| 922  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA07"              |
| 923  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA08"              |
| 924  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA09"              |
| 925  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA10"              |
| 926  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA11"              |
| 927  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA12"              |
| 928  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA13"              |
| 929  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA14"              |
| 930  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA15"              |
| 931  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA16"              |
| 932  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA17"              |
| 933  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA18"              |
| 934  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA19"              |
| 935  | getItem          | znodoTV,zmeta4object,znodoTV,"","PAGA20"              |
| 994  | getItem          | znodoBV,zmeta4object,znodoBV,"","ID_ITEM"             |
| 995  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA01"              |
| 996  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA02"              |
| 997  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA03"              |
| 998  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA04"              |
| 999  | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA05"              |
| 1000 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA06"              |
| 1001 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA07"              |
| 1002 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA08"              |
| 1003 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA09"              |
| 1004 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA10"              |
| 1005 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA11"              |
| 1006 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA12"              |
| 1007 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA13"              |
| 1008 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA14"              |
| 1009 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA15"              |
| 1010 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA16"              |
| 1011 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA17"              |
| 1012 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA18"              |
| 1013 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA19"              |
| 1014 | getItem          | znodoBV,zmeta4object,znodoBV,"","PAGA20"              |
| 1087 | getItem          | znodoSS,zmeta4object,znodoSS,"","TOTAL"               |
| 1088 | getItem          | znodoSS,zmeta4object,znodoSS,"","ID_ITEM"             |
| 1089 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA01"              |
| 1090 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA02"              |
| 1091 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA03"              |
| 1092 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA04"              |
| 1093 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA05"              |
| 1094 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA06"              |
| 1095 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA07"              |
| 1096 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA08"              |
| 1097 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA09"              |
| 1098 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA10"              |
| 1099 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA11"              |
| 1100 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA12"              |
| 1101 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA13"              |
| 1102 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA14"              |
| 1103 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA15"              |
| 1104 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA16"              |
| 1105 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA17"              |
| 1106 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA18"              |
| 1107 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA19"              |
| 1108 | getItem          | znodoSS,zmeta4object,znodoSS,"","PAGA20"              |
| 1186 | getItem          | znodoVE,zmeta4object,znodoVE,"","TOTAL"               |
| 1187 | getItem          | znodoVE,zmeta4object,znodoVE,"","ID_ITEM"             |
| 1188 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA01"              |
| 1189 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA02"              |
| 1190 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA03"              |
| 1191 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA04"              |
| 1192 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA05"              |
| 1193 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA06"              |
| 1194 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA07"              |
| 1195 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA08"              |
| 1196 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA09"              |
| 1197 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA10"              |
| 1198 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA11"              |
| 1199 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA12"              |
| 1200 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA13"              |
| 1201 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA14"              |
| 1202 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA15"              |
| 1203 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA16"              |
| 1204 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA17"              |
| 1205 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA18"              |
| 1206 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA19"              |
| 1207 | getItem          | znodoVE,zmeta4object,znodoVE,"","PAGA20"              |
| 1312 | getItem          | znodoCS,zmeta4object,znodoCS,"","TOTAL"               |
| 1313 | getItem          | znodoCS,zmeta4object,znodoCS,"","ID_ITEM"             |
| 1314 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA01"              |
| 1315 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA02"              |
| 1316 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA03"              |
| 1317 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA04"              |
| 1318 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA05"              |
| 1319 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA06"              |
| 1320 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA07"              |
| 1321 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA08"              |
| 1322 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA09"              |
| 1323 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA10"              |
| 1324 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA11"              |
| 1325 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA12"              |
| 1326 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA13"              |
| 1327 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA14"              |
| 1328 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA15"              |
| 1329 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA16"              |
| 1330 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA17"              |
| 1331 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA18"              |
| 1332 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA19"              |
| 1333 | getItem          | znodoCS,zmeta4object,znodoCS,"","PAGA20"              |
| 1448 | getItem          | znodoAY,zmeta4object,znodoAY,"","TOTAL"               |
| 1449 | getItem          | znodoAY,zmeta4object,znodoAY,"","ID_ITEM"             |
| 1450 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA01"              |
| 1451 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA02"              |
| 1452 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA03"              |
| 1453 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA04"              |
| 1454 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA05"              |
| 1455 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA06"              |
| 1456 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA07"              |
| 1457 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA08"              |
| 1458 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA09"              |
| 1459 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA10"              |
| 1460 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA11"              |
| 1461 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA12"              |
| 1462 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA13"              |
| 1463 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA14"              |
| 1464 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA15"              |
| 1465 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA16"              |
| 1466 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA17"              |
| 1467 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA18"              |
| 1468 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA19"              |
| 1469 | getItem          | znodoAY,zmeta4object,znodoAY,"","PAGA20"              |
| 1595 | getItem          | znodoCM,zmeta4object,znodoCM,"","TOTAL"               |
| 1596 | getItem          | znodoCM,zmeta4object,znodoCM,"","ID_ITEM"             |
| 1597 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA01"              |
| 1598 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA02"              |
| 1599 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA03"              |
| 1600 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA04"              |
| 1601 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA05"              |
| 1602 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA06"              |
| 1603 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA07"              |
| 1604 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA08"              |
| 1605 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA09"              |
| 1606 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA10"              |
| 1607 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA11"              |
| 1608 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA12"              |
| 1609 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA13"              |
| 1610 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA14"              |
| 1611 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA15"              |
| 1612 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA16"              |
| 1613 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA17"              |
| 1614 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA18"              |
| 1615 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA19"              |
| 1616 | getItem          | znodoCM,zmeta4object,znodoCM,"","PAGA20"              |
| 1695 | getItem          | znodoDK,zmeta4object,znodoDK,"","TOTAL"               |
| 1696 | getItem          | znodoDK,zmeta4object,znodoDK,"","ID_ITEM"             |
| 1697 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA01"              |
| 1698 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA02"              |
| 1699 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA03"              |
| 1700 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA04"              |
| 1701 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA05"              |
| 1702 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA06"              |
| 1703 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA07"              |
| 1704 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA08"              |
| 1705 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA09"              |
| 1706 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA10"              |
| 1707 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA11"              |
| 1708 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA12"              |
| 1709 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA13"              |
| 1710 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA14"              |
| 1711 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA15"              |
| 1712 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA16"              |
| 1713 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA17"              |
| 1714 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA18"              |
| 1715 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA19"              |
| 1716 | getItem          | znodoDK,zmeta4object,znodoDK,"","PAGA20"              |
| 1796 | getItem          | znodoRF,zmeta4object,znodoRF,"","TOTAL"               |
| 1797 | getItem          | znodoRF,zmeta4object,znodoRF,"","ID_ITEM"             |
| 1798 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA01"              |
| 1799 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA02"              |
| 1800 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA03"              |
| 1801 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA04"              |
| 1802 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA05"              |
| 1803 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA06"              |
| 1804 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA07"              |
| 1805 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA08"              |
| 1806 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA09"              |
| 1807 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA10"              |
| 1808 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA11"              |
| 1809 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA12"              |
| 1810 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA13"              |
| 1811 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA14"              |
| 1812 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA15"              |
| 1813 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA16"              |
| 1814 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA17"              |
| 1815 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA18"              |
| 1816 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA19"              |
| 1817 | getItem          | znodoRF,zmeta4object,znodoRF,"","PAGA20"              |
| 1900 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","ID_ITEM"             |
| 1901 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","PAGA01"              |
| 1902 | getItem          | znodoCJ,zmeta4object,znodoCJ,"","TOTAL"               |
| 1969 | getItem          | znodoRP,zmeta4object,znodoRP,"","ID_ITEM"             |
| 1970 | getItem          | znodoRP,zmeta4object,znodoRP,"","PAGA"+numpaga        |
| 2064 | getItem          | znodoPE,zmeta4object,znodoPE,"","ID_ITEM"             |
| 2065 | getItem          | znodoPE,zmeta4object,znodoPE,"","TOTAL"               |
| 2273 | getItem          | znodoIF,zmeta4object,znodoIF,"","ID_ITEM"             |
| 2274 | getItem          | znodoIF,zmeta4object,znodoIF,"","TOTAL"               |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 61  | guion   | cadena     |

| L    | Condición / acción / mensaje literal                                                                                                                                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15   | if ((anio==null)&#124;&#124;(anio.equals(""))){anio = "0";}                                                                                                                                                                                                             |
| 243  | &lt;% if(useSet(puedenver, matricula)){ %&gt;                                                                                                                                                                                                                           |
| 361  | &lt;% if(zposicionsc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 530  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 549  | &lt;% if(zposicioncc &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 620  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 636  | &lt;% if(zposicioncf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 707  | if(contador == '&lt;%=zposicionsc%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 723  | &lt;% if(zposiciontf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 793  | &lt;% if(zposicionrv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 868  | if(contador == '&lt;%=zposicionrv%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 887  | &lt;% if(zposiciontv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 975  | &lt;% if(zposicionbv &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1050 | &lt;% if(zposicionss &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1125 | if(contador == '&lt;%=zposicionss%&gt;') {ultimaFila = true;}                                                                                                                                                                                                           |
| 1153 | &lt;% if(zposicionve &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1211 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1237 | if(contador == '&lt;%=zposicionve%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1246 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1260 | if(contador == parseFloat('&lt;%=zposicionve%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1291 | &lt;% if(zposicioncs &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1337 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1365 | if(contador == '&lt;%=zposicioncs%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1376 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1388 | if(contador == parseFloat('&lt;%=zposicioncs%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1427 | &lt;% if(zposicionay &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1473 | if (i==0) { %&gt;                                                                                                                                                                                                                                                       |
| 1503 | if(contador == '&lt;%=zposicionay%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1513 | &lt;% }else{%&gt;                                                                                                                                                                                                                                                       |
| 1526 | if(contador == parseFloat('&lt;%=zposicionay%&gt;') - 1 ) {ultimaFila = true;}                                                                                                                                                                                          |
| 1558 | &lt;% if(zposicioncm &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1633 | if(contador == '&lt;%=zposicioncm%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1658 | &lt;% if(zposiciondk &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1733 | if(contador == '&lt;%=zposiciondk%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1759 | &lt;% if(zposicionrf &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1825 | if(concepto=="Desc. Seguro Medico" &#124;&#124; concepto=="Especie Seguro Medico"){                                                                                                                                                                                     |
| 1835 | if(contador == '&lt;%=zposicionrf%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1841 | if(concepto=="Desc. Seguro Medico" &#124;&#124; concepto=="Especie Seguro Medico"){                                                                                                                                                                                     |
| 1860 | &lt;% if(zposicioncj &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 1924 | if(contador == '&lt;%=zposicioncj%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 1961 | if(Integer.parseInt(numpaga)&lt;10){ numpaga="0"+numpaga; }                                                                                                                                                                                                             |
| 1962 | if(zposicionrp &gt; 0) {                                                                                                                                                                                                                                                |
| 1978 | if(auxzID_ITEM.equals("Aportación definida")){                                                                                                                                                                                                                          |
| 1983 | if(auxzID_ITEM.equals("aportacion total")){                                                                                                                                                                                                                             |
| 1995 | if(zposicionpe &gt; 0) {                                                                                                                                                                                                                                                |
| 2020 | &lt;% if(zposicionrp &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2079 | if (concepto == "Aportación Ordinaria PPSE") {vOrdinaria = importe;}                                                                                                                                                                                                    |
| 2080 | if (concepto == "Aportación Extraordinaria PPSE") {vExtraordinaria = importe;}                                                                                                                                                                                          |
| 2081 | if (concepto == "Aportación PPSE Ordinaria Acumulada") {vOrdinariaAcum = importe;}                                                                                                                                                                                      |
| 2082 | if (concepto == "Aportación PPSE Extraordinaria Acumulada") {vExtraordinariaAcum = importe;}                                                                                                                                                                            |
| 2086 | if (vExtraordinaria &gt; vOrdinaria) {vExtraordinaria = vOrdinaria;}                                                                                                                                                                                                    |
| 2110 | &lt;% if(zposicionrp &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2130 | &lt;% if(zposicionrp &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2150 | &lt;% if(zposicionrp &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2168 | &lt;% if(zposicionrp &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2188 | &lt;% if(zposicionrp &gt; 0 &amp;&amp; zposicionpe &lt;= 0) { %&gt;                                                                                                                                                                                                     |
| 2230 | &lt;% if(zposicionif &gt; 0) { %&gt;                                                                                                                                                                                                                                    |
| 2301 | if(contador == '&lt;%=zposicionif%&gt;' ) {ultimaFila = true;}                                                                                                                                                                                                          |
| 98   | expresión de cálculo/transformación: String zoutputdefDP = zsubsesion + "!" + znodoDP + "[*]";                                                                                                                                                                          |
| 99   | expresión de cálculo/transformación: String zmoveDP = znodoDP + ":" + znodoDP + "[FIRST]";                                                                                                                                                                              |
| 103  | expresión de cálculo/transformación: String zoutputdefSC = zsubsesion + "!" + znodoSC + "[*]";                                                                                                                                                                          |
| 104  | expresión de cálculo/transformación: String zmoveSC = znodoSC + ":" + znodoSC + "[FIRST]";                                                                                                                                                                              |
| 108  | expresión de cálculo/transformación: String zoutputdefCC = zsubsesion + "!" + znodoCC + "[*]";                                                                                                                                                                          |
| 109  | expresión de cálculo/transformación: String zmoveCC = znodoCC + ":" + znodoCC + "[FIRST]";                                                                                                                                                                              |
| 113  | expresión de cálculo/transformación: String zoutputdefCF = zsubsesion + "!" + znodoCF + "[*]";                                                                                                                                                                          |
| 114  | expresión de cálculo/transformación: String zmoveCF = znodoCF + ":" + znodoCF + "[FIRST]";                                                                                                                                                                              |
| 118  | expresión de cálculo/transformación: String zoutputdefTF = zsubsesion + "!" + znodoTF + "[*]";                                                                                                                                                                          |
| 119  | expresión de cálculo/transformación: String zmoveTF = znodoTF + ":" + znodoTF + "[FIRST]";                                                                                                                                                                              |
| 123  | expresión de cálculo/transformación: String zoutputdefRV = zsubsesion + "!" + znodoRV + "[*]";                                                                                                                                                                          |
| 124  | expresión de cálculo/transformación: String zmoveRV = znodoRV + ":" + znodoRV + "[FIRST]";                                                                                                                                                                              |
| 128  | expresión de cálculo/transformación: String zoutputdefTV = zsubsesion + "!" + znodoTV + "[*]";                                                                                                                                                                          |
| 129  | expresión de cálculo/transformación: String zmoveTV = znodoTV + ":" + znodoTV + "[FIRST]";                                                                                                                                                                              |
| 133  | expresión de cálculo/transformación: String zoutputdefBV = zsubsesion + "!" + znodoBV + "[*]";                                                                                                                                                                          |
| 134  | expresión de cálculo/transformación: String zmoveBV = znodoBV + ":" + znodoBV + "[FIRST]";                                                                                                                                                                              |
| 138  | expresión de cálculo/transformación: String zoutputdefSS = zsubsesion + "!" + znodoSS + "[*]";                                                                                                                                                                          |
| 139  | expresión de cálculo/transformación: String zmoveSS = znodoSS + ":" + znodoSS + "[FIRST]";                                                                                                                                                                              |
| 143  | expresión de cálculo/transformación: String zoutputdefVE = zsubsesion + "!" + znodoVE + "[*]";                                                                                                                                                                          |
| 144  | expresión de cálculo/transformación: String zmoveVE = znodoVE + ":" + znodoVE + "[FIRST]";                                                                                                                                                                              |
| 148  | expresión de cálculo/transformación: String zoutputdefCS = zsubsesion + "!" + znodoCS + "[*]";                                                                                                                                                                          |
| 149  | expresión de cálculo/transformación: String zmoveCS = znodoCS + ":" + znodoCS + "[FIRST]";                                                                                                                                                                              |
| 153  | expresión de cálculo/transformación: String zoutputdefCJ = zsubsesion + "!" + znodoCJ + "[*]";                                                                                                                                                                          |
| 154  | expresión de cálculo/transformación: String zmoveCJ = znodoCJ + ":" + znodoCJ + "[FIRST]";                                                                                                                                                                              |
| 158  | expresión de cálculo/transformación: String zoutputdefPE = zsubsesion + "!" + znodoPE + "[*]";                                                                                                                                                                          |
| 159  | expresión de cálculo/transformación: String zmovePE = znodoPE + ":" + znodoPE + "[FIRST]";                                                                                                                                                                              |
| 163  | expresión de cálculo/transformación: String zoutputdefRP = zsubsesion + "!" + znodoRP + "[*]";                                                                                                                                                                          |
| 164  | expresión de cálculo/transformación: String zmoveRP = znodoRP + ":" + znodoRP + "[FIRST]";                                                                                                                                                                              |
| 168  | expresión de cálculo/transformación: String zoutputdefIF = zsubsesion + "!" + znodoIF + "[*]";                                                                                                                                                                          |
| 169  | expresión de cálculo/transformación: String zmoveIF = znodoIF + ":" + znodoIF + "[FIRST]";                                                                                                                                                                              |
| 172  | expresión de cálculo/transformación: String zoutputdefAY = zsubsesion + "!" + znodoAY + "[*]";                                                                                                                                                                          |
| 173  | expresión de cálculo/transformación: String zmoveAY = znodoAY + ":" + znodoAY + "[FIRST]";                                                                                                                                                                              |
| 177  | expresión de cálculo/transformación: String zoutputdefDK = zsubsesion + "!" + znodoDK + "[*]";                                                                                                                                                                          |
| 178  | expresión de cálculo/transformación: String zmoveDK = znodoDK + ":" + znodoDK + "[FIRST]";                                                                                                                                                                              |
| 182  | expresión de cálculo/transformación: String zoutputdefCM = zsubsesion + "!" + znodoCM + "[*]";                                                                                                                                                                          |
| 183  | expresión de cálculo/transformación: String zmoveCM = znodoCM + ":" + znodoCM + "[FIRST]";                                                                                                                                                                              |
| 187  | expresión de cálculo/transformación: String zoutputdefRF = zsubsesion + "!" + znodoRF + "[*]";                                                                                                                                                                          |
| 188  | expresión de cálculo/transformación: String zmoveRF = znodoRF + ":" + znodoRF + "[FIRST]";                                                                                                                                                                              |
| 358  | expresión de cálculo/transformación: String id = String.valueOf(zposiciondp - 1);                                                                                                                                                                                       |
| 427  | expresión de cálculo/transformación: NumColtotales = parseFloat(NumColtotales);                                                                                                                                                                                         |
| 1896 | expresión de cálculo/transformación: id = String.valueOf(zposicioncj - 1);                                                                                                                                                                                              |
| 1988 | expresión de cálculo/transformación: dauxtot01 = dauxval01 + dauxval02;                                                                                                                                                                                                 |
| 2076 | expresión de cálculo/transformación: importe = parseFloat('&lt;%=zTOTAL%&gt;');                                                                                                                                                                                         |
| 2091 | expresión de cálculo/transformación: total = vOrdinaria + vExtraordinaria;                                                                                                                                                                                              |
| 2092 | expresión de cálculo/transformación: totalAcum = vOrdinariaAcum + vExtraordinariaAcum;                                                                                                                                                                                  |
| 2093 | expresión de cálculo/transformación: totalOrdinario = vOrdinaria + vOrdinariaAcum;                                                                                                                                                                                      |
| 2094 | expresión de cálculo/transformación: totalExtraOrdinario = vExtraordinaria + vExtraordinariaAcum;                                                                                                                                                                       |
| 2095 | expresión de cálculo/transformación: totaldetotales = totalOrdinario + totalExtraOrdinario;                                                                                                                                                                             |
| 2124 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal1 + '&lt;/td&gt;');               |
| 2125 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;'); |
| 2126 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[1] +'&lt;/td&gt;');  |
| 2127 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[0] + '&lt;/td&gt;');           |
| 2144 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + literal2 + '&lt;/td&gt;');               |
| 2145 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[2] + '&lt;/td&gt;'); |
| 2146 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[3] +'&lt;/td&gt;');  |
| 2147 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:green;" colspan="1"&gt;' + valorestotales[1] + '&lt;/td&gt;');           |
| 2290 | expresión de cálculo/transformación: totalAsumar = parseFloat(totalAsumar.replace("0000",""));                                                                                                                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                             |
| --- | --------------------------------------------- |
| 26  | /css/estilo_sse.css                           |
| 27  | /css/tabla.css                                |
| 28  | /css/style_persdata.css                       |
| 29  | /library/jquery.js                            |
| 30  | /libreria/functions_proyecciones.js           |
| 244 | ./proyecciones/index.jsp?anio=&lt;%=anio%&gt; |
| 368 | /iconos/logo_cyc.jpg                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                    | Resolución | Ficha / candidato                                                                                        |
| ------ | --- | --------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------- |
| COLL   | 28  | /library/jquery.js                            | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                   |
| COLL   | 29  | /libreria/functions_proyecciones.js           | contextual | [libreria/functions_proyecciones.js](../../transversal/dependencias/libreria--functions_proyecciones.md) |
| COLL   | 237 | ./proyecciones/index.jsp?anio=&lt;%=anio%&gt; | física     | [sse_g2/proyecciones/index.jsp](sse_g2--proyecciones--index.md)                                          |
| CYC    | 29  | /library/jquery.js                            | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                    |
| CYC    | 30  | /libreria/functions_proyecciones.js           | contextual | [libreria/functions_proyecciones.js](../../transversal/dependencias/libreria--functions_proyecciones.md) |
| CYC    | 244 | ./proyecciones/index.jsp?anio=&lt;%=anio%&gt; | física     | [sse_g2/proyecciones/index.jsp](sse_g2--proyecciones--index.md)                                          |
| IBER   | 28  | /library/jquery.js                            | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                   |
| IBER   | 29  | /libreria/functions_proyecciones.js           | contextual | [libreria/functions_proyecciones.js](../../transversal/dependencias/libreria--functions_proyecciones.md) |
| IBER   | 237 | ./proyecciones/index.jsp?anio=&lt;%=anio%&gt; | física     | [sse_g2/proyecciones/index.jsp](sse_g2--proyecciones--index.md)                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_inf_proyec.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
