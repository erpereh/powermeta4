# statusbar

Identificador: `mobile/cordova/ios/plugins/cordova-plugin-statusbar/www/statusbar.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/cordova/ios/plugins/cordova-plugin-statusbar/www/statusbar.js](../../../../clon_portal/portal/mobile/cordova/ios/plugins/cordova-plugin-statusbar/www/statusbar.js) | `1b442db23700d688b0d972aeceeca90fb95fba9e820ce10581c3c060830c2c30` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/cordova/ios/plugins/cordova-plugin-statusbar/www/statusbar.js](../../../../clon_portal/portal/mobile/cordova/ios/plugins/cordova-plugin-statusbar/www/statusbar.js). Líneas físicas, contando desde 1.

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

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | cordova.define("cordova-plugin-statusbar.statusbar",function(e,b,c){var a=e("cordova/exec");var d={black:"#000000",darkGray:"#A9A9A9",lightGray:"#D3D3D3",white:"#FFFFFF",gray:"#808080",red:"#FF0000",green:"#00FF00",blue:"#0000FF",cyan:"#00FFFF",yellow:"#FFFF00",magenta:"#FF00FF",orange:"#FFA500",purple:"#800080",brown:"#A52A2A"};var f={isVisible:true,overlaysWebView:function(g){a(null,null,"StatusBar","overlaysWebView",[g])},styleDefault:function(){a(null,null,"StatusBar","styleDefault",[])},styleLightContent:function(){a(null,null,"StatusBar","styleLightContent",[])},styleBlackTranslucent:function(){a(null,null,"StatusBar","styleBlackTranslucent",[])},styleBlackOpaque:function(){a(null,null,"StatusBar","styleBlackOpaque",[])},backgroundColorByName:function(g){return f.backgroundColorByHexString(d[g])},backgroundColorByHexString:function(g){if(g.charAt(0)!=="#"){g="#"+g}if(g.length===4){var h=g.split("");g="#"+h[1]+h[1]+h[2]+h[2]+h[3]+h[3]}a(null,null,"StatusBar","backgroundColorByHexString",[g])},hide:function(){a(null,null,"StatusBar","hide",[]);f.isVisible=false},show:function(){a(null,null,"StatusBar","show",[]);f.isVisible=true}};window.setTimeout(function(){a(function(g){if(typeof g=="object"){if(g.type=="tap"){cordova.fireWindowEvent("statusTap")}}else{f.isVisible=g}},null,"StatusBar","_ready",[])},0);c.exports=f}); |

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

- Confirmar exposición y permisos de `mobile/cordova/ios/plugins/cordova-plugin-statusbar/www/statusbar.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
