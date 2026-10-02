# mss_g4_p2_val

Identificador: `mss_g4/mss_g4_p2_val.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_p2_val.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p2_val.jsp) | `7a01aa3c9d2dc850f91102911ead797c4e9d88b175ff347b138be6cb7ff20029` |    366 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_p2_val.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p2_val.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta           |
| --- | ---------------------------------- |
| 146 | [valor dinámico] [valor dinámico]- |
| 175 | [valor dinámico] "&gt;             |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                    |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 130 | form    | action=/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41; method=post; name=oculto; id=oculto                                                                                    |
| 131 | input   | type=hidden; id=zparamyear; name=zparamyear; value=                                                                                                                                          |
| 133 | form    | action=/servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41; method=post; name=detalle; id=detalle                                                                               |
| 134 | input   | type=hidden; id=zparamyear; name=zparamyear; value=&lt;%=zparamyear%&gt;                                                                                                                     |
| 135 | input   | type=hidden; id=zperson; name=zperson; value=                                                                                                                                                |
| 136 | input   | type=hidden; id=zincidence; name=zincidence; value=                                                                                                                                          |
| 137 | input   | type=hidden; id=znmincidence; name=znmincidence; value=                                                                                                                                      |
| 138 | input   | type=hidden; id=zempleado; name=zempleado; value=                                                                                                                                            |
| 145 | img     | src=/iconos/noname_ausencias_dch_52_100.gif; width=100; height=100; alt=Valida vacaciones; border=0                                                                                          |
| 170 | form    | name=anios; id=anios; action=                                                                                                                                                                |
| 176 | select  | id=filtroanios; class=fuenteapartados; onchange=filtrar()                                                                                                                                    |
| 179 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                                                                     |
| 241 | a       | title=&lt;%=etiqueta%&gt;; onclick=javascript:asignar('&lt;%=zSGBNAMEjs%&gt;');; href=javascript:navegaremp('&lt;%=zSTDIDPERSON%&gt;');                                                      |
| 268 | a       | title=&lt;%=etiqueta%&gt;; onclick=javascript:asignar('&lt;%=zSGBNAMEjs%&gt;');; href=javascript:navegartipo('&lt;%=zSTDIDPERSON%&gt;','&lt;%=zIDINCIDENCE%&gt;','&lt;%=zNMINCIDENCE%&gt;'); |
| 289 | a       | title=&lt;%=etiqueta%&gt;; onclick=javascript:asignar('&lt;%=zSGBNAMEjs%&gt;');; href=javascript:navegaremp('&lt;%=zSTDIDPERSON%&gt;');                                                      |
| 317 | a       | title=&lt;%=etiqueta%&gt;; onclick=javascript:asignar('&lt;%=zSGBNAMEjs%&gt;');; href=javascript:navegartipo('&lt;%=zSTDIDPERSON%&gt;','&lt;%=zIDINCIDENCE%&gt;','&lt;%=zNMINCIDENCE%&gt;'); |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable        | Expresión fuente                                                            | Resolución estática parcial                                                                         |
| --- | --------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 9   | titulo          | "Ausencias"                                                                 | Ausencias                                                                                           |
| 10  | tfuncional      | "Ausencias"                                                                 | Ausencias                                                                                           |
| 11  | dfuncional      | "Resumen anual de las ausencias de tus empleados. Puedes seleccionar el añ  | {"Resumen anual de las ausencias de tus empleados. Puedes seleccionar el añ}                        |
| 12  | ttabla          | "Añ                                                                         | {"Añ}                                                                                               |
| 13  | ttabla2         | "Empleado"                                                                  | Empleado                                                                                            |
| 14  | ttabla3         | "Total"                                                                     | Total                                                                                               |
| 15  | etiqueta        | "Ver detalle"                                                               | Ver detalle                                                                                         |
| 16  | etiqueta2       | "No hay registradas ausencias para tus empleados en el añ                   | {"No hay registradas ausencias para tus empleados en el añ}                                         |
| 25  | estado          | (String) zobjtabla.m4paramvalor("estado")                                   | (String) zobjtabla.m4paramvalor("estado")                                                           |
| 26  | zparamyear      | (String) zobjtabla.m4paramvalor("zparamyear")                               | (String) zobjtabla.m4paramvalor("zparamyear")                                                       |
| 30  | ano             | ahora.get(ahora.YEAR)                                                       | ahora.get(ahora.YEAR)                                                                               |
| 31  | strano          | String.valueOf(ano)                                                         | String.valueOf(ano)                                                                                 |
| 61  | zsubsesion      | "SSM_ABSENCES_DYN"                                                          | SSM_ABSENCES_DYN                                                                                    |
| 62  | zmeta4object    | "SSM_ABSENCES_DYN"                                                          | SSM_ABSENCES_DYN                                                                                    |
| 64  | znodo           | "SSM_ABSENCES_CROSS"                                                        | SSM_ABSENCES_CROSS                                                                                  |
| 65  | znodoemp        | "SSM_EMPLEADOS"                                                             | SSM_EMPLEADOS                                                                                       |
| 66  | znodoanios      | "M4T_YEARS_LIST"                                                            | M4T_YEARS_LIST                                                                                      |
| 67  | znodooverview   | "SSM_ABSENCE_OVERVIEW"                                                      | SSM_ABSENCE_OVERVIEW                                                                                |
| 68  | znodoincid      | "M4T_INCIDENCES"                                                            | M4T_INCIDENCES                                                                                      |
| 70  | zmetodocarga    | zsubsesion + "!SSM_PRINCIPAL.CARGA"                                         | SSM_ABSENCES_DYN{"!SSM_PRINCIPAL.CARGA"}                                                            |
| 71  | ztipocarga      | "OVERVIEW"                                                                  | OVERVIEW                                                                                            |
| 73  | zraiz           | zsubsesion + "!" + znodo + "."                                              | SSM_ABSENCES_DYN{"!"}SSM_ABSENCES_CROSS{"."}                                                        |
| 74  | zmove           | znodo + ":" + znodo + "[FIRST]"                                             | SSM_ABSENCES_CROSS{":"}SSM_ABSENCES_CROSS{"[FIRST]"}                                                |
| 75  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                            | SSM_ABSENCES_DYN{"!"}SSM_ABSENCES_CROSS{"[*]"}                                                      |
| 77  | zmoveanios      | znodoanios + ":" + znodoanios + "[FIRST]"                                   | M4T_YEARS_LIST{":"}M4T_YEARS_LIST{"[FIRST]"}                                                        |
| 78  | zoutputdefanios | zsubsesion + "!" + znodoanios + "[*]"                                       | SSM_ABSENCES_DYN{"!"}M4T_YEARS_LIST{"[*]"}                                                          |
| 79  | zcomunanios     | znodoanios + ":" + zsubsesion + "!" + znodoanios + "[&amp;VAR.m4lix]" + "." | M4T_YEARS_LIST{":"}SSM_ABSENCES_DYN{"!"}M4T_YEARS_LIST{"[&amp;VAR.m4lix]"}{"."}                     |
| 81  | zmoveincid      | znodoincid + ":" + znodoincid + "[FIRST]"                                   | M4T_INCIDENCES{":"}M4T_INCIDENCES{"[FIRST]"}                                                        |
| 82  | zoutputdefincid | zsubsesion + "!" + znodoincid + "[*]"                                       | SSM_ABSENCES_DYN{"!"}M4T_INCIDENCES{"[*]"}                                                          |
| 83  | zcomunincid     | znodoincid + ":" + zsubsesion + "!" + znodoincid + "[&amp;VAR.m4lix]" + "." | M4T_INCIDENCES{":"}SSM_ABSENCES_DYN{"!"}M4T_INCIDENCES{"[&amp;VAR.m4lix]"}{"."}                     |
| 85  | zmoveemp        | znodoemp + ":" + znodoemp + "[FIRST]"                                       | SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                          |
| 86  | zoutputdefemp   | zsubsesion + "!" + znodoemp + "[*]"                                         | SSM_ABSENCES_DYN{"!"}SSM_EMPLEADOS{"[*]"}                                                           |
| 88  | zYEAR           | zcomunanios +"YEAR"                                                         | M4T_YEARS_LIST{":"}SSM_ABSENCES_DYN{"!"}M4T_YEARS_LIST{"[&amp;VAR.m4lix]"}{"."}YEAR                 |
| 89  | zSCOIDINCIDENCE | zcomunincid + "SCO_ID_INCIDENCE"                                            | M4T_INCIDENCES{":"}SSM_ABSENCES_DYN{"!"}M4T_INCIDENCES{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INCIDENCE"} |
| 90  | zSCONMINCIDENCE | zcomunincid + "SCO_NM_INCIDENCE"                                            | M4T_INCIDENCES{":"}SSM_ABSENCES_DYN{"!"}M4T_INCIDENCES{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"} |
| 112 | zcount          | 0                                                                           | 0                                                                                                   |
| 113 | zcounti         | 0                                                                           | 0                                                                                                   |
| 114 | zcountempi      | 0                                                                           | 0                                                                                                   |
| 115 | zcountincidi    | 0                                                                           | 0                                                                                                   |
| 116 | zcountaniosi    | 0                                                                           | 0                                                                                                   |
| 125 | zcountv         | String.valueOf(zcounti)                                                     | String.valueOf(zcounti)                                                                             |
| 126 | zcountempv      | String.valueOf(zcountempi)                                                  | String.valueOf(zcountempi)                                                                          |
| 127 | zcountincidv    | String.valueOf(zcountincidi)                                                | String.valueOf(zcountincidi)                                                                        |
| 128 | zcountaniosv    | String.valueOf(zcountaniosi)                                                | String.valueOf(zcountaniosi)                                                                        |
| 150 | zposicions      | "0"                                                                         | 0                                                                                                   |
| 151 | zposicion       | 0                                                                           | 0                                                                                                   |
| 196 | regincid        | 0                                                                           | 0                                                                                                   |
| 198 | regincids       | String.valueOf(regincid)                                                    | String.valueOf(regincid)                                                                            |
| 210 | regemp          | 0                                                                           | 0                                                                                                   |
| 212 | zEMPLEADO       | ""                                                                          |                                                                                                     |
| 213 | zSTDIDPERSON    | ""                                                                          |                                                                                                     |
| 214 | zSNOMBRE        | ""                                                                          |                                                                                                     |
| 215 | zSGBNAME        | ""                                                                          |                                                                                                     |
| 216 | zSGBNAMEjs      | ""                                                                          |                                                                                                     |
| 217 | zSAPELLIDOS     | ""                                                                          |                                                                                                     |
| 218 | zIDINCIDENCE    | ""                                                                          |                                                                                                     |
| 219 | zNMINCIDENCE    | ""                                                                          |                                                                                                     |
| 220 | zTOTAL2         | ""                                                                          |                                                                                                     |
| 221 | zTOTAL          | 0                                                                           | 0                                                                                                   |
| 223 | zTOTALEMP2      | ""                                                                          |                                                                                                     |
| 224 | zTOTALEMP       | 0                                                                           | 0                                                                                                   |
| 225 | zcontrol        | 0                                                                           | 0                                                                                                   |
| 228 | regemps         | String.valueOf(regemp)                                                      | String.valueOf(regemp)                                                                              |
| 243 | regcross        | 0                                                                           | 0                                                                                                   |
| 244 | pointcross      | 0                                                                           | 0                                                                                                   |
| 248 | pointcrosss     | String.valueOf(pointcross)                                                  | String.valueOf(pointcross)                                                                          |
| 252 | code            | zTOTAL2.substring(zTOTAL2.indexOf(".") + 1,4)                               | {zTOTAL2.substring(zTOTAL2.indexOf(".")}{1,4)}                                                      |
| 263 | regcrosss       | String.valueOf(regcross)                                                    | String.valueOf(regcross)                                                                            |
| 276 | code            | zTOTALEMP2.substring(zTOTALEMP2.indexOf(".") + 1,4)                         | {zTOTALEMP2.substring(zTOTALEMP2.indexOf(".")}{1,4)}                                                |
| 291 | regcross        | 0                                                                           | 0                                                                                                   |
| 292 | pointcross      | 0                                                                           | 0                                                                                                   |
| 296 | pointcrosss     | String.valueOf(pointcross)                                                  | String.valueOf(pointcross)                                                                          |
| 301 | code            | zTOTAL2.substring(zTOTAL2.indexOf(".") + 1,4)                               | {zTOTAL2.substring(zTOTAL2.indexOf(".")}{1,4)}                                                      |
| 312 | regcrosss       | String.valueOf(regcross)                                                    | String.valueOf(regcross)                                                                            |
| 326 | code            | zTOTALEMP2.substring(zTOTALEMP2.indexOf(".") + 1,4)                         | {zTOTALEMP2.substring(zTOTALEMP2.indexOf(".")}{1,4)}                                                |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                        |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 92  | m4:startpage | m4task=SSM_ABSENCES_DYN                                                                                                   |
| 93  | m4:beginjob  |                                                                                                                           |
| 94  | m4:datadef   | m4o=SSM_ABSENCES_DYN; m4name=SSM_ABSENCES_DYN                                                                             |
| 101 | m4:exec      | m4method=SSM_ABSENCES_DYN{"!SSM_PRINCIPAL.CARGA"}                                                                         |
| 101 | m4:param     | name=TIPO_CARGA; value=OVERVIEW                                                                                           |
| 102 | m4:outputdef | m4alias=SSM_ABSENCES_CROSS                                                                                                |
| 102 | m4:param     | name=m4name0; value=SSM_ABSENCES_DYN{"!"}SSM_ABSENCES_CROSS{"[*]"}                                                        |
| 103 | m4:outputdef | m4alias=M4T_YEARS_LIST                                                                                                    |
| 103 | m4:param     | name=m4name0; value=SSM_ABSENCES_DYN{"!"}M4T_YEARS_LIST{"[*]"}                                                            |
| 104 | m4:outputdef | m4alias=M4T_INCIDENCES                                                                                                    |
| 104 | m4:param     | name=m4name0; value=SSM_ABSENCES_DYN{"!"}M4T_INCIDENCES{"[*]"}                                                            |
| 105 | m4:outputdef | m4alias=SSM_EMPLEADOS                                                                                                     |
| 105 | m4:param     | name=m4name0; value=SSM_ABSENCES_DYN{"!"}SSM_EMPLEADOS{"[*]"}                                                             |
| 106 | m4:endjob    |                                                                                                                           |
| 107 | m4:move      |                                                                                                                           |
| 107 | m4:param     | name=SSM_ABSENCES_DYN; value=SSM_ABSENCES_CROSS{":"}SSM_ABSENCES_CROSS{"[FIRST]"}                                         |
| 108 | m4:move      |                                                                                                                           |
| 108 | m4:param     | name=SSM_ABSENCES_DYN; value=M4T_YEARS_LIST{":"}M4T_YEARS_LIST{"[FIRST]"}                                                 |
| 109 | m4:move      |                                                                                                                           |
| 109 | m4:param     | name=SSM_ABSENCES_DYN; value=M4T_INCIDENCES{":"}M4T_INCIDENCES{"[FIRST]"}                                                 |
| 110 | m4:move      |                                                                                                                           |
| 110 | m4:param     | name=SSM_ABSENCES_DYN; value=SSM_EMPLEADOS{":"}SSM_EMPLEADOS{"[FIRST]"}                                                   |
| 153 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountincidv).intValue()-1).toString()                                                 |
| 158 | m4:item      | m4name=M4T_INCIDENCES{":"}SSM_ABSENCES_DYN{"!"}M4T_INCIDENCES{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true |
| 178 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountaniosv).intValue()-1).toString()                                                 |
| 179 | m4:item      | m4name=M4T_YEARS_LIST{":"}SSM_ABSENCES_DYN{"!"}M4T_YEARS_LIST{"[&amp;VAR.m4lix]"}{"."}YEAR; htmlsafe=true                 |
| 362 | m4:endpage   |                                                                                                                           |

| L   | Operación        | Argumentos literales                                     |
| --- | ---------------- | -------------------------------------------------------- |
| 98  | setItem          | zsubsesion,znodooverview,"","YEAR",zparamyear            |
| 119 | getCount         | znodo,zsubsesion,znodo                                   |
| 120 | getCountInClient | znodo,zsubsesion,znodo                                   |
| 121 | getCountInClient | znodoemp,zsubsesion,znodoemp                             |
| 122 | getCountInClient | znodoincid,zsubsesion,znodoincid                         |
| 123 | getCountInClient | znodoanios,zsubsesion,znodoanios                         |
| 230 | getItem          | znodoemp,zmeta4object,znodoemp,"","STD_ID_PERSON"        |
| 232 | getItem          | znodoemp,zmeta4object,znodoemp,"","STD_N_FAMILY_NAME_1"  |
| 233 | getItem          | znodoemp,zmeta4object,znodoemp,"","STD_N_FIRST_NAME"     |
| 234 | getItem          | znodoemp,zmeta4object,znodoemp,"","SCO_GB_NAME"          |
| 250 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_INCIDENCE"           |
| 251 | getItem          | znodo,zmeta4object,znodo,"","TOTAL"                      |
| 265 | getItem          | znodoincid,zmeta4object,znodoincid,"","SCO_NM_INCIDENCE" |
| 275 | getItem          | znodo,zmeta4object,znodo,"","TOTAL_EMP"                  |
| 298 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_INCIDENCE"           |
| 300 | getItem          | znodo,zmeta4object,znodo,"","TOTAL"                      |
| 314 | getItem          | znodoincid,zmeta4object,znodoincid,"","SCO_NM_INCIDENCE" |
| 325 | getItem          | znodo,zmeta4object,znodo,"","TOTAL_EMP"                  |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos  |
| --- | ----------- | ----------- |
| 36  | asignar     | gb          |
| 39  | filtrar     |             |
| 44  | navegaremp  | per         |
| 49  | navegartipo | per,inc,nmi |

| L   | Condición / acción / mensaje literal                                                                                                   |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 27  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="41";}                                                                       |
| 28  | if ((zparamyear==null)&#124;&#124;(zparamyear.equals(""))){                                                                            |
| 190 | &lt;%if (zcounti &gt; 0) {%&gt;                                                                                                        |
| 239 | &lt;% if (zcontrol == 0){%&gt;                                                                                                         |
| 256 | if (zTOTAL == 0) {                                                                                                                     |
| 258 | }else{                                                                                                                                 |
| 267 | if (!(zTOTAL2.equals("0"))) {%&gt;                                                                                                     |
| 269 | &lt;%}else{%&gt;                                                                                                                       |
| 278 | if (zTOTAL == 0) {                                                                                                                     |
| 280 | }else{                                                                                                                                 |
| 287 | &lt;%}else{%&gt;                                                                                                                       |
| 305 | if (zTOTAL == 0) {                                                                                                                     |
| 307 | }else{                                                                                                                                 |
| 316 | if (!(zTOTAL2.equals("0"))) {%&gt;                                                                                                     |
| 318 | &lt;%}else{%&gt;                                                                                                                       |
| 328 | if (zTOTAL == 0) {                                                                                                                     |
| 330 | }else{                                                                                                                                 |
| 350 | else{%&gt;                                                                                                                             |
| 70  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_PRINCIPAL.CARGA";                                        |
| 73  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                    |
| 74  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                   |
| 75  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                             |
| 77  | expresión de cálculo/transformación: String zmoveanios = znodoanios + ":" + znodoanios + "[FIRST]";                                    |
| 78  | expresión de cálculo/transformación: String zoutputdefanios = zsubsesion + "!" + znodoanios + "[*]";                                   |
| 79  | expresión de cálculo/transformación: String zcomunanios = znodoanios + ":" + zsubsesion + "!" + znodoanios + "[&amp;VAR.m4lix]" + "."; |
| 81  | expresión de cálculo/transformación: String zmoveincid = znodoincid + ":" + znodoincid + "[FIRST]";                                    |
| 82  | expresión de cálculo/transformación: String zoutputdefincid = zsubsesion + "!" + znodoincid + "[*]";                                   |
| 83  | expresión de cálculo/transformación: String zcomunincid = znodoincid + ":" + zsubsesion + "!" + znodoincid + "[&amp;VAR.m4lix]" + "."; |
| 85  | expresión de cálculo/transformación: String zmoveemp = znodoemp + ":" + znodoemp + "[FIRST]";                                          |
| 86  | expresión de cálculo/transformación: String zoutputdefemp = zsubsesion + "!" + znodoemp + "[*]";                                       |
| 89  | expresión de cálculo/transformación: String zSCOIDINCIDENCE = zcomunincid + "SCO_ID_INCIDENCE";                                        |
| 90  | expresión de cálculo/transformación: String zSCONMINCIDENCE = zcomunincid + "SCO_NM_INCIDENCE";                                        |
| 247 | expresión de cálculo/transformación: pointcross = (regcross + (regemp*zcountincidi));                                                  |
| 252 | expresión de cálculo/transformación: String code = zTOTAL2.substring(zTOTAL2.indexOf(".") + 1,4);                                      |
| 255 | expresión de cálculo/transformación: zTOTAL = Integer.parseInt(code);                                                                  |
| 276 | expresión de cálculo/transformación: String code = zTOTALEMP2.substring(zTOTALEMP2.indexOf(".") + 1,4);                                |
| 277 | expresión de cálculo/transformación: zTOTAL = Integer.parseInt(code);                                                                  |
| 295 | expresión de cálculo/transformación: pointcross = (regcross + (regemp*zcountincidi));                                                  |
| 301 | expresión de cálculo/transformación: String code = zTOTAL2.substring(zTOTAL2.indexOf(".") + 1,4);                                      |
| 304 | expresión de cálculo/transformación: zTOTAL = Integer.parseInt(code);                                                                  |
| 326 | expresión de cálculo/transformación: String code = zTOTALEMP2.substring(zTOTALEMP2.indexOf(".") + 1,4);                                |
| 327 | expresión de cálculo/transformación: zTOTAL = Integer.parseInt(code);                                                                  |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 21  | ../../mss_generico/espanol/menu_mss.jsp               |
| 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 59  | ../../sse_generico/espanol/generico_links.jsp         |
| 359 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                |
| --- | ---------------------------------------------------------------- |
| 19  | /css/estilo_mss.css                                              |
| 20  | /libreria/funciones_sse.js                                       |
| 130 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41    |
| 133 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41 |
| 145 | /iconos/noname_ausencias_dch_52_100.gif                          |
| 241 | javascript:navegaremp(                                           |
| 268 | javascript:navegartipo(                                          |
| 289 | javascript:navegaremp(                                           |
| 317 | javascript:navegartipo(                                          |
| 21  | ../../mss_generico/espanol/menu_mss.jsp                          |
| 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp               |
| 59  | ../../sse_generico/espanol/generico_links.jsp                    |
| 359 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                       | Resolución | Ficha / candidato                                                                               |
| ------ | --- | ---------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------- |
| BASE   | 21  | ../../mss_generico/espanol/menu_mss.jsp                          | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp               | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 59  | ../../sse_generico/espanol/generico_links.jsp                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 359 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |
| BASE   | 20  | /libreria/funciones_sse.js                                       | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)          |
| BASE   | 130 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41    | ausente    | P06                                                                                             |
| BASE   | 133 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_detail.jsp?estado=41 | ausente    | P06                                                                                             |
| BASE   | 241 | javascript:navegaremp(                                           | dinámica   | P06                                                                                             |
| BASE   | 268 | javascript:navegartipo(                                          | dinámica   | P06                                                                                             |
| BASE   | 289 | javascript:navegaremp(                                           | dinámica   | P06                                                                                             |
| BASE   | 317 | javascript:navegartipo(                                          | dinámica   | P06                                                                                             |
| BASE   | 21  | ../../mss_generico/espanol/menu_mss.jsp                          | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                |
| BASE   | 58  | ../../mss_generico/espanol/mssgenerico_menusup.jsp               | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)          |
| BASE   | 59  | ../../sse_generico/espanol/generico_links.jsp                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md) |
| BASE   | 359 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_p2_val.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
