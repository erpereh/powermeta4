# sgco_job_map

Identificador: `sse_g0/sgco_job_map.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave           | Texto           | Ámbito | Diccionario                                                                          |
| --------------- | --------------- | ------ | ------------------------------------------------------------------------------------ |
| sgco_gen.JobMap | Mapa de puestos | BASE   | [translations/sgco_gen_es.properties:L4](../../referencias/literales/sgco_gen_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/sgco_job_map.jsp](../../../../clon_portal/portal/sse_g0/espanol/sgco_job_map.jsp) | `56ad29e277daf1eacb11e6510d300f46c590adbc5a1520a047d42c06fe7f05dd` |     29 |
| BASE / compartido | [sse_g0/sgco_job_map.jsp](../../../../clon_portal/portal/sse_g0/sgco_job_map.jsp)                 | `4c994977289772b9a33285af76da16767d43bedc27807edfe52fd256dd4cdbb8` |    106 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/sgco_job_map.jsp](../../../../clon_portal/portal/sse_g0/espanol/sgco_job_map.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 14  | estado          | getParameter(request,"estado") |

| L   | Variable | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | -------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 14  | estado   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag        | Contrato declarado |
| --- | ---------- | ------------------ |
| 25  | m4:endpage |                    |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                             |
| --- | ---------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="31";} |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g0/sgco_gen_trans.jsp                   |
| 21  | ../sgco_job_map.jsp                          |

| L   | Destino / recurso                            |
| --- | -------------------------------------------- |
| 11  | /css/estilo_sse.css                          |
| 12  | /libreria/funciones_sse.js                   |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g0/sgco_gen_trans.jsp                   |
| 21  | ../sgco_job_map.jsp                          |

## Versión 2: BASE compartida

Fuente de los localizadores `L`: [sse_g0/sgco_job_map.jsp](../../../../clon_portal/portal/sse_g0/sgco_job_map.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 61  | [valor dinámico] :       |
| 70  | :                        |
| 79  | :                        |
| 89  | &#124;                   |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 2   | id              | getParameter(request,"id")     |
| 3   | id_job          | getParameter(request,"id_job") |

| L   | Variable      | Expresión fuente                                                   | Resolución estática parcial                                        |
| --- | ------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| 2   | zidhr_param   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id")     |
| 3   | zid_job_param | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job") |
| 6   | zsubsesion    | "SGCO_JOB_MAP"                                                     | SGCO_JOB_MAP                                                       |
| 7   | zmeta4object  | "SGCO_JOB_MAP"                                                     | SGCO_JOB_MAP                                                       |
| 8   | znodo         | "SGCO_JOB_MAP"                                                     | SGCO_JOB_MAP                                                       |
| 9   | znodo1        | "SGCO_CR_STEPS_TREE"                                               | SGCO_CR_STEPS_TREE                                                 |
| 10  | zoutputdef    | zsubsesion + "!" + znodo + "[*]"                                   | SGCO_JOB_MAP{"!"}SGCO_JOB_MAP{"[*]"}                               |
| 11  | zoutputdef1   | zsubsesion + "!" + znodo1 + "[*]"                                  | SGCO_JOB_MAP{"!"}SGCO_CR_STEPS_TREE{"[*]"}                         |
| 12  | znamenodo     | znodo + ":" + zsubsesion + "!" + znodo                             | SGCO_JOB_MAP{":"}SGCO_JOB_MAP{"!"}SGCO_JOB_MAP                     |
| 13  | znamenodo1    | znodo1 + ":" + zsubsesion + "!" + znodo1                           | SGCO_CR_STEPS_TREE{":"}SGCO_JOB_MAP{"!"}SGCO_CR_STEPS_TREE         |
| 14  | zmove1        | znodo1 + ":" + znodo1 + "[FIRST]"                                  | SGCO_CR_STEPS_TREE{":"}SGCO_CR_STEPS_TREE{"[FIRST]"}               |
| 15  | zmetodocarga  | zsubsesion + "!SGCO_JOB_MAP.SGCO_LOAD"                             | SGCO_JOB_MAP{"!SGCO_JOB_MAP.SGCO_LOAD"}                            |
| 16  | scount        | ""                                                                 |                                                                    |
| 17  | znodoaux      | ""                                                                 |                                                                    |
| 18  | zmoveaux      | ""                                                                 |                                                                    |
| 19  | zCountaux     | 0                                                                  | 0                                                                  |
| 34  | iRutJob       | 0                                                                  | 0                                                                  |
| 35  | zmoveso       | znodo + ":" + znodo                                                | SGCO_JOB_MAP{":"}SGCO_JOB_MAP                                      |
| 36  | zalias1       | ""                                                                 |                                                                    |
| 37  | hb            | 0                                                                  | 0                                                                  |
| 53  | zcounti       | 0                                                                  | 0                                                                  |
| 58  | zcountv       | String.valueOf(zcounti)                                            | String.valueOf(zcounti)                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                             |
| --- | ------------- | ---------------------------------------------------------------------------------------------- |
| 21  | m4:startpage  | m4task=SGCO_JOB_MAP                                                                            |
| 22  | m4:beginjob   |                                                                                                |
| 23  | m4:datadef    | m4o=SGCO_JOB_MAP; m4name=SGCO_JOB_MAP                                                          |
| 24  | m4:exec       | m4method=SGCO_JOB_MAP{"!SGCO_JOB_MAP.SGCO_LOAD"}                                               |
| 25  | m4:param      | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id")           |
| 26  | m4:param      | name=ARG_ID_JOB_CODE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_job") |
| 28  | m4:exec       | node=SGCO_JOB_MAP; alias=countrut; method=COUNT; m4object=SGCO_JOB_MAP                         |
| 29  | m4:endjob     |                                                                                                |
| 30  | m4:beginjob   |                                                                                                |
| 31  | m4:outputexec | var=; alias=countrut                                                                           |
| 32  | m4:outputdef  | m4alias=SGCO_JOB_MAP                                                                           |
| 32  | m4:param      | name=m4name0; value=SGCO_JOB_MAP{"!"}SGCO_JOB_MAP{"[*]"}                                       |
| 44  | m4:move       |                                                                                                |
| 44  | m4:param      | name=SGCO_JOB_MAP; value=SGCO_JOB_MAP{":"}SGCO_JOB_MAP                                         |
| 45  | m4:outputdef  | m4alias=                                                                                       |
| 45  | m4:param      | name=m4name0; value=SGCO_JOB_MAP!SGCO_CR_STEPS_TREE[*]                                         |
| 51  | m4:endjob     |                                                                                                |
| 61  | m4:item       | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=SGCO_JOB_MAP                                     |
| 62  | m4:dataloop   | outputdef=SGCO_JOB_MAP                                                                         |
| 63  | m4:current    | m4varname=current; outputdef=SGCO_JOB_MAP                                                      |
| 68  | m4:move       |                                                                                                |
| 68  | m4:param      | name=SGCO_JOB_MAP; value=                                                                      |
| 70  | m4:label      | item=SCO_NM_CR_PATH; htmlsafe=true; outputdef=SGCO_JOB_MAP                                     |
| 70  | m4:item       | item=SCO_NM_CR_PATH; htmlsafe=true; outputdef=SGCO_JOB_MAP                                     |
| 73  | m4:dataloop   | outputdef=                                                                                     |
| 74  | m4:current    | m4varname=currentaux; outputdef=                                                               |
| 75  | m4:item       | m4varname=zSCO_TIME; item=SCO_TIME; htmlsafe=true; outputdef=                                  |
| 78  | m4:item       | item=STD_N_JOB_CODE; htmlsafe=true; outputdef=                                                 |
| 83  | m4:label      | item=SCO_TIME; htmlsafe=true; outputdef=                                                       |
| 83  | m4:item       | item=SCO_TIME; htmlsafe=true; outputdef=                                                       |
| 83  | m4:item       | item=SCO_NM_TIME_UNIT; htmlsafe=true; outputdef=                                               |

| L   | Operación | Argumentos literales   |
| --- | --------- | ---------------------- |
| 56  | getCount  | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------- |
| 4   | if ((zidhr_param==null)&#124;&#124;(zidhr_param.equals(""))){zidhr_param="";}                                                     |
| 5   | if ((zid_job_param==null)&#124;&#124;(zid_job_param.equals(""))){zid_job_param="";}                                               |
| 60  | &lt;%if (zcounti &gt; 0) {%&gt;                                                                                                   |
| 80  | &lt;%if (zSCO_TIME.equals("0")){%&gt;                                                                                             |
| 82  | &lt;%}else{%&gt;                                                                                                                  |
| 89  | &lt;tr&gt;&lt;td align="center"&gt;&lt;%if (zSCO_TIME.equals("0")){%&gt;  &lt;%}else{%&gt;&#124;&lt;%}%&gt;&lt;/td&gt;&lt;/tr&gt; |
| 93  | &lt;% } else{%&gt;                                                                                                                |
| 102 | alert(msg);                                                                                                                       |
| 10  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                        |
| 11  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                      |
| 12  | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                                   |
| 13  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                |
| 14  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                           |
| 15  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SGCO_JOB_MAP.SGCO_LOAD";                                |
| 35  | expresión de cálculo/transformación: String zmoveso=znodo + ":" + znodo ;                                                         |
| 39  | expresión de cálculo/transformación: iRutJob = Integer.parseInt(scount);                                                          |
| 41  | expresión de cálculo/transformación: zmoveso=znodo + ":" + znodo +"["+String.valueOf(hb)+"]";                                     |
| 66  | expresión de cálculo/transformación: zmoveaux =znodoaux+ ":" + "SGCO_CR_STEPS_TREE" + "[FIRST]";                                  |

### Includes, navegación y dependencias

No hay includes declarados.

No se encontraron destinos literales; pueden construirse en ejecución.

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g0/sgco_gen_trans.jsp                   | contextual | [sse_g0/sgco_gen_trans.jsp](sse_g0--sgco_gen_trans.md)                                                        |
| BASE   | 21  | ../sgco_job_map.jsp                          | física     | [sse_g0/sgco_job_map.jsp](sse_g0--sgco_job_map.md)                                                            |
| BASE   | 12  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g0/sgco_gen_trans.jsp                   | contextual | [sse_g0/sgco_gen_trans.jsp](sse_g0--sgco_gen_trans.md)                                                        |
| BASE   | 21  | ../sgco_job_map.jsp                          | física     | [sse_g0/sgco_job_map.jsp](sse_g0--sgco_job_map.md)                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/sgco_job_map.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
