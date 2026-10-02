# ssco_evaluator_questions_seg

Identificador: `sse_g3/ssco_evaluator_questions_seg.jsp`. Perfil: **empleado**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave               | Texto                              | Ámbito | Diccionario                                                                                  |
| ------------------- | ---------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| Button.SaveTemp     | Guardar temporalmente              | COLL   | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTemp     | Guardar temporalmente              | CYC    | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTemp     | Guardar temporalmente              | IBER   | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTemp     | Guardar temporalmente              | BASE   | [translations/ess_mss_gen_es.properties:L74](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | COLL   | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | CYC    | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | IBER   | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Button.SaveTempCalc | Guardar temporalmente y calcular   | BASE   | [translations/ess_mss_gen_es.properties:L80](../../referencias/literales/ess_mss_gen_es.md)  |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | COLL   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | CYC    | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | IBER   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | Actualmente no tienes ningún dato. | BASE   | [translations/ess_mss_gen_es.properties:L114](../../referencias/literales/ess_mss_gen_es.md) |
| Label.NoDataFound   | No hay tareas pendientes.          | BASE   | [translations/ssco_etask_es.properties:L13](../../referencias/literales/ssco_etask_es.md)    |
| ev_ess.TitQuestion  | Cuestionario                       | BASE   | [translations/ess_ev_es.properties:L117](../../referencias/literales/ess_ev_es.md)           |
| ev_ess.TitQuestion  | Cuestionario                       | BASE   | [translations/mss_ev_es.properties:L150](../../referencias/literales/mss_ev_es.md)           |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                           | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_evaluator_questions_seg.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions_seg.jsp) | `961e2c3d44f2df000880f9d9bb94eaaa0743cc922f9a076cd90364b2ec018e10` |    265 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_evaluator_questions_seg.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions_seg.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 166 | :                        |
| 219 | "value=" "&gt;           |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                   |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 157 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg_act.jsp; method=post; name=nombreformulario; id=nombreformulario                                      |
| 158 | input   | type=hidden; id=SSE_CONOCIMIENTO_TEMP; name=SSE_CONOCIMIENTO_TEMP; value=&lt;%=id_cap%&gt;                                                                                  |
| 159 | input   | type=hidden; id=spos; name=spos; value=&lt;%=spos%&gt;                                                                                                                      |
| 160 | input   | type=hidden; id=SSE_CONO_QUESTION; name=SSE_CONO_QUESTION; value=                                                                                                           |
| 161 | input   | type=hidden; id=SSE_CAL_QUESTION; name=SSE_CAL_QUESTION; value=0                                                                                                            |
| 162 | input   | type=hidden; id=mss; name=mss; value=&lt;%=mss%&gt;                                                                                                                         |
| 181 | form    | name=a&lt;%=current%&gt;; id=a&lt;%=current%&gt;; action=                                                                                                                   |
| 214 | input   | id=id_ques&lt;%=current%&gt;; name=id_ques&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;                              |
| 215 | input   | id=comment&lt;%=current%&gt;; name=comment&lt;%=current%&gt;; type=hidden; value=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;                              |
| 220 | select  | id=select&lt;%=current%&gt;; name=select&lt;%=current%&gt;; class=fuenteformulario                                                                                          |
| 222 | option  | id=&lt;m4:item item=; htmlsafe=true; outputdef=&lt;%=znodoaux%&gt;                                                                                                          |
| 233 | a       | title=; href=javascript:AddComent(m4objeto('comment&lt;%=current%&gt;','a&lt;%=current%&gt;'));                                                                             |
| 233 | img     | align=right; alt=; src=/iconos/ic_next_edit_16_16_0.gif; height=20; width=20; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this)    |
| 238 | a       | title=&lt;%=Save%&gt;; href=javascript:guard('&lt;%=zcount2%&gt;');                                                                                                         |
| 239 | img     | alt=&lt;%=Save%&gt;; src=/iconos/icono_guardar_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 241 | a       | title=&lt;%=zSaveTempCalc%&gt;; href=javascript:comprobar('&lt;%=zcount2%&gt;');                                                                                            |
| 242 | img     | alt=&lt;%=zSaveTempCalc%&gt;; src=/iconos/grabar.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this)     |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 10  | id_cap          | getParameter(request,"id_cap")  |
| 12  | spos            | getParameter(request,"spos")    |
| 14  | sResult         | getParameter(request,"sResult") |
| 16  | mss             | getParameter(request,"mss")     |

| L   | Variable        | Expresión fuente                                                      | Resolución estática parcial                                                                                       |
| --- | --------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 10  | id_cap          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")                                                |
| 12  | spos            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")                                                  |
| 14  | sResult         | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult")                                               |
| 16  | mss             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                                   |
| 18  | zTit            | ""                                                                    |                                                                                                                   |
| 19  | zNodata         | ""                                                                    |                                                                                                                   |
| 20  | Save            | ""                                                                    |                                                                                                                   |
| 21  | zSaveTempCalc   | ""                                                                    |                                                                                                                   |
| 94  | zsubsesion      | "SSCO_H_EVALUATE_SEG"                                                 | SSCO_H_EVALUATE_SEG                                                                                               |
| 95  | zmeta4object    | "SSCO_H_EVALUATE_SEG"                                                 | SSCO_H_EVALUATE_SEG                                                                                               |
| 97  | znodo1          | "SSCO_EVAL_CAPAB_SEG"                                                 | SSCO_EVAL_CAPAB_SEG                                                                                               |
| 98  | znodo2          | "SSCO_EV_CAPAB_QUESTIONS"                                             | SSCO_EV_CAPAB_QUESTIONS                                                                                           |
| 99  | znodo3          | "SSCO_SV_ANSWER_TP_VALUE"                                             | SSCO_SV_ANSWER_TP_VALUE                                                                                           |
| 101 | zventanas       | "6"                                                                   | 6                                                                                                                 |
| 102 | zvuelta         | 3                                                                     | 3                                                                                                                 |
| 103 | zestado         | "31"                                                                  | 31                                                                                                                |
| 105 | zoutputdef1     | zsubsesion + "!" + znodo1 + "["+spos+"]"                              | SSCO_H_EVALUATE_SEG{"!"}SSCO_EVAL_CAPAB_SEG{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")] |
| 106 | zmove1          | znodo1 + ":" + znodo1 + "["+spos+"]"                                  | SSCO_EVAL_CAPAB_SEG{":"}SSCO_EVAL_CAPAB_SEG{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")] |
| 107 | zraiz1          | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                           | SSCO_EVAL_CAPAB_SEG{":"}SSCO_H_EVALUATE_SEG{"!"}SSCO_EVAL_CAPAB_SEG.                                              |
| 109 | zoutputdef2     | zsubsesion + "!" + znodo2 + "[*]"                                     | SSCO_H_EVALUATE_SEG{"!"}SSCO_EV_CAPAB_QUESTIONS{"[*]"}                                                            |
| 110 | zmove2          | znodo2 + ":" + znodo2 + "[FIRST]"                                     | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS{"[FIRST]"}                                                    |
| 111 | zcomun2         | znodo2 + ":" + zmeta4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + "." | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_H_EVALUATE_SEG{"!"}SSCO_EV_CAPAB_QUESTIONS{"[&amp;VAR.m4lix]"}{"."}              |
| 113 | znamenodo       | znodo2 + ":" + zsubsesion + "!" + znodo2                              | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_H_EVALUATE_SEG{"!"}SSCO_EV_CAPAB_QUESTIONS                                       |
| 114 | zSCO_NM_EXTD_KN | zraiz1 + "SCO_NM_EXTD_KN"                                             | SSCO_EVAL_CAPAB_SEG{":"}SSCO_H_EVALUATE_SEG{"!"}SSCO_EVAL_CAPAB_SEG.{"SCO_NM_EXTD_KN"}                            |
| 115 | zmetodocarga    | zsubsesion + "!SSCO_EVAL_CAPAB_SEG.SSCO_LOAD_QUESTIONS"               | SSCO_H_EVALUATE_SEG{"!SSCO_EVAL_CAPAB_SEG.SSCO_LOAD_QUESTIONS"}                                                   |
| 117 | scountquestion  | ""                                                                    |                                                                                                                   |
| 130 | icountquestion  | 0                                                                     | 0                                                                                                                 |
| 131 | zmoves          | znodo2 + ":" + znodo2                                                 | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS                                                               |
| 132 | zalias          | ""                                                                    |                                                                                                                   |
| 133 | h               | 0                                                                     | 0                                                                                                                 |
| 149 | zcount2         | 0                                                                     | 0                                                                                                                 |
| 150 | vsResultado     | ""                                                                    |                                                                                                                   |
| 172 | znodoaux        | ""                                                                    |                                                                                                                   |
| 173 | zmoveaux        | ""                                                                    |                                                                                                                   |
| 174 | zidgroupant     | ""                                                                    |                                                                                                                   |
| 175 | zidsubgroupant  | ""                                                                    |                                                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                                                |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 119 | m4:startpage  | m4task=SSCO_H_EVALUATE_SEG                                                                                                                        |
| 120 | m4:beginjob   |                                                                                                                                                   |
| 120 | m4:datadef    | m4o=SSCO_H_EVALUATE_SEG; m4name=SSCO_H_EVALUATE_SEG                                                                                               |
| 121 | m4:exec       | m4method=SSCO_H_EVALUATE_SEG{"!SSCO_EVAL_CAPAB_SEG.SSCO_LOAD_QUESTIONS"}                                                                          |
| 121 | m4:param      | name=ARG_SCO_ID_CAPABILITY; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")                                              |
| 122 | m4:move       |                                                                                                                                                   |
| 122 | m4:param      | name=SSCO_H_EVALUATE_SEG; value=SSCO_EVAL_CAPAB_SEG{":"}SSCO_EVAL_CAPAB_SEG{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")] |
| 123 | m4:exec       | node=SSCO_EV_CAPAB_QUESTIONS; alias=countquestion; method=COUNT; m4object=SSCO_H_EVALUATE_SEG                                                     |
| 124 | m4:endjob     |                                                                                                                                                   |
| 125 | m4:beginjob   |                                                                                                                                                   |
| 126 | m4:outputexec | var=; alias=countquestion                                                                                                                         |
| 127 | m4:outputdef  | m4alias=SSCO_EVAL_CAPAB_SEG                                                                                                                       |
| 127 | m4:param      | name=m4name0; value=SSCO_H_EVALUATE_SEG{"!"}SSCO_EVAL_CAPAB_SEG{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")]             |
| 128 | m4:outputdef  | m4alias=SSCO_EV_CAPAB_QUESTIONS                                                                                                                   |
| 128 | m4:param      | name=m4name0; value=SSCO_H_EVALUATE_SEG{"!"}SSCO_EV_CAPAB_QUESTIONS{"[*]"}                                                                        |
| 140 | m4:move       |                                                                                                                                                   |
| 140 | m4:param      | name=SSCO_H_EVALUATE_SEG; value=SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS                                                               |
| 141 | m4:outputdef  | m4alias=                                                                                                                                          |
| 141 | m4:param      | name=m4name0; value=SSCO_H_EVALUATE_SEG!SSCO_SV_ANSWER_TP_VALUE[*]                                                                                |
| 146 | m4:endjob     |                                                                                                                                                   |
| 147 | m4:move       |                                                                                                                                                   |
| 147 | m4:param      | name=SSCO_H_EVALUATE_SEG; value=SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS{"[FIRST]"}                                                    |
| 166 | m4:label      | m4name=SSCO_EVAL_CAPAB_SEG{":"}SSCO_H_EVALUATE_SEG{"!"}SSCO_EVAL_CAPAB_SEG.{"SCO_NM_EXTD_KN"}; htmlsafe=true                                      |
| 167 | m4:item       | item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=SSCO_EVAL_CAPAB_SEG                                                                                 |
| 179 | m4:dataloop   | outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                                                                 |
| 180 | m4:current    | m4varname=current; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                                              |
| 186 | m4:item       | m4varname=id_groupshow; item=SCO_IND_SHOW_GROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                 |
| 187 | m4:item       | m4varname=zidgroup; item=SCO_NM_QUESTION_GROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                  |
| 188 | m4:item       | m4varname=zidsubgroup; item=SCO_NM_QUESTION_SUBGROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                            |
| 189 | m4:item       | m4varname=id_subgroupgroupshow; item=SCO_IND_SHOW_SGROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                        |
| 194 | m4:item       | item=SCO_NM_QUESTION_GROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                      |
| 206 | m4:item       | item=SCO_NM_QUESTION_SUBGROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                   |
| 211 | m4:item       | item=SCO_NM_QUESTION; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                            |
| 216 | m4:item       | item=SCO_QUESTION; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                               |
| 217 | m4:move       |                                                                                                                                                   |
| 217 | m4:param      | name=SSCO_H_EVALUATE_SEG; value=                                                                                                                  |
| 221 | m4:dataloop   | outputdef=                                                                                                                                        |
| 222 | m4:item       | item=SCO_ID_ANSWER_VAL; htmlsafe=true; outputdef=                                                                                                 |
| 223 | m4:item       | item=SCO_NM_ANSWER_VAL; htmlsafe=true; outputdef=                                                                                                 |
| 262 | m4:endpage    |                                                                                                                                                   |

| L   | Operación | Argumentos literales     |
| --- | --------- | ------------------------ |
| 153 | getCount  | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función      | Argumentos |
| --- | ------------ | ---------- |
| 52  | guard        | j          |
| 64  | comprobar    | j          |
| 69  | AddComent    | objeto     |
| 75  | returnvalues | ar         |

| L   | Condición / acción / mensaje literal                                                                                                                                                              |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | if ((id_cap==null)&#124;&#124;(id_cap.equals(""))){id_cap = "";}                                                                                                                                  |
| 13  | if ((spos==null)&#124;&#124;(spos.equals(""))){spos = "";}                                                                                                                                        |
| 15  | if ((sResult==null)&#124;&#124;(sResult.equals(""))){sResult = "0";}                                                                                                                              |
| 17  | if ((mss==null)&#124;&#124;(mss.equals(""))){mss = "0";}                                                                                                                                          |
| 24  | if (mss.equals("0")==true){                                                                                                                                                                       |
| 34  | }else{%&gt;                                                                                                                                                                                       |
| 76  | if (typeof(opener.oventana) == "object"){                                                                                                                                                         |
| 79  | if (typeof(ar[i]) != "undefined"){                                                                                                                                                                |
| 83  | if (typeof(opener.oventana) == "object"){                                                                                                                                                         |
| 84  | if (opener.oventana.m4prop_afterclosewindowmet != ""){                                                                                                                                            |
| 171 | &lt;% if (zcount2 &gt; 0) {                                                                                                                                                                       |
| 190 | &lt;%if (id_groupshow.equals("1")){%&gt;                                                                                                                                                          |
| 191 | &lt;%if ((zidgroupant=="")&#124;&#124;(!zidgroupant.equals(zidgroup))){%&gt;                                                                                                                      |
| 201 | &lt;%if (id_subgroupgroupshow.equals("1")){%&gt;                                                                                                                                                  |
| 203 | &lt;%if ((zidsubgroupant=="")&#124;&#124;(!zidsubgroupant.equals(zidsubgroup))){                                                                                                                  |
| 210 | &lt;%if ((id_groupshow.equals("0")) &#124;&#124; (id_subgroupgroupshow.equals("0"))){%&gt;                                                                                                        |
| 246 | &lt;%} else {%&gt;                                                                                                                                                                                |
| 55  | expresión de cálculo/transformación: idselect="select" + p;                                                                                                                                       |
| 59  | expresión de cálculo/transformación: cono=cono+m4valor(fo,id_ques,"","get")+"&#124;$&#124;"+m4select(m4objeto(idselect,fo),"value")+"&#124;$&#124;"+m4valor(fo,comen,"","get") + "&#124;$&#124;"; |
| 70  | expresión de cálculo/transformación: var path = "/mss_g3/espanol/comentario.jsp?comment=" + objeto.value                                                                                          |
| 105 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "["+spos+"]";                                                                                               |
| 106 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "["+spos+"]";                                                                                                        |
| 107 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                                                                                |
| 109 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                                      |
| 110 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                                                                           |
| 111 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zmeta4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                                      |
| 113 | expresión de cálculo/transformación: String znamenodo = znodo2 + ":" + zsubsesion + "!" + znodo2;                                                                                                 |
| 114 | expresión de cálculo/transformación: String zSCO_NM_EXTD_KN = zraiz1 + "SCO_NM_EXTD_KN";                                                                                                          |
| 115 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSCO_EVAL_CAPAB_SEG.SSCO_LOAD_QUESTIONS";                                                                               |
| 131 | expresión de cálculo/transformación: String zmoves=znodo2 + ":" + znodo2 ;                                                                                                                        |
| 135 | expresión de cálculo/transformación: icountquestion = Integer.parseInt(scountquestion);                                                                                                           |
| 137 | expresión de cálculo/transformación: zmoves=znodo2 + ":" + znodo2 +"["+String.valueOf(h)+"]";                                                                                                     |
| 184 | expresión de cálculo/transformación: zmoveaux =znodoaux+ ":" + "SSCO_SV_ANSWER_TP_VALUE" + "[FIRST]";                                                                                             |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 8   | ../../sse_generico/sgco_gen_inc.jsp          |
| 27  | /sse_generico/sse_generico_trans.jsp         |
| 28  | /sse_g3/sse_ev_trans.jsp                     |
| 36  | /mss_generico/mss_generico_trans.jsp         |
| 37  | /mss_g3/mss_ev_trans.jsp                     |

| L   | Destino / recurso                                                      |
| --- | ---------------------------------------------------------------------- |
| 26  | /css/estilo_sse.css                                                    |
| 35  | /css/estilo_mss.css                                                    |
| 44  | /libreria/funciones_sse_val.js                                         |
| 45  | /libreria/funciones_sse.js                                             |
| 46  | /libreria/clase_val_entradas.js                                        |
| 157 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg_act.jsp |
| 181 |                                                                        |
| 233 | javascript:AddComent(m4objeto(                                         |
| 233 | /iconos/ic_next_edit_16_16_0.gif                                       |
| 238 | javascript:guard(                                                      |
| 239 | /iconos/icono_guardar_36_36.gif                                        |
| 241 | javascript:comprobar(                                                  |
| 242 | /iconos/grabar.gif                                                     |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                             |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                           |
| 8   | ../../sse_generico/sgco_gen_inc.jsp                                    |
| 27  | /sse_generico/sse_generico_trans.jsp                                   |
| 28  | /sse_g3/sse_ev_trans.jsp                                               |
| 36  | /mss_generico/mss_generico_trans.jsp                                   |
| 37  | /mss_g3/mss_ev_trans.jsp                                               |
| 70  | /mss_g3/espanol/comentario.jsp?comment=                                |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                             | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ---------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                             | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                           | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp                                    | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 27  | /sse_generico/sse_generico_trans.jsp                                   | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 28  | /sse_g3/sse_ev_trans.jsp                                               | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 36  | /mss_generico/mss_generico_trans.jsp                                   | contextual | [mss_generico/mss_generico_trans.jsp](../../responsable/tareas/mss_generico--mss_generico_trans.md)           |
| BASE   | 37  | /mss_g3/mss_ev_trans.jsp                                               | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |
| BASE   | 44  | /libreria/funciones_sse_val.js                                         | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                |
| BASE   | 45  | /libreria/funciones_sse.js                                             | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 46  | /libreria/clase_val_entradas.js                                        | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 157 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_seg_act.jsp | ausente    | P06                                                                                                           |
| BASE   | 233 | javascript:AddComent(m4objeto(                                         | dinámica   | P06                                                                                                           |
| BASE   | 238 | javascript:guard(                                                      | dinámica   | P06                                                                                                           |
| BASE   | 241 | javascript:comprobar(                                                  | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                             | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                           | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp                                    | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 27  | /sse_generico/sse_generico_trans.jsp                                   | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 28  | /sse_g3/sse_ev_trans.jsp                                               | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 36  | /mss_generico/mss_generico_trans.jsp                                   | contextual | [mss_generico/mss_generico_trans.jsp](../../responsable/tareas/mss_generico--mss_generico_trans.md)           |
| BASE   | 37  | /mss_g3/mss_ev_trans.jsp                                               | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |
| BASE   | 70  | /mss_g3/espanol/comentario.jsp?comment=                                | contextual | [mss_g3/comentario.jsp](../../responsable/talento/mss_g3--comentario.md)                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_questions_seg.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
