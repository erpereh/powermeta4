# ssco_easy_task_comments

Identificador: `sse_g0/ssco_easy_task_comments.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                    | Texto                                                              | Ámbito | Diccionario                                                                                 |
| ------------------------ | ------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------- |
| Button.Close             | Cerrar                                                             | COLL   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                                                             | CYC    | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                                                             | IBER   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                                                             | BASE   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close             | Cerrar                                                             | BASE   | [translations/shco_g0_es.properties:L22](../../referencias/literales/shco_g0_es.md)         |
| Button.Close             | Cerrar                                                             | BASE   | [translations/ssco_etask_es.properties:L37](../../referencias/literales/ssco_etask_es.md)   |
| Button.DeleteLastCommnet | Borrar último comentario                                           | BASE   | [translations/ssco_etask_es.properties:L43](../../referencias/literales/ssco_etask_es.md)   |
| Label.NoCommentsFound    | No hay comentarios asociados                                       | BASE   | [translations/ssco_etask_es.properties:L42](../../referencias/literales/ssco_etask_es.md)   |
| Page.CommentsDesc        | Consulta los comentarios del proceso                               | BASE   | [translations/ssco_etask_es.properties:L40](../../referencias/literales/ssco_etask_es.md)   |
| Page.CommentsDesc1       | Puedes borrar el último comentario asociado a la tarea si es tuyo. | BASE   | [translations/ssco_etask_es.properties:L41](../../referencias/literales/ssco_etask_es.md)   |
| Radio.Bpo                | Comentarios del proceso                                            | BASE   | [translations/ssco_etask_es.properties:L34](../../referencias/literales/ssco_etask_es.md)   |
| Radio.Task               | Comentarios de la tarea                                            | BASE   | [translations/ssco_etask_es.properties:L33](../../referencias/literales/ssco_etask_es.md)   |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_easy_task_comments.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_easy_task_comments.jsp) | `3717823fb194e04ec84b196aca883d3913e5d3bcf830de502935619cfc8925ee` |    278 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_easy_task_comments.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_easy_task_comments.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 196 | ([valor dinámico])       |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                             |
| --- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 166 | form    | id=oculto; name=oculto; action=/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_comments.jsp; method=post                                                                                                             |
| 167 | input   | type=hidden; id=zLoadType; name=zLoadType; value=&lt;%=zLoadType%&gt;                                                                                                                                                 |
| 168 | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                                                              |
| 169 | input   | type=hidden; id=znivel; name=znivel; value=&lt;%=znivel%&gt;                                                                                                                                                          |
| 170 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                                                                                                       |
| 171 | input   | type=hidden; id=zIdWkBpo; name=zIdWkBpo; value=&lt;%=zIdWkBpo%&gt;                                                                                                                                                    |
| 172 | input   | type=hidden; id=zNWkBpo; name=zNWkBpo; value=&lt;%=zNWkBpo%&gt;                                                                                                                                                       |
| 173 | input   | type=hidden; id=zDescBpo; name=zDescBpo; value=&lt;%=zDescBpo%&gt;                                                                                                                                                    |
| 174 | input   | type=hidden; id=zIdWkitem; name=zIdWkitem; value=&lt;%=zIdWkitem%&gt;                                                                                                                                                 |
| 175 | input   | type=hidden; id=zDeleteLastComment; name=zDeleteLastComment; value=                                                                                                                                                   |
| 182 | img     | alt=; src=/iconos/noname_listado_63_80.gif; width=100; height=100                                                                                                                                                     |
| 202 | form    | id=frmCommentType; name=frmCommentType                                                                                                                                                                                |
| 204 | input   | id=CommentsLoadType; name=CommentsLoadType; type=radio; onclick=javascript:m4changeCommentsView();; value=&lt;%=zLoadTypeTask%&gt;                                                                                    |
| 205 | input   | id=CommentsLoadType; name=CommentsLoadType; type=radio; onclick=javascript:m4changeCommentsView();; value=&lt;%=zLoadTypeBpo%&gt;                                                                                     |
| 245 | a       | href=javascript:m4deleteLastComment();; title=&lt;%=zBtnDeleteLastComment%&gt;                                                                                                                                        |
| 246 | img     | class=tablamenuright; alt=&lt;%=zBtnDeleteLastComment%&gt;; src=/iconos/icono_eliminar_ess_11_12.gif; height=11; width=12; onmouseover=m4luztotal(this,255,255,255,8,8,200,255,255,255); onmouseout=m4oscuridad(this) |
| 262 | a       | href=javascript:window.close();                                                                                                                                                                                       |
| 263 | img     | alt=&lt;%=zButtonCloseLbl%&gt;; src=/iconos/entrar_blanco.gif; height=36; width=36                                                                                                                                    |

### Contexto, entradas y valores construidos

| L   | Entrada / clave    | Acceso literal                             |
| --- | ------------------ | ------------------------------------------ |
| 11  | estado             | getParameter(request,"estado")             |
| 12  | znivel             | getParameter(request,"znivel")             |
| 13  | zinicios           | getParameter(request,"zinicios")           |
| 14  | zIdWkitem          | getParameter(request,"zIdWkitem")          |
| 15  | zIdWkBpo           | getParameter(request,"zIdWkBpo")           |
| 16  | zNWkBpo            | getParameter(request,"zNWkBpo")            |
| 17  | zDescBpo           | getParameter(request,"zDescBpo")           |
| 18  | zLoadType          | getParameter(request,"zLoadType")          |
| 19  | zDeleteLastComment | getParameter(request,"zDeleteLastComment") |

| L   | Variable                 | Expresión fuente                                                                                  | Resolución estática parcial                                                                                                                       |
| --- | ------------------------ | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | estado                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                |
| 12  | znivel                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel")                                                                                |
| 13  | zinicios                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                              |
| 14  | zIdWkitem                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkitem")                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkitem")                                                                             |
| 15  | zIdWkBpo                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo")                                                                              |
| 16  | zNWkBpo                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNWkBpo")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNWkBpo")                                                                               |
| 17  | zDescBpo                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescBpo")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescBpo")                                                                              |
| 18  | zLoadType                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zLoadType")                             | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zLoadType")                                                                             |
| 19  | zDeleteLastComment       | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDeleteLastComment")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDeleteLastComment")                                                                    |
| 20  | zLoadTypeTask            | "TASK"                                                                                            | TASK                                                                                                                                              |
| 21  | zLoadTypeBpo             | "BPO"                                                                                             | BPO                                                                                                                                               |
| 35  | zMssEss                  | zsessionmanagermssess.getProductID()                                                              | zsessionmanagermssess.getProductID()                                                                                                              |
| 49  | zNoDataFoundLbl          | TranEasytask.getProperty("Label.NoCommentsFound")                                                 | TranEasytask.getProperty("Label.NoCommentsFound")                                                                                                 |
| 50  | zButtonCloseLbl          | TranEasytask.getProperty("Button.Close")                                                          | TranEasytask.getProperty("Button.Close")                                                                                                          |
| 51  | zRadioTaskLbl            | TranEasytask.getProperty("Radio.Task")                                                            | TranEasytask.getProperty("Radio.Task")                                                                                                            |
| 52  | zRadioBpoLbl             | TranEasytask.getProperty("Radio.Bpo")                                                             | TranEasytask.getProperty("Radio.Bpo")                                                                                                             |
| 53  | zCommentsDesc            | TranEasytask.getProperty("Page.CommentsDesc")                                                     | TranEasytask.getProperty("Page.CommentsDesc")                                                                                                     |
| 54  | zCommentsDesc1           | TranEasytask.getProperty("Page.CommentsDesc1")                                                    | TranEasytask.getProperty("Page.CommentsDesc1")                                                                                                    |
| 55  | zBtnDeleteLastComment    | TranEasytask.getProperty("Button.DeleteLastCommnet")                                              | TranEasytask.getProperty("Button.DeleteLastCommnet")                                                                                              |
| 94  | zsubsesion               | "SSCO_WF_EASY_TASK"                                                                               | SSCO_WF_EASY_TASK                                                                                                                                 |
| 95  | zmeta4object             | "SSCO_WF_EASY_TASK"                                                                               | SSCO_WF_EASY_TASK                                                                                                                                 |
| 96  | znodoprincipal           | "SSCO_WF_EASY_TASK_ROOT"                                                                          | SSCO_WF_EASY_TASK_ROOT                                                                                                                            |
| 97  | zmetodocarga             | "SSCO_LOAD_COMMENTS:" + zsubsesion + "!" + znodoprincipal + ".SSCO_LOAD_COMMENTS"                 | SSCO_LOAD_COMMENTS:{}SSCO_WF_EASY_TASK{"!"}SSCO_WF_EASY_TASK_ROOT{".SSCO_LOAD_COMMENTS"}                                                          |
| 98  | zmetododelete            | "SSCO_DELETE_LAST_COMMENT:" + zsubsesion + "!" + znodoprincipal + ".SSCO_DELETE_LAST_COMMENT"     | SSCO_DELETE_LAST_COMMENT:{}SSCO_WF_EASY_TASK{"!"}SSCO_WF_EASY_TASK_ROOT{".SSCO_DELETE_LAST_COMMENT"}                                              |
| 100 | znodoworkitemcomments    | "SSCO_WORKITEM_COMMENTS"                                                                          | SSCO_WORKITEM_COMMENTS                                                                                                                            |
| 101 | zventanas                | "20"                                                                                              | 20                                                                                                                                                |
| 102 | zvuelta                  | 2                                                                                                 | 2                                                                                                                                                 |
| 103 | zestado                  | "11"                                                                                              | 11                                                                                                                                                |
| 104 | zregistroinicial         | Integer.valueOf(zinicios).intValue()                                                              | Integer.valueOf(zinicios).intValue()                                                                                                              |
| 106 | zventana                 | Integer.valueOf(zventanas).intValue()                                                             | Integer.valueOf(zventanas).intValue()                                                                                                             |
| 107 | zregistrofinal           | zregistroinicial + zventana - 1                                                                   | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                |
| 108 | znamenodo                | znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments                            | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS                                                                           |
| 110 | zoutputdef               | zsubsesion + "!" + znodoworkitemcomments + "[" + zregistroinicial + "-" + zregistrofinal + "]"    | SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 111 | zmove                    | znodoworkitemcomments + ":" + znodoworkitemcomments + "[" + zregistroinicial + "]"                | SSCO_WORKITEM_COMMENTS{":"}SSCO_WORKITEM_COMMENTS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                   |
| 112 | zraiz                    | znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments + "."                      | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"."}                                                                      |
| 113 | zcomun                   | znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments + "[&amp;VAR.m4lix]" + "." | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}                                                  |
| 115 | znodocom                 | "SSCO_ERROR_COMUNICATION"                                                                         | SSCO_ERROR_COMUNICATION                                                                                                                           |
| 116 | zoutputdefcom            | zsubsesion + "!" + znodocom + "[*]"                                                               | SSCO_WF_EASY_TASK{"!"}SSCO_ERROR_COMUNICATION{"[*]"}                                                                                              |
| 119 | zID_COMMENT              | zcomun + "ID_COMMENT"                                                                             | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"ID_COMMENT"}                                    |
| 120 | zN_APP_USER              | zcomun+ "N_APP_USER"                                                                              | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"N_APP_USER"}                                    |
| 121 | zN_STATE                 | zcomun + "N_STATE"                                                                                | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"N_STATE"}                                       |
| 122 | zDESC_COMMENT            | zcomun+ "DESC_COMMENT"                                                                            | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"DESC_COMMENT"}                                  |
| 123 | zDT_COMMENT              | zcomun+ "DT_COMMENT"                                                                              | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"DT_COMMENT"}                                    |
| 124 | zSHOW_DELETE_COMMENT_BTT | zcomun + "SHOW_DELETE_COMMENT_BTT"                                                                | SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"SHOW_DELETE_COMMENT_BTT"}                       |
| 149 | zcounti                  | 0                                                                                                 | 0                                                                                                                                                 |
| 150 | zcount                   | 0                                                                                                 | 0                                                                                                                                                 |
| 156 | zcountv                  | String.valueOf(zcounti)                                                                           | String.valueOf(zcounti)                                                                                                                           |
| 217 | zregistroinicials        | String.valueOf(zregistroinicial)                                                                  | String.valueOf(zregistroinicial)                                                                                                                  |
| 218 | zregistrofinals          | String.valueOf(zregistroinicial + zcounti - 1)                                                    | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                   |
| 219 | zPaint1                  | ""                                                                                                |                                                                                                                                                   |
| 220 | zposicion1               | 0                                                                                                 | 0                                                                                                                                                 |
| 221 | zcontrol1                | 0                                                                                                 | 0                                                                                                                                                 |
| 222 | zposicions1              | "0"                                                                                               | 0                                                                                                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                    |
| --- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 129 | m4:startpage | m4task=SSCO_WF_EASY_TASK                                                                                                                                              |
| 130 | m4:beginjob  |                                                                                                                                                                       |
| 131 | m4:datadef   | m4o=SSCO_WF_EASY_TASK; m4name=SSCO_WF_EASY_TASK                                                                                                                       |
| 133 | m4:exec      | m4method=SSCO_DELETE_LAST_COMMENT:{}SSCO_WF_EASY_TASK{"!"}SSCO_WF_EASY_TASK_ROOT{".SSCO_DELETE_LAST_COMMENT"}                                                         |
| 134 | m4:param     | name=ARG_ID_WORKITEM; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkitem")                                                                     |
| 138 | m4:exec      | m4method=SSCO_LOAD_COMMENTS:{}SSCO_WF_EASY_TASK{"!"}SSCO_WF_EASY_TASK_ROOT{".SSCO_LOAD_COMMENTS"}                                                                     |
| 139 | m4:param     | name=ARG_LOAD_TYPE; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zLoadType")                                                                       |
| 140 | m4:param     | name=ARG_ID_WORKITEM; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkitem")                                                                     |
| 141 | m4:param     | name=ARG_ID_BPO; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo")                                                                           |
| 144 | m4:outputdef | m4alias=SSCO_WORKITEM_COMMENTS                                                                                                                                        |
| 144 | m4:param     | name=m4name0; value=SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 145 | m4:outputdef | m4alias=SSCO_ERROR_COMUNICATION                                                                                                                                       |
| 145 | m4:param     | name=m4name0; value=SSCO_WF_EASY_TASK{"!"}SSCO_ERROR_COMUNICATION{"[*]"}                                                                                              |
| 146 | m4:endjob    |                                                                                                                                                                       |
| 147 | m4:move      |                                                                                                                                                                       |
| 147 | m4:param     | name=SSCO_WF_EASY_TASK; value=SSCO_WORKITEM_COMMENTS{":"}SSCO_WORKITEM_COMMENTS{"["}Integer.valueOf(zinicios).intValue(){"]"}                                         |
| 160 | m4:label     | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS; htmlsafe=true                                                                         |
| 180 | m4:label     | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS; htmlsafe=true                                                                         |
| 228 | m4:label     | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"N_STATE"}; htmlsafe=true                                     |
| 229 | m4:label     | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"N_APP_USER"}; htmlsafe=true                                  |
| 230 | m4:label     | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"DT_COMMENT"}; htmlsafe=true                                  |
| 231 | m4:label     | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"DESC_COMMENT"}; htmlsafe=true                                |
| 234 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                             |
| 236 | m4:item      | m4varname=ShowDeleteCommentBtt; m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"SHOW_DELETE_COMMENT_BTT"}    |
| 238 | m4:item      | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"N_STATE"}; htmlsafe=true                                     |
| 239 | m4:item      | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"N_APP_USER"}; htmlsafe=true                                  |
| 240 | m4:item      | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"DT_COMMENT"}; htmlsafe=true; m4format=zsgcoParamDate         |
| 241 | m4:item      | m4name=SSCO_WORKITEM_COMMENTS{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_COMMENTS{"[&amp;VAR.m4lix]"}{"."}{"DESC_COMMENT"}; htmlsafe=true                                |
| 266 | m4:endpage   |                                                                                                                                                                       |

| L   | Operación        | Argumentos literales                                   |
| --- | ---------------- | ------------------------------------------------------ |
| 153 | getCountInClient | znodoworkitemcomments,zsubsesion,znodoworkitemcomments |
| 154 | getCount         | znodoworkitemcomments,zsubsesion,znodoworkitemcomments |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                 | Argumentos |
| --- | ----------------------- | ---------- |
| 59  | m4changeCommentsView    |            |
| 73  | m4checkCommentType      | index      |
| 78  | m4deleteLastComment     |            |
| 85  | m4refreshOpenerComments |            |

| L   | Condición / acción / mensaje literal                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 23  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                              |
| 24  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                             |
| 25  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                      |
| 26  | if ((zIdWkBpo==null)&#124;&#124;(zIdWkBpo.equals(""))) zIdWkBpo = "";                                                                                        |
| 27  | if ((zNWkBpo==null)&#124;&#124;(zNWkBpo.equals(""))) zNWkBpo = "";                                                                                           |
| 28  | if ((zDescBpo==null)&#124;&#124;(zDescBpo.equals(""))) zDescBpo = "";                                                                                        |
| 29  | if ((zIdWkitem==null)&#124;&#124;(zIdWkitem.equals(""))) zIdWkitem = "";                                                                                     |
| 30  | if ((zLoadType==null)&#124;&#124;(zLoadType.equals(""))) zLoadType = zLoadTypeTask;                                                                          |
| 31  | if ((zDeleteLastComment==null)&#124;&#124;(zDeleteLastComment.equals(""))) zDeleteLastComment ="";                                                           |
| 36  | if((zMssEss==null)&#124;&#124;(zMssEss.equals(""))) zMssEss = "ess";                                                                                         |
| 37  | if (zMssEss.equals("ess")){                                                                                                                                  |
| 40  | &lt;%}else{%&gt;                                                                                                                                             |
| 62  | if (objCommentType.length &gt;0){                                                                                                                            |
| 64  | if (objCommentType[i].checked == true){                                                                                                                      |
| 87  | if (!opener.closed &amp;&amp; opener.location) {                                                                                                             |
| 132 | &lt;% if (zDeleteLastComment.equals("1")){%&gt;                                                                                                              |
| 195 | &lt;%if ((zDescBpo!=null)&amp;&amp;(!zDescBpo.equals(""))){%&gt;                                                                                             |
| 207 | &lt;%if (zLoadType.equals(zLoadTypeTask)){%&gt;                                                                                                              |
| 209 | &lt;%}else{%&gt;                                                                                                                                             |
| 216 | &lt;% if (zcounti &gt; 0) {                                                                                                                                  |
| 235 | &lt;%zposicions1 = m4lix;zposicion1 = Integer.valueOf(zposicions1).intValue();zcontrol1 = zposicion1%2;if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%&gt; |
| 243 | &lt;%if (ShowDeleteCommentBtt.equals("1")) {%&gt;                                                                                                            |
| 249 | &lt;%}else{%&gt;                                                                                                                                             |
| 258 | &lt;%}else{%&gt;                                                                                                                                             |
| 269 | &lt;% if (zDeleteLastComment.equals("1")){%&gt;                                                                                                              |
| 97  | expresión de cálculo/transformación: String zmetodocarga = "SSCO_LOAD_COMMENTS:" + zsubsesion + "!" + znodoprincipal + ".SSCO_LOAD_COMMENTS";                |
| 98  | expresión de cálculo/transformación: String zmetododelete = "SSCO_DELETE_LAST_COMMENT:" + zsubsesion + "!" + znodoprincipal + ".SSCO_DELETE_LAST_COMMENT";   |
| 105 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                |
| 107 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                   |
| 108 | expresión de cálculo/transformación: String znamenodo = znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments;                              |
| 110 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodoworkitemcomments + "[" + zregistroinicial + "-" + zregistrofinal + "]";     |
| 111 | expresión de cálculo/transformación: String zmove =znodoworkitemcomments + ":" + znodoworkitemcomments + "[" + zregistroinicial + "]";                       |
| 112 | expresión de cálculo/transformación: String zraiz = znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments + ".";                            |
| 113 | expresión de cálculo/transformación: String zcomun = znodoworkitemcomments + ":" + zsubsesion + "!" + znodoworkitemcomments + "[&amp;VAR.m4lix]" + ".";      |
| 116 | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                             |
| 119 | expresión de cálculo/transformación: String zID_COMMENT = zcomun + "ID_COMMENT";                                                                             |
| 121 | expresión de cálculo/transformación: String zN_STATE = zcomun + "N_STATE";                                                                                   |
| 124 | expresión de cálculo/transformación: String zSHOW_DELETE_COMMENT_BTT = zcomun + "SHOW_DELETE_COMMENT_BTT";                                                   |
| 218 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 8   | ../../sse_generico/sgco_gen_inc.jsp                   |
| 46  | /sse_g0/ssco_etask_trans.jsp                          |
| 257 | ../../sse_generico/espanol/generico_ventanas_post.jsp |

| L   | Destino / recurso                                             |
| --- | ------------------------------------------------------------- |
| 39  | /css/estilo_sse.css                                           |
| 41  | /css/estilo_mss.css                                           |
| 44  | /libreria/funciones_sse.js                                    |
| 45  | /library/m4gen.js                                             |
| 166 | /servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_comments.jsp |
| 182 | /iconos/noname_listado_63_80.gif                              |
| 245 | javascript:m4deleteLastComment();                             |
| 246 | /iconos/icono_eliminar_ess_11_12.gif                          |
| 262 | javascript:window.close();                                    |
| 263 | /iconos/entrar_blanco.gif                                     |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                    |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                  |
| 8   | ../../sse_generico/sgco_gen_inc.jsp                           |
| 46  | /sse_g0/ssco_etask_trans.jsp                                  |
| 257 | ../../sse_generico/espanol/generico_ventanas_post.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                    | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                    | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                  | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp                           | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                     |
| BASE   | 46  | /sse_g0/ssco_etask_trans.jsp                                  | contextual | [sse_g0/ssco_etask_trans.jsp](sse_g0--ssco_etask_trans.md)                                                      |
| BASE   | 257 | ../../sse_generico/espanol/generico_ventanas_post.jsp         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 44  | /libreria/funciones_sse.js                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 45  | /library/m4gen.js                                             | contextual | [library/m4gen.js](../../transversal/dependencias/library--m4gen.md)                                            |
| BASE   | 166 | /servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_comments.jsp | ausente    | P06                                                                                                             |
| BASE   | 245 | javascript:m4deleteLastComment();                             | dinámica   | P06                                                                                                             |
| BASE   | 262 | javascript:window.close();                                    | dinámica   | P06                                                                                                             |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                    | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                  | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp                           | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                     |
| BASE   | 46  | /sse_g0/ssco_etask_trans.jsp                                  | contextual | [sse_g0/ssco_etask_trans.jsp](sse_g0--ssco_etask_trans.md)                                                      |
| BASE   | 257 | ../../sse_generico/espanol/generico_ventanas_post.jsp         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_easy_task_comments.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
