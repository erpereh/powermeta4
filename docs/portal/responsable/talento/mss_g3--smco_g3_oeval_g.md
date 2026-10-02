# smco_g3_oeval_g

Identificador: `mss_g3/smco_g3_oeval_g.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto                       | Ámbito | Diccionario                                                                       |
| --------------- | --------------------------- | ------ | --------------------------------------------------------------------------------- |
| ev_mss.GrafEval | Resultados de la Evaluación | BASE   | [translations/mss_ev_es.properties:L28](../../referencias/literales/mss_ev_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_oeval_g.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_oeval_g.jsp) | `9c04a63166705a52d131906847a35eab71858711421d9104823bc563273c0692` |    459 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_oeval_g.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_oeval_g.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 15  | estado          | getParameter(request,"estado")      |
| 16  | zinicios        | getParameter(request,"zinicios")    |
| 19  | IDRH            | getParameter(request,"IDRH")        |
| 21  | RHRole          | getParameter(request,"RHRole")      |
| 23  | DTStartEval     | getParameter(request,"DTStartEval") |

| L   | Variable          | Expresión fuente                                                                      | Resolución estática parcial                                                           |
| --- | ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 12  | ztitle            | TranMss.getProperty("ev_mss.GrafEval")                                                | TranMss.getProperty("ev_mss.GrafEval")                                                |
| 15  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    |
| 16  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  |
| 19  | IDRH              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                      |
| 21  | RHRole            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")                    |
| 23  | DTStartEval       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval")               |
| 28  | sWebServerName    | ""                                                                                    |                                                                                       |
| 29  | sWebServerPort    | ""                                                                                    |                                                                                       |
| 30  | sProtocol         | "http"                                                                                | http                                                                                  |
| 31  | sURLxlsTplt       | ""                                                                                    |                                                                                       |
| 36  | zlanguageFolderev | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) |
| 283 | zmeta4object      | "SMCO_OEVALUATOR_DATA"                                                                | SMCO_OEVALUATOR_DATA                                                                  |
| 284 | zsubsesion        | "SMCO_OEVALUATOR_DATA"                                                                | SMCO_OEVALUATOR_DATA                                                                  |
| 285 | znodo1            | "SMCO_OEVAL_DATA"                                                                     | SMCO_OEVAL_DATA                                                                       |
| 286 | znodo             | "SMCO_OEVALUATOR_DATA"                                                                | SMCO_OEVALUATOR_DATA                                                                  |
| 287 | znodo2            | "SMCO_OE_CAPAB"                                                                       | SMCO_OE_CAPAB                                                                         |
| 288 | znodo3            | "SMCO_OE_OCUALI_DATA"                                                                 | SMCO_OE_OCUALI_DATA                                                                   |
| 289 | znodo4            | "SMCO_OE_OCUANTI_DATA"                                                                | SMCO_OE_OCUANTI_DATA                                                                  |
| 290 | znodo5            | "SMCO_CAPAB_G_V"                                                                      | SMCO_CAPAB_G_V                                                                        |
| 291 | znodo6            | "SMCO_OCUALI_G_V"                                                                     | SMCO_OCUALI_G_V                                                                       |
| 295 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                     | SMCO_OEVALUATOR_DATA{"!"}SMCO_OEVAL_DATA{"[*]"}                                       |
| 297 | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                                      | SMCO_OEVALUATOR_DATA{"!"}SMCO_OEVALUATOR_DATA{"[*]"}                                  |
| 298 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                                     | SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_CAPAB{"[*]"}                                         |
| 299 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                                     | SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_OCUANTI_DATA{"[*]"}                                  |
| 300 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                                     | SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_OCUALI_DATA{"[*]"}                                   |
| 302 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                                     | SMCO_OEVALUATOR_DATA{"!"}SMCO_CAPAB_G_V{"[*]"}                                        |
| 304 | zoutputdef6       | zsubsesion + "!" + znodo6 + "[*]"                                                     | SMCO_OEVALUATOR_DATA{"!"}SMCO_OCUALI_G_V{"[*]"}                                       |
| 307 | zmetodoinit       | "INIT:" + zsubsesion + "!SMCO_OEVAL_DATA.SMCO_LOAD_DATA"                              | INIT:{}SMCO_OEVALUATOR_DATA{"!SMCO_OEVAL_DATA.SMCO_LOAD_DATA"}                        |
| 309 | znamenodo         | znodo + ":" + zsubsesion + "!" + znodo                                                | SMCO_OEVALUATOR_DATA{":"}SMCO_OEVALUATOR_DATA{"!"}SMCO_OEVALUATOR_DATA                |
| 310 | znamenodo4        | znodo4 + ":" + zsubsesion + "!" + znodo4                                              | SMCO_OE_OCUANTI_DATA{":"}SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_OCUANTI_DATA                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------ |
| 313 | m4:startpage | m4task=SMCO_OEVALUATOR_DATA                                                                      |
| 314 | m4:beginjob  |                                                                                                  |
| 315 | m4:datadef   | m4o=SMCO_OEVALUATOR_DATA; m4name=SMCO_OEVALUATOR_DATA                                            |
| 316 | m4:exec      | m4method=INIT:{}SMCO_OEVALUATOR_DATA{"!SMCO_OEVAL_DATA.SMCO_LOAD_DATA"}                          |
| 317 | m4:param     | name=ARG_DT_START; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DTStartEval") |
| 318 | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")           |
| 319 | m4:param     | name=ARG_OR_ROLE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"RHRole")       |
| 321 | m4:outputdef | m4alias=SMCO_OEVAL_DATA                                                                          |
| 321 | m4:param     | name=M4NAME0; value=SMCO_OEVALUATOR_DATA{"!"}SMCO_OEVAL_DATA{"[*]"}                              |
| 322 | m4:outputdef | m4alias=SMCO_OEVALUATOR_DATA                                                                     |
| 322 | m4:param     | name=m4name0; value=SMCO_OEVALUATOR_DATA{"!"}SMCO_OEVALUATOR_DATA{"[*]"}                         |
| 323 | m4:outputdef | m4alias=SMCO_OE_CAPAB                                                                            |
| 323 | m4:param     | name=m4name0; value=SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_CAPAB{"[*]"}                                |
| 324 | m4:outputdef | m4alias=SMCO_OE_OCUANTI_DATA                                                                     |
| 324 | m4:param     | name=m4name0; value=SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_OCUANTI_DATA{"[*]"}                         |
| 325 | m4:outputdef | m4alias=SMCO_OE_OCUALI_DATA                                                                      |
| 325 | m4:param     | name=m4name0; value=SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_OCUALI_DATA{"[*]"}                          |
| 326 | m4:outputdef | m4alias=SMCO_CAPAB_G_V                                                                           |
| 326 | m4:param     | name=m4name0; value=SMCO_OEVALUATOR_DATA{"!"}SMCO_CAPAB_G_V{"[*]"}                               |
| 327 | m4:outputdef | m4alias=SMCO_OCUALI_G_V                                                                          |
| 327 | m4:param     | name=m4name0; value=SMCO_OEVALUATOR_DATA{"!"}SMCO_OCUALI_G_V{"[*]"}                              |
| 329 | m4:endjob    |                                                                                                  |
| 333 | m4:item      | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OEVAL_DATA                                          |
| 334 | m4:item      | item=SCO_NM_EVAL_PROC; jsafe=true; outputdef=SMCO_OEVAL_DATA                                     |
| 337 | m4:label     | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                     |
| 338 | m4:label     | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                    |
| 339 | m4:label     | item=SCO_CALCUL_RAT_CAP; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                              |
| 340 | m4:label     | item=SCO_NM_LEVEL_1; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                  |
| 341 | m4:label     | item=SCO_CALCUL_RAT_OBJ; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                              |
| 342 | m4:label     | item=SCO_EVALUATOR_COMM; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                              |
| 343 | m4:label     | item=SCO_AREAS_IMP; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                   |
| 344 | m4:label     | item=SCO_STRENGTHS; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                   |
| 345 | m4:label     | m4name=SMCO_OEVALUATOR_DATA{":"}SMCO_OEVALUATOR_DATA{"!"}SMCO_OEVALUATOR_DATA; jsafe=true        |
| 347 | m4:dataloop  | outputdef=SMCO_OEVALUATOR_DATA                                                                   |
| 348 | m4:current   | var=ziCurPos; outputdef=SMCO_OEVALUATOR_DATA                                                     |
| 351 | m4:item      | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                     |
| 352 | m4:item      | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                    |
| 353 | m4:item      | item=SCO_CALCUL_RAT_CAP; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                              |
| 354 | m4:item      | item=SCO_NM_LEVEL_1; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                  |
| 355 | m4:item      | item=SCO_CALCUL_RAT_OBJ; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                              |
| 356 | m4:item      | item=SCO_EVALUATOR_COMM; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                              |
| 357 | m4:item      | item=SCO_AREAS_IMP; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                   |
| 358 | m4:item      | item=SCO_STRENGTHS; jsafe=true; outputdef=SMCO_OEVALUATOR_DATA                                   |
| 362 | m4:label     | item=SCO_NM_EXTD_KN; jsafe=true; outputdef=SMCO_OE_CAPAB                                         |
| 363 | m4:label     | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OE_CAPAB                                            |
| 364 | m4:label     | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_OE_CAPAB                                           |
| 365 | m4:label     | item=SCO_VALUE_RAT; jsafe=true; outputdef=SMCO_OE_CAPAB                                          |
| 366 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SMCO_OE_CAPAB                                        |
| 367 | m4:dataloop  | outputdef=SMCO_OE_CAPAB                                                                          |
| 368 | m4:current   | var=ziCurPos; outputdef=SMCO_OE_CAPAB                                                            |
| 371 | m4:item      | item=SCO_NM_EXTD_KN; jsafe=true; outputdef=SMCO_OE_CAPAB                                         |
| 372 | m4:item      | item=SCO_ID_CAPABILITY; jsafe=true; outputdef=SMCO_OE_CAPAB                                      |
| 373 | m4:item      | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OE_CAPAB                                            |
| 374 | m4:item      | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_OE_CAPAB                                           |
| 375 | m4:item      | item=SCO_VALUE_RAT; jsafe=true; outputdef=SMCO_OE_CAPAB                                          |
| 376 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SMCO_OE_CAPAB                                        |
| 381 | m4:label     | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                 |
| 382 | m4:label     | item=SCO_ID_OBJECTIVE; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                 |
| 383 | m4:label     | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                      |
| 384 | m4:label     | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                     |
| 385 | m4:label     | item=SCO_PERCENT; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                      |
| 386 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                  |
| 387 | m4:dataloop  | outputdef=SMCO_OE_OCUALI_DATA                                                                    |
| 388 | m4:current   | var=ziCurPos; outputdef=SMCO_OE_OCUALI_DATA                                                      |
| 391 | m4:item      | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                 |
| 392 | m4:item      | item=SCO_ID_OBJECTIVE; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                 |
| 393 | m4:item      | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                      |
| 394 | m4:item      | item=SCO_NM_LEVEL; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                     |
| 395 | m4:item      | item=SCO_PERCENT; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                      |
| 396 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SMCO_OE_OCUALI_DATA                                  |
| 402 | m4:label     | m4name=SMCO_OE_OCUANTI_DATA{":"}SMCO_OEVALUATOR_DATA{"!"}SMCO_OE_OCUANTI_DATA; jsafe=true        |
| 403 | m4:label     | item=SCO_ID_OBJECTIVE; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                |
| 404 | m4:label     | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                     |
| 405 | m4:label     | item=SCO_ACCOMP_DEGREE; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                               |
| 406 | m4:label     | item=SCO_NM_MAGNITUDE; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                |
| 407 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                 |
| 410 | m4:dataloop  | outputdef=SMCO_OE_OCUANTI_DATA                                                                   |
| 411 | m4:current   | var=ziCurPos; outputdef=SMCO_OE_OCUANTI_DATA                                                     |
| 415 | m4:item      | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                |
| 416 | m4:item      | item=SCO_ID_OBJECTIVE; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                |
| 417 | m4:item      | item=SCO_GB_NAME; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                     |
| 418 | m4:item      | item=SCO_ACCOMP_DEGREE; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                               |
| 419 | m4:item      | item=SCO_NM_MAGNITUDE; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                |
| 420 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SMCO_OE_OCUANTI_DATA                                 |
| 428 | m4:dataloop  | outputdef=SMCO_CAPAB_G_V                                                                         |
| 429 | m4:current   | var=ziCurPos; outputdef=SMCO_CAPAB_G_V                                                           |
| 432 | m4:item      | item=SCO_ID_CAPABILITY; jsafe=true; outputdef=SMCO_CAPAB_G_V                                     |
| 432 | m4:item      | item=SCO_NM_EXTD_KN; jsafe=true; outputdef=SMCO_CAPAB_G_V                                        |
| 433 | m4:item      | item=SCO_NM_EXTD_KN; jsafe=true; outputdef=SMCO_CAPAB_G_V                                        |
| 434 | m4:item      | item=SCO_VALUE_AUTO; jsafe=true; outputdef=SMCO_CAPAB_G_V                                        |
| 435 | m4:item      | item=SCO_VALUE_MEDIA; jsafe=true; outputdef=SMCO_CAPAB_G_V                                       |
| 442 | m4:dataloop  | outputdef=SMCO_OCUALI_G_V                                                                        |
| 443 | m4:current   | var=ziCurPos; outputdef=SMCO_OCUALI_G_V                                                          |
| 446 | m4:item      | item=SCO_ID_OBJECTIVE; jsafe=true; outputdef=SMCO_OCUALI_G_V                                     |
| 446 | m4:item      | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SMCO_OCUALI_G_V                                     |
| 447 | m4:item      | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SMCO_OCUALI_G_V                                     |
| 448 | m4:item      | item=SCO_VALUE_AUTO; jsafe=true; outputdef=SMCO_OCUALI_G_V                                       |
| 450 | m4:item      | item=SCO_VALUE_MEDIA; jsafe=true; outputdef=SMCO_OCUALI_G_V                                      |
| 456 | m4:endpage   |                                                                                                  |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función   | Argumentos |
| --- | --------- | ---------- |
| 49  | graf_eval |            |

| L   | Condición / acción / mensaje literal                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                      |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                              |
| 41  | if ( request.isSecure() )                                                                                                                                            |
| 50  | if (!navigator.appMinorVersion) {                                                                                                                                    |
| 52  | alert(msg);                                                                                                                                                          |
| 54  | } else {                                                                                                                                                             |
| 83  | if (nevaluatorc&gt;1){                                                                                                                                               |
| 108 | if(j==1){                                                                                                                                                            |
| 110 | }else{                                                                                                                                                               |
| 122 | if(j==1){                                                                                                                                                            |
| 124 | }else{                                                                                                                                                               |
| 135 | if(j==1){                                                                                                                                                            |
| 137 | }else{                                                                                                                                                               |
| 153 | if (lcono&gt;1){                                                                                                                                                     |
| 167 | if (cono_ant==cono_act){                                                                                                                                             |
| 169 | }else{                                                                                                                                                               |
| 189 | if (ldatosobj&gt;1){                                                                                                                                                 |
| 205 | if (obj_ant==obj_act){                                                                                                                                               |
| 207 | }else{                                                                                                                                                               |
| 221 | if (ldatosobj2&gt;1){                                                                                                                                                |
| 236 | if (obj_ant==obj_act){                                                                                                                                               |
| 238 | }else{                                                                                                                                                               |
| 259 | if (ExcelApp == null) {                                                                                                                                              |
| 263 | alert(msg);                                                                                                                                                          |
| 266 | }else if (openWb == null) {                                                                                                                                          |
| 270 | alert(msg);                                                                                                                                                          |
| 272 | }else{                                                                                                                                                               |
| 44  | expresión de cálculo/transformación: sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/eval_g_oeval.xls"; |
| 295 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                         |
| 297 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                           |
| 298 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                         |
| 299 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                                                         |
| 300 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                         |
| 302 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                                                         |
| 304 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                                                         |
| 307 | expresión de cálculo/transformación: String zmetodoinit = "INIT:" + zsubsesion + "!SMCO_OEVAL_DATA.SMCO_LOAD_DATA";                                                  |
| 309 | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                                                                      |
| 310 | expresión de cálculo/transformación: String znamenodo4 = znodo4 + ":" + zsubsesion + "!" + znodo4;                                                                   |

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

- Confirmar exposición y permisos de `mss_g3/smco_g3_oeval_g.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
