# Error

Identificador: `sse_generico/generico_error.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_error.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_error.jsp) | `f73304b40c6938bca6ddbb84f4d2d1400f28002f6f5b0276643202f0f635d958` |     71 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_error.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_error.jsp)   | `f73304b40c6938bca6ddbb84f4d2d1400f28002f6f5b0276643202f0f635d958` |     71 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_error.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_error.jsp) | `f73304b40c6938bca6ddbb84f4d2d1400f28002f6f5b0276643202f0f635d958` |     71 |
| BASE / español    | [sse_generico/espanol/generico_error.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_error.jsp)                             | `1e51cc72248a1211fb844a83b5578b05dbcfe74dc2be01e6655f170fd6274ae3` |     71 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_error.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_error.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 6   | Error                    |
| 37  | Mensaje de error         |
| 52  | &#96;zError&#96; Opcion1 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                   |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| 42  | a       | href=; onclick=history.back();                                                                                              |
| 43  | img     | alt=Volver; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover=m4luz(this); onmouseout=m4oscuridad(this) |
| 50  | img     | alt=Nombre; src=/iconos/*.gif; width=20; height=60                                                                          |
| 59  | a       | style=CURSOR: hand; href=                                                                                                   |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable | Expresión fuente                       | Resolución estática parcial            |
| --- | -------- | -------------------------------------- | -------------------------------------- |
| 17  | zError   | (String)trequest.getAttribute("error") | (String)trequest.getAttribute("error") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                |
| --- | --------------------------------------------------- |
| 18  | if ((zError==null)&#124;&#124;(zError.equals(""))){ |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso               |
| --- | ------------------------------- |
| 8   | /css/estilo_sse.css             |
| 10  | /libreria/funciones_sse.js      |
| 43  | /iconos/noname_volver_52_44.gif |
| 50  | /iconos/*.gif                   |

## Versión 2: BASE ES

Fuente de los localizadores `L`: [sse_generico/espanol/generico_error.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_error.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 6   | Error                    |
| 37  | Mensaje de error         |
| 52  | &#96;zError&#96; Opcion1 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                   |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------- |
| 42  | a       | href=; onclick=history.back();                                                                                              |
| 43  | img     | alt=Volver; src=/iconos/noname_volver_52_44.gif; height=44; width=52; onmouseover=m4luz(this); onmouseout=m4oscuridad(this) |
| 50  | img     | alt=Nombre; src=/iconos/*.gif; width=20; height=60                                                                          |
| 59  | a       | style=CURSOR: hand; href=                                                                                                   |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable | Expresión fuente                       | Resolución estática parcial            |
| --- | -------- | -------------------------------------- | -------------------------------------- |
| 17  | zError   | (String)trequest.getAttribute("error") | (String)trequest.getAttribute("error") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                |
| --- | --------------------------------------------------- |
| 18  | if ((zError==null)&#124;&#124;(zError.equals(""))){ |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso               |
| --- | ------------------------------- |
| 8   | /css/estilo_sse.css             |
| 10  | /libreria/funciones_sse.js      |
| 43  | /iconos/noname_volver_52_44.gif |
| 50  | /iconos/*.gif                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato                                                                                                                                |
| ------ | --- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| CYC    | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |
| IBER   | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md) |
| BASE   | 10  | /libreria/funciones_sse.js | contextual | [libreria/funciones_sse.js](../dependencias/libreria--funciones_sse.md)                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_error.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
