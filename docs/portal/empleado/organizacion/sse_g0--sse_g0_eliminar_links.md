# Eliminar favoritos

Identificador: `sse_g0/sse_g0_eliminar_links.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sse_g0_eliminar_links.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_eliminar_links.jsp) | `7767549c6e5a78b1f0ad4e71a001671d4612de19c744a3dc30d05e16ebcb2214` |     57 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sse_g0_eliminar_links.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_eliminar_links.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 11  | Eliminar favoritos       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 17  | id_enl          | getParameter(request,"id_enl") |
| 18  | actual          | getParameter(request,"actual") |

| L   | Variable        | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | --------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 7   | zurl            | "/servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp"        | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp          |
| 17  | zidenl          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl") |
| 18  | zregistroactual | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"actual") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"actual") |
| 22  | zerror          | "N"                                                                | N                                                                  |
| 26  | zsubsesion      | "SSE_ENLACES"                                                      | SSE_ENLACES                                                        |
| 27  | zmeta4object    | "SSE_ENLACES"                                                      | SSE_ENLACES                                                        |
| 28  | znodo           | "SSE_ENLACES"                                                      | SSE_ENLACES                                                        |
| 32  | zoutputdef      | zsubsesion + "!" + znodo + "[*]"                                   | SSE_ENLACES{"!"}SSE_ENLACES{"[*]"}                                 |
| 33  | zlectura        | zsubsesion + "!" + znodo                                           | SSE_ENLACES{"!"}SSE_ENLACES                                        |
| 34  | zraiz           | zsubsesion + "!" + znodo + "."                                     | SSE_ENLACES{"!"}SSE_ENLACES{"."}                                   |
| 35  | zmove           | znodo + ":" + znodo + "[FIRST]"                                    | SSE_ENLACES{":"}SSE_ENLACES{"[FIRST]"}                             |
| 39  | zmetodo         | zsubsesion + "!SSE_ENLACES.SSE_ELIMINAR"                           | SSE_ENLACES{"!SSE_ENLACES.SSE_ELIMINAR"}                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                           |
| --- | ------------ | -------------------------------------------------------------------------------------------- |
| 44  | m4:startpage | m4task=SSE_ENLACES                                                                           |
| 44  | m4:beginjob  |                                                                                              |
| 45  | m4:datadef   | m4o=SSE_ENLACES; m4name=SSE_ENLACES                                                          |
| 46  | m4:exec      | m4method=SSE_ENLACES{"!SSE_ENLACES.SSE_ELIMINAR"}                                            |
| 46  | m4:param     | name=ID_ENLACE_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_enl") |
| 47  | m4:outputdef | m4alias=SSE_ENLACES                                                                          |
| 47  | m4:param     | name=m4name0; value=SSE_ENLACES{"!"}SSE_ENLACES{"[*]"}                                       |
| 48  | m4:endjob    |                                                                                              |
| 49  | m4:move      |                                                                                              |
| 49  | m4:param     | name=SSE_ENLACES; value=SSE_ENLACES{":"}SSE_ENLACES{"[FIRST]"}                               |
| 56  | m4:endpage   |                                                                                              |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                            |
| --- | ----------------------------------------------------------------------------------------------- |
| 32  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";      |
| 33  | expresión de cálculo/transformación: String zlectura = zsubsesion + "!" + znodo;                |
| 34  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";             |
| 35  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";            |
| 39  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!SSE_ENLACES.SSE_ELIMINAR"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 14  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 55  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 12  | /css/estilo_sse.css                                       |
| 13  | /libreria/funciones_sse.js                                |
| 7   | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp |
| 14  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 55  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | --------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 14  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                     |
| BASE   | 55  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 13  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 7   | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_editar_links.jsp | ausente    | P06                                                                                                                     |
| BASE   | 14  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                     |
| BASE   | 55  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_g0_eliminar_links.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
