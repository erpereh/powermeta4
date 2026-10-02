# meta4.mobile.select_platform

Identificador: `mobile/js/meta4.mobile.select_platform.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/js/meta4.mobile.select_platform.js](../../../../clon_portal/portal/mobile/js/meta4.mobile.select_platform.js) | `c20b46833d444c33846c39a9ef4695ac37fdd3e5d89dc573c5c6da47894f12ff` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/js/meta4.mobile.select_platform.js](../../../../clon_portal/portal/mobile/js/meta4.mobile.select_platform.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos |
| --- | ------- | --------- |
| 1   | img     |           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales                |
| --- | --------- | ----------------------------------- |
| 1   | exec      | location.search)&#124;&#124;[,null] |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos |
| --- | ------------- | ---------- |
| 1   | onDeviceReady |            |
| 1   | a             |            |
| 1   | deployhelp    |            |
| 1   | loadCordova   |            |
| 1   | goPrevPage    |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | document.addEventListener("deviceready",onDeviceReady,false);function onDeviceReady(){function a(){}navigator.globalization.getPreferredLanguage(function(b){meta4.ui.translate.loadJs("select_platform_"+b.value.substring(0,2)+".js",a);console.log("select_platform_"+b.value.substring(0,2)+".js")},function(){console.log("Error getting language\n")});console.log("device ready");console.log("hide");document.addEventListener("backbutton",function(b){b.preventDefault();navigator.app.exitApp()},false)}$(document).ready(loadCordova);meta4.ui.translate.loadJs("select_platform_en.js",null);function deployhelp(){if($("#divcodehelp").attr("class")=="deployed"){$("#divcodehelp").removeClass("deployed")}else{$("#divcodehelp").addClass("deployed")}return false}function loadCordova(){var c=(RegExp("deviceFrom=(.+?)(&amp;&#124;$)").exec(location.search)&#124;&#124;[,null])[1];if(c=="android"&#124;&#124;c=="ios"){var a="";var b="";if(c=="android"){a="/mobile/cordova/android/cordova.js";var b="Loaded cordova android."}else{if(c=="ios"){a="/mobile/cordova/ios/cordova.js";var b="Loaded cordova ios."}}jQuery.getScript(a,function(d,f,e){console.log(b);document.addEventListener("backbutton",function(g){g.preventDefault();navigator.app.exitApp()},false)})}$("#connect").click(function(){var d=$("#clientcode").val();window.location="/mobile/welcome_action.jsp?clientkey="+d+"&amp;deviceFrom="+c})}jQuery(document).ready(function(){var a=jQuery("#divcodehelp");var b=jQuery("&lt;div&gt;&lt;/div&gt;").attr({id:"goBackDiv",});var c=jQuery("&lt;img&gt;&lt;/img&gt;").attr({src:"/mobile/icons/goBack.svg",onClick:"goPrevPage()",});jQuery(a).after(b);b.append(c);var d=history.length;console.log(d);if(d&lt;=1){c.css("display","none")}});function goPrevPage(){window.history.back()}; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                     |
| --- | ------------------------------------- |
| 1   | .js                                   |
| 1   | select_platform_en.js                 |
| 1   | /mobile/cordova/android/cordova.js    |
| 1   | /mobile/cordova/ios/cordova.js        |
| 1   | /mobile/welcome_action.jsp?clientkey= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                            | Resolución | Ficha / candidato                                                         |
| ------ | --- | ------------------------------------- | ---------- | ------------------------------------------------------------------------- |
| BASE   | 1   | select_platform_en.js                 | ausente    | P06                                                                       |
| BASE   | 1   | /mobile/cordova/android/cordova.js    | contextual | [mobile/cordova/android/cordova.js](mobile--cordova--android--cordova.md) |
| BASE   | 1   | /mobile/cordova/ios/cordova.js        | contextual | [mobile/cordova/ios/cordova.js](mobile--cordova--ios--cordova.md)         |
| BASE   | 1   | /mobile/welcome_action.jsp?clientkey= | contextual | [mobile/welcome_action.jsp](mobile--welcome_action.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/js/meta4.mobile.select_platform.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
