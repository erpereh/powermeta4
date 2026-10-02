# Eliminar favoritos

Identificador: `sse_g0/sse_g0_actualizar_g0_p1_insertar.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sse_g0_actualizar_g0_p1_insertar.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_actualizar_g0_p1_insertar.jsp) | `f905d817c892ae39abc85c7eec905f1b15d63606c7b6b0afab31a8654c981be2` |     35 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sse_g0_actualizar_g0_p1_insertar.jsp](../../../../clon_portal/portal/sse_g0/espanol/sse_g0_actualizar_g0_p1_insertar.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 11  | Eliminar favoritos       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                    |
| --- | --------------- | --------------------------------- |
| 15  | REC             | getParameter(request,"REC")       |
| 16  | zIdPerson       | getParameter(request,"zIdPerson") |

| L   | Variable     | Expresión fuente                                                      | Resolución estática parcial                                           |
| --- | ------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| 7   | zurl         | "/servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=01"           | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=01             |
| 15  | zordinal     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC")       |
| 16  | zIdPerson    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdPerson") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdPerson") |
| 17  | zerror       | "N"                                                                   | N                                                                     |
| 18  | zsubsesion   | "SSE_INVENTARIO"                                                      | SSE_INVENTARIO                                                        |
| 19  | zmeta4object | "SSE_INVENTARIO"                                                      | SSE_INVENTARIO                                                        |
| 20  | znodo        | "SSE_INVENTARIO"                                                      | SSE_INVENTARIO                                                        |
| 24  | zraiz        | zsubsesion + "!" + znodo + "."                                        | SSE_INVENTARIO{"!"}SSE_INVENTARIO{"."}                                |
| 25  | zmetodo      | "CARGA:" + zsubsesion + "!SSE_INVENTARIO.INSERTAR"                    | CARGA:{}SSE_INVENTARIO{"!SSE_INVENTARIO.INSERTAR"}                    |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                      |
| --- | ------------ | --------------------------------------------------------------------------------------- |
| 29  | m4:startpage | m4task=SSE_INVENTARIO                                                                   |
| 29  | m4:beginjob  |                                                                                         |
| 30  | m4:datadef   | m4o=SSE_INVENTARIO; m4name=SSE_INVENTARIO                                               |
| 31  | m4:exec      | m4method=CARGA:{}SSE_INVENTARIO{"!SSE_INVENTARIO.INSERTAR"}                             |
| 31  | m4:param     | name=ORDINAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC")     |
| 31  | m4:param     | name=ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdPerson") |
| 32  | m4:endjob    |                                                                                         |
| 34  | m4:endpage   |                                                                                         |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                      |
| --- | --------------------------------------------------------------------------------------------------------- |
| 24  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";                       |
| 25  | expresión de cálculo/transformación: String zmetodo = "CARGA:" + zsubsesion + "!SSE_INVENTARIO.INSERTAR"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 33  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 12  | /css/estilo_sse.css                                       |
| 13  | /libreria/funciones_sse.js                                |
| 7   | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=01 |
| 33  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | --------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 33  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 13  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 7   | /servlet/CheckSecurity/JSP/sse_g0/sse_g0_p1.jsp?estado=01 | ausente    | P06                                                                                                                     |
| BASE   | 33  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sse_g0_actualizar_g0_p1_insertar.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
