# menu_mss_esp

Identificador: `libreria/menu_mss_esp.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/menu_mss_esp.js](../../../../clon_portal/portal/m4custom/COLL/libreria/menu_mss_esp.js) | `e0c29745a2cc945df184b8c71f8739bdeedde8a595f0b01594f48db0581fec34` |    321 |
| BASE / compartido | [libreria/menu_mss_esp.js](../../../../clon_portal/portal/libreria/menu_mss_esp.js)                             | `e0c29745a2cc945df184b8c71f8739bdeedde8a595f0b01594f48db0581fec34` |    321 |
| IBER / compartido | [m4custom/IBER/libreria/menu_mss_esp.js](../../../../clon_portal/portal/m4custom/IBER/libreria/menu_mss_esp.js) | `e0c29745a2cc945df184b8c71f8739bdeedde8a595f0b01594f48db0581fec34` |    321 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/menu_mss_esp.js](../../../../clon_portal/portal/m4custom/COLL/libreria/menu_mss_esp.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 252 | " +this.nombres[i]+ "    |

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

| L   | Función     | Argumentos                                                 |
| --- | ----------- | ---------------------------------------------------------- |
| 183 | grupo       | nombrecapa,anchuraminima,posicionx,posiciony,links,nombres |
| 208 | generarcapa |                                                            |
| 269 | ocultardiv  | capa                                                       |
| 274 | mostrardiv  | capa                                                       |
| 310 | resaltado   | obj                                                        |
| 314 | normal      | obj                                                        |
| 318 | ir          | direccion                                                  |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 213 | if (this.nombres.length &gt; 1){                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 216 | if (this.nombres[j].length &gt;= longmax){                                                                                                                                                                                                                                                                                                                                                                                                          |
| 226 | if (longitudcapa &lt; this.anchuraminima){                                                                                                                                                                                                                                                                                                                                                                                                          |
| 233 | if ((this.posicionx + longitudcapa) &gt; (screen.availWidth*0.96)){                                                                                                                                                                                                                                                                                                                                                                                 |
| 251 | if (this.links[i] !="" &amp;&amp; this.nombres[i]!=""){                                                                                                                                                                                                                                                                                                                                                                                             |
| 254 | else{                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 272 | if (document.all) mostrarElemento("SELECT");                                                                                                                                                                                                                                                                                                                                                                                                        |
| 282 | if (document.all){                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 285 | if (oparent.offsetTop - 1 &gt; 0){ //Menus en varias filas                                                                                                                                                                                                                                                                                                                                                                                          |
| 287 | }else{                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 292 | }else{m4elemento(capa).style.top =(oparent.offsetTop + oparent.offsetHeight ) +"px";}                                                                                                                                                                                                                                                                                                                                                               |
| 294 | if (!document.all){ incLeft = capa_menu.offsetLeft;}                                                                                                                                                                                                                                                                                                                                                                                                |
| 301 | if ( nsuma &gt;= nanchocuerpo){                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 234 | expresión de cálculo/transformación: longitudcapa = screen.availWidth*0.96 - this.posicionx;                                                                                                                                                                                                                                                                                                                                                        |
| 240 | expresión de cálculo/transformación: var strinicapa = "&lt;div id='" + this.nombrecapa + "' name='" + this.nombrecapa + "' style='position:absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:" + longitudcapa + "px; visibility: hidden; z-index: 4;' onmouseout=\"" + this.nombrecapa + ".ocultardiv('" + this.nombrecapa + "');\" onmouseover=\"" + this.nombrecapa + ".mostrardiv('" + this.nombrecapa + "');\"&gt;"; |
| 252 | expresión de cálculo/transformación: strcuerpo= strcuerpo + "&lt;tr&gt;&lt;td class='fuentemenu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\" " + this.nombrecapa + ".ir('" + this.links[i] + "');\"&gt; " +this.nombres[i]+ "&lt;/td&gt;&lt;/tr&gt;";                                                        |
| 255 | expresión de cálculo/transformación: strcuerpo = strcuerpo + "&lt;tr&gt;&lt;td&gt;&lt;hr noshade color='#E2E6EA' size=\"1\"&gt;&lt;/td&gt;&lt;/tr&gt;";                                                                                                                                                                                                                                                                                             |
| 259 | expresión de cálculo/transformación: strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;                                                                                                                                                                                                                                                                                                                                     |
| 286 | expresión de cálculo/transformación: var nfactor = parseInt((oparent.offsetTop - 1)/filamenuheight,10) + 1; //fila en la que estoy                                                                                                                                                                                                                                                                                                                  |
| 300 | expresión de cálculo/transformación: var nsuma = parseInt(aoffset[0]) + parseInt(aancho[0]);                                                                                                                                                                                                                                                                                                                                                        |
| 302 | expresión de cálculo/transformación: var nresto = nsuma - nanchocuerpo;                                                                                                                                                                                                                                                                                                                                                                             |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                           |
| --- | --------------------------------------------------------------------------- |
| 12  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11                   |
| 14  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11               |
| 16  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11              |
| 18  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11              |
| 20  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11              |
| 22  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val5.jsp?estado=11             |
| 24  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val6.jsp?estado=11             |
| 28  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11               |
| 30  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11              |
| 32  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11              |
| 34  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val4.jsp?estado=11             |
| 36  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11             |
| 38  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val6.jsp?estado=11             |
| 40  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val7.jsp?estado=11             |
| 44  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p4_val.jsp?estado=11               |
| 46  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p5_val.jsp?estado=11               |
| 52  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21               |
| 56  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21               |
| 60  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21                  |
| 62  | /servlet/CheckSecurity/JSP/mss_g2/smco_g2_p11.jsp?estado=21                 |
| 66  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21               |
| 70  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21               |
| 72  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p9_val.jsp?estado=21               |
| 78  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&amp;mss=1        |
| 80  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp                 |
| 82  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg_filter.jsp             |
| 84  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&amp;proc=1       |
| 86  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31             |
| 88  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=31                  |
| 92  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp                    |
| 94  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31             |
| 98  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31&amp;mss=1        |
| 100 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                   |
| 102 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31                  |
| 104 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31               |
| 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31                  |
| 108 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31                  |
| 110 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR    |
| 113 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32.jsp?estado=21                 |
| 116 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31                 |
| 118 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31            |
| 122 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31                   |
| 124 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31                   |
| 128 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31               |
| 130 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31             |
| 132 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31             |
| 136 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31              |
| 138 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31                   |
| 140 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31                 |
| 149 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41               |
| 151 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41                   |
| 153 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41               |
| 159 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                             |
| 163 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=51                   |
| 167 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8.jsp                             |
| 173 | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_pendientes.jsp?estado=0 |
| 175 | /servlet/CheckSecurity/JSP/mss_generico/mss_delegation.jsp?estado=0         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                  | Resolución | Ficha / candidato                                                                        |
| ------ | --- | --------------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| COLL   | 12  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11                   | ausente    | P06                                                                                      |
| COLL   | 14  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11               | ausente    | P06                                                                                      |
| COLL   | 16  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11              | ausente    | P06                                                                                      |
| COLL   | 18  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11              | ausente    | P06                                                                                      |
| COLL   | 20  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11              | ausente    | P06                                                                                      |
| COLL   | 22  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val5.jsp?estado=11             | ausente    | P06                                                                                      |
| COLL   | 24  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val6.jsp?estado=11             | ausente    | P06                                                                                      |
| COLL   | 28  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11               | ausente    | P06                                                                                      |
| COLL   | 30  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11              | ausente    | P06                                                                                      |
| COLL   | 32  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11              | ausente    | P06                                                                                      |
| COLL   | 34  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val4.jsp?estado=11             | ausente    | P06                                                                                      |
| COLL   | 36  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11             | ausente    | P06                                                                                      |
| COLL   | 38  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val6.jsp?estado=11             | ausente    | P06                                                                                      |
| COLL   | 40  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val7.jsp?estado=11             | ausente    | P06                                                                                      |
| COLL   | 44  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p4_val.jsp?estado=11               | ausente    | P06                                                                                      |
| COLL   | 46  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p5_val.jsp?estado=11               | ausente    | P06                                                                                      |
| COLL   | 52  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21               | ausente    | P06                                                                                      |
| COLL   | 56  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21               | ausente    | P06                                                                                      |
| COLL   | 60  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21                  | ausente    | P06                                                                                      |
| COLL   | 62  | /servlet/CheckSecurity/JSP/mss_g2/smco_g2_p11.jsp?estado=21                 | ausente    | P06                                                                                      |
| COLL   | 66  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21               | ausente    | P06                                                                                      |
| COLL   | 70  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21               | ausente    | P06                                                                                      |
| COLL   | 72  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p9_val.jsp?estado=21               | ausente    | P06                                                                                      |
| COLL   | 78  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&amp;mss=1        | ausente    | P06                                                                                      |
| COLL   | 80  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp                 | ausente    | P06                                                                                      |
| COLL   | 82  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg_filter.jsp             | ausente    | P06                                                                                      |
| COLL   | 84  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&amp;proc=1       | ausente    | P06                                                                                      |
| COLL   | 86  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31             | ausente    | P06                                                                                      |
| COLL   | 88  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=31                  | ausente    | P06                                                                                      |
| COLL   | 92  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp                    | contextual | [mss_g3/smco_evaluator_val.jsp](../../responsable/talento/mss_g3--smco_evaluator_val.md) |
| COLL   | 94  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31             | ausente    | P06                                                                                      |
| COLL   | 98  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31&amp;mss=1        | ausente    | P06                                                                                      |
| COLL   | 100 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                   | ausente    | P06                                                                                      |
| COLL   | 102 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31                  | ausente    | P06                                                                                      |
| COLL   | 104 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31               | ausente    | P06                                                                                      |
| COLL   | 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31                  | ausente    | P06                                                                                      |
| COLL   | 108 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31                  | ausente    | P06                                                                                      |
| COLL   | 110 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR    | ausente    | P06                                                                                      |
| COLL   | 113 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32.jsp?estado=21                 | ausente    | P06                                                                                      |
| COLL   | 116 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31                 | ausente    | P06                                                                                      |
| COLL   | 118 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31            | ausente    | P06                                                                                      |
| COLL   | 122 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31                   | ausente    | P06                                                                                      |
| COLL   | 124 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31                   | ausente    | P06                                                                                      |
| COLL   | 128 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31               | ausente    | P06                                                                                      |
| COLL   | 130 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31             | ausente    | P06                                                                                      |
| COLL   | 132 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31             | ausente    | P06                                                                                      |
| COLL   | 136 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31              | ausente    | P06                                                                                      |
| COLL   | 138 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31                   | ausente    | P06                                                                                      |
| COLL   | 140 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31                 | ausente    | P06                                                                                      |
| COLL   | 149 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41               | ausente    | P06                                                                                      |
| COLL   | 151 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41                   | ausente    | P06                                                                                      |
| COLL   | 153 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41               | ausente    | P06                                                                                      |
| COLL   | 159 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                             | ausente    | P06                                                                                      |
| COLL   | 163 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=51                   | ausente    | P06                                                                                      |
| COLL   | 167 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8.jsp                             | ausente    | P06                                                                                      |
| COLL   | 173 | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_pendientes.jsp?estado=0 | ausente    | P06                                                                                      |
| COLL   | 175 | /servlet/CheckSecurity/JSP/mss_generico/mss_delegation.jsp?estado=0         | ausente    | P06                                                                                      |
| BASE   | 12  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11                   | ausente    | P06                                                                                      |
| BASE   | 14  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11               | ausente    | P06                                                                                      |
| BASE   | 16  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11              | ausente    | P06                                                                                      |
| BASE   | 18  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11              | ausente    | P06                                                                                      |
| BASE   | 20  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11              | ausente    | P06                                                                                      |
| BASE   | 22  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val5.jsp?estado=11             | ausente    | P06                                                                                      |
| BASE   | 24  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val6.jsp?estado=11             | ausente    | P06                                                                                      |
| BASE   | 28  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11               | ausente    | P06                                                                                      |
| BASE   | 30  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11              | ausente    | P06                                                                                      |
| BASE   | 32  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11              | ausente    | P06                                                                                      |
| BASE   | 34  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val4.jsp?estado=11             | ausente    | P06                                                                                      |
| BASE   | 36  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11             | ausente    | P06                                                                                      |
| BASE   | 38  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val6.jsp?estado=11             | ausente    | P06                                                                                      |
| BASE   | 40  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val7.jsp?estado=11             | ausente    | P06                                                                                      |
| BASE   | 44  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p4_val.jsp?estado=11               | ausente    | P06                                                                                      |
| BASE   | 46  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p5_val.jsp?estado=11               | ausente    | P06                                                                                      |
| BASE   | 52  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21               | ausente    | P06                                                                                      |
| BASE   | 56  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21               | ausente    | P06                                                                                      |
| BASE   | 60  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21                  | ausente    | P06                                                                                      |
| BASE   | 62  | /servlet/CheckSecurity/JSP/mss_g2/smco_g2_p11.jsp?estado=21                 | ausente    | P06                                                                                      |
| BASE   | 66  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21               | ausente    | P06                                                                                      |
| BASE   | 70  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21               | ausente    | P06                                                                                      |
| BASE   | 72  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p9_val.jsp?estado=21               | ausente    | P06                                                                                      |
| BASE   | 78  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&amp;mss=1        | ausente    | P06                                                                                      |
| BASE   | 80  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp                 | ausente    | P06                                                                                      |
| BASE   | 82  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg_filter.jsp             | ausente    | P06                                                                                      |
| BASE   | 84  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&amp;proc=1       | ausente    | P06                                                                                      |
| BASE   | 86  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31             | ausente    | P06                                                                                      |
| BASE   | 88  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=31                  | ausente    | P06                                                                                      |
| BASE   | 92  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp                    | contextual | [mss_g3/smco_evaluator_val.jsp](../../responsable/talento/mss_g3--smco_evaluator_val.md) |
| BASE   | 94  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31             | ausente    | P06                                                                                      |
| BASE   | 98  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31&amp;mss=1        | ausente    | P06                                                                                      |
| BASE   | 100 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                   | ausente    | P06                                                                                      |
| BASE   | 102 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31                  | ausente    | P06                                                                                      |
| BASE   | 104 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31               | ausente    | P06                                                                                      |
| BASE   | 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31                  | ausente    | P06                                                                                      |
| BASE   | 108 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31                  | ausente    | P06                                                                                      |
| BASE   | 110 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR    | ausente    | P06                                                                                      |
| BASE   | 113 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32.jsp?estado=21                 | ausente    | P06                                                                                      |
| BASE   | 116 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31                 | ausente    | P06                                                                                      |
| BASE   | 118 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31            | ausente    | P06                                                                                      |
| BASE   | 122 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31                   | ausente    | P06                                                                                      |
| BASE   | 124 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31                   | ausente    | P06                                                                                      |
| BASE   | 128 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31               | ausente    | P06                                                                                      |
| BASE   | 130 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31             | ausente    | P06                                                                                      |
| BASE   | 132 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31             | ausente    | P06                                                                                      |
| BASE   | 136 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31              | ausente    | P06                                                                                      |
| BASE   | 138 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31                   | ausente    | P06                                                                                      |
| BASE   | 140 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31                 | ausente    | P06                                                                                      |
| BASE   | 149 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41               | ausente    | P06                                                                                      |
| BASE   | 151 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41                   | ausente    | P06                                                                                      |
| BASE   | 153 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41               | ausente    | P06                                                                                      |
| BASE   | 159 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                             | ausente    | P06                                                                                      |
| BASE   | 163 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=51                   | ausente    | P06                                                                                      |
| BASE   | 167 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8.jsp                             | ausente    | P06                                                                                      |
| BASE   | 173 | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_pendientes.jsp?estado=0 | ausente    | P06                                                                                      |
| BASE   | 175 | /servlet/CheckSecurity/JSP/mss_generico/mss_delegation.jsp?estado=0         | ausente    | P06                                                                                      |
| IBER   | 12  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1.jsp?estado=11                   | ausente    | P06                                                                                      |
| IBER   | 14  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val.jsp?estado=11               | ausente    | P06                                                                                      |
| IBER   | 16  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val3.jsp?estado=11              | ausente    | P06                                                                                      |
| IBER   | 18  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val2.jsp?estado=11              | ausente    | P06                                                                                      |
| IBER   | 20  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p1_val4.jsp?estado=11              | ausente    | P06                                                                                      |
| IBER   | 22  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val5.jsp?estado=11             | ausente    | P06                                                                                      |
| IBER   | 24  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p1_val6.jsp?estado=11             | ausente    | P06                                                                                      |
| IBER   | 28  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val.jsp?estado=11               | ausente    | P06                                                                                      |
| IBER   | 30  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val2.jsp?estado=11              | ausente    | P06                                                                                      |
| IBER   | 32  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p3_val3.jsp?estado=11              | ausente    | P06                                                                                      |
| IBER   | 34  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val4.jsp?estado=11             | ausente    | P06                                                                                      |
| IBER   | 36  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val5.jsp?estado=11             | ausente    | P06                                                                                      |
| IBER   | 38  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val6.jsp?estado=11             | ausente    | P06                                                                                      |
| IBER   | 40  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_p3_val7.jsp?estado=11             | ausente    | P06                                                                                      |
| IBER   | 44  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p4_val.jsp?estado=11               | ausente    | P06                                                                                      |
| IBER   | 46  | /servlet/CheckSecurity/JSP/mss_g1/mss_g1_p5_val.jsp?estado=11               | ausente    | P06                                                                                      |
| IBER   | 52  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p1_val.jsp?estado=21               | ausente    | P06                                                                                      |
| IBER   | 56  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p2_val.jsp?estado=21               | ausente    | P06                                                                                      |
| IBER   | 60  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p10.jsp?estado=21                  | ausente    | P06                                                                                      |
| IBER   | 62  | /servlet/CheckSecurity/JSP/mss_g2/smco_g2_p11.jsp?estado=21                 | ausente    | P06                                                                                      |
| IBER   | 66  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p5_val.jsp?estado=21               | ausente    | P06                                                                                      |
| IBER   | 70  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p7_val.jsp?estado=21               | ausente    | P06                                                                                      |
| IBER   | 72  | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p9_val.jsp?estado=21               | ausente    | P06                                                                                      |
| IBER   | 78  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p16.jsp?estado=31&amp;mss=1        | ausente    | P06                                                                                      |
| IBER   | 80  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_filter.jsp                 | ausente    | P06                                                                                      |
| IBER   | 82  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_seg_filter.jsp             | ausente    | P06                                                                                      |
| IBER   | 84  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15.jsp?estado=31&amp;proc=1       | ausente    | P06                                                                                      |
| IBER   | 86  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p15_val1.jsp?estado=31             | ausente    | P06                                                                                      |
| IBER   | 88  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p23.jsp?estado=31                  | ausente    | P06                                                                                      |
| IBER   | 92  | /servlet/CheckSecurity/JSP/mss_g3/smco_evaluator_val.jsp                    | contextual | [mss_g3/smco_evaluator_val.jsp](../../responsable/talento/mss_g3--smco_evaluator_val.md) |
| IBER   | 94  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p4_1_val.jsp?estado=31             | ausente    | P06                                                                                      |
| IBER   | 98  | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p17.jsp?estado=31&amp;mss=1        | ausente    | P06                                                                                      |
| IBER   | 100 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p6.jsp?estado=31                   | ausente    | P06                                                                                      |
| IBER   | 102 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p13.jsp?estado=31                  | ausente    | P06                                                                                      |
| IBER   | 104 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p3_val.jsp?estado=31               | ausente    | P06                                                                                      |
| IBER   | 106 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p11.jsp?estado=31                  | ausente    | P06                                                                                      |
| IBER   | 108 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31                  | ausente    | P06                                                                                      |
| IBER   | 110 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p14.jsp?estado=31&amp;zTLoad=FR    | ausente    | P06                                                                                      |
| IBER   | 113 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32.jsp?estado=21                 | ausente    | P06                                                                                      |
| IBER   | 116 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30.jsp?estado=31                 | ausente    | P06                                                                                      |
| IBER   | 118 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31            | ausente    | P06                                                                                      |
| IBER   | 122 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p8.jsp?estado=31                   | ausente    | P06                                                                                      |
| IBER   | 124 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p9.jsp?estado=31                   | ausente    | P06                                                                                      |
| IBER   | 128 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p2_val.jsp?estado=31               | ausente    | P06                                                                                      |
| IBER   | 130 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p32_val.jsp?estado=31             | ausente    | P06                                                                                      |
| IBER   | 132 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_val.jsp?estado=31             | ausente    | P06                                                                                      |
| IBER   | 136 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1_wiz1.jsp?estado=31              | ausente    | P06                                                                                      |
| IBER   | 138 | /servlet/CheckSecurity/JSP/mss_g3/mss_g3_p1.jsp?estado=31                   | ausente    | P06                                                                                      |
| IBER   | 140 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p31.jsp?estado=31                 | ausente    | P06                                                                                      |
| IBER   | 149 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p1_val.jsp?estado=41               | ausente    | P06                                                                                      |
| IBER   | 151 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p3.jsp?estado=41                   | ausente    | P06                                                                                      |
| IBER   | 153 | /servlet/CheckSecurity/JSP/mss_g4/mss_g4_p2_val.jsp?estado=41               | ausente    | P06                                                                                      |
| IBER   | 159 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p0.jsp                             | ausente    | P06                                                                                      |
| IBER   | 163 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p6.jsp?estado=51                   | ausente    | P06                                                                                      |
| IBER   | 167 | /servlet/CheckSecurity/JSP/mss_g2/mss_g2_p8.jsp                             | ausente    | P06                                                                                      |
| IBER   | 173 | /servlet/CheckSecurity/JSP/mss_generico/mssgenerico_pendientes.jsp?estado=0 | ausente    | P06                                                                                      |
| IBER   | 175 | /servlet/CheckSecurity/JSP/mss_generico/mss_delegation.jsp?estado=0         | ausente    | P06                                                                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/menu_mss_esp.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
