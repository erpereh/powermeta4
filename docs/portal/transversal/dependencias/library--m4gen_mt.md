# m4gen_mt

Identificador: `library/m4gen_mt.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                               | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/library/m4gen_mt.js](../../../../clon_portal/portal/m4custom/COLL/library/m4gen_mt.js) | `88e5bb6b4754df9cf8f1e642a9f1c2bba0f0916af2ab4c9878de16cfb7083fc0` |    217 |
| BASE / compartido | [library/m4gen_mt.js](../../../../clon_portal/portal/library/m4gen_mt.js)                             | `133e88765c5d764f4373444c0920c9e6e708fef08713cb4a980e9ce513b601e1` |    214 |
| CYC / compartido  | [m4custom/CYC/library/m4gen_mt.js](../../../../clon_portal/portal/m4custom/CYC/library/m4gen_mt.js)   | `88e5bb6b4754df9cf8f1e642a9f1c2bba0f0916af2ab4c9878de16cfb7083fc0` |    217 |
| IBER / compartido | [m4custom/IBER/library/m4gen_mt.js](../../../../clon_portal/portal/m4custom/IBER/library/m4gen_mt.js) | `88e5bb6b4754df9cf8f1e642a9f1c2bba0f0916af2ab4c9878de16cfb7083fc0` |    217 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, CYC compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/library/m4gen_mt.js](../../../../clon_portal/portal/m4custom/COLL/library/m4gen_mt.js). Líneas físicas, contando desde 1.

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

| L   | Función          | Argumentos      |
| --- | ---------------- | --------------- |
| 12  | m4remonte        | spage           |
| 48  | m4filtro         | spage           |
| 59  | m4filtrocallback | spage,sfunction |
| 71  | m4ordenar        | sCampo          |
| 80  | m4eliminar       | sid             |
| 100 | m4setPKA         |                 |
| 113 | m4setm4tit       |                 |
| 130 | m4lim            |                 |
| 137 | m4com2           |                 |
| 165 | m4edit           |                 |
| 172 | m4cambiofondo    | cam             |
| 190 | m4filtro_wargs   | spage           |

| L   | Condición / acción / mensaje literal                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if (m4remonte.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4remonte",m4remonte.arguments.length,1));                      |
| 21  | if (slastarg != "M4NEWMODE"){                                                                                                                      |
| 25  | if (zch=="X"){                                                                                                                                     |
| 27  | }else{                                                                                                                                             |
| 31  | }else{                                                                                                                                             |
| 32  | if ((m4remonte.arguments.length -3) % 2 != 0){                                                                                                     |
| 34  | throw m4oexcepcion_numparampar;                                                                                                                    |
| 49  | if (m4filtro.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4filtro",m4filtro.arguments.length,1));                         |
| 60  | if (m4filtrocallback.arguments.length &lt; 2) throw (new m4class_numparametrosincorrecto("m4filtrocallback",m4filtrocallback.arguments.length,2)); |
| 61  | if (spage.charAt(0) =="/") {                                                                                                                       |
| 63  | }else{var sfil = "/servlet/CheckSecurity/JSP/"+spage;}                                                                                             |
| 72  | if (m4ordenar.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4ordenar",m4ordenar.arguments.length,1));                      |
| 73  | if (scampoant==sCampo){if (sOrd==0){sOrd=1;}else if (sOrd==1){sOrd=2;}else{sOrd=1;}                                                                |
| 74  | }else{sOrd=1;}                                                                                                                                     |
| 83  | if ((na % 2) != 0){                                                                                                                                |
| 85  | throw m4oexcepcion_numparampar;                                                                                                                    |
| 88  | if ( confirm(msg) == true){                                                                                                                        |
| 106 | if (sidelement1=="X"){                                                                                                                             |
| 115 | if (acc=="INSERTAR"){                                                                                                                              |
| 119 | }else{                                                                                                                                             |
| 124 | if (m4valor("oculto","zPkA","","get")==""){                                                                                                        |
| 140 | if (mu=="ACT"){                                                                                                                                    |
| 146 | if (vin==arrArgs[1]){                                                                                                                              |
| 148 | }else{                                                                                                                                             |
| 152 | if (vControl=="1"){                                                                                                                                |
| 154 | if ( confirm(msg) == true){                                                                                                                        |
| 157 | }else{                                                                                                                                             |
| 173 | if (m4cambiofondo.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4cambiofondo",m4cambiofondo.arguments.length,1));          |
| 175 | if (cam=="0"){cam="insert"}else{cam="form"}                                                                                                        |
| 179 | if (sidelement1=="X"){                                                                                                                             |
| 182 | if (sDisabled == false &amp;&amp; sReadOnly == false){                                                                                             |
| 191 | if (m4filtro_wargs.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4filtro_wargs",m4filtro_wargs.arguments.length,1));       |
| 200 | if (m4filtro_wargs.arguments[1]!=""){                                                                                                              |
| 202 | if ((idArgMulti!="")&amp;&amp;(idArgMulti!=null)){                                                                                                 |
| 207 | if (m4filtro_wargs.arguments[2]!=""){                                                                                                              |
| 209 | if ((idArgMulti!="")&amp;&amp;(idArgMulti!=null)){                                                                                                 |
| 210 | if (sfilMulti==""){sfilMulti = "?ztipocarga=";}                                                                                                    |
| 16  | expresión de cálculo/transformación: var slastarg = m4remonte.arguments[m4remonte.arguments.length - 1];                                           |
| 26  | expresión de cálculo/transformación: sident = sident + zc.substring(1,zc.length)+ "=" + m4valor("NombreFormulario",zc,"","get")+"{";               |
| 36  | expresión de cálculo/transformación: ni = m4remonte.arguments.length - 1;                                                                          |
| 43  | expresión de cálculo/transformación: var snave = "/servlet/CheckSecurity/JSP/"+spage + "?ztipocarga="+sident;                                      |
| 107 | expresión de cálculo/transformación: vpk=vpk + sidelement+"="+m4valor("NombreFormulario",sidelement,"","get")+"{";                                 |
| 211 | expresión de cálculo/transformación: sfilMulti = sfilMulti + "BSTD_ID_GEO_DIV*A4*"+idArgMulti+"{";                                                 |
| 212 | expresión de cálculo/transformación: sfilParam = sfilParam + "&amp;zv2="+idArgMulti+"&amp;zf2id=BSTD_ID_GEO_DIV&amp;zf4id=A4";                     |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [library/m4gen_mt.js](../../../../clon_portal/portal/library/m4gen_mt.js). Líneas físicas, contando desde 1.

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

| L   | Función          | Argumentos      |
| --- | ---------------- | --------------- |
| 9   | m4remonte        | spage           |
| 45  | m4filtro         | spage           |
| 56  | m4filtrocallback | spage,sfunction |
| 68  | m4ordenar        | sCampo          |
| 77  | m4eliminar       | sid             |
| 97  | m4setPKA         |                 |
| 110 | m4setm4tit       |                 |
| 127 | m4lim            |                 |
| 134 | m4com2           |                 |
| 162 | m4edit           |                 |
| 169 | m4cambiofondo    | cam             |
| 187 | m4filtro_wargs   | spage           |

| L   | Condición / acción / mensaje literal                                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | if (m4remonte.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4remonte",m4remonte.arguments.length,1));                      |
| 18  | if (slastarg != "M4NEWMODE"){                                                                                                                      |
| 22  | if (zch=="X"){                                                                                                                                     |
| 24  | }else{                                                                                                                                             |
| 28  | }else{                                                                                                                                             |
| 29  | if ((m4remonte.arguments.length -3) % 2 != 0){                                                                                                     |
| 31  | throw m4oexcepcion_numparampar;                                                                                                                    |
| 46  | if (m4filtro.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4filtro",m4filtro.arguments.length,1));                         |
| 57  | if (m4filtrocallback.arguments.length &lt; 2) throw (new m4class_numparametrosincorrecto("m4filtrocallback",m4filtrocallback.arguments.length,2)); |
| 58  | if (spage.charAt(0) =="/") {                                                                                                                       |
| 60  | }else{var sfil = "/servlet/CheckSecurity/JSP/"+spage;}                                                                                             |
| 69  | if (m4ordenar.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4ordenar",m4ordenar.arguments.length,1));                      |
| 70  | if (scampoant==sCampo){if (sOrd==0){sOrd=1;}else if (sOrd==1){sOrd=2;}else{sOrd=1;}                                                                |
| 71  | }else{sOrd=1;}                                                                                                                                     |
| 80  | if ((na % 2) != 0){                                                                                                                                |
| 82  | throw m4oexcepcion_numparampar;                                                                                                                    |
| 85  | if ( confirm(msg) == true){                                                                                                                        |
| 103 | if (sidelement1=="X"){                                                                                                                             |
| 112 | if (acc=="INSERTAR"){                                                                                                                              |
| 116 | }else{                                                                                                                                             |
| 121 | if (m4valor("oculto","zPkA","","get")==""){                                                                                                        |
| 137 | if (mu=="ACT"){                                                                                                                                    |
| 143 | if (vin==arrArgs[1]){                                                                                                                              |
| 145 | }else{                                                                                                                                             |
| 149 | if (vControl=="1"){                                                                                                                                |
| 151 | if ( confirm(msg) == true){                                                                                                                        |
| 154 | }else{                                                                                                                                             |
| 170 | if (m4cambiofondo.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4cambiofondo",m4cambiofondo.arguments.length,1));          |
| 172 | if (cam=="0"){cam="insert"}else{cam="form"}                                                                                                        |
| 176 | if (sidelement1=="X"){                                                                                                                             |
| 179 | if (sDisabled == false &amp;&amp; sReadOnly == false){                                                                                             |
| 188 | if (m4filtro_wargs.arguments.length &lt; 1) throw (new m4class_numparametrosincorrecto("m4filtro_wargs",m4filtro_wargs.arguments.length,1));       |
| 197 | if (m4filtro_wargs.arguments[1]!=""){                                                                                                              |
| 199 | if ((idArgMulti!="")&amp;&amp;(idArgMulti!=null)){                                                                                                 |
| 204 | if (m4filtro_wargs.arguments[2]!=""){                                                                                                              |
| 206 | if ((idArgMulti!="")&amp;&amp;(idArgMulti!=null)){                                                                                                 |
| 207 | if (sfilMulti==""){sfilMulti = "?ztipocarga=";}                                                                                                    |
| 13  | expresión de cálculo/transformación: var slastarg = m4remonte.arguments[m4remonte.arguments.length - 1];                                           |
| 23  | expresión de cálculo/transformación: sident = sident + zc.substring(1,zc.length)+ "=" + m4valor("NombreFormulario",zc,"","get")+"{";               |
| 33  | expresión de cálculo/transformación: ni = m4remonte.arguments.length - 1;                                                                          |
| 40  | expresión de cálculo/transformación: var snave = "/servlet/CheckSecurity/JSP/"+spage + "?ztipocarga="+sident;                                      |
| 104 | expresión de cálculo/transformación: vpk=vpk + sidelement+"="+m4valor("NombreFormulario",sidelement,"","get")+"{";                                 |
| 208 | expresión de cálculo/transformación: sfilMulti = sfilMulti + "BSTD_ID_GEO_DIV*A4*"+idArgMulti+"{";                                                 |
| 209 | expresión de cálculo/transformación: sfilParam = sfilParam + "&amp;zv2="+idArgMulti+"&amp;zf2id=BSTD_ID_GEO_DIV&amp;zf4id=A4";                     |

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

- Confirmar exposición y permisos de `library/m4gen_mt.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
