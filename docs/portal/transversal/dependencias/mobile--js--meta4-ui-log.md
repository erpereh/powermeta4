# meta4.ui.log

Identificador: `mobile/js/meta4.ui.log.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/js/meta4.ui.log.js](../../../../clon_portal/portal/mobile/js/meta4.ui.log.js) | `17923efb17a20e44f84c2e2624b0cf76447aa70434736d3b7d1a0caee6a08753` |      5 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/js/meta4.ui.log.js](../../../../clon_portal/portal/mobile/js/meta4.ui.log.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos |
| --- | ------- | --------- |
| 2   | a       |           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 2   | e       | a          |
| 3   | f       | a          |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2   | meta4.ui.log=function(){function e(a){if(null!==a){var b=jQuery("#errorPopup"),c;if(0===b.length){b=jQuery("&lt;div&gt;&lt;/div&gt;");b.attr("data-role","popup");b.attr("class","ui-content");b.attr("id","errorPopup");var d=jQuery("&lt;a&gt;&lt;/a&gt;");d.attr("href","#");d.attr("data-rel","back");d.attr("data-role","button");d.attr("data-icon","delete");d.attr("data-iconpos","notext");d.attr("class","ui-btn-right");c=jQuery("&lt;p&gt;&lt;/p&gt;");b.append(d,c);jQuery("body").append(b);b.trigger("create")}c=jQuery("#errorPopup p");c.text(a);                  |
| 3   | !1===meta4.mobile.isPageInitialized&amp;&amp;jQuery.mobile.initializePage();a="b"==jQuery.mobile.page.prototype.options.theme?"a":"b";b.popup();b.popup({corners:!1,overlayTheme:a});b.popup("open")}}function f(a){var b=a.getErrorMessage(),c=b;if(null===b)a=a.getLogMessage(0),null!==a&amp;&amp;(c=a.getDescription());else{var b=!1,d=a.getErrorType();null!==d&amp;&amp;(b=!0,"SESSION_TIMEOUT"===d.getAsString()&amp;&amp;(c=meta4.ui.translate.getTranslate("_sessionTimeout","Your session has expired because you have disconnected or been inactive for some time."))); |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso |
| --- | ----------------- |
| 4   | /mobile/index.jsp |
| 4   | jquery.mobile.js  |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia        | Resolución | Ficha / candidato                    |
| ------ | --- | ----------------- | ---------- | ------------------------------------ |
| BASE   | 4   | /mobile/index.jsp | contextual | [mobile/index.jsp](mobile--index.md) |
| BASE   | 4   | jquery.mobile.js  | ausente    | P06                                  |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/js/meta4.ui.log.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
