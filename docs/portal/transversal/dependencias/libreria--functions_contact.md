# functions_contact

Identificador: `libreria/functions_contact.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [libreria/functions_contact.js](../../../../clon_portal/portal/libreria/functions_contact.js) | `5f4b386659e1ef846fe09596fb19ecf84bd6199f918affa280a5feebd8095adb` |     11 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [libreria/functions_contact.js](../../../../clon_portal/portal/libreria/functions_contact.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 8   | sName                    |
| 8   | sEmail                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                    |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| 8   | a       | href=#                                                                                                                       |
| 8   | a       | href=/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=sID                                                     |
| 8   | img     | class=imgPhone; title=sLiteral; src=sImg                                                                                     |
| 8   | a       | href=mailto:sEmail                                                                                                           |
| 8   | img     | idhr=sID; class=m4tableImg; src=/iconos/lu_del_con_nor_24.png; title=sLiteral; onclick=m4Contact.table.deleteContact(event); |

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
| 5   | _init      |            |
| 7   | _sortMe    | me         |
| 8   | _endSortMe | objResult  |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 5   | m4Contact.table=function(){var l_sLinkEngineCont='/servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp';var l_aLabels=new Array;var l_aRow=new Array;var l_oTableCon=null;function _init(){var aParams=new Array;var objResp=null;document.title=$('sHeadTitle').get('text');aParams[0]=['Action','Load'];aParams[1]=['Column','Name'];aParams[2]=['Order','ASC'];meta4Ajax.ajax.sendSyncJSON(l_sLinkEngineCont,aParams);objResp=meta4Ajax.ajax.getResponseJSON();if(objResp){for(var item in objResp){if(typeof(objResp[item])=='string'){l_aLabels[item.substring(1)]=objResp[item];}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 8   | function _endSortMe(objResult){var saTable=new Array;var sFormatCol0="&lt;div&gt;&lt;a href='#'&gt;&lt;span title='sLiteral' idHR='sID' onmouseover='m4Contact.Functions.showPhoto(this);' onmouseout='meta4Photo.Photo.hidePhoto();' onclick='m4Contact.Functions.show(this)'&gt;sName&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;";var sFormatCol1="&lt;div&gt;&lt;a href='/servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=sID'&gt;&lt;span title='sLiteral'&gt;sName&lt;/span&gt;&lt;/a&gt;&lt;/div&gt;";var sFormatCol2="&lt;div&gt;&lt;span class='spanPhone'&gt;sPhone&lt;/span&gt;&lt;img class='imgPhone' title='sLiteral' src='sImg'/&gt;&lt;/div&gt;";var sFormatCol3="&lt;a href='mailto:sEmail'&gt;&lt;span title='sLiteral'&gt;sEmail&lt;/span&gt;&lt;/a&gt;";var sFormatCol4="&lt;span&gt;sName&lt;/span&gt;";var sFormatCol5="&lt;img idHR='sID' class='m4tableImg' src='/iconos/lu_del_con_nor_24.png' title='sLiteral' onclick='m4Contact.table.deleteContact(event);'/&gt;";objResult.saContact.each(function(item,index){var sCol0='';var sCol1='';var sCol2='';var sCol3='';var sCol4='';var sCol5='';sCol0=sFormatCol0.replace(/sID/g,item[0][0]);sCol0=sCol0.replace(/sLiteral/g,item[0][1]);sCol0=sCol0.replace(/sName/g,item[0][2]);sCol1=sFormatCol1.replace(/sID/g,item[1][0]);sCol1=sCol1.replace(/sLiteral/g,item[1][1]);sCol1=sCol1.replace(/sName/g,item[1][2]);sCol2='';if(item[2][0]){sCol2=sFormatCol2.replace(/sPhone/g,item[2][0]);sCol2=sCol2.replace(/sLiteral/g,item[2][1]);sCol2=sCol2.replace(/sImg/g,item[2][2]);} |
| 9   | sCol3='';if(item[3][0]){sCol3=sFormatCol3.replace(/sEmail/g,item[3][0]);sCol3=sCol3.replace(/sLiteral/g,item[3][1]);}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 11  | return{init:function(){_init();},sortMe:function(me){_sortMe(me);},deleteContact:function(ev){var objResult=meta4Table.functions.DeleteContact(ev);if(objResult.sResult=='0'){l_oTableCon.deleteRow(objResult.sIndexRow);l_oTableCon.setTempCaption(l_aLabels['ContactOK']);}else{l_oTableCon.setTempCaption(l_aLabels['ContactKO']);}}};}();m4Contact.Functions=function(){return{showPhoto:function(me){meta4Photo.Photo.showPhoto(me.getAttribute('idHR'));},show:function(me){meta4InfPers.Info.show(me.getAttribute('idHR'));}}}();window.addEvent('domready',function(){meta4Photo.Photo.init(document.body.getAttribute('m4path'),document.body.getAttribute('m4pathURI'),$('imgPhoto'));m4Contact.table.init();meta4InfPers.Info.init(null);});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                   |
| --- | ------------------------------------------------------------------- |
| 8   | #                                                                   |
| 8   | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=sID |
| 8   | sImg                                                                |
| 8   | mailto:sEmail                                                       |
| 8   | /iconos/lu_del_con_nor_24.png                                       |
| 5   | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                          | Resolución | Ficha / candidato                                                                        |
| ------ | --- | ------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| BASE   | 8   | /servlet/CheckSecurity/JSP/sse_g0/ssco_g0_org_chart.jsp?IdWUnit=sID | contextual | [sse_g0/ssco_g0_org_chart.jsp](../../empleado/organizacion/sse_g0--ssco_g0_org_chart.md) |
| BASE   | 5   | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp               | contextual | [sse_g0/ssco_mn_contact.jsp](../../empleado/organizacion/sse_g0--ssco_mn_contact.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/functions_contact.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
