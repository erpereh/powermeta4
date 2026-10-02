# shco_gen_p_wz_exec.jsp

Identificador: `shco_g0/shco_gen_p_wz_exec.jsp`. Perfil: **transversal**. Dominio: **dependencias**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                 | Texto                                | Ámbito | Diccionario                                                                              |
| --------------------- | ------------------------------------ | ------ | ---------------------------------------------------------------------------------------- |
| Msg.FilterWithoutData | No hay ningún dato para este filtro. | BASE   | [translations/mss_filter_es.properties:L8](../../referencias/literales/mss_filter_es.md) |
| Msg.FilterWithoutData | No hay ningún dato para este filtro. | BASE   | [translations/shco_g0_es.properties:L109](../../referencias/literales/shco_g0_es.md)     |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                         | SHA-256                                                            | Líneas |
| ----------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / compartido | [shco_g0/shco_gen_p_wz_exec.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_p_wz_exec.jsp) | `1a242dc8ea13b7aa653fc070fc597b37557e7a1de9edda9f6c4527dc613b2caa` |    324 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE compartida

Fuente de los localizadores `L`: [shco_g0/shco_gen_p_wz_exec.jsp](../../../../clon_portal/portal/shco_g0/shco_gen_p_wz_exec.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                 |
| --- | ---------------------------------------- |
| 20  | shco_gen_p_wz_exec.jsp                   |
| 230 | " /&gt; " /&gt; " /&gt; [valor dinámico] |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                                                                                                                                                                                                                                      |
| --- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 217 | form    | action= ; method=post; name=NombreFormulario2; id=NombreFormulario2                                                                                                                                                                                                                                                            |
| 231 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                        |
| 234 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                        |
| 237 | img     | alt=&lt;m4:label m4name=; htmlsafe=true                                                                                                                                                                                                                                                                                        |
| 244 | input   | id=Back; name=back; tabindex=1; type=button; class=boton; onclick=history.back();; value=&lt;%=sLabelBack%&gt;                                                                                                                                                                                                                 |
| 305 | form    | action= ; method=post; name=NombreFormulario2; id=NombreFormulario2                                                                                                                                                                                                                                                            |
| 312 | input   | id=Back; name=back; tabindex=1; type=button; class=boton; onclick=var parametros=['LOADTYPE','WZINDEX','CLEAN_PARAM'];var valores=['&lt;%=zLoadType%&gt;','&lt;%=zWzIndex%&gt;','&lt;%=zCLEAN_PARAM%&gt;'];m4navegar('/servlet/CheckSecurity/JSP/&lt;%=zRedireccionAct%&gt;',parametros,valores);; value=&lt;%=sLabelBack%&gt; |

### Contexto, entradas y valores construidos

| L   | Entrada / clave       | Acceso literal                     |
| --- | --------------------- | ---------------------------------- |
| 109 | TAG                   | zhash.get("TAG")                   |
| 112 | zredireccion          | zhash.get("zredireccion")          |
| 114 | WZINDEX               | zhash.get("WZINDEX")               |
| 116 | LOADTYPE              | zhash.get("LOADTYPE")              |
| 118 | znivelmenu            | zhash.get("znivelmenu")            |
| 120 | retpage_mode          | zhash.get("retpage_mode")          |
| 122 | retpage               | zhash.get("retpage")               |
| 124 | zdynfiltersinforeport | zhash.get("zdynfiltersinforeport") |
| 126 | CLEAN_PARAM           | zhash.get("CLEAN_PARAM")           |
| 135 | NOD                   | zhash.get("NOD")                   |
| 136 | NOD                   | zhash.get("NOD")                   |

| L   | Variable               | Expresión fuente                                                                        | Resolución estática parcial                                                             |
| --- | ---------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 27  | nombre                 | ""                                                                                      |                                                                                         |
| 28  | valor                  | ""                                                                                      |                                                                                         |
| 29  | ristraErr              | ""                                                                                      |                                                                                         |
| 30  | zParametroAct          | ""                                                                                      |                                                                                         |
| 38  | bRequiredConstantMode  | true                                                                                    | true                                                                                    |
| 39  | bContinueWithOperation | true                                                                                    | true                                                                                    |
| 53  | SHCO_P_EXEC_PROCESS    | "SHCO_P_EXEC_PROCESS"                                                                   | SHCO_P_EXEC_PROCESS                                                                     |
| 54  | SHCO_RP_CONST_CRYPT    | "shco_rp"                                                                               | shco_rp                                                                                 |
| 58  | sRequiredConstant      | request.getParameter(SHCO_P_EXEC_PROCESS)                                               | request.getParameter(SHCO_P_EXEC_PROCESS)                                               |
| 69  | vars                   | M4PresentationUtilTaglib.secureDecrypt(request, SHCO_RP_CONST_CRYPT, sRequiredConstant) | M4PresentationUtilTaglib.secureDecrypt(request, SHCO_RP_CONST_CRYPT, sRequiredConstant) |
| 77  | j                      | 0                                                                                       | 0                                                                                       |
| 109 | zm4object              | (String)zhash.get("TAG")                                                                | (String)zhash.get("TAG")                                                                |
| 111 | zsubsesion             | zm4object+"_SUB"                                                                        | (String)zhash.get("TAG")_SUB                                                            |
| 112 | zRedireccionAct        | (String)zhash.get("zredireccion")                                                       | (String)zhash.get("zredireccion")                                                       |
| 114 | zWzIndex               | (String)zhash.get("WZINDEX")                                                            | (String)zhash.get("WZINDEX")                                                            |
| 116 | zLoadType              | (String)zhash.get("LOADTYPE")                                                           | (String)zhash.get("LOADTYPE")                                                           |
| 120 | retpage_mode           | (String)zhash.get("retpage_mode")                                                       | (String)zhash.get("retpage_mode")                                                       |
| 122 | retpage                | (String)zhash.get("retpage")                                                            | (String)zhash.get("retpage")                                                            |
| 124 | zdynfiltersinforeport  | (String)zhash.get("zdynfiltersinforeport")                                              | (String)zhash.get("zdynfiltersinforeport")                                              |
| 126 | zCLEAN_PARAM           | (String)zhash.get("CLEAN_PARAM")                                                        | (String)zhash.get("CLEAN_PARAM")                                                        |
| 146 | znodoraiz              | "SHCO_GN_ROOT"                                                                          | SHCO_GN_ROOT                                                                            |
| 147 | znodolabel             | "SHCO_GN_LABEL"                                                                         | SHCO_GN_LABEL                                                                           |
| 148 | znodocom               | "SHCO_GN_COMUNICATION"                                                                  | SHCO_GN_COMUNICATION                                                                    |
| 149 | zoutputdefcom          | zm4object + "!" + znodocom + "[*]"                                                      | (String)zhash.get("TAG"){"!"}SHCO_GN_COMUNICATION{"[*]"}                                |
| 150 | zoutputdeflab          | zm4object + "!" + znodolabel + "[0]"                                                    | (String)zhash.get("TAG"){"!"}SHCO_GN_LABEL{"[0]"}                                       |
| 151 | zraizlabel             | znodolabel + ":" + zm4object + "!" + znodolabel + "."                                   | SHCO_GN_LABEL{":"}(String)zhash.get("TAG"){"!"}SHCO_GN_LABEL{"."}                       |
| 152 | zMetodoAct             | zm4object + "!" + znodoraiz + ".SHCO_P_EXEC_PROCESS"                                    | (String)zhash.get("TAG"){"!"}SHCO_GN_ROOT{".SHCO_P_EXEC_PROCESS"}                       |
| 153 | zMetodoFiltro          | zm4object + "!" + znodoraiz + ".SHCO_P_EXEC_FILTRO"                                     | (String)zhash.get("TAG"){"!"}SHCO_GN_ROOT{".SHCO_P_EXEC_FILTRO"}                        |
| 160 | zusertempurit1         | (String) zsessionmanager2.getPathTempMapping()                                          | (String) zsessionmanager2.getPathTempMapping()                                          |
| 161 | zusertempurit2         | zsessionmanager2.getUserTempURI()                                                       | zsessionmanager2.getUserTempURI()                                                       |
| 162 | separator              | "/"                                                                                     | /                                                                                       |
| 184 | zerror                 | ""                                                                                      |                                                                                         |
| 185 | zLog2                  | ""                                                                                      |                                                                                         |
| 193 | zerror2                | ""                                                                                      |                                                                                         |
| 194 | zshco_TEXT             | ""                                                                                      |                                                                                         |
| 195 | sLabelBack             | ""                                                                                      |                                                                                         |
| 221 | zLitErr                | ""                                                                                      |                                                                                         |
| 222 | zTipErr                | ""                                                                                      |                                                                                         |
| 273 | zControlErr            | 0                                                                                       | 0                                                                                       |
| 275 | zData                  | ""                                                                                      |                                                                                         |
| 276 | zTemplate              | ""                                                                                      |                                                                                         |
| 283 | sWebServerName         | ""                                                                                      |                                                                                         |
| 284 | sWebServerPort         | ""                                                                                      |                                                                                         |
| 285 | sProtocol              | "http"                                                                                  | http                                                                                    |
| 286 | sURLxlsTplt            | ""                                                                                      |                                                                                         |
| 287 | sURLxlsTpltData        | ""                                                                                      |                                                                                         |
| 288 | sURLxlsTpltTemplate    | ""                                                                                      |                                                                                         |
| 289 | zusertempurit3         | ""                                                                                      |                                                                                         |
| 297 | zLangFolder2           | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL)           | CheckConfig.checkFolderLanguage(new Long(iLang).intValue(), CheckConfig.THCL)           |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag             | Contrato declarado                                                                                    |
| --- | --------------- | ----------------------------------------------------------------------------------------------------- |
| 157 | m4:startpage    | m4task=(String)zhash.get("TAG")_SUB                                                                   |
| 157 | m4:beginjob     |                                                                                                       |
| 171 | m4:exec         | m4method=(String)zhash.get("TAG"){"!"}SHCO_GN_ROOT{".SHCO_P_EXEC_FILTRO"}                             |
| 171 | m4:param        | name=ARG_FILTRO; value=(String)zhash.get("zdynfiltersinforeport")                                     |
| 172 | m4:exec         | m4method=(String)zhash.get("TAG"){"!"}SHCO_GN_ROOT{".SHCO_P_EXEC_PROCESS"}                            |
| 172 | m4:param        | name=PARAM_STRING; value=                                                                             |
| 173 | m4:outputdef    | m4alias=SHCO_GN_COMUNICATION; m4object=(String)zhash.get("TAG"); node=SHCO_GN_COMUNICATION; records=* |
| 174 | m4:outputdef    | m4alias=SHCO_GN_LABEL; m4object=(String)zhash.get("TAG"); node=SHCO_GN_LABEL; records=*               |
| 176 | m4:endjob       |                                                                                                       |
| 181 | m4:label        | m4name=zSHCOLBTITERROR; jsafe=true                                                                    |
| 300 | m4:getapplparam | section=PORTAL_PARAM; key=TEMPLATES_DIR; output=jsp                                                   |
| 317 | m4:endpage      |                                                                                                       |

| L   | Operación | Argumentos literales                                |
| --- | --------- | --------------------------------------------------- |
| 168 | setItem   | zm4object,znodocom,"","SHCO_LONG3",zusertempurit1   |
| 188 | getItem   | znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG"  |
| 189 | getItem   | znodocom,zm4object,znodocom,"","SHCO_LONG2"         |
| 198 | getItem   | znodocom,zm4object,znodocom,"","SHCO_ACTIVE_DEBUG2" |
| 199 | getItem   | znodocom,zm4object,znodocom,"","SHCO_TEXT"          |
| 209 | setItem   | zm4object, znodocom, "0", "SHCO_ACTIVE_DEBUG", "0"  |
| 210 | setItem   | zm4object, znodocom, "0", "SHCO_ACTIVE_DEBUG2", "0" |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

No declara funciones JavaScript con nombre en este archivo.

| L   | Condición / acción / mensaje literal                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 41  | if (bRequiredConstantMode == false)                                                                                                                           |
| 50  | else                                                                                                                                                          |
| 59  | if (sRequiredConstant == null &#124;&#124; sRequiredConstant.equalsIgnoreCase(""))                                                                            |
| 65  | else                                                                                                                                                          |
| 80  | if (nombre.equalsIgnoreCase(aovars[j].trim())) // watch out for spaces.                                                                                       |
| 88  | if (!nombre.equals(SHCO_P_EXEC_PROCESS))                                                                                                                      |
| 103 | if (bContinueWithOperation == true)                                                                                                                           |
| 129 | if (zRedireccionAct == null &#124;&#124; zRedireccionAct.equals("")){zRedireccionAct="";}                                                                     |
| 130 | if (zLoadType == null &#124;&#124; zLoadType.equals("")){zLoadType="";}                                                                                       |
| 131 | if (zWzIndex == null &#124;&#124; zWzIndex.equals("")){zWzIndex="";}                                                                                          |
| 132 | if (zdynfiltersinforeport == null &#124;&#124; zdynfiltersinforeport.equals("")){zdynfiltersinforeport="";}                                                   |
| 154 | if (ristraErr==null &#124;&#124; ristraErr.equals("00") &#124;&#124; ristraErr=="") {zParametroAct="";}                                                       |
| 202 | if (zerror2.equals("1")&#124;&#124;zerror.equals("1")) {                                                                                                      |
| 225 | if (stE.hasMoreTokens()==true){zTipErr=stE.nextToken();}                                                                                                      |
| 226 | if (stE.hasMoreTokens()==true){zLitErr=stE.nextToken();}                                                                                                      |
| 229 | &lt;%if (zTipErr.equals("-1")){%&gt;                                                                                                                          |
| 232 | &lt;%}else if (zTipErr.equals("1")){%&gt;                                                                                                                     |
| 235 | &lt;%}else{%&gt;                                                                                                                                              |
| 246 | &lt;%}else{%&gt;                                                                                                                                              |
| 247 | &lt;%if (retpage_mode.equals("0")){%&gt;                                                                                                                      |
| 254 | if (sRetPage.indexOf("?")==-1){                                                                                                                               |
| 256 | }else{                                                                                                                                                        |
| 260 | if (window.focus){msgWindow.focus();}                                                                                                                         |
| 267 | &lt;%}else if (retpage_mode.equals("1")){%&gt;                                                                                                                |
| 271 | &lt;%}else if (retpage_mode.equals("2")){%&gt;                                                                                                                |
| 274 | if (zLog2 == null &#124;&#124; zLog2.equals("")){zControlErr=1;}                                                                                              |
| 277 | if (zControlErr==0){                                                                                                                                          |
| 293 | if ( request.isSecure() )                                                                                                                                     |
| 318 | &lt;% } else { %&gt;                                                                                                                                          |
| 136 | expresión de cálculo/transformación: zParametroAct ="NOD"+ "=" + ((String)zhash.get("NOD")) + "{";                                                            |
| 149 | expresión de cálculo/transformación: String zoutputdefcom = zm4object + "!" + znodocom + "[*]";                                                               |
| 150 | expresión de cálculo/transformación: String zoutputdeflab = zm4object + "!" + znodolabel + "[0]";                                                             |
| 151 | expresión de cálculo/transformación: String zraizlabel = znodolabel + ":" + zm4object + "!" + znodolabel + ".";                                               |
| 152 | expresión de cálculo/transformación: String zMetodoAct = zm4object + "!" + znodoraiz + ".SHCO_P_EXEC_PROCESS";                                                |
| 153 | expresión de cálculo/transformación: String zMetodoFiltro = zm4object + "!" + znodoraiz + ".SHCO_P_EXEC_FILTRO";                                              |
| 250 | expresión de cálculo/transformación: var sNewWindow = "Wnd" + hoy.getDay() + hoy.getHours() + hoy.getMinutes() + hoy.getSeconds();                            |
| 255 | expresión de cálculo/transformación: urlLista = sRetPage + '?zsubsesion='+'&lt;%=zsubsesion%&gt;'+'&amp;zm4o='+'&lt;%=zm4object%&gt;'+'&amp;zopenmode=0';     |
| 257 | expresión de cálculo/transformación: urlLista = sRetPage + '&amp;zsubsesion='+'&lt;%=zsubsesion%&gt;'+'&amp;zm4o='+'&lt;%=zm4object%&gt;'+'&amp;zopenmode=0'; |
| 296 | expresión de cálculo/transformación: sURLxlsTplt = sProtocol + "://" + sWebServerName + ":" + sWebServerPort ;                                                |

### Includes, navegación y dependencias

| L   | Include                              |
| --- | ------------------------------------ |
| 9   | ../shco_g0/shco_gen_taglib.jsp       |
| 11  | ../shco_g0/shco_gen_arg.jsp          |
| 12  | ../shco_g0/shco_gen_bag.jsp          |
| 13  | ../shco_g0/shco_gen_css.jsp          |
| 14  | /shco_g0/shco_gen_tec_include.jspf   |
| 156 | ../shco_g0/shco_gen_label.jsp        |
| 175 | ../shco_g0/shco_gen_delete_cache.jsp |
| 178 | ../shco_g0/shco_gen_p_wz_js.jsp      |
| 216 | ../shco_g0/shco_gen_menusup.jsp      |
| 231 | ../files_gif/ic_err.jsp              |
| 234 | ../files_gif/ic_warnig.jsp           |
| 237 | ../files_gif/ic_info.jsp             |
| 304 | ../shco_g0/shco_gen_menusup.jsp      |

| L   | Destino / recurso                    |
| --- | ------------------------------------ |
| 217 |                                      |
| 305 |                                      |
| 9   | ../shco_g0/shco_gen_taglib.jsp       |
| 11  | ../shco_g0/shco_gen_arg.jsp          |
| 12  | ../shco_g0/shco_gen_bag.jsp          |
| 13  | ../shco_g0/shco_gen_css.jsp          |
| 25  | com.meta4.jsp                        |
| 156 | ../shco_g0/shco_gen_label.jsp        |
| 175 | ../shco_g0/shco_gen_delete_cache.jsp |
| 178 | ../shco_g0/shco_gen_p_wz_js.jsp      |
| 216 | ../shco_g0/shco_gen_menusup.jsp      |
| 231 | ../files_gif/ic_err.jsp              |
| 234 | ../files_gif/ic_warnig.jsp           |
| 237 | ../files_gif/ic_info.jsp             |
| 304 | ../shco_g0/shco_gen_menusup.jsp      |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                           | Resolución | Ficha / candidato                                                      |
| ------ | --- | ------------------------------------ | ---------- | ---------------------------------------------------------------------- |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp       | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)             |
| BASE   | 11  | ../shco_g0/shco_gen_arg.jsp          | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)                   |
| BASE   | 12  | ../shco_g0/shco_gen_bag.jsp          | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)                   |
| BASE   | 13  | ../shco_g0/shco_gen_css.jsp          | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)                   |
| BASE   | 156 | ../shco_g0/shco_gen_label.jsp        | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md)               |
| BASE   | 175 | ../shco_g0/shco_gen_delete_cache.jsp | física     | [shco_g0/shco_gen_delete_cache.jsp](shco_g0--shco_gen_delete_cache.md) |
| BASE   | 178 | ../shco_g0/shco_gen_p_wz_js.jsp      | física     | [shco_g0/shco_gen_p_wz_js.jsp](shco_g0--shco_gen_p_wz_js.md)           |
| BASE   | 216 | ../shco_g0/shco_gen_menusup.jsp      | física     | [shco_g0/shco_gen_menusup.jsp](shco_g0--shco_gen_menusup.md)           |
| BASE   | 231 | ../files_gif/ic_err.jsp              | física     | [files_gif/ic_err.jsp](files_gif--ic_err.md)                           |
| BASE   | 234 | ../files_gif/ic_warnig.jsp           | física     | [files_gif/ic_warnig.jsp](files_gif--ic_warnig.md)                     |
| BASE   | 237 | ../files_gif/ic_info.jsp             | física     | [files_gif/ic_info.jsp](files_gif--ic_info.md)                         |
| BASE   | 304 | ../shco_g0/shco_gen_menusup.jsp      | física     | [shco_g0/shco_gen_menusup.jsp](shco_g0--shco_gen_menusup.md)           |
| BASE   | 9   | ../shco_g0/shco_gen_taglib.jsp       | física     | [shco_g0/shco_gen_taglib.jsp](shco_g0--shco_gen_taglib.md)             |
| BASE   | 11  | ../shco_g0/shco_gen_arg.jsp          | física     | [shco_g0/shco_gen_arg.jsp](shco_g0--shco_gen_arg.md)                   |
| BASE   | 12  | ../shco_g0/shco_gen_bag.jsp          | física     | [shco_g0/shco_gen_bag.jsp](shco_g0--shco_gen_bag.md)                   |
| BASE   | 13  | ../shco_g0/shco_gen_css.jsp          | física     | [shco_g0/shco_gen_css.jsp](shco_g0--shco_gen_css.md)                   |
| BASE   | 25  | com.meta4.jsp                        | ausente    | P06                                                                    |
| BASE   | 156 | ../shco_g0/shco_gen_label.jsp        | física     | [shco_g0/shco_gen_label.jsp](shco_g0--shco_gen_label.md)               |
| BASE   | 175 | ../shco_g0/shco_gen_delete_cache.jsp | física     | [shco_g0/shco_gen_delete_cache.jsp](shco_g0--shco_gen_delete_cache.md) |
| BASE   | 178 | ../shco_g0/shco_gen_p_wz_js.jsp      | física     | [shco_g0/shco_gen_p_wz_js.jsp](shco_g0--shco_gen_p_wz_js.md)           |
| BASE   | 216 | ../shco_g0/shco_gen_menusup.jsp      | física     | [shco_g0/shco_gen_menusup.jsp](shco_g0--shco_gen_menusup.md)           |
| BASE   | 231 | ../files_gif/ic_err.jsp              | física     | [files_gif/ic_err.jsp](files_gif--ic_err.md)                           |
| BASE   | 234 | ../files_gif/ic_warnig.jsp           | física     | [files_gif/ic_warnig.jsp](files_gif--ic_warnig.md)                     |
| BASE   | 237 | ../files_gif/ic_info.jsp             | física     | [files_gif/ic_info.jsp](files_gif--ic_info.md)                         |
| BASE   | 304 | ../shco_g0/shco_gen_menusup.jsp      | física     | [shco_g0/shco_gen_menusup.jsp](shco_g0--shco_gen_menusup.md)           |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `shco_g0/shco_gen_p_wz_exec.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
