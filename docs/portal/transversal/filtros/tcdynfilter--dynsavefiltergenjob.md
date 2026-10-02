# dynsavefiltergenjob

Identificador: `tcdynfilter/dynsavefiltergenjob.jsp`. Perfil: **transversal**. Dominio: **filtros**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tcdynfilter/dynsavefiltergenjob.jsp](../../../../clon_portal/portal/tcdynfilter/dynsavefiltergenjob.jsp) | `4889cb2f8c6fab334cd8863cfd8c5cd0ab15abd8ed7352286bcb5e143a76514e` |     66 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tcdynfilter/dynsavefiltergenjob.jsp](../../../../clon_portal/portal/tcdynfilter/dynsavefiltergenjob.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 22  | txtIdSentence   | getParameter("txtIdSentence")   |
| 23  | txtLanguage     | getParameter("txtLanguage")     |
| 24  | txtApiSql       | getParameter("txtApiSql")       |
| 25  | txtIdOperation  | getParameter("txtIdOperation")  |
| 26  | zdynfilteralias | getParameter("zdynfilteralias") |

| L   | Variable        | Expresión fuente                                        | Resolución estática parcial                             |
| --- | --------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| 22  | sIdSentence     | getStringValue(request.getParameter("txtIdSentence"))   | getStringValue(request.getParameter("txtIdSentence"))   |
| 23  | sLanguaje       | getStringValue(request.getParameter("txtLanguage"))     | getStringValue(request.getParameter("txtLanguage"))     |
| 24  | sApiSql         | getStringValue(request.getParameter("txtApiSql"))       | getStringValue(request.getParameter("txtApiSql"))       |
| 25  | sIdOperation    | getStringValue(request.getParameter("txtIdOperation"))  | getStringValue(request.getParameter("txtIdOperation"))  |
| 26  | zdynfilteralias | getStringValue(request.getParameter("zdynfilteralias")) | getStringValue(request.getParameter("zdynfilteralias")) |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                                                                                     |
| --- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 31  | m4:beginjob |                                                                                                                                        |
| 35  | m4:exec     | alias=DynFilterList; m4object=getStringValue(request.getParameter("zdynfilteralias")); node=API_DYN_FILTER; method=API_SAVE_DYN_FILTER |
| 36  | m4:param    | name=ARG_ID_SENTENCE; value=getStringValue(request.getParameter("txtIdSentence"))                                                      |
| 37  | m4:param    | name=ARG_LANGUAGE; value=getStringValue(request.getParameter("txtLanguage"))                                                           |
| 38  | m4:param    | name=ARG_API_SQL; value=getStringValue(request.getParameter("txtApiSql"))                                                              |
| 39  | m4:param    | name=ARG_ID_SCENARIO; value=                                                                                                           |
| 49  | m4:exec     | alias=DynFilterList; m4object=getStringValue(request.getParameter("zdynfilteralias")); node=API_DYN_FILTER; method=API_SAVE_DYN_FILTER |
| 50  | m4:param    | name=ARG_ID_SENTENCE; value=                                                                                                           |
| 51  | m4:param    | name=ARG_LANGUAGE; value=                                                                                                              |
| 52  | m4:param    | name=ARG_API_SQL; value=                                                                                                               |
| 57  | m4:endjob   |                                                                                                                                        |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal             |
| --- | ------------------------------------------------ |
| 33  | &lt;% if (sIdSentence != null) { %&gt;           |
| 46  | &lt;% if (sIdOperation.equals("REMOVE") ){ %&gt; |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `tcdynfilter/dynsavefiltergenjob.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
