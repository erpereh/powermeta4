# ssco_evaluator_questions

Identificador: `sse_g3/ssco_evaluator_questions.jsp`. Perfil: **empleado**. Dominio: **talento**.

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

| Sociedad / ámbito | Archivo                                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g3/espanol/ssco_evaluator_questions.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions.jsp) | `de370da604246136b53d29c01b271df9ad0af5e405ef358a7554cd6d59fd464a` |    492 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g3/espanol/ssco_evaluator_questions.jsp](../../../../clon_portal/portal/sse_g3/espanol/ssco_evaluator_questions.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 222 | Cuestionario:            |
| 376 | " value=" " &gt;         |
| 386 | " value=" " &gt;         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                   |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 202 | form    | action=/servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp; method=post; name=nombreformulario; id=nombreformulario                                          |
| 203 | input   | type=hidden; id=SSE_CONOCIMIENTO_TEMP; name=SSE_CONOCIMIENTO_TEMP; value=&lt;%=id_cap%&gt;                                                                                  |
| 204 | input   | type=hidden; id=spos; name=spos; value=&lt;%=spos%&gt;                                                                                                                      |
| 205 | input   | type=hidden; id=mss; name=mss; value=&lt;%=mss%&gt;                                                                                                                         |
| 206 | input   | type=hidden; id=SSE_CONO_QUESTION; name=SSE_CONO_QUESTION; value=                                                                                                           |
| 207 | input   | type=hidden; id=SSE_CAL_QUESTION; name=SSE_CAL_QUESTION; value=0                                                                                                            |
| 208 | input   | type=hidden; id=SCO_EVALUATOR_COMM; name=SCO_EVALUATOR_COMM; value=0                                                                                                        |
| 209 | input   | type=hidden; id=term; name=term; value=0                                                                                                                                    |
| 216 | a       | id=idHome; href=                                                                                                                                                            |
| 217 | img     | src=/iconos/logo_cyc.jpg; class=imglogocyc                                                                                                                                  |
| 223 | input   | type=hidden; id=cues; value="&lt;m4:item; item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=&lt;%=znodo1%&gt;                                                                   |
| 323 | form    | name=a&lt;%=current%&gt;; id=a&lt;%=current%&gt;; action=                                                                                                                   |
| 345 | input   | type=hidden; id=p&lt;%=no_+1%&gt;; value="&lt;m4:item; item=SCO_QUESTION; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;                                                        |
| 363 | input   | id=id_ques&lt;%=current%&gt;; name=id_ques&lt;%=current%&gt;; type=hidden; value="&lt;m4:item; item=SCO_ID_QUESTION; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;             |
| 364 | input   | id=comment&lt;%=current%&gt;; name=comment&lt;%=current%&gt;; type=hidden; value="&lt;m4:item; item=SCO_EVALUATOR_COMM_TEMP; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;     |
| 368 | input   | type=hidden; id="tipo&lt;m4:item; item=CSP_CONTADOR; htmlsafe=true; outputdef=&lt;%=znodo2%&gt;                                                                             |
| 378 | input   | type=radio; name=&lt;%=znodoaux%&gt;; id="&lt;m4:item; item=SCO_ID_ANSWER_VAL; htmlsafe=true; outputdef=&lt;%=znodoaux%&gt;                                                 |
| 387 | input   | type=radio; name=&lt;%=znodoaux%&gt;; id="&lt;m4:item; item=SCO_ID_ANSWER_VAL; htmlsafe=true; outputdef=&lt;%=znodoaux%&gt;                                                 |
| 408 | input   | type=text; name=&lt;%=znodoaux%&gt;; class=form-control                                                                                                                     |
| 415 | input   | type=hidden; id=cont; value=&lt;%=zcount2%&gt;                                                                                                                              |
| 458 | a       | title=&lt;%=Save%&gt;; href=javascript:guard('&lt;%=zcount2%&gt;');                                                                                                         |
| 459 | img     | alt=&lt;%=Save%&gt;; src=/iconos/icono_guardar_36_36.gif; width=36; height=36; onmouseover=m4luztotal (this,245,245,245,50,40,40,100,100,100); onmouseout=m4oscuridad(this) |
| 471 | img     | src=/images/barra_pie1.png                                                                                                                                                  |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                  |
| --- | --------------- | ------------------------------- |
| 16  | id_cap          | getParameter(request,"id_cap")  |
| 18  | spos            | getParameter(request,"spos")    |
| 20  | sResult         | getParameter(request,"sResult") |
| 22  | mss             | getParameter(request,"mss")     |
| 161 | id_cap          | getParameter("id_cap")          |

| L   | Variable            | Expresión fuente                                                      | Resolución estática parcial                                                                               |
| --- | ------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 16  | id_cap              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")                                        |
| 18  | spos                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")      | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")                                          |
| 20  | sResult             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult")   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"sResult")                                       |
| 22  | mss                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"mss")                                           |
| 24  | zTit                | ""                                                                    |                                                                                                           |
| 25  | zNodata             | ""                                                                    |                                                                                                           |
| 26  | Save                | ""                                                                    |                                                                                                           |
| 27  | zSaveTempCalc       | ""                                                                    |                                                                                                           |
| 133 | zsubsesion          | "SSCO_H_EVALUTE"                                                      | SSCO_H_EVALUTE                                                                                            |
| 134 | zmeta4object        | "SSCO_H_EVALUTE"                                                      | SSCO_H_EVALUTE                                                                                            |
| 136 | znodo1              | "SSCO_EVAL_CAPAB"                                                     | SSCO_EVAL_CAPAB                                                                                           |
| 137 | znodo2              | "SSCO_EV_CAPAB_QUESTIONS"                                             | SSCO_EV_CAPAB_QUESTIONS                                                                                   |
| 138 | znodo3              | "SSCO_SV_ANSWER_TP_VALUE"                                             | SSCO_SV_ANSWER_TP_VALUE                                                                                   |
| 139 | znodo4              | "CSP_CARGA_RESPUESTA"                                                 | CSP_CARGA_RESPUESTA                                                                                       |
| 141 | zventanas           | "6"                                                                   | 6                                                                                                         |
| 142 | zvuelta             | 3                                                                     | 3                                                                                                         |
| 143 | zestado             | "31"                                                                  | 31                                                                                                        |
| 145 | zoutputdef1         | zsubsesion + "!" + znodo1 + "["+spos+"]"                              | SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")]  |
| 146 | zmove1              | znodo1 + ":" + znodo1 + "["+spos+"]"                                  | SSCO_EVAL_CAPAB{":"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")] |
| 147 | zraiz1              | znodo1 + ":" + zsubsesion + "!"+ znodo1+"."                           | SSCO_EVAL_CAPAB{":"}SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB.                                                   |
| 149 | zoutputdef2         | zsubsesion + "!" + znodo2 + "[*]"                                     | SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS{"[*]"}                                                         |
| 150 | zmove2              | znodo2 + ":" + znodo2 + "[FIRST]"                                     | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS{"[FIRST]"}                                            |
| 151 | zcomun2             | znodo2 + ":" + zmeta4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + "." | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS{"[&amp;VAR.m4lix]"}{"."}           |
| 153 | znamenodo           | znodo2 + ":" + zsubsesion + "!" + znodo2                              | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS                                    |
| 154 | zSCO_NM_EXTD_KN     | zraiz1 + "SCO_NM_EXTD_KN"                                             | SSCO_EVAL_CAPAB{":"}SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB.{"SCO_NM_EXTD_KN"}                                 |
| 155 | zmetodocarga        | zsubsesion + "!SSCO_EVAL_CAPAB.LOAD_QUESTIONS"                        | SSCO_H_EVALUTE{"!SSCO_EVAL_CAPAB.LOAD_QUESTIONS"}                                                         |
| 157 | scountquestion      | ""                                                                    |                                                                                                           |
| 158 | zmetododestroyblock | zsubsesion + "!CSP_CARGA_RESPUESTA.zmetododestroyblock"               | SSCO_H_EVALUTE{"!CSP_CARGA_RESPUESTA.zmetododestroyblock"}                                                |
| 159 | zload               | zsubsesion + "!CSP_CARGA_RESPUESTA.CSP_CARGA"                         | SSCO_H_EVALUTE{"!CSP_CARGA_RESPUESTA.CSP_CARGA"}                                                          |
| 160 | zusertempuri        | zsessionmanager.getUserTempURI()                                      | zsessionmanager.getUserTempURI()                                                                          |
| 161 | ztest               | request.getParameter("id_cap")                                        | request.getParameter("id_cap")                                                                            |
| 175 | icountquestion      | 0                                                                     | 0                                                                                                         |
| 176 | zmoves              | znodo2 + ":" + znodo2                                                 | SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS                                                       |
| 177 | zalias              | ""                                                                    |                                                                                                           |
| 178 | h                   | 0                                                                     | 0                                                                                                         |
| 194 | zcount2             | 0                                                                     | 0                                                                                                         |
| 195 | vsResultado         | ""                                                                    |                                                                                                           |
| 229 | znodoaux            | ""                                                                    |                                                                                                           |
| 230 | zmoveaux            | ""                                                                    |                                                                                                           |
| 231 | zidgroupant         | ""                                                                    |                                                                                                           |
| 232 | zidsubgroupant      | ""                                                                    |                                                                                                           |
| 341 | no                  | Integer.parseInt(current)                                             | Integer.parseInt(current)                                                                                 |
| 342 | auxno               | Integer.parseInt(current)-25                                          | Integer.parseInt(current)-25                                                                              |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag           | Contrato declarado                                                                                                                   |
| --- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| 163 | m4:startpage  | m4task=SSCO_H_EVALUTE                                                                                                                |
| 165 | m4:beginjob   |                                                                                                                                      |
| 165 | m4:datadef    | m4o=SSCO_H_EVALUTE; m4name=SSCO_H_EVALUTE                                                                                            |
| 166 | m4:exec       | m4method=SSCO_H_EVALUTE{"!SSCO_EVAL_CAPAB.LOAD_QUESTIONS"}                                                                           |
| 166 | m4:param      | name=ARG_SCO_ID_CAPABILITY; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"id_cap")                                 |
| 167 | m4:move       |                                                                                                                                      |
| 167 | m4:param      | name=SSCO_H_EVALUTE; value=SSCO_EVAL_CAPAB{":"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")] |
| 168 | m4:exec       | node=SSCO_EV_CAPAB_QUESTIONS; alias=countquestion; method=COUNT; m4object=SSCO_H_EVALUTE                                             |
| 169 | m4:endjob     |                                                                                                                                      |
| 170 | m4:beginjob   |                                                                                                                                      |
| 171 | m4:outputexec | var=; alias=countquestion                                                                                                            |
| 172 | m4:outputdef  | m4alias=SSCO_EVAL_CAPAB                                                                                                              |
| 172 | m4:param      | name=m4name0; value=SSCO_H_EVALUTE{"!"}SSCO_EVAL_CAPAB{"["}com.meta4.taglib.util.M4SafeRequest.getParameter(request,"spos")]         |
| 173 | m4:outputdef  | m4alias=SSCO_EV_CAPAB_QUESTIONS                                                                                                      |
| 173 | m4:param      | name=m4name0; value=SSCO_H_EVALUTE{"!"}SSCO_EV_CAPAB_QUESTIONS{"[*]"}                                                                |
| 185 | m4:move       |                                                                                                                                      |
| 185 | m4:param      | name=SSCO_H_EVALUTE; value=SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS                                                       |
| 186 | m4:outputdef  | m4alias=                                                                                                                             |
| 186 | m4:param      | name=m4name0; value=SSCO_H_EVALUTE!SSCO_SV_ANSWER_TP_VALUE[*]                                                                        |
| 191 | m4:endjob     |                                                                                                                                      |
| 192 | m4:move       |                                                                                                                                      |
| 192 | m4:param      | name=SSCO_H_EVALUTE; value=SSCO_EV_CAPAB_QUESTIONS{":"}SSCO_EV_CAPAB_QUESTIONS{"[FIRST]"}                                            |
| 222 | m4:item       | item=SCO_NM_EXTD_KN; htmlsafe=true; outputdef=SSCO_EVAL_CAPAB                                                                        |
| 306 | m4:dataloop   | outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                                                    |
| 307 | m4:current    | m4varname=current; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                                 |
| 328 | m4:item       | m4varname=id_groupshow; item=SCO_IND_SHOW_GROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                    |
| 329 | m4:item       | m4varname=zidgroup; item=SCO_NM_QUESTION_GROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                     |
| 330 | m4:item       | m4varname=zidsubgroup; item=SCO_NM_QUESTION_SUBGROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                               |
| 331 | m4:item       | m4varname=id_subgroupgroupshow; item=SCO_IND_SHOW_SGROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                           |
| 335 | m4:item       | item=SCO_NM_QUESTION_GROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                         |
| 349 | m4:item       | item=SCO_NM_QUESTION_SUBGROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                      |
| 353 | m4:item       | item=SCO_NM_QUESTION_SUBGROUP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                      |
| 361 | m4:item       | item=SCO_NM_QUESTION; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                               |
| 367 | m4:item       | item=SCO_QUESTION; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                  |
| 368 | m4:item       | item=SCO_BEHAVIOR; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS                                                                  |
| 370 | m4:move       |                                                                                                                                      |
| 370 | m4:param      | name=SSCO_H_EVALUTE; value=                                                                                                          |
| 371 | m4:dataloop   | outputdef=                                                                                                                           |
| 377 | m4:item       | item=SCO_NM_ANSWER_VAL; htmlsafe=true; outputdef=                                                                                    |
| 378 | m4:item       | item=SCO_ID_ANSWER_VAL; htmlsafe=true; outputdef=                                                                                    |
| 387 | m4:item       | item=SCO_ID_ANSWER_VAL; htmlsafe=true; outputdef=                                                                                    |
| 388 | m4:item       | item=SCO_NM_ANSWER_VAL; htmlsafe=true; outputdef=                                                                                    |
| 397 | m4:item       | item=SCO_ID_ANSWER_VAL_TEMP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS; jsafe=true                                            |
| 400 | m4:item       | item=SCO_ID_ANSWER_VAL_TEMP; htmlsafe=true; outputdef=SSCO_EV_CAPAB_QUESTIONS; jsafe=true                                            |
| 478 | m4:item       | item=SCO_VALUE_RAT_QUE; htmlsafe=true; outputdef=SSCO_EVAL_CAPAB; jsafe=true                                                         |
| 478 | m4:item       | item=SCO_NM_LVL_QUE; htmlsafe=true; outputdef=SSCO_EVAL_CAPAB; jsafe=true                                                            |
| 482 | m4:item       | item=SCO_VALUE_RAT_QUE; htmlsafe=true; outputdef=SSCO_EVAL_CAPAB; jsafe=true                                                         |
| 484 | m4:item       | item=SCO_ID_LVL_QUE; htmlsafe=true; outputdef=SSCO_EVAL_CAPAB; jsafe=true                                                            |
| 491 | m4:endpage    |                                                                                                                                      |

| L   | Operación | Argumentos literales     |
| --- | --------- | ------------------------ |
| 198 | getCount  | znodo2,zsubsesion,znodo2 |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos         |
| --- | ------------- | ------------------ |
| 61  | guard         | j                  |
| 94  | AddComent     | objeto             |
| 100 | m4select      | select,idform,modo |
| 121 | getRadioValue | form, radioName    |

| L   | Condición / acción / mensaje literal                                                                                                                                                    |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17  | if ((id_cap==null)&#124;&#124;(id_cap.equals(""))){id_cap = "";}                                                                                                                        |
| 19  | if ((spos==null)&#124;&#124;(spos.equals(""))){spos = "";}                                                                                                                              |
| 21  | if ((sResult==null)&#124;&#124;(sResult.equals(""))){sResult = "0";}                                                                                                                    |
| 23  | if ((mss==null)&#124;&#124;(mss.equals(""))){mss = "0";}                                                                                                                                |
| 29  | if (mss.equals("0")==true){                                                                                                                                                             |
| 39  | }else{                                                                                                                                                                                  |
| 68  | if(p==(j-1)){                                                                                                                                                                           |
| 70  | if(pooo!=""){                                                                                                                                                                           |
| 72  | }else{                                                                                                                                                                                  |
| 76  | if(m4select(idselect,fo,"value")==""){                                                                                                                                                  |
| 77  | if(p&gt;24&amp;&amp;document.getElementById("SSE_CONOCIMIENTO_TEMP").value=="EST_DIR_6"){                                                                                               |
| 79  | }else{                                                                                                                                                                                  |
| 87  | if(pooo!=""){                                                                                                                                                                           |
| 89  | alert("No ha respondido a todas las preguntas \nFaltan: "+pooo.substr(0,auxpo));                                                                                                        |
| 101 | if (m4select.arguments.length == 3){                                                                                                                                                    |
| 104 | else {                                                                                                                                                                                  |
| 109 | if (typeof(oselect) == "object"){                                                                                                                                                       |
| 110 | switch(modo)                                                                                                                                                                            |
| 112 | case "value" :                                                                                                                                                                          |
| 115 | alert("Modo no valido en m4select");                                                                                                                                                    |
| 124 | if (radioName[i].checked) {                                                                                                                                                             |
| 228 | &lt;% if (zcount2 &gt; 0) {                                                                                                                                                             |
| 309 | if(current.equals("0")&amp;&amp;ztest.equals("EST_DIR_6")){                                                                                                                             |
| 315 | }else if(current.equals("25")&amp;&amp;ztest.equals("EST_DIR_6")){                                                                                                                      |
| 332 | &lt;%if (id_groupshow.equals("1")){                                                                                                                                                     |
| 333 | if ((zidgroupant=="")&#124;&#124;(!zidgroupant.equals(zidgroup))){                                                                                                                      |
| 339 | }if (id_subgroupgroupshow.equals("1")){                                                                                                                                                 |
| 340 | if ((zidsubgroupant=="")&#124;&#124;(!zidsubgroupant.equals(zidsubgroup))){                                                                                                             |
| 347 | if(no&gt;24&amp;&amp;ztest.equals("EST_DIR_6")){                                                                                                                                        |
| 351 | }else{                                                                                                                                                                                  |
| 359 | if ((id_groupshow.equals("0")) &#124;&#124; (id_subgroupgroupshow.equals("0"))){                                                                                                        |
| 373 | if(ztest.equals("EST_DIR_3")){                                                                                                                                                          |
| 383 | }else{                                                                                                                                                                                  |
| 397 | if ('&lt;m4:item item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="&lt;%=znodo2%&gt;" jsafe="true"/&gt;'!= ""){                                                                  |
| 400 | if (res[i].value == '&lt;m4:item item="SCO_ID_ANSWER_VAL_TEMP" htmlsafe="true" outputdef="&lt;%=znodo2%&gt;" jsafe="true"/&gt;'){                                                       |
| 420 | if(document.getElementById("id_ques"+i).value==999){                                                                                                                                    |
| 426 | if(document.getElementById("tipo"+i).value == "3"){                                                                                                                                     |
| 428 | }else if(document.getElementById("tipo"+i).value == "2"){                                                                                                                               |
| 432 | if (document.getElementById("cues").value=="Estilos de Dirección") {                                                                                                                    |
| 437 | } else if(document.getElementById("cues").value=="Influencia en la Negociación"){                                                                                                       |
| 439 | } else if(document.getElementById("cues").value=="Efectividad del Equipo"){                                                                                                             |
| 441 | } else if(document.getElementById("cues").value=="Nivel de Estrés"){                                                                                                                    |
| 443 | } else if(document.getElementById("cues").value=="Gestión del Tiempo"){                                                                                                                 |
| 445 | } else if(document.getElementById("cues").value=="Análisis y Toma de decisiones"){                                                                                                      |
| 447 | } else if(document.getElementById("cues").value=="Gestión del Orden y la Planificación"){                                                                                               |
| 465 | &lt;%} else {%&gt;                                                                                                                                                                      |
| 477 | if ('&lt;%=sResult%&gt;'== "1"){                                                                                                                                                        |
| 479 | if ( confirm(vmensaje) == true){                                                                                                                                                        |
| 64  | expresión de cálculo/transformación: idselect="SSCO_SV_ANSWER_TP_VALUE" + p;                                                                                                            |
| 78  | expresión de cálculo/transformación: pooo=pooo +"Pregunta Toma de Decisiones " + (p-25+1)+", ";                                                                                         |
| 80  | expresión de cálculo/transformación: pooo=pooo +"Pregunta " + (p+1)+", ";                                                                                                               |
| 83  | expresión de cálculo/transformación: cono=cono+m4valor(fo,id_ques,"","get")+"&#124;$&#124;"+m4select(idselect,fo,"value")+"&#124;$&#124;"+m4valor(fo,comen,"","get") + "&#124;$&#124;"; |
| 95  | expresión de cálculo/transformación: var path = "/mss_g3/espanol/comentario.jsp?comment=" + objeto.value                                                                                |
| 145 | expresión de cálculo/transformación: String zoutputdef1 = zsubsesion + "!" + znodo1 + "["+spos+"]";                                                                                     |
| 146 | expresión de cálculo/transformación: String zmove1 = znodo1 + ":" + znodo1 + "["+spos+"]";                                                                                              |
| 147 | expresión de cálculo/transformación: String zraiz1 = znodo1 + ":" + zsubsesion + "!"+ znodo1+"." ;                                                                                      |
| 149 | expresión de cálculo/transformación: String zoutputdef2 = zsubsesion + "!" + znodo2 + "[*]";                                                                                            |
| 150 | expresión de cálculo/transformación: String zmove2 = znodo2 + ":" + znodo2 + "[FIRST]";                                                                                                 |
| 151 | expresión de cálculo/transformación: String zcomun2 = znodo2 + ":" + zmeta4object + "!" + znodo2 + "[&amp;VAR.m4lix]" + ".";                                                            |
| 153 | expresión de cálculo/transformación: String znamenodo = znodo2 + ":" + zsubsesion + "!" + znodo2;                                                                                       |
| 154 | expresión de cálculo/transformación: String zSCO_NM_EXTD_KN = zraiz1 + "SCO_NM_EXTD_KN";                                                                                                |
| 155 | expresión de cálculo/transformación: String zmetodocarga = zsubsesion + "!SSCO_EVAL_CAPAB.LOAD_QUESTIONS";                                                                              |
| 158 | expresión de cálculo/transformación: String zmetododestroyblock = zsubsesion + "!CSP_CARGA_RESPUESTA.zmetododestroyblock";                                                              |
| 159 | expresión de cálculo/transformación: String zload = zsubsesion + "!CSP_CARGA_RESPUESTA.CSP_CARGA";                                                                                      |
| 176 | expresión de cálculo/transformación: String zmoves=znodo2 + ":" + znodo2 ;                                                                                                              |
| 180 | expresión de cálculo/transformación: icountquestion = Integer.parseInt(scountquestion);                                                                                                 |
| 182 | expresión de cálculo/transformación: zmoves=znodo2 + ":" + znodo2 +"["+String.valueOf(h)+"]";                                                                                           |
| 326 | expresión de cálculo/transformación: zmoveaux =znodoaux+ ":" + "SSCO_SV_ANSWER_TP_VALUE" + "[FIRST]";                                                                                   |
| 341 | expresión de cálculo/transformación: int no = Integer.parseInt(current) ;                                                                                                               |
| 342 | expresión de cálculo/transformación: int auxno = Integer.parseInt(current)-25;                                                                                                          |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp   |
| 8   | ../../sse_generico/sse_generico_taglib_2.jsp |
| 9   | ../../sse_generico/sgco_gen_inc.jsp          |
| 32  | /sse_generico/sse_generico_trans.jsp         |
| 33  | /sse_g3/sse_ev_trans.jsp                     |
| 42  | /mss_generico/mss_generico_trans.jsp         |
| 43  | /mss_g3/mss_ev_trans.jsp                     |

| L   | Destino / recurso                                                            |
| --- | ---------------------------------------------------------------------------- |
| 10  | /css/estilo_sse_lucas.css                                                    |
| 11  | /css/bootstrap/css/bootstrap.min.css                                         |
| 12  | /css/estilo_cyc.css                                                          |
| 41  | /css/estilo_mss.css                                                          |
| 51  | /libreria/funciones_sse_val.js                                               |
| 52  | /libreria/funciones_sse.js                                                   |
| 53  | /libreria/clase_val_entradas.js                                              |
| 202 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp           |
| 217 | /iconos/logo_cyc.jpg                                                         |
| 323 |                                                                              |
| 448 | ssco_evaluator_questions_gest_plan.jsp?id_cap=EST_DIR10&amp;spos=3&amp;mss=0 |
| 458 | javascript:guard(                                                            |
| 459 | /iconos/icono_guardar_36_36.gif                                              |
| 471 | /images/barra_pie1.png                                                       |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                                   |
| 8   | ../../sse_generico/sse_generico_taglib_2.jsp                                 |
| 9   | ../../sse_generico/sgco_gen_inc.jsp                                          |
| 32  | /sse_generico/sse_generico_trans.jsp                                         |
| 33  | /sse_g3/sse_ev_trans.jsp                                                     |
| 42  | /mss_generico/mss_generico_trans.jsp                                         |
| 43  | /mss_g3/mss_ev_trans.jsp                                                     |
| 95  | /mss_g3/espanol/comentario.jsp?comment=                                      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                                   | Resolución | Ficha / candidato                                                                                             |
| ------ | --- | ---------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 8   | ../../sse_generico/sse_generico_taglib_2.jsp                                 | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 9   | ../../sse_generico/sgco_gen_inc.jsp                                          | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 32  | /sse_generico/sse_generico_trans.jsp                                         | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 33  | /sse_g3/sse_ev_trans.jsp                                                     | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 42  | /mss_generico/mss_generico_trans.jsp                                         | contextual | [mss_generico/mss_generico_trans.jsp](../../responsable/tareas/mss_generico--mss_generico_trans.md)           |
| BASE   | 43  | /mss_g3/mss_ev_trans.jsp                                                     | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |
| BASE   | 51  | /libreria/funciones_sse_val.js                                               | contextual | [libreria/funciones_sse_val.js](../../transversal/dependencias/libreria--funciones_sse_val.md)                |
| BASE   | 52  | /libreria/funciones_sse.js                                                   | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                        |
| BASE   | 53  | /libreria/clase_val_entradas.js                                              | contextual | [libreria/clase_val_entradas.js](../../transversal/dependencias/libreria--clase_val_entradas.md)              |
| BASE   | 202 | /servlet/CheckSecurity/JSP/sse_g3/ssco_evaluator_questions_act.jsp           | ausente    | P06                                                                                                           |
| BASE   | 448 | ssco_evaluator_questions_gest_plan.jsp?id_cap=EST_DIR10&amp;spos=3&amp;mss=0 | física     | [sse_g3/ssco_evaluator_questions_gest_plan.jsp](sse_g3--ssco_evaluator_questions_gest_plan.md)                |
| BASE   | 458 | javascript:guard(                                                            | dinámica   | P06                                                                                                           |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                                   | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)     |
| BASE   | 8   | ../../sse_generico/sse_generico_taglib_2.jsp                                 | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md) |
| BASE   | 9   | ../../sse_generico/sgco_gen_inc.jsp                                          | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                   |
| BASE   | 32  | /sse_generico/sse_generico_trans.jsp                                         | contextual | [sse_generico/sse_generico_trans.jsp](../../transversal/navegacion/sse_generico--sse_generico_trans.md)       |
| BASE   | 33  | /sse_g3/sse_ev_trans.jsp                                                     | contextual | [sse_g3/sse_ev_trans.jsp](sse_g3--sse_ev_trans.md)                                                            |
| BASE   | 42  | /mss_generico/mss_generico_trans.jsp                                         | contextual | [mss_generico/mss_generico_trans.jsp](../../responsable/tareas/mss_generico--mss_generico_trans.md)           |
| BASE   | 43  | /mss_g3/mss_ev_trans.jsp                                                     | contextual | [mss_g3/mss_ev_trans.jsp](../../responsable/talento/mss_g3--mss_ev_trans.md)                                  |
| BASE   | 95  | /mss_g3/espanol/comentario.jsp?comment=                                      | contextual | [mss_g3/comentario.jsp](../../responsable/talento/mss_g3--comentario.md)                                      |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g3/ssco_evaluator_questions.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
