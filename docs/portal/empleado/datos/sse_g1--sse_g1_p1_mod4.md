# Otras direcciones

Identificador: `sse_g1/sse_g1_p1_mod4.jsp`. Perfil: **empleado**. Dominio: **datos**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                             | Solo en BASE                                              |
| ------ | --------- | ------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| COLL   | espanol   | idéntica            | sin diferencia en estos identificadores                      | sin diferencia en estos identificadores                   |
| CYC    | espanol   | contenido diferente | m4:exec:CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA_CV"} | m4:exec:CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA"} |
| IBER   | espanol   | idéntica            | sin diferencia en estos identificadores                      | sin diferencia en estos identificadores                   |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod4.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod4.jsp) | `9b3d16fee456ace2d82698c1b022e706175efc63feac7e75f4f2b830c5f638fb` |    471 |
| CYC / español     | [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod4.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod4.jsp)   | `fde322747b0975666192dc11f0e36b6ef8171d56973ab8296c8274f997dc3469` |    471 |
| IBER / español    | [m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod4.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g1/espanol/sse_g1_p1_mod4.jsp) | `9b3d16fee456ace2d82698c1b022e706175efc63feac7e75f4f2b830c5f638fb` |    471 |
| BASE / español    | [sse_g1/espanol/sse_g1_p1_mod4.jsp](../../../../clon_portal/portal/sse_g1/espanol/sse_g1_p1_mod4.jsp)                             | `9b3d16fee456ace2d82698c1b022e706175efc63feac7e75f4f2b830c5f638fb` |    471 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod4.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g1/espanol/sse_g1_p1_mod4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                          |
| --- | ----------------------------------------------------------------- |
| 8   | Otras direcciones                                                 |
| 273 | Otras direcciones                                                 |
| 276 | Da de alta o modifica tus otras direcciones. Mis datos personales |
| 308 | Dirección                                                         |
| 314 | Tipo de dirección                                                 |
| 315 | [valor dinámico] "&gt;                                            |
| 327 | * Via pública                                                     |
| 328 | [valor dinámico] "&gt;                                            |
| 339 | * Número                                                          |
| 343 | Bloque Piso Escalera Puerta                                       |
| 351 | País                                                              |
| 352 | "&gt;                                                             |
| 365 | Comunidad "&gt;                                                   |
| 379 | Provincia "&gt;                                                   |
| 394 | * Cod. postal                                                     |
| 398 | * Población "&gt;                                                 |
| 427 | Otros domicilos                                                   |
| 433 | ');"&gt;                                                          |
| 440 | Via pública                                                       |
| 443 | Número                                                            |
| 444 | Bloque                                                            |
| 445 | Piso                                                              |
| 446 | Escalera                                                          |
| 447 | Puerta                                                            |
| 450 | Cod. postal                                                       |
| 451 | Población                                                         |
| 454 | Provincia                                                         |
| 455 | Comunidad                                                         |
| 456 | País                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                   |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 275 | img     | alt=Otras direcciones; title=Otras direcciones; src=/iconos/noname_otras_direcciones_116_100.gif; width=116; height=100                                                                                                                     |
| 279 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                           |
| 284 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                                  |
| 285 | input   | type=hidden; id=zpais; name=zpais; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                 |
| 286 | input   | type=hidden; id=zcom; name=zcom; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                   |
| 287 | input   | type=hidden; id=zpro; name=zpro; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                   |
| 288 | input   | type=hidden; id=tipo; name=tipo; value=&lt;%=ztipo%&gt;                                                                                                                                                                                     |
| 289 | input   | type=hidden; id=ntipo; name=ntipo; value=&lt;%=zntipo%&gt;                                                                                                                                                                                  |
| 290 | input   | type=hidden; id=direc; name=direc; value=&lt;%=zdirec%&gt;                                                                                                                                                                                  |
| 291 | input   | type=hidden; id=numero; name=numero; value=&lt;%=znumero%&gt;                                                                                                                                                                               |
| 292 | input   | type=hidden; id=bloque; name=bloque; value=&lt;%=zbloque%&gt;                                                                                                                                                                               |
| 293 | input   | type=hidden; id=piso; name=piso; value=&lt;%=zpiso%&gt;                                                                                                                                                                                     |
| 294 | input   | type=hidden; id=escalera; name=escalera; value=&lt;%=zescalera%&gt;                                                                                                                                                                         |
| 295 | input   | type=hidden; id=puerta; name=puerta; value=&lt;%=zpuerta%&gt;                                                                                                                                                                               |
| 296 | input   | type=hidden; id=cpostal; name=cpostal; value=&lt;%=zcpostal%&gt;                                                                                                                                                                            |
| 297 | input   | type=hidden; id=clase; name=clase; value=&lt;%=zclase%&gt;                                                                                                                                                                                  |
| 298 | input   | type=hidden; id=nclase; name=nclase; value=&lt;%=znclase%&gt;                                                                                                                                                                               |
| 299 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                             |
| 301 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                             |
| 302 | input   | type=hidden; id=TAG; name=TAG; value=SSE_ADDRESS_OTROS                                                                                                                                                                                      |
| 303 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                       |
| 304 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                               |
| 305 | input   | type=hidden; id=NOD; name=NOD; value=SSE_ADDRESS_OTROS                                                                                                                                                                                      |
| 309 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                  |
| 310 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                        |
| 316 | select  | id=STD_ID_LOCATION_TYPE; class=fuenteformulario150; name=STD_ID_LOCATION_TYPE; title=Escoge el tipo de dirección                                                                                                                            |
| 318 | option  | value=&lt;%=zclase%&gt;                                                                                                                                                                                                                     |
| 321 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 329 | select  | id=SSP_ID_SIGLA_DOMIC; class=fuenteformulario150; name=SSP_ID_SIGLA_DOMIC; title=Escoge el tipo de via                                                                                                                                      |
| 330 | option  | value=&lt;%=ztipo%&gt;                                                                                                                                                                                                                      |
| 332 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 335 | input   | type=text; class=fuenteformulario; id=STD_ADDRESS_LINE_1; name=STD_ADDRESS_LINE_1; size=40; maxlength=40; title=Escribe el nombre de tu calle; tabindex=1; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zdirec)%&gt; |
| 341 | input   | type=text; class=fuenteformulario; id=SSP_NUM_VIA; name=SSP_NUM_VIA; size=5; maxlength=5; title=Escribe el número de tu calle; tabindex=2; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znumero)%&gt;                |
| 344 | input   | type=text; class=fuenteformulario; id=SSP_BLOQUE; name=SSP_BLOQUE; size=2; maxlength=5; title=Escribe el número de tu bloque; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zbloque)%&gt;; tabindex=3                 |
| 345 | input   | type=text; class=fuenteformulario; id=SSP_PISO; name=SSP_PISO; size=2; maxlength=10; title=Escribe tu piso; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpiso)%&gt;; tabindex=4                                     |
| 346 | input   | type=text; class=fuenteformulario; id=SSP_ESCALERA; name=SSP_ESCALERA; size=2; maxlength=10; title=Escribe tu escalera; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zescalera)%&gt;; tabindex=5                     |
| 347 | input   | type=text; class=fuenteformulario; id=SSP_PUERTA; name=SSP_PUERTA; size=2; maxlength=10; title=Escribe el número de tu puerta ; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpuerta)%&gt;; tabindex=6               |
| 353 | select  | id=STD_ID_COUNTRY; class=fuenteformulario100; name=STD_ID_COUNTRY; title=Escoge el pais; onchange=filtrar(1); tabindex=7                                                                                                                    |
| 356 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 366 | select  | id=STD_ID_GEO_DIV; class=fuenteformulario150; name=STD_ID_GEO_DIV; title=Escoge la comunidad; onchange=filtrar(2); tabindex=8                                                                                                               |
| 369 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 380 | select  | id=STD_ID_SUB_GEO_DIV; class=fuenteformulario100; name=STD_ID_SUB_GEO_DIV; title=Escoge la provincia; onchange=filtrar(3); tabindex=9                                                                                                       |
| 383 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 396 | input   | type=text; class=fuenteformulario; id=SSP_DISTRIT_POSTAL; name=SSP_DISTRIT_POSTAL; size=5; maxlength=5; title=Escribe tu código postal; tabindex=10; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zcpostal)%&gt;     |
| 399 | select  | id=STD_ID_GEO_PLACE; class=fuenteformulario150; name=STD_ID_GEO_PLACE; title=Escoge la población; tabindex=11                                                                                                                               |
| 402 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 414 | a       | title=Enviar; href=javascript:comprobar();; tabindex=12                                                                                                                                                                                     |
| 415 | img     | id=enviar; alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                            |
| 434 | a       | title=Eliminar la petición; class=tablamenuright; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                |
| 435 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                                         |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | zpais               | zobjtabla.m4paramvalor("zpais")                                                | zobjtabla.m4paramvalor("zpais")                                                                                                              |
| 17  | zcom                | zobjtabla.m4paramvalor("zcom")                                                 | zobjtabla.m4paramvalor("zcom")                                                                                                               |
| 18  | zpro                | zobjtabla.m4paramvalor("zpro")                                                 | zobjtabla.m4paramvalor("zpro")                                                                                                               |
| 19  | zpar                | zobjtabla.m4paramvalor("zpar")                                                 | zobjtabla.m4paramvalor("zpar")                                                                                                               |
| 20  | ztipo               | zobjtabla.m4paramvalor("ztipo")                                                | zobjtabla.m4paramvalor("ztipo")                                                                                                              |
| 21  | zdirec              | zobjtabla.m4paramvalor("direc")                                                | zobjtabla.m4paramvalor("direc")                                                                                                              |
| 22  | znumero             | zobjtabla.m4paramvalor("numero")                                               | zobjtabla.m4paramvalor("numero")                                                                                                             |
| 23  | zbloque             | zobjtabla.m4paramvalor("bloque")                                               | zobjtabla.m4paramvalor("bloque")                                                                                                             |
| 24  | zpiso               | zobjtabla.m4paramvalor("piso")                                                 | zobjtabla.m4paramvalor("piso")                                                                                                               |
| 25  | zescalera           | zobjtabla.m4paramvalor("escalera")                                             | zobjtabla.m4paramvalor("escalera")                                                                                                           |
| 26  | zpuerta             | zobjtabla.m4paramvalor("puerta")                                               | zobjtabla.m4paramvalor("puerta")                                                                                                             |
| 27  | zcpostal            | zobjtabla.m4paramvalor("cpostal")                                              | zobjtabla.m4paramvalor("cpostal")                                                                                                            |
| 28  | zntipo              | zobjtabla.m4paramvalor("ntipo")                                                | zobjtabla.m4paramvalor("ntipo")                                                                                                              |
| 29  | zclase              | zobjtabla.m4paramvalor("clase")                                                | zobjtabla.m4paramvalor("clase")                                                                                                              |
| 30  | znclase             | zobjtabla.m4paramvalor("nclase")                                               | zobjtabla.m4paramvalor("nclase")                                                                                                             |
| 31  | estado              | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                             |
| 32  | zinicios            | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                           |
| 131 | zsubsesion          | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 132 | zmeta4object        | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 133 | znodo               | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 134 | znodo2              | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                                         |
| 135 | znodo3              | "M4T_ID_SIGLA_DOMICI"                                                          | M4T_ID_SIGLA_DOMICI                                                                                                                          |
| 136 | znodo4              | "M4T_COUNTRY"                                                                  | M4T_COUNTRY                                                                                                                                  |
| 137 | znodo7              | "M4T_GEO_DIV"                                                                  | M4T_GEO_DIV                                                                                                                                  |
| 138 | znodo5              | "M4T_SUB_GEO_DIV"                                                              | M4T_SUB_GEO_DIV                                                                                                                              |
| 139 | znodo6              | "M4T_GEO_PLACE"                                                                | M4T_GEO_PLACE                                                                                                                                |
| 140 | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                          |
| 141 | zventanas           | "4"                                                                            | 4                                                                                                                                            |
| 142 | zvuelta             | 2                                                                              | 2                                                                                                                                            |
| 143 | zdireccion          | "sse_g1/sse_g1_p1_mod4.jsp"                                                    | sse_g1/sse_g1_p1_mod4.jsp                                                                                                                    |
| 144 | zestado             | "11"                                                                           | 11                                                                                                                                           |
| 146 | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 148 | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 149 | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 150 | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 151 | zmove               | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 152 | ziterator           | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS                                                                                |
| 153 | zraiz               | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}                                                                           |
| 154 | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 155 | zPAISS              | zraiz + "PAIS"                                                                 | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"PAIS"}                                                                   |
| 156 | zNOMBREPAIS         | zraiz + "NOMBRE_PAIS"                                                          | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_PAIS"}                                                            |
| 157 | zNOMBRECOMUNIDAD    | zraiz + "NOMBRE_COMUNIDAD"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_COMUNIDAD"}                                                       |
| 158 | zCOMUNIDAD          | zraiz + "COMUNIDAD"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"COMUNIDAD"}                                                              |
| 159 | zPROVINCIA          | zraiz + "PROVINCIA"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"PROVINCIA"}                                                              |
| 160 | zNOMBREPROVINCIA    | zraiz + "NOMBRE_PROVINCIA"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_PROVINCIA"}                                                       |
| 161 | zPOBLACION          | zraiz + "POBLACION"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"POBLACION"}                                                              |
| 162 | zNOMBREPOBLACION    | zraiz + "NOMBRE_POBLACION"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_POBLACION"}                                                       |
| 164 | zSTDNGEOPLACE       | zcomun+ "STD_N_GEO_PLACE"                                                      | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                    |
| 165 | zSTDNSUBGEODIV      | zcomun+ "STD_N_SUB_GEO_DIV"                                                    | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                  |
| 166 | zSTDNGEODIV         | zcomun+"STD_N_GEO_DIV"                                                         | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                          |
| 167 | zSTDNCOUNTRY        | zcomun+ "STD_N_COUNTRY"                                                        | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                      |
| 168 | zORDINAL            | zcomun+ "ORDINAL"                                                              | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 169 | zNACCION            | zcomun+ "N_ACCION"                                                             | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 170 | zSTDNLOCATIONTYPE   | zcomun+ "STD_N_LOCATION_TYPE"                                                  | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                |
| 171 | zSSPNSIGLADOMIC     | zcomun+"SSP_N_SIGLA_DOMIC"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC                                      |
| 172 | zSTDADDRESSLINE1    | zcomun+"STD_ADDRESS_LINE_1"                                                    | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1                                     |
| 173 | zSSPNUMVIA          | zcomun+"SSP_NUM_VIA"                                                           | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA                                            |
| 174 | zSSPBLOQUE          | zcomun+ "SSP_BLOQUE"                                                           | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                         |
| 175 | zSSPPISO            | zcomun+"SSP_PISO"                                                              | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PISO                                               |
| 176 | zSSPESCALERA        | zcomun+"SSP_ESCALERA"                                                          | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_ESCALERA                                           |
| 177 | zSSPPUERTA          | zcomun+"SSP_PUERTA"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PUERTA                                             |
| 178 | zSSPDISTRITPOSTAL   | zcomun+ "SSP_DISTRIT_POSTAL"                                                   | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                 |
| 180 | zoutputdef2         | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                            |
| 181 | zmove2              | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                                     |
| 182 | zcomun2             | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 183 | zSTDNLOCATIONTYPE2  | zcomun2+ "STD_N_LOCATION_TYPE"                                                 | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                          |
| 184 | zSTDIDLOCATIONTYPE2 | zcomun2+ "STD_ID_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                         |
| 186 | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                             |
| 187 | zmove3              | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                                       |
| 188 | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 189 | zSSPIDSIGLADOMIC3   | zcomun3+ "SSP_ID_SIGLA_DOMIC"                                                  | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}                             |
| 190 | zSSPNSIGLADOMIC3    | zcomun3+"SSP_N_SIGLA_DOMIC"                                                    | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC                                  |
| 192 | zoutputdef4         | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[*]"}                                                                                                     |
| 193 | zmove4              | znodo4 + ":" + znodo4+ "[FIRST]"                                               | M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                                       |
| 194 | zcomun4             | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                                   |
| 195 | zSTDIDCOUNTRY4      | zcomun4+ "STD_ID_COUNTRY"                                                      | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                 |
| 196 | zSTDNCOUNTRY4       | zcomun4+"STD_N_COUNTRY"                                                        | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY                                                      |
| 198 | zoutputdef5         | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                                 |
| 199 | zmove5              | znodo5 + ":" + znodo5+ "[FIRST]"                                               | M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                               |
| 200 | zcomun5             | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 201 | zSTDNSUBGEODIV5     | zcomun5+ "STD_N_SUB_GEO_DIV"                                                   | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                      |
| 202 | zSTDIDSUBGEODIV5    | zcomun5+"STD_ID_SUB_GEO_DIV"                                                   | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_ID_SUB_GEO_DIV                                         |
| 204 | zoutputdef6         | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                                   |
| 205 | zmove6              | znodo6 + ":" + znodo6+ "[FIRST]"                                               | M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                                   |
| 206 | zcomun6             | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}                                                               |
| 208 | zSTDNGEOPLACE6      | zcomun6+ "STD_N_GEO_PLACE"                                                     | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                            |
| 209 | zSTDIDGEOPLACE6     | zcomun6+"STD_ID_GEO_PLACE"                                                     | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_PLACE                                               |
| 211 | zoutputdef7         | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[*]"}                                                                                                     |
| 212 | zmove7              | znodo7 + ":" + znodo7+ "[FIRST]"                                               | M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                                       |
| 213 | zcomun7             | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                                   |
| 214 | zSTDIDGEODIV7       | zcomun7+"STD_ID_GEO_DIV"                                                       | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_DIV                                                     |
| 215 | zSTDNGEODIV7        | zcomun7+"STD_N_GEO_DIV"                                                        | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                                      |
| 217 | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                                 | CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA"}                                                                                            |
| 245 | zcount              | 0                                                                              | 0                                                                                                                                            |
| 246 | zcounti             | 0                                                                              | 0                                                                                                                                            |
| 247 | zcount2             | 0                                                                              | 0                                                                                                                                            |
| 248 | zcount3             | 0                                                                              | 0                                                                                                                                            |
| 249 | zcount4             | 0                                                                              | 0                                                                                                                                            |
| 250 | zcount5             | 0                                                                              | 0                                                                                                                                            |
| 251 | zcount6             | 0                                                                              | 0                                                                                                                                            |
| 252 | zcount7             | 0                                                                              | 0                                                                                                                                            |
| 264 | zcountv             | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 265 | zcountv2            | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                                      |
| 266 | zcountv3            | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                                      |
| 267 | zcountv4            | String.valueOf(zcount4)                                                        | String.valueOf(zcount4)                                                                                                                      |
| 268 | zcountv5            | String.valueOf(zcount5)                                                        | String.valueOf(zcount5)                                                                                                                      |
| 269 | zcountv6            | String.valueOf(zcount6)                                                        | String.valueOf(zcount6)                                                                                                                      |
| 270 | zcountv7            | String.valueOf(zcount7)                                                        | String.valueOf(zcount7)                                                                                                                      |
| 423 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 424 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 219 | m4:startpage | m4task=SSE_ADDRESS_OTROS                                                                                                                                         |
| 220 | m4:beginjob  |                                                                                                                                                                  |
| 220 | m4:datadef   | m4o=SSE_ADDRESS_OTROS; m4name=SSE_ADDRESS_OTROS                                                                                                                  |
| 228 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA"}                                                                                                       |
| 228 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 229 | m4:outputdef | m4alias=SSE_ADDRESS_OTROS                                                                                                                                        |
| 229 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 230 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                                     |
| 230 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                            |
| 231 | m4:outputdef | m4alias=M4T_ID_SIGLA_DOMICI                                                                                                                                      |
| 231 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                             |
| 232 | m4:outputdef | m4alias=M4T_COUNTRY                                                                                                                                              |
| 232 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[*]"}                                                                                                     |
| 233 | m4:outputdef | m4alias=M4T_SUB_GEO_DIV                                                                                                                                          |
| 233 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                                 |
| 234 | m4:outputdef | m4alias=M4T_GEO_PLACE                                                                                                                                            |
| 234 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                                   |
| 235 | m4:outputdef | m4alias=M4T_GEO_DIV                                                                                                                                              |
| 235 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[*]"}                                                                                                     |
| 236 | m4:endjob    |                                                                                                                                                                  |
| 237 | m4:move      |                                                                                                                                                                  |
| 237 | m4:param     | name=SSE_ADDRESS_OTROS; value=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 238 | m4:move      |                                                                                                                                                                  |
| 238 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                           |
| 239 | m4:move      |                                                                                                                                                                  |
| 239 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                             |
| 240 | m4:move      |                                                                                                                                                                  |
| 240 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                             |
| 241 | m4:move      |                                                                                                                                                                  |
| 241 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                     |
| 242 | m4:move      |                                                                                                                                                                  |
| 242 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                         |
| 243 | m4:move      |                                                                                                                                                                  |
| 243 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                             |
| 320 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                            |
| 321 | m4:item      | m4name=M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                        |
| 331 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                            |
| 332 | m4:item      | m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC; htmlsafe=true                                |
| 355 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv4).intValue()-1).toString()                                                                                            |
| 356 | m4:item      | m4name=M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY; htmlsafe=true                                                    |
| 368 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv7).intValue()-1).toString()                                                                                            |
| 369 | m4:item      | m4name=M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; htmlsafe=true                                                    |
| 382 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv5).intValue()-1).toString()                                                                                            |
| 383 | m4:item      | m4name=M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                    |
| 401 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv6).intValue()-1).toString()                                                                                            |
| 402 | m4:item      | m4name=M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                          |
| 428 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 431 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 432 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                              |
| 440 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC; htmlsafe=true                                    |
| 440 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1; htmlsafe=true                                   |
| 443 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; htmlsafe=true                                          |
| 444 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                       |
| 445 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PISO; htmlsafe=true                                             |
| 446 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_ESCALERA; htmlsafe=true                                         |
| 447 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PUERTA; htmlsafe=true                                           |
| 450 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                               |
| 451 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                  |
| 454 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                |
| 455 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; htmlsafe=true                                        |
| 456 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                    |
| 467 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                 |
| --- | ---------------- | ------------------------------------ |
| 223 | setItem          | zsubsesion,znodo,"","PAIS",zpais     |
| 224 | setItem          | zsubsesion,znodo,"","COMUNIDAD",zcom |
| 225 | setItem          | zsubsesion,znodo,"","PROVINCIA",zpro |
| 255 | getCount         | znodo,zsubsesion,znodo               |
| 256 | getCountInClient | znodo,zsubsesion,znodo               |
| 257 | getCount         | znodo2,zsubsesion,znodo2             |
| 258 | getCount         | znodo3,zsubsesion,znodo3             |
| 259 | getCount         | znodo4,zsubsesion,znodo4             |
| 260 | getCount         | znodo5,zsubsesion,znodo5             |
| 261 | getCount         | znodo6,zsubsesion,znodo6             |
| 262 | getCount         | znodo7,zsubsesion,znodo7             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 48  | filtrar    | num        |
| 90  | comprobar  |            |
| 120 | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | if ((ztipo==null)){ztipo="CL";}                                                                                                          |
| 34  | if ((zdirec==null)){zdirec="";}                                                                                                          |
| 35  | if ((znumero==null)){znumero="";}                                                                                                        |
| 36  | if ((zbloque==null)){zbloque="";}                                                                                                        |
| 37  | if ((zpiso==null)){zpiso="";}                                                                                                            |
| 38  | if ((zescalera==null)){zescalera="";}                                                                                                    |
| 39  | if ((zpuerta==null)){zpuerta="";}                                                                                                        |
| 40  | if ((zcpostal==null)){zcpostal="";}                                                                                                      |
| 41  | if ((zclase==null)){zclase="";}                                                                                                          |
| 42  | if ((znclase==null)){znclase="";}                                                                                                        |
| 43  | if ((zntipo==null)){zntipo="Calle";}                                                                                                     |
| 44  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 45  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 51  | if ((num=="2")&#124;&#124;(num=="3")) {                                                                                                  |
| 55  | if (num=="3") {                                                                                                                          |
| 59  | else{                                                                                                                                    |
| 87  | oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);                                         |
| 88  | onum = new m4objvalidacion('_alfanum','1','10','','El numero de via no puede ser nulo',false);                                           |
| 89  | ocp = new m4objvalidacion('_cp','','','','El distrito postal es un campo oligatorio numerico de 5 caracteres',false);                    |
| 94  | if (oalfanum.resultado == false){                                                                                                        |
| 99  | if (onum.resultado == false){                                                                                                            |
| 104 | if (ocp.resultado == false){                                                                                                             |
| 109 | if ((zloc == null)&#124;&#124;(zloc=="")){                                                                                               |
| 113 | if (error == 1){                                                                                                                         |
| 114 | alert(texto);                                                                                                                            |
| 116 | else {                                                                                                                                   |
| 317 | &lt;% if ((zclase == null)&#124;&#124;(zclase.equals(""))){}else{ %&gt;                                                                  |
| 422 | if (zcount &gt; 0) {                                                                                                                     |
| 95  | expresión de cálculo/transformación: texto = texto + "\n La Via Publica es obligatoria.Modifique el texto.";                             |
| 100 | expresión de cálculo/transformación: texto = texto + "\n El numero de via es obligatorio.";                                              |
| 105 | expresión de cálculo/transformación: texto = texto + "\n El distrito postal es obligatorio. Es un numerico de 5 cifras";                 |
| 110 | expresión de cálculo/transformación: texto = texto + "\n\n La poblacion es incorrecta";                                                  |
| 147 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 149 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 150 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 151 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 152 | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 153 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                        |
| 154 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 155 | expresión de cálculo/transformación: String zPAISS = zraiz + "PAIS";                                                                     |
| 156 | expresión de cálculo/transformación: String zNOMBREPAIS = zraiz + "NOMBRE_PAIS";                                                         |
| 157 | expresión de cálculo/transformación: String zNOMBRECOMUNIDAD = zraiz + "NOMBRE_COMUNIDAD";                                               |
| 158 | expresión de cálculo/transformación: String zCOMUNIDAD = zraiz + "COMUNIDAD";                                                            |
| 159 | expresión de cálculo/transformación: String zPROVINCIA = zraiz + "PROVINCIA";                                                            |
| 160 | expresión de cálculo/transformación: String zNOMBREPROVINCIA = zraiz + "NOMBRE_PROVINCIA";                                               |
| 161 | expresión de cálculo/transformación: String zPOBLACION = zraiz + "POBLACION";                                                            |
| 162 | expresión de cálculo/transformación: String zNOMBREPOBLACION = zraiz + "NOMBRE_POBLACION";                                               |
| 180 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 181 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 182 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 186 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 187 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                  |
| 188 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 192 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 193 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4+ "[FIRST]";                                                   |
| 194 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";               |
| 198 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 199 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5+ "[FIRST]";                                                   |
| 200 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 204 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 205 | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6+ "[FIRST]";                                                   |
| 206 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 211 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 212 | expresión de cálculo/transformación: String zmove7 = znodo7 + ":" + znodo7+ "[FIRST]";                                                   |
| 213 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";               |
| 217 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                               |
| 424 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp               |
| 128 | ../../sse_generico/espanol/generico_menusup.jsp       |
| 129 | ../../sse_generico/espanol/generico_links.jsp         |
| 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 463 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 275 | /iconos/noname_otras_direcciones_116_100.gif                    |
| 279 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 284 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  |
| 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 309 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 310 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 414 | javascript:comprobar();                                         |
| 415 | /iconos/icono_enviar_ess_36_36.gif                              |
| 434 | javascript:pendientes(                                          |
| 435 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 123 | sse_generico/generico_actualizar.jsp                            |
| 128 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 129 | ../../sse_generico/espanol/generico_links.jsp                   |
| 143 | sse_g1/sse_g1_p1_mod4.jsp                                       |
| 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod4.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g1/espanol/sse_g1_p1_mod4.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                          |
| --- | ----------------------------------------------------------------- |
| 8   | Otras direcciones                                                 |
| 273 | Otras direcciones                                                 |
| 276 | Da de alta o modifica tus otras direcciones. Mis datos personales |
| 308 | Dirección                                                         |
| 314 | Tipo de dirección                                                 |
| 315 | [valor dinámico] "&gt;                                            |
| 327 | * Via pública                                                     |
| 328 | [valor dinámico] "&gt;                                            |
| 339 | * Número                                                          |
| 343 | Bloque Piso Escalera Puerta                                       |
| 351 | País                                                              |
| 352 | "&gt;                                                             |
| 365 | Comunidad "&gt;                                                   |
| 379 | Provincia "&gt;                                                   |
| 394 | * Cod. postal                                                     |
| 398 | * Población "&gt;                                                 |
| 427 | Otros domicilos                                                   |
| 433 | ');"&gt;                                                          |
| 440 | Via pública                                                       |
| 443 | Número                                                            |
| 444 | Bloque                                                            |
| 445 | Piso                                                              |
| 446 | Escalera                                                          |
| 447 | Puerta                                                            |
| 450 | Cod. postal                                                       |
| 451 | Población                                                         |
| 454 | Provincia                                                         |
| 455 | Comunidad                                                         |
| 456 | País                                                              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                   |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 275 | img     | alt=Otras direcciones; title=Otras direcciones; src=/iconos/noname_otras_direcciones_116_100.gif; width=116; height=100                                                                                                                     |
| 279 | a       | class=enlacefuncional; title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                           |
| 284 | form    | action=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11; method=post; name=oculto; id=oculto                                                                                                                                  |
| 285 | input   | type=hidden; id=zpais; name=zpais; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                 |
| 286 | input   | type=hidden; id=zcom; name=zcom; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                   |
| 287 | input   | type=hidden; id=zpro; name=zpro; value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                   |
| 288 | input   | type=hidden; id=tipo; name=tipo; value=&lt;%=ztipo%&gt;                                                                                                                                                                                     |
| 289 | input   | type=hidden; id=ntipo; name=ntipo; value=&lt;%=zntipo%&gt;                                                                                                                                                                                  |
| 290 | input   | type=hidden; id=direc; name=direc; value=&lt;%=zdirec%&gt;                                                                                                                                                                                  |
| 291 | input   | type=hidden; id=numero; name=numero; value=&lt;%=znumero%&gt;                                                                                                                                                                               |
| 292 | input   | type=hidden; id=bloque; name=bloque; value=&lt;%=zbloque%&gt;                                                                                                                                                                               |
| 293 | input   | type=hidden; id=piso; name=piso; value=&lt;%=zpiso%&gt;                                                                                                                                                                                     |
| 294 | input   | type=hidden; id=escalera; name=escalera; value=&lt;%=zescalera%&gt;                                                                                                                                                                         |
| 295 | input   | type=hidden; id=puerta; name=puerta; value=&lt;%=zpuerta%&gt;                                                                                                                                                                               |
| 296 | input   | type=hidden; id=cpostal; name=cpostal; value=&lt;%=zcpostal%&gt;                                                                                                                                                                            |
| 297 | input   | type=hidden; id=clase; name=clase; value=&lt;%=zclase%&gt;                                                                                                                                                                                  |
| 298 | input   | type=hidden; id=nclase; name=nclase; value=&lt;%=znclase%&gt;                                                                                                                                                                               |
| 299 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                             |
| 301 | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                             |
| 302 | input   | type=hidden; id=TAG; name=TAG; value=SSE_ADDRESS_OTROS                                                                                                                                                                                      |
| 303 | input   | type=hidden; id=REC; name=REC; value=                                                                                                                                                                                                       |
| 304 | input   | type=hidden; id=ACC; name=ACC; value=INSERTAR                                                                                                                                                                                               |
| 305 | input   | type=hidden; id=NOD; name=NOD; value=SSE_ADDRESS_OTROS                                                                                                                                                                                      |
| 309 | a       | title=Mis datos personales; href=/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11                                                                                                                                                  |
| 310 | img     | alt=Mis datos personales; src=/iconos/icono_flecha_azul2_ess_11_9.gif; width=11; height=9; onmouseover=m4luztotal(this,200,200,200,50,40,80,5,255,150); onmouseout=m4oscuridad(this)                                                        |
| 316 | select  | id=STD_ID_LOCATION_TYPE; class=fuenteformulario150; name=STD_ID_LOCATION_TYPE; title=Escoge el tipo de dirección                                                                                                                            |
| 318 | option  | value=&lt;%=zclase%&gt;                                                                                                                                                                                                                     |
| 321 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 329 | select  | id=SSP_ID_SIGLA_DOMIC; class=fuenteformulario150; name=SSP_ID_SIGLA_DOMIC; title=Escoge el tipo de via                                                                                                                                      |
| 330 | option  | value=&lt;%=ztipo%&gt;                                                                                                                                                                                                                      |
| 332 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 335 | input   | type=text; class=fuenteformulario; id=STD_ADDRESS_LINE_1; name=STD_ADDRESS_LINE_1; size=40; maxlength=40; title=Escribe el nombre de tu calle; tabindex=1; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zdirec)%&gt; |
| 341 | input   | type=text; class=fuenteformulario; id=SSP_NUM_VIA; name=SSP_NUM_VIA; size=5; maxlength=5; title=Escribe el número de tu calle; tabindex=2; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znumero)%&gt;                |
| 344 | input   | type=text; class=fuenteformulario; id=SSP_BLOQUE; name=SSP_BLOQUE; size=2; maxlength=5; title=Escribe el número de tu bloque; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zbloque)%&gt;; tabindex=3                 |
| 345 | input   | type=text; class=fuenteformulario; id=SSP_PISO; name=SSP_PISO; size=2; maxlength=10; title=Escribe tu piso; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpiso)%&gt;; tabindex=4                                     |
| 346 | input   | type=text; class=fuenteformulario; id=SSP_ESCALERA; name=SSP_ESCALERA; size=2; maxlength=10; title=Escribe tu escalera; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zescalera)%&gt;; tabindex=5                     |
| 347 | input   | type=text; class=fuenteformulario; id=SSP_PUERTA; name=SSP_PUERTA; size=2; maxlength=10; title=Escribe el número de tu puerta ; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zpuerta)%&gt;; tabindex=6               |
| 353 | select  | id=STD_ID_COUNTRY; class=fuenteformulario100; name=STD_ID_COUNTRY; title=Escoge el pais; onchange=filtrar(1); tabindex=7                                                                                                                    |
| 356 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 366 | select  | id=STD_ID_GEO_DIV; class=fuenteformulario150; name=STD_ID_GEO_DIV; title=Escoge la comunidad; onchange=filtrar(2); tabindex=8                                                                                                               |
| 369 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 380 | select  | id=STD_ID_SUB_GEO_DIV; class=fuenteformulario100; name=STD_ID_SUB_GEO_DIV; title=Escoge la provincia; onchange=filtrar(3); tabindex=9                                                                                                       |
| 383 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 396 | input   | type=text; class=fuenteformulario; id=SSP_DISTRIT_POSTAL; name=SSP_DISTRIT_POSTAL; size=5; maxlength=5; title=Escribe tu código postal; tabindex=10; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zcpostal)%&gt;     |
| 399 | select  | id=STD_ID_GEO_PLACE; class=fuenteformulario150; name=STD_ID_GEO_PLACE; title=Escoge la población; tabindex=11                                                                                                                               |
| 402 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                                                                    |
| 414 | a       | title=Enviar; href=javascript:comprobar();; tabindex=12                                                                                                                                                                                     |
| 415 | img     | id=enviar; alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)                                                            |
| 434 | a       | title=Eliminar la petición; class=tablamenuright; href=javascript:pendientes('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                                                                                                                |
| 435 | img     | alt=Eliminar la petición; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)                                                         |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                               | Resolución estática parcial                                                                                                                  |
| --- | ------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | zpais               | zobjtabla.m4paramvalor("zpais")                                                | zobjtabla.m4paramvalor("zpais")                                                                                                              |
| 17  | zcom                | zobjtabla.m4paramvalor("zcom")                                                 | zobjtabla.m4paramvalor("zcom")                                                                                                               |
| 18  | zpro                | zobjtabla.m4paramvalor("zpro")                                                 | zobjtabla.m4paramvalor("zpro")                                                                                                               |
| 19  | zpar                | zobjtabla.m4paramvalor("zpar")                                                 | zobjtabla.m4paramvalor("zpar")                                                                                                               |
| 20  | ztipo               | zobjtabla.m4paramvalor("ztipo")                                                | zobjtabla.m4paramvalor("ztipo")                                                                                                              |
| 21  | zdirec              | zobjtabla.m4paramvalor("direc")                                                | zobjtabla.m4paramvalor("direc")                                                                                                              |
| 22  | znumero             | zobjtabla.m4paramvalor("numero")                                               | zobjtabla.m4paramvalor("numero")                                                                                                             |
| 23  | zbloque             | zobjtabla.m4paramvalor("bloque")                                               | zobjtabla.m4paramvalor("bloque")                                                                                                             |
| 24  | zpiso               | zobjtabla.m4paramvalor("piso")                                                 | zobjtabla.m4paramvalor("piso")                                                                                                               |
| 25  | zescalera           | zobjtabla.m4paramvalor("escalera")                                             | zobjtabla.m4paramvalor("escalera")                                                                                                           |
| 26  | zpuerta             | zobjtabla.m4paramvalor("puerta")                                               | zobjtabla.m4paramvalor("puerta")                                                                                                             |
| 27  | zcpostal            | zobjtabla.m4paramvalor("cpostal")                                              | zobjtabla.m4paramvalor("cpostal")                                                                                                            |
| 28  | zntipo              | zobjtabla.m4paramvalor("ntipo")                                                | zobjtabla.m4paramvalor("ntipo")                                                                                                              |
| 29  | zclase              | zobjtabla.m4paramvalor("clase")                                                | zobjtabla.m4paramvalor("clase")                                                                                                              |
| 30  | znclase             | zobjtabla.m4paramvalor("nclase")                                               | zobjtabla.m4paramvalor("nclase")                                                                                                             |
| 31  | estado              | zobjtabla.m4paramvalor("estado")                                               | zobjtabla.m4paramvalor("estado")                                                                                                             |
| 32  | zinicios            | zobjtabla.m4paramvalor("zinicios")                                             | zobjtabla.m4paramvalor("zinicios")                                                                                                           |
| 131 | zsubsesion          | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 132 | zmeta4object        | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 133 | znodo               | "SSE_ADDRESS_OTROS"                                                            | SSE_ADDRESS_OTROS                                                                                                                            |
| 134 | znodo2              | "M4T_LU_LOCATION_TYPE"                                                         | M4T_LU_LOCATION_TYPE                                                                                                                         |
| 135 | znodo3              | "M4T_ID_SIGLA_DOMICI"                                                          | M4T_ID_SIGLA_DOMICI                                                                                                                          |
| 136 | znodo4              | "M4T_COUNTRY"                                                                  | M4T_COUNTRY                                                                                                                                  |
| 137 | znodo7              | "M4T_GEO_DIV"                                                                  | M4T_GEO_DIV                                                                                                                                  |
| 138 | znodo5              | "M4T_SUB_GEO_DIV"                                                              | M4T_SUB_GEO_DIV                                                                                                                              |
| 139 | znodo6              | "M4T_GEO_PLACE"                                                                | M4T_GEO_PLACE                                                                                                                                |
| 140 | ztipocarga          | "SSE"                                                                          | SSE                                                                                                                                          |
| 141 | zventanas           | "4"                                                                            | 4                                                                                                                                            |
| 142 | zvuelta             | 2                                                                              | 2                                                                                                                                            |
| 143 | zdireccion          | "sse_g1/sse_g1_p1_mod4.jsp"                                                    | sse_g1/sse_g1_p1_mod4.jsp                                                                                                                    |
| 144 | zestado             | "11"                                                                           | 11                                                                                                                                           |
| 146 | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                         |
| 148 | zventana            | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                        |
| 149 | zregistrofinal      | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                           |
| 150 | zoutputdef          | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 151 | zmove               | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 152 | ziterator           | znodo + ":" + zsubsesion + "!" + znodo                                         | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS                                                                                |
| 153 | zraiz               | znodo + ":" + zsubsesion + "!" + znodo + "."                                   | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}                                                                           |
| 154 | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}                                                       |
| 155 | zPAISS              | zraiz + "PAIS"                                                                 | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"PAIS"}                                                                   |
| 156 | zNOMBREPAIS         | zraiz + "NOMBRE_PAIS"                                                          | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_PAIS"}                                                            |
| 157 | zNOMBRECOMUNIDAD    | zraiz + "NOMBRE_COMUNIDAD"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_COMUNIDAD"}                                                       |
| 158 | zCOMUNIDAD          | zraiz + "COMUNIDAD"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"COMUNIDAD"}                                                              |
| 159 | zPROVINCIA          | zraiz + "PROVINCIA"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"PROVINCIA"}                                                              |
| 160 | zNOMBREPROVINCIA    | zraiz + "NOMBRE_PROVINCIA"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_PROVINCIA"}                                                       |
| 161 | zPOBLACION          | zraiz + "POBLACION"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"POBLACION"}                                                              |
| 162 | zNOMBREPOBLACION    | zraiz + "NOMBRE_POBLACION"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"."}{"NOMBRE_POBLACION"}                                                       |
| 164 | zSTDNGEOPLACE       | zcomun+ "STD_N_GEO_PLACE"                                                      | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                    |
| 165 | zSTDNSUBGEODIV      | zcomun+ "STD_N_SUB_GEO_DIV"                                                    | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                  |
| 166 | zSTDNGEODIV         | zcomun+"STD_N_GEO_DIV"                                                         | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                          |
| 167 | zSTDNCOUNTRY        | zcomun+ "STD_N_COUNTRY"                                                        | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                      |
| 168 | zORDINAL            | zcomun+ "ORDINAL"                                                              | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}                                            |
| 169 | zNACCION            | zcomun+ "N_ACCION"                                                             | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}                                           |
| 170 | zSTDNLOCATIONTYPE   | zcomun+ "STD_N_LOCATION_TYPE"                                                  | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                                |
| 171 | zSSPNSIGLADOMIC     | zcomun+"SSP_N_SIGLA_DOMIC"                                                     | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC                                      |
| 172 | zSTDADDRESSLINE1    | zcomun+"STD_ADDRESS_LINE_1"                                                    | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1                                     |
| 173 | zSSPNUMVIA          | zcomun+"SSP_NUM_VIA"                                                           | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA                                            |
| 174 | zSSPBLOQUE          | zcomun+ "SSP_BLOQUE"                                                           | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}                                         |
| 175 | zSSPPISO            | zcomun+"SSP_PISO"                                                              | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PISO                                               |
| 176 | zSSPESCALERA        | zcomun+"SSP_ESCALERA"                                                          | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_ESCALERA                                           |
| 177 | zSSPPUERTA          | zcomun+"SSP_PUERTA"                                                            | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PUERTA                                             |
| 178 | zSSPDISTRITPOSTAL   | zcomun+ "SSP_DISTRIT_POSTAL"                                                   | SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}                                 |
| 180 | zoutputdef2         | zsubsesion + "!" + znodo2 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                            |
| 181 | zmove2              | znodo2 + ":" + znodo2 + "[FIRST]"                                              | M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                                     |
| 182 | zcomun2             | znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."            | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 183 | zSTDNLOCATIONTYPE2  | zcomun2+ "STD_N_LOCATION_TYPE"                                                 | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}                          |
| 184 | zSTDIDLOCATIONTYPE2 | zcomun2+ "STD_ID_LOCATION_TYPE"                                                | M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_LOCATION_TYPE"}                         |
| 186 | zoutputdef3         | zsubsesion + "!" + znodo3 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                             |
| 187 | zmove3              | znodo3 + ":" + znodo3 + "[FIRST]"                                              | M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                                       |
| 188 | zcomun3             | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."            | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 189 | zSSPIDSIGLADOMIC3   | zcomun3+ "SSP_ID_SIGLA_DOMIC"                                                  | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}{"SSP_ID_SIGLA_DOMIC"}                             |
| 190 | zSSPNSIGLADOMIC3    | zcomun3+"SSP_N_SIGLA_DOMIC"                                                    | M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC                                  |
| 192 | zoutputdef4         | zsubsesion + "!" + znodo4 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[*]"}                                                                                                     |
| 193 | zmove4              | znodo4 + ":" + znodo4+ "[FIRST]"                                               | M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                                       |
| 194 | zcomun4             | znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + "."            | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}                                                                   |
| 195 | zSTDIDCOUNTRY4      | zcomun4+ "STD_ID_COUNTRY"                                                      | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}                                                 |
| 196 | zSTDNCOUNTRY4       | zcomun4+"STD_N_COUNTRY"                                                        | M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY                                                      |
| 198 | zoutputdef5         | zsubsesion + "!" + znodo5 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                                 |
| 199 | zmove5              | znodo5 + ":" + znodo5+ "[FIRST]"                                               | M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                               |
| 200 | zcomun5             | znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + "."            | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 201 | zSTDNSUBGEODIV5     | zcomun5+ "STD_N_SUB_GEO_DIV"                                                   | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}                                      |
| 202 | zSTDIDSUBGEODIV5    | zcomun5+"STD_ID_SUB_GEO_DIV"                                                   | M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_ID_SUB_GEO_DIV                                         |
| 204 | zoutputdef6         | zsubsesion + "!" + znodo6 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                                   |
| 205 | zmove6              | znodo6 + ":" + znodo6+ "[FIRST]"                                               | M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                                   |
| 206 | zcomun6             | znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}                                                               |
| 208 | zSTDNGEOPLACE6      | zcomun6+ "STD_N_GEO_PLACE"                                                     | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}                                            |
| 209 | zSTDIDGEOPLACE6     | zcomun6+"STD_ID_GEO_PLACE"                                                     | M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_PLACE                                               |
| 211 | zoutputdef7         | zsubsesion + "!" + znodo7 + "[*]"                                              | SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[*]"}                                                                                                     |
| 212 | zmove7              | znodo7 + ":" + znodo7+ "[FIRST]"                                               | M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                                       |
| 213 | zcomun7             | znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + "."            | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}                                                                   |
| 214 | zSTDIDGEODIV7       | zcomun7+"STD_ID_GEO_DIV"                                                       | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_ID_GEO_DIV                                                     |
| 215 | zSTDNGEODIV7        | zcomun7+"STD_N_GEO_DIV"                                                        | M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV                                                      |
| 217 | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV"                              | CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                         |
| 245 | zcount              | 0                                                                              | 0                                                                                                                                            |
| 246 | zcounti             | 0                                                                              | 0                                                                                                                                            |
| 247 | zcount2             | 0                                                                              | 0                                                                                                                                            |
| 248 | zcount3             | 0                                                                              | 0                                                                                                                                            |
| 249 | zcount4             | 0                                                                              | 0                                                                                                                                            |
| 250 | zcount5             | 0                                                                              | 0                                                                                                                                            |
| 251 | zcount6             | 0                                                                              | 0                                                                                                                                            |
| 252 | zcount7             | 0                                                                              | 0                                                                                                                                            |
| 264 | zcountv             | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                      |
| 265 | zcountv2            | String.valueOf(zcount2)                                                        | String.valueOf(zcount2)                                                                                                                      |
| 266 | zcountv3            | String.valueOf(zcount3)                                                        | String.valueOf(zcount3)                                                                                                                      |
| 267 | zcountv4            | String.valueOf(zcount4)                                                        | String.valueOf(zcount4)                                                                                                                      |
| 268 | zcountv5            | String.valueOf(zcount5)                                                        | String.valueOf(zcount5)                                                                                                                      |
| 269 | zcountv6            | String.valueOf(zcount6)                                                        | String.valueOf(zcount6)                                                                                                                      |
| 270 | zcountv7            | String.valueOf(zcount7)                                                        | String.valueOf(zcount7)                                                                                                                      |
| 423 | zregistroinicials   | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                             |
| 424 | zregistrofinals     | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                               |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 219 | m4:startpage | m4task=SSE_ADDRESS_OTROS                                                                                                                                         |
| 220 | m4:beginjob  |                                                                                                                                                                  |
| 220 | m4:datadef   | m4o=SSE_ADDRESS_OTROS; m4name=SSE_ADDRESS_OTROS                                                                                                                  |
| 228 | m4:exec      | m4method=CARGA:{}SSE_ADDRESS_OTROS{"!SSE_PRINCIPAL.CARGA_CV"}                                                                                                    |
| 228 | m4:param     | name=TIPO_CARGA; value=SSE                                                                                                                                       |
| 229 | m4:outputdef | m4alias=SSE_ADDRESS_OTROS                                                                                                                                        |
| 229 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 230 | m4:outputdef | m4alias=M4T_LU_LOCATION_TYPE                                                                                                                                     |
| 230 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[*]"}                                                                                            |
| 231 | m4:outputdef | m4alias=M4T_ID_SIGLA_DOMICI                                                                                                                                      |
| 231 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[*]"}                                                                                             |
| 232 | m4:outputdef | m4alias=M4T_COUNTRY                                                                                                                                              |
| 232 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[*]"}                                                                                                     |
| 233 | m4:outputdef | m4alias=M4T_SUB_GEO_DIV                                                                                                                                          |
| 233 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[*]"}                                                                                                 |
| 234 | m4:outputdef | m4alias=M4T_GEO_PLACE                                                                                                                                            |
| 234 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[*]"}                                                                                                   |
| 235 | m4:outputdef | m4alias=M4T_GEO_DIV                                                                                                                                              |
| 235 | m4:param     | name=m4name0; value=SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[*]"}                                                                                                     |
| 236 | m4:endjob    |                                                                                                                                                                  |
| 237 | m4:move      |                                                                                                                                                                  |
| 237 | m4:param     | name=SSE_ADDRESS_OTROS; value=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                              |
| 238 | m4:move      |                                                                                                                                                                  |
| 238 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_LU_LOCATION_TYPE{":"}M4T_LU_LOCATION_TYPE{"[FIRST]"}                                                                           |
| 239 | m4:move      |                                                                                                                                                                  |
| 239 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_ID_SIGLA_DOMICI{":"}M4T_ID_SIGLA_DOMICI{"[FIRST]"}                                                                             |
| 240 | m4:move      |                                                                                                                                                                  |
| 240 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_COUNTRY{":"}M4T_COUNTRY{"[FIRST]"}                                                                                             |
| 241 | m4:move      |                                                                                                                                                                  |
| 241 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_SUB_GEO_DIV{":"}M4T_SUB_GEO_DIV{"[FIRST]"}                                                                                     |
| 242 | m4:move      |                                                                                                                                                                  |
| 242 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_GEO_PLACE{":"}M4T_GEO_PLACE{"[FIRST]"}                                                                                         |
| 243 | m4:move      |                                                                                                                                                                  |
| 243 | m4:param     | name=SSE_ADDRESS_OTROS; value=M4T_GEO_DIV{":"}M4T_GEO_DIV{"[FIRST]"}                                                                                             |
| 320 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                                            |
| 321 | m4:item      | m4name=M4T_LU_LOCATION_TYPE{":"}SSE_ADDRESS_OTROS{"!"}M4T_LU_LOCATION_TYPE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                        |
| 331 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                                            |
| 332 | m4:item      | m4name=M4T_ID_SIGLA_DOMICI{":"}SSE_ADDRESS_OTROS{"!"}M4T_ID_SIGLA_DOMICI{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC; htmlsafe=true                                |
| 355 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv4).intValue()-1).toString()                                                                                            |
| 356 | m4:item      | m4name=M4T_COUNTRY{":"}SSE_ADDRESS_OTROS{"!"}M4T_COUNTRY{"[&amp;VAR.m4lix]"}{"."}STD_N_COUNTRY; htmlsafe=true                                                    |
| 368 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv7).intValue()-1).toString()                                                                                            |
| 369 | m4:item      | m4name=M4T_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; htmlsafe=true                                                    |
| 382 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv5).intValue()-1).toString()                                                                                            |
| 383 | m4:item      | m4name=M4T_SUB_GEO_DIV{":"}SSE_ADDRESS_OTROS{"!"}M4T_SUB_GEO_DIV{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                    |
| 401 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv6).intValue()-1).toString()                                                                                            |
| 402 | m4:item      | m4name=M4T_GEO_PLACE{":"}SSE_ADDRESS_OTROS{"!"}M4T_GEO_PLACE{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                          |
| 428 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                        |
| 431 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"N_ACCION"}; htmlsafe=true                                         |
| 432 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_LOCATION_TYPE"}; htmlsafe=true                              |
| 440 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_N_SIGLA_DOMIC; htmlsafe=true                                    |
| 440 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_ADDRESS_LINE_1; htmlsafe=true                                   |
| 443 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_NUM_VIA; htmlsafe=true                                          |
| 444 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_BLOQUE"}; htmlsafe=true                                       |
| 445 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PISO; htmlsafe=true                                             |
| 446 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_ESCALERA; htmlsafe=true                                         |
| 447 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}SSP_PUERTA; htmlsafe=true                                           |
| 450 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"SSP_DISTRIT_POSTAL"}; htmlsafe=true                               |
| 451 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_PLACE"}; htmlsafe=true                                  |
| 454 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true                                |
| 455 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}STD_N_GEO_DIV; htmlsafe=true                                        |
| 456 | m4:item      | m4name=SSE_ADDRESS_OTROS{":"}SSE_ADDRESS_OTROS{"!"}SSE_ADDRESS_OTROS{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                    |
| 467 | m4:endpage   |                                                                                                                                                                  |

| L   | Operación        | Argumentos literales                 |
| --- | ---------------- | ------------------------------------ |
| 223 | setItem          | zsubsesion,znodo,"","PAIS",zpais     |
| 224 | setItem          | zsubsesion,znodo,"","COMUNIDAD",zcom |
| 225 | setItem          | zsubsesion,znodo,"","PROVINCIA",zpro |
| 255 | getCount         | znodo,zsubsesion,znodo               |
| 256 | getCountInClient | znodo,zsubsesion,znodo               |
| 257 | getCount         | znodo2,zsubsesion,znodo2             |
| 258 | getCount         | znodo3,zsubsesion,znodo3             |
| 259 | getCount         | znodo4,zsubsesion,znodo4             |
| 260 | getCount         | znodo5,zsubsesion,znodo5             |
| 261 | getCount         | znodo6,zsubsesion,znodo6             |
| 262 | getCount         | znodo7,zsubsesion,znodo7             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 48  | filtrar    | num        |
| 90  | comprobar  |            |
| 120 | pendientes | ord        |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 33  | if ((ztipo==null)){ztipo="CL";}                                                                                                          |
| 34  | if ((zdirec==null)){zdirec="";}                                                                                                          |
| 35  | if ((znumero==null)){znumero="";}                                                                                                        |
| 36  | if ((zbloque==null)){zbloque="";}                                                                                                        |
| 37  | if ((zpiso==null)){zpiso="";}                                                                                                            |
| 38  | if ((zescalera==null)){zescalera="";}                                                                                                    |
| 39  | if ((zpuerta==null)){zpuerta="";}                                                                                                        |
| 40  | if ((zcpostal==null)){zcpostal="";}                                                                                                      |
| 41  | if ((zclase==null)){zclase="";}                                                                                                          |
| 42  | if ((znclase==null)){znclase="";}                                                                                                        |
| 43  | if ((zntipo==null)){zntipo="Calle";}                                                                                                     |
| 44  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                          |
| 45  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 51  | if ((num=="2")&#124;&#124;(num=="3")) {                                                                                                  |
| 55  | if (num=="3") {                                                                                                                          |
| 59  | else{                                                                                                                                    |
| 87  | oalfanum = new m4objvalidacion('_alfanum','1','40','','La via publica no puede ser nulo',false);                                         |
| 88  | onum = new m4objvalidacion('_alfanum','1','10','','El numero de via no puede ser nulo',false);                                           |
| 89  | ocp = new m4objvalidacion('_cp','','','','El distrito postal es un campo oligatorio numerico de 5 caracteres',false);                    |
| 94  | if (oalfanum.resultado == false){                                                                                                        |
| 99  | if (onum.resultado == false){                                                                                                            |
| 104 | if (ocp.resultado == false){                                                                                                             |
| 109 | if ((zloc == null)&#124;&#124;(zloc=="")){                                                                                               |
| 113 | if (error == 1){                                                                                                                         |
| 114 | alert(texto);                                                                                                                            |
| 116 | else {                                                                                                                                   |
| 317 | &lt;% if ((zclase == null)&#124;&#124;(zclase.equals(""))){}else{ %&gt;                                                                  |
| 422 | if (zcount &gt; 0) {                                                                                                                     |
| 95  | expresión de cálculo/transformación: texto = texto + "\n La Via Publica es obligatoria.Modifique el texto.";                             |
| 100 | expresión de cálculo/transformación: texto = texto + "\n El numero de via es obligatorio.";                                              |
| 105 | expresión de cálculo/transformación: texto = texto + "\n El distrito postal es obligatorio. Es un numerico de 5 cifras";                 |
| 110 | expresión de cálculo/transformación: texto = texto + "\n\n La poblacion es incorrecta";                                                  |
| 147 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 149 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 150 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 151 | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 152 | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 153 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                        |
| 154 | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 155 | expresión de cálculo/transformación: String zPAISS = zraiz + "PAIS";                                                                     |
| 156 | expresión de cálculo/transformación: String zNOMBREPAIS = zraiz + "NOMBRE_PAIS";                                                         |
| 157 | expresión de cálculo/transformación: String zNOMBRECOMUNIDAD = zraiz + "NOMBRE_COMUNIDAD";                                               |
| 158 | expresión de cálculo/transformación: String zCOMUNIDAD = zraiz + "COMUNIDAD";                                                            |
| 159 | expresión de cálculo/transformación: String zPROVINCIA = zraiz + "PROVINCIA";                                                            |
| 160 | expresión de cálculo/transformación: String zNOMBREPROVINCIA = zraiz + "NOMBRE_PROVINCIA";                                               |
| 161 | expresión de cálculo/transformación: String zPOBLACION = zraiz + "POBLACION";                                                            |
| 162 | expresión de cálculo/transformación: String zNOMBREPOBLACION = zraiz + "NOMBRE_POBLACION";                                               |
| 180 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                             |
| 181 | expresión de cálculo/transformación: String zmove2 =znodo2 + ":" + znodo2 + "[FIRST]";                                                   |
| 182 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";               |
| 186 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                             |
| 187 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                  |
| 188 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";               |
| 192 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                             |
| 193 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4+ "[FIRST]";                                                   |
| 194 | expresión de cálculo/transformación: String zcomun4 = znodo4 + ":" + zsubsesion + "!" + znodo4 + "[&amp;VAR.m4lix]" + ".";               |
| 198 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                             |
| 199 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5+ "[FIRST]";                                                   |
| 200 | expresión de cálculo/transformación: String zcomun5 = znodo5 + ":" + zsubsesion + "!" + znodo5 + "[&amp;VAR.m4lix]" + ".";               |
| 204 | expresión de cálculo/transformación: String zoutputdef6 = zsubsesion + "!" + znodo6 + "[*]";                                             |
| 205 | expresión de cálculo/transformación: String zmove6 = znodo6 + ":" + znodo6+ "[FIRST]";                                                   |
| 206 | expresión de cálculo/transformación: String zcomun6 = znodo6 + ":" + zsubsesion + "!" + znodo6 + "[&amp;VAR.m4lix]" + ".";               |
| 211 | expresión de cálculo/transformación: String zoutputdef7 = zsubsesion + "!" + znodo7 + "[*]";                                             |
| 212 | expresión de cálculo/transformación: String zmove7 = znodo7 + ":" + znodo7+ "[FIRST]";                                                   |
| 213 | expresión de cálculo/transformación: String zcomun7 = znodo7 + ":" + zsubsesion + "!" + znodo7 + "[&amp;VAR.m4lix]" + ".";               |
| 217 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA_CV";                            |
| 424 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../sse_generico/espanol/menu_ess.jsp               |
| 128 | ../../sse_generico/espanol/generico_menusup.jsp       |
| 129 | ../../sse_generico/espanol/generico_links.jsp         |
| 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 463 | ../../sse_generico/espanol/generico_disclaimer.jsp    |

| L   | Destino / recurso                                               |
| --- | --------------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                             |
| 10  | /libreria/funciones_sse.js                                      |
| 12  | /libreria/clase_val_entradas.js                                 |
| 275 | /iconos/noname_otras_direcciones_116_100.gif                    |
| 279 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 284 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  |
| 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp |
| 309 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       |
| 310 | /iconos/icono_flecha_azul2_ess_11_9.gif                         |
| 414 | javascript:comprobar();                                         |
| 415 | /iconos/icono_enviar_ess_36_36.gif                              |
| 434 | javascript:pendientes(                                          |
| 435 | /iconos/icono_eliminar_ess_11_12.gif                            |
| 11  | ../../sse_generico/espanol/menu_ess.jsp                         |
| 123 | sse_generico/generico_actualizar.jsp                            |
| 128 | ../../sse_generico/espanol/generico_menusup.jsp                 |
| 129 | ../../sse_generico/espanol/generico_links.jsp                   |
| 143 | sse_g1/sse_g1_p1_mod4.jsp                                       |
| 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           |
| 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                      | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 279 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 284 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| COLL   | 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| COLL   | 309 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 414 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 434 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 123 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| COLL   | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 143 | sse_g1/sse_g1_p1_mod4.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| COLL   | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| COLL   | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 279 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 284 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| CYC    | 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| CYC    | 309 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 414 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 434 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 123 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| CYC    | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 143 | sse_g1/sse_g1_p1_mod4.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| CYC    | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| CYC    | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 279 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 284 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| IBER   | 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| IBER   | 309 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 414 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 434 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 123 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| IBER   | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 143 | sse_g1/sse_g1_p1_mod4.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| IBER   | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| IBER   | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | /libreria/funciones_sse.js                                      | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 12  | /libreria/clase_val_entradas.js                                 | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 279 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 284 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11  | ausente    | P06                                                                                                                                                                                                |
| BASE   | 301 | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp | ausente    | P06                                                                                                                                                                                                |
| BASE   | 309 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 414 | javascript:comprobar();                                         | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 434 | javascript:pendientes(                                          | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 11  | ../../sse_generico/espanol/menu_ess.jsp                         | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 123 | sse_generico/generico_actualizar.jsp                            | ausente    | P06                                                                                                                                                                                                |
| BASE   | 128 | ../../sse_generico/espanol/generico_menusup.jsp                 | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 129 | ../../sse_generico/espanol/generico_links.jsp                   | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 143 | sse_g1/sse_g1_p1_mod4.jsp                                       | ausente    | P06                                                                                                                                                                                                |
| BASE   | 461 | ../../sse_generico/espanol/generico_ventanas_post.jsp           | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md)                                                                                    |
| BASE   | 463 | ../../sse_generico/espanol/generico_disclaimer.jsp              | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g1/sse_g1_p1_mod4.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
