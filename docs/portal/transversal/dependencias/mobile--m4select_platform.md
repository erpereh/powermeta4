# Platform

Identificador: `mobile/m4select_platform.html`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/m4select_platform.html](../../../../clon_portal/portal/mobile/m4select_platform.html) | `eeb52e14f0346d5a9ddda257d34470fa77b7f370a1ac42a676945bfeee0d6652` |     45 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/m4select_platform.html](../../../../clon_portal/portal/mobile/m4select_platform.html). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 12  | Platform                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------- |
| 37  | input   | type=text; id=clientcode                                                           |
| 38  | a       | data-role=button; id=connect; rel=external; data-m4trans=_platformSelectionConnect |
| 39  | a       | id=codehelptext; data-m4trans=_codehelptext                                        |

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

No hay includes declarados.

| L   | Destino / recurso                  |
| --- | ---------------------------------- |
| 17  | /style/jquery.mobile.structure.css |
| 18  | /style/jquery.mobile.meta4.min.css |
| 19  | css/mobile.generic.css             |
| 20  | css/mobile.m4select_platform.css   |
| 22  | /library/jquery.js                 |
| 26  | js/meta4.ui.log.js                 |
| 27  | js/meta4.ui.translate.js           |
| 29  | js/meta4.mobile.select_platform.js |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                         | Resolución | Ficha / candidato                                                                        |
| ------ | --- | ---------------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| BASE   | 22  | /library/jquery.js                 | contextual | &#96;library/jquery.js&#96;                                                              |
| BASE   | 26  | js/meta4.ui.log.js                 | física     | [mobile/js/meta4.ui.log.js](mobile--js--meta4-ui-log.md)                                 |
| BASE   | 27  | js/meta4.ui.translate.js           | física     | [mobile/js/meta4.ui.translate.js](mobile--js--meta4-ui-translate.md)                     |
| BASE   | 29  | js/meta4.mobile.select_platform.js | física     | [mobile/js/meta4.mobile.select_platform.js](mobile--js--meta4-mobile-select_platform.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/m4select_platform.html` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
