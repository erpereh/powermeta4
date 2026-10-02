# Error

Identificador: `sse_generico/generico_exec_error.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | espanol   | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/generico_exec_error.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_exec_error.jsp) | `cc0dbeef64618f6c922f4b7c22df9b4f247167c87e6af2f434978e19d08c602e` |     40 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/generico_exec_error.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/generico_exec_error.jsp)   | `cc0dbeef64618f6c922f4b7c22df9b4f247167c87e6af2f434978e19d08c602e` |     40 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/generico_exec_error.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/generico_exec_error.jsp) | `cc0dbeef64618f6c922f4b7c22df9b4f247167c87e6af2f434978e19d08c602e` |     40 |
| BASE / español    | [sse_generico/espanol/generico_exec_error.jsp](../../../../clon_portal/portal/sse_generico/espanol/generico_exec_error.jsp)                             | `cc0dbeef64618f6c922f4b7c22df9b4f247167c87e6af2f434978e19d08c602e` |     40 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/generico_exec_error.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/generico_exec_error.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 3   | Error                    |
| 22  | E rror:                  |
| 28  | Volver                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                         |
| --- | ------- | ----------------------------------------------------------------- |
| 19  | img     | src=/images/logo.gif; alt=logo                                    |
| 28  | a       | href=&#96;url&#96;                                                |
| 29  | img     | alt=volver; src=/images/noname_volver.gif; border=0; align=middle |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal              |
| --- | --------------- | --------------------------- |
| 7   | returnPage      | getParameter ("returnPage") |
| 8   | links           | getParameter ("links")      |
| 9   | estado          | getParameter ("estado")     |

| L   | Variable   | Expresión fuente                                     | Resolución estática parcial                                                                                                |
| --- | ---------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 7   | returnPage | trequest.getParameter ("returnPage")                 | trequest.getParameter ("returnPage")                                                                                       |
| 8   | links      | trequest.getParameter ("links")                      | trequest.getParameter ("links")                                                                                            |
| 9   | estado     | trequest.getParameter ("estado")                     | trequest.getParameter ("estado")                                                                                           |
| 10  | url        | returnPage+".jsp?links="+links+"&amp;estado="+estado | trequest.getParameter ("returnPage").jsp?links=trequest.getParameter ("links")&amp;estado=trequest.getParameter ("estado") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso         |
| --- | ------------------------- |
| 19  | /images/logo.gif          |
| 28  | &#96;url&#96;             |
| 29  | /images/noname_volver.gif |
| 10  | .jsp?links=               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/generico_exec_error.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
