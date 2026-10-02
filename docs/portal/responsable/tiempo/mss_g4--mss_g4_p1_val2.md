# Valida vacaciones

Identificador: `mss_g4/mss_g4_p1_val2.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_p1_val2.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p1_val2.jsp) | `29bac66af64189b05359c6e1e02c6f5c64c44318b09ae37ad5cf1a353741c6ad` |    203 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_p1_val2.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p1_val2.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 8   | Valida vacaciones                                                                                                                                                                                                                          |
| 154 | Valida vacaciones                                                                                                                                                                                                                          |
| 157 | Consulta el estado de las peticiones de vacaciones de tus empleados, del mes actual o del mes que seleccione, teniendo en cuenta la siguiente leyenda: Días aceptados Días pendientes de aceptar Días pendientes de cancelar Días festivos |
| 172 | Tipo de vacaciones Todos "&gt; Mes: Año:                                                                                                                                                                                                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 156 | img     | src=/iconos/noname_valida_vacaciones_61_100.gif; width=100; height=100; alt=Valida vacaciones; border=0                                  |
| 173 | form    | id=formselect; name=formselect; action=                                                                                                  |
| 175 | select  | id=SCO_ID_INCIDENCE; class=fuenteapartados; name=SCO_ID_INCIDENCE; title=Selecciona el tipo de vacaciones; onchange=javacript:filtrar(); |
| 176 | option  | value=ALL                                                                                                                                |
| 179 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                 |
| 185 | select  | id=month; class=fuenteapartados; onchange=filtrar()                                                                                      |
| 186 | option  | value=" + intLoop + "; jsp_expr_zmes_end_expr==; selected=presente; confirmar condición si dinámico                                      |
| 189 | select  | id=year; class=fuenteapartados; onchange=filtrar()                                                                                       |
| 190 | option  | value=" + intLoop + "; jsp_expr_intzano_end_expr==; selected=presente; confirmar condición si dinámico                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                           |
| --- | ---------------- | ---------------------------------------- |
| 28  | estado           | getParameter(request,"estado")           |
| 32  | zfiltro          | getParameter(request,"zfiltro")          |
| 37  | znivel           | getParameter(request,"znivel")           |
| 42  | SCO_ID_INCIDENCE | getParameter(request,"SCO_ID_INCIDENCE") |
| 48  | zmes             | getParameter(request,"zmes")             |
| 54  | zano             | getParameter(request,"zano")             |

| L   | Variable          | Expresión fuente                                                             | Resolución estática parcial                                                                   |
| --- | ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 17  | z1                | ""                                                                           |                                                                                               |
| 18  | z2                | ""                                                                           |                                                                                               |
| 19  | z3                | ""                                                                           |                                                                                               |
| 21  | mes               | ahora.get(ahora.MONTH)                                                       | ahora.get(ahora.MONTH)                                                                        |
| 22  | ano               | ahora.get(ahora.YEAR)                                                        | ahora.get(ahora.YEAR)                                                                         |
| 23  | anomasuno         | ano + 1                                                                      | ahora.get(ahora.YEAR){1}                                                                      |
| 25  | strmes            | String.valueOf(mes)                                                          | String.valueOf(mes)                                                                           |
| 26  | strano            | String.valueOf(ano)                                                          | String.valueOf(ano)                                                                           |
| 28  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                            |
| 32  | zfiltro           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zfiltro")                           |
| 37  | znivel            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel")                            |
| 42  | zSCO_ID_INCIDENCE | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE")                  |
| 48  | zmes              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmes")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmes")                              |
| 50  | intzmes           | Integer.parseInt(zmes)                                                       | Integer.parseInt(zmes)                                                                        |
| 51  | intzmesmasuno     | intzmes + 1                                                                  | Integer.parseInt(zmes){1}                                                                     |
| 52  | strmesmasuno      | String.valueOf(intzmesmasuno)                                                | String.valueOf(intzmesmasuno)                                                                 |
| 54  | zano              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zano")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zano")                              |
| 56  | intzano           | Integer.parseInt(zano)                                                       | Integer.parseInt(zano)                                                                        |
| 87  | zsubsesion        | "SSE_HOLYDAYS"                                                               | SSE_HOLYDAYS                                                                                  |
| 88  | zmeta4object      | "SSE_HOLYDAYS"                                                               | SSE_HOLYDAYS                                                                                  |
| 89  | znodo             | "SSE_CARGA_FESTIVOS"                                                         | SSE_CARGA_FESTIVOS                                                                            |
| 90  | zlectura          | zsubsesion + "!" + znodo                                                     | SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS                                                           |
| 91  | zraiz             | zsubsesion + "!" + znodo + "."                                               | SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS{"."}                                                      |
| 92  | zmetodocarga      | zsubsesion + "!SSE_CARGA_FESTIVOS.MSS_CARGA_VAL"                             | SSE_HOLYDAYS{"!SSE_CARGA_FESTIVOS.MSS_CARGA_VAL"}                                             |
| 93  | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                             | SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS{"[*]"}                                                    |
| 94  | znodoprincipal    | "SSE_PRINCIPAL"                                                              | SSE_PRINCIPAL                                                                                 |
| 95  | znodocom          | "SSE_COMUNICACION"                                                           | SSE_COMUNICACION                                                                              |
| 96  | zoutputdefcom     | zsubsesion + "!" + znodocom + "[*]"                                          | SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"[*]"}                                                      |
| 97  | znodosse          | "SSE_REAL_TIME_PRD"                                                          | SSE_REAL_TIME_PRD                                                                             |
| 98  | zoutputdefsse     | zsubsesion + "!" + znodosse + "[*]"                                          | SSE_HOLYDAYS{"!"}SSE_REAL_TIME_PRD{"[*]"}                                                     |
| 100 | znodo3            | "SSE_INCIDENCE"                                                              | SSE_INCIDENCE                                                                                 |
| 102 | zoutputdef3       | zsubsesion + "!" + znodo3 +"[*]"                                             | SSE_HOLYDAYS{"!"}SSE_INCIDENCE[*]                                                             |
| 103 | zmove3            | znodo3 + ":" +znodo3 + "[FIRST]"                                             | SSE_INCIDENCE{":"}SSE_INCIDENCE{"[FIRST]"}                                                    |
| 104 | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."          | SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}                     |
| 105 | zSCOIDINCIDENCE   | zcomun3 + "SCO_ID_INCIDENCE"                                                 | SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INCIDENCE"} |
| 106 | zSCONMINCIDENCE   | zcomun3 + "SCO_NM_INCIDENCE"                                                 | SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"} |
| 127 | zcount3           | 0                                                                            | 0                                                                                             |
| 133 | zcountv3          | String.valueOf(zcount3)                                                      | String.valueOf(zcount3)                                                                       |
| 137 | parametro         | "HOLA"                                                                       | HOLA                                                                                          |
| 138 | codigo            | ""                                                                           |                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 109 | m4:startpage | m4task=SSE_HOLYDAYS                                                                                                 |
| 110 | m4:beginjob  |                                                                                                                     |
| 111 | m4:datadef   | m4o=SSE_HOLYDAYS; m4name=SSE_HOLYDAYS                                                                               |
| 120 | m4:exec      | m4method=SSE_HOLYDAYS{"!SSE_CARGA_FESTIVOS.MSS_CARGA_VAL"}                                                          |
| 121 | m4:outputdef | m4alias=SSE_CARGA_FESTIVOS                                                                                          |
| 121 | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_CARGA_FESTIVOS{"[*]"}                                                      |
| 122 | m4:outputdef | m4alias=SSE_COMUNICACION                                                                                            |
| 122 | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_COMUNICACION{"[*]"}                                                        |
| 123 | m4:outputdef | m4alias=SSE_REAL_TIME_PRD                                                                                           |
| 123 | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_REAL_TIME_PRD{"[*]"}                                                       |
| 124 | m4:outputdef | m4alias=SSE_INCIDENCE                                                                                               |
| 124 | m4:param     | name=m4name0; value=SSE_HOLYDAYS{"!"}SSE_INCIDENCE[*]                                                               |
| 125 | m4:endjob    |                                                                                                                     |
| 178 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                               |
| 179 | m4:item      | m4name=SSE_INCIDENCE{":"}SSE_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true |
| 203 | m4:endpage   |                                                                                                                     |

| L   | Operación | Argumentos literales                                  |
| --- | --------- | ----------------------------------------------------- |
| 115 | setItem   | zsubsesion,znodo,"","ANO_CARGA_VAL",zano              |
| 116 | setItem   | zsubsesion,znodo,"","MES_CARGA_VAL",strmesmasuno      |
| 117 | setItem   | zsubsesion,znodo,"","SSE_INCIDENCE",zSCO_ID_INCIDENCE |
| 130 | getCount  | znodo3,zsubsesion,znodo3                              |
| 142 | getItem   | znodo,zmeta4object,znodo,"","MSS_PARAMETRO_CARGA"     |
| 143 | getItem   | znodo,zmeta4object,znodo,"","ANO_CARGA_VAL"           |
| 144 | getItem   | znodo,zmeta4object,znodo,"","MES_CARGA_VAL"           |
| 145 | getItem   | znodosse,zmeta4object,znodosse,"","FILTRO_SELECT"     |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos        |
| --- | -------------- | ----------------- |
| 63  | filtrar        |                   |
| 74  | m4buscaroption | oselect,sidoption |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 29  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                                                                                    |
| 33  | if ((zfiltro==null)&#124;&#124; (""==zfiltro)){                                                                                                                                                                                                                                                        |
| 38  | if ((znivel==null)&#124;&#124;(znivel.equals("")))                                                                                                                                                                                                                                                     |
| 44  | if ((zSCO_ID_INCIDENCE==null)&#124;&#124;(zSCO_ID_INCIDENCE.equals(""))){                                                                                                                                                                                                                              |
| 49  | if (zmes==null){zmes = strmes;}                                                                                                                                                                                                                                                                        |
| 55  | if (zano==null){zano = strano;}                                                                                                                                                                                                                                                                        |
| 77  | if (oselect.options[ni].value == sidoption){                                                                                                                                                                                                                                                           |
| 23  | expresión de cálculo/transformación: int anomasuno = ano + 1;                                                                                                                                                                                                                                          |
| 50  | expresión de cálculo/transformación: int intzmes = Integer.parseInt(zmes);                                                                                                                                                                                                                             |
| 51  | expresión de cálculo/transformación: int intzmesmasuno = intzmes + 1;                                                                                                                                                                                                                                  |
| 56  | expresión de cálculo/transformación: int intzano = Integer.parseInt(zano);                                                                                                                                                                                                                             |
| 69  | expresión de cálculo/transformación: URL=URL + "&amp;zmes=" + mesfiltrado + "&amp;zano=" + anofiltrado;                                                                                                                                                                                                |
| 70  | expresión de cálculo/transformación: URL=URL + "&amp;SCO_ID_INCIDENCE=" + inci ;                                                                                                                                                                                                                       |
| 90  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                                                                                                                                                                                                                       |
| 91  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                                                                                                                                                                                                                    |
| 92  | expresión de cálculo/transformación: String zmetodocarga =zsubsesion + "!SSE_CARGA_FESTIVOS.MSS_CARGA_VAL";                                                                                                                                                                                            |
| 93  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                                                                                                                             |
| 96  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                                                                                                                                                                       |
| 98  | expresión de cálculo/transformación: String zoutputdefsse = zsubsesion + "!" + znodosse + "[*]";                                                                                                                                                                                                       |
| 102 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 +"[*]";                                                                                                                                                                                                            |
| 103 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                                                                                                                                                                                                 |
| 104 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                                                                                             |
| 105 | expresión de cálculo/transformación: String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";                                                                                                                                                                                                            |
| 106 | expresión de cálculo/transformación: String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";                                                                                                                                                                                                            |
| 186 | expresión de cálculo/transformación: &lt;script type="text/javascript"&gt;for (var intLoop =0; intLoop &lt; months.length; intLoop++) document.write("&lt;option value='" + intLoop + "'" + (&lt;%=zmes%&gt; == intLoop ? "Selected" : "") + "&gt;" + months[intLoop]);&lt;/script&gt;                 |
| 190 | expresión de cálculo/transformación: &lt;script type="text/javascript"&gt;for (var intLoop =&lt;%=ano%&gt;; intLoop &lt;= &lt;%=anomasuno%&gt;; intLoop++) document.write("&lt;option value='" + intLoop + "'" + (&lt;%=intzano%&gt; == intLoop ? "Selected" : "") + "&gt;" + intLoop);&lt;/script&gt; |

### Includes, navegación y dependencias

| L   | Include                                    |
| --- | ------------------------------------------ |
| 11  | ../../sse_generico/espanol/sse_lang_in.jsp |

| L   | Destino / recurso                                                           |
| --- | --------------------------------------------------------------------------- |
| 9   | /css/estilo_mss.css                                                         |
| 10  | /libreria/funciones_sse.js                                                  |
| 12  | /libreria/dom1.js                                                           |
| 13  | /libreria/clasecalendariomss.js                                             |
| 156 | /iconos/noname_valida_vacaciones_61_100.gif                                 |
| 11  | ../../sse_generico/espanol/sse_lang_in.jsp                                  |
| 68  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val2.jsp?estado=41&amp;zfiltro= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                  | Resolución | Ficha / candidato                                                                                |
| ------ | --- | --------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp                                  | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)        |
| BASE   | 10  | /libreria/funciones_sse.js                                                  | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 12  | /libreria/dom1.js                                                           | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                             |
| BASE   | 13  | /libreria/clasecalendariomss.js                                             | contextual | [libreria/clasecalendariomss.js](../../transversal/dependencias/libreria--clasecalendariomss.md) |
| BASE   | 11  | ../../sse_generico/espanol/sse_lang_in.jsp                                  | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)        |
| BASE   | 68  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val2.jsp?estado=41&amp;zfiltro= | ausente    | P06                                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_p1_val2.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
