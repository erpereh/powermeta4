# Actualizacion

Identificador: `sse_generico/actualizar_responsable.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/actualizar_responsable.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/actualizar_responsable.jsp) | `faa365a20a1235950fe1f87b5d858d809e07dfe96b95e6bafcd4fdee39000e6f` |     41 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/actualizar_responsable.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/actualizar_responsable.jsp)   | `faa365a20a1235950fe1f87b5d858d809e07dfe96b95e6bafcd4fdee39000e6f` |     41 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/actualizar_responsable.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/actualizar_responsable.jsp) | `faa365a20a1235950fe1f87b5d858d809e07dfe96b95e6bafcd4fdee39000e6f` |     41 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/actualizar_responsable.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/actualizar_responsable.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 33  | Actualizacion            |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 12  | empleado        | getParameter(request,"empleado") |
| 13  | uniraiz         | getParameter(request,"uniraiz")  |

| L   | Variable     | Expresión fuente                                                                                       | Resolución estática parcial                                                                                                                                                                                             |
| --- | ------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | empleado     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado")                                                                                                                                                    |
| 13  | uniraiz      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")                                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz")                                                                                                                                                     |
| 20  | zredireccion | "/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado=" + empleado + "&amp;uniraiz=" + uniraiz | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado={}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"empleado"){"&amp;uniraiz="}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"uniraiz") |
| 21  | zerror       | "N"                                                                                                    | N                                                                                                                                                                                                                       |
| 23  | zsubsesion   | "CSP_QUIEN_ES_QUIEN"                                                                                   | CSP_QUIEN_ES_QUIEN                                                                                                                                                                                                      |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 39  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 20  | expresión de cálculo/transformación: String zredireccion = "/servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado=" + empleado + "&amp;uniraiz=" + uniraiz; |

### Includes, navegación y dependencias

| L   | Include                        |
| --- | ------------------------------ |
| 38  | generico_actualizar_cuerpo.jsp |

| L   | Destino / recurso                                             |
| --- | ------------------------------------------------------------- |
| 34  | /css/estilo_sse.css                                           |
| 35  | /libreria/funciones_sse.js                                    |
| 20  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado= |
| 38  | generico_actualizar_cuerpo.jsp                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                    | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | ------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 38  | generico_actualizar_cuerpo.jsp                                | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| COLL   | 35  | /libreria/funciones_sse.js                                    | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| COLL   | 20  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado= | ausente    | P06                                                                                                                                              |
| COLL   | 38  | generico_actualizar_cuerpo.jsp                                | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 38  | generico_actualizar_cuerpo.jsp                                | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| CYC    | 35  | /libreria/funciones_sse.js                                    | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| CYC    | 20  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado= | ausente    | P06                                                                                                                                              |
| CYC    | 38  | generico_actualizar_cuerpo.jsp                                | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 38  | generico_actualizar_cuerpo.jsp                                | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |
| IBER   | 35  | /libreria/funciones_sse.js                                    | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| IBER   | 20  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado= | ausente    | P06                                                                                                                                              |
| IBER   | 38  | generico_actualizar_cuerpo.jsp                                | física     | [sse_generico/generico_actualizar_cuerpo.jsp](sse_generico--generico_actualizar_cuerpo.md)                                                       |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/actualizar_responsable.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
