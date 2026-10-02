# Solicitud de Préstamos

Identificador: `sse_g2/sse_g2_p5.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5.jsp) | `450e6767ed4b57cce94dd16178f6c2a58a8845edaa0506184e8371e4264e54c0` |    640 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p5.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p5.jsp) | `450e6767ed4b57cce94dd16178f6c2a58a8845edaa0506184e8371e4264e54c0` |    640 |
| BASE / español    | [sse_g2/espanol/sse_g2_p5.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p5.jsp)                             | `450e6767ed4b57cce94dd16178f6c2a58a8845edaa0506184e8371e4264e54c0` |    640 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p5.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                      |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | Solicitud de Préstamos                                                                                                                                                        |
| 391 | Solicitud de Préstamos                                                                                                                                                        |
| 394 | Solicita un nuevo préstamo. Introduce primero la fecha de solicitud y el tipo de préstamo, para obtener así el interés correspondiente a dicho préstamo. Préstamos Simulación |
| 417 | Solicitud de Préstamos                                                                                                                                                        |
| 425 | * Fec.Solicitud                                                                                                                                                               |
| 437 | Interés:[valor dinámico] %                                                                                                                                                    |
| 453 | * Tipo Préstamo                                                                                                                                                               |
| 454 | "&gt;                                                                                                                                                                         |
| 469 | * Motivo Préstamo                                                                                                                                                             |
| 470 | "&gt;                                                                                                                                                                         |
| 485 | * Tipo Frecuencia                                                                                                                                                             |
| 486 | "&gt;                                                                                                                                                                         |
| 500 | * Capital                                                                                                                                                                     |
| 501 | "&gt;                                                                                                                                                                         |
| 515 | * Fec.Solic.1ºPago                                                                                                                                                            |
| 529 | * Importe Cuota                                                                                                                                                               |
| 579 | Tipo Préstamo                                                                                                                                                                 |
| 580 | Interés                                                                                                                                                                       |
| 581 | Capital                                                                                                                                                                       |
| 583 | Fec. Solic.1ºPago                                                                                                                                                             |
| 584 | Importe Cuota                                                                                                                                                                 |
| 585 | Nº de Cuotas                                                                                                                                                                  |
| 595 | %                                                                                                                                                                             |
| 601 | ');"&gt;                                                                                                                                                                      |
| 610 | %                                                                                                                                                                             |
| 616 | ');"&gt;                                                                                                                                                                      |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 393 | img     | alt=Solicitud de Préstamos; title=Solicitud de Préstamos; src=/iconos/Solicitud_prestamos_51x100.gif; width=100; height=100                                                                                                  |
| 397 | a       | class=enlacefuncional; title=Préstamos; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21                                                                                                                     |
| 398 | a       | class=enlacefuncional; title=Simulación; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp?estado=21                                                                                                                  |
| 404 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp; method=post; name=oculto; id=oculto                                                                                                                                  |
| 405 | input   | type=hidden; id=zidloan; name=zidloan; value=                                                                                                                                                                                |
| 406 | input   | type=hidden; id=zidreason; name=zidreason; value=                                                                                                                                                                            |
| 407 | input   | type=hidden; id=zfecsolic; name=zfecsolic; value=                                                                                                                                                                            |
| 408 | input   | type=hidden; id=zfecsolic1; name=zfecsolic1; value=                                                                                                                                                                          |
| 410 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                              |
| 411 | input   | type=hidden; id=TAG; name=TAG; value=SSE_LOANS                                                                                                                                                                               |
| 412 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                        |
| 413 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                |
| 414 | input   | type=hidden; id=NOD; name=NOD; value=SSE_LOANS                                                                                                                                                                               |
| 419 | a       | href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21                                                                                                                                                             |
| 420 | img     | alt=Préstamos; title=Préstamos; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                   |
| 427 | input   | class=fuenteformulario; type=text; id=SCO_DT_APPLICATION; name=SCO_DT_APPLICATION; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfecsolic1)%&gt;; size=10; maxlength=10; readonly=TRUE; disabled=TRUE |
| 427 | a       | href=javascript:m4calendario(m4objeto('SCO_DT_APPLICATION','NombreFormulario')); title=                                                                                                                                      |
| 427 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de solicitud del préstamo                                                                                                               |
| 446 | input   | type=hidden; id=SCO_RATE; name=SCO_RATE; value=&lt;%=zinteres%&gt;                                                                                                                                                           |
| 447 | input   | type=hidden; id=NUM_PER_YEAR; name=NUM_PER_YEAR; value=&lt;%=znumperyear%&gt;                                                                                                                                                |
| 455 | select  | id=SCO_ID_LOAN; class=fuenteformulario200; name=SCO_ID_LOAN; title=Selecciona el tipo de préstamo; onchange=filtrar()                                                                                                        |
| 456 | option  | value=                                                                                                                                                                                                                       |
| 458 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                     |
| 471 | select  | id=SCO_ID_REASON; class=fuenteformulario150; name=SCO_ID_REASON; title=Selecciona el motivo del préstamo                                                                                                                     |
| 472 | option  | value=                                                                                                                                                                                                                       |
| 474 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                     |
| 487 | select  | id=SCO_ID_PAY_OFF_FREQ; class=fuenteformulario150; name=SCO_ID_PAY_OFF_FREQ; title=Selecciona el tipo de frecuencia                                                                                                          |
| 488 | option  | value=                                                                                                                                                                                                                       |
| 490 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                     |
| 502 | input   | class=fuenteformulario150; type=text; id=SCO_AMT_LOAN; name=SCO_AMT_LOAN; value=                                                                                                                                             |
| 505 | select  | id=ID_CURRENCY; class=fuenteformulario150; name=ID_CURRENCY; title=Selecciona el tipo de moneda                                                                                                                              |
| 506 | option  | value=                                                                                                                                                                                                                       |
| 508 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                     |
| 516 | input   | class=fuenteformulario; size=10; maxlength=10; type=text; id=SCO_DT_REQ_PAYMENT; name=SCO_DT_REQ_PAYMENT; value=                                                                                                             |
| 516 | a       | href=javascript:m4calendario(m4objeto('SCO_DT_REQ_PAYMENT','NombreFormulario')); title=                                                                                                                                      |
| 516 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha del primer pago del préstamo                                                                                                            |
| 525 | input   | type=radio; id=QUOTAS1; name=QUOTAS; value=Primero; checked=checked                                                                                                                                                          |
| 530 | input   | type=radio; id=QUOTAS2; name=QUOTAS; value=Segundo                                                                                                                                                                           |
| 539 | input   | class=fuenteformulario150; type=text; id=SCO_QUOTAS; name=SCO_QUOTAS; value=                                                                                                                                                 |
| 543 | input   | type=hidden; id=SCO_AMT_QUOTAS; name=SCO_AMT_QUOTAS; value=                                                                                                                                                                  |
| 544 | input   | type=hidden; id=SCO_NUM_QUOTAS; name=SCO_NUM_QUOTAS; value=                                                                                                                                                                  |
| 548 | a       | title=Enviar; href=javascript:validar(); tabindex=2                                                                                                                                                                          |
| 548 | img     | alt=Enviar; border=0; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                              |
| 556 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?; method=post; name=Auxiliar; id=Auxiliar                                                                                                                             |
| 557 | input   | type=hidden; id=TODAY; name=TODAY                                                                                                                                                                                            |
| 563 | input   | type=hidden; id=AMT_MAX; name=AMT_MAX; value=&lt;%=zcapmax%&gt;                                                                                                                                                              |
| 564 | input   | type=hidden; id=AMT_MIN; name=AMT_MIN; value=&lt;%=zcapmin%&gt;                                                                                                                                                              |
| 602 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                       |
| 603 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                    |
| 617 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                       |
| 618 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 215 | estado          | getParameter(request,"estado")     |
| 216 | zinicios        | getParameter(request,"zinicios")   |
| 217 | zidloan         | getParameter(request,"zidloan")    |
| 218 | zidloan         | getParameter(request,"zidloan")    |
| 220 | zidreason       | getParameter(request,"zidreason")  |
| 221 | zidreason       | getParameter(request,"zidreason")  |
| 223 | zfecsolic       | getParameter(request,"zfecsolic")  |
| 224 | zfecsolic1      | getParameter(request,"zfecsolic1") |

| L   | Variable               | Expresión fuente                                                               | Resolución estática parcial                                                                                                  |
| --- | ---------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 207 | zidloan                | ""                                                                             |                                                                                                                              |
| 209 | zidreason              | ""                                                                             |                                                                                                                              |
| 211 | zfecsolic              | ""                                                                             |                                                                                                                              |
| 212 | zfecsolic1             | ""                                                                             |                                                                                                                              |
| 215 | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                           |
| 216 | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                         |
| 245 | zsubsesion             | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 246 | zmeta4object           | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 247 | znodo                  | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 248 | znodo2                 | "M4T_LN_LU_LOANS"                                                              | M4T_LN_LU_LOANS                                                                                                              |
| 249 | znodo3                 | "M4T_LN_LU_REASON"                                                             | M4T_LN_LU_REASON                                                                                                             |
| 250 | znodo4                 | "M4T_LN_LU_PAY_OFF_FREQ"                                                       | M4T_LN_LU_PAY_OFF_FREQ                                                                                                       |
| 251 | znodo5                 | "M4T_CURRENCY"                                                                 | M4T_CURRENCY                                                                                                                 |
| 252 | ztipocarga             | "SSE"                                                                          | SSE                                                                                                                          |
| 255 | zventanas              | "4"                                                                            | 4                                                                                                                            |
| 256 | zvuelta                | 2                                                                              | 2                                                                                                                            |
| 257 | zdireccion             | "sse_g2/sse_g2_p5.jsp"                                                         | sse_g2/sse_g2_p5.jsp                                                                                                         |
| 258 | zestado                | "11"                                                                           | 11                                                                                                                           |
| 260 | zregistroinicial       | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                         |
| 262 | zventana               | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                        |
| 263 | zregistrofinal         | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                           |
| 265 | zoutputdef             | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_LOANS{"!"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 266 | zmove                  | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_LOANS{":"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 267 | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}                                                               |
| 270 | zORDINAL               | zcomun + "ORDINAL"                                                             | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                    |
| 271 | zSCOIDLOAN             | zcomun + "SCO_ID_LOAN"                                                         | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LOAN"}                                                |
| 272 | zSCORATE               | zcomun + "SCO_RATE"                                                            | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}                                                   |
| 273 | zSCONMLOAN             | zcomun + "SCO_NM_LOAN_1"                                                       | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN_1"}                                              |
| 274 | zSCONMREASON           | zcomun + "SCO_NM_REASON"                                                       | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_REASON"}                                              |
| 275 | zSCONMPAYOFFFREQUENCY  | zcomun + "SCO_NM_PAY_OFF_FREQUENCY"                                            | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY_OFF_FREQUENCY"}                                   |
| 276 | zSCOAMTLOAN            | zcomun + "SCO_AMT_LOAN"                                                        | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}                                               |
| 277 | zSCODTAPPLICATION      | zcomun + "SCO_DT_APPLICATION"                                                  | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_APPLICATION"}                                         |
| 278 | zSCODTREQPAYMENT       | zcomun + "SCO_DT_REQ_PAYMENT"                                                  | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}                                         |
| 279 | zSCOALLPAYS            | zcomun + "SCO_ALL_PAYS"                                                        | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ALL_PAYS"}                                               |
| 280 | zSCONUMQUOTAS          | zcomun + "SCO_NUM_QUOTAS"                                                      | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS"}                                             |
| 281 | zSCOAMTQUOTAS          | zcomun + "SCO_AMT_QUOTAS"                                                      | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}                                             |
| 282 | zNACCION               | zcomun + "N_ACCION"                                                            | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                   |
| 283 | zNMCURRENCY            | zcomun + "IDEN_CURRENCY"                                                       | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"IDEN_CURRENCY"}                                              |
| 287 | zoutputdef2            | zsubsesion + "!" + znodo2 +"[*]"                                               | SSE_LOANS{"!"}M4T_LN_LU_LOANS[*]                                                                                             |
| 288 | zmove2                 | znodo2 + ":" +znodo2 + "[FIRST]"                                               | M4T_LN_LU_LOANS{":"}M4T_LN_LU_LOANS{"[FIRST]"}                                                                               |
| 289 | zcomun2                | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 291 | zSCOIDLOAN2            | zcomun2 + "SCO_ID_LOAN"                                                        | M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LOAN"}                                    |
| 292 | zSCONMLOAN2            | zcomun2 + "SCO_NM_LOAN"                                                        | M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}                                    |
| 295 | zoutputdef3            | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_LOANS{"!"}M4T_LN_LU_REASON{"[*]"}                                                                                        |
| 296 | zmove3                 | znodo3 + ":" +znodo3 + "[FIRST]"                                               | M4T_LN_LU_REASON{":"}M4T_LN_LU_REASON{"[FIRST]"}                                                                             |
| 297 | zcomun3                | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_LN_LU_REASON{":"}SSE_LOANS{"!"}M4T_LN_LU_REASON{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 299 | zSCOIDREASON3          | zcomun3 + "SCO_ID_REASON"                                                      | M4T_LN_LU_REASON{":"}SSE_LOANS{"!"}M4T_LN_LU_REASON{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_REASON"}                                |
| 300 | zSCONMREASON3          | zcomun3 + "SCO_NM_REASON"                                                      | M4T_LN_LU_REASON{":"}SSE_LOANS{"!"}M4T_LN_LU_REASON{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_REASON"}                                |
| 303 | zoutputdef4            | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_LOANS{"!"}M4T_LN_LU_PAY_OFF_FREQ{"[*]"}                                                                                  |
| 304 | zmove4                 | znodo4 + ":" +znodo4 + "[FIRST]"                                               | M4T_LN_LU_PAY_OFF_FREQ{":"}M4T_LN_LU_PAY_OFF_FREQ{"[FIRST]"}                                                                 |
| 305 | zcomun4                | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."            | M4T_LN_LU_PAY_OFF_FREQ{":"}SSE_LOANS{"!"}M4T_LN_LU_PAY_OFF_FREQ{"[&amp;VAR.m4lix]"}{"."}                                     |
| 307 | zSCOIDPAYOFFFREQ4      | zcomun4 + "SCO_ID_PAY_OFF_FREQ"                                                | M4T_LN_LU_PAY_OFF_FREQ{":"}SSE_LOANS{"!"}M4T_LN_LU_PAY_OFF_FREQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAY_OFF_FREQ"}              |
| 308 | zSCONMPAYOFFFREQUENCY4 | zcomun4 + "SCO_NM_PAY_OFF_FREQUENCY"                                           | M4T_LN_LU_PAY_OFF_FREQ{":"}SSE_LOANS{"!"}M4T_LN_LU_PAY_OFF_FREQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY_OFF_FREQUENCY"}         |
| 309 | zSCOIDPAYOFFTYPE4      | zcomun4 + "SCO_ID_PAY_OFF_TYPE"                                                | M4T_LN_LU_PAY_OFF_FREQ{":"}SSE_LOANS{"!"}M4T_LN_LU_PAY_OFF_FREQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_PAY_OFF_TYPE"}              |
| 311 | zoutputdef5            | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_LOANS{"!"}M4T_CURRENCY{"[*]"}                                                                                            |
| 312 | zmove5                 | znodo5 + ":" +znodo5 + "[FIRST]"                                               | M4T_CURRENCY{":"}M4T_CURRENCY{"[FIRST]"}                                                                                     |
| 313 | zcomun5                | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 315 | zIDCURRENCY5           | zcomun5 + "ID_CURRENCY"                                                        | M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                          |
| 316 | zNMCURRENCY5           | zcomun5 + "NM_CURRENCY"                                                        | M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                          |
| 318 | zmetodocarga           | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                                                                                    |
| 357 | zcount                 | 0                                                                              | 0                                                                                                                            |
| 358 | zcounti                | 0                                                                              | 0                                                                                                                            |
| 359 | zcount2                | 0                                                                              | 0                                                                                                                            |
| 360 | zcount3                | 0                                                                              | 0                                                                                                                            |
| 361 | zcount4                | 0                                                                              | 0                                                                                                                            |
| 362 | zcount5                | 0                                                                              | 0                                                                                                                            |
| 372 | zcountv                | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                      |
| 373 | zcountv2               | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                      |
| 374 | zcountv3               | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                      |
| 375 | zcountv4               | String.valueOf(zcount4)                                                        | String.valueOf(zcount4)                                                                                                      |
| 376 | zcountv5               | String.valueOf(zcount5)                                                        | String.valueOf(zcount5)                                                                                                      |
| 380 | zinteres               | ""                                                                             |                                                                                                                              |
| 381 | zcapmin                | ""                                                                             |                                                                                                                              |
| 382 | zcapmax                | ""                                                                             |                                                                                                                              |
| 383 | znumperyear            | ""                                                                             |                                                                                                                              |
| 570 | zregistroinicials      | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                             |
| 571 | zregistrofinals        | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                              |
| 572 | zposicions             | "0"                                                                            | 0                                                                                                                            |
| 573 | zcontrol               | 0                                                                              | 0                                                                                                                            |
| 574 | zposicion              | 0                                                                              | 0                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 322 | m4:startpage | m4task=SSE_LOANS                                                                                                                                 |
| 324 | m4:beginjob  |                                                                                                                                                  |
| 325 | m4:datadef   | m4o=SSE_LOANS; m4name=SSE_LOANS                                                                                                                  |
| 340 | m4:exec      | m4method=CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                                                                                               |
| 340 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                       |
| 341 | m4:outputdef | m4alias=SSE_LOANS                                                                                                                                |
| 341 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 342 | m4:outputdef | m4alias=M4T_LN_LU_LOANS                                                                                                                          |
| 342 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_LN_LU_LOANS[*]                                                                                             |
| 343 | m4:outputdef | m4alias=M4T_LN_LU_REASON                                                                                                                         |
| 343 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_LN_LU_REASON{"[*]"}                                                                                        |
| 344 | m4:outputdef | m4alias=M4T_LN_LU_PAY_OFF_FREQ                                                                                                                   |
| 344 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_LN_LU_PAY_OFF_FREQ{"[*]"}                                                                                  |
| 345 | m4:outputdef | m4alias=M4T_CURRENCY                                                                                                                             |
| 345 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_CURRENCY{"[*]"}                                                                                            |
| 346 | m4:endjob    |                                                                                                                                                  |
| 348 | m4:move      |                                                                                                                                                  |
| 348 | m4:param     | name=SSE_LOANS; value=SSE_LOANS{":"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                      |
| 349 | m4:move      |                                                                                                                                                  |
| 349 | m4:param     | name=SSE_LOANS; value=M4T_LN_LU_LOANS{":"}M4T_LN_LU_LOANS{"[FIRST]"}                                                                             |
| 350 | m4:move      |                                                                                                                                                  |
| 350 | m4:param     | name=SSE_LOANS; value=M4T_LN_LU_REASON{":"}M4T_LN_LU_REASON{"[FIRST]"}                                                                           |
| 351 | m4:move      |                                                                                                                                                  |
| 351 | m4:param     | name=SSE_LOANS; value=M4T_LN_LU_PAY_OFF_FREQ{":"}M4T_LN_LU_PAY_OFF_FREQ{"[FIRST]"}                                                               |
| 352 | m4:move      |                                                                                                                                                  |
| 352 | m4:param     | name=SSE_LOANS; value=M4T_CURRENCY{":"}M4T_CURRENCY{"[FIRST]"}                                                                                   |
| 385 | m4:item      | var=; item=RATE; htmlsafe=true; outputdef=SSE_LOANS                                                                                              |
| 386 | m4:item      | var=; item=AMT_MIN; htmlsafe=true; outputdef=SSE_LOANS                                                                                           |
| 387 | m4:item      | var=; item=AMT_MAX; htmlsafe=true; outputdef=SSE_LOANS                                                                                           |
| 388 | m4:item      | var=; item=NUM_PER_YEAR; htmlsafe=true; outputdef=SSE_LOANS                                                                                      |
| 457 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                            |
| 458 | m4:item      | m4name=M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}; htmlsafe=true                                  |
| 473 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                            |
| 474 | m4:item      | m4name=M4T_LN_LU_REASON{":"}SSE_LOANS{"!"}M4T_LN_LU_REASON{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_REASON"}; htmlsafe=true                              |
| 489 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv4).intValue()-1).toString()                                                                            |
| 490 | m4:item      | m4name=M4T_LN_LU_PAY_OFF_FREQ{":"}SSE_LOANS{"!"}M4T_LN_LU_PAY_OFF_FREQ{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_PAY_OFF_FREQUENCY"}; htmlsafe=true       |
| 507 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv5).intValue()-1).toString()                                                                            |
| 508 | m4:item      | m4name=M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                        |
| 588 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                        |
| 594 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN_1"}; htmlsafe=true                                            |
| 595 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}; htmlsafe=true                                                 |
| 596 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}; htmlsafe=true                                             |
| 597 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"IDEN_CURRENCY"}; htmlsafe=true                                            |
| 598 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}; htmlsafe=true                                       |
| 599 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}; htmlsafe=true                                           |
| 600 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS"}; htmlsafe=true                                           |
| 609 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN_1"}; htmlsafe=true                                            |
| 610 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}; htmlsafe=true                                                 |
| 611 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}; htmlsafe=true                                             |
| 612 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"IDEN_CURRENCY"}; htmlsafe=true                                            |
| 613 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_REQ_PAYMENT"}; htmlsafe=true                                       |
| 614 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}; htmlsafe=true                                           |
| 615 | m4:item      | m4name=SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS"}; htmlsafe=true                                           |
| 633 | m4:endpage   |                                                                                                                                                  |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 328 | setItem          | zsubsesion,znodo,"","ID_LOAN",zidloan          |
| 329 | setItem          | zsubsesion,znodo,"","DT_APPLICATION",zfecsolic |
| 335 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0"      |
| 365 | getCount         | znodo,zsubsesion,znodo                         |
| 366 | getCountInClient | znodo,zsubsesion,znodo                         |
| 367 | getCount         | znodo2,zsubsesion,znodo2                       |
| 368 | getCount         | znodo3,zsubsesion,znodo3                       |
| 369 | getCount         | znodo4,zsubsesion,znodo4                       |
| 370 | getCount         | znodo5,zsubsesion,znodo5                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 16  | filtrar    |            |
| 29  | validar    |            |
| 197 | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 43  | ocapital = new m4objvalidacion('_num',1,30,'','',false);                                                                                 |
| 87  | compfec = m4compfechas(m4objeto("SCO_DT_REQ_PAYMENT","NombreFormulario"),"&gt;=",m4objeto("SCO_DT_APPLICATION","NombreFormulario"));     |
| 88  | fsol_hoy = m4compfechas(m4objeto("SCO_DT_APPLICATION","NombreFormulario"),"&gt;=",m4objeto("TODAY","Auxiliar"));                         |
| 89  | fppag_hoy = m4compfechas(m4objeto("SCO_DT_REQ_PAYMENT","NombreFormulario"),"&gt;=",m4objeto("TODAY","Auxiliar"));                        |
| 91  | if (fsol_hoy == false)                                                                                                                   |
| 96  | if (fppag_hoy == false)                                                                                                                  |
| 101 | if ((val_fecsol != null &amp;&amp; val_fecsol != "") &amp;&amp; (val_fecppago != null &amp;&amp; val_fecppago != ""))                    |
| 103 | if (fsol_hoy == true &amp;&amp; fppag_hoy == true)                                                                                       |
| 105 | if (compfec == false)                                                                                                                    |
| 112 | if ((null==val_idloan) &#124;&#124; (''==val_idloan)){                                                                                   |
| 116 | if ((null==val_idreason) &#124;&#124; (''==val_idreason)){                                                                               |
| 120 | if ((null==val_payoffreq) &#124;&#124; (''==val_payoffreq)){                                                                             |
| 124 | if ((null==vcapital.value) &#124;&#124; (''==vcapital.value)){                                                                           |
| 128 | else if ((null != vcapital.value) &#124;&#124; ('' != vcapital.value)){                                                                  |
| 129 | if (ocapital.resultado==false){                                                                                                          |
| 133 | if (ocapital.resultado==true){                                                                                                           |
| 134 | if (cap_min &gt; valorcapital) {                                                                                                         |
| 138 | if (cap_max &lt; valorcapital){                                                                                                          |
| 144 | if ((null==val_fecsol) &#124;&#124; (''==val_fecsol)){                                                                                   |
| 148 | if ((null==val_fecppago) &#124;&#124; (''==val_fecppago)){                                                                               |
| 152 | if ((null==tipomoneda) &#124;&#124; (''==tipomoneda)){                                                                                   |
| 156 | if (onumcuotas.checked)                                                                                                                  |
| 160 | if ((null==vnumcuotas) &#124;&#124; (''==vnumcuotas)){                                                                                   |
| 164 | else if ((null!=vnumcuotas) &amp;&amp; (''!=vnumcuotas)){                                                                                |
| 165 | if (n_numcuotas &gt; constante){                                                                                                         |
| 171 | else                                                                                                                                     |
| 174 | if ((null==vimpcuota) &#124;&#124; (''==vimpcuota)){                                                                                     |
| 178 | else if ((null!=vimpcuota) &amp;&amp; (''!=vimpcuota)){                                                                                  |
| 180 | if (valor_num &gt; 0) {                                                                                                                  |
| 183 | if (valor_num &lt;= 0) {                                                                                                                 |
| 189 | if (error ==1) {alert(mensaje);}                                                                                                         |
| 190 | if (0==error)                                                                                                                            |
| 226 | if ((zfecsolic==null)&#124;&#124;(zfecsolic.equals(""))) {zfecsolic="";}                                                                 |
| 227 | if ((zidloan==null)&#124;&#124;(zidloan.equals(""))) {zidloan="";}                                                                       |
| 229 | if ((zidreason==null)&#124;&#124;(zidreason.equals(""))) {zidreason="";}                                                                 |
| 231 | if ((zfecsolic1==null)&#124;&#124;(zfecsolic1.equals(""))) {zfecsolic1="";}                                                              |
| 233 | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 234 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 384 | if (((!(zfecsolic.equals(""))) &amp;&amp; (zfecsolic!=null)) &amp;&amp; ((!(zidloan.equals(""))) &amp;&amp; (zidloan!=null))) {%&gt;     |
| 435 | if ((!(zinteres.equals(""))) &amp;&amp; (zinteres!=null)){                                                                               |
| 441 | else { %&gt;                                                                                                                             |
| 569 | if (zcount &gt; 0) {                                                                                                                     |
| 592 | if (zcontrol==0){%&gt;                                                                                                                   |
| 607 | &lt;%}else{%&gt;                                                                                                                         |
| 30  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n"                                   |
| 48  | expresión de cálculo/transformación: var valorcapital = parseInt(m4valor("NombreFormulario","SCO_AMT_LOAN","","get"));                   |
| 62  | expresión de cálculo/transformación: var n_numcuotas = parseInt(vnumcuotas);                                                             |
| 65  | expresión de cálculo/transformación: var n_impcuota = parseInt(vimpcuota);                                                               |
| 68  | expresión de cálculo/transformación: var interes = parseFloat(vinteres);                                                                 |
| 71  | expresión de cálculo/transformación: var numperyear= parseInt(vnumperyear);                                                              |
| 73  | expresión de cálculo/transformación: var interescalc = interes/(numperyear * 100);                                                       |
| 75  | expresión de cálculo/transformación: var v_num = valorcapital * interescalc;                                                             |
| 76  | expresión de cálculo/transformación: var numerador = parseInt(v_num);                                                                    |
| 84  | expresión de cálculo/transformación: var cap_min = parseInt(m4valor("Auxiliar","AMT_MIN","","get"));                                     |
| 85  | expresión de cálculo/transformación: var cap_max = parseInt(m4valor("Auxiliar","AMT_MAX","","get"));                                     |
| 261 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 263 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 265 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 266 | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 267 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 270 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 271 | expresión de cálculo/transformación: String zSCOIDLOAN = zcomun + "SCO_ID_LOAN";                                                         |
| 272 | expresión de cálculo/transformación: String zSCORATE = zcomun + "SCO_RATE";                                                              |
| 273 | expresión de cálculo/transformación: String zSCONMLOAN = zcomun + "SCO_NM_LOAN_1";                                                       |
| 274 | expresión de cálculo/transformación: String zSCONMREASON = zcomun + "SCO_NM_REASON";                                                     |
| 275 | expresión de cálculo/transformación: String zSCONMPAYOFFFREQUENCY = zcomun + "SCO_NM_PAY_OFF_FREQUENCY";                                 |
| 276 | expresión de cálculo/transformación: String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";                                                       |
| 277 | expresión de cálculo/transformación: String zSCODTAPPLICATION = zcomun + "SCO_DT_APPLICATION";                                           |
| 278 | expresión de cálculo/transformación: String zSCODTREQPAYMENT = zcomun + "SCO_DT_REQ_PAYMENT";                                            |
| 279 | expresión de cálculo/transformación: String zSCOALLPAYS = zcomun + "SCO_ALL_PAYS";                                                       |
| 280 | expresión de cálculo/transformación: String zSCONUMQUOTAS = zcomun + "SCO_NUM_QUOTAS";                                                   |
| 281 | expresión de cálculo/transformación: String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";                                                   |
| 282 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 283 | expresión de cálculo/transformación: String zNMCURRENCY = zcomun + "IDEN_CURRENCY";                                                      |
| 287 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";                                              |
| 288 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                   |
| 289 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 291 | expresión de cálculo/transformación: String zSCOIDLOAN2 = zcomun2 + "SCO_ID_LOAN";                                                       |
| 292 | expresión de cálculo/transformación: String zSCONMLOAN2 = zcomun2 + "SCO_NM_LOAN";                                                       |
| 295 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 296 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                                   |
| 297 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 299 | expresión de cálculo/transformación: String zSCOIDREASON3 = zcomun3 + "SCO_ID_REASON";                                                   |
| 300 | expresión de cálculo/transformación: String zSCONMREASON3 = zcomun3 + "SCO_NM_REASON";                                                   |
| 303 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 304 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" +znodo4 + "[FIRST]";                                                   |
| 305 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";               |
| 307 | expresión de cálculo/transformación: String zSCOIDPAYOFFFREQ4 = zcomun4 + "SCO_ID_PAY_OFF_FREQ";                                         |
| 308 | expresión de cálculo/transformación: String zSCONMPAYOFFFREQUENCY4 = zcomun4 + "SCO_NM_PAY_OFF_FREQUENCY";                               |
| 309 | expresión de cálculo/transformación: String zSCOIDPAYOFFTYPE4 = zcomun4 + "SCO_ID_PAY_OFF_TYPE";                                         |
| 311 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 312 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" +znodo5 + "[FIRST]";                                                   |
| 313 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 315 | expresión de cálculo/transformación: String zIDCURRENCY5 = zcomun5 + "ID_CURRENCY";                                                      |
| 316 | expresión de cálculo/transformación: String zNMCURRENCY5 = zcomun5 + "NM_CURRENCY";                                                      |
| 318 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 571 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 12  | ../../sse_generico/espanol/menu_ess.jsp            |
| 240 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 241 | ../../sse_generico/espanol/generico_links.jsp      |
| 625 | ../../sse_generico/espanol/generico_ventanas.jsp   |
| 631 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 10  | /css/estilo_sse.css                                             |
| 11  | /libreria/funciones_sse.js                                      |
| 13  | /libreria/clase_val_entradas.js                                 |
| 393 | /iconos/Solicitud_prestamos_51x100.gif                          |
| 397 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     |
| 398 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp?estado=21   |
| 404 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp                 |
| 410 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 419 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     |
| 420 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 427 | javascript:m4calendario(m4objeto(                               |
| 427 | /iconos/icono_calendario_14_18.gif                              |
| 516 | javascript:m4calendario(m4objeto(                               |
| 516 | /iconos/icono_calendario_14_18.gif                              |
| 548 | javascript:validar()                                            |
| 548 | /iconos/icono_enviar_ess_36_36.gif                              |
| 556 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?                |
| 602 | javascript:pendientes(                                          |
| 603 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 617 | javascript:pendientes(                                          |
| 618 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 12  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 200 | sse_generico/generico_actualizar.jsp                            |
| 240 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 241 | ../../sse_generico/espanol/generico_links.jsp                   |
| 257 | sse_g2/sse_g2_p5.jsp                                            |
| 625 | ../../sse_generico/espanol/generico_ventanas.jsp                |
| 631 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 240 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 241 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 625 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 631 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 11  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 397 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     | ausente    | P06                                                                                                                                                                                                |
| COLL   | 398 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp?estado=21   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 404 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp                 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 410 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 419 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     | ausente    | P06                                                                                                                                                                                                |
| COLL   | 427 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 516 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 548 | javascript:validar()                                            | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 556 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?                | ausente    | P06                                                                                                                                                                                                |
| COLL   | 602 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 617 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 200 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 240 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 241 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 257 | sse_g2/sse_g2_p5.jsp                                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 625 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| COLL   | 631 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 240 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 241 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 625 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 631 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 397 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     | ausente    | P06                                                                                                                                                                                                |
| IBER   | 398 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp?estado=21   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 404 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp                 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 410 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 419 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     | ausente    | P06                                                                                                                                                                                                |
| IBER   | 427 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 516 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 548 | javascript:validar()                                            | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 556 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?                | ausente    | P06                                                                                                                                                                                                |
| IBER   | 602 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 617 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 200 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 240 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 241 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 257 | sse_g2/sse_g2_p5.jsp                                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 625 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| IBER   | 631 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 240 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 241 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 625 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 631 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 11  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 13  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 397 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     | ausente    | P06                                                                                                                                                                                                |
| BASE   | 398 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp?estado=21   | ausente    | P06                                                                                                                                                                                                |
| BASE   | 404 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp                 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 410 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 419 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21     | ausente    | P06                                                                                                                                                                                                |
| BASE   | 427 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 516 | javascript:m4calendario(m4objeto(                               | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 548 | javascript:validar()                                            | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 556 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?                | ausente    | P06                                                                                                                                                                                                |
| BASE   | 602 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 617 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 200 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 240 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 241 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 257 | sse_g2/sse_g2_p5.jsp                                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 625 | ../../sse_generico/espanol/generico_ventanas.jsp                | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                                              |
| BASE   | 631 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p5.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
