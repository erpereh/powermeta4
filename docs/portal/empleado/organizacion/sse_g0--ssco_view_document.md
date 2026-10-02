# " + zTitle + "

Identificador: `sse_g0/ssco_view_document.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_view_document.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_view_document.jsp) | `c7ff00e4b44b4e5d547411771b906251c12f04bc6637fccc82bde2c6b6e921dc` |    107 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_view_document.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_view_document.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                |
| --- | --------------- | ----------------------------- |
| 17  | IDDoc           | getParameter(request,"IDDoc") |

| L   | Variable     | Expresión fuente                                                  | Resolución estática parcial                                                              |
| --- | ------------ | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 17  | ziddoc       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDDoc") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDDoc")                        |
| 20  | zsubsesion   | "SSCO_VIEW_DOCUMENT"                                              | SSCO_VIEW_DOCUMENT                                                                       |
| 21  | zmeta4object | "SSCO_VIEW_DOCUMENT"                                              | SSCO_VIEW_DOCUMENT                                                                       |
| 22  | znodo        | "SSCO_VIEW_DOCUMENT"                                              | SSCO_VIEW_DOCUMENT                                                                       |
| 24  | zoutputdef   | zsubsesion + "!" + znodo + "[*]"                                  | SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"[*]"}                                         |
| 25  | zcomun       | znodo + ":" + zsubsesion + "!" + znodo + "[0]."                   | SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"[0]."}                 |
| 26  | zmove        | znodo + ":" + znodo + "[FIRST]"                                   | SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"[FIRST]"}                                     |
| 28  | zmetododoc   | "DOC:" + zsubsesion + "!" + znodo + ".SSCO_MTD_LOAD_DOC"          | DOC:{}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{".SSCO_MTD_LOAD_DOC"}                    |
| 30  | zURL         | zcomun + "SSCO_PRP_URL"                                           | SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"[0]."}{"SSCO_PRP_URL"} |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                              |
| --- | ------------ | ----------------------------------------------------------------------------------------------- |
| 34  | m4:startpage | m4task=SSCO_VIEW_DOCUMENT                                                                       |
| 34  | m4:beginjob  |                                                                                                 |
| 35  | m4:datadef   | m4o=SSCO_VIEW_DOCUMENT; m4name=SSCO_VIEW_DOCUMENT                                               |
| 36  | m4:exec      | m4method=DOC:{}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{".SSCO_MTD_LOAD_DOC"}                  |
| 36  | m4:param     | name=ARG_ID_DOC; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDDoc")        |
| 37  | m4:outputdef | m4alias=SSCO_VIEW_DOCUMENT                                                                      |
| 37  | m4:param     | name=m4name0; value=SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"[*]"}                            |
| 38  | m4:endjob    |                                                                                                 |
| 39  | m4:move      |                                                                                                 |
| 39  | m4:param     | name=SSCO_VIEW_DOCUMENT; value=SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"[FIRST]"}             |
| 73  | m4:item      | m4name=SSCO_VIEW_DOCUMENT{":"}SSCO_VIEW_DOCUMENT{"!"}SSCO_VIEW_DOCUMENT{"[0]."}{"SSCO_PRP_URL"} |
| 106 | m4:endpage   |                                                                                                 |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 74  | if (urlDoc=="")                                                                                                    |
| 98  | else                                                                                                               |
| 24  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                         |
| 25  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[0].";              |
| 26  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                               |
| 28  | expresión de cálculo/transformación: String zmetododoc = "DOC:" + zsubsesion + "!" + znodo + ".SSCO_MTD_LOAD_DOC"; |
| 30  | expresión de cálculo/transformación: String zURL = zcomun + "SSCO_PRP_URL";                                        |

### Includes, navegación y dependencias

| L   | Include                             |
| --- | ----------------------------------- |
| 8   | ../../sse_generico/sgco_gen_inc.jsp |

| L   | Destino / recurso                   |
| --- | ----------------------------------- |
| 9   | /libreria/funciones_doc.js          |
| 10  | /translations/m4err_ess_es.js       |
| 11  | /library/m4gen_excep.js             |
| 8   | ../../sse_generico/sgco_gen_inc.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                          | Resolución | Ficha / candidato                                                                            |
| ------ | --- | ----------------------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)  |
| BASE   | 9   | /libreria/funciones_doc.js          | contextual | [libreria/funciones_doc.js](../../transversal/dependencias/libreria--funciones_doc.md)       |
| BASE   | 10  | /translations/m4err_ess_es.js       | contextual | [translations/m4err_ess_es.js](../../transversal/dependencias/translations--m4err_ess_es.md) |
| BASE   | 11  | /library/m4gen_excep.js             | contextual | [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md)             |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_view_document.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
