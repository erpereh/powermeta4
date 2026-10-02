# test

Identificador: `mss_g4/mss_g4_list_day_type.jsp`. Perfil: **responsable**. Dominio: **tiempo**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g4/espanol/mss_g4_list_day_type.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_list_day_type.jsp) | `b7a33a093e30e7ffbd5453f1cce378277258a10b454a0e191900ebd84fc294a7` |    100 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g4/espanol/mss_g4_list_day_type.jsp](../../../../clon_portal/portal/mss_g4/espanol/mss_g4_list_day_type.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 29  | test                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable       | Expresión fuente                                                         | Resolución estática parcial                                                                    |
| --- | -------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| 35  | argIdEnterType | zobjtabla.m4paramvalor("ARG_ID_ENTER_TYPE")                              | zobjtabla.m4paramvalor("ARG_ID_ENTER_TYPE")                                                    |
| 36  | criteria       | zobjtabla.m4paramvalor("search")                                         | zobjtabla.m4paramvalor("search")                                                               |
| 44  | zsubsesion     | "SSE_GTA_PLAN"                                                           | SSE_GTA_PLAN                                                                                   |
| 45  | zmeta4object   | "SSE_GTA_PLAN"                                                           | SSE_GTA_PLAN                                                                                   |
| 46  | znodo          | "SSE_X_DAY_TYPE"                                                         | SSE_X_DAY_TYPE                                                                                 |
| 47  | zoutputdef     | zsubsesion + "!" + znodo + "[*]"                                         | SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"[*]"}                                                         |
| 48  | zmove          | znodo + ":" +znodo + "[FIRST]"                                           | SSE_X_DAY_TYPE{":"}SSE_X_DAY_TYPE{"[FIRST]"}                                                   |
| 49  | zlectura       | znodo + ":" +zsubsesion + "!" + znodo                                    | SSE_X_DAY_TYPE{":"}SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE                                             |
| 50  | zcomun         | znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."         | SSE_X_DAY_TYPE{":"}SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"[&amp;VAR.m4lix]"}{"."}                    |
| 51  | zraiz          | znodo + ":" + zsubsesion + "!" + znodo + "."                             | SSE_X_DAY_TYPE{":"}SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"."}                                        |
| 53  | loadMethod     | "LoadFilter:" + zsubsesion + "!SSE_X_DAY_TYPE.SSE_X_LOAD_DAYTYPE_FILTER" | LoadFilter:{}SSE_GTA_PLAN{"!SSE_X_DAY_TYPE.SSE_X_LOAD_DAYTYPE_FILTER"}                         |
| 56  | idDayType      | zcomun + "SCO_ID_DAY_TYPE"                                               | SSE_X_DAY_TYPE{":"}SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DAY_TYPE"} |
| 57  | nmDayType      | zcomun + "SCO_NM_DAY_TYPE"                                               | SSE_X_DAY_TYPE{":"}SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DAY_TYPE"} |
| 72  | zcount         | 0                                                                        | 0                                                                                              |
| 73  | zcounti        | 0                                                                        | 0                                                                                              |
| 74  | zcountv        | "0"                                                                      | 0                                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                   |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------- |
| 62  | m4:startpage | m4task=SSE_GTA_PLAN                                                                                                  |
| 62  | m4:beginjob  |                                                                                                                      |
| 63  | m4:datadef   | m4o=SSE_GTA_PLAN; m4name=SSE_GTA_PLAN                                                                                |
| 64  | m4:exec      | m4method=LoadFilter:{}SSE_GTA_PLAN{"!SSE_X_DAY_TYPE.SSE_X_LOAD_DAYTYPE_FILTER"}                                      |
| 65  | m4:param     | name=ARG_ID_ENTER_TYPE; value=zobjtabla.m4paramvalor("ARG_ID_ENTER_TYPE")                                            |
| 66  | m4:param     | name=ARG_CRITERIA; value=zobjtabla.m4paramvalor("search")                                                            |
| 68  | m4:outputdef | m4alias=SSE_X_DAY_TYPE                                                                                               |
| 68  | m4:param     | name=m4name0; value=SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"[*]"}                                                           |
| 69  | m4:endjob    |                                                                                                                      |
| 70  | m4:move      |                                                                                                                      |
| 70  | m4:param     | name=SSE_GTA_PLAN; value=SSE_X_DAY_TYPE{":"}SSE_X_DAY_TYPE{"[FIRST]"}                                                |
| 86  | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                 |
| 87  | m4:item      | m4name=SSE_X_DAY_TYPE{":"}SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_DAY_TYPE"}; htmlsafe=true |
| 87  | m4:item      | m4name=SSE_X_DAY_TYPE{":"}SSE_GTA_PLAN{"!"}SSE_X_DAY_TYPE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_DAY_TYPE"}; htmlsafe=true |
| 91  | m4:endpage   |                                                                                                                      |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 77  | getCount         | znodo,zsubsesion,znodo |
| 78  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 40  | if ((argIdEnterType==null)&#124;&#124;(argIdEnterType.equals(""))){argIdEnterType="";}                                             |
| 41  | if ((criteria==null)&#124;&#124;(criteria.equals(""))){criteria="";}                                                               |
| 47  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                         |
| 48  | expresión de cálculo/transformación: String zmove = znodo + ":" +znodo + "[FIRST]";                                                |
| 49  | expresión de cálculo/transformación: String zlectura = znodo + ":" +zsubsesion + "!" + znodo;                                      |
| 50  | expresión de cálculo/transformación: String zcomun = znodo + ":" +zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";             |
| 51  | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                  |
| 53  | expresión de cálculo/transformación: String loadMethod = "LoadFilter:" + zsubsesion + "!SSE_X_DAY_TYPE.SSE_X_LOAD_DAYTYPE_FILTER"; |
| 56  | expresión de cálculo/transformación: String idDayType = zcomun + "SCO_ID_DAY_TYPE";                                                |
| 57  | expresión de cálculo/transformación: String nmDayType = zcomun + "SCO_NM_DAY_TYPE";                                                |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                     |
| --- | ------------------------------------- |
| 8   | /css/Autocompleter.css                |
| 9   | /libreria/mootools-1.2.js             |
| 10  | /javascripts/Autocompleter.js         |
| 11  | /javascripts/Autocompleter.Request.js |
| 12  | /javascripts/Autocompleter.Local.js   |
| 13  | /javascripts/Observer.js              |
| 25  | /css/estilo_mss.css                   |
| 26  | /libreria/funciones_sse.js            |
| 27  | /libreria/clase_val_entradas.js       |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                            | Resolución | Ficha / candidato                                                                                            |
| ------ | --- | ------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------ |
| BASE   | 9   | /libreria/mootools-1.2.js             | contextual | &#96;libreria/mootools-1.2.js&#96;                                                                           |
| BASE   | 10  | /javascripts/Autocompleter.js         | contextual | [javascripts/Autocompleter.js](../../transversal/dependencias/javascripts--autocompleter.md)                 |
| BASE   | 11  | /javascripts/Autocompleter.Request.js | contextual | [javascripts/Autocompleter.Request.js](../../transversal/dependencias/javascripts--autocompleter-request.md) |
| BASE   | 12  | /javascripts/Autocompleter.Local.js   | contextual | [javascripts/Autocompleter.Local.js](../../transversal/dependencias/javascripts--autocompleter-local.md)     |
| BASE   | 13  | /javascripts/Observer.js              | contextual | [javascripts/Observer.js](../../transversal/dependencias/javascripts--observer.md)                           |
| BASE   | 26  | /libreria/funciones_sse.js            | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                       |
| BASE   | 27  | /libreria/clase_val_entradas.js       | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g4/mss_g4_list_day_type.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
