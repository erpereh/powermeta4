# menu_sse

Identificador: `libreria/menu_sse.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/menu_sse.js](../../../../clon_portal/portal/m4custom/COLL/libreria/menu_sse.js) | `6c67858047967970600882e4cddb11d060dcf6ac574a9d40f71ca641e5e7bd1c` |    132 |
| BASE / compartido | [libreria/menu_sse.js](../../../../clon_portal/portal/libreria/menu_sse.js)                             | `6c67858047967970600882e4cddb11d060dcf6ac574a9d40f71ca641e5e7bd1c` |    132 |
| IBER / compartido | [m4custom/IBER/libreria/menu_sse.js](../../../../clon_portal/portal/m4custom/IBER/libreria/menu_sse.js) | `6c67858047967970600882e4cddb11d060dcf6ac574a9d40f71ca641e5e7bd1c` |    132 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/menu_sse.js](../../../../clon_portal/portal/m4custom/COLL/libreria/menu_sse.js). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 106 | " +this.nombres[i]+ "    |

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
| 53  | grupo       | nombrecapa,anchuraminima,posicionx,posiciony,links,nombres |
| 74  | generarcapa |                                                            |
| 117 | ocultardiv  | capa                                                       |
| 121 | mostrardiv  | capa                                                       |
| 125 | resaltado   | obj                                                        |
| 128 | normal      | obj                                                        |
| 131 | ir          | direccion                                                  |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 77  | if (this.nombres.length &gt; 1){                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 80  | if (this.nombres[j].length &gt;= longmax){                                                                                                                                                                                                                                                                                                                                                                                                          |
| 85  | if (longitudcapa &lt; this.anchuraminima){                                                                                                                                                                                                                                                                                                                                                                                                          |
| 90  | if ((this.posicionx + longitudcapa) &gt; (screen.availWidth*0.96)){                                                                                                                                                                                                                                                                                                                                                                                 |
| 105 | if (this.links[i] !="" &amp;&amp; this.nombres[i]!=""){                                                                                                                                                                                                                                                                                                                                                                                             |
| 107 | else{                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 91  | expresión de cálculo/transformación: longitudcapa = screen.availWidth*0.96 - this.posicionx; }                                                                                                                                                                                                                                                                                                                                                      |
| 95  | expresión de cálculo/transformación: var strinicapa = "&lt;div id='" + this.nombrecapa + "' name='" + this.nombrecapa + "' style='position:absolute; left:" + this.posicionx + "px; top:" + this.posiciony + "px; width:" + longitudcapa + "px; visibility: hidden; z-index: 4;' onmouseout=\"" + this.nombrecapa + ".ocultardiv('" + this.nombrecapa + "');\" onmouseover=\"" + this.nombrecapa + ".mostrardiv('" + this.nombrecapa + "');\"&gt;"; |
| 106 | expresión de cálculo/transformación: strcuerpo= strcuerpo + "&lt;tr&gt;&lt;td class='fuentemenu' style='cursor: hand;' width='" + longitudcapa + "' align='left' onmouseover='"+ this.nombrecapa + ".resaltado(this);' onmouseout='"+ this.nombrecapa + ".normal(this);' onclick=\"" + this.nombrecapa + ".ir('" + this.links[i] + "');\"&gt;  " +this.nombres[i]+ "&lt;/td&gt;&lt;/tr&gt;";}                                                       |
| 108 | expresión de cálculo/transformación: strcuerpo = strcuerpo + "&lt;tr&gt;&lt;td&gt;&lt;hr noshade color='#6AA4DF' size=\"1\"&gt;&lt;/td&gt;&lt;/tr&gt;"; } }                                                                                                                                                                                                                                                                                         |
| 110 | expresión de cálculo/transformación: strcapa = strinicapa + strinitabla + strcuerpo + strfintabla + strfincapa;                                                                                                                                                                                                                                                                                                                                     |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                              |
| --- | -------------------------------------------------------------- |
| 7   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11      |
| 8   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11  |
| 9   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11 |
| 10  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11 |
| 11  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11 |
| 13  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11      |
| 14  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11  |
| 15  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11 |
| 16  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11 |
| 20  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21      |
| 22  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21      |
| 24  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21      |
| 28  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31      |
| 30  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31      |
| 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31      |
| 33  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31      |
| 34  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31      |
| 35  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31      |
| 37  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      |
| 38  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31      |
| 39  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31      |
| 41  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31      |
| 45  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41      |
| 46  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41      |
| 47  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                     | Resolución | Ficha / candidato |
| ------ | --- | -------------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 7   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11      | ausente    | P06               |
| COLL   | 8   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11  | ausente    | P06               |
| COLL   | 9   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11 | ausente    | P06               |
| COLL   | 10  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11 | ausente    | P06               |
| COLL   | 11  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11 | ausente    | P06               |
| COLL   | 13  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11      | ausente    | P06               |
| COLL   | 14  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11  | ausente    | P06               |
| COLL   | 15  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11 | ausente    | P06               |
| COLL   | 16  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11 | ausente    | P06               |
| COLL   | 20  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21      | ausente    | P06               |
| COLL   | 22  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21      | ausente    | P06               |
| COLL   | 24  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21      | ausente    | P06               |
| COLL   | 28  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31      | ausente    | P06               |
| COLL   | 30  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31      | ausente    | P06               |
| COLL   | 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31      | ausente    | P06               |
| COLL   | 33  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31      | ausente    | P06               |
| COLL   | 34  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31      | ausente    | P06               |
| COLL   | 35  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31      | ausente    | P06               |
| COLL   | 37  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      | ausente    | P06               |
| COLL   | 38  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31      | ausente    | P06               |
| COLL   | 39  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31      | ausente    | P06               |
| COLL   | 41  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31      | ausente    | P06               |
| COLL   | 45  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41      | ausente    | P06               |
| COLL   | 46  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41      | ausente    | P06               |
| COLL   | 47  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41      | ausente    | P06               |
| BASE   | 7   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11      | ausente    | P06               |
| BASE   | 8   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11  | ausente    | P06               |
| BASE   | 9   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11 | ausente    | P06               |
| BASE   | 10  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11 | ausente    | P06               |
| BASE   | 11  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11 | ausente    | P06               |
| BASE   | 13  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11      | ausente    | P06               |
| BASE   | 14  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11  | ausente    | P06               |
| BASE   | 15  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11 | ausente    | P06               |
| BASE   | 16  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11 | ausente    | P06               |
| BASE   | 20  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21      | ausente    | P06               |
| BASE   | 22  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21      | ausente    | P06               |
| BASE   | 24  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21      | ausente    | P06               |
| BASE   | 28  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31      | ausente    | P06               |
| BASE   | 30  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31      | ausente    | P06               |
| BASE   | 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31      | ausente    | P06               |
| BASE   | 33  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31      | ausente    | P06               |
| BASE   | 34  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31      | ausente    | P06               |
| BASE   | 35  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31      | ausente    | P06               |
| BASE   | 37  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      | ausente    | P06               |
| BASE   | 38  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31      | ausente    | P06               |
| BASE   | 39  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31      | ausente    | P06               |
| BASE   | 41  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31      | ausente    | P06               |
| BASE   | 45  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41      | ausente    | P06               |
| BASE   | 46  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41      | ausente    | P06               |
| BASE   | 47  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41      | ausente    | P06               |
| IBER   | 7   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1.jsp?estado=11      | ausente    | P06               |
| IBER   | 8   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod.jsp?estado=11  | ausente    | P06               |
| IBER   | 9   | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod3.jsp?estado=11 | ausente    | P06               |
| IBER   | 10  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod2.jsp?estado=11 | ausente    | P06               |
| IBER   | 11  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p1_mod4.jsp?estado=11 | ausente    | P06               |
| IBER   | 13  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3.jsp?estado=11      | ausente    | P06               |
| IBER   | 14  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod.jsp?estado=11  | ausente    | P06               |
| IBER   | 15  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod2.jsp?estado=11 | ausente    | P06               |
| IBER   | 16  | /servlet/CheckSecurity/JSP/sse_g1/sse_g1_p3_mod3.jsp?estado=11 | ausente    | P06               |
| IBER   | 20  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p1.jsp?estado=21      | ausente    | P06               |
| IBER   | 22  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p2.jsp?estado=21      | ausente    | P06               |
| IBER   | 24  | /servlet/CheckSecurity/JSP/sse_g2/sse_g2_p4.jsp?estado=21      | ausente    | P06               |
| IBER   | 28  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p0.jsp?estado=31      | ausente    | P06               |
| IBER   | 30  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p2.jsp?estado=31      | ausente    | P06               |
| IBER   | 32  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p1.jsp?estado=31      | ausente    | P06               |
| IBER   | 33  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4.jsp?estado=31      | ausente    | P06               |
| IBER   | 34  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p5.jsp?estado=31      | ausente    | P06               |
| IBER   | 35  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p6.jsp?estado=31      | ausente    | P06               |
| IBER   | 37  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p3.jsp?estado=31      | ausente    | P06               |
| IBER   | 38  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p7.jsp?estado=31      | ausente    | P06               |
| IBER   | 39  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31      | ausente    | P06               |
| IBER   | 41  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p9.jsp?estado=31      | ausente    | P06               |
| IBER   | 45  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p2.jsp?estado=41      | ausente    | P06               |
| IBER   | 46  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p3.jsp?estado=41      | ausente    | P06               |
| IBER   | 47  | /servlet/CheckSecurity/JSP/sse_g4/sse_g4_p1.jsp?estado=41      | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/menu_sse.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
