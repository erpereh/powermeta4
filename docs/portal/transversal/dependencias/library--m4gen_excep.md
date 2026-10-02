# m4gen_excep

Identificador: `library/m4gen_excep.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                        | Solo en BASE                            |
| ------ | --------- | ------------------- | --------------------------------------- | --------------------------------------- |
| COLL   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| CYC    | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |
| IBER   | shared    | contenido diferente | sin diferencia en estos identificadores | sin diferencia en estos identificadores |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                     | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/library/m4gen_excep.js](../../../../clon_portal/portal/m4custom/COLL/library/m4gen_excep.js) | `d99cc17bc3beeaa453e3e6652b0f359a4c7b94bb9ff6f611147e76b0bc1374c7` |    277 |
| BASE / compartido | [library/m4gen_excep.js](../../../../clon_portal/portal/library/m4gen_excep.js)                             | `c63a67d6416acd7b36e451079c7d70847eefd8c5d5617de6ee579cb628b389ce` |    275 |
| CYC / compartido  | [m4custom/CYC/library/m4gen_excep.js](../../../../clon_portal/portal/m4custom/CYC/library/m4gen_excep.js)   | `d99cc17bc3beeaa453e3e6652b0f359a4c7b94bb9ff6f611147e76b0bc1374c7` |    277 |
| IBER / compartido | [m4custom/IBER/library/m4gen_excep.js](../../../../clon_portal/portal/m4custom/IBER/library/m4gen_excep.js) | `d99cc17bc3beeaa453e3e6652b0f359a4c7b94bb9ff6f611147e76b0bc1374c7` |    277 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/library/m4gen_excep.js](../../../../clon_portal/portal/m4custom/COLL/library/m4gen_excep.js). Líneas físicas, contando desde 1.

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

| L   | Función                         | Argumentos                           |
| --- | ------------------------------- | ------------------------------------ |
| 12  | m4class_excepcion               | sfuncion                             |
| 16  | m4met_gen                       | scadena                              |
| 19  | m4class_noexisteelemento        | sfuncion,sidform,sidinput            |
| 27  | m4class_elementoduplicado       | sfuncion,sidform,sidinput            |
| 35  | m4class_noexisteobjeto          | sfuncion                             |
| 42  | m4class_indicefuerarango        | sfuncion                             |
| 48  | m4class_tipoerroneo             | sfuncion,svar,stipo,stipocorrecto    |
| 57  | m4class_modonodefinido          | sfuncion,smodo                       |
| 64  | m4class_numparametrosincorrecto | sfuncion,nnumparam,nnumparamcorrecto |
| 72  | m4class_constanteindefinida     | sfuncion,snombreconstante            |
| 79  | m4class_atributonodefinido      | sfuncion,sidobjeto,satributo         |
| 87  | m4class_parametronodefinido     | sfuncion,sparametro                  |
| 95  | m4class_objetotipoincorrecto    | sfuncion,sidobjeto                   |
| 104 | m4err_gen                       | excepcion                            |
| 161 | m4getmessage                    | sidmessage,aargmen                   |
| 205 | m4showmessage                   | stipoval,aargmen                     |
| 217 | m4setlog                        | stipoval,aargmen                     |
| 240 | m4err_val                       | excepcion                            |

| L   | Condición / acción / mensaje literal                                                    |
| --- | --------------------------------------------------------------------------------------- |
| 17  | alert(scadena);                                                                         |
| 106 | if (!(excepcion instanceof Error)){                                                     |
| 109 | switch(excepcion.m4prop_sidexcepcion)                                                   |
| 111 | case "noexisteelemento" :                                                               |
| 114 | case "elementoduplicado":                                                               |
| 117 | case "noexisteobjeto" :                                                                 |
| 120 | case "indicefuerarango" :                                                               |
| 123 | case "tipoerroneo" :                                                                    |
| 126 | case "modonodefinido" :                                                                 |
| 127 | if (excepcion.m4prop_smodo!=null){                                                      |
| 129 | }else{                                                                                  |
| 133 | case "numparametrosincorrecto" :                                                        |
| 136 | case "constanteindefinida" :                                                            |
| 139 | case "atributonodefinido" :                                                             |
| 142 | case "parametronodefinido" :                                                            |
| 145 | case "numparampar" :                                                                    |
| 148 | case "objetotipoincorrecto":                                                            |
| 154 | else{                                                                                   |
| 156 | if (document.all){                                                                      |
| 158 | else{m4setlog("_system_excepcion2",nexceptionnumber,excepcion.message);}                |
| 165 | if (m4getmessage.arguments.length == 1){                                                |
| 167 | } else{                                                                                 |
| 174 | if ((typeof(aargmen) != "object") &amp;&amp; (typeof(aargmen) != "undefined")){         |
| 186 | if (atrozos[ni].match(ore2) == "%"){                                                    |
| 189 | }else{                                                                                  |
| 198 | if (nerror == 5009) throw (new m4class_constanteindefinida("m4getmessage",sidmessage)); |
| 206 | if ((typeof(aargmen) != "object") &amp;&amp; (typeof(aargmen) != "undefined")){         |
| 214 | alert( m4getmessage(stipoval,aargmen));                                                 |
| 221 | if ((typeof(aargmen) != "object") &amp;&amp; (typeof(aargmen) != "undefined")){         |
| 230 | if (m4setlog.arguments.length == 1){                                                    |
| 231 | alert(sGenErrMsg + smessage);                                                           |
| 232 | }else{                                                                                  |
| 233 | if (balert == true){                                                                    |
| 234 | alert(sGenErrMsg + smessage);                                                           |
| 243 | if (excepcion.m4prop_id != "val_error_com"){                                            |
| 250 | if (aargmen.length &gt; 0){                                                             |
| 253 | if (sFirstArg.substr(0,sMSG_ERROR_ID.length) ==sMSG_ERROR_ID){                          |
| 261 | if (typeof(smensajeactual) == "undefined") bmsgthrow = false;                           |
| 267 | if (bmsgthrow != false) alert(sGenErrMsg + smensaje);                                   |
| 268 | }else{                                                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [library/m4gen_excep.js](../../../../clon_portal/portal/library/m4gen_excep.js). Líneas físicas, contando desde 1.

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

| L   | Función                         | Argumentos                           |
| --- | ------------------------------- | ------------------------------------ |
| 10  | m4class_excepcion               | sfuncion                             |
| 14  | m4met_gen                       | scadena                              |
| 17  | m4class_noexisteelemento        | sfuncion,sidform,sidinput            |
| 25  | m4class_elementoduplicado       | sfuncion,sidform,sidinput            |
| 33  | m4class_noexisteobjeto          | sfuncion                             |
| 40  | m4class_indicefuerarango        | sfuncion                             |
| 46  | m4class_tipoerroneo             | sfuncion,svar,stipo,stipocorrecto    |
| 55  | m4class_modonodefinido          | sfuncion,smodo                       |
| 62  | m4class_numparametrosincorrecto | sfuncion,nnumparam,nnumparamcorrecto |
| 70  | m4class_constanteindefinida     | sfuncion,snombreconstante            |
| 77  | m4class_atributonodefinido      | sfuncion,sidobjeto,satributo         |
| 85  | m4class_parametronodefinido     | sfuncion,sparametro                  |
| 93  | m4class_objetotipoincorrecto    | sfuncion,sidobjeto                   |
| 102 | m4err_gen                       | excepcion                            |
| 159 | m4getmessage                    | sidmessage,aargmen                   |
| 203 | m4showmessage                   | stipoval,aargmen                     |
| 215 | m4setlog                        | stipoval,aargmen                     |
| 238 | m4err_val                       | excepcion                            |

| L   | Condición / acción / mensaje literal                                                    |
| --- | --------------------------------------------------------------------------------------- |
| 15  | alert(scadena);                                                                         |
| 104 | if (!(excepcion instanceof Error)){                                                     |
| 107 | switch(excepcion.m4prop_sidexcepcion)                                                   |
| 109 | case "noexisteelemento" :                                                               |
| 112 | case "elementoduplicado":                                                               |
| 115 | case "noexisteobjeto" :                                                                 |
| 118 | case "indicefuerarango" :                                                               |
| 121 | case "tipoerroneo" :                                                                    |
| 124 | case "modonodefinido" :                                                                 |
| 125 | if (excepcion.m4prop_smodo!=null){                                                      |
| 127 | }else{                                                                                  |
| 131 | case "numparametrosincorrecto" :                                                        |
| 134 | case "constanteindefinida" :                                                            |
| 137 | case "atributonodefinido" :                                                             |
| 140 | case "parametronodefinido" :                                                            |
| 143 | case "numparampar" :                                                                    |
| 146 | case "objetotipoincorrecto":                                                            |
| 152 | else{                                                                                   |
| 154 | if (document.all){                                                                      |
| 156 | else{m4setlog("_system_excepcion2",nexceptionnumber,excepcion.message);}                |
| 163 | if (m4getmessage.arguments.length == 1){                                                |
| 165 | } else{                                                                                 |
| 172 | if ((typeof(aargmen) != "object") &amp;&amp; (typeof(aargmen) != "undefined")){         |
| 184 | if (atrozos[ni].match(ore2) == "%"){                                                    |
| 187 | }else{                                                                                  |
| 196 | if (nerror == 5009) throw (new m4class_constanteindefinida("m4getmessage",sidmessage)); |
| 204 | if ((typeof(aargmen) != "object") &amp;&amp; (typeof(aargmen) != "undefined")){         |
| 212 | alert( m4getmessage(stipoval,aargmen));                                                 |
| 219 | if ((typeof(aargmen) != "object") &amp;&amp; (typeof(aargmen) != "undefined")){         |
| 228 | if (m4setlog.arguments.length == 1){                                                    |
| 229 | alert(sGenErrMsg + smessage);                                                           |
| 230 | }else{                                                                                  |
| 231 | if (balert == true){                                                                    |
| 232 | alert(sGenErrMsg + smessage);                                                           |
| 241 | if (excepcion.m4prop_id != "val_error_com"){                                            |
| 248 | if (aargmen.length &gt; 0){                                                             |
| 251 | if (sFirstArg.substr(0,sMSG_ERROR_ID.length) ==sMSG_ERROR_ID){                          |
| 259 | if (typeof(smensajeactual) == "undefined") bmsgthrow = false;                           |
| 265 | if (bmsgthrow != false) alert(sGenErrMsg + smensaje);                                   |
| 266 | }else{                                                                                  |

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

- Confirmar exposición y permisos de `library/m4gen_excep.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
