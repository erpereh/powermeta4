# Contact

Identificador: `mobile/cordova/ios/plugins/cordova-plugin-contacts/www/Contact.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/cordova/ios/plugins/cordova-plugin-contacts/www/Contact.js](../../../../clon_portal/portal/mobile/cordova/ios/plugins/cordova-plugin-contacts/www/Contact.js) | `ef0f5b61d06a4533164c7c09f91356ccf35e8e9bce12fbe72ede25b56a750bee` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/cordova/ios/plugins/cordova-plugin-contacts/www/Contact.js](../../../../clon_portal/portal/mobile/cordova/ios/plugins/cordova-plugin-contacts/www/Contact.js). Líneas físicas, contando desde 1.

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

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 1   | k       | l          |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | cordova.define("cordova-plugin-contacts.Contact",function(h,f,g){var a=h("cordova/argscheck"),e=h("cordova/exec"),c=h("./ContactError"),i=h("cordova/utils"),d=h("./convertUtils");var b=function(o,m,q,r,u,n,j,p,t,k,s,v,l,w){this.id=o&#124;&#124;null;this.rawId=null;this.displayName=m&#124;&#124;null;this.name=q&#124;&#124;null;this.nickname=r&#124;&#124;null;this.phoneNumbers=u&#124;&#124;null;this.emails=n&#124;&#124;null;this.addresses=j&#124;&#124;null;this.ims=p&#124;&#124;null;this.organizations=t&#124;&#124;null;this.birthday=k&#124;&#124;null;this.note=s&#124;&#124;null;this.photos=v&#124;&#124;null;this.categories=l&#124;&#124;null;this.urls=w&#124;&#124;null};b.prototype.remove=function(l,j){a.checkArgs("FF","Contact.remove",arguments);var k=j&amp;&amp;function(m){j(new c(m))};if(this.id===null){k(c.UNKNOWN_ERROR)}else{e(l,k,"Contacts","remove",[this.id])}};b.prototype.clone=function(){var j=i.clone(this);j.id=null;j.rawId=null;function k(l){if(l){for(var m=0;m&lt;l.length;++m){l[m].id=null}}}k(j.phoneNumbers);k(j.emails);k(j.addresses);k(j.ims);k(j.organizations);k(j.categories);k(j.photos);k(j.urls);return j};b.prototype.save=function(n,k){a.checkArgs("FFO","Contact.save",arguments);var l=k&amp;&amp;function(o){k(new c(o))};var m=function(p){if(p){if(n){var o=h("./contacts").create(p);n(d.toCordovaFormat(o))}}else{l(c.UNKNOWN_ERROR)}};var j=d.toNativeFormat(i.clone(this));e(m,l,"Contacts","save",[j])};g.exports=b}); |

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

- Confirmar exposición y permisos de `mobile/cordova/ios/plugins/cordova-plugin-contacts/www/Contact.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
