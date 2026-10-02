# Ausencias

Identificador: `sse_g4/sse_g4_p1.jsp`. Perfil: **empleado**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g4/espanol/sse_g4_p1.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_p1.jsp) | `84b2eddf83fd18f95d24c5eb832c7f01d977485c6061d783bcd4c7ebed533418` |    127 |
| CYC / español     | [m4custom/CYC/sse_g4/espanol/sse_g4_p1.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g4/espanol/sse_g4_p1.jsp)   | `84b2eddf83fd18f95d24c5eb832c7f01d977485c6061d783bcd4c7ebed533418` |    127 |
| IBER / español    | [m4custom/IBER/sse_g4/espanol/sse_g4_p1.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g4/espanol/sse_g4_p1.jsp) | `84b2eddf83fd18f95d24c5eb832c7f01d977485c6061d783bcd4c7ebed533418` |    127 |
| BASE / español    | [sse_g4/espanol/sse_g4_p1.jsp](../../../../clon_portal/portal/sse_g4/espanol/sse_g4_p1.jsp)                             | `84b2eddf83fd18f95d24c5eb832c7f01d977485c6061d783bcd4c7ebed533418` |    127 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g4/espanol/sse_g4_p1.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g4/espanol/sse_g4_p1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                        |
| --- | --------------------------------------------------------------- |
| 8   | Ausencias                                                       |
| 76  | Ausencias laborales                                             |
| 80  | Consulta tus ausencias a lo largo del año. Mi tiempo de trabajo |
| 89  | Tipo absentismo                                                 |
| 90  | Inicio                                                          |
| 91  | Duración                                                        |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                               |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 79  | img     | alt=Ausencias; src=/iconos/noname_ausencias_52_100.gif; width=100; height=100                                                           |
| 82  | a       | class=enlacefuncional; title=Volver a mi tiempo de trabajo; tabindex=1; href=/servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                          |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 13  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                   |
| 14  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                 |
| 27  | zsubsesion        | "SSE_REAL_TIME"                                                                | SSE_REAL_TIME                                                                                                                        |
| 28  | zmeta4object      | "SSE_REAL_TIME"                                                                | SSE_REAL_TIME                                                                                                                        |
| 29  | zmetodocarga      | zsubsesion + "!SSE_REAL_TIME.CARGA"                                            | SSE_REAL_TIME{"!SSE_REAL_TIME.CARGA"}                                                                                                |
| 30  | znodo             | "SSE_REAL_TIME"                                                                | SSE_REAL_TIME                                                                                                                        |
| 32  | zventanas         | "20"                                                                           | 20                                                                                                                                   |
| 33  | zvuelta           | 5                                                                              | 5                                                                                                                                    |
| 34  | zdireccion        | "sse_g4/sse_g4_p1.jsp"                                                         | sse_g4/sse_g4_p1.jsp                                                                                                                 |
| 35  | zestado           | "41"                                                                           | 41                                                                                                                                   |
| 39  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                 |
| 41  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                |
| 42  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                   |
| 44  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSE_REAL_TIME{"!"}SSE_REAL_TIME{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 45  | zmove             | znodo + ":" + znodo + "[" + zregistroinicial + "]"                             | SSE_REAL_TIME{":"}SSE_REAL_TIME{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                        |
| 46  | ztipocarga        | "SSE"                                                                          | SSE                                                                                                                                  |
| 50  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}                                                           |
| 51  | zFSCONMINCIDENCE  | zcomun + "SCO_NM_INCIDENCE"                                                    | SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}                                       |
| 52  | zDTSTART          | zcomun + "DT_START"                                                            | SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                               |
| 53  | zSCONMTIMEUNIT    | zcomun + "SCO_NM_TIME_UNIT"                                                    | SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}                                       |
| 54  | zSCOUNITS         | zcomun + "SCO_UNITS"                                                           | SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_UNITS"}                                              |
| 64  | zcount            | 0                                                                              | 0                                                                                                                                    |
| 65  | zcounti           | 0                                                                              | 0                                                                                                                                    |
| 71  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                              |
| 95  | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                     |
| 96  | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                      |
| 97  | zposicions        | "0"                                                                            | 0                                                                                                                                    |
| 98  | zcontrol          | 0                                                                              | 0                                                                                                                                    |
| 99  | zposicion         | 0                                                                              | 0                                                                                                                                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 57  | m4:startpage | m4task=SSE_REAL_TIME                                                                                                                                     |
| 57  | m4:beginjob  |                                                                                                                                                          |
| 58  | m4:datadef   | m4o=SSE_REAL_TIME; m4name=SSE_REAL_TIME                                                                                                                  |
| 59  | m4:exec      | m4method=SSE_REAL_TIME{"!SSE_REAL_TIME.CARGA"}                                                                                                           |
| 60  | m4:outputdef | m4alias=SSE_REAL_TIME                                                                                                                                    |
| 60  | m4:param     | name=m4name0; value=SSE_REAL_TIME{"!"}SSE_REAL_TIME{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 61  | m4:endjob    |                                                                                                                                                          |
| 62  | m4:move      |                                                                                                                                                          |
| 62  | m4:param     | name=SSE_REAL_TIME; value=SSE_REAL_TIME{":"}SSE_REAL_TIME{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                  |
| 101 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                |
| 108 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true                                     |
| 109 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                             |
| 110 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_UNITS"}; htmlsafe=true                                            |
| 110 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}; htmlsafe=true                                     |
| 114 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true                                     |
| 115 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                             |
| 116 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_UNITS"}; htmlsafe=true                                            |
| 116 | m4:item      | m4name=SSE_REAL_TIME{":"}SSE_REAL_TIME{"!"}SSE_REAL_TIME{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}; htmlsafe=true                                     |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 68  | getCount         | znodo,zsubsesion,znodo |
| 69  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                     |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                      |
| 18  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                  |
| 86  | &lt;%if (zcounti &gt; 0) {%&gt;                                                                                                          |
| 106 | &lt;%if (zcontrol==0){%&gt;                                                                                                              |
| 112 | &lt;%}else{%&gt;                                                                                                                         |
| 122 | &lt;%}else{%&gt;&lt;div class="fuentenodatos"&gt;No tienes ninguna ausencia.&lt;/div&gt;&lt;%}%&gt;                                      |
| 29  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_REAL_TIME.CARGA";                                          |
| 40  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                            |
| 42  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                               |
| 44  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"; |
| 45  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[" + zregistroinicial + "]";                                  |
| 50  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                  |
| 51  | expresión de cálculo/transformación: String zFSCONMINCIDENCE = zcomun + "SCO_NM_INCIDENCE";                                              |
| 52  | expresión de cálculo/transformación: String zDTSTART = zcomun + "DT_START";                                                              |
| 53  | expresión de cálculo/transformación: String zSCONMTIMEUNIT = zcomun + "SCO_NM_TIME_UNIT";                                                |
| 54  | expresión de cálculo/transformación: String zSCOUNITS = zcomun + "SCO_UNITS";                                                            |
| 96  | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                            |

### Includes, navegación y dependencias

| L   | Include                                                  |
| --- | -------------------------------------------------------- |
| 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp          |
| 25  | ../../sse_generico/espanol/generico_links.jsp            |
| 121 | ../../sse_generico/espanol/generico_ventanas.jsp         |
| 123 | ../../sse_generico/espanol/generico_disclaimer.jsp       |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 9   | /css/estilo_sse.css                                        |
| 10  | /libreria/funciones_sse.js                                 |
| 79  | /iconos/noname_ausencias_52_100.gif                        |
| 82  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4 |
| 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp            |
| 25  | ../../sse_generico/espanol/generico_links.jsp              |
| 34  | sse_g4/sse_g4_p1.jsp                                       |
| 121 | ../../sse_generico/espanol/generico_ventanas.jsp           |
| 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                                                                                                                                              |
| ------ | --- | ---------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| COLL   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| COLL   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| COLL   | 10  | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| COLL   | 82  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4 | ausente    | P06                                                                                                                                                                            |
| COLL   | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| COLL   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| COLL   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| COLL   | 34  | sse_g4/sse_g4_p1.jsp                                       | ausente    | P06                                                                                                                                                                            |
| COLL   | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| COLL   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| CYC    | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| CYC    | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| CYC    | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| CYC    | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| CYC    | 10  | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| CYC    | 82  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4 | ausente    | P06                                                                                                                                                                            |
| CYC    | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| CYC    | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| CYC    | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| CYC    | 34  | sse_g4/sse_g4_p1.jsp                                       | ausente    | P06                                                                                                                                                                            |
| CYC    | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| CYC    | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| IBER   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| IBER   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| IBER   | 10  | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md) |
| IBER   | 82  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4 | ausente    | P06                                                                                                                                                                            |
| IBER   | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| IBER   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| IBER   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| IBER   | 34  | sse_g4/sse_g4_p1.jsp                                       | ausente    | P06                                                                                                                                                                            |
| IBER   | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| IBER   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| BASE   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |
| BASE   | 10  | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                         |
| BASE   | 82  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_menu.jsp?estado=4 | ausente    | P06                                                                                                                                                                            |
| BASE   | 11  | ../../sse_generico/espanol/generico_menu_desplegable.jsp   | física     | [sse_generico/generico_menu_desplegable.jsp](../../transversal/navegacion/sse_generico--generico_menu_desplegable.md)                                                          |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                            |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                |
| BASE   | 34  | sse_g4/sse_g4_p1.jsp                                       | ausente    | P06                                                                                                                                                                            |
| BASE   | 121 | ../../sse_generico/espanol/generico_ventanas.jsp           | física     | [sse_generico/generico_ventanas.jsp](../../transversal/navegacion/sse_generico--generico_ventanas.md)                                                                          |
| BASE   | 123 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g4/sse_g4_p1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
