# Consulta vacaciones aceptadas

Identificador: `mss_g4/mss_g4_p3.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_p3.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p3.jsp) | `289dd27dac7cd1be5807dacacbd8472e01b4c1706d493cf7d651ebda15798938` |    222 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_p3.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_p3.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8   | Consulta vacaciones aceptadas                                                                                                                                       |
| 155 | Vacaciones aceptadas                                                                                                                                                |
| 162 | Consulta las vacaciones aceptadas de tus empleados, del mes actual o del mes que selecciones, teniendo en cuenta la siguiente leyenda: Días aceptados Días festivos |
| 184 | Tipo de vacaciones Todos "&gt; Mes: Año:                                                                                                                            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 159 | img     | src=/iconos/noname_valida_vacaciones_61_100.gif; width=100; height=100; alt=Valida vacaciones; border=0                                  |
| 185 | form    | id=formselect; name=formselect; action=                                                                                                  |
| 187 | select  | id=SCO_ID_INCIDENCE; class=fuenteapartados; name=SCO_ID_INCIDENCE; title=Selecciona el tipo de vacaciones; onchange=javacript:filtrar(); |
| 188 | option  | value=ALL                                                                                                                                |
| 191 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                                 |
| 195 | select  | id=month; class=fuenteapartados; onchange=filtrar()                                                                                      |
| 197 | option  | value=" + intLoop + "; jsp_expr_zmes_end_expr==; selected=presente; confirmar condición si dinámico                                      |
| 201 | select  | id=year; class=fuenteapartados; onchange=filtrar()                                                                                       |
| 203 | option  | value=" + intLoop + "; jsp_expr_intzano_end_expr==; selected=presente; confirmar condición si dinámico                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                           |
| --- | ---------------- | ---------------------------------------- |
| 33  | estado           | getParameter(request,"estado")           |
| 38  | zmes             | getParameter(request,"zmes")             |
| 44  | zano             | getParameter(request,"zano")             |
| 48  | SCO_ID_INCIDENCE | getParameter(request,"SCO_ID_INCIDENCE") |

| L   | Variable          | Expresión fuente                                                             | Resolución estática parcial                                                                   |
| --- | ----------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 22  | z1                | ""                                                                           |                                                                                               |
| 23  | z2                | ""                                                                           |                                                                                               |
| 24  | z3                | ""                                                                           |                                                                                               |
| 26  | mes               | ahora.get(ahora.MONTH)                                                       | ahora.get(ahora.MONTH)                                                                        |
| 27  | ano               | ahora.get(ahora.YEAR)                                                        | ahora.get(ahora.YEAR)                                                                         |
| 28  | anomasuno         | ano + 1                                                                      | ahora.get(ahora.YEAR){1}                                                                      |
| 30  | strmes            | String.valueOf(mes)                                                          | String.valueOf(mes)                                                                           |
| 31  | strano            | String.valueOf(ano)                                                          | String.valueOf(ano)                                                                           |
| 33  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                            |
| 38  | zmes              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmes")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zmes")                              |
| 40  | intzmes           | Integer.parseInt(zmes)                                                       | Integer.parseInt(zmes)                                                                        |
| 41  | intzmesmasuno     | intzmes +1                                                                   | Integer.parseInt(zmes){1}                                                                     |
| 42  | strmesmasuno      | String.valueOf(intzmesmasuno)                                                | String.valueOf(intzmesmasuno)                                                                 |
| 44  | zano              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zano")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zano")                              |
| 46  | intzano           | Integer.parseInt(zano)                                                       | Integer.parseInt(zano)                                                                        |
| 48  | zSCO_ID_INCIDENCE | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"SCO_ID_INCIDENCE")                  |
| 88  | zsubsesion        | "SSM_HOLYDAYS"                                                               | SSM_HOLYDAYS                                                                                  |
| 89  | zmeta4object      | "SSM_HOLYDAYS"                                                               | SSM_HOLYDAYS                                                                                  |
| 90  | znodoprincipal    | "SSM_PRINCIPAL"                                                              | SSM_PRINCIPAL                                                                                 |
| 91  | zlectura          | zsubsesion + "!" + znodoprincipal                                            | SSM_HOLYDAYS{"!"}SSM_PRINCIPAL                                                                |
| 92  | zraiz             | zsubsesion + "!" + znodoprincipal + "."                                      | SSM_HOLYDAYS{"!"}SSM_PRINCIPAL{"."}                                                           |
| 93  | zmetodocarga      | zsubsesion + "!SSM_PRINCIPAL.CARGA"                                          | SSM_HOLYDAYS{"!SSM_PRINCIPAL.CARGA"}                                                          |
| 94  | zoutputdef        | zsubsesion + "!" + znodoprincipal + "[*]"                                    | SSM_HOLYDAYS{"!"}SSM_PRINCIPAL{"[*]"}                                                         |
| 95  | znodossm          | "SSM_REAL_TIME_PRD"                                                          | SSM_REAL_TIME_PRD                                                                             |
| 96  | zoutputdefssm     | zsubsesion + "!" + znodossm + "[*]"                                          | SSM_HOLYDAYS{"!"}SSM_REAL_TIME_PRD{"[*]"}                                                     |
| 97  | ztipocarga        | "ALL"                                                                        | ALL                                                                                           |
| 99  | znodo3            | "SSE_INCIDENCE"                                                              | SSE_INCIDENCE                                                                                 |
| 101 | zoutputdef3       | zsubsesion + "!" + znodo3 +"[*]"                                             | SSM_HOLYDAYS{"!"}SSE_INCIDENCE[*]                                                             |
| 102 | zmove3            | znodo3 + ":" +znodo3 + "[FIRST]"                                             | SSE_INCIDENCE{":"}SSE_INCIDENCE{"[FIRST]"}                                                    |
| 103 | zcomun3           | znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."          | SSE_INCIDENCE{":"}SSM_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}                     |
| 104 | zSCOIDINCIDENCE   | zcomun3 + "SCO_ID_INCIDENCE"                                                 | SSE_INCIDENCE{":"}SSM_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INCIDENCE"} |
| 105 | zSCONMINCIDENCE   | zcomun3 + "SCO_NM_INCIDENCE"                                                 | SSE_INCIDENCE{":"}SSM_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"} |
| 125 | zcount3           | 0                                                                            | 0                                                                                             |
| 131 | zcountv3          | String.valueOf(zcount3)                                                      | String.valueOf(zcount3)                                                                       |
| 135 | parametro         | "HOLA"                                                                       | HOLA                                                                                          |
| 136 | codigo            | ""                                                                           |                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 108 | m4:startpage | m4task=SSM_HOLYDAYS                                                                                                 |
| 110 | m4:beginjob  |                                                                                                                     |
| 111 | m4:datadef   | m4o=SSM_HOLYDAYS; m4name=SSM_HOLYDAYS                                                                               |
| 120 | m4:exec      | m4method=SSM_HOLYDAYS{"!SSM_PRINCIPAL.CARGA"}                                                                       |
| 120 | m4:param     | name=TIPO_CARGA; value=ALL                                                                                          |
| 121 | m4:outputdef | m4alias=SSM_REAL_TIME_PRD                                                                                           |
| 121 | m4:param     | name=m4name0; value=SSM_HOLYDAYS{"!"}SSM_REAL_TIME_PRD{"[*]"}                                                       |
| 122 | m4:outputdef | m4alias=SSE_INCIDENCE                                                                                               |
| 122 | m4:param     | name=m4name0; value=SSM_HOLYDAYS{"!"}SSE_INCIDENCE[*]                                                               |
| 123 | m4:endjob    |                                                                                                                     |
| 190 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                               |
| 191 | m4:item      | m4name=SSE_INCIDENCE{":"}SSM_HOLYDAYS{"!"}SSE_INCIDENCE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INCIDENCE"}; htmlsafe=true |
| 222 | m4:endpage   |                                                                                                                     |

| L   | Operación | Argumentos literales                                     |
| --- | --------- | -------------------------------------------------------- |
| 115 | setItem   | zsubsesion,znodossm,"","ANO_CARGA_VAL",zano              |
| 116 | setItem   | zsubsesion,znodossm,"","MES_CARGA_VAL",strmesmasuno      |
| 117 | setItem   | zsubsesion,znodossm,"","SSE_INCIDENCE",zSCO_ID_INCIDENCE |
| 128 | getCount  | znodo3,zsubsesion,znodo3                                 |
| 140 | getItem   | znodossm,zmeta4object,znodossm,"","SSM_PARAMETRO_CARGA"  |
| 141 | getItem   | znodossm,zmeta4object,znodossm,"","ANO_CARGA_VAL"        |
| 142 | getItem   | znodossm,zmeta4object,znodossm,"","MES_CARGA_VAL"        |
| 143 | getItem   | znodossm,zmeta4object,znodossm,"","FILTRO_SELECT"        |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función        | Argumentos        |
| --- | -------------- | ----------------- |
| 60  | filtrar        |                   |
| 69  | m4buscaroption | oselect,sidoption |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 34  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                                                |
| 39  | if (zmes==null){zmes = strmes;}                                                                                                                                                                                                                    |
| 45  | if (zano==null){zano = strano;}                                                                                                                                                                                                                    |
| 50  | if ((zSCO_ID_INCIDENCE==null)&#124;&#124;(zSCO_ID_INCIDENCE.equals(""))){                                                                                                                                                                          |
| 72  | if (oselect.options[ni].value == sidoption){                                                                                                                                                                                                       |
| 28  | expresión de cálculo/transformación: int anomasuno = ano + 1;                                                                                                                                                                                      |
| 40  | expresión de cálculo/transformación: int intzmes = Integer.parseInt(zmes);                                                                                                                                                                         |
| 46  | expresión de cálculo/transformación: int intzano = Integer.parseInt(zano);                                                                                                                                                                         |
| 65  | expresión de cálculo/transformación: URL=URL + "&amp;zmes=" + mesfiltrado + "&amp;zano=" + anofiltrado;                                                                                                                                            |
| 66  | expresión de cálculo/transformación: URL=URL + "&amp;SCO_ID_INCIDENCE=" + inci ;                                                                                                                                                                   |
| 91  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodoprincipal;                                                                                                                                                          |
| 92  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodoprincipal + ".";                                                                                                                                                       |
| 93  | expresión de cálculo/transformación: String zmetodocarga =zsubsesion + "!SSM_PRINCIPAL.CARGA";                                                                                                                                                     |
| 94  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodoprincipal + "[*]";                                                                                                                                                |
| 96  | expresión de cálculo/transformación: String zoutputdefssm = zsubsesion + "!" + znodossm + "[*]";                                                                                                                                                   |
| 101 | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 +"[*]";                                                                                                                                                        |
| 102 | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" +znodo3 + "[FIRST]";                                                                                                                                                             |
| 103 | expresión de cálculo/transformación: String zcomun3 = znodo3 + ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";                                                                                                                         |
| 104 | expresión de cálculo/transformación: String zSCOIDINCIDENCE = zcomun3 + "SCO_ID_INCIDENCE";                                                                                                                                                        |
| 105 | expresión de cálculo/transformación: String zSCONMINCIDENCE = zcomun3 + "SCO_NM_INCIDENCE";                                                                                                                                                        |
| 197 | expresión de cálculo/transformación: for (var intLoop =0; intLoop &lt; months.length; intLoop++) document.write("&lt;option value='" + intLoop + "'" + (&lt;%=zmes%&gt; == intLoop ? "Selected" : "") + "&gt;" + months[intLoop]);                 |
| 203 | expresión de cálculo/transformación: for (var intLoop =&lt;%=ano%&gt;; intLoop &lt;= &lt;%=anomasuno%&gt;; intLoop++) document.write("&lt;option value='" + intLoop + "'" + (&lt;%=intzano%&gt; == intLoop ? "Selected" : "") + "&gt;" + intLoop); |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 13  | ../../sse_generico/espanol/sse_lang_in.jsp         |
| 14  | ../../mss_generico/espanol/menu_mss.jsp            |
| 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 83  | ../../sse_generico/espanol/generico_links.jsp      |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 10  | /css/estilo_mss.css                                       |
| 12  | /libreria/funciones_sse.js                                |
| 15  | /libreria/dom1.js                                         |
| 16  | /libreria/clasecalendariomss.js                           |
| 159 | /iconos/noname_valida_vacaciones_61_100.gif               |
| 13  | ../../sse_generico/espanol/sse_lang_in.jsp                |
| 14  | ../../mss_generico/espanol/menu_mss.jsp                   |
| 64  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41 |
| 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        |
| 83  | ../../sse_generico/espanol/generico_links.jsp             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                |
| ------ | --- | --------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 13  | ../../sse_generico/espanol/sse_lang_in.jsp                | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)        |
| BASE   | 14  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 83  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |
| BASE   | 12  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 15  | /libreria/dom1.js                                         | contextual | [libreria/dom1.js](../../transversal/dependencias/libreria--dom1.md)                             |
| BASE   | 16  | /libreria/clasecalendariomss.js                           | contextual | [libreria/clasecalendariomss.js](../../transversal/dependencias/libreria--clasecalendariomss.md) |
| BASE   | 13  | ../../sse_generico/espanol/sse_lang_in.jsp                | física     | [sse_generico/sse_lang_in.jsp](../../transversal/navegacion/sse_generico--sse_lang_in.md)        |
| BASE   | 14  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                 |
| BASE   | 64  | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41 | ausente    | P06                                                                                              |
| BASE   | 82  | ../../mss_generico/espanol/mssgenerico_menusup.jsp        | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)           |
| BASE   | 83  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_p3.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
