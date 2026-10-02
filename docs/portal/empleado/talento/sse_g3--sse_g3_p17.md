# sse_g3_p17

Identificador: `sse_g3/sse_g3_p17.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                                                                     | Ámbito | Diccionario                                                                                  |
| ------------------ | ------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.NoDataFound  | Actualmente no tienes ningún dato.                                        | COLL   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound  | Actualmente no tienes ningún dato.                                        | CYC    | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound  | Actualmente no tienes ningún dato.                                        | IBER   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound  | Actualmente no tienes ningún dato.                                        | BASE   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound  | No hay tareas pendientes.                                                 | BASE   | [translations/ssco_etask_es.properties:L13](../../referencias/literales/ssco_etask_es.md)    |
| Label.VerDet       | Ver detalle                                                               | COLL   | [translations/ess_mss_gen_es.properties:L129](../../referencias/literales/ess_mss_gen_es.md) |
| Label.VerDet       | Ver detalle                                                               | CYC    | [translations/ess_mss_gen_es.properties:L129](../../referencias/literales/ess_mss_gen_es.md) |
| Label.VerDet       | Ver detalle                                                               | IBER   | [translations/ess_mss_gen_es.properties:L129](../../referencias/literales/ess_mss_gen_es.md) |
| Label.VerDet       | Ver detalle                                                               | BASE   | [translations/ess_mss_gen_es.properties:L128](../../referencias/literales/ess_mss_gen_es.md) |
| ev_ess.DescrValObj | Consulta los objetivos que te han asignado y comenta si estás de acuerdo. | BASE   | [translations/ess_ev_es.properties:L41](../../referencias/literales/ess_ev_es.md)            |
| ev_ess.DescrValObj | Consulta los objetivos que te han asignado y comenta si estás de acuerdo. | BASE   | [translations/sse_g_es.properties:L25](../../referencias/literales/sse_g_es.md)              |
| ev_ess.TitValObj   | Valoración de objetivos                                                   | BASE   | [translations/ess_ev_es.properties:L3](../../referencias/literales/ess_ev_es.md)             |
| ev_ess.TitValObj   | Valoración de objetivos                                                   | BASE   | [translations/sse_g_es.properties:L3](../../referencias/literales/sse_g_es.md)               |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p17.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p17.jsp) | `57013c9c2fb87002f3c6cef75936010a05b727a25fdfb17be12ff21af2de22ae` |    121 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p17.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p17.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta  |
| --- | ------------------------- |
| 104 | ',[valor dinámico]);"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                       |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| 76  | a       |                                                                                                                                 |
| 76  | img     | alt=&lt;%=zTitle%&gt;; title=&lt;%=zTitle%&gt;; src=/iconos/noname_resultados_evaluacion_ess_100_100.gif; width=100; height=100 |
| 104 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:navegar('&lt;m4:item m4name=; jsafe=true; htmlsafe=true                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                 |
| --- | --------------- | ------------------------------ |
| 17  | estado          | getParameter(request,"estado") |

| L   | Variable          | Expresión fuente                                                   | Resolución estática parcial                                                                                |
| --- | ----------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| 13  | zTitle            | TranEss.getProperty("ev_ess.TitValObj")                            | TranEss.getProperty("ev_ess.TitValObj")                                                                    |
| 17  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                         |
| 32  | zsubsesion        | "SSM_EV_ROL_LV_OBJ"                                                | SSM_EV_ROL_LV_OBJ                                                                                          |
| 33  | zmeta4object      | "SSM_EV_ROL_LV_OBJ"                                                | SSM_EV_ROL_LV_OBJ                                                                                          |
| 34  | znodo             | "SSE_EV_ROL_LV_OBJ"                                                | SSE_EV_ROL_LV_OBJ                                                                                          |
| 36  | ztipocarga        | "EVA"                                                              | EVA                                                                                                        |
| 38  | zoutputdef        | zsubsesion + "!" + znodo + "[*]"                                   | SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[*]"}                                                             |
| 39  | zmove             | znodo + ":" + znodo + "[FIRST]"                                    | SSE_EV_ROL_LV_OBJ{":"}SSE_EV_ROL_LV_OBJ{"[FIRST]"}                                                         |
| 40  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                             | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ                                              |
| 42  | zmetodocarga      | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                     | CARGA:{}SSM_EV_ROL_LV_OBJ{"!SSE_PRINCIPAL.CARGA"}                                                          |
| 43  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."  | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}                     |
| 45  | zSCO_ID_OBJECTIVE | zcomun + "SCO_ID_OBJECTIVE"                                        | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_OBJECTIVE"} |
| 46  | zSCO_NM_OBJECTIVE | zcomun + "SCO_NM_OBJECTIVE"                                        | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"} |
| 47  | zSCO_DT_START     | zcomun + "SCO_DT_START"                                            | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}     |
| 48  | zSCO_DT_END       | zcomun + "SCO_DT_END"                                              | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}       |
| 49  | zORDINAL          | zcomun+ "ORDINAL"                                                  | SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"ORDINAL"}          |
| 64  | zcount            | 0                                                                  | 0                                                                                                          |
| 65  | zcounti           | 0                                                                  | 0                                                                                                          |
| 71  | zcountv           | String.valueOf(zcounti)                                            | String.valueOf(zcounti)                                                                                    |
| 83  | zposicions        | "0"                                                                | 0                                                                                                          |
| 84  | zcontrol          | 0                                                                  | 0                                                                                                          |
| 85  | zposicion         | 0                                                                  | 0                                                                                                          |
| 86  | sClass            | ""                                                                 |                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                               |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| 51  | m4:startpage | m4task=SSM_EV_ROL_LV_OBJ                                                                                                         |
| 52  | m4:beginjob  |                                                                                                                                  |
| 53  | m4:datadef   | m4o=SSM_EV_ROL_LV_OBJ; m4name=SSM_EV_ROL_LV_OBJ                                                                                  |
| 59  | m4:exec      | m4method=CARGA:{}SSM_EV_ROL_LV_OBJ{"!SSE_PRINCIPAL.CARGA"}                                                                       |
| 59  | m4:param     | name=TIPO_CARGA; value=EVA                                                                                                       |
| 60  | m4:outputdef | m4alias=SSE_EV_ROL_LV_OBJ                                                                                                        |
| 60  | m4:param     | name=m4name0; value=SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[*]"}                                                               |
| 61  | m4:endjob    |                                                                                                                                  |
| 62  | m4:move      |                                                                                                                                  |
| 62  | m4:param     | name=SSM_EV_ROL_LV_OBJ; value=SSE_EV_ROL_LV_OBJ{":"}SSE_EV_ROL_LV_OBJ{"[FIRST]"}                                                 |
| 90  | m4:label     | m4name=SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true     |
| 91  | m4:label     | m4name=SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true       |
| 93  | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                             |
| 104 | m4:item      | m4name=SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"}; htmlsafe=true |
| 105 | m4:item      | m4name=SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START"}; htmlsafe=true     |
| 106 | m4:item      | m4name=SSE_EV_ROL_LV_OBJ{":"}SSM_EV_ROL_LV_OBJ{"!"}SSE_EV_ROL_LV_OBJ{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END"}; htmlsafe=true       |
| 117 | m4:endpage   |                                                                                                                                  |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 56  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 68  | getCount         | znodo,zsubsesion,znodo                    |
| 69  | getCountInClient | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos    |
| --- | ------- | ------------- |
| 21  | navegar | ord,zposicion |

| L   | Condición / acción / mensaje literal                                                                                    |
| --- | ----------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                         |
| 82  | &lt;%if (zcount&gt; 0) {                                                                                                |
| 97  | if (zcontrol==0){                                                                                                       |
| 99  | }else{                                                                                                                  |
| 110 | &lt;%}else{%&gt;                                                                                                        |
| 38  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                              |
| 39  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                    |
| 40  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                         |
| 42  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";              |
| 43  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."; |
| 45  | expresión de cálculo/transformación: String zSCO_ID_OBJECTIVE = zcomun + "SCO_ID_OBJECTIVE";                            |
| 46  | expresión de cálculo/transformación: String zSCO_NM_OBJECTIVE = zcomun + "SCO_NM_OBJECTIVE";                            |
| 47  | expresión de cálculo/transformación: String zSCO_DT_START = zcomun + "SCO_DT_START";                                    |
| 48  | expresión de cálculo/transformación: String zSCO_DT_END = zcomun + "SCO_DT_END";                                        |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 9   | ../../sse_generico/espanol/menu_ess.jsp            |
| 10  | /sse_g3/sse_ev_trans.jsp                           |
| 29  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 30  | ../../sse_generico/espanol/generico_links.jsp      |
| 115 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 7   | /css/estilo_sse.css                                  |
| 8   | /libreria/funciones_sse.js                           |
| 76  | /iconos/noname_resultados_evaluacion_ess_100_100.gif |
| 104 | javascript:navegar(                                  |
| 9   | ../../sse_generico/espanol/menu_ess.jsp              |
| 10  | /sse_g3/sse_ev_trans.jsp                             |
| 24  | sse_g3/sse_g3_p17_mod.jsp                            |
| 29  | ../../sse_generico/espanol/generico_menusup.jsp      |
| 30  | ../../sse_generico/espanol/generico_links.jsp        |
| 115 | ../../sse_generico/espanol/generico_disclaimer.jsp   |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                         | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | -------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 10  | /sse_g3/sse_ev_trans.jsp                           | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                        |
| BASE   | 29  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 30  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 115 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 8   | /libreria/funciones_sse.js                         | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 104 | javascript:navegar(                                | dinámica   | P06                                                                                                       |
| BASE   | 9   | ../../sse_generico/espanol/menu_ess.jsp            | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                       |
| BASE   | 10  | /sse_g3/sse_ev_trans.jsp                           | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                        |
| BASE   | 24  | sse_g3/sse_g3_p17_mod.jsp                          | ausente    | P06                                                                                                       |
| BASE   | 29  | ../../sse_generico/espanol/generico_menusup.jsp    | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)       |
| BASE   | 30  | ../../sse_generico/espanol/generico_links.jsp      | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 115 | ../../sse_generico/espanol/generico_disclaimer.jsp | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p17.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
