# mss_g3_p21

Identificador: `mss_g3/mss_g3_p21.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave              | Texto                                                                                      | Ámbito | Diccionario                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------- |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                           | COLL   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                           | CYC    | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                           | IBER   | [translations/ess_mss_gen_es.properties:L193](../../referencias/literales/ess_mss_gen_es.md) |
| Labelmss.ProfsData | Datos Profesionales del Empleado                                                           | BASE   | [translations/ess_mss_gen_es.properties:L192](../../referencias/literales/ess_mss_gen_es.md) |
| ev_mss.DataPref    | Actualmente no hay ningún dato del historial de preferencias profesionales de tu empleado. | BASE   | [translations/mss_ev_es.properties:L141](../../referencias/literales/mss_ev_es.md)           |
| ev_mss.DescrPref   | Consulta las preferencias profesionales de tus empleados.                                  | BASE   | [translations/mss_ev_es.properties:L140](../../referencias/literales/mss_ev_es.md)           |
| ev_mss.LblPlan     | Ir a plan de acción                                                                        | BASE   | [translations/mss_ev_es.properties:L74](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.Plan        | Plan de desarrollo                                                                         | BASE   | [translations/mss_ev_es.properties:L18](../../referencias/literales/mss_ev_es.md)            |
| ev_mss.Pref        | Preferencias profesionales                                                                 | BASE   | [translations/mss_ev_es.properties:L30](../../referencias/literales/mss_ev_es.md)            |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/mss_g3_p21.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p21.jsp) | `1a5afe508fb3947fabede47ef257eb5e68a7aaf7d73f6fa294e133d6770598c6` |    184 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/mss_g3_p21.jsp](../../../../clon_portal/portal/mss_g3/espanol/mss_g3_p21.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta          |
| --- | --------------------------------- |
| 116 | [valor dinámico] [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                  |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 104 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp; method=post; name=plan_accion; id=plan_accion                           |
| 105 | input   | type=hidden; id=estado; name=estado; value=31                                                                                              |
| 106 | input   | type=hidden; id=SCO_ID_HR; name=SCO_ID_HR; value=&lt;%=IDRH%&gt;                                                                           |
| 107 | input   | type=hidden; id=zidhr_name; name=zidhr_name; value=&lt;%=znombreemp%&gt;                                                                   |
| 108 | input   | type=hidden; id=SCO_OR_HR_PERIOD; name=SCO_OR_HR_PERIOD; value=&lt;%=PERIODO%&gt;                                                          |
| 115 | img     | src=/iconos/noname_plan_carrera_133_100.gif; width=115; height=100; alt=JSP_EXPR_TranMss.getProperty(; title=JSP_EXPR_TranMss.getProperty( |
| 119 | a       | class=enlacefuncional; tabindex=1; title=JSP_EXPR_TranMss.getProperty(; href=javascript:plan_accion();                                     |
| 134 | a       | class=fuenteleyenda_big; title=&lt;%=profData%&gt;; href=javascript:load('&lt;%=IDRH%&gt;')                                                |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                     |
| --- | --------------- | ---------------------------------- |
| 21  | IDRH            | getParameter(request,"IDRH")       |
| 23  | PERIODO         | getParameter(request,"PERIODO")    |
| 26  | znombreemp      | getParameter(request,"znombreemp") |
| 28  | estado          | getParameter(request,"estado")     |
| 29  | zinicios        | getParameter(request,"zinicios")   |

| L   | Variable          | Expresión fuente                                                               | Resolución estática parcial                                                                                                                |
| --- | ----------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 21  | IDRH              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                                                                           |
| 23  | PERIODO           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO")                                                                        |
| 26  | znombreemp        | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombreemp")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znombreemp")                                                                     |
| 28  | estado            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                         |
| 29  | zinicios          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                       |
| 30  | profData          | Tran.getProperty("Labelmss.ProfsData")                                         | Tran.getProperty("Labelmss.ProfsData")                                                                                                     |
| 42  | zsubsesion        | "SSM_CR_PREFERENC"                                                             | SSM_CR_PREFERENC                                                                                                                           |
| 43  | zmeta4object      | "SSM_CR_PREFERENC"                                                             | SSM_CR_PREFERENC                                                                                                                           |
| 44  | zmetodocarga      | zsubsesion + "!SSM_CR_PREFERENC_PRINCIPAL.CARGA"                               | SSM_CR_PREFERENC{"!SSM_CR_PREFERENC_PRINCIPAL.CARGA"}                                                                                      |
| 45  | znodo             | "SSM_CR_PREFERENC"                                                             | SSM_CR_PREFERENC                                                                                                                           |
| 46  | zcomun            | znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + "."              | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}                                                        |
| 48  | zventanas         | "20"                                                                           | 20                                                                                                                                         |
| 50  | ziterator         | znodo + ":" + zsubsesion + "!" + znodo                                         | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC                                                                                 |
| 51  | zregistroinicial  | Integer.valueOf(zinicios).intValue()                                           | Integer.valueOf(zinicios).intValue()                                                                                                       |
| 53  | zventana          | Integer.valueOf(zventanas).intValue()                                          | Integer.valueOf(zventanas).intValue()                                                                                                      |
| 54  | zregistrofinal    | zregistroinicial + zventana - 1                                                | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                         |
| 55  | zmove             | znodo + ":" + znodo + "["+zregistroinicial+"]"                                 | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue()]                                                            |
| 56  | zoutputdef        | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]" | SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 57  | ztipocarga        | "ALL"                                                                          | ALL                                                                                                                                        |
| 61  | zfechainicio      | zcomun + "DT_START"                                                            | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}                                            |
| 62  | zfechafin         | zcomun + "DT_END"                                                              | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}                                              |
| 63  | zorden            | zcomun + "SCO_PREF_PRIORITY"                                                   | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}                                   |
| 64  | znombrepuesto     | zcomun + "STD_N_JOB_CODE"                                                      | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}                                      |
| 65  | znombreuo         | zcomun + "STD_N_WORK_UNIT"                                                     | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}                                     |
| 66  | znombrepais       | zcomun + "STD_N_COUNTRY"                                                       | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}                                       |
| 67  | znombrepcia       | zcomun + "STD_N_GEO_DIV"                                                       | SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}                                       |
| 92  | zcounti           | 0                                                                              | 0                                                                                                                                          |
| 97  | zcountv           | String.valueOf(zcounti)                                                        | String.valueOf(zcounti)                                                                                                                    |
| 98  | zto               | new Integer(new Integer(zcountv).intValue()-1).toString()                      | new Integer(new Integer(zcountv).intValue()-1).toString()                                                                                  |
| 125 | zregistroinicials | String.valueOf(zregistroinicial)                                               | String.valueOf(zregistroinicial)                                                                                                           |
| 126 | zregistrofinals   | String.valueOf(zregistroinicial + zcounti - 1)                                 | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                            |
| 127 | zposicions        | "0"                                                                            | 0                                                                                                                                          |
| 128 | zcontrol          | 0                                                                              | 0                                                                                                                                          |
| 131 | zposicion         | 0                                                                              | 0                                                                                                                                          |
| 149 | clase             | ""                                                                             |                                                                                                                                            |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                             |
| --- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 71  | m4:startpage | m4task=SSM_CR_PREFERENC                                                                                                                                        |
| 71  | m4:beginjob  |                                                                                                                                                                |
| 72  | m4:datadef   | m4o=SSM_CR_PREFERENC; m4name=SSM_CR_PREFERENC                                                                                                                  |
| 73  | m4:exec      | m4method=SSM_CR_PREFERENC{"!SSM_CR_PREFERENC_PRINCIPAL.CARGA"}                                                                                                 |
| 73  | m4:param     | name=ID_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"IDRH")                                                                            |
| 73  | m4:param     | name=OR_ARG; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"PERIODO")                                                                         |
| 74  | m4:outputdef | m4alias=SSM_CR_PREFERENC                                                                                                                                       |
| 74  | m4:param     | name=m4name0; value=SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 75  | m4:endjob    |                                                                                                                                                                |
| 76  | m4:move      |                                                                                                                                                                |
| 76  | m4:param     | name=SSM_CR_PREFERENC; value=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"["}Integer.valueOf(zinicios).intValue()]                                                   |
| 140 | m4:label     | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                          |
| 141 | m4:label     | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                                            |
| 142 | m4:label     | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}; htmlsafe=true                                 |
| 143 | m4:label     | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 144 | m4:label     | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                   |
| 145 | m4:label     | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                     |
| 146 | m4:label     | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                     |
| 150 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                      |
| 161 | m4:item      | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_START"}; htmlsafe=true                                          |
| 162 | m4:item      | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"DT_END"}; htmlsafe=true                                            |
| 163 | m4:item      | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"SCO_PREF_PRIORITY"}; htmlsafe=true                                 |
| 164 | m4:item      | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_JOB_CODE"}; htmlsafe=true                                    |
| 165 | m4:item      | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_WORK_UNIT"}; htmlsafe=true                                   |
| 166 | m4:item      | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_COUNTRY"}; htmlsafe=true                                     |
| 167 | m4:item      | m4name=SSM_CR_PREFERENC{":"}SSM_CR_PREFERENC{"!"}SSM_CR_PREFERENC{"[&amp;VAR.m4lix]"}{"."}{"STD_N_GEO_DIV"}; htmlsafe=true                                     |
| 179 | m4:endpage   |                                                                                                                                                                |

| L   | Operación        | Argumentos literales   |
| --- | ---------------- | ---------------------- |
| 95  | getCountInClient | znodo,zsubsesion,znodo |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función     | Argumentos |
| --- | ----------- | ---------- |
| 79  | load        | empleado   |
| 85  | plan_accion |            |

| L   | Condición / acción / mensaje literal                                                                                                                  |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 31  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                       |
| 32  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                               |
| 124 | &lt;%if (zcounti &gt; 0) {                                                                                                                            |
| 154 | if (zcontrol==0){                                                                                                                                     |
| 156 | }else{                                                                                                                                                |
| 171 | &lt;%} else {%&gt;                                                                                                                                    |
| 44  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSM_CR_PREFERENC_PRINCIPAL.CARGA";                                          |
| 46  | expresión de cálculo/transformación: String zcomun = znodo + ":" + zsubsesion + "!" + znodo + "[&amp;VAR.m4lix]" + ".";                               |
| 50  | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                                       |
| 52  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                         |
| 54  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                            |
| 55  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "["+zregistroinicial+"]";                                                   |
| 56  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";              |
| 61  | expresión de cálculo/transformación: String zfechainicio = zcomun + "DT_START";                                                                       |
| 62  | expresión de cálculo/transformación: String zfechafin = zcomun + "DT_END";                                                                            |
| 63  | expresión de cálculo/transformación: String zorden = zcomun + "SCO_PREF_PRIORITY";                                                                    |
| 64  | expresión de cálculo/transformación: String znombrepuesto = zcomun + "STD_N_JOB_CODE";                                                                |
| 65  | expresión de cálculo/transformación: String znombreuo = zcomun + "STD_N_WORK_UNIT";                                                                   |
| 66  | expresión de cálculo/transformación: String znombrepais = zcomun + "STD_N_COUNTRY";                                                                   |
| 67  | expresión de cálculo/transformación: String znombrepcia = zcomun + "STD_N_GEO_DIV";                                                                   |
| 81  | expresión de cálculo/transformación: var dir="/servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person=" + empleado; |
| 126 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                         |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 15  | ../../mss_generico/espanol/menu_mss.jsp            |
| 16  | /mss_g3/mss_ev_trans.jsp                           |
| 38  | ../../mss_generico/espanol/mssgenerico_menusup.jsp |
| 39  | ../../sse_generico/espanol/generico_links.jsp      |
| 176 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                                                          |
| --- | ------------------------------------------------------------------------------------------ |
| 11  | /css/estilo_mss.css                                                                        |
| 12  | /libreria/funciones_sse_val.js                                                             |
| 13  | /libreria/funciones_sse.js                                                                 |
| 34  | /library/m4gen_excep.js                                                                    |
| 104 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp                                 |
| 115 | /iconos/noname_plan_carrera_133_100.gif                                                    |
| 119 | javascript:plan_accion();                                                                  |
| 134 | javascript:load(                                                                           |
| 15  | ../../mss_generico/espanol/menu_mss.jsp                                                    |
| 16  | /mss_g3/mss_ev_trans.jsp                                                                   |
| 38  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         |
| 39  | ../../sse_generico/espanol/generico_links.jsp                                              |
| 81  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= |
| 176 | ../../sse_generico/espanol/generico_disclaimer.jsp                                         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                                 | Resolución | Ficha / candidato                                                                                         |
| ------ | --- | ------------------------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------- |
| BASE   | 15  | ../../mss_generico/espanol/menu_mss.jsp                                                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 16  | /mss_g3/mss_ev_trans.jsp                                                                   | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                        |
| BASE   | 38  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 39  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 176 | ../../sse_generico/espanol/generico_disclaimer.jsp                                         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |
| BASE   | 12  | /libreria/funciones_sse_val.js                                                             | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)            |
| BASE   | 13  | /libreria/funciones_sse.js                                                                 | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                    |
| BASE   | 34  | /library/m4gen_excep.js                                                                    | contextual | [library/m4gen_excep.js](../../transversal/dependencias/library--m4gen_excep.md)                          |
| BASE   | 104 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_dev_plan_emp.jsp                                 | contextual | [mss_g3/smco_g3_dev_plan_emp.jsp](mss_g3--smco_g3_dev_plan_emp.md)                                        |
| BASE   | 119 | javascript:plan_accion();                                                                  | dinámica   | P06                                                                                                       |
| BASE   | 134 | javascript:load(                                                                           | dinámica   | P06                                                                                                       |
| BASE   | 15  | ../../mss_generico/espanol/menu_mss.jsp                                                    | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                          |
| BASE   | 16  | /mss_g3/mss_ev_trans.jsp                                                                   | contextual | [mss_g3/mss_ev_trans.jsp](mss_g3--mss_ev_trans.md)                                                        |
| BASE   | 38  | ../../mss_generico/espanol/mssgenerico_menusup.jsp                                         | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                    |
| BASE   | 39  | ../../sse_generico/espanol/generico_links.jsp                                              | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)           |
| BASE   | 81  | /servlet/CheckSecurity/JSP/mss_g1/smco_g1_profs_info_redirection.jsp?estado=11&amp;person= | ausente    | P06                                                                                                       |
| BASE   | 176 | ../../sse_generico/espanol/generico_disclaimer.jsp                                         | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/mss_g3_p21.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
