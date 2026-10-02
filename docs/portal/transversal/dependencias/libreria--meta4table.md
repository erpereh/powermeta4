# meta4table

Identificador: `libreria/meta4table.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [libreria/meta4table.js](../../../../clon_portal/portal/libreria/meta4table.js) | `b17463f4e0b52697fa44185cadf9897df20c7ea1a932277d5b5ee6bc8abffcce` |     22 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [libreria/meta4table.js](../../../../clon_portal/portal/libreria/meta4table.js). Líneas físicas, contando desde 1.

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

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 5   | meta4Table.functions=function(){return{InsertContact:function(a){a=a.target&#124;&#124;a.srcElement;var d=[],b=null,b="";for(a.idHR=a.getAttribute("idHR");!a.idHR&amp;&amp;a;)a=a.childNodes[0];if(a.idHR){d[0]=["Action","Insert"];d[1]=["IdHR",a.idHR];meta4Ajax.ajax.sendSyncJSON("/servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp",d);b=meta4Ajax.ajax.getResponseJSON();for(b=b.sResult;"TD"!=a.nodeName&amp;&amp;a;)a=a.parentNode;a.idRow&amp;&amp;(meta4Table.functions.Highlight(a.idRow),sIdTable=$(a.idRow).idTable)}return{sResult:b,sIdTable:sIdTable}}, |
| 6   | DeleteContact:function(a){a=a.target&#124;&#124;a.srcElement;var d=[],b=null,f=b="",g="";for(a.idHR=a.getAttribute("idHR");!a.idHR&amp;&amp;a;)a=a.childNodes[0];if(a.idHR){d[0]=["Action","Delete"];d[1]=["IdHR",a.idHR];meta4Ajax.ajax.sendSyncJSON("/servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp",d);b=meta4Ajax.ajax.getResponseJSON();for(b=b.sResult;"TD"!=a.nodeName&amp;&amp;a;)a=a.parentNode;a.idRow&amp;&amp;(f=$(a.idRow).idTable,g=$(a.idRow).rowIndex)}return{sResult:b,sIdTable:f,sIndexRow:g}},SetTempCaption:function(a,d){a.objCaption.caption=   |
| 7   | a.objCaption.get("text");a.objCaption.set("text",d);a.objCaption.highlight("#b4d2fa");a.objCaption.Transition.start({color:"#b4d2fa"})},EndTempCaption:function(){this.element.set("text",this.element.caption);this.element.setStyle("color",this.element.myColor)},Highlight:function(a){$(a).highlight("#a1a1a1")},GotoPage:function(a,d){var b=0,f=0,g=b=b=0,c=null,j=null;switch(d){case "first":b=1;break;case "prev":b=a.curPage-1;break;case "next":b=a.curPage+1;break;case "last":b=a.maxPages;break;default:b=                                                    |
| 8   | d.toInt()}b&gt;a.maxPages&amp;&amp;(b=a.maxPages);a.inputGoto.value=b;a.curPage=b;a.objCount.current&amp;&amp;a.objCount.current.set("text",a.curPage);f=(b-1)_a.options.maxRows+1;b_=a.options.maxRows;b&gt;a.rows.length&amp;&amp;(b=a.rows.length);a.objCount.showing&amp;&amp;a.objCount.showing.set("text"," ("+f+"..."+b+")");b=b-f+1;g=a.objBody.rows.length;if(g&gt;b)for(var e=g-1;e&gt;=b;e--)a.objBody.deleteRow(e);g=a.objBody.rows.length;for(e=0;e&lt;g;e++)for(var c=a.objBody.rows[e],h=0;h&lt;a.objBody.Cols;h++)j=c.cells[h],j.innerHTML=a.rows[e+f-1][h], |
| 9   | j.className="",h==a.curColOrder&amp;&amp;(j.className=a.classes.col.order);for(e=g;e&lt;b;e++){c=a.objBody.insertRow(e);c.idTable=a.id;c.id=a.id+"_row_"+c.rowIndex;c.className=2*Math.floor(e/2)==e?a.classes.row.even:a.classes.row.odd;for(h=0;h&lt;a.objBody.Cols;h++)j=c.insertCell(h),j.id=a.id+"_cell_"+h+"_"+(e+f-1),j.idRow=c.id,j.innerHTML=a.rows[e+f-1][h],j.className="",h==a.curColOrder&amp;&amp;(j.className=a.classes.col.order)}a.objImgGoto.each(function(b){b.m4action=b.getAttribute("m4action");switch(b.m4action){case "first":case "prev":1==        |
| 10  | a.curPage?(b.disabled=!0,b.src=b.srcDis):(b.disabled=!1,b.src=b.srcNor);break;case "next":case "last":a.curPage==a.maxPages?(b.disabled=!0,b.src=b.srcDis):(b.disabled=!1,b.src=b.srcNor)}});window.fireEvent("resize")},Sort:function(a,d){0&lt;$(d.idTable).tBodies[0].rows.length&amp;&amp;eval(d.getAttribute("m4sortFnt").replace("me","d"))}}}();                                                                                                                                                                                                                      |
| 13  | if(c.childNodes[0].m4column){var e=$(c.childNodes[0].id);e.index=d;e.getAttribute("m4sort")&amp;&amp;(e.m4sort=e.getAttribute("m4sort"),b.colDefOrder=d);e.idTable=a;e.title="";e.className=b.classes.order.no;e.addEvent("click",function(a){a.stopPropagation();var c=a.target;b.objSortHeaders.each(function(a){a==c?c.m4sort="ASC"==c.m4sort?"DESC":"ASC":a.m4sort=""});meta4Table.functions.Sort(b,a.target)});b.objSortHeaders[b.objSortHeaders.length]=e}g+=1});this.curColOrder=0;this.objBody=$(f.tBodies[0]);this.objBody.Cols=                                    |
| 15  | "")});this.inputGoto.addEvent("keypress",function(a){"enter"==a.key&amp;&amp;0&lt;a.target.value&amp;&amp;meta4Table.functions.GotoPage(b,a.target.value)});this.inputGoto.value="";this.inputGoto.disabled=!0;this.objImgGoto=f.getElements("img");this.objImgGoto.each(function(c){c.disabled=!0;c.idTable=a;c.m4action=c.getAttribute("m4action");switch(c.m4action){case "first":c.srcNor="/iconos/lu_nor_first_24.png";c.srcHot="/iconos/lu_hot_first_24.png";c.srcDis="/iconos/lu_dis_first_24.png";c.src=c.srcNor;break;case "prev":c.srcNor=                         |
| 16  | "/iconos/lu_nor_rew_24.png";c.srcHot="/iconos/lu_hot_rew_24.png";c.srcDis="/iconos/lu_dis_rew_24.png";break;case "next":c.srcNor="/iconos/lu_nor_for_24.png";c.srcHot="/iconos/lu_hot_for_24.png";c.srcDis="/iconos/lu_dis_for_24.png";break;case "last":c.srcNor="/iconos/lu_nor_last_24.png",c.srcHot="/iconos/lu_hot_last_24.png",c.srcDis="/iconos/lu_dis_last_24.png"}c.src=c.srcDis;c.addEvents({mouseleave:function(a){a.stopPropagation();a.target.disabled&#124;&#124;(a.target.src=a.target.srcNor)},mouseenter:function(a){a.stopPropagation();                   |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 14  | go                                                    |
| 5   | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp |
| 6   | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                    |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| BASE   | 5   | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp | contextual | [sse_g0/ssco_mn_contact.jsp](../../empleado/organizacion/sse_g0--ssco_mn_contact.md) |
| BASE   | 6   | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp | contextual | [sse_g0/ssco_mn_contact.jsp](../../empleado/organizacion/sse_g0--ssco_mn_contact.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/meta4table.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
