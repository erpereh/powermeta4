# ssco_report_end

Identificador: `sse_generico/ssco_report_end.jsp`. Perfil: **transversal**. Dominio: **navegacion**.

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

| Sociedad / ámbito | Archivo                                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/sse_generico/ssco_report_end.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/ssco_report_end.jsp) | `178daca5aa1aa4b1d1a83e97d3691ce5b631f8e4b35f4b2cb80045939736937e` |      4 |
| CYC / compartido  | [m4custom/CYC/sse_generico/ssco_report_end.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_generico/ssco_report_end.jsp)   | `178daca5aa1aa4b1d1a83e97d3691ce5b631f8e4b35f4b2cb80045939736937e` |      4 |
| IBER / compartido | [m4custom/IBER/sse_generico/ssco_report_end.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_generico/ssco_report_end.jsp) | `178daca5aa1aa4b1d1a83e97d3691ce5b631f8e4b35f4b2cb80045939736937e` |      4 |
| BASE / compartido | [sse_generico/ssco_report_end.jsp](../../../../clon_portal/portal/sse_generico/ssco_report_end.jsp)                             | `178daca5aa1aa4b1d1a83e97d3691ce5b631f8e4b35f4b2cb80045939736937e` |      4 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida, BASE compartida

Fuente de los localizadores `L`: [m4custom/COLL/sse_generico/ssco_report_end.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_generico/ssco_report_end.jsp). Líneas físicas, contando desde 1.

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

| L   | Include                                  |
| --- | ---------------------------------------- |
| 1   | ../shco_g0/shco_gen_error.jsp            |
| 1   | ../shco_g0/shco_gen_disclaimer.jsp       |
| 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp |
| 4   | ssco_end_prod.jsp                        |

| L   | Destino / recurso                        |
| --- | ---------------------------------------- |
| 1   | ../shco_g0/shco_gen_error.jsp            |
| 1   | ../shco_g0/shco_gen_disclaimer.jsp       |
| 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp |
| 4   | ssco_end_prod.jsp                        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                               | Resolución | Ficha / candidato                                                                              |
| ------ | --- | ---------------------------------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| COLL   | 1   | ../shco_g0/shco_gen_error.jsp            | ausente    | P06                                                                                            |
| COLL   | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | ausente    | P06                                                                                            |
| COLL   | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | ausente    | P06                                                                                            |
| COLL   | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |
| COLL   | 1   | ../shco_g0/shco_gen_error.jsp            | ausente    | P06                                                                                            |
| COLL   | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | ausente    | P06                                                                                            |
| COLL   | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | ausente    | P06                                                                                            |
| COLL   | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |
| CYC    | 1   | ../shco_g0/shco_gen_error.jsp            | ausente    | P06                                                                                            |
| CYC    | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | ausente    | P06                                                                                            |
| CYC    | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | ausente    | P06                                                                                            |
| CYC    | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |
| CYC    | 1   | ../shco_g0/shco_gen_error.jsp            | ausente    | P06                                                                                            |
| CYC    | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | ausente    | P06                                                                                            |
| CYC    | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | ausente    | P06                                                                                            |
| CYC    | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |
| IBER   | 1   | ../shco_g0/shco_gen_error.jsp            | ausente    | P06                                                                                            |
| IBER   | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | ausente    | P06                                                                                            |
| IBER   | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | ausente    | P06                                                                                            |
| IBER   | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |
| IBER   | 1   | ../shco_g0/shco_gen_error.jsp            | ausente    | P06                                                                                            |
| IBER   | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | ausente    | P06                                                                                            |
| IBER   | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | ausente    | P06                                                                                            |
| IBER   | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |
| BASE   | 1   | ../shco_g0/shco_gen_error.jsp            | física     | [shco_g0/shco_gen_error.jsp](../dependencias/shco_g0--shco_gen_error.md)                       |
| BASE   | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | física     | [shco_g0/shco_gen_disclaimer.jsp](../dependencias/shco_g0--shco_gen_disclaimer.md)             |
| BASE   | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | física     | [shco_g0/shco_gen_set_sec_role_end.jsp](../dependencias/shco_g0--shco_gen_set_sec_role_end.md) |
| BASE   | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |
| BASE   | 1   | ../shco_g0/shco_gen_error.jsp            | física     | [shco_g0/shco_gen_error.jsp](../dependencias/shco_g0--shco_gen_error.md)                       |
| BASE   | 1   | ../shco_g0/shco_gen_disclaimer.jsp       | física     | [shco_g0/shco_gen_disclaimer.jsp](../dependencias/shco_g0--shco_gen_disclaimer.md)             |
| BASE   | 2   | ../shco_g0/shco_gen_set_sec_role_end.jsp | física     | [shco_g0/shco_gen_set_sec_role_end.jsp](../dependencias/shco_g0--shco_gen_set_sec_role_end.md) |
| BASE   | 4   | ssco_end_prod.jsp                        | física     | [sse_generico/ssco_end_prod.jsp](sse_generico--ssco_end_prod.md)                               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_generico/ssco_report_end.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
