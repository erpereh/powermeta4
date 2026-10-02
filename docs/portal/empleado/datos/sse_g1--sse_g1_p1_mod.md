# Dirección fiscal

Identificador: `sse_g1/sse_g1_p1_mod.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                      | Solo en BASE                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------ | --------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA_CV"}; m4:exec:SSE_ADDRESS{"!"}M4T_ADDRESS.CARGA; m4:item:M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"} | m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY; m4:item:M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; m4:item:M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; m4:item:SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PAIS"} |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA_CV"}; m4:exec:SSE_ADDRESS{"!"}M4T_ADDRESS.CARGA; m4:item:M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"} | m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY; m4:item:M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; m4:item:M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; m4:item:SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PAIS"} |
| IBER   | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA_CV"}; m4:exec:SSE_ADDRESS{"!"}M4T_ADDRESS.CARGA; m4:item:M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"} | m4:exec:CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}; m4:item:M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY; m4:item:M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; m4:item:M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; m4:item:M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; m4:item:SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PAIS"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod.jsp) | `eac39ebfa63632536fbb6af46f1cfc7ddeb02dd145cc5a434897df45c247e2a9` |    505 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod.jsp)   | `dccdd5569ab72cf1463d367e18e79432b7e042b83a2d5246d75fa7b90628d25e` |    528 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod.jsp) | `eac39ebfa63632536fbb6af46f1cfc7ddeb02dd145cc5a434897df45c247e2a9` |    505 |
| BASE / español    | [sse_g1/espanol/sse_g1_p1_mod.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1_mod.jsp)                             | `f3972f2f31b495932673e63ead56fba1d3243723d253e0a47cabf7eb383b6bea` |    440 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                    |
| --- | ------------------------------------------- |
| 5   | Dirección fiscal                            |
| 329 | Dirección                                   |
| 332 | Modifica tu dirección. Mis datos personales |
| 362 | Dirección fiscal                            |
| 366 | * Via pública                               |
| 367 | "&gt; " selected&gt;                        |
| 393 | * Número                                    |
| 395 | Bloque " /&gt; Piso Escalera Puerta         |
| 406 | * Cód. postal                               |
| 445 | * Campos obligatorios                       |
| 462 | Dirección fiscal                            |
| 466 | ');"&gt;                                    |
| 469 | Via pública                                 |
| 473 | Número                                      |
| 474 | Bloque                                      |
| 475 | Piso                                        |
| 476 | Escalera                                    |
| 477 | Puerta                                      |
| 480 | País                                        |
| 485 | Cód. postal                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                                   |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 331 | img     | alt=Dirección ; title=Dirección ; src=/iconos/noname_edificio_121_100.gif; width=100; height=100                                                                                                                                                                                                                                            |
| 335 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                                                                                           |
| 340 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                                                                                                                                   |
| 341 | input   | type=hidden; id=zpais; name=zpais; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                 |
| 342 | input   | type=hidden; id=zcom; name=zcom; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                   |
| 343 | input   | type=hidden; id=zpro; name=zpro; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                   |
| 344 | input   | type=hidden; id=zdireccion2; name=zdireccion2; value=&lt;%=zdireccion2%&gt;                                                                                                                                                                                                                                                                 |
| 345 | input   | type=hidden; id=tipo; name=tipo; value=&lt;%=ztipo%&gt;                                                                                                                                                                                                                                                                                     |
| 346 | input   | type=hidden; id=ntipo; name=ntipo; value=&lt;%=zntipo%&gt;                                                                                                                                                                                                                                                                                  |
| 347 | input   | type=hidden; id=numero; name=numero; value=&lt;%=znumero%&gt;                                                                                                                                                                                                                                                                               |
| 348 | input   | type=hidden; id=bloque; name=bloque; value=&lt;%=zbloque%&gt;                                                                                                                                                                                                                                                                               |
| 349 | input   | type=hidden; id=piso; name=piso; value=&lt;%=zpiso%&gt;                                                                                                                                                                                                                                                                                     |
| 350 | input   | type=hidden; id=escalera; name=escalera; value=&lt;%=zescalera%&gt;                                                                                                                                                                                                                                                                         |
| 351 | input   | type=hidden; id=puerta; name=puerta; value=&lt;%=zpuerta%&gt;                                                                                                                                                                                                                                                                               |
| 352 | input   | type=hidden; id=cpostal; name=cpostal; value=&lt;%=zcpostal%&gt;                                                                                                                                                                                                                                                                            |
| 353 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                                                                                                                             |
| 355 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                                                                                                                             |
| 356 | input   | type=hidden; id=TAG; name=TAG; value=SSE_ADDRESS                                                                                                                                                                                                                                                                                            |
| 357 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                                                                                                                       |
| 358 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                                                                                                                               |
| 359 | input   | type=hidden; id=NOD; name=NOD; value=SSE_ADDRESS                                                                                                                                                                                                                                                                                            |
| 363 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                                                                                                                  |
| 363 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                                                                                                                        |
| 368 | select  | id=SSP_ID_SIGLA_DOMIC; class=fuenteformulario150; name=SSP_ID_SIGLA_DOMIC; title=Escoge el tipo de via                                                                                                                                                                                                                                      |
| 377 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                                    |
| 381 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                                    |
| 389 | input   | class=fuenteformulario; type=text; id=STD_ADDRESS_LINE_1; name=STD_ADDRESS_LINE_1; size=40; maxlength=40; tabindex=1; title=Escribe el nombre de tu via pública; value=&lt;%=zdireccionAct%&gt;                                                                                                                                             |
| 394 | input   | class=fuenteformulario; type=text; id=SSP_NUM_VIA; name=SSP_NUM_VIA; size=5; maxlength=5; tabindex=2; title=Escribe el número de tu calle; value=&lt;%=znumeroAct%&gt;                                                                                                                                                                      |
| 396 | input   | class=fuenteformulario; tabindex=3; type=text; id=SSP_BLOQUE; name=SSP_BLOQUE; size=2; maxlength=5; title=Escribe el número de tu bloque; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                          |
| 398 | input   | class=fuenteformulario; tabindex=4; type=text; id=SSP_PISO; name=SSP_PISO; size=2; maxlength=10; title=Escribe tu piso; value=&lt;%=zpisoAct%&gt;                                                                                                                                                                                           |
| 400 | input   | class=fuenteformulario; tabindex=5; type=text; id=SSP_ESCALERA; name=SSP_ESCALERA; size=2; maxlength=10; title=Escribe tu escalera; value=&lt;%=zescaleraAct%&gt;                                                                                                                                                                           |
| 402 | input   | class=fuenteformulario; tabindex=6; type=text; id=SSP_PUERTA; name=SSP_PUERTA; size=2; maxlength=10; title=Escribe el número de tu puerta; value=&lt;%=zpuertaAct%&gt;                                                                                                                                                                      |
| 408 | input   | class=fuenteformulario; type=text; id=SSP_DISTRIT_POSTAL; name=SSP_DISTRIT_POSTAL; size=5; maxlength=9; tabindex=7; title=Escribe tu código postal; value=&lt;%=zcodposAct%&gt;                                                                                                                                                             |
| 410 | input   | name=button; onclick=cargar_cp(document.getElementById('SSP_DISTRIT_POSTAL').value); type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;background-repeat: no-repeat;border: 1px solid #DC0028;border-radius: 4px;color: #FFFFFF;margin: 10px;max-width: 120px;min-height: 25px;min-width: 90px;; value=Cargar |
| 419 | input   | type=hidden; name=STD_ID_COUNTRY; id=STD_ID_COUNTRY                                                                                                                                                                                                                                                                                         |
| 420 | input   | type=text; name=STD_N_COUNTRY; id=STD_N_COUNTRY; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                     |
| 426 | input   | type=hidden; name=STD_ID_GEO_DIV; id=STD_ID_GEO_DIV                                                                                                                                                                                                                                                                                         |
| 427 | input   | type=text; name=STD_N_GEO_DIV; id=STD_N_GEO_DIV; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                     |
| 433 | input   | type=hidden; name=STD_ID_SUB_GEO_DIV; id=STD_ID_SUB_GEO_DIV                                                                                                                                                                                                                                                                                 |
| 434 | input   | type=text; name=STD_N_SUB_GEO_DIV; id=STD_N_SUB_GEO_DIV; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                             |
| 440 | input   | type=hidden; name=STD_ID_GEO_PLACE; id=STD_ID_GEO_PLACE                                                                                                                                                                                                                                                                                     |
| 441 | input   | type=text; name=STD_N_GEO_PLACE; id=STD_N_GEO_PLACE; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                 |
| 447 | a       | href=javascript:comprobar();; tabindex=8; title=Enviar; style=padding-left: 30%;                                                                                                                                                                                                                                                            |
| 448 | img     | id=enviar; alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                                                                                            |
| 466 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                                                                                                                      |
| 466 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                                                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 20  | zdireccion2     | getParameter(request,"zdireccion2") |
| 21  | tipo            | getParameter(request,"tipo")        |
| 22  | ntipo           | getParameter(request,"ntipo")       |
| 23  | numero          | getParameter(request,"numero")      |
| 24  | bloque          | getParameter(request,"bloque")      |
| 25  | piso            | getParameter(request,"piso")        |
| 26  | escalera        | getParameter(request,"escalera")    |
| 27  | puerta          | getParameter(request,"puerta")      |
| 28  | cpostal         | getParameter(request,"cpostal")     |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                      |
| --- | ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 15  | zpais             | zobjtabla.m4paramvalor("zpais")                                                | zobjtabla.m4paramvalor("zpais")                                                                                                  |
| 16  | zcom              | zobjtabla.m4paramvalor("zcom")                                                 | zobjtabla.m4paramvalor("zcom")                                                                                                   |
| 17  | zpro              | zobjtabla.m4paramvalor("zpro")                                                 | zobjtabla.m4paramvalor("zpro")                                                                                                   |
| 20  | zdireccion2       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdireccion2")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdireccion2")                                                          |
| 21  | ztipo             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                                                                 |
| 22  | zntipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ntipo")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ntipo")                                                                |
| 23  | znumero           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"numero")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"numero")                                                               |
| 24  | zbloque           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bloque")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bloque")                                                               |
| 25  | zpiso             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"piso")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"piso")                                                                 |
| 26  | zescalera         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"escalera")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"escalera")                                                             |
| 27  | zpuerta           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puerta")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puerta")                                                               |
| 28  | zcpostal          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"cpostal")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"cpostal")                                                              |
| 33  | estado            | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                 |
| 34  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                               |
| 130 | zsubsesion        | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 131 | zmeta4object      | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 132 | znodo             | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 133 | znodo2            | "M4T_ID_SIGLA_DOMICI"                                                          | M4T_ID_SIGLA_DOMICI                                                                                                              |
| 134 | znodo3            | "M4T_COUNTRY"                                                                  | M4T_COUNTRY                                                                                                                      |
| 135 | znodo4            | "M4T_GEO_DIV"                                                                  | M4T_GEO_DIV                                                                                                                      |
| 136 | znodo5            | "M4T_SUB_GEO_DIV"                                                              | M4T_SUB_GEO_DIV                                                                                                                  |
| 137 | znodo6            | "M4T_GEO_PLACE"                                                                | M4T_GEO_PLACE                                                                                                                    |
| 138 | znodo7            | "M4T_ADDRESS"                                                                  | M4T_ADDRESS                                                                                                                      |
| 139 | znodo8            | "CSP_CARGA_CP"                                                                 | CSP_CARGA_CP                                                                                                                     |
| 142 | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                              |
| 143 | zventanas         | "4"                                                                            | 4                                                                                                                                |
| 144 | zvuelta           | 2                                                                              | 2                                                                                                                                |
| 145 | zdireccion        | "/sse_g1/sse_g1_p1_mod.jsp"                                                    | /sse_g1/sse_g1_p1_mod.jsp                                                                                                        |
| 146 | zestado           | "11"                                                                           | 11                                                                                                                               |
| 148 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                             |
| 150 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                            |
| 151 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                               |
| 153 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 154 | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 155 | zraiz             | znodo + ":" + zsubsesion + "!"+ znodo+"."                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.                                                                                     |
| 156 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 157 | zPAISS            | zraiz+ "PAIS"                                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"PAIS"}                                                                             |
| 158 | zNOMBREPAIS       | zraiz+ "NOMBRE_PAIS"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PAIS"}                                                                      |
| 159 | zNOMBRECOMUNIDAD  | zraiz+ "NOMBRE_COMUNIDAD"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_COMUNIDAD"}                                                                 |
| 160 | zCOMUNIDAD        | zraiz+ "COMUNIDAD"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"COMUNIDAD"}                                                                        |
| 161 | zPROVINCIA        | zraiz+ "PROVINCIA"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"PROVINCIA"}                                                                        |
| 162 | zNOMBREPROVINCIA  | zraiz+ "NOMBRE_PROVINCIA"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PROVINCIA"}                                                                 |
| 163 | zPOBLACION        | zraiz+ "POBLACION"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"POBLACION"}                                                                        |
| 164 | zNOMBREPOBLACION  | zraiz+ "NOMBRE_POBLACION"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_POBLACION"}                                                                 |
| 166 | zSTDNGEOPLACE     | zcomun+ "STD_N_GEO_PLACE"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                          |
| 167 | zSTDNSUBGEODIV    | zcomun+"STD_N_SUB_GEO_DIV"                                                     | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV                                            |
| 168 | zSTDNGEODIV       | zcomun+ "STD_N_GEO_DIV"                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                            |
| 169 | zSTDNCOUNTRY      | zcomun+ "STD_N_COUNTRY"                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                            |
| 170 | zORDINAL          | zcomun+ "ORDINAL"                                                              | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                  |
| 171 | zNACCION          | zcomun+ "N_ACCION"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                 |
| 172 | zSSPNSIGLADOMIC   | zcomun+ "SSP_N_SIGLA_DOMIC"                                                    | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                                        |
| 173 | zSTDADDRESSLINE1  | zcomun+ "STD_ADDRESS_LINE_1"                                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}                                       |
| 174 | zSSPNUMVIA        | zcomun+"SSP_NUM_VIA"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA                                                  |
| 175 | zSSPBLOQUE        | zcomun+ "SSP_BLOQUE"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                               |
| 176 | zSSPPISO          | zcomun+ "SSP_PISO"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}                                                 |
| 177 | zSSPESCALERA      | zcomun+ "SSP_ESCALERA"                                                         | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}                                             |
| 178 | zSSPPUERTA        | zcomun+ "SSP_PUERTA"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}                                               |
| 179 | zSSPDISTRITPOSTAL | zcomun+ "SSP_DISTRIT_POSTAL"                                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                       |
| 180 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                       |
| 181 | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                           |
| 182 | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}                                             |
| 183 | zSSPIDSIGLADOMIC2 | zcomun2 + "SSP_ID_SIGLA_DOMIC"                                                 | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}                       |
| 184 | zSSPNSIGLADOMIC2  | zcomun2 + "SSP_N_SIGLA_DOMIC"                                                  | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                        |
| 185 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_COUNTRY{"[*]"}                                                                                               |
| 186 | zmove3            | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                           |
| 187 | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 188 | zSTDIDCOUNTRY3    | zcomun3 + "STD_ID_COUNTRY"                                                     | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                           |
| 189 | zSTDNCOUNTRY3     | zcomun3 +"STD_N_COUNTRY"                                                       | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY                                                |
| 190 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_GEO_DIV{"[*]"}                                                                                               |
| 191 | zmove4            | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                           |
| 192 | zcomun4           | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 193 | zSTDIDGEODIV4     | zcomun4 + "STD_ID_GEO_DIV"                                                     | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}                                           |
| 194 | zSTDNGEODIV4      | zcomun4 +"STD_N_GEO_DIV"                                                       | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                                |
| 195 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                           |
| 196 | zmove5            | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                   |
| 197 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 198 | zSTDNSUBGEODIV5   | zcomun5 + "STD_N_SUB_GEO_DIV"                                                  | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                |
| 199 | zSTDIDSUBGEODIV5  | zcomun5 + "STD_ID_SUB_GEO_DIV"                                                 | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"}                               |
| 200 | zoutputdef6       | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                             |
| 201 | zmove6            | znodo6 + ":" + znodo6 + "[FIRST]"                                              | M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                       |
| 202 | zcomun6           | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 203 | zSTDNGEOPLACE6    | zcomun6 + "STD_N_GEO_PLACE"                                                    | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                      |
| 204 | zSTDIDGEOPLACE6   | zcomun6 +"STD_ID_GEO_PLACE"                                                    | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_PLACE                                         |
| 206 | zoutputdef7       | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_ADDRESS{"[*]"}                                                                                               |
| 207 | zmove7            | znodo7 + ":" + znodo7 + "[FIRST]"                                              | M4T_ADDRESS{":"}M4T_ADDRESS{"[FIRST]"}                                                                                           |
| 208 | zcomun7           | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 209 | zdireccionAct     | ""                                                                             |                                                                                                                                  |
| 210 | zbloqueAct        | ""                                                                             |                                                                                                                                  |
| 211 | zescaleraAct      | ""                                                                             |                                                                                                                                  |
| 212 | zcodposAct        | ""                                                                             |                                                                                                                                  |
| 213 | znumeroAct        | ""                                                                             |                                                                                                                                  |
| 214 | zpisoAct          | ""                                                                             |                                                                                                                                  |
| 215 | zpuertaAct        | ""                                                                             |                                                                                                                                  |
| 217 | zoutputdef8       | zsubsesion + "!" + znodo8 + "[*]"                                              | SSE_ADDRESS{"!"}CSP_CARGA_CP{"[*]"}                                                                                              |
| 218 | zcomun8           | znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&amp;VAR.m4lix]" + "."            | CSP_CARGA_CP{":"}SSE_ADDRESS{"!"}CSP_CARGA_CP{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 219 | zmove8            | znodo8 + ":" + znodo8 + "[FIRST]"                                              | CSP_CARGA_CP{":"}CSP_CARGA_CP{"[FIRST]"}                                                                                         |
| 220 | zJSON             | ""                                                                             |                                                                                                                                  |
| 222 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                   |
| 223 | zmetodocarga3     | zsubsesion + "!"+znodo7+".CARGA"                                               | SSE_ADDRESS{"!"}M4T_ADDRESS.CARGA                                                                                                |
| 224 | zmetodocarga4     | zsubsesion + "!"+znodo8+".CARGA"                                               | SSE_ADDRESS{"!"}CSP_CARGA_CP.CARGA                                                                                               |
| 225 | direccion         | ""                                                                             |                                                                                                                                  |
| 301 | zcount            | 0                                                                              | 0                                                                                                                                |
| 302 | zcounti           | 0                                                                              | 0                                                                                                                                |
| 303 | zcount2           | 0                                                                              | 0                                                                                                                                |
| 304 | zcount3           | 0                                                                              | 0                                                                                                                                |
| 305 | zcount4           | 0                                                                              | 0                                                                                                                                |
| 306 | zcount5           | 0                                                                              | 0                                                                                                                                |
| 307 | zcount6           | 0                                                                              | 0                                                                                                                                |
| 320 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                          |
| 321 | zcountv2          | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                          |
| 322 | zcountv3          | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                          |
| 323 | zcountv4          | String.valueOf(zcount4)                                                        | String.valueOf(zcount4)                                                                                                          |
| 324 | zcountv5          | String.valueOf(zcount5)                                                        | String.valueOf(zcount5)                                                                                                          |
| 325 | zcountv6          | String.valueOf(zcount6)                                                        | String.valueOf(zcount6)                                                                                                          |
| 370 | dat01             | ""                                                                             |                                                                                                                                  |
| 458 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                 |
| 459 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 227 | m4:startpage | m4task=SSE_ADDRESS                                                                                                                                   |
| 228 | m4:beginjob  |                                                                                                                                                      |
| 229 | m4:datadef   | m4o=SSE_ADDRESS; m4name=SSE_ADDRESS                                                                                                                  |
| 230 | m4:exec      | m4method=SSE_ADDRESS{"!"}M4T_ADDRESS.CARGA                                                                                                           |
| 231 | m4:outputdef | m4alias=M4T_ADDRESS                                                                                                                                  |
| 231 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_ADDRESS{"[*]"}                                                                                               |
| 232 | m4:endjob    |                                                                                                                                                      |
| 274 | m4:beginjob  |                                                                                                                                                      |
| 275 | m4:datadef   | m4o=SSE_ADDRESS; m4name=SSE_ADDRESS                                                                                                                  |
| 283 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                              |
| 283 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                           |
| 284 | m4:outputdef | m4alias=SSE_ADDRESS                                                                                                                                  |
| 284 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 285 | m4:outputdef | m4alias=M4T_ID_SIGLA_DOMICI                                                                                                                          |
| 285 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                       |
| 286 | m4:outputdef | m4alias=M4T_COUNTRY                                                                                                                                  |
| 286 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_COUNTRY{"[*]"}                                                                                               |
| 287 | m4:outputdef | m4alias=M4T_GEO_DIV                                                                                                                                  |
| 287 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_GEO_DIV{"[*]"}                                                                                               |
| 288 | m4:outputdef | m4alias=M4T_SUB_GEO_DIV                                                                                                                              |
| 288 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                           |
| 289 | m4:outputdef | m4alias=M4T_GEO_PLACE                                                                                                                                |
| 289 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                             |
| 291 | m4:endjob    |                                                                                                                                                      |
| 292 | m4:move      |                                                                                                                                                      |
| 292 | m4:param     | name=SSE_ADDRESS; value=SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                    |
| 293 | m4:move      |                                                                                                                                                      |
| 293 | m4:param     | name=SSE_ADDRESS; value=M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                       |
| 294 | m4:move      |                                                                                                                                                      |
| 294 | m4:param     | name=SSE_ADDRESS; value=M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                       |
| 295 | m4:move      |                                                                                                                                                      |
| 295 | m4:param     | name=SSE_ADDRESS; value=M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                       |
| 296 | m4:move      |                                                                                                                                                      |
| 296 | m4:param     | name=SSE_ADDRESS; value=M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                               |
| 297 | m4:move      |                                                                                                                                                      |
| 297 | m4:param     | name=SSE_ADDRESS; value=M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                   |
| 371 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                |
| 372 | m4:item      | var=; m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}; htmlsafe=true               |
| 377 | m4:item      | m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                      |
| 381 | m4:item      | m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                      |
| 416 | m4:label     | item=STD_ID_COUNTRY; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 423 | m4:label     | item=STD_ID_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 430 | m4:label     | item=STD_ID_SUB_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                        |
| 437 | m4:label     | item=STD_ID_GEO_PLACE; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                          |
| 463 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                            |
| 465 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                               |
| 470 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                                      |
| 470 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}; htmlsafe=true                                     |
| 473 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; htmlsafe=true                                                |
| 474 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                             |
| 475 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; htmlsafe=true                                               |
| 476 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; htmlsafe=true                                           |
| 477 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; htmlsafe=true                                             |
| 480 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                          |
| 481 | m4:label     | item=STD_ID_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 481 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                          |
| 482 | m4:label     | item=STD_ID_SUB_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                        |
| 482 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV; htmlsafe=true                                          |
| 485 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                                     |
| 486 | m4:label     | item=STD_ID_GEO_PLACE; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                          |
| 486 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                        |
| 497 | m4:endpage   |                                                                                                                                                      |

| L   | Operación        | Argumentos literales                               |
| --- | ---------------- | -------------------------------------------------- |
| 237 | getItem          | znodo7,zmeta4object,znodo7,"","STD_ADDRESS_LINE_1" |
| 238 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_BLOQUE"         |
| 239 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_ESCALERA"       |
| 240 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_DISTRIT_POSTAL" |
| 241 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_NUM_VIA"        |
| 242 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_PISO"           |
| 243 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_PUERTA"         |
| 278 | setItem          | zsubsesion,znodo,"","PAIS",zpais                   |
| 279 | setItem          | zsubsesion,znodo,"","COMUNIDAD",zcom               |
| 280 | setItem          | zsubsesion,znodo,"","PROVINCIA",zpro               |
| 311 | getCount         | znodo,zsubsesion,znodo                             |
| 312 | getCountInClient | znodo,zsubsesion,znodo                             |
| 313 | getCount         | znodo2,zsubsesion,znodo2                           |
| 314 | getCount         | znodo3,zsubsesion,znodo3                           |
| 315 | getCount         | znodo4,zsubsesion,znodo4                           |
| 316 | getCount         | znodo5,zsubsesion,znodo5                           |
| 317 | getCount         | znodo6,zsubsesion,znodo6                           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 55  | filtrar    | num        |
| 93  | comprobar  |            |
| 119 | pendientes | ord        |
| 248 | cargar_cp  | codigo     |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if ((zdireccion2==null)){zdireccion2="";}                                                                                                |
| 36  | if ((ztipo==null)){ztipo="CL";}                                                                                                          |
| 37  | if ((zntipo==null)&#124;&#124;(zntipo.equals(""))){zntipo="Calle";}                                                                      |
| 38  | if ((znumero==null)){znumero="";}                                                                                                        |
| 39  | if ((zbloque==null)){zbloque="";}                                                                                                        |
| 40  | if ((zpiso==null)){ zpiso="";}                                                                                                           |
| 41  | if ((zescalera==null)){zescalera="";}                                                                                                    |
| 42  | if ((zpuerta==null)){zpuerta="";}                                                                                                        |
| 43  | if ((zcpostal==null)&#124;&#124;(zcpostal.equals(""))){zcpostal="";}                                                                     |
| 44  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 45  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 58  | if ((num=="2")&#124;&#124;(num=="3")) {                                                                                                  |
| 62  | if (num=="3") {                                                                                                                          |
| 66  | else{                                                                                                                                    |
| 90  | oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);                                         |
| 91  | onum = new m4objvalidacion('_alfanum','1','5','','El numero de via no puede ser nulo',false);                                            |
| 92  | ocp = new m4objvalidacion('_cp','','','','El distrito postal es un campo oligatorio numerico de 5 caracteres',false);                    |
| 97  | if (oalfanum.resultado == false){                                                                                                        |
| 102 | if (onum.resultado == false){                                                                                                            |
| 107 | if (ocp.resultado == false){                                                                                                             |
| 112 | if (error == 1){                                                                                                                         |
| 113 | alert(texto);                                                                                                                            |
| 115 | else {                                                                                                                                   |
| 268 | alert("Pongase en contacto con Recursos Humanos para dar de alta su codigo postal.");                                                    |
| 374 | if(dat01.length()&gt;1){                                                                                                                 |
| 375 | if(!dat01.equals(ztipo)){                                                                                                                |
| 379 | }else{                                                                                                                                   |
| 457 | if (zcount &gt; 0) {                                                                                                                     |
| 498 | &lt;%if (zcodposAct!=null){%&gt;                                                                                                         |
| 98  | expresión de cálculo/transformación: texto = texto + "\n La Via Publica es obligatoria.Modifique el texto.";                             |
| 103 | expresión de cálculo/transformación: texto = texto + "\n El numero de via es obligatorio.";                                              |
| 108 | expresión de cálculo/transformación: texto = texto + "\n El distrito postal es obligatorio. Es un numerico de 5 cifras";                 |
| 149 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 151 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 153 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 154 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 155 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                                          |
| 156 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 180 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 181 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 182 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 183 | expresión de cálculo/transformación: String zSSPIDSIGLADOMIC2 = zcomun2 + "SSP_ID_SIGLA_DOMIC";                                          |
| 184 | expresión de cálculo/transformación: String zSSPNSIGLADOMIC2 = zcomun2 + "SSP_N_SIGLA_DOMIC";                                            |
| 185 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 186 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 187 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 188 | expresión de cálculo/transformación: String zSTDIDCOUNTRY3 = zcomun3 + "STD_ID_COUNTRY";                                                 |
| 190 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 191 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 192 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";               |
| 193 | expresión de cálculo/transformación: String zSTDIDGEODIV4 = zcomun4 + "STD_ID_GEO_DIV";                                                  |
| 195 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 196 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 197 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 198 | expresión de cálculo/transformación: String zSTDNSUBGEODIV5 = zcomun5 + "STD_N_SUB_GEO_DIV";                                             |
| 199 | expresión de cálculo/transformación: String zSTDIDSUBGEODIV5 = zcomun5 + "STD_ID_SUB_GEO_DIV";                                           |
| 200 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 201 | expresión de cálculo/transformación: String zmove6 =znodo6 + ":" + znodo6 + "[FIRST]";                                                   |
| 202 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 203 | expresión de cálculo/transformación: String zSTDNGEOPLACE6 = zcomun6 + "STD_N_GEO_PLACE";                                                |
| 206 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 217 | expresión de cálculo/transformación: String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";                                             |
| 218 | expresión de cálculo/transformación: String zcomun8 = znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&amp;VAR.m4lix]" + ".";               |
| 219 | expresión de cálculo/transformación: String zmove8 = znodo8 + ":" + znodo8 + "[FIRST]";                                                  |
| 222 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 223 | expresión de cálculo/transformación: String zmetodocarga3 = zsubsesion + "!"+znodo7+".CARGA";                                            |
| 224 | expresión de cálculo/transformación: String zmetodocarga4 = zsubsesion + "!"+znodo8+".CARGA";                                            |
| 459 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp               |
| 127 | ../../sse_generico/espanol/generico_menusup.jsp       |
| 128 | ../../sse_generico/espanol/generico_links.jsp         |
| 491 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 495 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                             |
| 8   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/clase_val_entradas.js                                 |
| 12  | [host externo]/jquery-3.3.1.min.js                              |
| 331 | /iconos/noname_edificio_121_100.gif                             |
| 335 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 340 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   |
| 355 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 363 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 363 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 447 | javascript:comprobar();                                         |
| 448 | /iconos/icono_enviar_ess_36_36.gif                              |
| 466 | javascript:pendientes(                                          |
| 466 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 122 | sse_generico/generico_actualizar.jsp                            |
| 127 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 128 | ../../sse_generico/espanol/generico_links.jsp                   |
| 145 | /sse_g1/sse_g1_p1_mod.jsp                                       |
| 254 | ./cod_postal.jsp                                                |
| 491 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 495 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                    |
| --- | ------------------------------------------- |
| 5   | Dirección fiscal                            |
| 347 | Dirección                                   |
| 350 | Modifica tu dirección. Mis datos personales |
| 385 | Dirección fiscal                            |
| 389 | * Via pública                               |
| 390 | "&gt; " selected&gt;                        |
| 416 | * Número                                    |
| 418 | Bloque Piso Escalera Puerta                 |
| 429 | * Cód. postal                               |
| 468 | * Campos obligatorios                       |
| 485 | Dirección fiscal                            |
| 489 | ');"&gt;                                    |
| 492 | Via pública                                 |
| 496 | Número                                      |
| 497 | Bloque                                      |
| 498 | Piso                                        |
| 499 | Escalera                                    |
| 500 | Puerta                                      |
| 503 | País                                        |
| 508 | Cód. postal                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                                   |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 349 | img     | alt=Dirección ; title=Dirección ; src=/iconos/noname_edificio_121_100.gif; width=100; height=100                                                                                                                                                                                                                                            |
| 353 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                                                                                           |
| 363 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                                                                                                                                   |
| 364 | input   | type=hidden; id=zpais; name=zpais; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                 |
| 365 | input   | type=hidden; id=zcom; name=zcom; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                   |
| 366 | input   | type=hidden; id=zpro; name=zpro; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                   |
| 367 | input   | type=hidden; id=zdireccion2; name=zdireccion2; value=&lt;%=zdireccion2%&gt;                                                                                                                                                                                                                                                                 |
| 368 | input   | type=hidden; id=tipo; name=tipo; value=&lt;%=ztipo%&gt;                                                                                                                                                                                                                                                                                     |
| 369 | input   | type=hidden; id=ntipo; name=ntipo; value=&lt;%=zntipo%&gt;                                                                                                                                                                                                                                                                                  |
| 370 | input   | type=hidden; id=numero; name=numero; value=&lt;%=znumero%&gt;                                                                                                                                                                                                                                                                               |
| 371 | input   | type=hidden; id=bloque; name=bloque; value=&lt;%=zbloque%&gt;                                                                                                                                                                                                                                                                               |
| 372 | input   | type=hidden; id=piso; name=piso; value=&lt;%=zpiso%&gt;                                                                                                                                                                                                                                                                                     |
| 373 | input   | type=hidden; id=escalera; name=escalera; value=&lt;%=zescalera%&gt;                                                                                                                                                                                                                                                                         |
| 374 | input   | type=hidden; id=puerta; name=puerta; value=&lt;%=zpuerta%&gt;                                                                                                                                                                                                                                                                               |
| 375 | input   | type=hidden; id=cpostal; name=cpostal; value=&lt;%=zcpostal%&gt;                                                                                                                                                                                                                                                                            |
| 376 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                                                                                                                             |
| 378 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                                                                                                                             |
| 379 | input   | type=hidden; id=TAG; name=TAG; value=SSE_ADDRESS                                                                                                                                                                                                                                                                                            |
| 380 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                                                                                                                       |
| 381 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                                                                                                                               |
| 382 | input   | type=hidden; id=NOD; name=NOD; value=SSE_ADDRESS                                                                                                                                                                                                                                                                                            |
| 386 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                                                                                                                  |
| 386 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                                                                                                                        |
| 391 | select  | id=SSP_ID_SIGLA_DOMIC; class=fuenteformulario150; name=SSP_ID_SIGLA_DOMIC; title=Escoge el tipo de via                                                                                                                                                                                                                                      |
| 400 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                                    |
| 404 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                                    |
| 412 | input   | class=fuenteformulario; type=text; id=STD_ADDRESS_LINE_1; name=STD_ADDRESS_LINE_1; size=40; maxlength=40; tabindex=1; title=Escribe el nombre de tu via pública; value=&lt;%=zdireccionAct%&gt;                                                                                                                                             |
| 417 | input   | class=fuenteformulario; type=text; id=SSP_NUM_VIA; name=SSP_NUM_VIA; size=5; maxlength=5; tabindex=2; title=Escribe el número de tu calle; value=&lt;%=znumeroAct%&gt;                                                                                                                                                                      |
| 419 | input   | class=fuenteformulario; tabindex=3; type=text; id=SSP_BLOQUE; name=SSP_BLOQUE; size=2; maxlength=5; title=Escribe el número de tu bloque; value=&lt;%=zbloqueAct%&gt;                                                                                                                                                                       |
| 421 | input   | class=fuenteformulario; tabindex=4; type=text; id=SSP_PISO; name=SSP_PISO; size=2; maxlength=10; title=Escribe tu piso; value=&lt;%=zpisoAct%&gt;                                                                                                                                                                                           |
| 423 | input   | class=fuenteformulario; tabindex=5; type=text; id=SSP_ESCALERA; name=SSP_ESCALERA; size=2; maxlength=10; title=Escribe tu escalera; value=&lt;%=zescaleraAct%&gt;                                                                                                                                                                           |
| 425 | input   | class=fuenteformulario; tabindex=6; type=text; id=SSP_PUERTA; name=SSP_PUERTA; size=2; maxlength=10; title=Escribe el número de tu puerta; value=&lt;%=zpuertaAct%&gt;                                                                                                                                                                      |
| 431 | input   | class=fuenteformulario; type=text; id=SSP_DISTRIT_POSTAL; name=SSP_DISTRIT_POSTAL; size=5; maxlength=9; tabindex=7; title=Escribe tu código postal; value=&lt;%=zcodposAct%&gt;; style=width: 56px;                                                                                                                                         |
| 433 | input   | name=button; onclick=cargar_cp(document.getElementById('SSP_DISTRIT_POSTAL').value); type=button; class=enterlogin; id=btnbusqueda; style= background-color: #DC0028;background-repeat: no-repeat;border: 1px solid #DC0028;border-radius: 4px;color: #FFFFFF;margin: 10px;max-width: 120px;min-height: 25px;min-width: 90px;; value=Cargar |
| 442 | input   | type=hidden; name=STD_ID_COUNTRY; id=STD_ID_COUNTRY                                                                                                                                                                                                                                                                                         |
| 443 | input   | type=text; name=STD_N_COUNTRY; id=STD_N_COUNTRY; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                     |
| 449 | input   | type=hidden; name=STD_ID_GEO_DIV; id=STD_ID_GEO_DIV                                                                                                                                                                                                                                                                                         |
| 450 | input   | type=text; name=STD_N_GEO_DIV; id=STD_N_GEO_DIV; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                     |
| 456 | input   | type=hidden; name=STD_ID_SUB_GEO_DIV; id=STD_ID_SUB_GEO_DIV                                                                                                                                                                                                                                                                                 |
| 457 | input   | type=text; name=STD_N_SUB_GEO_DIV; id=STD_N_SUB_GEO_DIV; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                             |
| 463 | input   | type=hidden; name=STD_ID_GEO_PLACE; id=STD_ID_GEO_PLACE                                                                                                                                                                                                                                                                                     |
| 464 | input   | type=text; name=STD_N_GEO_PLACE; id=STD_N_GEO_PLACE; class=fuenteformulario150 disabled; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                 |
| 470 | a       | href=javascript:comprobar();; tabindex=8; title=Enviar; style=padding-left: 30%;                                                                                                                                                                                                                                                            |
| 471 | img     | id=enviar; alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                                                                                            |
| 489 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                                                                                                                      |
| 489 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                                                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 20  | zdireccion2     | getParameter(request,"zdireccion2") |
| 21  | tipo            | getParameter(request,"tipo")        |
| 22  | ntipo           | getParameter(request,"ntipo")       |
| 23  | numero          | getParameter(request,"numero")      |
| 24  | bloque          | getParameter(request,"bloque")      |
| 25  | piso            | getParameter(request,"piso")        |
| 26  | escalera        | getParameter(request,"escalera")    |
| 27  | puerta          | getParameter(request,"puerta")      |
| 28  | cpostal         | getParameter(request,"cpostal")     |
| 332 | zIdPerson       | getBagEntries("zIdPerson")          |

| L   | Variable          | Expresión fuente                                                                                    | Resolución estática parcial                                                                                                      |
| --- | ----------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 15  | zpais             | zobjtabla.m4paramvalor("zpais")                                                                     | zobjtabla.m4paramvalor("zpais")                                                                                                  |
| 16  | zcom              | zobjtabla.m4paramvalor("zcom")                                                                      | zobjtabla.m4paramvalor("zcom")                                                                                                   |
| 17  | zpro              | zobjtabla.m4paramvalor("zpro")                                                                      | zobjtabla.m4paramvalor("zpro")                                                                                                   |
| 20  | zdireccion2       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdireccion2")                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdireccion2")                                                          |
| 21  | ztipo             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                                                                 |
| 22  | zntipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ntipo")                                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ntipo")                                                                |
| 23  | znumero           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"numero")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"numero")                                                               |
| 24  | zbloque           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bloque")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bloque")                                                               |
| 25  | zpiso             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"piso")                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"piso")                                                                 |
| 26  | zescalera         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"escalera")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"escalera")                                                             |
| 27  | zpuerta           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puerta")                                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puerta")                                                               |
| 28  | zcpostal          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"cpostal")                                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"cpostal")                                                              |
| 33  | estado            | zobjtabla.m4paramvalor("estado")                                                                    | zobjtabla.m4paramvalor("estado")                                                                                                 |
| 34  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                                                  | zobjtabla.m4paramvalor("zinicios")                                                                                               |
| 130 | zsubsesion        | "SSE_ADDRESS"                                                                                       | SSE_ADDRESS                                                                                                                      |
| 131 | zmeta4object      | "SSE_ADDRESS"                                                                                       | SSE_ADDRESS                                                                                                                      |
| 132 | znodo             | "SSE_ADDRESS"                                                                                       | SSE_ADDRESS                                                                                                                      |
| 133 | znodo2            | "M4T_ID_SIGLA_DOMICI"                                                                               | M4T_ID_SIGLA_DOMICI                                                                                                              |
| 134 | znodo3            | "M4T_COUNTRY"                                                                                       | M4T_COUNTRY                                                                                                                      |
| 135 | znodo4            | "M4T_GEO_DIV"                                                                                       | M4T_GEO_DIV                                                                                                                      |
| 136 | znodo5            | "M4T_SUB_GEO_DIV"                                                                                   | M4T_SUB_GEO_DIV                                                                                                                  |
| 137 | znodo6            | "M4T_GEO_PLACE"                                                                                     | M4T_GEO_PLACE                                                                                                                    |
| 138 | znodo7            | "M4T_ADDRESS"                                                                                       | M4T_ADDRESS                                                                                                                      |
| 139 | znodo8            | "CSP_CARGA_CP"                                                                                      | CSP_CARGA_CP                                                                                                                     |
| 142 | ztipocarga        | "SSE"                                                                                               | SSE                                                                                                                              |
| 143 | zventanas         | "4"                                                                                                 | 4                                                                                                                                |
| 144 | zvuelta           | 2                                                                                                   | 2                                                                                                                                |
| 145 | zdireccion        | "/sse_g1/sse_g1_p1_mod.jsp"                                                                         | /sse_g1/sse_g1_p1_mod.jsp                                                                                                        |
| 146 | zestado           | "11"                                                                                                | 11                                                                                                                               |
| 148 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                                                | Integer.valueOf(zinicios).intValue()                                                                                             |
| 150 | zventana          | Integer.valueOf(zventanas).intValue()                                                               | Integer.valueOf(zventanas).intValue()                                                                                            |
| 151 | zregistrofinal    | zregistroinicial + zventana - 1                                                                     | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                               |
| 153 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"                      | SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 154 | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 155 | zraiz             | znodo + ":" + zsubsesion + "!"+ znodo+"."                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.                                                                                     |
| 156 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 157 | zPAISS            | zraiz+ "PAIS"                                                                                       | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"PAIS"}                                                                             |
| 158 | zNOMBREPAIS       | zraiz+ "NOMBRE_PAIS"                                                                                | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PAIS"}                                                                      |
| 159 | zNOMBRECOMUNIDAD  | zraiz+ "NOMBRE_COMUNIDAD"                                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_COMUNIDAD"}                                                                 |
| 160 | zCOMUNIDAD        | zraiz+ "COMUNIDAD"                                                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"COMUNIDAD"}                                                                        |
| 161 | zPROVINCIA        | zraiz+ "PROVINCIA"                                                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"PROVINCIA"}                                                                        |
| 162 | zNOMBREPROVINCIA  | zraiz+ "NOMBRE_PROVINCIA"                                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PROVINCIA"}                                                                 |
| 163 | zPOBLACION        | zraiz+ "POBLACION"                                                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"POBLACION"}                                                                        |
| 164 | zNOMBREPOBLACION  | zraiz+ "NOMBRE_POBLACION"                                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_POBLACION"}                                                                 |
| 166 | zSTDNGEOPLACE     | zcomun+ "STD_N_GEO_PLACE"                                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                          |
| 167 | zSTDNSUBGEODIV    | zcomun+"STD_N_SUB_GEO_DIV"                                                                          | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV                                            |
| 168 | zSTDNGEODIV       | zcomun+ "STD_N_GEO_DIV"                                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                            |
| 169 | zSTDNCOUNTRY      | zcomun+ "STD_N_COUNTRY"                                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                            |
| 170 | zORDINAL          | zcomun+ "ORDINAL"                                                                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                  |
| 171 | zNACCION          | zcomun+ "N_ACCION"                                                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                 |
| 172 | zSSPNSIGLADOMIC   | zcomun+ "SSP_N_SIGLA_DOMIC"                                                                         | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                                        |
| 173 | zSTDADDRESSLINE1  | zcomun+ "STD_ADDRESS_LINE_1"                                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}                                       |
| 174 | zSSPNUMVIA        | zcomun+"SSP_NUM_VIA"                                                                                | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA                                                  |
| 175 | zSSPBLOQUE        | zcomun+ "SSP_BLOQUE"                                                                                | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                               |
| 176 | zSSPPISO          | zcomun+ "SSP_PISO"                                                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}                                                 |
| 177 | zSSPESCALERA      | zcomun+ "SSP_ESCALERA"                                                                              | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}                                             |
| 178 | zSSPPUERTA        | zcomun+ "SSP_PUERTA"                                                                                | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}                                               |
| 179 | zSSPDISTRITPOSTAL | zcomun+ "SSP_DISTRIT_POSTAL"                                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                       |
| 180 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                                                   | SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                       |
| 181 | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                                                   | M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                           |
| 182 | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."                                 | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}                                             |
| 183 | zSSPIDSIGLADOMIC2 | zcomun2 + "SSP_ID_SIGLA_DOMIC"                                                                      | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}                       |
| 184 | zSSPNSIGLADOMIC2  | zcomun2 + "SSP_N_SIGLA_DOMIC"                                                                       | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                        |
| 185 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                                                   | SSE_ADDRESS{"!"}M4T_COUNTRY{"[*]"}                                                                                               |
| 186 | zmove3            | znodo3 + ":" + znodo3 + "[FIRST]"                                                                   | M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                           |
| 187 | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."                                 | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 188 | zSTDIDCOUNTRY3    | zcomun3 + "STD_ID_COUNTRY"                                                                          | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                           |
| 189 | zSTDNCOUNTRY3     | zcomun3 +"STD_N_COUNTRY"                                                                            | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY                                                |
| 190 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                                                   | SSE_ADDRESS{"!"}M4T_GEO_DIV{"[*]"}                                                                                               |
| 191 | zmove4            | znodo4 + ":" + znodo4 + "[FIRST]"                                                                   | M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                           |
| 192 | zcomun4           | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."                                 | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 193 | zSTDIDGEODIV4     | zcomun4 + "STD_ID_GEO_DIV"                                                                          | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}                                           |
| 194 | zSTDNGEODIV4      | zcomun4 +"STD_N_GEO_DIV"                                                                            | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                                |
| 195 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                                                   | SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                           |
| 196 | zmove5            | znodo5 + ":" + znodo5 + "[FIRST]"                                                                   | M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                   |
| 197 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."                                 | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 198 | zSTDNSUBGEODIV5   | zcomun5 + "STD_N_SUB_GEO_DIV"                                                                       | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                |
| 199 | zSTDIDSUBGEODIV5  | zcomun5 + "STD_ID_SUB_GEO_DIV"                                                                      | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"}                               |
| 200 | zoutputdef6       | zsubsesion + "!" + znodo6 + "[*]"                                                                   | SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                             |
| 201 | zmove6            | znodo6 + ":" + znodo6 + "[FIRST]"                                                                   | M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                       |
| 202 | zcomun6           | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."                                 | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 203 | zSTDNGEOPLACE6    | zcomun6 + "STD_N_GEO_PLACE"                                                                         | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                      |
| 204 | zSTDIDGEOPLACE6   | zcomun6 +"STD_ID_GEO_PLACE"                                                                         | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_PLACE                                         |
| 206 | zoutputdef7       | zsubsesion + "!" + znodo7 + "[*]"                                                                   | SSE_ADDRESS{"!"}M4T_ADDRESS{"[*]"}                                                                                               |
| 207 | zmove7            | znodo7 + ":" + znodo7 + "[FIRST]"                                                                   | M4T_ADDRESS{":"}M4T_ADDRESS{"[FIRST]"}                                                                                           |
| 208 | zcomun7           | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."                                 | M4T_ADDRESS{":"}SSE_ADDRESS{"!"}M4T_ADDRESS{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 209 | zdireccionAct     | ""                                                                                                  |                                                                                                                                  |
| 210 | zbloqueAct        | ""                                                                                                  |                                                                                                                                  |
| 211 | zescaleraAct      | ""                                                                                                  |                                                                                                                                  |
| 212 | zcodposAct        | ""                                                                                                  |                                                                                                                                  |
| 213 | znumeroAct        | ""                                                                                                  |                                                                                                                                  |
| 214 | zpisoAct          | ""                                                                                                  |                                                                                                                                  |
| 215 | zpuertaAct        | ""                                                                                                  |                                                                                                                                  |
| 217 | zoutputdef8       | zsubsesion + "!" + znodo8 + "[*]"                                                                   | SSE_ADDRESS{"!"}CSP_CARGA_CP{"[*]"}                                                                                              |
| 218 | zcomun8           | znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&amp;VAR.m4lix]" + "."                                 | CSP_CARGA_CP{":"}SSE_ADDRESS{"!"}CSP_CARGA_CP{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 219 | zmove8            | znodo8 + ":" + znodo8 + "[FIRST]"                                                                   | CSP_CARGA_CP{":"}CSP_CARGA_CP{"[FIRST]"}                                                                                         |
| 220 | zJSON             | ""                                                                                                  |                                                                                                                                  |
| 222 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                                                   | CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                   |
| 223 | zmetodocarga3     | zsubsesion + "!"+znodo7+".CARGA"                                                                    | SSE_ADDRESS{"!"}M4T_ADDRESS.CARGA                                                                                                |
| 224 | zmetodocarga4     | zsubsesion + "!"+znodo8+".CARGA"                                                                    | SSE_ADDRESS{"!"}CSP_CARGA_CP.CARGA                                                                                               |
| 225 | direccion         | ""                                                                                                  |                                                                                                                                  |
| 302 | zcount            | 0                                                                                                   | 0                                                                                                                                |
| 303 | zcounti           | 0                                                                                                   | 0                                                                                                                                |
| 304 | zcount2           | 0                                                                                                   | 0                                                                                                                                |
| 305 | zcount3           | 0                                                                                                   | 0                                                                                                                                |
| 306 | zcount4           | 0                                                                                                   | 0                                                                                                                                |
| 307 | zcount5           | 0                                                                                                   | 0                                                                                                                                |
| 308 | zcount6           | 0                                                                                                   | 0                                                                                                                                |
| 321 | zcountv           | String.valueOf(zcounti)                                                                             | String.valueOf(zcounti)                                                                                                          |
| 322 | zcountv2          | String.valueOf(zcount2)                                                                             | String.valueOf(zcount2)                                                                                                          |
| 323 | zcountv3          | String.valueOf(zcount3)                                                                             | String.valueOf(zcount3)                                                                                                          |
| 324 | zcountv4          | String.valueOf(zcount4)                                                                             | String.valueOf(zcount4)                                                                                                          |
| 325 | zcountv5          | String.valueOf(zcount5)                                                                             | String.valueOf(zcount5)                                                                                                          |
| 326 | zcountv6          | String.valueOf(zcount6)                                                                             | String.valueOf(zcount6)                                                                                                          |
| 332 | matricula         | zsesionDA.getBagEntries("zIdPerson")                                                                | zsesionDA.getBagEntries("zIdPerson")                                                                                             |
| 333 | matriculaEnc      | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula) | com.meta4.taglib.util.M4PresentationUtilTaglib.secureEncrypt(request, "[clave omitida]", matricula)                              |
| 393 | dat01             | ""                                                                                                  |                                                                                                                                  |
| 481 | zregistroinicials | String.valueOf(zregistroinicial)                                                                    | String.valueOf(zregistroinicial)                                                                                                 |
| 482 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                                      | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 227 | m4:startpage | m4task=SSE_ADDRESS                                                                                                                                   |
| 228 | m4:beginjob  |                                                                                                                                                      |
| 229 | m4:datadef   | m4o=SSE_ADDRESS; m4name=SSE_ADDRESS                                                                                                                  |
| 230 | m4:exec      | m4method=SSE_ADDRESS{"!"}M4T_ADDRESS.CARGA                                                                                                           |
| 231 | m4:outputdef | m4alias=M4T_ADDRESS                                                                                                                                  |
| 231 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_ADDRESS{"[*]"}                                                                                               |
| 232 | m4:endjob    |                                                                                                                                                      |
| 275 | m4:beginjob  |                                                                                                                                                      |
| 276 | m4:datadef   | m4o=SSE_ADDRESS; m4name=SSE_ADDRESS                                                                                                                  |
| 284 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                              |
| 284 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                           |
| 285 | m4:outputdef | m4alias=SSE_ADDRESS                                                                                                                                  |
| 285 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 286 | m4:outputdef | m4alias=M4T_ID_SIGLA_DOMICI                                                                                                                          |
| 286 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                       |
| 287 | m4:outputdef | m4alias=M4T_COUNTRY                                                                                                                                  |
| 287 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_COUNTRY{"[*]"}                                                                                               |
| 288 | m4:outputdef | m4alias=M4T_GEO_DIV                                                                                                                                  |
| 288 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_GEO_DIV{"[*]"}                                                                                               |
| 289 | m4:outputdef | m4alias=M4T_SUB_GEO_DIV                                                                                                                              |
| 289 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                           |
| 290 | m4:outputdef | m4alias=M4T_GEO_PLACE                                                                                                                                |
| 290 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                             |
| 292 | m4:endjob    |                                                                                                                                                      |
| 293 | m4:move      |                                                                                                                                                      |
| 293 | m4:param     | name=SSE_ADDRESS; value=SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                    |
| 294 | m4:move      |                                                                                                                                                      |
| 294 | m4:param     | name=SSE_ADDRESS; value=M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                       |
| 295 | m4:move      |                                                                                                                                                      |
| 295 | m4:param     | name=SSE_ADDRESS; value=M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                       |
| 296 | m4:move      |                                                                                                                                                      |
| 296 | m4:param     | name=SSE_ADDRESS; value=M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                       |
| 297 | m4:move      |                                                                                                                                                      |
| 297 | m4:param     | name=SSE_ADDRESS; value=M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                               |
| 298 | m4:move      |                                                                                                                                                      |
| 298 | m4:param     | name=SSE_ADDRESS; value=M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                   |
| 394 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                |
| 395 | m4:item      | var=; m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}; htmlsafe=true               |
| 400 | m4:item      | m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                      |
| 404 | m4:item      | m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                      |
| 439 | m4:label     | item=STD_ID_COUNTRY; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 446 | m4:label     | item=STD_ID_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 453 | m4:label     | item=STD_ID_SUB_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                        |
| 460 | m4:label     | item=STD_ID_GEO_PLACE; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                          |
| 486 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                            |
| 488 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                               |
| 493 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                                      |
| 493 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}; htmlsafe=true                                     |
| 496 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; htmlsafe=true                                                |
| 497 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                             |
| 498 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; htmlsafe=true                                               |
| 499 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; htmlsafe=true                                           |
| 500 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; htmlsafe=true                                             |
| 503 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                          |
| 504 | m4:label     | item=STD_ID_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 504 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                          |
| 505 | m4:label     | item=STD_ID_SUB_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                        |
| 505 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV; htmlsafe=true                                          |
| 508 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                                     |
| 509 | m4:label     | item=STD_ID_GEO_PLACE; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                          |
| 509 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                        |
| 520 | m4:endpage   |                                                                                                                                                      |

| L   | Operación        | Argumentos literales                               |
| --- | ---------------- | -------------------------------------------------- |
| 237 | getItem          | znodo7,zmeta4object,znodo7,"","STD_ADDRESS_LINE_1" |
| 238 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_BLOQUE"         |
| 239 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_ESCALERA"       |
| 240 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_DISTRIT_POSTAL" |
| 241 | getItem          | znodo7,zmeta4object,znodo7,"","STD_ID_GEO_PLACE"   |
| 242 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_NUM_VIA"        |
| 243 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_PISO"           |
| 244 | getItem          | znodo7,zmeta4object,znodo7,"","SSP_PUERTA"         |
| 279 | setItem          | zsubsesion,znodo,"","PAIS",zpais                   |
| 280 | setItem          | zsubsesion,znodo,"","COMUNIDAD",zcom               |
| 281 | setItem          | zsubsesion,znodo,"","PROVINCIA",zpro               |
| 312 | getCount         | znodo,zsubsesion,znodo                             |
| 313 | getCountInClient | znodo,zsubsesion,znodo                             |
| 314 | getCount         | znodo2,zsubsesion,znodo2                           |
| 315 | getCount         | znodo3,zsubsesion,znodo3                           |
| 316 | getCount         | znodo4,zsubsesion,znodo4                           |
| 317 | getCount         | znodo5,zsubsesion,znodo5                           |
| 318 | getCount         | znodo6,zsubsesion,znodo6                           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 55  | filtrar    | num        |
| 93  | comprobar  |            |
| 119 | pendientes | ord        |
| 249 | cargar_cp  | codigo     |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 35  | if ((zdireccion2==null)){zdireccion2="";}                                                                                                |
| 36  | if ((ztipo==null)){ztipo="CL";}                                                                                                          |
| 37  | if ((zntipo==null)&#124;&#124;(zntipo.equals(""))){zntipo="Calle";}                                                                      |
| 38  | if ((znumero==null)){znumero="";}                                                                                                        |
| 39  | if ((zbloque==null)){zbloque="";}                                                                                                        |
| 40  | if ((zpiso==null)){ zpiso="";}                                                                                                           |
| 41  | if ((zescalera==null)){zescalera="";}                                                                                                    |
| 42  | if ((zpuerta==null)){zpuerta="";}                                                                                                        |
| 43  | if ((zcpostal==null)&#124;&#124;(zcpostal.equals(""))){zcpostal="";}                                                                     |
| 44  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 45  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 58  | if ((num=="2")&#124;&#124;(num=="3")) {                                                                                                  |
| 62  | if (num=="3") {                                                                                                                          |
| 66  | else{                                                                                                                                    |
| 90  | oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);                                         |
| 91  | onum = new m4objvalidacion('_alfanum','1','5','','El numero de via no puede ser nulo',false);                                            |
| 92  | ocp = new m4objvalidacion('_cp','','','','El distrito postal es un campo oligatorio numerico de 5 caracteres',false);                    |
| 97  | if (oalfanum.resultado == false){                                                                                                        |
| 102 | if (onum.resultado == false){                                                                                                            |
| 107 | if (ocp.resultado == false){                                                                                                             |
| 112 | if (error == 1){                                                                                                                         |
| 113 | alert(texto);                                                                                                                            |
| 115 | else {                                                                                                                                   |
| 269 | alert("Pongase en contacto con Recursos Humanos para dar de alta su codigo postal.");                                                    |
| 397 | if(dat01.length()&gt;1){                                                                                                                 |
| 398 | if(!dat01.equals(ztipo)){                                                                                                                |
| 402 | }else{                                                                                                                                   |
| 480 | if (zcount &gt; 0) {                                                                                                                     |
| 521 | &lt;%if (zcodposAct!=null){%&gt;                                                                                                         |
| 98  | expresión de cálculo/transformación: texto = texto + "\n La Via Publica es obligatoria.Modifique el texto.";                             |
| 103 | expresión de cálculo/transformación: texto = texto + "\n El numero de via es obligatorio.";                                              |
| 108 | expresión de cálculo/transformación: texto = texto + "\n El distrito postal es obligatorio. Es un numerico de 5 cifras";                 |
| 149 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 151 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 153 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 154 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 155 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                                          |
| 156 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 180 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 181 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 182 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 183 | expresión de cálculo/transformación: String zSSPIDSIGLADOMIC2 = zcomun2 + "SSP_ID_SIGLA_DOMIC";                                          |
| 184 | expresión de cálculo/transformación: String zSSPNSIGLADOMIC2 = zcomun2 + "SSP_N_SIGLA_DOMIC";                                            |
| 185 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 186 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 187 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 188 | expresión de cálculo/transformación: String zSTDIDCOUNTRY3 = zcomun3 + "STD_ID_COUNTRY";                                                 |
| 190 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 191 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 192 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";               |
| 193 | expresión de cálculo/transformación: String zSTDIDGEODIV4 = zcomun4 + "STD_ID_GEO_DIV";                                                  |
| 195 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 196 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 197 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 198 | expresión de cálculo/transformación: String zSTDNSUBGEODIV5 = zcomun5 + "STD_N_SUB_GEO_DIV";                                             |
| 199 | expresión de cálculo/transformación: String zSTDIDSUBGEODIV5 = zcomun5 + "STD_ID_SUB_GEO_DIV";                                           |
| 200 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 201 | expresión de cálculo/transformación: String zmove6 =znodo6 + ":" + znodo6 + "[FIRST]";                                                   |
| 202 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 203 | expresión de cálculo/transformación: String zSTDNGEOPLACE6 = zcomun6 + "STD_N_GEO_PLACE";                                                |
| 206 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 217 | expresión de cálculo/transformación: String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";                                             |
| 218 | expresión de cálculo/transformación: String zcomun8 = znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&amp;VAR.m4lix]" + ".";               |
| 219 | expresión de cálculo/transformación: String zmove8 = znodo8 + ":" + znodo8 + "[FIRST]";                                                  |
| 222 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 223 | expresión de cálculo/transformación: String zmetodocarga3 = zsubsesion + "!"+znodo7+".CARGA";                                            |
| 224 | expresión de cálculo/transformación: String zmetodocarga4 = zsubsesion + "!"+znodo8+".CARGA";                                            |
| 482 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp               |
| 127 | ../../sse_generico/espanol/generico_menusup.jsp       |
| 128 | ../../sse_generico/espanol/generico_links.jsp         |
| 514 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 518 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 7   | /css/estilo_sse.css                                             |
| 8   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/clase_val_entradas.js                                 |
| 12  | [host externo]/jquery-3.3.1.min.js                              |
| 349 | /iconos/noname_edificio_121_100.gif                             |
| 353 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 363 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   |
| 378 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 386 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 386 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 470 | javascript:comprobar();                                         |
| 471 | /iconos/icono_enviar_ess_36_36.gif                              |
| 489 | javascript:pendientes(                                          |
| 489 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 122 | sse_generico/generico_actualizar.jsp                            |
| 127 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 128 | ../../sse_generico/espanol/generico_links.jsp                   |
| 145 | /sse_g1/sse_g1_p1_mod.jsp                                       |
| 255 | ./cod_postal.jsp                                                |
| 514 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 518 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [sse_g1/espanol/sse_g1_p1_mod.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1_mod.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                           |
| --- | -------------------------------------------------- |
| 7   | Dirección fiscal                                   |
| 259 | Dirección fiscal                                   |
| 262 | Modifica tu dirección fiscal. Mis datos personales |
| 292 | Dirección fiscal                                   |
| 296 | * Via pública                                      |
| 297 | [valor dinámico] "&gt;                             |
| 309 | * Número                                           |
| 311 | Bloque Piso Escalera Puerta                        |
| 322 | País                                               |
| 323 | "&gt; "&gt;                                        |
| 336 | "&gt;                                              |
| 352 | "&gt;                                              |
| 367 | * Cód. postal                                      |
| 370 | * "&gt;                                            |
| 401 | Dirección fiscal                                   |
| 405 | ');"&gt;                                           |
| 408 | Via pública                                        |
| 412 | Número                                             |
| 413 | Bloque                                             |
| 414 | Piso                                               |
| 415 | Escalera                                           |
| 416 | Puerta                                             |
| 419 | País                                               |
| 424 | Cód. postal                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                              |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 261 | img     | alt=Dirección fiscal; title=Dirección fiscal; src=/iconos/noname_edificio_121_100.gif; width=100; height=100                                                                                                                                           |
| 265 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                      |
| 270 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                                              |
| 271 | input   | type=hidden; id=zpais; name=zpais; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                            |
| 272 | input   | type=hidden; id=zcom; name=zcom; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                              |
| 273 | input   | type=hidden; id=zpro; name=zpro; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                              |
| 274 | input   | type=hidden; id=zdireccion2; name=zdireccion2; value=&lt;%=zdireccion2%&gt;                                                                                                                                                                            |
| 275 | input   | type=hidden; id=tipo; name=tipo; value=&lt;%=ztipo%&gt;                                                                                                                                                                                                |
| 276 | input   | type=hidden; id=ntipo; name=ntipo; value=&lt;%=zntipo%&gt;                                                                                                                                                                                             |
| 277 | input   | type=hidden; id=numero; name=numero; value=&lt;%=znumero%&gt;                                                                                                                                                                                          |
| 278 | input   | type=hidden; id=bloque; name=bloque; value=&lt;%=zbloque%&gt;                                                                                                                                                                                          |
| 279 | input   | type=hidden; id=piso; name=piso; value=&lt;%=zpiso%&gt;                                                                                                                                                                                                |
| 280 | input   | type=hidden; id=escalera; name=escalera; value=&lt;%=zescalera%&gt;                                                                                                                                                                                    |
| 281 | input   | type=hidden; id=puerta; name=puerta; value=&lt;%=zpuerta%&gt;                                                                                                                                                                                          |
| 282 | input   | type=hidden; id=cpostal; name=cpostal; value=&lt;%=zcpostal%&gt;                                                                                                                                                                                       |
| 283 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                                        |
| 285 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                                        |
| 286 | input   | type=hidden; id=TAG; name=TAG; value=SSE_ADDRESS                                                                                                                                                                                                       |
| 287 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                                  |
| 288 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                                          |
| 289 | input   | type=hidden; id=NOD; name=NOD; value=SSE_ADDRESS                                                                                                                                                                                                       |
| 293 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                             |
| 293 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                                   |
| 298 | select  | id=SSP_ID_SIGLA_DOMIC; class=fuenteformulario150; name=SSP_ID_SIGLA_DOMIC; title=Escoge el tipo de via                                                                                                                                                 |
| 299 | option  | value=&lt;%=ztipo%&gt;                                                                                                                                                                                                                                 |
| 301 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                               |
| 305 | input   | class=fuenteformulario; type=text; id=STD_ADDRESS_LINE_1; name=STD_ADDRESS_LINE_1; size=40; maxlength=40; tabindex=1; title=Escribe el nombre de tu via pública; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zdireccion2)%&gt; |
| 310 | input   | class=fuenteformulario; type=text; id=SSP_NUM_VIA; name=SSP_NUM_VIA; size=5; maxlength=5; tabindex=2; title=Escribe el número de tu calle; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znumero)%&gt;                           |
| 312 | input   | class=fuenteformulario; tabindex=3; type=text; id=SSP_BLOQUE; name=SSP_BLOQUE; size=2; maxlength=5; title=Escribe el número de tu bloque; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zbloque)%&gt;                            |
| 314 | input   | class=fuenteformulario; tabindex=4; type=text; id=SSP_PISO; name=SSP_PISO; size=2; maxlength=10; title=Escribe tu piso; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpiso)%&gt;                                                |
| 316 | input   | class=fuenteformulario; tabindex=5; type=text; id=SSP_ESCALERA; name=SSP_ESCALERA; size=2; maxlength=10; title=Escribe tu escalera; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zescalera)%&gt;                                |
| 318 | input   | class=fuenteformulario; tabindex=6; type=text; id=SSP_PUERTA; name=SSP_PUERTA; size=2; maxlength=10; title=Escribe el número de tu puerta; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpuerta)%&gt;                           |
| 324 | select  | id=STD_ID_COUNTRY; class=fuenteformulario100; name=STD_ID_COUNTRY; title=Escoge el pais; onchange=filtrar(1)                                                                                                                                           |
| 325 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                               |
| 327 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                               |
| 337 | select  | id=STD_ID_GEO_DIV; class=fuenteformulario150; name=STD_ID_GEO_DIV; title=Escoge la comunidad; onchange=filtrar(2)                                                                                                                                      |
| 340 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                               |
| 353 | select  | id=STD_ID_SUB_GEO_DIV; class=fuenteformulario100; name=STD_ID_SUB_GEO_DIV; title=Escoge la provincia; onchange=filtrar(3)                                                                                                                              |
| 356 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                               |
| 369 | input   | class=fuenteformulario; type=text; id=SSP_DISTRIT_POSTAL; name=SSP_DISTRIT_POSTAL; size=5; maxlength=5; tabindex=7; title=Escribe tu código postal; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zcpostal)%&gt;                 |
| 372 | select  | id=STD_ID_GEO_PLACE; class=fuenteformulario150; name=STD_ID_GEO_PLACE; title=Escoge la población                                                                                                                                                       |
| 375 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                               |
| 387 | a       | href=javascript:comprobar();; tabindex=8; title=Enviar                                                                                                                                                                                                 |
| 388 | img     | id=enviar; alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                       |
| 405 | a       | title=Eliminar la petición; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                                                 |
| 405 | img     | class=tablamenuright; alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                              |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                      |
| --- | --------------- | ----------------------------------- |
| 29  | zdireccion2     | getParameter(request,"zdireccion2") |
| 30  | tipo            | getParameter(request,"tipo")        |
| 31  | ntipo           | getParameter(request,"ntipo")       |
| 32  | numero          | getParameter(request,"numero")      |
| 33  | bloque          | getParameter(request,"bloque")      |
| 34  | piso            | getParameter(request,"piso")        |
| 35  | escalera        | getParameter(request,"escalera")    |
| 36  | puerta          | getParameter(request,"puerta")      |
| 37  | cpostal         | getParameter(request,"cpostal")     |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                      |
| --- | ----------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 14  | zpais             | zobjtabla.m4paramvalor("zpais")                                                | zobjtabla.m4paramvalor("zpais")                                                                                                  |
| 15  | zcom              | zobjtabla.m4paramvalor("zcom")                                                 | zobjtabla.m4paramvalor("zcom")                                                                                                   |
| 16  | zpro              | zobjtabla.m4paramvalor("zpro")                                                 | zobjtabla.m4paramvalor("zpro")                                                                                                   |
| 29  | zdireccion2       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdireccion2")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zdireccion2")                                                          |
| 30  | ztipo             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"tipo")                                                                 |
| 31  | zntipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ntipo")              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ntipo")                                                                |
| 32  | znumero           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"numero")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"numero")                                                               |
| 33  | zbloque           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bloque")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"bloque")                                                               |
| 34  | zpiso             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"piso")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"piso")                                                                 |
| 35  | zescalera         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"escalera")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"escalera")                                                             |
| 36  | zpuerta           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puerta")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"puerta")                                                               |
| 37  | zcpostal          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"cpostal")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"cpostal")                                                              |
| 41  | estado            | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                 |
| 42  | zinicios          | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                               |
| 135 | zsubsesion        | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 136 | zmeta4object      | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 137 | znodo             | "SSE_ADDRESS"                                                                  | SSE_ADDRESS                                                                                                                      |
| 138 | znodo2            | "M4T_ID_SIGLA_DOMICI"                                                          | M4T_ID_SIGLA_DOMICI                                                                                                              |
| 139 | znodo3            | "M4T_COUNTRY"                                                                  | M4T_COUNTRY                                                                                                                      |
| 140 | znodo4            | "M4T_GEO_DIV"                                                                  | M4T_GEO_DIV                                                                                                                      |
| 141 | znodo5            | "M4T_SUB_GEO_DIV"                                                              | M4T_SUB_GEO_DIV                                                                                                                  |
| 142 | znodo6            | "M4T_GEO_PLACE"                                                                | M4T_GEO_PLACE                                                                                                                    |
| 144 | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                              |
| 145 | zventanas         | "4"                                                                            | 4                                                                                                                                |
| 146 | zvuelta           | 2                                                                              | 2                                                                                                                                |
| 147 | zdireccion        | "/sse_g1/sse_g1_p1_mod.jsp"                                                    | /sse_g1/sse_g1_p1_mod.jsp                                                                                                        |
| 148 | zestado           | "11"                                                                           | 11                                                                                                                               |
| 150 | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                             |
| 152 | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                            |
| 153 | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                               |
| 155 | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 156 | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 157 | zraiz             | znodo + ":" + zsubsesion + "!"+ znodo+"."                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.                                                                                     |
| 158 | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 159 | zPAISS            | zraiz+ "PAIS"                                                                  | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"PAIS"}                                                                             |
| 160 | zNOMBREPAIS       | zraiz+ "NOMBRE_PAIS"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PAIS"}                                                                      |
| 161 | zNOMBRECOMUNIDAD  | zraiz+ "NOMBRE_COMUNIDAD"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_COMUNIDAD"}                                                                 |
| 162 | zCOMUNIDAD        | zraiz+ "COMUNIDAD"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"COMUNIDAD"}                                                                        |
| 163 | zPROVINCIA        | zraiz+ "PROVINCIA"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"PROVINCIA"}                                                                        |
| 164 | zNOMBREPROVINCIA  | zraiz+ "NOMBRE_PROVINCIA"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PROVINCIA"}                                                                 |
| 165 | zPOBLACION        | zraiz+ "POBLACION"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"POBLACION"}                                                                        |
| 166 | zNOMBREPOBLACION  | zraiz+ "NOMBRE_POBLACION"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_POBLACION"}                                                                 |
| 168 | zSTDNGEOPLACE     | zcomun+ "STD_N_GEO_PLACE"                                                      | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                          |
| 169 | zSTDNSUBGEODIV    | zcomun+"STD_N_SUB_GEO_DIV"                                                     | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV                                            |
| 170 | zSTDNGEODIV       | zcomun+ "STD_N_GEO_DIV"                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                            |
| 171 | zSTDNCOUNTRY      | zcomun+ "STD_N_COUNTRY"                                                        | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                            |
| 172 | zORDINAL          | zcomun+ "ORDINAL"                                                              | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                                  |
| 173 | zNACCION          | zcomun+ "N_ACCION"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                                 |
| 174 | zSSPNSIGLADOMIC   | zcomun+ "SSP_N_SIGLA_DOMIC"                                                    | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                                        |
| 175 | zSTDADDRESSLINE1  | zcomun+ "STD_ADDRESS_LINE_1"                                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}                                       |
| 176 | zSSPNUMVIA        | zcomun+"SSP_NUM_VIA"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA                                                  |
| 177 | zSSPBLOQUE        | zcomun+ "SSP_BLOQUE"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                               |
| 178 | zSSPPISO          | zcomun+ "SSP_PISO"                                                             | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}                                                 |
| 179 | zSSPESCALERA      | zcomun+ "SSP_ESCALERA"                                                         | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}                                             |
| 180 | zSSPPUERTA        | zcomun+ "SSP_PUERTA"                                                           | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}                                               |
| 181 | zSSPDISTRITPOSTAL | zcomun+ "SSP_DISTRIT_POSTAL"                                                   | SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                       |
| 182 | zoutputdef2       | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                       |
| 183 | zmove2            | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                           |
| 184 | zcomun2           | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}                                             |
| 185 | zSSPIDSIGLADOMIC2 | zcomun2 + "SSP_ID_SIGLA_DOMIC"                                                 | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}                       |
| 186 | zSSPNSIGLADOMIC2  | zcomun2 + "SSP_N_SIGLA_DOMIC"                                                  | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                        |
| 187 | zoutputdef3       | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_COUNTRY{"[*]"}                                                                                               |
| 188 | zmove3            | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                           |
| 189 | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 190 | zSTDIDCOUNTRY3    | zcomun3 + "STD_ID_COUNTRY"                                                     | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                           |
| 191 | zSTDNCOUNTRY3     | zcomun3 +"STD_N_COUNTRY"                                                       | M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY                                                |
| 192 | zoutputdef4       | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_GEO_DIV{"[*]"}                                                                                               |
| 193 | zmove4            | znodo4 + ":" + znodo4 + "[FIRST]"                                              | M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                           |
| 194 | zcomun4           | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                             |
| 195 | zSTDIDGEODIV4     | zcomun4 + "STD_ID_GEO_DIV"                                                     | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}                                           |
| 196 | zSTDNGEODIV4      | zcomun4 +"STD_N_GEO_DIV"                                                       | M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                                |
| 197 | zoutputdef5       | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                           |
| 198 | zmove5            | znodo5 + ":" + znodo5 + "[FIRST]"                                              | M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                   |
| 199 | zcomun5           | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 200 | zSTDNSUBGEODIV5   | zcomun5 + "STD_N_SUB_GEO_DIV"                                                  | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                |
| 201 | zSTDIDSUBGEODIV5  | zcomun5 + "STD_ID_SUB_GEO_DIV"                                                 | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"}                               |
| 202 | zoutputdef6       | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                             |
| 203 | zmove6            | znodo6 + ":" + znodo6 + "[FIRST]"                                              | M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                       |
| 204 | zcomun6           | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}                                                         |
| 205 | zSTDNGEOPLACE6    | zcomun6 + "STD_N_GEO_PLACE"                                                    | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                      |
| 206 | zSTDIDGEOPLACE6   | zcomun6 +"STD_ID_GEO_PLACE"                                                    | M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_PLACE                                         |
| 208 | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}                                                                                      |
| 234 | zcount            | 0                                                                              | 0                                                                                                                                |
| 235 | zcounti           | 0                                                                              | 0                                                                                                                                |
| 236 | zcount2           | 0                                                                              | 0                                                                                                                                |
| 237 | zcount3           | 0                                                                              | 0                                                                                                                                |
| 238 | zcount4           | 0                                                                              | 0                                                                                                                                |
| 239 | zcount5           | 0                                                                              | 0                                                                                                                                |
| 240 | zcount6           | 0                                                                              | 0                                                                                                                                |
| 251 | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                          |
| 252 | zcountv2          | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                          |
| 253 | zcountv3          | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                          |
| 254 | zcountv4          | String.valueOf(zcount4)                                                        | String.valueOf(zcount4)                                                                                                          |
| 255 | zcountv5          | String.valueOf(zcount5)                                                        | String.valueOf(zcount5)                                                                                                          |
| 256 | zcountv6          | String.valueOf(zcount6)                                                        | String.valueOf(zcount6)                                                                                                          |
| 397 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                 |
| 398 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| 210 | m4:startpage | m4task=SSE_ADDRESS                                                                                                                                   |
| 210 | m4:beginjob  |                                                                                                                                                      |
| 211 | m4:datadef   | m4o=SSE_ADDRESS; m4name=SSE_ADDRESS                                                                                                                  |
| 219 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS{"!SSE_PRINCIPAL.CARGA"}                                                                                                 |
| 219 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                           |
| 220 | m4:outputdef | m4alias=SSE_ADDRESS                                                                                                                                  |
| 220 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 221 | m4:outputdef | m4alias=M4T_ID_SIGLA_DOMICI                                                                                                                          |
| 221 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                       |
| 222 | m4:outputdef | m4alias=M4T_COUNTRY                                                                                                                                  |
| 222 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_COUNTRY{"[*]"}                                                                                               |
| 223 | m4:outputdef | m4alias=M4T_GEO_DIV                                                                                                                                  |
| 223 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_GEO_DIV{"[*]"}                                                                                               |
| 224 | m4:outputdef | m4alias=M4T_SUB_GEO_DIV                                                                                                                              |
| 224 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                           |
| 225 | m4:outputdef | m4alias=M4T_GEO_PLACE                                                                                                                                |
| 225 | m4:param     | name=m4name0; value=SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                             |
| 226 | m4:endjob    |                                                                                                                                                      |
| 227 | m4:move      |                                                                                                                                                      |
| 227 | m4:param     | name=SSE_ADDRESS; value=SSE_ADDRESS{":"}SSE_ADDRESS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                    |
| 228 | m4:move      |                                                                                                                                                      |
| 228 | m4:param     | name=SSE_ADDRESS; value=M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                       |
| 229 | m4:move      |                                                                                                                                                      |
| 229 | m4:param     | name=SSE_ADDRESS; value=M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                       |
| 230 | m4:move      |                                                                                                                                                      |
| 230 | m4:param     | name=SSE_ADDRESS; value=M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                       |
| 231 | m4:move      |                                                                                                                                                      |
| 231 | m4:param     | name=SSE_ADDRESS; value=M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                               |
| 232 | m4:move      |                                                                                                                                                      |
| 232 | m4:param     | name=SSE_ADDRESS; value=M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                   |
| 300 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                |
| 301 | m4:item      | m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                      |
| 325 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS.{"NOMBRE_PAIS"}; htmlsafe=true                                                                    |
| 326 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                |
| 327 | m4:item      | m4name=M4T_COUNTRY{":"}SSE_ADDRESS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY; htmlsafe=true                                              |
| 336 | m4:label     | item=STD_ID_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 339 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv4).intValue()-1).toString()                                                                                |
| 340 | m4:item      | m4name=M4T_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; htmlsafe=true                                              |
| 352 | m4:label     | item=STD_ID_SUB_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                        |
| 355 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv5).intValue()-1).toString()                                                                                |
| 356 | m4:item      | m4name=M4T_SUB_GEO_DIV{":"}SSE_ADDRESS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                              |
| 370 | m4:label     | item=STD_ID_GEO_PLACE; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                          |
| 374 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv6).intValue()-1).toString()                                                                                |
| 375 | m4:item      | m4name=M4T_GEO_PLACE{":"}SSE_ADDRESS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                    |
| 402 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                            |
| 404 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                               |
| 409 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                                      |
| 409 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}; htmlsafe=true                                     |
| 412 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; htmlsafe=true                                                |
| 413 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                             |
| 414 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; htmlsafe=true                                               |
| 415 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; htmlsafe=true                                           |
| 416 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; htmlsafe=true                                             |
| 419 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                          |
| 420 | m4:label     | item=STD_ID_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                            |
| 420 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                          |
| 421 | m4:label     | item=STD_ID_SUB_GEO_DIV; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                        |
| 421 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}STD_N_SUB_GEO_DIV; htmlsafe=true                                          |
| 424 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                                     |
| 425 | m4:label     | item=STD_ID_GEO_PLACE; htmlsafe=true; outputdef=SSE_ADDRESS                                                                                          |
| 425 | m4:item      | m4name=SSE_ADDRESS{":"}SSE_ADDRESS{"!"}SSE_ADDRESS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                        |
| 436 | m4:endpage   |                                                                                                                                                      |

| L   | Operación        | Argumentos literales                 |
| --- | ---------------- | ------------------------------------ |
| 214 | setItem          | zsubsesion,znodo,"","PAIS",zpais     |
| 215 | setItem          | zsubsesion,znodo,"","COMUNIDAD",zcom |
| 216 | setItem          | zsubsesion,znodo,"","PROVINCIA",zpro |
| 243 | getCount         | znodo,zsubsesion,znodo               |
| 244 | getCountInClient | znodo,zsubsesion,znodo               |
| 245 | getCount         | znodo2,zsubsesion,znodo2             |
| 246 | getCount         | znodo3,zsubsesion,znodo3             |
| 247 | getCount         | znodo4,zsubsesion,znodo4             |
| 248 | getCount         | znodo5,zsubsesion,znodo5             |
| 249 | getCount         | znodo6,zsubsesion,znodo6             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 56  | filtrar    | num        |
| 94  | comprobar  |            |
| 124 | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 43  | if ((zdireccion2==null)){zdireccion2="";}                                                                                                |
| 44  | if ((ztipo==null)){ztipo="CL";}                                                                                                          |
| 45  | if ((zntipo==null)&#124;&#124;(zntipo.equals(""))){zntipo="Calle";}                                                                      |
| 46  | if ((znumero==null)){znumero="";}                                                                                                        |
| 47  | if ((zbloque==null)){zbloque="";}                                                                                                        |
| 48  | if ((zpiso==null)){ zpiso="";}                                                                                                           |
| 49  | if ((zescalera==null)){zescalera="";}                                                                                                    |
| 50  | if ((zpuerta==null)){zpuerta="";}                                                                                                        |
| 51  | if ((zcpostal==null)&#124;&#124;(zcpostal.equals(""))){zcpostal="";}                                                                     |
| 52  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 53  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 59  | if ((num=="2")&#124;&#124;(num=="3")) {                                                                                                  |
| 63  | if (num=="3") {                                                                                                                          |
| 67  | else{                                                                                                                                    |
| 91  | oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);                                         |
| 92  | onum = new m4objvalidacion('_alfanum','1','5','','El numero de via no puede ser nulo',false);                                            |
| 93  | ocp = new m4objvalidacion('_cp','','','','El distrito postal es un campo oligatorio numerico de 5 caracteres',false);                    |
| 98  | if (oalfanum.resultado == false){                                                                                                        |
| 103 | if (onum.resultado == false){                                                                                                            |
| 108 | if (ocp.resultado == false){                                                                                                             |
| 113 | if ((zloc == null)&#124;&#124;(zloc=="")){                                                                                               |
| 117 | if (error == 1){                                                                                                                         |
| 118 | alert(texto);                                                                                                                            |
| 120 | else {                                                                                                                                   |
| 396 | if (zcount &gt; 0) {                                                                                                                     |
| 99  | expresión de cálculo/transformación: texto = texto + "\n La Via Publica es obligatoria.Modifique el texto.";                             |
| 104 | expresión de cálculo/transformación: texto = texto + "\n El numero de via es obligatorio.";                                              |
| 109 | expresión de cálculo/transformación: texto = texto + "\n El distrito postal es obligatorio. Es un numerico de 5 cifras";                 |
| 114 | expresión de cálculo/transformación: texto = texto + "\n\n La poblacion es incorrecta";                                                  |
| 151 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 153 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 155 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 156 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                   |
| 157 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!"+ znodo+"." ;                                          |
| 158 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 182 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 183 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 184 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 185 | expresión de cálculo/transformación: String zSSPIDSIGLADOMIC2 = zcomun2 + "SSP_ID_SIGLA_DOMIC";                                          |
| 186 | expresión de cálculo/transformación: String zSSPNSIGLADOMIC2 = zcomun2 + "SSP_N_SIGLA_DOMIC";                                            |
| 187 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 188 | expresión de cálculo/transformación: String zmove3 =znodo3 + ":" + znodo3 + "[FIRST]";                                                   |
| 189 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 190 | expresión de cálculo/transformación: String zSTDIDCOUNTRY3 = zcomun3 + "STD_ID_COUNTRY";                                                 |
| 192 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 193 | expresión de cálculo/transformación: String zmove4 =znodo4 + ":" + znodo4 + "[FIRST]";                                                   |
| 194 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";               |
| 195 | expresión de cálculo/transformación: String zSTDIDGEODIV4 = zcomun4 + "STD_ID_GEO_DIV";                                                  |
| 197 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 198 | expresión de cálculo/transformación: String zmove5 =znodo5 + ":" + znodo5 + "[FIRST]";                                                   |
| 199 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 200 | expresión de cálculo/transformación: String zSTDNSUBGEODIV5 = zcomun5 + "STD_N_SUB_GEO_DIV";                                             |
| 201 | expresión de cálculo/transformación: String zSTDIDSUBGEODIV5 = zcomun5 + "STD_ID_SUB_GEO_DIV";                                           |
| 202 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 203 | expresión de cálculo/transformación: String zmove6 =znodo6 + ":" + znodo6 + "[FIRST]";                                                   |
| 204 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 205 | expresión de cálculo/transformación: String zSTDNGEOPLACE6 = zcomun6 + "STD_N_GEO_PLACE";                                                |
| 208 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 398 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp               |
| 132 | ../../sse_generico/espanol/generico_menusup.jsp       |
| 133 | ../../sse_generico/espanol/generico_links.jsp         |
| 430 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 434 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                             |
| 9   | /libreria/funciones_sse.js                                      |
| 11  | /libreria/clase_val_entradas.js                                 |
| 261 | /iconos/noname_edificio_121_100.gif                             |
| 265 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 270 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   |
| 285 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 293 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 293 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 387 | javascript:comprobar();                                         |
| 388 | /iconos/icono_enviar_ess_36_36.gif                              |
| 405 | javascript:pendientes(                                          |
| 405 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 127 | sse_generico/generico_actualizar.jsp                            |
| 132 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 133 | ../../sse_generico/espanol/generico_links.jsp                   |
| 147 | /sse_g1/sse_g1_p1_mod.jsp                                       |
| 430 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 434 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 127 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 128 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 491 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 495 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 8   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 12  | [host externo]/jquery-3.3.1.min.js                              | externa    | destino externo                                                                                                                                                                                    |
| COLL   | 335 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 340 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| COLL   | 355 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 363 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 447 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 466 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 122 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 127 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 128 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 145 | /sse_g1/sse_g1_p1_mod.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 254 | ./cod_postal.jsp                                                | física     | [sse_g1/cod_postal.jsp](sse_g1--cod_postal.md)                                                                                                                                                     |
| COLL   | 491 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 495 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 127 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 128 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 514 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 518 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 8   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 12  | [host externo]/jquery-3.3.1.min.js                              | externa    | destino externo                                                                                                                                                                                    |
| CYC    | 353 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 363 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| CYC    | 378 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 386 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 470 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 489 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 122 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 127 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 128 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 145 | /sse_g1/sse_g1_p1_mod.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 255 | ./cod_postal.jsp                                                | física     | [sse_g1/cod_postal.jsp](sse_g1--cod_postal.md)                                                                                                                                                     |
| CYC    | 514 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 518 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 127 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 128 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 491 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 495 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 8   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 12  | [host externo]/jquery-3.3.1.min.js                              | externa    | destino externo                                                                                                                                                                                    |
| IBER   | 335 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 340 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| IBER   | 355 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 363 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 447 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 466 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 122 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 127 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 128 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 145 | /sse_g1/sse_g1_p1_mod.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 254 | ./cod_postal.jsp                                                | física     | [sse_g1/cod_postal.jsp](sse_g1--cod_postal.md)                                                                                                                                                     |
| IBER   | 491 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 495 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 132 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 133 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 430 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 434 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 265 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 270 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11   | ausente    | P06                                                                                                                                                                                                |
| BASE   | 285 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 293 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 387 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 405 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 127 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 132 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 133 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 147 | /sse_g1/sse_g1_p1_mod.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 430 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 434 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_mod.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
