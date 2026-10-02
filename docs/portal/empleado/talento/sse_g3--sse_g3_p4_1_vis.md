# sse_g3_p4_1_vis

Identificador: `sse_g3/sse_g3_p4_1_vis.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                       | Texto                                               | Ámbito | Diccionario                                                                        |
| --------------------------- | --------------------------------------------------- | ------ | ---------------------------------------------------------------------------------- |
| ev_ess.LblHistOpenNodata2   | Actualmente tu proceso no tiene criterios definidos | BASE   | [translations/ess_ev_es.properties:L112](../../referencias/literales/ess_ev_es.md) |
| ev_ess.LinkHistEvOpen       | Mis procesos de evaluación actuales                 | BASE   | [translations/ess_ev_es.properties:L87](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.LinkHistEvOpen       | Mis procesos de evaluación actuales                 | BASE   | [translations/sse_g_es.properties:L69](../../referencias/literales/sse_g_es.md)    |
| ev_ess.LinkHistEvOpenVis    | Criterios de evaluación                             | BASE   | [translations/ess_ev_es.properties:L89](../../referencias/literales/ess_ev_es.md)  |
| ev_ess.LinkHistEvOpenVis    | Criterios de evaluación                             | BASE   | [translations/sse_g_es.properties:L71](../../referencias/literales/sse_g_es.md)    |
| ev_ess.sse_g3_p4_1_vis_desc | Consulta tus criterios de evaluación.               | BASE   | [translations/ess_ev_es.properties:L30](../../referencias/literales/ess_ev_es.md)  |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/sse_g3_p4_1_vis.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p4_1_vis.jsp) | `d7e3d9852ccfc88d196b1fa143e80dc981cfd8b0d0379a54a490f6fe92e919ee` |    246 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p4_1_vis.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p4_1_vis.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

No hay etiquetas estáticas en este archivo; seguir sus includes y traducciones.

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                         |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| 136 | img     | alt=JSP_EXPR_TranEss.getProperty(; src=/iconos/noname_historial_evaluaciones_ess_93_100.gif; width=93; height=100 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 12  | estado          | getParameter(request,"estado")     |
| 13  | zinicios        | getParameter(request,"zinicios")   |
| 14  | ID_HR           | getParameter(request,"ID_HR")      |
| 15  | OR_HR_ROLE      | getParameter(request,"OR_HR_ROLE") |
| 16  | DT_START        | getParameter(request,"DT_START")   |
| 17  | zc              | getParameter(request,"zc")         |

| L   | Variable               | Expresión fuente                                                       | Resolución estática parcial                                                                                                |
| --- | ---------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 12  | estado                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                         |
| 13  | zinicios               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                       |
| 14  | zID_HR                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")                                                          |
| 15  | zOR_HR_ROLE            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_HR_ROLE") | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_HR_ROLE")                                                     |
| 16  | zDT_START              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")                                                       |
| 17  | zc                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zc")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zc")                                                             |
| 33  | zsubsesion             | "SSE_EVAL360_VIS"                                                      | SSE_EVAL360_VIS                                                                                                            |
| 34  | zmeta4object           | "SSE_EVAL360_VIS"                                                      | SSE_EVAL360_VIS                                                                                                            |
| 36  | znodo                  | "SSE_EVAL360_VIS"                                                      | SSE_EVAL360_VIS                                                                                                            |
| 38  | znodo1                 | "SSE_EVAL_CAPAB_360"                                                   | SSE_EVAL_CAPAB_360                                                                                                         |
| 39  | znodo2                 | "SSE_EVAL_OBJECT_360"                                                  | SSE_EVAL_OBJECT_360                                                                                                        |
| 40  | znodo3                 | "SSE_EVAL_OBJECT_CUAN_360"                                             | SSE_EVAL_OBJECT_CUAN_360                                                                                                   |
| 43  | zoutputdef             | zsubsesion + "!" + znodo + "[*]"                                       | SSE_EVAL360_VIS{"!"}SSE_EVAL360_VIS{"[*]"}                                                                                 |
| 45  | zcomun                 | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."      | SSE_EVAL360_VIS{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL360_VIS{"[&amp;VAR.m4lix]"}{"."}                                           |
| 46  | zmove                  | znodo+ ":" + znodo1 + "[FIRST]"                                        | SSE_EVAL360_VIS{":"}SSE_EVAL_CAPAB_360{"[FIRST]"}                                                                          |
| 50  | zoutputdef1            | zsubsesion + "!" + znodo1 + "[*]"                                      | SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[*]"}                                                                              |
| 51  | zmove1                 | znodo1 + ":" + znodo1 + "[FIRST]"                                      | SSE_EVAL_CAPAB_360{":"}SSE_EVAL_CAPAB_360{"[FIRST]"}                                                                       |
| 52  | zcomun1                | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."    | SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}                                     |
| 53  | znamenodo1             | znodo1 + ":" + zsubsesion + "!" + znodo1                               | SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360                                                              |
| 55  | zoutputdef2            | zsubsesion + "!" + znodo2 + "[*]"                                      | SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[*]"}                                                                             |
| 56  | zmove2                 | znodo2 + ":" + znodo2 + "[FIRST]"                                      | SSE_EVAL_OBJECT_360{":"}SSE_EVAL_OBJECT_360{"[FIRST]"}                                                                     |
| 57  | zcomun2                | znodo2+ ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + "."     | SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}                                   |
| 58  | znamenodo2             | znodo2+ ":" + zsubsesion + "!" + znodo2                                | SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360                                                            |
| 61  | zoutputdef3            | zsubsesion + "!" + znodo3 + "[*]"                                      | SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[*]"}                                                                        |
| 62  | zmove3                 | znodo3 + ":" + znodo3 + "[FIRST]"                                      | SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL_OBJECT_CUAN_360{"[FIRST]"}                                                           |
| 63  | zcomun3                | znodo3+ ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + "."     | SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}                         |
| 64  | znamenodo3             | znodo3+ ":" + zsubsesion + "!" + znodo3                                | SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360                                                  |
| 68  | zSCONMOBJECTIVE        | zcomun2 + "SCO_NM_OBJECTIVE"                                           | SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"}               |
| 69  | zSCONMLEVEL            | zcomun2 + "SCO_NM_LEVEL"                                               | SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}                   |
| 70  | zSCO_NM_CRITERIA_TYPE2 | zcomun2 + "SCO_NM_CRITERIA_TYPE"                                       | SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}           |
| 74  | zSCONMOBJECTIVE2       | zcomun3 + "SCO_NM_OBJECTIVE"                                           | SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"}     |
| 75  | zSCONMMAGNITUDE        | zcomun3 + "SCO_NM_MAGNITUDE"                                           | SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_MAGNITUDE"}     |
| 76  | zSCOSCHEDVALUE         | zcomun3 + "SCO_SCHED_VALUE"                                            | SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_SCHED_VALUE"}      |
| 77  | zSCO_NM_CRITERIA_TYPE3 | zcomun3 + "SCO_NM_CRITERIA_TYPE"                                       | SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"} |
| 81  | zSCONMEXTDKNTYP        | zcomun1+ "SCO_NM_EXTD_KN_TYP"                                          | SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN_TYP"}               |
| 82  | zSCONMLEVEL1           | zcomun1+ "SCO_NM_LEVEL"                                                | SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}                     |
| 83  | zSCONMEXTDKN           | zcomun1+ "SCO_NM_EXTD_KN"                                              | SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}                   |
| 84  | zSCOIDCAPABILITY       | zcomun1+ "SCO_ID_CAPABILITY"                                           | SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_CAPABILITY"}                |
| 85  | zSCO_NM_CRITERIA_TYPE1 | zcomun1 + "SCO_NM_CRITERIA_TYPE"                                       | SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}             |
| 89  | zmetodocarga           | "CARGA:" + zsubsesion + "!SSE_EVAL360_VIS.SSE_LOAD"                    | CARGA:{}SSE_EVAL360_VIS{"!SSE_EVAL360_VIS.SSE_LOAD"}                                                                       |
| 110 | zcount                 | 0                                                                      | 0                                                                                                                          |
| 111 | zcounti                | 0                                                                      | 0                                                                                                                          |
| 112 | zcount1                | 0                                                                      | 0                                                                                                                          |
| 113 | zcounti1               | 0                                                                      | 0                                                                                                                          |
| 114 | zcount2                | 0                                                                      | 0                                                                                                                          |
| 115 | zcounti2               | 0                                                                      | 0                                                                                                                          |
| 116 | zcount3                | 0                                                                      | 0                                                                                                                          |
| 117 | zcounti3               | 0                                                                      | 0                                                                                                                          |
| 128 | zcountv1               | String.valueOf(zcounti1)                                               | String.valueOf(zcounti1)                                                                                                   |
| 129 | zcountv2               | String.valueOf(zcounti2)                                               | String.valueOf(zcounti2)                                                                                                   |
| 130 | zcountv3               | String.valueOf(zcounti3)                                               | String.valueOf(zcounti3)                                                                                                   |
| 131 | zcounttotal            | zcounti1+zcounti2+zcounti3                                             | 000                                                                                                                        |
| 144 | zcontrol               | 0                                                                      | 0                                                                                                                          |
| 145 | zposicions             | "0"                                                                    | 0                                                                                                                          |
| 146 | zposicion              | 0                                                                      | 0                                                                                                                          |
| 147 | zPaint                 | ""                                                                     |                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                               |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 91  | m4:startpage | m4task=SSE_EVAL360_VIS                                                                                                                           |
| 92  | m4:beginjob  |                                                                                                                                                  |
| 93  | m4:datadef   | m4o=SSE_EVAL360_VIS; m4name=SSE_EVAL360_VIS                                                                                                      |
| 94  | m4:exec      | m4method=CARGA:{}SSE_EVAL360_VIS{"!SSE_EVAL360_VIS.SSE_LOAD"}                                                                                    |
| 95  | m4:param     | name=ARG_ID_HR; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"ID_HR")                                                          |
| 96  | m4:param     | name=ARG_DT_START_EVAL; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"DT_START")                                               |
| 97  | m4:param     | name=ARG_OR_HR_ROLE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"OR_HR_ROLE")                                                |
| 100 | m4:outputdef | m4alias=SSE_EVAL360_VIS                                                                                                                          |
| 100 | m4:param     | name=m4name0; value=SSE_EVAL360_VIS{"!"}SSE_EVAL360_VIS{"[*]"}                                                                                   |
| 101 | m4:outputdef | m4alias=SSE_EVAL_CAPAB_360                                                                                                                       |
| 101 | m4:param     | name=m4name0; value=SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[*]"}                                                                                |
| 102 | m4:outputdef | m4alias=SSE_EVAL_OBJECT_360                                                                                                                      |
| 102 | m4:param     | name=m4name0; value=SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[*]"}                                                                               |
| 103 | m4:outputdef | m4alias=SSE_EVAL_OBJECT_CUAN_360                                                                                                                 |
| 103 | m4:param     | name=m4name0; value=SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[*]"}                                                                          |
| 104 | m4:endjob    |                                                                                                                                                  |
| 105 | m4:move      |                                                                                                                                                  |
| 105 | m4:param     | name=SSE_EVAL360_VIS; value=SSE_EVAL360_VIS{":"}SSE_EVAL_CAPAB_360{"[FIRST]"}                                                                    |
| 106 | m4:move      |                                                                                                                                                  |
| 106 | m4:param     | name=SSE_EVAL360_VIS; value=SSE_EVAL_CAPAB_360{":"}SSE_EVAL_CAPAB_360{"[FIRST]"}                                                                 |
| 107 | m4:move      |                                                                                                                                                  |
| 107 | m4:param     | name=SSE_EVAL360_VIS; value=SSE_EVAL_OBJECT_360{":"}SSE_EVAL_OBJECT_360{"[FIRST]"}                                                               |
| 108 | m4:move      |                                                                                                                                                  |
| 108 | m4:param     | name=SSE_EVAL360_VIS; value=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL_OBJECT_CUAN_360{"[FIRST]"}                                                     |
| 151 | m4:label     | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360; htmlsafe=true                                                              |
| 155 | m4:label     | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                   |
| 156 | m4:label     | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                     |
| 157 | m4:label     | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN_TYP"}; htmlsafe=true               |
| 158 | m4:label     | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}; htmlsafe=true             |
| 160 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv1).intValue()-1).toString()                                                                            |
| 167 | m4:item      | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                   |
| 168 | m4:item      | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                     |
| 169 | m4:item      | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN_TYP"}; htmlsafe=true               |
| 170 | m4:item      | m4name=SSE_EVAL_CAPAB_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_CAPAB_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}; htmlsafe=true             |
| 180 | m4:label     | m4name=SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360; htmlsafe=true                                                            |
| 184 | m4:label     | m4name=SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"}; htmlsafe=true               |
| 185 | m4:label     | m4name=SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                   |
| 186 | m4:label     | m4name=SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}; htmlsafe=true           |
| 188 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv2).intValue()-1).toString()                                                                            |
| 195 | m4:item      | m4name=SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"}; htmlsafe=true               |
| 196 | m4:item      | m4name=SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                   |
| 197 | m4:item      | m4name=SSE_EVAL_OBJECT_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}; htmlsafe=true           |
| 207 | m4:label     | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360; htmlsafe=true                                                  |
| 211 | m4:label     | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"}; htmlsafe=true     |
| 212 | m4:label     | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_MAGNITUDE"}; htmlsafe=true     |
| 213 | m4:label     | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_SCHED_VALUE"}; htmlsafe=true      |
| 214 | m4:label     | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}; htmlsafe=true |
| 216 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv3).intValue()-1).toString()                                                                            |
| 224 | m4:item      | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_OBJECTIVE"}; htmlsafe=true     |
| 225 | m4:item      | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_MAGNITUDE"}; htmlsafe=true     |
| 226 | m4:item      | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_SCHED_VALUE"}; htmlsafe=true      |
| 227 | m4:item      | m4name=SSE_EVAL_OBJECT_CUAN_360{":"}SSE_EVAL360_VIS{"!"}SSE_EVAL_OBJECT_CUAN_360{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_CRITERIA_TYPE"}; htmlsafe=true |
| 242 | m4:endpage   |                                                                                                                                                  |

| L   | Operación        | Argumentos literales     |
| --- | ---------------- | ------------------------ |
| 120 | getCount         | znodo1,zsubsesion,znodo1 |
| 121 | getCountInClient | znodo1,zsubsesion,znodo1 |
| 122 | getCount         | znodo2,zsubsesion,znodo2 |
| 123 | getCountInClient | znodo2,zsubsesion,znodo2 |
| 124 | getCount         | znodo3,zsubsesion,znodo3 |
| 125 | getCountInClient | znodo3,zsubsesion,znodo3 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                       |
| --- | -------------------------------------------------------------------------------------------------------------------------- |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                            |
| 19  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                    |
| 20  | if ((zc==null)&#124;&#124;(zc.equals(""))){zc = "0";}                                                                      |
| 22  | if (zc.equals("0")){%&gt;                                                                                                  |
| 24  | &lt;%}else{%&gt;                                                                                                           |
| 142 | &lt;%if (zcounttotal&gt;0){%&gt;                                                                                           |
| 148 | if (zcount1 &gt; 0) {                                                                                                      |
| 164 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                              |
| 174 | &lt;%}if (zcount2 &gt; 0) {                                                                                                |
| 192 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                              |
| 201 | &lt;%}if (zcount3 &gt; 0) {                                                                                                |
| 220 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                              |
| 235 | &lt;%}else{%&gt;                                                                                                           |
| 43  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                 |
| 45  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";    |
| 46  | expresión de cálculo/transformación: String zmove= znodo+ ":" + znodo1 + "[FIRST]";                                        |
| 50  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                               |
| 51  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                    |
| 52  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "."; |
| 53  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                         |
| 55  | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                               |
| 56  | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                    |
| 57  | expresión de cálculo/transformación: String zcomun2 = znodo2+ ":" + zsubsesion + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";  |
| 58  | expresión de cálculo/transformación: String znamenodo2 = znodo2+ ":" + zsubsesion + "!" + znodo2;                          |
| 61  | expresión de cálculo/transformación: String zoutputdef3 = zsubsesion + "!" + znodo3 + "[*]";                               |
| 62  | expresión de cálculo/transformación: String zmove3 = znodo3 + ":" + znodo3 + "[FIRST]";                                    |
| 63  | expresión de cálculo/transformación: String zcomun3 = znodo3+ ":" + zsubsesion + "!" + znodo3 + "[&amp;VAR.m4lix]" + ".";  |
| 64  | expresión de cálculo/transformación: String znamenodo3 = znodo3+ ":" + zsubsesion + "!" + znodo3;                          |
| 68  | expresión de cálculo/transformación: String zSCONMOBJECTIVE = zcomun2 + "SCO_NM_OBJECTIVE";                                |
| 69  | expresión de cálculo/transformación: String zSCONMLEVEL = zcomun2 + "SCO_NM_LEVEL";                                        |
| 70  | expresión de cálculo/transformación: String zSCO_NM_CRITERIA_TYPE2 = zcomun2 + "SCO_NM_CRITERIA_TYPE";                     |
| 74  | expresión de cálculo/transformación: String zSCONMOBJECTIVE2 = zcomun3 + "SCO_NM_OBJECTIVE";                               |
| 75  | expresión de cálculo/transformación: String zSCONMMAGNITUDE = zcomun3 + "SCO_NM_MAGNITUDE";                                |
| 76  | expresión de cálculo/transformación: String zSCOSCHEDVALUE = zcomun3 + "SCO_SCHED_VALUE";                                  |
| 77  | expresión de cálculo/transformación: String zSCO_NM_CRITERIA_TYPE3 = zcomun3 + "SCO_NM_CRITERIA_TYPE";                     |
| 85  | expresión de cálculo/transformación: String zSCO_NM_CRITERIA_TYPE1 = zcomun1 + "SCO_NM_CRITERIA_TYPE";                     |
| 89  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_EVAL360_VIS.SSE_LOAD";            |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/espanol/menu_ess.jsp      |
| 9   | /sse_g3/sse_ev_trans.jsp                     |

| L   | Destino / recurso                                    |
| --- | ---------------------------------------------------- |
| 23  | /css/estilo_sse.css                                  |
| 25  | /css/estilo_mss.css                                  |
| 27  | /libreria/funciones_sse.js                           |
| 136 | /iconos/noname_historial_evaluaciones_ess_93_100.gif |
| 1   | ../../sse_generico/sse_generico_taglib.jsp           |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp         |
| 8   | ../../sse_generico/espanol/menu_ess.jsp              |
| 9   | /sse_g3/sse_ev_trans.jsp                             |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | -------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                     | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 27  | /libreria/funciones_sse.js                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/espanol/menu_ess.jsp      | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                           |
| BASE   | 9   | /sse_g3/sse_ev_trans.jsp                     | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p4_1_vis.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
