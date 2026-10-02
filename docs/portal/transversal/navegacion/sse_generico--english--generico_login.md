# generico_login

Identificador: `sse_generico/english/generico_login.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_generico/english/generico_login.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/english/generico_login.jsp) | `a9c60e4ae6fc6d4f2ebb91e92853da38e9ad6da841dd90c700ceced0f7cc3de3` |     15 |
| BASE / compartido | [sse_generico/english/generico_login.jsp](../../../../clon_portal/portal/sse_generico/english/generico_login.jsp)                             | `a9c60e4ae6fc6d4f2ebb91e92853da38e9ad6da841dd90c700ceced0f7cc3de3` |     15 |
| CYC / compartido  | [m4custom/CYC/sse_generico/english/generico_login.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/english/generico_login.jsp)   | `a9c60e4ae6fc6d4f2ebb91e92853da38e9ad6da841dd90c700ceced0f7cc3de3` |     15 |
| IBER / compartido | [m4custom/IBER/sse_generico/english/generico_login.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/english/generico_login.jsp) | `a9c60e4ae6fc6d4f2ebb91e92853da38e9ad6da841dd90c700ceced0f7cc3de3` |     15 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/english/generico_login.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/english/generico_login.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                           |
| --- | ------- | ------------------------------------------------------------------- |
| 7   | form    | name=ESSlogin; action=/sse_generico/generico_login.jsp; method=post |
| 8   | input   | type=hidden; name=lang; value=en                                    |
| 9   | input   | type=hidden; name=params; value=&lt;%=sParams%&gt;                  |
| 10  | form    |                                                                     |

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

| L   | Include                  |
| --- | ------------------------ |
| 1   | ../sgco_params_login.jsp |

| L   | Destino / recurso                |
| --- | -------------------------------- |
| 7   | /sse_generico/generico_login.jsp |
| 1   | ../sgco_params_login.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                       | Resolución | Ficha / candidato                                                                                                                      |
| ------ | --- | -------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |
| COLL   | 7   | /sse_generico/generico_login.jsp | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md); [sse_generico/generico_login.jsp](sse_generico--generico_login.md) |
| COLL   | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |
| BASE   | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |
| BASE   | 7   | /sse_generico/generico_login.jsp | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md)                                                                     |
| BASE   | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |
| CYC    | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |
| CYC    | 7   | /sse_generico/generico_login.jsp | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md); [sse_generico/generico_login.jsp](sse_generico--generico_login.md) |
| CYC    | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |
| IBER   | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |
| IBER   | 7   | /sse_generico/generico_login.jsp | contextual | [sse_generico/generico_login.jsp](sse_generico--generico_login.md); [sse_generico/generico_login.jsp](sse_generico--generico_login.md) |
| IBER   | 1   | ../sgco_params_login.jsp         | física     | [sse_generico/sgco_params_login.jsp](sse_generico--sgco_params_login.md)                                                               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/english/generico_login.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
