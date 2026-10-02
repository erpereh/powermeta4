# Cuestionario de evaluación

Identificador: `sse_g3/sse_g3_p8_desc.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Diferencias por sociedad frente a BASE

Comparación de identificadores declarados en contratos `m4:` para la misma ubicación española/compartida. No cubre todos los cambios de UI, condiciones o includes: esos detalles permanecen separados en las versiones de la ficha. Un identificador presente solo en una versión no prueba disponibilidad en servidor.

| Ámbito | Ubicación | Hash                | Solo en variante                                                                                                                                                                                                                                                                                                               | Solo en BASE                                                                                                                                                                                               |
| ------ | --------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | espanol   | contenido diferente | m4:datadef:CSP_TRAINING_EVAL; m4:exec:CSP_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}; m4:item:SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_TYPE"}; m4:item:SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} | m4:datadef:SSE_TRAINING_EVAL; m4:exec:SSE_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}; m4:item:SSE_ANSWER_VALUE{":"}SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} |
| CYC    | espanol   | contenido diferente | m4:datadef:CSP_TRAINING_EVAL; m4:exec:CSP_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}; m4:item:SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_TYPE"}; m4:item:SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} | m4:datadef:SSE_TRAINING_EVAL; m4:exec:SSE_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}; m4:item:SSE_ANSWER_VALUE{":"}SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} |
| IBER   | espanol   | contenido diferente | m4:datadef:CSP_TRAINING_EVAL; m4:exec:CSP_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}; m4:item:SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_TYPE"}; m4:item:SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} | m4:datadef:SSE_TRAINING_EVAL; m4:exec:SSE_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}; m4:item:SSE_ANSWER_VALUE{":"}SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| COLL / español    | [m4custom/COLL/sse_g3/espanol/sse_g3_p8_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p8_desc.jsp) | `db22704fbaf2673f67c6233b97a6787fa732dda738f75872ee370323237bd708` |    216 |
| CYC / español     | [m4custom/CYC/sse_g3/espanol/sse_g3_p8_desc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p8_desc.jsp)   | `ef22b273001f93b66da691623c9b303d29d8c48353a80cc353b74093499fc5d0` |    225 |
| IBER / español    | [m4custom/IBER/sse_g3/espanol/sse_g3_p8_desc.jsp](../../../../clon_portal/portal/m4custom/IBER/sse_g3/espanol/sse_g3_p8_desc.jsp) | `db22704fbaf2673f67c6233b97a6787fa732dda738f75872ee370323237bd708` |    216 |
| BASE / español    | [sse_g3/espanol/sse_g3_p8_desc.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p8_desc.jsp)                             | `611fae617334a8d7cbb3192fd43281394dd52425135f93152e89ca8ab02b6dc2` |    178 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: COLL ES, IBER ES

Fuente de los localizadores `L`: [m4custom/COLL/sse_g3/espanol/sse_g3_p8_desc.jsp](../../../../clon_portal/portal/m4custom/COLL/sse_g3/espanol/sse_g3_p8_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                      |
| --- | ----------------------------------------------------------------------------- |
| 7   | Cuestionario de evaluación                                                    |
| 125 | Cuestionario de evaluación                                                    |
| 128 | Para evaluar un curso, completa el siguiente formulario. Evaluación de cursos |
| 140 | Curso: [valor dinámico]                                                       |
| 156 | * [valor dinámico]                                                            |
| 157 | Sin respuesta                                                                 |
| 199 | No tienes preguntas en este cuestionario.                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 127 | img     | alt=Cuestionario de evaluación; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100                                                                    |
| 133 | a       | class=enlacefuncional; title=Evaluación de cursos; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31                                                     |
| 138 | form    | action=sse_g3_p8_act.jsp; method=post; id=Formulario                                                                                                                  |
| 160 | input   | id=I&lt;%=zIDQUESTION%&gt;; name=I&lt;%=zIDQUESTION%&gt;; size=48                                                                                                     |
| 164 | select  | id=P&lt;%=zIDQUESTION%&gt;; class=fuenteformulario; name=P&lt;%=zIDQUESTION%&gt;; title=Escoge la respuesta                                                           |
| 165 | option  | value=R00                                                                                                                                                             |
| 175 | option  | value=R&lt;m4:item m4name=; htmlsafe=true                                                                                                                             |
| 192 | a       | href=javascript:enviar();                                                                                                                                             |
| 193 | img     | alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 43  | COU             | getParameter(request,"COU")      |
| 47  | zinicios        | getParameter(request,"zinicios") |
| 48  | 1               | getParameter(request,"1")        |

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                                                 |
| --- | ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 37  | zpk1             | Parametros.m4paramvalor ("PK1")                                         | Parametros.m4paramvalor ("PK1")                                                                             |
| 38  | zpk2             | Parametros.m4paramvalor ("PK2")                                         | Parametros.m4paramvalor ("PK2")                                                                             |
| 39  | zpk3             | Parametros.m4paramvalor ("PK3")                                         | Parametros.m4paramvalor ("PK3")                                                                             |
| 40  | zpk4             | Parametros.m4paramvalor ("PK4")                                         | Parametros.m4paramvalor ("PK4")                                                                             |
| 41  | zpk5             | Parametros.m4paramvalor ("PK5")                                         | Parametros.m4paramvalor ("PK5")                                                                             |
| 42  | zSCOURSE         | Parametros.m4paramvalor ("COU")                                         | Parametros.m4paramvalor ("COU")                                                                             |
| 43  | zSCOURSE         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COU")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COU")                                             |
| 44  | estado           | Parametros.m4paramvalor ("EST")                                         | Parametros.m4paramvalor ("EST")                                                                             |
| 47  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                        |
| 48  | ztipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"1")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"1")                                               |
| 64  | zsubsesion       | "CSP_TRAINING_EVAL"                                                     | CSP_TRAINING_EVAL                                                                                           |
| 65  | zmeta4object     | "CSP_TRAINING_EVAL"                                                     | CSP_TRAINING_EVAL                                                                                           |
| 66  | znodo            | "SSE_FORM_QUESTIONS"                                                    | SSE_FORM_QUESTIONS                                                                                          |
| 67  | znodoeva         | "SSE_EVEN_EVAL_SHEET"                                                   | SSE_EVEN_EVAL_SHEET                                                                                         |
| 68  | znodoans         | "SSE_ANSWER_VALUE"                                                      | SSE_ANSWER_VALUE                                                                                            |
| 72  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"                                        | CSP_TRAINING_EVAL{"!"}SSE_FORM_QUESTIONS{"[*]"}                                                             |
| 73  | zmove            | znodo + ":" + znodo + "[FIRST]"                                         | SSE_FORM_QUESTIONS{":"}SSE_FORM_QUESTIONS{"[FIRST]"}                                                        |
| 75  | zoutputdefans    | zsubsesion + "!" + znodoans + "[*]"                                     | CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[*]"}                                                               |
| 76  | zmoveans         | znodoans + ":" + znodoans + "[FIRST]"                                   | SSE_ANSWER_VALUE{":"}SSE_ANSWER_VALUE{"[FIRST]"}                                                            |
| 77  | zcomunans        | znodoans + ":" + zsubsesion + "!" + znodoans + "[&amp;VAR.m4lix]" + "." | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}                        |
| 81  | ztipocarga       | "DET"                                                                   | DET                                                                                                         |
| 82  | zmetodocarga     | zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA"                               | CSP_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                             |
| 86  | zidrespuesta     | zcomunans + "SCO_ID_ANSWER_VALUE"                                       | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_VALUE"} |
| 87  | zrespuesta       | zcomunans + "SCO_NM_ANSWER_VALUE"                                       | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} |
| 89  | zTipoRespuesta   | zcomunans + "SCO_ID_ANSWER_TYPE"                                        | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_TYPE"}  |
| 109 | zcounti          | 0                                                                       | 0                                                                                                           |
| 114 | zcountv          | String.valueOf(zcounti)                                                 | String.valueOf(zcounti)                                                                                     |
| 116 | zcountians       | 0                                                                       | 0                                                                                                           |
| 121 | zcountvans       | String.valueOf(zcountians)                                              | String.valueOf(zcountians)                                                                                  |
| 122 | ztoans           | new Integer(new Integer(zcountvans).intValue()-1).toString()            | new Integer(new Integer(zcountvans).intValue()-1).toString()                                                |
| 144 | i                | 0                                                                       | 0                                                                                                           |
| 145 | zSQUESTION       | ""                                                                      |                                                                                                             |
| 146 | zIDQUESTION      | ""                                                                      |                                                                                                             |
| 147 | zSCOIDANSWERTYPE | ""                                                                      |                                                                                                             |
| 149 | id               | String.valueOf(i)                                                       | String.valueOf(i)                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 92  | m4:startpage | m4task=CSP_TRAINING_EVAL                                                                                                          |
| 92  | m4:beginjob  |                                                                                                                                   |
| 93  | m4:datadef   | m4o=CSP_TRAINING_EVAL; m4name=CSP_TRAINING_EVAL                                                                                   |
| 103 | m4:exec      | m4method=CSP_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                                          |
| 103 | m4:param     | name=TIPO_CARGA; value=DET                                                                                                        |
| 104 | m4:outputdef | m4alias=SSE_FORM_QUESTIONS                                                                                                        |
| 104 | m4:param     | name=m4name0; value=CSP_TRAINING_EVAL{"!"}SSE_FORM_QUESTIONS{"[*]"}                                                               |
| 105 | m4:outputdef | m4alias=SSE_ANSWER_VALUE                                                                                                          |
| 105 | m4:param     | name=m4name0; value=CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[*]"}                                                                 |
| 106 | m4:endjob    |                                                                                                                                   |
| 107 | m4:move      |                                                                                                                                   |
| 107 | m4:param     | name=CSP_TRAINING_EVAL; value=SSE_FORM_QUESTIONS{":"}SSE_FORM_QUESTIONS{"[FIRST]"}                                                |
| 162 | m4:move      |                                                                                                                                   |
| 162 | m4:param     | name=CSP_TRAINING_EVAL; value=SSE_ANSWER_VALUE{":"}SSE_ANSWER_VALUE{"[FIRST]"}                                                    |
| 170 | m4:loop      | from=0; to=new Integer(new Integer(zcountvans).intValue()-1).toString()                                                           |
| 173 | m4:item      | m4name=SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_TYPE"}; htmlsafe=true  |
| 175 | m4:item      | m4name=SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"}; htmlsafe=true |
| 214 | m4:endpage   |                                                                                                                                   |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 97  | setItem          | zsubsesion,znodoeva,"","SCO_ID_DEV_ACTION_ARG",zpk2 |
| 98  | setItem          | zsubsesion,znodoeva,"","SCO_ID_FORM_ARG",zpk3       |
| 99  | setItem          | zsubsesion,znodoeva,"","SCO_OR_STUDENT_ARG",zpk4    |
| 112 | getCountInClient | znodo,zsubsesion,znodo                              |
| 119 | getCountInClient | znodoans,zsubsesion,znodoans                        |
| 151 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_L_QUESTION"     |
| 152 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_QUESTION"       |
| 153 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_ANSWER_TYPE"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 14  | enviar  |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | if ($(this).val()=='R00') {                                                                                                                                                                                         |
| 29  | if (conrespuesta) {m4submit("Formulario");} else {alert('Advertencia: es necesario contestar todas las preguntas del formulario para que éste sea enviado, en caso contrario esta evaluación seguirá pendiente.');} |
| 49  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                 |
| 52  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                                                                                             |
| 159 | &lt;% if (zSCOIDANSWERTYPE.equals("02")){%&gt;                                                                                                                                                                      |
| 161 | &lt;% }else {%&gt;                                                                                                                                                                                                  |
| 174 | if (tipoRespuestaForm == tipoRespuestaValue) {                                                                                                                                                                      |
| 188 | if (zcounti &gt; 0) {                                                                                                                                                                                               |
| 197 | &lt;% }else {%&gt;                                                                                                                                                                                                  |
| 72  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                                          |
| 73  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                                                                                |
| 75  | expresión de cálculo/transformación: String zoutputdefans = zsubsesion + "!" + znodoans + "[*]";                                                                                                                    |
| 76  | expresión de cálculo/transformación: String zmoveans = znodoans + ":" + znodoans + "[FIRST]";                                                                                                                       |
| 77  | expresión de cálculo/transformación: String zcomunans = znodoans + ":" + zsubsesion + "!" + znodoans + "[&amp;VAR.m4lix]" + ".";                                                                                    |
| 82  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA";                                                                                                               |
| 86  | expresión de cálculo/transformación: String zidrespuesta = zcomunans + "SCO_ID_ANSWER_VALUE";                                                                                                                       |
| 87  | expresión de cálculo/transformación: String zrespuesta = zcomunans + "SCO_NM_ANSWER_VALUE";                                                                                                                         |
| 89  | expresión de cálculo/transformación: String zTipoRespuesta = zcomunans + "SCO_ID_ANSWER_TYPE";                                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 61  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 62  | ../../sse_generico/espanol/generico_links.jsp      |
| 206 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                       |
| 9   | /libreria/funciones_sse.js                                |
| 11  | /libreria/clase_val_entradas.js                           |
| 12  | /library/jquery.js                                        |
| 127 | /iconos/noname_evalua_cursos_74_100.gif                   |
| 133 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31 |
| 138 | sse_g3_p8_act.jsp                                         |
| 192 | javascript:enviar();                                      |
| 193 | /iconos/icono_enviar_ess_36_36.gif                        |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 61  | ../../sse_generico/espanol/generico_menusup.jsp           |
| 62  | ../../sse_generico/espanol/generico_links.jsp             |
| 206 | ../../sse_generico/espanol/generico_disclaimer.jsp        |

## Versión 2: CYC ES

Fuente de los localizadores `L`: [m4custom/CYC/sse_g3/espanol/sse_g3_p8_desc.jsp](../../../../clon_portal/portal/m4custom/CYC/sse_g3/espanol/sse_g3_p8_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                      |
| --- | ----------------------------------------------------------------------------- |
| 7   | Cuestionario de evaluación                                                    |
| 134 | Cuestionario de evaluación                                                    |
| 137 | Para evaluar un curso, completa el siguiente formulario. Evaluación de cursos |
| 149 | Curso: [valor dinámico]                                                       |
| 165 | * [valor dinámico]                                                            |
| 208 | No tienes preguntas en este cuestionario.                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 136 | img     | alt=Cuestionario de evaluación; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100                                                                    |
| 142 | a       | class=enlacefuncional; title=Evaluación de cursos; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31                                                     |
| 147 | form    | action=sse_g3_p8_act.jsp; method=post; id=Formulario                                                                                                                  |
| 169 | input   | id=I&lt;%=zIDQUESTION%&gt;; name=I&lt;%=zIDQUESTION%&gt;; size=48                                                                                                     |
| 173 | select  | id=P&lt;%=zIDQUESTION%&gt;; class=fuenteformulario; name=P&lt;%=zIDQUESTION%&gt;; title=Escoge la respuesta                                                           |
| 184 | option  | value=R&lt;m4:item m4name=; htmlsafe=true                                                                                                                             |
| 201 | a       | href=javascript:enviar();                                                                                                                                             |
| 202 | img     | alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 52  | COU             | getParameter(request,"COU")      |
| 56  | zinicios        | getParameter(request,"zinicios") |
| 57  | 1               | getParameter(request,"1")        |

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                                                 |
| --- | ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 46  | zpk1             | Parametros.m4paramvalor ("PK1")                                         | Parametros.m4paramvalor ("PK1")                                                                             |
| 47  | zpk2             | Parametros.m4paramvalor ("PK2")                                         | Parametros.m4paramvalor ("PK2")                                                                             |
| 48  | zpk3             | Parametros.m4paramvalor ("PK3")                                         | Parametros.m4paramvalor ("PK3")                                                                             |
| 49  | zpk4             | Parametros.m4paramvalor ("PK4")                                         | Parametros.m4paramvalor ("PK4")                                                                             |
| 50  | zpk5             | Parametros.m4paramvalor ("PK5")                                         | Parametros.m4paramvalor ("PK5")                                                                             |
| 51  | zSCOURSE         | Parametros.m4paramvalor ("COU")                                         | Parametros.m4paramvalor ("COU")                                                                             |
| 52  | zSCOURSE         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COU")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COU")                                             |
| 53  | estado           | Parametros.m4paramvalor ("EST")                                         | Parametros.m4paramvalor ("EST")                                                                             |
| 56  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                        |
| 57  | ztipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"1")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"1")                                               |
| 73  | zsubsesion       | "CSP_TRAINING_EVAL"                                                     | CSP_TRAINING_EVAL                                                                                           |
| 74  | zmeta4object     | "CSP_TRAINING_EVAL"                                                     | CSP_TRAINING_EVAL                                                                                           |
| 75  | znodo            | "SSE_FORM_QUESTIONS"                                                    | SSE_FORM_QUESTIONS                                                                                          |
| 76  | znodoeva         | "SSE_EVEN_EVAL_SHEET"                                                   | SSE_EVEN_EVAL_SHEET                                                                                         |
| 77  | znodoans         | "SSE_ANSWER_VALUE"                                                      | SSE_ANSWER_VALUE                                                                                            |
| 81  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"                                        | CSP_TRAINING_EVAL{"!"}SSE_FORM_QUESTIONS{"[*]"}                                                             |
| 82  | zmove            | znodo + ":" + znodo + "[FIRST]"                                         | SSE_FORM_QUESTIONS{":"}SSE_FORM_QUESTIONS{"[FIRST]"}                                                        |
| 84  | zoutputdefans    | zsubsesion + "!" + znodoans + "[*]"                                     | CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[*]"}                                                               |
| 85  | zmoveans         | znodoans + ":" + znodoans + "[FIRST]"                                   | SSE_ANSWER_VALUE{":"}SSE_ANSWER_VALUE{"[FIRST]"}                                                            |
| 86  | zcomunans        | znodoans + ":" + zsubsesion + "!" + znodoans + "[&amp;VAR.m4lix]" + "." | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}                        |
| 90  | ztipocarga       | "DET"                                                                   | DET                                                                                                         |
| 91  | zmetodocarga     | zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA"                               | CSP_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                             |
| 95  | zidrespuesta     | zcomunans + "SCO_ID_ANSWER_VALUE"                                       | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_VALUE"} |
| 96  | zrespuesta       | zcomunans + "SCO_NM_ANSWER_VALUE"                                       | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} |
| 98  | zTipoRespuesta   | zcomunans + "SCO_ID_ANSWER_TYPE"                                        | SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_TYPE"}  |
| 118 | zcounti          | 0                                                                       | 0                                                                                                           |
| 123 | zcountv          | String.valueOf(zcounti)                                                 | String.valueOf(zcounti)                                                                                     |
| 125 | zcountians       | 0                                                                       | 0                                                                                                           |
| 130 | zcountvans       | String.valueOf(zcountians)                                              | String.valueOf(zcountians)                                                                                  |
| 131 | ztoans           | new Integer(new Integer(zcountvans).intValue()-1).toString()            | new Integer(new Integer(zcountvans).intValue()-1).toString()                                                |
| 153 | i                | 0                                                                       | 0                                                                                                           |
| 154 | zSQUESTION       | ""                                                                      |                                                                                                             |
| 155 | zIDQUESTION      | ""                                                                      |                                                                                                             |
| 156 | zSCOIDANSWERTYPE | ""                                                                      |                                                                                                             |
| 158 | id               | String.valueOf(i)                                                       | String.valueOf(i)                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 101 | m4:startpage | m4task=CSP_TRAINING_EVAL                                                                                                          |
| 101 | m4:beginjob  |                                                                                                                                   |
| 102 | m4:datadef   | m4o=CSP_TRAINING_EVAL; m4name=CSP_TRAINING_EVAL                                                                                   |
| 112 | m4:exec      | m4method=CSP_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                                          |
| 112 | m4:param     | name=TIPO_CARGA; value=DET                                                                                                        |
| 113 | m4:outputdef | m4alias=SSE_FORM_QUESTIONS                                                                                                        |
| 113 | m4:param     | name=m4name0; value=CSP_TRAINING_EVAL{"!"}SSE_FORM_QUESTIONS{"[*]"}                                                               |
| 114 | m4:outputdef | m4alias=SSE_ANSWER_VALUE                                                                                                          |
| 114 | m4:param     | name=m4name0; value=CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[*]"}                                                                 |
| 115 | m4:endjob    |                                                                                                                                   |
| 116 | m4:move      |                                                                                                                                   |
| 116 | m4:param     | name=CSP_TRAINING_EVAL; value=SSE_FORM_QUESTIONS{":"}SSE_FORM_QUESTIONS{"[FIRST]"}                                                |
| 171 | m4:move      |                                                                                                                                   |
| 171 | m4:param     | name=CSP_TRAINING_EVAL; value=SSE_ANSWER_VALUE{":"}SSE_ANSWER_VALUE{"[FIRST]"}                                                    |
| 179 | m4:loop      | from=0; to=new Integer(new Integer(zcountvans).intValue()-1).toString()                                                           |
| 182 | m4:item      | m4name=SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_TYPE"}; htmlsafe=true  |
| 184 | m4:item      | m4name=SSE_ANSWER_VALUE{":"}CSP_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"}; htmlsafe=true |
| 223 | m4:endpage   |                                                                                                                                   |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 106 | setItem          | zsubsesion,znodoeva,"","SCO_ID_DEV_ACTION_ARG",zpk2 |
| 107 | setItem          | zsubsesion,znodoeva,"","SCO_ID_FORM_ARG",zpk3       |
| 108 | setItem          | zsubsesion,znodoeva,"","SCO_OR_STUDENT_ARG",zpk4    |
| 121 | getCountInClient | znodo,zsubsesion,znodo                              |
| 128 | getCountInClient | znodoans,zsubsesion,znodoans                        |
| 160 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_L_QUESTION"     |
| 161 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_QUESTION"       |
| 162 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_ANSWER_TYPE"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 14  | enviar  |            |

| L   | Condición / acción / mensaje literal                                                                                                                                                                                |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24  | if ($(this).val()=='R00') {                                                                                                                                                                                         |
| 29  | if (conrespuesta) {m4submit("Formulario");} else {alert('Advertencia: es necesario contestar todas las preguntas del formulario para que éste sea enviado, en caso contrario esta evaluación seguirá pendiente.');} |
| 36  | if(this.innerHTML=="Sin seleccionar"){                                                                                                                                                                              |
| 58  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                                                                                                                 |
| 61  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                                                                                                             |
| 168 | &lt;% if (zSCOIDANSWERTYPE.equals("02")){%&gt;                                                                                                                                                                      |
| 170 | &lt;% }else {%&gt;                                                                                                                                                                                                  |
| 183 | if (tipoRespuestaForm == tipoRespuestaValue) {                                                                                                                                                                      |
| 197 | if (zcounti &gt; 0) {                                                                                                                                                                                               |
| 206 | &lt;% }else {%&gt;                                                                                                                                                                                                  |
| 81  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                                                                                                          |
| 82  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                                                                                                                |
| 84  | expresión de cálculo/transformación: String zoutputdefans = zsubsesion + "!" + znodoans + "[*]";                                                                                                                    |
| 85  | expresión de cálculo/transformación: String zmoveans = znodoans + ":" + znodoans + "[FIRST]";                                                                                                                       |
| 86  | expresión de cálculo/transformación: String zcomunans = znodoans + ":" + zsubsesion + "!" + znodoans + "[&amp;VAR.m4lix]" + ".";                                                                                    |
| 91  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA";                                                                                                               |
| 95  | expresión de cálculo/transformación: String zidrespuesta = zcomunans + "SCO_ID_ANSWER_VALUE";                                                                                                                       |
| 96  | expresión de cálculo/transformación: String zrespuesta = zcomunans + "SCO_NM_ANSWER_VALUE";                                                                                                                         |
| 98  | expresión de cálculo/transformación: String zTipoRespuesta = zcomunans + "SCO_ID_ANSWER_TYPE";                                                                                                                      |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 70  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 71  | ../../sse_generico/espanol/generico_links.jsp      |
| 215 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                       |
| 9   | /libreria/funciones_sse.js                                |
| 11  | /libreria/clase_val_entradas.js                           |
| 12  | /library/jquery.js                                        |
| 136 | /iconos/noname_evalua_cursos_74_100.gif                   |
| 142 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31 |
| 147 | sse_g3_p8_act.jsp                                         |
| 201 | javascript:enviar();                                      |
| 202 | /iconos/icono_enviar_ess_36_36.gif                        |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 70  | ../../sse_generico/espanol/generico_menusup.jsp           |
| 71  | ../../sse_generico/espanol/generico_links.jsp             |
| 215 | ../../sse_generico/espanol/generico_disclaimer.jsp        |

## Versión 3: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/sse_g3_p8_desc.jsp](../../../../clon_portal/portal/sse_g3/espanol/sse_g3_p8_desc.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                      |
| --- | ----------------------------------------------------------------------------- |
| 7   | Cuestionario de evaluación                                                    |
| 106 | Cuestionario de evaluación                                                    |
| 109 | Para evaluar un curso, completa el siguiente formulario. Evaluación de cursos |
| 121 | Curso: [valor dinámico]                                                       |
| 137 | * [valor dinámico]                                                            |
| 138 | Sin respuesta "&gt;                                                           |
| 166 | No tienes preguntas en este cuestionario.                                     |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 108 | img     | alt=Cuestionario de evaluación; src=/iconos/noname_evalua_cursos_74_100.gif; width=100; height=100                                                                    |
| 114 | a       | class=enlacefuncional; title=Evaluación de cursos; href=/servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31                                                     |
| 119 | form    | action=sse_g3_p8_act.jsp; method=post; id=Formulario                                                                                                                  |
| 141 | select  | id=P&lt;%=zIDQUESTION%&gt;; class=fuenteformulario; name=P&lt;%=zIDQUESTION%&gt;; title=Escoge la respuesta                                                           |
| 142 | option  | value=R00                                                                                                                                                             |
| 144 | option  | value=R&lt;m4:item m4name=; htmlsafe=true                                                                                                                             |
| 148 | input   | id=I&lt;%=zIDQUESTION%&gt;; name=I&lt;%=zIDQUESTION%&gt;; size=48                                                                                                     |
| 159 | a       | href=javascript:enviar();                                                                                                                                             |
| 160 | img     | alt=Enviar; src=/iconos/icono_enviar_ess_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                   |
| --- | --------------- | -------------------------------- |
| 26  | COU             | getParameter(request,"COU")      |
| 30  | zinicios        | getParameter(request,"zinicios") |
| 31  | 1               | getParameter(request,"1")        |

| L   | Variable         | Expresión fuente                                                        | Resolución estática parcial                                                                                 |
| --- | ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| 20  | zpk1             | Parametros.m4paramvalor ("PK1")                                         | Parametros.m4paramvalor ("PK1")                                                                             |
| 21  | zpk2             | Parametros.m4paramvalor ("PK2")                                         | Parametros.m4paramvalor ("PK2")                                                                             |
| 22  | zpk3             | Parametros.m4paramvalor ("PK3")                                         | Parametros.m4paramvalor ("PK3")                                                                             |
| 23  | zpk4             | Parametros.m4paramvalor ("PK4")                                         | Parametros.m4paramvalor ("PK4")                                                                             |
| 24  | zpk5             | Parametros.m4paramvalor ("PK5")                                         | Parametros.m4paramvalor ("PK5")                                                                             |
| 25  | zSCOURSE         | Parametros.m4paramvalor ("COU")                                         | Parametros.m4paramvalor ("COU")                                                                             |
| 26  | zSCOURSE         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COU")         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"COU")                                             |
| 27  | estado           | Parametros.m4paramvalor ("EST")                                         | Parametros.m4paramvalor ("EST")                                                                             |
| 30  | zinicios         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                        |
| 31  | ztipo            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"1")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"1")                                               |
| 47  | zsubsesion       | "SSE_TRAINING_EVAL"                                                     | SSE_TRAINING_EVAL                                                                                           |
| 48  | zmeta4object     | "SSE_TRAINING_EVAL"                                                     | SSE_TRAINING_EVAL                                                                                           |
| 49  | znodo            | "SSE_FORM_QUESTIONS"                                                    | SSE_FORM_QUESTIONS                                                                                          |
| 50  | znodoeva         | "SSE_EVEN_EVAL_SHEET"                                                   | SSE_EVEN_EVAL_SHEET                                                                                         |
| 51  | znodoans         | "SSE_ANSWER_VALUE"                                                      | SSE_ANSWER_VALUE                                                                                            |
| 55  | zoutputdef       | zsubsesion + "!" + znodo + "[*]"                                        | SSE_TRAINING_EVAL{"!"}SSE_FORM_QUESTIONS{"[*]"}                                                             |
| 56  | zmove            | znodo + ":" + znodo + "[FIRST]"                                         | SSE_FORM_QUESTIONS{":"}SSE_FORM_QUESTIONS{"[FIRST]"}                                                        |
| 58  | zoutputdefans    | zsubsesion + "!" + znodoans + "[*]"                                     | SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[*]"}                                                               |
| 59  | zmoveans         | znodoans + ":" + znodoans + "[FIRST]"                                   | SSE_ANSWER_VALUE{":"}SSE_ANSWER_VALUE{"[FIRST]"}                                                            |
| 60  | zcomunans        | znodoans + ":" + zsubsesion + "!" + znodoans + "[&amp;VAR.m4lix]" + "." | SSE_ANSWER_VALUE{":"}SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}                        |
| 64  | ztipocarga       | "DET"                                                                   | DET                                                                                                         |
| 65  | zmetodocarga     | zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA"                               | SSE_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                             |
| 69  | zidrespuesta     | zcomunans + "SCO_ID_ANSWER_VALUE"                                       | SSE_ANSWER_VALUE{":"}SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_ANSWER_VALUE"} |
| 70  | zrespuesta       | zcomunans + "SCO_NM_ANSWER_VALUE"                                       | SSE_ANSWER_VALUE{":"}SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"} |
| 90  | zcounti          | 0                                                                       | 0                                                                                                           |
| 95  | zcountv          | String.valueOf(zcounti)                                                 | String.valueOf(zcounti)                                                                                     |
| 97  | zcountians       | 0                                                                       | 0                                                                                                           |
| 102 | zcountvans       | String.valueOf(zcountians)                                              | String.valueOf(zcountians)                                                                                  |
| 103 | ztoans           | new Integer(new Integer(zcountvans).intValue()-1).toString()            | new Integer(new Integer(zcountvans).intValue()-1).toString()                                                |
| 125 | i                | 0                                                                       | 0                                                                                                           |
| 126 | zSQUESTION       | ""                                                                      |                                                                                                             |
| 127 | zIDQUESTION      | ""                                                                      |                                                                                                             |
| 128 | zSCOIDANSWERTYPE | ""                                                                      |                                                                                                             |
| 130 | id               | String.valueOf(i)                                                       | String.valueOf(i)                                                                                           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 73  | m4:startpage | m4task=SSE_TRAINING_EVAL                                                                                                          |
| 73  | m4:beginjob  |                                                                                                                                   |
| 74  | m4:datadef   | m4o=SSE_TRAINING_EVAL; m4name=SSE_TRAINING_EVAL                                                                                   |
| 84  | m4:exec      | m4method=SSE_TRAINING_EVAL{"!SSE_EVEN_EVAL_SHEET.CARGA"}                                                                          |
| 84  | m4:param     | name=TIPO_CARGA; value=DET                                                                                                        |
| 85  | m4:outputdef | m4alias=SSE_FORM_QUESTIONS                                                                                                        |
| 85  | m4:param     | name=m4name0; value=SSE_TRAINING_EVAL{"!"}SSE_FORM_QUESTIONS{"[*]"}                                                               |
| 86  | m4:outputdef | m4alias=SSE_ANSWER_VALUE                                                                                                          |
| 86  | m4:param     | name=m4name0; value=SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[*]"}                                                                 |
| 87  | m4:endjob    |                                                                                                                                   |
| 88  | m4:move      |                                                                                                                                   |
| 88  | m4:param     | name=SSE_TRAINING_EVAL; value=SSE_FORM_QUESTIONS{":"}SSE_FORM_QUESTIONS{"[FIRST]"}                                                |
| 140 | m4:move      |                                                                                                                                   |
| 140 | m4:param     | name=SSE_TRAINING_EVAL; value=SSE_ANSWER_VALUE{":"}SSE_ANSWER_VALUE{"[FIRST]"}                                                    |
| 143 | m4:loop      | from=0; to=new Integer(new Integer(zcountvans).intValue()-1).toString()                                                           |
| 144 | m4:item      | m4name=SSE_ANSWER_VALUE{":"}SSE_TRAINING_EVAL{"!"}SSE_ANSWER_VALUE{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_ANSWER_VALUE"}; htmlsafe=true |
| 176 | m4:endpage   |                                                                                                                                   |

| L   | Operación        | Argumentos literales                                |
| --- | ---------------- | --------------------------------------------------- |
| 78  | setItem          | zsubsesion,znodoeva,"","SCO_ID_DEV_ACTION_ARG",zpk2 |
| 79  | setItem          | zsubsesion,znodoeva,"","SCO_ID_FORM_ARG",zpk3       |
| 80  | setItem          | zsubsesion,znodoeva,"","SCO_OR_STUDENT_ARG",zpk4    |
| 93  | getCountInClient | znodo,zsubsesion,znodo                              |
| 100 | getCountInClient | znodoans,zsubsesion,znodoans                        |
| 132 | getItem          | znodo,zmeta4object,znodo,"","SCO_NM_L_QUESTION"     |
| 133 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_QUESTION"       |
| 134 | getItem          | znodo,zmeta4object,znodo,"","SCO_ID_ANSWER_TYPE"    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función | Argumentos |
| --- | ------- | ---------- |
| 13  | enviar  |            |

| L   | Condición / acción / mensaje literal                                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------- |
| 32  | if ((estado==null)&#124;&#124;(estado.equals(""))){                                                                              |
| 35  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){                                                                          |
| 139 | &lt;% if (zSCOIDANSWERTYPE=="01" &#124;&#124; zSCOIDANSWERTYPE.equals("01")){%&gt;                                               |
| 147 | &lt;% }else {%&gt;                                                                                                               |
| 155 | if (zcounti &gt; 0) {                                                                                                            |
| 164 | &lt;% }else {%&gt;                                                                                                               |
| 55  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[*]";                                       |
| 56  | expresión de cálculo/transformación: String zmove = znodo + ":" + znodo + "[FIRST]";                                             |
| 58  | expresión de cálculo/transformación: String zoutputdefans = zsubsesion + "!" + znodoans + "[*]";                                 |
| 59  | expresión de cálculo/transformación: String zmoveans = znodoans + ":" + znodoans + "[FIRST]";                                    |
| 60  | expresión de cálculo/transformación: String zcomunans = znodoans + ":" + zsubsesion + "!" + znodoans + "[&amp;VAR.m4lix]" + "."; |
| 65  | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSE_EVEN_EVAL_SHEET.CARGA";                            |
| 69  | expresión de cálculo/transformación: String zidrespuesta = zcomunans + "SCO_ID_ANSWER_VALUE";                                    |
| 70  | expresión de cálculo/transformación: String zrespuesta = zcomunans + "SCO_NM_ANSWER_VALUE";                                      |

### Includes, navegación y dependencias

| L   | Include                                            |
| --- | -------------------------------------------------- |
| 10  | ../../sse_generico/espanol/menu_ess.jsp            |
| 44  | ../../sse_generico/espanol/generico_menusup.jsp    |
| 45  | ../../sse_generico/espanol/generico_links.jsp      |
| 173 | ../../sse_generico/espanol/generico_disclaimer.jsp |

| L   | Destino / recurso                                         |
| --- | --------------------------------------------------------- |
| 8   | /css/estilo_sse.css                                       |
| 9   | /libreria/funciones_sse.js                                |
| 11  | /libreria/clase_val_entradas.js                           |
| 108 | /iconos/noname_evalua_cursos_74_100.gif                   |
| 114 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31 |
| 119 | sse_g3_p8_act.jsp                                         |
| 159 | javascript:enviar();                                      |
| 160 | /iconos/icono_enviar_ess_36_36.gif                        |
| 10  | ../../sse_generico/espanol/menu_ess.jsp                   |
| 44  | ../../sse_generico/espanol/generico_menusup.jsp           |
| 45  | ../../sse_generico/espanol/generico_links.jsp             |
| 173 | ../../sse_generico/espanol/generico_disclaimer.jsp        |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                | Resolución | Ficha / candidato                                                                                                                                                                                  |
| ------ | --- | --------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 61  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 62  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 206 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| COLL   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| COLL   | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| COLL   | 12  | /library/jquery.js                                        | contextual | &#96;m4custom/COLL/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                                             |
| COLL   | 133 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| COLL   | 138 | sse_g3_p8_act.jsp                                         | física     | [sse_g3/sse_g3_p8_act.jsp](sse_g3--sse_g3_p8_act.md)                                                                                                                                               |
| COLL   | 192 | javascript:enviar();                                      | dinámica   | P06                                                                                                                                                                                                |
| COLL   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| COLL   | 61  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| COLL   | 62  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| COLL   | 206 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 70  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 71  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| CYC    | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| CYC    | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| CYC    | 12  | /library/jquery.js                                        | contextual | &#96;m4custom/CYC/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                                              |
| CYC    | 142 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| CYC    | 147 | sse_g3_p8_act.jsp                                         | física     | [sse_g3/sse_g3_p8_act.jsp](sse_g3--sse_g3_p8_act.md)                                                                                                                                               |
| CYC    | 201 | javascript:enviar();                                      | dinámica   | P06                                                                                                                                                                                                |
| CYC    | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| CYC    | 70  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| CYC    | 71  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| CYC    | 215 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 61  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 62  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 206 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| IBER   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md); [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                     |
| IBER   | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md); [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md) |
| IBER   | 12  | /library/jquery.js                                        | contextual | &#96;m4custom/IBER/library/jquery.js&#96;; &#96;library/jquery.js&#96;                                                                                                                             |
| IBER   | 133 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| IBER   | 138 | sse_g3_p8_act.jsp                                         | física     | [sse_g3/sse_g3_p8_act.jsp](sse_g3--sse_g3_p8_act.md)                                                                                                                                               |
| IBER   | 192 | javascript:enviar();                                      | dinámica   | P06                                                                                                                                                                                                |
| IBER   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| IBER   | 61  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| IBER   | 62  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| IBER   | 206 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 44  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 45  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 173 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |
| BASE   | 9   | /libreria/funciones_sse.js                                | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                                                                                                             |
| BASE   | 11  | /libreria/clase_val_entradas.js                           | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)                                                                                                   |
| BASE   | 114 | /servlet/CheckSecurity/JSP/sse_g3/sse_g3_p8.jsp?estado=31 | ausente    | P06                                                                                                                                                                                                |
| BASE   | 119 | sse_g3_p8_act.jsp                                         | física     | [sse_g3/sse_g3_p8_act.jsp](sse_g3--sse_g3_p8_act.md)                                                                                                                                               |
| BASE   | 159 | javascript:enviar();                                      | dinámica   | P06                                                                                                                                                                                                |
| BASE   | 10  | ../../sse_generico/espanol/menu_ess.jsp                   | física     | [sse_generico/menu_ess.jsp](../../transversal/navegacion/sse_generico--menu_ess.md)                                                                                                                |
| BASE   | 44  | ../../sse_generico/espanol/generico_menusup.jsp           | física     | [sse_generico/generico_menusup.jsp](../../transversal/navegacion/sse_generico--generico_menusup.md)                                                                                                |
| BASE   | 45  | ../../sse_generico/espanol/generico_links.jsp             | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                                                                                                    |
| BASE   | 173 | ../../sse_generico/espanol/generico_disclaimer.jsp        | física     | [sse_generico/generico_disclaimer.jsp](../../transversal/navegacion/sse_generico--generico_disclaimer.md)                                                                                          |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/sse_g3_p8_desc.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
