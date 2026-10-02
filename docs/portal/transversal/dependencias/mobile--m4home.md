# Home

Identificador: `mobile/m4home.html`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/m4home.html](../../../../clon_portal/portal/mobile/m4home.html) | `00555527941e3a25b56359c2935a4f5f8ad34ee5b5b4006eb3f063aa7b0bfb70` |     70 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/m4home.html](../../../../clon_portal/portal/mobile/m4home.html). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 17  | Home                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                      |
| --- | ------- | ---------------------------------------------- |
| 40  | img     | src=/mobile/icons/meta4_logo_w.svg             |
| 43  | a       | id=deprecatedLink; href=                       |
| 49  | img     | src=/mobile/icons/m4-loading.gif               |
| 55  | a       | id=settingsButton; href=                       |
| 55  | img     | id=logout-icon; src=/mobile/icons/settings.svg |
| 57  | img     | src=/mobile/icons/unknownHome.png              |

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

| L   | Destino / recurso               |
| --- | ------------------------------- |
| 19  | /mobile/css/mobile.generic.css  |
| 21  | /mobile/css/mobile.home.css     |
| 23  | /library/jquery.js              |
| 25  | /mobile/js/meta4.mobile.js      |
| 27  | /library/jquery.mobile.js       |
| 29  | /m4jsapi/m4jsapi.nocache.js     |
| 31  | /mobile/js/meta4.mobile.home.js |
| 40  | /mobile/icons/meta4_logo_w.svg  |
| 49  | /mobile/icons/m4-loading.gif    |
| 55  | /mobile/icons/settings.svg      |
| 57  | /mobile/icons/unknownHome.png   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                      | Resolución | Ficha / candidato                                                  |
| ------ | --- | ------------------------------- | ---------- | ------------------------------------------------------------------ |
| BASE   | 23  | /library/jquery.js              | contextual | &#96;library/jquery.js&#96;                                        |
| BASE   | 25  | /mobile/js/meta4.mobile.js      | contextual | [mobile/js/meta4.mobile.js](mobile--js--meta4-mobile.md)           |
| BASE   | 27  | /library/jquery.mobile.js       | ausente    | P06                                                                |
| BASE   | 29  | /m4jsapi/m4jsapi.nocache.js     | contextual | [m4jsapi/m4jsapi.nocache.js](m4jsapi--m4jsapi-nocache.md)          |
| BASE   | 31  | /mobile/js/meta4.mobile.home.js | contextual | [mobile/js/meta4.mobile.home.js](mobile--js--meta4-mobile-home.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/m4home.html` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
