# tc_doc_initialize_include

Identificador: `tc_docs/tc_doc_initialize_include.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tc_docs/tc_doc_initialize_include.jsp](../../../../clon_portal/portal/tc_docs/tc_doc_initialize_include.jsp) | `370b29ef876fbd0603913588bb0d1ec71cd564cb64b6f81779110cffc32db2ef` |     88 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tc_docs/tc_doc_initialize_include.jsp](../../../../clon_portal/portal/tc_docs/tc_doc_initialize_include.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable               | Expresión fuente                                                                                    | Resolución estática parcial                                                                         |
| --- | ---------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| 12  | sgtc_zIDInputIDDOC     | "SCO_ID_DOC"                                                                                        | SCO_ID_DOC                                                                                          |
| 15  | sgtc_zIDInputTITLEDOC  | "SCO_TITLE_DOC"                                                                                     | SCO_TITLE_DOC                                                                                       |
| 18  | sgtc_zIDInputDOENCRYPT | "SCO_ENCRYPTED"                                                                                     | SCO_ENCRYPTED                                                                                       |
| 21  | sgtc_zIDDOC            | ""                                                                                                  |                                                                                                     |
| 24  | sgtc_zTITLEDOC         | ""                                                                                                  |                                                                                                     |
| 27  | sgtc_zDOENCRYPT        | ""                                                                                                  |                                                                                                     |
| 30  | sgtc_zsubsesionsave    | ""                                                                                                  |                                                                                                     |
| 33  | sgtc_zShowMode         | "0"                                                                                                 | 0                                                                                                   |
| 36  | sgtc_zReadWrite        | "1"                                                                                                 | 1                                                                                                   |
| 39  | sgtc_zstylesheet       | "/css/estilo_sse.css"                                                                               | /css/estilo_sse.css                                                                                 |
| 42  | sgtc_zNMInputIDDOC     | "SCO_ID_DOC"                                                                                        | SCO_ID_DOC                                                                                          |
| 45  | sgtc_zIDCSSRow         | "fuenteformulario"                                                                                  | fuenteformulario                                                                                    |
| 47  | ztcsubsesionmanage     | "SRTC_MANAGE_DOCUMENT"                                                                              | SRTC_MANAGE_DOCUMENT                                                                                |
| 48  | ztcmeta4objectmanage   | "SRTC_MANAGE_DOCUMENT"                                                                              | SRTC_MANAGE_DOCUMENT                                                                                |
| 49  | ztcnodemanage          | "SCO_MANAGE_DOCUMENT"                                                                               | SCO_MANAGE_DOCUMENT                                                                                 |
| 50  | ztcmetodomanage        | "TITLE:" + ztcmeta4objectmanage + "!" + ztcnodemanage + ".SCO_GET_TITLE_DOCUMENT"                   | TITLE:{}SRTC_MANAGE_DOCUMENT{"!"}SCO_MANAGE_DOCUMENT{".SCO_GET_TITLE_DOCUMENT"}                     |
| 52  | sgtc_zText_Title       | ""                                                                                                  |                                                                                                     |
| 53  | sgtc_zButt_Attach      | ""                                                                                                  |                                                                                                     |
| 54  | sgtc_zButt_View        | ""                                                                                                  |                                                                                                     |
| 55  | sgtc_zButt_Delete      | ""                                                                                                  |                                                                                                     |
| 56  | sgtc_zButt_Info        | ""                                                                                                  |                                                                                                     |
| 57  | sgtc_zText_DoEncr      | ""                                                                                                  |                                                                                                     |
| 59  | zlanguser              | M4Locale.takeLocale(new String().valueOf(M4Context.getSession(request).getLanguageID())).toString() | M4Locale.takeLocale(new String().valueOf(M4Context.getSession(request).getLanguageID())).toString() |
| 71  | sEncoding              | M4RequestEncoding.getAppEncoding()                                                                  | M4RequestEncoding.getAppEncoding()                                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 75  | &lt;% if (request.getAttribute("taglib_Loaded")== null)                                                                                          |
| 50  | expresión de cálculo/transformación: String ztcmetodomanage = "TITLE:" + ztcmeta4objectmanage + "!" + ztcnodemanage + ".SCO_GET_TITLE_DOCUMENT"; |

### Includes, navegación y dependencias

| L   | Include                           |
| --- | --------------------------------- |
| 83  | ../shco_g0/shco_gen_functions.jsp |
| 88  | /tc_docs/tc_doc_trans.jsp         |

| L   | Destino / recurso                 |
| --- | --------------------------------- |
| 86  | /library/m4doc_include.js         |
| 83  | ../shco_g0/shco_gen_functions.jsp |
| 88  | /tc_docs/tc_doc_trans.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                        | Resolución | Ficha / candidato                                                |
| ------ | --- | --------------------------------- | ---------- | ---------------------------------------------------------------- |
| BASE   | 83  | ../shco_g0/shco_gen_functions.jsp | física     | [shco_g0/shco_gen_functions.jsp](shco_g0--shco_gen_functions.md) |
| BASE   | 88  | /tc_docs/tc_doc_trans.jsp         | contextual | [tc_docs/tc_doc_trans.jsp](tc_docs--tc_doc_trans.md)             |
| BASE   | 86  | /library/m4doc_include.js         | contextual | [library/m4doc_include.js](library--m4doc_include.md)            |
| BASE   | 83  | ../shco_g0/shco_gen_functions.jsp | física     | [shco_g0/shco_gen_functions.jsp](shco_g0--shco_gen_functions.md) |
| BASE   | 88  | /tc_docs/tc_doc_trans.jsp         | contextual | [tc_docs/tc_doc_trans.jsp](tc_docs--tc_doc_trans.md)             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tc_docs/tc_doc_initialize_include.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
