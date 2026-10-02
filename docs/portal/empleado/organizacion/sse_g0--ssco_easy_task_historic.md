# ssco_easy_task_historic

Identificador: `sse_g0/ssco_easy_task_historic.jsp`. Perfil: **empleado**. Dominio: **organizacion**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                 | Texto                                           | Ámbito | Diccionario                                                                                 |
| --------------------- | ----------------------------------------------- | ------ | ------------------------------------------------------------------------------------------- |
| Button.Close          | Cerrar                                          | COLL   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close          | Cerrar                                          | CYC    | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close          | Cerrar                                          | IBER   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close          | Cerrar                                          | BASE   | [translations/ess_mss_gen_es.properties:L81](../../referencias/literales/ess_mss_gen_es.md) |
| Button.Close          | Cerrar                                          | BASE   | [translations/shco_g0_es.properties:L22](../../referencias/literales/shco_g0_es.md)         |
| Button.Close          | Cerrar                                          | BASE   | [translations/ssco_etask_es.properties:L37](../../referencias/literales/ssco_etask_es.md)   |
| Image.AssignedTask    | Tarea pendiente                                 | BASE   | [translations/ssco_etask_es.properties:L49](../../referencias/literales/ssco_etask_es.md)   |
| Image.FinishedTask    | Tarea finalizada                                | BASE   | [translations/ssco_etask_es.properties:L50](../../referencias/literales/ssco_etask_es.md)   |
| Image.NotPendingTask  | Tarea cancelada o ya realizada por otra persona | BASE   | [translations/ssco_etask_es.properties:L51](../../referencias/literales/ssco_etask_es.md)   |
| Label.NoHistoricFound | No hay pasos para este proceso                  | BASE   | [translations/ssco_etask_es.properties:L47](../../referencias/literales/ssco_etask_es.md)   |
| Page.HistoricDesc     | Consulta los pasos del proceso                  | BASE   | [translations/ssco_etask_es.properties:L46](../../referencias/literales/ssco_etask_es.md)   |
| Page.HistoricTitle    | Detalles del proceso                            | BASE   | [translations/ssco_etask_es.properties:L45](../../referencias/literales/ssco_etask_es.md)   |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                                 | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [sse_g0/espanol/ssco_easy_task_historic.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_easy_task_historic.jsp) | `f2da2e0aaa13e7d7d12db53f5a8533808df310392b8c5c707a6e69dc041e2935` |    219 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [sse_g0/espanol/ssco_easy_task_historic.jsp](../../../../clon_portal/portal/sse_g0/espanol/ssco_easy_task_historic.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta |
| --- | ------------------------ |
| 150 | ([valor dinámico])       |
| 192 | &amp;nbsb;               |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                          |
| --- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 127 | form    | id=oculto; name=oculto; action=/servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_historic.jsp; method=post                          |
| 128 | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                           |
| 129 | input   | type=hidden; id=znivel; name=znivel; value=&lt;%=znivel%&gt;                                                                       |
| 130 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                                    |
| 131 | input   | type=hidden; id=zIdWkBpo; name=zIdWkBpo; value=&lt;%=zIdWkBpo%&gt;                                                                 |
| 132 | input   | type=hidden; id=zNWkBpo; name=zNWkBpo; value=&lt;%=zNWkBpo%&gt;                                                                    |
| 133 | input   | type=hidden; id=zDescBpo; name=zDescBpo; value=&lt;%=zDescBpo%&gt;                                                                 |
| 140 | img     | alt=; src=/iconos/noname_listado_63_80.gif; width=63; height=80                                                                    |
| 184 | img     | alt=&lt;%=zImageAssignTaskLbl%&gt;; src=/iconos/icono_assigned_task_16_16.gif; height=16; width=16; onmouseout=m4oscuridad(this)   |
| 187 | img     | alt=&lt;%=zImageFinishedTaskLbl%&gt;; src=/iconos/icono_finished_task_16_16.gif; height=16; width=16; onmouseout=m4oscuridad(this) |
| 189 | img     | alt=&lt;%=zImageNotPendingTaskLbl%&gt;; src=/iconos/icono_task16_16.gif; height=16; width=16; onmouseout=m4oscuridad(this)         |
| 209 | a       | href=javascript:window.close();                                                                                                    |
| 210 | img     | alt=&lt;%=zButtonCloseLbl%&gt;; src=/iconos/entrar_blanco.gif; height=36; width=36                                                 |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 10  | estado          | getParameter(request,"estado")       |
| 11  | znivel          | getParameter(request,"znivel")       |
| 12  | zinicios        | getParameter(request,"zinicios")     |
| 13  | zParamAction    | getParameter(request,"zParamAction") |
| 14  | zIdWkBpo        | getParameter(request,"zIdWkBpo")     |
| 15  | zNWkBpo         | getParameter(request,"zNWkBpo")      |
| 16  | zDescBpo        | getParameter(request,"zDescBpo")     |

| L   | Variable                | Expresión fuente                                                                                  | Resolución estática parcial                                                                                                                       |
| --- | ----------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 10  | estado                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"estado")                                                                                |
| 11  | znivel                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel")                                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"znivel")                                                                                |
| 12  | zinicios                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zinicios")                                                                              |
| 13  | zParamAction            | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zParamAction")                          | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zParamAction")                                                                          |
| 14  | zIdWkBpo                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo")                                                                              |
| 15  | zNWkBpo                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNWkBpo")                               | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zNWkBpo")                                                                               |
| 16  | zDescBpo                | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescBpo")                              | com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zDescBpo")                                                                              |
| 29  | zMssEss                 | zsessionmanagermssess.getProductID()                                                              | zsessionmanagermssess.getProductID()                                                                                                              |
| 43  | zNoDataFoundLbl         | TranEasytask.getProperty("Label.NoHistoricFound")                                                 | TranEasytask.getProperty("Label.NoHistoricFound")                                                                                                 |
| 44  | zButtonCloseLbl         | TranEasytask.getProperty("Button.Close")                                                          | TranEasytask.getProperty("Button.Close")                                                                                                          |
| 45  | zHistoricDesc           | TranEasytask.getProperty("Page.HistoricDesc")                                                     | TranEasytask.getProperty("Page.HistoricDesc")                                                                                                     |
| 46  | zImageAssignTaskLbl     | TranEasytask.getProperty("Image.AssignedTask")                                                    | TranEasytask.getProperty("Image.AssignedTask")                                                                                                    |
| 47  | zImageFinishedTaskLbl   | TranEasytask.getProperty("Image.FinishedTask")                                                    | TranEasytask.getProperty("Image.FinishedTask")                                                                                                    |
| 48  | zImageNotPendingTaskLbl | TranEasytask.getProperty("Image.NotPendingTask")                                                  | TranEasytask.getProperty("Image.NotPendingTask")                                                                                                  |
| 49  | zPageTitle              | TranEasytask.getProperty("Page.HistoricTitle")                                                    | TranEasytask.getProperty("Page.HistoricTitle")                                                                                                    |
| 54  | zsubsesion              | "SSCO_WF_EASY_TASK"                                                                               | SSCO_WF_EASY_TASK                                                                                                                                 |
| 55  | zmeta4object            | "SSCO_WF_EASY_TASK"                                                                               | SSCO_WF_EASY_TASK                                                                                                                                 |
| 56  | znodoprincipal          | "SSCO_WF_EASY_TASK_ROOT"                                                                          | SSCO_WF_EASY_TASK_ROOT                                                                                                                            |
| 57  | zmetodocarga            | "SSCO_LOAD_HISTORIC:" + zsubsesion + "!" + znodoprincipal + ".SSCO_LOAD_HISTORIC"                 | SSCO_LOAD_HISTORIC:{}SSCO_WF_EASY_TASK{"!"}SSCO_WF_EASY_TASK_ROOT{".SSCO_LOAD_HISTORIC"}                                                          |
| 59  | znodoworkitemhistoric   | "SSCO_WORKITEM_HISTORIC"                                                                          | SSCO_WORKITEM_HISTORIC                                                                                                                            |
| 60  | zventanas               | "20"                                                                                              | 20                                                                                                                                                |
| 61  | zvuelta                 | 2                                                                                                 | 2                                                                                                                                                 |
| 62  | zestado                 | "11"                                                                                              | 11                                                                                                                                                |
| 63  | zregistroinicial        | Integer.valueOf(zinicios).intValue()                                                              | Integer.valueOf(zinicios).intValue()                                                                                                              |
| 65  | zventana                | Integer.valueOf(zventanas).intValue()                                                             | Integer.valueOf(zventanas).intValue()                                                                                                             |
| 66  | zregistrofinal          | zregistroinicial + zventana - 1                                                                   | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                                |
| 67  | znamenodo               | znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric                            | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC                                                                           |
| 69  | zoutputdef              | zsubsesion + "!" + znodoworkitemhistoric + "[" + zregistroinicial + "-" + zregistrofinal + "]"    | SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 70  | zmove                   | znodoworkitemhistoric + ":" + znodoworkitemhistoric + "[" + zregistroinicial + "]"                | SSCO_WORKITEM_HISTORIC{":"}SSCO_WORKITEM_HISTORIC{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                   |
| 71  | zraiz                   | znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric + "."                      | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"."}                                                                      |
| 72  | zcomun                  | znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric + "[&amp;VAR.m4lix]" + "." | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}                                                  |
| 74  | znodocom                | "SSCO_ERROR_COMUNICATION"                                                                         | SSCO_ERROR_COMUNICATION                                                                                                                           |
| 75  | zoutputdefcom           | zsubsesion + "!" + znodocom + "[*]"                                                               | SSCO_WF_EASY_TASK{"!"}SSCO_ERROR_COMUNICATION{"[*]"}                                                                                              |
| 78  | zN_STATE                | zcomun + "N_STATE"                                                                                | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"N_STATE"}                                       |
| 79  | zN_APP_USER             | zcomun+ "N_APP_USER"                                                                              | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"N_APP_USER"}                                    |
| 80  | sItemDT_INSTANTIATION   | "DT_INSTANTIATION"                                                                                | DT_INSTANTIATION                                                                                                                                  |
| 81  | zDT_INSTANTIATION       | zcomun + sItemDT_INSTANTIATION                                                                    | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}DT_INSTANTIATION                                  |
| 82  | zDT_CANCELATION         | zcomun + "DT_CANCELATION"                                                                         | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"DT_CANCELATION"}                                |
| 83  | zIS_EXECUTED_BY_USER    | zcomun + "IS_EXECUTED_BY_USER"                                                                    | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"IS_EXECUTED_BY_USER"}                           |
| 84  | zID_WKITEM_STATUS       | zcomun + "ID_WKITEM_STATUS"                                                                       | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"ID_WKITEM_STATUS"}                              |
| 85  | zIS_SUB_BPO             | zcomun + "IS_SUB_BPO"                                                                             | SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"IS_SUB_BPO"}                                    |
| 111 | zcounti                 | 0                                                                                                 | 0                                                                                                                                                 |
| 112 | zcount                  | 0                                                                                                 | 0                                                                                                                                                 |
| 118 | zcountv                 | String.valueOf(zcounti)                                                                           | String.valueOf(zcounti)                                                                                                                           |
| 156 | zregistroinicials       | String.valueOf(zregistroinicial)                                                                  | String.valueOf(zregistroinicial)                                                                                                                  |
| 157 | zregistrofinals         | String.valueOf(zregistroinicial + zcounti - 1)                                                    | {String.valueOf(zregistroinicial}{zcounti - 1)}                                                                                                   |
| 158 | zPaint1                 | ""                                                                                                |                                                                                                                                                   |
| 159 | zposicion1              | 0                                                                                                 | 0                                                                                                                                                 |
| 160 | zcontrol1               | 0                                                                                                 | 0                                                                                                                                                 |
| 161 | zposicions1             | "0"                                                                                               | 0                                                                                                                                                 |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                     |
| --- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 90  | m4:startpage | m4task=SSCO_WF_EASY_TASK                                                                                                                                               |
| 91  | m4:beginjob  |                                                                                                                                                                        |
| 92  | m4:datadef   | m4o=SSCO_WF_EASY_TASK; m4name=SSCO_WF_EASY_TASK                                                                                                                        |
| 93  | m4:exec      | m4method=SSCO_LOAD_HISTORIC:{}SSCO_WF_EASY_TASK{"!"}SSCO_WF_EASY_TASK_ROOT{".SSCO_LOAD_HISTORIC"}                                                                      |
| 94  | m4:param     | name=ARG_ID_BPO; value=com.meta4.taglib.util.M4SafeRequest.getParameter(request,"zIdWkBpo")                                                                            |
| 106 | m4:outputdef | m4alias=SSCO_WORKITEM_HISTORIC                                                                                                                                         |
| 106 | m4:param     | name=m4name0; value=SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"}  |
| 107 | m4:outputdef | m4alias=SSCO_ERROR_COMUNICATION                                                                                                                                        |
| 107 | m4:param     | name=m4name0; value=SSCO_WF_EASY_TASK{"!"}SSCO_ERROR_COMUNICATION{"[*]"}                                                                                               |
| 108 | m4:endjob    |                                                                                                                                                                        |
| 109 | m4:move      |                                                                                                                                                                        |
| 109 | m4:param     | name=SSCO_WF_EASY_TASK; value=SSCO_WORKITEM_HISTORIC{":"}SSCO_WORKITEM_HISTORIC{"["}Integer.valueOf(zinicios).intValue(){"]"}                                          |
| 167 | m4:label     | m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"N_STATE"}; htmlsafe=true                                      |
| 168 | m4:label     | m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"N_APP_USER"}; htmlsafe=true                                   |
| 169 | m4:label     | m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"DT_CANCELATION"}; htmlsafe=true                               |
| 172 | m4:loop      | from=String.valueOf(zregistroinicial); to={String.valueOf(zregistroinicial}{zcounti - 1)}                                                                              |
| 176 | m4:item      | m4varname=isExecutedByUser; m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"IS_EXECUTED_BY_USER"}; m4format=0 |
| 177 | m4:item      | m4varname=IdWorkItemStatus; m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"ID_WKITEM_STATUS"}; m4format=0    |
| 178 | m4:item      | m4varname=isSubBPo; m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"IS_SUB_BPO"}; m4format=0                  |
| 196 | m4:item      | m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"N_STATE"}; htmlsafe=true                                      |
| 198 | m4:item      | m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"N_APP_USER"}; htmlsafe=true                                   |
| 199 | m4:item      | m4name=SSCO_WORKITEM_HISTORIC{":"}SSCO_WF_EASY_TASK{"!"}SSCO_WORKITEM_HISTORIC{"[&amp;VAR.m4lix]"}{"."}{"DT_CANCELATION"}; htmlsafe=true; m4format=zsgcoParamDate      |
| 214 | m4:endpage   |                                                                                                                                                                        |

| L   | Operación        | Argumentos literales                                   |
| --- | ---------------- | ------------------------------------------------------ |
| 115 | getCountInClient | znodoworkitemhistoric,zsubsesion,znodoworkitemhistoric |
| 116 | getCount         | znodoworkitemhistoric,zsubsesion,znodoworkitemhistoric |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                         |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 18  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                                              |
| 19  | if ((znivel==null)&#124;&#124;(znivel.equals(""))) znivel = "1";                                                                                             |
| 20  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                                      |
| 21  | if ((zIdWkBpo==null)&#124;&#124;(zIdWkBpo.equals(""))) zIdWkBpo = "";                                                                                        |
| 22  | if ((zNWkBpo==null)&#124;&#124;(zNWkBpo.equals(""))) zNWkBpo = "";                                                                                           |
| 23  | if ((zDescBpo==null)&#124;&#124;(zDescBpo.equals(""))) zDescBpo = "";                                                                                        |
| 30  | if((zMssEss==null)&#124;&#124;(zMssEss.equals(""))) zMssEss = "ess";                                                                                         |
| 31  | if (zMssEss.equals("ess")){                                                                                                                                  |
| 34  | &lt;%}else{%&gt;                                                                                                                                             |
| 149 | &lt;%if ((zDescBpo!=null)&amp;&amp;(!zDescBpo.equals(""))){%&gt;                                                                                             |
| 155 | &lt;% if (zcounti &gt; 0) {                                                                                                                                  |
| 173 | &lt;%zposicions1 = m4lix;zposicion1 = Integer.valueOf(zposicions1).intValue();zcontrol1 = zposicion1%2;if (zcontrol1==0){zPaint1="";}else{zPaint1="2";}%&gt; |
| 183 | &lt;% if (IdWorkItemStatus.equals("1")){%&gt;                                                                                                                |
| 185 | &lt;%}else {                                                                                                                                                 |
| 186 | if ((IdWorkItemStatus.equals("2")) &amp;&amp; (isExecutedByUser.equals("1"))){%&gt;                                                                          |
| 188 | &lt;%}else{%&gt;                                                                                                                                             |
| 193 | &lt;% if (isSubBPo.equals("1")){%&gt;                                                                                                                        |
| 205 | &lt;%}else{%&gt;                                                                                                                                             |
| 57  | expresión de cálculo/transformación: String zmetodocarga = "SSCO_LOAD_HISTORIC:" + zsubsesion + "!" + znodoprincipal + ".SSCO_LOAD_HISTORIC";                |
| 64  | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                                                |
| 66  | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                                   |
| 67  | expresión de cálculo/transformación: String znamenodo = znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric;                              |
| 69  | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodoworkitemhistoric + "[" + zregistroinicial + "-" + zregistrofinal + "]";     |
| 70  | expresión de cálculo/transformación: String zmove =znodoworkitemhistoric + ":" + znodoworkitemhistoric + "[" + zregistroinicial + "]";                       |
| 71  | expresión de cálculo/transformación: String zraiz = znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric + ".";                            |
| 72  | expresión de cálculo/transformación: String zcomun = znodoworkitemhistoric + ":" + zsubsesion + "!" + znodoworkitemhistoric + "[&amp;VAR.m4lix]" + ".";      |
| 75  | expresión de cálculo/transformación: String zoutputdefcom = zsubsesion + "!" + znodocom + "[*]";                                                             |
| 78  | expresión de cálculo/transformación: String zN_STATE = zcomun + "N_STATE";                                                                                   |
| 81  | expresión de cálculo/transformación: String zDT_INSTANTIATION= zcomun + sItemDT_INSTANTIATION;                                                               |
| 82  | expresión de cálculo/transformación: String zDT_CANCELATION= zcomun + "DT_CANCELATION";                                                                      |
| 83  | expresión de cálculo/transformación: String zIS_EXECUTED_BY_USER = zcomun + "IS_EXECUTED_BY_USER";                                                           |
| 84  | expresión de cálculo/transformación: String zID_WKITEM_STATUS = zcomun + "ID_WKITEM_STATUS";                                                                 |
| 85  | expresión de cálculo/transformación: String zIS_SUB_BPO = zcomun + "IS_SUB_BPO";                                                                             |
| 157 | expresión de cálculo/transformación: String zregistrofinals = String.valueOf(zregistroinicial + zcounti - 1);                                                |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 1   | ../../sse_generico/sse_generico_taglib.jsp            |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp          |
| 8   | ../../sse_generico/sgco_gen_inc.jsp                   |
| 40  | /sse_g0/ssco_etask_trans.jsp                          |
| 204 | ../../sse_generico/espanol/generico_ventanas_post.jsp |

| L   | Destino / recurso                                             |
| --- | ------------------------------------------------------------- |
| 33  | /css/estilo_sse.css                                           |
| 35  | /css/estilo_mss.css                                           |
| 38  | /libreria/funciones_sse.js                                    |
| 39  | /library/m4gen.js                                             |
| 127 | /servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_historic.jsp |
| 140 | /iconos/noname_listado_63_80.gif                              |
| 184 | /iconos/icono_assigned_task_16_16.gif                         |
| 187 | /iconos/icono_finished_task_16_16.gif                         |
| 189 | /iconos/icono_task16_16.gif                                   |
| 209 | javascript:window.close();                                    |
| 210 | /iconos/entrar_blanco.gif                                     |
| 1   | ../../sse_generico/sse_generico_taglib.jsp                    |
| 7   | ../../sse_generico/sse_generico_taglib_2.jsp                  |
| 8   | ../../sse_generico/sgco_gen_inc.jsp                           |
| 40  | /sse_g0/ssco_etask_trans.jsp                                  |
| 204 | ../../sse_generico/espanol/generico_ventanas_post.jsp         |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                    | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                    | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                  | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp                           | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                     |
| BASE   | 40  | /sse_g0/ssco_etask_trans.jsp                                  | contextual | [sse_g0/ssco_etask_trans.jsp](sse_g0--ssco_etask_trans.md)                                                      |
| BASE   | 204 | ../../sse_generico/espanol/generico_ventanas_post.jsp         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 38  | /libreria/funciones_sse.js                                    | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 39  | /library/m4gen.js                                             | contextual | [library/m4gen.js](../../transversal/dependencias/library--m4gen.md)                                            |
| BASE   | 127 | /servlet/CheckSecurity/JSP/sse_g0/ssco_easy_task_historic.jsp | ausente    | P06                                                                                                             |
| BASE   | 209 | javascript:window.close();                                    | dinámica   | P06                                                                                                             |
| BASE   | 1   | ../../sse_generico/sse_generico_taglib.jsp                    | física     | [sse_generico/sse_generico_taglib.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib.md)       |
| BASE   | 7   | ../../sse_generico/sse_generico_taglib_2.jsp                  | física     | [sse_generico/sse_generico_taglib_2.jsp](../../transversal/navegacion/sse_generico--sse_generico_taglib_2.md)   |
| BASE   | 8   | ../../sse_generico/sgco_gen_inc.jsp                           | física     | [sse_generico/sgco_gen_inc.jsp](../../transversal/navegacion/sse_generico--sgco_gen_inc.md)                     |
| BASE   | 40  | /sse_g0/ssco_etask_trans.jsp                                  | contextual | [sse_g0/ssco_etask_trans.jsp](sse_g0--ssco_etask_trans.md)                                                      |
| BASE   | 204 | ../../sse_generico/espanol/generico_ventanas_post.jsp         | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `sse_g0/ssco_easy_task_historic.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
