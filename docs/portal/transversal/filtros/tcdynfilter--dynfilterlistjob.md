# dynfilterlistjob

Identificador: `tcdynfilter/dynfilterlistjob.jsp`. Perfil: **transversal**. Dominio: **filtros**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [tcdynfilter/dynfilterlistjob.jsp](../../../../clon_portal/portal/tcdynfilter/dynfilterlistjob.jsp) | `b78a9ad02e5fac790406f652c596e8bd0574a91ba4d8de2e8cebc936eadeaec9` |     56 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [tcdynfilter/dynfilterlistjob.jsp](../../../../clon_portal/portal/tcdynfilter/dynfilterlistjob.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave  | Acceso literal                   |
| --- | ---------------- | -------------------------------- |
| 21  | zidt3            | getParameter("zidt3")            |
| 22  | zidt3alias       | getParameter("zidt3alias")       |
| 23  | zreturnpage      | getParameter("zreturnpage")      |
| 24  | zfilterapplymode | getParameter("zfilterapplymode") |
| 25  | zbackcall        | getParameter("zbackcall")        |
| 26  | zt3session       | getParameter("zt3session")       |

| L   | Variable          | Expresión fuente                                         | Resolución estática parcial                              |
| --- | ----------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| 16  | sDYN_FILTER_ALIAS | "DynFilter"                                              | DynFilter                                                |
| 21  | zidt3             | getStringValue(request.getParameter("zidt3"))            | getStringValue(request.getParameter("zidt3"))            |
| 22  | zidt3alias        | getStringValue(request.getParameter("zidt3alias"))       | getStringValue(request.getParameter("zidt3alias"))       |
| 23  | zreturnpage       | getStringValue(request.getParameter("zreturnpage"))      | getStringValue(request.getParameter("zreturnpage"))      |
| 24  | zfilterapplymode  | getStringValue(request.getParameter("zfilterapplymode")) | getStringValue(request.getParameter("zfilterapplymode")) |
| 25  | zbackcall         | getStringValue(request.getParameter("zbackcall"))        | getStringValue(request.getParameter("zbackcall"))        |
| 26  | zt3session        | getStringValue(request.getParameter("zt3session"))       | getStringValue(request.getParameter("zt3session"))       |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                   |
| --- | ------------ | ---------------------------------------------------------------------------------------------------- |
| 31  | m4:beginjob  |                                                                                                      |
| 33  | m4:datadef   | m4o=API_DYN_FILTER_HTML_CL; m4name=DynFilter                                                         |
| 37  | m4:exec      | alias=DynFilterSetParams; m4object=DynFilter; node=API_DYN_FILTER; method=API_SET_DYN_FILTERS_PARAMS |
| 38  | m4:param     | name=ARG_ID_T3; value=getStringValue(request.getParameter("zidt3"))                                  |
| 39  | m4:param     | name=ARG_APPLY_MODE; value=getStringValue(request.getParameter("zfilterapplymode"))                  |
| 40  | m4:param     | name=ARG_ID_T3_ALIAS; value=getStringValue(request.getParameter("zidt3alias"))                       |
| 41  | m4:param     | name=ARG_RETURN_PAGE; value=getStringValue(request.getParameter("zreturnpage"))                      |
| 42  | m4:param     | name=ARG_ID_T3_SESSION; value=getStringValue(request.getParameter("zt3session"))                     |
| 48  | m4:exec      | alias=DynFilterList; m4object=DynFilter; node=API_DYN_FILTER; method=API_LIST_DYN_FILTERS            |
| 51  | m4:outputdef | m4alias=DynFilterNodeList; m4object=DynFilter; node=DYN_FILTER_LIST; records=*                       |
| 52  | m4:outputdef | m4alias=ApiDynFilterNode; m4object=DynFilter; node=API_DYN_FILTER; records=*                         |
| 54  | m4:endjob    |                                                                                                      |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal |
| --- | ------------------------------------ |
| 36  | &lt;% if (zbackcall == null) {%&gt;  |

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

- Confirmar exposición y permisos de `tcdynfilter/dynfilterlistjob.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
