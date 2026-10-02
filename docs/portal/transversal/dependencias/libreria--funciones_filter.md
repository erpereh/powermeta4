# funciones_filter

Identificador: `libreria/funciones_filter.js`. Perfil: **transversal**. Dominio: **dependencias**.

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

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / compartido | [m4custom/COLL/libreria/funciones_filter.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_filter.js) | `16e917120fde2261bbdd0e5f24779426a9d80d52a10ad4a75acf2045c286b4e4` |    107 |
| BASE / compartido | [libreria/funciones_filter.js](../../../../clon_portal/portal/libreria/funciones_filter.js)                             | `16e917120fde2261bbdd0e5f24779426a9d80d52a10ad4a75acf2045c286b4e4` |    107 |
| IBER / compartido | [m4custom/IBER/libreria/funciones_filter.js](../../../../clon_portal/portal/m4custom/IBER/libreria/funciones_filter.js) | `16e917120fde2261bbdd0e5f24779426a9d80d52a10ad4a75acf2045c286b4e4` |    107 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL compartida, BASE compartida, IBER compartida

Fuente de los localizadores `L`: [m4custom/COLL/libreria/funciones_filter.js](../../../../clon_portal/portal/m4custom/COLL/libreria/funciones_filter.js). Líneas físicas, contando desde 1.

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

| L   | Función                  | Argumentos             |
| --- | ------------------------ | ---------------------- |
| 1   | opendialog               | surl, nwidth, nheight  |
| 15  | class_dialogwin          | aobjeto,sidpage        |
| 35  | miwindow                 | sidpag,spag,ar,sidform |
| 50  | filtro                   | spage                  |
| 63  | sse_filtro               | spage                  |
| 76  | ssco_filter_responsibles | spage                  |
| 90  | returnvalues             | ar                     |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 40  | if (typeof(miwindow.arguments[4]) == "undefined"){                                                                                                                                                                                                                                                |
| 42  | }else{ var nx = miwindow.arguments[4];}                                                                                                                                                                                                                                                           |
| 43  | if (typeof(miwindow.arguments[5]) == "undefined"){                                                                                                                                                                                                                                                |
| 45  | }else{ var ny = miwindow.arguments[5];}                                                                                                                                                                                                                                                           |
| 91  | if (typeof(opener.oventana) == "object"){                                                                                                                                                                                                                                                         |
| 93  | if (typeof(ar[i]) != "undefined"){                                                                                                                                                                                                                                                                |
| 97  | if (typeof(opener.oventana) == "object"){                                                                                                                                                                                                                                                         |
| 98  | if (opener.oventana.m4prop_afterclosewindowmet != ""){                                                                                                                                                                                                                                            |
| 104 | if (typeof(opener.oventana) == "object"){                                                                                                                                                                                                                                                         |
| 7   | expresión de cálculo/transformación: this.m4prop_ntop =(screen.availHeight - this.m4prop_nheight)/2;                                                                                                                                                                                              |
| 8   | expresión de cálculo/transformación: var attr = "left=" + this.m4prop_nleft + ",top=" + this.m4prop_ntop + ",resizable=" + this.m4prop_resizable + ",scrollbars=" + this.m4prop_scrollbars + ",width=" + this.m4prop_nwidth + ",height=" + this.m4prop_nheight + ",status=" + this.m4prop_status; |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                    |
| --- | -------------------------------------------------------------------- |
| 53  | /servlet/CheckSecurity/JSP/mss_generico/shco_mt_list_person.jsp?zcss |
| 65  | /servlet/CheckSecurity/JSP/sse_g0/sse_hr_period.jsp                  |
| 78  | /servlet/CheckSecurity/JSP/sse_g0/ssco_list_responsibles.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                           | Resolución | Ficha / candidato                                                                                                                                                                                            |
| ------ | --- | -------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| COLL   | 53  | /servlet/CheckSecurity/JSP/mss_generico/shco_mt_list_person.jsp?zcss | contextual | [mss_generico/shco_mt_list_person.jsp](../../responsable/tareas/mss_generico--shco_mt_list_person.md); [mss_generico/shco_mt_list_person.jsp](../../responsable/tareas/mss_generico--shco_mt_list_person.md) |
| COLL   | 65  | /servlet/CheckSecurity/JSP/sse_g0/sse_hr_period.jsp                  | contextual | [sse_g0/sse_hr_period.jsp](../../empleado/organizacion/sse_g0--sse_hr_period.md)                                                                                                                             |
| COLL   | 78  | /servlet/CheckSecurity/JSP/sse_g0/ssco_list_responsibles.jsp         | contextual | [sse_g0/ssco_list_responsibles.jsp](../../empleado/organizacion/sse_g0--ssco_list_responsibles.md)                                                                                                           |
| BASE   | 53  | /servlet/CheckSecurity/JSP/mss_generico/shco_mt_list_person.jsp?zcss | contextual | [mss_generico/shco_mt_list_person.jsp](../../responsable/tareas/mss_generico--shco_mt_list_person.md)                                                                                                        |
| BASE   | 65  | /servlet/CheckSecurity/JSP/sse_g0/sse_hr_period.jsp                  | contextual | [sse_g0/sse_hr_period.jsp](../../empleado/organizacion/sse_g0--sse_hr_period.md)                                                                                                                             |
| BASE   | 78  | /servlet/CheckSecurity/JSP/sse_g0/ssco_list_responsibles.jsp         | contextual | [sse_g0/ssco_list_responsibles.jsp](../../empleado/organizacion/sse_g0--ssco_list_responsibles.md)                                                                                                           |
| IBER   | 53  | /servlet/CheckSecurity/JSP/mss_generico/shco_mt_list_person.jsp?zcss | contextual | [mss_generico/shco_mt_list_person.jsp](../../responsable/tareas/mss_generico--shco_mt_list_person.md); [mss_generico/shco_mt_list_person.jsp](../../responsable/tareas/mss_generico--shco_mt_list_person.md) |
| IBER   | 65  | /servlet/CheckSecurity/JSP/sse_g0/sse_hr_period.jsp                  | contextual | [sse_g0/sse_hr_period.jsp](../../empleado/organizacion/sse_g0--sse_hr_period.md)                                                                                                                             |
| IBER   | 78  | /servlet/CheckSecurity/JSP/sse_g0/ssco_list_responsibles.jsp         | contextual | [sse_g0/ssco_list_responsibles.jsp](../../empleado/organizacion/sse_g0--ssco_list_responsibles.md)                                                                                                           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `libreria/funciones_filter.js` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
