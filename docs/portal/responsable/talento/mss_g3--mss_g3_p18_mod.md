# mss_g3_p18_mod

Identificador: `mss_g3/mss_g3_p18_mod.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                       | Ámbito | Diccionario                                                                       |
| --------------- | --------------------------- | ------ | --------------------------------------------------------------------------------- |
| ev_mss.GrafEval | Resultados de la Evaluación | BASE   | [translations/mss_ev_es.properties:L28](../../referencias/literales/mss_ev_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p18_mod.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p18_mod.jsp) | `79ef55ef3f466e97b8f28b0719065b232d7ed586103d08968e42966c309977bb` |    366 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p18_mod.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p18_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 15  | estado          | getParameter(request,"estado")        |
| 16  | zinicios        | getParameter(request,"zinicios")      |
| 18  | IDRH            | getParameter(request,"IDRH")          |
| 20  | RHRole          | getParameter(request,"RHRole")        |
| 22  | DTStartEval     | getParameter(request,"DTStartEval")   |
| 24  | IDPlan          | getParameter(request,"IDPlan")        |
| 25  | DTStartProc     | getParameter(request,"DTStartProc")   |
| 26  | nombre          | getParameter(request,"nombre")        |
| 27  | NombreProceso   | getParameter(request,"NombreProceso") |
| 28  | Principal       | getParameter(request,"Principal")     |

| L   | Variable          | Expresión fuente                                                                      | Resolución estática parcial                                                                                       |
| --- | ----------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 12  | ztitle            | TranMss.getProperty("ev_mss.GrafEval")                                                | TranMss.getProperty("ev_mss.GrafEval")                                                                            |
| 15  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                |
| 16  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                              |
| 18  | IDRH              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                                                  |
| 20  | RHRole            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")                                                |
| 22  | DTStartEval       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")                                           |
| 24  | IDPlan            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan")                                                |
| 25  | DTStartProc       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc")                                           |
| 26  | znombre           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"nombre")                                                |
| 27  | NombreProceso     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"NombreProceso")                                         |
| 28  | Principal         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Principal")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"Principal")                                             |
| 35  | sWebServerName    | ""                                                                                    |                                                                                                                   |
| 36  | sWebServerPort    | ""                                                                                    |                                                                                                                   |
| 37  | sProtocol         | "http"                                                                                | http                                                                                                              |
| 38  | sURLxlsTplt       | ""                                                                                    |                                                                                                                   |
| 43  | zlanguageFolderev | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL)                             |
| 187 | zmeta4object      | "SCO_GR_EVALUATOR_ANALYSIS"                                                           | SCO_GR_EVALUATOR_ANALYSIS                                                                                         |
| 188 | zmeta4object1     | "SCO_GR_EVALUATE_ANALYSIS"                                                            | SCO_GR_EVALUATE_ANALYSIS                                                                                          |
| 189 | zsubsesion        | "EVALUATOR_ANALYSIS"                                                                  | EVALUATOR_ANALYSIS                                                                                                |
| 190 | zsubsesion1       | "EVALUATE_ANALYSIS"                                                                   | EVALUATE_ANALYSIS                                                                                                 |
| 191 | znodo1            | "SCO_H_EVALUATE"                                                                      | SCO_H_EVALUATE                                                                                                    |
| 192 | znodo             | "CRITERIOS_EVALUATOR_RW"                                                              | CRITERIOS_EVALUATOR_RW                                                                                            |
| 193 | znodo2            | "CRITERIOS_RW"                                                                        | CRITERIOS_RW                                                                                                      |
| 194 | znodo4            | "SCO_CRITERIOS_EVALUATOR_OBJ_RW"                                                      | SCO_CRITERIOS_EVALUATOR_OBJ_RW                                                                                    |
| 195 | znodo5            | "SCO_CRITERIOS_EVALUATOR_OBJ_C"                                                       | SCO_CRITERIOS_EVALUATOR_OBJ_C                                                                                     |
| 197 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                     | CRITERIOS_EVALUATOR_RW{":"}EVALUATOR_ANALYSIS{"!"}CRITERIOS_EVALUATOR_RW{"[&amp;VAR.m4lix]"}{"."}                 |
| 198 | zcomun4           | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."                   | SCO_CRITERIOS_EVALUATOR_OBJ_RW{":"}EVALUATOR_ANALYSIS{"!"}SCO_CRITERIOS_EVALUATOR_OBJ_RW{"[&amp;VAR.m4lix]"}{"."} |
| 199 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."                   | SCO_CRITERIOS_EVALUATOR_OBJ_C{":"}EVALUATOR_ANALYSIS{"!"}SCO_CRITERIOS_EVALUATOR_OBJ_C{"[&amp;VAR.m4lix]"}{"."}   |
| 201 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                     | EVALUATOR_ANALYSIS{"!"}SCO_H_EVALUATE{"[*]"}                                                                      |
| 202 | zmove1            | znodo1 + ":" + znodo1 + "[0]"                                                         | SCO_H_EVALUATE{":"}SCO_H_EVALUATE{"[0]"}                                                                          |
| 203 | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                                      | EVALUATOR_ANALYSIS{"!"}CRITERIOS_EVALUATOR_RW{"[*]"}                                                              |
| 204 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                                     | EVALUATOR_ANALYSIS{"!"}SCO_CRITERIOS_EVALUATOR_OBJ_RW{"[*]"}                                                      |
| 205 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                                     | EVALUATOR_ANALYSIS{"!"}SCO_CRITERIOS_EVALUATOR_OBJ_C{"[*]"}                                                       |
| 207 | zmove             | znodo + ":" + znodo + "[0]"                                                           | CRITERIOS_EVALUATOR_RW{":"}CRITERIOS_EVALUATOR_RW{"[0]"}                                                          |
| 208 | zmove4            | znodo4 + ":" + znodo4 + "[0]"                                                         | SCO_CRITERIOS_EVALUATOR_OBJ_RW{":"}SCO_CRITERIOS_EVALUATOR_OBJ_RW{"[0]"}                                          |
| 209 | zmove5            | znodo5 + ":" + znodo5 + "[0]"                                                         | SCO_CRITERIOS_EVALUATOR_OBJ_C{":"}SCO_CRITERIOS_EVALUATOR_OBJ_C{"[0]"}                                            |
| 211 | zoutputdef2       | zsubsesion1 + "!" + znodo1 + "[*]"                                                    | EVALUATE_ANALYSIS{"!"}SCO_H_EVALUATE{"[*]"}                                                                       |
| 213 | zoutputdef3       | zsubsesion1 + "!" + znodo2 + "[*]"                                                    | EVALUATE_ANALYSIS{"!"}CRITERIOS_RW{"[*]"}                                                                         |
| 214 | zmove3            | znodo2 + ":" + znodo2 + "[0]"                                                         | CRITERIOS_RW{":"}CRITERIOS_RW{"[0]"}                                                                              |
| 216 | zmetodoinit       | "INIT:" + zsubsesion + "!CRITERIOS_EVALUATOR_RW.SCO_INIT_DATA"                        | INIT:{}EVALUATOR_ANALYSIS{"!CRITERIOS_EVALUATOR_RW.SCO_INIT_DATA"}                                                |
| 217 | zmetodoinit1      | "INIT1:" + zsubsesion1 + "!CRITERIOS_RW.SCO_INIT_DATA"                                | INIT1:{}EVALUATE_ANALYSIS{"!CRITERIOS_RW.SCO_INIT_DATA"}                                                          |
| 218 | zmetodotransfer   | "TRANSFER_EVALUATOR:" + zsubsesion + "!CRITERIOS_EVALUATOR_RW.SCO_TRANSFER_DATA"      | TRANSFER_EVALUATOR:{}EVALUATOR_ANALYSIS{"!CRITERIOS_EVALUATOR_RW.SCO_TRANSFER_DATA"}                              |
| 219 | zmetodotransfer1  | "TRANSFER:" + zsubsesion1 + "!CRITERIOS_RW.SCO_TRANSFER_DATA"                         | TRANSFER:{}EVALUATE_ANALYSIS{"!CRITERIOS_RW.SCO_TRANSFER_DATA"}                                                   |
| 263 | zcount            | 0                                                                                     | 0                                                                                                                 |
| 264 | zcounti           | 0                                                                                     | 0                                                                                                                 |
| 265 | zcount4           | 0                                                                                     | 0                                                                                                                 |
| 266 | zcount4i          | 0                                                                                     | 0                                                                                                                 |
| 267 | zcount5           | 0                                                                                     | 0                                                                                                                 |
| 268 | zcount5i          | 0                                                                                     | 0                                                                                                                 |
| 279 | zcountv           | String.valueOf(zcounti-1)                                                             | String.valueOf(zcounti-1)                                                                                         |
| 280 | zcount4v          | String.valueOf(zcount4i-1)                                                            | String.valueOf(zcount4i-1)                                                                                        |
| 281 | zcount5v          | String.valueOf(zcount5i-1)                                                            | String.valueOf(zcount5i-1)                                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------- |
| 223 | m4:startpage | m4task=EVALUATOR_ANALYSIS                                                                               |
| 224 | m4:beginjob  |                                                                                                         |
| 227 | m4:datadef   | m4o=SCO_GR_EVALUATOR_ANALYSIS; m4name=EVALUATOR_ANALYSIS                                                |
| 228 | m4:exec      | m4method=INIT:{}EVALUATOR_ANALYSIS{"!CRITERIOS_EVALUATOR_RW.SCO_INIT_DATA"}                             |
| 229 | m4:param     | name=ARG_START_PROC; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc")      |
| 230 | m4:param     | name=ARG_ID_PLAN; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan")              |
| 231 | m4:param     | name=ARG_START_EVAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")      |
| 232 | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                  |
| 233 | m4:param     | name=ARG_OR_ROLE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")              |
| 235 | m4:outputdef | m4alias=SCO_H_EVALUATE                                                                                  |
| 235 | m4:param     | name=M4NAME0; value=EVALUATOR_ANALYSIS{"!"}SCO_H_EVALUATE{"[*]"}                                        |
| 236 | m4:move      |                                                                                                         |
| 236 | m4:param     | name=EVALUATOR_ANALYSIS; value=SCO_H_EVALUATE{":"}SCO_H_EVALUATE{"[0]"}                                 |
| 237 | m4:exec      | m4method=TRANSFER_EVALUATOR:{}EVALUATOR_ANALYSIS{"!CRITERIOS_EVALUATOR_RW.SCO_TRANSFER_DATA"}           |
| 238 | m4:outputdef | m4alias=CRITERIOS_EVALUATOR_RW                                                                          |
| 238 | m4:param     | name=m4name0; value=EVALUATOR_ANALYSIS{"!"}CRITERIOS_EVALUATOR_RW{"[*]"}                                |
| 239 | m4:outputdef | m4alias=SCO_CRITERIOS_EVALUATOR_OBJ_RW                                                                  |
| 239 | m4:param     | name=m4name0; value=EVALUATOR_ANALYSIS{"!"}SCO_CRITERIOS_EVALUATOR_OBJ_RW{"[*]"}                        |
| 240 | m4:outputdef | m4alias=SCO_CRITERIOS_EVALUATOR_OBJ_C                                                                   |
| 240 | m4:param     | name=m4name0; value=EVALUATOR_ANALYSIS{"!"}SCO_CRITERIOS_EVALUATOR_OBJ_C{"[*]"}                         |
| 241 | m4:move      |                                                                                                         |
| 241 | m4:param     | name=EVALUATOR_ANALYSIS; value=CRITERIOS_EVALUATOR_RW{":"}CRITERIOS_EVALUATOR_RW{"[0]"}                 |
| 242 | m4:move      |                                                                                                         |
| 242 | m4:param     | name=EVALUATOR_ANALYSIS; value=SCO_CRITERIOS_EVALUATOR_OBJ_RW{":"}SCO_CRITERIOS_EVALUATOR_OBJ_RW{"[0]"} |
| 243 | m4:move      |                                                                                                         |
| 243 | m4:param     | name=EVALUATOR_ANALYSIS; value=SCO_CRITERIOS_EVALUATOR_OBJ_C{":"}SCO_CRITERIOS_EVALUATOR_OBJ_C{"[0]"}   |
| 247 | m4:datadef   | m4o=SCO_GR_EVALUATE_ANALYSIS; m4name=EVALUATE_ANALYSIS                                                  |
| 248 | m4:exec      | m4method=INIT1:{}EVALUATE_ANALYSIS{"!CRITERIOS_RW.SCO_INIT_DATA"}                                       |
| 249 | m4:param     | name=ARG_DATE_PROC; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartProc")       |
| 250 | m4:param     | name=ARG_DATE_EVAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")       |
| 251 | m4:param     | name=ARG_ID_PLAN; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDPlan")              |
| 252 | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                  |
| 253 | m4:param     | name=ARG_OR_ROLE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")              |
| 255 | m4:exec      | m4method=TRANSFER:{}EVALUATE_ANALYSIS{"!CRITERIOS_RW.SCO_TRANSFER_DATA"}                                |
| 256 | m4:outputdef | m4alias=SCO_H_EVALUATE                                                                                  |
| 256 | m4:param     | name=M4NAME0; value=EVALUATE_ANALYSIS{"!"}SCO_H_EVALUATE{"[*]"}                                         |
| 257 | m4:move      |                                                                                                         |
| 257 | m4:param     | name=EVALUATE_ANALYSIS; value=SCO_H_EVALUATE{":"}SCO_H_EVALUATE{"[0]"}                                  |
| 258 | m4:outputdef | m4alias=CRITERIOS_RW                                                                                    |
| 258 | m4:param     | name=m4name0; value=EVALUATE_ANALYSIS{"!"}CRITERIOS_RW{"[*]"}                                           |
| 259 | m4:move      |                                                                                                         |
| 259 | m4:param     | name=EVALUATE_ANALYSIS; value=CRITERIOS_RW{":"}CRITERIOS_RW{"[0]"}                                      |
| 261 | m4:endjob    |                                                                                                         |
| 289 | m4:label     | item=SCO_NM_EXTD_KN_AUX; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                   |
| 290 | m4:label     | item=SCO_EVALUADOR_RW; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                     |
| 291 | m4:label     | item=SCO_NM_LEVEL_RW; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                      |
| 292 | m4:label     | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                       |
| 293 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                      |
| 295 | m4:dataloop  | outputdef=CRITERIOS_EVALUATOR_RW                                                                        |
| 296 | m4:current   | var=ziCurPos; outputdef=CRITERIOS_EVALUATOR_RW                                                          |
| 299 | m4:item      | item=SCO_CRITERIO_RW; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                      |
| 299 | m4:item      | item=SCO_NM_EXTD_KN_AUX; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                   |
| 300 | m4:item      | item=STD_N_FIRST_NAME_AUX; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                 |
| 301 | m4:item      | item=SCO_NM_LEVEL_RW; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                      |
| 302 | m4:item      | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                       |
| 303 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                      |
| 308 | m4:label     | item=SCO_NM_OBJECTIVE_AUX; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                         |
| 309 | m4:label     | item=SCO_EVALUADOR_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                             |
| 310 | m4:label     | item=SCO_NM_LEVEL_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                              |
| 311 | m4:label     | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                               |
| 312 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                              |
| 314 | m4:dataloop  | outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                                                                |
| 315 | m4:current   | var=ziCurPos; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                                                  |
| 318 | m4:item      | item=SCO_CRITERIO_RW; jsafe=true; outputdef=CRITERIOS_EVALUATOR_RW                                      |
| 318 | m4:item      | item=SCO_NM_OBJECTIVE_AUX; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                         |
| 319 | m4:item      | item=SCO_GB_NAME_AUX; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                              |
| 320 | m4:item      | item=SCO_NM_LEVEL_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                              |
| 321 | m4:item      | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                               |
| 322 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_RW                              |
| 328 | m4:label     | item=SCO_NM_OBJECTIVE_AUX; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                          |
| 329 | m4:label     | item=SCO_EVALUADOR_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                              |
| 330 | m4:label     | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                                |
| 331 | m4:label     | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                                |
| 332 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                               |
| 336 | m4:dataloop  | outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                                                                 |
| 337 | m4:current   | var=ziCurPos; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                                                   |
| 341 | m4:item      | item=SCO_CRITERIO_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                               |
| 341 | m4:item      | item=SCO_NM_OBJECTIVE_AUX; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                          |
| 342 | m4:item      | item=SCO_GB_NAME_AUX; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                               |
| 343 | m4:item      | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                                |
| 344 | m4:item      | item=SCO_PUNTAJE_RW; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                                |
| 345 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SCO_CRITERIOS_EVALUATOR_OBJ_C                               |
| 352 | m4:dataloop  | outputdef=CRITERIOS_RW                                                                                  |
| 353 | m4:current   | var=ziCurPos; outputdef=CRITERIOS_RW                                                                    |
| 356 | m4:item      | item=SCO_CRITERIO; jsafe=true; outputdef=CRITERIOS_RW                                                   |
| 357 | m4:item      | item=SCO_PUNTAJE_AUTOEVAL; jsafe=true; outputdef=CRITERIOS_RW                                           |
| 358 | m4:item      | item=SCO_PUNTAJE_MEDIO; jsafe=true; outputdef=CRITERIOS_RW                                              |
| 363 | m4:endpage   |                                                                                                         |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 271 | getCount         | znodo,zsubsesion,znodo   |
| 272 | getCountInClient | znodo,zsubsesion,znodo   |
| 273 | getCount         | znodo4,zsubsesion,znodo4 |
| 274 | getCountInClient | znodo4,zsubsesion,znodo4 |
| 275 | getCount         | znodo5,zsubsesion,znodo5 |
| 276 | getCountInClient | znodo5,zsubsesion,znodo5 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 56  | graf_eval |            |

| L   | Condición / acción / mensaje literal                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 30  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                    |
| 31  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                            |
| 48  | if ( request.isSecure() )                                                                                                                                          |
| 57  | if (!navigator.appMinorVersion) {                                                                                                                                  |
| 59  | alert(msg);                                                                                                                                                        |
| 61  | } else {                                                                                                                                                           |
| 80  | if (ldatos&gt;1){                                                                                                                                                  |
| 105 | if (ldatosobj&gt;1){                                                                                                                                               |
| 106 | if (vcabec&gt;0){                                                                                                                                                  |
| 115 | if (vcabec&gt;0){ini=ini+1;}                                                                                                                                       |
| 131 | if (ldatosobj2&gt;1){                                                                                                                                              |
| 132 | if (vcabec&gt;0){                                                                                                                                                  |
| 141 | if (vcabec&gt;0){ ini=ini+1;}                                                                                                                                      |
| 161 | if (ExcelApp == null) {                                                                                                                                            |
| 165 | alert(msg);                                                                                                                                                        |
| 168 | }else if (openWb == null) {                                                                                                                                        |
| 172 | alert(msg);                                                                                                                                                        |
| 174 | }else{                                                                                                                                                             |
| 51  | expresión de cálculo/transformación: sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/graf_eval2.xls"; |
| 197 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                            |
| 198 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";                                         |
| 199 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";                                         |
| 201 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                       |
| 202 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[0]";                                                                                |
| 203 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                         |
| 204 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                                                       |
| 205 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                                                       |
| 207 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[0]";                                                                                   |
| 208 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4 + "[0]";                                                                                |
| 209 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5 + "[0]";                                                                                |
| 211 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion1 + "!" + znodo1 + "[*]";                                                                      |
| 213 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion1 + "!" + znodo2 + "[*]";                                                                      |
| 214 | expresión de cálculo/transformación: String zmove3 = znodo2 + ":" + znodo2 + "[0]";                                                                                |
| 216 | expresión de cálculo/transformación: String zmetodoinit = "INIT:" + zsubsesion + "!CRITERIOS_EVALUATOR_RW.SCO_INIT_DATA";                                          |
| 217 | expresión de cálculo/transformación: String zmetodoinit1 = "INIT1:" + zsubsesion1 + "!CRITERIOS_RW.SCO_INIT_DATA";                                                 |
| 218 | expresión de cálculo/transformación: String zmetodotransfer = "TRANSFER_EVALUATOR:" + zsubsesion + "!CRITERIOS_EVALUATOR_RW.SCO_TRANSFER_DATA";                    |
| 219 | expresión de cálculo/transformación: String zmetodotransfer1 = "TRANSFER:" + zsubsesion1 + "!CRITERIOS_RW.SCO_TRANSFER_DATA";                                      |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 10  | ../../mss_generico/espanol/menu_mss.jsp      |
| 11  | /mss_g3/mss_ev_trans.jsp                     |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 7   | /css/estilo_mss.css                          |
| 8   | /libreria/funciones_sse_val.js               |
| 9   | /libreria/funciones_sse.js                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 10  | ../../mss_generico/espanol/menu_mss.jsp      |
| 11  | /mss_g3/mss_ev_trans.jsp                     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 11  | /mss_g3/mss_ev_trans.jsp                     | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |
| BASE   | 8   | /libreria/funciones_sse_val.js               | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                |
| BASE   | 9   | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp      | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                              |
| BASE   | 11  | /mss_g3/mss_ev_trans.jsp                     | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p18_mod.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
