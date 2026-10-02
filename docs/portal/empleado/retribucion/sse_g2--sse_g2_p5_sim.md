# Simulación del préstamos

Identificador: `sse_g2/sse_g2_p5_sim.jsp`. Perfil: **empleado**. Dominio: **retribucion**.

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

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g2/espanol/sse_g2_p5_sim.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_sim.jsp) | `614d5e65fd4bd0d0873337a134322cd6cecb193e0c01cbf69599398a6e6be196` |    714 |
| IBER / español    | [m4custom/IBER/sse_g2/espanol/sse_g2_p5_sim.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g2/espanol/sse_g2_p5_sim.jsp) | `614d5e65fd4bd0d0873337a134322cd6cecb193e0c01cbf69599398a6e6be196` |    714 |
| BASE / español    | [sse_g2/espanol/sse_g2_p5_sim.jsp](../../../../clon_portal/portal/sse_g2/espanol/sse_g2_p5_sim.jsp)                             | `614d5e65fd4bd0d0873337a134322cd6cecb193e0c01cbf69599398a6e6be196` |    714 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g2/espanol/sse_g2_p5_sim.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g2/espanol/sse_g2_p5_sim.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                                                                             |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 9   | Simulación del préstamos                                                                                                                                                                                                                                                                             |
| 545 | Simulación del préstamo                                                                                                                                                                                                                                                                              |
| 548 | Desde aquí puedes hacer una simulación del préstamo que deseas solicitar. Introduce primero la fecha de solicitud y el tipo de préstamo, para obtener así el interés correspondiente a dicho préstamo. Para la simulación puedes escoger este interés, o bien cualquier otro. Solicitud de préstamos |
| 568 | Simulación del préstamo                                                                                                                                                                                                                                                                              |
| 577 | * Fec.Solicitud                                                                                                                                                                                                                                                                                      |
| 581 | * Tipo Préstamo                                                                                                                                                                                                                                                                                      |
| 582 | "&gt;                                                                                                                                                                                                                                                                                                |
| 597 | Interés del préstamo:                                                                                                                                                                                                                                                                                |
| 601 | [valor dinámico] % ó                                                                                                                                                                                                                                                                                 |
| 610 | Cambiar interés                                                                                                                                                                                                                                                                                      |
| 623 | * Capital                                                                                                                                                                                                                                                                                            |
| 624 | "&gt;                                                                                                                                                                                                                                                                                                |
| 647 | * Importe Cuota                                                                                                                                                                                                                                                                                      |
| 657 | * Número de cuotas por año                                                                                                                                                                                                                                                                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 547 | img     | alt=Simulación del préstamo; title=Simulación del préstamo; src=/iconos/Solicitud_prestamos_51x100.gif; width=100; height=100                                                                                        |
| 551 | a       | class=enlacefuncional; title=Solicitud de préstamos; href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21                                                                                                  |
| 557 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp; method=post; name=oculto; id=oculto                                                                                                                      |
| 558 | input   | type=hidden; id=zidloan; name=zidloan; value=                                                                                                                                                                        |
| 559 | input   | type=hidden; id=zidreason; name=zidreason; value=                                                                                                                                                                    |
| 560 | input   | type=hidden; id=zfecsolic; name=zfecsolic; value=                                                                                                                                                                    |
| 564 | form    | action=; method=; name=NombreFormulario; id=NombreFormulario                                                                                                                                                         |
| 570 | a       | href=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21                                                                                                                                                     |
| 571 | img     | alt=Solicitud de Préstamos; title=Solicitud de Préstamos; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this) |
| 579 | input   | size=10; maxlength=10; class=fuenteformulario type=; id=SCO_DT_APPLICATION; name=SCO_DT_APPLICATION; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfecsolic)%&gt;                             |
| 579 | a       | href=javascript:m4calendario(m4objeto('SCO_DT_APPLICATION','NombreFormulario')); title=                                                                                                                              |
| 579 | img     | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de solicitud del préstamo                                                                                                       |
| 583 | select  | id=SCO_ID_LOAN; class=fuenteformulario150; name=SCO_ID_LOAN; title=Selecciona el tipo de préstamo; onchange=filtrar()                                                                                                |
| 584 | option  | value=                                                                                                                                                                                                               |
| 586 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                             |
| 612 | input   | type=text; name=RATE; id=RATE; size=4; maxlength=4; value=                                                                                                                                                           |
| 616 | input   | type=hidden; id=SCO_RATE; name=SCO_RATE; value=&lt;%=zinteres%&gt;                                                                                                                                                   |
| 625 | input   | class=fuenteformulario150; type=text; id=SCO_AMT_LOAN; name=SCO_AMT_LOAN; value=; onblur=javascript:prueba();                                                                                                        |
| 628 | select  | id=ID_CURRENCY; class=fuenteformulario150; name=ID_CURRENCY; title=Selecciona el tipo de moneda                                                                                                                      |
| 629 | option  | value=                                                                                                                                                                                                               |
| 631 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                             |
| 643 | input   | type=radio; id=QUOTAS1; name=QUOTAS; value=Primero; checked=checked                                                                                                                                                  |
| 648 | input   | type=radio; id=QUOTAS2; name=QUOTAS; value=Segundo                                                                                                                                                                   |
| 654 | input   | class=fuenteformulario150; type=text; id=SCO_QUOTAS; name=SCO_QUOTAS; value=                                                                                                                                         |
| 659 | input   | type=text; id=NUM_PER_YEAR; name=NUM_PER_YEAR; size=4; maxlength=4; value=                                                                                                                                           |
| 665 | input   | type=hidden; id=SCO_AMT_QUOTAS; name=SCO_AMT_QUOTAS; value=                                                                                                                                                          |
| 666 | input   | type=hidden; id=SCO_NUM_QUOTAS; name=SCO_NUM_QUOTAS; value=                                                                                                                                                          |
| 669 | a       | title=Simular; onclick=javascript:validar();; tabindex=2                                                                                                                                                             |
| 669 | img     | alt=Simular; border=0; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                     |
| 693 | form    | action=/servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?; method=post; name=Auxiliar; id=Auxiliar                                                                                                                     |
| 694 | input   | type=hidden; id=TODAY; name=TODAY                                                                                                                                                                                    |
| 699 | input   | type=hidden; id=AMT_MAX; name=AMT_MAX; value=&lt;%=zcapmax%&gt;                                                                                                                                                      |
| 700 | input   | type=hidden; id=AMT_MIN; name=AMT_MIN; value=&lt;%=zcapmin%&gt;                                                                                                                                                      |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 406 | estado          | getParameter(request,"estado")    |
| 407 | zinicios        | getParameter(request,"zinicios")  |
| 408 | zidloan         | getParameter(request,"zidloan")   |
| 410 | zidreason       | getParameter(request,"zidreason") |
| 412 | zfecsolic       | getParameter(request,"zfecsolic") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                  |
| --- | ----------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| 398 | zidloan           | ""                                                                             |                                                                                                                              |
| 400 | zidreason         | ""                                                                             |                                                                                                                              |
| 402 | zfecsolic         | ""                                                                             |                                                                                                                              |
| 406 | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                           |
| 407 | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                         |
| 431 | zsubsesion        | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 432 | zmeta4object      | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 433 | znodo             | "SSE_LOANS"                                                                    | SSE_LOANS                                                                                                                    |
| 434 | znodo2            | "M4T_LN_LU_LOANS"                                                              | M4T_LN_LU_LOANS                                                                                                              |
| 435 | znodo5            | "M4T_CURRENCY"                                                                 | M4T_CURRENCY                                                                                                                 |
| 436 | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                          |
| 439 | zventanas         | "4"                                                                            | 4                                                                                                                            |
| 440 | zvuelta           | 2                                                                              | 2                                                                                                                            |
| 441 | zdireccion        | "sse_g2/sse_g2_p5.jsp"                                                         | sse_g2/sse_g2_p5.jsp                                                                                                         |
| 442 | zestado           | "11"                                                                           | 11                                                                                                                           |
| 444 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                         |
| 446 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                        |
| 447 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                           |
| 449 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_LOANS{"!"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 450 | zmove             | znodo + ":" +znodo + "[" + zregistroinicial + "]"                              | SSE_LOANS{":"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 451 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}                                                               |
| 454 | zORDINAL          | zcomun + "ORDINAL"                                                             | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                    |
| 455 | zSCOIDLOAN        | zcomun + "SCO_ID_LOAN"                                                         | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LOAN"}                                                |
| 456 | zSCORATE          | zcomun + "SCO_RATE"                                                            | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_RATE"}                                                   |
| 457 | zSCONMLOAN        | zcomun + "SCO_NM_LOAN"                                                         | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}                                                |
| 458 | zSCOAMTLOAN       | zcomun + "SCO_AMT_LOAN"                                                        | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_LOAN"}                                               |
| 459 | zSCODTAPPLICATION | zcomun + "SCO_DT_APPLICATION"                                                  | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_APPLICATION"}                                         |
| 460 | zSCONUMQUOTAS     | zcomun + "SCO_NUM_QUOTAS"                                                      | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NUM_QUOTAS"}                                             |
| 461 | zSCOAMTQUOTAS     | zcomun + "SCO_AMT_QUOTAS"                                                      | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_AMT_QUOTAS"}                                             |
| 462 | zNACCION          | zcomun + "N_ACCION"                                                            | SSE_LOANS{":"}SSE_LOANS{"!"}SSE_LOANS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                   |
| 466 | zoutputdef2       | zsubsesion + "!" + znodo2 +"[*]"                                               | SSE_LOANS{"!"}M4T_LN_LU_LOANS[*]                                                                                             |
| 467 | zmove2            | znodo2 + ":" +znodo2 + "[FIRST]"                                               | M4T_LN_LU_LOANS{":"}M4T_LN_LU_LOANS{"[FIRST]"}                                                                               |
| 468 | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 470 | zSCOIDLOAN2       | zcomun2 + "SCO_ID_LOAN"                                                        | M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_LOAN"}                                    |
| 471 | zSCONMLOAN2       | zcomun2 + "SCO_NM_LOAN"                                                        | M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}                                    |
| 473 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_LOANS{"!"}M4T_CURRENCY{"[*]"}                                                                                            |
| 474 | zmove5            | znodo5 + ":" +znodo5 + "[FIRST]"                                               | M4T_CURRENCY{":"}M4T_CURRENCY{"[FIRST]"}                                                                                     |
| 475 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 477 | zIDCURRENCY5      | zcomun5 + "ID_CURRENCY"                                                        | M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"ID_CURRENCY"}                                          |
| 478 | zNMCURRENCY5      | zcomun5 + "NM_CURRENCY"                                                        | M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}                                          |
| 480 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                                                                                    |
| 515 | zcount            | 0                                                                              | 0                                                                                                                            |
| 516 | zcounti           | 0                                                                              | 0                                                                                                                            |
| 517 | zcount2           | 0                                                                              | 0                                                                                                                            |
| 518 | zcount5           | 0                                                                              | 0                                                                                                                            |
| 526 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                      |
| 527 | zcountv2          | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                      |
| 528 | zcountv5          | String.valueOf(zcount5)                                                        | String.valueOf(zcount5)                                                                                                      |
| 533 | zinteres          | ""                                                                             |                                                                                                                              |
| 534 | zcapmin           | ""                                                                             |                                                                                                                              |
| 535 | zcapmax           | ""                                                                             |                                                                                                                              |
| 536 | znumperyear       | ""                                                                             |                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 484 | m4:startpage | m4task=SSE_LOANS                                                                                                                                 |
| 486 | m4:beginjob  |                                                                                                                                                  |
| 487 | m4:datadef   | m4o=SSE_LOANS; m4name=SSE_LOANS                                                                                                                  |
| 502 | m4:exec      | m4method=CARGA:{}SSE_LOANS{"!SSE_PRINCIPAL.CARGA"}                                                                                               |
| 502 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                       |
| 503 | m4:outputdef | m4alias=SSE_LOANS                                                                                                                                |
| 503 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 504 | m4:outputdef | m4alias=M4T_LN_LU_LOANS                                                                                                                          |
| 504 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_LN_LU_LOANS[*]                                                                                             |
| 505 | m4:outputdef | m4alias=M4T_CURRENCY                                                                                                                             |
| 505 | m4:param     | name=m4name0; value=SSE_LOANS{"!"}M4T_CURRENCY{"[*]"}                                                                                            |
| 506 | m4:endjob    |                                                                                                                                                  |
| 508 | m4:move      |                                                                                                                                                  |
| 508 | m4:param     | name=SSE_LOANS; value=SSE_LOANS{":"}SSE_LOANS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                      |
| 509 | m4:move      |                                                                                                                                                  |
| 509 | m4:param     | name=SSE_LOANS; value=M4T_LN_LU_LOANS{":"}M4T_LN_LU_LOANS{"[FIRST]"}                                                                             |
| 510 | m4:move      |                                                                                                                                                  |
| 510 | m4:param     | name=SSE_LOANS; value=M4T_CURRENCY{":"}M4T_CURRENCY{"[FIRST]"}                                                                                   |
| 538 | m4:item      | var=; item=RATE; htmlsafe=true; outputdef=SSE_LOANS                                                                                              |
| 539 | m4:item      | var=; item=AMT_MIN; htmlsafe=true; outputdef=SSE_LOANS                                                                                           |
| 540 | m4:item      | var=; item=AMT_MAX; htmlsafe=true; outputdef=SSE_LOANS                                                                                           |
| 541 | m4:item      | var=; item=NUM_PER_YEAR; htmlsafe=true; outputdef=SSE_LOANS                                                                                      |
| 585 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                            |
| 586 | m4:item      | m4name=M4T_LN_LU_LOANS{":"}SSE_LOANS{"!"}M4T_LN_LU_LOANS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LOAN"}; htmlsafe=true                                  |
| 630 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv5).intValue()-1).toString()                                                                            |
| 631 | m4:item      | m4name=M4T_CURRENCY{":"}SSE_LOANS{"!"}M4T_CURRENCY{"[&amp;VAR.m4lix]"}{"."}{"NM_CURRENCY"}; htmlsafe=true                                        |
| 707 | m4:endpage   |                                                                                                                                                  |

| L   | Operación        | Argumentos literales                           |
| --- | ---------------- | ---------------------------------------------- |
| 490 | setItem          | zsubsesion,znodo,"","ID_LOAN",zidloan          |
| 491 | setItem          | zsubsesion,znodo,"","DT_APPLICATION",zfecsolic |
| 497 | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0"      |
| 521 | getCount         | znodo,zsubsesion,znodo                         |
| 522 | getCountInClient | znodo,zsubsesion,znodo                         |
| 523 | getCount         | znodo2,zsubsesion,znodo2                       |
| 524 | getCount         | znodo5,zsubsesion,znodo5                       |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función          | Argumentos |
| --- | ---------------- | ---------- |
| 19  | foco             |            |
| 23  | prueba           |            |
| 31  | logaritmo        | x,b        |
| 38  | CalculoNumCuotas |            |
| 89  | CalculoImpCuotas |            |
| 127 | filtrar          |            |
| 138 | validar          |            |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 47  | if (vinteres =="") {                                                                                                                     |
| 51  | else {                                                                                                                                   |
| 62  | if (interes == 0) {                                                                                                                      |
| 65  | if (aux &gt; numcuotas) {aux = aux-1};                                                                                                   |
| 70  | else {                                                                                                                                   |
| 73  | if (x&gt;0) {                                                                                                                            |
| 79  | if (aux &gt; numcuotas) {aux = aux-1};                                                                                                   |
| 83  | if(x&lt;=0){                                                                                                                             |
| 98  | if (vinteres =="") {                                                                                                                     |
| 102 | else {                                                                                                                                   |
| 111 | if (interes == 0) {                                                                                                                      |
| 117 | else {                                                                                                                                   |
| 159 | ocapital = new m4objvalidacion('_num',1,30,'','',false);                                                                                 |
| 162 | onumperyear = new m4objvalidacion('_num',1,30,'','',false);                                                                              |
| 165 | dinteres = new m4objvalidacion('_decimal',1,4,'','',false);                                                                              |
| 166 | ninteres = new m4objvalidacion('_num',1,4,'','',false);                                                                                  |
| 168 | if (val_interes != "") {                                                                                                                 |
| 170 | if (punto_interes !=false) {                                                                                                             |
| 173 | else {                                                                                                                                   |
| 183 | if (vinteres =="") {                                                                                                                     |
| 187 | else {                                                                                                                                   |
| 216 | fsol_hoy = m4compfechas(m4objeto("SCO_DT_APPLICATION","NombreFormulario"),"&gt;=",m4objeto("TODAY","Auxiliar"));                         |
| 217 | if (fsol_hoy == false)                                                                                                                   |
| 223 | if ((null==val_idloan) &#124;&#124; (''==val_idloan)){                                                                                   |
| 228 | if ((null != vinteres) &amp;&amp; ("" != vinteres)){                                                                                     |
| 229 | if ((dinteres.resultado==false) &amp;&amp; (ninteres.resultado==false)) {                                                                |
| 235 | if ((null==vnumperyear) &#124;&#124; (''==vnumperyear)){                                                                                 |
| 240 | else if ((null != vnumperyear) &#124;&#124; ('' != vnumperyear)){                                                                        |
| 241 | if (onumperyear.resultado==false){                                                                                                       |
| 247 | if ((null==vcapital) &#124;&#124; (''==vcapital)){                                                                                       |
| 252 | else if ((null != vcapital) &#124;&#124; ('' != vcapital)){                                                                              |
| 253 | if (ocapital.resultado==false){                                                                                                          |
| 258 | if (ocapital.resultado==true){                                                                                                           |
| 259 | if (cap_min &gt; capital) {                                                                                                              |
| 264 | if (cap_max &lt; capital){                                                                                                               |
| 271 | if ((null==val_fecsol) &#124;&#124; (''==val_fecsol)){                                                                                   |
| 276 | if ((null==tipomoneda) &#124;&#124; (''==tipomoneda)){                                                                                   |
| 281 | if (onumcuotas.checked)                                                                                                                  |
| 284 | if ((null==vnumcuotas) &#124;&#124; (''==vnumcuotas)){                                                                                   |
| 289 | else if ((null!=vnumcuotas) &amp;&amp; (''!=vnumcuotas)){                                                                                |
| 290 | if (n_numcuotas &gt; constante){                                                                                                         |
| 297 | else                                                                                                                                     |
| 300 | if ((null==vimpcuota) &#124;&#124; (''==vimpcuota)){                                                                                     |
| 305 | else if ((null!=vimpcuota) &amp;&amp; (''!=vimpcuota)){                                                                                  |
| 306 | if (n_impcuota &lt; constante){                                                                                                          |
| 313 | if (error ==1) {alert(mensaje);}                                                                                                         |
| 314 | if (0==error)                                                                                                                            |
| 316 | if (document.all){                                                                                                                       |
| 319 | else {                                                                                                                                   |
| 322 | if (escribir==1)                                                                                                                         |
| 325 | if (onumcuotas.checked) {                                                                                                                |
| 333 | if (contador == 0){                                                                                                                      |
| 336 | else{                                                                                                                                    |
| 353 | else {                                                                                                                                   |
| 356 | if (num_calc == -1){                                                                                                                     |
| 358 | alert(mensaje);                                                                                                                          |
| 361 | else {                                                                                                                                   |
| 366 | if (contador == 0){                                                                                                                      |
| 369 | else{                                                                                                                                    |
| 391 | if (escribir==0)                                                                                                                         |
| 415 | if ((zfecsolic==null)&#124;&#124;(zfecsolic.equals(""))) {zfecsolic="";}                                                                 |
| 416 | if ((zidloan==null)&#124;&#124;(zidloan.equals(""))) {zidloan="";}                                                                       |
| 418 | if ((zidreason==null)&#124;&#124;(zidreason.equals(""))) {zidreason="";}                                                                 |
| 422 | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 423 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 537 | if (((!(zfecsolic.equals(""))) &amp;&amp; (zfecsolic!=null)) &amp;&amp; ((!(zidloan.equals(""))) &amp;&amp; (zidloan!=null))) {%&gt;     |
| 599 | if ((!(zinteres.equals(""))) &amp;&amp; (zinteres!=null)){                                                                               |
| 606 | else { %&gt;                                                                                                                             |
| 33  | expresión de cálculo/transformación: var num = Math.log(x);                                                                              |
| 34  | expresión de cálculo/transformación: var den = Math.log(b);                                                                              |
| 42  | expresión de cálculo/transformación: var capital = parseInt(vcapital);                                                                   |
| 49  | expresión de cálculo/transformación: var interes = parseFloat(vinteresdef);                                                              |
| 52  | expresión de cálculo/transformación: var interes = parseFloat(vinteres2);                                                                |
| 56  | expresión de cálculo/transformación: var cuota= parseInt(vimpcuota);                                                                     |
| 60  | expresión de cálculo/transformación: var numperyear = parseInt(vnumperyear);                                                             |
| 64  | expresión de cálculo/transformación: var aux = Math.round(numcuotas);                                                                    |
| 71  | expresión de cálculo/transformación: var interescalc = interes/(numperyear * 100);                                                       |
| 72  | expresión de cálculo/transformación: var x = (1-((capital * interescalc)/ cuota));                                                       |
| 75  | expresión de cálculo/transformación: var y = 1 + interescalc;                                                                            |
| 78  | expresión de cálculo/transformación: var aux = Math.round(numcuotas);                                                                    |
| 93  | expresión de cálculo/transformación: var capital = parseInt(vcapital);                                                                   |
| 100 | expresión de cálculo/transformación: var interes = parseFloat(vinteresdef);                                                              |
| 103 | expresión de cálculo/transformación: var interes = parseFloat(vinteres2);                                                                |
| 106 | expresión de cálculo/transformación: var numcuotas = parseInt(vnumcuotas);                                                               |
| 109 | expresión de cálculo/transformación: var numperyear = parseInt(vnumperyear);                                                             |
| 113 | expresión de cálculo/transformación: var impcuotasf = Math.round(impcuotas);                                                             |
| 118 | expresión de cálculo/transformación: var interescalc = interes/(numperyear * 100);                                                       |
| 119 | expresión de cálculo/transformación: var y = 1 + interescalc;                                                                            |
| 120 | expresión de cálculo/transformación: var poty = Math.pow(y,-numcuotas);                                                                  |
| 121 | expresión de cálculo/transformación: var impcuotas = capital * (interescalc / (1-poty));                                                 |
| 122 | expresión de cálculo/transformación: var impcuotasf = Math.round(impcuotas);                                                             |
| 139 | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n"                                   |
| 147 | expresión de cálculo/transformación: var contador = num_clicks % max_celdas;                                                             |
| 185 | expresión de cálculo/transformación: var interes = parseFloat(vinteresdef);                                                              |
| 188 | expresión de cálculo/transformación: var interes = parseFloat(vinteres2);                                                                |
| 192 | expresión de cálculo/transformación: var capital = parseInt(vcapital);                                                                   |
| 204 | expresión de cálculo/transformación: var n_numcuotas = parseInt(vnumcuotas);                                                             |
| 206 | expresión de cálculo/transformación: var n_impcuota = parseInt(vimpcuota);                                                               |
| 208 | expresión de cálculo/transformación: var numperyear = parseInt(vnumperyear);                                                             |
| 209 | expresión de cálculo/transformación: var interescalc = interes/(numperyear * 100);                                                       |
| 210 | expresión de cálculo/transformación: var acomparar = capital * interescalc;                                                              |
| 211 | expresión de cálculo/transformación: var int_acomparar = parseInt(acomparar);                                                            |
| 213 | expresión de cálculo/transformación: var cap_min = parseInt(m4valor("Auxiliar","AMT_MIN","","get"));                                     |
| 214 | expresión de cálculo/transformación: var cap_max = parseInt(m4valor("Auxiliar","AMT_MAX","","get"));                                     |
| 339 | expresión de cálculo/transformación: var texto = "El importe de la cuota a pagar es de: " + imp_calc + " " + textomoneda;                |
| 350 | expresión de cálculo/transformación: num_clicks = num_clicks + 1;                                                                        |
| 373 | expresión de cálculo/transformación: var texto = "El número de cuotas a pagar es de: " + num_calc;                                       |
| 384 | expresión de cálculo/transformación: num_clicks = num_clicks + 1;                                                                        |
| 445 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 447 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 449 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 450 | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[" + zregistroinicial + "]";                                   |
| 451 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 454 | expresión de cálculo/transformación: String zORDINAL = zcomun + "ORDINAL";                                                               |
| 455 | expresión de cálculo/transformación: String zSCOIDLOAN = zcomun + "SCO_ID_LOAN";                                                         |
| 456 | expresión de cálculo/transformación: String zSCORATE = zcomun + "SCO_RATE";                                                              |
| 457 | expresión de cálculo/transformación: String zSCONMLOAN = zcomun + "SCO_NM_LOAN";                                                         |
| 458 | expresión de cálculo/transformación: String zSCOAMTLOAN = zcomun + "SCO_AMT_LOAN";                                                       |
| 459 | expresión de cálculo/transformación: String zSCODTAPPLICATION = zcomun + "SCO_DT_APPLICATION";                                           |
| 460 | expresión de cálculo/transformación: String zSCONUMQUOTAS = zcomun + "SCO_NUM_QUOTAS";                                                   |
| 461 | expresión de cálculo/transformación: String zSCOAMTQUOTAS = zcomun + "SCO_AMT_QUOTAS";                                                   |
| 462 | expresión de cálculo/transformación: String zNACCION = zcomun + "N_ACCION";                                                              |
| 466 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 +"[*]";                                              |
| 467 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" +znodo2 + "[FIRST]";                                                   |
| 468 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 470 | expresión de cálculo/transformación: String zSCOIDLOAN2 = zcomun2 + "SCO_ID_LOAN";                                                       |
| 471 | expresión de cálculo/transformación: String zSCONMLOAN2 = zcomun2 + "SCO_NM_LOAN";                                                       |
| 473 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 474 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" +znodo5 + "[FIRST]";                                                   |
| 475 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 477 | expresión de cálculo/transformación: String zIDCURRENCY5 = zcomun5 + "ID_CURRENCY";                                                      |
| 478 | expresión de cálculo/transformación: String zNMCURRENCY5 = zcomun5 + "NM_CURRENCY";                                                      |
| 480 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 12  | ../../sse_generico/espanol/menu_ess.jsp            |
| 427 | ../../sse_generico/espanol/generico_menusup.jsp    |
| 428 | ../../sse_generico/espanol/generico_links.jsp      |
| 705 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                           |
| --- | ----------------------------------------------------------- |
| 10  | /css/estilo_sse.css                                         |
| 11  | /libreria/funciones_sse.js                                  |
| 13  | /libreria/clase_val_entradas.js                             |
| 547 | /iconos/Solicitud_prestamos_51x100.gif                      |
| 551 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21   |
| 557 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp         |
| 570 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 |
| 571 | /iconos/icono_flecha_azul2_ess_11_9.gif                     |
| 579 | javascript:m4calendario(m4objeto(                           |
| 579 | /iconos/icono_calendario_14_18.gif                          |
| 669 | /iconos/icono_enviar_ess_36_36.gif                          |
| 693 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?            |
| 12  | ../../sse_generico/espanol/menu_ess.jsp                     |
| 427 | ../../sse_generico/espanol/generico_menusup.jsp             |
| 428 | ../../sse_generico/espanol/generico_links.jsp               |
| 441 | sse_g2/sse_g2_p5.jsp                                        |
| 705 | ../../sse_generico/espanol/generico_disclaimer.jsp          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                  | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | ----------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 427 | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 428 | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 705 | ../../sse_generico/espanol/generico_disclaimer.jsp          | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 11  | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 13  | /libreria/clase_val_entradas.js                             | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 551 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 557 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp         | ausente    | P06                                                                                                                                                                                                |
| COLL   | 570 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 579 | javascript:m4calendario(m4objeto(                           | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 693 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 12  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 427 | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 428 | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 441 | sse_g2/sse_g2_p5.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| COLL   | 705 | ../../sse_generico/espanol/generico_disclaimer.jsp          | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 427 | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 428 | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 705 | ../../sse_generico/espanol/generico_disclaimer.jsp          | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 13  | /libreria/clase_val_entradas.js                             | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 551 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 557 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp         | ausente    | P06                                                                                                                                                                                                |
| IBER   | 570 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 579 | javascript:m4calendario(m4objeto(                           | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 693 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 12  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 427 | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 428 | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 441 | sse_g2/sse_g2_p5.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| IBER   | 705 | ../../sse_generico/espanol/generico_disclaimer.jsp          | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 427 | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 428 | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 705 | ../../sse_generico/espanol/generico_disclaimer.jsp          | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 11  | /libreria/funciones_sse.js                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 13  | /libreria/clase_val_entradas.js                             | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 551 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?estado=21   | ausente    | P06                                                                                                                                                                                                |
| BASE   | 557 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_sim.jsp         | ausente    | P06                                                                                                                                                                                                |
| BASE   | 570 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5_p.jsp?estado=21 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 579 | javascript:m4calendario(m4objeto(                           | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 693 | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p5.jsp?            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 12  | ../../sse_generico/espanol/menu_ess.jsp                     | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 427 | ../../sse_generico/espanol/generico_menusup.jsp             | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 428 | ../../sse_generico/espanol/generico_links.jsp               | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 441 | sse_g2/sse_g2_p5.jsp                                        | ausente    | P06                                                                                                                                                                                                |
| BASE   | 705 | ../../sse_generico/espanol/generico_disclaimer.jsp          | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g2/sse_g2_p5_sim.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
