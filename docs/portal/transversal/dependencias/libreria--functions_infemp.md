# functions_infemp

Identificador: `libreria/functions_infemp.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [libreria/functions_infemp.js](../../../../clon_portal/portal/libreria/functions_infemp.js) | `961f860088e49e30e850e419ba42c9dfb6c6375511157bad12b13ddefe42cdfb` |     18 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [libreria/functions_infemp.js](../../../../clon_portal/portal/libreria/functions_infemp.js). Líneas físicas, contando desde 1.

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

| L   | Función       | Argumentos |
| --- | ------------- | ---------- |
| 5   | _init         |            |
| 6   | _action       | sAction    |
| 8   | _endAction    |            |
| 9   | _showMoreData | ev         |
| 12  | _addMoreObj   | oObj       |
| 13  | _setHTML      | e,vvalue   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 6   | function _action(sAction){l_oAction.style.color='#000';if(sAction=="0"){sAction=l_oAction.OK;}else{sAction=l_oAction.KO;}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 9   | function _showMoreData(ev){var me=null;var oDiv=null;var i=0;me=ev.target;if(me.id=='imgPhone'){oDiv=$('divMorePhone');}else if(me.id=='imgEmail'){oDiv=$('divMoreEmail');}else if(me.id=='imgResp'){oDiv=$('divMoreResp');}                                                                                                                                                                                                                                                                                                                                                                                               |
| 10  | if(oDiv.Transition.open){me.src=l_sIconMore;}else{me.src=l_sIconLess;}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 15  | return{init:function(){_init();},addMoreObj:function(oObj){_addMoreObj(oObj);},showMoreData:function(ev){_showMoreData(ev);},action:function(sAction){_action(sAction);}};}();window.addEvent('domready',function(){var objDiv=null;var sLinkAddCont='/servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp';m4InfEmp.Data.init();meta4Photo.Photo.init(document.body.path,document.body.pathURI,$('imgPhoto'));meta4Photo.Photo.showPhoto(document.body.idHR);objDiv=$('divMorePhone');if(objDiv){m4InfEmp.Data.addMoreObj(objDiv);$('imgPhone').addEvent('click',function(e){e.stop();m4InfEmp.Data.showMoreData(e);});} |
| 16  | objDiv=$('divMoreEmail');if(objDiv){m4InfEmp.Data.addMoreObj(objDiv);$('imgEmail').addEvent('click',function(e){e.stop();m4InfEmp.Data.showMoreData(e);});}                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 17  | objDiv=$('divMoreResp');if(objDiv){m4InfEmp.Data.addMoreObj(objDiv);$('imgResp').addEvent('click',function(e){e.stop();m4InfEmp.Data.showMoreData(e);});}                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 18  | $('imgAddContact').addEvent('click',function(e){var aParams=new Array;var objResp=null;aParams[0]=['Action','Insert'];aParams[1]=['IdHR',e.target.idHR];meta4Ajax.ajax.sendSyncJSON(sLinkAddCont,aParams);objResp=meta4Ajax.ajax.getResponseJSON();if(objResp){m4InfEmp.Data.action(objResp.sResult);$('spnName').highlight('#a1a1a1');}});$('body').addEvent('resize',function(e){$('divInfoEmp').style.width='100%';$('divInfoEmp').style.height='100%'})});                                                                                                                                                             |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                     |
| --- | ----------------------------------------------------- |
| 15  | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                            | Resolución | Ficha / candidato                                                                    |
| ------ | --- | ----------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| BASE   | 15  | /servlet/CheckSecurity/JSP/sse_g0/ssco_mn_contact.jsp | contextual | [sse_g0/ssco_mn_contact.jsp](../../empleado/organizacion/sse_g0--ssco_mn_contact.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/functions_infemp.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
