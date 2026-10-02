# Info person

Identificador: `sse_g0/ssco_dyn_infoperson.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_dyn_infoperson.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_dyn_infoperson.jsp) | `7789e9f6b8f267ad14768e7855ccf4015c17a8dc809fdc8fa6a5213368463074` |     17 |
| BASE / compartido | [sse_g0/ssco_dyn_infoperson.jsp](../../../../clon_portal/portal/sse_g0/ssco_dyn_infoperson.jsp)                 | `6dee7b8b8e6e7fa42a9aaec01782bc4c8457443c61379639af6cebcd0dfdc463` |     68 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_dyn_infoperson.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_dyn_infoperson.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                    |
| --- | -------------------------- |
| 14  | ../ssco_dyn_infoperson.jsp |

| L   | Destino / recurso          |
| --- | -------------------------- |
| 14  | ../ssco_dyn_infoperson.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/ssco_dyn_infoperson.jsp](../../../../clon_portal/portal/sse_g0/ssco_dyn_infoperson.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 19  | Info person              |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                        |
| --- | ------- | -------------------------------- |
| 24  | img     | class=nophoto; id=imgPhoto; src= |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                |
| --- | --------------- | ----------------------------- |
| 40  | arg1            | getParameter(request, "arg1") |

| L   | Variable       | Expresión fuente                                                  | Resolución estática parcial                                       |
| --- | -------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| 36  | sPathTempMap   | m4session.getPathTempMapping()                                    | m4session.getPathTempMapping()                                    |
| 37  | sPathTempURI   | m4session.getUserTempURI() + '/'                                  | {m4session.getUserTempURI()}{'/'}                                 |
| 40  | encripted      | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "arg1") | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "arg1") |
| 43  | idseed         | M4PresentationEncodeUtil.generateSeed(m4session)                  | M4PresentationEncodeUtil.generateSeed(m4session)                  |
| 49  | decripted_idHR | arrayList.get(0)                                                  | arrayList.get(0)                                                  |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                         |
| --- | -------------------------------------------------------------------------------------------- |
| 37  | expresión de cálculo/transformación: String sPathTempURI = m4session.getUserTempURI() + '/'; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso         |
| --- | ------------------------- |
| 14  | /libreria/mootools.js     |
| 15  | /libreria/meta4ajax.js    |
| 16  | /libreria/meta4photo.js   |
| 17  | /libreria/meta4infpers.js |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                 | Resolución | Ficha / candidato                                                                    |
| ------ | --- | -------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| BASE   | 14  | ../ssco_dyn_infoperson.jsp | física     | [sse_g0/ssco_dyn_infoperson.jsp](sse_g0--ssco_dyn_infoperson.md)                     |
| BASE   | 14  | ../ssco_dyn_infoperson.jsp | física     | [sse_g0/ssco_dyn_infoperson.jsp](sse_g0--ssco_dyn_infoperson.md)                     |
| BASE   | 14  | /libreria/mootools.js      | contextual | &#96;libreria/mootools.js&#96;                                                       |
| BASE   | 15  | /libreria/meta4ajax.js     | contextual | [libreria/meta4ajax.js](../../transversal/dependencias/libreria--meta4ajax.md)       |
| BASE   | 16  | /libreria/meta4photo.js    | contextual | [libreria/meta4photo.js](../../transversal/dependencias/libreria--meta4photo.md)     |
| BASE   | 17  | /libreria/meta4infpers.js  | contextual | [libreria/meta4infpers.js](../../transversal/dependencias/libreria--meta4infpers.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_dyn_infoperson.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
