# sse_g3_p4_1

Identificador: `sse_g3/sse_g3_p4_1.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                        | Texto                                                                                                                     | Ámbito | Diccionario                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| ev_ess.LblHistOpenNodata     | Actualmente no tienes ningún proceso abierto                                                                              | BASE   | [translations/ess_ev_es.properties:L111](../../referencias/literales/ess_ev_es.md) |
| ev_ess.LblHistOpenNodata     | Actualemente no tienes ningún proceso abierto                                                                             | BASE   | [translations/sse_g_es.properties:L92](../../referencias/literales/sse_g_es.md)    |
| ev_ess.LblJob                | Ir a mi puesto de trabajo                                                                                                 | BASE   | [translations/ess_ev_es.properties:L93](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.LblJob                | Ir a mi puesto de trabajo                                                                                                 | BASE   | [translations/sse_g_es.properties:L74](../../referencias/literales/sse_g_es.md)    |
| ev_ess.LinkJob               | Mi puesto de trabajo                                                                                                      | BASE   | [translations/ess_ev_es.properties:L71](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.LinkJob               | Mi puesto de trabajo                                                                                                      | BASE   | [translations/sse_g_es.properties:L53](../../referencias/literales/sse_g_es.md)    |
| ev_ess.sse_g3_p4_1_Desc      | Selecciona el proceso para el cual quieres modificar tus evaluadores. Los procesos que se visualizan son los de tipo 360. | BASE   | [translations/ess_ev_es.properties:L39](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.sse_g3_p4_1_DescTitle | Evaluadores para tus procesos                                                                                             | BASE   | [translations/ess_ev_es.properties:L23](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.sse_g3_p4_1_title     | Evaluadores para tus procesos                                                                                             | BASE   | [translations/ess_ev_es.properties:L22](../../referencias/literales/ess_ev_es.md)  |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p4_1.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p4_1.jsp) | `b58ebfef76bb46e8bc8f08a91a9d8c9f50116a9cfa1e3e2aa9e15b772fe469aa` |    118 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p4_1.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p4_1.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 75  | [valor dinámico] [valor dinámico] |
| 105 | -                                 |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                   |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 74  | img     | src=/iconos/noname_procesos_evaluacion_ess_114_100.gif; width=114; height=100; alt=JSP_EXPR_TranEss.getProperty(                            |
| 77  | a       | class=enlacefuncional; title=JSP_EXPR_TranEss.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3                 |
| 96  | form    | action=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1_mod.jsp; method=post; name=oculto&lt;%=zposicions%&gt;; id=oculto&lt;%=zposicions%&gt; |
| 97  | input   | type=hidden; id=SCO_DT_START_EVAL; name=SCO_DT_START_EVAL; value=&lt;m4:item m4name=; htmlsafe=true                                         |
| 98  | input   | type=hidden; id=SCO_OR_HR_ROLE; name=SCO_OR_HR_ROLE; value=&lt;m4:item m4name=; htmlsafe=true                                               |
| 102 | a       | title=; href=javascript:m4submit('oculto&lt;%=zposicions%&gt;');                                                                            |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 13  | estado          | getParameter(request,"estado")   |
| 14  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable           | Expresión fuente                                                     | Resolución estática parcial                                                                   |
| --- | ------------------ | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 13  | estado             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                            |
| 14  | zinicios           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                          |
| 27  | zsubsesion         | "SSE_EVAL360"                                                        | SSE_EVAL360                                                                                   |
| 28  | zmeta4object       | "SSE_EVAL360"                                                        | SSE_EVAL360                                                                                   |
| 29  | znodo              | "M4T_EVAL_PROC"                                                      | M4T_EVAL_PROC                                                                                 |
| 31  | ztipocarga         | "PRE"                                                                | PRE                                                                                           |
| 33  | zventanas          | "20"                                                                 | 20                                                                                            |
| 35  | zoutputdef         | zsubsesion + "!" + znodo + "[*]"                                     | SSE_EVAL360{"!"}M4T_EVAL_PROC{"[*]"}                                                          |
| 36  | zmove              | znodo + ":" + znodo + "[FIRST]"                                      | M4T_EVAL_PROC{":"}M4T_EVAL_PROC{"[FIRST]"}                                                    |
| 37  | zcomun             | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."    | M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}                      |
| 39  | zSCO_NM_EVAL_PROC  | zcomun + "SCO_NM_EVAL_PROC"                                          | M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EVAL_PROC"}  |
| 40  | zSCO_DT_ST_EV_PER  | zcomun + "SCO_DT_ST_EV_PER"                                          | M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_ST_EV_PER"}  |
| 41  | zSCO_DT_END_EV_PER | zcomun + "SCO_DT_END_EV_PER"                                         | M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END_EV_PER"} |
| 42  | zSCO_N_ROLE        | zcomun + "SCO_N_ROLE"                                                | M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ROLE"}        |
| 43  | zSCO_DT_START_EVAL | zcomun + "SCO_DT_START_EVAL"                                         | M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_START_EVAL"} |
| 44  | zSCO_OR_HR_ROLE    | zcomun + "SCO_OR_HR_ROLE"                                            | M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_HR_ROLE"}    |
| 45  | zmetodocarga       | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                       | CARGA:{}SSE_EVAL360{"!SSE_PRINCIPAL.CARGA"}                                                   |
| 62  | zcount             | 0                                                                    | 0                                                                                             |
| 63  | zcounti            | 0                                                                    | 0                                                                                             |
| 69  | zcountv            | String.valueOf(zcounti)                                              | String.valueOf(zcounti)                                                                       |
| 84  | zregistrofinals    | String.valueOf( zcounti - 1)                                         | String.valueOf( zcounti - 1)                                                                  |
| 84  | zposicions         | "0"                                                                  | 0                                                                                             |
| 84  | zcontrol           | 0                                                                    | 0                                                                                             |
| 84  | zposicion          | 0                                                                    | 0                                                                                             |
| 84  | zPaint             | ""                                                                   |                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| 49  | m4:startpage | m4task=SSE_EVAL360                                                                                                  |
| 50  | m4:beginjob  |                                                                                                                     |
| 51  | m4:datadef   | m4o=SSE_EVAL360; m4name=SSE_EVAL360                                                                                 |
| 57  | m4:exec      | m4method=CARGA:{}SSE_EVAL360{"!SSE_PRINCIPAL.CARGA"}                                                                |
| 57  | m4:param     | name=TIPO_CARGA; value=PRE                                                                                          |
| 58  | m4:outputdef | m4alias=M4T_EVAL_PROC                                                                                               |
| 58  | m4:param     | name=m4name0; value=SSE_EVAL360{"!"}M4T_EVAL_PROC{"[*]"}                                                            |
| 59  | m4:endjob    |                                                                                                                     |
| 60  | m4:move      |                                                                                                                     |
| 60  | m4:param     | name=SSE_EVAL360; value=M4T_EVAL_PROC{":"}M4T_EVAL_PROC{"[FIRST]"}                                                  |
| 87  | m4:label     | item=SCO_NM_EVAL_PROC; htmlsafe=true; outputdef=M4T_EVAL_PROC                                                       |
| 88  | m4:label     | item=SCO_N_ROLE; htmlsafe=true; outputdef=M4T_EVAL_PROC                                                             |
| 89  | m4:label     | item=SCO_DT_ST_EV_PER; htmlsafe=true; outputdef=M4T_EVAL_PROC                                                       |
| 91  | m4:loop      | from=0; to=String.valueOf( zcounti - 1)                                                                             |
| 102 | m4:item      | m4name=M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EVAL_PROC"}; htmlsafe=true  |
| 104 | m4:item      | m4name=M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_N_ROLE"}; htmlsafe=true        |
| 105 | m4:item      | m4name=M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_ST_EV_PER"}; htmlsafe=true  |
| 105 | m4:item      | m4name=M4T_EVAL_PROC{":"}SSE_EVAL360{"!"}M4T_EVAL_PROC{"[&amp;VAR.m4lix]"}{"."}{"SCO_DT_END_EV_PER"}; htmlsafe=true |
| 115 | m4:endpage   |                                                                                                                     |

| L   | Operación        | Argumentos literales                      |
| --- | ---------------- | ----------------------------------------- |
| 54  | setItem          | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 66  | getCount         | znodo,zsubsesion,znodo                    |
| 67  | getCountInClient | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 15  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="31";}                                                                                                                                      |
| 16  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                                                               |
| 84  | &lt;%if (zcounti &gt; 0){String zregistrofinals = String.valueOf( zcounti - 1);String zposicions = "0";int zcontrol = 0;int zposicion =0; String zPaint="";%&gt;                                      |
| 95  | %&gt;&lt;%if (zcontrol==0){zPaint="";}else{zPaint="2";}%&gt;                                                                                                                                          |
| 109 | &lt;%} else {%&gt;                                                                                                                                                                                    |
| 35  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                            |
| 36  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                                                                  |
| 37  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                                                               |
| 39  | expresión de cálculo/transformación: String zSCO_NM_EVAL_PROC = zcomun + "SCO_NM_EVAL_PROC";                                                                                                          |
| 40  | expresión de cálculo/transformación: String zSCO_DT_ST_EV_PER = zcomun + "SCO_DT_ST_EV_PER";                                                                                                          |
| 41  | expresión de cálculo/transformación: String zSCO_DT_END_EV_PER = zcomun + "SCO_DT_END_EV_PER";                                                                                                        |
| 42  | expresión de cálculo/transformación: String zSCO_N_ROLE = zcomun + "SCO_N_ROLE";                                                                                                                      |
| 43  | expresión de cálculo/transformación: String zSCO_DT_START_EVAL = zcomun + "SCO_DT_START_EVAL";                                                                                                        |
| 44  | expresión de cálculo/transformación: String zSCO_OR_HR_ROLE = zcomun + "SCO_OR_HR_ROLE";                                                                                                              |
| 45  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                                                                                            |
| 84  | expresión de cálculo/transformación: &lt;%if (zcounti &gt; 0){String zregistrofinals = String.valueOf( zcounti - 1);String zposicions = "0";int zcontrol = 0;int zposicion =0; String zPaint="";%&gt; |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp         |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp       |
| 8   | ../../sse_generico/espanol/menu_ess.jsp            |
| 10  | ../../sse_g3/sse_ev_trans.jsp                      |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 25  | ../../sse_generico/espanol/generico_links.jsp      |
| 113 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 6   | /css/estilo_sse.css                                        |
| 7   | /libreria/funciones_sse.js                                 |
| 9   | /libreria/clase_val_entradas.js                            |
| 74  | /iconos/noname_procesos_evaluacion_ess_114_100.gif         |
| 77  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 |
| 96  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1_mod.jsp      |
| 102 | javascript:m4submit(                                       |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                 |
| 5   | ../../sse_generico/sse_generico_taglib_2.jsp               |
| 8   | ../../sse_generico/espanol/menu_ess.jsp                    |
| 10  | ../../sse_g3/sse_ev_trans.jsp                              |
| 24  | ../../sse_generico/espanol/generico_menusup.jsp            |
| 25  | ../../sse_generico/espanol/generico_links.jsp              |
| 113 | ../../sse_generico/espanol/generico_disclaimer.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ---------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                 | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp               | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp                    | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 10  | ../../sse_g3/sse_ev_trans.jsp                              | física     | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 113 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |
| BASE   | 7   | /libreria/funciones_sse.js                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 9   | /libreria/clase_val_entradas.js                            | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 77  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 | contextual | [sse_g3/sse_g3_menu.jsp](sse_g3--sse_g3_menu.md)                                                              |
| BASE   | 96  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p4_1_mod.jsp      | ausente    | P06                                                                                                           |
| BASE   | 102 | javascript:m4submit(                                       | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                 | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 5   | ../../sse_generico/sse_generico_taglib_2.jsp               | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp                    | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 10  | ../../sse_g3/sse_ev_trans.jsp                              | física     | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 24  | ../../sse_generico/espanol/generico_menusup.jsp            | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)           |
| BASE   | 25  | ../../sse_generico/espanol/generico_links.jsp              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)               |
| BASE   | 113 | ../../sse_generico/espanol/generico_disclaimer.jsp         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)     |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p4_1.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
