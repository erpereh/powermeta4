# functions_portal

Identificador: `libreria/functions_portal.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash     | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | -------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | idéntica | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/functions_portal.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_portal.js) | `11be7c9f0bfde6316478cba9ccd640abc99c24295aa7ef7a2f296a9c2ba6e8e0` |     37 |
| BASE / compartido | [libreria/functions_portal.js](../../../../clon_portal/portal/libreria/functions_portal.js)                             | `11be7c9f0bfde6316478cba9ccd640abc99c24295aa7ef7a2f296a9c2ba6e8e0` |     37 |
| IBER / compartido | [m4custom/IBER/libreria/functions_portal.js](../../../../clon_portal/portal/m4custom/IBER/libreria/functions_portal.js) | `11be7c9f0bfde6316478cba9ccd640abc99c24295aa7ef7a2f296a9c2ba6e8e0` |     37 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/functions_portal.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_portal.js). Líneas físicas, contando desde 1.

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

| L   | Función | Argumentos  |
| --- | ------- | ----------- |
| 4   | d       |             |
| 4   | b       | b,p,w,f,g,e |
| 8   | d       | c           |
| 8   | b       | c           |
| 21  | d       | b           |
| 21  | b       |             |
| 33  | d       | d,c,a,f     |
| 37  | isIE6   |             |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | a:window.location.href=a},getEss:function(){return h},offsetChanged:function(){var a=!1;try{if(j!==document.body.offsetHeigth&#124;&#124;e!==document.body.offsetWidth)a=!0,d()}catch(c){e=j=0}return a},setMinWidth:function(c){var b=0,b=a.scrollWidth+a.offsetWidth-a.clientWidth;b&lt;c&amp;&amp;a.setStyle("width",c)},setMaxWidth:function(){a.setStyle("width","100%")},showLogin:function(){m&amp;&amp;(window.location.pathname=m)},toggleMenu:function(a){var b=0!==c.clientHeight,m=new Fx.Tween(c,{duration:750}),d=new Fx.Tween(oMenu,                                                           |
| 8   | Meta4.menu=function(){function d(c){var a;if(c&amp;&amp;""!==c){a=c.split(/;/g).filter(function(a){return a});for(c=0;c&lt;a.length;c++)0===f[c].elements[+a[c]].offsetHeight&amp;&amp;f[c].display(+a[c])}}function b(c){c.destroy()}var h=!0,f=[],j,e,k;return{init:function(){var c=window.ie6?"100%":"";counter=1;togglers=$$("div.scoMenuLeft div.divHeader");contents=$$("div.scoMenuLeft div.divContent");Browser.ie7&amp;&amp;contents.addClass("divContentNone");h=Meta4.portal.getEss();k=2&lt;=togglers.length?String(togglers.length-2)+                                                          |
| 9   | ";":"";for(togglers.each(function(a){a.addClass("m4activeColor");a.activeColor=a.getStyle("color");a.removeClass("m4activeColor");a.origColor=a.getStyle("color");a.fx=new Fx.Tween(a,"color")});0&lt;togglers.length;){var a=new Accordion(togglers,contents,{opacity:!1,alwaysHide:1!==counter,start:"all-opened",onComplete:function(){var a=$(this.elements[this.previous]);a&amp;&amp;0&lt;a.offsetHeight&amp;&amp;a.setStyle("height",c);if(Browser.ie7){var b=this.to;this.elements.each(function(a,c){a.hasClass("divContent")&amp;&amp;0==                                                           |
| 11  | 1));contents=$$("div.scoMenuLeft div.divContentSubtitle_"+(counter-1))}},interceptEvent:function(c){var a,b;if("click"===c.type&amp;&amp;"A"===c.target.tagName&amp;&amp;"mailto:"!==c.target.protocol&amp;&amp;"javascript:"!==c.target.protocol&amp;&amp;(a="",Browser.ie&amp;&amp;!Browser.ie10&amp;&amp;(a="/"),a=a+c.target.pathname+c.target.search,b=Meta4.menu.validateUrl(a))){switch(b.result){case "1":Meta4.frameBody.setLoadMode(a);break;case "-1":Meta4.portal.changePortal();break;case "":Meta4.frameBody.setLoadMode(a)}c.preventDefault()}},activateAccordion:function(c){d(c)},           |
| 12  | validateUrl:function(c){e!==c&amp;&amp;(e=c,Meta4.ajax.sendSyncJSON("/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp",[["sUrl",c],["bEss",h]]),j=Meta4.ajax.getResponseJSON());return j},compareToLastValidatedUrl:function(c){if(c!==e&amp;&amp;void 0!==e&amp;&amp;(c=this.validateUrl(c)))switch(c.result){case "1":this.activateAccordion(c.path);break;case "-1":Meta4.portal.changePortal()}},setUrlEss:function(c){Meta4.ajax.sendSync("/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp",[["sNextUrl",c],["bEss",                                                                |
| 13  | !0]])},setUrlMss:function(c){Meta4.ajax.sendSync("/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp",[["sNextUrl",c],["bEss",!1]])},navigate:function(c){Meta4.frameBody.setEventTakenCareOf();Meta4.frameBody.setLoadMode(c)},getNavigate:function(){return!1},addFavourite:function(c,a,b){var h=$("favouriteLiTemplate"),p=$("menuLeftFavourites"),f,e,g;if(h){try{f=h.clone(),f.id="favourite"+String(c),e=f.childNodes[0].childNodes[0],e.childNodes[0].title=a,e.childNodes[0].href=b,e.childNodes[0].childNodes[0].data=                                                                      |
| 14  | a,p.appendChild(f),f.getElement(".divContentImg").addEvent("click",function(){Meta4.menu.deleteFavourite(c)}),g=new Fx.Morph(f,{duration:1E3,link:"chain"}),g.set({opacity:0}),g.start.pass({opacity:1},g).delay(500)}catch(j){}d(k)}},modifyFavourite:function(c,a){var b=$("favourite"+String(c)),h;if(b)try{b.childNodes[0].childNodes[0].childNodes[0].title=a,b.childNodes[0].childNodes[0].childNodes[0].childNodes[0].data=a,d(k),h=new Fx.Tween(b,{property:"opacity",duration:500,link:"chain"}),h.start.pass(0.2,                                                                                   |
| 15  | h).delay(500),h.start.pass(1,h).delay(600)}catch(p){}},deleteFavourite:function(c){var a=$("favourite"+String(c)),d=null;if(a&amp;&amp;(Meta4.ajax.sendSyncJSON("/servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp",[["sOperation","Delete"],["sOrdinal",String(c)]]),(d=Meta4.ajax.getResponseJSON())&amp;&amp;0===d.result))(new Fx.Morph(a,{duration:400})).start({opacity:0}),b.pass(a).delay(400)}}}();                                                                                                                                                                                    |
| 16  | Meta4.menu.search=function(){var d=!1,b=!1,h,f,j=void 0,e=void 0,k=void 0,c,a;return{init:function(c,s,p,w,v,g,q){j=c;e=s;k=p;a=w;h=v;f=g;e.value=q&#124;&#124;w;d=q?!0:!1;j&amp;&amp;(j.addEvent("submit",function(a){a.preventDefault()}),j.set("send",{onComplete:function(a){b?b=!1:(k.removeClass("scoSpinner").set("html",a),k.setStyle("height",""))}}))},clear:function(){e.value===a?(e.value="",k.empty().set("html",h),k.setStyle("height","")):(e.select(),this.search());e.removeClass("inactive")},restore:function(){if(d&amp;&amp;                                                            |
| 17  | (d=!1,e.value===a&#124;&#124;2&gt;e.value.length))b=!0,j.send();if(""===e.value&#124;&#124;e.value===a)e.value=a,e.addClass("inactive"),k.empty().set("html",f),k.setStyle("height","")},search:function(){var a=e.value.replace(/^\s\s*/,"").replace(/\s\s*$/,"");2&lt;=a.length?a!==c&amp;&amp;(c=a,k.empty().addClass("scoSpinner"),d=!0,j.send()):(d=!0,k.empty().removeClass("scoSpinner").set("html",h),k.setStyle("height",""),c=a)},getCriterion:function(){return e.value!==a?e.value:null}}}();                                                                                                     |
| 23  | try{if(a.contentWindow.bNullHeight=0==a.contentWindow.document.body.scrollHeight+a.contentWindow.document.body.offsetHeight-a.contentWindow.document.body.clientHeight,a.contentWindow.bLoaded=!0,"/servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp"===n&#124;&#124;"/servlet/CheckSecurity/JSP/mss_generico/smco_portal.jsp"===n)this.setLoadMode(a.contentWindow.m4frameContent);else if("/sse_generico/generico_login.jsp"===n)Meta4.portal.showLogin();else if("/servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp"!==                                                               |
| 24  | n){window.m4frameContent=n;if(r=Meta4.menu.validateUrl(n))switch(r.result){case "1":Meta4.menu.activateAccordion(r.path);break;case "-1":Meta4.portal.changePortal()}try{f=!1;m=a.contentWindow.location.pathname;if(j="/servlet/CheckSecurity/JSP/sse_generico/plco_external_system.jsp"===m)s=void 0,a.contentWindow.location.search&amp;&amp;(q=a.contentWindow.location.search.split("&amp;").filter(function(a){var b=!1;-1!==a.indexOf("M4_MIN_HEIGHT")&amp;&amp;(b=!0);return b}),0&lt;q.length&amp;&amp;(q=q[0].split("=").filter(function(a){return a==                                              |
| 25  | +a})),0&lt;q.length&amp;&amp;(s=q[0]+"px"));if(a.contentWindow.document){a.contentWindow.document.addEvent("click",function(a){var b,c;if("click"===a.type&amp;&amp;a.target&amp;&amp;(b="IMG"===a.target.tagName?a.target.parentNode:a.target)&amp;&amp;"A"===b.tagName)if("mailto:"===b.protocol)f=!0;else if("javascript:"===b.protocol)f=!0;else if(void 0!==b.pathname&amp;&amp;(f=!0,-1!==b.pathname.toLowerCase().indexOf(".jsp")&amp;&amp;(c="",Browser.ie&amp;&amp;(c="/"),c=c+b.pathname+b.search,d(),r=Meta4.menu.validateUrl(c))))switch(r.result){case "1":Meta4.menu.activateAccordion(r.path); |
| 26  | break;case "-1":a.preventDefault(),Meta4.portal.changePortal()}});a.contentWindow.addEvent("unload",function(){var b,c;if(!f&amp;&amp;(b=a.contentWindow.location,"mailto:"!==b.protocol&amp;&amp;"javascript:"!==b.protocol))switch(b.pathname){case "/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp":break;case m:d();break;default:if(-1!==b.pathname.toLowerCase().indexOf(".jsp")&amp;&amp;(c="",Browser.ie&amp;&amp;(c="/"),c=c+b.pathname+b.search,d(),r=Meta4.menu.validateUrl(c)))switch(r.result){case "1":Meta4.menu.activateAccordion(r.path);                                   |
| 27  | break;case "-1":Meta4.portal.changePortal()}}});a.contentWindow.addEvent("resize",function(){Meta4.frameBody.resize()});k=a.contentWindow.document.forms;if(k.length)for(g=0;g&lt;k.length;g++)void 0===k[g].submit.tagname&amp;&amp;(k[g].nativeSubmit=k[g].submit,k[g].submit=function(){var b=!0,c,e;this.target&#124;&#124;(e=this.action,c=e.toLowerCase().substring(0,e.toLowerCase().indexOf(".jsp"))+".jsp",d(),a.contentWindow.location.pathname.toLowerCase()!==c&amp;&amp;(c=new Element(this),c.set("send",{url:"/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp",                     |
| 28  | async:!1,onComplete:function(a){if(a=JSON.decode(a,!0))switch(a.result){case "1":Meta4.menu.activateAccordion(a.path);break;case "-1":Meta4.portal.changePortal(),b=!1}}}),c.send("/servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp?sgcoPortalEss="+h+"&amp;sgcoPortalDestinationUrl="+encodeURIComponent(e))));f=!0;b&amp;&amp;this.nativeSubmit()});if(a.contentWindow.document.body){e=a.contentWindow.document.body.childNodes;v=!0;for(g=0;g&lt;e.length&amp;&amp;v;g++)"SCRIPT"!==e[g].tagName&amp;&amp;"!"!==e[g].tagName&amp;&amp;("DIV"!==                                                 |
| 29  | e[g].tagName?v=!1:!(e[g].m4top&amp;&amp;"nochange"===e[g].m4top.toLowerCase())&amp;&amp;("static"!==e[g].getStyle("position")&amp;&amp;0!==e[g].getStyle("top").toInt())&amp;&amp;(e[g].setStyle("top",0),"absolute"===e[g].getStyle("position")&amp;&amp;e[g].setStyle("position","relative")))}}}catch(x){}b()}else c.addClass("scoSpinnerRev"),f=!0}catch(u){Meta4.frameBody.resize(),b()}},resize:function(){var b=Meta4.portal.offsetChanged(),c=!1,d=!1,f=0,h=0,m=0,n=0,x=0,u=0,l;try{if(l=a.contentWindow.document.body,a.contentWindow.bNullHeight){if(b&#124;&#124;                                  |
| 30  | a.contentWindow.bLoaded){for(n=0;n&lt;l.childNodes.length-1;n++)"none"!=l.childNodes(n).getStyle("display")&amp;&amp;(h=l.childNodes(n).offsetTop+l.childNodes(n).scrollHeight+l.childNodes(n).offsetHeight-l.childNodes(n).clientHeight,x&lt;h&amp;&amp;(x=h),m=l.childNodes(n).offsetLeft+l.childNodes(n).scrollWidth+l.childNodes(n).offsetWidth-l.childNodes(n).clientWidth,u&lt;m&amp;&amp;(u=m));u+=a.offsetLeft-+l.leftMargin;a.setStyle("height",x);a.setStyle("width","100%");Meta4.portal.setMinWidth(u);a.contentWindow.bLoaded=!1}}else{var y=                                                    |
| 31  | a.contentDocument?a.contentDocument:a.contentWindow.document,t=Math.min(y.documentElement.scrollHeight,y.body.scrollHeight);e!==t&amp;&amp;(e=t,c=!0);k!==l.scrollWidth&amp;&amp;(k=l.scrollWidth,d=!0);if(b&#124;&#124;d)Meta4.portal.setMaxWidth(),f=l.scrollWidth-l.clientWidth,0&lt;f&amp;&amp;(m=a.offsetLeft,m+=l.scrollWidth+l.offsetWidth-l.clientWidth,m+=l.offsetLeft,Meta4.portal.setMinWidth(m-1));if(b&#124;&#124;c&#124;&#124;d)l.setStyle("marginBottom",0),l.setStyle("marginLeft",0),l.setStyle("marginRight",0),t=parseInt(l.getStyle("minHeight").toInt())&gt;                             |
| 32  | t?parseInt(l.getStyle("minHeight").toInt()):t,a.setStyle("height",t+15)}}catch(z){j&amp;&amp;s?a.setStyle("height",s):a.setStyle("height","600px")}},refresh:function(){if(a.contentWindow){this.setLoadMode();try{a.contentWindow.location.reload(!0)}catch(b){}}},setEventTakenCareOf:function(){try{a.fireEvent("cancelAjax")}catch(b){}f=!0}}}();                                                                                                                                                                                                                                                         |
| 33  | Meta4.ajax=function(){function d(d,c,a,f){var j,p="";if(f&amp;&amp;0!==f.length)for(j=0;j&lt;f.length;j++)""!==p&amp;&amp;(p+="&amp;"),p+=f[j][0]+"="+encodeURIComponent(f[j][1]);d?(h&#124;&#124;(h=new Request.JSON({link:"cancel",async:c,onSuccess:getResponseJSON})),h.send({url:a,data:p})):(b&#124;&#124;(b=new Request({link:"cancel",async:c,onSuccess:e})),b.send({url:a,data:p}))}var b,h,f,j,e=function(b){j=b};getResponseJSON=function(b){f=b};return{sendSync:function(b,c){d(!1,!1,b,c)},sendAsync:function(b,c){d(!1,!0,b,c)},getResponse:function(){return j},                              |
| 37  | function isIE6(){if(Meta4.IE6)for(var d=$$("img"),b=0,b=0;b&lt;d.length;b++)d[b].src&amp;&amp;"png"==d[b].src.substring(d[b].src.length-3)&amp;&amp;(d[b].src=d[b].src.substring(0,d[b].src.length-3)+"gif"),d[b].m4SrcHot&amp;&amp;"png"==d[b].m4SrcHot.substring(d[b].m4SrcHot.length-3)&amp;&amp;(d[b].m4SrcHot=d[b].m4SrcHot.substring(0,d[b].m4SrcHot.length-3)+"gif"),d[b].m4SrcNormal&amp;&amp;"png"==d[b].m4SrcNormal.substring(d[b].m4SrcNormal.length-3)&amp;&amp;(d[b].m4SrcNormal=d[b].m4SrcNormal.substring(0,d[b].m4SrcNormal.length-3)+"gif")};                                                |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                         |
| --- | ------------------------------------------------------------------------- |
| 20  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp                    |
| 4   | ../mss_generico/smco_portal.jsp                                           |
| 4   | ../sse_generico/ssco_portal.jsp                                           |
| 6   | ../sse_generico/sgco_put_object.jsp                                       |
| 12  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                |
| 13  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                |
| 15  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           |
| 18  | /servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp           |
| 18  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                  |
| 19  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           |
| 23  | /servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp                   |
| 23  | /servlet/CheckSecurity/JSP/mss_generico/smco_portal.jsp                   |
| 23  | /sse_generico/generico_login.jsp                                          |
| 23  | /servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp          |
| 24  | /servlet/CheckSecurity/JSP/sse_generico/plco_external_system.jsp          |
| 25  | .jsp                                                                      |
| 26  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp           |
| 26  | .jsp                                                                      |
| 27  | .jsp                                                                      |
| 27  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                |
| 28  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp?sgcoPortalEss= |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                | Resolución | Ficha / candidato                                                                                                                                                                          |
| ------ | --- | ------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 20  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp                    | contextual | [sse_generico/sse_logout.jsp](../navegacion/sse_generico--sse_logout.md); [sse_generico/sse_logout.jsp](../navegacion/sse_generico--sse_logout.md)                                         |
| COLL   | 4   | ../mss_generico/smco_portal.jsp                                           | física     | [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md)                                                                                                      |
| COLL   | 4   | ../sse_generico/ssco_portal.jsp                                           | física     | [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md)                                                                                                                 |
| COLL   | 6   | ../sse_generico/sgco_put_object.jsp                                       | física     | [sse_generico/sgco_put_object.jsp](../navegacion/sse_generico--sgco_put_object.md)                                                                                                         |
| COLL   | 12  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |
| COLL   | 13  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |
| COLL   | 15  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           | contextual | [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md); [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md)     |
| COLL   | 18  | /servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp           | ausente    | P06                                                                                                                                                                                        |
| COLL   | 18  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                  | contextual | [sse_g0/ssco_g0_who_is_who.jsp](../../empleado/organizacion/sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](../../empleado/organizacion/sse_g0--ssco_g0_who_is_who.md)     |
| COLL   | 19  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           | contextual | [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md); [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md)     |
| COLL   | 23  | /servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp                   | contextual | [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md); [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md)                                     |
| COLL   | 23  | /servlet/CheckSecurity/JSP/mss_generico/smco_portal.jsp                   | contextual | [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md); [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md)               |
| COLL   | 23  | /sse_generico/generico_login.jsp                                          | contextual | [sse_generico/generico_login.jsp](../navegacion/sse_generico--generico_login.md); [sse_generico/generico_login.jsp](../navegacion/sse_generico--generico_login.md)                         |
| COLL   | 23  | /servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp          | contextual | [sse_generico/sgco_restore_request.jsp](../navegacion/sse_generico--sgco_restore_request.md); [sse_generico/sgco_restore_request.jsp](../navegacion/sse_generico--sgco_restore_request.md) |
| COLL   | 24  | /servlet/CheckSecurity/JSP/sse_generico/plco_external_system.jsp          | contextual | [sse_generico/plco_external_system.jsp](../navegacion/sse_generico--plco_external_system.md); [sse_generico/plco_external_system.jsp](../navegacion/sse_generico--plco_external_system.md) |
| COLL   | 26  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp           | ausente    | P06                                                                                                                                                                                        |
| COLL   | 27  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |
| COLL   | 28  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp?sgcoPortalEss= | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |
| BASE   | 20  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp                    | contextual | [sse_generico/sse_logout.jsp](../navegacion/sse_generico--sse_logout.md)                                                                                                                   |
| BASE   | 4   | ../mss_generico/smco_portal.jsp                                           | física     | [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md)                                                                                                      |
| BASE   | 4   | ../sse_generico/ssco_portal.jsp                                           | física     | [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md)                                                                                                                 |
| BASE   | 6   | ../sse_generico/sgco_put_object.jsp                                       | física     | [sse_generico/sgco_put_object.jsp](../navegacion/sse_generico--sgco_put_object.md)                                                                                                         |
| BASE   | 12  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                                                                                                           |
| BASE   | 13  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                                                                                                           |
| BASE   | 15  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           | contextual | [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md)                                                                                                 |
| BASE   | 18  | /servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp           | ausente    | P06                                                                                                                                                                                        |
| BASE   | 18  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                  | contextual | [sse_g0/ssco_g0_who_is_who.jsp](../../empleado/organizacion/sse_g0--ssco_g0_who_is_who.md)                                                                                                 |
| BASE   | 19  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           | contextual | [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md)                                                                                                 |
| BASE   | 23  | /servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp                   | contextual | [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md)                                                                                                                 |
| BASE   | 23  | /servlet/CheckSecurity/JSP/mss_generico/smco_portal.jsp                   | contextual | [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md)                                                                                                      |
| BASE   | 23  | /sse_generico/generico_login.jsp                                          | contextual | [sse_generico/generico_login.jsp](../navegacion/sse_generico--generico_login.md)                                                                                                           |
| BASE   | 23  | /servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp          | contextual | [sse_generico/sgco_restore_request.jsp](../navegacion/sse_generico--sgco_restore_request.md)                                                                                               |
| BASE   | 24  | /servlet/CheckSecurity/JSP/sse_generico/plco_external_system.jsp          | contextual | [sse_generico/plco_external_system.jsp](../navegacion/sse_generico--plco_external_system.md)                                                                                               |
| BASE   | 26  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp           | ausente    | P06                                                                                                                                                                                        |
| BASE   | 27  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                                                                                                           |
| BASE   | 28  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp?sgcoPortalEss= | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                                                                                                           |
| IBER   | 20  | /servlet/CheckSecurity/JSP/sse_generico/sse_logout.jsp                    | contextual | [sse_generico/sse_logout.jsp](../navegacion/sse_generico--sse_logout.md); [sse_generico/sse_logout.jsp](../navegacion/sse_generico--sse_logout.md)                                         |
| IBER   | 4   | ../mss_generico/smco_portal.jsp                                           | física     | [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md)                                                                                                      |
| IBER   | 4   | ../sse_generico/ssco_portal.jsp                                           | física     | [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md)                                                                                                                 |
| IBER   | 6   | ../sse_generico/sgco_put_object.jsp                                       | física     | [sse_generico/sgco_put_object.jsp](../navegacion/sse_generico--sgco_put_object.md)                                                                                                         |
| IBER   | 12  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |
| IBER   | 13  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |
| IBER   | 15  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           | contextual | [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md); [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md)     |
| IBER   | 18  | /servlet/CheckSecurity/JSP/shco_rp/shco_rp_list_pub_reports.jsp           | ausente    | P06                                                                                                                                                                                        |
| IBER   | 18  | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_who_is_who.jsp                  | contextual | [sse_g0/ssco_g0_who_is_who.jsp](../../empleado/organizacion/sse_g0--ssco_g0_who_is_who.md); [sse_g0/ssco_g0_who_is_who.jsp](../../empleado/organizacion/sse_g0--ssco_g0_who_is_who.md)     |
| IBER   | 19  | /servlet/CheckSecurity/JSP/sse_generico/sgco_favourite_back.jsp           | contextual | [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md); [sse_generico/sgco_favourite_back.jsp](../navegacion/sse_generico--sgco_favourite_back.md)     |
| IBER   | 23  | /servlet/CheckSecurity/JSP/sse_generico/ssco_portal.jsp                   | contextual | [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md); [sse_generico/ssco_portal.jsp](../navegacion/sse_generico--ssco_portal.md)                                     |
| IBER   | 23  | /servlet/CheckSecurity/JSP/mss_generico/smco_portal.jsp                   | contextual | [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md); [mss_generico/smco_portal.jsp](../../responsable/tareas/mss_generico--smco_portal.md)               |
| IBER   | 23  | /sse_generico/generico_login.jsp                                          | contextual | [sse_generico/generico_login.jsp](../navegacion/sse_generico--generico_login.md); [sse_generico/generico_login.jsp](../navegacion/sse_generico--generico_login.md)                         |
| IBER   | 23  | /servlet/CheckSecurity/JSP/sse_generico/sgco_restore_request.jsp          | contextual | [sse_generico/sgco_restore_request.jsp](../navegacion/sse_generico--sgco_restore_request.md); [sse_generico/sgco_restore_request.jsp](../navegacion/sse_generico--sgco_restore_request.md) |
| IBER   | 24  | /servlet/CheckSecurity/JSP/sse_generico/plco_external_system.jsp          | contextual | [sse_generico/plco_external_system.jsp](../navegacion/sse_generico--plco_external_system.md); [sse_generico/plco_external_system.jsp](../navegacion/sse_generico--plco_external_system.md) |
| IBER   | 26  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp           | ausente    | P06                                                                                                                                                                                        |
| IBER   | 27  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp                | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |
| IBER   | 28  | /servlet/CheckSecurity/JSP/sse_generico/sgco_menu_back.jsp?sgcoPortalEss= | contextual | [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md); [sse_generico/sgco_menu_back.jsp](../navegacion/sse_generico--sgco_menu_back.md)                         |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/functions_portal.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
