# ios-wkwebview-exec

Identificador: `mobile/cordova/ios/plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/cordova/ios/plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js](../../../../clon_portal/portal/mobile/cordova/ios/plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js) | `970ebea243d455098a21e5a57c33a1dd5316309458ea2d88f02deed580d3e40f` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/cordova/ios/plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js](../../../../clon_portal/portal/mobile/cordova/ios/plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js). Líneas físicas, contando desde 1.

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

| L   | Operación | Argumentos literales                            |
| --- | --------- | ----------------------------------------------- |
| 1   | exec      | null, null, 'Service', 'action', [ arg1, arg2 ] |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 1   | h       | m          |
| 1   | i       | n          |
| 1   | b       | n          |
| 1   | d       |            |
| 1   | e       |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | cordova.define("cordova-plugin-wkwebview-engine.ios-wkwebview-exec",function(k,f,j){var c=k("cordova");var l=k("cordova/utils");var a=k("cordova/base64");function h(m){if(!m&#124;&#124;l.typeName(m)!=="Array"){return m}var n=[];m.forEach(function(o,p){if(l.typeName(o)==="ArrayBuffer"){n.push({CDVType:"ArrayBuffer",data:a.fromArrayBuffer(o)})}else{n.push(o)}});return n}function i(n){if(n.CDVType==="ArrayBuffer"){var o=function(r){var q=new Uint8Array(r.length);for(var p=0;p&lt;r.length;p++){q[p]=r.charCodeAt(p)}return q.buffer};var m=function(p){return o(atob(p))};n=m(n.data)}return n}function b(n){var m=[];if(!n&#124;&#124;!n.hasOwnProperty("CDVType")){m.push(n)}else{if(n.CDVType==="MultiPart"){n.messages.forEach(function(o){m.push(i(o))})}else{m.push(i(n))}}return m}var g=function(){var s,q,r,m,n;var o=null;if(typeof arguments[0]!=="string"){s=arguments[0];q=arguments[1];r=arguments[2];m=arguments[3];n=arguments[4];o="INVALID"}else{throw new Error("The old format of this exec call has been removed (deprecated since 2.1). Change to: cordova.exec(null, null, 'Service', 'action', [ arg1, arg2 ]);")}n=n&#124;&#124;[];if(s&#124;&#124;q){o=r+c.callbackId++;c.callbacks[o]={success:s,fail:q}}n=h(n);var p=[o,r,m,JSON.parse(JSON.stringify(n))];window.webkit.messageHandlers.cordova.postMessage(p)};g.nativeCallback=function(n,r,q,p,o){var s=r===0&#124;&#124;r===1;var m=b(q);Promise.resolve().then(function(){c.callbackFromNative(n,s,r,m,p)})};g.nativeEvalAndFetch=function(n){try{n()}catch(m){console.log(m)}};function d(){var m=k("cordova/exec");var n=(typeof m.nativeFetchMessages==="function")&amp;&amp;(typeof m.nativeEvalAndFetch==="function")&amp;&amp;(typeof m.nativeCallback==="function");return(n&amp;&amp;e!==m)?m:g}function e(){d().apply(null,arguments)}e.nativeFetchMessages=function(){return d().nativeFetchMessages.apply(null,arguments)};e.nativeEvalAndFetch=function(){return d().nativeEvalAndFetch.apply(null,arguments)};e.nativeCallback=function(){return d().nativeCallback.apply(null,arguments)};j.exports=e;if(window.webkit&amp;&amp;window.webkit.messageHandlers&amp;&amp;window.webkit.messageHandlers.cordova&amp;&amp;window.webkit.messageHandlers.cordova.postMessage){c.define.remove("cordova/exec");c.define("cordova/exec",function(o,m,n){n.exports=e})}}); |

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

- Confirmar exposición y permisos de `mobile/cordova/ios/plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
