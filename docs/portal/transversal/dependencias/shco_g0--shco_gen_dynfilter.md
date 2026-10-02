# shco_gen_dynfilter

Identificador: `shco_g0/shco_gen_dynfilter.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_dynfilter.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter.jsp) | `4e180ee4ab4651e16a5b8cb1ae7582e94ca953fc30119b6c9798582bf25b5fa8` |    448 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_dynfilter.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_dynfilter.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                    |
| --- | ----------------------------------------------------------- |
| 397 | " href="javascript:removeFilter();"&gt; " /&gt;             |
| 403 | " onFocus="saveScenario()" onchange="changeScenario()" &gt; |
| 424 | " href="javascript:saveFilterNode();"&gt; " &gt;            |
| 429 | " title=" " /&gt; " title=" " /&gt;                         |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control  | Atributos                                                                                                                                                                                                     |
| --- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 315 | form     | action=; name=frmreturn; id=frmreturn; method=post                                                                                                                                                            |
| 316 | input    | type=hidden; id=&lt;%=zPARAM_SUB%&gt;; name=&lt;%=zPARAM_SUB%&gt;; value=                                                                                                                                     |
| 317 | input    | type=hidden; id=&lt;%=zPARAM_M4O%&gt;; name=&lt;%=zPARAM_M4O%&gt;; value=                                                                                                                                     |
| 318 | input    | type=hidden; id=&lt;%=zPARAM_M4OALIAS%&gt;; name=&lt;%=zPARAM_M4OALIAS%&gt;; value=                                                                                                                           |
| 319 | input    | type=hidden; id=&lt;%=zPARAM_DYNFILTER%&gt;; name=&lt;%=zPARAM_DYNFILTER%&gt;; value=                                                                                                                         |
| 359 | form     | action=/servlet/CheckSecurity/JSP/shco_g0/shco_gen_htmlfilter.jsp; name=frmcallfilter; id=frmcallfilter; method=post                                                                                          |
| 360 | input    | type=hidden; id=zidoperation; name=zidoperation; value=API_GET_FILTER_EX                                                                                                                                      |
| 361 | input    | type=hidden; id=zidsentence; name=zidsentence; value=                                                                                                                                                         |
| 362 | input    | type=hidden; id=zidescenario; name=zidescenario; value=                                                                                                                                                       |
| 363 | input    | type=hidden; id=zidtable; name=zidtable; value=                                                                                                                                                               |
| 364 | input    | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                                                      |
| 365 | input    | type=hidden; id=zsubsesiondynfilter; name=zsubsesiondynfilter; value=&lt;%=zsubsesion%&gt;                                                                                                                    |
| 366 | input    | type=hidden; id=zreturnpage; name=zreturnpage; value=isa.jsp                                                                                                                                                  |
| 367 | input    | type=hidden; id=zidrelationtype; name=zidrelationtype; value=                                                                                                                                                 |
| 368 | input    | type=hidden; id=zhtmlfilterinstance; name=zhtmlfilterinstance; value=                                                                                                                                         |
| 369 | input    | type=hidden; id=znnode; name=znnode; value=                                                                                                                                                                   |
| 370 | input    | type=hidden; id=zretmode; name=zretmode; value=1                                                                                                                                                              |
| 371 | input    | type=hidden; id=zshowsavebutton; name=zshowsavebutton; value=1                                                                                                                                                |
| 372 | input    | type=hidden; id=zreloadsentence; name=zreloadsentence; value=0                                                                                                                                                |
| 376 | form     | action=/servlet/CheckSecurity/JSP/shco_g0/shco_gen_dynfilter.jsp; method=post; name=NombreFormulario; id=NombreFormulario                                                                                     |
| 377 | input    | type=hidden; id=zop; name=zop; value=&lt;%=zoperation%&gt;                                                                                                                                                    |
| 378 | input    | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                                                                                                      |
| 379 | input    | type=hidden; id=zNodeSubsessionItem; name=zNodeSubsessionItem; value=&lt;%=zsubsesion%&gt;                                                                                                                    |
| 380 | input    | type=hidden; id=&lt;%=zIdNodeItem%&gt;; name=&lt;%=zIdNodeItem%&gt;; value=&lt;%=zidnode%&gt;                                                                                                                 |
| 381 | input    | type=hidden; id=&lt;%=zNNodeItem%&gt;; name=&lt;%=zNNodeItem%&gt;; value=&lt;%=znnode%&gt;                                                                                                                    |
| 382 | input    | type=hidden; id=&lt;%=zIdReadObjetItem%&gt;; name=&lt;%=zIdReadObjetItem%&gt;; value=&lt;%=zidreadobject%&gt;                                                                                                 |
| 383 | input    | type=hidden; id=&lt;%=zIdSentenceItem%&gt;; name=&lt;%=zIdSentenceItem%&gt;; value=&lt;%=zidsentence%&gt;                                                                                                     |
| 384 | input    | type=hidden; id=&lt;%=zApiSqlItem%&gt;; name=&lt;%=zApiSqlItem%&gt;; value=&lt;%=zapisql%&gt;                                                                                                                 |
| 385 | input    | type=hidden; id=&lt;%=zPARAM_RETMODE%&gt;; name=&lt;%=zPARAM_RETMODE%&gt;; value=&lt;%=zdf_retmode%&gt;                                                                                                       |
| 386 | input    | type=hidden; id=&lt;%=zPARAM_APPLYMODE%&gt;; name=&lt;%=zPARAM_APPLYMODE%&gt;; value=&lt;%=zdf_applymode%&gt;                                                                                                 |
| 387 | input    | type=hidden; id=ARG_LIST_PRED_ID_SCENARIO; name=ARG_LIST_PRED_ID_SCENARIO; value=                                                                                                                             |
| 388 | input    | type=hidden; id=ARG_LIST_PRED_ID_TABLE_BASE; name=ARG_LIST_PRED_ID_TABLE_BASE; value=                                                                                                                         |
| 389 | input    | type=hidden; id=SENTENCES_IN_USED; name=SENTENCES_IN_USED; value=                                                                                                                                             |
| 390 | input    | type=hidden; id=zreloadsentence; name=zreloadsentence; value=&lt;%=zreloadsentence%&gt;                                                                                                                       |
| 391 | input    | type=hidden; id=zSentencesTobeReloaded; name=zSentencesTobeReloaded; value=&lt;%=zSentencesTobeReloaded%&gt;                                                                                                  |
| 397 | a        | title=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                     |
| 397 | img      | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                       |
| 404 | select   | class=selectform50; name=&lt;%=zIdScenarioItem%&gt;; id=&lt;%=zIdScenarioItem%&gt;; tabindex=&lt;%=(zTab_+_1)%&gt;; title=&lt;m4:label m4name=; htmlsafe=true                                                 |
| 413 | a        | tabindex=&lt;%=(zTab_+_1)%&gt;; title=&lt;%=zSHCOLBEDIT_val%&gt; &lt;m4:label m4name=; htmlsafe=true                                                                                                          |
| 414 | img      | file=../files_gif/ic_mod.jsp                                                                                                                                                                                  |
| 416 | a        | title=&lt;%=zSHCOLBLIST_val%&gt; &lt;m4:label m4name=; htmlsafe=true                                                                                                                                          |
| 416 | img      | file=../files_gif/ic_list.jsp                                                                                                                                                                                 |
| 420 | textarea | rows=3; class=disabled; id=&lt;%=zFilterLangItem%&gt;; name=&lt;%=zFilterLangItem%&gt;; title=; value=&lt;%=znatlanguage%&gt;; readonly=readonly; cols=20; disabled=presente; confirmar condición si dinámico |
| 425 | a        | tabindex=&lt;%=(zTab+1)%&gt;; title=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                       |
| 425 | img      | file=../files_gif/ic_ins_tmp.jsp                                                                                                                                                                              |
| 430 | a        | href=javascript:applyfilter();                                                                                                                                                                                |
| 430 | img      | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                       |
| 431 | a        | href=javascript:cancelFilter();                                                                                                                                                                               |
| 431 | img      | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                       |

### Contexto, entradas y valores construidos

| L   | Entrada / clave        | Acceso literal                                  |
| --- | ---------------------- | ----------------------------------------------- |
| 27  | zdf_sub                | getParameter(request, "zdf_sub")                |
| 29  | zsubsesion             | getParameter(request,"zsubsesion")              |
| 44  | zop                    | getParameter(request, "zop")                    |
| 45  | zreloadsentence        | getParameter(request, "zreloadsentence")        |
| 47  | zSentencesTobeReloaded | getParameter(request, "zSentencesTobeReloaded") |

| L   | Variable               | Expresión fuente                                                                                | Resolución estática parcial                                                                     |
| --- | ---------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 27  | zsubsesion             | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zdf_sub")                            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zdf_sub")                            |
| 34  | zdf_m4o                | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_M4O))           | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_M4O))           |
| 35  | zdf_m4oalias           | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_M4OALIAS))      | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_M4OALIAS))      |
| 36  | zdf_returnpage         | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGE))       | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGE))       |
| 37  | zdf_applymode          | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_APPLYMODE))     | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_APPLYMODE))     |
| 39  | zdf_retmode            | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETMODE))       | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETMODE))       |
| 40  | zdf_returnpagewidth    | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGEWIDTH))  | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGEWIDTH))  |
| 42  | zdf_returnpageheight   | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGEHEIGHT)) | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_RETPAGEHEIGHT)) |
| 44  | zoperation             | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zop"))                | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zop"))                |
| 45  | zreloadsentence        | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zreloadsentence")                    | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zreloadsentence")                    |
| 47  | zSentencesTobeReloaded | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zSentencesTobeReloaded")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zSentencesTobeReloaded")             |
| 50  | zidnode                | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdNodeItem))          | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdNodeItem))          |
| 51  | znnode                 | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zNNodeItem))           | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zNNodeItem))           |
| 52  | zidreadobject          | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdReadObjetItem))     | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdReadObjetItem))     |
| 56  | zidsentence            | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdSentenceItem))      | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdSentenceItem))      |
| 57  | zapisql                | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zApiSqlItem))          | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zApiSqlItem))          |
| 58  | znatlanguage           | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zFilterLangItem))      | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zFilterLangItem))      |
| 59  | zidscenario            | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdScenarioItem))      | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zIdScenarioItem))      |
| 61  | zvalue                 | zdf_m4o                                                                                         | getStringValue(com.meta4.taglib.util.M4SafeRequest.getParameter(request, zPARAM_M4O))           |
| 62  | zhelp                  | "SHCO_GEN_DYNFILTER.htm"                                                                        | SHCO_GEN_DYNFILTER.htm                                                                          |
| 66  | g_zListOfSentenceInUse | ""                                                                                              |                                                                                                 |
| 306 | zerror                 | ""                                                                                              |                                                                                                 |
| 307 | zshco_TEXT             | ""                                                                                              |                                                                                                 |
| 322 | bContinue              | true                                                                                            | true                                                                                            |
| 326 | zcountdynfilter        | 0                                                                                               | 0                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                            |
| --- | ------------ | ----------------------------------------------------------------------------- |
| 69  | m4:startpage | m4task=com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zdf_sub")   |
| 70  | m4:beginjob  |                                                                               |
| 71  | m4:datadef   | m4o=zm4object; m4name=zm4oalias                                               |
| 73  | m4:endjob    |                                                                               |
| 113 | m4:label     | m4name=zSHCOLBFILTER; jsafe=true                                              |
| 341 | m4:item      | m4name=zlDynInfoItem; m4varname=zDynInfoItemVar; jsafe=true                   |
| 342 | m4:item      | m4name=zlIdT3Item; m4varname=zIdT3ItemVar; jsafe=true                         |
| 343 | m4:item      | m4name=zlIdT3Alias; m4varname=zIdT3AliasVar; jsafe=true                       |
| 344 | m4:item      | m4name=zlReturnPageItem; m4varname=zReturnPageItemVar; jsafe=true             |
| 345 | m4:item      | m4name=zlReturnPageWidthItem; m4varname=zReturnPageWidthItemVar; jsafe=true   |
| 346 | m4:item      | m4name=zlReturnPageHeightItem; m4varname=zReturnPageHeightItemVar; jsafe=true |
| 353 | m4:item      | m4name=zlNT3Item; m4varname=zNT3ItemVar; jsafe=true                           |
| 402 | m4:label     | m4name=zSHCO_LB_SCENARIO; htmlsafe=true                                       |
| 414 | m4:label     | m4name=zSHCOLBFILTER; htmlsafe=true                                           |
| 415 | m4:label     | m4name=zSHCOLBFILTER; htmlsafe=true                                           |
| 416 | m4:label     | m4name=zSHCOLBPREDFILTER; htmlsafe=true                                       |
| 417 | m4:label     | m4name=zSHCOLBPREDFILTER; htmlsafe=true                                       |
| 425 | m4:label     | m4name=zSHCOLBINSTEM; htmlsafe=true                                           |
| 430 | m4:label     | m4name=zSHCO_LB_APPLY_FILTER; htmlsafe=true                                   |
| 431 | m4:label     | m4name=zSHCOLBCANCEL; htmlsafe=true                                           |
| 447 | m4:endpage   |                                                                               |

| L   | Operación | Argumentos literales                               |
| --- | --------- | -------------------------------------------------- |
| 184 | exec      | zslistinfo                                         |
| 194 | exec      | zstupla                                            |
| 205 | exec      | zssResto                                           |
| 310 | getItem   | znodocom,zm4oalias,znodocom,"","SHCO_ACTIVE_DEBUG" |
| 329 | getCount  | znododynfilterlist,zm4oalias,znododynfilterlist    |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función                     | Argumentos                                                                                                   |
| --- | --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 79  | selectScenario              |                                                                                                              |
| 84  | removeFilter                |                                                                                                              |
| 92  | editFilter                  |                                                                                                              |
| 111 | saveFilterNode              |                                                                                                              |
| 124 | applyfilter                 |                                                                                                              |
| 128 | cancelFilter                |                                                                                                              |
| 137 | returnFilter                | sDynFilter,sM4o,sM4oAlias,sReturnPage,sReturnPageWidth,sReturnPageHeight                                     |
| 155 | saveScenario                |                                                                                                              |
| 158 | changeScenario              |                                                                                                              |
| 174 | fillSelectWithScenarios     | zslistinfo                                                                                                   |
| 210 | setNodeInfo                 | sIdNode,sNNode,sIdReadObject,sIdScenario,sFilterLang,sIdSentence,sApiSQL,sListOfScenario,sSubsession         |
| 225 | RefreshSentenceToBeReloaded | sIdSentence,sEditMode                                                                                        |
| 245 | changenodeselection         | nodepos,sIdNode,sNNode,sIdReadObject,sIdScenario,sFilterLang,sIdSentence,sApiSQL,sListOfScenario,sSubsession |
| 263 | setSentenceUseInNodes       | ai_sListOfSentenceInOtherNodes                                                                               |
| 267 | afterPredFilterSelection    |                                                                                                              |
| 270 | listPredFilters             |                                                                                                              |

| L   | Condición / acción / mensaje literal                                                                                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28  | if ((zsubsesion == null)&#124;&#124;(zsubsesion.equals(""))){                                                                                                                      |
| 38  | if (zdf_applymode.equals("")){zdf_applymode=zAPPLY_MODE_DEF;}                                                                                                                      |
| 41  | if (zdf_returnpagewidth.equals("")){zdf_returnpagewidth=zPARAM_RETPAGEWIDTH_DEF;}                                                                                                  |
| 43  | if (zdf_returnpageheight.equals("")){zdf_returnpageheight=zPARAM_RETPAGEHEIGHT_DEF;}                                                                                               |
| 46  | if (zreloadsentence == null) {zreloadsentence = "0";}                                                                                                                              |
| 48  | if (zSentencesTobeReloaded == null){zSentencesTobeReloaded="";}                                                                                                                    |
| 86  | if ( confirm(msg) == true){                                                                                                                                                        |
| 115 | if (verr == 1){                                                                                                                                                                    |
| 129 | &lt;%if (zdf_retmode.equals(zRET_MODE_RETURNVALUES)&#124;&#124; zdf_retmode.equals(zRET_MODE_RETURNVALUES_CALLBACK)){%&gt;                                                         |
| 131 | &lt;%}else if (zdf_retmode.equals(zRET_MODE_SUBMIT_WITHOUT_OPENWINDOW)){%&gt;                                                                                                      |
| 133 | &lt;%}else{%&gt;                                                                                                                                                                   |
| 139 | &lt;%if (zdf_retmode.equals(zRET_MODE_RETURNVALUES)&#124;&#124; zdf_retmode.equals(zRET_MODE_RETURNVALUES_CALLBACK)){%&gt;                                                         |
| 143 | &lt;%}else{%&gt;                                                                                                                                                                   |
| 149 | &lt;%if(!zdf_retmode.equals(zRET_MODE_SUBMIT_WITHOUT_OPENWINDOW)){%&gt;                                                                                                            |
| 160 | if ( m4valor("NombreFormulario","&lt;%=zIdSentenceItem%&gt;","","get")!= ""){                                                                                                      |
| 162 | if (confirm(msg)==true){                                                                                                                                                           |
| 166 | }else{                                                                                                                                                                             |
| 196 | if (zarrtuplainfo != null){                                                                                                                                                        |
| 199 | if (zarrtuplainfo.length &gt; 3){                                                                                                                                                  |
| 202 | else{zsvalue = zsid;}                                                                                                                                                              |
| 227 | if (sIdSentence != "") {                                                                                                                                                           |
| 230 | if (sEditMode=="1"){                                                                                                                                                               |
| 231 | if (iPos == -1) {                                                                                                                                                                  |
| 235 | }else{                                                                                                                                                                             |
| 236 | if (iPos != -1) { //quitarlo                                                                                                                                                       |
| 247 | if (confirm(msg)==true){                                                                                                                                                           |
| 256 | if (sIdSentence != ""){                                                                                                                                                            |
| 257 | if (sSentencesTobeReloaded.indexOf("$$" + sIdSentence + "$$") != -1){sEditMode = "1";}                                                                                             |
| 273 | if (sActualSentence !="") {                                                                                                                                                        |
| 283 | if (sIdScenario != ""){                                                                                                                                                            |
| 285 | }else if (sIdTable != ""){                                                                                                                                                         |
| 323 | if (zerror.equals(compara) != true){                                                                                                                                               |
| 331 | if (zcountdynfilter ==0){                                                                                                                                                          |
| 339 | }else if (zoperation.equals(zAPPLY_DYN_FILTER_OP)){                                                                                                                                |
| 352 | &lt;% if (bContinue == true){%&gt;                                                                                                                                                 |
| 81  | expresión de cálculo/transformación: sURLFilter="shco_g0/shco_gen_list_scenarios.jsp?ztablebase=" + sReadObject;                                                                   |
| 176 | expresión de cálculo/transformación: var sAlfanumRegExpString= "[ " + sAlfanumChar + "]";                                                                                          |
| 177 | expresión de cálculo/transformación: var sAlfNumRegExpPlusBarraSemicolon = "[ " + sAlfanumChar + ",&#124;,;" + "]" ; //Contiene la barra vertical y el punto y com                 |
| 178 | expresión de cálculo/transformación: var sAlfNumRegExpPlusSemicolon = "[ " + sAlfanumChar + ",;" + "]";                                                                            |
| 180 | expresión de cálculo/transformación: var zolistregexp = new RegExp("(" +sAlfNumRegExpPlusSemicolon + "_)[&#124;][&#124;](" +sAlfNumRegExpPlusBarraSemicolon+"_)");                 |
| 182 | expresión de cálculo/transformación: var zotuplaregexp = new RegExp("(" + sAlfanumRegExpString + "_)[;][;](" + sAlfanumRegExpString +"_)");                                        |
| 233 | expresión de cálculo/transformación: sSentencesTobeReloaded = sSentencesTobeReloaded + "$$" + sIdSentence + "$$";                                                                  |
| 238 | expresión de cálculo/transformación: s2 = sSentencesTobeReloaded.substr(iPos+sIdSentence.length + 4);                                                                              |
| 239 | expresión de cálculo/transformación: sSentencesTobeReloaded = s1 + s2;                                                                                                             |
| 274 | expresión de cálculo/transformación: g_sListOfSentenceUseInNodes = g_sListOfSentenceUseInNodes + "$$"+ sActualSentence +  "$$";                                                    |
| 284 | expresión de cálculo/transformación: sFilter = "?GROUP=" + sIdScenario;                                                                                                            |
| 404 | expresión de cálculo/transformación: &lt;select class="selectform50" name="&lt;%=zIdScenarioItem%&gt;" id="&lt;%=zIdScenarioItem%&gt;" tabindex="&lt;%=(zTab + 1)%&gt;"            |
| 413 | expresión de cálculo/transformación: &lt;a tabindex="&lt;%=(zTab + 1)%&gt;" title="&lt;%=zSHCOLBEDIT_val%&gt; &lt;m4:label m4name="&lt;%=zSHCOLBFILTER%&gt;" htmlsafe="true"/&gt;" |

### Includes, navegación y dependencias

| L   | Include                                 |
| --- | --------------------------------------- |
| 9   | ../shco_g0/shco_gen_taglib.jsp          |
| 11  | ../shco_g0/shco_gen_arg.jsp             |
| 12  | ../shco_g0/shco_gen_bag.jsp             |
| 13  | ../shco_g0/shco_gen_css.jsp             |
| 14  | ../shco_g0/shco_gen_js.jsp              |
| 15  | ../shco_g0/shco_gen_tec_include.jspf    |
| 17  | ../shco_g0/shco_gen_m4val_js.jsp        |
| 32  | ../shco_g0/shco_gen_dynfilter_m4def.jsp |
| 72  | ../shco_g0/shco_gen_dynfilter_act.jsp   |
| 313 | ../shco_g0/shco_gen_error.jsp           |
| 333 | /shco_g0/shco_gen_act_body.jsp          |
| 355 | ../shco_g0/shco_gen_title.jsp           |
| 356 | ../shco_g0/shco_gen_cab.jsp             |
| 397 | ../files_gif/ic_bor.jsp                 |
| 414 | ../files_gif/ic_mod.jsp                 |
| 416 | ../files_gif/ic_list.jsp                |
| 425 | ../files_gif/ic_ins_tmp.jsp             |
| 430 | ../files_gif/ic_apply_filter.jsp        |
| 431 | ../files_gif/ic_can.jsp                 |
| 440 | ../shco_g0/shco_gen_dynfilter_list.jsp  |

| L   | Destino / recurso                                                      |
| --- | ---------------------------------------------------------------------- |
| 16  | /library/m4gen_mt.js                                                   |
| 359 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_htmlfilter.jsp             |
| 376 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_dynfilter.jsp              |
| 397 | javascript:removeFilter();                                             |
| 414 | javascript:editFilter();                                               |
| 416 | javascript:listPredFilters(                                            |
| 425 | javascript:saveFilterNode();                                           |
| 430 | javascript:applyfilter();                                              |
| 431 | javascript:cancelFilter();                                             |
| 9   | ../shco_g0/shco_gen_taglib.jsp                                         |
| 11  | ../shco_g0/shco_gen_arg.jsp                                            |
| 12  | ../shco_g0/shco_gen_bag.jsp                                            |
| 13  | ../shco_g0/shco_gen_css.jsp                                            |
| 14  | ../shco_g0/shco_gen_js.jsp                                             |
| 17  | ../shco_g0/shco_gen_m4val_js.jsp                                       |
| 32  | ../shco_g0/shco_gen_dynfilter_m4def.jsp                                |
| 62  | SHCO_GEN_DYNFILTER.htm                                                 |
| 72  | ../shco_g0/shco_gen_dynfilter_act.jsp                                  |
| 81  | shco_g0/shco_gen_list_scenarios.jsp?ztablebase=                        |
| 291 | shco_g0/shco_gen_list_table_filter_pred.jsp                            |
| 299 | shco_g0/shco_gen_list_table_filter_pred.jsp                            |
| 299 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_list_table_filter_pred.jsp |
| 313 | ../shco_g0/shco_gen_error.jsp                                          |
| 333 | /shco_g0/shco_gen_act_body.jsp                                         |
| 355 | ../shco_g0/shco_gen_title.jsp                                          |
| 356 | ../shco_g0/shco_gen_cab.jsp                                            |
| 366 | isa.jsp                                                                |
| 397 | ../files_gif/ic_bor.jsp                                                |
| 414 | ../files_gif/ic_mod.jsp                                                |
| 416 | ../files_gif/ic_list.jsp                                               |
| 425 | ../files_gif/ic_ins_tmp.jsp                                            |
| 430 | ../files_gif/ic_apply_filter.jsp                                       |
| 431 | ../files_gif/ic_can.jsp                                                |
| 440 | ../shco_g0/shco_gen_dynfilter_list.jsp                                 |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                             | Resolución | Ficha / candidato                                                            |
| ------ | --- | ---------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------- |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp                                         | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)                   |
| BASE   | 11  | ../shco_g0/shco_gen_arg.jsp                                            | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)                         |
| BASE   | 12  | ../shco_g0/shco_gen_bag.jsp                                            | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)                         |
| BASE   | 13  | ../shco_g0/shco_gen_css.jsp                                            | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)                         |
| BASE   | 14  | ../shco_g0/shco_gen_js.jsp                                             | física     | [shco_g0/shco_gen_js.jsp](shco_g0--shco_gen_js.md)                           |
| BASE   | 17  | ../shco_g0/shco_gen_m4val_js.jsp                                       | física     | [shco_g0/shco_gen_m4val_js.jsp](shco_g0--shco_gen_m4val_js.md)               |
| BASE   | 32  | ../shco_g0/shco_gen_dynfilter_m4def.jsp                                | física     | [shco_g0/shco_gen_dynfilter_m4def.jsp](shco_g0--shco_gen_dynfilter_m4def.md) |
| BASE   | 72  | ../shco_g0/shco_gen_dynfilter_act.jsp                                  | física     | [shco_g0/shco_gen_dynfilter_act.jsp](shco_g0--shco_gen_dynfilter_act.md)     |
| BASE   | 313 | ../shco_g0/shco_gen_error.jsp                                          | física     | [shco_g0/shco_gen_error.jsp](shco_g0--shco_gen_error.md)                     |
| BASE   | 333 | /shco_g0/shco_gen_act_body.jsp                                         | contextual | [shco_g0/shco_gen_act_body.jsp](shco_g0--shco_gen_act_body.md)               |
| BASE   | 355 | ../shco_g0/shco_gen_title.jsp                                          | física     | [shco_g0/shco_gen_title.jsp](shco_g0--shco_gen_title.md)                     |
| BASE   | 356 | ../shco_g0/shco_gen_cab.jsp                                            | física     | [shco_g0/shco_gen_cab.jsp](shco_g0--shco_gen_cab.md)                         |
| BASE   | 397 | ../files_gif/ic_bor.jsp                                                | física     | [files_gif/ic_bor.jsp](files_gif--ic_bor.md)                                 |
| BASE   | 414 | ../files_gif/ic_mod.jsp                                                | física     | [files_gif/ic_mod.jsp](files_gif--ic_mod.md)                                 |
| BASE   | 416 | ../files_gif/ic_list.jsp                                               | física     | [files_gif/ic_list.jsp](files_gif--ic_list.md)                               |
| BASE   | 425 | ../files_gif/ic_ins_tmp.jsp                                            | física     | [files_gif/ic_ins_tmp.jsp](files_gif--ic_ins_tmp.md)                         |
| BASE   | 430 | ../files_gif/ic_apply_filter.jsp                                       | física     | [files_gif/ic_apply_filter.jsp](files_gif--ic_apply_filter.md)               |
| BASE   | 431 | ../files_gif/ic_can.jsp                                                | física     | [files_gif/ic_can.jsp](files_gif--ic_can.md)                                 |
| BASE   | 440 | ../shco_g0/shco_gen_dynfilter_list.jsp                                 | física     | [shco_g0/shco_gen_dynfilter_list.jsp](shco_g0--shco_gen_dynfilter_list.md)   |
| BASE   | 16  | /library/m4gen_mt.js                                                   | contextual | [library/m4gen_mt.js](library--m4gen_mt.md)                                  |
| BASE   | 359 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_htmlfilter.jsp             | contextual | [shco_g0/shco_gen_htmlfilter.jsp](shco_g0--shco_gen_htmlfilter.md)           |
| BASE   | 376 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_dynfilter.jsp              | contextual | [shco_g0/shco_gen_dynfilter.jsp](shco_g0--shco_gen_dynfilter.md)             |
| BASE   | 397 | javascript:removeFilter();                                             | dinámica   | P06                                                                          |
| BASE   | 414 | javascript:editFilter();                                               | dinámica   | P06                                                                          |
| BASE   | 416 | javascript:listPredFilters(                                            | dinámica   | P06                                                                          |
| BASE   | 425 | javascript:saveFilterNode();                                           | dinámica   | P06                                                                          |
| BASE   | 430 | javascript:applyfilter();                                              | dinámica   | P06                                                                          |
| BASE   | 431 | javascript:cancelFilter();                                             | dinámica   | P06                                                                          |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp                                         | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)                   |
| BASE   | 11  | ../shco_g0/shco_gen_arg.jsp                                            | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)                         |
| BASE   | 12  | ../shco_g0/shco_gen_bag.jsp                                            | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)                         |
| BASE   | 13  | ../shco_g0/shco_gen_css.jsp                                            | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)                         |
| BASE   | 14  | ../shco_g0/shco_gen_js.jsp                                             | física     | [shco_g0/shco_gen_js.jsp](shco_g0--shco_gen_js.md)                           |
| BASE   | 17  | ../shco_g0/shco_gen_m4val_js.jsp                                       | física     | [shco_g0/shco_gen_m4val_js.jsp](shco_g0--shco_gen_m4val_js.md)               |
| BASE   | 32  | ../shco_g0/shco_gen_dynfilter_m4def.jsp                                | física     | [shco_g0/shco_gen_dynfilter_m4def.jsp](shco_g0--shco_gen_dynfilter_m4def.md) |
| BASE   | 62  | SHCO_GEN_DYNFILTER.htm                                                 | ausente    | P06                                                                          |
| BASE   | 72  | ../shco_g0/shco_gen_dynfilter_act.jsp                                  | física     | [shco_g0/shco_gen_dynfilter_act.jsp](shco_g0--shco_gen_dynfilter_act.md)     |
| BASE   | 81  | shco_g0/shco_gen_list_scenarios.jsp?ztablebase=                        | ausente    | P06                                                                          |
| BASE   | 291 | shco_g0/shco_gen_list_table_filter_pred.jsp                            | ausente    | P06                                                                          |
| BASE   | 299 | shco_g0/shco_gen_list_table_filter_pred.jsp                            | ausente    | P06                                                                          |
| BASE   | 299 | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_list_table_filter_pred.jsp | ausente    | P06                                                                          |
| BASE   | 313 | ../shco_g0/shco_gen_error.jsp                                          | física     | [shco_g0/shco_gen_error.jsp](shco_g0--shco_gen_error.md)                     |
| BASE   | 333 | /shco_g0/shco_gen_act_body.jsp                                         | contextual | [shco_g0/shco_gen_act_body.jsp](shco_g0--shco_gen_act_body.md)               |
| BASE   | 355 | ../shco_g0/shco_gen_title.jsp                                          | física     | [shco_g0/shco_gen_title.jsp](shco_g0--shco_gen_title.md)                     |
| BASE   | 356 | ../shco_g0/shco_gen_cab.jsp                                            | física     | [shco_g0/shco_gen_cab.jsp](shco_g0--shco_gen_cab.md)                         |
| BASE   | 366 | isa.jsp                                                                | ausente    | P06                                                                          |
| BASE   | 397 | ../files_gif/ic_bor.jsp                                                | física     | [files_gif/ic_bor.jsp](files_gif--ic_bor.md)                                 |
| BASE   | 414 | ../files_gif/ic_mod.jsp                                                | física     | [files_gif/ic_mod.jsp](files_gif--ic_mod.md)                                 |
| BASE   | 416 | ../files_gif/ic_list.jsp                                               | física     | [files_gif/ic_list.jsp](files_gif--ic_list.md)                               |
| BASE   | 425 | ../files_gif/ic_ins_tmp.jsp                                            | física     | [files_gif/ic_ins_tmp.jsp](files_gif--ic_ins_tmp.md)                         |
| BASE   | 430 | ../files_gif/ic_apply_filter.jsp                                       | física     | [files_gif/ic_apply_filter.jsp](files_gif--ic_apply_filter.md)               |
| BASE   | 431 | ../files_gif/ic_can.jsp                                                | física     | [files_gif/ic_can.jsp](files_gif--ic_can.md)                                 |
| BASE   | 440 | ../shco_g0/shco_gen_dynfilter_list.jsp                                 | física     | [shco_g0/shco_gen_dynfilter_list.jsp](shco_g0--shco_gen_dynfilter_list.md)   |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_dynfilter.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
