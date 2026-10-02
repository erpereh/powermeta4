# sse_g3_p22_body

Identificador: `sse_g3/sse_g3_p22_body.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                                                              | Ámbito | Diccionario                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------- |
| Label.sse_g3_p22Des     | En esta pantalla puedes consultar tus conocimientos y tus conocimientos requerido. | BASE   | [translations/sse_g3_es.properties:L6](../../referencias/literales/sse_g3_es.md)  |
| Label.sse_g3_p22NoData  | Actualmente no tienes ningún conocimiento consolidado                              | BASE   | [translations/sse_g3_es.properties:L8](../../referencias/literales/sse_g3_es.md)  |
| Label.sse_g3_p22NoData2 | Actualmente no tienes ningún conocimiento requerido                                | BASE   | [translations/sse_g3_es.properties:L9](../../referencias/literales/sse_g3_es.md)  |
| Label.sse_g3_ppal       | Ir a mi puesto de trabajo                                                          | BASE   | [translations/sse_g3_es.properties:L2](../../referencias/literales/sse_g3_es.md)  |
| Link.sse_g3_ppal        | Mi puesto de trabajo                                                               | BASE   | [translations/sse_g3_es.properties:L1](../../referencias/literales/sse_g3_es.md)  |
| Title.sse_g3_p22Des     | Mis conocimientos                                                                  | BASE   | [translations/sse_g3_es.properties:L5](../../referencias/literales/sse_g3_es.md)  |
| ev_ess.LinkHistEvOpen   | Mis procesos de evaluación actuales                                                | BASE   | [translations/ess_ev_es.properties:L87](../../referencias/literales/ess_ev_es.md) |
| ev_ess.LinkHistEvOpen   | Mis procesos de evaluación actuales                                                | BASE   | [translations/sse_g_es.properties:L69](../../referencias/literales/sse_g_es.md)   |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/sse_g3_p22_body.jsp](../../../../clon_portal/portal/sse_g3/sse_g3_p22_body.jsp) | `0014c246e8d2bf7e40cf8c6786aeaa83fa3bbc0d6edf03fcac1726346784c1dd` |    135 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/sse_g3_p22_body.jsp](../../../../clon_portal/portal/sse_g3/sse_g3_p22_body.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 49  | [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                 |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 48  | img     | alt=JSP_EXPR_sse_g3Ess.getProperty(; src=/iconos/noname_historial_evaluaciones_ess_93_100.gif; width=93; height=100                       |
| 52  | a       | class=enlacefuncional; tabindex=1; title=JSP_EXPR_sse_g3Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable              | Expresión fuente                                                    | Resolución estática parcial                                                                                 |
| --- | --------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 2   | zsubsesion            | "SSE_H_HR_KNC_LVL"                                                  | SSE_H_HR_KNC_LVL                                                                                            |
| 3   | zmeta4object          | "SSE_H_HR_KNC_LVL"                                                  | SSE_H_HR_KNC_LVL                                                                                            |
| 4   | znodo                 | "SSE_H_HR_KNC_LVL"                                                  | SSE_H_HR_KNC_LVL                                                                                            |
| 5   | znodo1                | "SSE_H_HR_KNC_EXP"                                                  | SSE_H_HR_KNC_EXP                                                                                            |
| 6   | zoutputdef            | zsubsesion + "!" + znodo + "[*]"                                    | SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[*]"}                                                                |
| 7   | zmove                 | znodo + ":" + znodo + "[FIRST]"                                     | SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"[FIRST]"}                                                            |
| 8   | zcomun                | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."   | SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[&amp;VAR.m4lix]"}{"."}                         |
| 9   | znamenodo             | znodo + ":" + zsubsesion + "!" + znodo                              | SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL                                                  |
| 10  | zSCO_NM_LEVEL         | zcomun + "SCO_NM_LEVEL"                                             | SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}         |
| 11  | zSCO_NM_EXTD_KN       | zcomun + "SCO_NM_EXTD_KN"                                           | SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}       |
| 12  | zoutputdef1           | zsubsesion + "!" + znodo1 + "[*]"                                   | SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[*]"}                                                                |
| 13  | zmove1                | znodo1 + ":" + znodo1 + "[FIRST]"                                   | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_EXP{"[FIRST]"}                                                            |
| 14  | zcomun1               | znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + "." | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}                         |
| 15  | znamenodo1            | znodo1 + ":" + zsubsesion + "!" + znodo1                            | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP                                                  |
| 16  | zSCO_NM_LEVEL1        | zcomun1 + "SCO_NM_LEVEL"                                            | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}         |
| 17  | zSCO_NM_EXTD_KN1      | zcomun1 + "SCO_NM_EXTD_KN"                                          | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}       |
| 18  | zSCO_N_ORIGEN         | zcomun1 + "SSE_N_ORIGEN"                                            | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_N_ORIGEN"}         |
| 19  | zSSE_TP_ORIGEN        | zcomun1 + "SSE_TP_ORIGEN"                                           | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_TP_ORIGEN"}        |
| 20  | zSCO_RWEIGHT          | zcomun1 + "SCO_RWEIGHT"                                             | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_RWEIGHT"}          |
| 21  | zSSE_ID_TP_ORIGEN     | zcomun1 + "SSE_ID_TP_ORIGEN"                                        | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_TP_ORIGEN"}     |
| 22  | zSSE_ID_TP_ORIGEN_AUX | zcomun1 + "SSE_ID_TP_ORIGEN_AUX"                                    | SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_TP_ORIGEN_AUX"} |
| 24  | zmetodocarga          | "CARGA:" + zsubsesion + "!SSE_H_HR_KNC_LVL.SMCO_MAIN_LOAD_PROCESS"  | CARGA:{}SSE_H_HR_KNC_LVL{"!SSE_H_HR_KNC_LVL.SMCO_MAIN_LOAD_PROCESS"}                                        |
| 36  | zcount                | 0                                                                   | 0                                                                                                           |
| 36  | zcount1               | 0                                                                   | 0                                                                                                           |
| 42  | zcountv               | String.valueOf(zcount)                                              | String.valueOf(zcount)                                                                                      |
| 42  | zcountv1              | String.valueOf(zcount1)                                             | String.valueOf(zcount1)                                                                                     |
| 72  | zposicions            | "0"                                                                 | 0                                                                                                           |
| 72  | zcontrol              | 0                                                                   | 0                                                                                                           |
| 72  | zposicion             | 0                                                                   | 0                                                                                                           |
| 72  | zPaint                | ""                                                                  |                                                                                                             |
| 93  | zid_typeAnt           | ""                                                                  |                                                                                                             |
| 93  | zid_typeAuxAnt        | ""                                                                  |                                                                                                             |
| 94  | zposicions1           | "0"                                                                 | 0                                                                                                           |
| 94  | zcontrol1             | 0                                                                   | 0                                                                                                           |
| 94  | zposicion1            | 0                                                                   | 0                                                                                                           |
| 94  | zPaint1               | ""                                                                  |                                                                                                             |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                       |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 26  | m4:startpage | m4task=SSE_H_HR_KNC_LVL                                                                                                                                  |
| 27  | m4:beginjob  |                                                                                                                                                          |
| 28  | m4:datadef   | m4o=SSE_H_HR_KNC_LVL; m4name=SSE_H_HR_KNC_LVL                                                                                                            |
| 29  | m4:exec      | m4method=CARGA:{}SSE_H_HR_KNC_LVL{"!SSE_H_HR_KNC_LVL.SMCO_MAIN_LOAD_PROCESS"}                                                                            |
| 29  | m4:param     | name=SMCO_ARG_HR_TO_LOAD; value=zSMCO_ID_HR                                                                                                              |
| 30  | m4:outputdef | m4alias=SSE_H_HR_KNC_LVL                                                                                                                                 |
| 30  | m4:param     | name=m4name0; value=SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[*]"}                                                                                         |
| 31  | m4:outputdef | m4alias=SSE_H_HR_KNC_EXP                                                                                                                                 |
| 31  | m4:param     | name=m4name0; value=SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[*]"}                                                                                         |
| 32  | m4:endjob    |                                                                                                                                                          |
| 33  | m4:move      |                                                                                                                                                          |
| 33  | m4:param     | name=SSE_H_HR_KNC_LVL; value=SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"[FIRST]"}                                                                            |
| 34  | m4:move      |                                                                                                                                                          |
| 34  | m4:param     | name=SSE_H_HR_KNC_LVL; value=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_EXP{"[FIRST]"}                                                                            |
| 61  | m4:label     | m4name=SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL; htmlsafe=true                                                                         |
| 74  | m4:label     | m4name=SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                              |
| 75  | m4:label     | m4name=SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                                |
| 76  | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                                                     |
| 79  | m4:item      | m4name=SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                              |
| 80  | m4:item      | m4name=SSE_H_HR_KNC_LVL{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_LVL{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                                |
| 95  | m4:label     | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP; htmlsafe=true                                                                         |
| 98  | m4:label     | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_TP_ORIGEN"}; htmlsafe=true                               |
| 100 | m4:label     | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                              |
| 101 | m4:label     | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                                |
| 102 | m4:label     | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_RWEIGHT"}; htmlsafe=true                                 |
| 103 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv1).intValue()-1).toString()                                                                                    |
| 105 | m4:item      | m4varname=zid_type; m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_TP_ORIGEN"}; htmlsafe=true        |
| 106 | m4:item      | m4varname=zid_typeaux; m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_ID_TP_ORIGEN_AUX"}; htmlsafe=true |
| 113 | m4:item      | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_N_ORIGEN"}; htmlsafe=true                                |
| 116 | m4:item      | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_TP_ORIGEN"}; htmlsafe=true                               |
| 117 | m4:item      | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SSE_N_ORIGEN"}; htmlsafe=true                                |
| 122 | m4:item      | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_EXTD_KN"}; htmlsafe=true                              |
| 123 | m4:item      | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_LEVEL"}; htmlsafe=true                                |
| 124 | m4:item      | m4name=SSE_H_HR_KNC_EXP{":"}SSE_H_HR_KNC_LVL{"!"}SSE_H_HR_KNC_EXP{"[&amp;VAR.m4lix]"}{"."}{"SCO_RWEIGHT"}; htmlsafe=true                                 |

| L   | Operación | Argumentos literales     |
| --- | --------- | ------------------------ |
| 39  | getCount  | znodo,zsubsesion,znodo   |
| 40  | getCount  | znodo1,zsubsesion,znodo1 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 44  | &lt;%if (zVis.equals("1")){%&gt;                                                                                                                             |
| 59  | &lt;%if (zVis.equals("1")){%&gt;                                                                                                                             |
| 60  | &lt;%if (zcount &gt; 0) {%&gt;                                                                                                                               |
| 66  | &lt;%if (zVis.equals("1")){%&gt;                                                                                                                             |
| 68  | &lt;%}else{%&gt;                                                                                                                                             |
| 72  | &lt;%if (zcount &gt; 0) { String zposicions = "0";int zcontrol = 0;int zposicion =0;String zPaint="";%&gt;                                                   |
| 77  | &lt;%zposicions = m4lix;zposicion = Integer.valueOf(zposicions).intValue();zcontrol = zposicion%2;if (zcontrol==0){zPaint="";}else{zPaint="2";}%&gt;         |
| 84  | &lt;%}else{%&gt;                                                                                                                                             |
| 90  | &lt;%if (zVis.equals("1")){%&gt;                                                                                                                             |
| 92  | &lt;%if (zcount1 &gt; 0) {                                                                                                                                   |
| 104 | &lt;%zposicions1 = m4lix;zposicion1 = Integer.valueOf(zposicions1).intValue();zcontrol1 = zposicion1%2;if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%&gt; |
| 108 | &lt;%if (zid_typeAnt.equals(zid_type)){%&gt;                                                                                                                 |
| 110 | &lt;%if (zid_typeAuxAnt.equals(zid_typeaux)){%&gt;                                                                                                           |
| 112 | &lt;%}else{%&gt;                                                                                                                                             |
| 115 | &lt;%}else{%&gt;                                                                                                                                             |
| 128 | &lt;%}else{%&gt;                                                                                                                                             |
| 6   | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                   |
| 7   | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                         |
| 8   | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                                      |
| 9   | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                                                              |
| 10  | expresión de cálculo/transformación: String zSCO_NM_LEVEL = zcomun + "SCO_NM_LEVEL";                                                                         |
| 11  | expresión de cálculo/transformación: String zSCO_NM_EXTD_KN = zcomun + "SCO_NM_EXTD_KN";                                                                     |
| 12  | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "[*]";                                                                 |
| 13  | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "[FIRST]";                                                                      |
| 14  | expresión de cálculo/transformación: String zcomun1 = znodo1 + ":" + zsubsesion + "!" + znodo1 + "[&amp;VAR.m4lix]" + ".";                                   |
| 15  | expresión de cálculo/transformación: String znamenodo1 = znodo1 + ":" + zsubsesion + "!" + znodo1;                                                           |
| 16  | expresión de cálculo/transformación: String zSCO_NM_LEVEL1 = zcomun1 + "SCO_NM_LEVEL";                                                                       |
| 17  | expresión de cálculo/transformación: String zSCO_NM_EXTD_KN1 = zcomun1 + "SCO_NM_EXTD_KN";                                                                   |
| 18  | expresión de cálculo/transformación: String zSCO_N_ORIGEN = zcomun1 + "SSE_N_ORIGEN";                                                                        |
| 19  | expresión de cálculo/transformación: String zSSE_TP_ORIGEN = zcomun1 + "SSE_TP_ORIGEN";                                                                      |
| 20  | expresión de cálculo/transformación: String zSCO_RWEIGHT = zcomun1 + "SCO_RWEIGHT";                                                                          |
| 21  | expresión de cálculo/transformación: String zSSE_ID_TP_ORIGEN = zcomun1 + "SSE_ID_TP_ORIGEN";                                                                |
| 22  | expresión de cálculo/transformación: String zSSE_ID_TP_ORIGEN_AUX = zcomun1 + "SSE_ID_TP_ORIGEN_AUX";                                                        |
| 24  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_H_HR_KNC_LVL.SMCO_MAIN_LOAD_PROCESS";                               |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                          |
| --- | ---------------------------------------------------------- |
| 48  | /iconos/noname_historial_evaluaciones_ess_93_100.gif       |
| 52  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                 | Resolución | Ficha / candidato                                |
| ------ | --- | ---------------------------------------------------------- | ---------- | ------------------------------------------------ |
| BASE   | 52  | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_menu.jsp?estado=3 | contextual | [sse_g3/sse_g3_menu.jsp](sse_g3--sse_g3_menu.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p22_body.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
