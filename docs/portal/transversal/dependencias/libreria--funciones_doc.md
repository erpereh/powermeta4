# funciones_doc

Identificador: `libreria/funciones_doc.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/funciones_doc.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_doc.js) | `12684965acbde9e51fed8d9c70009f6cba38776f580c5f8d859f5fe36f889298` |    194 |
| BASE / compartido | [libreria/funciones_doc.js](../../../../clon_portal/portal/libreria/funciones_doc.js)                             | `12684965acbde9e51fed8d9c70009f6cba38776f580c5f8d859f5fe36f889298` |    194 |
| IBER / compartido | [m4custom/IBER/libreria/funciones_doc.js](../../../../clon_portal/portal/m4custom/IBER/libreria/funciones_doc.js) | `12684965acbde9e51fed8d9c70009f6cba38776f580c5f8d859f5fe36f889298` |    194 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/funciones_doc.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_doc.js). Líneas físicas, contando desde 1.

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

| L   | Función              | Argumentos            |
| --- | -------------------- | --------------------- |
| 11  | ssco_set_inputs      | sargs                 |
| 26  | ssco_set_status      |                       |
| 51  | opendialogdoc        | surl, nwidth, nheight |
| 69  | class_mywindowdoc    | oparam,sidpage        |
| 97  | mywindowdoc          | sact,surl,oobj        |
| 133 | ssco_manage_document | sargs                 |
| 178 | returnvaluesdoc      | args                  |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | if (siddoc!="" &amp;&amp; siddoc!="0" &amp;&amp; siddoc!=null)                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 39  | else                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 108 | if (sact != "view")                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 113 | if (sact == "del")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 118 | if (sact == "asig")                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 142 | if (saction == "asig")                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 147 | else if (saction == "view")                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 151 | if (args.length &gt; 1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 159 | else if (saction == "del")                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 166 | if ((saction == "view") &#124;&#124; (saction == "asig"))                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 181 | if (typeof(opener.owindowdoc) == "object")                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 186 | if (args[i][1])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 58  | expresión de cálculo/transformación: this.m4prop_nleft = (screen.availWidth - this.m4prop_nwidth)/2;                                                                                                                                                                                                                                                                                                                                                                                              |
| 59  | expresión de cálculo/transformación: this.m4prop_ntop =(screen.availHeight - this.m4prop_nheight)/2;                                                                                                                                                                                                                                                                                                                                                                                              |
| 61  | expresión de cálculo/transformación: var attr = "left=" + this.m4prop_nleft + ",top=" + this.m4prop_ntop + ",resizable=" + this.m4prop_resizable + ",scrollbars=" + this.m4prop_scrollbars + ",width=" + this.m4prop_nwidth + ",height=" + this.m4prop_nheight + ",status=" + this.m4prop_status + ",directories=" + this.m4prop_directories + ",location=" + this.m4prop_location + ",menubar=" + this.m4prop_menubar + ",titlebar=" + this.m4prop_titlebar + ",toolbar=" + this.m4prop_toolbar; |
| 169 | expresión de cálculo/transformación: spage = spage + "?IDDoc=" + siddoc;                                                                                                                                                                                                                                                                                                                                                                                                                          |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                        |
| --- | -------------------------------------------------------- |
| 145 | /servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp  |
| 150 | /servlet/CheckSecurity/JSP/sse_g0/ssco_view_document.jsp |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                               | Resolución | Ficha / candidato |
| ------ | --- | -------------------------------------------------------- | ---------- | ----------------- |
| COLL   | 145 | /servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp  | ausente    | P06               |
| COLL   | 150 | /servlet/CheckSecurity/JSP/sse_g0/ssco_view_document.jsp | ausente    | P06               |
| BASE   | 145 | /servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp  | ausente    | P06               |
| BASE   | 150 | /servlet/CheckSecurity/JSP/sse_g0/ssco_view_document.jsp | ausente    | P06               |
| IBER   | 145 | /servlet/CheckSecurity/JSP/sse_g0/ssco_mod_document.jsp  | ausente    | P06               |
| IBER   | 150 | /servlet/CheckSecurity/JSP/sse_g0/ssco_view_document.jsp | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/funciones_doc.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
