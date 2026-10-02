# Solicitudes pendientes

Identificador: `mss_g3/mss_g3_p12.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p12.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p12.jsp) | `afa4513f6d16f7e498511b70fd8348fb90f35568f49744d439bd764a1dc6234c` |     34 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p12.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p12.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 9   | Solicitudes pendientes   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 15  | REC             | getParameter(request,"REC") |

| L   | Variable     | Expresión fuente                                                | Resolución estática parcial                                     |
| --- | ------------ | --------------------------------------------------------------- | --------------------------------------------------------------- |
| 15  | zordinal     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC") |
| 16  | zerror       | "N"                                                             | N                                                               |
| 17  | zsubsesion   | "SSE_INVENTARIO"                                                | SSE_INVENTARIO                                                  |
| 18  | zmeta4object | "SSE_INVENTARIO"                                                | SSE_INVENTARIO                                                  |
| 19  | znodo        | "SSE_INVENTARIO"                                                | SSE_INVENTARIO                                                  |
| 23  | zraiz        | zsubsesion + "!" + znodo + "."                                  | SSE_INVENTARIO{"!"}SSE_INVENTARIO{"."}                          |
| 24  | zmetodo      | zsubsesion + "!SSE_INVENTARIO.BORRADOR"                         | SSE_INVENTARIO{"!SSE_INVENTARIO.BORRADOR"}                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                  |
| --- | ------------ | ----------------------------------------------------------------------------------- |
| 28  | m4:startpage | m4task=SSE_INVENTARIO                                                               |
| 28  | m4:beginjob  |                                                                                     |
| 29  | m4:datadef   | m4o=SSE_INVENTARIO; m4name=SSE_INVENTARIO                                           |
| 30  | m4:exec      | m4method=SSE_INVENTARIO{"!SSE_INVENTARIO.BORRADOR"}                                 |
| 30  | m4:param     | name=ORDINAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"REC") |
| 31  | m4:endjob    |                                                                                     |
| 33  | m4:endpage   |                                                                                     |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                           |
| --- | ---------------------------------------------------------------------------------------------- |
| 23  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";            |
| 24  | expresión de cálculo/transformación: String zmetodo = zsubsesion + "!SSE_INVENTARIO.BORRADOR"; |

### Includes, navegación y dependencias

| L   | Include                                                   |
| --- | --------------------------------------------------------- |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                   |
| 32  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 10  | /css/estilo_mss.css                                       |
| 11  | /libreria/funciones_sse.js                                |
| 13  | /libreria/clase_val_entradas.js                           |
| 12  | ../../mss_generico/espanol/menu_mss.jsp                   |
| 32  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                       |
| ------ | --- | --------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                        |
| BASE   | 32  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |
| BASE   | 11  | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                  |
| BASE   | 13  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                        |
| BASE   | 12  | ../../mss_generico/espanol/menu_mss.jsp                   | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                        |
| BASE   | 32  | ../../sse_generico/espanol/generico_actualizar_cuerpo.jsp | física     | [sse_generico/generico_actualizar_cuerpo.jsp](../../transversal/navegacion/sse_generico--generico_actualizar_cuerpo.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p12.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
