# functions_proyecciones

Identificador: `libreria/functions_proyecciones.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                             | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/functions_proyecciones.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_proyecciones.js) | `21a3ebbae9ffce8a68818c2bc216659b5124b359091d62d62d4a841e7f714500` |    730 |
| CYC / compartido  | [m4custom/CYC/libreria/functions_proyecciones.js](../../../../clon_portal/portal/m4custom/CYC/libreria/functions_proyecciones.js)   | `7daeb6d20d250bc376978640fe9c3cd4823281a81d3d2916822fa6dfcfa5890e` |    787 |
| IBER / compartido | [m4custom/IBER/libreria/functions_proyecciones.js](../../../../clon_portal/portal/m4custom/IBER/libreria/functions_proyecciones.js) | `21a3ebbae9ffce8a68818c2bc216659b5124b359091d62d62d4a841e7f714500` |    730 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/functions_proyecciones.js](../../../../clon_portal/portal/m4custom/COLL/libreria/functions_proyecciones.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                            |
| --- | --------------------------------------------------------------------------------------------------- |
| 11  | ' + titulo + '                                                                                      |
| 13  | REAL                                                                                                |
| 16  | PROYECTADO                                                                                          |
| 18  | Total                                                                                               |
| 38  | ' + pagas[i] + '                                                                                    |
| 40  | ' + pagas[i] + '                                                                                    |
| 43  | ' + pagas[i] + '                                                                                    |
| 55  | ' + concepto + '                                                                                    |
| 57  | ' + concepto + '                                                                                    |
| 71  | ' + valores[i] + '                                                                                  |
| 73  | ' + valores[i] + '                                                                                  |
| 77  | ' + valores[i] + '                                                                                  |
| 79  | ' + valores[i] + '                                                                                  |
| 93  | ' + total + '                                                                                       |
| 95  | ' + total + '                                                                                       |
| 102 | '; var colroja = ' '; var colverde = ' '; var coltotal = ' '; var colfinal = ' '; var cierrecol = ' |
| 175 | ' + titulo + '                                                                                      |
| 183 | '; var colroja = ' '; var colverde = ' '; var coltotal = ' '; var cierrecol = '                     |
| 330 | '; var colroja = ' '; var colverde = ' '; var coltotal = ' '; var cierrecol = '                     |
| 371 | ' + titulo + '                                                                                      |
| 374 | VALORACIÓN PROYECTADO/ACUM.                                                                         |
| 376 | REAL                                                                                                |
| 378 | Total                                                                                               |
| 393 | ' + titulo + '                                                                                      |
| 394 | PROYECTADO                                                                                          |
| 395 | Capital                                                                                             |
| 395 | Prima                                                                                               |
| 409 | ' + titulo + '                                                                                      |
| 410 | REAL                                                                                                |
| 411 | Importe                                                                                             |
| 425 | ' + titulo + '                                                                                      |
| 426 | APORTACION CYC                                                                                      |
| 427 | Total                                                                                               |
| 428 | Ordinaria                                                                                           |
| 428 | Extraordinaria                                                                                      |
| 447 | ' + pagas[i] + '                                                                                    |
| 450 | ' + pagas[i] + '                                                                                    |
| 462 | ' + concepto + '                                                                                    |
| 473 | ' + concepto + '                                                                                    |
| 476 | Total                                                                                               |
| 490 | ' + valores[i] + '                                                                                  |
| 494 | ' + valores[i] + '                                                                                  |
| 506 | ' + valores[0] + '                                                                                  |
| 512 | ' + valores[i] + '                                                                                  |
| 516 | ' + valores[i] + '                                                                                  |
| 528 | ' + total + '                                                                                       |
| 534 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 570 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 613 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 628 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 641 | '; var cierrecol = '                                                                                |
| 703 | ' + valores[0] + '                                                                                  |
| 707 | ' + valores[pagaamostrar + 1] + '                                                                   |
| 709 | ' + valores[pagaamostrar + 1] + '                                                                   |
| 712 | ' + valores[valores.length - 1] + '                                                                 |
| 720 | ' + valores[0] + '                                                                                  |
| 723 | ' + valores[parseInt(NumPagasReales)] + '                                                           |
| 725 | ' + valores[parseInt(NumPagasReales)] + '                                                           |
| 728 | ' + valores[valores.length - 1] + '                                                                 |

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

| L   | Función               | Argumentos                                                    |
| --- | --------------------- | ------------------------------------------------------------- |
| 2   | CabeceraRetDir        | NumColReales, NumColtotales,titulo                            |
| 25  | CabeceraPagasRetDir   | NumColReales, NumColtotales,pagas                             |
| 49  | conceptoFila          | concepto,ultimaFila                                           |
| 62  | valoresFila           | NumColReales, NumColtotales,valores,ultimaFila                |
| 87  | totalFila             | total,ultimaFila                                              |
| 100 | totalTabla            | filas,valores                                                 |
| 170 | cabeceraComplementos  | NumColtotales,titulo                                          |
| 178 | complementos          | NumColReales, NumColtotales,valores,numRegistros, numRegistro |
| 235 | number_format         | number, decimals, dec_point, thousands_sep                    |
| 300 | quitarNulos           | valore                                                        |
| 325 | totales               | NumColReales, NumColtotales,valores                           |
| 363 | CabeceraRetInDir      | NumColReales, NumColtotales,titulo,pagaamostrar               |
| 385 | CabeceraRetSegDir     | NumColReales, NumColtotales,titulo                            |
| 401 | CabeceraRetJubDir     | NumColReales, NumColtotales,titulo                            |
| 417 | CabeceraRetPlanDir    | NumColReales, NumColtotales,titulo                            |
| 434 | CabeceraPagasRetInDir | NumColReales, NumColtotales,pagas                             |
| 457 | conceptoFilaIn        | concepto,ultimaFila                                           |
| 468 | conceptoFilaForm      | concepto,ultimaFila                                           |
| 480 | valoresFilaForm       | NumColReales, NumColtotales,valores,ultimaFila                |
| 501 | valoresFilaIn         | NumColReales, NumColtotales,valores,ultimaFila                |
| 523 | totalFilaIn           | total,ultimaFila                                              |
| 532 | totalTablaPlan        | NumColReales, NumColtotales,valores                           |
| 548 | totalTablaCS          | NumRegtotales,valores                                         |
| 559 | totalTablaCS2         | NumRegtotales,valores                                         |
| 569 | PintaTablaCS          | total,total2                                                  |
| 578 | totalTablaIn          | NumColReales, NumColtotales,valores                           |
| 590 | totalTablaVE          | NumRegtotales                                                 |
| 600 | totalTablaVE2         | NumRegtotales                                                 |
| 611 | PintaTablaVE          | total2,total3                                                 |
| 626 | PintaTablaIn          | total                                                         |
| 639 | totalTablaJub         | NumColReales, NumColtotales,valores                           |
| 650 | buscarPaga            | valore                                                        |
| 666 | buscarPagaDetalle     | valore                                                        |
| 685 | buscarUltimoValor     | valore                                                        |
| 700 | cuerpoRetInd          | NumColReales, NumColtotales,valores,pagaamostrar,ultimaFila   |
| 717 | cuerpoRetInd2         | NumColReales, NumColtotales,valores,pagaamostrar,ultimaFila   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | if (NumColReales &gt; 0) {                                                                                                                                                                                                                                                                                           |
| 15  | if (NumColProyectadas &gt; 0) {                                                                                                                                                                                                                                                                                      |
| 36  | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 37  | if (i != 0) {                                                                                                                                                                                                                                                                                                        |
| 39  | }else{                                                                                                                                                                                                                                                                                                               |
| 42  | }else{                                                                                                                                                                                                                                                                                                               |
| 54  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 56  | }else{                                                                                                                                                                                                                                                                                                               |
| 69  | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 70  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 72  | }else{                                                                                                                                                                                                                                                                                                               |
| 75  | }else{                                                                                                                                                                                                                                                                                                               |
| 76  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 78  | }else{                                                                                                                                                                                                                                                                                                               |
| 92  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 94  | }else{                                                                                                                                                                                                                                                                                                               |
| 147 | if (filas==1){                                                                                                                                                                                                                                                                                                       |
| 195 | if (i==0) {                                                                                                                                                                                                                                                                                                          |
| 197 | }else{                                                                                                                                                                                                                                                                                                               |
| 198 | if(i&lt;=NumColReales) {                                                                                                                                                                                                                                                                                             |
| 202 | }else{                                                                                                                                                                                                                                                                                                               |
| 203 | if(i&lt;=NumColtotales){                                                                                                                                                                                                                                                                                             |
| 290 | if (s[0].length &gt; 3) {                                                                                                                                                                                                                                                                                            |
| 293 | if ((s[1] &#124;&#124; '').length &lt; prec) {                                                                                                                                                                                                                                                                       |
| 305 | if (!(valore[i])) {                                                                                                                                                                                                                                                                                                  |
| 308 | if(!(isNaN(valore[i]))){                                                                                                                                                                                                                                                                                             |
| 338 | if (i==0) {                                                                                                                                                                                                                                                                                                          |
| 340 | }else{                                                                                                                                                                                                                                                                                                               |
| 341 | if(i&lt;=NumColReales) {                                                                                                                                                                                                                                                                                             |
| 343 | }else{                                                                                                                                                                                                                                                                                                               |
| 344 | if(i&lt;=NumColtotales){                                                                                                                                                                                                                                                                                             |
| 373 | if(pagaamostrar&gt;NumColReales){                                                                                                                                                                                                                                                                                    |
| 375 | }else{                                                                                                                                                                                                                                                                                                               |
| 445 | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 446 | if (i != 0) {                                                                                                                                                                                                                                                                                                        |
| 449 | }else{                                                                                                                                                                                                                                                                                                               |
| 475 | if(ultimaFila == true){                                                                                                                                                                                                                                                                                              |
| 488 | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 492 | }else{                                                                                                                                                                                                                                                                                                               |
| 505 | if(NumColtotales==1){                                                                                                                                                                                                                                                                                                |
| 507 | }else{                                                                                                                                                                                                                                                                                                               |
| 510 | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 514 | }else{                                                                                                                                                                                                                                                                                                               |
| 654 | if (valore[i] &gt; 0) {                                                                                                                                                                                                                                                                                              |
| 670 | if (valore[i] &gt; 0 &amp;&amp; valore[i]!=null &amp;&amp; valore[i]!='') {                                                                                                                                                                                                                                          |
| 674 | if (valore[i] == 0 &amp;&amp; valore[i]!=null &amp;&amp; valore[i]!='') {                                                                                                                                                                                                                                            |
| 690 | if (valore[i] != "0,00") {                                                                                                                                                                                                                                                                                           |
| 706 | if(pagaamostrar&gt;NumColReales){                                                                                                                                                                                                                                                                                    |
| 708 | }else{                                                                                                                                                                                                                                                                                                               |
| 722 | if(pagaamostrar&gt;NumColReales){                                                                                                                                                                                                                                                                                    |
| 724 | }else{                                                                                                                                                                                                                                                                                                               |
| 9   | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 13  | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColReales + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"&gt;REAL&lt;/th&gt;'                                                                           |
| 16  | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;"&gt;PROYECTADO&lt;/th&gt;'                                                                |
| 32  | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 55  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 57  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 71  | expresión de cálculo/transformación: document.write('&lt;td style="border: none;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                                                                                                                                        |
| 73  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                              |
| 77  | expresión de cálculo/transformación: document.write('&lt;td style="border: none;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                                                                                                                                          |
| 79  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                |
| 93  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;" colspan="2"&gt;' + total + '&lt;/td&gt;');                                                                                |
| 95  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" colspan="2"&gt;' + total + '&lt;/td&gt;');                                                                                |
| 133 | expresión de cálculo/transformación: total1=total+parseFloat(valores[1]);                                                                                                                                                                                                                                            |
| 134 | expresión de cálculo/transformación: total2=total2+parseFloat(valores[2]);                                                                                                                                                                                                                                           |
| 135 | expresión de cálculo/transformación: total3=total3+parseFloat(valores[3]);                                                                                                                                                                                                                                           |
| 136 | expresión de cálculo/transformación: total4=total4+parseFloat(valores[4]);                                                                                                                                                                                                                                           |
| 137 | expresión de cálculo/transformación: total5=total5+parseFloat(valores[5]);                                                                                                                                                                                                                                           |
| 138 | expresión de cálculo/transformación: total6=total6+parseFloat(valores[6]);                                                                                                                                                                                                                                           |
| 139 | expresión de cálculo/transformación: total7=total7+parseFloat(valores[7]);                                                                                                                                                                                                                                           |
| 140 | expresión de cálculo/transformación: total8=total8+parseFloat(valores[8]);                                                                                                                                                                                                                                           |
| 141 | expresión de cálculo/transformación: total9=total9+parseFloat(valores[9]);                                                                                                                                                                                                                                           |
| 142 | expresión de cálculo/transformación: total10=total10+parseFloat(valores[10]);                                                                                                                                                                                                                                        |
| 143 | expresión de cálculo/transformación: total11=total11+parseFloat(valores[11]);                                                                                                                                                                                                                                        |
| 144 | expresión de cálculo/transformación: total12=total12+parseFloat(valores[12]);                                                                                                                                                                                                                                        |
| 145 | expresión de cálculo/transformación: total13=total13+parseFloat(valores[13]);                                                                                                                                                                                                                                        |
| 175 | expresión de cálculo/transformación: document.write('&lt;th colspan="' + NumColtotales + '" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight: bold;"&gt;' + titulo + '&lt;/th&gt;'); |
| 281 | expresión de cálculo/transformación: prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),                                                                                                                                                                                                                           |
| 286 | expresión de cálculo/transformación: var k = Math.pow(10, prec);                                                                                                                                                                                                                                                     |
| 289 | expresión de cálculo/transformación: s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');                                                                                                                                                                                                         |
| 369 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 374 | expresión de cálculo/transformación: cabecera += '&lt;th rowspan="2" colspan="' + (2) + '" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;"&gt;VALORACIÓN PROYECTADO/ACUM. &lt;/th&gt;'                                                |
| 376 | expresión de cálculo/transformación: cabecera += '&lt;th rowspan="2" colspan="' + (2) + '" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;"&gt;REAL&lt;/th&gt;'                                                                        |
| 391 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 394 | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"&gt;PROYECTADO&lt;/th&gt;'                                                                |
| 407 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 410 | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px;"&gt;REAL&lt;/th&gt;'                                                                      |
| 423 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 441 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 462 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 473 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 490 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                |
| 494 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 1px;border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align=center;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                              |
| 506 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;');                                              |
| 512 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                              |
| 516 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                |
| 528 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:red;" colspan="1"&gt;' + total + '&lt;/td&gt;');                                                                      |
| 540 | expresión de cálculo/transformación: total=total+parseInt(valores[i]);                                                                                                                                                                                                                                               |
| 552 | expresión de cálculo/transformación: total=total+parseFloat(valores[0]);                                                                                                                                                                                                                                             |
| 563 | expresión de cálculo/transformación: total2=total2+parseFloat(valores[1]);                                                                                                                                                                                                                                           |
| 582 | expresión de cálculo/transformación: total=total+parseFloat(valores[i]);                                                                                                                                                                                                                                             |
| 594 | expresión de cálculo/transformación: total2=total2+parseFloat(valores[0]);                                                                                                                                                                                                                                           |
| 604 | expresión de cálculo/transformación: total3=total3+parseFloat(valores[1]);                                                                                                                                                                                                                                           |
| 703 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;');                                                          |
| 707 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[pagaamostrar + 1] + '&lt;/td&gt;');                    |
| 709 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[pagaamostrar + 1] + '&lt;/td&gt;');                  |
| 720 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;');                                                          |
| 723 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[parseInt(NumPagasReales)] + '&lt;/td&gt;');            |
| 725 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[parseInt(NumPagasReales)] + '&lt;/td&gt;');          |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Versión 2: CYC compartida

Fuente de los localizadores `L`: [m4custom/CYC/libreria/functions_proyecciones.js](../../../../clon_portal/portal/m4custom/CYC/libreria/functions_proyecciones.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                            |
| --- | --------------------------------------------------------------------------------------------------- |
| 11  | ' + titulo + '                                                                                      |
| 13  | REAL                                                                                                |
| 16  | PROYECTADO                                                                                          |
| 18  | Total                                                                                               |
| 38  | ' + pagas[i] + '                                                                                    |
| 40  | ' + pagas[i] + '                                                                                    |
| 43  | ' + pagas[i] + '                                                                                    |
| 55  | ' + concepto + '                                                                                    |
| 57  | ' + concepto + '                                                                                    |
| 71  | ' + valores[i] + '                                                                                  |
| 73  | ' + valores[i] + '                                                                                  |
| 77  | ' + valores[i] + '                                                                                  |
| 79  | ' + valores[i] + '                                                                                  |
| 93  | ' + total + '                                                                                       |
| 95  | ' + total + '                                                                                       |
| 102 | '; var colroja = ' '; var colverde = ' '; var coltotal = ' '; var colfinal = ' '; var cierrecol = ' |
| 175 | ' + titulo + '                                                                                      |
| 183 | '; var colroja = ' '; var colverde = ' '; var coltotal = ' '; var cierrecol = '                     |
| 382 | '; var colroja = ' '; var colverde = ' '; var coltotal = ' '; var cierrecol = '                     |
| 423 | ' + titulo + '                                                                                      |
| 426 | VALORACIÓN PROYECTADO/ACUM.                                                                         |
| 428 | REAL                                                                                                |
| 430 | Total                                                                                               |
| 445 | ' + titulo + '                                                                                      |
| 446 | PROYECTADO                                                                                          |
| 447 | Capital                                                                                             |
| 447 | Prima                                                                                               |
| 461 | ' + titulo + '                                                                                      |
| 462 | REAL                                                                                                |
| 463 | Importe                                                                                             |
| 477 | ' + titulo + '                                                                                      |
| 478 | APORTACION CYC                                                                                      |
| 479 | Total                                                                                               |
| 480 | Ordinaria                                                                                           |
| 480 | Extraordinaria                                                                                      |
| 499 | ' + pagas[i] + '                                                                                    |
| 502 | ' + pagas[i] + '                                                                                    |
| 514 | ' + concepto + '                                                                                    |
| 525 | ' + concepto + '                                                                                    |
| 528 | Total                                                                                               |
| 542 | ' + valores[i] + '                                                                                  |
| 546 | ' + valores[i] + '                                                                                  |
| 558 | ' + valores[0] + '                                                                                  |
| 564 | ' + valores[i] + '                                                                                  |
| 568 | ' + valores[i] + '                                                                                  |
| 580 | ' + total + '                                                                                       |
| 586 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 622 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 665 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 680 | '; var coltotal = ' '; var cierrecol = '                                                            |
| 693 | '; var cierrecol = '                                                                                |
| 760 | ' + valores[0] + '                                                                                  |
| 764 | ' + valores[pagaamostrar + 1] + '                                                                   |
| 766 | ' + valores[pagaamostrar + 1] + '                                                                   |
| 769 | ' + valores[valores.length - 1] + '                                                                 |
| 777 | ' + valores[0] + '                                                                                  |
| 780 | ' + valores[parseInt(NumPagasReales)] + '                                                           |
| 782 | ' + valores[parseInt(NumPagasReales)] + '                                                           |
| 785 | ' + valores[valores.length - 1] + '                                                                 |

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

| L   | Función               | Argumentos                                                    |
| --- | --------------------- | ------------------------------------------------------------- |
| 2   | CabeceraRetDir        | NumColReales, NumColtotales,titulo                            |
| 25  | CabeceraPagasRetDir   | NumColReales, NumColtotales,pagas                             |
| 49  | conceptoFila          | concepto,ultimaFila                                           |
| 62  | valoresFila           | NumColReales, NumColtotales,valores,ultimaFila                |
| 87  | totalFila             | total,ultimaFila                                              |
| 100 | totalTabla            | filas,valores                                                 |
| 170 | cabeceraComplementos  | NumColtotales,titulo                                          |
| 178 | complementos          | NumColReales, NumColtotales,valores,numRegistros, numRegistro |
| 235 | number_format         | number, decimals, dec_point, thousands_sep                    |
| 300 | quitarNulos           | valore                                                        |
| 325 | quitarNulo            | valore                                                        |
| 332 | ponerPositivos        | valore                                                        |
| 354 | ponerTotalPositivo    | valore                                                        |
| 377 | totales               | NumColReales, NumColtotales,valores                           |
| 415 | CabeceraRetInDir      | NumColReales, NumColtotales,titulo,pagaamostrar               |
| 437 | CabeceraRetSegDir     | NumColReales, NumColtotales,titulo                            |
| 453 | CabeceraRetJubDir     | NumColReales, NumColtotales,titulo                            |
| 469 | CabeceraRetPlanDir    | NumColReales, NumColtotales,titulo                            |
| 486 | CabeceraPagasRetInDir | NumColReales, NumColtotales,pagas                             |
| 509 | conceptoFilaIn        | concepto,ultimaFila                                           |
| 520 | conceptoFilaForm      | concepto,ultimaFila                                           |
| 532 | valoresFilaForm       | NumColReales, NumColtotales,valores,ultimaFila                |
| 553 | valoresFilaIn         | NumColReales, NumColtotales,valores,ultimaFila                |
| 575 | totalFilaIn           | total,ultimaFila                                              |
| 584 | totalTablaPlan        | NumColReales, NumColtotales,valores                           |
| 600 | totalTablaCS          | NumRegtotales,valores                                         |
| 611 | totalTablaCS2         | NumRegtotales,valores                                         |
| 621 | PintaTablaCS          | total,total2                                                  |
| 630 | totalTablaIn          | NumColReales, NumColtotales,valores                           |
| 642 | totalTablaVE          | NumRegtotales                                                 |
| 652 | totalTablaVE2         | NumRegtotales                                                 |
| 663 | PintaTablaVE          | total2,total3                                                 |
| 678 | PintaTablaIn          | total                                                         |
| 691 | totalTablaJub         | NumColReales, NumColtotales,valores                           |
| 702 | buscarPaga            | valore                                                        |
| 718 | buscarPagaDetalle     | valore                                                        |
| 742 | buscarUltimoValor     | valore                                                        |
| 757 | cuerpoRetInd          | NumColReales, NumColtotales,valores,pagaamostrar,ultimaFila   |
| 774 | cuerpoRetInd2         | NumColReales, NumColtotales,valores,pagaamostrar,ultimaFila   |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 12  | if (NumColReales &gt; 0) {                                                                                                                                                                                                                                                                                           |
| 15  | if (NumColProyectadas &gt; 0) {                                                                                                                                                                                                                                                                                      |
| 36  | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 37  | if (i != 0) {                                                                                                                                                                                                                                                                                                        |
| 39  | }else{                                                                                                                                                                                                                                                                                                               |
| 42  | }else{                                                                                                                                                                                                                                                                                                               |
| 54  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 56  | }else{                                                                                                                                                                                                                                                                                                               |
| 69  | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 70  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 72  | }else{                                                                                                                                                                                                                                                                                                               |
| 75  | }else{                                                                                                                                                                                                                                                                                                               |
| 76  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 78  | }else{                                                                                                                                                                                                                                                                                                               |
| 92  | if (!(ultimaFila)) {                                                                                                                                                                                                                                                                                                 |
| 94  | }else{                                                                                                                                                                                                                                                                                                               |
| 147 | if (filas==1){                                                                                                                                                                                                                                                                                                       |
| 195 | if (i==0) {                                                                                                                                                                                                                                                                                                          |
| 197 | }else{                                                                                                                                                                                                                                                                                                               |
| 198 | if(i&lt;=NumColReales) {                                                                                                                                                                                                                                                                                             |
| 202 | }else{                                                                                                                                                                                                                                                                                                               |
| 203 | if(i&lt;=NumColtotales){                                                                                                                                                                                                                                                                                             |
| 290 | if (s[0].length &gt; 3) {                                                                                                                                                                                                                                                                                            |
| 293 | if ((s[1] &#124;&#124; '').length &lt; prec) {                                                                                                                                                                                                                                                                       |
| 305 | if (!(valore[i])) {                                                                                                                                                                                                                                                                                                  |
| 308 | if(!(isNaN(valore[i]))){                                                                                                                                                                                                                                                                                             |
| 326 | if (!(valore)){ valore = 0; }                                                                                                                                                                                                                                                                                        |
| 327 | if(!(isNaN(valore))){ valore = number_format(valore, 2, ',', '.'); }                                                                                                                                                                                                                                                 |
| 337 | if (!(valore[i])) {                                                                                                                                                                                                                                                                                                  |
| 340 | if(isNaN(valore[i])){                                                                                                                                                                                                                                                                                                |
| 343 | if(valore[i]&lt;0){                                                                                                                                                                                                                                                                                                  |
| 361 | if (!(valore)) {                                                                                                                                                                                                                                                                                                     |
| 364 | if(isNaN(valore)){                                                                                                                                                                                                                                                                                                   |
| 367 | if(valore&lt;0){                                                                                                                                                                                                                                                                                                     |
| 390 | if (i==0) {                                                                                                                                                                                                                                                                                                          |
| 392 | }else{                                                                                                                                                                                                                                                                                                               |
| 393 | if(i&lt;=NumColReales) {                                                                                                                                                                                                                                                                                             |
| 395 | }else{                                                                                                                                                                                                                                                                                                               |
| 396 | if(i&lt;=NumColtotales){                                                                                                                                                                                                                                                                                             |
| 425 | if(pagaamostrar&gt;NumColReales){                                                                                                                                                                                                                                                                                    |
| 427 | }else{                                                                                                                                                                                                                                                                                                               |
| 497 | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 498 | if (i != 0) {                                                                                                                                                                                                                                                                                                        |
| 501 | }else{                                                                                                                                                                                                                                                                                                               |
| 527 | if(ultimaFila == true){                                                                                                                                                                                                                                                                                              |
| 540 | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 544 | }else{                                                                                                                                                                                                                                                                                                               |
| 557 | if(NumColtotales==1){                                                                                                                                                                                                                                                                                                |
| 559 | }else{                                                                                                                                                                                                                                                                                                               |
| 562 | if (i &lt; NumColReales) {                                                                                                                                                                                                                                                                                           |
| 566 | }else{                                                                                                                                                                                                                                                                                                               |
| 706 | if (valore[i] &gt; 0) {                                                                                                                                                                                                                                                                                              |
| 723 | if (valore[i] &gt; 0 &amp;&amp; valore[i]!=null &amp;&amp; valore[i]!='') {                                                                                                                                                                                                                                          |
| 728 | if (valore[i] == 0 &amp;&amp; valore[i]!=null &amp;&amp; valore[i]!='') {                                                                                                                                                                                                                                            |
| 747 | if (valore[i] != "0,00") {                                                                                                                                                                                                                                                                                           |
| 763 | if(pagaamostrar&gt;NumColReales){                                                                                                                                                                                                                                                                                    |
| 765 | }else{                                                                                                                                                                                                                                                                                                               |
| 779 | if(pagaamostrar&gt;NumColReales){                                                                                                                                                                                                                                                                                    |
| 781 | }else{                                                                                                                                                                                                                                                                                                               |
| 9   | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 13  | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColReales + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"&gt;REAL&lt;/th&gt;'                                                                           |
| 16  | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;"&gt;PROYECTADO&lt;/th&gt;'                                                                |
| 32  | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 55  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 57  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 71  | expresión de cálculo/transformación: document.write('&lt;td style="border: none;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                                                                                                                                        |
| 73  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                              |
| 77  | expresión de cálculo/transformación: document.write('&lt;td style="border: none;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                                                                                                                                          |
| 79  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                |
| 93  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;" colspan="2"&gt;' + total + '&lt;/td&gt;');                                                                                |
| 95  | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px;" colspan="2"&gt;' + total + '&lt;/td&gt;');                                                                                |
| 133 | expresión de cálculo/transformación: total1=total+parseFloat(valores[1]);                                                                                                                                                                                                                                            |
| 134 | expresión de cálculo/transformación: total2=total2+parseFloat(valores[2]);                                                                                                                                                                                                                                           |
| 135 | expresión de cálculo/transformación: total3=total3+parseFloat(valores[3]);                                                                                                                                                                                                                                           |
| 136 | expresión de cálculo/transformación: total4=total4+parseFloat(valores[4]);                                                                                                                                                                                                                                           |
| 137 | expresión de cálculo/transformación: total5=total5+parseFloat(valores[5]);                                                                                                                                                                                                                                           |
| 138 | expresión de cálculo/transformación: total6=total6+parseFloat(valores[6]);                                                                                                                                                                                                                                           |
| 139 | expresión de cálculo/transformación: total7=total7+parseFloat(valores[7]);                                                                                                                                                                                                                                           |
| 140 | expresión de cálculo/transformación: total8=total8+parseFloat(valores[8]);                                                                                                                                                                                                                                           |
| 141 | expresión de cálculo/transformación: total9=total9+parseFloat(valores[9]);                                                                                                                                                                                                                                           |
| 142 | expresión de cálculo/transformación: total10=total10+parseFloat(valores[10]);                                                                                                                                                                                                                                        |
| 143 | expresión de cálculo/transformación: total11=total11+parseFloat(valores[11]);                                                                                                                                                                                                                                        |
| 144 | expresión de cálculo/transformación: total12=total12+parseFloat(valores[12]);                                                                                                                                                                                                                                        |
| 145 | expresión de cálculo/transformación: total13=total13+parseFloat(valores[13]);                                                                                                                                                                                                                                        |
| 175 | expresión de cálculo/transformación: document.write('&lt;th colspan="' + NumColtotales + '" style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px; vertical-align: bottom;text-align:left;font-weight: bold;"&gt;' + titulo + '&lt;/th&gt;'); |
| 281 | expresión de cálculo/transformación: prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),                                                                                                                                                                                                                           |
| 286 | expresión de cálculo/transformación: var k = Math.pow(10, prec);                                                                                                                                                                                                                                                     |
| 289 | expresión de cálculo/transformación: s = (prec ? toFixedFix(n, prec) : Math.round(n)).toString().split('.');                                                                                                                                                                                                         |
| 341 | expresión de cálculo/transformación: valore[i] = parseFloat(valore[i]);                                                                                                                                                                                                                                              |
| 365 | expresión de cálculo/transformación: valore = parseFloat(valore);                                                                                                                                                                                                                                                    |
| 421 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 426 | expresión de cálculo/transformación: cabecera += '&lt;th rowspan="2" colspan="' + (2) + '" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;"&gt;VALORACIÓN PROYECTADO/ACUM. &lt;/th&gt;'                                                |
| 428 | expresión de cálculo/transformación: cabecera += '&lt;th rowspan="2" colspan="' + (2) + '" style="border: solid black; border-top-width: 1px; border-right-width: 0px; border-bottom-width: 1px; border-left-width: 0px;"&gt;REAL&lt;/th&gt;'                                                                        |
| 443 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 446 | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px;"&gt;PROYECTADO&lt;/th&gt;'                                                                |
| 459 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 462 | expresión de cálculo/transformación: cabecera += '&lt;th colspan="' + NumColProyectadas + '" style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px;"&gt;REAL&lt;/th&gt;'                                                                      |
| 475 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 493 | expresión de cálculo/transformación: var NumColProyectadas = NumColtotales - NumColReales;                                                                                                                                                                                                                           |
| 514 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 0px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 525 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + concepto + '&lt;/td&gt;');                                                            |
| 542 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 1px; border-bottom-width: 1px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                |
| 546 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 1px;border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; text-align=center;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                              |
| 558 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;');                                              |
| 564 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                              |
| 568 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[i] + '&lt;/td&gt;');                                                |
| 580 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 0px;color:red;" colspan="1"&gt;' + total + '&lt;/td&gt;');                                                                      |
| 592 | expresión de cálculo/transformación: total=total+parseInt(valores[i]);                                                                                                                                                                                                                                               |
| 604 | expresión de cálculo/transformación: total=total+parseFloat(valores[0]);                                                                                                                                                                                                                                             |
| 615 | expresión de cálculo/transformación: total2=total2+parseFloat(valores[1]);                                                                                                                                                                                                                                           |
| 634 | expresión de cálculo/transformación: total=total+parseFloat(valores[i]);                                                                                                                                                                                                                                             |
| 646 | expresión de cálculo/transformación: total2=total2+parseFloat(valores[0]);                                                                                                                                                                                                                                           |
| 656 | expresión de cálculo/transformación: total3=total3+parseFloat(valores[1]);                                                                                                                                                                                                                                           |
| 760 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;');                                                          |
| 764 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[pagaamostrar + 1] + '&lt;/td&gt;');                    |
| 766 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[pagaamostrar + 1] + '&lt;/td&gt;');                  |
| 777 | expresión de cálculo/transformación: document.write('&lt;td style="border: solid black; border-top-width: 0px; border-right-width: 1px; border-bottom-width: 0px; border-left-width: 1px; text-align:left;" colspan="1"&gt;' + valores[0] + '&lt;/td&gt;');                                                          |
| 780 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:red;" colspan="1"&gt;' + valores[parseInt(NumPagasReales)] + '&lt;/td&gt;');            |
| 782 | expresión de cálculo/transformación: document.write('&lt;td colspan ="2" style="border: solid black;border-top-width: 0px;border-right-width: 0px; border-bottom-width: 0px; border-left-width: 0px; text-align=center;color:green;" colspan="1"&gt;' + valores[parseInt(NumPagasReales)] + '&lt;/td&gt;');          |

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

- Confirmar exposición y permisos de `libreria/functions_proyecciones.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
