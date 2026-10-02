# smco_iv_info_usuario

Identificador: `mss_g3/smco_iv_info_usuario.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave            | Texto                                   | Ámbito | Diccionario                                                                         |
| ---------------- | --------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.LblClose  | Cerrar                                  | BASE   | [translations/smco_iv_es.properties:L69](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblGrabar | Los datos se han guardado correctamente | BASE   | [translations/smco_iv_es.properties:L71](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblInfo   | Información                             | BASE   | [translations/smco_iv_es.properties:L68](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblTools  | Herramientas                            | BASE   | [translations/smco_iv_es.properties:L70](../../referencias/literales/smco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_iv_info_usuario.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_iv_info_usuario.jsp) | `da08e77f00d751322fe5ad458caa00d0a65e53fe586b6eb7647c3a0af887b981` |      1 |
| BASE / compartido | [mss_g3/smco_iv_info_usuario.jsp](../../../../clon_portal/portal/mss_g3/smco_iv_info_usuario.jsp)                 | `6d6a84ca2f99ce8359a95716f13960f12069a150338ded1d5f7a48e9a3e2d1f6` |     41 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_iv_info_usuario.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_iv_info_usuario.jsp). Líneas físicas, contando desde 1.

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

No declara funciones JavaScript con nombre en este archivo.

No se encontraron ramas o validadores inline; revisar los scripts enlazados y la lógica Meta4.

### Includes, navegación y dependencias

| L   | Include                     |
| --- | --------------------------- |
| 1   | ../smco_iv_info_usuario.jsp |

| L   | Destino / recurso           |
| --- | --------------------------- |
| 1   | ../smco_iv_info_usuario.jsp |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [mss_g3/smco_iv_info_usuario.jsp](../../../../clon_portal/portal/mss_g3/smco_iv_info_usuario.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                            |
| --- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 32  | a       | href=; onclick=window.close();                                                                                                                                       |
| 32  | img     | title=JSP_EXPR_tranivMSS.getProperty(; alt=JSP_EXPR_tranivMSS.getProperty(; src=/iconos/lu_close_1_24.gif; onmouseover= m4sombra(this); onmouseout=m4oscuridad(this) |
| 35  | img     | alt=JSP_EXPR_tranivMSS.getProperty(; src=/iconos/noname_configuracion_98_125.gif; width=98; height=125; onmouseover=m4luznoname(this); onmouseout=m4oscuridad(this)  |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable     | Expresión fuente                 | Resolución estática parcial              |
| --- | ------------ | -------------------------------- | ---------------------------------------- |
| 17  | zsubsesion   | "SMCO_IV_INTERV_RES"             | SMCO_IV_INTERV_RES                       |
| 18  | zmeta4object | zsubsesion                       | SMCO_IV_INTERV_RES                       |
| 19  | znodo        | "SSE_MT_GEN"                     | SSE_MT_GEN                               |
| 20  | zoutputdef   | zsubsesion + "!" + znodo + "[*]" | SMCO_IV_INTERV_RES{"!"}SSE_MT_GEN{"[*]"} |
| 21  | zraiz        | zsubsesion + "!" + znodo + "."   | SMCO_IV_INTERV_RES{"!"}SSE_MT_GEN{"."}   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                           |
| --- | ------------ | ------------------------------------------------------------ |
| 23  | m4:startpage | m4task=SMCO_IV_INTERV_RES                                    |
| 23  | m4:beginjob  |                                                              |
| 24  | m4:datadef   | m4o=SMCO_IV_INTERV_RES; m4name=SMCO_IV_INTERV_RES            |
| 25  | m4:outputdef | m4alias=SSE_MT_GEN                                           |
| 25  | m4:param     | name=m4name0; value=SMCO_IV_INTERV_RES{"!"}SSE_MT_GEN{"[*]"} |
| 26  | m4:endjob    |                                                              |
| 40  | m4:endpage   |                                                              |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                       |
| --- | ------------------------------------------------------------------------------------------ |
| 20  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]"; |
| 21  | expresión de cálculo/transformación: String zraiz = zsubsesion + "!" + znodo + ".";        |

### Includes, navegación y dependencias

| L   | Include                                   |
| --- | ----------------------------------------- |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../sse_generico/sse_generico_lang.jsp     |
| 9   | /mss_g3/smco_iv_trans.jsp                 |

| L   | Destino / recurso                         |
| --- | ----------------------------------------- |
| 4   | /css/estilo_mss.css                       |
| 5   | /libreria/funciones_sse.js                |
| 32  | /iconos/lu_close_1_24.gif                 |
| 35  | /iconos/noname_configuracion_98_125.gif   |
| 1   | ../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../sse_generico/sse_generico_lang.jsp     |
| 9   | /mss_g3/smco_iv_trans.jsp                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ----------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../smco_iv_info_usuario.jsp               | física     | [mss_g3/smco_iv_info_usuario.jsp](mss_g3--smco_iv_info_usuario.md)                                            |
| BASE   | 1   | ../smco_iv_info_usuario.jsp               | física     | [mss_g3/smco_iv_info_usuario.jsp](mss_g3--smco_iv_info_usuario.md)                                            |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| BASE   | 9   | /mss_g3/smco_iv_trans.jsp                 | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                          |
| BASE   | 5   | /libreria/funciones_sse.js                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../sse_generico/sse_generico_lang.jsp     | física     | [sse_generico/sse_generico_lang.jsp](../../transversal/navegacion/sse_generico--sse_generico_lang.md)         |
| BASE   | 9   | /mss_g3/smco_iv_trans.jsp                 | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_iv_info_usuario.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
