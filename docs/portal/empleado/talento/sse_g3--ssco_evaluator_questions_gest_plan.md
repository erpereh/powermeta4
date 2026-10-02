# ssco_evaluator_questions_gest_plan

Identificador: `sse_g3/ssco_evaluator_questions_gest_plan.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave               | Texto                              | Ámbito | Diccionario                                                                                  |
| ------------------- | ---------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.SaveTemp     | Guardar temporalmente              | COLL   | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTemp     | Guardar temporalmente              | CYC    | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTemp     | Guardar temporalmente              | IBER   | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTemp     | Guardar temporalmente              | BASE   | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | COLL   | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | CYC    | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | IBER   | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | BASE   | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | COLL   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | CYC    | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | IBER   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | BASE   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | No hay tareas pendientes.          | BASE   | [translations/ssco_etask_es.properties:L13](../../referencias/literales/ssco_etask_es.md)    |
| ev_ess.TitQuestion  | Cuestionario                       | BASE   | [translations/ess_ev_es.properties:L117](../../referencias/literales/ess_ev_es.md)           |
| ev_ess.TitQuestion  | Cuestionario                       | BASE   | [translations/mss_ev_es.properties:L150](../../referencias/literales/mss_ev_es.md)           |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_evaluator_questions_gest_plan.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions_gest_plan.jsp) | `a31e78a9d7f988de8de4497d2adec01f5b76528272d84d037814f35e9ac42db5` |    712 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_evaluator_questions_gest_plan.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions_gest_plan.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 273 | Cuestionario:            |
| 306 | %                        |
| 307 | URGENTE                  |
| 308 | NO URGENTE               |
| 313 | NO IMPORTANTE            |
| 326 | IMPORTANTE               |
| 349 | %                        |
| 350 | URGENTE                  |
| 351 | NO URGENTE               |
| 356 | NO IMPORTANTE            |
| 369 | IMPORTANTE               |
| 411 | %                        |
| 412 | COLATERALES              |
| 413 | COLABORADORES            |
| 414 | SUPERIORES               |
| 415 | OTROS                    |
| 420 | TIEMPO REAL              |
| 452 | %                        |
| 453 | COLATERALES              |
| 454 | COLABORADORES            |
| 455 | SUPERIORES               |
| 456 | OTROS                    |
| 461 | TIEMPO IDEAL             |
| 503 | 1...                     |
| 510 | 2...                     |
| 517 | 3...                     |
| 524 | 4...                     |
| 531 | 5...                     |
| 538 | 6...                     |
| 545 | 7...                     |
| 552 | 8...                     |
| 573 | No                       |
| 579 | Si                       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                   |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 255 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp; method=post; name=nombreformulario; id=nombreformulario                                          |
| 256 | input   | type=hidden; id=SSE_CONOCIMIENTO_TEMP; name=SSE_CONOCIMIENTO_TEMP; value=&lt;%=id_cap%&gt;                                                                                  |
| 257 | input   | type=hidden; id=spos; name=spos; value=&lt;%=spos%&gt;                                                                                                                      |
| 258 | input   | type=hidden; id=mss; name=mss; value=&lt;%=mss%&gt;                                                                                                                         |
| 259 | input   | type=hidden; id=SSE_CONO_QUESTION; name=SSE_CONO_QUESTION; value=                                                                                                           |
| 260 | input   | type=hidden; id=SSE_CAL_QUESTION; name=SSE_CAL_QUESTION; value=0                                                                                                            |
| 267 | a       | id=idHome; href=                                                                                                                                                            |
| 268 | img     | src=/iconos/logo_cyc.jpg; class=imglogocyc                                                                                                                                  |
| 274 | input   | type=hidden; id=cues; value="&lt;m4:item; item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=&lt;%=znodo4%&gt;                                                                   |
| 314 | form    | name=a1; id=a1; action=                                                                                                                                                     |
| 315 | input   | id=id_ques0; name=id_ques0; type=hidden; value=253                                                                                                                          |
| 316 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE2; id=SSCO_SV_ANSWER_TP_VALUE2; class=tabl_in_Org; value=0; onchange=sumarR();; tabindex=3          |
| 318 | form    | name=a2; id=a2; action=                                                                                                                                                     |
| 319 | input   | id=id_ques1; name=id_ques1; type=hidden; value=254                                                                                                                          |
| 320 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE3; id=SSCO_SV_ANSWER_TP_VALUE3; class=tabl_in_Org; value=0; onchange=sumarR();; tabindex=4          |
| 327 | form    | name=a3; id=a3; action=                                                                                                                                                     |
| 328 | input   | id=id_ques2; name=id_ques2; type=hidden; value=251                                                                                                                          |
| 329 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE0; id=SSCO_SV_ANSWER_TP_VALUE0; class=tabl_in_Org; value=0; onchange=sumarR();; tabindex=1          |
| 331 | form    | name=a4; id=a4; action=                                                                                                                                                     |
| 332 | input   | id=id_ques3; name=id_ques3; type=hidden; value=252                                                                                                                          |
| 333 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE1; id=SSCO_SV_ANSWER_TP_VALUE1; class=tabl_in_Org; value=0; onchange=sumarR();; tabindex=2          |
| 357 | form    | name=a5; id=a5; action=                                                                                                                                                     |
| 358 | input   | id=id_ques4; name=id_ques4; type=hidden; value=257                                                                                                                          |
| 359 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE6; id=SSCO_SV_ANSWER_TP_VALUE6; class=tabl_in_Org; value=0; onchange=sumarI();; tabindex=7          |
| 361 | form    | name=a6; id=a6; action=                                                                                                                                                     |
| 362 | input   | id=id_ques5; name=id_ques5; type=hidden; value=258                                                                                                                          |
| 363 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE7; id=SSCO_SV_ANSWER_TP_VALUE7; class=tabl_in_Org; value=0; onchange=sumarI();; tabindex=8          |
| 370 | form    | name=a7; id=a7; action=                                                                                                                                                     |
| 371 | input   | id=id_ques6; name=id_ques6; type=hidden; value=255                                                                                                                          |
| 372 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE4; id=SSCO_SV_ANSWER_TP_VALUE4; class=tabl_in_Org; value=0; onchange=sumarI();; tabindex=5          |
| 374 | form    | name=a8; id=a8; action=                                                                                                                                                     |
| 375 | input   | id=id_ques7; name=id_ques7; type=hidden; value=256                                                                                                                          |
| 376 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE5; id=SSCO_SV_ANSWER_TP_VALUE5; class=tabl_in_Org; value=0; onchange=sumarI();; tabindex=6          |
| 421 | form    | name=a9; id=a9; action=                                                                                                                                                     |
| 422 | input   | id=id_ques8; name=id_ques8; type=hidden; value=259                                                                                                                          |
| 423 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE8; id=SSCO_SV_ANSWER_TP_VALUE8; onchange=sumarTR();; value=0; tabindex=9                            |
| 425 | form    | name=a10; id=a10; action=                                                                                                                                                   |
| 426 | input   | id=id_ques9; name=id_ques9; type=hidden; value=260                                                                                                                          |
| 427 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE9; id=SSCO_SV_ANSWER_TP_VALUE9; onchange=sumarTR();; value=0; tabindex=10                           |
| 429 | form    | name=a11; id=a11; action=                                                                                                                                                   |
| 430 | input   | id=id_ques10; name=id_ques10; type=hidden; value=261                                                                                                                        |
| 431 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE10; id=SSCO_SV_ANSWER_TP_VALUE10; onchange=sumarTR();; value=0; tabindex=11                         |
| 433 | form    | name=a12; id=a12; action=                                                                                                                                                   |
| 434 | input   | id=id_ques11; name=id_ques11; type=hidden; value=262                                                                                                                        |
| 435 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE11; id=SSCO_SV_ANSWER_TP_VALUE11; onchange=sumarTR();; value=0; tabindex=12                         |
| 462 | form    | name=a13; id=a13; action=                                                                                                                                                   |
| 463 | input   | id=id_ques12; name=id_ques12; type=hidden; value=263                                                                                                                        |
| 464 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE12; id=SSCO_SV_ANSWER_TP_VALUE12; onchange=sumarTI();; value=0; tabindex=13                         |
| 466 | form    | name=a14; id=a14; action=                                                                                                                                                   |
| 467 | input   | id=id_ques13; name=id_ques13; type=hidden; value=264                                                                                                                        |
| 468 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE13; id=SSCO_SV_ANSWER_TP_VALUE13; onchange=sumarTI();; value=0; tabindex=14                         |
| 470 | form    | name=a15; id=a15; action=                                                                                                                                                   |
| 471 | input   | id=id_ques14; name=id_ques14; type=hidden; value=265                                                                                                                        |
| 472 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE14; id=SSCO_SV_ANSWER_TP_VALUE14; onchange=sumarTI();; value=0; tabindex=15                         |
| 474 | form    | name=a16; id=a16; action=                                                                                                                                                   |
| 475 | input   | id=id_ques15; name=id_ques15; type=hidden; value=266                                                                                                                        |
| 476 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE15; id=SSCO_SV_ANSWER_TP_VALUE15; onchange=sumarTI();; value=0; tabindex=16                         |
| 504 | form    | name=a17; id=a17; action=                                                                                                                                                   |
| 505 | input   | id=id_ques16; name=id_ques16; type=hidden; value=267                                                                                                                        |
| 506 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE16; id=SSCO_SV_ANSWER_TP_VALUE16; class=tabl_in_Org2; tabindex=17                                   |
| 511 | form    | name=a18; id=a18; action=                                                                                                                                                   |
| 512 | input   | id=id_ques17; name=id_ques17; type=hidden; value=268                                                                                                                        |
| 513 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE17; id=SSCO_SV_ANSWER_TP_VALUE17; class=tabl_in_Org2; tabindex=18                                   |
| 518 | form    | name=a19; id=a19; action=                                                                                                                                                   |
| 519 | input   | id=id_ques18; name=id_ques18; type=hidden; value=269                                                                                                                        |
| 520 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE18; id=SSCO_SV_ANSWER_TP_VALUE18; class=tabl_in_Org2; tabindex=19                                   |
| 525 | form    | name=a20; id=a20; action=                                                                                                                                                   |
| 526 | input   | id=id_ques19; name=id_ques19; type=hidden; value=270                                                                                                                        |
| 527 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE19; id=SSCO_SV_ANSWER_TP_VALUE19; class=tabl_in_Org2; tabindex=20                                   |
| 532 | form    | name=a21; id=a21; action=                                                                                                                                                   |
| 533 | input   | id=id_ques20; name=id_ques20; type=hidden; value=271                                                                                                                        |
| 534 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE20; id=SSCO_SV_ANSWER_TP_VALUE20; class=tabl_in_Org2; tabindex=21                                   |
| 539 | form    | name=a22; id=a22; action=                                                                                                                                                   |
| 540 | input   | id=id_ques21; name=id_ques21; type=hidden; value=272                                                                                                                        |
| 541 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE21; id=SSCO_SV_ANSWER_TP_VALUE21; class=tabl_in_Org2; tabindex=22                                   |
| 546 | form    | name=a23; id=a23; action=                                                                                                                                                   |
| 547 | input   | id=id_ques22; name=id_ques22; type=hidden; value=273                                                                                                                        |
| 548 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE22; id=SSCO_SV_ANSWER_TP_VALUE22; class=tabl_in_Org2; tabindex=23                                   |
| 553 | form    | name=a24; id=a24; action=                                                                                                                                                   |
| 554 | input   | id=id_ques23; name=id_ques23; type=hidden; value=274                                                                                                                        |
| 555 | input   | type=text; onkeypress=return pulsar(event); name=SSCO_SV_ANSWER_TP_VALUE23; id=SSCO_SV_ANSWER_TP_VALUE23; class=tabl_in_Org2; tabindex=24                                   |
| 564 | form    | name=a25; id=a25; action= ; style=display: none;                                                                                                                            |
| 566 | input   | id=p25; value=terminado; type=hidden                                                                                                                                        |
| 570 | input   | id=id_ques24; name=id_ques24; value=999; type=hidden                                                                                                                        |
| 574 | input   | name=SSCO_SV_ANSWER_TP_VALUE24; id=SSCO_SV_ANSWER_TP_VALUE24; value=0; type=radio                                                                                           |
| 580 | input   | name=SSCO_SV_ANSWER_TP_VALUE24; id=SSCO_SV_ANSWER_TP_VALUE24; value=1; type=radio                                                                                           |
| 696 | a       | title=&lt;%=Save%&gt;; href=javascript:guard(25);                                                                                                                           |
| 697 | img     | alt=&lt;%=Save%&gt;; src=/iconos/icono_guardar_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 706 | img     | src=/images/barra_pie1.png                                                                                                                                                  |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 14  | id_cap          | getParameter(request,"id_cap")  |
| 16  | spos            | getParameter(request,"spos")    |
| 18  | sResult         | getParameter(request,"sResult") |
| 20  | mss             | getParameter(request,"mss")     |

| L   | Variable        | Expresión fuente                                                      | Resolución estática parcial                                                                               |
| --- | --------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 14  | id_cap          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")                                        |
| 16  | spos            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")                                          |
| 18  | sResult         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult")                                       |
| 20  | mss             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                           |
| 22  | zTit            | ""                                                                    |                                                                                                           |
| 23  | zNodata         | ""                                                                    |                                                                                                           |
| 24  | Save            | ""                                                                    |                                                                                                           |
| 25  | zSaveTempCalc   | ""                                                                    |                                                                                                           |
| 192 | zsubsesion      | "SSCO_H_EVALUTE"                                                      | SSCO_H_EVALUTE                                                                                            |
| 193 | zmeta4object    | "SSCO_H_EVALUTE"                                                      | SSCO_H_EVALUTE                                                                                            |
| 195 | znodo4          | "SSCO_EVAL_CAPAB"                                                     | SSCO_EVAL_CAPAB                                                                                           |
| 196 | znodo5          | "SSCO_EV_CAPAB_QUESTIONS"                                             | SSCO_EV_CAPAB_QUESTIONS                                                                                   |
| 197 | znodo6          | "SSCO_SV_ANSWER_TP_VALUE"                                             | SSCO_SV_ANSWER_TP_VALUE                                                                                   |
| 199 | zventanas       | "6"                                                                   | 6                                                                                                         |
| 200 | zvuelta         | 3                                                                     | 3                                                                                                         |
| 201 | zestado         | "31"                                                                  | 31                                                                                                        |
| 203 | zoutputdef1     | zsubsesion + "!" + znodo4 + "["+spos+"]"                              | SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")]  |
| 204 | zmove1          | znodo4 + ":" + znodo4 + "["+spos+"]"                                  | SSCO_EVAL_CAPAB{":"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")] |
| 205 | zraiz1          | znodo4 + ":" + zsubsesion + "!"+ znodo4+"."                           | SSCO_EVAL_CAPAB{":"}SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB.                                                   |
| 207 | zoutputdef2     | zsubsesion + "!" + znodo5 + "[*]"                                     | SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS{"[*]"}                                                         |
| 208 | zmove2          | znodo5 + ":" + znodo5 + "[FIRST]"                                     | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS{"[FIRST]"}                                            |
| 209 | zcomun2         | znodo5 + ":" + zmeta4object + "!" + znodo5 + "[&amp;VAR.m4lix]" + "." | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS{"[&amp;VAR.m4lix]"}{"."}           |
| 211 | znamenodo       | znodo5 + ":" + zsubsesion + "!" + znodo5                              | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS                                    |
| 212 | zSCO_NM_EXTD_KN | zraiz1 + "SCO_NM_EXTD_KN"                                             | SSCO_EVAL_CAPAB{":"}SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB.{"SCO_NM_EXTD_KN"}                                 |
| 213 | zmetodocarga    | zsubsesion + "!SSCO_EVAL_CAPAB.LOAD_QUESTIONS"                        | SSCO_H_EVALUTE{"!SSCO_EVAL_CAPAB.LOAD_QUESTIONS"}                                                         |
| 215 | scountquestion  | ""                                                                    |                                                                                                           |
| 228 | icountquestion  | 0                                                                     | 0                                                                                                         |
| 229 | zmoves          | znodo5 + ":" + znodo5                                                 | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS                                                       |
| 230 | zalias          | ""                                                                    |                                                                                                           |
| 231 | h               | 0                                                                     | 0                                                                                                         |
| 247 | zcount2         | 0                                                                     | 0                                                                                                         |
| 248 | vsResultado     | ""                                                                    |                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                                   |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 217 | m4:startpage  | m4task=SSCO_H_EVALUTE                                                                                                                |
| 218 | m4:beginjob   |                                                                                                                                      |
| 218 | m4:datadef    | m4o=SSCO_H_EVALUTE; m4name=SSCO_H_EVALUTE                                                                                            |
| 219 | m4:exec       | m4method=SSCO_H_EVALUTE{"!SSCO_EVAL_CAPAB.LOAD_QUESTIONS"}                                                                           |
| 219 | m4:param      | name=ARG_SCO_ID_CAPABILITY; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")                                 |
| 220 | m4:move       |                                                                                                                                      |
| 220 | m4:param      | name=SSCO_H_EVALUTE; value=SSCO_EVAL_CAPAB{":"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")] |
| 221 | m4:exec       | node=SSCO_EV_CAPAB_QUESTIONS; alias=countquestion; method=COUNT; m4object=SSCO_H_EVALUTE                                             |
| 222 | m4:endjob     |                                                                                                                                      |
| 223 | m4:beginjob   |                                                                                                                                      |
| 224 | m4:outputexec | var=; alias=countquestion                                                                                                            |
| 225 | m4:outputdef  | m4alias=SSCO_EVAL_CAPAB                                                                                                              |
| 225 | m4:param      | name=m4name0; value=SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")]         |
| 226 | m4:outputdef  | m4alias=SSCO_EV_CAPAB_QUESTIONS                                                                                                      |
| 226 | m4:param      | name=m4name0; value=SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS{"[*]"}                                                                |
| 238 | m4:move       |                                                                                                                                      |
| 238 | m4:param      | name=SSCO_H_EVALUTE; value=SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS                                                       |
| 239 | m4:outputdef  | m4alias=                                                                                                                             |
| 239 | m4:param      | name=m4name0; value=SSCO_H_EVALUTE!SSCO_SV_ANSWER_TP_VALUE[*]                                                                        |
| 244 | m4:endjob     |                                                                                                                                      |
| 245 | m4:move       |                                                                                                                                      |
| 245 | m4:param      | name=SSCO_H_EVALUTE; value=SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS{"[FIRST]"}                                            |
| 273 | m4:item       | item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=SSCO_EVAL_CAPAB                                                                        |
| 588 | m4:dataloop   | outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                                                    |
| 590 | m4:item       | item=SCO_ID_ANSWER_VAL_TEMP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS; jsafe=true                                            |
| 594 | m4:item       | item=SCO_ID_QUESTION; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS; jsafe=true                                                   |
| 595 | m4:item       | item=SCO_ID_ANSWER_VAL_TEMP; outputdef=SSCO_EV_CAPAB_QUESTIONS; jsafe=true                                                           |
| 711 | m4:endpage    |                                                                                                                                      |

| L   | Operación | Argumentos literales     |
| --- | --------- | ------------------------ |
| 251 | getCount  | znodo5,zsubsesion,znodo5 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos         |
| --- | ---------------- | ------------------ |
| 57  | guard            | j                  |
| 104 | comprobarMT      |                    |
| 131 | m4select         | select,idform,modo |
| 150 | getRadioValue    | form, radioName    |
| 159 | AddComent        | objeto             |
| 165 | returnvalues     | ar                 |
| 184 | pulsar           | e                  |
| 602 | sumarR           |                    |
| 615 | sumarI           |                    |
| 628 | sumarTR          |                    |
| 640 | sumarTI          |                    |
| 654 | verificar        | id                 |
| 674 | validate_importe | value,decimal      |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                        |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((id_cap==null)&#124;&#124;(id_cap.equals(""))){id_cap = "";}                                                                                                                                                                                                            |
| 17  | if ((spos==null)&#124;&#124;(spos.equals(""))){spos = "";}                                                                                                                                                                                                                  |
| 19  | if ((sResult==null)&#124;&#124;(sResult.equals(""))){sResult = "0";}                                                                                                                                                                                                        |
| 21  | if ((mss==null)&#124;&#124;(mss.equals(""))){mss = "0";}                                                                                                                                                                                                                    |
| 27  | if (mss.equals("0")==true){                                                                                                                                                                                                                                                 |
| 37  | }else{                                                                                                                                                                                                                                                                      |
| 65  | if(p==(j-1)){                                                                                                                                                                                                                                                               |
| 67  | if(pooo!=""){                                                                                                                                                                                                                                                               |
| 69  | }else{                                                                                                                                                                                                                                                                      |
| 74  | if(p&lt;16){                                                                                                                                                                                                                                                                |
| 75  | if(document.getElementById(idselect).value==""){                                                                                                                                                                                                                            |
| 80  | if(p==(j-1)){                                                                                                                                                                                                                                                               |
| 82  | }else{                                                                                                                                                                                                                                                                      |
| 87  | if(pooo!=""){                                                                                                                                                                                                                                                               |
| 89  | alert("No ha respondido a todas las preguntas \nFaltan: "+pooo.substr(0,auxpo));                                                                                                                                                                                            |
| 92  | if(validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE0").value, 0)&amp;&amp;validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE1").value, 0)&amp;&amp;validate_importe(document.getElementById("SSCO_SV_ANSWER_TP_VALUE2").value, 0)&amp;&amp; |
| 99  | }else{                                                                                                                                                                                                                                                                      |
| 100 | alert("Ha introducido un valor no valido en un campo numerico");                                                                                                                                                                                                            |
| 109 | if(document.getElementById("porR").innerHTML!=100){                                                                                                                                                                                                                         |
| 110 | alert("El valor del cuestionario SITUACIÓN REAL no es 100%");                                                                                                                                                                                                               |
| 114 | if(document.getElementById("porI").innerHTML!=100){                                                                                                                                                                                                                         |
| 115 | alert("El valor del cuestionario SITUACIÓN IDEAL no es 100%");                                                                                                                                                                                                              |
| 119 | if(document.getElementById("porTR").innerHTML!=100){                                                                                                                                                                                                                        |
| 120 | alert("El valor del cuestionario COMUNICACIÓN REAL no es 100%");                                                                                                                                                                                                            |
| 124 | if(document.getElementById("porTI").innerHTML!=100){                                                                                                                                                                                                                        |
| 125 | alert("El valor del cuestionario COMUNICACIÓN IDEAL no es 100%");                                                                                                                                                                                                           |
| 132 | if (m4select.arguments.length == 3){                                                                                                                                                                                                                                        |
| 134 | } else {                                                                                                                                                                                                                                                                    |
| 138 | if (typeof(oselect) == "object"){                                                                                                                                                                                                                                           |
| 139 | switch(modo)                                                                                                                                                                                                                                                                |
| 141 | case "value" :                                                                                                                                                                                                                                                              |
| 144 | alert("Modo no valido en m4select");                                                                                                                                                                                                                                        |
| 152 | if (radioName[i].checked) {                                                                                                                                                                                                                                                 |
| 166 | if (typeof(opener.oventana) == "object"){                                                                                                                                                                                                                                   |
| 169 | if (typeof(ar[i]) != "undefined"){                                                                                                                                                                                                                                          |
| 174 | if (typeof(opener.oventana) == "object"){                                                                                                                                                                                                                                   |
| 175 | if (opener.oventana.m4prop_afterclosewindowmet != ""){                                                                                                                                                                                                                      |
| 590 | if ('&lt;m4:item item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="&lt;%=znodo5%&gt;" jsafe="true"/&gt;'!= ""){                                                                                                                                                      |
| 594 | if (pre.value == '&lt;m4:item item="SCO_ID_QUESTION" htmlsafe="true" outputdef="&lt;%=znodo5%&gt;" jsafe="true"/&gt;'){                                                                                                                                                     |
| 658 | if(obj.value==""){                                                                                                                                                                                                                                                          |
| 660 | }else{                                                                                                                                                                                                                                                                      |
| 663 | if(validate_importe(value,1)) {                                                                                                                                                                                                                                             |
| 667 | }else{                                                                                                                                                                                                                                                                      |
| 676 | if(decimal==undefined){                                                                                                                                                                                                                                                     |
| 679 | if(decimal==1){                                                                                                                                                                                                                                                             |
| 681 | }else{                                                                                                                                                                                                                                                                      |
| 685 | if(value &amp;&amp; value.search(patron)==0){                                                                                                                                                                                                                               |
| 61  | expresión de cálculo/transformación: idselect="SSCO_SV_ANSWER_TP_VALUE" + p;                                                                                                                                                                                                |
| 76  | expresión de cálculo/transformación: pooo=pooo +"Pregunta " + (p+1)+", ";                                                                                                                                                                                                   |
| 81  | expresión de cálculo/transformación: cono=cono+m4valor(fo,id_ques,"","get")+"&#124;$&#124;"+m4select(idselect,fo,"value")+"&#124;$&#124;"+ "" + "&#124;$&#124;";                                                                                                            |
| 83  | expresión de cálculo/transformación: cono=cono+m4valor(fo,id_ques,"","get")+"&#124;$&#124;"+document.getElementById(idselect).value+"&#124;$&#124;"+ "" + "&#124;$&#124;";                                                                                                  |
| 160 | expresión de cálculo/transformación: var path = "/mss_g3/espanol/comentario.jsp?comment=" + objeto.value                                                                                                                                                                    |
| 203 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo4 + "["+spos+"]";                                                                                                                                                                         |
| 204 | expresión de cálculo/transformación: String zmove1 = znodo4 + ":" + znodo4 + "["+spos+"]";                                                                                                                                                                                  |
| 205 | expresión de cálculo/transformación: String zraiz1 = znodo4 + ":" + zsubsesion + "!"+ znodo4+"." ;                                                                                                                                                                          |
| 207 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo5 + "[*]";                                                                                                                                                                                |
| 208 | expresión de cálculo/transformación: String zmove2 = znodo5 + ":" + znodo5 + "[FIRST]";                                                                                                                                                                                     |
| 209 | expresión de cálculo/transformación: String zcomun2 = znodo5 + ":" + zmeta4object + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                |
| 211 | expresión de cálculo/transformación: String znamenodo = znodo5 + ":" + zsubsesion + "!" + znodo5;                                                                                                                                                                           |
| 212 | expresión de cálculo/transformación: String zSCO_NM_EXTD_KN = zraiz1 + "SCO_NM_EXTD_KN";                                                                                                                                                                                    |
| 213 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSCO_EVAL_CAPAB.LOAD_QUESTIONS";                                                                                                                                                                  |
| 229 | expresión de cálculo/transformación: String zmoves=znodo5 + ":" + znodo5 ;                                                                                                                                                                                                  |
| 233 | expresión de cálculo/transformación: icountquestion = Integer.parseInt(scountquestion);                                                                                                                                                                                     |
| 235 | expresión de cálculo/transformación: zmoves=znodo5 + ":" + znodo5 +"["+String.valueOf(h)+"]";                                                                                                                                                                               |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 8   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 9   | ../../sse_generico/sgco_gen_inc.jsp          |
| 30  | /sse_generico/sse_generico_trans.jsp         |
| 31  | /sse_g3/sse_ev_trans.jsp                     |
| 40  | /mss_generico/mss_generico_trans.jsp         |
| 41  | /mss_g3/mss_ev_trans.jsp                     |

| L   | Destino / recurso                                                  |
| --- | ------------------------------------------------------------------ |
| 10  | /css/estilo_sse_lucas.css                                          |
| 11  | /css/bootstrap/css/bootstrap.min.css                               |
| 12  | /css/estilo_cyc.css                                                |
| 39  | /css/estilo_mss.css                                                |
| 49  | /libreria/funciones_sse_val.js                                     |
| 50  | /libreria/funciones_sse.js                                         |
| 51  | /libreria/clase_val_entradas.js                                    |
| 255 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp |
| 268 | /iconos/logo_cyc.jpg                                               |
| 564 |                                                                    |
| 696 | javascript:guard(25);                                              |
| 697 | /iconos/icono_guardar_36_36.gif                                    |
| 706 | /images/barra_pie1.png                                             |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                         |
| 8   | ../../sse_generico/sse_generico_taglib_2.jsp                       |
| 9   | ../../sse_generico/sgco_gen_inc.jsp                                |
| 30  | /sse_generico/sse_generico_trans.jsp                               |
| 31  | /sse_g3/sse_ev_trans.jsp                                           |
| 40  | /mss_generico/mss_generico_trans.jsp                               |
| 41  | /mss_g3/mss_ev_trans.jsp                                           |
| 160 | /mss_g3/espanol/comentario.jsp?comment=                            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                         | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ------------------------------------------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 8   | ../../sse_generico/sse_generico_taglib_2.jsp                       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 9   | ../../sse_generico/sgco_gen_inc.jsp                                | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 30  | /sse_generico/sse_generico_trans.jsp                               | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 31  | /sse_g3/sse_ev_trans.jsp                                           | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 40  | /mss_generico/mss_generico_trans.jsp                               | contextual | [mss_generico/mss_generico_trans.jsp](../../responsable/tareas/mss_generico--mss_generico_trans.md)           |
| BASE   | 41  | /mss_g3/mss_ev_trans.jsp                                           | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |
| BASE   | 49  | /libreria/funciones_sse_val.js                                     | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                |
| BASE   | 50  | /libreria/funciones_sse.js                                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 51  | /libreria/clase_val_entradas.js                                    | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 255 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp | ausente    | P06                                                                                                           |
| BASE   | 696 | javascript:guard(25);                                              | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                         | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 8   | ../../sse_generico/sse_generico_taglib_2.jsp                       | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 9   | ../../sse_generico/sgco_gen_inc.jsp                                | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 30  | /sse_generico/sse_generico_trans.jsp                               | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 31  | /sse_g3/sse_ev_trans.jsp                                           | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 40  | /mss_generico/mss_generico_trans.jsp                               | contextual | [mss_generico/mss_generico_trans.jsp](../../responsable/tareas/mss_generico--mss_generico_trans.md)           |
| BASE   | 41  | /mss_g3/mss_ev_trans.jsp                                           | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |
| BASE   | 160 | /mss_g3/espanol/comentario.jsp?comment=                            | contextual | [mss_g3/comentario.jsp](../../responsable/talento/mss_g3--comentario.md)                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_questions_gest_plan.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
