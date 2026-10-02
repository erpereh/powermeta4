# shco_gen_param_page_maker

Identificador: `shco_g0/shco_gen_param_page_maker.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                       | SHA-256                                                            | Líneas |
| ----------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_param_page_maker.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_param_page_maker.jsp) | `738c9cda98724f1c61fa16b32cc917e7a32310236895dfe4c8c6405f9d72e65a` |    205 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_param_page_maker.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_param_page_maker.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                   |
| --- | ------------------------------------------------------------------------------------------ |
| 73  | " /&gt;                                                                                    |
| 171 | [valor dinámico] [valor dinámico] [valor dinámico] [valor dinámico]                        |
| 193 | " href="javascript:comprobar();"&gt; " &gt; " href="javascript:window.close();"&gt; " &gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                 |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| 73  | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                   |
| 96  | form    | id=FrmExecute; name=FrmExecute; method=post; action=/servlet/CheckSecurity/JSP/shco_g0/shco_gen_param_process_execute.jsp |
| 97  | input   | type=hidden; id=&lt;%=zInputExecuteParamsVar%&gt;; name=&lt;%=zInputExecuteParamsVar%&gt;; value=                         |
| 98  | input   | type=hidden; id=&lt;%=zInputItemParamsVar%&gt;; name=&lt;%=zInputItemParamsVar%&gt;; value=                               |
| 99  | input   | type=hidden; id=zsubsesion; name=zsubsesion; value=&lt;%=zsubsesion%&gt;                                                  |
| 100 | input   | type=hidden; id=zprocesspage; name=zprocesspage; value=&lt;%=zProcessPageVar%&gt;                                         |
| 108 | form    | id=&lt;%=zFormDatosVar%&gt;; name=&lt;%=zFormDatosVar%&gt;; method=post; action=                                          |
| 194 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                 |
| 194 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                   |
| 195 | a       | title=&lt;m4:label m4name=; htmlsafe=true                                                                                 |
| 195 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                   |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal             |
| --- | --------------- | -------------------------- |
| 28  | zIdPageXML      | getParameter("zIdPageXML") |

| L   | Variable        | Expresión fuente                                      | Resolución estática parcial                                                       |
| --- | --------------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- |
| 15  | zm4object       | "TC_RP_PARAM_PAGE_MAKER"                              | TC_RP_PARAM_PAGE_MAKER                                                            |
| 16  | zsubsesion      | zm4object + "_SUB"                                    | TC_RP_PARAM_PAGE_MAKER{"_SUB"}                                                    |
| 17  | znodolabel      | "SHCO_GN_LABEL"                                       | SHCO_GN_LABEL                                                                     |
| 18  | znodocom        | "SHCO_GN_COMUNICATION"                                | SHCO_GN_COMUNICATION                                                              |
| 19  | znodoPageData   | "TC_RP_PARAM_PAGE_MAKER"                              | TC_RP_PARAM_PAGE_MAKER                                                            |
| 20  | zraizlabel      | znodolabel + ":" + zm4object + "!" + znodolabel + "." | SHCO_GN_LABEL{":"}TC_RP_PARAM_PAGE_MAKER{"!"}SHCO_GN_LABEL{"."}                   |
| 22  | zSHCO_LB_ACCEPT | zraizlabel + "SHCO_LB_ACCEPT"                         | SHCO_GN_LABEL{":"}TC_RP_PARAM_PAGE_MAKER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_ACCEPT"} |
| 23  | zSHCO_LB_CLOSE  | zraizlabel + "SHCO_LB_CLOSE"                          | SHCO_GN_LABEL{":"}TC_RP_PARAM_PAGE_MAKER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_CLOSE"}  |
| 24  | zSHCO_LB_PARAMS | zraizlabel + "SHCO_LB_PARAMS"                         | SHCO_GN_LABEL{":"}TC_RP_PARAM_PAGE_MAKER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_PARAMS"} |
| 28  | zIdPageXML      | request.getParameter("zIdPageXML")                    | request.getParameter("zIdPageXML")                                                |
| 67  | zvalue          | ""                                                    |                                                                                   |
| 68  | zhelp           | zHelpFile                                             | zHelpFile                                                                         |
| 112 | zLastRow        | ""                                                    |                                                                                   |
| 113 | zLastCol        | ""                                                    |                                                                                   |
| 114 | ztdClass        | ""                                                    |                                                                                   |
| 115 | ztdColspan      | ""                                                    |                                                                                   |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag         | Contrato declarado                                                                                      |
| --- | ----------- | ------------------------------------------------------------------------------------------------------- |
| 41  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=JSP_VAL_FUNCTION                                                 |
| 44  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=JSP_ALLPARAMETERS_FUNCTION                                       |
| 48  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=_ONLOAD_JS_GET_TRANSLATED_VAL                                    |
| 52  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=JSP_HEADER; m4varname=zLbCabec; htmlsafe=true                    |
| 53  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=JSP_TITLE; m4varname=zLbTitle; jsafe=true                        |
| 54  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=JSP_DESCRIPTION; m4varname=zLbDescription; htmlsafe=true         |
| 55  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=JSP_HELP_FILE; m4varname=zHelpFile                               |
| 92  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=JSP_ID_JSP_RETURN; m4varname=zProcessPageVar                     |
| 93  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_FORM_INPUT_ITEM_PARAMS; m4varname=zInputItemParamsVar          |
| 94  | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_FORM_INPUT_EXECUTE_PARAMS; m4varname=zInputExecuteParamsVar    |
| 106 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_FORM_DATOS; m4varname=zFormDatosVar                            |
| 110 | m4:label    | m4name=SHCO_GN_LABEL{":"}TC_RP_PARAM_PAGE_MAKER{"!"}SHCO_GN_LABEL{"."}{"SHCO_LB_PARAMS"}; htmlsafe=true |
| 118 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_TYPE_LABEL; m4varname=zCTypeLabel                              |
| 119 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_TYPE_TRANSLABEL; m4varname=zCTypeTransLabel                    |
| 120 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_TYPE_CURRENCY; m4varname=zCTypeCurrency                        |
| 121 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_TYPE_LIST; m4varname=zCTypeList                                |
| 122 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=C_TYPE_CALENDAR; m4varname=zCTypeCalendar                        |
| 125 | m4:dataloop | outputdef=TC_RP_PARAM_PAGE_MAKER                                                                        |
| 126 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=_COL; m4varname=zColVar; m4format=0                              |
| 127 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=_ROW; m4varname=zRowVar; m4format=0                              |
| 128 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=_HTML_CODE_BEGIN; m4varname=zHtmlCodeBeginVar; htmlsafe=false    |
| 129 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=_HTML_CODE_END; m4varname=zHtmlCodeEndVar; htmlsafe=false        |
| 130 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=_COLSPAN; m4varname=zColSpanVar; m4format=0                      |
| 131 | m4:item     | outputdef=TC_RP_PARAM_PAGE_MAKER; item=_TYPE; m4varname=zControlTypeVar                                 |
| 204 | m4:endpage  |                                                                                                         |

Sin accesos directos identificados; consultar el cuerpo incluido o el script enlazado.

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función              | Argumentos |
| --- | -------------------- | ---------- |
| 47  | loadTranslatedValues |            |

| L   | Condición / acción / mensaje literal                                                                            |
| --- | --------------------------------------------------------------------------------------------------------------- |
| 29  | if (zIdPageXML ==null) { zIdPageXML="";}                                                                        |
| 78  | &lt;%if (zLbDescription != null &amp;&amp; !zLbDescription.equals("")){%&gt;                                    |
| 136 | &lt;%if (!zRowVar.equals(zLastRow)){                                                                            |
| 139 | if (!zRowVar.equals("1")){%&gt;                                                                                 |
| 140 | &lt;%if (!zColVar.equals("-1")){%&gt;                                                                           |
| 156 | &lt;%if (!zColVar.equals(zLastCol)){                                                                            |
| 158 | if (!zColVar.equals("1")){%&gt;                                                                                 |
| 162 | &lt;% if (zControlTypeVar.equals(zCTypeLabel) &#124;&#124; zControlTypeVar.equals(zCTypeTransLabel)){           |
| 164 | }else{ztdClass ="";}%&gt;                                                                                       |
| 167 | &lt;%if (!zColSpanVar.equals("1")){                                                                             |
| 169 | }else{ ztdColspan="";} %&gt;                                                                                    |
| 176 | &lt;%if (zControlTypeVar.equals(zCTypeCurrency)){%&gt;                                                          |
| 179 | &lt;%}else if (zControlTypeVar.equals(zCTypeList)){%&gt;                                                        |
| 182 | &lt;%}else if (zControlTypeVar.equals(zCTypeCalendar)){%&gt;                                                    |
| 16  | expresión de cálculo/transformación: String zsubsesion = zm4object + "_SUB";                                    |
| 20  | expresión de cálculo/transformación: String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + "."; |
| 22  | expresión de cálculo/transformación: String zSHCO_LB_ACCEPT = zraizlabel + "SHCO_LB_ACCEPT";                    |
| 23  | expresión de cálculo/transformación: String zSHCO_LB_CLOSE = zraizlabel + "SHCO_LB_CLOSE";                      |
| 24  | expresión de cálculo/transformación: String zSHCO_LB_PARAMS = zraizlabel + "SHCO_LB_PARAMS";                    |
| 168 | expresión de cálculo/transformación: ztdColspan = "colspan=\"" + zColSpanVar + "\"";                            |

### Includes, navegación y dependencias

| L   | Include                                      |
| --- | -------------------------------------------- |
| 10  | ../shco_g0/shco_gen_taglib.jsp               |
| 32  | ../shco_g0/shco_gen_arg.jsp                  |
| 32  | ../shco_g0/shco_gen_bag.jsp                  |
| 33  | ../shco_g0/shco_gen_css.jsp                  |
| 33  | ../shco_g0/shco_gen_label.jsp                |
| 35  | ../shco_g0/shco_gen_datadef.jsp              |
| 36  | ../shco_g0/shco_gen_param_page_maker_act.jsp |
| 37  | ../shco_g0/shco_gen_mt_js.jsp                |
| 73  | ../files_gif/ic_cabec.jsp                    |
| 75  | shco_gen_help.jsp                            |
| 177 | ../files_gif/ic_pay.jsp                      |
| 180 | ../files_gif/ic_list.jsp                     |
| 183 | ../files_gif/ic_cal.jsp                      |
| 194 | ../files_gif/ic_ace.jsp                      |
| 195 | ../files_gif/ic_cer.jsp                      |

| L   | Destino / recurso                                                     |
| --- | --------------------------------------------------------------------- |
| 38  | /library/m4valdata.js                                                 |
| 96  | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_param_process_execute.jsp |
| 194 | javascript:comprobar();                                               |
| 195 | javascript:window.close();                                            |
| 10  | ../shco_g0/shco_gen_taglib.jsp                                        |
| 32  | ../shco_g0/shco_gen_arg.jsp                                           |
| 32  | ../shco_g0/shco_gen_bag.jsp                                           |
| 33  | ../shco_g0/shco_gen_css.jsp                                           |
| 33  | ../shco_g0/shco_gen_label.jsp                                         |
| 35  | ../shco_g0/shco_gen_datadef.jsp                                       |
| 36  | ../shco_g0/shco_gen_param_page_maker_act.jsp                          |
| 37  | ../shco_g0/shco_gen_mt_js.jsp                                         |
| 73  | ../files_gif/ic_cabec.jsp                                             |
| 75  | shco_gen_help.jsp                                                     |
| 177 | ../files_gif/ic_pay.jsp                                               |
| 180 | ../files_gif/ic_list.jsp                                              |
| 183 | ../files_gif/ic_cal.jsp                                               |
| 194 | ../files_gif/ic_ace.jsp                                               |
| 195 | ../files_gif/ic_cer.jsp                                               |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                            | Resolución | Ficha / candidato                                                                        |
| ------ | --- | --------------------------------------------------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| BASE   | 10  | ../shco_g0/shco_gen_taglib.jsp                                        | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)                               |
| BASE   | 32  | ../shco_g0/shco_gen_arg.jsp                                           | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)                                     |
| BASE   | 32  | ../shco_g0/shco_gen_bag.jsp                                           | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)                                     |
| BASE   | 33  | ../shco_g0/shco_gen_css.jsp                                           | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)                                     |
| BASE   | 33  | ../shco_g0/shco_gen_label.jsp                                         | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md)                                 |
| BASE   | 35  | ../shco_g0/shco_gen_datadef.jsp                                       | física     | [shco_g0/shco_gen_datadef.jsp](shco_g0--shco_gen_datadef.md)                             |
| BASE   | 36  | ../shco_g0/shco_gen_param_page_maker_act.jsp                          | física     | [shco_g0/shco_gen_param_page_maker_act.jsp](shco_g0--shco_gen_param_page_maker_act.md)   |
| BASE   | 37  | ../shco_g0/shco_gen_mt_js.jsp                                         | física     | [shco_g0/shco_gen_mt_js.jsp](shco_g0--shco_gen_mt_js.md)                                 |
| BASE   | 73  | ../files_gif/ic_cabec.jsp                                             | física     | [files_gif/ic_cabec.jsp](files_gif--ic_cabec.md)                                         |
| BASE   | 75  | shco_gen_help.jsp                                                     | física     | [shco_g0/shco_gen_help.jsp](shco_g0--shco_gen_help.md)                                   |
| BASE   | 177 | ../files_gif/ic_pay.jsp                                               | física     | [files_gif/ic_pay.jsp](files_gif--ic_pay.md)                                             |
| BASE   | 180 | ../files_gif/ic_list.jsp                                              | física     | [files_gif/ic_list.jsp](files_gif--ic_list.md)                                           |
| BASE   | 183 | ../files_gif/ic_cal.jsp                                               | física     | [files_gif/ic_cal.jsp](files_gif--ic_cal.md)                                             |
| BASE   | 194 | ../files_gif/ic_ace.jsp                                               | física     | [files_gif/ic_ace.jsp](files_gif--ic_ace.md)                                             |
| BASE   | 195 | ../files_gif/ic_cer.jsp                                               | física     | [files_gif/ic_cer.jsp](files_gif--ic_cer.md)                                             |
| BASE   | 38  | /library/m4valdata.js                                                 | contextual | [library/m4valdata.js](library--m4valdata.md)                                            |
| BASE   | 96  | /servlet/CheckSecurity/JSP/shco_g0/shco_gen_param_process_execute.jsp | contextual | [shco_g0/shco_gen_param_process_execute.jsp](shco_g0--shco_gen_param_process_execute.md) |
| BASE   | 194 | javascript:comprobar();                                               | dinámica   | P06                                                                                      |
| BASE   | 195 | javascript:window.close();                                            | dinámica   | P06                                                                                      |
| BASE   | 10  | ../shco_g0/shco_gen_taglib.jsp                                        | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)                               |
| BASE   | 32  | ../shco_g0/shco_gen_arg.jsp                                           | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)                                     |
| BASE   | 32  | ../shco_g0/shco_gen_bag.jsp                                           | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)                                     |
| BASE   | 33  | ../shco_g0/shco_gen_css.jsp                                           | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)                                     |
| BASE   | 33  | ../shco_g0/shco_gen_label.jsp                                         | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md)                                 |
| BASE   | 35  | ../shco_g0/shco_gen_datadef.jsp                                       | física     | [shco_g0/shco_gen_datadef.jsp](shco_g0--shco_gen_datadef.md)                             |
| BASE   | 36  | ../shco_g0/shco_gen_param_page_maker_act.jsp                          | física     | [shco_g0/shco_gen_param_page_maker_act.jsp](shco_g0--shco_gen_param_page_maker_act.md)   |
| BASE   | 37  | ../shco_g0/shco_gen_mt_js.jsp                                         | física     | [shco_g0/shco_gen_mt_js.jsp](shco_g0--shco_gen_mt_js.md)                                 |
| BASE   | 73  | ../files_gif/ic_cabec.jsp                                             | física     | [files_gif/ic_cabec.jsp](files_gif--ic_cabec.md)                                         |
| BASE   | 75  | shco_gen_help.jsp                                                     | física     | [shco_g0/shco_gen_help.jsp](shco_g0--shco_gen_help.md)                                   |
| BASE   | 177 | ../files_gif/ic_pay.jsp                                               | física     | [files_gif/ic_pay.jsp](files_gif--ic_pay.md)                                             |
| BASE   | 180 | ../files_gif/ic_list.jsp                                              | física     | [files_gif/ic_list.jsp](files_gif--ic_list.md)                                           |
| BASE   | 183 | ../files_gif/ic_cal.jsp                                               | física     | [files_gif/ic_cal.jsp](files_gif--ic_cal.md)                                             |
| BASE   | 194 | ../files_gif/ic_ace.jsp                                               | física     | [files_gif/ic_ace.jsp](files_gif--ic_ace.md)                                             |
| BASE   | 195 | ../files_gif/ic_cer.jsp                                               | física     | [files_gif/ic_cer.jsp](files_gif--ic_cer.md)                                             |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_param_page_maker.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
