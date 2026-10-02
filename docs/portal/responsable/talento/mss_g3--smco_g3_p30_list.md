# smco_g3_p30_list

Identificador: `mss_g3/smco_g3_p30_list.jsp`. Perfil: **responsable**. Dominio: **talento**.

[Índice general](../../README.md) · [Guía funcional del dominio](README.md) · [Convenciones](../../referencias/metodologia.md).

## Alcance y estado de evidencia

Ficha de evidencia estática de todas las versiones españolas y compartidas de esta ruta en la copia local. La existencia del archivo no confirma su publicación en el menú activo ni los permisos efectivos. Las secciones siguientes separan versiones por SHA-256; no mezclan sus controles ni contratos.

## Literales de interfaz identificados

Las coincidencias conservan todas las definiciones españolas de la clave; comprobar su `load` e herencia.

| Clave                  | Texto                                                                                                                                                                                                                                                                | Ámbito | Diccionario                                                                         |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| iv_mss.DescrIvMyEmp    | Desde aquí puedes ver las entrevistas realizadas a tus empleados aunque no hayas sido tú el entrevistador y las realizadas por tí. Para ver y/o modificar el resultado correspondiente a una entrevista determinada, sitúate sobre el nombre de la misma y haz clic. | BASE   | [translations/smco_iv_es.properties:L84](../../referencias/literales/smco_iv_es.md) |
| iv_mss.EmpInterview    | Entrevistas de mis empleados                                                                                                                                                                                                                                         | BASE   | [translations/smco_iv_es.properties:L8](../../referencias/literales/smco_iv_es.md)  |
| iv_mss.Interview       | Entrevistas                                                                                                                                                                                                                                                          | BASE   | [translations/smco_iv_es.properties:L3](../../referencias/literales/smco_iv_es.md)  |
| iv_mss.LblAll          | Todos                                                                                                                                                                                                                                                                | BASE   | [translations/smco_iv_es.properties:L17](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblChooseIvType | Selecciona un tipo de entrevista                                                                                                                                                                                                                                     | BASE   | [translations/smco_iv_es.properties:L54](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblChooseIvemp  | Selecciona un entrevistado                                                                                                                                                                                                                                           | BASE   | [translations/smco_iv_es.properties:L53](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblChooseIvwer  | Selecciona un entrevistador                                                                                                                                                                                                                                          | BASE   | [translations/smco_iv_es.properties:L52](../../referencias/literales/smco_iv_es.md) |
| iv_mss.LblFilter       | Filtro                                                                                                                                                                                                                                                               | BASE   | [translations/smco_iv_es.properties:L18](../../referencias/literales/smco_iv_es.md) |
| iv_mss.NoIvEmp         | No existen entrevistas de tus empleados.                                                                                                                                                                                                                             | BASE   | [translations/smco_iv_es.properties:L90](../../referencias/literales/smco_iv_es.md) |

## Fuentes y variantes

| Sociedad / ámbito | Archivo                                                                                                   | SHA-256                                                            | Líneas |
| ----------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -----: |
| BASE / español    | [mss_g3/espanol/smco_g3_p30_list.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30_list.jsp) | `af3bb9ce453851bc53f7660e14783a08ab88526dbd1f8c3b52ed213379bea4c6` |    428 |

Las filas con el mismo hash son copias binarias idénticas. Un hash distinto puede corresponder a una traducción envolvente, un cuerpo compartido o una personalización; no implica por sí solo un cambio funcional.

## Versión 1: BASE ES

Fuente de los localizadores `L`: [mss_g3/espanol/smco_g3_p30_list.jsp](../../../../clon_portal/portal/mss_g3/espanol/smco_g3_p30_list.jsp). Líneas físicas, contando desde 1.

### Apartados, etiquetas y enlaces visibles

| L   | Texto literal / etiqueta                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------ |
| 322 | [valor dinámico] "&gt;                                                                                             |
| 397 | " href="javascript:interview_det('[valor dinámico]','[valor dinámico]','[valor dinámico]','[valor dinámico]')"&gt; |

### Controles, formularios y opciones

Atributos literales del original: `type`, `name/id`, `value`, `maxlength`, `size`, `readonly/disabled`, eventos y bindings. Un valor dinámico conserva su expresión; no equivale a un valor de negocio confirmado. La obligatoriedad no se deduce del nombre ni del asterisco: consultar las reglas y el controlador.

| L   | Control | Atributos                                                                                                               |
| --- | ------- | ----------------------------------------------------------------------------------------------------------------------- |
| 271 | img     | alt=&lt;%=ztitle%&gt;; title=&lt;%=ztitle%&gt;; src=/iconos/noname_objetivos_ess_103_100.gif; width=103; height=100     |
| 281 | form    | name=formfiltro; id=formfiltro; action=                                                                                 |
| 288 | select  | id=filtroresp; class=fuenteapartados; onchange=filtrar(2); title=JSP_EXPR_tranivMSS.getProperty(                        |
| 289 | option  | value=XXX01                                                                                                             |
| 293 | option  | value=&lt;%=sIdResp%&gt;                                                                                                |
| 306 | select  | id=filtroemployee; class=fuenteapartados; onchange=filtrar(3); title=JSP_EXPR_tranivMSS.getProperty(                    |
| 307 | option  | value=XXX01                                                                                                             |
| 311 | option  | value=&lt;%=sIdEmp%&gt;                                                                                                 |
| 323 | select  | id=filtrotypeint; class=fuenteapartados; onchange=filtrar(4); title=JSP_EXPR_tranivMSS.getProperty(                     |
| 324 | option  | value=XXX01                                                                                                             |
| 326 | option  | value=&lt;m4:item m4name=; htmlsafe=true                                                                                |
| 338 | form    | action=&lt;%=zlink%&gt;; method=post; name=oculto; id=oculto                                                            |
| 339 | input   | type=hidden; id=zfiltroresp; name=zfiltroresp; value=&lt;%=zfiltroresp%&gt;                                             |
| 340 | input   | type=hidden; id=znombreresp; name=znombreresp; value=&lt;%=znombreresp%&gt;                                             |
| 341 | input   | type=hidden; id=zfiltroemp; name=zfiltroemp; value=&lt;%=zfiltroemp%&gt;                                                |
| 342 | input   | type=hidden; id=znombreemp; name=znombreemp; value=&lt;%=znombreemp%&gt;                                                |
| 343 | input   | type=hidden; id=zfiltrotp; name=zfiltrotp; value=&lt;%=zfiltrotp%&gt;                                                   |
| 344 | input   | type=hidden; id=znombretp; name=znombretp; value=&lt;%=znombretp%&gt;                                                   |
| 345 | input   | type=hidden; id=zinicios; name=zinicios; value=                                                                         |
| 346 | input   | type=hidden; id=proc; name=proc; value=&lt;%=zproc%&gt;                                                                 |
| 349 | form    | action=/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31; method=post; name=detinterview; id=detinterview |
| 350 | input   | type=hidden; id=zPRP_ID_HR_ENCR; name=zPRP_ID_HR_ENCR; value=                                                           |
| 351 | input   | type=hidden; id=zPRP_OR_HR_PERIOD_ENCR; name=zPRP_OR_HR_PERIOD_ENCR; value=                                             |
| 352 | input   | type=hidden; id=zPRP_DT_REQUEST_ENCR; name=zPRP_DT_REQUEST_ENCR; value=                                                 |
| 353 | input   | type=hidden; id=zPRP_ID_INTERVIEW_TYPE_ENCR; name=zPRP_ID_INTERVIEW_TYPE_ENCR; value=                                   |
| 354 | input   | type=hidden; id=zVis; name=zVis; value=                                                                                 |
| 355 | input   | type=hidden; id=zgoto; name=zgoto; value=LIST                                                                           |
| 357 | form    | name=NombreFormulario; id=NombreFormulario; action=                                                                     |
| 398 | a       | class=enlacefuncional; title=&lt;m4:label m4name=; htmlsafe=true                                                        |

### Contexto, entradas y valores construidos

| L   | Entrada / clave | Acceso literal                       |
| --- | --------------- | ------------------------------------ |
| 41  | proc            | getParameter(request, "proc")        |
| 48  | estado          | getParameter(request, "estado")      |
| 49  | zinicios        | getParameter(request, "zinicios")    |
| 51  | zfiltroresp     | getParameter(request, "zfiltroresp") |
| 52  | znombreresp     | getParameter(request, "znombreresp") |
| 53  | zfiltroemp      | getParameter(request, "zfiltroemp")  |
| 54  | znombreemp      | getParameter(request, "znombreemp")  |
| 55  | zfiltrotp       | getParameter(request, "zfiltrotp")   |
| 56  | znombretp       | getParameter(request, "znombretp")   |

| L   | Variable                   | Expresión fuente                                                                  | Resolución estática parcial                                                                                                                     |
| --- | -------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 16  | empleado                   | (String)request.getAttribute("empleado")                                          | (String)request.getAttribute("empleado")                                                                                                        |
| 17  | zVis                       | (String)request.getAttribute("zVis")                                              | (String)request.getAttribute("zVis")                                                                                                            |
| 19  | zSMCO_ID_HR                | ""                                                                                |                                                                                                                                                 |
| 34  | ztitle                     | ""                                                                                |                                                                                                                                                 |
| 41  | zproc                      | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "proc")                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "proc")                                                                               |
| 48  | estado                     | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "estado")               | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "estado")                                                                             |
| 49  | zinicios                   | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zinicios")             | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zinicios")                                                                           |
| 51  | zfiltroresp                | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltroresp")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltroresp")                                                                        |
| 52  | znombreresp                | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombreresp")          | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombreresp")                                                                        |
| 53  | zfiltroemp                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltroemp")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltroemp")                                                                         |
| 54  | znombreemp                 | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombreemp")           | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombreemp")                                                                         |
| 55  | zfiltrotp                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltrotp")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "zfiltrotp")                                                                          |
| 56  | znombretp                  | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombretp")            | com.meta4.taglib.util.M4SafeRequest.getParameter(request, "znombretp")                                                                          |
| 134 | zsubsesion                 | "SSM_GN_INTERVIEW"                                                                | SSM_GN_INTERVIEW                                                                                                                                |
| 135 | zmeta4object               | "SSM_GN_INTERVIEW"                                                                | SSM_GN_INTERVIEW                                                                                                                                |
| 136 | znodo                      | "SSM_GN_INTERVIEW_LIST"                                                           | SSM_GN_INTERVIEW_LIST                                                                                                                           |
| 137 | znodolistresp              | "SSM_IV_FILT_INTV_LIST"                                                           | SSM_IV_FILT_INTV_LIST                                                                                                                           |
| 138 | znodolistemp               | "SSM_IV_FILT_EMP_LIST"                                                            | SSM_IV_FILT_EMP_LIST                                                                                                                            |
| 139 | znodolisttpiv              | "SSM_IV_FILT_IV_TP_LIST"                                                          | SSM_IV_FILT_IV_TP_LIST                                                                                                                          |
| 141 | ztipocarga                 | "LIST"                                                                            | LIST                                                                                                                                            |
| 142 | zventanas                  | ""                                                                                |                                                                                                                                                 |
| 148 | zvuelta                    | 5                                                                                 | 5                                                                                                                                               |
| 149 | zdireccion                 | "/mss_g3/smco_g3_p30_list.jsp"                                                    | /mss_g3/smco_g3_p30_list.jsp                                                                                                                    |
| 150 | zlink                      | "/servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31"                | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31                                                                                |
| 151 | zestado                    | "31"                                                                              | 31                                                                                                                                              |
| 152 | zregistroinicial           | Integer.valueOf(zinicios).intValue()                                              | Integer.valueOf(zinicios).intValue()                                                                                                            |
| 154 | zventana                   | Integer.valueOf(zventanas).intValue()                                             | Integer.valueOf(zventanas).intValue()                                                                                                           |
| 155 | zregistrofinal             | zregistroinicial + zventana - 1                                                   | Integer.valueOf(zinicios).intValue(){zventana - 1}                                                                                              |
| 157 | zoutputdef                 | zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]"    | SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 158 | zmove                      | znodo + ":" + znodo + "[" + zregistroinicial + "]"                                | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW_LIST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                                   |
| 159 | zraiz                      | znodo + ":" + zsubsesion + "!" + znodo + "."                                      | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}                                                                       |
| 160 | ziterator                  | znodo + ":" + zsubsesion + "!" + znodo                                            | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST                                                                            |
| 162 | zSCO_ID_HR                 | zraiz + "SCO_ID_HR"                                                               | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_ID_HR"}                                                          |
| 163 | zSCO_OR_HR_PERIOD          | zraiz + "SCO_OR_HR_PERIOD"                                                        | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_OR_HR_PERIOD"}                                                   |
| 164 | zSCO_DT_REQUEST            | zraiz + "SCO_DT_REQUEST"                                                          | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_DT_REQUEST"}                                                     |
| 165 | zSCO_DT_FINISH             | zraiz + "SCO_DT_FINISH"                                                           | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_DT_FINISH"}                                                      |
| 166 | zSCO_GB_NAME_RESP          | zraiz + "SCO_GB_NAME_RESP"                                                        | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_GB_NAME_RESP"}                                                   |
| 167 | zSCO_GB_NAME_EMP           | zraiz + "SCO_GB_NAME_EMP"                                                         | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_GB_NAME_EMP"}                                                    |
| 168 | zSCO_NM_INTERVIEW_TYPE     | zraiz + "SCO_NM_INTERVIEW_TYPE"                                                   | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_NM_INTERVIEW_TYPE"}                                              |
| 169 | zSCO_INTERVIEW_NAME        | zraiz + "SCO_INTERVIEW_NAME"                                                      | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_INTERVIEW_NAME"}                                                 |
| 170 | zSCO_ID_INTERVIEW_TYPE     | zraiz + "SCO_ID_INTERVIEW_TYPE"                                                   | SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_ID_INTERVIEW_TYPE"}                                              |
| 172 | zoutputdeflistresp         | zsubsesion + "!" + znodolistresp + "[*]"                                          | SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[*]"}                                                                                               |
| 173 | zmovelistresp              | znodolistresp + ":" + znodolistresp + "[FIRST]"                                   | SSM_IV_FILT_INTV_LIST{":"}SSM_IV_FILT_INTV_LIST{"[FIRST]"}                                                                                      |
| 174 | zcomuniv                   | znodolistresp + ":" + zsubsesion + "!" + znodolistresp + "[&amp;VAR.m4lix]" + "." | SSM_IV_FILT_INTV_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[&amp;VAR.m4lix]"}{"."}                                                   |
| 175 | zSTD_ID_PERSON_RESP        | zcomuniv + "STD_ID_PERSON"                                                        | SSM_IV_FILT_INTV_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                  |
| 176 | zSCO_GB_NAME_RESP_FLT      | zcomuniv + "SCO_GB_NAME"                                                          | SSM_IV_FILT_INTV_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                    |
| 178 | zoutputdeflistemp          | zsubsesion + "!" + znodolistemp + "[*]"                                           | SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[*]"}                                                                                                |
| 179 | zmovelistemp               | znodolistemp + ":" + znodolistemp + "[FIRST]"                                     | SSM_IV_FILT_EMP_LIST{":"}SSM_IV_FILT_EMP_LIST{"[FIRST]"}                                                                                        |
| 180 | zcomunemp                  | znodolistemp + ":" + zsubsesion + "!" + znodolistemp + "[&amp;VAR.m4lix]" + "."   | SSM_IV_FILT_EMP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[&amp;VAR.m4lix]"}{"."}                                                     |
| 181 | zSTD_ID_PERSON_EMP         | zcomunemp + "STD_ID_PERSON"                                                       | SSM_IV_FILT_EMP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}                                    |
| 182 | zSCO_GB_NAME_EMP_FLT       | zcomunemp + "SCO_GB_NAME"                                                         | SSM_IV_FILT_EMP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                      |
| 184 | zoutputdeflisttpiv         | zsubsesion + "!" + znodolisttpiv + "[*]"                                          | SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_IV_TP_LIST{"[*]"}                                                                                              |
| 185 | zmovelisttpiv              | znodolisttpiv + ":" + znodolisttpiv + "[FIRST]"                                   | SSM_IV_FILT_IV_TP_LIST{":"}SSM_IV_FILT_IV_TP_LIST{"[FIRST]"}                                                                                    |
| 186 | zcomuntpiv                 | znodolisttpiv + ":" + zsubsesion + "!" + znodolisttpiv + "[&amp;VAR.m4lix]" + "." | SSM_IV_FILT_IV_TP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_IV_TP_LIST{"[&amp;VAR.m4lix]"}{"."}                                                 |
| 187 | zSCO_ID_INTERVIEW_TYPE_FLT | zcomuntpiv + "SCO_ID_INTERVIEW_TYPE"                                              | SSM_IV_FILT_IV_TP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_IV_TP_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_ID_INTERVIEW_TYPE"}                        |
| 188 | zSCO_NM_INTERVIEW_TYPE_FLT | zcomuntpiv + "SCO_NM_INTERVIEW_TYPE"                                              | SSM_IV_FILT_IV_TP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_IV_TP_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}                        |
| 190 | znodoprincipal             | "SSM_PRINCIPAL"                                                                   | SSM_PRINCIPAL                                                                                                                                   |
| 191 | zmetodocarga               | "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA"                           | CARGA:{}SSM_GN_INTERVIEW{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                            |
| 192 | sIdHR                      | ""                                                                                |                                                                                                                                                 |
| 193 | sOrHrPeriod                | ""                                                                                |                                                                                                                                                 |
| 194 | sDtRequest                 | ""                                                                                |                                                                                                                                                 |
| 195 | sIdInterviewType           | ""                                                                                |                                                                                                                                                 |
| 218 | zcounti                    | 0                                                                                 | 0                                                                                                                                               |
| 219 | zcount                     | 0                                                                                 | 0                                                                                                                                               |
| 220 | zcountiresp                | 0                                                                                 | 0                                                                                                                                               |
| 221 | zcountresp                 | 0                                                                                 | 0                                                                                                                                               |
| 222 | zcountiemp                 | 0                                                                                 | 0                                                                                                                                               |
| 223 | zcountemp                  | 0                                                                                 | 0                                                                                                                                               |
| 224 | zcountitp                  | 0                                                                                 | 0                                                                                                                                               |
| 225 | zcounttp                   | 0                                                                                 | 0                                                                                                                                               |
| 226 | zcounti2                   | 0                                                                                 | 0                                                                                                                                               |
| 227 | zcount2                    | 0                                                                                 | 0                                                                                                                                               |
| 241 | zcountv                    | String.valueOf(zcounti)                                                           | String.valueOf(zcounti)                                                                                                                         |
| 242 | zcountvresp                | String.valueOf(zcountiresp)                                                       | String.valueOf(zcountiresp)                                                                                                                     |
| 243 | zcountvemp                 | String.valueOf(zcountiemp)                                                        | String.valueOf(zcountiemp)                                                                                                                      |
| 244 | zcountvtp                  | String.valueOf(zcountitp)                                                         | String.valueOf(zcountitp)                                                                                                                       |
| 247 | sFiltroNameL               | tranivMSS.getProperty("iv_mss.LblAll")                                            | tranivMSS.getProperty("iv_mss.LblAll")                                                                                                          |
| 248 | sFiltroNameL2              | tranivMSS.getProperty("iv_mss.LblAll")                                            | tranivMSS.getProperty("iv_mss.LblAll")                                                                                                          |
| 249 | sFiltroNameL3              | tranivMSS.getProperty("iv_mss.LblAll")                                            | tranivMSS.getProperty("iv_mss.LblAll")                                                                                                          |
| 365 | zcontrol                   | 0                                                                                 | 0                                                                                                                                               |
| 366 | zPaint                     | ""                                                                                |                                                                                                                                                 |
| 380 | i                          | 0                                                                                 | 0                                                                                                                                               |
| 382 | id                         | String.valueOf(i)                                                                 | String.valueOf(i)                                                                                                                               |

### Objetos, métodos, nodos y salidas Meta4

Estas llamadas son del runtime JSP/Meta4. No son un catálogo de endpoints SOAP. La resolución que conserva variables o condiciones es parcial. `setItem` puede preparar argumentos y no prueba por sí solo una escritura persistente.

| L   | Tag          | Contrato declarado                                                                                                                                                  |
| --- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 197 | m4:startpage | m4task=SSM_GN_INTERVIEW                                                                                                                                             |
| 198 | m4:beginjob  |                                                                                                                                                                     |
| 199 | m4:datadef   | m4o=SSM_GN_INTERVIEW; m4name=SSM_GN_INTERVIEW                                                                                                                       |
| 207 | m4:exec      | m4method=CARGA:{}SSM_GN_INTERVIEW{"!"}SSM_PRINCIPAL{".CARGA"}                                                                                                       |
| 207 | m4:param     | name=TIPO_CARGA; value=LIST                                                                                                                                         |
| 208 | m4:outputdef | m4alias=SSM_GN_INTERVIEW_LIST                                                                                                                                       |
| 208 | m4:param     | name=m4name0; value=SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"["}Integer.valueOf(zinicios).intValue(){"-"}Integer.valueOf(zinicios).intValue(){zventana - 1}{"]"} |
| 209 | m4:outputdef | m4alias=SSM_IV_FILT_EMP_LIST                                                                                                                                        |
| 209 | m4:param     | name=m4name0; value=SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[*]"}                                                                                                |
| 210 | m4:outputdef | m4alias=SSM_IV_FILT_INTV_LIST                                                                                                                                       |
| 210 | m4:param     | name=m4name0; value=SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[*]"}                                                                                               |
| 211 | m4:outputdef | m4alias=SSM_IV_FILT_IV_TP_LIST                                                                                                                                      |
| 211 | m4:param     | name=m4name0; value=SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_IV_TP_LIST{"[*]"}                                                                                              |
| 212 | m4:endjob    |                                                                                                                                                                     |
| 213 | m4:move      |                                                                                                                                                                     |
| 213 | m4:param     | name=SSM_GN_INTERVIEW; value=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW_LIST{"["}Integer.valueOf(zinicios).intValue(){"]"}                                          |
| 214 | m4:move      |                                                                                                                                                                     |
| 214 | m4:param     | name=SSM_GN_INTERVIEW; value=SSM_IV_FILT_EMP_LIST{":"}SSM_IV_FILT_EMP_LIST{"[FIRST]"}                                                                               |
| 215 | m4:move      |                                                                                                                                                                     |
| 215 | m4:param     | name=SSM_GN_INTERVIEW; value=SSM_IV_FILT_INTV_LIST{":"}SSM_IV_FILT_INTV_LIST{"[FIRST]"}                                                                             |
| 216 | m4:move      |                                                                                                                                                                     |
| 216 | m4:param     | name=SSM_GN_INTERVIEW; value=SSM_IV_FILT_IV_TP_LIST{":"}SSM_IV_FILT_IV_TP_LIST{"[FIRST]"}                                                                           |
| 286 | m4:label     | m4name=SSM_IV_FILT_INTV_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                 |
| 290 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvresp).intValue()-1).toString()                                                                                            |
| 291 | m4:item      | m4name=SSM_IV_FILT_INTV_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}; htmlsafe=true; m4varname=sIdResp             |
| 293 | m4:item      | m4name=SSM_IV_FILT_INTV_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_INTV_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                 |
| 304 | m4:label     | m4name=SSM_IV_FILT_EMP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}                                                   |
| 308 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvemp).intValue()-1).toString()                                                                                             |
| 309 | m4:item      | m4name=SSM_IV_FILT_EMP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[&amp;VAR.m4lix]"}{"."}{"STD_ID_PERSON"}; htmlsafe=true; m4varname=sIdEmp                |
| 311 | m4:item      | m4name=SSM_IV_FILT_EMP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_EMP_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_GB_NAME"}; htmlsafe=true                                    |
| 322 | m4:label     | m4name=SSM_IV_FILT_IV_TP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_IV_TP_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}                                     |
| 325 | m4:loop      | from=0; to=new_Integer(new_Integer(zcountvtp).intValue()-1).toString()                                                                                              |
| 326 | m4:item      | m4name=SSM_IV_FILT_IV_TP_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_IV_FILT_IV_TP_LIST{"[&amp;VAR.m4lix]"}{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                      |
| 370 | m4:label     | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                                               |
| 371 | m4:label     | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                                                   |
| 372 | m4:label     | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                                            |
| 373 | m4:label     | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_DT_FINISH"}; htmlsafe=true                                                    |
| 374 | m4:label     | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_GB_NAME_EMP"}; htmlsafe=true                                                  |
| 375 | m4:label     | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_GB_NAME_RESP"}; htmlsafe=true                                                 |
| 388 | m4:item      | item=SCO_ID_HR; htmlsafe=true; outputdef=SSM_GN_INTERVIEW_LIST; var=                                                                                                |
| 390 | m4:item      | item=SCO_OR_HR_PERIOD; htmlsafe=true; outputdef=SSM_GN_INTERVIEW_LIST; var=                                                                                         |
| 392 | m4:item      | item=SCO_DT_REQUEST; htmlsafe=true; outputdef=SSM_GN_INTERVIEW_LIST; var=                                                                                           |
| 394 | m4:item      | item=SCO_ID_INTERVIEW_TYPE; htmlsafe=true; outputdef=SSM_GN_INTERVIEW_LIST; var=                                                                                    |
| 398 | m4:item      | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_INTERVIEW_NAME"}; htmlsafe=true                                               |
| 400 | m4:item      | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_DT_REQUEST"}; htmlsafe=true                                                   |
| 401 | m4:item      | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_NM_INTERVIEW_TYPE"}; htmlsafe=true                                            |
| 402 | m4:item      | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_DT_FINISH"}; htmlsafe=true                                                    |
| 403 | m4:item      | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_GB_NAME_EMP"}; htmlsafe=true                                                  |
| 404 | m4:item      | m4name=SSM_GN_INTERVIEW_LIST{":"}SSM_GN_INTERVIEW{"!"}SSM_GN_INTERVIEW_LIST{"."}{"SCO_GB_NAME_RESP"}; htmlsafe=true                                                 |
| 426 | m4:endpage   |                                                                                                                                                                     |

| L   | Operación        | Argumentos literales                              |
| --- | ---------------- | ------------------------------------------------- |
| 202 | setItem          | zsubsesion,znodo,"","PRP_FILTER_RESP",zfiltroresp |
| 203 | setItem          | zsubsesion,znodo,"","PRP_FILTER_EMP",zfiltroemp   |
| 204 | setItem          | zsubsesion,znodo,"","PRP_FILTER_TYPEIV",zfiltrotp |
| 231 | getCount         | znodo,zsubsesion,znodo                            |
| 232 | getCountInClient | znodo,zsubsesion,znodo                            |
| 233 | getCount         | znodolistresp,zsubsesion,znodolistresp            |
| 234 | getCountInClient | znodolistresp,zsubsesion,znodolistresp            |
| 235 | getCount         | znodolistemp,zsubsesion,znodolistemp              |
| 236 | getCountInClient | znodolistemp,zsubsesion,znodolistemp              |
| 237 | getCount         | znodolisttpiv,zsubsesion,znodolisttpiv            |
| 238 | getCountInClient | znodolisttpiv,zsubsesion,znodolisttpiv            |

### Funciones, condiciones y mensajes

Las condiciones son evidencia del código activo tras retirar comentarios HTML/JSP y bloques de comentario. Conservar su contexto: una condición aislada no permite afirmar un permiso ni una regla global. Las reglas compartidas de JavaScript se localizan más abajo.

| L   | Función       | Argumentos                    |
| --- | ------------- | ----------------------------- |
| 91  | filtrar       | num                           |
| 110 | interview_det | IdHR,IdHRPer,DtRequest,IdTpIV |

| L   | Condición / acción / mensaje literal                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| 20  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 23  | else{                                                                                                                                       |
| 35  | if ((zVis==null)&#124;&#124;(zVis.equals(""))){                                                                                             |
| 37  | }else{                                                                                                                                      |
| 58  | if ((estado==null)&#124;&#124;(estado.equals(""))){estado="0";}                                                                             |
| 59  | if ((zinicios==null)&#124;&#124;(zinicios.equals(""))){zinicios = "1";}                                                                     |
| 60  | if ((zfiltroresp==null)&#124;&#124; (""==zfiltroresp)){                                                                                     |
| 62  | } else {                                                                                                                                    |
| 63  | if ( zfiltroresp.equals("XXX01")){                                                                                                          |
| 65  | }else{                                                                                                                                      |
| 70  | if (zVis.equals("1")){                                                                                                                      |
| 71  | if ((zfiltroemp==null)&#124;&#124; (""==zfiltroemp)){                                                                                       |
| 73  | } else {                                                                                                                                    |
| 74  | if ( zfiltroemp.equals("XXX01")){                                                                                                           |
| 76  | }else{                                                                                                                                      |
| 80  | }else{                                                                                                                                      |
| 83  | if ((zfiltrotp==null)&#124;&#124; (""==zfiltrotp)){zfiltrotp = "XXX01";}                                                                    |
| 84  | if ((znombreresp==null)&#124;&#124; (""==znombreresp)){znombreresp = tranivMSS.getProperty("iv_mss.LblAll");}                               |
| 85  | if ((znombreemp==null)&#124;&#124; (""==znombreemp)){znombreemp = tranivMSS.getProperty("iv_mss.LblAll");}                                  |
| 86  | if ((znombretp==null)&#124;&#124; (""==znombretp)){znombretp = tranivMSS.getProperty("iv_mss.LblAll");}                                     |
| 127 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 143 | if (zVis.equals("1")){                                                                                                                      |
| 145 | }else{                                                                                                                                      |
| 252 | if (zfiltroresp.equals("XXX01"))                                                                                                            |
| 257 | if (zfiltroemp.equals("XXX01"))                                                                                                             |
| 262 | if (zfiltrotp.equals("XXX01"))                                                                                                              |
| 267 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 280 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 298 | if ('&lt;%=zfiltroresp%&gt;'!= "XXX01"){                                                                                                    |
| 316 | if ('&lt;%=zfiltroemp%&gt;'!= "XXX01"){                                                                                                     |
| 331 | if ('&lt;%=zfiltrotp%&gt;'!= "XXX01"){                                                                                                      |
| 358 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 360 | &lt;%}else{%&gt;                                                                                                                            |
| 364 | &lt;% if (zcounti &gt; 0) {                                                                                                                 |
| 385 | if (zcontrol==0){zPaint="";}else{zPaint="2";}                                                                                               |
| 412 | &lt;%}else{%&gt;                                                                                                                            |
| 417 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 420 | &lt;% if (zVis.equals("1")){%&gt;                                                                                                           |
| 153 | expresión de cálculo/transformación: zregistroinicial = zregistroinicial - 1;                                                               |
| 155 | expresión de cálculo/transformación: int zregistrofinal = zregistroinicial + zventana - 1;                                                  |
| 157 | expresión de cálculo/transformación: String zoutputdef = zsubsesion + "!" + znodo + "[" + zregistroinicial + "-" + zregistrofinal + "]";    |
| 158 | expresión de cálculo/transformación: String zmove =znodo + ":" + znodo + "[" + zregistroinicial + "]";                                      |
| 159 | expresión de cálculo/transformación: String zraiz = znodo + ":" + zsubsesion + "!" + znodo + ".";                                           |
| 160 | expresión de cálculo/transformación: String ziterator = znodo + ":" + zsubsesion + "!" + znodo;                                             |
| 162 | expresión de cálculo/transformación: String zSCO_ID_HR = zraiz + "SCO_ID_HR";                                                               |
| 163 | expresión de cálculo/transformación: String zSCO_OR_HR_PERIOD = zraiz + "SCO_OR_HR_PERIOD";                                                 |
| 164 | expresión de cálculo/transformación: String zSCO_DT_REQUEST = zraiz + "SCO_DT_REQUEST";                                                     |
| 165 | expresión de cálculo/transformación: String zSCO_DT_FINISH= zraiz + "SCO_DT_FINISH";                                                        |
| 166 | expresión de cálculo/transformación: String zSCO_GB_NAME_RESP = zraiz + "SCO_GB_NAME_RESP";                                                 |
| 167 | expresión de cálculo/transformación: String zSCO_GB_NAME_EMP = zraiz + "SCO_GB_NAME_EMP";                                                   |
| 168 | expresión de cálculo/transformación: String zSCO_NM_INTERVIEW_TYPE = zraiz + "SCO_NM_INTERVIEW_TYPE";                                       |
| 169 | expresión de cálculo/transformación: String zSCO_INTERVIEW_NAME = zraiz + "SCO_INTERVIEW_NAME";                                             |
| 170 | expresión de cálculo/transformación: String zSCO_ID_INTERVIEW_TYPE = zraiz + "SCO_ID_INTERVIEW_TYPE";                                       |
| 172 | expresión de cálculo/transformación: String zoutputdeflistresp= zsubsesion + "!" + znodolistresp + "[*]";                                   |
| 173 | expresión de cálculo/transformación: String zmovelistresp = znodolistresp + ":" + znodolistresp + "[FIRST]";                                |
| 174 | expresión de cálculo/transformación: String zcomuniv = znodolistresp + ":" + zsubsesion + "!" + znodolistresp + "[&amp;VAR.m4lix]" + ".";   |
| 175 | expresión de cálculo/transformación: String zSTD_ID_PERSON_RESP = zcomuniv + "STD_ID_PERSON";                                               |
| 176 | expresión de cálculo/transformación: String zSCO_GB_NAME_RESP_FLT = zcomuniv + "SCO_GB_NAME";                                               |
| 178 | expresión de cálculo/transformación: String zoutputdeflistemp = zsubsesion + "!" + znodolistemp + "[*]";                                    |
| 179 | expresión de cálculo/transformación: String zmovelistemp = znodolistemp + ":" + znodolistemp + "[FIRST]";                                   |
| 180 | expresión de cálculo/transformación: String zcomunemp = znodolistemp + ":" + zsubsesion + "!" + znodolistemp + "[&amp;VAR.m4lix]" + ".";    |
| 181 | expresión de cálculo/transformación: String zSTD_ID_PERSON_EMP = zcomunemp + "STD_ID_PERSON";                                               |
| 182 | expresión de cálculo/transformación: String zSCO_GB_NAME_EMP_FLT = zcomunemp + "SCO_GB_NAME";                                               |
| 184 | expresión de cálculo/transformación: String zoutputdeflisttpiv = zsubsesion + "!" + znodolisttpiv + "[*]";                                  |
| 185 | expresión de cálculo/transformación: String zmovelisttpiv = znodolisttpiv + ":" + znodolisttpiv + "[FIRST]";                                |
| 186 | expresión de cálculo/transformación: String zcomuntpiv = znodolisttpiv + ":" + zsubsesion + "!" + znodolisttpiv + "[&amp;VAR.m4lix]" + "."; |
| 187 | expresión de cálculo/transformación: String zSCO_ID_INTERVIEW_TYPE_FLT = zcomuntpiv + "SCO_ID_INTERVIEW_TYPE";                              |
| 188 | expresión de cálculo/transformación: String zSCO_NM_INTERVIEW_TYPE_FLT = zcomuntpiv + "SCO_NM_INTERVIEW_TYPE";                              |
| 191 | expresión de cálculo/transformación: String zmetodocarga = "CARGA:" + zsubsesion + "!" + znodoprincipal + ".CARGA";                         |

### Includes, navegación y dependencias

| L   | Include                                               |
| --- | ----------------------------------------------------- |
| 10  | ../../mss_generico/espanol/menu_mss.jsp               |
| 12  | /mss_g3/smco_iv_trans.jsp                             |
| 128 | ../../mss_generico/espanol/mssgenerico_menusup.jsp    |
| 129 | ../../sse_generico/espanol/generico_links.jsp         |
| 418 | ../../sse_generico/espanol/generico_ventanas_post.jsp |
| 421 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp |

| L   | Destino / recurso                                                |
| --- | ---------------------------------------------------------------- |
| 8   | /libreria/funciones_sse_val1.js                                  |
| 9   | /libreria/funciones_sse.js                                       |
| 45  | /css/estilo_mss.css                                              |
| 271 | /iconos/noname_objetivos_ess_103_100.gif                         |
| 281 |                                                                  |
| 338 | &lt;%=zlink%&gt;                                                 |
| 349 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31  |
| 357 |                                                                  |
| 398 | javascript:interview_det(                                        |
| 10  | ../../mss_generico/espanol/menu_mss.jsp                          |
| 12  | /mss_g3/smco_iv_trans.jsp                                        |
| 128 | ../../mss_generico/espanol/mssgenerico_menusup.jsp               |
| 129 | ../../sse_generico/espanol/generico_links.jsp                    |
| 149 | /mss_g3/smco_g3_p30_list.jsp                                     |
| 150 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31 |
| 418 | ../../sse_generico/espanol/generico_ventanas_post.jsp            |
| 421 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            |

## Resolución de dependencias

«Física» identifica un archivo local. «Contextual» enumera candidatos sin asegurar la preferencia del runtime. Una dependencia dinámica o ausente requiere P06 para esta ruta y línea.

| Ámbito | L   | Referencia                                                       | Resolución | Ficha / candidato                                                                                               |
| ------ | --- | ---------------------------------------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------- |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                          | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 12  | /mss_g3/smco_iv_trans.jsp                                        | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                            |
| BASE   | 128 | ../../mss_generico/espanol/mssgenerico_menusup.jsp               | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 129 | ../../sse_generico/espanol/generico_links.jsp                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 418 | ../../sse_generico/espanol/generico_ventanas_post.jsp            | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 421 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |
| BASE   | 8   | /libreria/funciones_sse_val1.js                                  | contextual | [libreria/funciones_sse_val1.js](../../transversal/dependencias/libreria--funciones_sse_val1.md)                |
| BASE   | 9   | /libreria/funciones_sse.js                                       | contextual | [libreria/funciones_sse.js](../../transversal/dependencias/libreria--funciones_sse.md)                          |
| BASE   | 338 | &lt;%=zlink%&gt;                                                 | dinámica   | P06                                                                                                             |
| BASE   | 349 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_det.jsp?estado=31  | ausente    | P06                                                                                                             |
| BASE   | 398 | javascript:interview_det(                                        | dinámica   | P06                                                                                                             |
| BASE   | 10  | ../../mss_generico/espanol/menu_mss.jsp                          | física     | [mss_generico/menu_mss.jsp](../tareas/mss_generico--menu_mss.md)                                                |
| BASE   | 12  | /mss_g3/smco_iv_trans.jsp                                        | contextual | [mss_g3/smco_iv_trans.jsp](mss_g3--smco_iv_trans.md)                                                            |
| BASE   | 128 | ../../mss_generico/espanol/mssgenerico_menusup.jsp               | física     | [mss_generico/mssgenerico_menusup.jsp](../tareas/mss_generico--mssgenerico_menusup.md)                          |
| BASE   | 129 | ../../sse_generico/espanol/generico_links.jsp                    | física     | [sse_generico/generico_links.jsp](../../transversal/navegacion/sse_generico--generico_links.md)                 |
| BASE   | 149 | /mss_g3/smco_g3_p30_list.jsp                                     | ausente    | P06                                                                                                             |
| BASE   | 150 | /servlet/CheckSecurity/JSP/mss_g3/smco_g3_p30_list.jsp?estado=31 | ausente    | P06                                                                                                             |
| BASE   | 418 | ../../sse_generico/espanol/generico_ventanas_post.jsp            | física     | [sse_generico/generico_ventanas_post.jsp](../../transversal/navegacion/sse_generico--generico_ventanas_post.md) |
| BASE   | 421 | ../../mss_generico/espanol/mssgenerico_disclaimer.jsp            | física     | [mss_generico/mssgenerico_disclaimer.jsp](../tareas/mss_generico--mssgenerico_disclaimer.md)                    |

## Adaptación y aceptación

Consultar el [mapa de destino](../../implementacion/mapa-destino.md) y la [integración](../../implementacion/integracion-powermeta4.md). La ruta técnica identifica la ficha; no obliga a crear una página pública para cada fragmento, actualización o wrapper. Agruparlos en el flujo funcional del índice del dominio.

- Reproducir los apartados y controles de la variante aplicable, con sus catálogos y dependencias; contrastar especialmente las diferencias CYC frente a IBER/COLL.
- Probar entradas válidas/inválidas, filtros vacíos, recarga, paginación, selección, cancelación y respuestas de error cuando esas acciones aparezcan en el original.
- Resolver identidad, sociedad y alcance del responsable en servidor; un parámetro de empleado del JSP no constituye autorización.
- Mantener resultados y escrituras pendientes cuando no exista contrato real verificado. Las operaciones ERP distintas del alta siguen sujetas a los límites de AGENTS.md.

## Pendientes concretos

- Confirmar exposición y permisos de `mss_g3/smco_g3_p30_list.jsp` en el menú Meta4 efectivo: **P01/P03**.
- Confirmar catálogos, reglas internas, retorno de métodos y persistencia real identificados en las tablas: **P02/P04**.
- Verificar estados y disposición en ejecución; esta ficha registra fuente, no una revisión del portal real: **P05**.
- Resolver cada dependencia ausente o construida dinámicamente antes de implementar su flujo: **P06**.

[Registro de pendientes](../../implementacion/pendientes.md).
