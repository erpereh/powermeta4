# ssco_g3_p23_body

Identificador: `sse_g3/ssco_g3_p23_body.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                   | Texto                                                                                 | Ámbito | Diccionario                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| Button.Delete           | Eliminar                                                                              | COLL   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete           | Eliminar                                                                              | CYC    | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete           | Eliminar                                                                              | IBER   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Delete           | Eliminar                                                                              | BASE   | [translations/ess_mss_gen_es.properties:L66](../../referencias/literales/ess_mss_gen_es.md) |
| Label.ssco_g3_p23Des    | En esta pantalla puedes consultar, modificar o borrar tus preferencias profesionales. | BASE   | [translations/sse_g3_es.properties:L52](../../referencias/literales/sse_g3_es.md)           |
| Label.ssco_g3_p23NoData | Actualmente no tienes ninguna preferencia profesional                                 | BASE   | [translations/sse_g3_es.properties:L53](../../referencias/literales/sse_g3_es.md)           |
| Link.ssco_g3_p23_mod1   | Dar de alta preferencias profesionales                                                | BASE   | [translations/sse_g3_es.properties:L60](../../referencias/literales/sse_g3_es.md)           |
| Title.ssco_g3_p23Des    | Preferencias profesionales                                                            | BASE   | [translations/sse_g3_es.properties:L51](../../referencias/literales/sse_g3_es.md)           |
| ev_ess.LinkHistEvOpen   | Mis procesos de evaluación actuales                                                   | BASE   | [translations/ess_ev_es.properties:L87](../../referencias/literales/ess_ev_es.md)           |
| ev_ess.LinkHistEvOpen   | Mis procesos de evaluación actuales                                                   | BASE   | [translations/sse_g_es.properties:L69](../../referencias/literales/sse_g_es.md)             |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [sse_g3/ssco_g3_p23_body.jsp](../../../../clon_portal/portal/sse_g3/ssco_g3_p23_body.jsp) | `7e03fba93723fe5afa8368f99522e0e244313d38406f4095dc70fa8882969b37` |    146 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [sse_g3/ssco_g3_p23_body.jsp](../../../../clon_portal/portal/sse_g3/ssco_g3_p23_body.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 61  | [valor dinámico] [valor dinámico]                                                                                                                                               |
| 79  | "&gt; " src="/iconos/icono_flecha_azul1_ess_11_9.gif" width="11" height="9" onmouseover ="m4luztotal(this,200,200,200,50,40,80,5,255,150)" onmouseout="m4oscuridad(this)" /&gt; |
| 90  | " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt; " /&gt;                                                                                         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                             |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 60  | img     | alt=JSP_EXPR_sse_g3Ess.getProperty(; src=/iconos/noname_historial_evaluaciones_ess_93_100.gif; width=93; height=100                                                                                                                   |
| 64  | a       | class=enlacefuncional; tabindex=&lt;%=zTab++%&gt;; title=JSP_EXPR_sse_g3Ess.getProperty(; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=3                                                                        |
| 79  | a       | tabindex=&lt;%=zTab++%&gt;; href=/servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=31; title=&lt;m4:label m4name=; htmlsafe=true                                                                                          |
| 79  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                                               |
| 91  | form    | action=/servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp; method=post; name=formprefprof&lt;%=zposicion%&gt;; id=formprefprof&lt;%=zposicion%&gt;                                                                       |
| 92  | input   | type=hidden; id=TAG; name=TAG; value=SSE_CR_PREFERENC                                                                                                                                                                                 |
| 93  | input   | type=hidden; id=ACC; name=ACC; value=ANULAR                                                                                                                                                                                           |
| 94  | input   | type=hidden; id=NOD; name=NOD; value=SSE_CR_PREFERENC                                                                                                                                                                                 |
| 96  | input   | type=hidden; id=STD_OR_HR_PERIOD; name=STD_OR_HR_PERIOD; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                           |
| 97  | input   | type=hidden; id=SCO_OR_PREFER; name=SCO_OR_PREFER; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                                 |
| 98  | input   | type=hidden; id=SCO_PREF_PRIORITY; name=SCO_PREF_PRIORITY; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                         |
| 99  | input   | type=hidden; id=DT_START; name=DT_START; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                                           |
| 100 | input   | type=hidden; id=STD_ID_SUB_GEO_DIV; name=STD_ID_SUB_GEO_DIV; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                       |
| 101 | input   | type=hidden; id=STD_ID_GEO_DIV; name=STD_ID_GEO_DIV; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                               |
| 102 | input   | type=hidden; id=STD_ID_COUNTRY; name=STD_ID_COUNTRY; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                               |
| 103 | input   | type=hidden; id=STD_ID_WORK_UNIT; name=STD_ID_WORK_UNIT; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                           |
| 104 | input   | type=hidden; id=STD_ID_JOB_CODE; name=STD_ID_JOB_CODE; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                             |
| 105 | input   | type=hidden; id=SCO_PREFERENCES; name=SCO_PREFERENCES; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                             |
| 106 | input   | type=hidden; id=SCO_COMMENT; name=SCO_COMMENT; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo%&gt;                                                                                                                     |
| 108 | a       | title=JSP_EXPR_Tran.getProperty(; href=javascript:m4submit('formprefprof&lt;%=zposicion%&gt;');                                                                                                                                       |
| 109 | img     | class=fuentebotonright&lt;%=zposicion%&gt;; alt=JSP_EXPR_Tran.getProperty(; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

No se encontró lectura literal de parámetros o claves de sesión en este archivo.

| L   | Variable            | Expresión fuente                                                  | Resolución estática parcial                                                                               |
| --- | ------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 2   | zsubsesion          | "SSE_CR_PREFERENC"                                                | SSE_CR_PREFERENC                                                                                          |
| 3   | zmeta4object        | "SSE_CR_PREFERENC"                                                | SSE_CR_PREFERENC                                                                                          |
| 4   | znodo               | "M4T_CR_PREFERENC"                                                | M4T_CR_PREFERENC                                                                                          |
| 5   | ztipocarga          | "M4T"                                                             | M4T                                                                                                       |
| 7   | zdireccion          | "sse_g3/ssco_g3_p23.jsp"                                          | sse_g3/ssco_g3_p23.jsp                                                                                    |
| 8   | zestado             | "31"                                                              | 31                                                                                                        |
| 10  | zoutputdef          | zsubsesion + "!" + znodo + "[*]"                                  | SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[*]"}                                                              |
| 11  | zmove               | znodo + ":" + znodo + "[FIRST]"                                   | M4T_CR_PREFERENC{":"}M4T_CR_PREFERENC{"[FIRST]"}                                                          |
| 12  | zcomun              | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "." | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}                       |
| 13  | znamenodo           | znodo + ":" + zsubsesion + "!" + znodo                            | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC                                                |
| 14  | zDT_START           | zcomun + "DT_START"                                               | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}           |
| 15  | zSTD_OR_HR_PERIOD   | zcomun + "STD_OR_HR_PERIOD"                                       | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_OR_HR_PERIOD"}   |
| 16  | zSCO_OR_PREFER      | zcomun + "SCO_OR_PREFER"                                          | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_OR_PREFER"}      |
| 17  | zSCO_PREF_PRIORITY  | zcomun + "SCO_PREF_PRIORITY"                                      | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}  |
| 18  | zSTD_ID_SUB_GEO_DIV | zcomun + "STD_ID_SUB_GEO_DIV"                                     | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_SUB_GEO_DIV"} |
| 19  | zSTD_N_SUB_GEO_DIV  | zcomun + "STD_N_SUB_GEO_DIV"                                      | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}  |
| 20  | zSTD_ID_GEO_DIV     | zcomun + "STD_ID_GEO_DIV"                                         | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_GEO_DIV"}     |
| 21  | zSTD_N_GEO_DIV      | zcomun + "STD_N_GEO_DIV"                                          | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}      |
| 22  | zSTD_ID_COUNTRY     | zcomun + "STD_ID_COUNTRY"                                         | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_COUNTRY"}     |
| 23  | zSTD_N_COUNTRY      | zcomun + "STD_N_COUNTRY"                                          | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}      |
| 24  | zSTD_ID_WORK_UNIT   | zcomun + "STD_ID_WORK_UNIT"                                       | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_WORK_UNIT"}   |
| 25  | zSTD_N_WORK_UNIT    | zcomun + "STD_N_WORK_UNIT"                                        | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}    |
| 26  | zSTD_ID_JOB_CODE    | zcomun + "STD_ID_JOB_CODE"                                        | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_JOB_CODE"}    |
| 27  | zSTD_N_JOB_CODE     | zcomun + "STD_N_JOB_CODE"                                         | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}     |
| 28  | zSCO_PREFERENCES    | zcomun + "SCO_PREFERENCES"                                        | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREFERENCES"}    |
| 29  | zSCO_COMMENT        | zcomun + "SCO_COMMENT"                                            | M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}        |
| 31  | zmetodocarga        | "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA"                    | CARGA:{}SSE_CR_PREFERENC{"!SSE_PRINCIPAL.CARGA"}                                                          |
| 33  | zTab                | 1                                                                 | 1                                                                                                         |
| 49  | zcount              | 0                                                                 | 0                                                                                                         |
| 54  | zcountv             | String.valueOf(zcount)                                            | String.valueOf(zcount)                                                                                    |
| 72  | zposicions          | "0"                                                               | 0                                                                                                         |
| 73  | zcontrol            | 0                                                                 | 0                                                                                                         |
| 74  | zposicion           | 0                                                                 | 0                                                                                                         |
| 75  | zPaint              | ""                                                                |                                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                             |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| 35  | m4:startpage | m4task=SSE_CR_PREFERENC                                                                                                        |
| 36  | m4:beginjob  |                                                                                                                                |
| 37  | m4:datadef   | m4o=SSE_CR_PREFERENC; m4name=SSE_CR_PREFERENC                                                                                  |
| 44  | m4:exec      | m4method=CARGA:{}SSE_CR_PREFERENC{"!SSE_PRINCIPAL.CARGA"}                                                                      |
| 44  | m4:param     | name=TIPO_CARGA; value=M4T                                                                                                     |
| 45  | m4:outputdef | m4alias=M4T_CR_PREFERENC                                                                                                       |
| 45  | m4:param     | name=m4name0; value=SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[*]"}                                                               |
| 46  | m4:endjob    |                                                                                                                                |
| 47  | m4:move      |                                                                                                                                |
| 47  | m4:param     | name=SSE_CR_PREFERENC; value=M4T_CR_PREFERENC{":"}M4T_CR_PREFERENC{"[FIRST]"}                                                  |
| 78  | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC; htmlsafe=true                                               |
| 81  | m4:loop      | from=0; to=new_Integer(new_Integer(zcountv).intValue()-1).toString()                                                           |
| 86  | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}; htmlsafe=true |
| 87  | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}; htmlsafe=true |
| 88  | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true          |
| 89  | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true          |
| 114 | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true   |
| 115 | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true   |
| 116 | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true    |
| 117 | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true    |
| 121 | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true     |
| 122 | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true     |
| 123 | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true     |
| 124 | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true     |
| 125 | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true |
| 126 | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_SUB_GEO_DIV"}; htmlsafe=true |
| 128 | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREFERENCES"}; htmlsafe=true   |
| 129 | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREFERENCES"}; htmlsafe=true   |
| 132 | m4:label     | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true       |
| 133 | m4:item      | m4name=M4T_CR_PREFERENC{":"}SSE_CR_PREFERENC{"!"}M4T_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_COMMENT"}; htmlsafe=true       |

| L   | Operación | Argumentos literales                      |
| --- | --------- | ----------------------------------------- |
| 40  | setItem   | zsubsesion,"SSE_PRINCIPAL","","NIVEL","0" |
| 52  | getCount  | znodo,zsubsesion,znodo                    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                              |
| --- | --------------------------------------------------------------------------------------------------------------------------------- |
| 71  | &lt;%if (zcount &gt; 0){                                                                                                          |
| 136 | &lt;%if (zcount &gt; 1){%&gt;&lt;tr&gt;&lt;td class="separadorlinea" colspan="8"&gt;&lt;hr /&gt;&lt;/td&gt;&lt;/tr&gt;&lt;%}%&gt; |
| 140 | &lt;%}else{%&gt;                                                                                                                  |
| 10  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                        |
| 11  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                              |
| 12  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";           |
| 13  | expresión de cálculo/transformación: String znamenodo = znodo + ":" + zsubsesion + "!" + znodo;                                   |
| 14  | expresión de cálculo/transformación: String zDT_START = zcomun + "DT_START";                                                      |
| 15  | expresión de cálculo/transformación: String zSTD_OR_HR_PERIOD = zcomun + "STD_OR_HR_PERIOD";                                      |
| 16  | expresión de cálculo/transformación: String zSCO_OR_PREFER = zcomun + "SCO_OR_PREFER";                                            |
| 17  | expresión de cálculo/transformación: String zSCO_PREF_PRIORITY = zcomun + "SCO_PREF_PRIORITY";                                    |
| 18  | expresión de cálculo/transformación: String zSTD_ID_SUB_GEO_DIV = zcomun + "STD_ID_SUB_GEO_DIV";                                  |
| 19  | expresión de cálculo/transformación: String zSTD_N_SUB_GEO_DIV = zcomun + "STD_N_SUB_GEO_DIV";                                    |
| 20  | expresión de cálculo/transformación: String zSTD_ID_GEO_DIV = zcomun + "STD_ID_GEO_DIV";                                          |
| 21  | expresión de cálculo/transformación: String zSTD_N_GEO_DIV = zcomun + "STD_N_GEO_DIV";                                            |
| 22  | expresión de cálculo/transformación: String zSTD_ID_COUNTRY = zcomun + "STD_ID_COUNTRY";                                          |
| 23  | expresión de cálculo/transformación: String zSTD_N_COUNTRY = zcomun + "STD_N_COUNTRY";                                            |
| 24  | expresión de cálculo/transformación: String zSTD_ID_WORK_UNIT = zcomun + "STD_ID_WORK_UNIT";                                      |
| 25  | expresión de cálculo/transformación: String zSTD_N_WORK_UNIT = zcomun + "STD_N_WORK_UNIT";                                        |
| 26  | expresión de cálculo/transformación: String zSTD_ID_JOB_CODE = zcomun + "STD_ID_JOB_CODE";                                        |
| 27  | expresión de cálculo/transformación: String zSTD_N_JOB_CODE = zcomun + "STD_N_JOB_CODE";                                          |
| 28  | expresión de cálculo/transformación: String zSCO_PREFERENCES = zcomun + "SCO_PREFERENCES";                                        |
| 29  | expresión de cálculo/transformación: String zSCO_COMMENT = zcomun + "SCO_COMMENT";                                                |
| 31  | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!SSE_PRINCIPAL.CARGA";                        |

### Includes, navegación y dependencias

No hay includes declarados.

| L   | Destino / recurso                                                |
| --- | ---------------------------------------------------------------- |
| 60  | /iconos/noname_historial_evaluaciones_ess_93_100.gif             |
| 64  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=3  |
| 79  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=31 |
| 79  | /iconos/icono_flecha_azul1_ess_11_9.gif                          |
| 91  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp  |
| 108 | javascript:m4submit(                                             |
| 109 | /iconos/icono_eliminar_ess_11_12.gif                             |
| 7   | sse_g3/ssco_g3_p23.jsp                                           |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                       | Resolución | Ficha / candidato |
| ------ | --- | ---------------------------------------------------------------- | ---------- | ----------------- |
| BASE   | 64  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=3  | ausente    | P06               |
| BASE   | 79  | /servlet/CheckSecurity/JSP/sse_g3/ssco_g3_p23_mod1.jsp?estado=31 | ausente    | P06               |
| BASE   | 91  | /servlet/CheckSecurity/JSP/sse_generico/generico_actualizar.jsp  | ausente    | P06               |
| BASE   | 108 | javascript:m4submit(                                             | dinámica   | P06               |
| BASE   | 7   | sse_g3/ssco_g3_p23.jsp                                           | ausente    | P06               |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_g3_p23_body.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
