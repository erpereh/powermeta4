# FileWriter

Identificador: `mobile/cordova/android/plugins/cordova-plugin-file/www/FileWriter.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/cordova/android/plugins/cordova-plugin-file/www/FileWriter.js](../../../../clon_portal/portal/mobile/cordova/android/plugins/cordova-plugin-file/www/FileWriter.js) | `2a2fcf34251519e06c8e1d20a98982af50c891d6b08810ace5b98d816d88b833` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/cordova/android/plugins/cordova-plugin-file/www/FileWriter.js](../../../../clon_portal/portal/mobile/cordova/android/plugins/cordova-plugin-file/www/FileWriter.js). Líneas físicas, contando desde 1.

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

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | cordova.define("cordova-plugin-file.FileWriter",function(h,b,f){var a=h("cordova/exec");var c=h("./FileError");var d=h("./FileReader");var g=h("./ProgressEvent");var e=function(i){this.fileName="";this.length=0;if(i){this.localURL=i.localURL&#124;&#124;i;this.length=i.size&#124;&#124;0}this.position=0;this.readyState=0;this.result=null;this.error=null;this.onwritestart=null;this.onprogress=null;this.onwrite=null;this.onwriteend=null;this.onabort=null;this.onerror=null};e.INIT=0;e.WRITING=1;e.DONE=2;e.prototype.abort=function(){if(this.readyState===e.DONE&#124;&#124;this.readyState===e.INIT){throw new c(c.INVALID_STATE_ERR)}this.error=new c(c.ABORT_ERR);this.readyState=e.DONE;if(typeof this.onabort==="function"){this.onabort(new g("abort",{target:this}))}if(typeof this.onwriteend==="function"){this.onwriteend(new g("writeend",{target:this}))}};e.prototype.write=function(i,l){var p=this;var o=(typeof window.Blob!=="undefined"&amp;&amp;typeof window.ArrayBuffer!=="undefined");var m=(cordova.platformId==="windows8"&#124;&#124;cordova.platformId==="windows");var k;if(i instanceof File&#124;&#124;(!m&amp;&amp;o&amp;&amp;i instanceof Blob)){var j=new d();j.onload=function(){e.prototype.write.call(p,this.result,true)};j.onerror=function(){p.readyState=e.DONE;p.error=this.error;if(typeof p.onerror==="function"){p.onerror(new g("error",{target:p}))}if(typeof p.onwriteend==="function"){p.onwriteend(new g("writeend",{target:p}))}};this.readyState=e.WRITING;if(o){j.readAsArrayBuffer(i)}else{j.readAsText(i)}return}k=o&amp;&amp;(i instanceof ArrayBuffer);if(k&amp;&amp;cordova.platformId==="windowsphone"){i=Array.apply(null,new Uint8Array(i))}if(this.readyState===e.WRITING&amp;&amp;!l){throw new c(c.INVALID_STATE_ERR)}this.readyState=e.WRITING;var n=this;if(typeof n.onwritestart==="function"){n.onwritestart(new g("writestart",{target:n}))}a(function(q){if(n.readyState===e.DONE){return}n.position+=q;n.length=n.position;n.readyState=e.DONE;if(typeof n.onwrite==="function"){n.onwrite(new g("write",{target:n}))}if(typeof n.onwriteend==="function"){n.onwriteend(new g("writeend",{target:n}))}},function(q){if(n.readyState===e.DONE){return}n.readyState=e.DONE;n.error=new c(q);if(typeof n.onerror==="function"){n.onerror(new g("error",{target:n}))}if(typeof n.onwriteend==="function"){n.onwriteend(new g("writeend",{target:n}))}},"File","write",[this.localURL,i,this.position,k])};e.prototype.seek=function(i){if(this.readyState===e.WRITING){throw new c(c.INVALID_STATE_ERR)}if(!i&amp;&amp;i!==0){return}if(i&lt;0){this.position=Math.max(i+this.length,0)}else{if(i&gt;this.length){this.position=this.length}else{this.position=i}}};e.prototype.truncate=function(j){if(this.readyState===e.WRITING){throw new c(c.INVALID_STATE_ERR)}this.readyState=e.WRITING;var i=this;if(typeof i.onwritestart==="function"){i.onwritestart(new g("writestart",{target:this}))}a(function(k){if(i.readyState===e.DONE){return}i.readyState=e.DONE;i.length=k;i.position=Math.min(i.position,k);if(typeof i.onwrite==="function"){i.onwrite(new g("write",{target:i}))}if(typeof i.onwriteend==="function"){i.onwriteend(new g("writeend",{target:i}))}},function(k){if(i.readyState===e.DONE){return}i.readyState=e.DONE;i.error=new c(k);if(typeof i.onerror==="function"){i.onerror(new g("error",{target:i}))}if(typeof i.onwriteend==="function"){i.onwriteend(new g("writeend",{target:i}))}},"File","truncate",[this.localURL,j])};f.exports=e}); |

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

- Confirmar exposición y permisos de `mobile/cordova/android/plugins/cordova-plugin-file/www/FileWriter.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
