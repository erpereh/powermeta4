# Historial de puestos

Identificador: `sse_g3/sse_g3_p0.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p0.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p0.jsp) | `e41385d7922121dd25a3106f8f4f229407e7a7113c503bcd0e8091a8b9d714ed` |    146 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p0.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p0.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 7   | Historial de puestos                                                                                                             |
| 74  | Historial de puestos                                                                                                             |
| 77  | Consulta tu historial de puestos, para ver la descripción de cada puesto sitúate sobre el nombre del mismo. Mi puesto de trabajo |
| 90  | Puesto                                                                                                                           |
| 91  | Inicio                                                                                                                           |
| 92  | Fin                                                                                                                              |
| 113 | ');"&gt; &amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].CSP_DOC_PUESTO_FICHA" target="_blank"&gt;                           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                           |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 76  | img     | src=/iconos/noname_puesto_181_125.gif; width=115; height=100; alt=Historial de puestos; title=Historial de puestos                  |
| 80  | a       | class=enlacefuncional; tabindex=1; title=Ir a mi puesto de trabajo; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 |
| 116 | a       | class=enlacefuncional; title=Detalle del puesto; href=javascript:detalle ('&lt;m4:item m4name=; jsafe=true; htmlsafe=true           |
| 121 | a       | class=enlacefuncional; title=DPT; style=text-decoration: underline;; href="/servlet/download_blob?task=CSP_QUIEN_ES_QUIEN%          |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 19  | estado          | getParameter(request,"estado")   |
| 20  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable         | Expresión fuente                                                     | Resolución estática parcial                                                                     |
| --- | ---------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 19  | estado           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                              |
| 20  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                            |
| 29  | zsubsesion       | "SSE_JOB"                                                            | SSE_JOB                                                                                         |
| 30  | zmeta4object     | "SSE_JOB"                                                            | SSE_JOB                                                                                         |
| 31  | znodo            | "SSE_JOB_PRINCIPAL"                                                  | SSE_JOB_PRINCIPAL                                                                               |
| 32  | zjob             | null                                                                 | null                                                                                            |
| 36  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"                                     | SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[*]"}                                                            |
| 37  | zmove            | znodo + ":" + znodo + "[FIRST]"                                      | SSE_JOB_PRINCIPAL{":"}SSE_JOB_PRINCIPAL{"[FIRST]"}                                              |
| 38  | zcomun           | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}                    |
| 42  | zmetodocarga     | zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA"                              | SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                             |
| 46  | zfechainicio     | zcomun + "SCO_DT_START"                                              | SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}    |
| 47  | zfechafin        | zcomun + "SCO_DT_END"                                                | SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}      |
| 48  | zpuesto          | zcomun + "SCO_ID_JOB_CODE"                                           | SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_JOB_CODE"} |
| 49  | znombrepuesto    | zcomun + "STD_N_JOB_CODE"                                            | SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}  |
| 50  | zfunciones       | zcomun + "CSP_FUNCIONES"                                             | SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"CSP_FUNCIONES"}   |
| 51  | zMostrar         | zcomun + "CSP_MOSTRAR_DOC"                                           | SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"CSP_MOSTRAR_DOC"} |
| 64  | zcounti          | 0                                                                    | 0                                                                                               |
| 69  | zcountv          | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                         |
| 70  | zto              | new Integer(new Integer(zcountv).intValue()-1).toString()            | new Integer(new Integer(zcountv).intValue()-1).toString()                                       |
| 86  | zposicions       | "0"                                                                  | 0                                                                                               |
| 87  | zposicion        | 0                                                                    | 0                                                                                               |
| 98  | auxNDPT          | 0                                                                    | 0                                                                                               |
| 109 | mostrarDocumento | zMostrar.substring(0, 1)                                             | zMostrar.substring(0, 1)                                                                        |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                   |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| 54  | m4:startpage | m4task=SSE_JOB                                                                                                       |
| 54  | m4:beginjob  |                                                                                                                      |
| 55  | m4:datadef   | m4o=SSE_JOB; m4name=SSE_JOB                                                                                          |
| 56  | m4:exec      | m4method=SSE_JOB{"!SSE_JOB_PRINCIPAL.CARGA"}                                                                         |
| 56  | m4:param     | name=JOB_ARG; value=null                                                                                             |
| 57  | m4:sortitems | m4name=SSE_JOB!SSE_JOB_PRINCIPAL.CARGA                                                                               |
| 58  | m4:param     | name=SCO_DT_START; value=DESC                                                                                        |
| 60  | m4:outputdef | m4alias=SSE_JOB_PRINCIPAL                                                                                            |
| 60  | m4:param     | name=m4name0; value=SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[*]"}                                                             |
| 61  | m4:endjob    |                                                                                                                      |
| 62  | m4:move      |                                                                                                                      |
| 62  | m4:param     | name=SSE_JOB; value=SSE_JOB_PRINCIPAL{":"}SSE_JOB_PRINCIPAL{"[FIRST]"}                                               |
| 94  | m4:loop      | from=0; to=new Integer(new Integer(zcountv).intValue()-1).toString()                                                 |
| 116 | m4:item      | m4name=SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true |
| 121 | m4:item      | m4name=SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true |
| 124 | m4:item      | m4name=SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true |
| 127 | m4:item      | m4name=SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true   |
| 128 | m4:item      | m4name=SSE_JOB_PRINCIPAL{":"}SSE_JOB{"!"}SSE_JOB_PRINCIPAL{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true     |
| 141 | m4:endpage   |                                                                                                                      |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 67  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 13  | detalle | job        |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                         |
| 22  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                 |
| 85  | &lt;%if (zcounti &gt; 0) {                                                                                              |
| 114 | &lt;%if (auxNDPT&gt;0){%&gt;                                                                                            |
| 118 | &lt;%}else if(mostrarDocumento.equals("1")){%&gt;                                                                       |
| 123 | &lt;%}else{%&gt;                                                                                                        |
| 134 | &lt;%} else {%&gt;                                                                                                      |
| 36  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 37  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 38  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 42  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_JOB_PRINCIPAL.CARGA";                     |
| 46  | expresión de cálculo/transformación: String zfechainicio = zcomun + "SCO_DT_START";                                     |
| 47  | expresión de cálculo/transformación: String zfechafin = zcomun + "SCO_DT_END";                                          |
| 48  | expresión de cálculo/transformación: String zpuesto = zcomun + "SCO_ID_JOB_CODE";                                       |
| 49  | expresión de cálculo/transformación: String znombrepuesto = zcomun + "STD_N_JOB_CODE";                                  |
| 50  | expresión de cálculo/transformación: String zfunciones = zcomun + "CSP_FUNCIONES";                                      |
| 51  | expresión de cálculo/transformación: String zMostrar = zcomun + "CSP_MOSTRAR_DOC";                                      |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 26  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 27  | ../../sse_generico/espanol/generico_links.jsp      |
| 138 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                           |
| --- | --------------------------------------------------------------------------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                                                                                         |
| 9   | /libreria/funciones_sse.js                                                                                                  |
| 11  | /libreria/clase_val_entradas.js                                                                                             |
| 76  | /iconos/noname_puesto_181_125.gif                                                                                           |
| 80  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                                                                  |
| 116 | javascript:detalle (                                                                                                        |
| 121 | /servlet/download_blob?task=CSP_QUIEN_ES_QUIEN%&gt;&amp;item=CSP_QUIEN_ES_QUIEN!CSP_FICHA_DETALLADA[0].CSP_DOC_PUESTO_FICHA |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                                                                                     |
| 14  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0_desc.jsp?id_job=                                                                |
| 26  | ../../sse_generico/espanol/generico_menusup.jsp                                                                             |
| 27  | ../../sse_generico/espanol/generico_links.jsp                                                                               |
| 138 | ../../sse_generico/espanol/generico_disclaimer.jsp                                                                          |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                   | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 26  | ../../sse_generico/espanol/generico_menusup.jsp              | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 27  | ../../sse_generico/espanol/generico_links.jsp                | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 138 | ../../sse_generico/espanol/generico_disclaimer.jsp           | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 9   | /libreria/funciones_sse.js                                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 11  | /libreria/clase_val_entradas.js                              | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)          |
| BASE   | 80  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3   | contextual | [sse_g3/sse_g3_menu.jsp](sse_g3--sse_g3_menu.md)                                                          |
| BASE   | 116 | javascript:detalle (                                         | dinámica   | P06                                                                                                       |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 14  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0_desc.jsp?id_job= | ausente    | P06                                                                                                       |
| BASE   | 26  | ../../sse_generico/espanol/generico_menusup.jsp              | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 27  | ../../sse_generico/espanol/generico_links.jsp                | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 138 | ../../sse_generico/espanol/generico_disclaimer.jsp           | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p0.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
