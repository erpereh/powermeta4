# ssco_dyn_save_type_orgchart

Identificador: `sse_g0/ssco_dyn_save_type_orgchart.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_dyn_save_type_orgchart.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_dyn_save_type_orgchart.jsp) | `41039e67ef0d962d36351e1addac708a38028bfcbd128aaad9c63d41d11c9a7b` |     17 |
| BASE / compartido | [sse_g0/ssco_dyn_save_type_orgchart.jsp](../../../../clon_portal/portal/sse_g0/ssco_dyn_save_type_orgchart.jsp)                 | `d038c7223de6e0f0e22c559711fa27ec761aece102b34a90289eeb3c28bcaf56` |     86 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_dyn_save_type_orgchart.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_dyn_save_type_orgchart.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                            |
| --- | ---------------------------------- |
| 14  | ../ssco_dyn_save_type_orgchart.jsp |

| L   | Destino / recurso                  |
| --- | ---------------------------------- |
| 14  | ../ssco_dyn_save_type_orgchart.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_dyn_save_type_orgchart.jsp](../../../../clon_portal/portal/sse_g0/ssco_dyn_save_type_orgchart.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                          |
| --- | --------------- | --------------------------------------- |
| 22  | ParamSerialize  | getParameter(request, "ParamSerialize") |

| L   | Variable     | Expresión fuente                                                            | Resolución estática parcial                                                 |
| --- | ------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 22  | ai_serialize | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ParamSerialize") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "ParamSerialize") |
| 25  | encoding     | com.meta4.utilities.M4RequestEncoding.getAppEncoding()                      | com.meta4.utilities.M4RequestEncoding.getAppEncoding()                      |
| 43  | posi         | 0                                                                           | 0                                                                           |
| 44  | posf         | 1800                                                                        | 1800                                                                        |
| 45  | type         | 0                                                                           | 0                                                                           |
| 46  | send         | ""                                                                          |                                                                             |
| 57  | part         | ""                                                                          |                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                     |
| --- | -------------------------------------------------------- |
| 50  | if (posf &gt;= ai_serialize.length()) {                  |
| 74  | expresión de cálculo/transformación: posi = posi + 1800; |
| 75  | expresión de cálculo/transformación: posf = posf + 1800; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 8   | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                         | Resolución | Ficha / candidato                                                                |
| ------ | --- | ---------------------------------- | ---------- | -------------------------------------------------------------------------------- |
| BASE   | 14  | ../ssco_dyn_save_type_orgchart.jsp | física     | [sse_g0/ssco_dyn_save_type_orgchart.jsp](sse_g0--ssco_dyn_save_type_orgchart.md) |
| BASE   | 14  | ../ssco_dyn_save_type_orgchart.jsp | física     | [sse_g0/ssco_dyn_save_type_orgchart.jsp](sse_g0--ssco_dyn_save_type_orgchart.md) |
| BASE   | 8   | com.meta4.jsp                      | ausente    | P06                                                                              |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_dyn_save_type_orgchart.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
