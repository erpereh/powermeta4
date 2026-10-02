# smco_g3_p17_mod_prof

Identificador: `mss_g3/smco_g3_p17_mod_prof.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave             | Texto                              | Ámbito | Diccionario                                                                                  |
| ----------------- | ---------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Label.NoDataFound | Actualmente no tienes ningún dato. | COLL   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound | Actualmente no tienes ningún dato. | CYC    | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound | Actualmente no tienes ningún dato. | IBER   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound | Actualmente no tienes ningún dato. | BASE   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound | No hay tareas pendientes.          | BASE   | [translations/ssco_etask_es.properties:L13](../../referencias/literales/ssco_etask_es.md)    |
| Label.ssco_0      | No                                 | COLL   | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_0      | No                                 | CYC    | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_0      | No                                 | IBER   | [translations/ess_mss_gen_es.properties:L197](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_0      | No                                 | BASE   | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_1      | Sí                                 | COLL   | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_1      | Sí                                 | CYC    | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_1      | Sí                                 | IBER   | [translations/ess_mss_gen_es.properties:L196](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_1      | Sí                                 | BASE   | [translations/ess_mss_gen_es.properties:L195](../../referencias/literales/ess_mss_gen_es.md) |
| ev_mss.Plan       | Plan de desarrollo                 | BASE   | [translations/mss_ev_es.properties:L18](../../referencias/literales/mss_ev_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p17_mod_prof.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p17_mod_prof.jsp) | `d30b92be46ae6ff1aa2721ec8df1b1811584c07accf8c33df7edd9e2a1668cc0` |    125 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p17_mod_prof.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p17_mod_prof.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 108 | -                                 |
| 110 | [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

No se declaran controles en esta versión; pueden vivir en los includes.

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 10  | estado          | getParameter(request,"estado")   |
| 11  | zinicios        | getParameter(request,"zinicios") |

| L   | Variable            | Expresión fuente                                                            | Resolución estática parcial                                                                                                 |
| --- | ------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 10  | estado              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                          |
| 11  | zinicios            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                        |
| 16  | IDRH                | (String)request.getAttribute("empleado")                                    | (String)request.getAttribute("empleado")                                                                                    |
| 18  | RHRole              | (String)request.getAttribute("role")                                        | (String)request.getAttribute("role")                                                                                        |
| 19  | RHPeriod            | (String)request.getAttribute("periodo")                                     | (String)request.getAttribute("periodo")                                                                                     |
| 29  | zNodata             | Tran.getProperty("Label.NoDataFound")                                       | Tran.getProperty("Label.NoDataFound")                                                                                       |
| 30  | z1                  | Tran.getProperty("Label.ssco_1")                                            | Tran.getProperty("Label.ssco_1")                                                                                            |
| 31  | z0                  | Tran.getProperty("Label.ssco_0")                                            | Tran.getProperty("Label.ssco_0")                                                                                            |
| 40  | zsubsesion          | "SMCO_PLAN_ACTION_PROFS"                                                    | SMCO_PLAN_ACTION_PROFS                                                                                                      |
| 41  | zmeta4object        | "SMCO_PLAN_ACTION_PROFS"                                                    | SMCO_PLAN_ACTION_PROFS                                                                                                      |
| 42  | znodo               | "SMCO_PLAN_ACTION_PROFS"                                                    | SMCO_PLAN_ACTION_PROFS                                                                                                      |
| 43  | zmetodocarga        | "CARGA:" + zsubsesion + "!SMCO_PLAN_ACTION_PROFS.SMCO_LOAD_ALL_PLANS_PROFS" | CARGA:{}SMCO_PLAN_ACTION_PROFS{"!SMCO_PLAN_ACTION_PROFS.SMCO_LOAD_ALL_PLANS_PROFS"}                                         |
| 45  | zventanas           | "20"                                                                        | 20                                                                                                                          |
| 47  | zoutputdef          | zsubsesion + "!" + znodo + "[*]"                                            | SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[*]"}                                                                    |
| 48  | zmove               | znodo + ":" + znodo + "[FIRST]"                                             | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"[FIRST]"}                                                                |
| 49  | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."           | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}                       |
| 51  | zregistroinicial    | Integer.valueOf(zinicios).intValue()                                        | Integer.valueOf(zinicios).intValue()                                                                                        |
| 53  | zventana            | Integer.valueOf(zventanas).intValue()                                       | Integer.valueOf(zventanas).intValue()                                                                                       |
| 54  | zregistrofinal      | zregistroinicial + zventana - 1                                             | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                          |
| 55  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_H_SAL_DATA.CARGA"                             | CARGA:{}SMCO_PLAN_ACTION_PROFS{"!SSE_H_SAL_DATA.CARGA"}                                                                     |
| 58  | zSCONMACTION        | zcomun + "SCO_NM_ACTION"                                                    | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ACTION"}      |
| 59  | zSCO_NM_ACTION_TYPE | zcomun + "SCO_NM_ACTION_TYPE"                                               | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ACTION_TYPE"} |
| 60  | zSCO_APROX_DURATION | zcomun + "SCO_APROX_DURATION"                                               | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_APROX_DURATION"} |
| 61  | zSCO_NM_TIME_UNIT   | zcomun + "SCO_NM_TIME_UNIT"                                                 | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}   |
| 63  | zSCOACTIONHOW       | zcomun + "SCO_ACTION_HOW"                                                   | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACTION_HOW"}     |
| 64  | zSCOACTIONWHEN      | zcomun + "SCO_ACTION_WHEN"                                                  | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACTION_WHEN"}    |
| 65  | zSCOACTIONDESC      | zcomun + "SCO_ACTION_DESC"                                                  | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACTION_DESC"}    |
| 66  | zSCOOBJECTIVES      | zcomun + "SCO_OBJECTIVES"                                                   | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_OBJECTIVES"}     |
| 67  | zSCOPRIORITY        | zcomun + "SCO_PRIORITY"                                                     | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_PRIORITY"}       |
| 69  | zLSCO_IS_FINISHED   | zcomun + "SCO_IS_FINISHED"                                                  | SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_IS_FINISHED"}    |
| 86  | zcounti             | 0                                                                           | 0                                                                                                                           |
| 91  | zcountv             | String.valueOf(zcounti)                                                     | String.valueOf(zcounti)                                                                                                     |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 71  | m4:startpage | m4task=SMCO_PLAN_ACTION_PROFS                                                                                                                     |
| 72  | m4:beginjob  |                                                                                                                                                   |
| 73  | m4:datadef   | m4o=SMCO_PLAN_ACTION_PROFS; m4name=SMCO_PLAN_ACTION_PROFS                                                                                         |
| 81  | m4:exec      | m4method=CARGA:{}SMCO_PLAN_ACTION_PROFS{"!SSE_H_SAL_DATA.CARGA"}                                                                                  |
| 82  | m4:outputdef | m4alias=SMCO_PLAN_ACTION_PROFS                                                                                                                    |
| 82  | m4:param     | name=m4name0; value=SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[*]"}                                                                      |
| 84  | m4:endjob    |                                                                                                                                                   |
| 84  | m4:move      |                                                                                                                                                   |
| 84  | m4:param     | name=SMCO_PLAN_ACTION_PROFS; value=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"[FIRST]"}                                                   |
| 97  | m4:label     | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ACTION"}; htmlsafe=true      |
| 98  | m4:label     | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ACTION_TYPE"}; htmlsafe=true |
| 99  | m4:label     | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_APROX_DURATION"}; htmlsafe=true |
| 100 | m4:label     | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACTION_WHEN"}; htmlsafe=true    |
| 101 | m4:label     | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_IS_FINISHED"}; htmlsafe=true    |
| 103 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                              |
| 104 | m4:item      | m4varname=zSCO_IS_FINISHED; item=SCO_IS_FINISHED; htmlsafe=true; outputdef=SMCO_PLAN_ACTION_PROFS                                                 |
| 106 | m4:item      | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ACTION"}; htmlsafe=true      |
| 107 | m4:item      | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ACTION_TYPE"}; htmlsafe=true |
| 108 | m4:item      | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_APROX_DURATION"}; htmlsafe=true |
| 108 | m4:item      | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_TIME_UNIT"}; htmlsafe=true   |
| 109 | m4:item      | m4name=SMCO_PLAN_ACTION_PROFS{":"}SMCO_PLAN_ACTION_PROFS{"!"}SMCO_PLAN_ACTION_PROFS{"[&amp;VAR.m4lix]"}{"."}{"SCO_ACTION_WHEN"}; htmlsafe=true    |

| L   | Operación        | Argumentos literales                                   |
| --- | ---------------- | ------------------------------------------------------ |
| 77  | setItem          | zsubsesion,znodo,"","FILTRO_SCO_ID_HR",IDRH            |
| 78  | setItem          | zsubsesion,znodo,"","FILTRO_SCO_OR_HR_PERIOD",RHPeriod |
| 89  | getCountInClient | znodo,zsubsesion,znodo                                 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 13  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                         |
| 14  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                 |
| 94  | &lt;% if (zcounti &gt; 0) { %&gt;                                                                                                       |
| 111 | &lt;%if (zSCO_IS_FINISHED.equals("0")){%&gt;                                                                                            |
| 113 | &lt;%}else{%&gt;                                                                                                                        |
| 120 | &lt;%}else{%&gt;                                                                                                                        |
| 43  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SMCO_PLAN_ACTION_PROFS.SMCO_LOAD_ALL_PLANS_PROFS"; |
| 47  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                              |
| 48  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                    |
| 49  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                 |
| 52  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                           |
| 54  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                              |
| 58  | expresión de cálculo/transformación: String zSCONMACTION = zcomun + "SCO_NM_ACTION";                                                    |
| 59  | expresión de cálculo/transformación: String zSCO_NM_ACTION_TYPE = zcomun + "SCO_NM_ACTION_TYPE";                                        |
| 60  | expresión de cálculo/transformación: String zSCO_APROX_DURATION = zcomun + "SCO_APROX_DURATION";                                        |
| 61  | expresión de cálculo/transformación: String zSCO_NM_TIME_UNIT = zcomun + "SCO_NM_TIME_UNIT";                                            |
| 63  | expresión de cálculo/transformación: String zSCOACTIONHOW = zcomun + "SCO_ACTION_HOW";                                                  |
| 64  | expresión de cálculo/transformación: String zSCOACTIONWHEN = zcomun + "SCO_ACTION_WHEN";                                                |
| 65  | expresión de cálculo/transformación: String zSCOACTIONDESC = zcomun + "SCO_ACTION_DESC";                                                |
| 66  | expresión de cálculo/transformación: String zSCOOBJECTIVES = zcomun + "SCO_OBJECTIVES";                                                 |
| 67  | expresión de cálculo/transformación: String zSCOPRIORITY = zcomun + "SCO_PRIORITY";                                                     |
| 69  | expresión de cálculo/transformación: String zLSCO_IS_FINISHED = zcomun + "SCO_IS_FINISHED";                                             |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 25  | ../../sse_generico/espanol/menu_ess.jsp |
| 26  | /mss_g3/mss_ev_trans.jsp                |

| L   | Destino / recurso                       |
| --- | --------------------------------------- |
| 22  | /css/estilo_mss.css                     |
| 23  | /libreria/funciones_sse.js              |
| 24  | /libreria/clase_val_entradas.js         |
| 25  | ../../sse_generico/espanol/menu_ess.jsp |
| 26  | /mss_g3/mss_ev_trans.jsp                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                              | Resolución | Ficha / candidato                                                                                |
| ------ | --- | --------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| BASE   | 25  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)              |
| BASE   | 26  | /mss_g3/mss_ev_trans.jsp                | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                               |
| BASE   | 23  | /libreria/funciones_sse.js              | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)           |
| BASE   | 24  | /libreria/clase_val_entradas.js         | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| BASE   | 25  | ../../sse_generico/espanol/menu_ess.jsp | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)              |
| BASE   | 26  | /mss_g3/mss_ev_trans.jsp                | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p17_mod_prof.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
