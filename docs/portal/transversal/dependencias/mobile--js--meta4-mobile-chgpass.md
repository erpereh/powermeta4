# meta4.mobile.chgpass

Identificador: `mobile/js/meta4.mobile.chgpass.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/js/meta4.mobile.chgpass.js](../../../../clon_portal/portal/mobile/js/meta4.mobile.chgpass.js) | `48e8aad389331b5b45d6350ae541799b52137b342eb07e3a332f60f6832a9427` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/js/meta4.mobile.chgpass.js](../../../../clon_portal/portal/mobile/js/meta4.mobile.chgpass.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos |
| --- | ------- | --------- |
| 1   | input   |           |
| 1   | img     |           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función    | Argumentos |
| --- | ---------- | ---------- |
| 1   | initPage   |            |
| 1   | goPrevPage |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | var meta4=meta4&#124;&#124;{};meta4.mobile=meta4.mobile&#124;&#124;{};function initPage(){if(typeof(Storage)!=="undefined"){sessionStorage.removeItem("m4movilmenu")}var c=jQuery("#button_send_a").attr("title");var b=jQuery("#button_send_a").attr("href");jQuery("#button_send_a").remove();jQuery("#button_send_img").remove();if(c){if(b.indexOf("javascript:")==-1){b="javascript:window.location.href='"+b+"'"}var k=jQuery("&lt;input&gt;&lt;/input&gt;").attr({id:"button_send",type:"button",value:c,onclick:b});var a=jQuery("body");a.append(k)}jQuery.mobile.loader.prototype.options.theme="a";jQuery.mobile.page.prototype.options.theme="a";if(typeof(Storage)!=="undefined"){if(localStorage.m4ThemeMobile){jQuery.mobile.page.prototype.options.theme=localStorage.m4ThemeMobile;jQuery.mobile.loader.prototype.options.theme=localStorage.m4ThemeMobile}}var e=jQuery("body").find("*");var j;for(j=0;j&lt;e.length;j++){e.attr("data-theme",jQuery.mobile.page.prototype.options.theme)}document.title="Meta4";jQuery.mobile.initializePage();var m;m=jQuery("#tdlblM4_CURRENT_PASSWORD").text();jQuery("#M4_CURRENT_PASSWORD").attr("placeholder",m);m=jQuery("#tdlblM4_NEW_PASSWORD").text();jQuery("#M4_NEW_PASSWORD").attr("placeholder",m);m=jQuery("#tdlblM4_RETYPE_PASSWORD").text();jQuery("#M4_RETYPE_PASSWORD").attr("placeholder",m);m=jQuery("#tdlblM4_USER").text();var n=jQuery("#tdM4_USER").text();if(n.indexOf(m)==-1){jQuery("#tdM4_USER").text(m+n)}if(document.getElementById("M4_CURRENT_PASSWORD")){if(document.getElementById("M4_CURRENT_PASSWORD").getAttribute("placeholder")==""){var d=document.getElementById("M4_CURRENT_PASSWORD").getAttribute("title");document.getElementById("M4_CURRENT_PASSWORD").setAttribute("placeholder",d)}}if(document.getElementById("M4_NEW_PASSWORD")){if(document.getElementById("M4_NEW_PASSWORD").getAttribute("placeholder")==""){var d=document.getElementById("M4_NEW_PASSWORD").getAttribute("title");document.getElementById("M4_NEW_PASSWORD").setAttribute("placeholder",d)}}if(document.getElementById("M4_RETYPE_PASSWORD")){if(document.getElementById("M4_RETYPE_PASSWORD").getAttribute("placeholder")==""){var d=document.getElementById("M4_RETYPE_PASSWORD").getAttribute("title");document.getElementById("M4_RETYPE_PASSWORD").setAttribute("placeholder",d)}}var g=jQuery("&lt;div&gt;&lt;/div&gt;").attr({id:"goBackDiv",});var h=jQuery("&lt;img&gt;&lt;/img&gt;").attr({src:"/mobile/icons/goBack.svg",onClick:"goPrevPage()",});g.append(h);var f=jQuery("#loginBox");jQuery(f).after(g);var l=history.length;console.log(l);if(l&lt;=1){h.css("display","none")}}function goPrevPage(){var a=window.location;var a=window.location.href;var b=a.includes("change_password");if(b==true){window.history.go(-3)}else{window.history.back()}}jQuery(document).ready(function(){initPage()}); |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/js/meta4.mobile.chgpass.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
