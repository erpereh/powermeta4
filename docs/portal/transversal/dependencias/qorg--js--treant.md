# Treant

Identificador: `QOrg/js/Treant.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| CYC / compartido  | [m4custom/CYC/QOrg/js/Treant.js](../../../../clon_portal/portal/m4custom/CYC/QOrg/js/Treant.js) | `ebeee0bd863f99d55b9bef4293607b33b140df87045a72df1ced49b9032196f5` |   2421 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: CYC compartida

Fuente de los localizadores `L`: [m4custom/CYC/QOrg/js/Treant.js](../../../../clon_portal/portal/m4custom/CYC/QOrg/js/Treant.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L    | Control | Atributos |
| ---- | ------- | --------- |
| 2047 | a       |           |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

Sin inicializadores estáticos identificados. Las expresiones con `{variable}` necesitan contexto de ejecución.

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

Sin tags de contrato en esta versión.

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L    | Función         | Argumentos     |
| ---- | --------------- | -------------- |
| 306  | imgTrigger      |                |
| 1116 | iterateChildren | node, parentId |

| L    | Condición / acción / mensaje literal                                                                                                                                                                            |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 22   | if (!String.prototype.startsWith) {                                                                                                                                                                             |
| 40   | if ( applyFrom.hasOwnProperty( attr ) ) {                                                                                                                                                                       |
| 41   | if ( ( applyTo[attr] instanceof Object &amp;&amp; applyFrom[attr] instanceof Object ) &amp;&amp; ( typeof applyFrom[attr] !== 'function' ) ) {                                                                  |
| 44   | else {                                                                                                                                                                                                          |
| 60   | if ( obj1 ) {                                                                                                                                                                                                   |
| 63   | if ( obj2 ) {                                                                                                                                                                                                   |
| 74   | if ( $$ ) {                                                                                                                                                                                                     |
| 78   | else {                                                                                                                                                                                                          |
| 88   | if ( Object( obj ) !== obj ) {                                                                                                                                                                                  |
| 93   | if ( obj.hasOwnProperty(key) ) {                                                                                                                                                                                |
| 106  | if ( $$ ) {                                                                                                                                                                                                     |
| 109  | else if ( el.addEventListener ) { // DOM Level 2 browsers                                                                                                                                                       |
| 112  | else if ( el.attachEvent ) { // IE &lt;= 8                                                                                                                                                                      |
| 115  | else { // ancient browsers                                                                                                                                                                                      |
| 129  | if ( $$ ) {                                                                                                                                                                                                     |
| 133  | else {                                                                                                                                                                                                          |
| 137  | if ( selector.charAt( 0 ) === '#' ) {                                                                                                                                                                           |
| 140  | else if ( selector.charAt( 0 ) === '.' ) {                                                                                                                                                                      |
| 145  | throw new Error( 'Unknown container element' );                                                                                                                                                                 |
| 151  | if ( typeof element.getBoundingClientRect === 'function' ) {                                                                                                                                                    |
| 154  | else if ( $$ ) {                                                                                                                                                                                                |
| 157  | else {                                                                                                                                                                                                          |
| 171  | if ( typeof element.getBoundingClientRect === 'function' ) {                                                                                                                                                    |
| 174  | else if ( $$ ) {                                                                                                                                                                                                |
| 177  | else {                                                                                                                                                                                                          |
| 191  | if ( document.defaultView &amp;&amp; document.defaultView.getComputedStyle ) {                                                                                                                                  |
| 194  | else if( element.currentStyle ) {                                                                                                                                                                               |
| 207  | if ( $$ ) {                                                                                                                                                                                                     |
| 210  | else {                                                                                                                                                                                                          |
| 211  | if ( !UTIL.hasClass( element, cssClass ) ) {                                                                                                                                                                    |
| 212  | if ( element.classList ) {                                                                                                                                                                                      |
| 215  | else {                                                                                                                                                                                                          |
| 227  | if ( $$ ) {                                                                                                                                                                                                     |
| 230  | else {                                                                                                                                                                                                          |
| 231  | if ( apply ) {                                                                                                                                                                                                  |
| 235  | else {                                                                                                                                                                                                          |
| 242  | if ( $$ ) {                                                                                                                                                                                                     |
| 245  | else {                                                                                                                                                                                                          |
| 291  | if ( this.loading[i] === img_src ) {                                                                                                                                                                            |
| 312  | if ( image.src.indexOf( 'data:' ) !== 0 ) {                                                                                                                                                                     |
| 315  | if ( image.complete ) {                                                                                                                                                                                         |
| 325  | else {                                                                                                                                                                                                          |
| 371  | if ( tree ) {                                                                                                                                                                                                   |
| 384  | if ( cls !== 'Treant' &amp;&amp; cls !== 'Treant-loaded' ) {                                                                                                                                                    |
| 419  | if ( !this.drawArea ) {                                                                                                                                                                                         |
| 420  | throw new Error( 'Failed to find element by selector "'+this.CONFIG.container+'"' );                                                                                                                            |
| 500  | if ( this.imageLoader.isNotLoading() ) {                                                                                                                                                                        |
| 511  | if ( this.CONFIG.animateOnInit ) {                                                                                                                                                                              |
| 520  | if ( !this.loaded ) {                                                                                                                                                                                           |
| 522  | if ( Object.prototype.toString.call( callback ) === "[object Function]" ) {                                                                                                                                     |
| 530  | else {                                                                                                                                                                                                          |
| 558  | if ( node.childrenCount() === 0 &#124;&#124; level == this.CONFIG.maxDepth ) {                                                                                                                                  |
| 560  | if ( leftSibling ) {                                                                                                                                                                                            |
| 563  | else {                                                                                                                                                                                                          |
| 567  | else {                                                                                                                                                                                                          |
| 575  | if ( leftSibling ) {                                                                                                                                                                                            |
| 580  | else {                                                                                                                                                                                                          |
| 585  | if ( node.stackParent ) { // handle the parent of stacked children                                                                                                                                              |
| 588  | else if ( node.stackParentId ) { // handle stacked children                                                                                                                                                     |
| 624  | if ( rightAncestor.stackParent !== undefined ) {                                                                                                                                                                |
| 634  | if ( totalGap &gt; 0 ) {                                                                                                                                                                                        |
| 644  | if ( subtreeAux ) {                                                                                                                                                                                             |
| 664  | if ( firstChild ) {                                                                                                                                                                                             |
| 679  | if ( level &lt;= this.CONFIG.maxDepth ) {                                                                                                                                                                       |
| 685  | if (orient === 'NORTH' &#124;&#124; orient === 'SOUTH') {                                                                                                                                                       |
| 688  | if (node.pseudo) {                                                                                                                                                                                              |
| 692  | else if (orient === 'WEST' &#124;&#124; orient === 'EAST') {                                                                                                                                                    |
| 695  | if (node.pseudo) {                                                                                                                                                                                              |
| 702  | if (node.pseudo) { // pseudo nodes need to be properly aligned, otherwise position is not correct in some examples                                                                                              |
| 703  | if (orient === 'NORTH' &#124;&#124; orient === 'WEST') {                                                                                                                                                        |
| 706  | else if (orient === 'SOUTH' &#124;&#124; orient === 'EAST') {                                                                                                                                                   |
| 710  | } else {                                                                                                                                                                                                        |
| 716  | if ( orient === 'WEST' &#124;&#124; orient === 'EAST' ) {                                                                                                                                                       |
| 722  | if (orient === 'SOUTH' ) {                                                                                                                                                                                      |
| 725  | else if ( orient === 'EAST' ) {                                                                                                                                                                                 |
| 729  | if ( node.childrenCount() !== 0 ) {                                                                                                                                                                             |
| 730  | if ( node.id === 0 &amp;&amp; this.CONFIG.hideRootNode ) {                                                                                                                                                      |
| 734  | else {                                                                                                                                                                                                          |
| 739  | if ( node.rightSibling() ) {                                                                                                                                                                                    |
| 788  | if ( node.id === 0 &amp;&amp; this.CONFIG.hideRootNode ) {                                                                                                                                                      |
| 800  | if (collapsedParent) {                                                                                                                                                                                          |
| 806  | else if (node.positioned) {                                                                                                                                                                                     |
| 810  | else { // inicijalno stvaranje nodeova, postavi lokaciju                                                                                                                                                        |
| 816  | if (node.id !== 0 &amp;&amp; !(node.parent().id === 0 &amp;&amp; this.CONFIG.hideRootNode)) {                                                                                                                   |
| 819  | else if (!this.CONFIG.hideRootNode &amp;&amp; node.drawLineThrough) {                                                                                                                                           |
| 841  | if ( this.CONFIG.scrollbar === 'resize') {                                                                                                                                                                      |
| 844  | else if ( !UTIL.isjQueryAvailable() &#124;&#124; this.CONFIG.scrollbar === 'native' ) {                                                                                                                         |
| 846  | if ( this.drawArea.clientWidth &lt; treeWidth ) { // is overflow-x necessary                                                                                                                                    |
| 850  | if ( this.drawArea.clientHeight &lt; treeHeight ) { // is overflow-y necessary                                                                                                                                  |
| 855  | else if ( this.CONFIG.scrollbar === 'fancy') {                                                                                                                                                                  |
| 857  | if (jq_drawArea.hasClass('ps-container')) { // znaci da je 'fancy' vec inicijaliziran, treba updateat                                                                                                           |
| 865  | else {                                                                                                                                                                                                          |
| 876  | } // else this.CONFIG.scrollbar == 'None'                                                                                                                                                                       |
| 894  | if ( this.connectionStore[treeNode.id] ) {                                                                                                                                                                      |
| 899  | else {                                                                                                                                                                                                          |
| 904  | if ( treeNode.pseudo ) {                                                                                                                                                                                        |
| 907  | if ( parent.pseudo ) {                                                                                                                                                                                          |
| 913  | if ( treeNode.drawLineThrough &#124;&#124; treeNode.pseudo ) {                                                                                                                                                  |
| 941  | if (path.hidden &amp;&amp; pathString.charAt(0) !== "_") { // path will be shown, so show it                                                                                                                    |
| 956  | if ( pathString.charAt(0) === "_" ) { // animation is hiding the path, hide it at the and of animation                                                                                                          |
| 979  | if ( orientation === 'NORTH' &#124;&#124; orientation === 'SOUTH' ) {                                                                                                                                           |
| 985  | else if ( orientation === 'EAST' &#124;&#124; orientation === 'WEST' ) {                                                                                                                                        |
| 996  | if ( stacked ) { // STACKED CHILDREN                                                                                                                                                                            |
| 1002 | if ( connType === "step" &#124;&#124; connType === "straight" ) {                                                                                                                                               |
| 1005 | else if ( connType === "curve" &#124;&#124; connType === "bCurve" ) {                                                                                                                                           |
| 1009 | if ( orientation === 'NORTH' ) {                                                                                                                                                                                |
| 1012 | else if ( orientation === 'SOUTH' ) {                                                                                                                                                                           |
| 1015 | else if ( orientation === 'EAST' ) {                                                                                                                                                                            |
| 1018 | else if ( orientation === 'WEST' ) {                                                                                                                                                                            |
| 1025 | else { // NORMAL CHILDREN                                                                                                                                                                                       |
| 1026 | if ( connType === "step" ) {                                                                                                                                                                                    |
| 1029 | else if ( connType === "curve" ) {                                                                                                                                                                              |
| 1032 | else if ( connType === "bCurve" ) {                                                                                                                                                                             |
| 1035 | else if (connType === "straight" ) {                                                                                                                                                                            |
| 1051 | if ( node.leftNeighborId ) {                                                                                                                                                                                    |
| 1119 | if ( node.children ) {                                                                                                                                                                                          |
| 1121 | if ( node.childrenDropLevel &amp;&amp; node.childrenDropLevel &gt; 0 ) {                                                                                                                                        |
| 1134 | if ( stack !== null ) {                                                                                                                                                                                         |
| 1139 | if ( stack !== null ) {                                                                                                                                                                                         |
| 1141 | if ( ( i + 1 ) &lt; len ) {                                                                                                                                                                                     |
| 1146 | else {                                                                                                                                                                                                          |
| 1153 | if ( tree.CONFIG.animateOnInit ) {                                                                                                                                                                              |
| 1212 | if ( parentId &gt;= 0 ) {                                                                                                                                                                                       |
| 1216 | if ( nodeStructure.position ) {                                                                                                                                                                                 |
| 1217 | if ( nodeStructure.position === 'left' ) {                                                                                                                                                                      |
| 1220 | else if ( nodeStructure.position === 'right' ) {                                                                                                                                                                |
| 1223 | else if ( nodeStructure.position === 'center' ) {                                                                                                                                                               |
| 1226 | else {                                                                                                                                                                                                          |
| 1229 | if ( parent.children.length === 1 &amp;&amp; position &gt; 0 ) {                                                                                                                                                |
| 1232 | else {                                                                                                                                                                                                          |
| 1240 | else {                                                                                                                                                                                                          |
| 1245 | if ( stackParentId ) {                                                                                                                                                                                          |
| 1269 | if ( maxTest &gt; MinMax.max ) {                                                                                                                                                                                |
| 1272 | if ( minTest &lt; MinMax.min ) {                                                                                                                                                                                |
| 1288 | if ( nodeStructure.children[i].children ) {                                                                                                                                                                     |
| 1411 | if ( this.pseudo ) {                                                                                                                                                                                            |
| 1416 | if ( orientation === 'NORTH' &#124;&#124; orientation === 'SOUTH' ) {                                                                                                                                           |
| 1419 | else if ( orientation === 'WEST' &#124;&#124; orientation === 'EAST' ) {                                                                                                                                        |
| 1464 | if ( this.leftNeighborId ) {                                                                                                                                                                                    |
| 1473 | if ( this.rightNeighborId ) {                                                                                                                                                                                   |
| 1484 | if ( leftNeighbor &amp;&amp; leftNeighbor.parentId === this.parentId ){                                                                                                                                         |
| 1495 | if ( rightNeighbor &amp;&amp; rightNeighbor.parentId === this.parentId ) {                                                                                                                                      |
| 1516 | if ( !parent ) {                                                                                                                                                                                                |
| 1519 | if ( parent.collapsed ) {                                                                                                                                                                                       |
| 1532 | if ( level &gt;= depth ) {                                                                                                                                                                                      |
| 1535 | if ( this.childrenCount() === 0 ) {                                                                                                                                                                             |
| 1541 | if ( leftmostDescendant ) {                                                                                                                                                                                     |
| 1551 | if ( this.stackParentId ) { // return different end point if node is a stacked child                                                                                                                            |
| 1552 | if ( orient === 'NORTH' &#124;&#124; orient === 'SOUTH' ) {                                                                                                                                                     |
| 1555 | else if ( orient === 'EAST' &#124;&#124; orient === 'WEST' ) {                                                                                                                                                  |
| 1561 | if ( orient === 'NORTH' ) {                                                                                                                                                                                     |
| 1565 | else if (orient === 'SOUTH') {                                                                                                                                                                                  |
| 1569 | else if (orient === 'EAST') {                                                                                                                                                                                   |
| 1573 | else if (orient === 'WEST') {                                                                                                                                                                                   |
| 1607 | if ( hidePoint ) {                                                                                                                                                                                              |
| 1618 | if ( self.getTreeConfig().callback.onBeforeClickCollapseSwitch.apply( self, [ nodeSwitch, e ] ) === false ) {                                                                                                   |
| 1633 | if ( !this.collapsed ) {                                                                                                                                                                                        |
| 1643 | if ( this.collapsed ) {                                                                                                                                                                                         |
| 1655 | if ( !oTree.inAnimation ) {                                                                                                                                                                                     |
| 1692 | if ( collapse_to_point ) {                                                                                                                                                                                      |
| 1698 | if ( !this.positioned &#124;&#124; bCurrentState ) {                                                                                                                                                            |
| 1700 | if ( $$ ) {                                                                                                                                                                                                     |
| 1703 | else {                                                                                                                                                                                                          |
| 1709 | else {                                                                                                                                                                                                          |
| 1711 | if ( $$ ) {                                                                                                                                                                                                     |
| 1719 | else {                                                                                                                                                                                                          |
| 1730 | if ( this.lineThroughMe ) {                                                                                                                                                                                     |
| 1732 | if ( bCurrentState ) {                                                                                                                                                                                          |
| 1736 | else {                                                                                                                                                                                                          |
| 1751 | if ( oPath ) {                                                                                                                                                                                                  |
| 1777 | if ( $$ ) {                                                                                                                                                                                                     |
| 1787 | else {                                                                                                                                                                                                          |
| 1796 | if ( this.lineThroughMe ) {                                                                                                                                                                                     |
| 1809 | if ( oPath ) {                                                                                                                                                                                                  |
| 1955 | if (this.image) {                                                                                                                                                                                               |
| 1976 | if (this.text) {                                                                                                                                                                                                |
| 1979 | if (key.startsWith("data-")) {                                                                                                                                                                                  |
| 1981 | } else if(key=='soci') {                                                                                                                                                                                        |
| 1984 | if(this.text[key]=='IBER'){                                                                                                                                                                                     |
| 1987 | }else{                                                                                                                                                                                                          |
| 1993 | } else if(key=='dependientes') {                                                                                                                                                                                |
| 1997 | if(this.text[key].length&gt;0){                                                                                                                                                                                 |
| 2043 | } else {                                                                                                                                                                                                        |
| 2048 | if (this.text[key].href) {                                                                                                                                                                                      |
| 2050 | if (this.text[key].target) {                                                                                                                                                                                    |
| 2057 | if(key=='name') {                                                                                                                                                                                               |
| 2058 | if(this.text['soci']=='IBER'){                                                                                                                                                                                  |
| 2060 | }else{                                                                                                                                                                                                          |
| 2063 | }else{                                                                                                                                                                                                          |
| 2073 | if(key=='npuesto'){                                                                                                                                                                                             |
| 2079 | }else{                                                                                                                                                                                                          |
| 2101 | if (this.nodeInnerHTML.charAt(0) === "#") {                                                                                                                                                                     |
| 2103 | if (elem) {                                                                                                                                                                                                     |
| 2108 | else {                                                                                                                                                                                                          |
| 2112 | else {                                                                                                                                                                                                          |
| 2123 | if ( this.id === 0 &amp;&amp; tree.CONFIG.hideRootNode ) {                                                                                                                                                      |
| 2136 | if ( this.nodeHTMLclass &amp;&amp; !this.pseudo ) {                                                                                                                                                             |
| 2140 | if ( this.nodeHTMLid ) {                                                                                                                                                                                        |
| 2144 | if ( this.link.href ) {                                                                                                                                                                                         |
| 2149 | if ( $$ ) {                                                                                                                                                                                                     |
| 2152 | else {                                                                                                                                                                                                          |
| 2159 | if ( !this.pseudo ) {                                                                                                                                                                                           |
| 2163 | if ( this.collapsed &#124;&#124; (this.collapsable &amp;&amp; this.childrenCount() &amp;&amp; !this.stackParentId) ) {                                                                                          |
| 2190 | if ( !nodeSwitchEl ) {                                                                                                                                                                                          |
| 2196 | if ( this.collapsed ) {                                                                                                                                                                                         |
| 2326 | if (node.hasOwnProperty('container')) {                                                                                                                                                                         |
| 2331 | if (!node.hasOwnProperty('parent') &amp;&amp; ! node.hasOwnProperty('container')) {                                                                                                                             |
| 2353 | if(node.parent &amp;&amp; (node.parent._json_id === parentId)) { // skip config and root nodes                                                                                                                  |
| 2364 | if (children.length) {                                                                                                                                                                                          |
| 2373 | if (node._json_id === nodeId) {                                                                                                                                                                                 |
| 2376 | else if ( node.children ) {                                                                                                                                                                                     |
| 2380 | if ( found ) {                                                                                                                                                                                                  |
| 2401 | if ( jsonConfig instanceof Array ) {                                                                                                                                                                            |
| 2406 | if ( jQuery ) {                                                                                                                                                                                                 |
| 561  | expresión de cálculo/transformación: node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;                                                                                     |
| 573  | expresión de cálculo/transformación: var midPoint = node.childrenCenter() - node.size() / 2;                                                                                                                    |
| 576  | expresión de cálculo/transformación: node.prelim = leftSibling.prelim + leftSibling.size() + this.CONFIG.siblingSeparation;                                                                                     |
| 577  | expresión de cálculo/transformación: node.modifier = node.prelim - midPoint;                                                                                                                                    |
| 607  | expresión de cálculo/transformación: depthToStop = this.CONFIG.maxDepth - level;                                                                                                                                |
| 632  | expresión de cálculo/transformación: var totalGap = (firstChildLeftNeighbor.prelim + modifierSumLeft + firstChildLeftNeighbor.size() + this.CONFIG.subTeeSeparation) - (firstChild.prelim + modifierSumRight ); |
| 646  | expresión de cálculo/transformación: singleGap = totalGap / numSubtrees;                                                                                                                                        |
| 680  | expresión de cálculo/transformación: var xTmp = node.prelim + X,                                                                                                                                                |
| 707  | expresión de cálculo/transformación: node.Y = (yTmp + (levelHeight - nodesizeTmp)); // align "TOP"                                                                                                              |
| 711  | expresión de cálculo/transformación: node.Y = ( align === 'CENTER' ) ? (yTmp + (levelHeight - nodesizeTmp) / 2) :                                                                                               |
| 712  | expresión de cálculo/transformación: ( align === 'TOP' ) ? (yTmp + (levelHeight - nodesizeTmp)) :                                                                                                               |
| 723  | expresión de cálculo/transformación: node.Y = -node.Y - nodesizeTmp;                                                                                                                                            |
| 726  | expresión de cálculo/transformación: node.X = -node.X - nodesizeTmp;                                                                                                                                            |
| 757  | expresión de cálculo/transformación: treeWidth = treeSize.x.max - treeSize.x.min,                                                                                                                               |
| 758  | expresión de cálculo/transformación: treeHeight = treeSize.y.max - treeSize.y.min,                                                                                                                              |
| 773  | expresión de cálculo/transformación: deltaX = containerCenter.x - treeCenter.x,                                                                                                                                 |
| 774  | expresión de cálculo/transformación: deltaY = containerCenter.y - treeCenter.y,                                                                                                                                 |
| 777  | expresión de cálculo/transformación: negOffsetX = ((treeSize.x.min + deltaX) &lt;= 0) ? Math.abs(treeSize.x.min) : 0,                                                                                           |
| 778  | expresión de cálculo/transformación: negOffsetY = ((treeSize.y.min + deltaY) &lt;= 0) ? Math.abs(treeSize.y.min) : 0,                                                                                           |
| 811  | expresión de cálculo/transformación: node.nodeDOM.style.left = node.X + 'px';                                                                                                                                   |
| 812  | expresión de cálculo/transformación: node.nodeDOM.style.top = node.Y + 'px';                                                                                                                                    |
| 836  | expresión de cálculo/transformación: var viewWidth = (treeWidth &lt; this.drawArea.clientWidth) ? this.drawArea.clientWidth : treeWidth + this.CONFIG.padding*2,                                                |
| 837  | expresión de cálculo/transformación: viewHeight = (treeHeight &lt; this.drawArea.clientHeight) ? this.drawArea.clientHeight : treeHeight + this.CONFIG.padding*2;                                               |
| 980  | expresión de cálculo/transformación: P1.y = P2.y = (startPoint.y + endPoint.y) / 2;                                                                                                                             |
| 986  | expresión de cálculo/transformación: P1.x = P2.x = (startPoint.x + endPoint.x) / 2;                                                                                                                             |
| 994  | expresión de cálculo/transformación: pm = (P1.x + P2.x)/2 +','+ (P1.y + P2.y)/2, pathString, stackPoint;                                                                                                        |
| 1010 | expresión de cálculo/transformación: helpPoint = (endPoint.x - indent)+','+(endPoint.y - indent);                                                                                                               |
| 1013 | expresión de cálculo/transformación: helpPoint = (endPoint.x - indent)+','+(endPoint.y + indent);                                                                                                               |
| 1016 | expresión de cálculo/transformación: helpPoint = (endPoint.x + indent) +','+startPoint.y;                                                                                                                       |
| 1019 | expresión de cálculo/transformación: helpPoint = (endPoint.x - indent) +','+startPoint.y;                                                                                                                       |
| 1228 | expresión de cálculo/transformación: var position = parseInt( nodeStructure.position );                                                                                                                         |
| 1266 | expresión de cálculo/transformación: maxTest = node[dim] + ( ( dim === 'X' )? node.width: node.height ),                                                                                                        |
| 1350 | expresión de cálculo/transformación: this.nodeHTMLclass = (tree.CONFIG.node.HTMLclass ? tree.CONFIG.node.HTMLclass : '') + // globally defined class for the nodex                                              |
| 1540 | expresión de cálculo/transformación: var leftmostDescendant = this.childAt( i ).leftMost( level + 1, depth );                                                                                                   |
| 1562 | expresión de cálculo/transformación: point.x = (this.pseudo) ? this.X - this.Tree().CONFIG.subTeeSeparation/2 : this.X + this.width/2;                                                                          |
| 1563 | expresión de cálculo/transformación: point.y = (startPoint) ? this.Y + this.height : this.Y;                                                                                                                    |
| 1566 | expresión de cálculo/transformación: point.x = (this.pseudo) ? this.X - this.Tree().CONFIG.subTeeSeparation/2 : this.X + this.width/2;                                                                          |
| 1567 | expresión de cálculo/transformación: point.y = (startPoint) ? this.Y : this.Y + this.height;                                                                                                                    |
| 1570 | expresión de cálculo/transformación: point.x = (startPoint) ? this.X : this.X + this.width;                                                                                                                     |
| 1571 | expresión de cálculo/transformación: point.y = (this.pseudo) ? this.Y - this.Tree().CONFIG.subTeeSeparation/2 : this.Y + this.height/2;                                                                         |
| 1574 | expresión de cálculo/transformación: point.x = (startPoint) ? this.X + this.width : this.X;                                                                                                                     |
| 1575 | expresión de cálculo/transformación: point.y = (this.pseudo) ? this.Y - this.Tree().CONFIG.subTeeSeparation/2 : this.Y + this.height/2;                                                                         |
| 1704 | expresión de cálculo/transformación: this.nodeDOM.style.left = oNewState.left + 'px';                                                                                                                           |
| 1705 | expresión de cálculo/transformación: this.nodeDOM.style.top = oNewState.top + 'px';                                                                                                                             |
| 1723 | expresión de cálculo/transformación: this.nodeDOM.style.left = oNewState.left + 'px';                                                                                                                           |
| 1724 | expresión de cálculo/transformación: this.nodeDOM.style.top = oNewState.top + 'px';                                                                                                                             |
| 1790 | expresión de cálculo/transformación: this.nodeDOM.style.left = oNewState.left + 'px';                                                                                                                           |
| 1791 | expresión de cálculo/transformación: this.nodeDOM.style.top = oNewState.top + 'px';                                                                                                                             |
| 2210 | expresión de cálculo/transformación: var difobx = ($(window).width()/2) - ($(nodeEl).offset().left + ($(nodeEl).width()/2) );                                                                                   |
| 2211 | expresión de cálculo/transformación: var difoby = ($(window).height()/2) - ($(nodeEl).offset().top + ($(nodeEl).height()/2) );                                                                                  |

### Includes, navegación y dependencias

No hay includes declarados.

| L    | Destino / recurso                                             |
| ---- | ------------------------------------------------------------- |
| 1957 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado= |
| 1968 | /QOrg/img/Missing_avatar.svg                                  |
| 1985 | /QOrg/img/logo_IBER.png                                       |
| 1988 | /QOrg/img/logo_CYC.png                                        |
| 2002 | /QOrg/img/group_next_32.gif                                   |
| 2029 | /QOrg/img/ic_header_ess.gif                                   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L    | Referencia                                                    | Resolución | Ficha / candidato |
| ------ | ---- | ------------------------------------------------------------- | ---------- | ----------------- |
| CYC    | 1957 | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_min.jsp?empleado= | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `QOrg/js/Treant.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
