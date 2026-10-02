# m4gen_adv_functions

Identificador: `library/m4gen_adv_functions.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [library/m4gen_adv_functions.js](../../../../clon_portal/portal/library/m4gen_adv_functions.js) | `3508f287ae01975fd7069a3aad29c4cb5dcb04fe0db0a1ad3b6a3a2fe0928888` |    218 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [library/m4gen_adv_functions.js](../../../../clon_portal/portal/library/m4gen_adv_functions.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 73  | " + zsname + "           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                          |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| 43  | option  | id= + zsid + ; value= + zsvalue +                                                                                  |
| 73  | input   | tabindex="+ zstabindex +"; type=radio; id="+ zsidradio + "; name=" + zsidradio + "; value="+ zsvalue + "; onclick= |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

| L   | Operación | Argumentos literales |
| --- | --------- | -------------------- |
| 29  | exec      | zslistinfo           |
| 34  | exec      | zstupla              |
| 45  | exec      | zssResto             |
| 60  | exec      | zslistinfo           |
| 65  | exec      | zstupla              |
| 76  | exec      | zssResto             |
| 95  | exec      | zslistinfo           |
| 100 | exec      | zssResto             |
| 136 | exec      | sNewContentInfo      |
| 143 | exec      | zstupla              |
| 154 | exec      | zssResto             |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función               | Argumentos                               |
| --- | --------------------- | ---------------------------------------- |
| 23  | m4createselect        | zslistinfo,zsidselect,zstabindex,zsclass |
| 55  | m4createoptions       | zslistinfo,zsidradio,zstabindex          |
| 84  | m4lockoptions         | sidform,sidobjeto,zslistinfo             |
| 106 | m4lockradio           | sidform,sidobjeto,vvalor,smodolockunlock |
| 126 | m4changeSelectContent | sIdForm,sIdSelect,sNewContentInfo        |
| 159 | m4copySelectContent   | sidform,sSelectFrom,sSelectTo            |
| 172 | m4searchoption2       | oselect,soption,smodo                    |
| 210 | m4checkDeleteCache    |                                          |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 25  | if (m4createselect.arguments.length &lt;2) throw (new m4class_numparametrosincorrecto("m4createselect", m4createselect.arguments.length,2));                                                                                                                        |
| 26  | if (typeof(zstabindex) == "undefined"){zstabindex="1";}                                                                                                                                                                                                             |
| 36  | if (zarrtuplainfo != null){                                                                                                                                                                                                                                         |
| 39  | if (zarrtuplainfo.length &gt; 3){                                                                                                                                                                                                                                   |
| 42  | else{zsvalue = zsid;}                                                                                                                                                                                                                                               |
| 57  | if (m4createoptions.arguments.length &lt;2) throw (new m4class_numparametrosincorrecto("m4createoptions", m4createoptions.arguments.length,2));                                                                                                                     |
| 58  | if (typeof(zstabindex) == "undefined"){zstabindex="1";}                                                                                                                                                                                                             |
| 66  | if (zarrtuplainfo != null){                                                                                                                                                                                                                                         |
| 69  | if (zarrtuplainfo.length &gt; 3){                                                                                                                                                                                                                                   |
| 72  | else{zsvalue = zsid;}                                                                                                                                                                                                                                               |
| 86  | if (m4lockoptions.arguments.length &lt;3) throw (new m4class_numparametrosincorrecto("m4lockoptions", m4lockoptions.arguments.length,3));                                                                                                                           |
| 87  | if (typeof(document.forms[sidform]) == "undefined" &#124;&#124; typeof(document.forms[sidform].elements[sidobjeto]) == "undefined") throw (new m4class_noexisteelemento("m4lockoptions",sidform,sidobjeto));                                                        |
| 93  | if (zslistinfo != ""){if (zslistinfo.substr((zslistinfo.length -2),2) !="&#124;&#124;"){ zslistinfo += "&#124;&#124;";}}                                                                                                                                            |
| 108 | if (m4lockradio.arguments.length &lt; 4) throw (new m4class_numparametrosincorrecto("m4lockradio", m4lockradio.arguments.length,4));                                                                                                                                |
| 109 | if (typeof(document.forms[sidform]) == "undefined" &#124;&#124; typeof(document.forms[sidform].elements[sidobjeto]) == "undefined") throw (new m4class_noexisteelemento("m4disableradio",sidform,sidobjeto));                                                       |
| 110 | if (smodolockunlock.toUpperCase()!= "LOCK" &amp;&amp; smodolockunlock.toUpperCase()!= "UNLOCK") throw (new m4class_modonodefinido("m4lockradio",smodolockunlock));                                                                                                  |
| 112 | if (oobjeto.length &gt;0){                                                                                                                                                                                                                                          |
| 115 | if (oobjeto[i].value == vvalor){                                                                                                                                                                                                                                    |
| 128 | if (m4changeSelectContent.arguments.length &lt; 3) throw (new m4class_numparametrosincorrecto("m4changeSelectContent",m4changeSelectContent.arguments.length,3));                                                                                                   |
| 145 | if (zarrtuplainfo != null){                                                                                                                                                                                                                                         |
| 148 | if (zarrtuplainfo.length &gt; 2){                                                                                                                                                                                                                                   |
| 151 | else{zsvalue = zsid;}                                                                                                                                                                                                                                               |
| 161 | if (m4copySelectContent.arguments.length &lt; 2) throw (new m4class_numparametrosincorrecto("m4copySelectContent",m4copySelectContent.arguments.length,2));                                                                                                         |
| 175 | if (m4searchoption2.arguments.length &lt; 2) throw (new m4class_numparametrosincorrecto("m4searchoption2",m4searchoption2.arguments.length,2));                                                                                                                     |
| 176 | if (typeof(oselect) != "object") throw (new m4class_noexisteobjeto("m4genoption"));                                                                                                                                                                                 |
| 177 | if (oselect.tagName != "SELECT") throw (new m4class_objetotipoincorrecto("m4searchoption2",oselect.id));                                                                                                                                                            |
| 178 | if (typeof(smodo) == "undefined"){smodo="id";}                                                                                                                                                                                                                      |
| 179 | if (smodo!="text" &amp;&amp; smodo!="value" &amp;&amp; smodo!="id" &amp;&amp; smodo!="index") throw (new m4class_modonodefinido("m4searchoption2",smodo));                                                                                                          |
| 181 | if (smodo =="index"){                                                                                                                                                                                                                                               |
| 183 | }else{                                                                                                                                                                                                                                                              |
| 186 | switch(smodo){                                                                                                                                                                                                                                                      |
| 187 | case "text" :                                                                                                                                                                                                                                                       |
| 188 | if (oselect.options[ni].text == soption){bFound= true;}                                                                                                                                                                                                             |
| 190 | case "value" :                                                                                                                                                                                                                                                      |
| 191 | if (oselect.options[ni].value == soption){bFound= true;}                                                                                                                                                                                                            |
| 193 | case "id" :                                                                                                                                                                                                                                                         |
| 194 | if (oselect.options[ni].id == soption){bFound= true;}                                                                                                                                                                                                               |
| 200 | if (bFound == true){                                                                                                                                                                                                                                                |
| 202 | }else{                                                                                                                                                                                                                                                              |
| 215 | if (sSaveProcess == '1' &#124;&#124; sExecuteProcess == '1'){                                                                                                                                                                                                       |
| 11  | expresión de cálculo/transformación: var sAlfanumRegExpString= "[ " + sAlfanumChar + "]";                                                                                                                                                                           |
| 12  | expresión de cálculo/transformación: var sAlfNumRegExpPlusBarraSemicolon = "[ " + sAlfanumChar + ",&#124;,;" + "]" ; //Contiene la barra vertical y el punto y com                                                                                                  |
| 13  | expresión de cálculo/transformación: var sAlfNumRegExpPlusSemicolon = "[ " + sAlfanumChar + ",;" + "]";                                                                                                                                                             |
| 16  | expresión de cálculo/transformación: var zolistregexp = new RegExp("(" +sAlfNumRegExpPlusSemicolon + "_)[&#124;][&#124;](" +sAlfNumRegExpPlusBarraSemicolon+"_)");                                                                                                  |
| 19  | expresión de cálculo/transformación: var zotuplaregexp = new RegExp("(" + sAlfanumRegExpString + "_)[;][;](" + sAlfanumRegExpString +"_)");                                                                                                                         |
| 21  | expresión de cálculo/transformación: var zotuplaregexp2 = new RegExp("(" + sAlfanumRegExpString + "_)[;][;](" + sAlfanumRegExpString +"_)[;][;](" +sAlfanumRegExpString +"*)");                                                                                     |
| 27  | expresión de cálculo/transformación: zsclass =(typeof(zsclass) != "undefined")?" class='" + zsclass + "' " :"";                                                                                                                                                     |
| 28  | expresión de cálculo/transformación: zsselect = "&lt;select " + zsclass + "id= '" + zsidselect + "' tabIndex = '" + zstabindex + "' name= '" + zsidselect +"' &gt; ";                                                                                               |
| 43  | expresión de cálculo/transformación: zsselect = zsselect + "&lt;option id= " + zsid + " value= " + zsvalue + "&gt;" + zsname + "&lt;/option&gt; ";                                                                                                                  |
| 47  | expresión de cálculo/transformación: zsselect = zsselect + "&lt;/select&gt;";                                                                                                                                                                                       |
| 73  | expresión de cálculo/transformación: zradioString = zradioString + "&lt;td class='campo'&gt;  &lt;input tabindex='"+ zstabindex +"' type='radio' id='"+ zsidradio + "' name='" + zsidradio + "' value='"+ zsvalue + "' onclick='' \&gt; " + zsname + "&lt;/td&gt;"; |
| 74  | expresión de cálculo/transformación: zstabindex = m4parseInt(zstabindex) +1;                                                                                                                                                                                        |

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

- Confirmar exposición y permisos de `library/m4gen_adv_functions.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
