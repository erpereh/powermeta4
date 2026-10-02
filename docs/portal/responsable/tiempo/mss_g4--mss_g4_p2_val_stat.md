# Ausencias

Identificador: `mss_g4/mss_g4_p2_val_stat.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_p2_val_stat.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p2_val_stat.jsp) | `ae993eb120bcc910ba3e6e1e7e26abe8eea258a145b12a07b162e743da483153` |    374 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_p2_val_stat.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p2_val_stat.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta           |
| --- | ---------------------------------- |
| 8   | Ausencias                          |
| 119 | Ausencias                          |
| 198 | Año [valor dinámico] $M4ITEM0$     |
| 210 | Empleado                           |
| 213 | 1                                  |
| 216 | 2                                  |
| 219 | 3                                  |
| 222 | 4                                  |
| 225 | 5                                  |
| 228 | 6                                  |
| 231 | 7                                  |
| 234 | Total                              |
| 300 | [valor dinámico], [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                     |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 126 | img     | alt=Ausencias; src=/iconos/noname_incidencias_pequenio_mss_52_100.gif; width=100; height=100; onmouseover=m4luztotal(this); onmouseout=m4oscuridad(this)                                                                                                                                      |
| 179 | form    | action=/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41; method=post; name=oculto; id=oculto                                                                                                                                                                                     |
| 180 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                                                                               |
| 181 | input   | type=hidden; id=zparamyear; name=zparamyear; value=                                                                                                                                                                                                                                           |
| 183 | form    | action=/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41; method=post; name=detalle; id=detalle                                                                                                                                                                                |
| 184 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                                                                                               |
| 185 | input   | type=hidden; id=zparamyear; name=zparamyear; value=&lt;%=zparamyear%&gt;                                                                                                                                                                                                                      |
| 186 | input   | type=hidden; id=zperson; name=zperson; value=                                                                                                                                                                                                                                                 |
| 187 | input   | type=hidden; id=zincidence; name=zincidence; value=                                                                                                                                                                                                                                           |
| 188 | input   | type=hidden; id=znmincidence; name=znmincidence; value=                                                                                                                                                                                                                                       |
| 189 | input   | type=hidden; id=zempleado; name=zempleado; value=                                                                                                                                                                                                                                             |
| 196 | form    | name=anios; id=anios; action=                                                                                                                                                                                                                                                                 |
| 199 | select  | id=filtroanios; class=fuenteapartados; onchange=filtrar()                                                                                                                                                                                                                                     |
| 200 | option  | value=&lt;%=zparamyear%&gt;                                                                                                                                                                                                                                                                   |
| 203 | option  | value=$M4ITEM0$                                                                                                                                                                                                                                                                               |
| 301 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','0','set');detalle.submit();                                                                       |
| 305 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','2','set');m4valor('detalle','znmincidence','Accidente','set');detalle.submit();                   |
| 311 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','7','set');m4valor('detalle','znmincidence','No Justificada','set');detalle.submit();              |
| 317 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','1','set');m4valor('detalle','znmincidence','Enfermedad','set');detalle.submit();                  |
| 323 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','8','set');m4valor('detalle','znmincidence','Huelga','set');detalle.submit();                      |
| 329 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','3','set');m4valor('detalle','znmincidence','Maternidad','set');detalle.submit();                  |
| 335 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','10','set');m4valor('detalle','znmincidence','Riesgo durante el Embarazo','set');detalle.submit(); |
| 341 | a       | title=Ver detalle; href=javascript:m4valor('detalle','zperson','&lt;%=zSTDIDPERSON%&gt;','set');m4valor('detalle','zempleado','&lt;%=zEMPLEADO%&gt;','set');m4valor('detalle','zincidence','9','set');m4valor('detalle','znmincidence','Vacaciones','set');detalle.submit();                  |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal          |
| --- | --------------- | ----------------------- |
| 17  | estado          | zhash.get("estado")     |
| 18  | zinicios        | zhash.get("zinicios")   |
| 19  | zparamyear      | zhash.get("zparamyear") |

| L   | Variable           | Expresión fuente                                                               | Resolución estática parcial                                                                                                         |
| --- | ------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| 17  | estado             | (String) zhash.get("estado")                                                   | (String) zhash.get("estado")                                                                                                        |
| 18  | zinicios           | (String) zhash.get("zinicios")                                                 | (String) zhash.get("zinicios")                                                                                                      |
| 19  | zparamyear         | (String) zhash.get("zparamyear")                                               | (String) zhash.get("zparamyear")                                                                                                    |
| 24  | ano                | ahora.get(ahora.YEAR)                                                          | ahora.get(ahora.YEAR)                                                                                                               |
| 25  | strano             | String.valueOf(ano)                                                            | String.valueOf(ano)                                                                                                                 |
| 49  | zsubsesion         | "SSM_ABSENCES"                                                                 | SSM_ABSENCES                                                                                                                        |
| 50  | zmeta4object       | "SSM_ABSENCES"                                                                 | SSM_ABSENCES                                                                                                                        |
| 51  | zmetodocarga       | zsubsesion + "!SSM_PRINCIPAL.CARGA"                                            | SSM_ABSENCES{"!SSM_PRINCIPAL.CARGA"}                                                                                                |
| 52  | znodo              | "SSM_EMPLEADOS"                                                                | SSM_EMPLEADOS                                                                                                                       |
| 53  | znodoanios         | "M4T_YEARS_LIST"                                                               | M4T_YEARS_LIST                                                                                                                      |
| 54  | znodooverview      | "SSM_ABSENCE_OVERVIEW"                                                         | SSM_ABSENCE_OVERVIEW                                                                                                                |
| 55  | zraiz              | zsubsesion + "!" + znodo + "."                                                 | SSM_ABSENCES{"!"}SSM_EMPLEADOS{"."}                                                                                                 |
| 56  | zraizanios         | zsubsesion + "!" + znodoanios + "."                                            | SSM_ABSENCES{"!"}M4T_YEARS_LIST{"."}                                                                                                |
| 58  | zventanas          | "20"                                                                           | 20                                                                                                                                  |
| 59  | zvuelta            | 5                                                                              | 5                                                                                                                                   |
| 60  | zdireccion         | "/mss_g4/mss_g4_p2_val.jsp"                                                    | /mss_g4/mss_g4_p2_val.jsp                                                                                                           |
| 64  | ziterator          | znodo + ":" + zsubsesion + "!" + znodo                                         | SSM_EMPLEADOS{":"}SSM_ABSENCES{"!"}SSM_EMPLEADOS                                                                                    |
| 65  | zregistroinicial   | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                |
| 67  | zventana           | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                               |
| 68  | zregistrofinal     | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                  |
| 69  | zmove              | znodo + ":" + znodo + "["+zregistroinicial+"]"                                 | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}Integer.valueOf(zinicios).intValue()]                                                           |
| 70  | zoutputdef         | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_ABSENCES{"!"}SSM_EMPLEADOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 72  | ziteratoranios     | znodoanios + ":" + zsubsesion + "!" + znodoanios                               | M4T_YEARS_LIST{":"}SSM_ABSENCES{"!"}M4T_YEARS_LIST                                                                                  |
| 73  | zmoveanios         | znodoanios + ":" + znodoanios + "[FIRST]"                                      | M4T_YEARS_LIST{":"}M4T_YEARS_LIST{"[FIRST]"}                                                                                        |
| 74  | zoutputdefanios    | zsubsesion + "!" + znodoanios + "[*]"                                          | SSM_ABSENCES{"!"}M4T_YEARS_LIST{"[*]"}                                                                                              |
| 77  | ztipocarga         | "OVERVIEW"                                                                     | OVERVIEW                                                                                                                            |
| 79  | zYEAR              | zraizanios +"YEAR"                                                             | SSM_ABSENCES{"!"}M4T_YEARS_LIST{"."}YEAR                                                                                            |
| 101 | zcount             | 0                                                                              | 0                                                                                                                                   |
| 102 | zcounti            | 0                                                                              | 0                                                                                                                                   |
| 111 | zcountv            | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                             |
| 241 | i                  | 0                                                                              | 0                                                                                                                                   |
| 243 | zEMPLEADO          | ""                                                                             |                                                                                                                                     |
| 244 | zSNOMBRE           | ""                                                                             |                                                                                                                                     |
| 245 | zSAPELLIDOS        | ""                                                                             |                                                                                                                                     |
| 246 | zSTDIDPERSON       | ""                                                                             |                                                                                                                                     |
| 248 | zACCIDENTE         | 0                                                                              | 0                                                                                                                                   |
| 249 | zNOJUSTIFICADA     | 0                                                                              | 0                                                                                                                                   |
| 250 | zENFERMEDAD        | 0                                                                              | 0                                                                                                                                   |
| 251 | zHUELGA            | 0                                                                              | 0                                                                                                                                   |
| 252 | zMATERNIDAD        | 0                                                                              | 0                                                                                                                                   |
| 253 | zRIESGOENEMBARAZO  | 0                                                                              | 0                                                                                                                                   |
| 254 | zVACACIONES        | 0                                                                              | 0                                                                                                                                   |
| 255 | zTOTALEMP          | 0                                                                              | 0                                                                                                                                   |
| 256 | zACCIDENTE2        | ""                                                                             |                                                                                                                                     |
| 257 | zACCIDENTEAUX      | ""                                                                             |                                                                                                                                     |
| 258 | zNOJUSTIFICADA2    | ""                                                                             |                                                                                                                                     |
| 259 | zENFERMEDAD2       | ""                                                                             |                                                                                                                                     |
| 260 | zHUELGA2           | ""                                                                             |                                                                                                                                     |
| 261 | zMATERNIDAD2       | ""                                                                             |                                                                                                                                     |
| 262 | zRIESGOENEMBARAZO2 | ""                                                                             |                                                                                                                                     |
| 263 | zVACACIONES2       | ""                                                                             |                                                                                                                                     |
| 264 | zTOTALEMP2         | ""                                                                             |                                                                                                                                     |
| 267 | id                 | String.valueOf(i)                                                              | String.valueOf(i)                                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                      |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 83  | m4:startpage | m4task=SSM_ABSENCES                                                                                                                                     |
| 84  | m4:beginjob  |                                                                                                                                                         |
| 85  | m4:datadef   | m4o=SSM_ABSENCES; m4name=SSM_ABSENCES                                                                                                                   |
| 94  | m4:exec      | m4method=SSM_ABSENCES{"!SSM_PRINCIPAL.CARGA"}                                                                                                           |
| 94  | m4:param     | name=TIPO_CARGA; value=OVERVIEW                                                                                                                         |
| 95  | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                                                   |
| 95  | m4:param     | name=m4name0; value=SSM_ABSENCES{"!"}SSM_EMPLEADOS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 96  | m4:outputdef | m4alias=M4T_YEARS_LIST                                                                                                                                  |
| 96  | m4:param     | name=m4name0; value=SSM_ABSENCES{"!"}M4T_YEARS_LIST{"[*]"}                                                                                              |
| 97  | m4:endjob    |                                                                                                                                                         |
| 98  | m4:move      |                                                                                                                                                         |
| 98  | m4:param     | name=SSM_ABSENCES; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"["}Integer.valueOf(zinicios).intValue()]                                                      |
| 99  | m4:move      |                                                                                                                                                         |
| 99  | m4:param     | name=SSM_ABSENCES; value=M4T_YEARS_LIST{":"}M4T_YEARS_LIST{"[FIRST]"}                                                                                   |
| 201 | m4:iterator  | m4rows=*; m4node=M4T_YEARS_LIST{":"}SSM_ABSENCES{"!"}M4T_YEARS_LIST                                                                                     |
| 202 | m4:param     | name=m4item0; value=SSM_ABSENCES{"!"}M4T_YEARS_LIST{"."}YEAR                                                                                            |
| 373 | m4:endpage   |                                                                                                                                                         |

| L   | Operación        | Argumentos literales                              |
| --- | ---------------- | ------------------------------------------------- |
| 89  | setItem          | zsubsesion,znodooverview,"","YEAR",zparamyear     |
| 105 | getCount         | znodo,zsubsesion,znodo                            |
| 109 | getCountInClient | znodo,zsubsesion,znodo                            |
| 269 | getItem          | znodo,zmeta4object,znodo,"","STD_ID_PERSON"       |
| 270 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FIRST_NAME"    |
| 271 | getItem          | znodo,zmeta4object,znodo,"","STD_N_FAMILY_NAME_1" |
| 273 | getItem          | znodo,zmeta4object,znodo,"","INCIDENCE2"          |
| 276 | getItem          | znodo,zmeta4object,znodo,"","INCIDENCE7"          |
| 279 | getItem          | znodo,zmeta4object,znodo,"","INCIDENCE1"          |
| 282 | getItem          | znodo,zmeta4object,znodo,"","INCIDENCE8"          |
| 285 | getItem          | znodo,zmeta4object,znodo,"","INCIDENCE3"          |
| 288 | getItem          | znodo,zmeta4object,znodo,"","INCIDENCE10"         |
| 291 | getItem          | znodo,zmeta4object,znodo,"","INCIDENCE9"          |
| 294 | getItem          | znodo,zmeta4object,znodo,"","TOTAL_EMP"           |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 33  | filtrar |            |

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="41";}                                                                         |
| 21  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                  |
| 22  | if ((zparamyear==null)&#124;&#124;(zparamyear.equals(""))){                                                                              |
| 193 | if (zcounti &gt; 0) {                                                                                                                    |
| 304 | &lt;%if (zACCIDENTE &gt; 0){%&gt;                                                                                                        |
| 306 | &lt;%}else{%&gt;                                                                                                                         |
| 310 | &lt;%if (zNOJUSTIFICADA &gt; 0){%&gt;                                                                                                    |
| 312 | &lt;%}else{%&gt;                                                                                                                         |
| 316 | &lt;%if (zENFERMEDAD &gt; 0){%&gt;                                                                                                       |
| 318 | &lt;%}else{%&gt;                                                                                                                         |
| 322 | &lt;%if (zHUELGA &gt; 0){%&gt;                                                                                                           |
| 324 | &lt;%}else{%&gt;                                                                                                                         |
| 328 | &lt;%if (zMATERNIDAD &gt; 0){%&gt;                                                                                                       |
| 330 | &lt;%}else{%&gt;                                                                                                                         |
| 334 | &lt;%if (zRIESGOENEMBARAZO &gt; 0){%&gt;                                                                                                 |
| 336 | &lt;%}else{%&gt;                                                                                                                         |
| 340 | &lt;%if (zVACACIONES &gt; 0){%&gt;                                                                                                       |
| 342 | &lt;%}else{%&gt;                                                                                                                         |
| 359 | else{%&gt;                                                                                                                               |
| 51  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";                                          |
| 55  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                      |
| 56  | expresión de cálculo/transformación: String zraizanios = zsubsesion + "!" + znodoanios + ".";                                            |
| 64  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                          |
| 66  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 68  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 69  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";                                      |
| 70  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 72  | expresión de cálculo/transformación: String ziteratoranios = znodoanios + ":" + zsubsesion + "!" + znodoanios;                           |
| 73  | expresión de cálculo/transformación: String zmoveanios = znodoanios + ":" + znodoanios + "[FIRST]";                                      |
| 74  | expresión de cálculo/transformación: String zoutputdefanios = zsubsesion + "!" + znodoanios + "[*]";                                     |
| 272 | expresión de cálculo/transformación: zEMPLEADO = zSNOMBRE + " " + zSAPELLIDOS;                                                           |
| 275 | expresión de cálculo/transformación: zACCIDENTE = Integer.parseInt(zACCIDENTE2);                                                         |
| 278 | expresión de cálculo/transformación: zNOJUSTIFICADA = Integer.parseInt(zNOJUSTIFICADA2);                                                 |
| 281 | expresión de cálculo/transformación: zENFERMEDAD = Integer.parseInt(zENFERMEDAD2);                                                       |
| 284 | expresión de cálculo/transformación: zHUELGA = Integer.parseInt(zHUELGA2);                                                               |
| 287 | expresión de cálculo/transformación: zMATERNIDAD = Integer.parseInt(zMATERNIDAD2);                                                       |
| 290 | expresión de cálculo/transformación: zRIESGOENEMBARAZO = Integer.parseInt(zRIESGOENEMBARAZO2);                                           |
| 293 | expresión de cálculo/transformación: zVACACIONES = Integer.parseInt(zVACACIONES2);                                                       |
| 296 | expresión de cálculo/transformación: zTOTALEMP = Integer.parseInt(zTOTALEMP2);                                                           |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 11  | ../../mss_generico/espanol/menu_mss.jsp               |
| 43  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 46  | ../../sse_generico/espanol/generico_links.jsp         |
| 355 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 370 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                |
| --- | ---------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                              |
| 10  | /libreria/funciones_sse.js                                       |
| 126 | /iconos/noname_incidencias_pequenio_mss_52_100.gif               |
| 179 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41    |
| 183 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41 |
| 301 | javascript:m4valor(                                              |
| 305 | javascript:m4valor(                                              |
| 311 | javascript:m4valor(                                              |
| 317 | javascript:m4valor(                                              |
| 323 | javascript:m4valor(                                              |
| 329 | javascript:m4valor(                                              |
| 335 | javascript:m4valor(                                              |
| 341 | javascript:m4valor(                                              |
| 11  | ../../mss_generico/espanol/menu_mss.jsp                          |
| 43  | ../../mss_generico/espanol/mssgenerico_menusup.jsp               |
| 46  | ../../sse_generico/espanol/generico_links.jsp                    |
| 60  | /mss_g4/mss_g4_p2_val.jsp                                        |
| 355 | ../../sse_generico/espanol/generico_ventanas_post.jsp            |
| 370 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                       | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ---------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                          | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 43  | ../../mss_generico/espanol/mssgenerico_menusup.jsp               | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 46  | ../../sse_generico/espanol/generico_links.jsp                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 355 | ../../sse_generico/espanol/generico_ventanas_post.jsp            | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 370 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 10  | /libreria/funciones_sse.js                                       | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 179 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41    | ausente    | P06                                                                                                             |
| BASE   | 183 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41 | ausente    | P06                                                                                                             |
| BASE   | 301 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 305 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 311 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 317 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 323 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 329 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 335 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 341 | javascript:m4valor(                                              | dinámica   | P06                                                                                                             |
| BASE   | 11  | ../../mss_generico/espanol/menu_mss.jsp                          | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 43  | ../../mss_generico/espanol/mssgenerico_menusup.jsp               | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 46  | ../../sse_generico/espanol/generico_links.jsp                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 60  | /mss_g4/mss_g4_p2_val.jsp                                        | ausente    | P06                                                                                                             |
| BASE   | 355 | ../../sse_generico/espanol/generico_ventanas_post.jsp            | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 370 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_p2_val_stat.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
