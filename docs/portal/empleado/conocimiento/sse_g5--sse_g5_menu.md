# Mi conocimiento

Identificador: `sse_g5/sse_g5_menu.jsp`. Perfil: **empleado**. Dominio: **conocimiento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g5/espanol/sse_g5_menu.jsp](../../../../clon_portal/portal/sse_g5/espanol/sse_g5_menu.jsp) | `a54afa81b588a038e97d7571d14a3b51ae0eb535a85169bae11b9f50e318afe6` |    138 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g5/espanol/sse_g5_menu.jsp](../../../../clon_portal/portal/sse_g5/espanol/sse_g5_menu.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | Mi conocimiento                                                                                                                                                                                                             |
| 37  | Mi conocimiento                                                                                                                                                                                                             |
| 40  | En este módulo puedes consultar tu distribución personal del conocimiento, definir tus reglas de distribución, participar en foros, buscar expertos de un area de conocimiento,y encontrar un documento usando la busqueda. |
| 56  | En esta sección puedes acceder a foros que te interesan, y participar en ellos activamente si lo deseas. Foro                                                                                                               |
| 71  | Búsqueda                                                                                                                                                                                                                    |
| 79  | En esta sección puedes localizar la documentación que buscas. '&gt;Búsqueda                                                                                                                                                 |
| 99  | En esta sección puedes consultar tu distribución personal del conocimiento o definir nuevas reglas personales de distribución. '&gt;Creación de reglas de distribución '&gt;Distribución personalizada                      |
| 115 | Expertos                                                                                                                                                                                                                    |
| 123 | En esta sección puedes buscar gente experta en un conocimiento. '&gt;Expertos                                                                                                                                               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                        |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38  | a       | href=javascript:openWinHelpPres('/help/espanol/output/wwhelp/wwhimpl/js/html/frames.htm?href=SSE_G5_MENU.htm'); class=nav2; onmouseover=help.src='/iconos/helpyou_b.gif'; onmouseout=help.src='/iconos/helpyou_a.gif'            |
| 38  | img     | src=/iconos/helpyou_a.gif; name=help; border=0                                                                                                                                                                                   |
| 55  | img     | src=/iconos/noname_foro_150_100.gif; width=150; height=100; alt=Foro; title=Foro                                                                                                                                                 |
| 59  | a       | class=enlacefuncional; tabindex=1; title=Foro; href=/servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&amp;Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO                             |
| 81  | a       | class=enlacefuncional; tabindex=2; title=Búsqueda; href='&lt;m4:crosslink; uri=/servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp; idprovider=&lt;%=aux_provider%&gt;                           |
| 84  | img     | src=/iconos/noname_busqueda_59_100.gif; width=59; height=100; alt=Búsqueda; title=Búsqueda                                                                                                                                       |
| 98  | img     | src=/iconos/noname_distribucion_86_100.gif; width=86; height=100; alt=Distribución del conocimiento; title=Distribución del conocimiento                                                                                         |
| 101 | a       | class=enlacefuncional; tabindex=3; title=Creación de reglas de distribución; href='&lt;m4:crosslink; uri=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp; idprovider=&lt;%=aux_provider%&gt; |
| 102 | a       | class=enlacefuncional; tabindex=4; title=Distribución personalizada; href='&lt;m4:crosslink; uri=/servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL; idprovider=&lt;%=aux_provider%&gt;        |
| 125 | a       | class=enlacefuncional; tabindex=1; title=Expertos; href='&lt;m4:crosslink; uri=/servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp; idprovider=&lt;%=aux_provider%&gt;                                     |
| 128 | img     | src=/iconos/noname_experto_61_100.gif; width=61; height=100; alt=Expertos; title=Expertos                                                                                                                                        |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 4   | IsKnownet       | getBagEntries("IsKnownet")     |
| 5   | aux_provider    | getBagEntries("aux_provider")  |
| 20  | estado          | getParameter(request,"estado") |

| L   | Variable     | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | ------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 4   | Knownet      | zsesion1.getBagEntries("IsKnownet")                                | zsesion1.getBagEntries("IsKnownet")                                |
| 5   | aux_provider | zsesion1.getBagEntries("aux_provider")                             | zsesion1.getBagEntries("aux_provider")                             |
| 20  | estado       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 137 | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función         | Argumentos |
| --- | --------------- | ---------- |
| 26  | openWinHelpPres | pagina     |

| L   | Condición / acción / mensaje literal                            |
| --- | --------------------------------------------------------------- |
| 21  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";} |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 16  | ../../sse_generico/espanol/menu_ess.jsp            |
| 33  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 34  | ../../sse_generico/espanol/generico_links.jsp      |
| 134 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 14  | /css/estilo_sse.css                                                                                                                              |
| 15  | /libreria/funciones_sse.js                                                                                                                       |
| 38  | javascript:openWinHelpPres(                                                                                                                      |
| 38  | /iconos/helpyou_b.gif                                                                                                                            |
| 38  | /iconos/helpyou_a.gif                                                                                                                            |
| 55  | /iconos/noname_foro_150_100.gif                                                                                                                  |
| 59  | /servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&amp;Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO |
| 81  | &lt;m4:crosslink uri=                                                                                                                            |
| 84  | /iconos/noname_busqueda_59_100.gif                                                                                                               |
| 98  | /iconos/noname_distribucion_86_100.gif                                                                                                           |
| 101 | &lt;m4:crosslink uri=                                                                                                                            |
| 102 | &lt;m4:crosslink uri=                                                                                                                            |
| 125 | &lt;m4:crosslink uri=                                                                                                                            |
| 128 | /iconos/noname_experto_61_100.gif                                                                                                                |
| 16  | ../../sse_generico/espanol/menu_ess.jsp                                                                                                          |
| 33  | ../../sse_generico/espanol/generico_menusup.jsp                                                                                                  |
| 34  | ../../sse_generico/espanol/generico_links.jsp                                                                                                    |
| 38  | /help/espanol/output/wwhelp/wwhimpl/js/html/frames.htm?href=SSE_G5_MENU.htm                                                                      |
| 81  | /servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp                                                              |
| 101 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp                                                              |
| 102 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL                                                             |
| 125 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp                                                                        |
| 134 | ../../sse_generico/espanol/generico_disclaimer.jsp                                                                                               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                                                                       | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                                                                                          | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 33  | ../../sse_generico/espanol/generico_menusup.jsp                                                                                                  | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 34  | ../../sse_generico/espanol/generico_links.jsp                                                                                                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 134 | ../../sse_generico/espanol/generico_disclaimer.jsp                                                                                               | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 15  | /libreria/funciones_sse.js                                                                                                                       | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 38  | javascript:openWinHelpPres(                                                                                                                      | dinámica   | P06                                                                                                       |
| BASE   | 59  | /servlet/CheckSecurity/JSP/sse_generico/generico_person_courses.jsp?estado=51&amp;Knownet_task=TCT_SCO_KN_NEW_FORUM/LIGHT_NEW_FORUM.jsp?Curso=NO | ausente    | P06                                                                                                       |
| BASE   | 16  | ../../sse_generico/espanol/menu_ess.jsp                                                                                                          | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 33  | ../../sse_generico/espanol/generico_menusup.jsp                                                                                                  | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 34  | ../../sse_generico/espanol/generico_links.jsp                                                                                                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 38  | /help/espanol/output/wwhelp/wwhimpl/js/html/frames.htm?href=SSE_G5_MENU.htm                                                                      | ausente    | P06                                                                                                       |
| BASE   | 81  | /servlet/CheckSecurity/JSP/TCT_SCO_KN_EXTENDED_SEARCH_JAV/LIGHT_EXTENDED_SEARCH.jsp                                                              | ausente    | P06                                                                                                       |
| BASE   | 101 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_PERS_PREF_JAV/LIGHT_NEW_D_PERS_PREF.jsp                                                              | ausente    | P06                                                                                                       |
| BASE   | 102 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_NEW_D_RESULT/LIGHT_NEW_D_RESULT.jsp?Idrule=ALL                                                             | ausente    | P06                                                                                                       |
| BASE   | 125 | /servlet/CheckSecurity/JSP/TCT_SCO_KN_PERSON_DIR_JAV/LIGHT_PERSON_DIR.jsp                                                                        | ausente    | P06                                                                                                       |
| BASE   | 134 | ../../sse_generico/espanol/generico_disclaimer.jsp                                                                                               | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g5/sse_g5_menu.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
