# meta4.mobile.login

Identificador: `mobile/js/meta4.mobile.login.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [mobile/js/meta4.mobile.login.js](../../../../clon_portal/portal/mobile/js/meta4.mobile.login.js) | `3d4b6d445865910a319df6dc8c93d78d98d555f44d7ec3a8de83cdef5edff4b4` |      1 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [mobile/js/meta4.mobile.login.js](../../../../clon_portal/portal/mobile/js/meta4.mobile.login.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos |
| --- | ------- | --------- |
| 1   | input   |           |
| 1   | input   |           |
| 1   | input   |           |
| 1   | img     |           |
| 1   | a       |           |

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
| 1   | viewPassword  |            |
| 1   | viewPassword2 |            |
| 1   | onDeviceReady |            |
| 1   | b             | c          |
| 1   | a             |            |
| 1   | a             |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | window._m4LoadM4JSEvents=false;document.addEventListener("deviceready",onDeviceReady,false);function viewPassword(){var a=jQuery("#pwdlogin");var b=jQuery("#pwdstatus");if(a.prop("type")=="password"){jQuery("#pwdlogin").attr("type","text")}else{jQuery("#pwdlogin").attr("type","password")}}function viewPassword2(){var a=jQuery("#pwdlogin");var b=jQuery("#pwdstatus");if(a.prop("type")=="password"){jQuery("#pwdlogin").attr("type","text");jQuery("#pwdstatus").prop("checked",true)}else{jQuery("#pwdlogin").attr("type","password");jQuery("#pwdstatus").prop("checked",false)}}function onDeviceReady(){meta4.mobile.initSatusBar("#737373");navigator.meta4localpreferencesplugin.load(b,a,"serverpreference");function b(c){if(c==""){document.addEventListener("backbutton",function(d){d.preventDefault();document.location.href="/mobile/m4select_platform.html"},false)}else{document.addEventListener("backbutton",function(d){d.preventDefault();navigator.app.exitApp()},false)}}function a(){console.log("fail on loading push notification reg ID")}}var meta4=meta4&#124;&#124;{};meta4.mobile=meta4.mobile&#124;&#124;{};meta4.mobile.login=meta4.mobile.login&#124;&#124;{};meta4.mobile.login=(function(){jQuery(document).ready(function(){console.log("ready");var b=(RegExp("deviceFrom=(.+?)(&amp;&#124;$)").exec(location.search)&#124;&#124;[,null])[1];if(b=="android"&#124;&#124;b=="ios"){meta4.mobile.setLocalStorage("deviceFrom",b)}if(meta4.mobile.deviceFrom()=="android"&#124;&#124;meta4.mobile.deviceFrom()=="ios"){meta4.mobile.loadCordova()}jQuery.mobile.loader.prototype.options.theme="a";jQuery.mobile.page.prototype.options.theme="a";if(typeof(Storage)!=="undefined"){if(localStorage.m4ThemeMobile){jQuery.mobile.page.prototype.options.theme=localStorage.m4ThemeMobile;jQuery.mobile.loader.prototype.options.theme=localStorage.m4ThemeMobile}}var c=jQuery("body").find("*");var d;for(d=0;d&lt;c.length;d++){c.attr("data-theme",jQuery.mobile.page.prototype.options.theme)}});function a(){document.title="Meta4";var u=jQuery("#labeluser").text();var t=jQuery("#labelpwd").text();jQuery("#userlogin").attr("placeholder",u);jQuery("#pwdlogin").attr("placeholder",t);var v=m4xml.translate.getXMLValue("modeClassic");var j=jQuery("#modeClassic");if(j.length&gt;0){j.text(v)}else{var b=jQuery("body")}var c=jQuery("#datadiv");var i=jQuery("#prodLogin");if(i!=undefined){i.remove()}var f=jQuery("&lt;input&gt;&lt;/input&gt;").attr({id:"prodLogin",name:"_PROD",type:"hidden",value:"mobile"});c.append(f);var r=m4xml.translate.getXMLValue("showpassword");var s=jQuery("#showpwdtextlabel");if(s.length&gt;0){var o=jQuery("&lt;input&gt;&lt;/input&gt;").attr({id:"pwdstatus",type:"checkbox","class":"showPasswordCheck",onClick:"viewPassword();"});var q=jQuery("&lt;span&gt;&lt;/span&gt;").attr({"class":"checkmark",onClick:"viewPassword();"});s.html(r);s.append(o);s.append(q)}else{var m=jQuery("#pwdwrong");var d=jQuery("&lt;div&gt;&lt;/div&gt;").attr({id:"showpwdcontainer",});var p=jQuery("&lt;label&gt;&lt;/label&gt;").attr({id:"showpwdtextlabel","class":"showPasswordLabel",onClick:"viewPassword2();",});var o=jQuery("&lt;input&gt;&lt;/input&gt;").attr({id:"pwdstatus",type:"checkbox","class":"showPasswordCheck",onClick:"viewPassword();"});var q=jQuery("&lt;span&gt;&lt;/span&gt;").attr({"class":"checkmark",onClick:"viewPassword();"});p.html(r);d.append(p);p.append(o);p.append(q);d.insertBefore(m)}var l=m4xml.translate.getXMLValue("changePlatform");var g=m4xml.translate.getXMLValue("changePlatformTooltip");var k=jQuery("#selectPlatform");jQuery(".loginRow.forgotPwd .key").attr({src:"/mobile/icons/key-mono-white.svg",});if(k.length&lt;=0){var h=jQuery("#loginEMSS");var e=jQuery("&lt;div&gt;&lt;/div&gt;").attr({"class":"loginRow changePlatform","data-theme":"a"});var n=jQuery("&lt;img&gt;&lt;/img&gt;").attr({"class":"key m4-minMarginRight",src:"/mobile/icons/change_platform_id_white.svg","data-theme":"a"});k=jQuery("&lt;a&gt;&lt;/a&gt;").attr({id:"selectPlatform",style:"opacity: 1;",title:g,onClick:"meta4.mobile.resetCompanyID()","data-theme":"a"});e.append(n);e.append(k);h.append(e)}k.html(l);jQuery("#divCaptcha").find("div").css("margin","0");jQuery.mobile.initializePage();jQuery("#buttonenter").button("refresh");jQuery.mobile.loading("hide");if(window.m4loadjsevents){window._m4LoadM4JSEvents=true;m4loadjsevents()}}return{setMobileLogin:function(){a()},initPageShowError:function(){jQuery(document).ready(function(){jQuery.mobile.initializePage()})}}}()); |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso              |
| --- | ------------------------------ |
| 1   | /mobile/m4select_platform.html |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                     | Resolución | Ficha / candidato                                             |
| ------ | --- | ------------------------------ | ---------- | ------------------------------------------------------------- |
| BASE   | 1   | /mobile/m4select_platform.html | contextual | [mobile/m4select_platform.html](mobile--m4select_platform.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mobile/js/meta4.mobile.login.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
