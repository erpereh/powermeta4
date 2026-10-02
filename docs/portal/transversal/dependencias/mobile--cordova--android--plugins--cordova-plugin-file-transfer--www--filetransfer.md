# FileTransfer

Identificador: `mobile/cordova/android/plugins/cordova-plugin-file-transfer/www/FileTransfer.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/cordova/android/plugins/cordova-plugin-file-transfer/www/FileTransfer.js](../../../../clon_portal/portal/mobile/cordova/android/plugins/cordova-plugin-file-transfer/www/FileTransfer.js) | `59c751b7d8c62c119953ca055543c38d946370a5d13eb65afecf8ddfbc3c6e81` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/cordova/android/plugins/cordova-plugin-file-transfer/www/FileTransfer.js](../../../../clon_portal/portal/mobile/cordova/android/plugins/cordova-plugin-file-transfer/www/FileTransfer.js). Líneas físicas, contando desde 1.

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

| L   | Operación | Argumentos literales |
| --- | --------- | -------------------- |
| 1   | exec      | p                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 1   | k       | o          |
| 1   | h       | p          |
| 1   | g       | r          |
| 1   | b       | o          |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | cordova.define("cordova-plugin-file-transfer.FileTransfer",function(m,d,j){var a=m("cordova/argscheck"),c=m("cordova/exec"),f=m("./FileTransferError"),l=m("cordova-plugin-file.ProgressEvent");function k(o){var n=new l();n.lengthComputable=o.lengthComputable;n.loaded=o.loaded;n.total=o.total;return n}function h(p){var o=/^https?\:\/\/(?:(?:(([^:@\/]_)(?::([^@\/]_))?)?@)?([^:\/?#]_)(?::(\d_))?)._$/,n=o.exec(p);return n&amp;&amp;n[1]}function g(r){var q=null;if(window.btoa){var p=h(r);if(p){var n="Authorization";var o="Basic "+window.btoa(p);q={name:n,value:o}}}return q}function b(o){var q=[];for(var n in o){if(o.hasOwnProperty(n)){var p=o[n];q.push({name:n,value:p.toString()})}}return q}var i=0;var e=function(){this.\_id=++i;this.onprogress=null};e.prototype.upload=function(t,A,B,p,x,C){a.checkArgs("ssFFO_","FileTransfer.upload",arguments);var r=null;var s=null;var w=null;var y=null;var o=true;var u=null;var v=null;var n=g(A);if(n){A=A.replace(h(A)+"@","");x=x&#124;&#124;{};x.headers=x.headers&#124;&#124;{};x.headers[n.name]=n.value}if(x){r=x.fileKey;s=x.fileName;w=x.mimeType;u=x.headers;v=x.httpMethod&#124;&#124;"POST";if(v.toUpperCase()=="PUT"){v="PUT"}else{v="POST"}if(x.chunkedMode!==null&#124;&#124;typeof x.chunkedMode!="undefined"){o=x.chunkedMode}if(x.params){y=x.params}else{y={}}}if(cordova.platformId==="windowsphone"){u=u&amp;&amp;b(u);y=y&amp;&amp;b(y)}var q=p&amp;&amp;function(E){var F=new f(E.code,E.source,E.target,E.http_status,E.body,E.exception);p(F)};var z=this;var D=function(E){if(typeof E.lengthComputable!="undefined"){if(z.onprogress){z.onprogress(k(E))}}else{if(B){B(E)}}};c(D,q,"FileTransfer","upload",[t,A,r,s,w,y,C,o,u,this._id,v])};e.prototype.download=function(t,v,u,o,w,r){a.checkArgs("ssFF*","FileTransfer.download",arguments);var s=this;var n=g(t);if(n){t=t.replace(h(t)+"@","");r=r&#124;&#124;{};r.headers=r.headers&#124;&#124;{};r.headers[n.name]=n.value}var q=null;if(r){q=r.headers&#124;&#124;null}if(cordova.platformId==="windowsphone"&amp;&amp;q){q=b(q)}var x=function(z){if(typeof z.lengthComputable!="undefined"){if(s.onprogress){return s.onprogress(k(z))}}else{if(u){var y=null;if(z.isDirectory){y=new (m("cordova-plugin-file.DirectoryEntry"))()}else{if(z.isFile){y=new (m("cordova-plugin-file.FileEntry"))()}}y.isDirectory=z.isDirectory;y.isFile=z.isFile;y.name=z.name;y.fullPath=z.fullPath;y.filesystem=new FileSystem(z.filesystemName&#124;&#124;(z.filesystem==window.PERSISTENT?"persistent":"temporary"));y.nativeURL=z.nativeURL;u(y)}}};var p=o&amp;&amp;function(y){var z=new f(y.code,y.source,y.target,y.http_status,y.body,y.exception);o(z)};c(x,p,"FileTransfer","download",[t,v,w,this._id,q])};e.prototype.abort=function(){c(null,null,"FileTransfer","abort",[this._id])};j.exports=e}); |

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

- Confirmar exposición y permisos de `mobile/cordova/android/plugins/cordova-plugin-file-transfer/www/FileTransfer.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
