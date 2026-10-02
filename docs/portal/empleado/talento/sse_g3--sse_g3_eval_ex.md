# sse_g3_eval_ex

Identificador: `sse_g3/sse_g3_eval_ex.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                                       | Ámbito | Diccionario                                                                        |
| ----------------------- | ----------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| ev_mss.LblEvalExceldesc | Seleciona el evaluador del cual quieres imprimir el informe | BASE   | [translations/mss_ev_es.properties:L160](../../referencias/literales/mss_ev_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_eval_ex.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_eval_ex.jsp) | `368aaaba047cc2f0efcdfec1adc95b03262875cfa62a0eb08473da195d7b9d37` |    437 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_eval_ex.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_eval_ex.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                      |
| --- | ----------------------------------------------------------------------------- |
| 431 | " href="javascript:navegarexcell('[valor dinámico]','[valor dinámico]');"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                        |
| --- | ------- | ------------------------------------------------------------------------------------------------ |
| 404 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp; method=post; name=oculto; id=oculto |
| 405 | input   | type=hidden; id=zidType; name=zidType; value=03                                                  |
| 406 | input   | type=hidden; id=zidhr; name=zidhr; value=&lt;%=zidhr%&gt;                                        |
| 407 | input   | type=hidden; id=zorrole; name=zorrole; value=&lt;%=zorrole%&gt;                                  |
| 408 | input   | type=hidden; id=zdtstart; name=zdtstart; value=&lt;%=zdtstart%&gt;                               |
| 409 | input   | type=hidden; id=zidevaluator; name=zidevaluator; value=&lt;%=zidevaluator%&gt;                   |
| 410 | input   | type=hidden; id=zor_evaluator; name=zor_evaluator; value=&lt;%=zor_evaluator%&gt;                |
| 431 | a       | title=&lt;m4:label item=; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                             |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                        |
| --- | --------------- | ------------------------------------- |
| 15  | estado          | getParameter(request,"estado")        |
| 16  | zinicios        | getParameter(request,"zinicios")      |
| 19  | zidType         | getParameter(request,"zidType")       |
| 20  | zidhr           | getParameter(request,"zidhr")         |
| 22  | zorrole         | getParameter(request,"zorrole")       |
| 24  | zdtstart        | getParameter(request,"zdtstart")      |
| 26  | zidevaluator    | getParameter(request,"zidevaluator")  |
| 28  | zor_evaluator   | getParameter(request,"zor_evaluator") |

| L   | Variable          | Expresión fuente                                                                      | Resolución estática parcial                                                           |
| --- | ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 15  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                    |
| 16  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                  |
| 19  | zidType           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidType")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidType")                   |
| 20  | zidhr             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr")                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr")                     |
| 22  | zorrole           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zorrole")                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zorrole")                   |
| 24  | zdtstart          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdtstart")                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdtstart")                  |
| 26  | zidevaluator      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidevaluator")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidevaluator")              |
| 28  | zor_evaluator     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor_evaluator")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor_evaluator")             |
| 39  | sWebServerName    | ""                                                                                    |                                                                                       |
| 40  | sWebServerPort    | ""                                                                                    |                                                                                       |
| 41  | sProtocol         | "http"                                                                                | http                                                                                  |
| 42  | sURLxlsTplt       | ""                                                                                    |                                                                                       |
| 47  | zlanguageFolderev | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) | CheckConfig.checkFolderLanguage(new Long(ilanguageIdev).intValue(), CheckConfig.THCL) |
| 223 | zsubsesion        | "SSE_EVAL_DATA"                                                                       | SSE_EVAL_DATA                                                                         |
| 224 | zmeta4object      | "SSE_EVAL_DATA"                                                                       | SSE_EVAL_DATA                                                                         |
| 225 | znodo             | "SSE_EVAL_DATA"                                                                       | SSE_EVAL_DATA                                                                         |
| 226 | znodo1            | "SSE_EVAL_CAPAB_DATA"                                                                 | SSE_EVAL_CAPAB_DATA                                                                   |
| 227 | znodo2            | "SSE_EVAL_OCUALI_DATA"                                                                | SSE_EVAL_OCUALI_DATA                                                                  |
| 228 | znodo3            | "SSE_EVAL_OCUANTI_DATA"                                                               | SSE_EVAL_OCUANTI_DATA                                                                 |
| 229 | znodo4            | "SSE_EVALUATOR_FIND"                                                                  | SSE_EVALUATOR_FIND                                                                    |
| 231 | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                                      | SSE_EVAL_DATA{"!"}SSE_EVAL_DATA{"[*]"}                                                |
| 232 | zoutputdef1       | zsubsesion + "!" + znodo1 + "[*]"                                                     | SSE_EVAL_DATA{"!"}SSE_EVAL_CAPAB_DATA{"[*]"}                                          |
| 233 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                                     | SSE_EVAL_DATA{"!"}SSE_EVAL_OCUALI_DATA{"[*]"}                                         |
| 234 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                                     | SSE_EVAL_DATA{"!"}SSE_EVAL_OCUANTI_DATA{"[*]"}                                        |
| 235 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                                     | SSE_EVAL_DATA{"!"}SSE_EVALUATOR_FIND{"[*]"}                                           |
| 237 | zmove             | znodo + ":" + znodo + "[FIRST]"                                                       | SSE_EVAL_DATA{":"}SSE_EVAL_DATA{"[FIRST]"}                                            |
| 238 | zmove1            | znodo1 + ":" + znodo1 + "[FIRST]"                                                     | SSE_EVAL_CAPAB_DATA{":"}SSE_EVAL_CAPAB_DATA{"[FIRST]"}                                |
| 240 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_EVAL_DATA.SSE_LOAD"                                     | CARGA:{}SSE_EVAL_DATA{"!SSE_EVAL_DATA.SSE_LOAD"}                                      |
| 264 | zcount            | 0                                                                                     | 0                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                     |
| --- | ------------ | ------------------------------------------------------------------------------------------------------ |
| 242 | m4:startpage | m4task=SSE_EVAL_DATA                                                                                   |
| 243 | m4:beginjob  |                                                                                                        |
| 244 | m4:datadef   | m4o=SSE_EVAL_DATA; m4name=SSE_EVAL_DATA                                                                |
| 245 | m4:exec      | m4method=CARGA:{}SSE_EVAL_DATA{"!SSE_EVAL_DATA.SSE_LOAD"}                                              |
| 246 | m4:param     | name=ARG_ID_TYPE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidType")            |
| 247 | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidhr")                |
| 248 | m4:param     | name=ARG_OR_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zorrole")              |
| 249 | m4:param     | name=ARG_DT_START_EVAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdtstart")     |
| 250 | m4:param     | name=ARG_ID_EVALUATOR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zidevaluator")  |
| 251 | m4:param     | name=ARG_OR_EVALUATOR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zor_evaluator") |
| 254 | m4:outputdef | m4alias=SSE_EVAL_DATA                                                                                  |
| 254 | m4:param     | name=m4name0; value=SSE_EVAL_DATA{"!"}SSE_EVAL_DATA{"[*]"}                                             |
| 255 | m4:outputdef | m4alias=SSE_EVAL_CAPAB_DATA                                                                            |
| 255 | m4:param     | name=m4name0; value=SSE_EVAL_DATA{"!"}SSE_EVAL_CAPAB_DATA{"[*]"}                                       |
| 256 | m4:outputdef | m4alias=SSE_EVAL_OCUALI_DATA                                                                           |
| 256 | m4:param     | name=m4name0; value=SSE_EVAL_DATA{"!"}SSE_EVAL_OCUALI_DATA{"[*]"}                                      |
| 257 | m4:outputdef | m4alias=SSE_EVAL_OCUANTI_DATA                                                                          |
| 257 | m4:param     | name=m4name0; value=SSE_EVAL_DATA{"!"}SSE_EVAL_OCUANTI_DATA{"[*]"}                                     |
| 258 | m4:outputdef | m4alias=SSE_EVALUATOR_FIND                                                                             |
| 258 | m4:param     | name=m4name0; value=SSE_EVAL_DATA{"!"}SSE_EVALUATOR_FIND{"[*]"}                                        |
| 259 | m4:endjob    |                                                                                                        |
| 260 | m4:move      |                                                                                                        |
| 260 | m4:param     | name=SSE_EVAL_DATA; value=SSE_EVAL_DATA{":"}SSE_EVAL_DATA{"[FIRST]"}                                   |
| 262 | m4:item      | m4varname=zAskEvaluator; item=PAR_ASK_EVALUATOR; htmlsafe=true; outputdef=SSE_EVAL_DATA                |
| 276 | m4:item      | item=SCO_NM_EVAL_PROC; jsafe=true; outputdef=SSE_EVAL_DATA                                             |
| 277 | m4:item      | item=SSE_AUTO; jsafe=true; outputdef=SSE_EVAL_DATA                                                     |
| 278 | m4:item      | item=SCO_GB_NAME; jsafe=true; outputdef=SSE_EVAL_DATA                                                  |
| 279 | m4:label     | item=SCO_GB_NAME; jsafe=true; outputdef=SSE_EVAL_DATA                                                  |
| 280 | m4:item      | item=SSE_EVALUATOR_NAME; jsafe=true; outputdef=SSE_EVAL_DATA                                           |
| 281 | m4:label     | item=SSE_EVALUATOR_NAME; jsafe=true; outputdef=SSE_EVAL_DATA                                           |
| 282 | m4:item      | item=STD_N_JOB_CODE; jsafe=true; outputdef=SSE_EVAL_DATA                                               |
| 283 | m4:label     | item=STD_N_JOB_CODE; jsafe=true; outputdef=SSE_EVAL_DATA                                               |
| 284 | m4:item      | item=SCO_DT_ST_EV_PER; jsafe=true; outputdef=SSE_EVAL_DATA                                             |
| 285 | m4:item      | item=SCO_DT_END_EV_PER; jsafe=true; outputdef=SSE_EVAL_DATA                                            |
| 286 | m4:label     | item=SCO_DT_ST_EV_PER; jsafe=true; outputdef=SSE_EVAL_DATA                                             |
| 287 | m4:label     | get=node; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                                    |
| 288 | m4:label     | get=node; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                                   |
| 289 | m4:label     | get=node; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                                  |
| 290 | m4:item      | item=SSE_NM_LEVEL_CAP; jsafe=true; outputdef=SSE_EVAL_DATA                                             |
| 291 | m4:item      | item=SSE_CALCUL_RAT_CAP; jsafe=true; outputdef=SSE_EVAL_DATA                                           |
| 293 | m4:item      | item=SSE_CALCUL_RAT_OBJ; jsafe=true; outputdef=SSE_EVAL_DATA                                           |
| 294 | m4:item      | item=SSE_NM_LEVEL_OBJ; jsafe=true; outputdef=SSE_EVAL_DATA                                             |
| 295 | m4:item      | item=SCO_VALUE_OBJ_QUANT; jsafe=true; outputdef=SSE_EVAL_DATA                                          |
| 296 | m4:item      | item=SSE_EVALUATOR_COMM; jsafe=true; outputdef=SSE_EVAL_DATA                                           |
| 297 | m4:label     | item=SSE_EVALUATOR_COMM; jsafe=true; outputdef=SSE_EVAL_DATA                                           |
| 298 | m4:item      | item=SSE_EMPLOYEE_COMM; jsafe=true; outputdef=SSE_EVAL_DATA                                            |
| 299 | m4:label     | item=SCO_COMMENT; jsafe=true; outputdef=SSE_EVAL_DATA                                                  |
| 300 | m4:item      | item=SSE_STRENGTHS; jsafe=true; outputdef=SSE_EVAL_DATA                                                |
| 301 | m4:label     | item=SSE_STRENGTHS; jsafe=true; outputdef=SSE_EVAL_DATA                                                |
| 302 | m4:item      | item=SSE_AREAS_IMP; jsafe=true; outputdef=SSE_EVAL_DATA                                                |
| 303 | m4:label     | item=SSE_AREAS_IMP; jsafe=true; outputdef=SSE_EVAL_DATA                                                |
| 307 | m4:label     | item=SCO_NM_EXTD_KN; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                         |
| 308 | m4:label     | item=SCO_NM_EXTD_KN_TYP; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                     |
| 309 | m4:label     | item=SCO_NM_CRITERIA_TYPE; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                   |
| 310 | m4:label     | item=SCO_NM_LEVEL; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                           |
| 311 | m4:label     | item=SCO_NM_LEVEL_AUTO; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                      |
| 312 | m4:label     | item=SCO_NM_LEVEL_1; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                         |
| 313 | m4:label     | item=SCO_VALUE_RAT; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                          |
| 314 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                        |
| 315 | m4:label     | item=SCO_MEANING; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                            |
| 317 | m4:dataloop  | outputdef=SSE_EVAL_CAPAB_DATA                                                                          |
| 318 | m4:current   | var=ziCurPos; outputdef=SSE_EVAL_CAPAB_DATA                                                            |
| 321 | m4:item      | item=SCO_NM_EXTD_KN; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                         |
| 322 | m4:item      | item=SCO_NM_EXTD_KN_TYP; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                     |
| 323 | m4:item      | item=SCO_NM_CRITERIA_TYPE; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                   |
| 324 | m4:item      | item=SCO_NM_LEVEL; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                           |
| 325 | m4:item      | item=SCO_NM_LEVEL_AUTO; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                      |
| 326 | m4:item      | item=SCO_NM_LEVEL_1; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                         |
| 327 | m4:item      | item=SCO_VALUE_RAT; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                          |
| 328 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                        |
| 329 | m4:item      | item=SCO_MEANING; jsafe=true; outputdef=SSE_EVAL_CAPAB_DATA                                            |
| 336 | m4:label     | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                      |
| 337 | m4:label     | item=SCO_NM_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                           |
| 338 | m4:label     | item=SCO_NM_CRITERIA_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                  |
| 339 | m4:label     | item=SCO_NM_LEVEL; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                          |
| 340 | m4:label     | item=SCO_NM_LEVEL_AUTO; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                     |
| 341 | m4:label     | item=SCO_NM_LEVEL_1; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                        |
| 343 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                       |
| 344 | m4:label     | item=SCO_MEANING; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                           |
| 347 | m4:dataloop  | outputdef=SSE_EVAL_OCUALI_DATA                                                                         |
| 348 | m4:current   | var=ziCurPos; outputdef=SSE_EVAL_OCUALI_DATA                                                           |
| 351 | m4:item      | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                      |
| 352 | m4:item      | item=SCO_NM_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                           |
| 353 | m4:item      | item=SCO_NM_CRITERIA_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                  |
| 354 | m4:item      | item=SCO_NM_LEVEL; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                          |
| 355 | m4:item      | item=SCO_NM_LEVEL_AUTO; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                     |
| 356 | m4:item      | item=SCO_NM_LEVEL_1; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                        |
| 358 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                       |
| 359 | m4:item      | item=SCO_MEANING; jsafe=true; outputdef=SSE_EVAL_OCUALI_DATA                                           |
| 366 | m4:label     | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                     |
| 367 | m4:label     | item=SCO_NM_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                          |
| 368 | m4:label     | item=SCO_NM_CRITERIA_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                 |
| 369 | m4:label     | item=SCO_SCHED_VALUE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                      |
| 370 | m4:label     | item=SCO_ACCOMP_DEGREE_AUTO; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                               |
| 371 | m4:label     | item=SCO_ACCOMP_DEGREE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                    |
| 372 | m4:label     | item=SCO_NM_MAGNITUDE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                     |
| 373 | m4:label     | item=SCO_EXPLANATION; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                      |
| 378 | m4:dataloop  | outputdef=SSE_EVAL_OCUANTI_DATA                                                                        |
| 379 | m4:current   | var=ziCurPos; outputdef=SSE_EVAL_OCUANTI_DATA                                                          |
| 382 | m4:item      | item=SCO_NM_OBJECTIVE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                     |
| 383 | m4:item      | item=SCO_NM_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                          |
| 384 | m4:item      | item=SCO_NM_CRITERIA_TYPE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                 |
| 385 | m4:item      | item=SCO_SCHED_VALUE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                      |
| 386 | m4:item      | item=SCO_ACCOMP_DEGREE_AUTO; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                               |
| 387 | m4:item      | item=SCO_ACCOMP_DEGREE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                    |
| 388 | m4:item      | item=SCO_NM_MAGNITUDE; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                     |
| 389 | m4:item      | item=SCO_EXPLANATION; jsafe=true; outputdef=SSE_EVAL_OCUANTI_DATA                                      |
| 423 | m4:label     | item=SCO_GB_NAME; htmlsafe=true; outputdef=SSE_EVALUATOR_FIND                                          |
| 426 | m4:dataloop  | outputdef=SSE_EVALUATOR_FIND                                                                           |
| 427 | m4:item      | item=SCO_ID_EVALUATOR; htmlsafe=true; outputdef=SSE_EVALUATOR_FIND; m4varname=sIdEval                  |
| 429 | m4:item      | item=SCO_OR_EVALUATOR; htmlsafe=true; outputdef=SSE_EVALUATOR_FIND; m4varname=sOrEval                  |
| 431 | m4:item      | item=SCO_GB_NAME; htmlsafe=true; outputdef=SSE_EVALUATOR_FIND                                          |
| 435 | m4:endpage   |                                                                                                        |

| L   | Operación | Argumentos literales   |
| --- | --------- | ---------------------- |
| 267 | getCount  | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos                                |
| --- | ---------------- | ----------------------------------------- |
| 60  | excel_eval_cabec | varsheetObj                               |
| 74  | ex_block         | varsheetObj,var_data,var_data_start_row,p |
| 106 | excel_eval       | var_type                                  |
| 215 | navegarexcell    | empleado,ordinal                          |

| L   | Condición / acción / mensaje literal                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                                      |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                              |
| 30  | if ((zidType==null)&#124;&#124;(zidType.equals(""))){zidType="01";}                                                                                                  |
| 31  | if ((zidhr==null)&#124;&#124;(zidhr.equals(""))){zidhr="";}                                                                                                          |
| 32  | if ((zorrole==null)&#124;&#124;(zorrole.equals(""))){zorrole="";}                                                                                                    |
| 33  | if ((zdtstart==null)&#124;&#124;(zdtstart.equals(""))){zdtstart="";}                                                                                                 |
| 34  | if ((zidevaluator==null)&#124;&#124;(zidevaluator.equals(""))){zidevaluator="";}                                                                                     |
| 35  | if ((zor_evaluator==null)&#124;&#124;(zor_evaluator.equals(""))){zor_evaluator="";}                                                                                  |
| 52  | if ( request.isSecure() )                                                                                                                                            |
| 76  | if (lvar_data&gt;1){                                                                                                                                                 |
| 90  | if (i&gt;1){                                                                                                                                                         |
| 101 | }else{                                                                                                                                                               |
| 108 | if (!navigator.appMinorVersion) {                                                                                                                                    |
| 110 | alert(msg);                                                                                                                                                          |
| 112 | } else {                                                                                                                                                             |
| 138 | if (_var_cabec[1]=="0"){sheetObj.Columns(6).Hidden = true ; }                                                                                                        |
| 141 | if (lcono&gt;1){                                                                                                                                                     |
| 146 | if (lObjcualita&gt;1){                                                                                                                                               |
| 152 | if (lObjcuanti&gt;1){                                                                                                                                                |
| 164 | if (var_type=="02"){                                                                                                                                                 |
| 167 | if (var_type=="03"){                                                                                                                                                 |
| 170 | if (lcono==1){                                                                                                                                                       |
| 175 | if (lObjcualita==1){                                                                                                                                                 |
| 181 | if (lObjcuanti==1){                                                                                                                                                  |
| 193 | if (ExcelApp == null) {                                                                                                                                              |
| 197 | alert(msg);                                                                                                                                                          |
| 200 | }else if (openWb == null) {                                                                                                                                          |
| 205 | alert(msg);                                                                                                                                                          |
| 207 | }else{                                                                                                                                                               |
| 269 | if (zAskEvaluator.equals("0") ) {                                                                                                                                    |
| 270 | if (zcount &gt; 0) {%&gt;                                                                                                                                            |
| 396 | &lt;%}else{%&gt;                                                                                                                                                     |
| 55  | expresión de cálculo/transformación: sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort + "/plantillas/"+zlanguageFolderev+"/eval_informe.xls"; |
| 231 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                           |
| 232 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                         |
| 233 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                         |
| 234 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                                         |
| 235 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                                                         |
| 237 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                                 |
| 238 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                                              |
| 240 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_EVAL_DATA.SSE_LOAD";                                                        |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g3/sse_ev_trans.jsp                     |
| 10  | /mss_g3/mss_ev_trans.jsp                     |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 12  | /css/estilo_mss.css                                  |
| 13  | /libreria/funciones_sse.js                           |
| 404 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp |
| 431 | javascript:navegarexcell(                            |
| 1   | ../../sse_generico/sse_generico_taglib.jsp           |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp         |
| 8   | ../../sse_generico/espanol/menu_ess.jsp              |
| 9   | /sse_g3/sse_ev_trans.jsp                             |
| 10  | /mss_g3/mss_ev_trans.jsp                             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                           | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ---------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp           | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp         | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp              | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                             | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 10  | /mss_g3/mss_ev_trans.jsp                             | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |
| BASE   | 13  | /libreria/funciones_sse.js                           | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 404 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_eval_ex.jsp | ausente    | P06                                                                                                           |
| BASE   | 431 | javascript:navegarexcell(                            | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp           | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp         | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp              | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                             | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 10  | /mss_g3/mss_ev_trans.jsp                             | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_eval_ex.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
