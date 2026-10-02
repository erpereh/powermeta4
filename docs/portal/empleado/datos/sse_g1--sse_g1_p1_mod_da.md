# Domicilio teletrabajo

Identificador: `sse_g1/sse_g1_p1_mod_da.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod_da.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod_da.jsp) | `8bafc7e9dc183da0a8bdcbf39b30e8e08fd6170296acd6337836aaa419d6d839` |    793 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod_da.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod_da.jsp)   | `8bafc7e9dc183da0a8bdcbf39b30e8e08fd6170296acd6337836aaa419d6d839` |    793 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod_da.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod_da.jsp) | `8bafc7e9dc183da0a8bdcbf39b30e8e08fd6170296acd6337836aaa419d6d839` |    793 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod_da.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod_da.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                |
| --- | ----------------------------------------------------------------------- |
| 8   | Domicilio teletrabajo                                                   |
| 440 | Domicilio teletrabajo                                                   |
| 444 | Da de alta o modifica tu domicilio de teletrabajo. Mis datos personales |
| 491 | Domicilio teletrabajo                                                   |
| 492 | Mis datos personales                                                    |
| 519 | * Via pública                                                           |
| 522 | [valor dinámico] [valor dinámico]                                       |
| 549 | * Número                                                                |
| 555 | Bloque Piso Escalera Puerta                                             |
| 567 | * Cod. postal                                                           |
| 574 | País                                                                    |
| 590 | Comunidad                                                               |
| 607 | Provincia                                                               |
| 622 | * Población                                                             |
| 638 | * Campos obligatorios                                                   |
| 732 | Domicilio teletrabajo actual                                            |
| 735 | Eliminar                                                                |
| 745 | Via pública                                                             |
| 746 | [valor dinámico] [valor dinámico]                                       |
| 751 | Número                                                                  |
| 752 | Bloque                                                                  |
| 753 | Piso                                                                    |
| 754 | Escalera                                                                |
| 755 | Puerta                                                                  |
| 760 | Cod. postal                                                             |
| 765 | País                                                                    |
| 766 | Comunidad                                                               |
| 767 | Provincia                                                               |
| 768 | Población                                                               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                                                          |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 443 | img     | alt=Domicilio teletrabajo; title=Domicilio teletrabajo; src=/iconos/noname_otras_direcciones_116_100.gif; width=100; height=100                                                                                                                                                                                                                                    |
| 448 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                                                                                                                  |
| 455 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                                                                                                                                                         |
| 456 | input   | type=hidden; id=zpais; name=zpais; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                        |
| 457 | input   | type=hidden; id=zcom; name=zcom; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                          |
| 458 | input   | type=hidden; id=zpro; name=zpro; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                          |
| 459 | input   | type=hidden; id=tipo; name=tipo; value=&lt;%=ztipo%&gt;                                                                                                                                                                                                                                                                                                            |
| 460 | input   | type=hidden; id=ntipo; name=ntipo; value=&lt;%=zntipo%&gt;                                                                                                                                                                                                                                                                                                         |
| 461 | input   | type=hidden; id=direc; name=direc; value=&lt;%=zdirec%&gt;                                                                                                                                                                                                                                                                                                         |
| 462 | input   | type=hidden; id=numero; name=numero; value=&lt;%=znumero%&gt;                                                                                                                                                                                                                                                                                                      |
| 463 | input   | type=hidden; id=bloque; name=bloque; value=&lt;%=zbloque%&gt;                                                                                                                                                                                                                                                                                                      |
| 464 | input   | type=hidden; id=piso; name=piso; value=&lt;%=zpiso%&gt;                                                                                                                                                                                                                                                                                                            |
| 465 | input   | type=hidden; id=escalera; name=escalera; value=&lt;%=zescalera%&gt;                                                                                                                                                                                                                                                                                                |
| 466 | input   | type=hidden; id=puerta; name=puerta; value=&lt;%=zpuerta%&gt;                                                                                                                                                                                                                                                                                                      |
| 467 | input   | type=hidden; id=cpostal; name=cpostal; value=&lt;%=zcpostal%&gt;                                                                                                                                                                                                                                                                                                   |
| 468 | input   | type=hidden; id=clase; name=clase; value=&lt;%=zclase%&gt;                                                                                                                                                                                                                                                                                                         |
| 469 | input   | type=hidden; id=nclase; name=nclase; value=&lt;%=znclase%&gt;                                                                                                                                                                                                                                                                                                      |
| 470 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                                                                                                                                                    |
| 473 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                                                                                                                                                    |
| 474 | input   | type=hidden; id=TAG; name=TAG; value=SSE_ADDRESS_OTROS                                                                                                                                                                                                                                                                                                             |
| 475 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                                                                                                                                              |
| 476 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                                                                                                                                                      |
| 477 | input   | type=hidden; id=NOD; name=NOD; value=SSE_ADDRESS_OTROS                                                                                                                                                                                                                                                                                                             |
| 484 | input   | type=hidden; name=STD_ID_LOCATION_TYPE; id=STD_ID_LOCATION_TYPE; value=&lt;%=var1%&gt;                                                                                                                                                                                                                                                                             |
| 485 | input   | type=hidden; name=STD_N_LOCATION_TYPE; id=STD_N_LOCATION_TYPE; value=&lt;%=var2%&gt;                                                                                                                                                                                                                                                                               |
| 493 | a       | title=Mis datos personales; style=padding-right: 6px;; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                                                                                                              |
| 495 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                                                                                                                                               |
| 523 | select  | id=SSP_ID_SIGLA_DOMIC; class=fuenteformulario150; name=SSP_ID_SIGLA_DOMIC; title=Escoge el tipo de via                                                                                                                                                                                                                                                             |
| 534 | option  | value=&lt;%=adat01%&gt;                                                                                                                                                                                                                                                                                                                                            |
| 538 | option  | value=&lt;%=adat01%&gt;; selected=presente; confirmar condición si dinámico                                                                                                                                                                                                                                                                                        |
| 545 | input   | type=text; class=fuenteformulario; id=STD_ADDRESS_LINE_1; name=STD_ADDRESS_LINE_1; size=40; maxlength=40; title=Escribe el nombre de tu calle; tabindex=1; value=&lt;%=zSTD_ADDRESS_LINE_1final%&gt;                                                                                                                                                               |
| 553 | input   | type=text; class=fuenteformulario; id=SSP_NUM_VIA; name=SSP_NUM_VIA; size=5; maxlength=5; title=Escribe el número de tu calle; value=&lt;%=zSSP_NUM_VIAfinal%&gt;; tabindex=2                                                                                                                                                                                      |
| 557 | input   | type=text; class=fuenteformulario; id=SSP_BLOQUE; name=SSP_BLOQUE; size=2; maxlength=5; title=Escribe el número de tu bloque; value=&lt;%=zSSP_BLOQUEfinal%&gt;; tabindex=3                                                                                                                                                                                        |
| 559 | input   | type=text; class=fuenteformulario; id=SSP_PISO; name=SSP_PISO; size=2; maxlength=10; title=Escribe tu piso; value=&lt;%=zSSP_PISOfinal%&gt;; tabindex=4                                                                                                                                                                                                            |
| 561 | input   | type=text; class=fuenteformulario; id=SSP_ESCALERA; name=SSP_ESCALERA; size=2; maxlength=10; title=Escribe tu escalera; value=&lt;%=zSSP_ESCALERAfinal%&gt;; tabindex=5                                                                                                                                                                                            |
| 563 | input   | type=text; class=fuenteformulario; id=SSP_PUERTA; name=SSP_PUERTA; size=2; maxlength=10; title=Escribe el número de tu puerta ; value=&lt;%=zSSP_PUERTAfinal%&gt;; tabindex=6                                                                                                                                                                                      |
| 569 | input   | type=text; class=fuenteformulario; id=SSP_DISTRIT_POSTAL; name=SSP_DISTRIT_POSTAL; size=5; maxlength=5; title=Escribe tu código postal; tabindex=10; value=&lt;%=zSSP_DISTRIT_POSTALfinal%&gt;; onblur=cargar_cp(document.getElementById('SSP_DISTRIT_POSTAL').value)                                                                                              |
| 570 | input   | name=button; onclick=cargar_cp(document.getElementById('SSP_DISTRIT_POSTAL').value); type=button; class=enterlogin; id=btnbusqueda; style=background-color: #DC0028; background-repeat: no-repeat; border: 1px solid #DC0028; border-radius: 4px; color: #FFFFFF; margin: 10px; max-width: 120px;min-height: 25px; min-width: 90px; cursor: pointer;; value=Cargar |
| 577 | input   | type=hidden; name=STD_ID_COUNTRY; id=STD_ID_COUNTRY                                                                                                                                                                                                                                                                                                                |
| 578 | input   | type=text; name=STD_N_COUNTRY; id=STD_N_COUNTRY; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                                                                                |
| 592 | input   | type=hidden; name=STD_ID_GEO_DIV; id=STD_ID_GEO_DIV                                                                                                                                                                                                                                                                                                                |
| 593 | input   | type=text; name=STD_N_GEO_DIV; id=STD_N_GEO_DIV; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                                                                                |
| 609 | input   | type=hidden; name=STD_ID_SUB_GEO_DIV; id=STD_ID_SUB_GEO_DIV                                                                                                                                                                                                                                                                                                        |
| 610 | input   | type=text; name=STD_N_SUB_GEO_DIV; id=STD_N_SUB_GEO_DIV; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                                                                        |
| 624 | input   | type=hidden; name=STD_ID_GEO_PLACE; id=STD_ID_GEO_PLACE                                                                                                                                                                                                                                                                                                            |
| 625 | input   | type=text; name=STD_N_GEO_PLACE; id=STD_N_GEO_PLACE; disabled=presente; confirmar condición si dinámico                                                                                                                                                                                                                                                            |
| 642 | a       | title=Enviar; href=javascript:comprobar();; style=padding-left: 30%;; tabindex=12                                                                                                                                                                                                                                                                                  |
| 643 | img     | id=enviar; alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                                                                                                                                                   |
| 736 | a       | title=Eliminar domicilio teletrabajo; style=padding-right: 6px;; class=tablamenuright; href=javascript:pendientes('&lt;%=zSTD_OR_ADDRESSfinal%&gt;');                                                                                                                                                                                                              |
| 738 | img     | alt=Eliminar domicilio teletrabajo; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                                                                                                                                                      |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable                   | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | -------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | zpais                      | zobjtabla.m4paramvalor("zpais")                                                | zobjtabla.m4paramvalor("zpais")                                                                                                              |
| 18  | zcom                       | zobjtabla.m4paramvalor("zcom")                                                 | zobjtabla.m4paramvalor("zcom")                                                                                                               |
| 19  | zpro                       | zobjtabla.m4paramvalor("zpro")                                                 | zobjtabla.m4paramvalor("zpro")                                                                                                               |
| 20  | zpar                       | zobjtabla.m4paramvalor("zpar")                                                 | zobjtabla.m4paramvalor("zpar")                                                                                                               |
| 21  | ztipo                      | zobjtabla.m4paramvalor("ztipo")                                                | zobjtabla.m4paramvalor("ztipo")                                                                                                              |
| 22  | zdirec                     | zobjtabla.m4paramvalor("direc")                                                | zobjtabla.m4paramvalor("direc")                                                                                                              |
| 23  | znumero                    | zobjtabla.m4paramvalor("numero")                                               | zobjtabla.m4paramvalor("numero")                                                                                                             |
| 24  | zbloque                    | zobjtabla.m4paramvalor("bloque")                                               | zobjtabla.m4paramvalor("bloque")                                                                                                             |
| 25  | zpiso                      | zobjtabla.m4paramvalor("piso")                                                 | zobjtabla.m4paramvalor("piso")                                                                                                               |
| 26  | zescalera                  | zobjtabla.m4paramvalor("escalera")                                             | zobjtabla.m4paramvalor("escalera")                                                                                                           |
| 27  | zpuerta                    | zobjtabla.m4paramvalor("puerta")                                               | zobjtabla.m4paramvalor("puerta")                                                                                                             |
| 28  | zcpostal                   | zobjtabla.m4paramvalor("cpostal")                                              | zobjtabla.m4paramvalor("cpostal")                                                                                                            |
| 29  | zntipo                     | zobjtabla.m4paramvalor("ntipo")                                                | zobjtabla.m4paramvalor("ntipo")                                                                                                              |
| 30  | zclase                     | zobjtabla.m4paramvalor("clase")                                                | zobjtabla.m4paramvalor("clase")                                                                                                              |
| 31  | znclase                    | zobjtabla.m4paramvalor("nclase")                                               | zobjtabla.m4paramvalor("nclase")                                                                                                             |
| 32  | estado                     | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                             |
| 33  | zinicios                   | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                           |
| 173 | zsubsesion                 | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 174 | zmeta4object               | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 175 | znodo                      | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 176 | znodo                      | "M4T_ADDRESS_OTROS"                                                            | M4T_ADDRESS_OTROS                                                                                                                            |
| 177 | znodo2                     | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                                         |
| 178 | znodo3                     | "M4T_ID_SIGLA_DOMICI"                                                          | M4T_ID_SIGLA_DOMICI                                                                                                                          |
| 179 | znodo4                     | "M4T_COUNTRY"                                                                  | M4T_COUNTRY                                                                                                                                  |
| 180 | znodo5                     | "M4T_SUB_GEO_DIV"                                                              | M4T_SUB_GEO_DIV                                                                                                                              |
| 181 | znodo6                     | "M4T_GEO_PLACE"                                                                | M4T_GEO_PLACE                                                                                                                                |
| 182 | znodo7                     | "M4T_GEO_DIV"                                                                  | M4T_GEO_DIV                                                                                                                                  |
| 183 | znodo8                     | "M4T_ADDRESS_OTROS"                                                            | M4T_ADDRESS_OTROS                                                                                                                            |
| 184 | ztipocarga                 | "SSE"                                                                          | SSE                                                                                                                                          |
| 185 | zventanas                  | "4"                                                                            | 4                                                                                                                                            |
| 186 | zvuelta                    | 2                                                                              | 2                                                                                                                                            |
| 187 | zdireccion                 | "sse_g1/sse_g1_p1_mod4.jsp"                                                    | sse_g1/sse_g1_p1_mod4.jsp                                                                                                                    |
| 188 | zestado                    | "11"                                                                           | 11                                                                                                                                           |
| 190 | zregistroinicial           | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 192 | zventana                   | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 193 | zregistrofinal             | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 194 | zoutputdef                 | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 195 | zmove                      | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | M4T_ADDRESS_OTROS{":"}M4T_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 196 | ziterator                  | znodo + ":" + zsubsesion + "!" + znodo                                         | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS                                                                                |
| 197 | zraiz                      | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}                                                                           |
| 198 | zcomun                     | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 199 | zPAISS                     | zraiz + "PAIS"                                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"PAIS"}                                                                   |
| 200 | zNOMBREPAIS                | zraiz + "NOMBRE_PAIS"                                                          | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"NOMBRE_PAIS"}                                                            |
| 201 | zNOMBRECOMUNIDAD           | zraiz + "NOMBRE_COMUNIDAD"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"NOMBRE_COMUNIDAD"}                                                       |
| 202 | zCOMUNIDAD                 | zraiz + "COMUNIDAD"                                                            | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"COMUNIDAD"}                                                              |
| 203 | zPROVINCIA                 | zraiz + "PROVINCIA"                                                            | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"PROVINCIA"}                                                              |
| 204 | zNOMBREPROVINCIA           | zraiz + "NOMBRE_PROVINCIA"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"NOMBRE_PROVINCIA"}                                                       |
| 205 | zPOBLACION                 | zraiz + "POBLACION"                                                            | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"POBLACION"}                                                              |
| 206 | zNOMBREPOBLACION           | zraiz + "NOMBRE_POBLACION"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"."}{"NOMBRE_POBLACION"}                                                       |
| 208 | zSTDNGEOPLACE              | zcomun+ "STD_N_GEO_PLACE"                                                      | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                    |
| 209 | zSTDNSUBGEODIV             | zcomun+ "STD_N_SUB_GEO_DIV"                                                    | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                  |
| 210 | zSTDNGEODIV                | zcomun+"STD_N_GEO_DIV"                                                         | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                          |
| 211 | zSTDNCOUNTRY               | zcomun+ "STD_N_COUNTRY"                                                        | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                      |
| 212 | zORDINAL                   | zcomun+ "ORDINAL"                                                              | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 213 | zNACCION                   | zcomun+ "N_ACCION"                                                             | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 214 | zSTDNLOCATIONTYPE          | zcomun+ "STD_N_LOCATION_TYPE"                                                  | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                |
| 215 | zSTDIDLOCATIONTYPE         | zcomun+ "STD_ID_LOCATION_TYPE"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                               |
| 216 | zSSPNSIGLADOMIC            | zcomun+"SSP_N_SIGLA_DOMIC"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC                                      |
| 217 | zSTDADDRESSLINE1           | zcomun+"STD_ADDRESS_LINE_1"                                                    | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1                                     |
| 218 | zSSPNUMVIA                 | zcomun+"SSP_NUM_VIA"                                                           | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA                                            |
| 219 | zSSPBLOQUE                 | zcomun+ "SSP_BLOQUE"                                                           | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                         |
| 220 | zSSPPISO                   | zcomun+"SSP_PISO"                                                              | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PISO                                               |
| 221 | zSSPESCALERA               | zcomun+"SSP_ESCALERA"                                                          | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_ESCALERA                                           |
| 222 | zSSPPUERTA                 | zcomun+"SSP_PUERTA"                                                            | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PUERTA                                             |
| 223 | zSSPDISTRITPOSTAL          | zcomun+ "SSP_DISTRIT_POSTAL"                                                   | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                 |
| 225 | zoutputdef2                | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                            |
| 226 | zmove2                     | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                                     |
| 227 | zcomun2                    | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 228 | zSTDNLOCATIONTYPE2         | zcomun2+ "STD_N_LOCATION_TYPE"                                                 | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                          |
| 229 | zSTDIDLOCATIONTYPE2        | zcomun2+ "STD_ID_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                         |
| 231 | zoutputdef3                | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                             |
| 232 | zmove3                     | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                                       |
| 233 | zcomun3                    | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 234 | zSSPIDSIGLADOMIC3          | zcomun3+ "SSP_ID_SIGLA_DOMIC"                                                  | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}                             |
| 235 | zSSPNSIGLADOMIC3           | zcomun3+"SSP_N_SIGLA_DOMIC"                                                    | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC                                  |
| 237 | zoutputdef4                | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[*]"}                                                                                                     |
| 238 | zmove4                     | znodo4 + ":" + znodo4+ "[FIRST]"                                               | M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                                       |
| 239 | zcomun4                    | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                                   |
| 240 | zSTDIDCOUNTRY4             | zcomun4+ "STD_ID_COUNTRY"                                                      | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                 |
| 241 | zSTDNCOUNTRY4              | zcomun4+"STD_N_COUNTRY"                                                        | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY                                                      |
| 243 | zoutputdef5                | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                                 |
| 244 | zmove5                     | znodo5 + ":" + znodo5+ "[FIRST]"                                               | M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                               |
| 245 | zcomun5                    | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 246 | zSTDNSUBGEODIV5            | zcomun5+ "STD_N_SUB_GEO_DIV"                                                   | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                      |
| 247 | zSTDIDSUBGEODIV5           | zcomun5+"STD_ID_SUB_GEO_DIV"                                                   | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_ID_SUB_GEO_DIV                                         |
| 249 | zoutputdef6                | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                                   |
| 250 | zmove6                     | znodo6 + ":" + znodo6+ "[FIRST]"                                               | M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                                   |
| 251 | zcomun6                    | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}                                                               |
| 253 | zSTDNGEOPLACE6             | zcomun6+ "STD_N_GEO_PLACE"                                                     | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                            |
| 254 | zSTDIDGEOPLACE6            | zcomun6+"STD_ID_GEO_PLACE"                                                     | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_PLACE                                               |
| 256 | zoutputdef7                | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[*]"}                                                                                                     |
| 257 | zmove7                     | znodo7 + ":" + znodo7+ "[FIRST]"                                               | M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                                       |
| 258 | zcomun7                    | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                                   |
| 259 | zSTDIDGEODIV7              | zcomun7+"STD_ID_GEO_DIV"                                                       | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_DIV                                                     |
| 260 | zSTDNGEODIV7               | zcomun7+"STD_N_GEO_DIV"                                                        | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                                      |
| 262 | zoutputdef8                | zsubsesion + "!" + znodo8 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[*]"}                                                                                               |
| 263 | zmove8                     | znodo8 + ":" + znodo8+ "[FIRST]"                                               | M4T_ADDRESS_OTROS{":"}M4T_ADDRESS_OTROS{"[FIRST]"}                                                                                           |
| 264 | zcomun8                    | znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&amp;VAR.m4lix]" + "."            | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 265 | zSCO_GB_ADDRESSact         | zcomun8 + "SCO_GB_ADDRESS"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_ADDRESS"}                                     |
| 266 | zSSP_BLOQUEact             | zcomun8 + "SSP_BLOQUE"                                                         | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                         |
| 267 | zSSP_DISTRIT_POSTALact     | zcomun8 + "SSP_DISTRIT_POSTAL"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                 |
| 268 | zSSP_ESCALERAact           | zcomun8 + "SSP_ESCALERA"                                                       | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}                                       |
| 269 | zSSP_ID_SIGLA_DOMICact     | zcomun8 + "SSP_ID_SIGLA_DOMIC"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}                                 |
| 270 | zSSP_NUM_VIAact            | zcomun8 + "SSP_NUM_VIA"                                                        | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_NUM_VIA"}                                        |
| 271 | zSSP_PISOact               | zcomun8 + "SSP_PISO"                                                           | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}                                           |
| 272 | zSSP_PUERTAact             | zcomun8 + "SSP_PUERTA"                                                         | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}                                         |
| 273 | zSTD_ADDRESS_LINE_1act     | zcomun8 + "STD_ADDRESS_LINE_1"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}                                 |
| 274 | zSTD_ADDRESS_LINE_2act     | zcomun8 + "STD_ADDRESS_LINE_2"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_2"}                                 |
| 275 | zSTD_ADDRESS_LINE_3act     | zcomun8 + "STD_ADDRESS_LINE_3"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_3"}                                 |
| 276 | zSTD_ADDRESS_LINE_4act     | zcomun8 + "STD_ADDRESS_LINE_4"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_4"}                                 |
| 277 | zSTD_DT_ENDact             | zcomun8 + "STD_DT_END"                                                         | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}                                         |
| 278 | zSTD_DT_STARTact           | zcomun8 + "STD_DT_START"                                                       | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}                                       |
| 279 | zSTD_ID_COUNTRYact         | zcomun8 + "STD_ID_COUNTRY"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                     |
| 280 | zSTD_ID_GEO_DIVact         | zcomun8 + "STD_ID_GEO_DIV"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}                                     |
| 281 | zSTD_ID_GEO_PLACEact       | zcomun8 + "STD_ID_GEO_PLACE"                                                   | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_PLACE"}                                   |
| 282 | zSTD_ID_LOCATION_TYPEact   | zcomun8 + "STD_ID_LOCATION_TYPE"                                               | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                               |
| 283 | zSTD_ID_PERSONact          | zcomun8 + "STD_ID_PERSON"                                                      | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                      |
| 284 | zSTD_ID_SUB_GEO_DIVact     | zcomun8 + "STD_ID_SUB_GEO_DIV"                                                 | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"}                                 |
| 285 | zSTD_OR_ADDRESSact         | zcomun8 + "STD_OR_ADDRESS"                                                     | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_ADDRESS"}                                     |
| 286 | zSTD_ZIP_CODEact           | zcomun8 + "STD_ZIP_CODE"                                                       | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ZIP_CODE"}                                       |
| 287 | zSSP_N_SIGLA_DOMICact      | zcomun8 + "SSP_N_SIGLA_DOMIC"                                                  | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}                                  |
| 288 | zSTD_N_COUNTRYact          | zcomun8 + "STD_N_COUNTRY"                                                      | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                      |
| 289 | zSTD_N_GEO_DIVact          | zcomun8 + "STD_N_GEO_DIV"                                                      | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                      |
| 290 | zSTD_N_GEO_PLACEact        | zcomun8 + "STD_N_GEO_PLACE"                                                    | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                    |
| 291 | zSTD_N_LOCATION_TYPEact    | zcomun8 + "STD_N_LOCATION_TYPE"                                                | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                |
| 292 | zSTD_N_SUB_GEO_DIVact      | zcomun8 + "STD_N_SUB_GEO_DIV"                                                  | M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                  |
| 294 | zSCO_GB_ADDRESSfinal       | ""                                                                             |                                                                                                                                              |
| 295 | zSSP_BLOQUEfinal           | ""                                                                             |                                                                                                                                              |
| 296 | zSSP_DISTRIT_POSTALfinal   | ""                                                                             |                                                                                                                                              |
| 297 | zSSP_ESCALERAfinal         | ""                                                                             |                                                                                                                                              |
| 298 | zSSP_ID_SIGLA_DOMICfinal   | ""                                                                             |                                                                                                                                              |
| 299 | zSSP_NUM_VIAfinal          | ""                                                                             |                                                                                                                                              |
| 300 | zSSP_PISOfinal             | ""                                                                             |                                                                                                                                              |
| 301 | zSSP_PUERTAfinal           | ""                                                                             |                                                                                                                                              |
| 302 | zSTD_ADDRESS_LINE_1final   | ""                                                                             |                                                                                                                                              |
| 303 | zSTD_ADDRESS_LINE_2final   | ""                                                                             |                                                                                                                                              |
| 304 | zSTD_ADDRESS_LINE_3final   | ""                                                                             |                                                                                                                                              |
| 305 | zSTD_ADDRESS_LINE_4final   | ""                                                                             |                                                                                                                                              |
| 306 | zSTD_DT_ENDfinal           | ""                                                                             |                                                                                                                                              |
| 307 | zSTD_DT_STARTfinal         | ""                                                                             |                                                                                                                                              |
| 308 | zSTD_ID_COUNTRYfinal       | ""                                                                             |                                                                                                                                              |
| 309 | zSTD_ID_GEO_DIVfinal       | ""                                                                             |                                                                                                                                              |
| 310 | zSTD_ID_GEO_PLACEfinal     | ""                                                                             |                                                                                                                                              |
| 311 | zSTD_ID_LOCATION_TYPEfinal | ""                                                                             |                                                                                                                                              |
| 312 | zSTD_ID_PERSONfinal        | ""                                                                             |                                                                                                                                              |
| 313 | zSTD_ID_SUB_GEO_DIVfinal   | ""                                                                             |                                                                                                                                              |
| 314 | zSTD_OR_ADDRESSfinal       | ""                                                                             |                                                                                                                                              |
| 315 | zSTD_ZIP_CODEfinal         | ""                                                                             |                                                                                                                                              |
| 316 | zSSP_N_SIGLA_DOMICfinal    | ""                                                                             |                                                                                                                                              |
| 317 | zSTD_N_COUNTRYfinal        | ""                                                                             |                                                                                                                                              |
| 318 | zSTD_N_GEO_DIVfinal        | ""                                                                             |                                                                                                                                              |
| 319 | zSTD_N_GEO_PLACEfinal      | ""                                                                             |                                                                                                                                              |
| 320 | zSTD_N_LOCATION_TYPEfinal  | ""                                                                             |                                                                                                                                              |
| 321 | zSTD_N_SUB_GEO_DIVfinal    | ""                                                                             |                                                                                                                                              |
| 323 | zmetodocarga               | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                         |
| 353 | zcount                     | 0                                                                              | 0                                                                                                                                            |
| 354 | zcounti                    | 0                                                                              | 0                                                                                                                                            |
| 355 | zcount2                    | 0                                                                              | 0                                                                                                                                            |
| 356 | zcount3                    | 0                                                                              | 0                                                                                                                                            |
| 357 | zcount4                    | 0                                                                              | 0                                                                                                                                            |
| 358 | zcount5                    | 0                                                                              | 0                                                                                                                                            |
| 359 | zcount6                    | 0                                                                              | 0                                                                                                                                            |
| 360 | zcount7                    | 0                                                                              | 0                                                                                                                                            |
| 361 | zcount8                    | 0                                                                              | 0                                                                                                                                            |
| 374 | zcountv                    | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 375 | zcountv2                   | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                                      |
| 376 | zcountv3                   | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                                      |
| 377 | zcountv4                   | String.valueOf(zcount4)                                                        | String.valueOf(zcount4)                                                                                                                      |
| 378 | zcountv5                   | String.valueOf(zcount5)                                                        | String.valueOf(zcount5)                                                                                                                      |
| 379 | zcountv6                   | String.valueOf(zcount6)                                                        | String.valueOf(zcount6)                                                                                                                      |
| 380 | zcountv7                   | String.valueOf(zcount7)                                                        | String.valueOf(zcount7)                                                                                                                      |
| 381 | zcountv8                   | String.valueOf(zcount8)                                                        | String.valueOf(zcount8)                                                                                                                      |
| 387 | zregistroinicials          | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 388 | zregistrofinals            | String.valueOf(zregistroinicial + zcount8 - 1)                                 | {String.valueOf(zregistroinicial}{zcount8 - 1)}                                                                                              |
| 389 | auxa                       | ""                                                                             |                                                                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 325 | m4:startpage | m4task=SSE_ADDRESS_OTROS                                                                                                                                         |
| 326 | m4:beginjob  |                                                                                                                                                                  |
| 326 | m4:datadef   | m4o=SSE_ADDRESS_OTROS; m4name=SSE_ADDRESS_OTROS                                                                                                                  |
| 334 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                    |
| 334 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 335 | m4:outputdef | m4alias=M4T_ADDRESS_OTROS                                                                                                                                        |
| 335 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 336 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                                     |
| 336 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                            |
| 337 | m4:outputdef | m4alias=M4T_ID_SIGLA_DOMICI                                                                                                                                      |
| 337 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                             |
| 338 | m4:outputdef | m4alias=M4T_COUNTRY                                                                                                                                              |
| 338 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[*]"}                                                                                                     |
| 339 | m4:outputdef | m4alias=M4T_SUB_GEO_DIV                                                                                                                                          |
| 339 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                                 |
| 340 | m4:outputdef | m4alias=M4T_GEO_PLACE                                                                                                                                            |
| 340 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                                   |
| 341 | m4:outputdef | m4alias=M4T_GEO_DIV                                                                                                                                              |
| 341 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[*]"}                                                                                                     |
| 342 | m4:outputdef | m4alias=M4T_ADDRESS_OTROS                                                                                                                                        |
| 342 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[*]"}                                                                                               |
| 343 | m4:endjob    |                                                                                                                                                                  |
| 344 | m4:move      |                                                                                                                                                                  |
| 344 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_ADDRESS_OTROS{":"}M4T_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 345 | m4:move      |                                                                                                                                                                  |
| 345 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                           |
| 346 | m4:move      |                                                                                                                                                                  |
| 346 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                             |
| 347 | m4:move      |                                                                                                                                                                  |
| 347 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                             |
| 348 | m4:move      |                                                                                                                                                                  |
| 348 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                     |
| 349 | m4:move      |                                                                                                                                                                  |
| 349 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                         |
| 350 | m4:move      |                                                                                                                                                                  |
| 350 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                             |
| 351 | m4:move      |                                                                                                                                                                  |
| 351 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_ADDRESS_OTROS{":"}M4T_ADDRESS_OTROS{"[FIRST]"}                                                                                 |
| 391 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcount8 - 1)}                                                                        |
| 392 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}; htmlsafe=true                       |
| 396 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_ADDRESS"}; htmlsafe=true                             |
| 397 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                 |
| 398 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                         |
| 399 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ESCALERA"}; htmlsafe=true                               |
| 400 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}; htmlsafe=true                         |
| 401 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_NUM_VIA"}; htmlsafe=true                                |
| 402 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PISO"}; htmlsafe=true                                   |
| 403 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_PUERTA"}; htmlsafe=true                                 |
| 404 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_1"}; htmlsafe=true                         |
| 405 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_2"}; htmlsafe=true                         |
| 406 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_3"}; htmlsafe=true                         |
| 407 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ADDRESS_LINE_4"}; htmlsafe=true                         |
| 408 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_END"}; htmlsafe=true                                 |
| 409 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_DT_START"}; htmlsafe=true                               |
| 410 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}; htmlsafe=true                             |
| 411 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}; htmlsafe=true                             |
| 412 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_PLACE"}; htmlsafe=true                           |
| 413 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}; htmlsafe=true                       |
| 414 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}; htmlsafe=true                              |
| 415 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"}; htmlsafe=true                         |
| 416 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_ADDRESS"}; htmlsafe=true                             |
| 417 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_ZIP_CODE"}; htmlsafe=true                               |
| 418 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_N_SIGLA_DOMIC"}; htmlsafe=true                          |
| 419 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                              |
| 420 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                              |
| 421 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                            |
| 422 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                        |
| 423 | m4:item      | var=; m4name=M4T_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}M4T_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                          |
| 479 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                            |
| 481 | m4:item      | var=var1; m4name=M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}; htmlsafe=true             |
| 482 | m4:item      | var=var2; m4name=M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true              |
| 526 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                            |
| 527 | m4:item      | var=adat01; m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}; htmlsafe=true               |
| 528 | m4:item      | var=adat02; m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC; htmlsafe=true                    |
| 783 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                 |
| --- | ---------------- | ------------------------------------ |
| 329 | setItem          | zsubsesion,znodo,"","PAIS",zpais     |
| 330 | setItem          | zsubsesion,znodo,"","COMUNIDAD",zcom |
| 331 | setItem          | zsubsesion,znodo,"","PROVINCIA",zpro |
| 364 | getCount         | znodo,zsubsesion,znodo               |
| 365 | getCountInClient | znodo,zsubsesion,znodo               |
| 366 | getCount         | znodo2,zsubsesion,znodo2             |
| 367 | getCount         | znodo3,zsubsesion,znodo3             |
| 368 | getCount         | znodo4,zsubsesion,znodo4             |
| 369 | getCount         | znodo5,zsubsesion,znodo5             |
| 370 | getCount         | znodo6,zsubsesion,znodo6             |
| 371 | getCount         | znodo7,zsubsesion,znodo7             |
| 372 | getCount         | znodo8,zsubsesion,znodo8             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 49  | filtrar    | num        |
| 100 | comprobar  |            |
| 132 | pendientes | ord        |
| 142 | cargar_cp  | codigo     |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | if ((ztipo==null)){ztipo="CL";}                                                                                                          |
| 35  | if ((zdirec==null)){zdirec="";}                                                                                                          |
| 36  | if ((znumero==null)){znumero="";}                                                                                                        |
| 37  | if ((zbloque==null)){zbloque="";}                                                                                                        |
| 38  | if ((zpiso==null)){zpiso="";}                                                                                                            |
| 39  | if ((zescalera==null)){zescalera="";}                                                                                                    |
| 40  | if ((zpuerta==null)){zpuerta="";}                                                                                                        |
| 41  | if ((zcpostal==null)){zcpostal="";}                                                                                                      |
| 42  | if ((zclase==null)){zclase="";}                                                                                                          |
| 43  | if ((znclase==null)){znclase="";}                                                                                                        |
| 44  | if ((zntipo==null)){zntipo="Calle";}                                                                                                     |
| 45  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 46  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 53  | if ((num=="2")&#124;&#124;(num=="3")) {                                                                                                  |
| 58  | if (num=="3") {                                                                                                                          |
| 63  | else{                                                                                                                                    |
| 96  | oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);                                         |
| 97  | onum = new m4objvalidacion('_alfanum','1','10','','El numero de via no puede ser nulo',false);                                           |
| 98  | ocp = new m4objvalidacion('_cp','','','','El distrito postal es un campo oligatorio numerico de 5 caracteres',false);                    |
| 104 | if (oalfanum.resultado == false){                                                                                                        |
| 109 | if (onum.resultado == false){                                                                                                            |
| 114 | if (ocp.resultado == false){                                                                                                             |
| 120 | if ((zloc == null)&#124;&#124;(zloc=="")){                                                                                               |
| 124 | if (error == 1){                                                                                                                         |
| 125 | alert(texto);                                                                                                                            |
| 127 | } else {                                                                                                                                 |
| 162 | alert("Pongase en contacto con Recursos Humanos para dar de alta su codigo postal.");                                                    |
| 386 | if (zcount8 &gt; 0) {                                                                                                                    |
| 394 | if (auxa.equals("8")) {                                                                                                                  |
| 483 | &lt;% if (var1.equals("8")){ %&gt;                                                                                                       |
| 531 | if(adat01.length()&gt;1){                                                                                                                |
| 532 | if(!adat01.equals(zSSP_ID_SIGLA_DOMICfinal)){                                                                                            |
| 536 | }else{                                                                                                                                   |
| 728 | if (zSTD_ID_LOCATION_TYPEfinal.equals("8")) {                                                                                            |
| 785 | &lt;%if(!zSSP_DISTRIT_POSTALfinal.equals("")){%&gt;                                                                                      |
| 105 | expresión de cálculo/transformación: texto = texto + "\n La Via Publica es obligatoria.Modifique el texto.";                             |
| 110 | expresión de cálculo/transformación: texto = texto + "\n El numero de via es obligatorio.";                                              |
| 115 | expresión de cálculo/transformación: texto = texto + "\n El distrito postal es obligatorio. Es un numerico de 5 cifras";                 |
| 121 | expresión de cálculo/transformación: texto = texto + "\n\n La poblacion es incorrecta";                                                  |
| 191 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 193 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 194 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 195 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 196 | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 197 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                        |
| 198 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 199 | expresión de cálculo/transformación: String zPAISS = zraiz + "PAIS";                                                                     |
| 200 | expresión de cálculo/transformación: String zNOMBREPAIS = zraiz + "NOMBRE_PAIS";                                                         |
| 201 | expresión de cálculo/transformación: String zNOMBRECOMUNIDAD = zraiz + "NOMBRE_COMUNIDAD";                                               |
| 202 | expresión de cálculo/transformación: String zCOMUNIDAD = zraiz + "COMUNIDAD";                                                            |
| 203 | expresión de cálculo/transformación: String zPROVINCIA = zraiz + "PROVINCIA";                                                            |
| 204 | expresión de cálculo/transformación: String zNOMBREPROVINCIA = zraiz + "NOMBRE_PROVINCIA";                                               |
| 205 | expresión de cálculo/transformación: String zPOBLACION = zraiz + "POBLACION";                                                            |
| 206 | expresión de cálculo/transformación: String zNOMBREPOBLACION = zraiz + "NOMBRE_POBLACION";                                               |
| 225 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 226 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 227 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 231 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 232 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                  |
| 233 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 237 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 238 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4+ "[FIRST]";                                                   |
| 239 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";               |
| 243 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 244 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5+ "[FIRST]";                                                   |
| 245 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 249 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 250 | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6+ "[FIRST]";                                                   |
| 251 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 256 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 257 | expresión de cálculo/transformación: String zmove7 = znodo7 + ":" + znodo7+ "[FIRST]";                                                   |
| 258 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";               |
| 262 | expresión de cálculo/transformación: String zoutputdef8 = zsubsesion + "!" + znodo8 + "[*]";                                             |
| 263 | expresión de cálculo/transformación: String zmove8 = znodo8 + ":" + znodo8+ "[FIRST]";                                                   |
| 264 | expresión de cálculo/transformación: String zcomun8 = znodo8 + ":" + zsubsesion + "!" + znodo8 + "[&amp;VAR.m4lix]" + ".";               |
| 265 | expresión de cálculo/transformación: String zSCO_GB_ADDRESSact = zcomun8 + "SCO_GB_ADDRESS";                                             |
| 266 | expresión de cálculo/transformación: String zSSP_BLOQUEact = zcomun8 + "SSP_BLOQUE";                                                     |
| 267 | expresión de cálculo/transformación: String zSSP_DISTRIT_POSTALact = zcomun8 + "SSP_DISTRIT_POSTAL";                                     |
| 268 | expresión de cálculo/transformación: String zSSP_ESCALERAact = zcomun8 + "SSP_ESCALERA";                                                 |
| 269 | expresión de cálculo/transformación: String zSSP_ID_SIGLA_DOMICact = zcomun8 + "SSP_ID_SIGLA_DOMIC";                                     |
| 270 | expresión de cálculo/transformación: String zSSP_NUM_VIAact = zcomun8 + "SSP_NUM_VIA";                                                   |
| 271 | expresión de cálculo/transformación: String zSSP_PISOact = zcomun8 + "SSP_PISO";                                                         |
| 272 | expresión de cálculo/transformación: String zSSP_PUERTAact = zcomun8 + "SSP_PUERTA";                                                     |
| 273 | expresión de cálculo/transformación: String zSTD_ADDRESS_LINE_1act = zcomun8 + "STD_ADDRESS_LINE_1";                                     |
| 274 | expresión de cálculo/transformación: String zSTD_ADDRESS_LINE_2act = zcomun8 + "STD_ADDRESS_LINE_2";                                     |
| 275 | expresión de cálculo/transformación: String zSTD_ADDRESS_LINE_3act = zcomun8 + "STD_ADDRESS_LINE_3";                                     |
| 276 | expresión de cálculo/transformación: String zSTD_ADDRESS_LINE_4act = zcomun8 + "STD_ADDRESS_LINE_4";                                     |
| 277 | expresión de cálculo/transformación: String zSTD_DT_ENDact = zcomun8 + "STD_DT_END";                                                     |
| 278 | expresión de cálculo/transformación: String zSTD_DT_STARTact = zcomun8 + "STD_DT_START";                                                 |
| 279 | expresión de cálculo/transformación: String zSTD_ID_COUNTRYact = zcomun8 + "STD_ID_COUNTRY";                                             |
| 280 | expresión de cálculo/transformación: String zSTD_ID_GEO_DIVact = zcomun8 + "STD_ID_GEO_DIV";                                             |
| 281 | expresión de cálculo/transformación: String zSTD_ID_GEO_PLACEact = zcomun8 + "STD_ID_GEO_PLACE";                                         |
| 282 | expresión de cálculo/transformación: String zSTD_ID_LOCATION_TYPEact = zcomun8 + "STD_ID_LOCATION_TYPE";                                 |
| 283 | expresión de cálculo/transformación: String zSTD_ID_PERSONact = zcomun8 + "STD_ID_PERSON";                                               |
| 284 | expresión de cálculo/transformación: String zSTD_ID_SUB_GEO_DIVact = zcomun8 + "STD_ID_SUB_GEO_DIV";                                     |
| 285 | expresión de cálculo/transformación: String zSTD_OR_ADDRESSact = zcomun8 + "STD_OR_ADDRESS";                                             |
| 286 | expresión de cálculo/transformación: String zSTD_ZIP_CODEact = zcomun8 + "STD_ZIP_CODE";                                                 |
| 287 | expresión de cálculo/transformación: String zSSP_N_SIGLA_DOMICact = zcomun8 + "SSP_N_SIGLA_DOMIC";                                       |
| 288 | expresión de cálculo/transformación: String zSTD_N_COUNTRYact = zcomun8 + "STD_N_COUNTRY";                                               |
| 289 | expresión de cálculo/transformación: String zSTD_N_GEO_DIVact = zcomun8 + "STD_N_GEO_DIV";                                               |
| 290 | expresión de cálculo/transformación: String zSTD_N_GEO_PLACEact = zcomun8 + "STD_N_GEO_PLACE";                                           |
| 291 | expresión de cálculo/transformación: String zSTD_N_LOCATION_TYPEact = zcomun8 + "STD_N_LOCATION_TYPE";                                   |
| 292 | expresión de cálculo/transformación: String zSTD_N_SUB_GEO_DIVact = zcomun8 + "STD_N_SUB_GEO_DIV";                                       |
| 323 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 388 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcount8 - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp               |
| 170 | ../../sse_generico/espanol/generico_menusup.jsp       |
| 171 | ../../sse_generico/espanol/generico_links.jsp         |
| 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 779 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 13  | [host externo]/jquery-3.3.1.min.js                              |
| 443 | /iconos/noname_otras_direcciones_116_100.gif                    |
| 448 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 455 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  |
| 473 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 493 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 495 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 642 | javascript:comprobar();                                         |
| 643 | /iconos/icono_enviar_ess_36_36.gif                              |
| 736 | javascript:pendientes(                                          |
| 738 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 136 | sse_generico/generico_actualizar.jsp                            |
| 148 | ./cod_postal.jsp                                                |
| 170 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 171 | ../../sse_generico/espanol/generico_links.jsp                   |
| 187 | sse_g1/sse_g1_p1_mod4.jsp                                       |
| 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 779 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 170 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 171 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 779 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 13  | [host externo]/jquery-3.3.1.min.js                              | externa    | destino externo                                                                                                                                                                                    |
| COLL   | 448 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 455 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 473 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 493 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 642 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 736 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 136 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 148 | ./cod_postal.jsp                                                | física     | [sse_g1/cod_postal.jsp](sse_g1--cod_postal.md)                                                                                                                                                     |
| COLL   | 170 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 171 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 187 | sse_g1/sse_g1_p1_mod4.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 779 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 170 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 171 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 779 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 13  | [host externo]/jquery-3.3.1.min.js                              | externa    | destino externo                                                                                                                                                                                    |
| CYC    | 448 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 455 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| CYC    | 473 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 493 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 642 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 736 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 136 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 148 | ./cod_postal.jsp                                                | física     | [sse_g1/cod_postal.jsp](sse_g1--cod_postal.md)                                                                                                                                                     |
| CYC    | 170 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 171 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 187 | sse_g1/sse_g1_p1_mod4.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 779 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 170 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 171 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 779 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 13  | [host externo]/jquery-3.3.1.min.js                              | externa    | destino externo                                                                                                                                                                                    |
| IBER   | 448 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 455 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 473 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 493 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 642 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 736 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 136 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 148 | ./cod_postal.jsp                                                | física     | [sse_g1/cod_postal.jsp](sse_g1--cod_postal.md)                                                                                                                                                     |
| IBER   | 170 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 171 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 187 | sse_g1/sse_g1_p1_mod4.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 772 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 779 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_mod_da.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
