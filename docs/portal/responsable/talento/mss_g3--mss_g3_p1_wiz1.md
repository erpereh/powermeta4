# Definición de la vacante

Identificador: `mss_g3/mss_g3_p1_wiz1.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                           | Texto                                        | Ámbito | Diccionario                                                                       |
| ------------------------------- | -------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| Label.mss_g3_p1_wiz1Consid      | Motivo de solicitud                          | BASE   | [translations/mss_g3_es.properties:L55](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_wiz1DetPuesto   | Ver detalles del puesto                      | BASE   | [translations/mss_g3_es.properties:L47](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_wiz1WUSel       | Selecciona la unidad organizativa            | BASE   | [translations/mss_g3_es.properties:L53](../../referencias/literales/mss_g3_es.md) |
| Label.mss_g3_p1_wiz1WriteConsid | Escribe el mótivo de solicitud de la vacante | BASE   | [translations/mss_g3_es.properties:L56](../../referencias/literales/mss_g3_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p1_wiz1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz1.jsp) | `bc882e7397b6a3bee62af3dd2f27d919f0a5d0ddec74a6935fbeaa13b7e37a80` |    498 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p1_wiz1.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p1_wiz1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta        |
| --- | ------------------------------- |
| 8   | Definición de la vacante        |
| 314 | Solicita una vacante            |
| 318 | Define el puesto que solicitas. |
| 342 | Nueva Vacante                   |
| 383 | * Número de vacantes            |
| 385 | Movilidad internacional         |
| 386 | Movilidad nacional              |
| 389 | * Puesto                        |
| 390 | $M4ITEM1$                       |
| 410 | *                               |
| 411 | "&gt;                           |
| 427 | Lugar de trabajo                |
| 428 | $M4ITEM1$                       |
| 445 | Salario (min/max)               |
| 446 | $M4ITEM1$                       |
| 465 | Fecha incorporación             |
| 472 | Fecha límite de incorporación   |
| 478 | Edad (min/max)                  |
| 485 | * [valor dinámico]              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                                             |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 316 | img      | alt=Solicita una vacante; title=Solicita una vacante; src=/iconos/noname_solicitar_vacantes_210_100.gif; width=100; height=100                                                                                                        |
| 321 | form     | action=; method=post; name=NombreFormulario; id=NombreFormulario                                                                                                                                                                      |
| 322 | input    | type=hidden; id=ztipopersist; name=ztipopersist; value=                                                                                                                                                                               |
| 323 | input    | type=hidden; id=znumvac; name=znumvac; value=                                                                                                                                                                                         |
| 324 | input    | type=hidden; id=znompuesto; name=znompuesto; value=                                                                                                                                                                                   |
| 325 | input    | type=hidden; id=zpuesto; name=zpuesto; value=                                                                                                                                                                                         |
| 326 | input    | type=hidden; id=zmovnac; name=zmovnac; value=                                                                                                                                                                                         |
| 327 | input    | type=hidden; id=zmovint; name=zmovint; value=                                                                                                                                                                                         |
| 328 | input    | type=hidden; id=zfechaincorp; name=zfechaincorp; value=                                                                                                                                                                               |
| 329 | input    | type=hidden; id=zfechalimite; name=zfechalimite; value=                                                                                                                                                                               |
| 330 | input    | type=hidden; id=zedadmin; name=zedadmin; value=                                                                                                                                                                                       |
| 331 | input    | type=hidden; id=zedadmax; name=zedadmax; value=                                                                                                                                                                                       |
| 332 | input    | type=hidden; id=zworkunit; name=zworkunit; value=                                                                                                                                                                                     |
| 333 | input    | type=hidden; id=znomworkunit; name=znomworkunit; value=                                                                                                                                                                               |
| 334 | input    | type=hidden; id=zlocation; name=zlocation; value=                                                                                                                                                                                     |
| 335 | input    | type=hidden; id=znomlocation; name=znomlocation; value=                                                                                                                                                                               |
| 336 | input    | type=hidden; id=zsalmin; name=zsalmin; value=                                                                                                                                                                                         |
| 337 | input    | type=hidden; id=zsalmax; name=zsalmax; value=                                                                                                                                                                                         |
| 338 | input    | type=hidden; id=ztiposal; name=ztiposal; value=                                                                                                                                                                                       |
| 339 | input    | type=hidden; id=znomtiposal; name=znomtiposal; value=                                                                                                                                                                                 |
| 340 | input    | type=hidden; id=zconsiderations; name=zconsiderations; value=                                                                                                                                                                         |
| 384 | input    | class=fuenteformulario; type=text; id=SSE_NUM_VAC; name=SSE_NUM_VAC; size=3; maxlength=2; title=Escribe el número de vacantes pedidas; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(znumvac2)%&gt;             |
| 385 | input    | title=Marca la necesidad de movilidad internacional; id=SCO_CHK_MOV_INT; type=checkbox; name=SCO_CHK_MOV_INT                                                                                                                          |
| 386 | input    | title=Marca la necesidad de movilidad nacional; id=SCO_CHK_MOV_NAC; type=checkbox; name=SCO_CHK_MOV_NAC                                                                                                                               |
| 391 | select   | id=STD_ID_JOB_CODE; class=fuenteformulario200; name=STD_ID_JOB_CODE; title=Selecciona el puesto de trabajo                                                                                                                            |
| 392 | option   | value=                                                                                                                                                                                                                                |
| 396 | option   | value=$M4ITEM0$                                                                                                                                                                                                                       |
| 400 | a        | href=javascript:ver_detalles()                                                                                                                                                                                                        |
| 400 | img      | src=/iconos/lu_nor_more_32.png; width=24; height=24; alt=JSP_EXPR_mss_g3.getProperty(; title=JSP_EXPR_mss_g3.getProperty(                                                                                                             |
| 412 | select   | id=STD_ID_WORK_UNIT; class=fuenteformulario200; name=STD_ID_WORK_UNIT; title=JSP_EXPR_mss_g3.getProperty(                                                                                                                             |
| 413 | option   | value=                                                                                                                                                                                                                                |
| 415 | option   | value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo5%&gt;                                                                                                                                                                   |
| 429 | select   | id=STD_ID_WORK_LOCAT; class=fuenteformulario200; name=STD_ID_WORK_LOCAT; title=Selecciona el lugar de trabajo                                                                                                                         |
| 430 | option   | value=                                                                                                                                                                                                                                |
| 434 | option   | value=$M4ITEM0$                                                                                                                                                                                                                       |
| 447 | input    | class=fuenteformulario; type=text; name=SCO_MIN_SALARY; id=SCO_MIN_SALARY; title=escribe el sueldo mínimo; maxlength=10; size=10; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zsalmin2)%&gt;                  |
| 448 | input    | class=fuenteformulario; type=text; name=SCO_MAX_SALARY; id=SCO_MAX_SALARY; title=escribe el sueldo máximo; maxlength=10; size=10; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zsalmax2)%&gt;                  |
| 449 | select   | id=ID_CURRENCY; class=fuenteformulario; name=ID_CURRENCY; title=Selecciona el tipo de divisa                                                                                                                                          |
| 450 | option   | value=                                                                                                                                                                                                                                |
| 454 | option   | value=$M4ITEM0$                                                                                                                                                                                                                       |
| 466 | input    | class=fuenteformulario; type=text; name=SCO_DT_START; id=SCO_DT_START; title=Escribe la fecha de incorporación; maxlength=10; size=10; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfechaincorp2)%&gt;        |
| 467 | a        | href=javascript:m4calendario(m4objeto('SCO_DT_START','NombreFormulario'))                                                                                                                                                             |
| 467 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha de incorporación; title=Selecciona la fecha de incorporación                                                                                     |
| 473 | input    | class=fuenteformulario; type=text; name=SCO_DT_LIMIT; id=SCO_DT_LIMIT; title=Escribe la fecha límite de incorporación; maxlength=10; size=10; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zfechalimite2)%&gt; |
| 474 | a        | href=javascript:m4calendario(m4objeto('SCO_DT_LIMIT','NombreFormulario'))                                                                                                                                                             |
| 474 | img      | src=/iconos/icono_calendario_14_18.gif; width=14; height=18; alt=Selecciona la fecha límite de incorporación; title=Selecciona la fecha límite de incorporación                                                                       |
| 480 | input    | class=fuenteformulario; type=text; name=SCO_MIN_AGE; id=SCO_MIN_AGE; title=escribe la edad mínima; maxlength=2; size=3; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zedadmin2)%&gt;                           |
| 481 | input    | class=fuenteformulario; type=text; name=SCO_MAX_AGE; id=SCO_MAX_AGE; title=escribe la edad máxima; maxlength=2; size=3; value=&lt;%=com.meta4.taglib.util.M4PresentationUtilTaglib.cookHTML(zedadmax2)%&gt;                           |
| 487 | textarea | class=fuentetextarea; name=SCO_CONSIDERATIONS; id=SCO_CONSIDERATIONS; title=JSP_EXPR_mss_g3.getProperty(; cols=40; rows=3                                                                                                             |
| 491 | a        | href=javascript:comprobar(1,'mss_g3/mss_g3_p1_wiz2.jsp');                                                                                                                                                                             |
| 491 | img      | alt=Definir vacante; title=Definir vacante; src=/iconos/icono_siguiente_36_36.gif; width=36; height=36; onmouseover= m4luztotal(this); onmouseout=m4oscuridad(this)                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 188 | estado          | getParameter(request,"estado")   |
| 189 | zinicios        | getParameter(request,"zinicios") |

| L   | Variable           | Expresión fuente                                                     | Resolución estática parcial                                          |
| --- | ------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 177 | znumvac2           | ""                                                                   |                                                                      |
| 177 | znompuesto2        | ""                                                                   |                                                                      |
| 177 | zpuesto2           | ""                                                                   |                                                                      |
| 178 | zmovnac2           | ""                                                                   |                                                                      |
| 178 | zmovint2           | ""                                                                   |                                                                      |
| 178 | zfechaincorp2      | ""                                                                   |                                                                      |
| 179 | zfechalimite2      | ""                                                                   |                                                                      |
| 179 | zedadmin2          | ""                                                                   |                                                                      |
| 179 | zedadmax2          | ""                                                                   |                                                                      |
| 180 | zworkunit2         | ""                                                                   |                                                                      |
| 180 | znomworkunit2      | ""                                                                   |                                                                      |
| 181 | zlocation2         | ""                                                                   |                                                                      |
| 181 | znomlocation2      | ""                                                                   |                                                                      |
| 181 | zsalmin2           | ""                                                                   |                                                                      |
| 182 | zsalmax2           | ""                                                                   |                                                                      |
| 182 | ztiposal2          | ""                                                                   |                                                                      |
| 182 | znomtiposal2       | ""                                                                   |                                                                      |
| 183 | zconsiderations2   | ""                                                                   |                                                                      |
| 184 | disabled           | ""                                                                   |                                                                      |
| 188 | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   |
| 189 | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") |
| 199 | OpcionActiva       | 1                                                                    | 1                                                                    |
| 207 | zsubsesion         | "SSM_VACANT"                                                         | SSM_VACANT                                                           |
| 208 | zmeta4object       | "SSM_VACANT"                                                         | SSM_VACANT                                                           |
| 209 | znodo              | "SSM_VACANT"                                                         | SSM_VACANT                                                           |
| 210 | znodo1             | "SSM_WORK_LOCATION"                                                  | SSM_WORK_LOCATION                                                    |
| 211 | znodo2             | "SSM_JOB"                                                            | SSM_JOB                                                              |
| 212 | znodo3             | "SSM_JOB_POST"                                                       | SSM_JOB_POST                                                         |
| 213 | znodo4             | "SSM_CURRENCY"                                                       | SSM_CURRENCY                                                         |
| 214 | znodo5             | "SSM_WORK_UNITS"                                                     | SSM_WORK_UNITS                                                       |
| 215 | ztipocarga         | "wiz1"                                                               | wiz1                                                                 |
| 219 | zventanas          | "10"                                                                 | 10                                                                   |
| 220 | zvuelta            | 5                                                                    | 5                                                                    |
| 224 | zoutputdef1        | zsubsesion + "!" + znodo1 + "[*]"                                    | SSM_VACANT{"!"}SSM_WORK_LOCATION{"[*]"}                              |
| 225 | zlectura1          | zsubsesion + "!" + znodo1                                            | SSM_VACANT{"!"}SSM_WORK_LOCATION                                     |
| 226 | zmove1             | znodo1 + ":" + znodo1 + "[FIRST]"                                    | SSM_WORK_LOCATION{":"}SSM_WORK_LOCATION{"[FIRST]"}                   |
| 227 | zraiz1             | zsubsesion + "!" + znodo1 + "."                                      | SSM_VACANT{"!"}SSM_WORK_LOCATION{"."}                                |
| 228 | ziterator1         | znodo1 + ":" + zsubsesion + "!" + znodo1                             | SSM_WORK_LOCATION{":"}SSM_VACANT{"!"}SSM_WORK_LOCATION               |
| 230 | zoutputdef2        | zsubsesion + "!" + znodo2 + "[*]"                                    | SSM_VACANT{"!"}SSM_JOB{"[*]"}                                        |
| 231 | zlectura2          | zsubsesion + "!" + znodo2                                            | SSM_VACANT{"!"}SSM_JOB                                               |
| 232 | zmove2             | znodo2 + ":" + znodo2 + "[FIRST]"                                    | SSM_JOB{":"}SSM_JOB{"[FIRST]"}                                       |
| 233 | zraiz2             | zsubsesion + "!" + znodo2 + "."                                      | SSM_VACANT{"!"}SSM_JOB{"."}                                          |
| 234 | ziterator2         | znodo2 + ":" + zsubsesion + "!" + znodo2                             | SSM_JOB{":"}SSM_VACANT{"!"}SSM_JOB                                   |
| 236 | zoutputdef3        | zsubsesion + "!" + znodo3 + "[*]"                                    | SSM_VACANT{"!"}SSM_JOB_POST{"[*]"}                                   |
| 237 | zlectura3          | zsubsesion + "!" + znodo3                                            | SSM_VACANT{"!"}SSM_JOB_POST                                          |
| 238 | zmove3             | znodo3 + ":" + znodo3 + "[FIRST]"                                    | SSM_JOB_POST{":"}SSM_JOB_POST{"[FIRST]"}                             |
| 239 | zraiz3             | zsubsesion + "!" + znodo3 + "."                                      | SSM_VACANT{"!"}SSM_JOB_POST{"."}                                     |
| 240 | ziterator3         | znodo3 + ":" + zsubsesion + "!" + znodo3                             | SSM_JOB_POST{":"}SSM_VACANT{"!"}SSM_JOB_POST                         |
| 242 | zoutputdef4        | zsubsesion + "!" + znodo4 + "[*]"                                    | SSM_VACANT{"!"}SSM_CURRENCY{"[*]"}                                   |
| 243 | zlectura4          | zsubsesion + "!" + znodo4                                            | SSM_VACANT{"!"}SSM_CURRENCY                                          |
| 244 | zmove4             | znodo4 + ":" + znodo4 + "[FIRST]"                                    | SSM_CURRENCY{":"}SSM_CURRENCY{"[FIRST]"}                             |
| 245 | zraiz4             | zsubsesion + "!" + znodo4 + "."                                      | SSM_VACANT{"!"}SSM_CURRENCY{"."}                                     |
| 246 | ziterator4         | znodo4 + ":" + zsubsesion + "!" + znodo4                             | SSM_CURRENCY{":"}SSM_VACANT{"!"}SSM_CURRENCY                         |
| 248 | zoutputdef5        | zsubsesion + "!" + znodo5 + "[*]"                                    | SSM_VACANT{"!"}SSM_WORK_UNITS{"[*]"}                                 |
| 249 | zlectura5          | zsubsesion + "!" + znodo5                                            | SSM_VACANT{"!"}SSM_WORK_UNITS                                        |
| 250 | zmove5             | znodo5 + ":" + znodo5 + "[FIRST]"                                    | SSM_WORK_UNITS{":"}SSM_WORK_UNITS{"[FIRST]"}                         |
| 252 | zraiz5             | zsubsesion + "!" + znodo5 + "."                                      | SSM_VACANT{"!"}SSM_WORK_UNITS{"."}                                   |
| 253 | ziterator5         | znodo5 + ":" + zsubsesion + "!" + znodo5                             | SSM_WORK_UNITS{":"}SSM_VACANT{"!"}SSM_WORK_UNITS                     |
| 258 | zmetodocarga       | zsubsesion + "!SSM_VACANT.CARGA"                                     | SSM_VACANT{"!SSM_VACANT.CARGA"}                                      |
| 262 | zSTDIDWORKUNIT     | zraiz5 + "STD_ID_WORK_UNIT_CHILD"                                    | SSM_VACANT{"!"}SSM_WORK_UNITS{"."}{"STD_ID_WORK_UNIT_CHILD"}         |
| 263 | zSTDNWORKUNIT      | zraiz5 + "STD_N_WORK_UNIT"                                           | SSM_VACANT{"!"}SSM_WORK_UNITS{"."}{"STD_N_WORK_UNIT"}                |
| 265 | zSTDIDWORKLOCATION | zraiz1 + "STD_ID_WORK_LOCATION"                                      | SSM_VACANT{"!"}SSM_WORK_LOCATION{"."}{"STD_ID_WORK_LOCATION"}        |
| 266 | zSTDNWORKLOCATION  | zraiz1 + "STD_N_WORK_LOCATION"                                       | SSM_VACANT{"!"}SSM_WORK_LOCATION{"."}{"STD_N_WORK_LOCATION"}         |
| 268 | zSTDIDJOBCODE      | zraiz2 + "STD_ID_JOB_CODE"                                           | SSM_VACANT{"!"}SSM_JOB{"."}{"STD_ID_JOB_CODE"}                       |
| 269 | zSTDNJOBCODE       | zraiz2 + "STD_N_JOB_CODE"                                            | SSM_VACANT{"!"}SSM_JOB{"."}{"STD_N_JOB_CODE"}                        |
| 271 | zIDCURRENCY        | zraiz4 + "ID_CURRENCY"                                               | SSM_VACANT{"!"}SSM_CURRENCY{"."}{"ID_CURRENCY"}                      |
| 272 | zNMCURRENCY        | zraiz4 + "NM_CURRENCY"                                               | SSM_VACANT{"!"}SSM_CURRENCY{"."}{"NM_CURRENCY"}                      |
| 296 | zcount3            | 0                                                                    | 0                                                                    |
| 297 | zcounti3           | 0                                                                    | 0                                                                    |
| 306 | zcountv3           | String.valueOf(zcounti3)                                             | String.valueOf(zcounti3)                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                |
| --- | ------------ | --------------------------------------------------------------------------------- |
| 279 | m4:startpage | m4task=SSM_VACANT                                                                 |
| 279 | m4:beginjob  |                                                                                   |
| 280 | m4:datadef   | m4o=SSM_VACANT; m4name=SSM_VACANT                                                 |
| 281 | m4:exec      | m4method=SSM_VACANT{"!SSM_VACANT.CARGA"}                                          |
| 281 | m4:param     | name=TIPO_CARGA; value=wiz1                                                       |
| 282 | m4:outputdef | m4alias=SSM_WORK_LOCATION                                                         |
| 282 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_WORK_LOCATION{"[*]"}                       |
| 283 | m4:outputdef | m4alias=SSM_JOB                                                                   |
| 283 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB{"[*]"}                                 |
| 284 | m4:outputdef | m4alias=SSM_JOB_POST                                                              |
| 284 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_JOB_POST{"[*]"}                            |
| 285 | m4:outputdef | m4alias=SSM_CURRENCY                                                              |
| 285 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_CURRENCY{"[*]"}                            |
| 286 | m4:outputdef | m4alias=SSM_WORK_UNITS                                                            |
| 286 | m4:param     | name=m4name0; value=SSM_VACANT{"!"}SSM_WORK_UNITS{"[*]"}                          |
| 287 | m4:endjob    |                                                                                   |
| 288 | m4:move      |                                                                                   |
| 288 | m4:param     | name=SSM_VACANT; value=SSM_WORK_LOCATION{":"}SSM_WORK_LOCATION{"[FIRST]"}         |
| 289 | m4:move      |                                                                                   |
| 289 | m4:param     | name=SSM_VACANT; value=SSM_JOB{":"}SSM_JOB{"[FIRST]"}                             |
| 290 | m4:move      |                                                                                   |
| 290 | m4:param     | name=SSM_VACANT; value=SSM_JOB_POST{":"}SSM_JOB_POST{"[FIRST]"}                   |
| 291 | m4:move      |                                                                                   |
| 291 | m4:param     | name=SSM_VACANT; value=SSM_CURRENCY{":"}SSM_CURRENCY{"[FIRST]"}                   |
| 292 | m4:move      |                                                                                   |
| 292 | m4:param     | name=SSM_VACANT; value=SSM_WORK_UNITS{":"}SSM_WORK_UNITS{"[FIRST]"}               |
| 366 | m4:item      | item=SCO_DT_INCORPORATE; var=; htmlsafe=true; outputdef=SSM_JOB_POST              |
| 367 | m4:item      | item=SCO_DT_LIMIT; var=; htmlsafe=true; outputdef=SSM_JOB_POST                    |
| 368 | m4:item      | item=SCO_ID_WORK_UNIT; var=; htmlsafe=true; outputdef=SSM_JOB_POST                |
| 369 | m4:item      | item=SCO_ID_WORK_LOCAT; var=; htmlsafe=true; outputdef=SSM_JOB_POST               |
| 370 | m4:item      | item=SCO_ID_JOB; var=; htmlsafe=true; outputdef=SSM_JOB_POST                      |
| 371 | m4:item      | item=SCO_SALX_CURTYP; var=; htmlsafe=true; outputdef=SSM_JOB_POST                 |
| 372 | m4:item      | item=SCO_CONSIDERATIONS; var=; htmlsafe=true; outputdef=SSM_JOB_POST              |
| 393 | m4:iterator  | m4rows=*; m4node=SSM_JOB{":"}SSM_VACANT{"!"}SSM_JOB                               |
| 394 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_JOB{"."}{"STD_ID_JOB_CODE"}                |
| 395 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_JOB{"."}{"STD_N_JOB_CODE"}                 |
| 410 | m4:label     | item=STD_ID_WORK_UNIT_CHILD; htmlsafe=true; outputdef=SSM_WORK_UNITS              |
| 414 | m4:dataloop  | outputdef=SSM_WORK_UNITS                                                          |
| 415 | m4:item      | item=STD_N_WORK_UNIT; htmlsafe=true; outputdef=SSM_WORK_UNITS                     |
| 431 | m4:iterator  | m4rows=*; m4node=SSM_WORK_LOCATION{":"}SSM_VACANT{"!"}SSM_WORK_LOCATION           |
| 432 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_WORK_LOCATION{"."}{"STD_ID_WORK_LOCATION"} |
| 433 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_WORK_LOCATION{"."}{"STD_N_WORK_LOCATION"}  |
| 451 | m4:iterator  | m4rows=*; m4node=SSM_CURRENCY{":"}SSM_VACANT{"!"}SSM_CURRENCY                     |
| 452 | m4:param     | name=m4item0; value=SSM_VACANT{"!"}SSM_CURRENCY{"."}{"ID_CURRENCY"}               |
| 453 | m4:param     | name=m4item1; value=SSM_VACANT{"!"}SSM_CURRENCY{"."}{"NM_CURRENCY"}               |
| 498 | m4:endpage   |                                                                                   |

| L   | Operación        | Argumentos literales                        |
| --- | ---------------- | ------------------------------------------- |
| 300 | getCount         | znodo3,zsubsesion,znodo3                    |
| 304 | getCountInClient | znodo3,zsubsesion,znodo3                    |
| 348 | getItem          | znodo3,zsubsesion,znodo3,"","NUM_VACANTES"  |
| 349 | getItem          | znodo3,zsubsesion,znodo3,"","MOVNAC"        |
| 351 | getItem          | znodo3,zsubsesion,znodo3,"","MOVINT"        |
| 353 | getItem          | znodo3,zsubsesion,znodo3,"","EDAD_MINIMA"   |
| 355 | getItem          | znodo3,zsubsesion,znodo3,"","EDAD_MAXIMA"   |
| 358 | getItem          | znodo3,zsubsesion,znodo3,"","SUELDO_MINIMO" |
| 360 | getItem          | znodo3,zsubsesion,znodo3,"","SUELDO_MAXIMO" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos  |
| --- | ------------ | ----------- |
| 16  | navegar      | _valor,_url |
| 22  | ver_detalles |             |
| 35  | NullValue    |             |
| 36  | comprobar    | _valor,_url |

| L   | Condición / acción / mensaje literal                                                                                                                    |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26  | if ((null==puesto) &#124;&#124; (''==puesto)){                                                                                                          |
| 28  | alert(mensaje)                                                                                                                                          |
| 49  | if ((null==znompuesto) &#124;&#124; (''==znompuesto)){                                                                                                  |
| 53  | if ((null==znomunidadorg) &#124;&#124; (''==znomunidadorg)){                                                                                            |
| 57  | if ((null==zconsiderations) &#124;&#124; (''==zconsiderations)){                                                                                        |
| 66  | smax = new m4objvalidacion('_num',1,10,'','',false);                                                                                                    |
| 67  | smin = new m4objvalidacion('_num',1,10,'','',false);                                                                                                    |
| 68  | emax = new m4objvalidacion('_num',1,2,'','',false);                                                                                                     |
| 69  | emin = new m4objvalidacion('_num',1,2,'','',false);                                                                                                     |
| 78  | if (obj1.value != ''){                                                                                                                                  |
| 79  | if (smax.resultado==false){                                                                                                                             |
| 83  | if (obj2.value != ''){                                                                                                                                  |
| 84  | if (smin.resultado==false){                                                                                                                             |
| 88  | if (obj3.value != ''){                                                                                                                                  |
| 89  | if (emax.resultado==false){                                                                                                                             |
| 93  | if (obj4.value != ''){                                                                                                                                  |
| 94  | if (emin.resultado==false){                                                                                                                             |
| 98  | v1 = new m4objvalidacion('_num',1,2,'','',false);                                                                                                       |
| 100 | if (v1.resultado==false &#124;&#124; numvac==0) {                                                                                                       |
| 104 | if ( edadmax &lt; edadmin ){                                                                                                                            |
| 108 | if ( salariomax &lt; salariomin ){                                                                                                                      |
| 113 | if (zfechaincorp != ''){                                                                                                                                |
| 114 | if (""==m4fechacomprobacion(m4objeto('SCO_DT_START','NombreFormulario'),false)){                                                                        |
| 119 | if (zfechalimite != ''){                                                                                                                                |
| 120 | if (""==m4fechacomprobacion(m4objeto('SCO_DT_LIMIT','NombreFormulario'),false)){                                                                        |
| 126 | if (m4compfechas(m4objeto('SCO_DT_START','NombreFormulario'),'&gt;',m4objeto('SCO_DT_LIMIT','NombreFormulario'))){                                      |
| 130 | if (movint.checked){var zmovint = "1"}                                                                                                                  |
| 131 | if (movnac.checked){var zmovnac = "1"}                                                                                                                  |
| 132 | if (1==falta_valor){                                                                                                                                    |
| 133 | alert(mensaje)                                                                                                                                          |
| 135 | if (1!=falta_valor){                                                                                                                                    |
| 169 | if (_valor==1){f.action="/servlet/CheckSecurity/JSP/" + _url + "?estado=31"}                                                                            |
| 170 | if (_valor==0){f.action="/servlet/CheckSecurity/JSP/mss_g3/mss_g3_persist_wiz1.jsp?estado=31"}                                                          |
| 190 | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                     |
| 193 | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                                 |
| 344 | if (zcount3 != 0) {                                                                                                                                     |
| 350 | if ((zmovnac2==null)&#124;&#124;(zmovnac2.equals(""))){zmovnac2 = "";}                                                                                  |
| 352 | if ((zmovint2==null)&#124;&#124;(zmovint2.equals(""))){zmovint2 = "";}                                                                                  |
| 354 | if ((zedadmin2==null)&#124;&#124;(zedadmin2.equals(""))){zedadmin2 = "";}                                                                               |
| 356 | if ((zedadmax2==null)&#124;&#124;(zedadmax2.equals(""))){zedadmax2="";}                                                                                 |
| 359 | if ((zsalmin2==null)&#124;&#124;(zsalmin2.equals(""))){zsalmin2="";}                                                                                    |
| 361 | if ((zsalmax2==null)&#124;&#124;(zsalmax2.equals(""))){zsalmax2="";}                                                                                    |
| 376 | } else                                                                                                                                                  |
| 31  | expresión de cálculo/transformación: this.url = "/servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?zVis=0&amp;zSJOB=" + puesto;                      |
| 32  | expresión de cálculo/transformación: var attr = "screenX=" + this.left + ",screenY=" + this.top + ",resizable=yes,scrollbars=yes,width=750,height=650"; |
| 38  | expresión de cálculo/transformación: var mensaje = "Se han encontrado los siguientes errores: " + "\n";                                                 |
| 61  | expresión de cálculo/transformación: var numvac = parseInt(m4valor("NombreFormulario","SSE_NUM_VAC","","get"));                                         |
| 62  | expresión de cálculo/transformación: var edadmin = parseInt(m4valor("NombreFormulario","SCO_MIN_AGE","","get"));                                        |
| 63  | expresión de cálculo/transformación: var edadmax = parseInt(m4valor("NombreFormulario","SCO_MAX_AGE","","get"));                                        |
| 64  | expresión de cálculo/transformación: var salariomin = parseInt(m4valor("NombreFormulario","SCO_MIN_SALARY","","get"));                                  |
| 65  | expresión de cálculo/transformación: var salariomax = parseInt(m4valor("NombreFormulario","SCO_MAX_SALARY","","get"));                                  |
| 224 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                            |
| 225 | expresión de cálculo/transformación: String zlectura1 = zsubsesion + "!" + znodo1;                                                                      |
| 226 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                                 |
| 227 | expresión de cálculo/transformación: String zraiz1 = zsubsesion + "!" + znodo1 + ".";                                                                   |
| 228 | expresión de cálculo/transformación: String ziterator1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                                      |
| 230 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                            |
| 231 | expresión de cálculo/transformación: String zlectura2 = zsubsesion + "!" + znodo2;                                                                      |
| 232 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                                 |
| 233 | expresión de cálculo/transformación: String zraiz2 = zsubsesion + "!" + znodo2 + ".";                                                                   |
| 234 | expresión de cálculo/transformación: String ziterator2 = znodo2 + ":" + zsubsesion + "!" + znodo2;                                                      |
| 236 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                                                            |
| 237 | expresión de cálculo/transformación: String zlectura3 = zsubsesion + "!" + znodo3;                                                                      |
| 238 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                                                 |
| 239 | expresión de cálculo/transformación: String zraiz3 = zsubsesion + "!" + znodo3 + ".";                                                                   |
| 240 | expresión de cálculo/transformación: String ziterator3 = znodo3 + ":" + zsubsesion + "!" + znodo3;                                                      |
| 242 | expresión de cálculo/transformación: String zoutputdef4 = zsubsesion + "!" + znodo4 + "[*]";                                                            |
| 243 | expresión de cálculo/transformación: String zlectura4 = zsubsesion + "!" + znodo4;                                                                      |
| 244 | expresión de cálculo/transformación: String zmove4 = znodo4 + ":" + znodo4 + "[FIRST]";                                                                 |
| 245 | expresión de cálculo/transformación: String zraiz4 = zsubsesion + "!" + znodo4 + ".";                                                                   |
| 246 | expresión de cálculo/transformación: String ziterator4 = znodo4 + ":" + zsubsesion + "!" + znodo4;                                                      |
| 248 | expresión de cálculo/transformación: String zoutputdef5 = zsubsesion + "!" + znodo5 + "[*]";                                                            |
| 249 | expresión de cálculo/transformación: String zlectura5 = zsubsesion + "!" + znodo5;                                                                      |
| 250 | expresión de cálculo/transformación: String zmove5 = znodo5 + ":" + znodo5 + "[FIRST]";                                                                 |
| 252 | expresión de cálculo/transformación: String zraiz5= zsubsesion + "!" + znodo5 + ".";                                                                    |
| 253 | expresión de cálculo/transformación: String ziterator5 = znodo5 + ":" + zsubsesion + "!" + znodo5;                                                      |
| 258 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_VACANT.CARGA";                                                            |
| 262 | expresión de cálculo/transformación: String zSTDIDWORKUNIT = zraiz5 + "STD_ID_WORK_UNIT_CHILD";                                                         |
| 263 | expresión de cálculo/transformación: String zSTDNWORKUNIT = zraiz5 + "STD_N_WORK_UNIT";                                                                 |
| 265 | expresión de cálculo/transformación: String zSTDIDWORKLOCATION = zraiz1 + "STD_ID_WORK_LOCATION";                                                       |
| 266 | expresión de cálculo/transformación: String zSTDNWORKLOCATION = zraiz1 + "STD_N_WORK_LOCATION";                                                         |
| 268 | expresión de cálculo/transformación: String zSTDIDJOBCODE = zraiz2 + "STD_ID_JOB_CODE";                                                                 |
| 269 | expresión de cálculo/transformación: String zSTDNJOBCODE = zraiz2 + "STD_N_JOB_CODE";                                                                   |
| 271 | expresión de cálculo/transformación: String zIDCURRENCY = zraiz4 + "ID_CURRENCY";                                                                       |
| 272 | expresión de cálculo/transformación: String zNMCURRENCY = zraiz4 + "NM_CURRENCY";                                                                       |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 12  | /mss_g3/mss_g3_trans.jsp                              |
| 205 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 310 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp         |
| 495 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                      |
| --- | ---------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                    |
| 10  | /libreria/funciones_sse.js                                             |
| 13  | /libreria/clase_val_entradas.js                                        |
| 169 | /servlet/CheckSecurity/JSP/                                            |
| 170 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_persist_wiz1.jsp?estado=31    |
| 316 | /iconos/noname_solicitar_vacantes_210_100.gif                          |
| 400 | javascript:ver_detalles()                                              |
| 400 | /iconos/lu_nor_more_32.png                                             |
| 467 | javascript:m4calendario(m4objeto(                                      |
| 467 | /iconos/icono_calendario_14_18.gif                                     |
| 474 | javascript:m4calendario(m4objeto(                                      |
| 474 | /iconos/icono_calendario_14_18.gif                                     |
| 491 | javascript:comprobar(1,                                                |
| 491 | /iconos/icono_siguiente_36_36.gif                                      |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                                |
| 12  | /mss_g3/mss_g3_trans.jsp                                               |
| 31  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?zVis=0&amp;zSJOB= |
| 205 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                     |
| 310 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                          |
| 491 | mss_g3/mss_g3_p1_wiz2.jsp                                              |
| 495 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                             | Resolución | Ficha / candidato                                                                                |
| ------ | --- | ---------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 12  | /mss_g3/mss_g3_trans.jsp                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                               |
| BASE   | 205 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 310 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                          | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 495 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |
| BASE   | 10  | /libreria/funciones_sse.js                                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 13  | /libreria/clase_val_entradas.js                                        | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 170 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_persist_wiz1.jsp?estado=31    | ausente    | P06                                                                                              |
| BASE   | 400 | javascript:ver_detalles()                                              | dinámica   | P06                                                                                              |
| BASE   | 467 | javascript:m4calendario(m4objeto(                                      | dinámica   | P06                                                                                              |
| BASE   | 474 | javascript:m4calendario(m4objeto(                                      | dinámica   | P06                                                                                              |
| BASE   | 491 | javascript:comprobar(1,                                                | dinámica   | P06                                                                                              |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                                | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 12  | /mss_g3/mss_g3_trans.jsp                                               | contextual | [mss_g3/mss_g3_trans.jsp](mss_g3--mss_g3_trans.md)                                               |
| BASE   | 31  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8_desc.jsp?zVis=0&amp;zSJOB= | ausente    | P06                                                                                              |
| BASE   | 205 | ../../mss_generico/espanol/mssgenerico_menusup.jsp                     | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 310 | ../../mss_g3/espanol/mss_g3_links_wizzard.jsp                          | física     | [mss_g3/mss_g3_links_wizzard.jsp](mss_g3--mss_g3_links_wizzard.md)                               |
| BASE   | 491 | mss_g3/mss_g3_p1_wiz2.jsp                                              | ausente    | P06                                                                                              |
| BASE   | 495 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp                  | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p1_wiz1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
