# sgco_put_object

Identificador: `sse_generico/sgco_put_object.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_generico/espanol/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_put_object.jsp) | `0e6ac77392df3743582e841aae9125cfd2082cf74b50c72427b4f65f3662f817` |      1 |
| COLL / compartido | [m4custom/COLL/sse_generico/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_put_object.jsp)                 | `ac6d4dee6b8099a0db01504e98c6e5f3b7122e9f495b092a1daaa2423ac01138` |     14 |
| CYC / español     | [m4custom/CYC/sse_generico/espanol/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/espanol/sgco_put_object.jsp)   | `0e6ac77392df3743582e841aae9125cfd2082cf74b50c72427b4f65f3662f817` |      1 |
| CYC / compartido  | [m4custom/CYC/sse_generico/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/sgco_put_object.jsp)                   | `ac6d4dee6b8099a0db01504e98c6e5f3b7122e9f495b092a1daaa2423ac01138` |     14 |
| IBER / español    | [m4custom/IBER/sse_generico/espanol/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/espanol/sgco_put_object.jsp) | `0e6ac77392df3743582e841aae9125cfd2082cf74b50c72427b4f65f3662f817` |      1 |
| IBER / compartido | [m4custom/IBER/sse_generico/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/sgco_put_object.jsp)                 | `ac6d4dee6b8099a0db01504e98c6e5f3b7122e9f495b092a1daaa2423ac01138` |     14 |
| BASE / español    | [sse_generico/espanol/sgco_put_object.jsp](../../../../clon_portal/portal/sse_generico/espanol/sgco_put_object.jsp)                             | `0e6ac77392df3743582e841aae9125cfd2082cf74b50c72427b4f65f3662f817` |      1 |
| BASE / compartido | [sse_generico/sgco_put_object.jsp](../../../../clon_portal/portal/sse_generico/sgco_put_object.jsp)                                             | `ac6d4dee6b8099a0db01504e98c6e5f3b7122e9f495b092a1daaa2423ac01138` |     14 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, CYC ES, IBER ES, BASE ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/espanol/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/espanol/sgco_put_object.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                |
| --- | ---------------------- |
| 1   | ../sgco_put_object.jsp |

| L   | Destino / recurso      |
| --- | ---------------------- |
| 1   | ../sgco_put_object.jsp |

## Versión 2: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/sgco_put_object.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/sgco_put_object.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 5   | sId             | getParameter(request,"sId")    |
| 7   | sValue          | getParameter(request,"sValue") |

| L   | Variable  | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | --------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 5   | ai_sId    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sId")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sId")    |
| 7   | ai_sValue | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sValue") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sValue") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                              |
| --- | ----------------------------------------------------------------------------------------------------------------- |
| 9   | if (ai_sId != null &amp;&amp; !ai_sId.equals("") &amp;&amp; ai_sValue != null &amp;&amp; !ai_sValue.equals("")) { |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 3   | com.meta4.jsp     |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia             | Resolución | Ficha / candidato                                                    |
| ------ | --- | ---------------------- | ---------- | -------------------------------------------------------------------- |
| COLL   | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| COLL   | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| COLL   | 3   | com.meta4.jsp          | ausente    | P06                                                                  |
| CYC    | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| CYC    | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| CYC    | 3   | com.meta4.jsp          | ausente    | P06                                                                  |
| IBER   | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| IBER   | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| IBER   | 3   | com.meta4.jsp          | ausente    | P06                                                                  |
| BASE   | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| BASE   | 1   | ../sgco_put_object.jsp | física     | [sse_generico/sgco_put_object.jsp](sse_generico--sgco_put_object.md) |
| BASE   | 3   | com.meta4.jsp          | ausente    | P06                                                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/sgco_put_object.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
