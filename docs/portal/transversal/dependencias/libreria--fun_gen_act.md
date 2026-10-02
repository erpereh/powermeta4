# fun_gen_act

Identificador: `libreria/fun_gen_act.js`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones locales de este recurso auxiliar en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [libreria/fun_gen_act.js](../../../../clon_portal/portal/libreria/fun_gen_act.js) | `191270b3152ab3c91b916f8a939108679969aed3e90f13b98377076ff799ac80` |    145 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [libreria/fun_gen_act.js](../../../../clon_portal/portal/libreria/fun_gen_act.js). Líneas físicas, contando desde 1.

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

| L   | Función    | Argumentos                               |
| --- | ---------- | ---------------------------------------- |
| 2   | m4tit      |                                          |
| 17  | m4del      |                                          |
| 23  | m4act      |                                          |
| 32  | m4limp     |                                          |
| 66  | m4cambiopk | varcam                                   |
| 92  | m4change   | sidform,sidobjeto,satributo,vvalor,smodo |
| 135 | m4foc      |                                          |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 4   | if (acc=="UPD"){                                                                                                                            |
| 8   | }else{                                                                                                                                      |
| 12  | if ( ocell.hasChildNodes() == true) { ocell.removeChild(ocell.firstChild);}                                                                 |
| 43  | if (sresult == null &#124;&#124; sresult ==""){                                                                                             |
| 44  | if (celementos[ni].tagName == "INPUT"){                                                                                                     |
| 46  | if ((stype.toUpperCase() == "TEXT") &#124;&#124; (stype.toUpperCase() == "PASSWORD")){                                                      |
| 49  | if (stype.toUpperCase() == "CHECKBOX"){                                                                                                     |
| 53  | else if (celementos[ni].tagName == "SELECT"){                                                                                               |
| 56  | else if (celementos[ni].tagName == "TEXTAREA"){                                                                                             |
| 68  | if (varcam=="0"){cam="i_read_only"}else{cam="i_normal"}                                                                                     |
| 72  | if (sidelement1=="X"){                                                                                                                      |
| 73  | if (varcam=="0"){                                                                                                                           |
| 75  | sReadOnly = m4change('NombreFormulario',sidelement,'readOnly','','get'); if (sDisabled == false &amp;&amp; sReadOnly == false){             |
| 79  | }else{                                                                                                                                      |
| 82  | if ( sReadOnly == true){                                                                                                                    |
| 95  | switch(smodo){                                                                                                                              |
| 96  | case "set" :                                                                                                                                |
| 99  | if ((oobjeto.length &gt;0) &amp;&amp; ( oobjeto[0].tagName == "INPUT" &amp;&amp; oobjeto[0].getAttribute("type").toUpperCase() =="RADIO")){ |
| 104 | }else{                                                                                                                                      |
| 111 | case "get" :                                                                                                                                |
| 113 | if (oobjeto.length &gt;0){ // Si es radiobutton tomar el activo                                                                             |
| 114 | if ((oobjeto[0].tagName == "INPUT")&amp;&amp; (oobjeto[0].getAttribute("type").toUpperCase() == "RADIO")){                                  |
| 116 | for (i=0; i&lt;oobjeto.length; i++) if (oobjeto[i].checked == true){                                                                        |
| 140 | if (sindex == 1){                                                                                                                           |

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

- Confirmar exposición y permisos de `libreria/fun_gen_act.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
